const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running 🚀");
});

// MongoDB connection (we will add real URL later)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
