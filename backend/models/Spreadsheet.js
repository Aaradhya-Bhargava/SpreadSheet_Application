const mongoose = require("mongoose");

const SpreadsheetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: Array, required: true }, // Stores spreadsheet cells
});

module.exports = mongoose.model("Spreadsheet", SpreadsheetSchema);
