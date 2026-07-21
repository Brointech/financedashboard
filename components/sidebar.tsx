// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FiGrid,
//   FiCreditCard,
//   FiPieChart,
//   FiRepeat,
//   FiUsers,
//   FiSettings,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";

// const navItems = [
//   { label: "Dashboard", href: "/dashboard", icon: FiGrid },
//   { label: "Accounts", href: "/accounts", icon: FiCreditCard },
//   { label: "Transfer", href: "/transfer", icon: FiRepeat },
//   { label: "Analytics", href: "/analytics", icon: FiPieChart },
//   { label: "Customers", href: "/customers", icon: FiUsers },
//   { label: "Settings", href: "/settings", icon: FiSettings },
// ];

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <>
//       {/* Mobile top bar trigger */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 lg:hidden">
//         {/* <span className="font-bold text-black text-[16px]">Finance</span> */}
//         <button
//           type="button"
//           aria-label="Toggle menu"
//           onClick={() => setOpen(true)}
//           className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
//         >
//           <FiMenu size={18} className="text-black" />
//         </button>
//       </div>

//       {/* Mobile Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-screen w-64 bg-[#F3F4F6]  border-r border-gray-200
//           flex flex-col px-4 py-6
//           transition-transform duration-300 ease-in-out
//           lg:translate-x-0 lg:static lg:z-auto lg:w-56 xl:w-64 lg:shrink-0
//           ${open ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <div className="flex flex-col gap-2 -mt-1 px-2 mb-5">
//           {/* <h3 className="font-bold text-white text-[16px]">Finease</h3> */}
//           <button
//             type="button"
//             aria-label="Close menu"
//             onClick={() => setOpen(false)}
//             className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors lg:hidden"
//           >
//             <FiX size={16} className="text-black" />
//           </button>

//           <div className="flex items-center gap-2 h-8 pl-1 pr-2 sm:pr-3 rounded-[32px] border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer max-w-[140px] sm:max-w-none">
//             <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-[11px] font-semibold shrink-0">
//               OJ
//             </span>
//             <p className="text-black font-semibold text-[13px] sm:text-[14px] truncate hidden xs:block sm:block">
//               Olugbenga James
//             </p>
//           </div>
//           <p className="text-black font-semibold text-[12px]">
//             {" "}
//             Senior Director
//           </p>
//         </div>

//         <nav className="flex-1 flex flex-col gap-1">
//           {navItems.map(({ label, href, icon: Icon }) => {
//             const isActive = pathname === href;
//             return (
//               <Link
//                 key={href}
//                 href={href}
//                 onClick={() => setOpen(false)}
//                 className={`
//                   flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium
//                   transition-colors
//                   ${
//                     isActive
//                       ? "bg-black text-white"
//                       : "text-black hover:bg-[#0C0E48] hover:text-gray-50"
//                   }
//                 `}
//               >
//                 <Icon size={18} />
//                 <span>{label}</span>
//               </Link>
//             );
//           })}
//         </nav>

//         <div className="pt-4 border-t border-gray-200 px-2">
//           <p className="text-[11px] text-gray-400">
//             © {new Date().getFullYear()} Finance Dashboard
//           </p>
//         </div>
//       </aside>
//     </>
//   );
// }
