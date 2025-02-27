document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');

  if (!slides.length) {
      console.error("No slides found!");
      return;
  }

  let currentSlide = 0; // Start from the first slide (Image 1)

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  // Show the first slide when the page loads
  showSlide(currentSlide);

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
});
