function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
  }
  
  // Example
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
  