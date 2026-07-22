import AccountHeader from "@/app/dashboard/accounts/accountheader";
import AccountStats from "@/app/dashboard/accounts/accountstats";

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <AccountHeader />

      <AccountStats />
    </div>
  );
}
