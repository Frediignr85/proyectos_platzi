/* FUNCIONES DECLARATIVAS */
function miFuncion() {
    return "Hola";
}

/* FUNCIONES DE EXPRESION */

let miFunction = function() {
    var primer_numero = 1;
    var segundo_numero = 2;
    return primer_numero + segundo_numero;
}

let sumar = function(valor1, valor2) {
    return valor1 + valor2;
}

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleAuto: function() {
        console.log("Auto: " + this.modelo + " Anio" + this.annio)
    }
}

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto('nissan', 'sentra', 2022);

let arreglo_productos = [
    { "nombre": "Proteina", "precio": 10 },
    { "nombre": "Barritas", "precio": 15 },
    { "nombre": "Pan dulce", "precio": 2.52 },
    { "nombre": "Guacamole", "precio": 12.87 }
];

let articulos_caros = arreglo_productos.some(function(producto) {
    return producto.precio >= 100;
});
console.log(articulos_caros);


arreglo_productos.forEach(function(producto) {
    console.log(producto.nombre);
});


var arreglo_find = arreglo_productos.find(function(producto) {
    return producto.nombre != "Barritas";
});
console.log(arreglo_find);

let arreglo_menores = arreglo_productos.filter(function(producto) {
    return producto.precio <= 10
});
console.log(arreglo_menores);
let arreglo_mapear = arreglo_productos.map(function(producto) {
    return producto.nombre;
});
console.log(arreglo_mapear);