import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (type) => {
    const numArray = numbers.split(",").map(Number);
    let output;

    switch (type) {
      case "SUM":
        output = numArray.reduce((acc, num) => acc + num, 0);
        break;
      case "AVERAGE":
        output = numArray.length ? numArray.reduce((acc, num) => acc + num, 0) / numArray.length : 0;
        break;
      case "MAX":
        output = Math.max(...numArray);
        break;
      case "MIN":
        output = Math.min(...numArray);
        break;
      case "COUNT":
        output = numArray.length;
        break;
      default:
        output = "Invalid operation";
    }

    setResult(output);
  };

  return (
    <div className="sidebar">
      <h3>Test Functions</h3>
      <input
        type="text"
        placeholder="Enter numbers (comma-separated)"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={() => calculate("SUM")}>SUM</button>
      <button onClick={() => calculate("AVERAGE")}>AVERAGE</button>
      <button onClick={() => calculate("MAX")}>MAX</button>
      <button onClick={() => calculate("MIN")}>MIN</button>
      <button onClick={() => calculate("COUNT")}>COUNT</button>
      <p>Result: {result !== null ? result : "N/A"}</p>
    </div>
  );
}

export default Sidebar;
