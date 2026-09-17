'use strict';

export function initForm() {
  const form = document.querySelector('form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
  });
}
