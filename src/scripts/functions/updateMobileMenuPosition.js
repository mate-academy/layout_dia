export default function updateMobileMenuPosition(
  header,
  mobileMenu,
) {
  const windowWidth = window.innerWidth;

  if (header && mobileMenu && windowWidth < 1024) {
    const headerHeight = header.offsetHeight;
    mobileMenu.style.top = `${headerHeight}px`;
  }
}
