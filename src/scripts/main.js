'use strict';

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page-overflow')
    : document.body.classList.remove('page-overflow');

  return menu;
};

function slider(start, end) {
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const slide = document.getElementById('slide');
  let i = start;
  let timer;

  function startTimer() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setInterval(() => {
      slide.classList.remove(`slider__image--${i}`);
      i = i >= end ? start - 1 : i;
      slide.classList.add(`slider__image--${i + 1}`);
      i++;
    }, 5000);
  }

  startTimer();

  next.addEventListener('click', () => {
    slide.classList.remove(`slider__image--${i}`);
    i = i >= end ? start - 1 : i;
    slide.classList.add(`slider__image--${i + 1}`);
    i++;
    startTimer();
  });

  prev.addEventListener('click', () => {
    slide.classList.remove(`slider__image--${i}`);
    i = i <= start ? end + 1 : i;
    slide.classList.add(`slider__image--${i - 1}`);
    i--;
    startTimer();
  });
};

slider(1, 4);
