import { CheckCircle2 } from "lucide-react";

export default function VerificationBanner() {
  return (
    <div className="mt-6 rounded-xl bg-white p-5 border">
      <div className="flex gap-3">
        <CheckCircle2 className="text-blue-600" />

        <div>
          <h3 className="font-semibold">Verification Under Review</h3>

          <p className="text-sm text-gray-500">
            Your submission is being reviewed. We'll notify you once it is
            completed.
          </p>
        </div>
      </div>
    </div>
  );
}
