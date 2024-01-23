import { menuToggle } from './lib/menu';
import { resetForm } from './lib/form';

const menuBtnRef = document.querySelector('[data-menu-button]');
const menuLinks = document.querySelectorAll('.nav__link');
const form = document.querySelector('.form');

menuBtnRef.addEventListener('click', menuToggle);
form.addEventListener('submit', resetForm);

if (menuLinks.length > 0) {
  menuLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      const expanded = menuBtnRef
        .getAttribute('aria-expanded') === 'true' || false;

      if (expanded) {
        menuToggle();
      }
    });
  });
}
