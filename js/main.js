const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
},{threshold:.1});
cards.forEach(c=>io.observe(c));

const links = document.querySelectorAll('#railList a');
const sectionsEls = [...links].map(l=>document.querySelector(l.getAttribute('href')));
const navIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = '#'+entry.target.id;
      links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')===id));
    }
  });
},{rootMargin:'-20% 0px -70% 0px'});
sectionsEls.forEach(s=> s && navIO.observe(s));
