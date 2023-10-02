'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.header__slide');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.header__slide div').length;

  function showSlide(index) {
    const newTransformValue = -index * 100 + '%';

    slider.style.transform = 'translateX(' + newTransformValue + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});

const form = document.getElementById('form');
const userEmail = document.getElementById('user-email');
const userName = document.getElementById('user-name');
const userMessage = document.getElementById('user-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  userEmail.value = '';
  userName.value = '';
  userMessage.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
