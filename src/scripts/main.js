'use strict';

const fieldHeight = 40;
const correctColor = '#fff';
const errorColor = '#FF9C8E';

const form = document.getElementById('form');
const sendButton = document.getElementById('send');
const inputEmail = document.getElementById('email');
const inputName = document.getElementById('name');
const inputMessage = document.getElementById('message');

const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function validateEmailField(el, regexp) {
  return el.value.match(regexp);
}

function validateStringByLength(element, minValue) {
  element.value = element.value.trim();

  return element.value.length >= minValue;
}

function validateStringByRegexp(element, regexp) {
  return element.value.match(regexp);
}

inputEmail.addEventListener('focusout', e => {
  paintElementValidation(e.target, validateEmailField(e.target, regexpEmail));
});

function paintElementValidation(element, isTrue) {
  if (element.value.trim().length === 0) {
    // element.style['border-bottom-color'] = '#ff0000';
  } else {
    paintElementValidationPart(element, isTrue);
  }
}

function paintElementValidationPart(el, isTrue) {
  if (isTrue) {
    el.style.color = correctColor;
    el.style['border-bottom-color'] = correctColor;
  } else {
    el.style.color = errorColor;
    el.style['border-bottom-color'] = errorColor;
  }
}

inputEmail.addEventListener('focusout', e => {
  paintElementValidation(e.target, validateEmailField(e.target, regexpEmail));
});

function submitValidation(element) {
  element.style.color = errorColor;
  element.style['border-bottom-color'] = errorColor;
  element.classList.add('send-message__input--error');

  setTimeout(() => {
    element.style.color = correctColor;
    element.style['border-bottom-color'] = correctColor;
    element.classList.remove('send-message__input--error');
  }, '1000');
}

inputMessage.addEventListener('input', event => {
  event.target.style.height = 'auto';

  const scHeight = Math.min(event.target.scrollHeight, fieldHeight * 3);

  event.target.style.height = `${scHeight - 9}px`;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateStringByLength(inputName, 2)
    && validateStringByRegexp(inputEmail, regexpEmail)
    && validateStringByLength(inputMessage, 2)) {
    event.target.reset();
    inputMessage.style.height = '37px';
  }
});

sendButton.addEventListener('click', e => {
  // e.preventDefault();

  if (!validateStringByLength(inputName, 2)) {
    submitValidation(inputName);
  }

  if (!validateStringByRegexp(inputEmail, regexpEmail)) {
    submitValidation(inputEmail);
  }

  if (!validateStringByLength(inputMessage, 2)) {
    submitValidation(inputMessage);
  }
  e.target.reset();
});
