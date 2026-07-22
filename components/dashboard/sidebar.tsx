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
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { icon: LayoutDashboard, title: "Dashboard", href: "/dashboard" },
  { icon: Wallet, title: "Accounts", href: "/dashboard/accounts" },
  { icon: Send, title: "Transfer", href: "/dashboard/transfer" },
  { icon: History, title: "History", href: "/dashboard/history" },
  { icon: Users, title: "Customers", href: "/dashboard/customers" },
  { icon: Globe, title: "Webhooks", href: "/dashboard/webhooks" },
  { icon: Shield, title: "Credentials", href: "/dashboard/credentials" },
];

const bottom = [
  { icon: Settings, title: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, title: "Help", href: "/dashboard/help" },
  { icon: LogOut, title: "Logout", href: "/dashboard/logout" },
];

// export default function Sidebar() {

//   return (

//       <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-gray-100 border-r flex-col justify-between">
//         <div>
//           <div className="p-6 border-b flex items-center gap-3">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-[11px] font-semibold shrink-0">
//               AI
//             </span>
//             <p className="text-black font-semibold text-[13px] sm:text-[14px] truncate hidden xs:block sm:block">
//               {" "}
//               Adekunle Isreal
//             </p>
//           </div>

//           <nav className="p-2 space-y-0">
//             {menus.map((item) => (

//               <button
//                 key={item.title}
//                 className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100"
//               >
//                 <item.icon size={18} />

//                 {item.title}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="p-2 space-y-0">
//           {bottom.map((item) => (
//             <button
//               key={item.title}
//               className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100"
//             >
//               <item.icon size={18} />
//               {item.title}
//             </button>
//           ))}
//         </div>
//       </aside>

//   );
// }

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-5 z-40">
        <button onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>

        <h2 className="font-semibold text-lg">Dashboard</h2>

        <div className="w-6" />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-60 bg-gray-100 border-r flex flex-col justify-between z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div>
          {/* Logo */}
          <div className="p-6 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs font-semibold">
                AI
              </span>

              <p className="font-semibold text-sm">Adekunle Israel</p>
            </div>

            {/* Close Button */}
            <button onClick={() => setOpen(false)} className="lg:hidden">
              <X size={22} />
            </button>
          </div>

          {/* Main Menu */}
          <nav className="p-3 space-y-2">
            {menus.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`relative flex items-center gap-3 w-full px-3 py-2 rounded-[7px] transition-all duration-200 group
                  ${
                    active
                      ? "bg-[#5B2EFF] text-white shadow-md"
                      : "text-gray-600 hover:bg-white hover:text-[#5B2EFF]"
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                  )}

                  <item.icon
                    size={18}
                    className={
                      active
                        ? "text-white"
                        : "text-gray-500 group-hover:text-[#5B2EFF]"
                    }
                  />

                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Menu */}
        <div className="p-4 space-y-2">
          {bottom.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all duration-200 group
                ${
                  active
                    ? "bg-[#5B2EFF] text-white shadow-md"
                    : "text-gray-600 hover:bg-white hover:text-[#5B2EFF]"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
                )}

                <item.icon
                  size={20}
                  className={
                    active
                      ? "text-white"
                      : "text-gray-500 group-hover:text-[#5B2EFF]"
                  }
                />

                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
    // <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-gray-100 border-r flex-col justify-between">
    //   <div>
    //     {/* Logo */}
    //     <div className="p-6 border-b flex items-center gap-3">
    //       <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-xs font-semibold">
    //         AI
    //       </span>

    //       <p className="font-semibold text-sm">Adekunle Israel</p>
    //     </div>

    //     {/* Main Menu */}
    //     <nav className="p-4 space-y-2">
    //       {menus.map((item) => {
    //         const active =
    //           pathname === item.href || pathname.startsWith(item.href + "/");

    //         return (
    //           <Link
    //             key={item.title}
    //             href={item.href}
    //             className={`relative flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 group
    //               ${
    //                 active
    //                   ? "bg-[#5B2EFF] text-white shadow-md"
    //                   : "text-gray-600 hover:bg-white hover:text-[#5B2EFF]"
    //               }
    //             `}
    //           >
    //             {/* Active Indicator */}
    //             {active && (
    //               <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
    //             )}

    //             <item.icon
    //               size={20}
    //               className={`transition-colors
    //                 ${
    //                   active
    //                     ? "text-white"
    //                     : "text-gray-500 group-hover:text-[#5B2EFF]"
    //                 }
    //               `}
    //             />

    //             <span className="font-medium">{item.title}</span>
    //           </Link>
    //         );
    //       })}
    //     </nav>
    //   </div>

    //   {/* Bottom Menu */}
    //   <div className="p-4 space-y-2">
    //     {bottom.map((item) => {
    //       const active =
    //         pathname === item.href || pathname.startsWith(item.href + "/");

    //       return (
    //         <Link
    //           key={item.title}
    //           href={item.href}
    //           className={`relative flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 group
    //             ${
    //               active
    //                 ? "bg-[#5B2EFF] text-white shadow-md"
    //                 : "text-gray-600 hover:bg-white hover:text-[#5B2EFF]"
    //             }
    //           `}
    //         >
    //           {active && (
    //             <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white" />
    //           )}

    //           <item.icon
    //             size={20}
    //             className={
    //               active
    //                 ? "text-white"
    //                 : "text-gray-500 group-hover:text-[#5B2EFF]"
    //             }
    //           />

    //           <span className="font-medium">{item.title}</span>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </aside>
  );
}
