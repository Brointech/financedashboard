// "use client";

// import Navbar from "@/components/navbar";
// import Sidebar from "@/components/sidebar";
// import React from "react";

// export default function Home() {
//   return (
//     <main className="flex flex-col md:flex-row bg-gray-100 text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col  overflow-hidden px-4 lg:px-6">
//         {/* Navbar */}
//         <Navbar />

//         {/* Page */}
//         <div className="flex-1 overflow-y-auto px-4 py-4 lg:px-0">
//           {/* Header */}
//           <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-[16px] font-semibold text-gray-900">
//                 Welcome back, James
//               </h1>

//               <p className="mt-1 text-sm text-gray-500">
//                 Go through your dashboard to access insights to grow your
//                 business.
//               </p>
//             </div>

//             {/* <div className="flex items-center gap-3">
//               <button className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
//                 Receive
//               </button>

//               <button className="rounded-xl bg-[#0C0E48] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
//                 Send
//               </button>
//             </div> */}
//           </div>
//           {/*  */}
//           <div className=" flex items-center gap-4">
//             <div className="bg-white p-4 py-2 px-4 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
//               <p className="text-[14px] text-[#0C0E48]">Today's Income</p>
//               <p className="text-[18px] text-[#0C0E48] font-semibold">
//                 N1,000{" "}
//               </p>
//             </div>
//             <div className="bg-white p-4 py-2 px-4 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
//               <p className="text-[14px] text-[#0C0E48]">Today's Expence</p>
//               <p className="text-[18px] text-[#0C0E48] font-semibold">N800 </p>
//             </div>
//             <div className="bg-white p-4 py-2 px-4 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
//               <p className="text-[14px] text-[#0C0E48]">Spend</p>
//               <p className="text-[18px] text-[#0C0E48] font-semibold">N500 </p>
//             </div>
//             <div className="bg-white p-4 py-2 px-4 flex flex-col gap-0 text-white rounded-xl w-50 h-15">
//               <p className="text-[14px] text-[#0C0E48]">Spend</p>
//               <p className="text-[18px] text-[#0C0E48] font-semibold">N500 </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import DashboardLayout from "@/app/dashboard/layout";
import Header from "@/components/dashboard/header";
import VerificationBanner from "@/components/dashboard/verificationbanner";
import StatsCard from "@/components/dashboard/statscard";
import SalesChart from "@/components/dashboard/salescharts";
import TrafficChart from "@/components/dashboard/trafficcharts";
import RecentTransactions from "@/components/dashboard/recenttransactions";

import { Wallet, CreditCard, Users, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <DashboardLayout>
      <Header />

      <VerificationBanner />

      <section className="mt-2">
        <h2 className="text-3xl font-bold">Payments Dashboard</h2>

        <p className="text-gray-500 mt-2">
          Monitor your transactions and business insights.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <StatsCard
          title="Today's Collection"
          value="₦0"
          change="+3.3%"
          positive
          icon={Wallet}
        />

        <StatsCard
          title="Today's Expenses"
          value="₦0"
          change="-3.3%"
          icon={CreditCard}
        />

        <StatsCard
          title="Joined Today"
          value="0"
          change="+3.3%"
          positive
          icon={UserPlus}
        />

        <StatsCard
          title="Total Customers"
          value="0"
          change="+3.3%"
          positive
          icon={Users}
        />
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <SalesChart />

        <TrafficChart />
      </section>

      {/* Recent Transactions */}
      {/* <RecentTransactions /> */}
    </DashboardLayout>
  );
}
