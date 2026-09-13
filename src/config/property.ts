export const property = {
  name: 'Villa Ada',
  siteUrl: 'https://villa-ada-retreat.anisbaba.chatgpt.site',
  logo: '/branding/villa-ada-logo.jpg',
  airbnbUrl: '',
  video: '/video/villa-ada-hero.mp4',
  videoPoster: '/video/villa-ada-poster.webp',
  location: {
    address: '',
    mapsUrl: 'https://maps.app.goo.gl/N1krcTrH2McjXhyw7',
    embedUrl:
      'https://www.google.com/maps?q=42.8010278,21.2371389&z=15&output=embed',
  },
  capacity: {
    guests: 10,
    bedrooms: 2,
    beds: 3,
    fullBathrooms: 1,
    additionalWCs: 1,
  },
  contact: {
    email: '',
    phone: '+383 44 545 434',
    phoneHref: 'tel:+38344545434',
    whatsappUrl: 'https://wa.me/38344545434',
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

export const socialLinks = {
  // Official Villa Ada Instagram profile.
  instagram: 'https://www.instagram.com/villaada__/',
  // Official Villa Ada Facebook profile.
  facebook: 'https://www.facebook.com/profile.php?id=61591542504363',
  // Official Villa Ada TikTok profile.
  tiktok: 'https://www.tiktok.com/@villaada_',
} as const;

export type Property = typeof property;
