"use client";

import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-gray-100 ">
      <Sidebar />

      <section className="flex-1 lg:ml-62">
        <div className="p-5 lg:p-4">{children}</div>
      </section>
    </main>
  );
}
