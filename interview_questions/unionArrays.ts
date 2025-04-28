function unionArrays(arr1: number[], arr2: number[]): number[] {
    return [...new Set([...arr1, ...arr2])];  // Combine and remove duplicates
  }
  
  console.log(unionArrays([1, 2, 3], [3, 4, 5]));  // Output: [1, 2, 3, 4, 5]
  