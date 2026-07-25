"use client";

import { Plus } from "lucide-react";

export default function AccountHeader() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="mt-10 lg:-mt-10">
        <h1 className="text-xl font-bold text-gray-900">Accounts</h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage all your accounts and wallets in one place.
        </p>
      </div>

      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-5 py-3 text-white font-medium transition hover:bg-black">
        <Plus size={20} />
        Create Account
      </button>
    </div>
  );
}
