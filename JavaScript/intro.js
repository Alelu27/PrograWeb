let nombre = "Edgard" // nombre : string - let define la variable
nombre = 10 // nombre : number
let esTrika = false // esTrika : boolean
let estatura = 1.7 // estatura : number 
let persona = null // persona : null
let persona2 = undefined // persona : undefined
let num // num : undefined
let arrNum = [1, 3, 5] // arrNum : number[]
let arrNombres = ["Edgar", "Pepito"] // arrNombres : string []
let arr = [23, "Juan"]
let alumno = {
    nombre : "Luis",
    codigo : "20232023",
    carrera : "Ingeniería de Sistemas",
    ciclo : 6,
    estaMatriculado : true,
    universidad : {
        nombre : "Universidad de Lima",
        direccion : "Av. Javier Prado"
    }
}

let imprimirEdad = function(){ // definimos la funcion
    console.log("tengo 21 años")
}

let sumar = function (n1, n2){
    let res = n1 + n2
    return res
}

imprimirEdad() // ejecutamos la funcion
console.log(sumar(2, 4))
console.log(sumar("Edgard", "Pepe"))

