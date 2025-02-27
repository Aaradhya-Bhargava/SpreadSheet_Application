require("dotenv").config({ path: "../backend/.env" });
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/spreadsheetDB";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", async () => {
  console.log("✅ Connected to MongoDB");

  const Spreadsheet = mongoose.model(
    "Spreadsheet",
    new mongoose.Schema({ name: String, data: Array })
  );

  // Insert default spreadsheet if it doesn't exist
  const existing = await Spreadsheet.findOne({ name: "Sheet1" });
  if (!existing) {
    await Spreadsheet.create({ name: "Sheet1", data: [[""]] });
    console.log("✅ Default spreadsheet created.");
  }

  process.exit(); // Exit after setup
});
