const menu = document.querySelector('#menu');
const btnOpen = document.querySelector('#menu-open');
const btnClose = document.querySelector('#menu-close');

const toggleMenu = (isOpen) => {
  menu.classList.toggle('is-active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

if (btnOpen && btnClose && menu) {
  btnOpen.addEventListener('click', () => toggleMenu(true));
  btnClose.addEventListener('click', () => toggleMenu(false));

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}
