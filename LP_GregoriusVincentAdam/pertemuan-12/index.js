// Synchronous

// console.log("\nContoh Synchronous\n");
// console.log("Contoh 1\n");

// console.log("Baris 1");
// console.log("Baris 2"); 
// console.log("Baris 3");




// console.log("\n--------------------------------------------------------\n");

// Asynchronous

/* Jika JavaScript secara default bersifat synchronous, maka bagaimana jika ingin menerapkan proses asynchronous ? 
Ada banyak method asynchronous yang terdapat di JavaScript, salah satu contohnya adalah, setTimeout 
(function, milliseconds) digunakan untuk simulasi pemanggilan kembali proses asynchronous yang sedang/sudah selesai dijalankan. 
Contoh asynchronous menggunakan setTimeout() :  */



// console.log("\nContoh Asynchronous \n");

// console.log("Contoh 1 dari modul \n");
// setTimeout(() => {
//     console.log("Cuci baju"); // proses asynchronous
//   }, 2000);
//   console.log("Menyapu");
//   console.log("Mengepel");
//   console.log("Memasak");
  


// Contoh yang ke 2 Asynchronous dari sir

// console.log("\nContoh 2 dari sir \n");
// console.log("Baris 1");
// setTimeout(() => {
//     console.log("Baris 2"); 
// }, 5000);
// console.log("Baris 3");


// Contoh yang ke 3 Asynchronous dari sir

// console.log("\nContoh 3 dari sir \n");

// console.log("Baris 1");
// setTimeout(() => {
//     console.log("Baris 2");
//     setTimeout
// })



///------------------------------------------------------------------------------

// Rabu - 28 - September - 2022

// Lanjutan dari pertemuan  yang ke 11

// Seharusnya atau mungkin : Pembahasan di pertemuan yang ke 12 tapi di buat di pertemuan 11


///----------------------------------------------------------------------------------

// Asynchronous

// 1. Multythread / Parallel

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2");
// }, 5000);
// setTimeout(() => {
//     console.log("Proses 3");
// }, 2000);
// setTimeout(() => {
//     console.log("Proses 4");
// }, 3000);
// console.log("Proses 5");




// 2. Concurent

// console.log("\n-----------------------------------------------------------------------\n");

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2 (Mengambil data API)");
//     setTimeout(() => {
//         console.log("Proses 3");
//         setTimeout(() => {
//             console.log("Proses 4");
//             setTimeout(() => {
//                 console.log("Proses 5 (Menggunakan data dari )");
//             }, 2000);
//         }, 3000);
//     }, 2000);
// }, 5000);




// Promise
// console.log("\n-----------------------------------------------------------------------\n");

// console.log("Contoh Promise \n");

// let condition = true;
// let newPromise = new Promise((resolve, reject)=>{
//     if(condition) {
//         // apa yang dilakukan jika promise 'fulfilled'
//         resolve("Berhasil");
//     }else { 
//         // apa yang dilakukan jika promise 'rejected'
//         reject("Gagal");
//     }
// });




// Ada dua cara menggunakan Promise

// 1. The - Catch

// newPromise
// .then ((result) => result)
// .then ((result 2) => {
//     console.log(result2);
// })
// .catch((error) => {
//     console.log(error);
// });


// 2. Async - Await

// Const getData = async () => {
//     const result = await newPromise;
//     console.log(result);
// };

// getData();

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((json) => {
//     json.forEach((item) => console.log(item.name));
// });

Const getDataUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json();
        json.forEach((name) => console.log(name));
    } catch (error) {
        console.log(`Error to get data ${error}`);
    }
};




// Contoh 1

// newPromise
// .then ((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// Contoh 2

// newPromise
// .then ((result) => {
//     return(result);
// })
// .then ((result 2) => {
//     console.log(result2);
// })
// .catch((error) => {
//     console.log(error);
// });



// Contoh 3

// newPromise
// .then ((result) => result)
// .then ((result 2) => {
//     console.log(result2);
// })
// .catch((error) => {
//     console.log(error);
// });