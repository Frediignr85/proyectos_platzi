function hola(nombre, mi_callback) {
    console.log("Hola, soy una funcion asincrona");
    setTimeout(function() {
        console.log("Hola, " + nombre);
        mi_callback();
    }, 1000);
}

function adios(nombre, otro_callback) {
    setTimeout(function() {
        console.log("Adios, " + nombre);
        otro_callback();
    }, 1000);
}


console.log("Iniciando proceso!");
hola("Fredy", function() {
    console.log('Finalizando proceso de saludo');
});
adios("Mauricio", function() {
    console.log("Finalizando proceso de adios");
});