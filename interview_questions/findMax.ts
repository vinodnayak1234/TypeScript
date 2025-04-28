function findMax(arr: number[]): number {
    return Math.max(...arr);  // Spread the array into Math.max
  }
  
  console.log(findMax([1, 3, 7, 2, 8]));  // Output: 8
  