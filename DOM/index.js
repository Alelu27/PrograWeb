const onClickMe = function (){
    console.log("Me hizo click")
    const h1 = document.getElementById("titulo1")
    h1.setAttribute("class", "fondo_peru")

    const divContenido = document.getElementById("contenido")
    const divMensaje = document.createElement("div")
    divMensaje.innerText = "Me hizo click"

    divContenido.appendChild(divMensaje)
}

const but = document.getElementById("but_ok")
but.addEventListener("click", onClickMe)
console.log(this)

/*
const funcion2 = function (){
//    console.log("Segunda funcion")
//}

const but = document.getElementById("but_ok")
// console.log(but)
// but.onclick = onClickMe
// but.onclick = funcion2

but.addEventListener("click", onClickMe)
but.addEventListener("click", funcion2)z

console.log
*/