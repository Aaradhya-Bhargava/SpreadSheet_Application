import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

function Grid() {
  const { cells, updateCell, fontSize, fontStyle, searchQuery } = useContext(SpreadsheetContext);

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th></th>
          {Array(cells[0].length)
            .fill("")
            .map((_, i) => (
              <th key={i} style={headerStyle}>{String.fromCharCode(97 + i)}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {cells.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th style={headerStyle}>{rowIndex + 1}</th>
            {row.map((cell, colIndex) => {
              const isMatch = searchQuery && cell.includes(searchQuery);
              return (
                <td
                  key={colIndex}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => updateCell(rowIndex, colIndex, e.target.innerText)}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    minWidth: "80px",
                    textAlign: "center",
                    background: isMatch ? "#ffeb3b" : "#fff",
                    fontSize: `${fontSize}px`,
                    fontWeight: fontStyle === "bold" ? "bold" : "normal",
                    fontStyle: fontStyle === "italic" ? "italic" : "normal",
                  }}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const headerStyle = {
  background: "#ddd",
  padding: "10px",
  border: "1px solid #ccc",
};

export default Grid;
