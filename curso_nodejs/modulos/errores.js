function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + 2;
        } catch (error) {
            console.log("Error");
            cb(error);
        }
    }, 1000)
}

function otraFuncion() {
    let resultad = seRompeAsincrona((error) => {
        console.log("Error: " + error);
    });
    console.log("El resultado es: " + resultad);
}
try {
    otraFuncion();
} catch (error) {
    console.error("vaya, error: " + error.message);
}