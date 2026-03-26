import { useId, useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroDesktopImg from '@/assets/hero/banner-1024.png';
import heroLargeImg from '@/assets/hero/banner-1600.png';
import heroMobileImg from '@/assets/hero/banner-320.png';
import heroTabletImg from '@/assets/hero/banner-640.png';
import heroWideImg from '@/assets/hero/banner-full-width.png';

type Slide = {
  alt: string;
  copy: string;
  defaultSrc: string;
  height: number;
  label: string;
  sources?: Array<{
    media: string;
    srcSet: string;
  }>;
  width: number;
};

const slides: Slide[] = [
  {
    alt: 'Smartwatch on a wrist with a glowing blue interface',
    copy: 'By the same illusion which lifts the horizon.',
    defaultSrc: heroMobileImg,
    height: 680,
    label: 'Intro',
    sources: [
      { media: '(min-width: 2560px)', srcSet: heroWideImg },
      { media: '(min-width: 1600px)', srcSet: heroLargeImg },
      { media: '(min-width: 1024px)', srcSet: heroDesktopImg },
      { media: '(min-width: 640px)', srcSet: heroTabletImg },
    ],
    width: 687,
  },
  {
    alt: 'Creative team discussing ideas around a laptop',
    copy: 'Clear positioning turns complex products into tangible growth.',
    defaultSrc: heroMobileImg,
    height: 1068,
    label: 'Strategy',
    width: 1600,
    sources: [
      { media: '(min-width: 2560px)', srcSet: heroWideImg },
      { media: '(min-width: 1600px)', srcSet: heroLargeImg },
      { media: '(min-width: 1024px)', srcSet: heroDesktopImg },
      { media: '(min-width: 640px)', srcSet: heroTabletImg },
    ],
  },
  // {
  //   alt: 'Close-up of a smartwatch display in soft daylight',
  //   copy: 'Strong brands feel precise, useful, and unmistakably human.',
  //   defaultSrc: heroWatchImg,
  //   height: 1024,
  //   label: 'Vision',
  //   width: 1024,
  // },
];

const SWIPE_THRESHOLD = 48;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const trackId = useId();

  const goToPrevious = () => {
    setActiveSlide(current => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide(current => (current + 1) % slides.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchStartX.current - endX;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section className="section hero" id="top">
      <div className="hero__shell">
        <div className="container container--wide hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">Strategic Agency</h1>
            <p className="hero__description">
              We believe in the power of bold ideas that can solve business
              challenges.
            </p>
            <a href="#expertise" className="button button--primary hero__action">
              Learn more
            </a>
          </div>

          <div
            className="hero__slider"
            role="region"
            aria-label="Agency highlights"
          >
            <div
              className="hero__viewport"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onTouchEnd={handleTouchEnd}
              onTouchStart={handleTouchStart}
            >
              <ul
                className="hero__track"
                id={trackId}
                style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
              >
                {slides.map((slide, index) => (
                  <li
                    key={slide.label}
                    className="hero__slide"
                    aria-hidden={activeSlide !== index}
                    aria-label={`${index + 1} of ${slides.length}`}
                    aria-roledescription="slide"
                  >
                    <article className="hero__media">
                      <picture>
                        {slide.sources?.map(source => (
                          <source
                            key={source.media}
                            media={source.media}
                            srcSet={source.srcSet}
                          />
                        ))}
                        <img
                          src={slide.defaultSrc}
                          alt={slide.alt}
                          className="hero__image"
                          width={slide.width}
                          height={slide.height}
                          sizes="(min-width: 1024px) 44vw, 100vw"
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                      </picture>

                      <div className="hero__meta">
                        <p className="hero__meta-label">{slide.label}</p>
                        <p className="hero__meta-copy">{slide.copy}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero__controls">
              <button
                type="button"
                className="hero__control"
                aria-controls={trackId}
                aria-label="Previous slide"
                onClick={goToPrevious}
              >
                <ChevronLeft className="hero__control-icon" />
              </button>
              <button
                type="button"
                className="hero__control"
                aria-controls={trackId}
                aria-label="Next slide"
                onClick={goToNext}
              >
                <ChevronRight className="hero__control-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
