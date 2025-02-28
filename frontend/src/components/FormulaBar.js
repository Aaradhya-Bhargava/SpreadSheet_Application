import React, { useState, useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import { evaluateFormulaAsync } from "../utils/formulaProcessor";

function FormulaBar() {
  const { cells, updateCell } = useContext(SpreadsheetContext);
  const [formula, setFormula] = useState("");

  const applyFormula = () => {
    evaluateFormulaAsync(formula, cells, (result) => {
      updateCell(0, 0, result);
    });
  };

  return (
    <div className="formula-bar">
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula (e.g., =SUM(A1:A3))"
      />
      <button onClick={applyFormula}>Apply</button>
    </div>
  );
}

export default FormulaBar;
