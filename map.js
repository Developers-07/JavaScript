// set(), get(), keys(), values(), has(), for of loop and forEach loop

let map = new Map();
map.set("Zishan", "JavaScript");
map.set("Razib", "PHP");
map.set("Abir", "Python");
map.set("Zishan", "C++");

console.log(map);
console.log(map.keys());
console.log(map.values());
console.log(map.has("Abir"));
console.log(map.get('Zishan'));


for (let [i, j] of map) {
    console.log(i, j);
}

console.log()
map.forEach((x, y) => {
    console.log(y + " : " + x);
});