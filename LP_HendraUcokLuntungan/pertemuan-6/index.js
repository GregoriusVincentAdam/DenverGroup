let numbers = [9, 5, 3, 2, 12, 4];

//  callback function
numbers.forEach(function(nilai, index, array) {
    console.log("Nilai : ", nilai, "Index : ", index, "Array : ", array);
});

// array(map)
let outp = numbers.map(function(value){
    return value + 10;
});

console.log("Array Numbers : ", numbers);
console.log("Array Output : ", outp);

// other case
let input = [100, 50, 60, 10];

let output = input.map(function (item) {
  return item/10;
});

console.log(input);
console.log(output);

// array(filter)

let filterArr = numbers.filter(function (value){
    return value > 5;
})

console.log("Filter Array : ", filterArr);

// filter mengembalikan banyak nilai, sehingga dia array
// find hanya mengembalikan 1 nilai, jadi dia bukan array
