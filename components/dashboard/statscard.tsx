import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

import { Wallet, CreditCard, Users, UserPlus } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-gray-500 text-[13px]">{title}</p>

      <div className="flex items-center justify-between gap-4 mt-3">
        <h2 className="text-3xl font-bold">{value}</h2>

        {/* <span
          className={`font-semibold ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span> */}
        <div
          className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-semibold ${
            positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}
        >
          {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}

          {change}
        </div>
      </div>
    </div>
  );
}
