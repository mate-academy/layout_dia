'use strict';

const sliderEl1 = document.querySelector('.intro');

createSlider(sliderEl1);

function createSlider(sliderEl) {
  const items = sliderEl.querySelectorAll('.intro__slider');
  const next = sliderEl.querySelector('.js-slider-next');
  const prev = sliderEl.querySelector('.js-slider-prev');

  const count = items.length;

  sliderEl.style.setProperty('--count', count);

  function moveTo(position) {
    const normalizedPosition = normalizePosition(position);

    sliderEl.style.setProperty('--position', normalizedPosition);
  }

  function normalizePosition(position) {
    if (position < 0) {
      return count - 1;
    }

    if (position >= count) {
      return 0;
    }

    return position;
  }

  next.addEventListener('click', function() {
    const position = Number(sliderEl.style.getPropertyValue('--position') || 0);

    moveTo(position + 1);
  });

  prev.addEventListener('click', function() {
    const position = Number(sliderEl.style.getPropertyValue('--position') || 0);

    moveTo(position - 1);
  });
}
