'use strict';


const swiper = new Swiper('.header__swiper', {
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  rtl: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});


const menu = document.getElementById("menu");
const openBtn = document.querySelector(".icon--menu");
const closeBtn = document.querySelector(".icon__close");
const menuLinks = document.querySelectorAll(".menu__link");


openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});


closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});


menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);


    targetSection.scrollIntoView({ behavior: "smooth" });


    menu.classList.remove("active");
  });
});


const themeToggle = document.getElementById('themeToggle');
const slider = themeToggle.querySelector('.header__switch--slider');

// Максимальний зсув вправо
const MAX_MOVE = 23;

let isDark = false;

// Функція перемикання теми
function toggleTheme() {
  isDark = !isDark;

  slider.style.transition = '0.25s';

  if (isDark) {
    slider.style.transform = `translateX(${MAX_MOVE}px)`;
    document.body.classList.add('dark-theme');
  } else {
    slider.style.transform = 'translateX(0px)';
    document.body.classList.remove('dark-theme');
  }
}

/* -------------------------
      Desktop (click)
-------------------------- */
themeToggle.addEventListener('click', (e) => {
  e.preventDefault();
  toggleTheme();
});

/* -------------------------
      Mobile (touch)
-------------------------- */
themeToggle.addEventListener('touchstart', (e) => {
  e.preventDefault(); // щоб не було ghost-click
  toggleTheme();
}, { passive: false });
