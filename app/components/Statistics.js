import React from "react";

//icons
import { IoTrophySharp } from "react-icons/io5";
import { FiClipboard } from "react-icons/fi";

function Statistics({ data }) {
  return (
    <div className="border-2 w-[100%] p-5 rounded-lg mt-[20px]">
      <h2 className="font-bold mb-[10px]">Quick Statistics</h2>
      <div className="flex">
        {/* item-1 */}
        <div className="flex gap-[10px] border-r-2 pr-2 w-[33%] justify-center items-center ">
          <div className="bg-[#F4F6F8] p-3 flex justify-center items-center rounded-[50%] w-[50px] h-[50px]">
            <IoTrophySharp size={20} className="text-[#FCCB49]" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold">{data.rank}</p>
            <p className="text-[#A4A9B1] text-[12px]">YOUR RANK</p>
          </div>
        </div>

        {/* item-2 */}
        <div className="flex gap-[10px] border-r-2 pr-2 w-[33%] justify-center items-center ">
          <div className="bg-[#F4F6F8] p-3 flex justify-center items-center rounded-[50%] w-[50px] h-[50px]">
            <FiClipboard size={20} className="text-[#C3C3C1]" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold">{data.percentile}%</p>
            <p className="text-[#A4A9B1] text-[12px]">PERCENTILE</p>
          </div>
        </div>
        {/* item-3 */}
        <div className="flex gap-[10px]  pr-2 w-[33%] justify-center items-center ">
          <div className="bg-[#F4F6F8] p-3 flex justify-center items-center rounded-[50%] w-[50px] h-[50px]">
            ✅
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold">{data.score}/15</p>
            <p className="text-[#A4A9B1] text-[12px]">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
