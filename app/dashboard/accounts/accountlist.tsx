"use client";

import { Landmark, DollarSign, Euro } from "lucide-react";

import AccountItem from "@/app/dashboard/accounts/accountitem";
// import AccountFilters from "@/app/dashboard/accounts/accountfilters";

export default function AccountList() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white ">
      {/* Header */}

      <div className="flex flex-col gap-4 border-b border-gray-100 p-6 md:flex-row md:items-center md:justify-between">
        <h2 className="text-md font-bold">Your Accounts</h2>

        {/* <AccountFilters /> */}
      </div>

      {/* Accounts */}

      <AccountItem
        title="Main Wallet"
        type="Wallet"
        accountNumber="1234 5678 9012"
        balance="₦1,250,000.00"
        status="Active"
        primary
        iconBg="bg-violet-100"
        icon={<Landmark className="h-6 w-6 text-violet-600" />}
      />

      <AccountItem
        title="Settlement Account"
        type="Bank"
        accountNumber="9876 5432 1098"
        balance="₦850,000.00"
        status="Active"
        iconBg="bg-sky-100"
        icon={<Landmark className="h-6 w-6 text-sky-600" />}
      />

      <AccountItem
        title="USD Account"
        type="USD"
        accountNumber="4567 8901 2345"
        balance="$2,450.50"
        status="Active"
        iconBg="bg-amber-100"
        icon={<DollarSign className="h-6 w-6 text-amber-600" />}
      />

      <AccountItem
        title="EUR Account"
        type="EUR"
        accountNumber="3456 7890 1234"
        balance="€1,200.00"
        status="Inactive"
        iconBg="bg-pink-100"
        icon={<Euro className="h-6 w-6 text-pink-600" />}
      />

      {/* Footer */}

      {/* <div className="flex justify-center border-t border-gray-100 p-6">
        <button className="flex items-center gap-2 text-lg font-semibold text-violet-700 transition hover:gap-3">
          View all accounts →
        </button>
      </div> */}
    </div>
  );
}
