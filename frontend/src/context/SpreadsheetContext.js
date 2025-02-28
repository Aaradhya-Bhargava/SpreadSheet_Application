import React, { createContext, useState } from "react";

export const SpreadsheetContext = createContext();

export function SpreadsheetProvider({ children }) {
  const [cells, setCells] = useState(Array(10).fill(Array(10).fill("")));
  const [fontSize, setFontSize] = useState(14);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [color, setColor] = useState("#000000");
  const [searchQuery, setSearchQuery] = useState("");
  const [findReplace, setFindReplace] = useState({ find: "", replace: "" });

  const updateCell = (row, col, value) => {
    setCells((prev) => {
      const newCells = prev.map((r) => [...r]);
      newCells[row][col] = value;
      return newCells;
    });
  };

  const addRow = () => setCells((prev) => [...prev, Array(prev[0].length).fill("")]);
  const addColumn = () => setCells((prev) => prev.map((row) => [...row, ""]));

  const applyFunction = (func) => {
    setCells((prev) => prev.map((row) => row.map((cell) => func(cell))));
  };

  const removeDuplicates = () => {
    const seen = new Set();
    setCells((prev) =>
      prev.map((row) =>
        row.map((cell) => {
          if (seen.has(cell)) return "";
          seen.add(cell);
          return cell;
        })
      )
    );
  };

  const findAndReplace = () => {
    setCells((prev) =>
      prev.map((row) =>
        row.map((cell) => (cell.includes(findReplace.find) ? cell.replace(findReplace.find, findReplace.replace) : cell))
      )
    );
  };

  return (
    <SpreadsheetContext.Provider
      value={{
        cells,
        updateCell,
        addRow,
        addColumn,
        fontSize,
        setFontSize,
        bold,
        setBold,
        italic,
        setItalic,
        underline,
        setUnderline,
        color,
        setColor,
        searchQuery,
        setSearchQuery,
        applyFunction,
        removeDuplicates,
        findReplace,
        setFindReplace,
        findAndReplace,
      }}
    >
      {children}
    </SpreadsheetContext.Provider>
  );
}
