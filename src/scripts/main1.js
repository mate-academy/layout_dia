'use strict';

(() => {
  const sliderInner = document.querySelector('.slider__inner');
  const buttonPrev = document.getElementById('next');
  const buttonNext = document.getElementById('prev');

  let step = 0;
  const imgWidth = 1146;
  const maxWidth = 4584;

  const id = setInterval(function() {
    step = step - imgWidth;
    if (step === -maxWidth) {
      step = 0;
    }
    sliderInner.style.cssText = `left:${step}px`;
  }, 4000);

  buttonNext.onclick = function() {
    clearInterval(id);
    step = step === -(maxWidth - imgWidth) ? step = 0 : step = step - imgWidth;
    sliderInner.style.cssText = `left:${step}px`;
  };

  buttonPrev.onclick = function() {
    clearInterval(id);
    step = step === 0 ? step = -(maxWidth - imgWidth) : step = step + imgWidth;
    sliderInner.style.cssText = `left:${step}px`;
  };

})();
