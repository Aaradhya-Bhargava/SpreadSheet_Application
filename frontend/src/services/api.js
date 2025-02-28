const API_URL = "http://localhost:5000/api/spreadsheet";

// this is to Save Spreadsheet Data
export const saveSpreadsheet = async (name, data) => {
  const response = await fetch(`${API_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, data }),
  });
  return response.json();
};

//this is to Load Spreadsheet Data
export const loadSpreadsheet = async (name) => {
  const response = await fetch(`${API_URL}/load/${name}`);
  return response.json();
};
