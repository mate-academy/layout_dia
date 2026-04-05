'use strict';
const slides = document.querySelectorAll('.slider__image'); // всі слайди
const arrowLeft = document.querySelector('.slider__arrow:first-child'); // ліва стрілка
const arrowRight = document.querySelector('.slider__arrow:last-child');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('slider__image--active'); // показуємо активний
    } else {
      slide.classList.remove('slider__image--active'); // ховаємо інші
    }
  });
}

// Показуємо перший слайд при завантаженні
showSlide(currentSlide);

// 3️⃣ Клік на ліву стрілку
arrowLeft.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // циклічне листання
  showSlide(currentSlide);
});

// 4️⃣ Клік на праву стрілку
arrowRight.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length; // циклічне листання
  showSlide(currentSlide);
});


setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
