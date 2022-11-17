function calcular() {
    // inputs
    let Numero = parseInt(document.getElementById("Numero").value);
   

    // ouputs
    let Rnumero = document.getElementById("Rnumero");
    let Rporciento = document.getElementById("Rporciento");
    let res = document.getElementById("res");
    


    if (Numero>500) {
        Rnumero.innerHTML=Numero;
        Rporciento.innerHTML=Numero*(0.18);
        
    } else {
        res.innerHTML = "El numero es menor a 500" 
    }


}