/*
Ejercicio 3: Contador de clicks con estilos
Crea un botón que cuente cuántas veces ha sido presionado. Muestra el número de clics en un
elemento “<p>”. Al llegar a 10 clics, cambia el color del texto del contador a rojo. Usa textContent o
innerText y style.color.

*/
let clicks = 0

const butOnClick = function() {
    clicks++; // Incrementa el contador de clics

    const contadorcito = document.getElementById("contador"); // Obtiene el elemento donde se mostrará el contador

    // Actualiza el texto del párrafo con el número de clics
    contadorcito.innerText = "Número de clics: " + clicks;

    // Cambia el color a rojo si el contador llega a 10, de lo contrario, lo pone azul
    if (clicks >= 10) {
        contadorcito.style.color = "red";
    } else {
        contadorcito.style.color = "blue";
    }
}

document.getElementById("bot").onclick = butOnCXlick