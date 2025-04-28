function findUniqueValues(arr: number[]): number[] {
    const freq: Record<number, number> = {};
  
    for (const num of arr) {
      freq[num] = (freq[num] || 0) + 1;
    }
  
    return arr.filter(num => freq[num] === 1);
  }
  
  // Example
  console.log(findUniqueValues([1, 2, 2, 3, 4, 4])); // Output: [1, 3]
  