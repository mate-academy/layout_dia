'use strict';

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset
    || document.documentElement.scrollTop;
  const shrinkOn = 2200;
  const headerEl = document.getElementById('card-slide');

  if (distanceY > shrinkOn) {
    headerEl.classList.add('steps-card--slide-down');
  } else {
    headerEl.classList.remove('steps-card--slide-down');
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
