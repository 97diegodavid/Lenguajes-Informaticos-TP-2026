
// ==========================================
// LEER MÁS / LEER MENOS
// ==========================================

// Obtener los elementos HTML
const boton = document.getElementById("btn-leer-mas");
const contenido = document.getElementById("contenido-adicional");

// Comprobar que los elementos existan en la página
if (boton && contenido) {

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

}


// ==========================================
// MODO OSCURO Y MODO CLARO
// ==========================================

// Obtener los elementos HTML del interruptor
const botonModoTema = document.getElementById("themeToggle");
const iconoModoTema = document.getElementById("themeIcon");
const textoModoTema = document.getElementById("themeLabel");

// Recuperar el tema seleccionado anteriormente
const temaGuardado = localStorage.getItem("aurora-theme");

// Aplicar el tema guardado al cargar la página
if (temaGuardado === "dark") {
    document.body.classList.add("dark-mode");
}


// ==========================================
// ACTUALIZACIÓN DEL BOTÓN
// ==========================================

function actualizarBotonTema() {

    // Comprobar si el modo oscuro está activado
    const modoOscuroActivo =
        document.body.classList.contains("dark-mode");

    // Cambiar el icono y el texto del botón
    if (modoOscuroActivo) {
        iconoModoTema.textContent = "☀️";
        textoModoTema.textContent = "Modo claro";
    } else {
        iconoModoTema.textContent = "🌙";
        textoModoTema.textContent = "Modo oscuro";
    }

    // Actualizar el estado del interruptor
    botonModoTema.setAttribute(
        "aria-pressed",
        modoOscuroActivo
    );
}


// ==========================================
// EVENTO PARA CAMBIAR EL TEMA
// ==========================================

// Comprobar que los elementos del interruptor existan
if (botonModoTema && iconoModoTema && textoModoTema) {

    // Mostrar el tema actual
    actualizarBotonTema();

    // Detectar cuando el usuario presiona el botón
    botonModoTema.addEventListener("click", () => {

        // Activar o desactivar el modo oscuro
        document.body.classList.toggle("dark-mode");

        // Comprobar el nuevo estado
        const modoOscuroActivo =
            document.body.classList.contains("dark-mode");

        // Guardar la preferencia del usuario
        localStorage.setItem(
            "aurora-theme",
            modoOscuroActivo ? "dark" : "light"
        );

        // Actualizar el icono y el texto
        actualizarBotonTema();

    });

}


// ==========================================
// FIN DEL CAMBIO DE TEMA
// ==========================================
