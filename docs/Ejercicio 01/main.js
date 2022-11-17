function calcular() {
    let importe = parseInt(document.getElementById("importe").value);
    let importeT = document.getElementById("importeT");
    let total = document.getElementById("total");
    let descuento = document.getElementById("descuento");

    if (importe<=150) {
        importeT.innerHTML=importe;
        descuentoN = 0
        descuento.innerHTML= descuentoN;
        total.innerHTML=importe-descuentoN;
    }else{
        importeT.innerHTML=importe;
        descuentoN = importe*0.12;
        descuento.innerHTML= descuentoN;
        total.innerHTML=importe-descuentoN;
    }
}