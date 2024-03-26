"use client";
import { useState, useEffect } from "react";
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
    logoUrl: "",
    services: [],
    socialLinks: {
      website: "",
      instagram: "",
      facebook: "",
      x: "",
      linkedin: "",
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

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

  // Handler for changing selectedFile
  const handleLogoChange = async (e) => {
    // Check if the user selected a file
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      // Cleanup previous URL to avoid memory leaks
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);

      // Create a new URL for the selected file and update state
      const fileUrl = URL.createObjectURL(file);
      setImagePreviewUrl(fileUrl);
    } else {
      // reset to initial state
      setSelectedFile(null);
      setImagePreviewUrl("");
    }
  };

  useEffect(() => {
    // This return function is a cleanup function that React will run when the component unmounts
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  // Function for uploading image to cloudinary and updating logoUrl in formData
  const handleLogoUpload = async (file) => {
    const logoData = new FormData();
    logoData.append("file", file);
    logoData.append("upload_preset", "nfeo8e9t");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dzhvpsn9w/image/upload`,
        {
          method: "POST",
          body: logoData,
        }
      );
      const data = await response.json();

      // Once the image is uploaded, return the secure URL
      if (response.ok) {
        return data.secure_url;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
      throw error;
    }
  };

  // Handler for submitting Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      // Perform the upload
      try {
        const logoUrl = await handleLogoUpload(selectedFile);

        // Update formData with the returned logo URL
        const updatedFormData = {
          ...formData,
          logoUrl: logoUrl,
        };
        //update the state of FormData
        setFormData(updatedFormData);
        // POST to API logic goes here
        console.log("Submitting form data:", updatedFormData);
      } catch (uploadError) {
        throw uploadError;
      }
    }
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
                  type="file"
                  name="logo"
                  placeholder="Logo"
                  accept="image/png, image/jpg"
                  onChange={handleLogoChange}
                  required
                  className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
                />
              </div>
              {imagePreviewUrl && (
                <div>
                  <img
                    src={imagePreviewUrl}
                    alt="Logo Preview"
                    className="max-w-xs h-auto"
                  />
                </div>
              )}

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
