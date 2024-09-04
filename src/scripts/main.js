'use strict';

let SlideDirection;

// eslint-disable-next-line no-shadow
(function(SlideDirection) {
  SlideDirection['left'] = 'left';
  SlideDirection['right'] = 'right';
})(SlideDirection || (SlideDirection = {}));
;

window.addEventListener('hashchange', function() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body-menu');
  } else {
    document.body.classList.remove('body-menu');
  }
});

const buttonLeft = document
  .querySelector('.header__slider-button--left');
const buttonRight = document
  .querySelector('.header__slider-button--right');
let sliderImageIndexNumber = 1;

function slideImageLeftAndRight(direction, button) {
  button.disabled = true;

  const leftIndex = sliderImageIndexNumber === 1
    ? 3
    : sliderImageIndexNumber - 1;
  const rightIndex = sliderImageIndexNumber === 3
    ? 1
    : sliderImageIndexNumber + 1;
  const sliderImage = document
    .querySelector('.header__slider-main-image');
  const newSliderImage = document.createElement('img');

  sliderImageIndexNumber = direction === SlideDirection.left
    ? leftIndex
    : rightIndex;

  newSliderImage.setAttribute(
    'src',
    '/slider-'.concat(sliderImageIndexNumber, '.png'),
  );
  newSliderImage.setAttribute('alt', 'Slider Image');
  newSliderImage.classList.add('header__slider-main-image');
  newSliderImage.style.opacity = '0';

  newSliderImage.style.transform = direction === SlideDirection.left
    ? 'translateX(100%)'
    : 'translateX(-50%)';
  sliderImage.after(newSliderImage);

  setTimeout(function() {
    sliderImage.style.opacity = '0';

    sliderImage.style.transform = direction === SlideDirection.left
      ? 'translateX(-50%)'
      : 'translateX(100%)';
    newSliderImage.style.opacity = '100%';
    newSliderImage.style.transform = 'translateX(0)';
  }, 10);

  setTimeout(function() {
    sliderImage.remove();
    button.disabled = false;
  }, 300);
}

buttonLeft.addEventListener('click', function() {
  return slideImageLeftAndRight(SlideDirection.left, buttonLeft);
});

buttonRight.addEventListener('click', function() {
  return slideImageLeftAndRight(SlideDirection.right, buttonRight);
});
