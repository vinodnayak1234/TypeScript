function rightAlignedTriangle(rows: number) {
    for (let i = 1; i <= rows; i++) {
      const spaces = '  '.repeat(rows - i);
      const stars = '* '.repeat(i);
      console.log(spaces + stars);
    }
  }
  
  rightAlignedTriangle(5);
  