import React, { useContext } from "react";
import Grid from "./Grid";
import Toolbar from "./Toolbar";
import ChartComponent from "./Chart";
import { SpreadsheetContext } from "../context/SpreadsheetContext";

function DataTable() {
  const { addRow, addColumn } = useContext(SpreadsheetContext);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}>
      <Toolbar />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#f0f0f0" }}>
        <h2>📊 Spreadsheet</h2>
        <div>
          <button onClick={addRow}>➕ Add Row</button>
          <button onClick={addColumn}>➕ Add Column</button>
        </div>
      </div>
      <Grid />
      <ChartComponent />
    </div>
  );
}

export default DataTable;
