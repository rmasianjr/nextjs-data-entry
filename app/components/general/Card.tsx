import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

type Details = {
  name: string;
  age: string;
  email: string;
  contact: string;
  address: string;
};

export default function Card({ details }: { details: Details }) {
  const { name, age, email, contact, address } = details;

  return (
    <div className="max-w-sm mx-auto p-5 my-3 bg-white border border-gray-200 rounded-lg shadow-lg h-96">
      <div className="flex flex-col items-center justify-center pb-1 h-full">
        <UserIcon className="text-gray-700 w-15 h-15 md:w-18 md:h-18 p-2 border border-gray-300 rounded-full shadow-lg mb-4" />
        <h5 className="font-semibold text-gray-900 text-base md:text-xl mb-1">
          {name}
        </h5>
        <span className="text-sm text-gray-600 mb-5 text-center">
          {age} years old
        </span>
        <div className="text-center">
          <div className="flex justify-center items-center mb-3">
            <EnvelopeIcon className="mr-2 w-5 h-5 text-blue-600" />
            <span className="text-sm md:text-base text-gray-600">{email}</span>
          </div>
          <div className="flex justify-center items-center mb-3">
            <PhoneIcon className="mr-2 w-5 h-5 text-blue-600" />
            <span className="text-sm md:text-base text-gray-600">
              {contact}
            </span>
          </div>
          <div className="flex justify-center ">
            <MapPinIcon className="mr-2 w-5 h-5 text-blue-600" />
            <span className="text-sm md:text-base text-gray-600">
              {address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
