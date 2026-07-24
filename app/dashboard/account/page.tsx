import AccountHeader from "@/app/dashboard/accounts/accountheader";
import AccountStats from "@/app/dashboard/accounts/accountstats";
import AccountFilters from "@/app/dashboard/accounts/accountfilters";
import AccountList from "../accounts/accountlist";

export default function AccountsPage() {
  return (
    <div className="space-y-8 ml-30">
      <AccountHeader />

      <AccountStats />

      <AccountFilters />

      <AccountList />
    </div>
  );
}
