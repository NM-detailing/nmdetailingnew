[index.html](https://github.com/user-attachments/files/31201167/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NM Premium Detailing | North Mankato's Premium Mobile Car Detailing</title>
<meta name="description" content="Premium mobile car detailing in North Mankato, MN. Interior, exterior, and full detail packages built to protect your paint through Minnesota winters. Starting at $149.">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg-deep:#070D18;
    --bg-panel:#0F1E33;
    --bg-panel-2:#142A47;
    --chrome-100:#EDF1F5;
    --chrome-300:#C4CDD8;
    --chrome-400:#96A5B8;
    --chrome-600:#4A5A70;
    --blue-500:#2F6FFF;
    --blue-400:#5C8CFF;
    --blue-300:#8FB3FF;
    --border:rgba(150,165,184,0.16);
    --chrome-grad:linear-gradient(115deg,#AEB9C4 0%,#F4F7F9 22%,#8B97A6 45%,#F4F7F9 68%,#AEB9C4 100%);
    --font-display:'Oswald',sans-serif;
    --font-body:'Manrope',sans-serif;
    --font-mono:'JetBrains Mono',monospace;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg-deep);
    color:var(--chrome-100);
    font-family:var(--font-body);
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  img{max-width:100%;display:block;}
  a{color:inherit;text-decoration:none;}
  ul{list-style:none;}
  .container{max-width:1180px;margin:0 auto;padding:0 24px;}
  section{padding:96px 0;position:relative;}
  @media (max-width:720px){ section{padding:64px 0;} }

  h1,h2,h3{font-family:var(--font-display);text-transform:uppercase;font-weight:600;line-height:1.08;letter-spacing:0.01em;}
  .eyebrow{
    font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;
    color:var(--blue-300);display:flex;align-items:center;gap:10px;margin-bottom:18px;
  }
  .eyebrow::before{content:'';width:26px;height:2px;background:var(--blue-400);flex-shrink:0;}
  .section-head{max-width:640px;margin-bottom:52px;}
  .section-head h2{font-size:clamp(1.7rem,3.6vw,2.6rem);margin-bottom:14px;}
  .section-head p{color:var(--chrome-400);font-size:1.05rem;}
  .chrome-text{
    background:var(--chrome-grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;
    animation:chromeShift 7s ease-in-out infinite;
  }
  @keyframes chromeShift{0%,100%{background-position:0% 50%;}50%{background-position:100% 50%;}}

  :focus-visible{outline:2px solid var(--blue-400);outline-offset:3px;}

  /* ---------- BUTTONS ---------- */
  .btn{
    font-family:var(--font-mono);font-size:0.92rem;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
    padding:16px 30px;border-radius:6px;border:1px solid transparent;cursor:pointer;display:inline-flex;align-items:center;gap:10px;
    position:relative;overflow:hidden;transition:transform .18s ease,box-shadow .18s ease;white-space:nowrap;
  }
  .btn::after{
    content:'';position:absolute;top:0;left:-120%;width:60%;height:100%;
    background:linear-gradient(115deg,transparent,rgba(255,255,255,0.35),transparent);
    transform:skewX(-20deg);transition:left .55s ease;
  }
  .btn:hover::after{left:130%;}
  .btn-primary{background:var(--blue-500);color:#fff;box-shadow:0 8px 24px -6px rgba(47,111,255,0.55);}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 28px -6px rgba(47,111,255,0.7);}
  .btn-chrome{background:var(--chrome-grad);color:#0B1220;box-shadow:0 8px 20px -8px rgba(0,0,0,0.5);}
  .btn-chrome:hover{transform:translateY(-2px);}
  .btn-outline{background:transparent;color:var(--chrome-100);border-color:var(--chrome-600);}
  .btn-outline:hover{border-color:var(--blue-400);color:var(--blue-300);}
  .btn-block{width:100%;justify-content:center;}

  /* ---------- HEADER ---------- */
  header{
    position:sticky;top:0;z-index:100;background:rgba(7,13,24,0.88);backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
  }
  .nav{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;max-width:1180px;margin:0 auto;gap:20px;}
  .brand{display:flex;align-items:center;gap:12px;}
  .brand img{height:42px;width:auto;}
  .brand-name{font-family:var(--font-display);font-size:0.95rem;letter-spacing:0.05em;text-transform:uppercase;line-height:1.1;}
  .brand-name span{display:block;font-family:var(--font-mono);font-size:0.62rem;color:var(--chrome-400);letter-spacing:0.16em;text-transform:uppercase;margin-top:2px;}
  .nav-links{display:flex;gap:32px;font-size:0.92rem;color:var(--chrome-300);}
  .nav-links a:hover{color:var(--blue-300);}
  .nav-cta{display:flex;align-items:center;}
  .nav-cta .btn{padding:12px 20px;font-size:0.85rem;}
  @media (max-width:800px){ .nav-links{display:none;} }
  @media (max-width:480px){ .brand-name{display:none;} .nav-cta .btn span.full{display:none;} }

  /* ---------- HERO ---------- */
  .hero{
    padding:120px 0 100px;position:relative;
    background:
      linear-gradient(180deg,rgba(7,13,24,0.55) 0%,rgba(7,13,24,0.92) 75%,var(--bg-deep) 100%),
      repeating-linear-gradient(120deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 40px);
    overflow:hidden;
  }
  .hero-photo-slot{
    position:absolute;inset:0;z-index:-1;
    background:
      linear-gradient(180deg,rgba(7,13,24,0.35),rgba(7,13,24,0.95)),
      repeating-linear-gradient(45deg,#0B1729 0 18px,#0D1B30 18px 36px);
    display:flex;align-items:flex-start;justify-content:center;padding-top:40px;
  }
  .hero-photo-slot .slot-label{
    font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.1em;color:var(--chrome-600);
    border:1px dashed var(--chrome-600);padding:8px 14px;border-radius:4px;text-transform:uppercase;
  }
  .hero::before{
    content:'';position:absolute;top:-20%;left:-30%;width:60%;height:160%;
    background:linear-gradient(100deg,transparent 40%,rgba(143,179,255,0.14) 48%,rgba(237,241,245,0.22) 50%,rgba(143,179,255,0.14) 52%,transparent 60%);
    animation:sweep 8s ease-in-out infinite;pointer-events:none;
  }
  @keyframes sweep{0%{transform:translateX(-20%) rotate(8deg);}50%{transform:translateX(160%) rotate(8deg);}100%{transform:translateX(-20%) rotate(8deg);}}
  @media (prefers-reduced-motion:reduce){ .hero::before,.chrome-text{animation:none;} }
  .hero-inner{max-width:760px;}
  .hero h1{font-size:clamp(2.3rem,5.6vw,4.1rem);margin-bottom:22px;}
  .hero-sub{font-size:1.15rem;color:var(--chrome-300);max-width:560px;margin-bottom:38px;}
  .hero-sub strong{color:var(--chrome-100);font-family:var(--font-mono);font-weight:600;}
  .hero-actions{display:flex;gap:16px;flex-wrap:wrap;}

  /* ---------- BEFORE/AFTER ---------- */
  .ba-wrap{background:var(--bg-panel);}
  .ba-slider{max-width:820px;margin:0 auto;}
  .ba-frame{
    position:relative;aspect-ratio:16/10;border-radius:10px;overflow:hidden;border:1px solid var(--border);
    box-shadow:0 30px 60px -20px rgba(0,0,0,0.6);
  }
  .ba-img{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;}
  .ba-before{background:repeating-linear-gradient(135deg,#101F36 0 16px,#0B1729 16px 32px);}
  .ba-after{background:repeating-linear-gradient(135deg,#16304F 0 16px,#0F2340 16px 32px);}
  .ba-tag{
    position:absolute;top:16px;font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.12em;
    background:rgba(7,13,24,0.7);border:1px solid var(--border);padding:6px 12px;border-radius:4px;
  }
  .ba-before .ba-tag{left:16px;}
  .ba-after .ba-tag{right:16px;}
  .ba-caption{font-family:var(--font-mono);font-size:0.78rem;color:var(--chrome-400);max-width:220px;}
  .ba-after{clip-path:inset(0 0 0 50%);}
  .ba-handle{
    position:absolute;top:0;bottom:0;left:50%;width:3px;background:var(--chrome-grad);
    transform:translateX(-50%);pointer-events:none;box-shadow:0 0 12px rgba(143,179,255,0.6);
  }
  .ba-handle::after{
    content:'⟷';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:42px;height:42px;background:var(--chrome-grad);color:#0B1220;border-radius:50%;
    display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:700;
    box-shadow:0 6px 16px rgba(0,0,0,0.5);
  }
  .ba-range{
    width:100%;margin-top:22px;-webkit-appearance:none;appearance:none;height:4px;border-radius:4px;
    background:var(--chrome-600);outline:none;cursor:ew-resize;
  }
  .ba-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--chrome-grad);border:2px solid var(--bg-deep);cursor:ew-resize;}
  .ba-range::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--chrome-300);border:2px solid var(--bg-deep);cursor:ew-resize;}
  .ba-hint{text-align:center;font-family:var(--font-mono);font-size:0.75rem;color:var(--chrome-400);margin-top:14px;}

  /* ---------- PRICING ---------- */
  .tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  @media (max-width:900px){ .tiers{grid-template-columns:1fr;max-width:440px;margin:0 auto;} }
  .tier{
    background:var(--bg-panel);border:1px solid var(--border);border-radius:12px;overflow:hidden;
    display:flex;flex-direction:column;transition:transform .2s ease,border-color .2s ease;
  }
  .tier:hover{transform:translateY(-4px);border-color:var(--chrome-600);}
  .tier-featured{border-color:var(--blue-400);box-shadow:0 0 0 1px var(--blue-400),0 24px 48px -20px rgba(47,111,255,0.4);}
  .tier-photo{
    aspect-ratio:16/10;background:repeating-linear-gradient(135deg,#101F36 0 14px,#0B1729 14px 28px);
    display:flex;align-items:center;justify-content:center;padding:16px;position:relative;
  }
  .tier-badge{
    position:absolute;top:14px;right:14px;background:var(--blue-500);color:#fff;font-family:var(--font-mono);
    font-size:0.65rem;letter-spacing:0.08em;padding:5px 10px;border-radius:4px;text-transform:uppercase;
  }
  .tier-body{padding:28px;display:flex;flex-direction:column;flex:1;gap:16px;}
  .tier-name{font-size:1.35rem;}
  .tier-price{font-family:var(--font-mono);font-size:2.1rem;font-weight:600;color:var(--chrome-100);}
  .tier-price sup{font-size:0.9rem;color:var(--chrome-400);font-weight:400;margin-right:4px;}
  .tier-price .set-price{font-size:1.1rem;color:var(--chrome-600);}
  .price-note{font-family:var(--font-mono);font-size:0.7rem;color:var(--blue-300);letter-spacing:0.04em;}
  .tier-desc{color:var(--chrome-400);font-size:0.95rem;}
  .tier-list{display:flex;flex-direction:column;gap:10px;margin-top:4px;flex:1;}
  .tier-list li{font-size:0.92rem;color:var(--chrome-300);display:flex;gap:10px;align-items:flex-start;}
  .tier-list li::before{content:'✓';color:var(--blue-400);font-weight:700;flex-shrink:0;}
  .addon-note{
    margin-top:36px;text-align:center;color:var(--chrome-400);font-size:0.95rem;
    border-top:1px solid var(--border);padding-top:28px;
  }
  .addon-note strong{color:var(--chrome-100);}

  /* ---------- PROCESS ---------- */
  .process-wrap{background:var(--bg-panel);}
  .process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}
  @media (max-width:800px){ .process-grid{grid-template-columns:1fr;} }
  .process-step{position:relative;padding-top:8px;}
  .process-num{font-family:var(--font-mono);font-size:0.95rem;color:var(--blue-300);letter-spacing:0.08em;margin-bottom:14px;display:block;}
  .process-step h3{font-size:1.2rem;margin-bottom:10px;}
  .process-step p{color:var(--chrome-400);font-size:0.95rem;}

  /* ---------- TESTIMONIALS ---------- */
  .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  @media (max-width:900px){ .testi-grid{grid-template-columns:1fr;max-width:440px;margin:0 auto;} }
  .testi-card{
    background:var(--bg-panel);border:1px dashed var(--chrome-600);border-radius:10px;padding:26px;
    display:flex;flex-direction:column;gap:14px;
  }
  .testi-stars{color:var(--blue-300);letter-spacing:2px;font-size:0.95rem;}
  .testi-quote{color:var(--chrome-300);font-size:0.95rem;font-style:italic;}
  .testi-name{font-family:var(--font-mono);font-size:0.78rem;color:var(--chrome-600);text-transform:uppercase;letter-spacing:0.06em;}
  .testi-flag{font-family:var(--font-mono);font-size:0.65rem;color:var(--blue-300);letter-spacing:0.1em;text-transform:uppercase;}

  /* ---------- BOOKING FORM ---------- */
  .book-wrap{background:linear-gradient(180deg,var(--bg-panel) 0%,var(--bg-deep) 100%);}
  .book-grid{display:grid;grid-template-columns:0.9fr 1.1fr;gap:56px;align-items:start;}
  @media (max-width:860px){ .book-grid{grid-template-columns:1fr;} }
  .book-info h2{font-size:clamp(1.7rem,3.6vw,2.4rem);margin-bottom:18px;}
  .book-info p{color:var(--chrome-400);margin-bottom:28px;}
  .book-info-row{display:flex;align-items:center;gap:14px;margin-bottom:18px;font-family:var(--font-mono);font-size:0.95rem;}
  .book-info-row .ic{
    width:38px;height:38px;border-radius:8px;background:var(--bg-panel-2);border:1px solid var(--border);
    display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--blue-300);
  }
  form.book-form{
    background:var(--bg-panel-2);border:1px solid var(--border);border-radius:14px;padding:36px;
    display:flex;flex-direction:column;gap:18px;
  }
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
  @media (max-width:520px){ .form-row{grid-template-columns:1fr;} }
  .field{display:flex;flex-direction:column;gap:8px;}
  .field label{font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--chrome-400);}
  .field input,.field select,.field textarea{
    background:var(--bg-deep);border:1px solid var(--chrome-600);border-radius:7px;padding:13px 14px;
    color:var(--chrome-100);font-family:var(--font-body);font-size:0.95rem;
  }
  .field input:focus,.field select:focus,.field textarea:focus{border-color:var(--blue-400);}
  .field textarea{resize:vertical;min-height:80px;}
  .form-note{font-size:0.78rem;color:var(--chrome-600);text-align:center;}
  .form-status{font-family:var(--font-mono);font-size:0.85rem;text-align:center;min-height:1.2em;}
  .form-status.ok{color:#7CD9A0;}
  .form-status.err{color:#FF8A8A;}

  /* ---------- FOOTER ---------- */
  footer{border-top:1px solid var(--border);padding:56px 0 32px;background:var(--bg-deep);}
  .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px;margin-bottom:40px;}
  @media (max-width:720px){ .foot-grid{grid-template-columns:1fr;gap:32px;} }
  .foot-brand{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
  .foot-brand img{height:38px;}
  .foot-brand span{font-family:var(--font-display);text-transform:uppercase;font-size:0.95rem;letter-spacing:0.05em;}
  footer p{color:var(--chrome-400);font-size:0.9rem;}
  footer h4{font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--chrome-400);margin-bottom:16px;}
  footer .foot-links li{margin-bottom:10px;font-size:0.92rem;}
  footer .foot-links a:hover{color:var(--blue-300);}
  .foot-todo{color:var(--blue-300);font-family:var(--font-mono);font-size:0.8rem;}
  .foot-bottom{border-top:1px solid var(--border);padding-top:24px;font-size:0.8rem;color:var(--chrome-600);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;}
</style>
</head>
<body>

<header>
  <div class="nav">
    <a href="#top" class="brand">
      <img src="data:image/png;base64,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" alt="NM Premium Detailing logo">
      <span class="brand-name">NM Premium<span>North Mankato</span></span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#services">Services</a>
      <a href="#before-after">Gallery</a>
      <a href="#reviews">Reviews</a>
      <a href="#book">Book Now</a>
    </nav>
    <div class="nav-cta">
      <a class="btn btn-chrome" href="tel:5079780537">📞 <span class="full">(507) 978-0537</span></a>
    </div>
  </div>
</header>

<main id="top">

  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="hero-photo-slot" aria-hidden="true">
      <span class="slot-label">◈ Hero photo — 1920×1080 — freshly detailed car, wide shot</span>
    </div>
    <div class="container hero-inner">
      <div class="eyebrow">North Mankato · Premium Mobile Detailing</div>
      <h1>Shine That Holds Up To A <span class="chrome-text">Minnesota Winter.</span></h1>
      <p class="hero-sub">We come to you in North Mankato and the surrounding area with full interior and exterior detailing that protects your paint — and your investment. Packages <strong>starting at $149</strong>.</p>
      <div class="hero-actions">
        <a href="#book" class="btn btn-primary">Book Now →</a>
        <a href="tel:5079780537" class="btn btn-outline">Call (507) 978-0537</a>
      </div>
    </div>
  </section>

  <!-- ================= BEFORE / AFTER ================= -->
  <section class="ba-wrap" id="before-after">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">See The Difference</div>
        <h2>Real Results, Every Detail.</h2>
        <p>Drag the slider. (This is a placeholder pair — swap in your own before/after shot below.)</p>
      </div>
      <div class="ba-slider">
        <div class="ba-frame">
          <div class="ba-img ba-before">
            <span class="ba-tag">BEFORE</span>
            <span class="ba-caption">◈ Photo slot — 1200×750 — dirty/dull vehicle, straight-on angle</span>
          </div>
          <div class="ba-img ba-after" id="baAfter">
            <span class="ba-tag">AFTER</span>
            <span class="ba-caption">◈ Photo slot — same angle — freshly detailed result</span>
          </div>
          <div class="ba-handle" id="baHandle"></div>
        </div>
        <input type="range" min="0" max="100" value="50" class="ba-range" id="baRange" aria-label="Drag to compare before and after photos">
        <p class="ba-hint">Use your mouse, finger, or arrow keys to compare</p>
      </div>
    </div>
  </section>

  <!-- ================= PRICING / SERVICES ================= -->
  <section id="services">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">Packages &amp; Pricing</div>
        <h2>Built For Every Level Of Shine.</h2>
        <p>Three packages, priced for what your vehicle actually needs — not a one-size-fits-all wash.</p>
      </div>
      <div class="tiers">

        <div class="tier">
          <div class="tier-photo"><span class="slot-label">◈ Photo — 800×500 — exterior wash in progress</span></div>
          <div class="tier-body">
            <h3 class="tier-name">Maintenance</h3>
            <div class="tier-price"><sup>Starting at</sup>$149</div>
            <p class="tier-desc">A thorough refresh for cars that just need the grime knocked back.</p>
            <ul class="tier-list">
              <li>Full exterior hand wash &amp; dry</li>
              <li>Wheels &amp; tires cleaned</li>
              <li>Interior vacuum</li>
              <li>Dash &amp; console wipe-down</li>
              <li>Windows cleaned inside &amp; out</li>
            </ul>
          </div>
        </div>

        <div class="tier tier-featured">
          <div class="tier-photo">
            <span class="tier-badge">Most Popular</span>
            <span class="slot-label">◈ Photo — 800×500 — interior shampoo/detail shot</span>
          </div>
          <div class="tier-body">
            <h3 class="tier-name">Exclusive</h3>
            <div class="tier-price"><span class="set-price">$———</span></div>
            <div class="price-note">◆ set your price here</div>
            <p class="tier-desc">Deeper interior detail plus paint decontamination for a noticeably sharper finish.</p>
            <ul class="tier-list">
              <li>Everything in Maintenance</li>
              <li>Clay bar paint decontamination</li>
              <li>Interior shampoo (carpets &amp; mats)</li>
              <li>Leather &amp; vinyl conditioning</li>
              <li>Streak-free glass + trim dressing</li>
            </ul>
          </div>
        </div>

        <div class="tier">
          <div class="tier-photo"><span class="slot-label">◈ Photo — 800×500 — paint correction/gloss shot</span></div>
          <div class="tier-body">
            <h3 class="tier-name">Presidential</h3>
            <div class="tier-price"><span class="set-price">$———</span></div>
            <div class="price-note">◆ set your price here</div>
            <p class="tier-desc">The full showroom treatment, built to protect your finish through a Minnesota winter.</p>
            <ul class="tier-list">
              <li>Everything in Exclusive</li>
              <li>Full paint correction &amp; gloss enhancement</li>
              <li>Ceramic-grade paint protection</li>
              <li>Deep steam clean + embedded pet hair removal</li>
              <li>Engine bay detail</li>
            </ul>
          </div>
        </div>

      </div>
      <p class="addon-note"><strong>Also offering window cleaning</strong> — ask about seasonal availability when you book.</p>
    </div>
  </section>

  <!-- ================= PROCESS ================= -->
  <section class="process-wrap">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">How It Works</div>
        <h2>From Booked To Showroom-Fresh.</h2>
      </div>
      <div class="process-grid">
        <div class="process-step">
          <span class="process-num">01 / Book</span>
          <h3>Tell Us About Your Car</h3>
          <p>Fill out the form below or call/text (507) 978-0537 with your vehicle and what it needs.</p>
        </div>
        <div class="process-step">
          <span class="process-num">02 / We Come To You</span>
          <h3>Mobile, By Design</h3>
          <p>We arrive at your home or office in North Mankato and the surrounding area with everything we need.</p>
        </div>
        <div class="process-step">
          <span class="process-num">03 / Detail &amp; Protect</span>
          <h3>We Get To Work</h3>
          <p>Interior, exterior, and protection — then we walk you through the results before we go.</p>
        </div>
      </div>
      <div style="text-align:center;margin-top:48px;">
        <a href="#book" class="btn btn-primary">Book Now →</a>
      </div>
    </div>
  </section>

  <!-- ================= TESTIMONIALS ================= -->
  <section id="reviews">
    <div class="container">
      <div class="section-head">
        <div class="eyebrow">What Customers Say</div>
        <h2>Don't Take Our Word For It.</h2>
        <p>These three cards are placeholders — swap each one for a real customer quote before you publish.</p>
      </div>
      <div class="testi-grid">
        <div class="testi-card">
          <span class="testi-flag">Sample review — replace me</span>
          <div class="testi-stars">★★★★★</div>
          <p class="testi-quote">"[Add a real customer quote here — what they said about the results.]"</p>
          <div class="testi-name">— Add Customer Name</div>
        </div>
        <div class="testi-card">
          <span class="testi-flag">Sample review — replace me</span>
          <div class="testi-stars">★★★★★</div>
          <p class="testi-quote">"[Add a real customer quote here — mention a specific service if you can.]"</p>
          <div class="testi-name">— Add Customer Name</div>
        </div>
        <div class="testi-card">
          <span class="testi-flag">Sample review — replace me</span>
          <div class="testi-stars">★★★★★</div>
          <p class="testi-quote">"[Add a real customer quote here — a repeat customer is great social proof.]"</p>
          <div class="testi-name">— Add Customer Name</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= BOOKING FORM ================= -->
  <section class="book-wrap" id="book">
    <div class="container">
      <div class="book-grid">
        <div class="book-info">
          <div class="eyebrow">Book Your Detail</div>
          <h2>Ready For A Fresh Start?</h2>
          <p>Fill out the form and we'll text or call you back to confirm a time — usually same day.</p>
          <div class="book-info-row"><span class="ic">📞</span> <a href="tel:5079780537">(507) 978-0537</a></div>
          <div class="book-info-row"><span class="ic">📍</span> North Mankato, MN &amp; surrounding area</div>
          <div class="book-info-row"><span class="ic">⏱</span> Most bookings confirmed same day</div>
        </div>

        <form class="book-form" id="bookForm">
          <div class="form-row">
            <div class="field">
              <label for="fName">Full Name</label>
              <input id="fName" name="name" type="text" required autocomplete="name">
            </div>
            <div class="field">
              <label for="fPhone">Phone</label>
              <input id="fPhone" name="phone" type="tel" required autocomplete="tel">
            </div>
          </div>
          <div class="field">
            <label for="fEmail">Email (optional)</label>
            <input id="fEmail" name="email" type="email" autocomplete="email">
          </div>
          <div class="field">
            <label for="fVehicle">Vehicle Make &amp; Model</label>
            <input id="fVehicle" name="vehicle" type="text" placeholder="e.g. 2021 Ford F-150" required>
          </div>
          <div class="form-row">
            <div class="field">
              <label for="fService">Service</label>
              <select id="fService" name="service" required>
                <option value="">Select a package</option>
                <option>Maintenance</option>
                <option>Exclusive</option>
                <option>Presidential</option>
                <option>Window Cleaning</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div class="field">
              <label for="fDate">Preferred Date</label>
              <input id="fDate" name="date" type="date">
            </div>
          </div>
          <div class="field">
            <label for="fNotes">Notes (optional)</label>
            <textarea id="fNotes" name="notes" placeholder="Anything we should know? Pet hair, stains, tight timeline, etc."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Book Now</button>
          <p class="form-status" id="formStatus"></p>
          <p class="form-note">Prefer to skip the form? Call or text (507) 978-0537.</p>
        </form>
      </div>
    </div>
  </section>

</main>

<footer>
  <div class="container">
    <div class="foot-grid">
      <div>
        <div class="foot-brand">
          <img src="data:image/png;base64,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" alt="NM Premium Detailing logo">
          <span>NM Premium Detailing</span>
        </div>
        <p>Premium mobile car detailing based in North Mankato, Minnesota.</p>
      </div>
      <div>
        <h4>Contact</h4>
        <ul class="foot-links">
          <li><a href="tel:5079780537">(507) 978-0537</a></li>
          <li>North Mankato, MN &amp; surrounding area</li>
          <li class="foot-todo">◆ add your hours</li>
          <li class="foot-todo">◆ add your Facebook link</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="foot-links">
          <li><a href="#services">Packages &amp; Pricing</a></li>
          <li><a href="#before-after">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#book">Book Now</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 NM Premium Detailing. All rights reserved.</span>
      <span>North Mankato, MN</span>
    </div>
  </div>
</footer>

<script>
  // Before/after slider
  (function(){
    const range = document.getElementById('baRange');
    const after = document.getElementById('baAfter');
    const handle = document.getElementById('baHandle');
    function update(v){
      after.style.clipPath = `inset(0 0 0 ${v}%)`;
      handle.style.left = v + '%';
    }
    range.addEventListener('input', e => update(e.target.value));
    update(50);
  })();

  // Booking form — Formspree submit (replace YOUR_FORM_ID below)
  (function(){
    const form = document.getElementById('bookForm');
    const status = document.getElementById('formStatus');
    const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    form.addEventListener('submit', async function(e){
      e.preventDefault();
      status.textContent = 'Sending…';
      status.className = 'form-status';
      try{
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if(res.ok){
          status.textContent = "Thanks — we'll be in touch shortly to confirm.";
          status.className = 'form-status ok';
          form.reset();
        } else {
          throw new Error('Form endpoint not set up yet');
        }
      } catch(err){
        status.textContent = 'Form is not connected yet — please call/text (507) 978-0537 for now.';
        status.className = 'form-status err';
      }
    });
  })();
</script>

</body>
</html>
