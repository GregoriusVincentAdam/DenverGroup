// Pertemuan tanggal 19 September 2022 (Pertemuan 9)
// Rest Parameter dan Spread Operator

// Pada JavaScript ES6 terdapat Rest Parameter dan Spread Operator. Keduanya sama-sama menggunakan elipsis atau tiga buah titik dalam sintaxnya, tetapi memiliki fungsi dan kegunaan yang berbeda.

// REST PARAMETERS
// Rest parameter adalah parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan kepada suatu fungsi. Dengan kata lain Rest Parameter menggabungkan semua parameter pada function dalam sebuah Array.

// Jika kita menjalankan sebuah function dengan output yang banyak, dan paramternya hanya 1 dan tanpa rest parameter, maka hanya nilai pertama saja yang akan ditampilkan sebagai output.
const day = (nama) => {
    console.log(nama);
  };
  
  day("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// output: Sunday

// Jika pada kasus diatas kita menggunakan rest parameter, maka semua nilai yang dideklarasikan akan dijadikan output menggunakan array.
const days = (...name) => {
    console.log(name);
  };
  
  days("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// output: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Other example
const num = (a, b) => {
    return a - b;
}
console.log(num(10, 3, 25, 6));
// output: 7, hanya mengurangkan nilai ke-1 dan ke-2 yaitu 10 dan 3.

// Rest parameter juga bisa mewakili sisa argument yang belum dipetakan kedalam parameter lainnya. kita membuatnya dengan cara menambahkan elipsis pada parameter terakhir dalam function.

const ang = (ang1, ang2, ...sum) => {

    

    console.log("angka 1 = ", ang1);
    console.log("angka 2 = ", ang2);
    console.log("Penjumlahan = ", sum);
}
ang(18, 4, 23, 67);