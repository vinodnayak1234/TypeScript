function areArraysEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  // Example usage
  console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false
  