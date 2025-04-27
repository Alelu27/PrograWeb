/*
const cliki = function(){
    console.log("hizo click")
}

let boto = document.getElementById("bot")
boto.addEventListener("click", cliki)
console.log(boto)
*/
/*
Ejercicio 1: Formulario de contacto con validación simple
Crea un formulario con los siguientes campos: nombre, correo electrónico y mensaje. Agrega un
botón de envío. Usa JavaScript para validar que los campos no estén vacíos y que el correo tenga
formato válido (@ y .). Si hay errores, muestra mensajes debajo de los campos. Si todo está bien,
muestra una alerta con el mensaje “Formulario enviado correctamente”.
*/

const validarFormulario = function(event) {
    event.preventDefault()

    const nombre = document.getElementById("nombres");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    let DEnombre = document.getElementById("divErrorNom");
    let DEcorreo = document.getElementById("divErrorCorr");
    let DEmensaje = document.getElementById("divErrorMen");
    let mensajeResultado = document.getElementById("mensajeResultado");

    // Limpiar mensajes de error previos
    DEnombre.textContent = "";
    DEcorreo.textContent = "";
    DEmensaje.textContent = "";
    mensajeResultado.textContent = "";

    let esValido = true;  // Variable para controlar si el formulario es válido

    // Validación de nombre
    if (nombre.value == "") {
        DEnombre.textContent = "Campo vacío";
        esValido = false;
    }

    // Validación de correo
    if (correo.value == "") {
        DEcorreo.textContent = "Campo vacío";
        esValido = false;
    } else if (!correo.value.includes('@') || !correo.value.includes('.')) {
        DEcorreo.textContent = "Formato incorrecto";
        esValido = false;
    }

    // Validación de mensaje
    if (mensaje.value == "") {
        DEmensaje.textContent = "Campo vacío";
        esValido = false;
    }

    // Si todo está bien, mostrar mensaje en la página
    if (esValido) {
        mensajeResultado.textContent = "Formulario enviado correctamente";
        mensajeResultado.style.color = "green";  // Cambia el color del mensaje a verde
    } else {
        mensajeResultado.textContent = "Por favor, completa todos los campos correctamente.";
        mensajeResultado.style.color = "red";  // Cambia el color del mensaje a rojo
    }
}

// Asignar el evento de validación al botón
document.getElementById("boton").onclick = validarFormulario;