/*
Ejercicio 8: Ocultar y mostrar un párrafo
1. Crea un archivo HTML con un párrafo visible.
2. Añade un botón con el texto “Mostrar/Ocultar”.
3. Escribe un script que oculte o muestre el párrafo dependiendo de su estado actual cuando se haga
clic en el botón.

*/
document.getElementById("boton").onclick = function() {
    const parrafo = document.getElementById("parrafo");
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}
