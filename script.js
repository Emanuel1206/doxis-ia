(()=>{
const d=document,R=matchMedia('(prefers-reduced-motion: reduce)').matches;d.documentElement.classList.add('js');
const b=d.querySelector('.burger'),m=d.getElementById('menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
m.onclick=e=>{if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}};
const rv=d.querySelectorAll('.rv');
if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.12});rv.forEach(x=>o.observe(x))}else rv.forEach(x=>x.classList.add('in'));
// Panel demostrativo
const base={cpu:34,ram:58,disk:46};
function set(k,v){d.getElementById(k).style.width=v+'%';d.getElementById(k+'v').textContent=Math.round(v)+'%'}
function tick(){for(const k in base)set(k,Math.min(95,Math.max(8,base[k]+(R?0:(Math.random()-.5)*14))))}
tick();if(!R)setInterval(()=>{if(!d.hidden)tick()},2200);
const sw=d.getElementById('sw'),md=d.getElementById('mode');
sw.onclick=()=>{const on=sw.dataset.m!=='local';sw.dataset.m=on?'local':'online';md.textContent=on?'Local':'Online';sw.textContent=on?'Cambiar a modo online':'Cambiar a modo local'};
// Esfera holográfica
const c=d.getElementById('core'),x=c.getContext('2d'),S=c.width,Rr=S*.3,N=700,P=[];
for(let i=0;i<N;i++){const y=1-2*(i+.5)/N,r=Math.sqrt(1-y*y),t=i*2.399963;P.push([Math.cos(t)*r,y,Math.sin(t)*r])}
const F=[];for(let i=0;i<60;i++)F.push([Math.random()*6.283,Rr*(1.3+Math.random()*.7),Math.random()*6.283,.4+Math.random()*1.4]);
let a=0,mx=0,my=0,vis=true;
c.onpointermove=e=>{const k=c.getBoundingClientRect();mx=((e.clientX-k.left)/k.width-.5)*.9;my=((e.clientY-k.top)/k.height-.5)*.9};
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(c);
function draw(){x.clearRect(0,0,S,S);const cx=S/2;
 let g=x.createRadialGradient(cx,cx,0,cx,cx,Rr*1.7);g.addColorStop(0,'rgba(0,229,255,.32)');g.addColorStop(.45,'rgba(10,108,255,.16)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,S,S);
 const ca=Math.cos(a+mx),sa=Math.sin(a+mx),cb=Math.cos(my),sb=Math.sin(my);
 for(const p of P){let X=p[0]*ca-p[2]*sa,Z=p[0]*sa+p[2]*ca,Y=p[1]*cb-Z*sb;Z=p[1]*sb+Z*cb;const dd=(Z+1)/2,s=Rr*(1+Z*.1);x.globalAlpha=.2+dd*.8;x.fillStyle=dd>.55?'#00e5ff':'#0a6cff';x.beginPath();x.arc(cx+X*s,cx+Y*s,.8+dd*1.9,0,6.283);x.fill()}
 x.globalAlpha=1;x.lineWidth=1.6;
 for(let k=0;k<3;k++){x.save();x.translate(cx,cx);x.rotate(a*(k%2?-.7:.55)+k*1.05);x.scale(1,.26+k*.13);x.strokeStyle=k==1?'rgba(0,229,255,.7)':'rgba(10,108,255,.7)';x.shadowColor='#00e5ff';x.shadowBlur=12;x.beginPath();x.arc(0,0,Rr*(1.2+k*.1),0,6.283);x.stroke();x.restore()}
 for(const f of F){const t=f[0]+a*f[3];x.globalAlpha=.7;x.fillStyle='#fff';x.fillRect(cx+Math.cos(t)*f[1],cx+Math.sin(t+f[2])*f[1]*.6,1.8,1.8)}
 x.globalAlpha=1;x.shadowColor='#00e5ff';x.shadowBlur=36;x.fillStyle='#fff';x.beginPath();x.arc(cx,cx,Rr*.1*(R?1:1+Math.sin(a*4)*.08),0,6.283);x.fill();x.shadowBlur=0}
draw();if(!R)(function L(){if(vis&&!d.hidden){a+=.004;draw()}requestAnimationFrame(L)})();
})();
