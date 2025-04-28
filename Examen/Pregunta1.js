


document.getElementById("botonAgregar").onclick = function(){
    const nuevaLista = document.createElement("li")
    nuevaLista.innerText = document.getElementById("texto").value
    document.getElementById("lista").appendChild(nuevaLista)
}



document.getElementById("botonMenu").onclick = function() {
    const cajita = document.getElementById("lista")
    if (cajita.style.display === "none") {
        cajita.style.display = "block"
    } else {
        cajita.style.display = "none"
    }
}