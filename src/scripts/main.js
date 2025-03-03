'use strict';
document.addEventListener("DOMContentLoaded", () => {
const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');
const arrowLeft = document.querySelector('.slider__slide__arrow__left');
const arrowRight = document.querySelector('.slider__slide__arrow__right');
const images = document.querySelectorAll('.slider__slide__img');
const menuClose = document.querySelector('.menu__close');
let currentIndex = 0;

iconMenu.addEventListener('click', () => {
  menu.classList.add('mobile-aktiv');
});

menu.addEventListener('click', () =>{
  menu.classList.remove('mobile-aktiv');
});

document.addEventListener("DOMContentLoaded", () => {
  updateSlider();
});

function updateSlider() {
  images.forEach((img, index) => {
      if (index === currentIndex) {
          img.classList.remove("hidden");
          setTimeout(() => img.style.opacity = "1", 50);
      } else {
          img.style.opacity = "0";
          setTimeout(() => img.classList.add("hidden"), 500);
      }
  });
}

arrowRight.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
      currentIndex = 0;
  }
  console.log('Arrow Right:', arrowRight);
  updateSlider();

});

arrowLeft.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
      currentIndex = images.length - 1;
  }
  console.log('Arrow Left:', arrowLeft);
  updateSlider();
});

document.querySelector('.contacts__contact__messege__form')
.addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
})
})