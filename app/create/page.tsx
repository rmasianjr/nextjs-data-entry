"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryString = new URLSearchParams(formData).toString();
    console.log(queryString);

    router.push(`/details/results?${queryString}`);
  };

  return (
    <form
      className="max-w-sm md:max-w-2/6 mx-auto p-5 my-5 bg-white border border-gray-200 rounded-lg shadow-md"
      onSubmit={handleSubmit}
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
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          value={formData.age}
          onChange={handleChange}
          required
        />
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
          value={formData.email}
          onChange={handleChange}
          required
        />
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
          value={formData.contact}
          onChange={handleChange}
          required
        />
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
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="text-center text-sm font-medium text-white bg-blue-700 px-5 py-2.5 rounded-lg focus:outline-blue-300 hover:bg-blue-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
