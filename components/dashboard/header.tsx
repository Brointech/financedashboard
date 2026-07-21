import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Hello, AI Global</h1>
      </div>

      <button className="relative">
        <Bell />

        <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
      </button>
    </header>
  );
}
