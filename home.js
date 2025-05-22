// Animate gallery images on scroll
const galleryImages = document.querySelectorAll('.gallery-grid img');

function revealImages() {
  const windowHeight = window.innerHeight;
  galleryImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    if(rect.top < windowHeight - 100) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealImages);
window.addEventListener('load', revealImages);
