import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", focus: 3.5, energy: 7.2 },
  { day: "Tue", focus: 4.0, energy: 8.0 },
  { day: "Wed", focus: 3.8, energy: 7.5 },
  { day: "Thu", focus: 4.5, energy: 8.3 },
  { day: "Fri", focus: 3.9, energy: 7.8 },
  { day: "Sat", focus: 2.5, energy: 6.1 },
  { day: "Sun", focus: 3.0, energy: 6.9 },
];

export default function ProductivityChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            Focus & Energy Trend
          </h3>
          <p className="text-sm text-gray-500">Last 7 Days</p>
        </div>
        <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {/* Grafico Reale */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="focus"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Focus"
            />
            <Line
              type="monotone"
              dataKey="energy"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Energy"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
