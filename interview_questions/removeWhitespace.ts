function removeWhitespace(str: string): string {
    return str.replace(/\s+/g, '');
  }
  
  // Example usage
  console.log(removeWhitespace(" hello world ")); // "helloworld"
  