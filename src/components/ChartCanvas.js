import React, { useEffect } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const renderLineChart = (chartData) => {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="group_age_10" stroke="#FF5A28" />
        <Line type="monotone" dataKey="group_age_20" stroke="#FFBF00" />
        <Line type="monotone" dataKey="group_age_30" stroke="#1E6609" />
        <Line type="monotone" dataKey="group_age_40" stroke="#3366FF" />
        <Line type="monotone" dataKey="group_age_50" stroke="#1939B7" />
        <Line type="monotone" dataKey="group_age_60" stroke="#930F0C" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const ChartCanvas = ({ data }) => {
  const org_Data = [];

  useEffect(() => {
    const test = data.map((data, key) => {
      return data.period;
    });
    const setTest = Array.from(new Set(test));

    setTest.forEach((value, key) => {
      org_Data[key] = { period: value };
    });

    data.forEach((data, key) => {
      org_Data.forEach((org, key) => {
        if (data.period === org.period) {
          org_Data[key][`group_age_${data.group}`] = data.ratio;
        }
      });
    });
  });

  return renderLineChart(org_Data);
};

export default ChartCanvas;
