const body = document.querySelector('body');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.phone-menu_list_link');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', function () {
  menu.classList.add('phone-menu--visible');

  body.style.overflow = 'hidden';
});

links.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.remove('phone-menu--visible');
    body.style.overflow = '';
  });
});

closeMenu.addEventListener('click', function () {
  menu.classList.remove('phone-menu--visible');
  body.style.overflow = '';
});
