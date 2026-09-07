import { ArrowUpRight } from 'lucide-react';
import { property } from '@/src/config/property';
import type { Dictionary } from '@/src/i18n/dictionaries';

export function BookingCta({
  copy,
  className = '',
  compact = false,
}: {
  copy: Dictionary['booking'];
  className?: string;
  compact?: boolean;
}) {
  if (!property.airbnbUrl) {
    return (
      <p className={`booking-status ${className}`}>
        <span aria-hidden="true" />
        {compact ? copy.comingSoonCompact : copy.comingSoon}
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
      {copy.viewOnAirbnb} <ArrowUpRight size={18} aria-hidden="true" />
      <span className="sr-only">{copy.opensNewTab}</span>
    </a>
  );
}
