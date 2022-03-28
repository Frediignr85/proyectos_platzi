/* Script para un cuadrado */

/* Agrupamos los cuadrados */
console.group("Cuadrado");

/* lados de un cuadrado */
const lado = 6;
console.log("Lado del cuadrado: " + lado + " cm");
/* Perimetro de un cuadrado */
const perimetro_cuadrado = lado * 4;
console.log("Perimetro del cuadrado: " + perimetro_cuadrado + " cm");
/* Area de un cuadrado */
const area_cuadrado = lado * lado;
console.log("Area del cuadrado: " + area_cuadrado + " cm cuadrados");

/*finalizamos la agrupacion del cuadrado */
console.groupEnd();

/* Agrupamos el triangulo */
console.group();

/* Lados de un triangulo */
const lado1_triangulo = 4;
const lado2_triangulo = 3;
const lado3_triangulo = 4;
console.log("Lado 1: " + lado1_triangulo + ", Lado 2: " + lado2_triangulo + ", Lado 3: " + lado3_triangulo);

/*perimetro de un triangulo */
const perimetro_triangulo = lado1_triangulo + lado2_triangulo + lado3_triangulo;
console.log("Perimetro del triangulo: " + perimetro_triangulo + " cm");

/* area de un triangulo */
const area_triangulo = (lado1_triangulo * lado2_triangulo) / 2;
console.log("Area del triangulo: " + area_triangulo + " cm cuadrados");

/* Finalizamos la agrupacion del triangulo */
console.groupEnd();

/*Agrupamos el circulo */
console.group("Circulo");
/* Definimos PI */
const pi = Math.PI;

/* Radio del circulo */
const radio = 5;
console.log("Radio del circulo: " + radio + " cm");

/* Diametro del circulo */
const diametro_circulo = radio * 2;
console.log("Diametro Circulo: " + diametro_circulo + " cm");

/* Perimetro del circulo */
const perimetro_circulo = diametro_circulo * pi;
console.log("Perimetro circulo: " + perimetro_circulo + " cm");

/* Area del circulo */
const area_circulo = pi * (radio * radio);
console.log("Area del circulo: " + area_circulo);

/*finalizamos la agrupacion del circulo */
console.groupEnd();