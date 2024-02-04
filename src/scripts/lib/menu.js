const menuBtnRef = document.querySelector('[data-menu-button]');
const iconRef = document.querySelector('[data-icons]');
const mobileMenuRef = document.querySelector('[data-menu]');

export const menuToggle = () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  iconRef.classList.toggle('open-menu');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('open-menu');
};
