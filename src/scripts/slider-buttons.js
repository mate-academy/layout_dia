/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
// eslint-disable-next-line strict
// const leftButton = document.getElementById('leftButton');
// const rightButton = document.getElementById('rightButton');
// const images = document.querySelectorAll('.image');
// let currentIndex = 0;

// leftButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateActiveImage();
// });

// rightButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateActiveImage();
// });

// function updateActiveImage() {
//   images.forEach((image, index) => {
//     if (index === currentIndex) {
//       image.classList.add('active');
//       image.classList.remove('inactive');
//     } else {
//       image.classList.remove('active');
//       image.classList.add('inactive');
//     }
//   });
// }

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const images = document.querySelectorAll('.image');
let currentIndex = 0;
const array = [
  '../images/slider/slide-img-1.jpg',
  '../images/slider/slide-img-2.png'
];

leftButton.addEventListener('click', () => {
  updateActiveImageLeft();
});

rightButton.addEventListener('click', () => {
  updateActiveImageRight();
});

function updateActiveImageLeft() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % array.length;
  images[currentIndex].classList.add('active');
  images[currentIndex].style.backgroundImage = `url(${array[currentIndex]})`;
}

function updateActiveImageRight() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + array.length) % array.length;
  images[currentIndex].classList.add('active');
  images[currentIndex].style.backgroundImage = `url(${array[currentIndex]})`;
}

