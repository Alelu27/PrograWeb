/*
Ejercicio 9: Tres en raya
Se le pide implementar la aplicación Tres en Raya. Para esto, se le entrega un documento HTML con
la estructura inicial del tablero (3 x 3 casillas).
Usted deberá implementar lo siguiente:
1. Configurar el HTML para que utilice Bootstrap
2. Completar el HTML con las clases de Bootstrap que permitan que la aplicación se vea como se le
indica (puede utilizar archivos CSS, pero no estilos en el propio documento HTML).
1. Nota: Tomar en cuenta que el alto de cada casilla debe ser de 100px y el ancho deberá de
extenderse hasta ocupar de manera proporcional todo el ancho disponible.
3. Implementar la funcionalidad desde Javascript que permita poner una letra “X” o una letra “O” al
hacer click en uno de los botones y según el jugador que toca jugar.
4. Además de marcar cada casilla, el juego debe de verificar si hay un ganador. En caso de haber un
ganador o empate:
1. Se deberá deshabilitar todas las casillas (no se podrá hacer click en ninguno de los botones).
2. Se deberá de pintar un mensaje en vez del título que diga: “Jugador X ganó” o “Jugador Y
ganó”, o en caso de empate deberá de decir “Empate”.
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Tres En Raya!</title>
</head>
<body>
 <h1>Tres en Raya</h1>
 <div>
 <!-- Fila 0 -->
 <div>
 <!-- casilla 0 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 1 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 2 -->
 <button type="button"></button>
 </div>
 </div>
 <div>
 <!-- Fila 1 -->
 <div>
 <!-- casilla 0 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 1 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 2 -->
 <button type="button"></button>
 </div>
 </div>
 <div>
 <!-- Fila 2 -->
 <div>
 <!-- casilla 0 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 1 -->
 <button type="button"></button>
 </div>
 <div>
 <!-- casilla 2 -->
 <button type="button"></button>
 </div>
 </div>
</body>
</html>

*/
let turno = 'X';  // El jugador X empieza
let casillas = ['', '', '', '', '', '', '', '', ''];  // Estado del tablero
let juegoTerminado = false;

// Función para verificar si hay un ganador
const verificarGanador = () => {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a];  // X o O
    }
  }

  // Verificar empate
  if (!casillas.includes('')) {
    return 'empate';
  }

  return null;
};

// Función para manejar el click en cada casilla
const handleClick = (index) => {
  if (casillas[index] || juegoTerminado) return;  // No hacer nada si la casilla ya tiene valor o el juego terminó

  // Actualizar el estado del tablero
  casillas[index] = turno;
  document.getElementById(`casilla-${index}`).innerText = turno;

  // Verificar si hay un ganador
  const resultado = verificarGanador();
  if (resultado) {
    juegoTerminado = true;
    if (resultado === 'empate') {
      document.getElementById('mensaje').innerText = '¡Empate!';
    } else {
      document.getElementById('mensaje').innerText = `¡Jugador ${resultado} ganó!`;
    }
    // Deshabilitar todos los botones
    for (let i = 0; i < 9; i++) {
      document.getElementById(`casilla-${i}`).disabled = true;
    }
    return;
  }

  // Cambiar el turno
  turno = turno === 'X' ? 'O' : 'X';
};

// Asignar los eventos de click a cada casilla
for (let i = 0; i < 9; i++) {
  document.getElementById(`casilla-${i}`).onclick = () => handleClick(i);
}
