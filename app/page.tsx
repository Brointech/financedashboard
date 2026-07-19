"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row bg-gray-100 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col  overflow-hidden px-4 lg:px-6">
        {/* Navbar */}
        <Navbar />

        {/* Page */}
        <div className="flex-1 overflow-y-auto px-4 py-4 lg:px-0">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-[16px] font-semibold text-gray-900">
                Welcome back, Spookey
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Here's an overview of your finances today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                Receive
              </button>

              <button className="rounded-xl bg-[#0C0E48] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
          {/*  */}
          <div className=" flex items-center gap-4">
            <div className="bg-[#0C0E48] px-8 py-2.5 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
              <p className="text-[12px]">Wallet Balance</p>
              <p className="text-[18px] font-semibold">N140,000 </p>
            </div>
            <div className="bg-gray-300 px-8 py-2.5 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
              <p className="text-[12px] text-[#0C0E48]">Income</p>
              <p className="text-[18px] text-[#0C0E48] font-semibold">
                N240,000{" "}
              </p>
            </div>
            <div className="bg-gray-300 px-8 py-2.5 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
              <p className="text-[12px] text-[#0C0E48]">Spend</p>
              <p className="text-[18px] text-[#0C0E48] font-semibold">
                N100,000{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// import Navbar from "@/components/navbar";
// import Sidebar from "@/components/sidebar";

// export default function Home() {
//   return (
//     <main className="flex flex-col md:flex-row bg-gray-100 text-white">
//       {/* Side bar */}

//       <div className="">
//         <Sidebar />
//       </div>
//       {/* Main content */}
//       <div className="flex-1 flex flex-col px-5 bg-gray-100">
//         {/* Page content */}
//         <section>
//           {/* Navbar */}
//           <div className="flex-1 flex flex-col px-5 bg-gray-100">
//             <Navbar />
//           </div>

//           {/* Overview */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-4 md:px-2 lg:px-4">
//             <p className="text-black text-[12px]">Welcome back Spookey</p>
//             <div className="flex items-center gap-4">
//               <span className="border border-1 border-black p-2 text-[10px] rounded-[10px]">
//                 Recieve
//               </span>
//               <button className="">Send</button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
