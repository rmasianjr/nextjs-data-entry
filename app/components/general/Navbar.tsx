import {
  RocketLaunchIcon,
  UserPlusIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/" className="flex items-center space-x-3">
          <RocketLaunchIcon className="h-8 text-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Rocket Data
          </span>
        </Link>
        <div className="flex items-center space-x-3 md:space-x-7">
          <Link
            href="/"
            className="flex items-center text-sm px-2 py-1.5 text-white hover:underline"
          >
            <HomeIcon className="w-5.5 h-5.5 mr-2" />
            <span>Home</span>
          </Link>
          <Link
            href="/create"
            className="flex items-center text-sm px-2 py-1.5 text-white hover:underline"
          >
            <UserPlusIcon className="w-5.5 h-5.5 mr-2" />
            <span>Create</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
