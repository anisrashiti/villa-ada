'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { property } from '@/src/config/property';
import {
  localePaths,
  type Dictionary,
  type Locale,
} from '@/src/i18n/dictionaries';

const linkTargets = ['#top', '#the-villa', '#gallery', '#location'] as const;

function Brand({ copy, onClick }: { copy: Dictionary; onClick?: () => void }) {
  return (
    <a
      href="#top"
      className="brand-link"
      aria-label={copy.accessibility.brandHome}
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
        {property.name}
        <small>{copy.brand.tagline}</small>
      </span>
    </a>
  );
}

function LanguageSwitcher({
  locale,
  label,
  onClick,
}: {
  locale: Locale;
  label: string;
  onClick?: () => void;
}) {
  return (
    <fieldset className="language-switcher">
      <legend className="sr-only">{label}</legend>
      <Link
        href={localePaths.en}
        hrefLang="en"
        lang="en"
        className={locale === 'en' ? 'is-active' : undefined}
        aria-current={locale === 'en' ? 'page' : undefined}
        onClick={onClick}
      >
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        href={localePaths.sq}
        hrefLang="sq"
        lang="sq"
        className={locale === 'sq' ? 'is-active' : undefined}
        aria-current={locale === 'sq' ? 'page' : undefined}
        onClick={onClick}
      >
        SQ
      </Link>
    </fieldset>
  );
}

export function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#top');
  const labels = [
    copy.editorial.home,
    copy.editorial.stay,
    copy.editorial.experience,
    copy.editorial.location,
  ];
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      setActive(
        [...linkTargets]
          .reverse()
          .find(
            (target) =>
              (document.querySelector(target)?.getBoundingClientRect().top ??
                Infinity) <= 150,
          ) || '#top',
      );
    };
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
      {property.airbnbUrl ? copy.navigation.book : copy.navigation.stay}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Brand copy={copy} />
        <nav
          className="desktop-nav"
          aria-label={copy.accessibility.mainNavigation}
        >
          {linkTargets.map((href, index) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? 'location' : undefined}
            >
              {labels[index]}
            </a>
          ))}
          <LanguageSwitcher
            locale={locale}
            label={copy.accessibility.languageSwitcher}
          />
          {booking}
        </nav>
        <button
          ref={trigger}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={copy.accessibility.openMenu}
          onClick={() => setOpen(true)}
        >
          <span>{copy.navigation.menu}</span>
          <Menu size={22} aria-hidden="true" />
        </button>
      </header>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-label={copy.accessibility.navigationMenu}
        onCancel={close}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className="mobile-menu-top">
          <Brand copy={copy} onClick={close} />
          <button
            className="menu-button"
            type="button"
            onClick={close}
            aria-label={copy.accessibility.closeMenu}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="mobile-menu-intro">
          <p className="eyebrow">{copy.navigation.mobileEyebrow}</p>
          <LanguageSwitcher
            locale={locale}
            label={copy.accessibility.languageSwitcher}
            onClick={close}
          />
        </div>
        <nav aria-label={copy.accessibility.mobileNavigation}>
          {linkTargets.map((href, index) => (
            <a
              key={href}
              href={href}
              onClick={close}
              aria-current={active === href ? 'location' : undefined}
            >
              <span className="nav-number">0{index + 1}</span>
              {labels[index]}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-bottom">
          {booking}
          <p>{copy.location.short}</p>
        </div>
      </dialog>
    </>
  );
}
