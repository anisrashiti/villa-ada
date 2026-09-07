export const property = {
  name: 'Villa Ada',
  siteUrl: 'https://villa-ada-retreat.anisbaba.chatgpt.site',
  logo: '/branding/villa-ada-logo.jpg',
  airbnbUrl: '',
  capacity: {
    guests: 10,
    bedrooms: 2,
    fullBathrooms: 1,
    additionalWCs: 1,
  },
  contact: {
    email: '',
    phone: '',
  },
  images: {
    hero: '/images/hero-pool-01.jpeg',
    exterior: '/images/exterior-pool-01.jpeg',
    hotTub: '/images/hot-tub-01.jpeg',
    sauna: '/images/sauna-01.jpeg',
    poolside: '/images/outdoor-poolside-01.jpeg',
    lounge: '/images/outdoor-lounge-01.jpeg',
    grill: '/images/outdoor-grill-01.jpeg',
    living: '/images/living-room-01.jpeg',
  },
  gallery: [
    '/images/hero-pool-01.jpeg',
    '/images/hot-tub-01.jpeg',
    '/images/sauna-01.jpeg',
    '/images/outdoor-poolside-01.jpeg',
    '/images/exterior-pool-01.jpeg',
    '/images/outdoor-lounge-01.jpeg',
    '/images/outdoor-grill-01.jpeg',
    '/images/living-room-01.jpeg',
    '/images/living-room-02.jpeg',
    '/images/bedroom-02.jpeg',
    '/images/bedroom-01.jpeg',
    '/images/kitchen-01.jpeg',
    '/images/bathroom-01.jpeg',
    '/images/entrance-01.jpeg',
  ],
} as const;

export type Property = typeof property;
