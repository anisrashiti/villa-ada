import { ArrowUpRight } from 'lucide-react';
import { property } from '@/src/config/property';

export function BookingCta({
  className = '',
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  if (!property.airbnbUrl) {
    return (
      <p className={`booking-status ${className}`}>
        <span aria-hidden="true" />
        {compact
          ? 'Coming soon on Airbnb'
          : 'Our Airbnb listing is coming soon.'}
      </p>
    );
  }
  return (
    <a
      className={`booking-cta ${className}`}
      href={property.airbnbUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      View on Airbnb <ArrowUpRight size={18} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
