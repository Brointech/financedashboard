import { CheckCircle2 } from "lucide-react";
import { Clock3 } from "lucide-react";

import Link from "next/link";
export default function VerificationBanner() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white mt-4 p-6 md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div className="flex items-start gap-4">
        <div className="flex lg:h-12 lg:w-12 items-center justify-center rounded-full bg-blue-100">
          <Clock3 className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Verification Under Review
          </h3>

          <p className="mt-1 max-w-xl text-sm text-gray-600">
            We've received your verification documents and they're currently
            being reviewed.
          </p>
        </div>
      </div>

      {/* Right */}
      <Link
        href="/dashboard/verification"
        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        View Details
        <span className="ml-2">→</span>
      </Link>
    </div>
  );
}
