// Class in JS


// Object Literal (Assign objectnya langsung)
// constructor: method yang dipanggil secara otomatis pada class object
// 2 cara : object literal dan menggunakan class
// pada class ada properties dan method (behavior), behaviour dibuat dlam bntuk fucntion
// const mobil1 = {
//     warna: 'Merah',
//     merek: 'Honda',
//     transmisi: 'Manual'
//     nyalakanMobil: function(){
//       console.log(`Mobil $(this.merek) dinyalakan`);
//     },
// };

// const mobil2 = {
//     warna: 'Hitam',
//     merek: 'Toyota',
//     transmisi: 'Matic'
// };

// console.log(mobil1);
// console.log(mobil2);

class Mobil {
    constructor(warna, merek, transmisi){
        this.warna = warna;
        this.merek = merek;
        this.transimisi = transmisi;
    }

    nyalakanMbl(){
        console.log(`Mobil merek ${this.merek} dinyalakan`);
    }
}

const honda = new Mobil("Merah", "Honda", "Manual");
const toyota = new Mobil("Hitam", "Toyota", "Matic");
console.log(honda);
honda.nyalakanMbl();
console.log(toyota);
toyota.nyalakanMbl();

// inheritance (pewarisan)

class Toyota extends Mobil{
    constructor(warna, merek, transmisi, mesin, bhanbakar){
        super(warna, merek, transmisi)
        this.mesin = mesin;
        this.bhanbakar = bhanbakar;
    }
    matikanMbl(){
        console.log(`Mobil merek ${this.merek} dimatikan`);
    }
}

const agya = new Toyota('Kuning', 'agya', 'manual', '1200cc', 'Bensin');
console.log(agya);
agya.matikanMbl();
