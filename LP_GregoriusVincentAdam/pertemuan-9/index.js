// Rest Parameters:

// menggabungkan semua parameter pada function ke dalam array

// 1.
// const rata2 = (bil1,bil2,...bilangan) => {
//     let sum = bil1 + bil2;
//     for(const bil of bilangan) {
//         sum += bil;
//     }
    
//     return sum / (2 + bilangan.length);
// }


// 2.

// const bar = (param1, param2, ...params) => {
//     console.log("Argument pertama ", param1);
//     console.log("Argument pertama ", param2);
//     console.log("Sisa argument ", params);
//   }
  
//   bar("A", "B", "C", "D", "E");
  

//=========================================================

// Contoh dari Brenda 

// 3.


// Rest Parameter
// const denver = (...integer) => {
//   console.log("\n",integer)
// }
// denver(2*1, 2*2, 2*3, 2*4)

// //in last parameter
// const dennver = (odd1, odd2, ...odds) => {
//   console.log("\npertama:   ",odd1)
//   console.log("kedua:     ",odd2)
//   console.log("other:     ",odds, "\n")
// }
// let counts=[5]
// for (let i = 0; i <= counts.length; i++) {
// if (counts[i]%2 == 1 ){
//   counts = counts[i]; }
// }
// console.log(dennver(counts=[1],[3],[5],[9],[7],[11]))



///==========================================================


//Spread Parameters:

// membagi elemen berbentuk array menjadi element

// let bilangan = [1, 2, 3, 4, 5, 6];
// console.log(...bilangan);
// let nama = "DENVER";
// console.log(...nama);





///==========================================================

// Contoh Dari Yazel

// Rest parameter
//contoh1:
// const myName = (...params) => {
//    console.log(params);
// };
// myName("nama", "saya", "joni");

// //contoh2:
// let myName = (a, b, ...params) => {
//    console.log(a,b,...params);      
// };
// myName("nama", "saya", "adalah", "joni");

//SPREAD OPERATION
//untuk memecahkan elemen yang ada di dalam sebuah array sehingga elemen itu dapat di tambahkan pada sebuah array baru
//contoh1:
// const nomor1 = [1,2,3]
// const nomor2 = [nomor1, 4,5,6]

// console.log(nomor2);





// Destructuring object


// const book = {
//   "title": "Manusia Setengah Salmon",
//   "author": "Raditya Dika",
//   "publisher": {
//     "name": "Gagas Media",
//     "address": "Jakarta Selatan"
//   }
// }

// // destructuring
// const {title, author, publisher:{name, address}} = book;

// console.log(title, author, name, address);

// destructuring Array
/* Destructuring Array serupa dengan destructuring object. Jika objek menggunakan 
tanda kurung kurawal {} sedangkan array menggunakan tanda kurung siku []  */

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);


// array yang berisi nama depan dan nama belakang
let arr = ["Agus", "Santoso"]

// destructuring assignment
// set namaDepan = arr[0]
// dan namaBelakang = arr[1]
// let [namaDepan, namaBelakang] = arr;

// console.log(namaDepan); // Agus
// console.log(namaBelakang);  // Santoso

// Menggabungkan Array dengan Object
    // Array juga dapat digunakan dengan objek dalam object destructuring
    let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};

    let {name:foo, friends: bar} = person;

    console.log(foo);//"Sarah"
    console.log(bar);//["Annie", "Becky"]