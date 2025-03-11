document.addEventListener('DOMContentLoaded', function () {
    // Muestra un mensaje cuando se hace clic en el encabezado
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        alert('¡Gracias por apoyar la preservación de los océanos!');
    });
});
