'use strict';

const buttonSlogan = document.querySelector('.slogan__button');
const rectangles = document.querySelectorAll('.rectangle');

function rotateRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].classList.toggle('rectangle--is-active');
  }
}

buttonSlogan.onmouseover = rotateRectangles;

buttonSlogan.addEventListener('onmouseover', (e) => {
  if (e.target === buttonSlogan) {
    rotateRectangles();
  }
});
