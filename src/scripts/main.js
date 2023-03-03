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

function disableContainer(width) {
  const body = document.querySelector('body');

  if (body.clientWidth >= width) {
    const headerContainer = document.querySelector('.header__content')
      .firstElementChild;

    headerContainer.style.paddingRight = '0px';
  }
};

disableContainer(1024);
