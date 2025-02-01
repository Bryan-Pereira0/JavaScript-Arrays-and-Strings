//Assignment 1

//Task 1

let fruits = ['apple', 'banana', 'orange'];
fruits.push('pear');
console.log(fruits)
let fruits2 = ['apple', 'banana', 'orange'];
fruits2.pop();
console.log(fruits2)

//Task 2

let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers)

//Task 3

let numbers2 = [3, 1, 5, 2, 4];
let doubled = numbers2.map(num => num * 2);
console.log(doubled)

let numbers3 = [3, 1, 5, 2, 4];
let oddnumbers = numbers2.filter(num => num % 2 !== 0);
console.log(oddnumbers)

let numbers4 = [3, 1, 5, 2, 4];
let sum = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

//Assignment 2

//Task 1

let message = "Hello, World!";
console.log(message.length)

//Task 2

let text = "Hello, World!";
console.log(text.toUpperCase())
let text2 = "Hello, World!";
console.log(text2.toLowerCase())

//Task 3

let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(10, 25);
console.log(substring)

//Task 4
let sentence2 = "The quick brown fox";
console.log(sentence2.split(' '))