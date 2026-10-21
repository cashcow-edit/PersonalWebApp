import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Play } from 'lucide-react';
import { site, projects, experience } from '@/content/portfolio';
import { CopyButton, ResumeLink, Contact } from '@/components/ui';
import { MediaPlayer } from '@/components/media';
export const metadata: Metadata = {
 title: 'For Producers',
 description: 'A concise introduction to Sachin Verma: commercial cinematography experience, selected projects, showreel and direct production contact.',
};
export default function Producers() {
 const featured = projects.filter(p => p.featured);
 const playable = featured.filter(p => p.media.src);
 const reel = site.reel.src ? site.reel : playable[0]?.media || site.reel;
 const reelTitle = site.reel.src || !playable.length ? 'Sachin Verma — Showreel' : playable[0].title;
 return <main id="main" className="producer-page">
  <section className="section-pad page-intro producer-opening">
   <div className="producer-label"><span className="eyebrow">THE PRODUCER’S CUT</span><CopyButton share/></div>
   <h1>Your story.<br/><em>A considered eye.</em></h1>
   <div className="producer-intro">
    <p>Sachin Verma — Cinematographer / Director of Photography.<br/>Gurugram, India. Commercials, brand films, product films and independent narratives.</p>
    <div className="producer-actions">
     <a className="button primary" href="#producer-reel"><Play size={15}/>{site.reel.src ? 'Watch showreel' : playable.length ? 'Watch selected film' : 'Showreel status'}</a>
     <a className="text-link" href={`mailto:${site.email}?subject=Production%20enquiry`}>Discuss a production <ArrowUpRight size={17}/></a>
     <ResumeLink/>
    </div>
   </div>
   <div id="producer-reel"><MediaPlayer media={reel} title={reelTitle}/></div>
   <div className="producer-experience"><h2>Relevant experience</h2>{experience.map(e=><div key={e.studio}><span>{e.year}</span><h3>{e.studio}</h3><p>{e.title}</p></div>)}</div>
   <div className="section-heading"><h2>{playable.length ? 'Selected films' : 'Selected experience'}</h2></div>
   <div className="producer-films">{featured.map(p=><article className="producer-film" key={p.slug}>
    {p.media.src && <MediaPlayer media={p.media} title={p.title}/>}
    <Link className="producer-film-details" href={`/work/${p.slug}`}>
     <span>{p.category}{p.year && ` / ${p.year}`}</span>
     <h3>{p.title}<ArrowUpRight size={22}/></h3><p>{p.role}</p>
     <small>{p.media.src ? 'View credits & project details' : 'Project details · Approved film pending'}</small>
    </Link>
   </article>)}</div>
  </section><Contact/>
 </main>;
}
