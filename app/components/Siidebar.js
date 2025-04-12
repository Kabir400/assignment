import React from "react";

//icons
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedall } from "react-icons/tfi";
import { SlDoc } from "react-icons/sl";

function Siidebar() {
  return (
    <div className="w-[236px] hidden md:block lg:w-[300px] border-r-2">
      <div className="pt-[60px]  flex flex-col gap-5">
        <div className="flex gap-4 items-center pt-[15px] pb-[15px] mr-[20px] pl-5 rounded-r-md">
          <FiBarChart2 size={20} />
          <h2 className="text-[18px] font-[600]">Dashboard</h2>
        </div>
        <div className="flex gap-4 items-center pt-[15px] pb-[15px] bg-[#F4F6F8] mr-[20px] pl-5 rounded-r-[30px]">
          <TfiMedall size={20} className="text-[#445DE6]" />
          <h2 className="text-[18px] font-[600] text-[#445DE6]">Skill Test</h2>
        </div>
        <div className="flex gap-4 items-center pt-[15px] pb-[15px] mr-[20px] pl-5 rounded-r-md">
          <SlDoc size={20} />
          <h2 className="text-[18px] font-[600]">Internship</h2>
        </div>
      </div>
    </div>
  );
}

export default Siidebar;
