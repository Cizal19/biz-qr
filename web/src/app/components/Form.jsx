"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    logo: "",
    services: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST to API logic goes here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Business Phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">Logo</label>
            <input
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={formData.logo}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Services
            </label>
            <textarea
              name="services"
              placeholder="List of Services"
              value={formData.services}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-yellow-400 text-white rounded shadow hover:bg-yellow-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
