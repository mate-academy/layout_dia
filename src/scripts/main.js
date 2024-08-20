'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.slider__wrapper');
  const slides = document.querySelectorAll('.slider__image');
  const totalSlides = slides.length;
  let index = 0;

  const getSlideWidth = () => slides[0].offsetWidth;

    const showSlide = (slideIndex) => {
        const slideWidth = getSlideWidth();
        const offset = -slideIndex * slideWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
    };

    document.querySelector('.slider__icon--left').addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        showSlide(index);
    });

    document.querySelector('.slider__icon--right').addEventListener('click', () => {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        showSlide(index);
    });

    window.addEventListener('resize', () => {
        showSlide(index);
    });

    showSlide(index);
});