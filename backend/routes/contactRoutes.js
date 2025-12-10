const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields required" });
    }

    const entry = await Contact.create({ name, email, message });

    res.json({ success: true, entry });
  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;