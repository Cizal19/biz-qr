import React, { useState, useEffect } from "react";

const AddressInput = ({ setAddress }) => {
  const [localAddress, setLocalAddress] = useState({
    street: "",
    state: "",
    country: "",
  });

  // Update the parent state whenever the local address state changes
  useEffect(() => {
    setAddress(localAddress);
  }, [localAddress, setAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalAddress((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <label className="inline-block w-1/3  text-gray-500">
          Street<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={localAddress.street}
          onChange={handleChange}
          required
          className="flex-grow border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <label className="inline-block w-1/3  text-gray-500">
          State<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="state"
          placeholder="State"
          value={localAddress.state}
          onChange={handleChange}
          required
          className="flex-grow border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <label className="inline-block w-1/3  text-gray-500">
          Country<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={localAddress.country}
          onChange={handleChange}
          required
          className="flex-grow border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
};

export default AddressInput;
