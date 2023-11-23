'use strict';

const page = document.querySelector('.page');

const locking = document.querySelector('.burger-menu--icon');
const unlockingList = document.querySelector('.burger-menu__list');
const unlockingIconClose = document.querySelector('.burger-menu__close');

locking.addEventListener('click', function() {
  page.classList.add('page__lock');
});

unlockingList.addEventListener('click', function() {
  page.classList.remove('page__lock');
});

unlockingIconClose.addEventListener('click', function() {
  page.classList.remove('page__lock');
});

const textarea = document.querySelector('.feedback-form__message');

textarea.addEventListener('scroll', function(event) {
  if (this.scrollHeight < 50) {
    textarea.classList.remove('feedback-form__message--active');
  } else {
    textarea.classList.add('feedback-form__message--active');
  }
});
