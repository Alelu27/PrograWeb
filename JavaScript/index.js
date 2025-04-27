let calcularPromedio = function (listaNumeros){
    // listaNumeros = [1, 3, 5] => 3
    
    let suma = 0
    for (let i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i]
    }
    return suma / listaNumeros.length
}

let filtrarNumerosMayores = function (listaNumeros, limite){
    let lista = []
    for (let num of listaNumeros){
        if (num > limite){
            lista.push(num)
        }
    }
    return lista
}

let numeros = [5, 8, 3, 10, 2, 7] 
let promedio = calcularPromedio(numeros)
console.log(promedio)

console.log(filtrarNumerosMayores(numeros, 5))