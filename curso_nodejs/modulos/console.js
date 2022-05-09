console.log("Hola soy un console.log");

console.info("Hola soy un console.info");

console.error("Hola soy un console.error");

console.warn("HOla soy un consolee.warm");

var table = [{
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: "K"
    }
]
console.table(table);

console.group("Conversacion entre 5 personas")
console.log("Holaa");
console.log("Hola2");
console.log("Hola3");
console.log("Hola4");
console.log("Hola5");
console.groupEnd("Conversacion entre 5 personas")
console.group("Conversacion entre 2 personas")
console.log("Holaa");
console.log("Hola2");
console.log("Que tal                ");
console.groupEnd("Conversacion entre 5 personas")

console.count('veces')
console.count('veces')
console.count('veces')
console.groupEnd('veces')