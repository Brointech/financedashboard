import AccountHeader from "@/app/dashboard/accounts/accountheader";
import AccountStats from "@/app/dashboard/accounts/accountstats";
// import AccountFilters from "@/app/dashboard/accounts/accountfilters";
import AccountList from "../accounts/accountlist";

export default function AccountsPage() {
  return (
    <div className="space-y-6 lg:ml-30 px-4 sm:px-6 lg:px-2 mt-10">
      <AccountHeader />

      <AccountStats />

      {/* <AccountFilters /> */}

      <AccountList />
    </div>
  );
}
