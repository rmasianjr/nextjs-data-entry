"use client";

import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-10">
      <FaceFrownIcon className="w-10 text-gray-400 mb-3" />
      <h2 className="text-xl font-semibold mb-3">Something went wrong!</h2>
      <button
        className="text-center text-sm text-white bg-green-600 px-5 py-2.5 rounded-lg hover:bg-green-800"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
