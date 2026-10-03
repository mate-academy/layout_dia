'use strict';

import '../styles/main.scss';

/* ---------- Menu mobile ---------- */
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- Slider ---------- */
const slides = document.querySelectorAll('[data-slide]');
const prevButton = document.querySelector('[data-slider-prev]');
const nextButton = document.querySelector('[data-slider-next]');

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === currentSlide);
  });
}

if (slides.length > 0 && prevButton && nextButton) {
  prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
  nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
}

/* ---------- Formulário ---------- */
const form = document.querySelector('[data-contact-form]');
const status = document.querySelector('[data-form-status]');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setStatus(message, isError) {
  if (!status) {
    return;
  }

  status.textContent = message;
  status.style.color = isError ? '#d93025' : '#1e8e3e';
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const name = form.elements.name.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !name || !message) {
      setStatus('Please fill in all fields.', true);

      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('Please enter a valid email, like email@example.com.', true);

      return;
    }

    form.reset();
    setStatus('Thank you! Your message has been sent.', false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
