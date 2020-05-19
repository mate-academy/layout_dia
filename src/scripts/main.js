'use strict';

const slides = document.querySelectorAll('.slider__image');

const slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i].src;
  slides[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
  const img = document.createElement('img');

  img.src = slider[step];
  img.classList.add('slider__image');
  img.style.left = offset * 687 + 'px';
  document.querySelector('#slider').appendChild(img);

  if (step + 1 === slider.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

function left() {
  document.onclick = null;

  const slides2 = document.querySelectorAll('.slider__image');
  let offset2 = 0;

  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * 687 - 687 + 'px';
    offset2++;
  }

  setTimeout(function() {
    slides2[0].remove();
    draw();
    document.onclick = left;
  }, 1000);
}

draw(); draw();
document.onclick = left;
