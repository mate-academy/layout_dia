'use strict';

const galleryButtonRight = document.getElementById(
  'header__gallery-button--right',
) as HTMLElement;
const galleryButtonLeft = document.getElementById(
  'header__gallery-button--left',
) as HTMLElement;
const gallery = document.querySelector('.header__gallery-list') as HTMLElement;

let currentX = 0;

galleryButtonRight.addEventListener('click', () => {
  if (currentX <= -75) {
    currentX = 0;
  } else {
    currentX -= 100 / 4;
  }

  gallery.style.transform = `translateX(${currentX}%)`;
});

galleryButtonLeft.addEventListener('click', () => {
  if (currentX >= 0) {
    currentX = -75;
  } else {
    currentX += 100 / 4;
  }

  gallery.style.transform = `translateX(${currentX}%)`;
});
