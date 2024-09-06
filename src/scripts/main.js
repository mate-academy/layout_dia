'use strict';

const slider = document.querySelector('.slides');
const arrowLeft = document.querySelector('.slider__button-prev');
const arrowRight = document.querySelector('.slider__button-next');
const slides = Array.from(slider.querySelectorAll('.slider__img'));
const slideCount = slides.length;
let slideIndex = 0;

// Додаємо обробники подій для кнопок
arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);

// Функція для відображення попереднього слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функція для відображення наступного слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функція для оновлення відображення слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block'; // Показуємо поточний слайд
    } else {
      slide.style.display = 'none'; // Ховаємо інші слайди
    }
  });
}

// Показуємо перший слайд при завантаженні сторінки
updateSlider();
