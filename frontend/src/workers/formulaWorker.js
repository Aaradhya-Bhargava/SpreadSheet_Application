/* eslint-disable no-restricted-globals */
self.onmessage = function (e) {
    const { formula, data } = e.data;
    let result = "ERROR";
  
    try {
      let expression = formula.slice(1).toUpperCase();
      expression = expression.replace(/[A-Z]\d+/g, (match) => {
        const col = match.charCodeAt(0) - 65;
        const row = parseInt(match.slice(1)) - 1;
        return data[row] && data[row][col] ? data[row][col] : 0;
      });
  
      result = eval(expression);
    } catch (error) {
      result = "ERROR";
    }
  
    self.postMessage(result); // Send result back to the main thread
  };
  /* eslint-enable no-restricted-globals */
  