'use strict';

const slider = document.querySelector('[data-slider]');
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    form.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

if (slider) {
  const slides = [...slider.querySelectorAll('.slider__slide')];
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const titleElement = slider.querySelector('[data-slider-title]');
  const textElement = slider.querySelector('[data-slider-text]');
  const infoElement = slider.querySelector('.slider__info');

  let currentSlideIndex = 0;
  let isAnimating = false;

  const showSlide = (index) => {
    if (isAnimating) {
      return;
    }

    isAnimating = true;

    slides[currentSlideIndex].classList.remove('slider__slide--active');

    currentSlideIndex = (index + slides.length) % slides.length;

    const currentSlide = slides[currentSlideIndex];

    currentSlide.classList.add('slider__slide--active');

    infoElement.classList.add('slider__info--hidden');

    setTimeout(() => {
      titleElement.textContent = currentSlide.dataset.title;
      textElement.innerHTML = currentSlide.dataset.text.replace('|', '<br>');

      infoElement.classList.remove('slider__info--hidden');
    }, 200);

    setTimeout(() => {
      isAnimating = false;
    }, 600);
  };

  prevButton.addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
  });
}
