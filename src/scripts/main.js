'use strict';

const menuButton = document.querySelector('.top-bar__btn');
const menuButtonClose = document.querySelector('.top-bar__btn--close');
const menu = document.querySelector('.menu');
const countSlides = document.querySelectorAll('.slider__track img').length;
const track = document.querySelector('.slider__track');
const arrowLeft = document.querySelector('.slider__arrow-left');
const arrowRight = document.querySelector('.slider__arrow-right');

let curSlide = 0;

menuButton.onclick = () => openMenu();

menu.onclick = function (event) {
  const a = event.target.closest('a');
  if (!a) return;
  closeMenu();
};

arrowLeft.onclick = () => slider('left');
arrowRight.onclick = () => slider('right');

function openMenu() {
  menuButton.classList.add('top-bar__btn--close');
}
function closeMenu() {
  menuButton.classList.remove('top-bar__btn--close');
}

function slider(direct) {
  if (direct === 'right') {
    if (curSlide + 1 < countSlides) {
      const deltaX = (curSlide + 1) * 100;
      track.style.transform = `translateX(${-deltaX}%)`;
      curSlide += 1;
    }
  }
  if (direct === 'left') {
    if (curSlide - 1 >= 0) {
      const deltaX = (curSlide - 1) * 100;
      track.style.transform = `translateX(${-deltaX}%)`;
      curSlide -= 1;
    }
  }
}
