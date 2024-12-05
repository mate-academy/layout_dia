export const toggleScroll = (isVisible) => {
  if (isVisible) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

export const initMenuObserver = (menuId) => {
  const menu = document.getElementById(menuId);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      toggleScroll(entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  observer.observe(menu);
};

