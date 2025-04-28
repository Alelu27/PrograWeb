const num : number = 10
console.log(num)

const listanumeros : number[] = [1, 2, 5]
listanumeros.push(15)
console.log(listanumeros)

const tupla : [number, string] = [1, "Dom"]
tupla.push(2, "Lun")
console.log(tupla)

const listatupla : [number, string][] = [[1, "Dom"],[2, "Lun"]]
listatupla.push([3, "Mar"])
console.log(listatupla)
console.log(listatupla[0])

enum DiasSemana {
    "Domingo",
    "Lunes", 
    "Martes",
    "Miercoles"
}

let dias = DiasSemana.Martes
console.log(dias)

const alumno : { nombre : string, edad : number, trica : boolean } = {
    nombre : "Edgi",
    edad : 35,
    trica : false
}
console.log(alumno)

let persona : string | null | number | undefined
persona = "Edgi"
persona = null
console.log(persona)

