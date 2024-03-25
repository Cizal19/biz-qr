"use client";
import { useState } from "react";
import ServicesInput from "./ServicesInput";
import AddressInput from "./AddressInput";
import PhoneNumberInput from "./PhoneNumberInput";
import SocialLinksInput from "./SocialLinksInput";

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
    socialLinks: {
      website: "",
      instagram: "",
      facebook: "",
      x: "",
      linkedin: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update services in the formData
  const handleServicesChange = (services) => {
    setFormData((prev) => ({ ...prev, services }));
  };

  // Handler for updating address in formData
  const handleAddressChange = (newAddress) => {
    setFormData((prev) => ({ ...prev, address: newAddress }));
  };

  // Handler for updating phone numbers in formData
  const handlePhoneNumbersChange = (phoneNumbers) => {
    setFormData((prev) => ({ ...prev, phoneNumbers }));
  };

  // Handler for updating social links in formData
  const handleSocialLinksChange = (newSocialLinks) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: newSocialLinks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    // POST to API logic goes here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Business Information
        </h2>
        <form
          onSubmit={handleSubmit}
          className="sm:grid sm:grid-cols-2 sm:gap-8 space-y-4 sm:space-y-0 "
        >
          <div>
            <div className="space-y-4">
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
                  Address<span className="text-red-500">*</span>
                </label>
              </div>
              <AddressInput onAddressChange={handleAddressChange} />

              <PhoneNumberInput
                phoneNumbers={formData.phoneNumbers}
                setPhoneNumbers={handlePhoneNumbersChange}
              />

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
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-bold text-gray-500">
                  Social Links
                </label>
                <SocialLinksInput
                  socialLinks={formData.socialLinks}
                  setSocialLinks={handleSocialLinksChange}
                />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full p-3 bg-yellow-400 text-white rounded shadow hover:bg-yellow-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
