'use strict';

const nextButton = document.querySelector('.header__gallery-button-next');
const previousButton = document
  .querySelector('.header__gallery-button-previous');

const galleryImage1 = document.querySelector('.header__gallery-image-1');
const galleryImage2 = document.querySelector('.header__gallery-image-2');
const galleryImage3 = document.querySelector('.header__gallery-image-3');

function nextImage() {
  if (galleryImage1.style.display === 'block') {
    galleryImage1.style.display = 'none';
    galleryImage2.style.display = 'block';
  } else if (galleryImage2.style.display === 'block') {
    galleryImage2.style.display = 'none';
    galleryImage3.style.display = 'block';
  } else {
    galleryImage3.style.display = 'none';
    galleryImage1.style.display = 'block';
  };
};

function previousImage() {
  if (galleryImage1.style.display === 'block') {
    galleryImage1.style.display = 'none';
    galleryImage3.style.display = 'block';
  } else if (galleryImage3.style.display === 'block') {
    galleryImage3.style.display = 'none';
    galleryImage2.style.display = 'block';
  } else {
    galleryImage2.style.display = 'none';
    galleryImage1.style.display = 'block';
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
