interface StatusBadgeProps {
  status: "Active" | "Inactive";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const active = status === "Active";

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
        active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
}
