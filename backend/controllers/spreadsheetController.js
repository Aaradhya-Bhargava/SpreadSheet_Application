const Spreadsheet = require("../models/Spreadsheet");

// Save Spreadsheet Data
exports.saveSpreadsheet = async (req, res) => {
  try {
    const { name, data } = req.body;

    let spreadsheet = await Spreadsheet.findOne({ name });

    if (spreadsheet) {
      spreadsheet.data = data;
      await spreadsheet.save();
    } else {
      spreadsheet = new Spreadsheet({ name, data });
      await spreadsheet.save();
    }

    res.status(200).json({ message: "Spreadsheet saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save spreadsheet." });
  }
};

// Load Spreadsheet Data
exports.loadSpreadsheet = async (req, res) => {
  try {
    const { name } = req.params;
    const spreadsheet = await Spreadsheet.findOne({ name });

    if (!spreadsheet) {
      return res.status(404).json({ error: "Spreadsheet not found." });
    }

    res.status(200).json(spreadsheet);
  } catch (error) {
    res.status(500).json({ error: "Failed to load spreadsheet." });
  }
};
