/*
Ejercicio 4: Cambiar texto del párrafo
1. Crea un archivo HTML con un párrafo (<p>) que contenga el texto “Texto original”.
2. Añade un botón con el texto “Cambiar texto”.
3. Escribe un script en JavaScript que cambie el texto del párrafo a “Texto modificado” cuando se
haga clic en el botón.


*/
document.getElementById("boton").onclick = function() {
    document.getElementById("parrafo").innerText = "Texto modificado";
}
