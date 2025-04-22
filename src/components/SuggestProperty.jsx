import React from "react";
import { FaBath } from "react-icons/fa";
import { PiBed } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { TbRulerMeasure } from "react-icons/tb";
import { Link } from "react-router-dom";

const SuggestProperty = ({ property }) => {
  const {
    photo,
    title_en,
    city,
    community,
    bedroom,
    bathroom,
    size,
    price,
    offering_type,
    reference_number,
  } = property;
  const imageUrl = photo[0].url[0]._;
  const location = `${community[0]}, ${city[0]}`;
  const formattedPrice = parseInt(price[0]).toLocaleString();
  const priceLabel = offering_type[0] === "RS" ? "AED" : "AED per year";
  return (
    <Link to={`/property/${reference_number[0]}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={imageUrl}
          alt={title_en[0]}
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <h3 className="text-lg font-semibold mb-1 text-[#024959] truncate">
            {title_en[0]}
          </h3>
          <p className="text-sm text-gray-600 mb-1 flex items-center">
            <SlLocationPin className="mr-1" /> {location}
          </p>
          <div className="flex justify-between text-xs text-gray-700 mb-1">
            <span className="flex items-center">
              <PiBed className="mr-1" /> {bedroom[0]}
            </span>
            <span className="flex items-center">
              <FaBath className="mr-1" /> {bathroom[0]}
            </span>
            <span className="flex items-center">
              <TbRulerMeasure className="mr-1" /> {size[0]} sq.ft
            </span>
          </div>
          <p className="text-sm font-bold text-[#F2762E]">
            {formattedPrice} {priceLabel}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SuggestProperty;
