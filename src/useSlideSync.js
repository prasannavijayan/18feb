import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from './supabase';

const CHANNEL_NAME = 'presentation-slide-sync';
const STORAGE_KEY = 'presentation-current-slide';

function getRoomId() {
  const params = new URLSearchParams(window.location.search);
  let roomId = params.get('room');
  if (!roomId) {
    roomId = Math.random().toString(36).slice(2, 10);
    const url = new URL(window.location.href);
    url.searchParams.set('room', roomId);
    window.history.replaceState({}, '', url.toString());
  }
  return roomId;
}

export function useSlideSync(totalSlides, initialSlide = 0) {
  const roomId = getRoomId();
  const storageKey = `${STORAGE_KEY}-${roomId}`;
  const channelRef = useRef(null);

  const [currentSlide, setCurrentSlideState] = useState(() => {
    try {
      const stored = sessionStorage.getItem(storageKey);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < totalSlides) {
          return parsed;
        }
      }
    } catch (_) {}
    return initialSlide;
  });

  const setCurrentSlide = useCallback(
    (updater) => {
      setCurrentSlideState((prev) => {
        const next = typeof updater === 'function' ? updater(prev) : updater;
        const slide = Math.max(0, Math.min(totalSlides - 1, next));

        try {
          sessionStorage.setItem(storageKey, String(slide));
        } catch (_) {}

        // BroadcastChannel: same-device sync (e.g. two tabs)
        try {
          const bc = new BroadcastChannel(CHANNEL_NAME);
          bc.postMessage({ roomId, slide });
          bc.close();
        } catch (_) {}

        // Supabase: cross-device sync (mobile ↔ desktop)
        if (supabase && channelRef.current) {
          channelRef.current.send({
            type: 'broadcast',
            event: 'slide',
            payload: { roomId, slide },
          });
        }

        return slide;
      });
    },
    [totalSlides, storageKey, roomId]
  );

  // BroadcastChannel listener (same device)
  useEffect(() => {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = (e) => {
      if (e.data?.roomId === roomId && typeof e.data?.slide === 'number') {
        setCurrentSlideState((prev) => {
          if (prev !== e.data.slide) {
            return Math.max(0, Math.min(totalSlides - 1, e.data.slide));
          }
          return prev;
        });
      }
    };
    return () => channel.close();
  }, [roomId, totalSlides]);

  // Storage listener (same device, different tabs)
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === storageKey && e.newValue !== null) {
        const slide = parseInt(e.newValue, 10);
        if (!isNaN(slide) && slide >= 0 && slide < totalSlides) {
          setCurrentSlideState(slide);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [storageKey, totalSlides]);

  // Supabase Realtime: cross-device sync
  useEffect(() => {
    if (!supabase) return;

    const channelName = `presentation:${roomId}`;
    const channel = supabase.channel(channelName, {
      config: { broadcast: { self: false } }, // Don't echo back to sender
    });

    channel
      .on('broadcast', { event: 'slide' }, (payload) => {
        const { roomId: msgRoomId, slide } = payload.payload || {};
        if (msgRoomId === roomId && typeof slide === 'number') {
          setCurrentSlideState((prev) => {
            if (prev !== slide) {
              try {
                sessionStorage.setItem(storageKey, String(slide));
              } catch (_) {}
              return Math.max(0, Math.min(totalSlides - 1, slide));
            }
            return prev;
          });
        }
      })
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          channelRef.current = channel;
        }
      });

    return () => {
      channelRef.current = null;
      supabase.removeChannel(channel);
    };
  }, [roomId, totalSlides, storageKey]);

  return { currentSlide, setCurrentSlide, roomId };
}
