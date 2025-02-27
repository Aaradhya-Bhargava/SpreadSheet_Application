exports.evaluateFormula = (formula, data) => {
    if (!formula.startsWith("=")) return formula;
  
    try {
      let expression = formula.slice(1).toUpperCase();
      
      // Replace cell references (A1, B2) with values from the data array
      expression = expression.replace(/[A-Z]\d+/g, (match) => {
        const col = match.charCodeAt(0) - 65;
        const row = parseInt(match.slice(1)) - 1;
        return data[row] && data[row][col] ? data[row][col] : 0;
      });
  
      return eval(expression);
    } catch (error) {
      return "ERROR";
    }
  };
  