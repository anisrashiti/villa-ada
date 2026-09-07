import { reviews } from '@/src/data/reviews';
import type { Dictionary } from '@/src/i18n/dictionaries';

export function ReviewsSection({ copy }: { copy: Dictionary['reviews'] }) {
  if (reviews.length === 0) return null;

  return (
    <section
      className="section-shell reviews-section"
      aria-labelledby="reviews-title"
    >
      <p className="eyebrow">{copy.label}</p>
      <h2 id="reviews-title" className="display-heading">
        {copy.heading}
      </h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <figure key={`${review.guestName}-${review.quote}`}>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>
              {review.guestName}
              {review.stayDate ? ` · ${review.stayDate}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
