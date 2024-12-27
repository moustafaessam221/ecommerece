import React from "react";

export function ImageGallery({ images, selectedImage, onImageSelect }) {
  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images?.map((image, index) => (
          <button
            key={image}
            onClick={() => onImageSelect(index)}
            className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
              selectedImage === index ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <div className="w-full h-[500px] rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={images?.[selectedImage]}
            alt="Selected product view"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
