/*i = 0;
let intervalo = setInterval(() => {
    if (i == 5) {
        clearInterval(intervalo);
    }
    console.log("HOLaA");
    i++;
}, 1000);
/
setImmediate(function() {
    console.log("HOLA");
})
console.log(process);*/

global.variable = "Fr";
console.log(global.variable);