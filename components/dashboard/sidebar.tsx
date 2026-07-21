"use client";

import {
  LayoutDashboard,
  Wallet,
  Send,
  History,
  Users,
  Globe,
  Shield,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const menus = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Wallet, title: "Accounts" },
  { icon: Send, title: "Transfer" },
  { icon: History, title: "History" },
  { icon: Users, title: "Customers" },
  { icon: Globe, title: "Webhooks" },
  { icon: Shield, title: "Credentials" },
];

const bottom = [
  { icon: Settings, title: "Settings" },
  { icon: HelpCircle, title: "Help" },
  { icon: LogOut, title: "Logout" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-gray-100 border-r flex-col justify-between">
        <div>
          <div className="p-6 border-b flex items-center gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-[11px] font-semibold shrink-0">
              AI
            </span>
            <p className="text-black font-semibold text-[13px] sm:text-[14px] truncate hidden xs:block sm:block">
              {" "}
              Adekunle Isreal
            </p>
          </div>

          <nav className="p-2 space-y-0">
            {menus.map((item) => (
              <button
                key={item.title}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <item.icon size={18} />

                {item.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-2 space-y-0">
          {bottom.map((item) => (
            <button
              key={item.title}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              <item.icon size={18} />
              {item.title}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
