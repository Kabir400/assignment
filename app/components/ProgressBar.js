import React from "react";

const ProgressBar = ({ percentage = 0, color = "#4ade80" }) => {
  return (
    <div className="w-[70%] h-[10px] bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-300 ease-in-out"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
