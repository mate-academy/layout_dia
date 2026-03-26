import brandingImg from '@/assets/expertise/expertise-1.png';
import communicationImg from '@/assets/expertise/expertise-2.png';
import strategyImg from '@/assets/expertise/expertise-3.png';

const cards = [
  {
    title: 'Branding',
    image: brandingImg,
    description:
      'Our branding solutions help companies strengthen and streamline products, services and communications with creative strategy to stand out in the marketplace.',
  },
  {
    title: 'Communication',
    image: communicationImg,
    description:
      'We deliver clear communications to help your team speak in a unified voice across the social media platforms. Our approach builds consistency, saves time, trust.',
  },
  {
    title: 'Strategy',
    image: strategyImg,
    description:
      'We create business growth strategies. Start from an internal review of skills and knowledge of the business to transform your customer experience.',
  },
];

const Expertise = () => (
  <section id="expertise" className="section section--surface expertise">
    <div className="container">
      <h2 className="section-title section-title--centered">Our expertise</h2>
      <div className="expertise__grid">
        {cards.map((card) => (
          <article key={card.title} className="expertise-card">
            <div className="expertise-card__media">
              <img
                src={card.image}
                alt={card.title}
                className="expertise-card__image"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <h3 className="expertise-card__title">{card.title}</h3>
            <p className="expertise-card__description">{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
