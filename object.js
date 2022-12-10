let alien = {
    name : "Zishan",
    dept : "CSE",
    tech: "JavaScript",
    'intrest field' : "Web",
}
console.log(alien['intrest field']);

let human = {
    name: "Zishan Chowdhury",
    dept: "Computer Science & Engineering",
    university: "Daffodil International University",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "hp",
    }

}
console.log(human.laptop.brand?.length);
//delete human.laptop;
console.log(human);

for (let i in human) {
    console.log(i);
    if (i == 'laptop') {
        for (let j in human['laptop']) {
            console.log(j);
        }
    }
}