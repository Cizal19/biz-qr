import React from "react";

const SocialLinksInput = ({ socialLinks, setSocialLinks }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block  text-gray-500">Website</label>
        <input
          type="url"
          name="website"
          value={socialLinks.website || ""}
          onChange={handleChange}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">Instagram</label>
        <input
          type="url"
          name="instagram"
          value={socialLinks.instagram || ""}
          onChange={handleChange}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block  text-gray-500">X</label>
        <input
          type="text"
          name="x"
          value={socialLinks.x || ""}
          onChange={handleChange}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={socialLinks.linkedIn || ""}
          onChange={handleChange}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block  text-gray-500">Facebook</label>
        <input
          type="text"
          name="facebook"
          value={socialLinks.facebook || ""}
          onChange={handleChange}
          className="w-full border-2 p-2 rounded outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default SocialLinksInput;
