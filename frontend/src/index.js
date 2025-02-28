import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SpreadsheetProvider } from "./context/SpreadsheetContext"; // ✅ Import SpreadsheetProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <SpreadsheetProvider>  {/* ✅ Wrap App in SpreadsheetProvider */}
        <App />
      </SpreadsheetProvider>
    </DndProvider>
  </React.StrictMode>
);
