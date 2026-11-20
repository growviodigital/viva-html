const nav=document.getElementById('nav'),mb=document.getElementById('menu');
mb&&mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
document.querySelectorAll('.pick button').forEach(b=>b.addEventListener('click',()=>{
 document.documentElement.style.setProperty('--fab',b.dataset.c);
 document.querySelectorAll('.pick button').forEach(x=>x.setAttribute('aria-pressed',x===b));
 document.getElementById('shade').textContent=b.getAttribute('aria-label')}));
const f=document.getElementById('enq');
f&&f.addEventListener('submit',e=>{e.preventDefault();f.querySelectorAll('input,select,textarea,button').forEach(x=>x.disabled=false);
 const d=new FormData(f),body=`Name: ${d.get('name')}%0AEmail: ${d.get('email')}%0APhone: ${d.get('phone')}%0ATopic: ${d.get('topic')}%0A%0A${encodeURIComponent(d.get('msg'))}`;
 document.getElementById('ok').style.display='block';
 window.location.href=`mailto:vivatex@me.com?subject=${encodeURIComponent('Enquiry: '+d.get('topic'))}&body=${body}`;f.reset()});
/* animations */
document.documentElement.classList.add('js');
const pg=document.createElement('div');pg.id='prog';document.body.prepend(pg);
const tp=document.createElement('button');tp.id='top';tp.setAttribute('aria-label','Back to top');tp.textContent='\u2191';document.body.append(tp);
tp.onclick=()=>scrollTo({top:0});
addEventListener('scroll',()=>{const h=document.documentElement;pg.style.width=scrollY/(h.scrollHeight-innerHeight)*100+'%';tp.classList.toggle('on',scrollY>600)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 if(e.target.dataset.n){const t=+e.target.dataset.n;let i=0;const s=setInterval(()=>{e.target.textContent=++i;if(i>=t)clearInterval(s)},1500/t)}}),{threshold:.15});
document.querySelectorAll('main section:not(.hero) .card,main section:not(.hero) h2,main section:not(.hero) details,.steps li,.stats>div,.tags,.map,.grid2>div,.grid2>p,.gal figure').forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--d',(i%3)*.12+'s');io.observe(el)});
document.querySelectorAll('[data-n]').forEach(n=>io.observe(n));
