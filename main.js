/* ═══════════════════════════════════════════════════
   THE VELVETEEN PROJECT — main.js
   Animations, interactions, terminal simulation
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── i18n Dictionary ────────────────────────────────
  const i18n = {
    en: {
      "nav.manifesto": "MANIFESTO",
      "nav.method": "METHOD",
      "nav.projects": "PROJECTS",
      "nav.capabilities": "CAPABILITIES",
      "nav.founder": "FOUNDER",
      "nav.cta": "DISCUSS A PROBLEM",
      "nav.menu": "Toggle mobile menu",
      "hero.eyebrow": "SYSTEM STATUS // FOUNDER-LED LAB",
      "hero.sub": "APPLIED <span class=\"accent\">DECISION</span> SYSTEMS LAB",
      "hero.desc": "We build tools that combine mathematical modeling, machine learning, NLP, and agentic workflows to make complex decisions more understandable and more actionable.",
      "hero.read_manifesto": "READ MANIFESTO",
      "hero.view_projects": "VIEW PROJECTS →",
      "hero.stat.modeling": "Mathematical modeling",
      "hero.stat.modeling_label": "Analytical core",
      "hero.stat.ml": "ML + NLP systems",
      "hero.stat.ml_label": "Interpretable pipelines",
      "hero.stat.agents": "Agents",
      "hero.stat.agents_label": "Orchestrated reasoning",
      "hero.graph.subnote": "Models frame uncertainty. Systems expose decisions.",
      "graph.label": "// DECISION GRAPH · RESOLVING",
      "graph.problem": "PROBLEM",
      "graph.frame": "frame",
      "graph.data": "DATA",
      "graph.sources": "sources",
      "graph.unc": "UNCERTAINTY",
      "graph.mapping": "mapping",
      "graph.con": "CONSTRAINTS",
      "graph.bounds": "bounds",
      "graph.model": "MODEL",
      "graph.core": "CORE",
      "graph.pipe": "pipeline",
      "graph.decision": "DECISION",
      "graph.output": "output",
      "graph.action": "ACTION",
      "graph.deploy": "deploy",
      "section.manifesto": "// 01_MANIFESTO",
      "manifesto.heading": "Mathematics is a precise language,<br><span class=\"accent\">but it only becomes real<br>when it enters use.</span>",
      "manifesto.p1": "Like in <em>The Velveteen Rabbit</em>, something becomes real when it enters a relationship with the world. In technology, a model becomes real when it informs a workflow, supports a decision, or helps someone act with better judgment.",
      "manifesto.p2": "The Velveteen Project is a founder-led applied decision systems lab. It exists to turn rigorous ideas into usable tools.",
      "manifesto.p3": "We work at the intersection of mathematical modeling, machine learning, natural language processing, and agentic systems to build tools for problems shaped by uncertainty, fragmented information, and operational friction.",
      "manifesto.p4": "<strong class=\"accent-text\">We are not interested in AI as spectacle.</strong> We are interested in AI as infrastructure: explainable, deployable, and useful.",
      "manifesto.p5": "This project is about moving from theory to operation without losing rigor in the process.",
      "manifesto.pillar1": "Rigor before hype",
      "manifesto.pillar2": "Complexity made usable",
      "manifesto.pillar3": "Research into systems",
      "manifesto.data.mission_lbl": "MISSION",
      "manifesto.data.mission_val": "Turn rigorous ideas into usable tools.",
      "manifesto.data.vision_lbl": "VISION",
      "manifesto.data.vision_val": "Build decision systems worth trusting.",
      "manifesto.data.phil_lbl": "PHILOSOPHY",
      "manifesto.data.phil_val": "Research-driven · Founder-led · Deployable",
      "section.projects": "// 02_PROJECTS",
      "section.method": "// 03_METHOD",
      "method.heading": "From Analytical Core to <span class=\"accent\">Usable System</span>",
      "method.sub": "A practical process for turning complex ideas into tools that can actually support real decisions.",
      "method.s1.h": "FRAME THE DECISION",
      "method.s1.p": "We identify the decision that matters, the constraints around it, the available data, and the failure modes. The goal is not to automate everything, but to clarify what must be modeled and what must remain visible.",
      "method.s2.h": "BUILD THE ANALYTICAL CORE",
      "method.s2.p": "We design the core of the system around the problem itself: a mathematical model, an ML pipeline, or a hybrid architecture when the problem calls for it.",
      "method.s3.h": "WRAP IT IN WORKFLOW",
      "method.s3.p": "We add interfaces, retrieval, orchestration, or agentic components only where they improve usability, reasoning, or execution.",
      "method.s4.h": "TEST FOR USEFULNESS",
      "method.s4.p": "We evaluate not only performance, but interpretability, robustness, and whether the system actually helps people decide or act better.",
      "projects.heading": "Selected Projects",
      "proj.eco.name": "ECOAGENT",
      "proj.eco.id": "PROJECT_01 // DEPLOYED",
      "proj.eco.desc": "AI-powered stochastic climate risk platform for real-time landslide risk prediction.",
      "proj.eco.prob_lbl": "PROBLEM",
      "proj.eco.prob": "Static risk maps fail when conditions change rapidly.",
      "proj.eco.core_lbl": "CORE",
      "proj.eco.core": "CIR stochastic model for soil moisture + real-time weather reasoning.",
      "proj.eco.integ_lbl": "INTEGRITY",
      "proj.eco.integ": "Production architecture separating deterministic models from LLM orchestration. Tool-first anti-hallucination approach.",
      "proj.eco.tag1": "STOCHASTIC DIFFERENTIAL EQUATIONS",
      "proj.eco.tag2": "AGENTIC ORCHESTRATION",
      "proj.eco.tag3": "TELEGRAM + MULTIMODAL",
      
      "proj.stoc.name": "STOCHASTOGREEN",
      "proj.stoc.id": "PROJECT_02 // RESEARCH",
      "proj.stoc.desc": "Climate transition risk simulator for financial portfolios.",
      "proj.stoc.prob_lbl": "PROBLEM",
      "proj.stoc.prob": "Existing transition models are opaque, hard to update, and lack transparent reasoning.",
      "proj.stoc.core_lbl": "CORE",
      "proj.stoc.core": "Merton jump-diffusion model mapping climate beta via deterministic simulation.",
      "proj.stoc.integ_lbl": "INTEGRITY",
      "proj.stoc.integ": "Math engine and AI layer intentionally decoupled. The LLM interprets the trajectory; it never computes the math.",
      "proj.stoc.tag1": "QUANTITATIVE RISK",
      "proj.stoc.tag2": "FASTAPI ORCHESTRATION",
      "proj.stoc.tag3": "MULTI-AGENT INTERPRETATION",
      "proj.launch": "LAUNCH DEMO →",
      
      "section.founder": "// 04_FOUNDER",
      "founder.heading": "Behind the <span class=\"accent\">Project</span>",
      "founder.sub": "A founder-led lab built around modeling, machine learning, NLP, and decision systems.",
      "founder.role": "FOUNDER",
      "founder.bio": "Applied mathematician, computer scientist, educator, and AI builder. I created The Velveteen Project as a public lab for building systems that connect rigorous thinking with real-world use.",
      "founder.callout.lbl": "CURRENT FOCUS",
      "founder.callout.h": "Building better<br><span class=\"accent\">decision tools</span>",
      "founder.callout.p": "This project grows through carefully chosen prototypes, technical writing, and real systems built with rigor. The goal is not to look larger than it is, but to become more real with every iteration.",
      "founder.callout.btn": "START A CONVERSATION",
      "section.stack": "// 05_PHILOSOPHY",
      "stack.heading": "Operational <span class=\"accent\">Philosophy</span>",
      "stack.sub": "How we approach the transition from theory to deployed system.",
      "stack.p1.h": "Analytical Core Before Interface",
      "stack.p1.b": "The math comes first. We do not use LLMs to hallucinate numbers. We use deterministic engines for truth. We use agents for reasoning and routing. Interfaces are built to expose the model's logic, not obscure it.",
      "stack.p2.h": "Tools Follow the Problem",
      "stack.p2.b": "We adapt the architecture to the failure modes of the decision. Models remain interpretable. Orchestration layers exist to improve usefulness and constraint handling, not to add theatrical complexity.",
      "stack.p3.h": "Deployment Matters",
      "stack.p3.b": "Rigorous ideas die in Jupyter notebooks. Real tools run defensively in production. We architect for testability, telemetry, and robustness from day one.",
      "section.contact": "// 06_CONTACT",
      "contact.heading": "Have a decision problem worth<br><span class=\"accent\">modeling?</span>",
      "contact.p": "If you are working on a complex workflow, a scientific tool, or an applied AI system that needs more than a chatbot layer, I'd be glad to hear about it.",
      "contact.focus_lbl": "FOCUS",
      "contact.focus_val": "Applied AI + Modeling",
      "contact.open_lbl": "OPEN TO",
      "contact.open_val": "Selected Collaborations",
      "contact.form.name": "NAME",
      "contact.form.email": "EMAIL",
      "contact.form.org": "ORGANIZATION",
      "contact.form.msg": "PROBLEM DESCRIPTION",
      "contact.form.btn": "START THE CONVERSATION →",
      "contact.form.disc": "Just enough context to understand the problem. No spam, no theatrics.",
      "contact.form.name.ph": "Your full name",
      "contact.form.email.ph": "you@organization.com",
      "contact.form.org.ph": "Company, lab, or institution",
      "contact.form.msg.ph": "...",
      "section.cap": "// 07_CAPABILITIES",
      "cap.heading": "What I Build",
      "cap.l1": "→ Applied decision systems",
      "cap.l2": "→ Mathematical modeling and simulation",
      "cap.l3": "→ ML and NLP pipelines",
      "cap.l4": "→ Agentic workflows for complex processes",
      "cap.l5": "→ Retrieval and structured reasoning systems",
      "cap.l6": "→ Scientific and analytical interfaces",
      "cap.l7": "→ Research-driven prototypes with real deployment paths",
      "footer.tagline": "APPLIED DECISION SYSTEMS LAB",
      "footer.copy": "© 2026 The Velveteen Project. Founder-led. Built with rigor.",
      "footer.sys": "SYS_STATUS: <span class=\"accent\">ACTIVE</span>"
    },
    es: {
      "nav.manifesto": "MANIFIESTO",
      "nav.method": "MÉTODO",
      "nav.projects": "PROYECTOS",
      "nav.capabilities": "CAPACIDADES",
      "nav.founder": "FUNDADOR",
      "nav.cta": "DISCUTIR UN PROBLEMA",
      "nav.menu": "Alternar menú",
      "hero.eyebrow": "ESTADO DEL SISTEMA // LAB FUNDADOR",
      "hero.sub": "LABORATORIO DE SISTEMAS DE <span class=\"accent\">DECISIÓN</span> APLICADA",
      "hero.desc": "Construimos herramientas que combinan modelado matemático, aprendizaje automático, procesamiento de lenguaje natural (NLP) y flujos de trabajo con agentes para hacer decisiones complejas más comprensibles y más accionables.",
      "hero.read_manifesto": "LEER MANIFIESTO",
      "hero.view_projects": "VER PROYECTOS →",
      "hero.stat.modeling": "Modelado matemático",
      "hero.stat.modeling_label": "Núcleo analítico",
      "hero.stat.ml": "Sistemas de ML + NLP",
      "hero.stat.ml_label": "Pipelines interpretables",
      "hero.stat.agents": "Agentes",
      "hero.stat.agents_label": "Razonamiento orquestado",
      "hero.graph.subnote": "Los modelos enmarcan la incertidumbre. Los sistemas exponen decisiones.",
      "graph.label": "// GRAFO DE DECISIÓN · RESOLVIENDO",
      "graph.problem": "PROBLEMA",
      "graph.frame": "marco",
      "graph.data": "DATOS",
      "graph.sources": "fuentes",
      "graph.unc": "INCERTIDUMBRE",
      "graph.mapping": "mapeo",
      "graph.con": "RESTRICCIONES",
      "graph.bounds": "límites",
      "graph.model": "MODELO",
      "graph.core": "NÚCLEO",
      "graph.pipe": "pipeline",
      "graph.decision": "DECISIÓN",
      "graph.output": "salida",
      "graph.action": "ACCIÓN",
      "graph.deploy": "desplegar",
      "section.manifesto": "// 01_MANIFIESTO",
      "manifesto.heading": "Las matemáticas son un lenguaje preciso,<br><span class=\"accent\">pero solo se vuelven reales<br>cuando entran en uso.</span>",
      "manifesto.p1": "Al igual que en <em>El Conejo de Terciopelo</em> (The Velveteen Rabbit), algo se vuelve real cuando entra en relación con el mundo. En la tecnología, un modelo se vuelve real cuando orienta un flujo de trabajo, apoya una decisión o ayuda a alguien a actuar con mejor juicio.",
      "manifesto.p2": "The Velveteen Project es un laboratorio de sistemas de decisión aplicada. Existe para convertir ideas rigurosas en herramientas utilizables.",
      "manifesto.p3": "Trabajamos en la intersección del modelado matemático, el aprendizaje automático, el NLP y los sistemas de agentes para construir herramientas en problemas condicionados por la incertidumbre, la información fragmentada y la fricción operativa.",
      "manifesto.p4": "<strong class=\"accent-text\">No nos interesa la IA como espectáculo.</strong> Nos interesa la IA como infraestructura: explicable, desplegable y útil.",
      "manifesto.p5": "Este proyecto se trata de moverse de la teoría a la operación sin perder rigor en el proceso.",
      "manifesto.pillar1": "Rigor sobre exageración",
      "manifesto.pillar2": "Complejidad hecha utilizable",
      "manifesto.pillar3": "Investigación aplicada a sistemas",
      "manifesto.data.mission_lbl": "MISIÓN",
      "manifesto.data.mission_val": "Convertir ideas rigurosas en herramientas utilizables.",
      "manifesto.data.vision_lbl": "VISIÓN",
      "manifesto.data.vision_val": "Construir sistemas de decisión confiables.",
      "manifesto.data.phil_lbl": "FILOSOFÍA",
      "manifesto.data.phil_val": "Basado en investigación · Liderado por fundador · Desplegable",
      "section.projects": "// 02_PROYECTOS",
      "section.method": "// 03_MÉTODO",
      "method.heading": "Del Núcleo Analítico al <span class=\"accent\">Sistema Utilizable</span>",
      "method.sub": "Un proceso práctico para convertir ideas complejas en herramientas que puedan apoyar decisiones reales.",
      "method.s1.h": "ENMARCAR LA DECISIÓN",
      "method.s1.p": "Identificamos la decisión que importa, las restricciones, los datos disponibles y los modos de fallo. El objetivo no es automatizar todo, sino aclarar qué debe ser modelado y qué debe permanecer visible.",
      "method.s2.h": "CONSTRUIR EL NÚCLEO ANALÍTICO",
      "method.s2.p": "Diseñamos el núcleo del sistema alrededor del problema en sí: un modelo matemático, un pipeline de ML o una arquitectura híbrida cuando el problema lo amerite.",
      "method.s3.h": "ENVOLVER EN FLUJOS DE TRABAJO",
      "method.s3.p": "Añadimos interfaces, recuperación (retrieval), orquestación o componentes con agentes solo donde mejoran la usabilidad, el razonamiento o la ejecución.",
      "method.s4.h": "PROBAR SU UTILIDAD",
      "method.s4.p": "Evaluamos no solo el rendimiento, sino la interpretabilidad, la robustez y si el sistema realmente ayuda a las personas a decidir o actuar mejor.",
      "projects.heading": "Proyectos Seleccionados",
      "proj.eco.name": "ECOAGENT",
      "proj.eco.id": "PROYECTO_01 // DESPLEGADO",
      "proj.eco.desc": "Plataforma estocástica de riesgo climático asistida por IA para la predicción de riesgo de deslizamientos en tiempo real.",
      "proj.eco.prob_lbl": "PROBLEMA",
      "proj.eco.prob": "Los mapas de riesgo estáticos fallan cuando las condiciones cambian rápidamente.",
      "proj.eco.core_lbl": "NÚCLEO",
      "proj.eco.core": "Modelo estocástico CIR para la humedad del suelo + razonamiento meteorológico en tiempo real.",
      "proj.eco.integ_lbl": "INTEGRIDAD",
      "proj.eco.integ": "Arquitectura de producción separando modelos deterministas de la orquestación de LLMs. Enfoque anti-alucinación centrado en herramientas.",
      "proj.eco.tag1": "ECUACIONES DIFERENCIALES ESTOCÁSTICAS",
      "proj.eco.tag2": "ORQUESTACIÓN DE AGENTES",
      "proj.eco.tag3": "TELEGRAM + MULTIMODAL",
      
      "proj.stoc.name": "STOCHASTOGREEN",
      "proj.stoc.id": "PROYECTO_02 // INVESTIGACIÓN",
      "proj.stoc.desc": "Simulador de riesgo de transición climática para carteras financieras.",
      "proj.stoc.prob_lbl": "PROBLEMA",
      "proj.stoc.prob": "Los modelos de transición existentes son opacos, difíciles de actualizar y carecen de razonamiento transparente.",
      "proj.stoc.core_lbl": "NÚCLEO",
      "proj.stoc.core": "Modelo de salto y difusión de Merton mapeando beta climático a través de simulación determinista.",
      "proj.stoc.integ_lbl": "INTEGRIDAD",
      "proj.stoc.integ": "Motor matemático y capa de IA intencionalmente desacoplados. El LLM interpreta la trayectoria; nunca calcula las matemáticas.",
      "proj.stoc.tag1": "RIESGO CUANTITATIVO",
      "proj.stoc.tag2": "FASTAPI",
      "proj.stoc.tag3": "INTERPRETACIÓN MULTIAGENTE",
      "proj.launch": "INICIAR DEMO →",
      
      "section.founder": "// 04_FUNDADOR",
      "founder.heading": "Detrás del <span class=\"accent\">Proyecto</span>",
      "founder.sub": "Un laboratorio centrado en modelado, ML, NLP y sistemas de decisión impulsado por su fundador.",
      "founder.role": "FUNDADOR",
      "founder.bio": "Matemático aplicado, científico de la computación, educador y constructor de IA. Creé The Velveteen Project como un laboratorio público para construir sistemas que conecten el pensamiento riguroso con el uso en el mundo real.",
      "founder.callout.lbl": "ENFOQUE ACTUAL",
      "founder.callout.h": "Construyendo mejores<br><span class=\"accent\">herramientas de decisión</span>",
      "founder.callout.p": "Este proyecto crece a través de prototipos cuidadosamente elegidos, escritura técnica y sistemas reales construidos con rigor. El objetivo no es parecer más grande de lo que es, sino volverse más real con cada iteración.",
      "founder.callout.btn": "INICIAR UNA CONVERSACIÓN",
      "section.stack": "// 05_FILOSOFÍA",
      "stack.heading": "Filosofía <span class=\"accent\">Operativa</span>",
      "stack.sub": "Cómo abordamos la transición de la teoría al sistema desplegado.",
      "stack.p1.h": "Núcleo Analítico Antes de la Interfaz",
      "stack.p1.b": "Las matemáticas van primero. No usamos LLMs para alucinar números. Usamos motores deterministas para la verdad y agentes para el razonamiento y ruteo. Las interfaces se construyen para exponer la lógica del modelo, no para oscurecerla.",
      "stack.p2.h": "Las Herramientas Siguen al Problema",
      "stack.p2.b": "Adaptamos la arquitectura a los modos de fallo de la decisión. Los modelos permanecen interpretables. Las capas de orquestación existen para mejorar la utilidad y el manejo de restricciones, no para agregar complejidad teatral.",
      "stack.p3.h": "El Despliegue Importa",
      "stack.p3.b": "Las ideas rigurosas mueren en notebooks de Jupyter. Las herramientas reales se ejecutan defensivamente en producción. Arquitectamos para testabilidad, telemetría y robustez desde el primer día.",
      "section.contact": "// 06_CONTACTO",
      "contact.heading": "¿Tienes un problema de decisión que valga la pena<br><span class=\"accent\">modelar?</span>",
      "contact.p": "Si estás trabajando en un flujo de trabajo complejo, una herramienta científica o un sistema de IA aplicada que necesita más que una simple capa de chatbot, me gustaría escucharlo.",
      "contact.focus_lbl": "ENFOQUE",
      "contact.focus_val": "IA Aplicada + Modelado",
      "contact.open_lbl": "ABIERTO A",
      "contact.open_val": "Colaboraciones Selectas",
      "contact.form.name": "NOMBRE",
      "contact.form.email": "CORREO ELECTRÓNICO",
      "contact.form.org": "ORGANIZACIÓN",
      "contact.form.msg": "DESCRIPCIÓN DEL PROBLEMA",
      "contact.form.btn": "INICIAR LA CONVERSACIÓN →",
      "contact.form.disc": "Solo el contexto necesario para entender el problema. Sin spam, sin teatralidad.",
      "contact.form.name.ph": "Tu nombre completo",
      "contact.form.email.ph": "tu@organizacion.com",
      "contact.form.org.ph": "Empresa, laboratorio o institución",
      "contact.form.msg.ph": "...",
      "section.cap": "// 07_CAPACIDADES",
      "cap.heading": "Lo Que Construyo",
      "cap.l1": "→ Sistemas de decisión aplicada",
      "cap.l2": "→ Modelado matemático y simulación",
      "cap.l3": "→ Pipelines de ML y NLP",
      "cap.l4": "→ Flujos de trabajo de agentes para procesos complejos",
      "cap.l5": "→ Recuperación y sistemas estructurados de razonamiento",
      "cap.l6": "→ Interfaces científicas y analíticas",
      "cap.l7": "→ Prototipos orientados a investigación con despliegue real",
      "footer.tagline": "LABORATORIO DE SISTEMAS DE DECISIÓN APLICADA",
      "footer.copy": "© 2026 The Velveteen Project. Liderado por su fundador. Construido con rigor.",
      "footer.sys": "ESTADO_SISTEMA: <span class=\"accent\">ACTIVO</span>"
    }
  };

  const getLang = () => localStorage.getItem('velveteen_lang') || document.documentElement.lang || 'en';
  
  function updateLanguage(newLang) {
    if (newLang !== 'en' && newLang !== 'es') return;
    document.documentElement.lang = newLang;
    localStorage.setItem('velveteen_lang', newLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === newLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    const dict = i18n[newLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (key && dict[key]) {
        el.setAttribute('aria-label', dict[key]);
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.closest('.lang-btn').dataset.lang;
      updateLanguage(selected);
    });
  });

  updateLanguage(getLang());

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

  let focusables = [];
  let firstFocusable = null;
  let lastFocusable = null;

  function updateFocusables() {
    focusables = mobileDrawer.querySelectorAll('a[href], button:not([disabled])');
    firstFocusable = focusables[0];
    lastFocusable = focusables[focusables.length - 1];
  }

  function toggleMobileMenu() {
    const isOpen = mobileMenuBtn.classList.toggle('open');
    mobileDrawer.classList.toggle('open', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    
    if (isOpen) {
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileDrawer.setAttribute('aria-modal', 'true');
      mobileDrawer.setAttribute('role', 'dialog');
      updateFocusables();
      if (firstFocusable) firstFocusable.focus();
    } else {
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuBtn.focus();
    }
  }

  mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

  document.querySelectorAll('.mobile-link, .mobile-drawer .btn-primary, .mobile-drawer .lang-btn').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuBtn.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuBtn.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

  mobileDrawer?.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    updateFocusables();
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  });


  // ── Terminal typing animation (optional) ────────────
  const typingEl = document.getElementById('typing-text');
  const termBody = document.querySelector('.terminal-body');

  if (typingEl && termBody) {
    const sequences = [
      {
        cmd: 'velveteen init --mode=agent --model=gemini-pro',
        output: [
          { text: '▶ Conectando con Velveteen OS...', cls: 'muted', delay: 400 },
          { text: '✓ Modelo fundacional cargado: gemini-2.0-pro', cls: 'success', delay: 800 },
          { text: '✓ Memoria persistente: Firebase Firestore', cls: 'success', delay: 1100 },
          { text: '▶ Calibrando agentes de decisión...', cls: 'muted', delay: 1400 },
          { text: '✓ Pipeline activo — 3 agentes en paralelo', cls: 'highlight', delay: 1800 },
          { text: '▶ Desplegando endpoint de producción...', cls: 'muted', delay: 2100 },
          { text: '✓ API ONLINE @ velveteen.run/v1 — 48ms latency', cls: 'success', delay: 2500 },
          { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', cls: 'muted', delay: 2800 },
          { text: '⬡ STATUS: LO COMPLEJO SE VOLVIÓ REAL.', cls: 'highlight', delay: 3200 },
        ]
      },
      {
        cmd: 'velveteen analyze --target=data-silo --suggest',
        output: [
          { text: '▶ Escaneando silos de datos...', cls: 'muted', delay: 400 },
          { text: '✓ Encontradas 7 fuentes de datos fragmentadas', cls: 'warning', delay: 800 },
          { text: '▶ Calculando potencial de automatización...', cls: 'muted', delay: 1200 },
          { text: '✓ Ahorro estimado: 2,400 h/año', cls: 'success', delay: 1600 },
          { text: '⬡ Recomendación: Multi-Agent Workflow v3', cls: 'highlight', delay: 2000 },
          { text: '▶ Generando arquitectura de solución...', cls: 'muted', delay: 2400 },
          { text: '✓ Blueprint listo — iniciar con: velveteen deploy', cls: 'success', delay: 2800 },
        ]
      },
      {
        cmd: 'velveteen status --all-agents',
        output: [
          { text: '■ AGENTE_01  [COORDINATOR]   ● ACTIVO', cls: 'success', delay: 400 },
          { text: '■ AGENTE_02  [RAG_RETRIEVER]  ● ACTIVO', cls: 'success', delay: 700 },
          { text: '■ AGENTE_03  [EXECUTOR]       ● ACTIVO', cls: 'success', delay: 1000 },
          { text: '■ AGENTE_04  [MONITOR]        ● ACTIVO', cls: 'success', delay: 1300 },
          { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', cls: 'muted', delay: 1600 },
          { text: 'UPTIME: 99.97% // TOKENS/S: 4,120', cls: 'highlight', delay: 2000 },
        ]
      }
    ];

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

    setTimeout(() => runSequence(0), 1200);
  }


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

    submitBtn.textContent = 'SENDING...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Form endpoint ready. Swap with fetch to your submission service.
    submitBtn.textContent = '✓ MESSAGE SENT';
    submitBtn.style.background = '#64e891';
    submitBtn.style.color = '#001a09';

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'START THE CONVERSATION →';
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
  progressBar.setAttribute('aria-label', 'Reading progress');
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
    // Glitch flicker for numeric-style stats only (skip word labels)
    const vals = document.querySelectorAll('.stat-value');
    vals.forEach(v => {
      const original = v.textContent;
      if (/[a-z]/i.test(original)) return;
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
    '%c THE VELVETEEN PROJECT %c Applied Decision Systems Lab',
    'background:#57f1db;color:#003731;font-weight:700;padding:4px 8px;font-family:monospace;',
    'color:#57f1db;font-family:monospace;padding:4px 0;'
  );
  console.log('%c Thanks for opening the console.', 'color:#859490;font-family:monospace;font-size:11px;');
});
