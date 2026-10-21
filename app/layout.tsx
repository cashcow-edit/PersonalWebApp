import type { Metadata, Viewport } from 'next';
import { Header, Footer } from '@/components/ui';
import { site } from '@/content/portfolio';
import './globals.css';
export const metadata: Metadata={metadataBase:new URL(site.url),title:{default:'Sachin Verma | Cinematographer & Director of Photography',template:'%s | Sachin Verma'},description:'Commercial cinematographer and visual storyteller based in Gurugram, India. Explore selected brand films, commercials, and narrative cinematography by Sachin Verma.',openGraph:{type:'website',locale:'en_IN',siteName:'Sachin Verma',title:'Sachin Verma — Cinematographer',description:site.tagline,images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image'}};
export const viewport:Viewport={themeColor:'#0B0B0D'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:site.name,jobTitle:'Cinematographer / Director of Photography',email:site.email,url:site.url,address:{'@type':'PostalAddress',addressLocality:'Gurugram',addressCountry:'IN'}}).replace(/</g,'\\u003c')}}/></body></html>}
