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

let sliderImageIndexNumber = 0;
const imagesSrc = Array
  .from(document.querySelectorAll('.header__slider-main-image'))
  .map(function(img) {
    return img.getAttribute('src');
  });
const buttonLeft = document
  .querySelector('.header__slider-button--left');
const buttonRight = document
  .querySelector('.header__slider-button--right');
const form = document.querySelector('.footer__form');
const formInputs = Array.from(document.querySelectorAll('.footer__form-input'))
  .map(function(input) {
    input.addEventListener('input', function(e) {
      input.setAttribute('value', e.target.value);
    });

    return input;
  });
const textArea = formInputs[formInputs.length - 2];
const extraTextArea = document.querySelector('.footer__form-input--extra');

textArea.addEventListener('input', function() {
  textArea.style.height = ''.concat(extraTextArea.scrollHeight - 16, 'px');
  extraTextArea.value = textArea.value;
});

textArea.addEventListener('focus', function() {
  textArea.style.paddingBottom = '0px';
});

textArea.addEventListener('blur', function() {
  textArea.style.paddingBottom = '16px';
});

function slideImageLeftAndRight(direction, button) {
  button.disabled = true;

  const leftIndex = sliderImageIndexNumber === 0
    ? 2
    : sliderImageIndexNumber - 1;
  const rightIndex = sliderImageIndexNumber === 2
    ? 0
    : sliderImageIndexNumber + 1;
  const sliderImage = document
    .querySelector('.header__slider-main-image');
  const newSliderImage = document.createElement('img');

  sliderImageIndexNumber = direction === SlideDirection.left
    ? leftIndex
    : rightIndex;

  newSliderImage.setAttribute(
    'src',
    imagesSrc[sliderImageIndexNumber] || '/slider-1.png',
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

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (formInputs.every(function(input) {
    return input.getAttribute('value');
  })) {
    formInputs.map(function(input) {
      return input.setAttribute('value', '');
    });

    return form.reset();
  }
  // eslint-disable-next-line no-undef
  alert('Please fill all fields');

  return false;
});
