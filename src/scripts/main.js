'use strict';

// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const slider = document.querySelector('.slider');
// const images = slider.querySelectorAll('img');

// let currentImageIndex = 0;

// function showImage(index) {
//   if (index < 0) {
//     currentImageIndex = images.length - 1;
//   } else if (index >= images.length) {
//     currentImageIndex = 0;
//   }

//   images.forEach((img, idx) => {
//     if (idx === currentImageIndex) {
//       img.style.opacity = '1';
//     } else {
//       img.style.opacity = '0';
//     }
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentImageIndex--;
//   showImage(currentImageIndex);
// });

// nextBtn.addEventListener('click', () => {
//   currentImageIndex++;
//   showImage(currentImageIndex);
// });

// showImage(currentImageIndex);
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

  // Optional: Add event listeners for navigation
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
