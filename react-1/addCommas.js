function addCommas(number) {
  // Convert the number to a string
  let str = String(number);
  
  // Check if the number is negative
  let isNegative = str.startsWith('-');
  
  // Remove the negative sign if present
  if (isNegative) {
    str = str.slice(1);
  }
  
  // Split the string into integer and decimal parts (if any)
  let parts = str.split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] || '';
  
  // Insert commas every three digits in the integer part
  let result = '';
  for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
    if (j > 0 && j % 3 === 0) {
      result = ',' + result;
    }
    result = integerPart[i] + result;
  }
  
  // Add the decimal part back (if any)
  if (decimalPart) {
    result += '.' + decimalPart;
  }
  
  // Add the negative sign back (if any)
  if (isNegative) {
    result = '-' + result;
  }
  
  // Return the formatted number as a string
  return result;
}
  
  module.exports = addCommas;