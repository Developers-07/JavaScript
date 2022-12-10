console.log("Hello World!💕");

/*let ans = "nan";
switch (ans) {
    case 'yes': {
        console.log('😊😊😊');
        break;
    }
    case 'no': {
        console.log('😒😒😒');
        break;
    }
    default: {
        console.log('None of them is work');
    }

}*/
let ans = prompt("How are you?");
const title = document.querySelector('h1');

if (ans == 'good') {
    title.innerText = '🥰🥰🥰';
}
else {
    title.innerText = '😥😥😥';
}


// if (ans == 'Good') {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }
