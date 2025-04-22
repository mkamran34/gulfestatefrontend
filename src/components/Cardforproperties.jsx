import React from "react";
import { Link } from "react-router-dom";

const Cardforproperties = ({ img, heading, link }) => {
  return (
    <div  className="block overflow-hidden group">
      <div className="relative">
        <img
          src={img}
          alt="Propertiesimg"
          className="mx-auto oject-cover transition-all duration-300 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>

        <div className="lg:text-4xl text-2xl uppercase text-left left-5 text-white tracking-wider absolute top-[12%] z-10 font-bebas transition-all duration-300 ease-in-out group-hover:translate-x-2">
          {heading}
        </div>

        <span className="absolute top-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </div>
    </div>
  );
};

export default Cardforproperties;
