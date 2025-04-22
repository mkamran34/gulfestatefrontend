import React from "react";

const HeadingCapsule = ({text}) => {
  return (
    <button className=" text-[#F2762E] py-3 px-10 text-lg rounded-full bg-[#FFEFE6] hover:bg-opacity-90 transition-all duration-300  font-medium my-6">
      {text}
    </button>
  );
};

export default HeadingCapsule;
