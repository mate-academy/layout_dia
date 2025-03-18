'use strict';

const sliderInner = document.querySelector('.slider-inner');
const sliderList = document.querySelector('.slider-list');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = document.querySelectorAll('.slide');

let currentPosition = 0;
let isAnimating = false;

nextButton.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    sliderInner.style.transition = 'transform 0.5s ease-in-out';
    sliderInner.style.transform = `translateX(-100%)`;

    setTimeout(() => {
        const firstSlide = sliderInner.querySelector('.slide');
        sliderInner.appendChild(firstSlide); // Переміщуємо перший слайд в кінець
        sliderInner.style.transition = 'none';
        sliderInner.style.transform = 'translateX(0)';

        isAnimating = false;
    }, 500);
});

prevButton.addEventListener('click', () => {
    if (isAnimating) return;

    isAnimating = true;

    const lastSlide = sliderInner.querySelector('.slide:last-child');
    sliderInner.insertBefore(lastSlide, sliderInner.firstChild); // Переміщуємо останній слайд на початок
    sliderInner.style.transition = 'none';
    sliderInner.style.transform = `translateX(-100%)`;

    setTimeout(() => {
      sliderInner.style.transition = 'transform 0.5s ease-in-out';
      sliderInner.style.transform = 'translateX(0)';

        isAnimating = false;
    }, 10);
});

const slideInterval = 3000; // Час між перемиканнями слайдів (в мілісекундах)

// setInterval(() => {
//   if (isAnimating) return;

//   isAnimating = true;

//   sliderInner.style.transition = 'transform 0.5s ease-in-out';
//   sliderInner.style.transform = `translateX(-100%)`;

//   setTimeout(() => {
//       const firstSlide = sliderInner.querySelector('.slide');
//       sliderInner.appendChild(firstSlide); // Переміщуємо перший слайд в кінець
//       sliderInner.style.transition = 'none';
//       sliderInner.style.transform = 'translateX(0)';

//       isAnimating = false;
//   }, 500);
// }, slideInterval);

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  page.classList.toggle('page--theme--blue');
});
