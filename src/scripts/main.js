'use strict';

const items = document.querySelector('.slider__items');
const prev = document.querySelector('.button--prev');
const next = document.querySelector('.button--next');

let position = 0;

move(0);

// Ждём клик от пользователя на кнопке Next
next.addEventListener('click', function() {
  move(1);
});

// Ждём клик от пользователя на кнопке Prev
prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  // Узнаём сколько детей в списке
  const count = items.children.length;
  // Меняем позицию на указанное значение

  position += shift;
  // Добавляем или убираем у кнопок атрибут disabled
  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;

  // Меняем стили списка
  // transform: translateX(-100%); // 0, -200%, -300%
  items.style.transform = `translateX(${-position * 100}%)`;
}
