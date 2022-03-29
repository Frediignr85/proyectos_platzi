const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await
    import ("./file.js");
    module.hello();
});


//const aBigNumber = 900719925470991 n;

const anotherBigNumber = BigInt(900719925470991);
console.log(anotherBigNumber);


const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


console.log(window);
console.log(globalThis);




const fooo = 'hola' ? ? 'default string';
console.log(fooo);


const user = {};
console.log(user ? .profile ? .email);