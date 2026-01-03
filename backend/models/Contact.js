const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
