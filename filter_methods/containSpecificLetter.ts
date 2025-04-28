function containsSpecificLetter(words: string[]): string[] {
    return words.filter(word => word.includes("a"));
}
console.log(containsSpecificLetter(["apple", "banana", "cherry", "date"]));