'use strict';

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset
    || document.documentElement.scrollTop;
  const shrinkOn = 720;
  const headerEl = document.getElementById('header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add('page__header--smaller');
  } else {
    headerEl.classList.remove('page__header--smaller');
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
