'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const formSubmit = document.querySelector('#send-us-message-form');

formSubmit.addEventListener('submit', formSubmitSuccess, false);

function formSubmitSuccess(event) {
  const warn = 'Thank you for sending you message!<br>';

  document.getElementById('output-box').innerHTML = warn;

  document.getElementById('send-us-message-form').reset();

  event.preventDefault();
}
