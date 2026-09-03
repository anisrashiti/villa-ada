export const property = {
  name: 'Villa Ada',
  siteUrl: 'https://villa-ada-retreat.anisbaba.chatgpt.site',
  logo: '/branding/villa-ada-logo.jpg',
  airbnbUrl: '',
  location: {
    short: '25 minutes from Prishtina',
    description:
      'Close enough for an easy escape from Prishtina, with the privacy and open air of a stay outside the city.',
    nearbyAttractions: [] as { name: string; description?: string }[],
  },
  capacity: {
    guests: 10,
    bedrooms: 2,
    fullBathrooms: 1,
    additionalWCs: 1,
  },
  sleeping: [
    { space: 'Bedroom one', guests: 4 },
    { space: 'Bedroom two', guests: 2 },
    { space: 'Living area', guests: 4 },
  ],
  contact: {
    email: '',
    phone: '',
  },
  amenities: [
    {
      title: 'Wellness & outdoors',
      items: [
        'Private outdoor swimming pool',
        'Private hot tub',
        'Private sauna',
        'Private garden',
        'BBQ / grill',
        'Covered outdoor lounge',
        'Outdoor seating and dining',
        'Sun loungers',
        'Hammock',
      ],
    },
    {
      title: 'Indoors',
      items: [
        'Indoor fireplace',
        'Air conditioning',
        'Wi-Fi',
        'Large living room',
        'Indoor dining area',
      ],
    },
    {
      title: 'Kitchen',
      items: [
        'Fully equipped kitchen',
        'Oven',
        'Stovetop',
        'Refrigerator / freezer',
      ],
    },
    {
      title: 'Bathroom',
      items: ['Walk-in shower', 'Hair dryer', 'Additional WC'],
    },
    {
      title: 'Practical',
      items: ['Private on-site parking'],
    },
  ],
  images: {
    hero: {
      src: '/images/hero-pool-01.jpeg',
      alt: 'Villa Ada private swimming pool surrounded by greenery and outdoor spaces',
    },
    exterior: {
      src: '/images/exterior-pool-01.jpeg',
      alt: 'Villa Ada pool, hot tub and private sauna set beneath mature trees',
    },
    hotTub: {
      src: '/images/hot-tub-01.jpeg',
      alt: 'Bubbling private hot tub overlooking Villa Ada pool and garden',
    },
    sauna: {
      src: '/images/sauna-01.jpeg',
      alt: 'Timber-lined private sauna with a garden-facing window',
    },
    poolside: {
      src: '/images/outdoor-poolside-01.jpeg',
      alt: 'Covered poolside lounge with natural timber and comfortable seating',
    },
    lounge: {
      src: '/images/outdoor-lounge-01.jpeg',
      alt: 'Spacious covered outdoor lounge beside Villa Ada',
    },
    grill: {
      src: '/images/outdoor-grill-01.jpeg',
      alt: 'Brick outdoor BBQ and dining area under a timber canopy',
    },
    living: {
      src: '/images/living-room-01.jpeg',
      alt: 'Large Villa Ada living room with fireplace, timber beams and garden views',
    },
  },
  gallery: [
    { src: '/images/hero-pool-01.jpeg', alt: 'Private pool and garden at Villa Ada' },
    { src: '/images/hot-tub-01.jpeg', alt: 'Private hot tub beside the pool' },
    { src: '/images/sauna-01.jpeg', alt: 'Private timber sauna interior' },
    { src: '/images/outdoor-poolside-01.jpeg', alt: 'Covered poolside seating area' },
    { src: '/images/exterior-pool-01.jpeg', alt: 'Pool, sauna and hot tub in the garden' },
    { src: '/images/outdoor-lounge-01.jpeg', alt: 'Covered outdoor lounge' },
    { src: '/images/outdoor-grill-01.jpeg', alt: 'Outdoor brick BBQ area' },
    { src: '/images/living-room-01.jpeg', alt: 'Living room with indoor fireplace' },
    { src: '/images/living-room-02.jpeg', alt: 'Living room opening toward the pool' },
    { src: '/images/bedroom-02.jpeg', alt: 'Villa Ada bedroom sleeping four guests' },
    { src: '/images/bedroom-01.jpeg', alt: 'Villa Ada double bedroom' },
    { src: '/images/kitchen-01.jpeg', alt: 'Fully equipped kitchen and indoor dining area' },
    { src: '/images/bathroom-01.jpeg', alt: 'Full bathroom with walk-in shower' },
    { src: '/images/entrance-01.jpeg', alt: 'Villa Ada entrance with exposed brick wall' },
  ],
} as const;

export type Property = typeof property;
