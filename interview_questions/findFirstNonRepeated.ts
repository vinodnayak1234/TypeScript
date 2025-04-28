function findFirstNonRepeated(arr: string[]): string | undefined {
    const freq: Record<string, number> = {};
  
    // Step 1: Count the frequency of each character
    for (const char of arr) {
      freq[char] = (freq[char] || 0) + 1;
    }
  
    // Step 2: Return the first non-repeating character
    for (const char of arr) {
      if (freq[char] === 1) {
        return char;
      }
    }
  
    return undefined;  // No non-repeating character found
  }
  
  console.log(findFirstNonRepeated(["a", "b", "a", "c", "b", "d"]));  // Output: "c"
