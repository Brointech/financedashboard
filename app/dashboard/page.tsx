import DashboardLayout from "@/app/dashboard/dashboardlayout";
import VerificationBanner from "@/components/dashboard/verificationbanner";
import Header from "@/components/dashboard/header";
import StatsCard from "@/components/dashboard/statscard";
import SalesChart from "@/components/dashboard/salescharts";
import TrafficChart from "@/components/dashboard/trafficcharts";
import RecentTransactions from "@/components/dashboard/recenttransactions";

import { Wallet, CreditCard, Users, UserPlus } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Header />

      <VerificationBanner />

      <div className="mt-8">
        <h2 className="text-3xl font-bold">Payments Dashboard</h2>

        <p className="text-gray-500 mt-2">
          Monitor your transactions and business insights.
        </p>
      </div>

      {/* Stats */}

      {/* <section className="grid gap-5 mt-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Today's Collection"
          value="₦0"
          change="+3.3%"
          positive
        />

        <StatsCard title="Today's Expenses" value="₦0" change="-3.3%" />

        <StatsCard title="Joined Today" value="0" change="+3.3%" positive />

        <StatsCard title="Total Customers" value="0" change="+3.3%" positive />
      </section> */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Today's Collection"
          value="₦30,000"
          change="+3.3%"
          positive
          icon={Wallet}
        />

        <StatsCard
          title="Today's Expenses"
          value="₦10,000"
          change="-3.3%"
          positive={false}
          icon={CreditCard}
        />

        <StatsCard
          title="Joined Today"
          value="25"
          change="+8.4%"
          positive
          icon={UserPlus}
        />

        <StatsCard
          title="Total Customers"
          value="1,240"
          change="+12%"
          positive
          icon={Users}
        />
      </div>
      {/* Charts */}

      <section className="grid xl:grid-cols-2 gap-6 mt-8">
        <SalesChart />

        <TrafficChart />
      </section>

      {/* <RecentTransactions /> */}
    </DashboardLayout>
  );
}
