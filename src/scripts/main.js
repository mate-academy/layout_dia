'use strict';
(() => {
  const buttonPrev = document.getElementById('next');
  const buttonNext = document.getElementById('prev');
  const sliderContainer = document.querySelector('.header__slider');

  let step = 1;

  buttonNext.onclick = function() {
    step = step === 4 ? 1 : step = step + 1;
    sliderContainer.style.cssText
      = `transition: none; background: 
      url("https://banduraweb.github.io/layout_dia/
      images/slider/slide-img-${step}.jpg");`;
  };

  buttonPrev.onclick = function() {
    step = step === 1 ? step = 4 : step = step - 1;
    sliderContainer.style.cssText
      = `transition: none; background: 
      url("https://banduraweb.github.io/layout_dia/
      images/slider/slide-img-${step}.jpg");`;
  };
})();
