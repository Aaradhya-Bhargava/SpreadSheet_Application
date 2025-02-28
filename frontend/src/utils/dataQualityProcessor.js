export const processTextFunction = (func, value, extraValue = "") => {
    switch (func) {
      case "TRIM":
        return value.trim();
      case "UPPER":
        return value.toUpperCase();
      case "LOWER":
        return value.toLowerCase();
      case "FIND_AND_REPLACE":
        return value.replace(new RegExp(extraValue, "g"), ""); // Removes all occurrences
      default:
        return value;
    }
  };
  
  // Removes duplicate rows from a 2D array
  export const removeDuplicates = (data) => {
    const uniqueRows = [];
    const rowSet = new Set();
  
    for (let row of data) {
      let rowString = row.join("|");
      if (!rowSet.has(rowString)) {
        uniqueRows.push(row);
        rowSet.add(rowString);
      }
    }
  
    return uniqueRows;

  };

  export const findAndReplace = (data, findText, replaceText) => {
    return data.map(row => row.map(cell => cell.replace(new RegExp(findText, "g"), replaceText)));
  
};
  