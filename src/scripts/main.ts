'use strict';

enum SlideDirection {
  left = 'left',
  right = 'right',
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body-menu');
  } else {
    document.body.classList.remove('body-menu');
  }
});

const buttonLeft = document
  .querySelector('.header__slider-button--left') as HTMLButtonElement;
const buttonRight = document
  .querySelector('.header__slider-button--right') as HTMLButtonElement;
let sliderImageIndexNumber = 1;

function slideImageLeftAndRight(direction: SlideDirection, button: HTMLButtonElement) {
  button.disabled = true;
  const leftIndex = sliderImageIndexNumber === 1
    ? 3
    : sliderImageIndexNumber - 1;
  const rightIndex = sliderImageIndexNumber === 3
    ? 1
    : sliderImageIndexNumber + 1;
  const sliderImage = document
    .querySelector('.header__slider-main-image') as HTMLElement;
  const newSliderImage = document.createElement('img') as HTMLElement;
  sliderImageIndexNumber = direction === SlideDirection.left
    ? leftIndex
    : rightIndex;

  newSliderImage.setAttribute(
    'src',
    `/slider-${sliderImageIndexNumber}.png`
  );
  newSliderImage.setAttribute('alt', 'Slider Image');
  newSliderImage.classList.add('header__slider-main-image');
  newSliderImage.style.opacity = '0';
  newSliderImage.style.transform = direction === SlideDirection.left
    ? 'translateX(100%)'
    : 'translateX(-50%)';
  sliderImage.after(newSliderImage);
  setTimeout(() => {
    sliderImage.style.opacity = '0';
    sliderImage.style.transform = direction === SlideDirection.left
      ? 'translateX(-50%)'
      : 'translateX(100%)';
    newSliderImage.style.opacity = '100%';
    newSliderImage.style.transform = 'translateX(0)';
  }, 10);
  setTimeout(() => {
    sliderImage.remove()
    button.disabled = false;
  }, 300);
}

buttonLeft.addEventListener('click',
  () => slideImageLeftAndRight(SlideDirection.left, buttonLeft)
);
buttonRight.addEventListener('click',
  () => slideImageLeftAndRight(SlideDirection.right, buttonRight)
);
