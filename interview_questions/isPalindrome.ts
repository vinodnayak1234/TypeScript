function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Example
  console.log(isPalindrome('madam')); // true
  