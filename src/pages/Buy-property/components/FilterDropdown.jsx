import React from 'react';

export const FilterDropdown = ({ options, value, onChange, label }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-[#024959]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#F2762E] focus:border-[#F2762E] block w-full p-2.5"
      >
        {options.map((option) => (
          <option key={typeof option === 'object' ? option.value : option} value={typeof option === 'object' ? option.value : option}>
            {typeof option === 'object' ? option.label : (option === '' ? 'Any' : option)}
          </option>
        ))}
      </select>
    </div>
  );
};