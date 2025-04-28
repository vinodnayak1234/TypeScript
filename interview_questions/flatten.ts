function flatten(arr: any[]): any[] {
    return arr.flat(Infinity);
  }
  
  // Example
  console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
  