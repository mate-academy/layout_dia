'use strict';

let index = 0;

function slide() {
  const imgList = document.querySelectorAll('.slider__img');

  imgList.forEach((el, i) => {
    if (el.classList.contains('slider__img--active')) {
      el.classList.remove('slider__img--active');
      index = i + 1;
    }
  });

  if (index === imgList.length) {
    index = 0;
  }

  imgList[index].classList.add('slider__img--active');
};

let holdInterval = setInterval(() => {
  slide();
}, 3000);

window.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.slider__button-back')) {
    clearInterval(holdInterval);
    index--;
    slide();

    holdInterval = setInterval(() => {
      slide();
    }, 3000);
  }

  if (e.target === document.querySelector('.slider__button-forward')) {
    clearInterval(holdInterval);
    index++;
    slide();

    holdInterval = setInterval(() => {
      slide();
    }, 3000);
  }
});
