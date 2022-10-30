let person = [
    {
        name: "John",
        age: 35
    },
    {
        name:"Bill",
        age:23
    },
    {
        name:"Bob",
        age: 17
    },
    {
        name:"Jack",
        age: 20
    },
];

let PalingKecil = [
    {
        name: "hari",
        age: 31
    },
];

let PalingBesar = [
    {
        name: "haru",
        age: 32
    },
];

for(let i = 0; i<person.length; i++)
{
    if(person[i].age < PalingKecil[0].age)
    {
        PalingKecil[0] = person[i];
    }
    
}

console.log("Umur Paling Muda : ", PalingKecil[0].name);

for(let i = 0; i<person.length; i++)
{
    if(person[i].age > PalingBesar[0].age)
    {
        PalingBesar[0] = person[i];
    }
    
}

console.log("Umur Paling Tua  : ", PalingBesar[0].name);



/*
    Buatlah program yang menampilkan siapakah yang memiliki
    umur paling tua dan umur paling muda
*/