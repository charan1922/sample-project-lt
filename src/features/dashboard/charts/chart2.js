import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data2 = [
  { name: "Credit Card", submitted: 4000, processed: 2400 },
  { name: "Business Loan", submitted: 2000, processed: 4800 },
  { name: "Personal Loan", submitted: 3000, processed: 1398 },
  { name: "Insurance", submitted: 2780, processed: 3908 },
];

function Chart2() {
  return (
    <ResponsiveContainer>
      <BarChart
        data={data2}
        margin={{ top: 30, bottom: 30, left: 15, right: 15 }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="processed" fill="#feb2b2" />
        <Bar dataKey="submitted" fill="#fbd38d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart2;
