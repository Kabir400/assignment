import React from "react";

//imports-
import Graph from "./Graph";

//icons
import { VscGraphLine } from "react-icons/vsc";

function LineChart({ percentile }) {
  return (
    <div className="p-5 rounded-lg border-2 w-[100%] mt-[20px] relative">
      <h2 className="font-bold mb-[15px]">Comparison Graph</h2>
      <p className="mb-[10px] w-[90%]">
        <span className="font-[600]">You scored {percentile}% percentile</span>{" "}
        which is
        {percentile < 72
          ? " lower than "
          : percentile > 72
          ? " higher than "
          : " same as "}{" "}
        the average 72% of all the engineers who took this assessment
      </p>
      <Graph yourPercentile={percentile} />

      <div className="bg-[#F4F6F8] p-3 flex justify-center items-center rounded-[50%] w-[50px] h-[50px] absolute top-[34px] right-[21px]">
        <VscGraphLine size={20} className="text-[#A22C2C]" />
      </div>
    </div>
  );
}

export default LineChart;
