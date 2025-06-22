import { useState } from "react";
import Button from "./Button";

export default function Modal({ item, onClose }) {
  const photos = [item.photo, ...(item.additionalPhotos || [])];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="relative bg-blue-100 rounded-lg max-w-2xl w-full p-6 shadow-lg border border-blue-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-blue-900 font-bold text-xl hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>

        {/* Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-800 font-bold text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-blue-200 transition"
            >
              {"⬅️"}
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-800 font-bold text-2xl w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-blue-200 transition"
            >
              {"➡️"}
            </button>
          </>
        )}

        {/* Image */}
        <img
          src={`http://localhost:5000/uploads/${photos[currentIndex]}`}
          alt={`Product Image ${currentIndex + 1}`}
          className="w-full h-[60vh] object-contain rounded-md shadow mb-4"
        />

        {/* Info */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">
          {item.itemName}
        </h2>
        <p className="text-blue-800 mb-4">{item.itemDesc}</p>
        <Button className={"w-full"}>Enquire</Button>
      </div>
    </div>
  );
}
