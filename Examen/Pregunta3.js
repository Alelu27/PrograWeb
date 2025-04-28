const butOnClick = function () {
    const inputNombre = document.getElementById("nombre")
    const inputEdad = document.getElementById("edad")
    const inputCarrera = document.getElementById("carrera")

    if (inputNombre.value == "" || 
        inputEdad.value == "" 
    ) {
        //Error
        console.error("No ha llenado todos los datos")
        const divMensaje = document.getElementById("texto_mensaje")
        divMensaje.setAttribute("class", "alert alert-danger centrado")
        divMensaje.innerText = "Error, debe llenar todos los campos"
        return
    }
    
    // No hay error
    console.log("Formulario enviado correctamente")
    const divMensaje = document.getElementById("texto_mensaje")
    divMensaje.setAttribute("class", "alert alert-success centrado")
    divMensaje.innerText = "Se guardó con éxito"
}

const main = function() {
    const but = document.getElementById("but_enviar")
    but.addEventListener("click", butOnClick)
}

main()