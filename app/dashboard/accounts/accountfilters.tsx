"use client";

import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function AccountFilters() {
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 hover:bg-gray-50">
        All Accounts
        <ChevronDown size={18} />
      </button>

      <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50">
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
}
