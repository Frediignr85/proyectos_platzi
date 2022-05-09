const file_systems = require('fs');

function read(ruta, cb) {
    file_systems.readFile(ruta, (error, data) => {
        console.log(data.toString());
        cb(data.toString);
    });
}

function write(ruta, contenido, cb) {
    file_systems.writeFile(ruta, contenido, (error) => {
        if (error) {
            console.error('No he podido escribirlo ' + error);
        } else {
            console.log("Se ha escrito completamente");
            cb()
        }
    });
}


function borrar(ruta, cb) {
    file_systems.unlink(ruta, cb);
}

borrar(__dirname + '/archivo.txt', console.log);







/*
write(__dirname + '/archivo.txt', 'Soy un archivo completamente nuevo', (cb) => {
    console.log(cb);
    console.log('Proceso, finalizado correctamente!!');
})*/

/*read(__dirname + '/archivo.txt', (db) => {
    console.log("Proceso finalizado cd nuevo");
    console.log(db);
});*/