function calcular() {
    // inputs
    let nombre = document.getElementById("nombre").value;
    let sueldo = parseInt(document.getElementById("sueldo").value);
    let hijos = parseInt(document.getElementById("hijos").value);

    // ouputs
    let Rbono = document.getElementById("Rbono");
    let Rsueldo = document.getElementById("Rsueldo");
    


    if (hijos>0) {
        Rbono.innerHTML=sueldo*0.07;
        Rsueldo.innerHTML=sueldo+(sueldo*0.07);
        
    } else {
      Rbono.innerHTML=0;
      Rsueldo.innerHTML=sueldo;
    }


}