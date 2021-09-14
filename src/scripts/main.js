'use strict';

const slider = createSlider(document.querySelector('.slider__wrapper'));

setInterval(() => {
  slider.move(1);
}, 3000);

// Эта функция активирует слайдер а переданном container
function createSlider(container) {
  // Ищем не во всём документе а в container
  const list = container.querySelector('.slider__images');
  const prev = container.querySelector('.button--prev');
  const next = container.querySelector('.button--next');

  let position = 0;

  function move(shift) {
    const count = list.children.length;

    position = (position + shift + count) % count;

    list.style.transform = `translateX(${-position * 100}%)`;
  }

  next.addEventListener('click', function() {
    move(1);
  });

  prev.addEventListener('click', function() {
    move(-1);
  });

  return { move };
}

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('burger__open');
});
