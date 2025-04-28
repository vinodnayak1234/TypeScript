function intersectArrays(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const result = arr2.filter(item => set1.has(item));  // Only keep items that are in both arrays
    return result;
  }
  
  console.log(intersectArrays([1, 2, 3], [2, 3, 4]));  // Output: [2, 3]
  