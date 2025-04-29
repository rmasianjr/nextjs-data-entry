import Link from "next/link";

export default function NoDataComponent() {
  return (
    <div className="text-center p-4 mt-10">
      <h2 className="text-xl font-bold mb-2">No Data Available</h2>
      <p className="mb-8">Please add some data to see it displayed here.</p>
      <Link
        href="/create"
        className="text-center text-sm text-white bg-green-600 px-5 py-2.5 rounded-lg hover:bg-green-800"
      >
        Create Now
      </Link>
    </div>
  );
}
