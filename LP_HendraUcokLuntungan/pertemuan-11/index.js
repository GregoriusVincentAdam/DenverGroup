// Synchronus JS (Blocking)
// ketika ada proses dalam waktu yang lama, dia akan menunggu sembari proses tersebut selesai baru mengerjakan proses lainnya.

// console.log("Baris 1");
// console.log("Baris 2");
// console.log("Baris 3");


// Asynchronus JS (Non Blocking)
// bisa mengerjakan proses lain, sementara menunggu proses yang lama itu selesai
// setTimeout = salah 1 fungsi Asynchronus
// setTimeout(function, minisecongs)


// console.log("Baris 1");
// setTimeout(() =>{
//     console.log("Baris 2");
// }, 5000);
// console.log("Baris 3");

// console.log("------------------");
// // another example
// console.log("Baris 1");
// setTimeout(() =>{
//     console.log("get data from api");
//     setTimeout(() => {
//         console.log("use data from api");
//     }, 5000);
// }, 5000);

// promise

let condition = true;
let newPromise = new Promise((resolve, reject) => {
    if(condition) {
        // yang dilakukan jika resolve 'fullfielles
        resolve ("Berhasil");
    }
    else {
        reject("Gagal");
    }
});

newPromise
  .then((result) => {
    console.log(result);
    })
  .catch((error) =>  {
    console.log(error);
    });


