function findRepetitiveChars(str: string): string[] {
    const freq: Record<string, number> = {};
    const duplicates: Set<string> = new Set();
  
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
      if (freq[char] === 2) {
        duplicates.add(char);
      }
    }
  
    return Array.from(duplicates);
  }
  
  // Example
  console.log(findRepetitiveChars("aabbbcdd")); // ['a', 'b', 'd']
  