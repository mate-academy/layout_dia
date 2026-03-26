import { useState, type FormEvent } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ email: '', name: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedForm = {
      email: form.email.trim(),
      name: form.name.trim(),
      message: form.message.trim(),
    };

    if (!trimmedForm.email || !trimmedForm.name || !trimmedForm.message) {
      return;
    }

    setForm({ email: '', name: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div className="contact__form-block">
          <h2 className="contact__title">Send us a message</h2>
          <form onSubmit={handleSubmit} className="contact__form">
            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact__field autofill-fix"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact__field autofill-fix"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact__field contact__field--textarea autofill-fix"
              />
            </div>
            <button
              type="submit"
              className="button button--primary contact__submit"
            >
              Send
            </button>
          </form>
        </div>

        <div className="contact__info-block">
          <h2 className="contact__title">Contact us</h2>
          <div className="contact__info-list">
            <div className="contact__info-item">
              <p className="eyebrow eyebrow--light">Call us</p>
              <a href="tel:654321987" className="contact__link">
                654 321 987
              </a>
            </div>
            <div className="contact__info-item">
              <p className="eyebrow eyebrow--light">Visit us</p>
              <a
                href="https://www.google.com/maps/search/2905+West+Drive,+Buffalo+Grove"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link contact__link--address"
              >
                2905 West Drive, Buffalo Grove
              </a>
            </div>
            <div className="contact__info-item">
              <p className="eyebrow eyebrow--light">Our socials</p>
              <div className="contact__socials">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Facebook"
                >
                  <Facebook className="contact__social-icon" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Twitter"
                >
                  <Twitter className="contact__social-icon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Instagram"
                >
                  <Instagram className="contact__social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
