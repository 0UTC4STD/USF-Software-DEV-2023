// Function to calculate the mean of an array of numbers
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const mean = sum / numbers.length;
    return mean;
  }
  
  // Function to calculate the median of an array of numbers
  function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const middle = Math.floor(numbers.length / 2);
  
    if (numbers.length % 2 === 0) {
      const median = (numbers[middle - 1] + numbers[middle]) / 2;
      return median;
    } else {
      const median = numbers[middle];
      return median;
    }
  }
  
  // Function to calculate the mode of an array of numbers
  function calculateMode(numbers) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mode;
  
    numbers.forEach(num => {
      if (frequencyMap[num]) {
        frequencyMap[num]++;
      } else {
        frequencyMap[num] = 1;
      }
  
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mode = num;
      }
    });
  
    return mode;
  }
  
  module.exports = {
    calculateMean,
    calculateMedian,
    calculateMode
  };