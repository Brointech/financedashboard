"use client";

import {
  Wallet,
  ArrowRightLeft,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import AccountStatCard from "@/app/dashboard/accounts/accountstatscard";

export default function AccountStats() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <AccountStatCard
        title="Total Balance"
        value="₦2,450,000.00"
        subtitle="Nigerian Naira"
        icon={Wallet}
        iconBg="bg-violet-100"
        iconColor="text-violet-600"
      />

      <AccountStatCard
        title="Total Accounts"
        value="4"
        subtitle="Active accounts"
        icon={ArrowRightLeft}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <AccountStatCard
        title="Total Collections"
        value="₦1,250,000.00"
        subtitle="This month"
        trend="↑ 12.5%"
        positive
        icon={ChartNoAxesColumnIncreasing}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
      />
    </div>
  );
}
