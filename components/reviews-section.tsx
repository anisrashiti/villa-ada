import { reviews } from '@/src/data/reviews';

export function ReviewsSection() {
  if (reviews.length === 0) return null;

  return (
    <section className="section-shell reviews-section" aria-labelledby="reviews-title">
      <p className="eyebrow">Guest book</p>
      <h2 id="reviews-title" className="display-heading">Words from our guests.</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <figure key={`${review.guestName}-${review.quote}`}>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>
              {review.guestName}{review.stayDate ? ` · ${review.stayDate}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
