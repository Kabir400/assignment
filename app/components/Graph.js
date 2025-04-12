"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Dot,
  ReferenceLine,
} from "recharts";

const myData = [
  { percentile: 5, count: 1 },
  { percentile: 15, count: 2 },
  { percentile: 25, count: 3 },
  { percentile: 30, count: 3 }, // your percentile
  { percentile: 35, count: 4 },
  { percentile: 45, count: 5 },
  { percentile: 50, count: 6 },
  { percentile: 55, count: 5 },
  { percentile: 60, count: 4 },
  { percentile: 70, count: 2 },
  { percentile: 75, count: 1 },
  { percentile: 90, count: 4 }, // special point
  { percentile: 95, count: 2 },
];

const CustomDot = (props) => {
  const { cx, cy, payload, yourPercentile } = props;
  if (payload.percentile === 90) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="blue"
        stroke="white"
        strokeWidth={2}
      />
    );
  }
  if (payload.percentile === yourPercentile) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="purple"
        stroke="white"
        strokeWidth={2}
      />
    );
  }
  return <Dot {...props} r={3} />;
};

const CustomTooltip = ({ active, payload, yourPercentile }) => {
  if (active && payload?.length) {
    const p = payload[0].payload;
    if (p.percentile === 90 || p.percentile === yourPercentile) {
      return (
        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <p>
            <strong>{p.percentile}%</strong>
          </p>
          <p style={{ color: p.percentile === 90 ? "blue" : "purple" }}>
            numberOfStudent : {p.count}
          </p>
        </div>
      );
    }
  }
  return null;
};

const ComparisonGraph = ({ yourPercentile }) => {
  const [data, setData] = useState(myData);

  useEffect(() => {
    // Always start fresh from the original data
    const freshData = [...myData];

    const index = freshData.findIndex(
      (item) => item.percentile === yourPercentile
    );

    if (index === -1) {
      freshData.push({ percentile: yourPercentile, count: 1 });
    } else {
      freshData[index] = {
        ...freshData[index],
        count: freshData[index].count + 1,
      };
    }

    setData(freshData);
  }, [yourPercentile]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="percentile" />
          <YAxis hide />
          <Tooltip
            content={<CustomTooltip yourPercentile={yourPercentile} />}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            dot={<CustomDot yourPercentile={yourPercentile} />}
          />
          <ReferenceLine
            x={yourPercentile}
            stroke="blue"
            strokeDasharray="3 3"
            label={{
              value: "Your Percentile",
              position: "top",
              fill: "blue",
              fontSize: 12,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
