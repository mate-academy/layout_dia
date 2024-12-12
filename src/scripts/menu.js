(function () {
  const setupMenuToggle = (
    menuToggleSelector,
    menuLinkSelector,
    lockScrollClass,
  ) => {
    const menuToggle = document.querySelectorAll(menuToggleSelector);
    const menuLinks = document.querySelectorAll(menuLinkSelector);

    if (location.hash === '#menu') {
      document.body.classList.add(lockScrollClass);
    }

    const lockScroll = () => {
      document.body.classList.remove(lockScrollClass);
    };

    const toggleScroll = () => {
      document.body.classList.toggle(lockScrollClass);
    };

    menuToggle.forEach((el) => {
      el.addEventListener('click', toggleScroll);
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', lockScroll);
    });
  };
  setupMenuToggle(
    '.menu-toggle',
    '.link',
    'lock-scroll'
  );
})()
