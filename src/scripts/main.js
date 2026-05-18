'use strict';

const btnMenu = document.querySelector('#menu-btn');
const menuClose = document.querySelector('#menu-close');
const navMenu = document.querySelector('#nav-menu');
const noScroll = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

const sliderImages = [
  'src/images/slider/slide-img-1.jpg',
  'src/images/features/features-bg.jpg',
];

let currentSlideIndex = 0;

const slider = document.getElementById('hero-slider');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

function changeBackground(index) {
  slider.style.backgroundImage = `url(${sliderImages[index]})`;
}

if (btnRight) {
  btnRight.addEventListener('click', () => {
    currentSlideIndex++;

    if (currentSlideIndex >= sliderImages.length) {
      currentSlideIndex = 0;
    }

    changeBackground(currentSlideIndex);
  });
}

if (btnLeft) {
  btnLeft.addEventListener('click', () => {
    currentSlideIndex--;

    if (currentSlideIndex < 0) {
      currentSlideIndex = sliderImages.length - 1;
    }

    changeBackground(currentSlideIndex);
  });
}

function openMenu() {
  navMenu.classList.add('nav--open');
  noScroll.classList.add('no-scroll');
}

function closeMenu() {
  navMenu.classList.remove('nav--open');
  noScroll.classList.remove('no-scroll');
}

if (btnMenu) {
  btnMenu.addEventListener('click', openMenu);
}

if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    closeMenu();

    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', {
      name: name,
      email: email,
      phone: formData.get('phone'),
      message: message
    });

    contactForm.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}