function removeElement(arr: number[], element: number): number[] {
    return arr.filter(item => item !== element);
  }
  
  // Example usage
  console.log(removeElement([1, 2, 3, 4], 3)); // [1, 2, 4]
  