import DashboardLayout from "@/app/dashboard/dashboardlayout";
import VerificationBanner from "@/components/dashboard/verificationbanner";
import Header from "@/components/dashboard/header";
import StatsCard from "@/components/dashboard/statscard";
import SalesChart from "@/components/dashboard/salescharts";
import TrafficChart from "@/components/dashboard/trafficcharts";
import RecentTransactions from "@/components/dashboard/recenttransactions";

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

      <section className="grid gap-5 mt-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Today's Collection"
          value="₦0"
          change="+3.3%"
          positive
        />

        <StatsCard title="Today's Expenses" value="₦0" change="-3.3%" />

        <StatsCard title="Joined Today" value="0" change="+3.3%" positive />

        <StatsCard title="Total Customers" value="0" change="+3.3%" positive />
      </section>

      {/* Charts */}

      <section className="grid xl:grid-cols-2 gap-6 mt-8">
        <SalesChart />

        <TrafficChart />
      </section>

      {/* <RecentTransactions /> */}
    </DashboardLayout>
  );
}
