let arr = [4, 5, 6, 'zishan', 8];
arr[5] = 10;
console.log(arr);
console.log("Array Size = ", arr.length);
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let vec = [];
vec.push(5);
vec.push(7);
vec.push(9);
vec.push(10);
vec.pop();
console.log(vec);

// different types of data type
let data = ['zishan', 7, 10.5, { name: 'Zihan' }, function () { console.log('Have Fun!!!') }];
console.log(data);
console.log(data[3].name);
data[4]();

