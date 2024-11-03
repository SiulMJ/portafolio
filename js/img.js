// script.js

// Selecciona todos los elementos de imagen en la clase .project-img
const projectImages = document.querySelectorAll('.project-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Agrega un evento de clic a cada imagen del proyecto
projectImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Muestra el lightbox
        lightboxImg.src = img.src; // Establece la fuente de la imagen en el lightbox
    });
});

// Agrega un evento de clic al botón de cierre
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Oculta el lightbox
});

// Cierra el lightbox si se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Oculta el lightbox
    }
});
