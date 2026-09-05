# Villa Ada

A photo-led villa website built with the Next.js App Router and React.

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

- Property facts, photographs and the canonical site URL live in `src/config/property.ts`.
- Set `property.airbnbUrl` to the verified listing URL to enable booking links in the navigation, stay section and footer. Until then, the site displays a coming-soon message and navigation links to the stay section.
- Add only verified guest reviews to `src/data/reviews.ts`. The guest-book section stays hidden while the list is empty.
- Confirm the listing details and canonical URL before publishing. The gallery and other local interactions do not submit booking enquiries.

## Assets and accessibility

The supplied photographs remain intact. The site serves generated 480, 960 and 1600 pixel WebP variants from `public/images/optimized/`. Regenerate them with `node scripts/optimize-images.mjs`, using Sharp from the existing locked toolchain. Generated images are included in source control so deployment does not require image processing.

Cormorant Garamond and Manrope are self-hosted; their licenses are included in `public/fonts/`.

The photo gallery and mobile menu use native modal dialogs with keyboard controls and focus restoration. The interior photo strip supports keyboard scrolling. Motion respects the visitor's reduced-motion preference, and scroll reveals progressively enhance content that is visible without JavaScript.

The app uses standard Next.js commands and can be deployed through either Vercel or Netlify. Local development and production checks do not publish the site.
