function findEvenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0)
}
console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10]))