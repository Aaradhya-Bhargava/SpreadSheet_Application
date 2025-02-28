import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

function Toolbar() {
  const {
    setFontSize,
    setBold,
    setItalic,
    setUnderline,
    setColor,
    setSearchQuery,
    applyFunction,
    removeDuplicates,
    setFindReplace,
    findAndReplace,
  } = useContext(SpreadsheetContext);

  return (
    <div style={toolbarStyle}>
      {/* Font Size */}
      <label>Font Size:</label>
      <input type="number" min="8" max="32" defaultValue="14" onChange={(e) => setFontSize(e.target.value)} />

      {/* Font Styles */}
      <button onClick={() => setBold((prev) => !prev)}>B</button>
      <button onClick={() => setItalic((prev) => !prev)}>I</button>
      <button onClick={() => setUnderline((prev) => !prev)}>U</button>

      {/* Font Color */}
      <input type="color" onChange={(e) => setColor(e.target.value)} />

      {/* Search */}
      <input type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} />

      {/* Functions */}
      <button onClick={() => applyFunction((v) => v.trim())}>TRIM</button>
      <button onClick={() => applyFunction((v) => v.toUpperCase())}>UPPER</button>
      <button onClick={() => applyFunction((v) => v.toLowerCase())}>LOWER</button>
      <button onClick={removeDuplicates}>REMOVE DUPLICATES</button>

      {/* Find & Replace */}
      <input type="text" placeholder="Find" onChange={(e) => setFindReplace((prev) => ({ ...prev, find: e.target.value }))} />
      <input type="text" placeholder="Replace" onChange={(e) => setFindReplace((prev) => ({ ...prev, replace: e.target.value }))} />
      <button onClick={findAndReplace}>FIND & REPLACE</button>
    </div>
  );
}

const toolbarStyle = {
  display: "flex",
  gap: "10px",
  padding: "10px",
  background: "#f4f4f4",
  borderBottom: "1px solid #ccc",
};

export default Toolbar;
