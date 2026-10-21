# Sachin Verma — A life in frames

A cinematic, responsive portfolio built with Next.js App Router, React and TypeScript. The original static website files are retained for reference; the new application runs through Next.js, not `index.html` or a Python static server.

## Run locally

Requires Node.js 20.9+ and npm. Tested with Node 24.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

Open the app on port 3000. For production: `npm run build && npm start`. Validation: `npm run typecheck`, `npm run lint`, and (with the server running) `npm test`. `TEST_BASE_URL` overrides the test server origin.

## Content and media

Edit **content/portfolio.ts** to update the site without changing React components. Only supplied experience is published. The four initial records describe professional experience, not invented film titles. No existing repository photography or videos have been claimed as Sachin’s work. No footage or resume PDF was supplied.

- **Hero:** upload an authorized MP4/WebM to `public/media/hero/`. Set `site.hero` to `{ src: '/media/hero/film.mp4', poster: '/media/hero/poster.jpg', kind: 'local', label: 'Hero film' }`. A local hero autoplays muted, looped and inline. It is never preloaded; a CSS composition remains behind it. Keep the file short and compressed. Hero video requires a poster.
- **Showreel:** upload to `public/media/showreel/` and set `site.reel` with the same fields. Recommended edit: 60–75 seconds. Native controls provide playback, volume and fullscreen. Missing or failed local media displays an honest fallback.
- **External films:** set `kind: 'vimeo'` or `'youtube'` and `src` to the numeric Vimeo ID or YouTube video ID, not a full URL. The embed loads only after a click, with keyboard-accessible activation and fullscreen support. Ensure Vimeo domain embedding is allowed. External playback starts only after a visitor presses play.
- **Projects:** add a typed record to `projects`. Use a unique URL-safe `slug`; fill `title`, `client`, verified `year` (or empty string), `category`, `role`, `description`, `approach`, `lighting`, `credits`, `featured`, and `tone` (`amber`, `blue`, `olive`, `clay`). `media` accepts a local film or embed and an approved poster. `gallery` is an array of `{ src, alt }`. Routes, filters and sitemap update automatically. Rebuild after content edits.
- **Images:** put authorized stills in `public/media/projects/`; use local paths beginning `/media/`. Project posters are lazy loaded; gallery images use Next Image. Missing posters show abstract typography explicitly labeled “film still pending,” never illustrative photographs passed off as work. Supply optimized 16:9 images with descriptive alt text.
- **Portrait:** set `site.portrait` to `{ src: '/media/portraits/sachin.jpg', alt: 'Sachin Verma on set' }` using the actual photograph.
- **Behind the scenes:** populate `site.behindTheScenes` with `{ src, alt }` objects. The gallery lives on About. Keep descriptions factual.
- **Resume:** upload the actual PDF to `public/resume/sachin-verma.pdf`, then set `site.resume` to `/resume/sachin-verma.pdf`. Until supplied, the website shows “Resume PDF coming soon” rather than a broken download button.
- **Contact/socials:** update `site.email`, `site.location`, and `site.socials` (`{ label, url }`). Add only verified personal profiles. Email actions use mailto and require the visitor’s email application. Copy actions use the Clipboard API with a text fallback. No fake submission form.

## Design and accessibility

Dark charcoal, warm ivory and restrained gold. Abstract light studies intentionally stand in for absent media. Responsive layouts cover mobile through widescreen; native links, focus styles, semantic landmarks, a skip link, reduced motion, accessible filter toggles and mobile navigation are included. Google Fonts is optional: local system and Georgia fallbacks remain usable if unavailable. No scroll hijacking or heavy motion runtime.

## Deploy on Vercel

Import this repository into Vercel and select the Next.js framework preset with this repository root. Keep the default build command `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain (without trailing slash), then deploy. This sets metadata, structured data, sitemap and robots URLs. Before launch, replace placeholder media, supply the actual resume, verify approved credits and external video permissions, and check the real production origin. No secrets are required. Publication/deployment is not performed automatically.

## Routes

`/`, `/about`, `/for-producers`, `/work/[slug]`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`.

The producer route prioritizes a concise introduction, immediate reel access, relevant experience, selected projects, contact and a copyable link. No production media playback can be verified until actual footage is supplied.

## Deploy on Netlify

Import this repository through **Add new project → Import an existing project → GitHub**. Select the main branch and repository root. `netlify.toml` runs the content check and production build, publishes `.next`, and uses Node 24. Netlify automatically enables its Next.js runtime; do not use a static drag-and-drop deployment of `.next`.

After the first deployment gives you a site URL, add `NEXT_PUBLIC_SITE_URL` with that HTTPS origin (no trailing slash) in the site's environment variables, then redeploy. Replace it with your preferred canonical domain if you add one. Check `/`, `/about`, `/for-producers`, every project route, `/sitemap.xml`, `/robots.txt` and `/opengraph-image`. Footage and the resume remain explicitly pending until supplied.

The production Netlify project is `portfolisachin`, connected to `cashcow-edit/PersonalWebApp` on `main`. Push the application and `netlify.toml` together so Netlify builds the Next.js app rather than serving the legacy root HTML. The canonical URL defaults to `https://portfolisachin.netlify.app`; `NEXT_PUBLIC_SITE_URL` takes precedence, followed by Netlify's `URL` variable. Never put authentication tokens in either public variable. `.netlify/` is ignored to keep local site-link metadata out of Git.

## Finish the producer pitch

See [CONTENT-HANDOFF.md](CONTENT-HANDOFF.md) for the complete placeholder inventory, exact asset requests for each project, configuration examples and final viewing checklist. Run `npm run content:check` before building to catch broken configured file paths, invalid video IDs and invalid resume files. The producer route promotes the first featured playable film when a reel has not yet been supplied, and supports inline playback of featured films. Set each project's `detailsPending` flag to `false` after confirming its complete details and credits.
