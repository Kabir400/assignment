import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { PiTargetBold } from "react-icons/pi";

function PieChartComp({ score }) {
  // Ensure score is within valid range
  const validScore = Math.min(Math.max(0, score), 15);

  // Calculate remaining
  const remaining = 15 - validScore;

  // Data for pie chart with unique keys
  const data = [
    { name: "Score", value: validScore, key: "score-segment" },
    { name: "Remaining", value: remaining, key: "remaining-segment" },
  ];

  // Colors for the pie segments
  const COLORS = ["#3A7DF4", "#EAF2FE"];

  // Calculate percentage for display
  const percentage = Math.round((validScore / 15) * 100);

  return (
    <div>
      <div className="border-2 w-full p-5 rounded-lg mt-6">
        <div className="flex justify-between">
          <h2 className="font-bold mb-3">Question Analysis</h2>
          <p className="text-[#3B50BC]">{score}/15</p>
        </div>
        <p className="mb-5 text-sm">
          <span className="font-semibold">
            You scored {validScore} question{validScore !== 1 ? "s" : ""}{" "}
            correct out of 15.
          </span>{" "}
          {validScore < 15
            ? "However it still needs some improvements"
            : "Great job!"}
        </p>

        <div className="w-48 h-48 relative mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                animationDuration={500}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.key} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center target icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <PiTargetBold
              size={30}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#B62C25]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChartComp;
