'use strict';

import introImage from '../images/Photo.webp';
import ideasImage from '../images/Photo3.webp';
import futureImage from '../images/Photo4.webp';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  contactForm?.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) return;

    window.alert(`Thank you, ${name}! Your message has been sent successfully. We will contact you soon.`);
    contactForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const image = document.getElementById('hero-slide-image');
  const title = document.getElementById('hero-slide-title');
  const description = document.getElementById('hero-slide-description');
  const previousButton = document.querySelector('.top__images--right');
  const nextButton = document.querySelector('.top__images--left');
  const slides = [
    { image: introImage, title: 'Intro', description: 'By the same illusion which lifts the horizon.' },
    { image: ideasImage, title: 'Ideas', description: 'We believe in the power of bold concepts.' },
    { image: futureImage, title: 'Future', description: 'Ready to transform your brand together.' },
  ];
  let currentSlide = 0;
  const carousel = image?.closest('.top__images');
  let autoplayId;

  function showSlide(index) {
    if (!image || !title || !description) return;

    currentSlide = (index + slides.length) % slides.length;
    const slide = slides[currentSlide];
    image.style.opacity = '0';

    window.setTimeout(() => {
      image.src = slide.image;
      image.alt = `Creative agency ${slide.title.toLowerCase()}`;
      title.textContent = slide.title;
      description.textContent = slide.description;
      image.style.opacity = '1';
    }, 150);
  }

  previousButton?.addEventListener('click', () => showSlide(currentSlide - 1));
  nextButton?.addEventListener('click', () => showSlide(currentSlide + 1));

  function startAutoplay() {
    if (!carousel || autoplayId) return;

    autoplayId = window.setInterval(() => {
      if (document.hidden || carousel.matches(':hover') || carousel.contains(document.activeElement)) return;

      showSlide(currentSlide + 1);
    }, 5000);
  }

  function restartAutoplay() {
    window.clearInterval(autoplayId);
    autoplayId = undefined;
    startAutoplay();
  }

  previousButton?.addEventListener('click', restartAutoplay);
  nextButton?.addEventListener('click', restartAutoplay);
  startAutoplay();
});
