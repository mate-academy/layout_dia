'use strict';

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset
    || document.documentElement.scrollTop;
  const shrinkOn = 500;
  const headerEl = document.getElementById('header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add('page__header-wrapper--smaller');
  } else {
    headerEl.classList.remove('page__header-wrapper--smaller');
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
