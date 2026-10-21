export type Media = { src?: string; poster?: string; kind?: 'local' | 'vimeo' | 'youtube'; label: string };
export type Project = { slug: string; title: string; client: string; year: string; category: 'Commercials' | 'Brand films' | 'Narrative' | 'Product films'; role: string; description: string; approach: string; lighting: string; media: Media; gallery: { src: string; alt: string }[]; credits: { role: string; name: string }[]; featured: boolean; tone: string };
export const site = {
 name: 'Sachin Verma', email: 'vrmsachin09@gmail.com', location: 'Gurugram, India',
 url: process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || 'https://portfolisachin.netlify.app',
 tagline: 'Crafting stories through light, movement, and emotion.',
 hero: { label: 'Hero footage — awaiting final film' } as Media,
 reel: { label: 'Showreel coming soon' } as Media,
 portrait: null as null | { src: string; alt: string },
 resume: null as string | null,
 socials: [] as { label: string; url: string }[],
 behindTheScenes: [] as { src: string; alt: string }[],
};
export const projects: Project[] = [
 {slug:'samsung-commercial',title:'Samsung',client:'Commercial campaign · Rajiv Makhni Studio',year:'2025',category:'Commercials',role:'Direction · Camera · Lighting',description:'Commercial campaign experience involving Samsung through Rajiv Makhni Studio.',approach:'Direction, camera operation and camera movement.',lighting:'Lighting for the commercial campaign. Detailed treatment will be added with the approved film.',media:{label:'Approved campaign film to be added'},gallery:[],credits:[{role:'Direction, camera & lighting',name:'Sachin Verma'}],featured:true,tone:'amber'},
 {slug:'motorola-brand-film',title:'Motorola',client:'Brand advertisement · Rajiv Makhni Studio',year:'2025',category:'Brand films',role:'Cinematography · Lighting',description:'Brand advertisement experience involving Motorola through Rajiv Makhni Studio.',approach:'Handheld tracking and dynamic blocking.',lighting:'Cinematography and lighting. Approved visual treatment and frames to be added.',media:{label:'Approved brand film to be added'},gallery:[],credits:[{role:'Cinematography & lighting',name:'Sachin Verma'}],featured:true,tone:'blue'},
 {slug:'independent-narratives',title:'Independent narratives',client:'Selected short film experience',year:'2021–2024',category:'Narrative',role:'Cinematography',description:'Cinematography for independent narrative short films. Individual titles and production credits are awaiting confirmation.',approach:'Story-focused camera movement.',lighting:'Story-focused lighting for narrative filmmaking.',media:{label:'Individual film and credits to be added'},gallery:[],credits:[{role:'Cinematography',name:'Sachin Verma'}],featured:true,tone:'olive'},
 {slug:'bedding-lifestyle',title:'Bedding & lifestyle',client:'SC Foto Studio',year:'',category:'Product films',role:'Direction · Cinematography · Editing',description:'Bedding and lifestyle commercial work with SC Foto Studio.',approach:'Direction, cinematography and editing for product and lifestyle commercials.',lighting:'Controlled studio lighting.',media:{label:'Approved commercial and stills to be added'},gallery:[],credits:[{role:'Direction, cinematography & editing',name:'Sachin Verma'}],featured:true,tone:'clay'},
];
export const experience = [
 {year:'2025 — Present',title:'Cinematographer',studio:'Rajiv Makhni Studio',detail:'February 2025–Present'},
 {year:'2021 — 2025',title:'Freelance Cinematographer',studio:'Various production houses',detail:'Commercial and independent productions'},
 {year:'2021 — 2024',title:'Camera Operator / Cinematographer',studio:'SC Foto Studio',detail:'March 2021–February 2024'},
];
export const specialties = ['Commercial cinematography','Lighting design','Product cinematography','Camera operation','Gimbal & camera movement','Narrative storytelling','Composition','Video editing','Sony cinema / mirrorless'];
