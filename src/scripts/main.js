'use strict';

const viewport = document.querySelector('.slider__viewport');
const btnPrev = document.querySelector('.slider__btn--prev');
const btnNext = document.querySelector('.slider__btn--next');

btnNext.addEventListener('click', () => {
  viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  viewport.scrollBy({ left: -viewport.clientWidth, behavior: 'smooth' });
});

btnNext.addEventListener('click', () => {
  const maxScroll = viewport.scrollWidth - viewport.clientWidth;

  if (viewport.scrollLeft >= maxScroll - 5) {
    viewport.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' });
  }
});

btnPrev.addEventListener('click', () => {
  if (viewport.scrollLeft <= 5) {
    viewport.scrollTo({ left: viewport.scrollWidth, behavior: 'smooth' });
  } else {
    viewport.scrollBy({ left: -viewport.clientWidth, behavior: 'smooth' });
  }
});

const logoContainer = document.getElementById('logo-container');
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('menu');
const themeToggle = document.querySelector('.theme-switcher');
const body = document.body;

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu__is-open');
  logoContainer.classList.toggle('header__logo-container--is-active');
  themeToggle.classList.toggle('theme-switcher--is-active')
  body.classList.toggle('body__no-scroll');
});


const themeInputs = document.querySelectorAll('.theme-switcher__input');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.setAttribute('data-theme', currentTheme);
}
themeInputs.forEach(btn => {
  btn.addEventListener('change', () => {

    const isLight = document.body.getAttribute('data-theme') === 'light';

    if (isLight) {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    const allSwitchers = document.querySelectorAll('.theme-switcher');

    // allSwitchers.forEach(switcher => {
    //   // switcher.classList.toggle('theme-switcher--is-active', !isDark);
    // })

    themeInputs.forEach(el => {
      el.checked = !isLight;
    })
  })
})

const desktopMedia = window.matchMedia('(min-width: 1024px)');

function handleTabletChange(e) {
  if (e.matches) {
    themeToggle.classList.add('theme-switcher--is-active');
    console.log('Режим десктопа включен');
  } else {
    themeToggle.classList.remove('theme-switcher--is-active');
    console.log('режим мобильного устройства включен')
  }
}

desktopMedia.addEventListener('change', handleTabletChange);

handleTabletChange(desktopMedia);
