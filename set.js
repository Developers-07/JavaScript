// set has no index, add(), has(), We can use for of loop or forEach loop in set, size

let val = new Set();
val.add(1);
val.add(2);
val.add(2);
val.add(3);
val.add(1);
val.add(4);
val.add(5);
val.add(4);

console.log(val);
console.log(val.size);
console.log(val.has(3));

console.log();
for (let i of val) {
    console.log(i);
}

console.log();
val.forEach(n => {
    console.log(n);
})