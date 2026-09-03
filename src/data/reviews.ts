export type Review = {
  quote: string;
  guestName: string;
  stayDate?: string;
  source?: 'Airbnb';
};

// Add verified guest reviews here once the Airbnb listing is live.
export const reviews: Review[] = [];
