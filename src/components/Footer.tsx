const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#who-we-are' },
  { label: 'Services', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact us', href: '#contact' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <a
        href="#"
        className="site-footer__brand"
        aria-label="Air home"
      >
        Air
      </a>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="site-footer__link"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
