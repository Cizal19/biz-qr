import React, { useState } from "react";

const ServicesInput = ({ services, setServices, required }) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent submitting of form on pressing enter
      setErrorMessage("");
      const newService = inputValue.trim().toUpperCase();

      if (newService) {
        setIsTouched(true);

        if (!services.includes(newService)) {
          setServices([...services, newService]);
          setInputValue("");
          setErrorMessage("");
        } else {
          setErrorMessage("This service already exists");
        }
      } else {
        setErrorMessage("Please enter a service");
      }
    }
  };

  const removeService = (serviceToRemove) => {
    const updatedServices = services.filter(
      (service) => service !== serviceToRemove
    );
    setServices(updatedServices);
    setIsTouched(true); // Mark the field as touched

    // Show the required message only if there are no services left after removal
    if (required && updatedServices.length === 0) {
      setErrorMessage("At least one service is required.");
    } else {
      setErrorMessage("");
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (required && services.length === 0) {
      setErrorMessage("Please enter a service.");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        {services.map((service, index) => (
          <span
            key={index}
            className="flex items-center gap-2 bg-blue-200 rounded px-3 py-1 text-sm font-medium"
          >
            {service}
            <button
              type="button"
              onClick={() => removeService(service)}
              className="text-blue-800 hover:text-blue-600"
              aria-label={`Remove ${service}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type service and press Enter"
        onBlur={handleBlur}
        className="w-full border-2 p-2 rounded outline-none focus:border-blue-500 text-black"
      />
      {isTouched && errorMessage && (
        <p className="text-xs text-red-500 mt-1">
          {errorMessage || "Please enter a service."}
        </p>
      )}
    </>
  );
};

export default ServicesInput;
