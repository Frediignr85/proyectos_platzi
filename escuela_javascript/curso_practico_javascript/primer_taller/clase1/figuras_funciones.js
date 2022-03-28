/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN CUADRADO */
function perimetro_cuadrado(lado) {
    return lado * 4;
}
const perimetro_cuadrado2 = (lado) => lado * 4;

/* FUNCIONES PARA CALCULAR EL AREA DE UN CUADRADO */
function area_cuadrado(lado) {
    return lado * lado;
}
const area_cuadrado2 = (lado) => lado * lado;

/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN TRIANGULO*/
function perimetro_triangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
const perimetro_triangulo2 = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

/* FUNCIONES PARA CALCULAR EL AREA DE UN TRIANGULO */
function area_triangulo(base, altura) {
    return (base * altura) / 2;
}
const area_triangulo2 = (base, altura) => (base * altura) / 2;

/* FUNCIONES PARA CALCULAR EL DIAMETRO DE UN CIRCULO */
function diametro_circulo(radio) {
    return radio * 2;
}
const diametro_circulo2 = (radio) => radio * 2;

/* FUNCIONES PARA CALCULAR EL PERIMETRO DE UN CIRCULO */
function perimetro_circulo(radio) {
    return diametro_circulo(radio) * Math.PI;
}
const perimetro_circulo2 = (radio) => diametro_circulo2(radio) * Math.PI;

/* FUNCIONES PARA CALCULAR EL AREA DE UN CIRCULO */
function area_circulo(radio) {
    return Math.PI * (radio * radio);
}
const area_circulo2 = (radio) => Math.PI * (radio * radio);