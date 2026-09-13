import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { BookingCta } from '@/components/booking-cta';
import { Gallery } from '@/components/gallery';
import { HeroFilm } from '@/components/hero-film';
import { PropertyImage } from '@/components/property-image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteHeader } from '@/components/site-header';
import { property, socialLinks } from '@/src/config/property';
import {
  dictionaries,
  localePaths,
  type Locale,
} from '@/src/i18n/dictionaries';

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      <span>{number} /</span>
      {children}
    </p>
  );
}

const socialPlatforms = [
  { platform: 'instagram', label: 'Instagram', Icon: FaInstagram },
  { platform: 'facebook', label: 'Facebook', Icon: FaFacebookF },
  { platform: 'tiktok', label: 'TikTok', Icon: FaTiktok },
] as const;

const activeSocialLinks = socialPlatforms.flatMap(
  ({ platform, label, Icon }) => {
    const url = socialLinks[platform];
    return url ? [{ platform, label, Icon, url }] : [];
  },
);

function SocialIconLinks({
  label,
  opensNewTab,
  className = '',
  showLabels = false,
}: {
  label: string;
  opensNewTab: string;
  className?: string;
  showLabels?: boolean;
}) {
  if (activeSocialLinks.length === 0) return null;

  return (
    <nav className={`social-icon-links ${className}`} aria-label={label}>
      {activeSocialLinks.map(({ platform, label: platformLabel, Icon, url }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${platformLabel}${opensNewTab}`}
          title={platformLabel}
        >
          <Icon aria-hidden="true" focusable="false" />
          {showLabels && <span>{platformLabel}</span>}
        </a>
      ))}
    </nav>
  );
}

export function VillaPage({ locale }: { locale: Locale }) {
  const copy = dictionaries[locale];
  const e = copy.editorial;
  const gallery = property.gallery.map((src, index) => ({
    src,
    alt: copy.images.gallery[index],
    caption: e.moments[index],
  }));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: property.name,
    url: new URL(localePaths[locale], property.siteUrl).href,
    description: copy.metadata.description,
    inLanguage: locale,
    image: new URL('/images/optimized/hero-pool-01-1600.webp', property.siteUrl)
      .href,
    numberOfRooms: property.capacity.bedrooms,
    telephone: property.contact.phone,
    hasMap: property.location.mapsUrl,
    amenityFeature: copy.amenities.groups.flatMap((group) =>
      group.items.map((name) => ({
        '@type': 'LocationFeatureSpecification',
        name,
        value: true,
      })),
    ),
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.accessibility.skipToContent}
      </a>
      <div id="top" />
      <SiteHeader locale={locale} copy={copy} />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <HeroFilm copy={e} />
          <div className="hero-content">
            <p className="hero-kicker">
              <span />
              {e.distance}
            </p>
            <h1 id="hero-title">
              Villa Ada<span className="hero-period">.</span>
            </h1>
            <p className="hero-positioning">
              {e.escape}
              <br />
              <em>{e.near}</em>
            </p>
            <div className="hero-actions">
              <a className="booking-cta booking-cta-light" href="#your-stay">
                {e.reserve}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="hero-explore" href="#the-villa">
                {e.explore}
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-footnote">
            <span>01 — 04</span>
            <p>{copy.hero.highlights.join(' · ')}</p>
            <span>{copy.hero.capacity}</span>
          </div>
        </section>
        <section
          id="the-villa"
          className="stay-section section-shell"
          aria-labelledby="stay-title"
        >
          <div className="stay-heading" data-reveal>
            <SectionLabel number="02">{e.stay}</SectionLabel>
            <h2 id="stay-title" className="display-heading">
              {e.stayLead}
              <br />
              <em>{e.stayEmphasis}</em>
            </h2>
          </div>
          <dl className="stay-stats" data-reveal>
            {[
              property.capacity.guests,
              property.capacity.bedrooms,
              property.capacity.beds,
              property.capacity.fullBathrooms,
            ].map((value, index) => (
              <div key={e.stats[index]}>
                <dt>{e.stats[index]}</dt>
                <dd>{String(value).padStart(2, '0')}</dd>
              </div>
            ))}
          </dl>
          <figure className="stay-photo" data-reveal>
            <div className="image-frame">
              <PropertyImage
                src={property.images.living}
                alt={copy.images.living}
                sizes="(max-width: 700px) 92vw, 48vw"
              />
            </div>
            <figcaption>{copy.villa.imageCaption}</figcaption>
          </figure>
          <div className="stay-copy" data-reveal>
            <p className="stay-intro">{e.stayIntro}</p>
            <div className="sleeping-list">
              <h3>{copy.villa.sleepingTitle}</h3>
              {copy.villa.sleeping.map((item) => (
                <div key={item.space}>
                  <span>{item.space}</span>
                  <span className="sleeping-line" />
                  <strong>{item.guests}</strong>
                </div>
              ))}
            </div>
            <details className="stay-details">
              <summary>
                {e.details}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <div className="amenity-content">
                {copy.amenities.groups.map((group) => (
                  <div key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </section>
        <section
          id="gallery"
          className="experience-section"
          aria-labelledby="experience-title"
        >
          <div className="section-shell">
            <div className="experience-heading" data-reveal>
              <div>
                <SectionLabel number="03">{e.experience}</SectionLabel>
                <h2 id="experience-title" className="display-heading">
                  {e.experienceLead}
                  <br />
                  <em>{e.experienceEmphasis}</em>
                </h2>
              </div>
              <p>{e.experienceIntro}</p>
            </div>
            <Gallery images={gallery} copy={copy.gallery} />
          </div>
        </section>
        <section
          id="location"
          className="destination-section"
          aria-labelledby="destination-title"
        >
          <div className="destination-photo">
            <PropertyImage
              src={property.images.exterior}
              alt={copy.images.exterior}
              sizes="(max-width: 700px) 100vw, 48vw"
            />
            <span className="destination-photo-label">
              Villa Ada / {copy.brand.tagline}
            </span>
          </div>
          <div id="your-stay" className="destination-copy">
            <SectionLabel number="04">{copy.finalCta.label}</SectionLabel>
            <h2 id="destination-title" className="display-heading">
              {e.finalLead}
              <br />
              <em>{e.finalEmphasis}</em>
            </h2>
            <div className="journey">
              <span>{copy.location.origin}</span>
              <span className="journey-line" aria-hidden="true" />
              <span>Villa Ada</span>
              <p>{e.journey}</p>
            </div>
            {property.location.address && <p>{property.location.address}</p>}
            <div className="location-map-block" data-reveal>
              <div className="location-map-heading">
                <h3>{copy.location.mapLabel}</h3>
                <a
                  className="text-link"
                  href={property.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.location.openInMaps}
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">{copy.booking.opensNewTab}</span>
                </a>
              </div>
              <div className="destination-map">
                <iframe
                  src={property.location.embedUrl}
                  title={copy.location.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="destination-booking">
              <p className="contact-heading">{e.contact}</p>
              <BookingCta copy={copy.booking} />
              <div className="contact-options">
                <a className="contact-option" href={property.contact.phoneHref}>
                  <Phone size={18} strokeWidth={1.6} aria-hidden="true" />
                  <span>
                    <small>{copy.contact.phone}</small>
                    <strong>{property.contact.phone}</strong>
                  </span>
                </a>
                <a
                  className="contact-option"
                  href={property.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle
                    size={18}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <span>
                    <small>{copy.contact.whatsapp}</small>
                    <strong>{property.contact.phone}</strong>
                  </span>
                  <span className="sr-only">{copy.booking.opensNewTab}</span>
                </a>
              </div>
              {property.contact.email && (
                <a
                  className="text-link"
                  href={'mailto:' + property.contact.email}
                >
                  {property.contact.email}
                </a>
              )}
              {activeSocialLinks.length > 0 && (
                <div className="contact-socials">
                  <h3>{copy.contact.follow}</h3>
                  <p>{copy.contact.followDescription}</p>
                  <SocialIconLinks
                    className="contact-social-buttons"
                    showLabels
                    label={copy.contact.social}
                    opensNewTab={copy.booking.opensNewTab}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <a
          className="footer-brand"
          href="#top"
          aria-label={copy.accessibility.brandHome}
        >
          <Image src={property.logo} alt="" width={40} height={40} />
          <span>Villa Ada</span>
        </a>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Villa Ada
        </span>
        <div className="footer-actions">
          <SocialIconLinks
            className="footer-socials"
            label={copy.contact.social}
            opensNewTab={copy.booking.opensNewTab}
          />
          <a className="text-link" href="#top">
            {copy.footer.backToTop}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
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
