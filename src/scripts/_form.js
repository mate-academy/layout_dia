const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const honeypot = form.querySelector('[name="website"]');

  if (honeypot.value !== "") {
    e.preventDefault();
    return;
  }
});
