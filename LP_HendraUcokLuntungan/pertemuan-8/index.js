// // let fullNa = "John Doe";

// // let fullN = "Jack";

// // // var tidak mengenal blockscop

// // console.log(fullN);

// // const numbers = [1, 2, 3, 4, 5];
// // numbers[3] = 100;

// // console.log(numbers);

// // // string literals

// // let nama = "John"
// // let age = "19"

// // let greet = "Hallo nama saya " + nama + ". Umur saya " + age + " tahun";
// // console.log(greet);
// // let greet2 = `hello nama saya ${nama}, umur saya ${age + 4} tahun`;
// // console.log(greet2);

// // arrow function

// function greetings(){           //function declaration
//     return "Hello World!";
// }

// // function expression

// const greet2 = function(){
//     return "Hello world2";
// }

// // Arrow function
// const greet3 = () => {
//     return "Hello arrow function";
// };

// const greet4 = (nama) => {
//     return `Hello ${nama}`;
// };

// // implisit return value = jika isi function hanya return, format penulisannya bisa diubah seperti dibawah Ini
// const namaF = (nama) => "Hello " + nama;

// console.log(greetings())
// console.log(greet2())
// console.log(greet3())
// console.log(greet4("Jack"))
// console.log(namaF("Rebbeca"))

// Default parameter

const greet = (nama = "unnamed") => `Hello ${nama}`;

console.log(greet('janice'));
console.log(greet());

