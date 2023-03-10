'use strict';

const nextButton = document.querySelector('.header__gallery-button-next');
const previousButton = document
  .querySelector('.header__gallery-button-previous');

const galleryImage1 = document.querySelector('.header__gallery-image-1');
const galleryImage2 = document.querySelector('.header__gallery-image-2');
const galleryImage3 = document.querySelector('.header__gallery-image-3');

galleryImage1.style.right = '0%';

function nextImage() {
  if (galleryImage1.style.right === '0%') {
    galleryImage1.style.right = '100%';
    galleryImage2.style.right = '0%';
    galleryImage3.style.right = '-100%';
  } else if (galleryImage2.style.right === '0%') {
    galleryImage1.style.right = '200%';
    galleryImage2.style.right = '100%';
    galleryImage3.style.right = '0%';
  } else {
    galleryImage1.style.right = '0%';
    galleryImage2.style.right = '-100%';
    galleryImage3.style.right = '-200%';
  };
};

function previousImage() {
  if (galleryImage1.style.right === '0%') {
    galleryImage1.style.right = '200%';
    galleryImage2.style.right = '100%';
    galleryImage3.style.right = '0%';
  } else if (galleryImage3.style.right === '0%') {
    galleryImage1.style.right = '100%';
    galleryImage2.style.right = '0%';
    galleryImage3.style.right = '-100%';
  } else {
    galleryImage1.style.right = '0%';
    galleryImage2.style.right = '-100%';
    galleryImage3.style.right = '-200%';
  };
};

nextButton.addEventListener('click', () => {
  nextImage();
});

previousButton.addEventListener('click', () => {
  previousImage();
});

const body = document.querySelector('body');

function disableContainer(width) {
  if (body.clientWidth >= width) {
    const headerContainer = document.querySelector('.header__content')
      .firstElementChild;

    headerContainer.style.paddingRight = '0px';
  }
};

disableContainer(1024);

function changePosition(width) {
  const element = document.querySelector('.contacts');

  if (body.clientWidth >= width) {
    element.classList
      .replace(
        'grid__item-desktop-7-12', 'grid__item-desktop-8-12'
      );
  };
}

changePosition(1600);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const openMenu = document.querySelector('.header__menu-open');
const closeMenu = document.querySelector('.header__menu-close');
const nav = document.querySelector('.header__nav--opened');

closeMenu.style.opacity = '0';
closeMenu.style.pointerEvents = 'none';

openMenu.addEventListener('click', () => {
  nav.style.opacity = '1';
  nav.style.pointerEvents = 'all';

  openMenu.style.opacity = '0';
  openMenu.style.pointerEvents = 'none';

  closeMenu.style.opacity = '1';
  closeMenu.style.pointerEvents = 'all';
});

closeMenu.addEventListener('click', () => {
  openMenu.style.opacity = '1';
  openMenu.style.pointerEvents = 'all';

  nav.style.opacity = '0';
  nav.style.pointerEvents = 'none';

  closeMenu.style.opacity = '0';
  closeMenu.style.pointerEvents = 'none';
});
