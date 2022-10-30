// asynchronus multiparalel
// raise condition = kondisi dimana tidak menunggu, padahal data dibutuhkan, sehingga arraynya NaN atau undifined

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
// synchronus tapi mirip asynchronus
// menunggu tapi yakin datanya akan didapat
// callback hell = membuat rogram lebih susah dibaca

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//         console.log("Proses 3");
//         setTimeout(() => {
//             console.log("Proses 4");
//             setTimeout(() => {
//                 console.log("Proses 5");
//             }, 2000);
//         }, 3000);
//     }, 2000);
// }, 5000);

// 3. Promise
// Promise = Objek, jarang dipakai, promise berupa class, ada 2 parameter
// setelah buat promise, kita consume (gunakan) promise yang telah dibuat sendiri
// promise = pending (menunggu), fullfield () dan reject (data gagal untuk didaptkan)
// then  = bagaimana mengahandle promise, ketika promise berhasil mengembalikan data

let condition = true
let newPromise = new Promise((resolve, reject) => {
    if(condition) {
        // yang dilakukan jika resolve 'fullfield'
        resolve ("Berhasil");
    }
    else {
        reject("Gagal");
    }
});

// newPromise (then - catch)
//   .then((result) => result)
//   .then((result) => {
//     console.log(result);
//     })
//   .catch((error) =>  {
//     console.log(error);
//     });


// async - await
// fungsi untuk menunggu ketika membuat sebuah promise
// const getData = async () => {
//     const result = await newPromise;
//     console.log(result);
// };

// getData();


const getDataUsers = aysnc () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log(response);
}


