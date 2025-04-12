import React from "react";

//icons-
import { FaHtml5 } from "react-icons/fa";

function QuestionBox({ setIsPopup }) {
  return (
    <div className="p-4 rounded-lg border-2 w-[100%] flex gap-[21px]">
      <div>
        <p className="font-extrabold text-[10px] text-center">HTML</p>
        <FaHtml5 className="text-orange-600 bg-white " size={50} />
      </div>
      <div className="flex gap-1 flex-1 ">
        <div className="w-[90%] self-center">
          <h3 className="font-[600] mb-[3px] text-[14px] md:text-base">
            Hyper Text Markup Language
          </h3>
          <p className="text-[12px] md:text-base">
            Questions:08 | Duration:15 mins | Submitted On 5 June 2021
          </p>
        </div>
        <button
          className="bg-[#132277] text-white self-center pt-[7px] pb-[7px] pr-[17px] pl-[17px] font-[500] rounded-md"
          onClick={() => setIsPopup(true)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;
