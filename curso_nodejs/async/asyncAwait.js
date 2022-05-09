async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("bla bla bla bla...");
            resolve();
        })
    }, 1000);

}

async function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Adios ", nombre);
            resolve(nombre);
        })
    }, 1000);
}

async function main() {
    let nombre = "Fredy";
    await hola(nombre);
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Finalizacion del proceso");
}
console.log("Empezamos el proceso");
main();