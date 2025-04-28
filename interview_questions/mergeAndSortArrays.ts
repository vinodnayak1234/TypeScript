function mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray = [...arr1, ...arr2];
    return mergedArray.sort((a, b) => a - b);
  }
  
  // Example usage
  console.log(mergeAndSortArrays([3, 1], [4, 2])); // [1, 2, 3, 4]
  