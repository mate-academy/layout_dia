'use strict';

const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const form = document.getElementById('form');
const textArea = document.querySelector('#form-textarea');
const textareaResizer = document.querySelector('#textarea-resizer');
const images
  = document.querySelectorAll('.slider .slider__box .slider__line img');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init() {
  // eslint-disable-next-line no-console
  console.log('resize');
  width = document.querySelector('.slider__box').offsetWidth;
  // eslint-disable-next-line no-console
  console.log(width);
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}
init();

window.addEventListener('resize', init);
init();

// eslint-disable-next-line max-len
document.querySelector('.slider__button--prev').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

// eslint-disable-next-line max-len
document.querySelector('.slider__button--next').addEventListener('click', function() {
  count++;

  if (count > images.length - 1) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

textArea.addEventListener('input', () => {
  textareaResizer.innerText = textArea.value;
});

const getScrollbarWidth = () => {
  const el = document.createElement('div');

  el.style.cssText = 'overflow:scroll; visibility:hidden; position:absolute;';
  document.body.appendChild(el);

  const barWidth = el.offsetWidth - el.clientWidth;

  el.remove();

  return barWidth;
};

const scrollbarWidth = getScrollbarWidth();

menu.style.paddingRight = `${scrollbarWidth}px`;

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    page.style.paddingRight = `${scrollbarWidth}px`;
    page.style.overflowY = `hidden`;
  } else {
    page.style.paddingRight = `0`;
    page.style.overflowY = `visible`;
  }
});
