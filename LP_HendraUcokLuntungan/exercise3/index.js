// Nama : Luntungan, Hendra Ucok
// Front-End Web Development (A)

let person = [
    {
        name: "John",
        age: 35
    },
    {
        name: "Bill",
        age: 23
    },
    {
        name: "Bob",
        age: 17
    },
    {
        name: "Jack",
        age: 20
    },
];

/* program menampilkan umur orang yang paling tua dan paling muda*/

let hasilMax = Math.max(person[0].age, person[1].age, person[2].age, person[3].age);
let hasilMin = Math.min(person[0].age, person[1].age, person[2].age, person[3].age);

for(let i = 0; i< person.length; i++){
    if(person[i].age == hasilMax)
    {
        console.log(person[i]);
    }
}

for(let i = 0; i< person.length; i++){
    if(person[i].age == hasilMin)
    {
        console.log(person[i]);
    }
}

