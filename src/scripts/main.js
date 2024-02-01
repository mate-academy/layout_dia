'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const slide = document.querySelectorAll('.header__img');
  const prev = document.querySelector('.header__knob--left');
  const next = document.querySelector('.header__knob--right');
  const learnMoreButton = document.querySelector('.header__btn');
  const resultButton = document.querySelector('.results__btn');
  const serviceButton = document.querySelectorAll('.btn');
  let slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slide.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slide.length;
    }

    slide.forEach(function(item) {
      item.style.display = 'none';
    });

    slide[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });

  next.addEventListener('click', function() {
    plusSlides(1);
  });

  setInterval(() => {
    plusSlides(1);
  }, 5000);

  learnMoreButton.addEventListener('click', function() {
    const ourExpertiseSection = document.querySelector('.description');

    if (ourExpertiseSection) {
      ourExpertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  resultButton.addEventListener('click', function() {
    const ourFooterSection = document.querySelector('.footer');

    if (ourFooterSection) {
      ourFooterSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  serviceButton.forEach(function(button) {
    button.addEventListener('click', function() {
      const ourHeaderSection = document.querySelector('.header');

      if (ourHeaderSection) {
        ourHeaderSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// menu
document.addEventListener('DOMContentLoaded', function() {
  const btnMenu = document.querySelector('.header__menu');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.menu__close');
  const modalLinks = document.querySelectorAll('.menu__link');

  btnMenu.addEventListener('click', function() {
    menu.classList.add('open');
    menu.classList.remove('close');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    menu.classList.add('close');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  close.addEventListener('click', closeModal);

  modalLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeModal();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
