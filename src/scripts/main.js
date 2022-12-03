'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('contacts-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

createSlider(document.querySelector('#slider'));

function createSlider(slider) {
  const list = slider.querySelector('.slider__gallery');
  const prev = slider.querySelector('#arrow-left');
  const next = slider.querySelector('#arrow-right');

  const count = list.children.length;

  let position = 0;

  moveTo(0);

  function moveTo(newPosition) {
    position = normalizePozition(newPosition);

    list.style.transform = `translateX(${-position * 100}%)`;
  }

  function moveRight() {
    moveTo(position + 1);
  }

  function moveLeft() {
    moveTo(position - 1);
  }

  function normalizePozition(newPosition) {
    let finalPositions = newPosition % count;

    if (finalPositions < 0) {
      finalPositions += count;
    }

    return finalPositions;
  }

  next.addEventListener('click', function() {
    moveRight();
  });

  prev.addEventListener('click', function() {
    moveLeft();
  });

  return {
    moveTo,
    moveRight,
    moveLeft,
  };
}
