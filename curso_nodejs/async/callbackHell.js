function hola(nombre, mi_callback) {
    setTimeout(function() {
        mi_callback(nombre);
    }, 1000);
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

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, (veces - 1), callback);
        });
    } else {
        adios(nombre, callback);
    }
}



console.log("Iniciando proceso...");
hola('Fredy', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log("Proceso terminado");
    });
});


// hola("Fredy", function() {
//     hablar(function() {
//         hablar(function() {
//             adios("Mauricio", function() {
//                 console.log("Finalizando proceso de adios");
//             });
//         })
//     })

// });