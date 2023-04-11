function unroll(squareArray) {
    if (squareArray.length === 0) {
      return [];
    }
  
    if (squareArray.length === 1) {
      return squareArray[0];
    }
  
    if (squareArray[0].length === 1) {
      return squareArray.map(row => row[0]);
    }
  
    const result = [];
    let startRow = 0;
    let endRow = squareArray.length - 1;
    let startCol = 0;
    let endCol = squareArray[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      for (let i = startCol; i <= endCol; i++) {
        result.push(squareArray[startRow][i]);
      }
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        result.push(squareArray[i][endCol]);
      }
      endCol--;
  
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result.push(squareArray[endRow][i]);
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result.push(squareArray[i][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  module.exports = unroll;