'use strict';

(() => {
  const id = setInterval(function() {
    step = step === 4 ? 1 : step = step + 1;
    sliderContainer.style.cssText
      = `background: url("https://banduraweb.github.io/layout_dia/images/slider/slide-img-${step}.jpg");`; // eslint-disable-line no-use-before-define
  }, 3000);

  const buttonPrev = document.getElementById('next');
  const buttonNext = document.getElementById('prev');
  const sliderContainer = document.querySelector('.header__slider');

  let step = 1;

  buttonNext.onclick = function() {
    clearInterval(id);
    step = step === 4 ? 1 : step = step + 1;
    sliderContainer.style.cssText
      = `background: url("https://banduraweb.github.io/layout_dia/images/slider/slide-img-${step}.jpg");`;
  };

  buttonPrev.onclick = function() {
    clearInterval(id);
    step = step === 1 ? step = 4 : step = step - 1;
    sliderContainer.style.cssText
      = `background: url("https://banduraweb.github.io/layout_dia/images/slider/slide-img-${step}.jpg");`;
  };
})();
