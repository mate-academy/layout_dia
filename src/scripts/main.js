'use strict';

const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  // Тут ви можете виконувати додаткові дії при кліку на бургер-меню
});
