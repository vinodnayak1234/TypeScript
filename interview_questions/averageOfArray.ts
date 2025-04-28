function averageOfArray(arr: number[]): number {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum / arr.length;
  }
  
  console.log(averageOfArray([1, 2, 3, 4, 5])); // Output: 3


function averageOfArray1(arr: number[]): number {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  }
  
  console.log(averageOfArray1([1, 2, 3, 4, 5])); // Output: 3
  
