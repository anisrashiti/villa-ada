'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type GalleryImage = { src: string; alt: string };

export function Gallery({ images }: { images: readonly GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const previous = useCallback(
    () => setActive((index) => (index === null ? null : (index - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((index) => (index === null ? null : (index + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active, close, next, previous]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            className={`gallery-item gallery-item-${(index % 7) + 1}`}
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open photograph ${index + 1} of ${images.length}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 40vw"
              className="cover-image"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <dialog
          open
          className="lightbox"
          aria-label="Villa Ada photo gallery"
          onTouchStart={(event) => {
            touchStart.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const end = event.changedTouches[0]?.clientX ?? touchStart.current;
            const distance = end - touchStart.current;
            if (Math.abs(distance) > 55) {
              if (distance > 0) previous();
              else next();
            }
            touchStart.current = null;
          }}
        >
          <button className="lightbox-close" type="button" onClick={close} aria-label="Close gallery">
            <X aria-hidden="true" />
          </button>
          <button className="lightbox-prev" type="button" onClick={previous} aria-label="Previous photograph">
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="lightbox-image-wrap">
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="100vw"
              className="lightbox-image"
              priority
            />
          </div>
          <button className="lightbox-next" type="button" onClick={next} aria-label="Next photograph">
            <ChevronRight aria-hidden="true" />
          </button>
          <p className="lightbox-counter">
            {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </p>
        </dialog>
      )}
    </>
  );
}
