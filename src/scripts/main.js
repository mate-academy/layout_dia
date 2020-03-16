'use strict';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const navMain = document.querySelector('.nav-header');
const navToggle = document.querySelector('.nav-header__toggle');
const form = document.querySelector('.contact__form');
const inputEmail = document.querySelector('.form__field--email');
const inputName = document.querySelector('.form__field--name');
const inputMessage = document.querySelector('.form__field--textarea');

const onToggleEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMenu();
  }
};

const openMenu = function() {
  navMain.classList.remove('nav-header--closed');
  navMain.classList.add('nav-header--opened');
  document.addEventListener('keydown', onToggleEscPress);
};

const closeMenu = function() {
  navMain.classList.add('nav-header--closed');
  navMain.classList.remove('nav-header--opened');
  document.removeEventListener('keydown', onToggleEscPress);
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav-header--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navToggle.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE
    && navMain.classList.contains('nav-header--closed')) {
    closeMenu();
  } else {
    openMenu();
  }
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  inputEmail.value = '';
  inputMessage.value = '';
  inputName.value = '';
});
