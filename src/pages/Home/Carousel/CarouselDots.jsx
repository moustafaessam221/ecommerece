import React from "react";

export default function CarouselDots({ slides, currentSlide, onChange }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === currentSlide
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/75"
          }`}
        />
      ))}
    </div>
  );
}
