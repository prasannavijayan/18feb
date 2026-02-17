import { useState, useEffect, useCallback } from 'react';

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

  const setCurrentSlide = useCallback((updater) => {
    setCurrentSlideState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      const slide = Math.max(0, Math.min(totalSlides - 1, next));
      try {
        sessionStorage.setItem(storageKey, String(slide));
        const channel = new BroadcastChannel(CHANNEL_NAME);
        channel.postMessage({ roomId, slide });
        channel.close();
      } catch (_) {}
      return slide;
    });
  }, [totalSlides, storageKey]);

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

  return { currentSlide, setCurrentSlide, roomId };
}
