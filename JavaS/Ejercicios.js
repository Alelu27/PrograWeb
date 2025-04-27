/*
const numeros: number[] = [5, 8, 3, 10, 2, 7];
filtrarNumerosMayores: Recibe un array de números y un número límite, y
retorna un nuevo array con los números mayores al límite.
*/

let numeros = [5, 8, 3, 10, 2, 7];

let filtrarNumerosMayores = function(listaNumeros, limite){
    let lista = []
    for (let num of listaNumeros) {
        if(num > limite){
            lista.push(num)
        }
    }
    return lista
}
console.log(filtrarNumerosMayores(numeros, 5))

/*
calcularPromedio: Calcula el promedio de los números en un array.
*/

let calcularPromedio = function(listaNumeros){
    let suma = 0
    for(let i = 0; i < listaNumeros.length; i++){
        suma = suma + listaNumeros[i]
    }
    return suma / listaNumeros.length
}
console.log(calcularPromedio(numeros))


/*
Define una tupla Punto que representa las coordenadas de un punto en un plano
cartesiano (x, y) como dos números.
*/

const tuplita = ["due", "tre"]
console.log(tuplita)
console.log(tuplita[0])

const Punto = [1,3]
console.log(Punto)

/*
Implementar la función distanciaEntrePuntos: Recibe dos tuplas de tipo Punto
y calcula la distancia entre ellos.

const distanciaEntrePuntos = function([x1, y1],[x2, y2]){
    const dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return dist
}
console.log(distanciaEntrePuntos([1, 2],[4, 6]))
     */
   
const p1 = [1, 2];
const p2 = [4, 6];

const distanciaEntrePuntos = function(p1, p2){
    const [x1, y1] = p1
    const [x2, y2] = p2
    let dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return dist
}
console.log(distanciaEntrePuntos(p1 , p2))

/*
Implementar la función moverPunto: Recibe un Punto y un desplazamiento (dx, dy) 
representado por otra tupla, y retorna un nuevo Punto con las coordenadas
actualizadas.
*/

const moverPunto = function([x, y],[dx, dy]){
    return [x + dx, y + dy]
}

console.log(moverPunto(p1, [3, 4]))

/*
mapearNombres: Retorna un array que contenga únicamente los nombres de los usuarios.
*/

const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "María", edad: 22 }
];

const mapearNombres = function(usuarios){
    let buscar = usuarios.map(usuarios => usuarios.nombre)
    return buscar
}

console.log(mapearNombres(usuarios))

const mapearEdad = function(usuarios){
    let buscar = usuarios.map(function(usuario) {
        return usuario.edad
    })
    return buscar
}
console.log(mapearEdad(usuarios))

/*
calcularEdadPromedio: Calcula la edad promedio de los usuarios
*/

const calcularEdadPromedio = function (usuarios){
    let suma = 0
    let buscar = usuarios.map(usuarios => usuarios.edad)
    for (let i = 0; i < buscar.length; i++){
        suma = suma + buscar[i]
    }
    return suma / buscar.length
}
console.log(calcularEdadPromedio(usuarios))

/*
filtrarUsuariosMayores: Retorna los usuarios mayores de una edad específica.
*/

const filtrarUsuariosMayores = function(usuarios, mayor){
    let filtrado = []
    
    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i].edad > mayor){ //Compara la edad (usuarios[i].edad).
            filtrado.push(usuarios[i]) // Guarda el objeto completo
        }       
    }
    return filtrado
}

console.log(filtrarUsuariosMayores(usuarios, 25))