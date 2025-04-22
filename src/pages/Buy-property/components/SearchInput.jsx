import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#F2762E] focus:border-[#F2762E]"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
};