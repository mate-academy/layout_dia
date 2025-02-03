const menuSideLink = document.querySelector('.nav__link-menu');
const linkSidebar = document.querySelectorAll('.sidebar a');
console.log(linkSidebar);

menuSideLink.addEventListener('click', () => {
  console.log('Click');
  document.body.classList.toggle('no-scroll');
});

linkSidebar.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
  });
});

// очистка формы

document
  .querySelector('.form-foot')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(() => this.reset(), 1000);
  });
