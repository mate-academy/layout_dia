'use strict';

const iconsContact = document.querySelector('.contacts__icon-item');
const services = document.querySelector('.services__list');
const slider = document.querySelector('.slider');
const arrayOfLinks = [
  'images/contacts/facebook_active.svg',
  'images/contacts/twitter_active.svg',
  'images/contacts/instagram_active.svg',
];

// const arraySliderPhotos = [
//   '../images/slider/slider_photo_1.jpg',
//   '../images/slider/slider_photo_2.jpg',
//   '../images/slider/Slider_img.jpg',
// ];

function getNewSrc(array, parentBlock, target) {
  [...parentBlock.querySelectorAll('img')].forEach((el, i) => {
    if (target === el) {
      const prevSrc = el.src;

      el.src = array[i];

      array[i] = prevSrc;
    }
  });
}

iconsContact.addEventListener('mouseover', (obj) => {
  getNewSrc(arrayOfLinks, iconsContact, obj.target);
});

iconsContact.addEventListener('mouseout', (obj) => {
  getNewSrc(arrayOfLinks, iconsContact, obj.target);
});

function resize(parentBlock, target, size, zIndex, position, f) {
  [...parentBlock.querySelectorAll('li')].forEach(el => {
    if (target === el.querySelector('img')) {
      f(target);
      target.style.width = `${size}px`;
      target.style.height = `${size}px`;
      target.style.zIndex = zIndex;
      target.style.position = position;
      target.style.transitionDuration = '0.5s';
    }
  });
}

function addElement(target) {
  const p = document.createElement('p');

  p.style.width = '56px';

  target.parentElement.prepend(p);
}

function removeElement(target) {
  const p = target.parentElement.querySelector('p');

  p.remove();
}

services.addEventListener('mouseover', (obj) => {
  resize(services, obj.target, 48, 2000, 'absolute', addElement);
});

services.addEventListener('mouseout', (obj) => {
  resize(services, obj.target, 40, 'auto', 'static', removeElement);
});

slider.addEventListener('click', (obj) => {
  obj.preventDefault();

  if (obj.target === slider.querySelector('.slider__img-left')) {
    slider.style.backgroundImage = `url('../images/slider/slider_photo_2.jpg')`;
    slider.style.backgroundSize = 'cover';
    slider.style.backgroundPosition = 'center';

    // eslint-disable-next-line no-console
    console.log(slider);
  }
});
