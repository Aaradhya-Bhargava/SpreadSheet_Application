import React from "react";
import { SpreadsheetProvider } from "./context/SpreadsheetContext";
import DataTable from "./components/DataTable";

function App() {
  return (
    <SpreadsheetProvider>
      <div>
        {/* ✅ Renders only once */}
        <DataTable />
      </div>
    </SpreadsheetProvider>
  );
}

export default App;
