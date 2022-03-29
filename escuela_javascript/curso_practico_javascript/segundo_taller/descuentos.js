/* FUNCION PARA CALCULAR EL PRECIO SIN EL DESCUENTO*/
function calcular_descuento() {
    let precio_normal = document.getElementById('precio').value;
    let descuento = document.getElementById('descuento').value;
    document.getElementById('precio_normal_label').innerHTML = "Precio Normal: $ " + precio_normal;
    document.getElementById('porcentaje_descuento').innerHTML = "Porcentaje de descuento: " + descuento + "%";
    document.getElementById('total_descuento').innerHTML = "Descuento: $ " + precio_descuento(precio_normal, descuento);
    document.getElementById('total_menos_descuento').innerHTML = "Total menos descuento $ " + precio_sin_descuento(precio_normal, descuento);
}

function precio_sin_descuento(precio_normal, porcentaje_descuento) {
    return (precio_normal) - precio_descuento(precio_normal, porcentaje_descuento);
}

function precio_descuento(precio_normal, porcentaje_descuento) {
    return (precio_normal * (porcentaje_descuento / 100));
}