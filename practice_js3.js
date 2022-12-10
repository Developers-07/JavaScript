
const n = document.getElementById('main');

n.style.color = 'red';
n.style.backgroundColor = 'yellow';
n.style.fontWeight = 'bolder';

const item = document.getElementsByClassName('list-item');
item[1].style.backgroundColor = 'red';

const lst = document.querySelector('ul');
lst.style.backgroundColor = 'green';


const ar = [2, 4, 5, 6, 7, 9];
const s = ar.length;
console.log(s);

const title = document.querySelectorAll('.list-item');
for (let i = 0; i < title.length; i++){
    title[i].style.backgroundColor = 'orange';
}

// Button part
// const colorArr = ['red', 'blue', 'green', 'orange', 'oranged'];
// i = 0;
// const fun = () => {
//     console.log('Your subtion is done');
//     btn.style.backgroundColor = colorArr[i];
//     i++;
// }
// const btn = document.querySelector('button');
// btn.addEventListener('click', fun);


// Function module part

import { onClick } from './function.js';

const btn1 = document.querySelector('button');
btn1.addEventListener('click', onClick);



