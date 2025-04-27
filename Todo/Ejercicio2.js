/*
Ejercicio 2: Generador de tarjetas de productos
Implementa un botón que, al hacer clic, cree una tarjeta (div.card de Bootstrap) con información de
un producto ficticio (nombre, descripción y precio). Usa document.createElement y appendChild
para crear los elementos. Agrega al menos 3 tarjetas con diferentes productos
*/

// Función para generar las tarjetas
function generarTarjetas() {
    const cardsContainer = document.getElementById('cardsContainer'); // Contenedor donde se agregarán las tarjetas

    // Datos ficticios de productos
    const productos = [
        {
            nombre: "Producto A",
            descripcion: "Descripción del producto A.",
            precio: "$20.00"
        },
        {
            nombre: "Producto B",
            descripcion: "Descripción del producto B.",
            precio: "$35.00"
        },
        {
            nombre: "Producto C",
            descripcion: "Descripción del producto C.",
            precio: "$15.00"
        }
    ];

    // Limpiar cualquier tarjeta existente antes de agregar nuevas
    cardsContainer.innerHTML = "";

    // Crear las tarjetas
    productos.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col-md-4', 'mb-4'); // Añadir clases de Bootstrap para el diseño

        // Crear la tarjeta y su contenido
        const card = document.createElement('div');
        card.classList.add('card', 'h-100'); // Clases de Bootstrap para la tarjeta

        const imagen = document.createElement('img');
        imagen.classList.add('card-img-top');
        imagen.src = "https://via.placeholder.com/150"; // Imagen de placeholder

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const nombreProducto = document.createElement('h5');
        nombreProducto.classList.add('card-title');
        nombreProducto.textContent = producto.nombre;

        const descripcionProducto = document.createElement('p');
        descripcionProducto.classList.add('card-text');
        descripcionProducto.textContent = producto.descripcion;

        const precioProducto = document.createElement('p');
        precioProducto.classList.add('card-text');
        precioProducto.textContent = producto.precio;

        // Agregar todo a la tarjeta
        cardBody.appendChild(nombreProducto);
        cardBody.appendChild(descripcionProducto);
        cardBody.appendChild(precioProducto);
        card.appendChild(imagen);
        card.appendChild(cardBody);

        // Agregar la tarjeta al contenedor
        tarjeta.appendChild(card);
        cardsContainer.appendChild(tarjeta);
    });
}

// Asignar el evento de clic al botón
document.getElementById('bot').onclick = generarTarjetas;

