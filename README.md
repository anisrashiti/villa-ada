# Villa Ada

A compact, film-led villa website built with the Next.js App Router and React.

The English site is served at `/` and the Albanian site at `/sq`. Both routes
render the same shared components with localized copy from
`src/i18n/dictionaries.ts`.

## Local development

```sh
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

On Windows PowerShell with script execution disabled, use `npm.cmd` and `npx.cmd`.

## Content and booking

- Property facts, photograph paths and the canonical site URL live in `src/config/property.ts`.
- All English and Albanian interface copy, image descriptions and accessibility labels live in `src/i18n/dictionaries.ts`.
- Set `property.airbnbUrl` to the verified listing URL to enable booking links in the navigation and final stay section. Until then, the site displays a coming-soon message and navigation links to that section.
- Optional verified address and map links belong in `property.location`; phone and email belong in `property.contact`. Empty values are omitted. No location pin or booking destination is inferred.
- Confirm the listing details and canonical URL before publishing. The gallery and other local interactions do not submit booking enquiries.

## Assets and accessibility

The supplied photographs remain intact. The site serves generated 480, 960 and 1600 pixel WebP variants from `public/images/optimized/`. Regenerate them with `node scripts/optimize-images.mjs`, using Sharp from the existing locked toolchain. Generated images are included in source control so deployment does not require image processing.

Cormorant Garamond and Manrope are self-hosted; their licenses are included in `public/fonts/`.

The homepage has four main sections: the hero film, stay overview, experience/gallery, and location/booking. All amenities remain accessible in the stay disclosure, and all 14 gallery photographs remain available through filters, expansion and the lightbox.

The photo gallery and mobile menu use native modal dialogs with keyboard controls and focus restoration. Motion respects the visitor's reduced-motion preference, and scroll reveals progressively enhance content that is visible without JavaScript.

The supplied portrait film is preserved in `public`. The website uses `public/video/villa-ada-hero.mp4`: a silent H.264 derivative at the original 720 × 1280 resolution, with fast-start metadata (4.83 MB, versus the original 6.98 MB). Its WebP poster is a frame from the supplied film. No new runtime library is needed. Autoplay is muted and inline; playback pauses outside the viewport and in hidden tabs. Reduced-motion and data-saving preferences initially show the poster without fetching the film. The accessible play/pause button lets visitors choose playback, and the poster remains the fallback when playback fails.

The app uses standard Next.js commands and can be deployed through either Vercel or Netlify. Local development and production checks do not publish the site.
