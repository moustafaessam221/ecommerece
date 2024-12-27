import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CarouselControls({ onPrevious, onNext }) {
  return (
    <>
      {/* <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button> */}
    </>
  );
}
