function countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage
  console.log(countVowels("hello world")); // 3
  