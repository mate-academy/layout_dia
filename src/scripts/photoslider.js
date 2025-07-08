let currentSlide = 0;
const slides = document.querySelectorAll('.photoslider__image');
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevImage() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startAutoSlide() {
  intervalId = setInterval(nextImage, 4000); // 1 sekundy
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

document
  .querySelector('.photoslider__arrows-btn.prev')
  ?.addEventListener('click', prevImage);
document
  .querySelector('.photoslider__arrows-btn.next')
  ?.addEventListener('click', nextImage);

// Start od razu po załadowaniu
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startAutoSlide();
});
