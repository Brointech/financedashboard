"use client";

import { Plus } from "lucide-react";

export default function AccountHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Accounts</h1>

        <p className="mt-2 text-lg text-gray-500">
          Manage all your accounts and wallets in one place.
        </p>
      </div>

      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] px-6 py-4 text-white font-medium transition hover:bg-black">
        <Plus size={20} />
        Create Account
      </button>
    </div>
  );
}
