import React from "react";

//imports
import ProgressBar from "./ProgressBar";

function ProgressBox() {
  return (
    <div className="p-6 rounded-lg border-2 w-[100%] flex flex-col gap-[25px]">
      <h2 className="font-[600]">Syllabus Wise Analysis</h2>
      {/* bar-1 */}
      <div className="flex flex-col gap-2">
        <p className="text-[#40434E]">HTML Tools,Forms,History</p>
        <div className="flex gap-2 justify-between items-center">
          <ProgressBar percentage={70} color="#3A7DF4" />
          <p className="font-bold text-[#3A7DF4]">70%</p>
        </div>
      </div>
      {/* bar-2 */}
      <div className="flex flex-col gap-2">
        <p className="text-[#40434E]">Tags & References in HTML</p>
        <div className="flex gap-2 justify-between items-center">
          <ProgressBar percentage={60} color="#FF8339" />
          <p className="font-bold text-[#FF8339]">60%</p>
        </div>
      </div>
      {/* bar-3 */}
      <div className="flex flex-col gap-2">
        <p className="text-[#40434E]">Tables & References in HTML</p>
        <div className="flex gap-2 justify-between items-center">
          <ProgressBar percentage={24} color="#FA5352" />
          <p className="font-bold text-[#FA5352]">24%</p>
        </div>
      </div>
      {/* bar-4 */}
      <div className="flex flex-col gap-2">
        <p className="text-[#40434E]">Tables & References in HTML</p>
        <div className="flex gap-2 justify-between items-center">
          <ProgressBar percentage={96} color="#28C064" />
          <p className="font-bold text-[#28C064]">96%</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBox;
