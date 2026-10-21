import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
// Use the same source configuration as Next.js, without requiring a separate manifest.
const source = fs.readFileSync(new URL('../content/portfolio.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { site, projects } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const publicDir = new URL('../public/', import.meta.url).pathname;
const missing = [], errors = [];
function file(src, label, extension) {
 if (!src?.startsWith('/') || src.startsWith('//') || src.includes('..') || /[?#]/.test(src)) {
  errors.push(`${label}: use a local path beginning /media/ or /resume/.`); return;
 }
 const filename = path.join(publicDir, src);
 if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) { errors.push(`${label}: file is missing (${src}).`); return; }
 if (extension === 'pdf' && fs.readFileSync(filename).subarray(0, 5).toString() !== '%PDF-') errors.push(`${label}: file is not a PDF.`);
}
function media(value, label) {
 if (value.poster) file(value.poster, `${label} poster`);
 if (!value.src) { missing.push(`${label}: video not supplied`); return; }
 if (value.kind === 'local') file(value.src, label);
 else if (value.kind === 'vimeo') { if (!/^\d+$/.test(value.src)) errors.push(`${label}: Vimeo needs a numeric video ID.`); }
 else if (value.kind === 'youtube') { if (!/^[\w-]{11}$/.test(value.src)) errors.push(`${label}: YouTube needs its 11-character video ID.`); }
 else errors.push(`${label}: choose local, vimeo or youtube.`);
 if (value.privacyHash && (value.kind !== 'vimeo' || !/^[a-zA-Z0-9]+$/.test(value.privacyHash))) errors.push(`${label}: privacyHash must be the alphanumeric hash from a Vimeo unlisted URL.`);
 if (!value.poster) missing.push(`${label}: poster not supplied`);
}
function image(value, label) { file(value.src, label); if (!value.alt?.trim()) errors.push(`${label}: describe the photo in alt text.`); }
media(site.hero, 'Hero');
if (site.hero.src && site.hero.kind !== 'local') errors.push('Hero: use a local muted loop; external players belong in showreel/projects.');
media(site.reel, 'Showreel');
if (site.resume) file(site.resume, 'Resume', 'pdf'); else missing.push('Resume: PDF not supplied');
if (site.portrait) image(site.portrait, 'Portrait'); else missing.push('Portrait: photo not supplied');
if (!site.behindTheScenes.length) missing.push('Behind the scenes: photos not supplied');
site.behindTheScenes.forEach((x, i) => image(x, `Behind the scenes ${i + 1}`));
site.socials.forEach(x => { if (!/^https:\/\//.test(x.url)) errors.push(`Social ${x.label}: use an HTTPS URL.`); });
const slugs = new Set();
for (const p of projects) {
 if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug) || slugs.has(p.slug)) errors.push(`Invalid or duplicate project slug: ${p.slug}`);
 slugs.add(p.slug); media(p.media, p.title);
 if (!p.year) missing.push(`${p.title}: year not confirmed`);
 if (p.detailsPending) missing.push(`${p.title}: film title, description, lighting approach and credits need confirmation`);
 if (!p.gallery.length) missing.push(`${p.title}: gallery not supplied`);
 p.gallery.forEach((x, i) => image(x, `${p.title} frame ${i + 1}`));
}
console.log('Content still needed:\n' + missing.map(x => `- ${x}`).join('\n'));
if (errors.length) { console.error('\nContent errors:\n' + errors.map(x => `- ${x}`).join('\n')); process.exitCode = 1; }
else console.log('\nConfigured paths and video IDs passed validation. Missing content remains explicitly pending.');
