'use strict';

// ------------------ Burger Menu --------------- //
const burger = document.querySelector('.header__burger');
const closeButton = document.querySelector('.mobile-nav__close');
const mobileNav = document.querySelector('.header__mobile-nav');

if (burger && mobileNav) {
  const mobileLinks = mobileNav.querySelectorAll('.mobile-nav__link');

  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    burger.classList.remove('is-open');

    burger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('menu-open');
  };

  const openMenu = () => {
    mobileNav.classList.add('is-open');
    burger.classList.add('is-open');

    burger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');

    document.body.classList.add('menu-open');
  };

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeButton?.addEventListener('click', closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (
      mobileNav.classList.contains('is-open') &&
      !mobileNav.contains(target) &&
      !burger.contains(target)
    ) {
      closeMenu();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

// ------------------ Slider --------------- //

const slider = document.querySelector('.slider');

if (slider) {
  const slides = slider.querySelectorAll('.slider__slide');
  const prevButton = slider.querySelector('.slider__btn--prev');
  const nextButton = slider.querySelector('.slider__btn--next');

  let currentSlide = 0;
  let autoplayInterval = null;

  const AUTOPLAY_DELAY = 5000;

  const showSlide = (index) => {
    if (!slides.length) {
      return;
    }
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index;
      slide.classList.toggle('slider__slide--active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    currentSlide = index;
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;

    showSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;

    showSlide(prevIndex);
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    autoplayInterval = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);
  };

  if (slides.length > 1) {
    prevButton?.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });

    nextButton?.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });

    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);

    slider.addEventListener('focusin', stopAutoplay);

    slider.addEventListener('focusout', startAutoplay);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
        startAutoplay();
      }

      if (event.key === 'ArrowRight') {
        nextSlide();
        startAutoplay();
      }
    });

    // ------------------ Touch swipe --------------- //
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener(
      'touchstart',
      (event) => {
        touchStartX = event.changedTouches[0].screenX;
        stopAutoplay();
      },
      { passive: true },
    );

    slider.addEventListener(
      'touchend',
      (event) => {
        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > 50) {
          if (swipeDistance < 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }

        startAutoplay();
      },
      { passive: true },
    );

    startAutoplay();
  }

  showSlide(currentSlide);
}

/* ------------------ Contact Form --------------- */
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = contactForm.querySelector('input[name="email"]');

    const nameInput = contactForm.querySelector('input[name="name"]');

    const messageInput = contactForm.querySelector('textarea[name="message"]');

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const email = emailInput.value.trim();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    contactForm.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    alert('Thank you! Your message has been sent.');
  });
}

/* -------------- Theme Toggle -------------------- */
const themeToggle = document.querySelector('.theme-toggle');

console.log('Theme button:', themeToggle);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    console.log('Theme button clicked');

    const isBlue = document.body.classList.toggle('theme-blue');

    console.log('Blue theme:', isBlue);

    themeToggle.setAttribute('aria-pressed', String(isBlue));
  });
}
