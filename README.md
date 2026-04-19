## Design System & UX Documentation

### Brand Definition

**The Velveteen Project** is a founder-led Applied Decision Systems Lab.

It builds tools that combine mathematical modeling, machine learning, NLP, 
and agentic workflows to make complex decisions more understandable and 
more actionable.

Core philosophical direction: *from rigorous ideas to usable systems.*

The brand is:
- Founder-led and technically serious
- Research-informed and modeling-oriented
- Anti-hype, anti-fake-enterprise
- A bridge between mathematics, AI, and real deployment

The brand is not:
- A generic AI automation agency
- A trend-chasing startup
- A landing page of inflated claims
- A corporate firm pretending to have a large team

---

### UX Goals

1. Feel visually coherent with the brand's intellectual identity
2. Be premium and intentional without being theatrical
3. Be usable, readable, and scannable for technical audiences
4. Be credible for: technical recruiters, research-minded clients, 
   serious founders, applied AI collaborators
5. Support multilingual expansion (EN → ES → FR) without structural rework

---

### Visual Design Principles

| Principle | Applied as |
|---|---|
| Restrained precision | Minimal animation, no decorative noise |
| Technical elegance | Monospace metadata, thin rules, clean hierarchy |
| Anti-inflation | No testimonials, no fake social proof, no metric theater |
| Founder-scale honesty | Small but sharp — the site looks exactly as big as it is |
| Compositional unity | Every section element earns its space |

**Color system:**
- Background: `#0d0d0f` (near-black, not pure black)
- Primary accent: teal (`#00e5c8` range)
- Body text: `#cccccc` (80% white — not pure white)
- Labels/metadata: `#666` – `#888` or teal at 60% opacity

**Type scale:**
- Display: Space Grotesk or DM Mono, medium weight
- Body: IBM Plex Sans or Inter, regular weight
- Monospace: JetBrains Mono (terminal, labels, metadata)

**Spacing:** 8px base grid. Section padding: 120px vertical minimum.

---

### Current Design Problems (as of April 2026)

- Hero composition is split: left text block and right terminal/rabbit 
  are not unified into a single visual system
- The rabbit illustration is spatially stranded below the terminal — 
  no compositional relationship to the rest of the hero
- Excessive vertical dead space between nav and hero content (~35% of 
  viewport unused before content begins)
- Button hierarchy conflict: two teal-filled buttons at equal visual 
  weight (nav CTA and hero primary CTA)
- Body copy uses manual line breaks — fragile on responsive layouts
- All-caps treatment is overused; it flattens the hierarchy

---

### Multilingual Considerations

- All copy must live in HTML/data layer — never in CSS `content:` values
- Use `clamp()` for all fluid sizing; avoid fixed-width text containers
  (French/German run 20–35% longer than English)
- Button padding must be horizontal, not fixed-width
- `<html lang="">` must be dynamically set per language
- Plan for a `content/{lang}.json` data layer before adding a second language
- Idiomatic English labels ("SYSTEM STATUS // FOUNDER-LED LAB") need 
  language-neutral equivalents or language-specific overrides

---

### Recommended Next Design Steps

**Phase 1 — High Impact, Low Risk**
- [ ] Fix hero vertical dead space
- [ ] Unify terminal and headline vertical alignment
- [ ] Resolve rabbit position (integrate into terminal or reduce to mark)
- [ ] Fix button hierarchy (secondary style for "READ MANIFESTO")
- [ ] Fix body copy measure (max-width, remove manual breaks)
- [ ] Reduce all-caps to labels/nav only

**Phase 2 — Structural Refinements**
- [ ] Refine terminal visual treatment (header bar, cleaner line starters)
- [ ] Apply 8px grid rigorously across all sections
- [ ] Establish consistent section divider language (thin rules, metadata)
- [ ] Review and potentially merge Capabilities + Method sections
- [ ] Redesign project cards (left-border entries, no heavy containers)

**Phase 3 — Multilingual and Polish**
- [ ] Extract all copy into `content/en.json`
- [ ] Add `lang` toggle architecture to nav
- [ ] Audit all fixed-width elements for language length tolerance
- [ ] Translate Phase 1–2 site into Spanish (ES)
- [ ] Add French (FR) in a later cycle
