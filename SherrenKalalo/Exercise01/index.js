// Concat = menggabungkan 2 atau lebih string
    let text1 = "EXO slogan  "
    let text2 = "We Are One"
    let text  = text1.concat(" : ", text2)
    console.log(text)
        //selain concat, bisa juga pakai "+"
        text3 = "It Ends" + " " + "With Us"
        text4 = "It Ends".concat(" ", "With Us")
        console.log(text3)
        console.log(text4)

//Includes = returns true jika string berisi nilai yang ditentukan/diinginkan
    let text5 = "Hai Ferren, welcome to K-pop."
    text5.includes("Ferren")
    console.log(text5)

//Length = retuns panjang dari suatu string
    let text6  = "Gebi apa kabar?"
    let length = text6.length
    console.log(length)

//Split = string dapat dikonversi ke array 
    let text10    = "Apa apa dengan dunia";
    const myArray = text10.split(" ");
    console.log(myArray)

//Slice = slice yang di minta bisa mengembalikan bagian yang diekstraksi dalam string baru
    let text11 = "Dragon Fruit, Batata, Jambu"
    let part   = text11.slice(2, 4)
    console.log(part)

//Substring = sama seperti slice, tapi substring nilai awal dan akhir kurang dari 0 diperlakukan sebagai 0
    let text12 = "Dragon Fruit, Batata, Jambu"
    let part2  = text12.substring(2, 4)
    console.log(part2)

//toLowerCase = string yang dikonversi menjadi huruf kecil
    let text7 = "DaRi PaGi Ke MaLaM"
    let lwr   = text7.toLowerCase()
    console.log(lwr)

//toUpperCase = string yang dikonversi menjadi huruf besar
    let uppr = text7.toUpperCase()
    console.log(uppr)

//Trim = menghapus spasi dari kedua sisi string
    let text8 = "      Seventeen BlackPink     "
    let trmm  = text8.trim()
    console.log(trmm)

//ValueOf = mengembalikan nilai primitif dari sebuah string
    let text9  = "The Glimpse Of Us"
    let result = text9.valueOf()
    console.log(result)