function calcular() {
    // inputs
    let nombre = document.getElementById("nombre").value;
    let parcial = parseInt(document.getElementById("parcial").value);
    let final = parseInt(document.getElementById("final").value);
    let promedio = parseInt(document.getElementById("promedio").value);

    // ouputs
    let Rnombre = document.getElementById("Rnombre");
    let Rnotas = document.getElementById("Rnotas");
    let Rtotal = document.getElementById("Rtotal");
    let reprobar = document.getElementById("reprobar");

    // variables
    let PEP=0.25;
    let PEF=0.50;
    let PPP=0.25;
    let promedioFinal =((parcial*PEP)+(final*PEF)+(promedio*PPP));


    if (promedioFinal<=10) {
        reprobar.classList.remove("alert-primary");
        reprobar.classList.add("alert-danger");
        reprobar.innerHTML="Lo sentimos Reprobo el curso";
        
    } else {
        reprobar.classList.remove("alert-danger");
        reprobar.classList.add("alert-primary");
        Rnombre.innerHTML=nombre;
        Rnotas.innerHTML="Examen parcial :"+parcial+""+"Examen final :"+final+""+"Promedio Practicas :"+promedio;
        Rtotal.innerHTML = promedioFinal;
    }


}