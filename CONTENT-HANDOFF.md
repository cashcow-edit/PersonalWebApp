# Complete the producer pitch

Edit `content/portfolio.ts`. Keep the existing design; replace content in the order below. None of the current media placeholders has an actual file behind it. Existing legacy template images are not verified as Sachin's work and are not used.

## 1. Send the essentials first

A strong first pitch needs one playable reel (or one strong finished film), a genuine poster frame, exact credits, and a current resume. Send those before spending time on a hero loop or behind-the-scenes gallery. Public/unlisted Vimeo or YouTube links are easiest; login-required or private links will not work for producers.

| Field | What to provide | Suggested local path / format |
| --- | --- | --- |
| `site.reel` | A 60–75 second showreel, strongest shots in the first 5 seconds; your name and actual role | `/media/showreel/showreel.mp4` and `/media/showreel/poster.jpg`, or Vimeo/YouTube ID |
| `site.hero` | Optional 8–15 second loop from your approved work, no essential sound; a still that crops well on phones | `/media/hero/film.mp4` and `/media/hero/poster.jpg` |
| `site.portrait` | One authentic portrait/on-set photo; ideally portrait orientation | `/media/portraits/sachin.jpg` |
| `site.resume` | Current 1–2 page PDF with email, location, selected credits and roles | `/resume/sachin-verma.pdf` |
| `site.behindTheScenes` | Optional 3–6 genuine photos of lighting, rigs, camera operation or collaboration, each with a caption | `/media/behind-the-scenes/lighting-setup.jpg`, etc. |
| `site.socials` | Optional verified personal Instagram, Vimeo or other professional profile URLs | Full `https://…` links; leave empty if unavailable |
| `site.email`, `site.location` | Confirm `vrmsachin09@gmail.com` and Gurugram, India | Already configured |
| `experience` | Confirm current role and dates, especially Rajiv Makhni Studio, February 2025–present | Already configured from supplied information |

Use H.264 MP4 with web/fast-start enabled for broad playback support. Aim for 1080p for reels and project films; a compressed 720p hero is often sufficient. Aim for a hero below 5 MB and a reel below roughly 30 MB; use Vimeo/YouTube for large films rather than committing large videos. These are practical targets, not upload limits. Use 1600–1920px-wide JPEG/WebP film stills (ideally under 300 KB), with the subject clear in a 16:10 thumbnail crop. Hero video never needs sound.

## 2. Resolve each project record

For every selected film, send **one finished-film URL/file, one poster, 3–6 approved stills, the exact title, year, client/production, your exact role, and any approved crew credits**. Also supply 2–3 sentences on the film and 1–2 concrete sentences each on camera approach and lighting. Mention actual techniques used rather than general claims. Identify which 2–3 films should appear first for a producer.

| Current record / slug | Existing factual basis | Details still needed |
| --- | --- | --- |
| Samsung / `samsung-commercial` | 2025 commercial campaign through Rajiv Makhni Studio; direction, camera, lighting | Exact campaign/film title, approved credit wording, finished film, poster/stills, camera movement and lighting treatment |
| Motorola / `motorola-brand-film` | 2025 brand advertisement through Rajiv Makhni Studio; cinematography/lighting, handheld tracking and dynamic blocking | Exact advertisement title, approved credits, finished film, poster/stills, specific visual treatment |
| Independent narratives / `independent-narratives` | Short-film cinematography during 2021–2024 | Individual film titles, release year for each, director/production, your role and film links. Prefer one record per real short film rather than this grouped experience record |
| Bedding & lifestyle / `bedding-lifestyle` | SC Foto Studio; direction, cinematography, lighting and editing | Brand/client, exact film title, year (currently blank), finished commercial, poster/stills and confirmed credits |

All four currently have empty `media.src` and `gallery`. Their `detailsPending: true` flags preserve an honest experience-record notice. Set that flag to `false` only after the title, descriptions and credits are confirmed. Missing film/still states depend on the media fields automatically. Do not change slugs of links you have already shared unless you also provide redirects.

Do not claim the studio's complete client relationship as a direct personal commission. Use only work and credits you are allowed to publish. Do not send passwords or account tokens for video platforms.

## 3. Copy files and connect them

The `public` folder is the website root: `public/media/showreel/showreel.mp4` becomes `/media/showreel/showreel.mp4` in configuration. Paths are case-sensitive in production.

Replace the existing `reel`, `portrait`, and `resume` values inside `site`:

```ts
reel: {
  kind: 'local',
  src: '/media/showreel/showreel.mp4',
  poster: '/media/showreel/poster.jpg',
  label: 'Sachin Verma — Showreel',
} as Media,
portrait: { src: '/media/portraits/sachin.jpg', alt: 'Sachin Verma on set' },
resume: '/resume/sachin-verma.pdf',
```

Only configure paths after the corresponding files are present. Set `hero` using the same local-video fields, with its own poster. Leave it empty if you prefer the existing cinematic typography.

For an external film, replace the matching `media`/`reel` object with `kind: 'vimeo'` and `src` set to its numeric ID, or `kind: 'youtube'` with its 11-character ID. Use the ID, not the complete URL. Supply a local poster in `poster`. For a Vimeo unlisted URL shaped like `https://vimeo.com/123456789/abc123def0`, set `src: '123456789'` and `privacyHash: 'abc123def0'`. Preserve the actual hash from your link; it is required for playback. Enable embedding on the production domain and verify the film plays in a logged-out/private browser. A fallback link opens external films on their original platform.

For each project, update its existing object:

- `title`, `client`, `year`, `category`, `role`: the verified film information.
- `description`, `approach`, `lighting`: the specific facts you supply.
- `credits`: an array such as `{ role: 'Cinematography', name: 'Sachin Verma' }`; add other people only when confirmed.
- `media`: film source and poster as above.
- `gallery`: `{ src: '/media/projects/samsung/frame-01.jpg', alt: 'Describe the actual shot' }` objects.
- `detailsPending`: change to `false` once details are final.
- `featured`: `true` includes the film on `/for-producers`. Arrange the `projects` array strongest first; that controls display order. If the showreel is absent, the producer page promotes the first featured playable film.

Add each genuine short film as a separate record using the same fields and a unique URL-safe slug. Remove the grouped narrative entry once it is replaced. Project routes, filter counts and sitemap follow the array.

Set `site.behindTheScenes` to the same `{ src, alt }` format as project galleries. Set `site.socials` to `{ label: 'Vimeo', url: 'https://…' }` objects using actual profiles. Keep unused optional fields empty.

## 4. Verify and publish

```sh
npm run content:check
npm run lint
npm run typecheck
npm run build
npm start
# In another terminal:
npm test
```

`content:check` lists pending content and rejects missing configured files, invalid video IDs, duplicate slugs, missing image descriptions and invalid resume files. Empty optional content does not block a build. It does not verify the truth of credits or whether an external platform permits playback.

Before sending a pitch, check on a phone and a logged-out desktop browser:

1. Open `/for-producers`; start the showreel/first selected film immediately. Check sound, seeking, fullscreen and the external fallback link. No video should require an account.
2. Play every configured project film; check still crops, captions, role and crew credits.
3. Download the resume and open the actual PDF. Confirm it is current and readable on mobile.
4. Tap the email buttons (your email app should open with the professional subject), and copy the email/producer link.
5. Check mobile menu, project filters, all detail pages, next-project links, `/about` and footer links. Ensure no text or player spills sideways.
6. Push the checked changes to `cashcow-edit/PersonalWebApp` on `main`. Verify Netlify built the new commit and its deploy state is `ready`; trigger a build through the dashboard if automatic builds do not start.
7. Repeat playback and resume checks at `https://portfolisachin.netlify.app`. Local checks alone cannot establish that video-platform permissions work on the production domain.

Current pitch URL: **https://portfolisachin.netlify.app/for-producers**. Share it once real work is available. Until then it is a functional introduction with explicit media placeholders, not a finished viewing portfolio.
