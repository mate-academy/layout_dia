'use strict';

document.getElementById('sendMessage').addEventListener('submit', function(e) {
  // Скасовуємо стандартну дію відправки на сервер
  e.preventDefault();

  // Опціонально очищаємо поля форми
  this.reset();
});

const showMenu = document.getElementById('show-menu');
const navList = document.getElementById('nav-list');

showMenu.addEventListener('click', () => {
  if (navList.style.display === 'none') {
    navList.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 30px;
    `;
  } else {
    navList.style.display = 'none';
  }
});
