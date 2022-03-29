const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");

console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

class Message {
    show1(val) {
        console.log(show(val));
    }#
    show(val) {
        return val + val;
    }
}

const message = new Message();
message.show1("JOLA");


const promise1 = new Promise((resolve, reject) => reject("Error"));
const promise2 = new Promise((resolve, reject) => resolve("Bien 1"));
const promise3 = new Promise((resolve, reject) => resolve("Bien 2"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }

}

let isTrue = true;
let isFalse = false;
console.log(isTrue && = isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue || = isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ? ? = isFalse);