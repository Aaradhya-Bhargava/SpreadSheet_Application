import React, { useContext } from "react";
import { SpreadsheetContext } from "../context/SpreadsheetContext";
import { Chart } from "react-google-charts";

function ChartComponent() {
  const { cells } = useContext(SpreadsheetContext);

  const data = [["Row", "Sum"]];
  cells.forEach((row, index) => {
    const sum = row.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
    data.push([`Row ${index + 1}`, sum]);
  });

  return (
    <div>
      <h3>📊 Data Chart</h3>
      <Chart chartType="BarChart" width="100%" height="300px" data={data} />
    </div>
  );
}

export default ChartComponent;
