'use strict';

// section.contacts
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.send-message__form');
  const inputs = form.querySelectorAll('input, textarea');

  // Додаємо або прибираємо клас "filled" при введенні
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    });
  });

  // При сабміті форми: скидаємо форму і класи
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // скасовує стандартну відправку
    form.reset(); // очищає поля форми

    // Прибираємо клас filled після очищення
    inputs.forEach(input => {
      input.classList.remove('filled');
    });
  });
});
