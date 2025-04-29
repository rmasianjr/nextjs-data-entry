import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-10">
      <FaceFrownIcon className="w-10 text-gray-400 mb-3" />
      <h2 className="text-xl font-semibold mb-3">404 Not Found</h2>
      <p className="text-gray-700 mb-8">
        Oops! We couldn't find the Details you were looking for.
      </p>
      <Link
        href="/create"
        className="text-center text-sm text-white bg-green-600 px-5 py-2.5 rounded-lg hover:bg-green-800"
      >
        Create Now
      </Link>
    </div>
  );
}
