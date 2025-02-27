require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors()); // ✅ Allow frontend to call backend
app.use(express.json()); // ✅ Parse JSON requests

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ Connected to MongoDB"));

// Default Route
app.get("/", (req, res) => {
  res.send({ message: "Backend running..." });
});

// Import Routes
const spreadsheetRoutes = require("./routes/spreadsheetRoutes");
app.use("/api/spreadsheet", spreadsheetRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
