// ------- Let And Const & Var --------------------

// var fullName = "John Doe";

// let fullNamme = "Jack";

// // console.log(fullName);

// const numbers = [1, 2, 3, , 4, 5];
// numbers[1] = 10;

// // numbers = [5, 6, 7];

// console.log(numbers);




//-------- String Literals --------------------------------

// let nama = "John";
// let age = 30;

// let greetings = "Hello Nama Saya" + nama + ". Umur Saya" + age + " tahun";
// // ES6
// let greetings6  = `Hello nama saya ${nama}. Umur saya ${age} tahun. `;
// console.log(greetings6);



// --------- Arrow Function --------------------------------

// function greetings()
//  {
//     return "Hello world";
//  }

// // Function Expression

// Const greetings2 = function () {
//     return "Hello World2";
// }

// // Arrow Function

// const greetings3 = (nama) => `Hello ${nama}`;

// console.log(greetings());
// console.log(greetings3("John"));



// --- Default Parameter --------------------------------

const greetings = (nama, age = 35) => `Hello ${nama}. Umur saya ${age} tahun`;

console.log(greetings("John"));
