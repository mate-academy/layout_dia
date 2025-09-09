'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelectorAll('.header__photo');
  const nextBtn = document.querySelector('.slider__link-r');
  const prevBtn = document.querySelector('.slider__link-l');

  let currentIndex = 0;

  function showSlide(index) {
    photos.forEach((photo, i) => {
      photo.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % photos.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
