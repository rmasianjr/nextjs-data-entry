"use client";

import { useActionState } from "react";
import { createInfo, State } from "../lib/actions";

export default function CreatePage() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    createInfo,
    initialState
  );

  return (
    <form
      className="max-w-sm md:max-w-2/6 mx-auto p-5 my-5 bg-white border border-gray-200 rounded-lg shadow-md"
      action={formAction}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Name
        </label>
        <input
          className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          type="text"
          id="name"
          name="name"
          defaultValue=""
        />
        {state.errors?.name &&
          state.errors.name.map((error: string) => (
            <p className="mt-1 text-xs text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-5">
        <label
          htmlFor="age"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Age
        </label>
        <input
          className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          type="number"
          id="age"
          name="age"
          defaultValue=""
        />
        {state.errors?.age &&
          state.errors.age.map((error: string) => (
            <p className="mt-1 text-xs text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Email
        </label>
        <input
          className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          type="email"
          id="email"
          name="email"
          defaultValue=""
        />
        {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="mt-1 text-xs text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-5">
        <label
          htmlFor="contact"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Contact Number
        </label>
        <input
          className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          type="tel"
          id="contact"
          name="contact"
          defaultValue=""
        />
        {state.errors?.contact &&
          state.errors.contact.map((error: string) => (
            <p className="mt-1 text-xs text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-5">
        <label
          htmlFor="address"
          className="text-sm font-medium text-gray-900 block mb-2"
        >
          Address
        </label>
        <input
          className="text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5 outline-none focus:border-blue-500"
          type="text"
          id="address"
          name="address"
          defaultValue=""
        />
        {state.errors?.address &&
          state.errors.address.map((error: string) => (
            <p className="mt-1 text-xs text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <div className="mb-1 text-xs text-red-500">
        <p>{state.message}</p>
      </div>
      <button
        className="mt-1 text-center text-sm font-medium text-white bg-blue-700 px-5 py-2.5 rounded-lg focus:outline-blue-300 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        type="submit"
        disabled={isPending}
      >
        {isPending ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Submitting...
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
