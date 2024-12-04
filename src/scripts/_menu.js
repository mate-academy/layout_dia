const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.icon__menu');
const menuLinks = document.querySelectorAll('.slip-menu__link');

export function openMenu() {
  menu.style.opacity = 1;
  menu.style.transform = 'translate(0)';
  document.body.classList.add('no-scroll');
}

export function closeMenu() {
  menu.style.opacity = 0;
  menu.style.transform = 'translate(-100%)';
  document.body.classList.remove('no-scroll');
}

export function initializeMenu() {
  menuToggle.addEventListener('click', () => {
    if (menu.style.opacity === '1') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
