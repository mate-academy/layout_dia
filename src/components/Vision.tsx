import shapesImg from '@/assets/decor/shapes.png';

const Vision = () => (
  <section className="section section--light vision" id="vision">
    <img
      src={shapesImg}
      alt=""
      className="vision__background"
      aria-hidden="true"
    />
    <div className="container container--narrow vision__content">
      <h2 className="section-title section-title--large section-title--centered">
        Vision, Passion, Results
      </h2>
      <p className="section-copy vision__copy">
        We are sure that first-rate job is possible only if all three
        components are united.
      </p>
      <a
        href="#contact"
        className="button button--primary vision__button"
      >
        Apply
      </a>
    </div>
  </section>
);

export default Vision;
