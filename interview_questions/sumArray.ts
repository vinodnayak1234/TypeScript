function sumArray(arr: number[]): number {
    let sum = 0; // Initialize sum to 0
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; // Add each element to sum
    }
  
    return sum; // Return the final sum
  }
  
  // Example usage
  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(result); // Output: 15


  
  
  function sumOfArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15
  