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