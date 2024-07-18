document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    document.querySelectorAll('.gallery-item img').forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
