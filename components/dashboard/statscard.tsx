interface Props {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function StatsCard({ title, value, change, positive }: Props) {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-gray-500 text-sm">{title}</p>

      <div className="flex justify-between items-center mt-3">
        <h2 className="text-3xl font-bold">{value}</h2>

        <span
          className={`font-semibold ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
