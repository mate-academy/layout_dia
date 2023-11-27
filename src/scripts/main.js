'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const navLinks = document.querySelectorAll('.shop__nav-link');
const cards = document.querySelector('.shop__cards');

const targetLink = document.querySelector('#target');
const bodyLink = document.querySelector('#body');
const hairLink = document.querySelector('#hair');
const candlesLink = document.querySelector('#candles');

function getFace() {
  if (window.innerWidth < 400) {
    return 161;
  }

  if (window.innerWidth < 500) {
    return 158;
  }

  if (window.innerWidth < 744) {
    return 157;
  }

  if (window.innerWidth < 850) {
    return 160;
  }

  if (window.innerWidth < 1000) {
    return 158;
  }

  if (window.innerWidth < 1279) {
    return 157;
  }

  if (window.innerWidth > 1279) {
    return 156.5;
  }
}

function getBody() {
  if (window.innerWidth < 500) {
    return 54;
  }

  if (window.innerWidth < 744) {
    return 53;
  }

  if (window.innerWidth < 850) {
    return 55;
  }

  if (window.innerWidth < 1000) {
    return 54;
  }

  if (window.innerWidth <= 1279) {
    return 54;
  }

  if (window.innerWidth > 1279) {
    return 53;
  }
}

function getHair() {
  return -51;
}

function getCandles() {
  if (window.innerWidth < 400) {
    return -158;
  }

  if (window.innerWidth < 500) {
    return -156;
  }

  if (window.innerWidth < 744) {
    return -154;
  }

  if (window.innerWidth < 850) {
    return -156;
  }

  if (window.innerWidth < 1000) {
    return -155;
  }

  if (window.innerWidth < 1279) {
    return -154;
  }

  if (window.innerWidth > 1279) {
    return -154;
  }
}

window.addEventListener('resize', () => {
  navLinks.forEach(a => {
    a.classList.remove('shop__nav-link--target');
  });

  targetLink.classList.add('shop__nav-link--target');

  if (window.innerWidth < 400) {
    cards.style.transform = 'translateX(' + 161 + '%)';
  } else if (window.innerWidth < 500) {
    cards.style.transform = 'translateX(' + 158 + '%)';
  } else if (window.innerWidth < 744) {
    cards.style.transform = 'translateX(' + 157 + '%)';
  } else if (window.innerWidth < 850) {
    cards.style.transform = 'translateX(' + 160 + '%)';
  } else if (window.innerWidth < 1000) {
    cards.style.transform = 'translateX(' + 158 + '%)';
  } else if (window.innerWidth <= 1279) {
    cards.style.transform = 'translateX(' + 157 + '%)';
  } else if (window.innerWidth > 1279) {
    cards.style.transform = 'translateX(' + 156.5 + '%)';
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    navLinks.forEach(a => {
      a.classList.remove('shop__nav-link--target');
    });

    const targetId = link.getAttribute('href');

    if (targetId === '#face') {
      cards.style.transform = 'translateX(' + getFace() + '%)';
      targetLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#body') {
      cards.style.transform = 'translateX(' + getBody() + '%)';
      bodyLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#hair') {
      cards.style.transform = 'translateX(' + getHair() + '%)';
      hairLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#candles') {
      cards.style.transform = 'translateX(' + getCandles() + '%)';
      candlesLink.classList.add('shop__nav-link--target');
    }
  });
});
