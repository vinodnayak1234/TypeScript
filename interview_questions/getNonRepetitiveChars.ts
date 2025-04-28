function getNonRepetitiveChars(str: string): string[] {
    const freq: Record<string, number> = {};
  
    // Count the frequency of each character
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
  
    // Collect characters that appear only once
    const result: string[] = [];
    for (const char of str) {
      if (freq[char] === 1) {
        result.push(char);
      }
    }
  
    return result;
  }
  
  // Example
  console.log(getNonRepetitiveChars("aabccdfe")); // Output: ['b', 'd', 'f', 'e']
  