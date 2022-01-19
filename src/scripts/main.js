'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#dropdown-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('form__name').value = '';
  document.getElementById('form__message').value = '';
  document.getElementById('form__email').value = '';
});

document.myForm.reset();
