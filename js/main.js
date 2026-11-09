
// Obtener los elementos HTML
const boton = document.getElementById("btn-leer-mas");
const contenido = document.getElementById("contenido-adicional");

// Detectar cuando el usuario hace clic en el botón
boton.addEventListener("click", () => {

    // Mostrar u ocultar el contenido adicional
    contenido.hidden = !contenido.hidden;

    // Cambiar el texto del botón
    if (contenido.hidden) {
        boton.textContent = "Leer más";
    } else {
        boton.textContent = "Leer menos";
    }

});