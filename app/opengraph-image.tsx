import { ImageResponse } from 'next/og';
export const alt='Sachin Verma — Cinematographer / Director of Photography';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#0B0B0D',color:'#F4F1EB',display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',height:'100%',padding:'70px',borderBottom:'5px solid #B89A64'}}><div style={{fontSize:16,letterSpacing:6,color:'#B89A64'}}>A LIFE IN FRAMES</div><div style={{fontSize:112,letterSpacing:-7,marginTop:24}}>SACHIN VERMA.</div><div style={{fontSize:22,letterSpacing:4,marginTop:32}}>CINEMATOGRAPHER / DIRECTOR OF PHOTOGRAPHY</div><div style={{fontSize:18,color:'#A6A6A8',marginTop:26}}>Gurugram, India · Crafting stories through light, movement, and emotion.</div></div>,size)}
