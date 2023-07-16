// 'use strict';

// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuLinks = document.querySelectorAll('.menu__item');
// const form = document.querySelector('.contacts__form');
// const menuLink = document.querySelector('.btn__link');
// const homeLink = document.querySelector('.home-link');

// menuBtn.addEventListener('click', function() {
//   menuBtn.classList.toggle('active');
//   menu.classList.toggle('active');

//   if (menu.classList.contains('active')) {
//     document.body.classList.add('menu-active');
//   } else {
//     document.body.classList.remove('menu-active');
//   }
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
// });

// menuLinks.forEach(function(link) {
//   link.addEventListener('click', function() {
//     menuBtn.classList.remove('active');
//     menu.classList.remove('active');
//     document.body.classList.remove('menu-active');
//   });
// });

// menuBtn.addEventListener('click', function() {
//   if (!menu.classList.contains('active')) {
//     menu.style.transform = 'translateX(100%)';
//   } else {
//     menu.style.transform = '';
//   }
// });

// function handleMenuLinkClick(event) {
//   event.preventDefault();
//   menu.style.transform = 'translateX(100%)';
//   menuBtn.classList.remove('active');
//   menu.classList.remove('active');
//   document.body.classList.remove('menu-active');
// }

// menuLink.addEventListener('click', handleMenuLinkClick);

// homeLink.addEventListener('click', function() {
//   if (menu.classList.contains('active')) {
//     menuBtn.classList.remove('active');
//     menu.classList.remove('active');
//     document.body.classList.remove('menu-active');
//   }
// });

// function checkOrientation() {
//   if (window.innerWidth > window.innerHeight) {
//     // Альбомная ориентация
//     document.body.classList.add('landscape');
//   } else {
//     // Портретная ориентация
//     document.body.classList.remove('landscape');
//   }
// }

// // Проверка ориентации при загрузке страницы
// checkOrientation();

// // Проверка ориентации при изменении размеров окна
// window.addEventListener('resize', checkOrientation);

'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.footer__link');
const form = document.querySelector('.footer__form');
const menuPageLink = document.querySelector('.btn-page__link');
const btnLinks = document.querySelectorAll('.btn__link');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-active');
  } else {
    document.body.classList.remove('menu-active');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});

menuBtn.addEventListener('click', function() {
  if (!menu.classList.contains('active')) {
    menu.style.transform = 'translateX(100%)';
  } else {
    menu.style.transform = '';
  }
});

function handleMenuLinkClick(event) {
  event.preventDefault();
  menu.style.transform = 'translateX(100%)';
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('menu-active');
}

menuPageLink.addEventListener('click', handleMenuLinkClick);

btnLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    // Альбомная ориентация
    document.body.classList.add('landscape');
  } else {
    // Портретная ориентация
    document.body.classList.remove('landscape');
  }
}

// Проверка ориентации при загрузке страницы
checkOrientation();

// Проверка ориентации при изменении размеров окна
window.addEventListener('resize', checkOrientation);

// Получаем ссылки на кнопки слайдера
const sliderLinks = document.querySelectorAll('.slider__link');
const sliderPhotos = document.querySelectorAll('.slider-photo');

// Индекс текущего активного слайда
let activeSlideIndex = 0;

// Функция для переключения слайдов вправо
function slideRight() {
// Проверяем, если текущий слайд не является последним, увеличиваем индекс на 1
  if (activeSlideIndex < sliderPhotos.length - 1) {
    activeSlideIndex++;
  } else {
    // Если текущий слайд последний, переходим к первому слайду
    activeSlideIndex = 0;
  }

  // Показываем соответствующий слайд и его содержимое
  updateSlider();
}

// Функция для переключения слайдов влево
function slideLeft() {
  // Проверяем, если текущий слайд не является первым, уменьшаем индекс на 1
  if (activeSlideIndex > 0) {
    activeSlideIndex--;
  } else {
    // Если текущий слайд первый, переходим к последнему слайду
    activeSlideIndex = sliderPhotos.length - 1;
  }

  // Показываем соответствующий слайд и его содержимое
  updateSlider();
}

// Функция для обновления слайдера
function updateSlider() {
  // Скрываем все слайды
  sliderPhotos.forEach(photo => {
    photo.style.display = 'none';
  });

  // Показываем активный слайд
  sliderPhotos[activeSlideIndex].style.display = 'block';
}

// Назначаем обработчики событий на кнопки слайдера
sliderLinks[0].onclick = slideRight;
sliderLinks[1].onclick = slideLeft;
