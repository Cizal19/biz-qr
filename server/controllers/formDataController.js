const FormData = require("../models/formDataModel");
const qr = require("qrcode");

exports.storeFormData = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedFormData = await formData.save();

    // Generate QR code with the ObjectId
    const qrCodeData = await qr.toDataURL(
      `https://biz-card-gamma.vercel.app/?id=${savedFormData._id.toString()}`
    );

    res.status(200).json(qrCodeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
