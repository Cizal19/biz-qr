"use client";
import { useState } from "react";
import ServicesInput from "./ServicesInput";
import AddressInput from "./AddressInput";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: {
      street: "",
      state: "",
      country: "",
    },
    phoneNumbers: [],
    logo: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update services in the formData
  const handleServicesChange = (services) => {
    setFormData((prev) => ({ ...prev, services }));
  };

  const handleAddressChange = (newAddress) => {
    setFormData((prev) => ({ ...prev, address: newAddress }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    // POST to API logic goes here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Business Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Address<span className="text-red-500">*</span>
            </label>
            <AddressInput onAddressChange={handleAddressChange} />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="123-456-789"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Logo<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="logo"
              placeholder="Logo URL"
              value={formData.logo}
              onChange={handleChange}
              required
              className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Services<span className="text-red-500">*</span>
            </label>
            <ServicesInput
              services={formData.services}
              setServices={handleServicesChange}
              required
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
};

export default Form;
