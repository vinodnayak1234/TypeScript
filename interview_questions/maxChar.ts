function maxChar(str: string): string {
    const freq: Record<string, number> = {};
    for (const char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
  }
  
  // Example
  console.log(maxChar("aabbbcddddddcc")); // d
  