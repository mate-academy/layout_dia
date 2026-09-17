'use strict';

export function initForm() {
  const form = document.querySelector('.contact__form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      return;
    }

    event.preventDefault();
    form.reset();
  });
}
