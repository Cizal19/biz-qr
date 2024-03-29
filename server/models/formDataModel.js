const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  phoneNumbers: { type: [String], required: true },
  logoUrl: { type: String, required: true },
  services: { type: [String], required: true },
  socialLinks: {
    website: String,
    instagram: String,
    facebook: String,
    x: String,
    linkedin: String,
  },
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;
