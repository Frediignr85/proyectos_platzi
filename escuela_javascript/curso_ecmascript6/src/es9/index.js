const obj = {
    name: "Fredy",
    age: 24,
    country: "El Salvador"
};

let { name, ...all } = obj;
console.log(all);

const object2 = {
    name: "Fredy",
    age: 24
};
const object3 = {
    ...object2,
    country: "El Salvador"
};
console.log(object2);
console.log(object3);



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve("Hello World"), 3000)
        } else {
            reject(new Error("Test Error"));
        }
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"));



const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-03-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);