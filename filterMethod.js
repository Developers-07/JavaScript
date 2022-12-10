
// filter()-->using for condition, forEach(), map(), reduce()


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .forEach((i) => {
        console.log(i);
    });


let result = arr.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b);

console.log("Sum of all Numbers = ", result);