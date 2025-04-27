/*
Ejercicio 6: Crear un botón que, al hacer clic, añada un nuevo elemento de
lista (<li>) a una lista desordenada (<ul>)
1. Crea un archivo HTML con una lista desordenada vacía (<ul>).
2. Añade un botón con el texto “Añadir elemento”.
3. Escribe un script que añada un nuevo elemento de lista con el texto “Nuevo elemento” a la lista
desordenada cuando se haga clic en el botón.
*/
document.getElementById("boton").onclick = function() {
    const nuevaLista = document.createElement("li");
    nuevaLista.innerText = "Nuevo elemento";
    document.getElementById("lista").appendChild(nuevaLista);
}
