/* ═══════════════════════════════════════════════════
   THE VELVETEEN PROJECT — main.js
   Animations, interactions, terminal simulation
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Grid Canvas background ──────────────────────────
  const canvas = document.getElementById('grid-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function resizeCanvas() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    drawGrid();
  }

  function drawGrid() {
    ctx.clearRect(0, 0, W, H);
    const S = 48;
    ctx.strokeStyle = 'rgba(87,241,219,0.07)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += S) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += S) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    // Dots at intersections
    ctx.fillStyle = 'rgba(87,241,219,0.18)';
    for (let x = 0; x <= W; x += S)
      for (let y = 0; y <= H; y += S) {
        ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI*2); ctx.fill();
      }
  }

  resizeCanvas();
  let rto; window.addEventListener('resize', () => { clearTimeout(rto); rto = setTimeout(resizeCanvas, 150); });


  // ── Scroll-activated navbar ─────────────────────────
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });


  // ── Mobile menu ─────────────────────────────────────
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer  = document.getElementById('mobile-drawer');

  mobileMenuBtn?.addEventListener('click', () => {
    const open = mobileMenuBtn.classList.toggle('open');
    mobileDrawer.classList.toggle('open', open);
    mobileMenuBtn.setAttribute('aria-expanded', open);
    mobileDrawer.setAttribute('aria-hidden', !open);
  });

  // Close on nav link click
  document.querySelectorAll('.mobile-link, .mobile-drawer .btn-primary').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('open');
      mobileDrawer.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    });
  });


  // ── Terminal typing animation ───────────────────────
  const typingEl = document.getElementById('typing-text');
  const termBody  = document.querySelector('.terminal-body');

  const sequences = [
    {
      cmd: 'velveteen init --mode=agent --model=gemini-pro',
      output: [
        { text: '▶ Conectando con Velveteen OS...', cls: 'muted',   delay: 400 },
        { text: '✓ Modelo fundacional cargado: gemini-2.0-pro',     cls: 'success', delay: 800  },
        { text: '✓ Memoria persistente: Firebase Firestore',        cls: 'success', delay: 1100 },
        { text: '▶ Calibrando agentes de decisión...',              cls: 'muted',   delay: 1400 },
        { text: '✓ Pipeline activo — 3 agentes en paralelo',        cls: 'highlight', delay: 1800 },
        { text: '▶ Desplegando endpoint de producción...',          cls: 'muted',   delay: 2100 },
        { text: '✓ API ONLINE @ velveteen.run/v1 — 48ms latency',   cls: 'success', delay: 2500 },
        { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', cls: 'muted', delay: 2800 },
        { text: '⬡ STATUS: LO COMPLEJO SE VOLVIÓ REAL.',           cls: 'highlight', delay: 3200 },
      ]
    },
    {
      cmd: 'velveteen analyze --target=data-silo --suggest',
      output: [
        { text: '▶ Escaneando silos de datos...',                   cls: 'muted',   delay: 400  },
        { text: '✓ Encontradas 7 fuentes de datos fragmentadas',    cls: 'warning', delay: 800  },
        { text: '▶ Calculando potencial de automatización...',      cls: 'muted',   delay: 1200 },
        { text: '✓ Ahorro estimado: 2,400 h/año',                  cls: 'success', delay: 1600 },
        { text: '⬡ Recomendación: Multi-Agent Workflow v3',        cls: 'highlight', delay: 2000 },
        { text: '▶ Generando arquitectura de solución...',          cls: 'muted',   delay: 2400 },
        { text: '✓ Blueprint listo — iniciar con: velveteen deploy',cls: 'success', delay: 2800 },
      ]
    },
    {
      cmd: 'velveteen status --all-agents',
      output: [
        { text: '■ AGENTE_01  [COORDINATOR]   ● ACTIVO',   cls: 'success', delay: 400  },
        { text: '■ AGENTE_02  [RAG_RETRIEVER]  ● ACTIVO',  cls: 'success', delay: 700  },
        { text: '■ AGENTE_03  [EXECUTOR]       ● ACTIVO',  cls: 'success', delay: 1000 },
        { text: '■ AGENTE_04  [MONITOR]        ● ACTIVO',  cls: 'success', delay: 1300 },
        { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   cls: 'muted',  delay: 1600 },
        { text: 'UPTIME: 99.97% // TOKENS/S: 4,120',       cls: 'highlight', delay: 2000 },
      ]
    }
  ];

  let seqIdx = 0;
  let outputDiv = null;

  function typeText(text, el, speed, cb) {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) { clearInterval(interval); if (cb) cb(); }
    }, speed);
  }

  function clearTerminal() {
    if (outputDiv) outputDiv.remove();
    typingEl.textContent = '';
  }

  function runSequence(idx) {
    const seq = sequences[idx % sequences.length];
    clearTerminal();

    typeText(seq.cmd, typingEl, 38, () => {
      outputDiv = document.createElement('div');
      outputDiv.className = 'term-output';
      termBody.appendChild(outputDiv);

      seq.output.forEach(({ text, cls, delay }) => {
        setTimeout(() => {
          const line = document.createElement('div');
          line.className = `term-out-line ${cls}`;
          line.textContent = text;
          outputDiv.appendChild(line);
          requestAnimationFrame(() => requestAnimationFrame(() => line.classList.add('visible')));
        }, delay);
      });

      const totalDelay = seq.output[seq.output.length - 1].delay + 3500;
      setTimeout(() => runSequence(idx + 1), totalDelay);
    });
  }

  // Start terminal after brief pause
  setTimeout(() => runSequence(0), 1200);


  // ── Intersection Observer for reveals ───────────────
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-item').forEach(el => revealObs.observe(el));


  // ── Generic section reveal ──────────────────────────
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.solution-card, .team-card, .team-callout, .method-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sectionObs.observe(el);
  });


  // ── Contact form ────────────────────────────────────
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('contact-submit-btn');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name  = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const msg   = document.getElementById('contact-msg').value.trim();

    if (!name || !email || !msg) {
      shakeForm();
      return;
    }

    submitBtn.textContent = 'PROCESANDO...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate async submission (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1600));

    submitBtn.textContent = '✓ PROTOCOLO INICIADO';
    submitBtn.style.background = '#64e891';
    submitBtn.style.color = '#001a09';

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'INICIAR PROTOCOLO →';
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      submitBtn.style.background = '';
      submitBtn.style.color = '';
    }, 3000);
  });

  function shakeForm() {
    form.style.animation = 'none';
    form.offsetHeight; // reflow
    form.style.animation = 'shake 0.35s ease';
  }

  // Inject shake keyframe
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(styleSheet);


  // ── Smooth active nav link ──────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.removeAttribute('aria-current'));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.setAttribute('aria-current', 'page');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => activeObs.observe(s));


  // ── Scroll progress line ────────────────────────────
  const progressBar = document.createElement('div');
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-label', 'Progreso de lectura');
  progressBar.style.cssText = `
    position:fixed; top:0; left:0; height:2px; 
    background:var(--clr-primary); z-index:2000; 
    width:0%; transition:width 0.1s linear; pointer-events:none;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docH = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = `${Math.min(100, (scrollTop / docH) * 100)}%`;
  }, { passive: true });


  // ── Hero stat counter animation ─────────────────────
  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      statsObs.unobserve(e.target);
      animateStats();
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObs.observe(heroStats);

  function animateStats() {
    // Already correct values, just add a glitch flicker effect
    const vals = document.querySelectorAll('.stat-value');
    vals.forEach(v => {
      const original = v.textContent;
      let ticks = 0;
      const iv = setInterval(() => {
        v.textContent = generateGlitch(original);
        ticks++;
        if (ticks > 8) { clearInterval(iv); v.textContent = original; }
      }, 60);
    });
  }

  function generateGlitch(str) {
    const chars = '0123456789%ms.';
    return str.split('').map(c => Math.random() < 0.3 ? chars[Math.floor(Math.random()*chars.length)] : c).join('');
  }

  // ── Cursor follow glow (desktop only) ──────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position:fixed; pointer-events:none; z-index:9999;
      width:300px; height:300px; border-radius:50%;
      background: radial-gradient(circle, rgba(87,241,219,0.05) 0%, transparent 70%);
      transform:translate(-50%,-50%);
      transition:left 0.6s ease, top 0.6s ease;
      top:50%; left:50%;
    `;
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    }, { passive: true });
  }

  console.log(
    '%c THE VELVETEEN PROJECT %c Engineering Computational Sovereignty',
    'background:#57f1db;color:#003731;font-weight:700;padding:4px 8px;font-family:monospace;',
    'color:#57f1db;font-family:monospace;padding:4px 0;'
  );
  console.log('%c Hola, explorador 👋 — velveteen.run/careers', 'color:#859490;font-family:monospace;font-size:11px;');
});
