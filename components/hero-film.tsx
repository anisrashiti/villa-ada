'use client';

import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { property } from '@/src/config/property';
import type { Dictionary } from '@/src/i18n/dictionaries';

export function HeroFilm({ copy }: { copy: Dictionary['editorial'] }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const node = video.current;
    if (!node) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let visible = true;
    let manuallyPaused = false;
    const sync = () => {
      if (
        motion.matches ||
        connection?.saveData ||
        document.hidden ||
        !visible ||
        manuallyPaused
      )
        node.pause();
      else {
        node.src ||= property.video;
        void node.play().catch(() => setPlaying(false));
      }
    };
    const manual = () => {
      manuallyPaused = node.dataset.paused === 'true';
    };
    node.addEventListener('manual-toggle', manual);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    observer.observe(node);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      node.removeEventListener('manual-toggle', manual);
      node.pause();
    };
  }, []);
  return (
    <div className="hero-film">
      <video
        ref={video}
        poster={property.videoPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={copy.film}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
      />
      <div className="film-shade" />
      {!failed && (
        <button
          type="button"
          className="film-toggle"
          aria-label={playing ? copy.pause : copy.play}
          onClick={() => {
            const node = video.current;
            if (!node) return;
            node.dataset.paused = String(playing);
            node.dispatchEvent(new Event('manual-toggle'));
            if (playing) node.pause();
            else {
              node.src ||= property.video;
              void node.play().catch(() => setPlaying(false));
            }
          }}
        >
          {playing ? (
            <Pause size={16} aria-hidden="true" />
          ) : (
            <Play size={16} aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
