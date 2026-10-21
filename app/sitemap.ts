import type { MetadataRoute } from 'next';
import {site,projects} from '@/content/portfolio';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/about','/for-producers',...projects.map(p=>`/work/${p.slug}`)].map(path=>({url:`${site.url}${path}`,changeFrequency:'monthly',priority:path===''?1:0.8}))}
