import { ArrowRight } from 'lucide-react';

const processCards = [
  {
    num: '001',
    items: [
      'Brand Development',
      'Copywriting',
      'Logo & Webite',
      'Design Packaging',
    ],
  },
  {
    num: '002',
    items: [
      'Сontent Production',
      'Graphic Design',
      'Video Production ',
      'Post Production',
    ],
  },
  {
    num: '003',
    items: [
      'Marketing Strategy',
      'Email Marketing',
      'Paid Advertising',
      'Blog Content & SEO',
    ],
  },
  {
    num: '004',
    items: [
      'Digital Communications',
      'Influencer Marketing',
      'Product Placements',
      'Strategic Partnerships',
    ],
  },
];

const Process = () => (
  <section id="process" className="section section--surface process">
    <div className="container process__layout">
      <div className="process__content">
        <p className="eyebrow">Services</p>
        <h2 className="section-title process__title">
          Air is a full service creative agency
        </h2>
        <p className="process__copy">
          Deep analytics, strong strategy and bright creative ideas.
        </p>
        <p className="process__copy">
          We are sure that first-rate job is possible only if all three
          components are united.
        </p>
      </div>
      <div className="process__cards">
        {processCards.map((card, index) => (
          <article
            key={card.num}
            className={`service-card ${index % 2 === 0 ? 'service-card--lower' : ''}`}
          >
            <span className="service-card__index">{card.num}</span>
            <ul className="service-card__list">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#contact" className="service-card__link">
              <span className="service-card__link-icon">
                <ArrowRight className="service-card__icon" />
              </span>
              <span className="service-card__link-copy">Learn more</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
