/*
Ejercicio 5: Cambiar color de fondo
1. Crea un archivo HTML con un párrafo que tenga algún texto.
2. Añade un botón con el texto “Cambiar color”.
3. Escribe un script que cambie el color de fondo del párrafo a un color diferente (por ejemplo, azul)
cuando se haga clic en el botón.
*/
document.getElementById("boton").onclick = function() {
    document.getElementById("parrafo").style.backgroundColor = "blue";
}
