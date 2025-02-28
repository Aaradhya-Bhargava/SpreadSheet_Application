import { useState } from "react";

const useSpreadsheet = (rows = 10, cols = 10) => {
  const [cells, setCells] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(""))
  );

  const updateCell = (row, col, value) => {
    const newCells = [...cells];
    newCells[row][col] = value;
    setCells(newCells);
  };

  return { cells, updateCell };
};

export default useSpreadsheet;
