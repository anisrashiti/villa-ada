import Image from 'next/image';
import { BookingCta } from '@/components/booking-cta';
import { Gallery } from '@/components/gallery';
import { ReviewsSection } from '@/components/reviews-section';
import { SiteHeader } from '@/components/site-header';
import { property } from '@/src/config/property';

const siteUrl = 'https://villa-ada-retreat.jocund-anole-9444.chatgpt.site';
const stats = [
  { value: '10', label: 'Guests' }, { value: '2', label: 'Bedrooms' },
  { value: '1 + WC', label: 'Bathrooms' }, { value: 'Private', label: 'Pool' },
  { value: 'Hot tub', label: '& sauna' },
];

const structuredData = {
  '@context': 'https://schema.org', '@type': 'VacationRental', name: property.name, url: siteUrl,
  description: 'Private vacation villa for up to 10 guests with a swimming pool, hot tub and sauna, 25 minutes from Prishtina.',
  numberOfRooms: property.capacity.bedrooms,
  amenityFeature: property.amenities.flatMap((group) => group.items.map((item) => ({ '@type': 'LocationFeatureSpecification', name: item, value: true }))),
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <Image src={property.images.hero.src} alt={property.images.hero.alt} fill priority sizes="100vw" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">Private pool · Hot tub · Sauna</p>
            <h1 id="hero-title">A private escape,<br />25 minutes from Prishtina.</h1>
            <BookingCta className="booking-cta-light" />
          </div>
          <a className="scroll-cue" href="#introduction" aria-label="Explore Villa Ada"><span>Explore</span><i aria-hidden="true" /></a>
        </section>

        <section id="introduction" className="intro section-shell">
          <div className="intro-heading">
            <p className="eyebrow">Villa Ada</p>
            <h2 className="display-heading">Your private place<br />to slow down.</h2>
          </div>
          <div className="intro-copy">
            <p>Just 25 minutes from Prishtina, Villa Ada is a private retreat made for pool days, unhurried evenings outdoors and time spent together.</p>
            <p>With space for up to ten guests, a private pool, hot tub, sauna and generous garden, everything here is arranged around switching off and enjoying the space.</p>
          </div>
          <dl className="stats-row">
            {stats.map((stat) => <div key={`${stat.value}-${stat.label}`}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
          </dl>
        </section>

        <section id="wellness" className="wellness-section">
          <div className="section-shell wellness-intro">
            <div><p className="eyebrow eyebrow-light">Pool & wellness</p><h2 className="display-heading light">Your own space<br />to unwind.</h2></div>
            <p>Move from a swim to the hot tub, then into the warmth of your private sauna. The garden is yours for the day, with loungers, shade and space to do very little.</p>
          </div>
          <div className="wellness-grid">
            <figure className="wellness-pool">
              <Image src={property.images.exterior.src} alt={property.images.exterior.alt} fill sizes="(max-width: 800px) 100vw, 67vw" className="cover-image" />
              <figcaption>Pool · garden · sauna</figcaption>
            </figure>
            <div className="wellness-side">
              <figure><Image src={property.images.hotTub.src} alt={property.images.hotTub.alt} fill sizes="(max-width: 800px) 100vw, 33vw" className="cover-image" /><figcaption>Private hot tub</figcaption></figure>
              <figure><Image src={property.images.sauna.src} alt={property.images.sauna.alt} fill sizes="(max-width: 800px) 100vw, 33vw" className="cover-image" /><figcaption>Private sauna</figcaption></figure>
            </div>
          </div>
        </section>

        <section id="outdoors" className="outdoor-section section-shell">
          <div className="outdoor-title"><p className="eyebrow">Outdoor living</p><h2 className="display-heading">Outside,<br /><em>all day.</em></h2></div>
          <div className="outdoor-lead-image image-frame"><Image src={property.images.poolside.src} alt={property.images.poolside.alt} fill sizes="(max-width: 800px) 100vw, 57vw" className="cover-image" /></div>
          <div className="outdoor-copy">
            <p>Long afternoons naturally become BBQ evenings. Settle into the covered lounge, gather around the outdoor dining area or find a quiet moment in the hammock.</p>
            <p>The poolside, garden and shaded seating areas create one connected place for groups to spend the day together.</p>
          </div>
          <div className="outdoor-secondary image-frame"><Image src={property.images.grill.src} alt={property.images.grill.alt} fill sizes="(max-width: 800px) 100vw, 35vw" className="cover-image" /></div>
          <p className="vertical-note">Garden / lounge / BBQ</p>
        </section>

        <section id="the-villa" className="villa-section">
          <div className="section-shell villa-layout">
            <div className="villa-image image-frame"><Image src={property.images.living.src} alt={property.images.living.alt} fill sizes="(max-width: 900px) 100vw, 58vw" className="cover-image" /></div>
            <div className="villa-copy">
              <p className="eyebrow">The villa</p><h2 className="display-heading">Made for time together.</h2>
              <p>Exposed brick, timber beams and a fireplace give the open living space its warm, easy character. The fully equipped kitchen and indoor dining area keep everyone connected between days outside.</p>
              <p>Villa Ada accommodates up to 10 guests, with sleeping space for four guests in the first bedroom, two in the second bedroom and four in the living area.</p>
              <div className="sleeping-list" aria-label="Sleeping arrangement">
                {property.sleeping.map((item) => <div key={item.space}><span>{item.space}</span><strong>{item.guests} guests</strong></div>)}
              </div>
            </div>
          </div>
          <div className="interior-strip">
            <figure><Image src="/images/bedroom-02.jpeg" alt="Bedroom sleeping four guests" fill sizes="(max-width: 700px) 100vw, 33vw" className="cover-image" /><figcaption>Bedroom one</figcaption></figure>
            <figure><Image src="/images/kitchen-01.jpeg" alt="Kitchen and indoor dining area" fill sizes="(max-width: 700px) 100vw, 33vw" className="cover-image" /><figcaption>Kitchen & dining</figcaption></figure>
            <figure><Image src="/images/bathroom-01.jpeg" alt="Full bathroom with walk-in shower" fill sizes="(max-width: 700px) 100vw, 33vw" className="cover-image" /><figcaption>Full bathroom</figcaption></figure>
          </div>
        </section>

        <section id="gallery" className="gallery-section section-shell">
          <div className="gallery-heading">
            <div><p className="eyebrow">Gallery</p><h2 className="display-heading">A closer look.</h2></div>
            <p>Open any photograph to explore Villa Ada in full screen.</p>
          </div>
          <Gallery images={property.gallery} />
        </section>

        <section id="amenities" className="amenities-section">
          <div className="section-shell">
            <div className="amenities-heading"><p className="eyebrow eyebrow-light">At Villa Ada</p><h2 className="display-heading light">Everything you need<br />to settle in.</h2></div>
            <div className="amenities-list">
              {property.amenities.map((group) => <div className="amenity-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
            </div>
          </div>
        </section>

        <section id="location" className="location-section section-shell">
          <div className="location-number" aria-hidden="true">25</div>
          <div className="location-copy"><p className="eyebrow">Location</p><h2 className="display-heading">Close to Prishtina.<br />Away from the city.</h2><p>{property.location.description}</p></div>
          <div className="location-route" aria-label="Villa Ada is 25 minutes from Prishtina"><span>Prishtina</span><i aria-hidden="true" /><strong>Villa Ada</strong></div>
          <p className="location-unit">minutes by car</p>
        </section>

        <ReviewsSection />
        <section className="final-cta" aria-labelledby="final-title">
          <Image src={property.images.exterior.src} alt={property.images.exterior.alt} fill sizes="100vw" className="cover-image" />
          <div className="final-overlay" />
          <div className="final-content"><p className="eyebrow eyebrow-light">Your stay at Villa Ada</p><h2 id="final-title">Pool days, sauna evenings<br />and space of your own.</h2><p>Just 25 minutes from Prishtina.</p><BookingCta className="booking-cta-light" /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a href="#top" aria-label="Villa Ada home"><Image src="/branding/villa-ada-logo.jpg" alt="Villa Ada" width={86} height={86} className="footer-logo" /></a>
          <p>{property.location.short}</p>
          <nav aria-label="Footer navigation"><a href="#the-villa">The Villa</a><a href="#wellness">Wellness</a><a href="#gallery">Gallery</a><a href="#amenities">Amenities</a><a href="#location">Location</a></nav>
          {property.airbnbUrl ? <a className="footer-airbnb" href={property.airbnbUrl} target="_blank" rel="noreferrer">Airbnb</a> : <span className="footer-airbnb muted">Airbnb coming soon</span>}
        </div>
        <div className="footer-base"><span>© {new Date().getFullYear()} Villa Ada</span><span>A private escape near Prishtina</span></div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
