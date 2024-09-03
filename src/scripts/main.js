// #region slider

const slider = document.querySelector('.slider');
const images = [
  'https://snipboard.io/VpZ8aF.jpg',
  'https://snipboard.io/t0b962.jpg',
  'https://snipboard.io/BzlZSp.jpg',
];

let currentImageIndex = 0;

document
  .querySelector('.slider__arrow-button--left')
  .addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  });

document
  .querySelector('.slider__arrow-button--right')
  .addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  });

// #endregion

// #region icon

const icons = document.querySelectorAll('.nav__icon');
const menu = document.querySelector('.menu');
const menuStyle = window.getComputedStyle(menu);
const navLogos = document.querySelectorAll('.nav__logo');
const navLinks = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
  if (menuStyle.display === 'none' || menu.style.display === 'none') {
    menu.style.display = 'block';
    document.body.classList.add('menu-open');
  } else if (menu.style.display === 'block') {
    menu.style.display = 'none';
    document.body.classList.remove('menu-open');
  }
};

for (const icon of icons) {
  icon.addEventListener('click', toggleMenu);
}

for (const navLogo of navLogos) {
  navLogo.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.classList.remove('menu-open');
  });
}

for (const navLink of navLinks) {
  navLink.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.classList.remove('menu-open');
  });
}

//#endregion

// #region content in header nav

function updateContent() {
  const navHeader = document.querySelector('.nav--header');
  const navLinksHeader = document.querySelectorAll('.nav__link--header');
  for (let i = 0; i < navLinksHeader.length; i++) {
    switch (i) {
      case 0:
        break;
      case 1:
        navLinksHeader[i].textContent = 'Services';
        navLinksHeader[i].setAttribute('href', '#services');
        break;
      case 2:
        navLinksHeader[i].textContent = 'Testimonials';
        navLinksHeader[i].setAttribute('href', '#testimonials');
        break;
      case 3:
        navLinksHeader[i].textContent = 'Contact Us';
        navLinksHeader[i].setAttribute('href', '#feedback');
        break;
      default:
        navLinksHeader[i].remove();
    }
  }
}

updateContent();

window.addEventListener('resize', updateContent);

//#endregion

// #region sections appearance effect

const sections = document.querySelectorAll('.hidden');
let initialScroll = true;

const toggleSectionVisibility = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 20 && sectionBottom > 20) {
      section.classList.add('visible');
    } else if (!section.classList.contains('nav--header')) {
      section.classList.remove('visible');
    }
  });
};

const handleScroll = () => {
  if (initialScroll) {
    window.scrollTo(0, 0);
    initialScroll = false;
  }
  if (menu.style.display !== 'block') {
    toggleSectionVisibility();
  }
};

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// #endregion
