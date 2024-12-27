import React from "react";

export default function CarouselSlide({ slide, isActive }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-10 ">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              {slide.description}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              {slide.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
