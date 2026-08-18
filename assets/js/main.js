// Main JS: before/after slider, booking form, contact form, footer include

// Footer include: fetch footer.html and inject into #siteFooter
(function(){
  async function loadFooter(){
    try{
      const resp = await fetch('/footer.html');
      if(resp.ok){
        const html = await resp.text();
        document.getElementById('siteFooter').innerHTML = html;
      }
    }catch(e){
      // silently fail — footer is non-critical
      console.warn('Footer include failed', e);
    }
  }
  loadFooter();
})();

// Before/after slider (accessible)
(function(){
  const range = document.getElementById('baRange');
  const after = document.getElementById('baAfter');
  const handle = document.getElementById('baHandle');
  if(!range || !after || !handle) return;

  range.setAttribute('role', 'slider');
  range.setAttribute('aria-valuemin', '0');
  range.setAttribute('aria-valuemax', '100');
  range.setAttribute('aria-valuenow', range.value);
  range.setAttribute('aria-label', 'Before and after comparison');

  function update(v){
    after.style.clipPath = `inset(0 0 0 ${v}%)`;
    handle.style.left = v + '%';
    range.setAttribute('aria-valuenow', v);
  }

  range.addEventListener('input', e => update(e.target.value));
  range.addEventListener('keydown', e => {
    let v = Number(range.value);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); v = Math.max(0, v - 1); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); v = Math.min(100, v + 1); }
    if (e.key === 'PageDown') { e.preventDefault(); v = Math.max(0, v - 10); }
    if (e.key === 'PageUp') { e.preventDefault(); v = Math.min(100, v + 10); }
    if (e.key === 'Home') { e.preventDefault(); v = 0; }
    if (e.key === 'End') { e.preventDefault(); v = 100; }
    update(v);
    range.value = v;
  });

  // initialize
  update(range.value || 50);
})();

// Booking form — Formspree submit (replace YOUR_FORM_ID)
(function(){
  const form = document.getElementById('bookForm');
  if(!form) return;
  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('button[type="submit"]');
  const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  function setStatus(text, cls){
    if(!status) return;
    status.textContent = text;
    status.className = 'form-status ' + (cls || '');
  }

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    setStatus('Sending…');
    if(submitBtn){ submitBtn.disabled = true; submitBtn.setAttribute('aria-busy','true'); }
    try{
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if(res.ok){
        setStatus("Thanks — we'll be in touch shortly to confirm.", 'ok');
        form.reset();
      } else {
        let msg = 'Form is not connected yet — please call/text (507) 978-0537 for now.';
        try{ const json = await res.json(); if(json && json.error) msg = json.error; }catch(_){}
        setStatus(msg, 'err');
      }
    }catch(err){
      setStatus('Network error — please call/text (507) 978-0537.', 'err');
    }finally{
      if(submitBtn){ submitBtn.disabled = false; submitBtn.removeAttribute('aria-busy'); }
    }
  });
})();

// Contact form handler (simple, posts to Formspree same endpoint placeholder)
(function(){
  const cForm = document.getElementById('contactForm');
  if(!cForm) return;
  const status = document.getElementById('contactStatus');
  const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
  const btn = cForm.querySelector('button[type="submit"]');

  function setStatus(text, cls){ if(!status) return; status.textContent = text; status.className = 'form-status ' + (cls || ''); }

  cForm.addEventListener('submit', async function(e){
    e.preventDefault();
    setStatus('Sending…');
    if(btn){ btn.disabled = true; btn.setAttribute('aria-busy','true'); }
    try{
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(cForm) });
      if(res.ok){ setStatus('Message sent — we will be in touch.', 'ok'); cForm.reset(); }
      else{ setStatus('Form not connected — please call/text (507) 978-0537', 'err'); }
    }catch(e){ setStatus('Network error — please call/text (507) 978-0537', 'err'); }
    finally{ if(btn){ btn.disabled = false; btn.removeAttribute('aria-busy'); } }
  });
})();

// Active nav link highlighting
(function(){
  try{
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(a => {
      if(location.pathname.endsWith(a.getAttribute('href')) || location.pathname === a.getAttribute('href')){
        a.classList.add('active');
      }
    });
  }catch(e){}
})();
