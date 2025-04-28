const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 30 },
  ];
  const age30Users = users.filter(user => user.age === 30);
  console.log(age30Users); // Output: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }