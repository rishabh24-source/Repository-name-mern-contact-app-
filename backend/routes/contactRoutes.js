const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST: Add new contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone are required" });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Delete contact (Bonus)
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
