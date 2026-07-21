export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl border mt-8 p-6 overflow-auto">
      <h3 className="font-bold text-lg mb-5">Most Recent</h3>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="py-4">John Doe</td>
            <td>₦20,000</td>
            <td className="text-green-600">Successful</td>
            <td>Today</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
