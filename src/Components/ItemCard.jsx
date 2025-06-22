import { useState } from "react";

export default function ItemCard({ item, onClick }) {
  const allPhotos = [item.photo, ...(item.additionalPhotos || [])];
  const [selectedPhoto, setSelectedPhoto] = useState(item.photo);

  return (
    <div
      className="h-[100%] max-w-xs rounded-2xl shadow-md overflow-hidden bg-white border border-gray-200"
      onClick={onClick}
    >
      <img
        loading="lazy"
        className="w-full h-64 object-cover rounded"
        src={`http://localhost:5000/uploads/${selectedPhoto}`}
        alt={item.name}
      />

      {/* Thumbnails: main photo + additional photos */}
      <div className="flex mt-3 space-x-2 overflow-x-auto">
        {allPhotos.map((photo, index) => (
          <img
            key={index}
            src={`http://localhost:5000/uploads/${photo}`}
            alt={`Photo ${index + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
              selectedPhoto === photo ? "border-blue-600" : "border-transparent"
            }`}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>
      <div className="p-4 flex flex-col item-start">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          {item.itemName}
        </h2>{" "}
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2 w-fit">
          {item.itemType}
        </span>
      </div>
    </div>
  );
}
