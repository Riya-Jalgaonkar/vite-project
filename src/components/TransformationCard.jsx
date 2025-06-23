import React from "react";

export default function TransformationCard({ image, name, message }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-sm">
        <img
          src={image}
          alt={`${name}'s transformation`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-green-700">{name}</h3>
      <p className="text-sm text-gray-700 italic max-w-xs">“{message}”</p>
    </div>
  );
}
