document.addEventListener('DOMContentLoaded', () => {
  // Отримання елементів
  const prevButton = document.querySelector('.slider-overlay__button--prev');
  const nextButton = document.querySelector('.slider-overlay__button--next');
  const slides = document.querySelector('.slider__slides');
  const slideCount = document.querySelectorAll('.slider__slide').length;
  let currentIndex = 0;

  // Функція для показу слайда за індексом
  function showSlide(index) {
      if (index >= slideCount) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slideCount - 1;
      } else {
          currentIndex = index;
      }
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      console.log('Current index:', currentIndex);
  }

  // Обробники подій для кнопок
  prevButton.addEventListener('click', () => {
      showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
      showSlide(currentIndex + 1);
  });

  // Optional: Auto-slide every 3 seconds
  setInterval(() => {
      showSlide(currentIndex + 1);
  }, 3000);
});
