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