import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


function Questions({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-stretch lg:max-w-5xl mx-auto bg-[#024959]/15 rounded-md shadow-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex-1 font-regular text-lg lg:text-2xl p-4">
          {question}
        </h1>
        <button
          className="text-4xl transition-transform transform-gpu hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>
      </div>
      
      <div
        className={`font-regular lg:px-4 lg:text-xl text-black transition-all max-h-0 opacity-0 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : ''}`}
        style={{ transitionDuration: '0.5s', transitionTimingFunction: 'ease-in-out' }}
      >
        <div className="flex justify-between py-4">
          <p className="flex-1">{answer}</p>
         
        </div>
      </div>
    </div>
  );
}

export default Questions;
