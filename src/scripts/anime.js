import { animate, stagger } from 'animejs';

const isMobile = () => {
  return window.matchMedia('(min-width: 320px)').matches;
};

const isTablet = () => {
  return window.matchMedia('(min-width: 640px)').matches;
};

const isDesktop = () => {
  return window.matchMedia('(min-width: 1280px)').matches;
};

const observeElements = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');

        const element = entry.target;

        if (element.classList.contains('about-us__text')) {
          const title = document.querySelector('.about-us__title');
          animate(title, {
            translateY: [-80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
          });
          animate(element, {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1200,
            ease: 'out(3)',
          });
        }

        if (element.classList.contains('our-expertise__title')) {
          animate(element, {
            translateY: [-80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
          });
        }

        if (
          element.classList.contains('our-expertise__cards-content') &&
          isDesktop()
        ) {
          element.style.opacity = 1;
          const cards = document.querySelectorAll('.our-expertise__card');

          const animation = animate(cards, {
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
            delay: stagger(300),
          });
        }

        if (element.classList.contains('our-expertise__card') && !isDesktop()) {
          document.querySelector(
            '.our-expertise__cards-content',
          ).style.opacity = 1;

          const animation = animate(element, {
            translateY: [80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
            delay: stagger(300),
          });
        }

        if (element.classList.contains('services__top')) {
          animate(element, {
            translateY: [-80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
          });
        }

        if (element.classList.contains('services__bottom') && isDesktop()) {
          element.style.opacity = 1;
          const cards = document.querySelectorAll('.services__card');
          animate(cards, {
            translateX: [-100, 0],
            opacity: [0, 1],
            rotate: [-5, 0],
            duration: 1200,
            ease: 'out(3)',
            delay: stagger(400),
          });
        }

        if (element.classList.contains('services__card') && !isDesktop()) {
          document.querySelector('.services__bottom').style.opacity = 1;
          animate(element, {
            translateX: [-100, 0],
            opacity: [0, 1],
            rotate: [-5, 0],
            duration: 1200,
            ease: 'out(3)',
            delay: stagger(400),
          });
        }

        if (element.classList.contains('testimonials_top')) {
          animate(element, {
            translateY: [-80, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            ease: 'out(4, 0.8)',
          });
        }

        if (
          element.classList.contains('testimonials__content') &&
          isDesktop()
        ) {
          element.style.opacity = 1;
          const cards = document.querySelectorAll('.testimonials__card');

          animate(cards, {
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 800,
            ease: 'out(5, 2)',
            delay: stagger(400),
          });
        }

        if (element.classList.contains('testimonials__card') && !isDesktop()) {
          const content = document.querySelector('.testimonials__content');
          content.style.opacity = 1;
          animate(element, {
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 800,
            ease: 'out(5, 2)',
            delay: stagger(400),
          });
        }

        if (element.classList.contains('nav')) {
          animate(element, {
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 800,
            ease: 'out(3)',
          });
        }

        if (element.classList.contains('banner__content')) {
          animate(element, {
            scale: [0.9, 1],
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            ease: 'out(2)',
          });

          const bannerTitle = element.querySelector('.banner__title');
          const bannerText = element.querySelector('.banner__text');
          const bannerButton = element.querySelector('.banner__button');

          if (bannerTitle) {
            animate(bannerTitle, {
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 1000,
              ease: 'out(3)',
              delay: 200,
            });
          }

          if (bannerText) {
            animate(bannerText, {
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 1000,
              ease: 'out(3)',
              delay: 400,
            });
          }

          if (bannerButton) {
            animate(bannerButton, {
              scale: [0, 1],
              opacity: [0, 1],
              duration: 600,
              ease: 'out(5, 2)',
              delay: 600,
            });
          }
        }

        if (element.classList.contains('contact-us__side')) {
          const isTopSide = element.classList.contains('contact-us__side--top');
          const isBottomSide = element.classList.contains(
            'contact-us__side--bottom',
          );

          if (isTopSide) {
            animate(element, {
              translateX: [-80, 0],
              opacity: [0, 1],
              duration: 1000,
              ease: 'out(3)',
            });

            const formInputs = element.querySelectorAll(
              '.contact-us__form-input',
            );
            if (formInputs.length > 0) {
              animate(formInputs, {
                translateX: [-40, 0],
                opacity: [0, 1],
                duration: 800,
                ease: 'out(2)',
                delay: stagger(100, { startDelay: 300 }),
              });
            }

            const formButton = element.querySelector(
              '.contact-us__form-button',
            );
            if (formButton) {
              animate(formButton, {
                scale: [0, 1],
                opacity: [0, 1],
                duration: 600,
                ease: 'out(5, 2)',
                delay: 700,
              });
            }
          }

          if (isBottomSide) {
            animate(element, {
              translateX: [80, 0],
              opacity: [0, 1],
              duration: 1000,
              ease: 'out(3)',
            });

            const contactBlocks = element.querySelectorAll(
              '.contact-us__block-item',
            );
            if (contactBlocks.length > 0) {
              animate(contactBlocks, {
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                ease: 'out(2)',
                delay: stagger(150, { startDelay: 300 }),
              });
            }

            const socials = element.querySelectorAll('.contact-us__socials a');
            if (socials.length > 0) {
              animate(socials, {
                scale: [0, 1],
                rotate: [180, 0],
                opacity: [0, 1],
                duration: 600,
                ease: 'out(4, 0.6)',
                delay: stagger(100, { startDelay: 700 }),
              });
            }
          }
        }

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const elementsToAnimate = document.querySelectorAll(`
    .about-us__text,
    .our-expertise__title,
    .our-expertise__cards-content,
    .our-expertise__card,
    .services__top,
    .services__bottom,
    .services__card,
    .testimonials_top,
    .testimonials__content,
    .testimonials__card,
    .banner__content,
    .contact-us__side,
    .nav
  `);

  elementsToAnimate.forEach((el) => {
    el.style.opacity = 0;
    observer.observe(el);
  });
};

const animateHeaderOnScroll = () => {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.classList.add('header--scrolled');

      if (currentScrollY > lastScrollY) {
        animate(header, {
          translateY: -126,
          duration: 300,
          ease: 'inOut(2)',
        });
      } else {
        animate(header, {
          translateY: 0,
          duration: 300,
          ease: 'out(2)',
        });
      }
    } else {
      header.classList.remove('header--scrolled');
      animate(header, {
        translateY: 0,
        duration: 300,
        ease: 'out(2)',
      });
    }

    lastScrollY = currentScrollY;
  });
};

const animateHomeScreen = () => {
  animate('.home-screen__title', {
    translateX: [100, 0],
    opacity: [0, 1],
    duration: 1500,
    ease: 'out(3)',
    delay: 0,
  });

  animate('.home-screen__subtitle', {
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1200,
    ease: 'out(3)',
    delay: 100,
  });

  animate('.home-screen__button', {
    scale: [0, 1],
    opacity: [0, 1],
    duration: 800,
    ease: 'out(5, 2)',
    delay: 200,
  });

  animate('.slider', {
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1500,
    ease: 'out(3)',
    delay: 300,
  });
};

const addCardHoverAnimations = () => {
  const cards = document.querySelectorAll(
    '.our-expertise__card, .services__card, .testimonials__card',
  );

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      animate(card, {
        translateY: -10,
        scale: 1.02,
        duration: 400,
        ease: 'out(2)',
      });
    });

    card.addEventListener('mouseleave', () => {
      animate(card, {
        translateY: 0,
        scale: 1,
        duration: 400,
        ease: 'out(2)',
      });
    });
  });
};

const animateButtons = () => {
  const buttons = document.querySelectorAll(
    '.home-screen__button, .banner__button, .contact-us__form-button, .header__hire-us, .menu__hire-us',
  );

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, {
        scale: 1.05,
        duration: 300,
        ease: 'out(2)',
      });
    });

    button.addEventListener('mouseleave', () => {
      animate(button, {
        scale: 1,
        duration: 300,
        ease: 'out(2)',
      });
    });
  });
};

const animateNavigation = () => {
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      animate(item, {
        translateY: -3,
        duration: 300,
        ease: 'out(2)',
      });
    });

    item.addEventListener('mouseleave', () => {
      animate(item, {
        translateY: 0,
        duration: 300,
        ease: 'out(2)',
      });
    });
  });
};

const animateForm = () => {
  const formInputs = document.querySelectorAll('.contact-us__form-input');

  formInputs.forEach((input) => {
    input.addEventListener('focus', () => {
      animate(input, {
        scale: 1.02,
        duration: 300,
        ease: 'out(2)',
      });
    });

    input.addEventListener('blur', () => {
      animate(input, {
        scale: 1,
        duration: 300,
        ease: 'out(2)',
      });
    });
  });
};

const animateLogo = () => {
  const logos = document.querySelectorAll('.logo');

  logos.forEach((logo) => {
    logo.addEventListener('mouseenter', () => {
      animate(logo, {
        scale: [1, 1.3, 1],
        duration: 800,
        ease: 'inOut(2)',
      });
    });
  });
};

const animateIcon = () => {
  const icons = document.querySelectorAll('.icon');

  icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      animate(icon, {
        scale: [1, 1.3, 1],
        duration: 800,
        ease: 'Out(2)',
      });
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  animateHomeScreen();
  observeElements();
  animateHeaderOnScroll();
  addCardHoverAnimations();
  animateButtons();
  animateNavigation();
  animateForm();
  animateIcon();
  animateLogo();
});
