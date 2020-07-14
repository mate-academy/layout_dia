
'use strict';

const slider = document.querySelector('.slider');
const gallery = slider.querySelector('.slider__carousel');
let current = 0;

slider.querySelector('.slider__controll').onclick = function(e) {
  if (e.target.classList.contains('slider__controll')) {
    return;
  }

  e.target.classList
    .contains('slider__button--right') ? move(true) : move(false);
};

function move(side) {
  side ? current++ : current--;

  current < 0 && (current = gallery.children.length - 1);
  current > gallery.children.length - 1 && (current = 0);

  gallery.style.transform = `translateX(${-current * 100}%)`;
}
