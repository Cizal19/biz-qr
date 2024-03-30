const express = require("express");
const formDataController = require("../controllers/formDataController");

const router = express.Router();

router.post("/formData", formDataController.storeFormData);

module.exports = router;
