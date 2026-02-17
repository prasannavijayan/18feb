import React from 'react';
import { ChevronLeft, ChevronRight, Smartphone, RotateCcw } from 'lucide-react';
import { slides } from './slides';

export function PresenterView({ currentSlide, setCurrentSlide }) {
  const slide = slides[currentSlide];
  const nextSlide = slides[currentSlide + 1];
  const Icon = slide?.icon;

  const goNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const restartDeck = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm">Presenter View</span>
          <span className="text-slate-400 text-xs ml-auto">
            Slide {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col sm:flex-row min-h-0 p-4 gap-4 overflow-auto">
        {/* Current slide preview */}
        <section className="flex-shrink-0 w-full sm:w-1/2 lg:w-2/5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Current
          </h3>
          <div
            className={`${slide.color} rounded-xl p-4 border-2 border-slate-600 overflow-auto`}
            style={{ minHeight: '180px' }}
          >
            <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{slide.title}</h4>
            <p className="text-slate-600 text-xs mt-1 line-clamp-2">{slide.subtitle}</p>
            <p className="text-slate-700 text-xs mt-2 line-clamp-3">{slide.content}</p>
          </div>
        </section>

        {/* Next slide preview */}
        <section className="flex-shrink-0 w-full sm:w-1/2 lg:w-2/5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Next
          </h3>
          {nextSlide ? (
            <div
              className={`${nextSlide.color} rounded-xl p-4 border-2 border-slate-600 opacity-90 overflow-auto`}
              style={{ minHeight: '180px' }}
            >
              <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{nextSlide.title}</h4>
              <p className="text-slate-600 text-xs mt-1 line-clamp-2">{nextSlide.subtitle}</p>
            </div>
          ) : (
            <div className="rounded-xl p-4 border-2 border-dashed border-slate-600 bg-slate-800/50 min-h-[180px] flex flex-col items-center justify-center gap-2">
              <span className="text-slate-500 text-sm">End of deck</span>
              <span className="text-slate-600 text-xs">Use Restart to begin again</span>
            </div>
          )}
        </section>
      </div>

      {/* Slide list - scrollable */}
      <section className="flex-shrink-0 px-4 pb-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          All Slides
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-thin">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`flex-shrink-0 w-16 h-12 rounded-lg border-2 transition-all ${
                i === currentSlide
                  ? 'border-emerald-400 bg-emerald-500/20'
                  : 'border-slate-600 bg-slate-800 hover:border-slate-500'
              }`}
            >
              <span className="text-xs font-medium text-white">{i + 1}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Navigation footer */}
      <footer className="flex-shrink-0 px-4 py-4 bg-slate-800 border-t border-slate-700">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="p-4 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-slate-400 text-sm font-medium min-w-[4rem] text-center">
            {currentSlide + 1} / {slides.length}
          </span>
          {slide?.isThankYou ? (
            <button
              onClick={restartDeck}
              className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95"
              title="Restart"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={goNext}
              className="p-4 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
