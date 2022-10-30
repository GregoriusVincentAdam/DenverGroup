// No 1

// function helloWorld() {
//      return new Promise((resolve) => {
//          setTimeout(() =>{
//              resolve ("Hello World!");
//          }, 2000);
//      })
// };

// async function messages() {
//    let msg = await helloWorld();
//     console.log(msg);
// }
  
// messages();

// No 2

// function ambilDataUser() {
//     fetch("https://reqres.in/api/users")
//         .then((response) => response.json())       
//         .then((users) => console.log(users.data)) 
//         .catch((err) => console.log(`Gagal menampilkan Data ${err.message}`)) 
// }
// ambilDataUser();

// No 3

const ambilDataUser() = async () => {
    fetch("https://reqres.in/api/users")
    try {
        const response = await response.json()
        const users = await users.response()       
        .then((users) => console.log(users.data))  
        .catch((err) => console.log(`Gagal menampilkan Data ${err.message}`))
    }
}
ambilDataUser();




