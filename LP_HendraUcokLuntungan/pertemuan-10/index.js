//Destructuring manual
let person = ['John Doe', 'Manado', 33, true];

// let fullName = person[0];
// let address = person[1];
// let age = person[2];
// let isMarried = person[3];

// let [fullName, address, age, isMarried] = person;
// console.log(person);

let [fullName, address, ...rest] = person;
console.log(person);
console.log(rest);

// destructturing object tidak melihat urutan


let obj = {
    title: 'Title let',
    subTitle: 'Sub title',
    image: "Image",
};

function Header({title}){
    console.log(title);
}

Header(obj);


// modules untuk compile harus menggunakan web browser, tidak bisa pakai node.js
// modules penting untuk memecah 1 komponen jadi 1 file sendiri, file yang terpisah