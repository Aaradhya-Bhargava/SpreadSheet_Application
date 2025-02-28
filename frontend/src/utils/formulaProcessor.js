export const evaluateFormulaAsync = (formula, data, callback) => {
    if (!formula.startsWith("=")) {
      callback(formula);
      return;
    }
  
    const worker = new Worker(new URL("../workers/formulaWorker.js", import.meta.url));
    
    worker.postMessage({ formula, data });
  
    worker.onmessage = function (e) {
      callback(e.data);
    };
  
    worker.onerror = function () {
      callback("ERROR");
    };
  };
  