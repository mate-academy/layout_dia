'use strict';

document.getElementById('sendMessage').addEventListener('submit', function(e) {
  // Скасовуємо стандартну дію відправки на сервер
  e.preventDefault();

  // Опціонально очищаємо поля форми
  this.reset();
});
