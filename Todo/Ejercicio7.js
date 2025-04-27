/*
Ejercicio 7: Eliminar el último elemento de una lista desordenada (<ul>)
1. Crea un archivo HTML con una lista desordenada que tenga varios elementos.
2. Añade un botón con el texto “Eliminar último elemento”.
3. Escribe un script que elimine el último elemento de la lista cuando se haga clic en el boton
*/
document.getElementById("boton").onclick = function() {
    const lista = document.getElementById("lista");
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}
