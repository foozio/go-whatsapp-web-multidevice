// Sticky header behaviors: collapse on scroll and breadcrumb active state
(function(){
  const topbar = document.querySelector('.app-topbar');
  const links = Array.from(document.querySelectorAll('.breadcrumbs a[href^="#"]'));
  if(!topbar || !links.length) return;

  // Smooth scroll with offset for sticky header
  function scrollToEl(el){
    const headerH = topbar.getBoundingClientRect().height || 48;
    const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
    window.scrollTo({ top, behavior: 'smooth' });
  }
  links.forEach(a => a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){ e.preventDefault(); scrollToEl(el); }
  }));

  let sections = [];
  function recalc(){
    sections = links.map(a => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      return el ? { el, link: a } : null;
    }).filter(Boolean);
    onScroll();
  }

  function onScroll(){
    // Collapse header past threshold
    const threshold = 60;
    if(window.scrollY > threshold) topbar.classList.add('collapsed');
    else topbar.classList.remove('collapsed');

    // Active breadcrumb
    const headerH = topbar.getBoundingClientRect().height || 48;
    const pos = window.scrollY + headerH + 10;
    let current = sections[0];
    for(const s of sections){
      const top = s.el.getBoundingClientRect().top + window.scrollY;
      if(top <= pos) current = s; else break;
    }
    links.forEach(a => a.classList.remove('active'));
    if(current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', recalc);
  window.addEventListener('load', ()=>{
    recalc();
    // Adjust initial hash navigation with offset
    if(location.hash){
      const el = document.querySelector(location.hash);
      if(el){
        const headerH = topbar.getBoundingClientRect().height || 48;
        const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
        window.scrollTo({ top, behavior: 'auto' });
        onScroll();
      }
    }
  });
  recalc();
})();
