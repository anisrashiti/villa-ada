import { property } from '@/src/config/property';

type BookingCtaProps = {
  className?: string;
  compact?: boolean;
};

export function BookingCta({ className = '', compact = false }: BookingCtaProps) {
  const label = compact ? 'Airbnb coming soon' : 'Airbnb listing coming soon';

  if (!property.airbnbUrl) {
    return (
      <span className={`booking-cta is-disabled ${className}`} aria-disabled="true">
        {label}
      </span>
    );
  }

  return (
    <a
      className={`booking-cta ${className}`}
      href={property.airbnbUrl}
      target="_blank"
      rel="noreferrer"
    >
      {compact ? 'Book on Airbnb' : 'View on Airbnb'}
    </a>
  );
}
