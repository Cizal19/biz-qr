const FormData = require("../models/formDataModel");

exports.storeFormData = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.json({ message: "Form data stored successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
