/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN CUADRADO */
function perimetro_cuadrado_form() {
    let lado = document.getElementById("lado_cuadrado").value;
    console.log("Perimetro: " + perimetro_cuadrado(lado));
    console.log("Perimetro: " + perimetro_cuadrado2(lado));
}

function perimetro_cuadrado(lado) {
    return lado * 4;
}
const perimetro_cuadrado2 = (lado) => lado * 4;

/* FUNCIONES PARA CALCULAR EL AREA DE UN CUADRADO */
function area_cuadrado_form() {
    let lado = document.getElementById("lado_cuadrado").value;
    console.log("Area: " + area_cuadrado(lado));
    console.log("Area: " + area_cuadrado2(lado));
}

function area_cuadrado(lado) {
    return lado * lado;
}
const area_cuadrado2 = (lado) => lado * lado;

/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN TRIANGULO*/
function perimetro_triangulo_form() {
    let lado1 = document.getElementById("lado_triangulo1").value;
    let lado2 = document.getElementById("lado_triangulo2").value;
    let lado3 = document.getElementById("lado_triangulo3").value;
    console.log("Perimetro: " + perimetro_triangulo(lado1, lado2, lado3));
    console.log("Perimetro: " + perimetro_triangulo2(lado1, lado2, lado3));
}

function perimetro_triangulo(lado1, lado2, lado3) {
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3);
}
const perimetro_triangulo2 = (lado1, lado2, lado3) => parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado3);

/* FUNCIONES PARA CALCULAR EL AREA DE UN TRIANGULO */
function area_triangulo_form() {
    let lado1 = document.getElementById("lado_triangulo1").value;
    let lado2 = document.getElementById("lado_triangulo2").value;
    console.log("Area: " + area_triangulo(lado1, lado2));
    console.log("Area: " + area_triangulo2(lado1, lado2));
}

function area_triangulo_form2() {
    let lado1 = document.getElementById("lado_triangulo1x").value;
    let lado2 = document.getElementById("lado_triangulo2x").value;
    let lado3 = document.getElementById("lado_triangulo3x").value;
    console.log("Area: " + area_triangulo_heron(lado1, lado2, lado3));
}

function area_triangulo(base, altura) {
    return (base * altura) / 2;
}
const area_triangulo2 = (base, altura) => (base * altura) / 2;

function area_triangulo_heron(lado1, lado2, lado3) {
    let perimetro_acortado = perimetro_triangulo(lado1, lado2, lado3) / 2;
    let resultado_multiplicacion = perimetro_acortado * (perimetro_acortado - lado1) * (perimetro_acortado - lado2) * (perimetro_acortado - lado3);
    let resultado_final = Math.sqrt(resultado_multiplicacion);
    return resultado_final;
};
/* FUNCIONES PARA CALCULAR EL DIAMETRO DE UN CIRCULO */
function diametro_circulo_form() {
    let radio = document.getElementById("radio_circulo").value;
    console.log("Diametro: " + diametro_circulo(radio));
    console.log("Diametro: " + diametro_circulo2(radio));
}

function diametro_circulo(radio) {
    return radio * 2;
}
const diametro_circulo2 = (radio) => radio * 2;

/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN CIRCULO */
function perimetro_circulo_form() {
    let radio = document.getElementById("radio_circulo").value;
    console.log("Perimetro: " + perimetro_circulo(radio));
    console.log("Perimetro: " + perimetro_circulo2(radio));
}

function perimetro_circulo(radio) {
    return diametro_circulo(radio) * Math.PI;
}
const perimetro_circulo2 = (radio) => diametro_circulo2(radio) * Math.PI;

/* FUNCIONES PARA CALCULAR EL AREA DE UN CIRCULO */
function area_circulo_form() {
    let radio = document.getElementById("radio_circulo").value;
    console.log("Area: " + area_circulo(radio));
    console.log("Area: " + area_circulo2(radio));
}

function area_circulo(radio) {
    return Math.PI * (radio * radio);
}
const area_circulo2 = (radio) => Math.PI * (radio * radio);