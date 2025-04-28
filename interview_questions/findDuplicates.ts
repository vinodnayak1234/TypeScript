function findDuplicates(arr: number[]): number[] {
    const seen = new Set<number>();
    const duplicates = new Set<number>();
  
    for (const num of arr) {
      if (seen.has(num)) {
        duplicates.add(num);
      } else {
        seen.add(num);
      }
    }
  
    return Array.from(duplicates);
  }
  
  // Example
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
  