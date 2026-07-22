"use client";

import { MoreVertical } from "lucide-react";
import StatusBadge from "@/app/dashboard/accounts/statusbadge";

interface Props {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  type: string;
  accountNumber: string;
  balance: string;
  status: "Active" | "Inactive";
  primary?: boolean;
}

export default function AccountItem({
  icon,
  iconBg,
  title,
  type,
  accountNumber,
  balance,
  status,
  primary = false,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-gray-100 px-6 py-6 transition-all hover:bg-gray-50 md:grid-cols-[2fr_1fr_auto_auto] md:items-center">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          {icon}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

            {primary && (
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                Primary
              </span>
            )}
          </div>

          <p className="mt-1 text-gray-500">
            {type} • {accountNumber}
          </p>
        </div>
      </div>

      {/* Balance */}
      <div>
        <h3 className="text-2xl font-bold">{balance}</h3>

        <p className="text-gray-500 mt-1">Available</p>
      </div>

      {/* Status */}
      <StatusBadge status={status} />

      {/* Menu */}
      <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
        <MoreVertical size={20} />
      </button>
    </div>
  );
}
