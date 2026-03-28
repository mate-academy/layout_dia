'use strict';

const body = document.body;
const mobileMenu = document.querySelector('[data-mobile-menu]');
const openMenuButton = document.querySelector('[data-menu-open]');
const closeMenuButton = document.querySelector('[data-menu-close]');
const mobileMenuLinks = document.querySelectorAll(
  '.mobile-menu__link, .mobile-menu__button',
);

const openMenu = () => {
  if (!mobileMenu || !openMenuButton) {
    return;
  }

  mobileMenu.hidden = false;
  mobileMenu.classList.add('mobile-menu--open');
  body.classList.add('page__body--menu-open');
  openMenuButton.setAttribute('aria-expanded', 'true');
};

const closeMenu = () => {
  if (!mobileMenu || !openMenuButton) {
    return;
  }

  mobileMenu.classList.remove('mobile-menu--open');
  body.classList.remove('page__body--menu-open');
  openMenuButton.setAttribute('aria-expanded', 'false');

  window.setTimeout(() => {
    if (!mobileMenu.classList.contains('mobile-menu--open')) {
      mobileMenu.hidden = true;
    }
  }, 300);
};

if (openMenuButton) {
  openMenuButton.addEventListener('click', openMenu);
}

if (closeMenuButton) {
  closeMenuButton.addEventListener('click', closeMenu);
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', event => {
    if (
      event.target === mobileMenu ||
      event.target.classList.contains('mobile-menu__overlay')
    ) {
      closeMenu();
    }
  });
}

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

const slider = document.querySelector('[data-slider]');

if (slider) {
  const slides = Array.from(slider.querySelectorAll('[data-slider-slide]'));
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const dots = Array.from(slider.querySelectorAll('[data-slider-dot]'));
  const title = slider.querySelector('[data-slider-title]');
  const description = slider.querySelector('[data-slider-description]');
  let activeIndex = 0;
  let autoplayId = 0;

  const renderSlide = index => {
    const nextIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('slider__slide--active', slideIndex === nextIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('slider__dot--active', dotIndex === nextIndex);
    });

    if (title) {
      title.textContent = slides[nextIndex].dataset.title || '';
    }

    if (description) {
      description.textContent = slides[nextIndex].dataset.description || '';
    }

    activeIndex = nextIndex;
  };

  const restartAutoplay = () => {
    window.clearInterval(autoplayId);
    autoplayId = window.setInterval(() => {
      renderSlide(activeIndex + 1);
    }, 6000);
  };

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      renderSlide(activeIndex - 1);
      restartAutoplay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      renderSlide(activeIndex + 1);
      restartAutoplay();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      renderSlide(index);
      restartAutoplay();
    });
  });

  renderSlide(0);
  restartAutoplay();
}

const contactForm = document.querySelector('[data-contact-form]');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const requiredFields = Array.from(
      contactForm.querySelectorAll('input[required], textarea[required]'),
    );

    const hasEmptyFields = requiredFields.some(
      field => field.value.trim() === '',
    );

    if (hasEmptyFields || !contactForm.reportValidity()) {
      return;
    }

    contactForm.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
