'use client';

import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/src/i18n/dictionaries';
import { PropertyImage } from './property-image';

type GalleryImage = { src: string; alt: string; caption?: string };
const filters = ['all', 'wellness', 'outdoors', 'interiors'] as const;
type Filter = (typeof filters)[number];

function category(src: string): Exclude<Filter, 'all'> {
  if (src.includes('outdoor-')) return 'outdoors';
  if (/pool|hot-tub|sauna/.test(src)) return 'wellness';
  return 'interiors';
}

export function Gallery({
  images,
  copy,
}: {
  images: readonly GalleryImage[];
  copy: Dictionary['gallery'];
}) {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isOpen = active !== null;
  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (direction: number) =>
      setActive((index) =>
        index === null
          ? null
          : (index + direction + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    const node = dialog.current;
    if (!isOpen || !node) {
      node?.close();
      return;
    }
    const overflow = document.body.style.overflow;
    node.showModal();
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    };
    node.addEventListener('keydown', keydown);
    return () => {
      node.removeEventListener('keydown', keydown);
      node.close();
      document.body.style.overflow = overflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [isOpen, move]);

  const curatedOrder = [0, 1, 3, 2];
  const ordered = [
    ...curatedOrder,
    ...images
      .map((_, index) => index)
      .filter((index) => !curatedOrder.includes(index)),
  ].filter((index) => index < images.length);
  const matching = ordered.filter(
    (index) => filter === 'all' || category(images[index].src) === filter,
  );
  const visible = expanded ? matching : matching.slice(0, 4);

  return (
    <>
      <div className="gallery-toolbar">
        <fieldset className="gallery-filters" aria-label={copy.filterAria}>
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => {
                setFilter(item);
                setExpanded(false);
              }}
            >
              {copy.filters[item]}
            </button>
          ))}
        </fieldset>
        <span className="gallery-total" aria-live="polite">
          {String(matching.length).padStart(2, '0')} {copy.photographs}
        </span>
      </div>
      <div
        id="gallery-photos"
        className={`gallery-grid ${expanded ? 'is-expanded' : ''}`}
      >
        {visible.map((index, position) => (
          <button
            className={`gallery-item gallery-item-${(position % 6) + 1}`}
            key={images[index].src}
            type="button"
            onClick={(event) => {
              opener.current = event.currentTarget;
              setActive(index);
            }}
            aria-label={`${copy.openPhotograph} ${index + 1} ${copy.of} ${images.length}: ${images[index].alt}`}
          >
            <PropertyImage
              {...images[index]}
              sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 42vw"
            />
            <span className="gallery-photo-label">
              {images[index].caption ||
                copy.filters[category(images[index].src)]}
            </span>
            <span className="gallery-expand" aria-hidden="true">
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
      <div className="gallery-bottom">
        <p>{copy.bottomNote}</p>
        {matching.length > 4 && (
          <button
            className="text-link"
            type="button"
            aria-expanded={expanded}
            aria-controls="gallery-photos"
            onClick={() => {
              setExpanded((value) => !value);
              if (expanded)
                document
                  .querySelector('#gallery')
                  ?.scrollIntoView({ behavior: 'instant' });
            }}
          >
            {expanded
              ? copy.showFewer
              : `${copy.viewAll} ${matching.length} ${copy.photographs}`}
            {expanded ? (
              <ArrowUpRight size={18} aria-hidden="true" />
            ) : (
              <ArrowDown size={18} aria-hidden="true" />
            )}
          </button>
        )}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={copy.lightboxAria}
        onCancel={close}
        onClose={close}
        onTouchStart={(event) => {
          const touch = event.changedTouches[0];
          touchStart.current = touch
            ? { x: touch.clientX, y: touch.clientY }
            : null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const end = event.changedTouches[0];
          if (
            start &&
            end &&
            Math.abs(end.clientX - start.x) > 55 &&
            Math.abs(end.clientX - start.x) > Math.abs(end.clientY - start.y)
          )
            move(end.clientX > start.x ? -1 : 1);
          touchStart.current = null;
        }}
      >
        <div className="lightbox-top">
          <span>
            Villa Ada <i>/</i> {copy.closerLook}
          </span>
          <button
            ref={closeButton}
            type="button"
            onClick={close}
            aria-label={copy.close}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <button
          className="lightbox-prev"
          type="button"
          onClick={() => move(-1)}
          aria-label={copy.previous}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        {active !== null && (
          <figure className="lightbox-figure">
            <div className="lightbox-image-wrap">
              <PropertyImage
                {...images[active]}
                sizes="90vw"
                className="lightbox-image"
                priority
              />
            </div>
            <figcaption aria-live="polite">
              <span>{images[active].alt}</span>
              <span className="lightbox-counter">
                {String(active + 1).padStart(2, '0')} /{' '}
                {String(images.length).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
        )}
        <button
          className="lightbox-next"
          type="button"
          onClick={() => move(1)}
          aria-label={copy.next}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </dialog>
    </>
  );
}
