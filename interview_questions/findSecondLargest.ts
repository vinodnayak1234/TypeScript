function findSecondLargest(arr: number[]): number {
    const uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a);    // Sort in descending order
    return uniqueArr[1];                 // Second largest number
  }
  
  console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
  