'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { property } from '@/src/config/property';

const links = [
  { label: 'The villa', href: '#the-villa' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'The details', href: '#amenities' },
  { label: 'Location', href: '#location' },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      className="brand-link"
      aria-label="Villa Ada home"
      onClick={onClick}
    >
      <Image
        src={property.logo}
        alt=""
        width={44}
        height={44}
        className="brand-logo"
      />
      <span>
        Villa Ada<small>A PRIVATE RETREAT</small>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const desktop = window.matchMedia('(min-width: 1001px)');
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      desktop.removeEventListener('change', onResize);
    };
  }, []);

  useEffect(() => {
    const node = dialog.current;
    if (!open || !node) {
      node?.close();
      return;
    }
    const overflow = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      node.close();
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const close = () => setOpen(false);
  const booking = (
    <a
      className="header-booking"
      href={property.airbnbUrl || '#your-stay'}
      target={property.airbnbUrl ? '_blank' : undefined}
      rel={property.airbnbUrl ? 'noopener noreferrer' : undefined}
      onClick={close}
    >
      {property.airbnbUrl ? 'Book your stay' : 'Your stay'}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          {booking}
        </nav>
        <button
          ref={trigger}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <span>Menu</span>
          <Menu size={22} aria-hidden="true" />
        </button>
      </header>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-label="Navigation menu"
        onCancel={close}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-top">
          <Brand onClick={close} />
          <button
            className="menu-button"
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <p className="eyebrow">A little look around</p>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={close}>
              <span className="nav-number">0{index + 1}</span>
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom">
          {booking}
          <p>{property.location.short}</p>
        </div>
      </dialog>
    </>
  );
}
