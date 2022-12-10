
// Destructure in Array of number
let arr = [1, 3, 5, 7, 9];
let [a, b, c, d, e] = arr;
console.log(e);

// swap two values
let x = 5;
let y = 10;
let temp;

temp = y;
y = x;
x = temp;
console.log(x, y);

// swap two values using destructure
[x, y] = [y, x];
console.log(`Value of X = ${x} and Value of Y = ${y}`);



// Destructure in Array of string
let naam = "My name is Zishan Kabir Chowdhury".split(' ');
console.log(naam);
let [n1, n2, n3, n4, n5, n6] = naam;
console.log(n4);

let s = "Hi How are you?".split(' ');
console.log(s);
let [z1, ...z2] = s;  // ... represents the rest of the elements
console.log(z2);
