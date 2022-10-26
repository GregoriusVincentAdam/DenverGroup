
// let = untuk deklarasi variabel dimana variabel berisi nilai tak tentu, yang bisa saja diubah.
let bi = 10;
bi = 45;
console.log(bi);

// const = untuk deklarasi variabel dengan nilai constant, nilainya tetap tidak bisa diubah.
const bir = 23;
// bir = 22;       -- error result
console.log(bir);

// pada const, variabel dengan tipe objek atau array tidak bisa diganti nilainya, tapi properti/elemennya bisa.
const hari = ["Senin", "Selasa", "Rabu"];
// hari = ["Kamis", "Jumat"];     -- error value
hari.push("Kamis", "Jumat");  //.push adlah method untuk tambahkan elemen pada variabel const.
console.log(hari);

// variabel var, tidak lagi dipakai di ES6, karena tidak memunculkan error walaupun nama variabel yang sama sudah pernah dideklarasikan.

var bhs = "C";
var bhs = "C++";
console.log(bhs);

// Dengan var juga dapat menimbulkan block scoping, dimana variabel dalam operator kondisi bisa diakses dan diubah nilainya dari luar blok tersebut, dan kita menghindari hal tersebut.
var jdl = "Setan";

if (jdl == "Setan") {
    var pngrng = "Kastil";
}
console.log(pngrng);

// String literal

let nama = "Cinta";
let gender = "Perempuan";

let sentence = `Halo, nama saya ${nama}, saya adalah seorang ${gender}`;
console.log(sentence);



