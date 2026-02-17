import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Smartphone } from 'lucide-react';
import { slides } from './slides';
import { PresenterView } from './PresenterView';
import { useSlideSync } from './useSlideSync';

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

function usePresenterMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get('presenter') === '1';
}

function PresentationView({ currentSlide, setCurrentSlide }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const slide = slides[currentSlide];
  const Icon = slide?.icon;

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f' || e.key === 'F') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          toggleFullscreen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullscreen]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen min-w-0 w-full bg-slate-900 p-2 sm:p-4 md:p-6 lg:p-8 font-sans selection:bg-blue-200"
    >
      {/* Slide Container */}
      <div
        className={`${slide.color} rounded-xl sm:rounded-2xl shadow-2xl flex flex-col relative overflow-hidden transition-all duration-500 border-2 sm:border-4 border-white/20`}
        style={{
          width: 'min(95vw, 1600px, calc(85vh * 16 / 9))',
          height: 'min(85vh, calc(95vw * 9 / 16))',
          minHeight: '400px',
          padding: 'clamp(1rem, 3vw, 3rem)'
        }}
      >
        <div className="absolute top-0 right-0 w-[min(12rem,30vw)] h-[min(12rem,30vw)] opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4 [&>svg]:w-full [&>svg]:h-full">
          <Icon className="w-full h-full text-slate-600" />
        </div>

        <div className="flex items-start justify-between flex-shrink-0" style={{ marginBottom: 'clamp(1rem, 3vh, 2rem)' }}>
          <div className="min-w-0 flex-1">
            <span className="text-[clamp(0.65rem,1.5vw,0.75rem)] font-bold tracking-widest text-slate-500 uppercase mb-1 block">
              Slide {currentSlide + 1} / {slides.length}
            </span>
            <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-black text-slate-900 leading-tight">
              {slide.title}
            </h1>
            <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] font-semibold text-slate-600 mt-1 sm:mt-2">
              {slide.subtitle}
            </h2>
          </div>
          <div className="hidden sm:block flex-shrink-0 ml-4 [&>svg]:w-full [&>svg]:h-full" style={{ width: 'clamp(2.5rem, 6vw, 4rem)', height: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <Icon className="w-full h-full text-slate-600" />
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-auto">
          <p className="text-[clamp(0.9rem,2vw,1.25rem)] text-slate-700 leading-relaxed mb-4 sm:mb-6">
            {slide.content}
          </p>
          {slide.list && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {slide.list.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 bg-white/50 p-2 sm:p-3 rounded-lg border border-slate-200">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-400 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-[clamp(0.8rem,1.5vw,1rem)]">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between flex-shrink-0 gap-2 sm:gap-4" style={{ marginTop: 'clamp(1rem, 3vh, 2rem)' }}>
          <div className="flex space-x-2 flex-shrink-0">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-sm transition-all [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-sm transition-all [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6"
            >
              <ChevronRight />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 sm:p-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-sm transition-all [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6"
              title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 /> : <Maximize2 />}
            </button>
          </div>

          <div className="flex-1 mx-2 sm:mx-6 min-w-0 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-800 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>

          <div className="hidden sm:block text-slate-500 text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium flex-shrink-0">
            AI Strategy Deck 2026
          </div>
        </div>
      </div>

      {/* Connect mobile prompt - hidden in fullscreen */}
      {!isFullscreen && (
        <>
          <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-md">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span className="font-medium">Connect mobile as presenter</span>
            </div>
            <p className="text-slate-400 text-xs mb-2">
              Open this URL on your phone to control slides:
            </p>
            <code className="block p-2 bg-slate-900 rounded text-emerald-400 text-xs break-all">
              {window.location.href}
            </code>
          </div>

          <p className="text-slate-400 mt-4 sm:mt-6 text-[clamp(0.75rem,1.5vw,0.875rem)] flex items-center justify-center flex-wrap gap-2">
            <kbd className="px-2 py-1 bg-slate-800 rounded text-xs">← →</kbd>
            <span>navigate</span>
            <kbd className="px-2 py-1 bg-slate-800 rounded text-xs">F</kbd>
            <span>fullscreen</span>
          </p>
        </>
      )}
    </div>
  );
}

export default function App() {
  const isMobile = useIsMobile();
  const isPresenterMode = usePresenterMode();
  const { currentSlide, setCurrentSlide } = useSlideSync(slides.length);

  // Presenter view: mobile only, or when ?presenter=1 (for desktop testing)
  if (isMobile || isPresenterMode) {
    return <PresenterView currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />;
  }

  return <PresentationView currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />;
}
