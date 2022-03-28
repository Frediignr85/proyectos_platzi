const data = {
    frontend: "Fredy",
    backend: "Ana",
    design: "Kevin"
};
/* convertir objeto en matriz */
const entries = Object.entries(data);
console.log(entries);

/*total de objetos */
console.log(entries.length);


const data2 = {
    frontend: "Fredy",
    backend: "Ana",
    design: "Kevin"
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);


const string = 'hello';
console.log(string.padStart(10, '2'));
console.log(string.padEnd(15, 'HEllo').padStart(20, "1"));