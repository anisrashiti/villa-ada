'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { property } from '@/src/config/property';

const links = [
  { label: 'The Villa', href: '#the-villa' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const booking = property.airbnbUrl ? (
    <a className="header-booking" href={property.airbnbUrl} target="_blank" rel="noreferrer">
      Book on Airbnb
    </a>
  ) : (
    <span className="header-booking is-disabled" aria-disabled="true">
      Airbnb coming soon
    </span>
  );

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand-link" aria-label="Villa Ada home">
        <Image
          src="/branding/villa-ada-logo.jpg"
          alt="Villa Ada"
          width={54}
          height={54}
          priority
          className="brand-logo"
        />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        {booking}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-booking">{booking}</div>
        <p>{property.location.short}</p>
      </div>
    </header>
  );
}
