const express = require("express");
const router = express.Router();
const { saveSpreadsheet, loadSpreadsheet } = require("../controllers/spreadsheetController");

// Save spreadsheet
router.post("/save", saveSpreadsheet);

// Load spreadsheet
router.get("/load/:name", loadSpreadsheet);

module.exports = router;
