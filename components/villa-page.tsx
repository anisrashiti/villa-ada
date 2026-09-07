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
import {
  dictionaries,
  localePaths,
  type Dictionary,
  type Locale,
} from '@/src/i18n/dictionaries';

const amenityIcons = [Waves, Flame, CookingPot, Bath, CarFront];
const sectionLinks = [
  '#the-villa',
  '#wellness',
  '#gallery',
  '#amenities',
  '#location',
] as const;

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

function createStructuredData(locale: Locale, copy: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: property.name,
    url: new URL(localePaths[locale], property.siteUrl).href,
    description: copy.metadata.description,
    inLanguage: locale,
    image: new URL('/images/optimized/hero-pool-01-1600.webp', property.siteUrl)
      .href,
    numberOfRooms: property.capacity.bedrooms,
    amenityFeature: copy.amenities.groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'LocationFeatureSpecification',
        name: item,
        value: true,
      })),
    ),
  };
}

export function VillaPage({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale];
  const gallery = property.gallery.map((src, index) => ({
    src,
    alt: copy.images.gallery[index],
  }));
  const structuredData = createStructuredData(locale, copy);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.accessibility.skipToContent}
      </a>
      <SiteHeader locale={locale} copy={copy} />
      <main id="main-content" tabIndex={-1}>
        <section id="top" className="hero" aria-labelledby="hero-title">
          <PropertyImage
            src={property.images.hero}
            alt={copy.images.hero}
            priority
            sizes="(max-aspect-ratio: 4/3) 134vh, 100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">
              <span />
              {copy.hero.kicker}
            </p>
            <h1 id="hero-title">
              {copy.hero.heading.lead}
              <br />
              <em>{copy.hero.heading.emphasis}</em>
            </h1>
            <div className="hero-intro">
              <p>
                {copy.hero.intro[0]}
                <br />
                {copy.hero.intro[1]}
              </p>
              <a className="booking-cta booking-cta-light" href="#introduction">
                {copy.hero.discover}
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              {copy.hero.highlights[0]} <span>·</span> {copy.hero.highlights[1]}{' '}
              <span>·</span> {copy.hero.highlights[2]}
            </p>
            <a href="#the-villa">
              {copy.hero.capacity} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <a
            className="hero-side-link"
            href="#gallery"
            aria-label={copy.hero.galleryLink}
          >
            {copy.hero.galleryLink}{' '}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section id="introduction" className="intro section-shell">
          <div className="intro-heading" data-reveal>
            <SectionLabel number="01">{copy.introduction.label}</SectionLabel>
            <h2 className="display-heading">
              {copy.introduction.heading.lead}
              <br />
              <em>{copy.introduction.heading.emphasis}</em>
            </h2>
          </div>
          <div className="intro-copy" data-reveal>
            {copy.introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="text-link" href="#the-villa">
              {copy.introduction.link}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <dl className="stats-row" data-reveal>
            {copy.introduction.stats.map((stat) => (
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
                  {copy.wellness.label}
                </SectionLabel>
                <h2 className="display-heading">
                  {copy.wellness.heading.lead}
                  <br />
                  <em>{copy.wellness.heading.emphasis}</em>
                </h2>
              </div>
              <p>
                {copy.wellness.intro[0]}
                <br /> {copy.wellness.intro[1]}
              </p>
            </div>
            <div className="wellness-grid">
              <figure className="wellness-pool" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    src={property.images.exterior}
                    alt={copy.images.exterior}
                    sizes="(max-width: 700px) 90vw, 50vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">01 /</span>
                  <div>
                    <h3>{copy.wellness.cards[0].title}</h3>
                    <p>{copy.wellness.cards[0].description}</p>
                  </div>
                </figcaption>
              </figure>
              <figure className="wellness-hot-tub" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    src={property.images.hotTub}
                    alt={copy.images.hotTub}
                    sizes="(max-width: 700px) 44vw, 25vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">02 /</span>
                  <div>
                    <h3>{copy.wellness.cards[1].title}</h3>
                    <p>{copy.wellness.cards[1].description}</p>
                  </div>
                </figcaption>
              </figure>
              <figure className="wellness-sauna" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    src={property.images.sauna}
                    alt={copy.images.sauna}
                    sizes="(max-width: 700px) 44vw, 25vw"
                  />
                </div>
                <figcaption>
                  <span className="photo-number">03 /</span>
                  <div>
                    <h3>{copy.wellness.cards[2].title}</h3>
                    <p>{copy.wellness.cards[2].description}</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="wellness-note">
              <span>{copy.wellness.note}</span>
              <a className="text-link" href="#gallery">
                {copy.wellness.link}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="outdoors" className="outdoor-section section-shell">
          <div className="outdoor-copy" data-reveal>
            <SectionLabel number="03">{copy.outdoors.label}</SectionLabel>
            <h2 className="display-heading">
              {copy.outdoors.heading.lead}
              <br />
              <em>{copy.outdoors.heading.emphasis}</em>
            </h2>
            {copy.outdoors.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <span className="detail-label">{copy.outdoors.detail}</span>
          </div>
          <figure className="outdoor-lead" data-reveal>
            <div className="image-frame">
              <PropertyImage
                src={property.images.poolside}
                alt={copy.images.poolside}
                sizes="(max-width: 700px) 90vw, 52vw"
              />
            </div>
            <figcaption>{copy.outdoors.leadCaption}</figcaption>
          </figure>
          <figure className="outdoor-inset" data-reveal>
            <div className="image-frame">
              <PropertyImage
                src={property.images.grill}
                alt={copy.images.grill}
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            </div>
            <figcaption>{copy.outdoors.insetCaption}</figcaption>
          </figure>
        </section>

        <section id="the-villa" className="villa-section">
          <div className="section-shell">
            <div className="villa-layout">
              <figure className="villa-image" data-reveal>
                <div className="image-frame">
                  <PropertyImage
                    src={property.images.living}
                    alt={copy.images.living}
                    sizes="(max-width: 900px) 90vw, 52vw"
                  />
                </div>
                <figcaption>{copy.villa.imageCaption}</figcaption>
              </figure>
              <div className="villa-copy" data-reveal>
                <SectionLabel number="04">{copy.villa.label}</SectionLabel>
                <h2 className="display-heading">
                  {copy.villa.heading.lead}
                  <br />
                  <em>{copy.villa.heading.emphasis}</em>
                </h2>
                <p>{copy.villa.description}</p>
                <div className="villa-features">
                  <span>
                    <Flame size={17} aria-hidden="true" />
                    {copy.villa.features[0]}
                  </span>
                  <span>
                    <Wifi size={17} aria-hidden="true" />
                    {copy.villa.features[1]}
                  </span>
                  <span>
                    <CookingPot size={17} aria-hidden="true" />
                    {copy.villa.features[2]}
                  </span>
                </div>
                <div className="sleeping-list">
                  <h3>
                    <BedDouble size={18} aria-hidden="true" />
                    {copy.villa.sleepingTitle}
                  </h3>
                  {copy.villa.sleeping.map((item) => (
                    <div key={item.space}>
                      <span>{item.space}</span>
                      <span className="sleeping-line" />
                      <strong>{item.guests}</strong>
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
              aria-label={copy.accessibility.interiorStrip}
            >
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/bedroom-02.jpeg"
                    alt={copy.images.bedroomFour}
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>01</span>
                  {copy.villa.interiorCaptions[0]}
                </figcaption>
              </figure>
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/kitchen-01.jpeg"
                    alt={copy.images.kitchen}
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>02</span>
                  {copy.villa.interiorCaptions[1]}
                </figcaption>
              </figure>
              <figure>
                <div className="image-frame">
                  <PropertyImage
                    src="/images/bathroom-01.jpeg"
                    alt={copy.images.bathroom}
                    sizes="(max-width: 600px) 72vw, 32vw"
                  />
                </div>
                <figcaption>
                  <span>03</span>
                  {copy.villa.interiorCaptions[2]}
                </figcaption>
              </figure>
            </section>
            {/* oxlint-enable jsx-a11y/no-noninteractive-tabindex */}
            <p className="swipe-note">
              {copy.villa.swipe} <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-shell">
          <div className="gallery-heading" data-reveal>
            <div>
              <SectionLabel number="05">{copy.gallery.label}</SectionLabel>
              <h2 className="display-heading">
                {copy.gallery.heading.lead}{' '}
                <em>{copy.gallery.heading.emphasis}</em>
              </h2>
            </div>
            <p>
              {copy.gallery.intro[0]}
              <br /> {copy.gallery.intro[1]}
            </p>
          </div>
          <Gallery images={gallery} copy={copy.gallery} />
        </section>

        <section id="amenities" className="amenities-section">
          <div className="section-shell amenities-layout">
            <div className="amenities-heading" data-reveal>
              <SectionLabel number="06">{copy.amenities.label}</SectionLabel>
              <h2 className="display-heading">
                {copy.amenities.heading.lead}
                <br />
                <em>{copy.amenities.heading.emphasis}</em>
              </h2>
              <p>{copy.amenities.intro}</p>
            </div>
            <div className="amenities-list" data-reveal>
              {copy.amenities.groups.map((group, index) => {
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
            <p>{copy.location.short.replace(/^25\s*/, '')}</p>
            <span className="location-byline">
              <CarFront size={17} aria-hidden="true" />
              {copy.location.byline}
            </span>
          </div>
          <div className="location-copy" data-reveal>
            <SectionLabel number="07">{copy.location.label}</SectionLabel>
            <h2 className="display-heading">
              {copy.location.heading.lead}
              <br />
              <em>{copy.location.heading.emphasis}</em>
            </h2>
            <p>{copy.location.description}</p>
            <div
              className="location-route"
              aria-label={copy.location.routeAria}
            >
              <span>{copy.location.origin}</span>
              <i aria-hidden="true" />
              <strong>{copy.location.destination}</strong>
            </div>
          </div>
        </section>

        <ReviewsSection copy={copy.reviews} />
        <section
          id="your-stay"
          className="final-cta"
          aria-labelledby="final-title"
        >
          <PropertyImage
            src={property.images.exterior}
            alt={copy.images.exterior}
            sizes="100vw"
          />
          <div className="final-overlay" />
          <div className="final-content section-shell" data-reveal>
            <p className="eyebrow eyebrow-light">{copy.finalCta.label}</p>
            <h2 id="final-title">
              {copy.finalCta.heading.lead}
              <br />
              <em>{copy.finalCta.heading.emphasis}</em>
            </h2>
            <p>
              {copy.finalCta.intro[0]}
              <br /> {copy.finalCta.intro[1]}
            </p>
            <BookingCta copy={copy.booking} className="booking-cta-light" />
            <a className="final-gallery-link" href="#gallery">
              {copy.finalCta.galleryLink}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="final-location">{copy.finalCta.location}</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-top">
            <a
              className="footer-brand"
              href="#top"
              aria-label={copy.accessibility.brandHome}
            >
              <Image src={property.logo} alt="" width={64} height={64} />
              <span>{property.name}</span>
            </a>
            <p>
              {copy.footer.intro[0]}
              <br /> {copy.footer.intro[1]}
            </p>
            <a className="back-to-top" href="#top">
              {copy.footer.backToTop}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-middle">
            <nav aria-label={copy.accessibility.mainNavigation}>
              {sectionLinks.map((href, index) => (
                <a href={href} key={href}>
                  {copy.navigation.links[index]}
                </a>
              ))}
            </nav>
            <BookingCta copy={copy.booking} compact />
          </div>
          <div className="footer-base">
            <span>
              © {new Date().getFullYear()} {copy.footer.copyright}
            </span>
            <span>{copy.footer.closing}</span>
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
