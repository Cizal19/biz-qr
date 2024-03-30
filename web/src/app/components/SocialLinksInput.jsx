import React, { useState, useEffect } from "react";

const SocialLinksInput = ({ onSocialLinksChange }) => {
  const [localSocialLinks, setLocalSocialLinks] = useState({
    website: "",
    instagram: "",
    linkedin: "",
    x: "",
    facebook: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    onSocialLinksChange(localSocialLinks);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block  text-gray-500">Website</label>
        <input
          type="url"
          name="website"
          value={localSocialLinks.website}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">Instagram</label>
        <input
          type="url"
          name="instagram"
          value={localSocialLinks.instagram}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={localSocialLinks.linkedin}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">X</label>
        <input
          type="text"
          name="x"
          value={localSocialLinks.x}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">Facebook</label>
        <input
          type="text"
          name="facebook"
          value={localSocialLinks.facebook}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default SocialLinksInput;
