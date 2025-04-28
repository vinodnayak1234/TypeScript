function isArraySorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }
  
  // Example usage
  console.log(isArraySorted([1, 2, 3, 4])); // true
  console.log(isArraySorted([1, 3, 2, 4])); // false
  