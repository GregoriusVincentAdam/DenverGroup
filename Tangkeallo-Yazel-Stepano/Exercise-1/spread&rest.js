//1. Then - Catch
newPromise
.then((result) => result)
.then((result2) => {
   console.log(result2);
})
.catch((error) => {
console.log(error);
});