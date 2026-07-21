"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const traffic = [
  { month: "Jan", inflow: 20, outflow: 10 },
  { month: "Feb", inflow: 30, outflow: 15 },
  { month: "Mar", inflow: 35, outflow: 18 },
  { month: "Apr", inflow: 28, outflow: 20 },
  { month: "May", inflow: 42, outflow: 25 },
  { month: "Jun", inflow: 48, outflow: 30 },
  { month: "Jul", inflow: 52, outflow: 34 },
  { month: "Aug", inflow: 46, outflow: 26 },
  { month: "Sep", inflow: 58, outflow: 42 },
  { month: "Oct", inflow: 62, outflow: 50 },
  { month: "Nov", inflow: 70, outflow: 55 },
  { month: "Dec", inflow: 54, outflow: 38 },
];

export default function TrafficChart() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-lg font-semibold mb-6">Traffic Source</h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={traffic}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <Tooltip />

          <Line type="monotone" dataKey="inflow" />

          <Line type="monotone" dataKey="outflow" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
