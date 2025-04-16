"use client";
import React from "react";

//imports--
import QuestionBox from "./components/QuestionBox";
import Statistics from "./components/Statistics";
import ProgressBox from "./components/ProgressBox";
import LineChart from "./components/LineChart";
import Popup from "./components/Popup";
import PieChartComp from "./components/PieChart";


function page() {
  const [data, setData] = React.useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });
  const [data2, setData2] = React.useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });
  const [isPopup, setIsPopup] = React.useState(false);
  const [error, setError] = React.useState({
    rankError: false,
    percentileError: false,
    scoreError: false,
  });

  return (
    <div className="pl-8 pt-6 pr-4 flex-1">
      <p className="text-[rgb(145_150_154)] mb-5"> Skill Test</p>
      <div className="flex flex-col gap-3 xl:flex-row">
        <div className="w-[100%] xl:w-[60%]">
          <QuestionBox setIsPopup={setIsPopup} />
          <Statistics data={data2} />
          <LineChart percentile={data2.percentile} />
        </div>
        <div className="w-[100%] xl:w-[40%]">
          <ProgressBox />

          <PieChartComp score={data2.score} />
        </div>
      </div>
      {isPopup && (
        <Popup
          setIsPopup={setIsPopup}
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          setData2={setData2}
        />
      )}
    </div>
  );
}

export default page;
