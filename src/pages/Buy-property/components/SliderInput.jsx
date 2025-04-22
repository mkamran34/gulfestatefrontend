import React from "react";

export const SliderInput = ({ min, max, step, value, onChange, label }) => {
  const percentage = ((value[1] - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-[#024959]">{label}</label>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #F2762E ${percentage}%, #E5E7EB ${percentage}%)`,
        }}
      />

      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600">
          {value[0].toLocaleString()} AED
        </span>
        <span className="text-sm text-gray-600">
          {value[1].toLocaleString()} AED
        </span>
      </div>
    </div>
  );
};
