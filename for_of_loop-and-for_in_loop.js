let arr = [];
arr[0] = 1;
arr[99] = 100;

console.log(arr);
console.log(arr.length);

// for loop
console.log('For Loop :');
for (let i = 0; i < 100; i++){
    console.log(arr[i]);
}

// for of loop
console.log('For of Loop :');
for (let val of arr) {
    console.log(val);
}


// for in loop
console.log('For in Loop :');
for (let num in arr) {
    console.log(arr[num]);
}