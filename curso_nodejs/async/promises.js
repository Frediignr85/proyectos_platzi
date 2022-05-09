function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("bla bla bla bla...");
        callbackHablar();
    })
}

function adios(nombre, otro_callback) {
    setTimeout(function() {
        console.log("Adios, " + nombre);
        otro_callback();
    }, 1000);
}
console.log("Iniciando el proceso...");
hola("Fredy").then((nombre) => {
    console.log("Terminado el proceso...");
});