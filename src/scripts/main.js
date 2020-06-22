'use strict';

const btnNext = document.querySelector('.slider__button--right');
const btnPrev = document.querySelector('.slider__button--left');
const list = document.querySelector('.slider__carousel');

const quantityItems = list.childElementCount - 1;

const width = list.firstElementChild.offsetWidth;

list.style.width = `${width}px`;

let counter = 0;

btnNext.addEventListener('click', function() {
  countNext();

  slideShow();
});

btnPrev.addEventListener('click', function() {
  countPrev();

  slideShow();
});

function countPrev() {
  counter = (counter <= 0)
    ? quantityItems
    : (counter - 1);
}

function countNext() {
  counter = (counter >= quantityItems)
    ? 0
    : (counter + 1);
}

function slideShow() {
  list.style.transform = `translateX(-${(counter) * width}px)`;
}
