"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  trend?: string;
  positive?: boolean;
}

export default function AccountStatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
  trend,
  positive = true,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-5">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>

        <div className="flex-1">
          <p className="text-gray-500">{title}</p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight">{value}</h2>

          <div className="mt-2 flex items-center gap-3">
            <p className="text-gray-500">{subtitle}</p>

            {trend && (
              <span
                className={`font-semibold ${
                  positive ? "text-green-600" : "text-red-500"
                }`}
              >
                {trend}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
