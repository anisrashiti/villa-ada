import {
  ArrowDown,
  ArrowUpRight,
  Bath,
  BedDouble,
  CarFront,
  ChevronDown,
  CookingPot,
  Flame,
  Waves,
  Wifi,
} from 'lucide-react';
import Image from 'next/image';
import { BookingCta } from '@/components/booking-cta';
import { Gallery } from '@/components/gallery';
import { PropertyImage } from '@/components/property-image';
import { ReviewsSection } from '@/components/reviews-section';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteHeader } from '@/components/site-header';
import { property } from '@/src/config/property';

const stats = [
  { value: '10', label: 'Guests', note: 'Bring your favourite people' },
  {
    value: '2',
    label: 'Bedrooms',
    note: 'Plus sleeping space in the living area',
  },
  {
    value: '1 + WC',
    label: 'Bathrooms',
    note: 'A full bathroom & an extra WC',
  },
  {
    value: 'All yours',
    label: 'The whole villa',
    note: 'Pool, garden, hot tub & sauna',
  },
];
const amenityIcons = [Waves, Flame, CookingPot, Bath, CarFront];
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: property.name,
  url: property.siteUrl,
  description:
    'Private vacation villa for up to 10 guests with a swimming pool, hot tub and sauna, 25 minutes from Prishtina.',
  image: new URL('/images/optimized/hero-pool-01-1600.webp', property.siteUrl)
    .href,
  numberOfRooms: property.capacity.bedrooms,
  amenityFeature: property.amenities.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'LocationFeatureSpecification',
      name: item,
      value: true,
    })),
  ),
};

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      <span className="section-number">{number}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section id="top" className="hero" aria-labelledby="hero-title">
          <PropertyImage
            {...property.images.hero}
            priority
            sizes="(max-aspect-ratio: 4/3) 134vh, 100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">
              <span />A private retreat · 25 minutes from Prishtina
            </p>
            <h1 id="hero-title">
              A slower
              <br />
              <em>kind of stay.</em>
            </h1>
            <div className="hero-intro">
              <p>
                Pool days. Unhurried evenings.
                <br />A little world of your own.
              </p>
              <a className="booking-cta booking-cta-light" href="#introduction">
                Discover Villa Ada
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              Private pool <span>·</span> Hot tub <span>·</span> Sauna
            </p>
            <a href="#the-villa">
              Up to 10 guests <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a
            className="hero-side-link"
            href="#gallery"
            aria-label="Explore the photo gallery"
          >
            Take a look around <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section id="introduction" className="intro section-shell">
          <div className="intro-heading" data-reveal>
            <SectionLabel number="01">The escape</SectionLabel>
            <h2 className="display-heading">
              A place to pause.
              <br />
              <em>Room to be together.</em>
            </h2>
          </div>
          <div className="intro-copy" data-reveal>
            <p>
              Close to Prishtina, a little further from the everyday. Villa Ada
              is a private retreat for pool days, long evenings outdoors and
              time with your favourite people.
            </p>
            <p>
              With space for ten, a generous garden and your own pool, hot tub
              and sauna, there’s room to settle in. And very little reason to
              hurry.
            </p>
            <a className="text-link" href="#the-villa">
              Make yourself at home
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <dl className="stats-row" data-reveal>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
                <dd className="stats-note">{stat.note}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="wellness" className="wellness-section">
          <div className="section-shell">
            <div className="wellness-heading" data-reveal>
              <div>
                <SectionLabel number="02" light>
                  Pool & wellness
                </SectionLabel>
                <h2 className="display-heading">
                  The art of
                  <br />
                  <em>doing very little.</em>
                </h2>
              </div>
              <p>
                A swim, a soak, the warmth of the sauna.
                <br /> Find your own rhythm. It’s all yours.
              </p>
            </div>
            <div className="wellness-grid">
              <figure className="wellness-pool" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    {...property.images.exterior}
                    sizes="(max-width: 700px) 90vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">01 /</span>
                  <div>
                    <h3>Take the day poolside.</h3>
                    <p>
                      A private pool, loungers and a garden to call your own.
                    </p>
                  </div>
                </figcaption>
              </figure>
              <figure className="wellness-hot-tub" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    {...property.images.hotTub}
                    sizes="(max-width: 700px) 44vw, 25vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">02 /</span>
                  <div>
                    <h3>Soak it all in.</h3>
                    <p>Your own private hot tub.</p>
                  </div>
                </figcaption>
              </figure>
              <figure className="wellness-sauna" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    {...property.images.sauna}
                    sizes="(max-width: 700px) 44vw, 25vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">03 /</span>
                  <div>
                    <h3>Stay a little warmer.</h3>
                    <p>Timber, warmth and a garden view.</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="wellness-note">
              <span>Nowhere else to be.</span>
              <a className="text-link" href="#gallery">
                Explore the spaces
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="outdoors" className="outdoor-section section-shell">
          <div className="outdoor-copy" data-reveal>
            <SectionLabel number="03">Outdoor living</SectionLabel>
            <h2 className="display-heading">
              Outside,
              <br />
              <em>all day.</em>
            </h2>
            <p>
              Long afternoons become BBQ evenings. Settle into the covered
              lounge, gather around the table or find a quiet moment in the
              hammock.
            </p>
            <p>
              From the first dip to the last conversation, the garden brings
              everyone together.
            </p>
            <span className="detail-label">Garden · Lounge · BBQ</span>
          </div>
          <figure className="outdoor-lead" data-reveal>
            <div className="image-frame">
              <PropertyImage
                {...property.images.poolside}
                sizes="(max-width: 700px) 90vw, 52vw"
              />
            </div>
            <figcaption>A little shade. A little more time.</figcaption>
          </figure>
          <figure className="outdoor-inset" data-reveal>
            <div className="image-frame">
              <PropertyImage
                {...property.images.grill}
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            </div>
            <figcaption>Good evenings start here.</figcaption>
          </figure>
        </section>

        <section id="the-villa" className="villa-section">
          <div className="section-shell">
            <div className="villa-layout">
              <figure className="villa-image" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    {...property.images.living}
                    sizes="(max-width: 900px) 90vw, 52vw"
                  />
                </div>
                <figcaption>
                  Timber beams, warm brick, room for everyone.
                </figcaption>
              </figure>
              <div className="villa-copy" data-reveal>
                <SectionLabel number="04">Inside Villa Ada</SectionLabel>
                <h2 className="display-heading">
                  Come in.
                  <br />
                  <em>Feel at home.</em>
                </h2>
                <p>
                  A fireplace, exposed brick and timber beams give the living
                  room its warm, easy character. The fully equipped kitchen and
                  dining area keep everyone connected between days outside.
                </p>
                <div className="villa-features">
                  <span>
                    <Flame size={17} aria-hidden="true" />
                    Fireplace
                  </span>
                  <span>
                    <Wifi size={17} aria-hidden="true" />
                    Wi-Fi
                  </span>
                  <span>
                    <CookingPot size={17} aria-hidden="true" />
                    Full kitchen
                  </span>
                </div>
                <div className="sleeping-list">
                  <h3>
                    <BedDouble size={18} aria-hidden="true" />
                    Space for up to 10
                  </h3>
                  {property.sleeping.map((item) => (
                    <div key={item.space}>
                      <span>{item.space}</span>
                      <span className="sleeping-line" />
                      <strong>{item.guests} guests</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* oxlint-disable jsx-a11y/no-noninteractive-tabindex -- A horizontal scroll region must be focusable for keyboard scrolling. */}
            <section
              className="interior-strip"
              data-reveal
              tabIndex={0}
              aria-label="Interior photographs; scroll horizontally on small screens"
            >
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/bedroom-02.jpeg"
                    alt="Bedroom one with sleeping space for four guests"
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>01</span>Room to rest
                </figcaption>
              </figure>
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/kitchen-01.jpeg"
                    alt="Fully equipped kitchen and indoor dining table"
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>02</span>Gather around the table
                </figcaption>
              </figure>
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/bathroom-01.jpeg"
                    alt="Full bathroom with a glass walk-in shower"
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>03</span>The everyday comforts
                </figcaption>
              </figure>
            </section>
            {/* oxlint-enable jsx-a11y/no-noninteractive-tabindex */}
            <p className="swipe-note">
              Swipe to look around <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-shell">
          <div className="gallery-heading" data-reveal>
            <div>
              <SectionLabel number="05">The photographs</SectionLabel>
              <h2 className="display-heading">
                Picture <em>yourself here.</em>
              </h2>
            </div>
            <p>
              From the pool to the fireside.
              <br /> Explore every space.
            </p>
          </div>
          <Gallery images={property.gallery} />
        </section>

        <section id="amenities" className="amenities-section">
          <div className="section-shell amenities-layout">
            <div className="amenities-heading" data-reveal>
              <SectionLabel number="06">The details</SectionLabel>
              <h2 className="display-heading">
                Settle in.
                <br />
                <em>It’s all here.</em>
              </h2>
              <p>
                The little things that make a stay feel easy, inside and out.
              </p>
            </div>
            <div className="amenities-list" data-reveal>
              {property.amenities.map((group, index) => {
                const Icon = amenityIcons[index];
                return (
                  <details
                    className="amenity-group"
                    key={group.title}
                    open={index === 0}
                  >
                    <summary>
                      <Icon size={22} aria-hidden="true" />
                      <h3>{group.title}</h3>
                      <span className="amenity-count">
                        {String(group.items.length).padStart(2, '0')}
                      </span>
                      <ChevronDown
                        size={18}
                        className="details-chevron"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        <section id="location" className="location-section section-shell">
          <div className="location-time" data-reveal>
            <span className="location-number">25</span>
            <p>minutes from Prishtina</p>
            <span className="location-byline">
              <CarFront size={17} aria-hidden="true" />
              An easy drive. A different pace.
            </span>
          </div>
          <div className="location-copy" data-reveal>
            <SectionLabel number="07">Near, yet away</SectionLabel>
            <h2 className="display-heading">
              Less travelling.
              <br />
              <em>More being here.</em>
            </h2>
            <p>{property.location.description}</p>
            <div
              className="location-route"
              aria-label="25 minutes by car from Prishtina to Villa Ada"
            >
              <span>Prishtina</span>
              <i aria-hidden="true" />
              <strong>Villa Ada</strong>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <section
          id="your-stay"
          className="final-cta"
          aria-labelledby="final-title"
        >
          <PropertyImage {...property.images.exterior} sizes="100vw" />
          <div className="final-overlay" />
          <div className="final-content section-shell" data-reveal>
            <p className="eyebrow eyebrow-light">Your stay at Villa Ada</p>
            <h2 id="final-title">
              A little less rush.
              <br />
              <em>A little more you.</em>
            </h2>
            <p>
              Bring your favourite people.
              <br />
              We’ve made room for the slow days.
            </p>
            <BookingCta className="booking-cta-light" />
            <a className="final-gallery-link" href="#gallery">
              One more look around
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="final-location">
            Private villa · 25 minutes from Prishtina
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-top">
            <a className="footer-brand" href="#top" aria-label="Villa Ada home">
              <Image src={property.logo} alt="" width={64} height={64} />
              <span>Villa Ada</span>
            </a>
            <p>
              Your own little escape.
              <br />
              Just outside Prishtina.
            </p>
            <a className="back-to-top" href="#top">
              Back to the top
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-middle">
            <nav aria-label="Footer navigation">
              <a href="#the-villa">The villa</a>
              <a href="#wellness">Wellness</a>
              <a href="#gallery">Gallery</a>
              <a href="#amenities">The details</a>
              <a href="#location">Location</a>
            </nav>
            <BookingCta compact />
          </div>
          <div className="footer-base">
            <span>© {new Date().getFullYear()} Villa Ada</span>
            <span>Private pool. Warm welcome. Slow days.</span>
          </div>
        </div>
      </footer>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
