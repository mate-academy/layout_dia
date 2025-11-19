import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();
const form = document.querySelector('.contact-us__form');

const fields = {
  email: form.querySelector('[name="email"]'),
  name: form.querySelector('[name="name"]'),
  message: form.querySelector('[name="message"]'),
};

let triggered = false;

const validators = {
  email: (value) => {
    if (!value) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return null;
  },
  name: (value) => {
    if (!value) return 'Name is required';
    return null;
  },
  message: (value) => {
    if (!value) return 'Message is required';
    return null;
  },
};

function validateField(fieldName) {
  const input = fields[fieldName];
  const value = input.value.trim();
  const error = validators[fieldName](value);

  setInvalidInput(input, !!error);
  return error;
}

function validateForm() {
  const errors = [];

  Object.keys(fields).forEach((fieldName) => {
    const error = validateField(fieldName);
    if (error) errors.push(error);
  });

  return errors;
}

function setInvalidInput(input, hasError) {
  if (hasError) {
    input.classList.add('contact-us__form-input--invalid');
  } else {
    input.classList.remove('contact-us__form-input--invalid');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  triggered = true;

  const errors = validateForm();

  if (errors.length > 0) {
    errors.forEach((error) => notyf.error(error));
    return;
  }

  notyf.success('Your message has been sent!');
  form.reset();
  triggered = false;
});

Object.keys(fields).forEach((fieldName) => {
  fields[fieldName].addEventListener('change', () => {
    if (!triggered) return;
    validateField(fieldName);
  });
});
