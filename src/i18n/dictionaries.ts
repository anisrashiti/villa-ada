export type Locale = 'en' | 'sq';

const en = {
  editorial: {
    home: 'Home',
    stay: 'The stay',
    experience: 'The experience',
    location: 'Find us',
    escape: 'A private escape',
    near: 'close to Prishtina.',
    distance: 'Approx. 25 min from Prishtina',
    explore: 'Explore the villa',
    reserve: 'Plan your stay',
    film: 'A glimpse of Villa Ada',
    pause: 'Pause film',
    play: 'Play film',
    stayLead: 'Your people.',
    stayEmphasis: 'Your own place.',
    stayIntro:
      'A whole villa to share. A private pool, jacuzzi and garden to make the days your own.',
    stats: ['Guests, up to', 'Bedrooms', 'Beds', 'Bathroom'],
    details: 'Everything included',
    experienceLead: 'Days outside.',
    experienceEmphasis: 'Time together.',
    experienceIntro:
      'A swim. A slow afternoon. One more evening under the trees.',
    moments: [
      'Private pool',
      'Jacuzzi',
      'The warmth of the sauna',
      'Evenings outside',
    ],
    finalLead: 'Close to the city.',
    finalEmphasis: 'Away from the everyday.',
    journey: 'Approx. 25 minutes by car',
    directions: 'Get directions',
    contact: 'Contact Villa Ada',
  },
  metadata: {
    title: 'Villa Ada | Private Villa 25 Minutes from Prishtina',
    description:
      'Villa Ada is a private retreat 25 minutes from Prishtina for up to 10 guests, with a private swimming pool, hot tub, sauna and generous outdoor spaces.',
    openGraphLocale: 'en_US',
  },
  brand: {
    tagline: 'A PRIVATE RETREAT',
  },
  navigation: {
    links: ['The villa', 'Wellness', 'Gallery', 'The details', 'Location'],
    book: 'Book your stay',
    stay: 'Your stay',
    menu: 'Menu',
    mobileEyebrow: 'A little look around',
  },
  accessibility: {
    skipToContent: 'Skip to content',
    brandHome: 'Villa Ada home',
    mainNavigation: 'Main navigation',
    openMenu: 'Open navigation menu',
    navigationMenu: 'Navigation menu',
    closeMenu: 'Close navigation menu',
    mobileNavigation: 'Mobile navigation',
    languageSwitcher: 'Choose language',
    interiorStrip: 'Interior photographs; scroll horizontally on small screens',
  },
  booking: {
    comingSoon: 'Our Airbnb listing is coming soon.',
    comingSoonCompact: 'Coming soon on Airbnb',
    viewOnAirbnb: 'View on Airbnb',
    opensNewTab: ' (opens in a new tab)',
  },
  hero: {
    kicker: 'A private retreat · 25 minutes from Prishtina',
    heading: { lead: 'A slower', emphasis: 'kind of stay.' },
    intro: ['Pool days. Unhurried evenings.', 'A little world of your own.'],
    discover: 'Discover Villa Ada',
    highlights: ['Private pool', 'Hot tub', 'Sauna'],
    capacity: 'Up to 10 guests',
    galleryLink: 'Take a look around',
  },
  introduction: {
    label: 'The escape',
    heading: {
      lead: 'A place to pause.',
      emphasis: 'Room to be together.',
    },
    paragraphs: [
      'Close to Prishtina, a little further from the everyday. Villa Ada is a private retreat for pool days, long evenings outdoors and time with your favourite people.',
      'With space for ten, a generous garden and your own pool, hot tub and sauna, there’s room to settle in. And very little reason to hurry.',
    ],
    link: 'Make yourself at home',
    stats: [
      {
        value: '10',
        label: 'Guests',
        note: 'Bring your favourite people',
      },
      {
        value: '2',
        label: 'Bedrooms',
        note: 'Plus sleeping space in the living area',
      },
      {
        value: '1 + WC',
        label: 'Bathrooms',
        note: 'A full bathroom & an extra WC',
      },
      {
        value: 'All yours',
        label: 'The whole villa',
        note: 'Pool, garden, hot tub & sauna',
      },
    ],
  },
  wellness: {
    label: 'Pool & wellness',
    heading: { lead: 'The art of', emphasis: 'doing very little.' },
    intro: [
      'A swim, a soak, the warmth of the sauna.',
      'Find your own rhythm. It’s all yours.',
    ],
    cards: [
      {
        title: 'Take the day poolside.',
        description: 'A private pool, loungers and a garden to call your own.',
      },
      { title: 'Soak it all in.', description: 'Your own private hot tub.' },
      {
        title: 'Stay a little warmer.',
        description: 'Timber, warmth and a garden view.',
      },
    ],
    note: 'Nowhere else to be.',
    link: 'Explore the spaces',
  },
  outdoors: {
    label: 'Outdoor living',
    heading: { lead: 'Outside,', emphasis: 'all day.' },
    paragraphs: [
      'Long afternoons become BBQ evenings. Settle into the covered lounge, gather around the table or find a quiet moment in the hammock.',
      'From the first dip to the last conversation, the garden brings everyone together.',
    ],
    detail: 'Garden · Lounge · BBQ',
    leadCaption: 'A little shade. A little more time.',
    insetCaption: 'Good evenings start here.',
  },
  villa: {
    label: 'Inside Villa Ada',
    heading: { lead: 'Come in.', emphasis: 'Feel at home.' },
    description:
      'A fireplace, exposed brick and timber beams give the living room its warm, easy character. The fully equipped kitchen and dining area keep everyone connected between days outside.',
    imageCaption: 'Timber beams, warm brick, room for everyone.',
    features: ['Fireplace', 'Wi-Fi', 'Full kitchen'],
    sleepingTitle: 'Space for up to 10',
    sleeping: [
      { space: 'Bedroom one', guests: '4 guests' },
      { space: 'Bedroom two', guests: '2 guests' },
      { space: 'Living area', guests: '4 guests' },
    ],
    interiorCaptions: [
      'Room to rest',
      'Gather around the table',
      'The everyday comforts',
    ],
    swipe: 'Swipe to look around',
  },
  gallery: {
    label: 'The photographs',
    heading: { lead: 'Picture', emphasis: 'yourself here.' },
    intro: ['From the pool to the fireside.', 'Explore every space.'],
    filters: {
      all: 'All spaces',
      wellness: 'Pool & wellness',
      outdoors: 'Outdoors',
      interiors: 'Interiors',
    },
    filterAria: 'Filter photographs by space',
    photographs: 'photographs',
    openPhotograph: 'Open photograph',
    of: 'of',
    bottomNote: 'Every corner, a little more yours.',
    showFewer: 'Show fewer photographs',
    viewAll: 'View all',
    lightboxAria: 'Villa Ada photo gallery',
    closerLook: 'A closer look',
    close: 'Close gallery',
    previous: 'Previous photograph',
    next: 'Next photograph',
  },
  amenities: {
    label: 'The details',
    heading: { lead: 'Settle in.', emphasis: 'It’s all here.' },
    intro: 'The little things that make a stay feel easy, inside and out.',
    groups: [
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
      { title: 'Practical', items: ['Private on-site parking'] },
    ],
  },
  location: {
    short: '25 minutes from Prishtina',
    byline: 'An easy drive. A different pace.',
    label: 'Near, yet away',
    heading: { lead: 'Less travelling.', emphasis: 'More being here.' },
    description:
      'Close enough for an easy escape from Prishtina, with the privacy and open air of a stay outside the city.',
    origin: 'Prishtina',
    destination: 'Villa Ada',
    routeAria: '25 minutes by car from Prishtina to Villa Ada',
  },
  reviews: {
    label: 'Guest book',
    heading: 'Words from our guests.',
  },
  finalCta: {
    label: 'Your stay at Villa Ada',
    heading: { lead: 'A little less rush.', emphasis: 'A little more you.' },
    intro: [
      'Bring your favourite people.',
      'We’ve made room for the slow days.',
    ],
    galleryLink: 'One more look around',
    location: 'Private villa · 25 minutes from Prishtina',
  },
  footer: {
    intro: ['Your own little escape.', 'Just outside Prishtina.'],
    backToTop: 'Back to the top',
    copyright: 'Villa Ada',
    closing: 'Private pool. Warm welcome. Slow days.',
  },
  images: {
    hero: 'Villa Ada private swimming pool surrounded by greenery and outdoor spaces',
    exterior:
      'Villa Ada pool, hot tub and private sauna set beneath mature trees',
    hotTub: 'Bubbling private hot tub overlooking Villa Ada pool and garden',
    sauna: 'Timber-lined private sauna with a garden-facing window',
    poolside:
      'Covered poolside lounge with natural timber and comfortable seating',
    lounge: 'Spacious covered outdoor lounge beside Villa Ada',
    grill: 'Brick outdoor BBQ and dining area under a timber canopy',
    living:
      'Large Villa Ada living room with fireplace, timber beams and garden views',
    bedroomFour: 'Bedroom one with sleeping space for four guests',
    kitchen: 'Fully equipped kitchen and indoor dining table',
    bathroom: 'Full bathroom with a glass walk-in shower',
    gallery: [
      'Private pool and garden at Villa Ada',
      'Private hot tub beside the pool',
      'Private timber sauna interior',
      'Covered poolside seating area',
      'Pool, sauna and hot tub in the garden',
      'Covered outdoor lounge',
      'Outdoor brick BBQ area',
      'Living room with indoor fireplace',
      'Living room opening toward the pool',
      'Villa Ada bedroom sleeping four guests',
      'Villa Ada double bedroom',
      'Fully equipped kitchen and indoor dining area',
      'Full bathroom with walk-in shower',
      'Villa Ada entrance with exposed brick wall',
    ],
  },
} as const;

type DeepWiden<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepWiden<U>[]
    : T extends object
      ? { readonly [K in keyof T]: DeepWiden<T[K]> }
      : T;

export type Dictionary = DeepWiden<typeof en>;

const sq: Dictionary = {
  editorial: {
    home: 'Ballina',
    stay: 'Qëndrimi',
    experience: 'Përjetimi',
    location: 'Na gjeni',
    escape: 'Një arratisje private',
    near: 'pranë Prishtinës.',
    distance: 'Rreth 25 min nga Prishtina',
    explore: 'Zbuloni vilën',
    reserve: 'Planifikoni qëndrimin',
    film: 'Një vështrim në Villa Ada',
    pause: 'Ndaloni videon',
    play: 'Luani videon',
    stayLead: 'Njerëzit tuaj.',
    stayEmphasis: 'Hapësira juaj.',
    stayIntro:
      'Një vilë e tërë për ju. Pishinë private, xhakuzi dhe kopsht për t’i shijuar ditët siç dëshironi.',
    stats: ['Mysafirë, deri në', 'Dhoma gjumi', 'Shtretër', 'Banjo'],
    details: 'Gjithçka e përfshirë',
    experienceLead: 'Ditë jashtë.',
    experienceEmphasis: 'Kohë së bashku.',
    experienceIntro: 'Një not. Një pasdite e qetë. Edhe një mbrëmje nën pemë.',
    moments: [
      'Pishinë private',
      'Xhakuzi',
      'Ngrohtësia e saunës',
      'Mbrëmje jashtë',
    ],
    finalLead: 'Pranë qytetit.',
    finalEmphasis: 'Larg përditshmërisë.',
    journey: 'Rreth 25 minuta me makinë',
    directions: 'Shikoni udhëzimet',
    contact: 'Kontaktoni Villa Ada',
  },
  metadata: {
    title: 'Villa Ada | Vilë private 25 minuta nga Prishtina',
    description:
      'Villa Ada është një strehë private 25 minuta nga Prishtina për deri në 10 mysafirë, me pishinë private, xhakuzi, sauna dhe ambiente të bollshme të jashtme.',
    openGraphLocale: 'sq_AL',
  },
  brand: {
    tagline: 'NJË STREHË PRIVATE',
  },
  navigation: {
    links: ['Vila', 'Relaksi', 'Galeria', 'Detajet', 'Vendndodhja'],
    book: 'Rezervoni qëndrimin',
    stay: 'Qëndrimi juaj',
    menu: 'Menyja',
    mobileEyebrow: 'Një shëtitje e vogël',
  },
  accessibility: {
    skipToContent: 'Kalo te përmbajtja',
    brandHome: 'Ballina e Villa Ada',
    mainNavigation: 'Navigimi kryesor',
    openMenu: 'Hap menynë e navigimit',
    navigationMenu: 'Menyja e navigimit',
    closeMenu: 'Mbyll menynë e navigimit',
    mobileNavigation: 'Navigimi në celular',
    languageSwitcher: 'Zgjidhni gjuhën',
    interiorStrip:
      'Fotografi të ambienteve të brendshme; lëvizni horizontalisht në ekrane të vogla',
  },
  booking: {
    comingSoon: 'Profili ynë në Airbnb do të jetë së shpejti aktiv.',
    comingSoonCompact: 'Së shpejti në Airbnb',
    viewOnAirbnb: 'Shikoni në Airbnb',
    opensNewTab: ' (hapet në një skedë të re)',
  },
  hero: {
    kicker: 'Një strehë private · 25 minuta nga Prishtina',
    heading: { lead: 'Një ritëm', emphasis: 'më i qetë.' },
    intro: [
      'Ditë pranë pishinës. Mbrëmje pa ngut.',
      'Një botë e vogël vetëm për ju.',
    ],
    discover: 'Zbuloni Villa Ada',
    highlights: ['Pishinë private', 'Xhakuzi', 'Sauna'],
    capacity: 'Deri në 10 mysafirë',
    galleryLink: 'Shikoni përreth',
  },
  introduction: {
    label: 'Shkëputja',
    heading: {
      lead: 'Një vend për të ndalur.',
      emphasis: 'Hapësirë për të qenë bashkë.',
    },
    paragraphs: [
      'Pranë Prishtinës, por larg ritmit të përditshëm. Villa Ada është një strehë private për ditë pranë pishinës, mbrëmje të gjata jashtë dhe kohë me njerëzit tuaj të dashur.',
      'Me hapësirë për dhjetë veta, një kopsht të bollshëm, pishinë, xhakuzi dhe sauna private, këtu mund të rehatoheni pa pasur asnjë arsye për t’u ngutur.',
    ],
    link: 'Ndihuni si në shtëpi',
    stats: [
      {
        value: '10',
        label: 'Mysafirë',
        note: 'Ejani me njerëzit tuaj të dashur',
      },
      {
        value: '2',
        label: 'Dhoma gjumi',
        note: 'Plus hapësirë fjetjeje në sallon',
      },
      {
        value: '1 + WC',
        label: 'Banjo',
        note: 'Një banjo e plotë dhe një tualet shtesë',
      },
      {
        value: 'Vetëm për ju',
        label: 'E gjithë vila',
        note: 'Pishina, kopshti, xhakuzi dhe sauna',
      },
    ],
  },
  wellness: {
    label: 'Pishina dhe relaksi',
    heading: { lead: 'Arti i', emphasis: 'të bërit fare pak.' },
    intro: [
      'Një not, pak çlodhje në xhakuzi, ngrohtësia e saunës.',
      'Gjeni ritmin tuaj. Gjithçka është vetëm për ju.',
    ],
    cards: [
      {
        title: 'Kalojeni ditën pranë pishinës.',
        description: 'Pishinë private, shezlongë dhe një kopsht vetëm për ju.',
      },
      { title: 'Shijojeni çdo çast.', description: 'Xhakuzi juaj privat.' },
      {
        title: 'Qëndroni edhe pak në ngrohtësi.',
        description: 'Dru, ngrohtësi dhe pamje nga kopshti.',
      },
    ],
    note: 'Askund tjetër për të qenë.',
    link: 'Eksploroni hapësirat',
  },
  outdoors: {
    label: 'Jeta jashtë',
    heading: { lead: 'Jashtë,', emphasis: 'gjatë gjithë ditës.' },
    paragraphs: [
      'Pasditet e gjata kthehen në mbrëmje pranë skarës. Rehatohuni në sallonin e mbuluar, mblidhuni rreth tryezës ose gjeni një çast qetësie në hamak.',
      'Nga zhytja e parë deri te biseda e fundit, kopshti i bashkon të gjithë.',
    ],
    detail: 'Kopsht · Sallon · Skarë',
    leadCaption: 'Pak hije. Pak më shumë kohë.',
    insetCaption: 'Mbrëmjet e bukura nisin këtu.',
  },
  villa: {
    label: 'Brenda Villa Ada',
    heading: { lead: 'Hyni brenda.', emphasis: 'Ndihuni si në shtëpi.' },
    description:
      'Oxhaku, tullat e ekspozuara dhe trarët prej druri i japin sallonit një atmosferë të ngrohtë e të çlirët. Kuzhina e pajisur plotësisht dhe hapësira e ngrënies i mbajnë të gjithë pranë mes ditëve të kaluara jashtë.',
    imageCaption: 'Trarë druri, tulla të ngrohta, hapësirë për të gjithë.',
    features: ['Oxhak', 'Wi-Fi', 'Kuzhinë e kompletuar'],
    sleepingTitle: 'Hapësirë për deri në 10 veta',
    sleeping: [
      { space: 'Dhoma e parë', guests: '4 mysafirë' },
      { space: 'Dhoma e dytë', guests: '2 mysafirë' },
      { space: 'Salloni', guests: '4 mysafirë' },
    ],
    interiorCaptions: [
      'Hapësirë për pushim',
      'Mblidhuni rreth tryezës',
      'Komoditeti i përditshëm',
    ],
    swipe: 'Rrëshqitni për të parë përreth',
  },
  gallery: {
    label: 'Fotografitë',
    heading: { lead: 'Përfytyrojeni', emphasis: 'veten këtu.' },
    intro: ['Nga pishina deri pranë oxhakut.', 'Eksploroni çdo hapësirë.'],
    filters: {
      all: 'Të gjitha hapësirat',
      wellness: 'Pishina dhe relaksi',
      outdoors: 'Ambientet e jashtme',
      interiors: 'Ambientet e brendshme',
    },
    filterAria: 'Filtro fotografitë sipas hapësirës',
    photographs: 'fotografi',
    openPhotograph: 'Hap fotografinë',
    of: 'nga',
    bottomNote: 'Çdo kënd, pak më shumë i juaji.',
    showFewer: 'Shfaq më pak fotografi',
    viewAll: 'Shiko të gjitha',
    lightboxAria: 'Galeria e fotografive të Villa Ada',
    closerLook: 'Një vështrim nga afër',
    close: 'Mbyll galerinë',
    previous: 'Fotografia e mëparshme',
    next: 'Fotografia tjetër',
  },
  amenities: {
    label: 'Detajet',
    heading: { lead: 'Rehatohuni.', emphasis: 'Gjithçka është këtu.' },
    intro:
      'Të gjitha gjërat e vogla që e bëjnë qëndrimin të lehtë, brenda dhe jashtë.',
    groups: [
      {
        title: 'Relaksi dhe ambientet e jashtme',
        items: [
          'Pishinë private e jashtme',
          'Xhakuzi privat',
          'Sauna private',
          'Kopsht privat',
          'Skarë',
          'Sallon i jashtëm i mbuluar',
          'Ulëse dhe hapësirë ngrënieje jashtë',
          'Shezlongë',
          'Hamak',
        ],
      },
      {
        title: 'Ambientet e brendshme',
        items: [
          'Oxhak i brendshëm',
          'Klimatizim',
          'Wi-Fi',
          'Sallon i madh',
          'Hapësirë ngrënieje brenda',
        ],
      },
      {
        title: 'Kuzhina',
        items: [
          'Kuzhinë e pajisur plotësisht',
          'Furrë',
          'Pllakë gatimi',
          'Frigorifer me ngrirës',
        ],
      },
      {
        title: 'Banjoja',
        items: ['Dush pa prag', 'Tharëse flokësh', 'Tualet shtesë'],
      },
      { title: 'Praktike', items: ['Parkim privat në pronë'] },
    ],
  },
  location: {
    short: '25 minuta nga Prishtina',
    byline: 'Një udhëtim i lehtë. Një ritëm tjetër.',
    label: 'Afër, por larg',
    heading: { lead: 'Më pak rrugë.', emphasis: 'Më shumë kohë këtu.' },
    description:
      'Mjaft afër Prishtinës për një shkëputje të lehtë, me privatësinë dhe ajrin e pastër të një qëndrimi jashtë qytetit.',
    origin: 'Prishtina',
    destination: 'Villa Ada',
    routeAria: '25 minuta me makinë nga Prishtina në Villa Ada',
  },
  reviews: {
    label: 'Libri i mysafirëve',
    heading: 'Fjalë nga mysafirët tanë.',
  },
  finalCta: {
    label: 'Qëndrimi juaj në Villa Ada',
    heading: { lead: 'Pak më pak ngut.', emphasis: 'Pak më shumë për ju.' },
    intro: [
      'Ejani me njerëzit tuaj të dashur.',
      'Kemi krijuar hapësirë për ditët e qeta.',
    ],
    galleryLink: 'Edhe një shikim përreth',
    location: 'Vilë private · 25 minuta nga Prishtina',
  },
  footer: {
    intro: ['Streha juaj e vogël.', 'Vetëm pak jashtë Prishtinës.'],
    backToTop: 'Kthehu lart',
    copyright: 'Villa Ada',
    closing: 'Pishinë private. Mikpritje e ngrohtë. Ditë të qeta.',
  },
  images: {
    hero: 'Pishina private e Villa Ada, e rrethuar me gjelbërim dhe hapësira të jashtme',
    exterior:
      'Pishina, xhakuzi dhe sauna private e Villa Ada nën hijen e pemëve të rritura',
    hotTub: 'Xhakuzi privat me pamje nga pishina dhe kopshti i Villa Ada',
    sauna: 'Sauna private e veshur me dru me dritare nga kopshti',
    poolside:
      'Sallon i mbuluar pranë pishinës me dru natyral dhe ulëse të rehatshme',
    lounge: 'Sallon i bollshëm dhe i mbuluar jashtë Villa Ada',
    grill: 'Skarë me tulla dhe hapësirë ngrënieje nën strehën prej druri',
    living:
      'Salloni i madh i Villa Ada me oxhak, trarë druri dhe pamje nga kopshti',
    bedroomFour: 'Dhoma e parë me hapësirë fjetjeje për katër mysafirë',
    kitchen: 'Kuzhina e pajisur plotësisht dhe tryeza e ngrënies brenda',
    bathroom: 'Banjo e plotë me dush pa prag dhe ndarje xhami',
    gallery: [
      'Pishina private dhe kopshti në Villa Ada',
      'Xhakuzi privat pranë pishinës',
      'Brendësia e saunës private prej druri',
      'Hapësira e mbuluar për ulje pranë pishinës',
      'Pishina, sauna dhe xhakuzi në kopsht',
      'Salloni i mbuluar në ambientin e jashtëm',
      'Zona e skarës me tulla jashtë',
      'Salloni me oxhak të brendshëm',
      'Salloni që hapet drejt pishinës',
      'Dhoma e Villa Ada me hapësirë për katër mysafirë',
      'Dhoma dyshe në Villa Ada',
      'Kuzhina e pajisur plotësisht dhe hapësira e ngrënies',
      'Banjo e plotë me dush pa prag',
      'Hyrja e Villa Ada me mur me tulla të ekspozuara',
    ],
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, sq };

export const localePaths: Record<Locale, '/' | '/sq'> = {
  en: '/',
  sq: '/sq',
};
