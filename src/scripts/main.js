import { menuToggle } from './lib/menu';

const menuBtnRef = document.querySelector('[data-menu-button]');
const menuLinks = document.querySelectorAll('.nav__link');

menuBtnRef.addEventListener('click', menuToggle);

if (menuLinks.length > 0) {
  menuLinks.forEach(menuBurgerLink => {
    menuBurgerLink.addEventListener('click', function(e) {
      // const linkId = menuBurgerLink.getAttribute('href').replace('#', '');
      // const curentView = document.getElementById(linkId);
      const expanded = menuBtnRef
        .getAttribute('aria-expanded') === 'true' || false;

      if (expanded) {
        menuToggle();

        // curentView.scrollIntoView({ behavior: 'smooth' });
      // } else {
      //   curentView.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
