// push, pop, shift, unshift, splice

let arr = [1, 3, 5, 7];

arr.push(9);// add value at the end of an array.
console.log(arr);

arr.pop();// remove value at the end of an array.
console.log(arr);

arr.shift();// remove value from the beginning of an array.
console.log(arr);

arr.unshift(2);// add value in the begin of an array.
arr.unshift(10);
console.log(arr);

arr.splice(2, 1, 20);// first value = index number, second value = how many number do u wanna remove, third value = what would u add into that remove value.
console.log(arr);