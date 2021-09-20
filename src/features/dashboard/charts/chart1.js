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

const data1 = [
  { name: "Q1", submitted: 4000, processed: 2400 },
  { name: "Q2", submitted: 3000, processed: 1398 },
  { name: "Q3", submitted: 2000, processed: 12000 },
];


function Chart1() {

  return (
      <ResponsiveContainer>
        <BarChart 
          data={data1}
          margin={{ top: 30, bottom: 30, left: 15, right: 15 }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar barSize={15} dataKey="processed" fill="#ffc107" />
            <Bar barSize={15} dataKey="submitted" fill="#8bc34a" />
        </BarChart>
      </ResponsiveContainer>
  );
}

export default Chart1;
