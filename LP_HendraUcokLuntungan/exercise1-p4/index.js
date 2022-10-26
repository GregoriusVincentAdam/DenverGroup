
// Nama : Luntungan, Hendra Ucok
// Matkul Front-End Web Development (A)
// Latihan JavaScript String


// 1. JavaScript CONCAT

// Metode concat() akan menggabungkan 2 atau lebih string, tetapi tidak mengubah string yang ada dan return string baru

let text = "Undang";                                        // dua string
let text2 = "undang";
let result = text.concat("-", text2);
console.log(result);

let word1 = "I";                                            // tiga string
let word2 = "Love";
let word3 = "You";
console.log(results = word1.concat(" ", word2, " ", word3));



// 2. JavaScript INCLUDES

// include() mengembalikan nilai true jika string berisi string tertentu. Jika tidak, ia mengembalikan false. include() juga adalah case sensitive

let sila1 = "Ketuhanan Yang Maha Esa";
let result3 = sila1.includes("Maha");
console.log(result3);

let sila2 = "Kemanusiaan Yang Adil dan Beradab";        // case sensitive
let result4 = sila2.includes("adil");
console.log(result4);

let sila3 = "Persatuan Indonesia";                      // dimulai dari posisi, indonesia mulai index 11
console.log(sila3.includes("Indonesia", 10));           // output: true

let bias = "aku adalah seorang kapiten";                // dimulai dari posisi, seorang mulai index 10
console.log(bias.includes("seorang", 20));              // output: false



// 3. JavaScript LENGTH

// length mengembalikan panjang dari string. panjang dari empty string adalah 0.

let sila4 = "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan";
let length = sila4.length;
console.log(length);                                    // output: 83

let empty = "";
console.log(empty.length);



// 4. JavaScript SPLIT

// Split akan membagi string perkata, akan mengembalikan new array tetapi tidak mengubah string baru

let sila5 = "Keadilan Sosial Bagi Seluruh Rakyat Indonesia";
const myArray = sila5.split(" ");
console.log(myArray);

let sentences = "Universitas Klabat di Kecamatan Airmadidi";
const myUni = sentences.split(" ");
let word = myUni[2];                              //split kata dan return kata ketiga (sesuai index)
console.log(word);

const myUniv = sentences.split("");               // split karakter termasuk spasi
console.log(myUniv);

const myUniversity = sentences.split(" ", 3);     // menggunakan parameter (tampilkan kata, jumlah ssuai parameter)
console.log(myUniversity);

const myyUniv = sentences.split("a");             // split huruf dari kata 
console.log(myyUniv);



// 5. JavaScript SLICE

// slice digunakan untuk ekstrak bagian dari string, mengembalikan nilai yang diekstrak dalam string baru, tetapi tidak mengubah string asli. Bagian string yang diekstrak ditentukan berdasarkan parameter awal dan akhir

let txt2 = "Maju Tak Gentar";                       
let result2 = txt2.slice(9, 15);                // Slice kata 'Gentar'
console.log(result2);
console.log(txt2.slice(5));                     // Slice posisi index 5 sampai akhir
console.log(txt2.slice(0, 1));                  // Slice hanya karakter pertama
console.log(txt2.slice(-1));                    // Slice hanya karakter terakhir

// 6. JavaScript SUBSTRING

// substring akan ekstrak karakter diantara 2 posisi indeks dari string, dan return substring, ekstrak karakter dari awal sampai akhir tetapi tidak mengubah string yang asli.

let fac = "Fakultas Ilmu Komputer";
let reslt = fac.substring(0, 5); 
console.log(reslt);
console.log(fac.substring(9));              // mulai dari posisi 9
console.log(fac.substring(4, 1));           // jika indeks awal lebih besar dari indeks akhir, posisi ditukar
console.log(fac.substring(-3));             // jika mulai dari index dibawah 0 (min), maka dimulai dari index 0
console.log(fac.substring(0, 1));           // hanya index pertama
console.log(fac.substring(fac.length - 1)); // hanya index akhir



// 7. JavaScript TOLOWERCASE

// toLowerCase digunakan untuk konversi string menjadi kata/karakter yang lowercase, tetapi tidak merubah string aslinya.

let low = "PERHATIAN!";
let reslow = low.toLowerCase();
console.log(reslow);



// 8. JavaScript TOUPPERCASE

// toUpperCase digunakan untuk konversi string menjadi kata/karakter yang uppercase, tetapi tidak merubah string aslinya.

let upp = "perhatian!";
let resupp = upp.toUpperCase();
console.log(resupp);



// 9. JavaScript TRIM

// Trim digunakan untuk menghapus spasi pada string dari 2 sisi, tidak mengubah string aslinya.

let whte = "                Black and white                 ";
let resultt = whte.trim();
console.log(resultt);

let blck = "       Black and White 2       ";
let reesult = blck.replace(/^\s+|\s+$/gm,'');
console.log(reesult);



// 10. JavaScript VALUE OF

// valueOf mengembalikan primitif value dari string, tidak mengubah string aslinya, digunakan untuk konversi string object menjadi string. valueof adalah metode default untuk javascript string.

let tex = "Glimpse of Us";
let resltt = tex.valueOf();
console.log(resltt);

let textt = "Glimpse of Us - Joji";
console.log(textt);







