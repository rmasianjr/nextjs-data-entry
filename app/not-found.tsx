import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-10">
      <FaceFrownIcon className="w-10 text-gray-400 mb-3" />
      <h2 className="text-xl font-semibold mb-3">404 Not Found</h2>
      <p className="text-gray-700 mb-8">
        Oops! We couldn&apos;t find the page you were looking for.
      </p>
    </div>
  );
}
