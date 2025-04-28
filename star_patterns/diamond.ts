function diamond(rows: number) {
    // Upper half
    for (let i = 1; i <= rows; i++) {
      const spaces = ' '.repeat(rows - i);
      const stars = '* '.repeat(i);
      console.log(spaces + stars);
    }
    // Lower half
    for (let i = rows - 1; i >= 1; i--) {
      const spaces = ' '.repeat(rows - i);
      const stars = '* '.repeat(i);
      console.log(spaces + stars);
    }
  }
  
  diamond(3);
  