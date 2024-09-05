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

let sliderImageIndexNumber = 0;
const imagesSrc = Array.from(document.querySelectorAll('.header__slider-main-image'))
  .map(img => img.getAttribute('src'));
const buttonLeft = document
  .querySelector('.header__slider-button--left') as HTMLButtonElement;
const buttonRight = document
  .querySelector('.header__slider-button--right') as HTMLButtonElement;
const form = document.querySelector('.footer__form') as HTMLFormElement;
const formInputs = Array.from(document.querySelectorAll('.footer__form-input'))
  .map(input => {
    input.addEventListener('input', (e) => {
      input.setAttribute('value', (e.target as HTMLInputElement).value);
    })

    return input as HTMLInputElement;
  })
const textArea = formInputs[formInputs.length - 2];
const extraTextArea = document.querySelector('.footer__form-input--extra') as HTMLTextAreaElement;

textArea.addEventListener('input', () => {
  textArea.style.height = `${extraTextArea.scrollHeight - 16}px`;
  extraTextArea.value = textArea.value;
})

textArea.addEventListener('focus', () => {
  textArea.style.paddingBottom = '0px';
})

textArea.addEventListener('blur', () => {
  textArea.style.paddingBottom = '16px';
})

function slideImageLeftAndRight(direction: SlideDirection, button: HTMLButtonElement) {
  button.disabled = true;
  const leftIndex = sliderImageIndexNumber === 0
    ? 2
    : sliderImageIndexNumber - 1;
  const rightIndex = sliderImageIndexNumber === 2
    ? 0
    : sliderImageIndexNumber + 1;
  const sliderImage = document
    .querySelector('.header__slider-main-image') as HTMLElement;
  const newSliderImage = document.createElement('img') as HTMLElement;
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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (formInputs.slice(0,3).every(input => input.getAttribute('value'))) {
    formInputs.map(input => input.setAttribute('value', ''));
    return form.reset();
  }

  alert('Please fill all fields');
  return false;
});
