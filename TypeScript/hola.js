var num = 10;
console.log(num);
var listanumeros = [1, 2, 5];
listanumeros.push(15);
console.log(listanumeros);
var tupla = [1, "Dom"];
tupla.push(2, "Lun");
console.log(tupla);
var listatupla = [[1, "Dom"], [2, "Lun"]];
listatupla.push([3, "Mar"]);
console.log(listatupla);
console.log(listatupla[0]);
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 0] = "Domingo";
    DiasSemana[DiasSemana["Lunes"] = 1] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 2] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 3] = "Miercoles";
})(DiasSemana || (DiasSemana = {}));
var dias = DiasSemana.Martes;
console.log(dias);
var alumno = {
    nombre: "Edgi",
    edad: 35,
    trica: false
};
console.log(alumno);
var persona;
persona = "Edgi";
persona = null;
console.log(persona);
