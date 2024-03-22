import React, { useState } from "react";

const PhoneNumberInput = ({ phoneNumbers, setPhoneNumbers }) => {
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleAddPhoneNumber = () => {
    // Check if the new phone number is valid
    if (newPhoneNumber && !validatePhoneNumber(newPhoneNumber)) {
      setValidationError("Invalid phone number format.");
      return;
    }
    setValidationError(""); // Clear any previous validation error

    if (newPhoneNumber && !phoneNumbers.includes(newPhoneNumber)) {
      setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
      setNewPhoneNumber("");
    }
  };

  const validatePhoneNumber = (number) => {
    const regex = /^[+]?[(]?[0-9]{0,4}[)]?[-\s./0-9]*$/g;
    return regex.test(number);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (validatePhoneNumber(value)) {
      setNewPhoneNumber(value);
      setValidationError(""); // Clear validation error if input is now valid
    } else {
      setValidationError("Invalid phone number format.");
    }
  };

  const handleRemovePhoneNumber = (index) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <>
      <label className="block mb-1 font-bold text-gray-500">
        Phone Number(s)<span className="text-red-500">*</span>
      </label>
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index} className="flex items-center space-x-2 mb-2">
          <input
            type="tel"
            name={`phoneNumber-${index}`}
            placeholder="123-456-789"
            value={phoneNumber}
            className="flex-grow border-2 p-2 rounded outline-none focus:border-blue-500"
            readOnly
          />
          <button
            type="button"
            onClick={() => handleRemovePhoneNumber(index)}
            className="w-10 bg-red-500 text-white p-2 rounded hover:bg-red-600 px-3 font-bold"
            aria-label="Remove phone number"
          >
            &times;
          </button>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <input
          type="tel"
          placeholder="123-456-789"
          value={newPhoneNumber}
          onChange={handleInputChange}
          className="flex-grow border-2 p-2 rounded outline-none focus:border-blue-500"
          required
        />
        <button
          type="button"
          onClick={handleAddPhoneNumber}
          className="w-10 bg-green-500 text-white p-2 rounded hover:bg-green-600 px-3 font-bold"
          aria-label="Add phone number"
        >
          +
        </button>
      </div>
      {validationError && (
        <p className="text-red-500 text-sm">{validationError}</p>
      )}
    </>
  );
};

export default PhoneNumberInput;
