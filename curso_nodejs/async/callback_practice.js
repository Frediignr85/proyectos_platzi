/* Primera practica para hacer un callback */

let saludar = (nombre, callback) => {
    setTimeout(() => {
        console.log("Hola " + nombre + ", que tal estas?");
        callback(nombre + " Saludado");
    }, 1000);
}

let hablar = (callback) => {
    setTimeout(() => {
        console.log("Bla bla bla ...");
        callback();
    }, 1000);
}
let despedirse = (nombre, callback) => {
    setTimeout(() => {
        console.log("Adios " + nombre + ", ha sido un gusto.");
        callback();
    }, 1000);
}


/**saludar("Fredy", (nombre) => {
    hablar(() => {
        despedirse(nombre, () => {
            setTimeout(() => {
                console.log("Finalizar proceso");
            }, 1000);
        })
    })
});*/


/* Segunda practica */

let contador_tablas_multiplicar_inverso = (tabla, numero, callback) => {
    setTimeout(() => {
        let cadena_devolver = numero + ' * ' + tabla + ' = ' + (tabla * numero);
        callback(cadena_devolver)
    }, 1000);
}

let recursividad_tablas_inverso = (tabla, numero) => {
        console.log("Iniciando el conteo de la tabla del ", tabla);
        if (numero > 0) {
            contador_tablas_multiplicar_inverso(tabla, numero, (cadena_devolver) => {
                console.log(cadena_devolver);
                recursividad_tablas_inverso(tabla, (numero - 1));
            })
        } else {
            console.log("Conteo de la tabla del ", tabla, " finalizada");
        }
    }
    //recursividad_tablas_inverso(4, 10);

/* Tercera practica */

let contador_tablas_multiplicar = (tabla, numero, callback) => {
    setTimeout(() => {
        let cadena_tabla = `${tabla} * ${numero} = ${tabla * numero}`;
        callback(cadena_tabla, numero);
    }, 1000);
}

let recursividad_tabla = (tabla, numero_empieza, numero_termina) => {
    console.log("Empezando conteo de la tabla del " + tabla);
    if (numero_empieza <= numero_termina) {
        contador_tablas_multiplicar(tabla, numero_empieza, (cadena, numero_actual) => {
            console.log(cadena);
            recursividad_tabla(tabla, ++numero_actual, numero_termina);
        });
    } else {
        console.log("Finalizado");
    }
}

recursividad_tabla(7, 1, 17);