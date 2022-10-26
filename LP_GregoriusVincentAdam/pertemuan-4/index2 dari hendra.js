let bilangan1 = "10";
let bilangan2 = 10;

console.log(bilangan1 === bilangan2);

let umur = 17; //ternary operator
let hasil =  umur >= 17 ? "Anda bisa buat SIM" : "Anda belum bisa buat SIM"
console.log(hasil);

console.log(true && false);
console.log(false || true);
console.log(!false);


//Javascript Function = sebuah mesin yang menerima dan mengeluarkan output

//function declaration
function bola(){
    return "Hello World";
}

console.log(bola() + ", nama kamu siapa?");

//function bola(firstN, lastN){
//    return "Hello " + firstN + lastN;
//}

//console.log(bola("john" "doe"));

//function expressions
let bola2 = function(){
    console.log("Hello World 2");
}

bola2()