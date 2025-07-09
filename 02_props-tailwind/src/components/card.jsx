import React from "react";

function Card({ title, description, imgSrc }) {
  return (
    <>
      <div className="m-5 w-96 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        <div>
          <img src={imgSrc} alt="Shoes" className="w-full h-60 object-cover" />
        </div>
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
