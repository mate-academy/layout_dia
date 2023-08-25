// 'use strict';

// const previous = document.querySelector('.previous');
// const next = document.querySelector('.next');
// const images = document.querySelector('.slider-carousel').children;
// const totalImages = images.length;
// let currentIndex = 0;

// // Event Listeners to previous and next buttons
// previous.addEventListener('click', () => {
//   previousImage();
// });

// next.addEventListener('click', () => {
//   nextImage();
// });

// // Function to go to next Image
// function nextImage() {
//   images[currentIndex].classList.remove('main');

//   if (currentIndex == totalImages - 1) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }

//   images[currentIndex].classList.add('main');
// }

// // Function to go to previous Image
// function previousImage() {
//   images[currentIndex].classList.remove('main');

//   if (currentIndex == 0) {
//     currentIndex = totalImages - 1;
//   } else {
//     currentIndex--;
//   }

//   images[currentIndex].classList.add('main');
// }
