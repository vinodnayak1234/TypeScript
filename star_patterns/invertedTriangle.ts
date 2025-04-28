function invertedTriangle(rows: number) {
    for (let i = rows; i >= 1; i--) {
      console.log('* '.repeat(i));
    }
  }
  
  invertedTriangle(5);
  