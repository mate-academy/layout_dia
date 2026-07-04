// Scroll suave global
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
