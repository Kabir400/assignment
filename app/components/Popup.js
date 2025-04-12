import React from "react";

//icons
import { FaArrowRight } from "react-icons/fa";

function Popup({ setIsPopup, data, setData, error, setError, setData2 }) {
  return (
    <div
      className="fixed bg-black bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center top-0 left-0 "
      onClick={() => setIsPopup(false)}
    >
      {/* popup */}
      <div
        className="w-[600px]  p-4 bg-white rounded-lg flex flex-col gap-[30px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* heading */}
        <div className="flex justify-between mt-4">
          <h3 className="font-bold pl-[18px] text-[22px]">Update scores</h3>
        </div>
        {/* input-1 */}
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="rounded-[50%] bg-[#132275] text-white w-[22px] h-[22px] flex justify-center items-center">
              1
            </div>
            <p>
              Update your <span className="font-bold"> Rank</span>
            </p>
          </div>
          <div>
            <input
              type="number"
              className={`border-[1px] p-[5px] rounded-md text-black w-[166px] pl-2 ${
                error.rankError
                  ? "border-[#FF8180] mr-[25px]"
                  : "border-[#739EE7]"
              }`}
              placeholder="Rank"
              onChange={(e) => {
                setData({ ...data, rank: e.target.value });
                if (e.target.value < 0) {
                  setError({ ...error, rankError: true });
                } else {
                  setError({ ...error, rankError: false });
                }
              }}
              value={data.rank}
            />
            {error.rankError && (
              <p className="text-[#FF8180] font-[600] text-[11px]">
                required I should be number {"<0"}
              </p>
            )}
          </div>
        </div>
        {/* input-2 */}
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="rounded-[50%] bg-[#132275] text-white w-[22px] h-[22px] flex justify-center items-center">
              2
            </div>
            <p>
              Update your <span className="font-bold"> Percentile</span>
            </p>
          </div>
          <div>
            <input
              type="number"
              className={`border-[1px] p-[5px] rounded-md text-black w-[166px] pl-2 ${
                error.percentileError
                  ? "border-[#FF8180] mr-[25px]"
                  : "border-[#739EE7]"
              }`}
              placeholder="Percentile"
              onChange={(e) => {
                setData({ ...data, percentile: e.target.value });
                if (e.target.value < 0 || e.target.value > 100) {
                  setError({ ...error, percentileError: true });
                } else {
                  setError({ ...error, percentileError: false });
                }
              }}
              value={data.percentile}
            />
            {error.percentileError && (
              <p className="text-[#FF8180] font-[600] text-[11px]">
                required I should be number 0-100
              </p>
            )}
          </div>
        </div>
        {/* input-3 */}
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="rounded-[50%] bg-[#132275] text-white w-[22px] h-[22px] flex justify-center items-center">
              3
            </div>
            <p>
              Update your{" "}
              <span className="font-bold"> Current Score (out of 15)</span>
            </p>
          </div>
          <div>
            <input
              type="number"
              className={`border-[1px] p-[5px] rounded-md text-black w-[166px] pl-2 ${
                error.scoreError
                  ? "border-[#FF8180] mr-[25px]"
                  : "border-[#739EE7]"
              }`}
              placeholder="Current Score"
              onChange={(e) => {
                setData({ ...data, score: e.target.value });
                if (e.target.value < 0 || e.target.value > 15) {
                  setError({ ...error, scoreError: true });
                } else {
                  setError({ ...error, scoreError: false });
                }
              }}
              value={data.score}
            />
            {error.scoreError && (
              <p className="text-[#FF8180] font-[600] text-[11px]">
                required I should be number 0-15
              </p>
            )}
          </div>
        </div>

        {/* buttons */}

        <div className="flex justify-end gap-4">
          <button
            className="border-[1px] border-black self-center pt-[5px] pb-[5px] pr-[10px] pl-[10px] font-[500] rounded-md"
            onClick={() => setIsPopup(false)}
          >
            Cancel
          </button>
          <button
            className="bg-[#132277] text-white self-center pt-[10px] pb-[10px] pr-[25px] pl-[25px] font-[500] rounded-md flex gap-[10px] items-center justify-center "
            onClick={() => {
              if (
                !error.rankError &&
                !error.percentileError &&
                !error.scoreError
              ) {
                setData2(data);
                setIsPopup(false);
              }
            }}
          >
            <p className="font-bold text-xs">Save</p>
            <FaArrowRight size={12} className="text-white font-[500]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
