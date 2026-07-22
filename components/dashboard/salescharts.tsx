"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", sales: 20 },
  { month: "Feb", sales: 40 },
  { month: "Mar", sales: 15 },
  { month: "Apr", sales: 35 },
  { month: "May", sales: 25 },
  { month: "Jun", sales: 18 },
  { month: "Jul", sales: 45 },
  { month: "Aug", sales: 30 },
  { month: "Sep", sales: 15 },
  { month: "Oct", sales: 40 },
  { month: "Nov", sales: 38 },
  { month: "Dec", sales: 28 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-6">Sales Performance</h3>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <Tooltip />
          <Bar dataKey="sales" fill="#155DFC" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
