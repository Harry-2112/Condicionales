function calcular() {
    // inputs
    let numero = parseInt(document.getElementById("numero").value);
   

    // ouputs
    let Rnumero = document.getElementById("Rnumero");
    let Rporciento = document.getElementById("Rfactorial");

    
    var total = 1; 
	for (i=1; i<=numero; i++) {
		total = total * i; 
	}
	Rporciento.innerHTML= total; 
    

}