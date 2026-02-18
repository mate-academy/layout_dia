'use strict';

const card = document.querySelector('.card');
const btnBack = document.querySelector('.card__button--back');
const btnForward = document.querySelector('.card__button--forward');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const contactForm = document.querySelector('.form');

let currentIndex = 1;
const totalSlides = 4;

const updateSlide = (index) => {
  if (card) {
    card.classList.remove(
      'card--slide-1',
      'card--slide-2',
      'card--slide-3',
      'card--slide-4',
    );
    card.classList.add(`card--slide-${index}`);
  }
};

updateSlide(currentIndex);

if (btnForward && btnBack) {
  btnForward.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = currentIndex < totalSlides ? currentIndex + 1 : 1;
    updateSlide(currentIndex);
  });

  btnBack.addEventListener('click', (e) => {
    e.preventDefault();
    currentIndex = currentIndex > 1 ? currentIndex - 1 : totalSlides;
    updateSlide(currentIndex);
  });
}

if (burger && menu) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active');
    e.stopPropagation();
  });
}

document.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.closest('a[href^="#"]');

  if (link) {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      if (menu) menu.classList.remove('active');
      return;
    }
  }

  if (menu && menu.classList.contains('active')) {
    const isInsideMenu = menu.contains(target);
    const isBurger = burger && burger.contains(target);
    if (!isInsideMenu && !isBurger) menu.classList.remove('active');
  }
});

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    alert(
      `Thank you, ${nameInput ? nameInput.value : 'Guest'}! Your message has been sent.`,
    );
    contactForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
