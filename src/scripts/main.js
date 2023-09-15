'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = form.querySelector('input[name="email"]');
  const nameInput = form.querySelector('input[name="name"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  if (
    !emailInput.value.trim()
    || !nameInput.value.trim()
    || !messageInput.value.trim()
  ) {
    // eslint-disable-next-line no-undef
    alert('Please fill in all the fields before submitting the form.');

    return;
  }

  form.reset();
  window.scrollTo(0, 0);
});
