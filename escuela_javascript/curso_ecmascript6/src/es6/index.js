/* CLASE 1 */
/* CLASE 1 */
/* CLASE 1 */

/* FORMA VIEJA DE DECLARAR VALORES POR DEFECTO A LOS PARAMETROS */
function oldFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'El Salvador';
    console.log(name, age, country);
}
/* FORMA NUEVA DE DECLARAR VALORES POR DEFECTO A LOS PARAMEROS */
function newFunction(name = 'Fredy', age = 32, country = 'El Salvador') {
    console.log(name, age, country);
}

/* DE ESTAS 2 FORMAS SE LLAMA A LA FUNCION NUEVA */
newFunction();
newFunction('Fredy', "24", "Costa Rica");

/* VIEJA FORMA DE CONCATENAR */
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

/* NUEVA FORMA DE CONCATENAR */
let newPhrase = `${hello} ${world}`;
console.log(newPhrase);

/* CLASE 2 */
/* CLASE 2 */
/* CLASE 2 */

/* Forma vieja de multilinea */
let lorem = "Esto es una frase nueva \n" +
    "Esta es la segunda linea de una frase.";
/* Forma nueva de multilinea */
let lorem2 = `Esta es una nueva frase para poder cambiar
la frase la cual nosotros estamos viendo
todo esto.`;
console.log(lorem);
console.log(lorem2);


let person = {
    'name': "Fredy",
    'age': 24,
    'country': "El Salvador"
};
/* FORMA NORMAL DE RECUPERAR DATOS DE UN ARRAY */
console.log(person.name, person.age, person.country);
/* FORMA ALTERNATIVA DE TRAER DATOS DE UN ARREGLO */
let { name, age, country } = person;
console.log(name, age, country);


let team1 = ['Fredy', 'Tatiana', 'Ricardo'];
let team2 = ['Vilder', 'Mario', 'Beatriz'];

let education = ['David', ...team1, ...team2];
console.log(education);


/* CLASE 3 */
/* CLASE 3 */
/* CLASE 3 */

let nombre_c3 = 'Fredy';
let edad_c3 = 24;

/* forma vieja de declarar objetos */
obj = { nombre_c3: nombre_c3, edad_c3: edad_c3 };
/* forma nueva de declarar objetos */
obj2 = { nombre_c3, edad_c3 }
console.log(obj);
console.log(obj2);

const names = [{
        name: "Fredy",
        age: 24
    },
    {
        name: "Tatiana",
        age: 25
    }
];

let listOfNames = names.map(function(name) {
    console.log(name.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(name);
    console.log(age);
    console.log(country);
}
const listOfNames4 = name => {
    console.log(name);
}

const square = num => num * num;

/* Promesas */

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}
helloPromise().then(response => console.log(response))
    .then(() => console.log("HOLA"))
    .catch(error => console.log(error));

/* CLASE 4 */
/* CLASE 4 */
/* CLASE 4 */

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 3));


import { hello } from './module';
hello();


function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHelloi = helloWorld();
console.log(generatorHelloi.next().value);
console.log(generatorHelloi.next().value);
console.log(generatorHelloi.next().value);