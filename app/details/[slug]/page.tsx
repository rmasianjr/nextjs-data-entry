import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

type SearchParams = Promise<{
  name: string;
  age: string;
  email: string;
  contact: string;
  address: string;
}>;

export default async function DetailsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { name, age, email, contact, address } = await searchParams;

  return (
    <div className="max-w-sm md:max-w-2/6 mx-auto p-5 my-5 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center pb-6">
        <UserIcon className="text-gray-700 w-24 h-24 p-2 border border-gray-300 rounded-full shadow-lg mb-4" />
        <h5 className="font-semibold text-gray-900 text-2xl mb-2">{name}</h5>
        <span className="text-base text-gray-600 mb-3">{age} years old</span>
        <div>
          <div className="flex mb-3">
            <EnvelopeIcon className="mr-2 w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{email}</span>
          </div>
          <div className="flex mb-3">
            <PhoneIcon className="mr-2 w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{contact}</span>
          </div>
          <div className="flex">
            <MapPinIcon className="mr-2 w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
