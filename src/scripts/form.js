const form = document.querySelector('.form');

form.addEventListener('submit' , function (e) {
  e.preventDefault();

  this.reset();
});
