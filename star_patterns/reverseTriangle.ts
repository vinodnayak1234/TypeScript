function reverseTriangle(rows: number) {
    for (let i = rows; i >= 1; i--) {
      console.log('* '.repeat(i));
    }
  }
  
  reverseTriangle(5);
  