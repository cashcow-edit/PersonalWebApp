'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Play, Maximize2, Film } from 'lucide-react';
import type { Media } from '@/content/portfolio';

export function MediaPlayer({ media, title, hero = false }: { media: Media; title: string; hero?: boolean }) {
 const [active, setActive] = useState(false);
 const [failed, setFailed] = useState(false);
 const available = Boolean(media.src) && !failed;
 const embed = media.kind === 'vimeo'
  ? `https://player.vimeo.com/video/${encodeURIComponent(media.src || '')}`
  : `https://www.youtube-nocookie.com/embed/${encodeURIComponent(media.src || '')}`;
 if (hero && available && media.kind === 'local') return <video className="hero-video" autoPlay muted loop playsInline poster={media.poster} preload="none" onError={() => setFailed(true)} aria-hidden="true"><source src={media.src}/></video>;
 return <div className={`media-player ${hero ? 'hero-fallback' : ''}`}>
  {available && media.kind === 'local' ? <video controls playsInline preload="none" poster={media.poster} onError={() => setFailed(true)} aria-label={title}><source src={media.src}/></video>
   : available && active ? <iframe src={embed} title={title} allow="fullscreen; picture-in-picture" allowFullScreen onError={() => setFailed(true)}/>
   : <div className="media-empty">
    {available && media.poster && <Image className="media-poster" src={media.poster} alt="" fill sizes="(max-width: 767px) 100vw, 90vw"/>}
    <div className="frame-corner tl"/><div className="frame-corner br"/>
    {available ? <button className="play-button" onClick={() => setActive(true)} aria-label={`Play ${title}`}><Play size={24}/></button> : <Film size={26} strokeWidth={1}/>}
    <span>{available ? `Watch ${title}` : failed ? 'Film temporarily unavailable' : media.label}</span>
    {!available && <small>{failed ? 'PLEASE TRY AGAIN LATER OR CONTACT SACHIN' : hero ? 'NO FOOTAGE PROVIDED' : 'APPROVED FOOTAGE WILL APPEAR HERE'}</small>}
   </div>}
  {!hero && <div className="player-caption"><span>{title}</span><span>{available ? 'FILM' : 'MEDIA PENDING'} <Maximize2 size={13}/></span></div>}
 </div>;
}
