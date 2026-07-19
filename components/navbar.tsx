"use client";

import { MdOutlineSearch, MdOutlineNotificationAdd } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="mt-4 px-4 sm:px-4 md:px-2 lg:px-0">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-black text-[15px] sm:text-[16px] truncate">
          Admin Dashboard
        </h3>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            aria-label="Search"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <MdOutlineSearch className="text-black" size={20} />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <MdOutlineNotificationAdd className="text-black" size={20} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
          </button>

          <button
            type="button"
            aria-label="Messages"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FiMessageSquare className="text-black" size={20} />
          </button>

          <div className="flex items-center gap-2 h-8 pl-1 pr-2 sm:pr-3 rounded-[32px] border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer max-w-[140px] sm:max-w-none">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-[11px] font-semibold shrink-0">
              SB
            </span>
            <p className="text-black font-semibold text-[13px] sm:text-[14px] truncate hidden xs:block sm:block">
              Spookey Brown
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
