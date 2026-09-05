/* oxlint-disable next/no-img-element -- Local pre-optimized WebP assets use responsive sources without a runtime image service. */
type PropertyImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function PropertyImage({
  src,
  alt,
  sizes,
  className = 'cover-image',
  priority = false,
}: PropertyImageProps) {
  const base = src
    .replace('/images/', '/images/optimized/')
    .replace('.jpeg', '');
  return (
    <img
      src={`${base}-1600.webp`}
      srcSet={`${base}-480.webp 480w, ${base}-960.webp 960w, ${base}-1600.webp 1600w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
