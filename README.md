# The Velveteen Project: Design System & UX Documentation

## Brand Definition
**The Velveteen Project** is a founder-led Applied Decision Systems Lab.

It builds tools and systems that combine mathematical modeling, machine learning, NLP, scientific thinking, and agentic workflows to make complex decisions more understandable and more actionable.

It operates on the core philosophical direction of moving *from rigorous ideas to usable systems*—from theory to operation without losing rigor.

The brand is:
- Intelligent, sober, and technically serious.
- Elegant, founder-led, and anti-hype.
- A bridge between mathematics, AI, and real deployment.
- Small-but-sharp, internationally legible, and premium through clarity.

The brand is NOT:
- A generic AI automation agency or a trend-chasing startup.
- A fake enterprise-grade consultancy.
- A landing page of inflated claims or a corporate firm pretending to have a large team.

---

## UX & Visual Goals
1. **Premium but Sober:** High signal-to-noise ratio. The site feels like an instrument, not a marketing funnel.
2. **Technical Editorial:** Fuses the typography of an academic paper with the precision of a software interface.
3. **Founder-led:** Honest and direct. It looks exactly as big as it is.
4. **Anti-hype:** Relies on structural logic, not "magic" AI glitter.
5. **International Credibility:** Supports high-trust reading for remote collaborators, technical recruiters, and researchers.

---

## Current Design Direction (April 2026)
The site employs a restrained dark technical system:
- **Decision Graph Hero:** Positions the lab as an architect of systems via a custom, subtle SVG artifact, accompanied by a precise "proof row" (Modeling, ML, Agents).
- **Editorial Manifesto:** Utilizes a sticky right-rail and semantic layout to balance theory with actionable data.
- **Credibility-first Project Storytelling:** Rejects fluffy case studies in favor of a strict Problem / Core / Integrity taxonomy via semantic `<dl>` lists.
- **Operational Philosophy:** Privileges strategic thinking over generic "tech stack" theater.

### Visual System Principles
- **Color:** Background `#0d0d0f`, Primary Accent teal (`#57f1db`), Body `#bacac5`.
- **Typography:** Space Grotesk / Display for headers, Inter / sans-serif for body, JetBrains Mono for metadata and system framing.
- **Spacing:** Meticulously tuned for vertical rhythm, avoiding the "floating" feeling of empty layouts.

---

## Multilingual Strategy
- **Architecture:** English (primary) and Spanish (secondary) are powered by a robust HTML `data-i18n` dictionary logic decoupled from CSS.
- **Responsive Fluidity:** Layouts rely heavily on Flexbox, CSS Grid, and `clamp()` to easily absorb the 15-25% text expansion typical of Spanish without breaking the grid.
- **Future-friendly:** The system is explicitly designed to absorb French (FR) in a later cycle with zero architectural rebuilds.

---

## Design Guardrails
To protect the integrity of the lab's identity, the following are strictly enforced:
- **No fake enterprise tropes:** Do not invent scale. Do not add fake client logos or generic testimonials.
- **No generic SaaS redesigns:** Do not introduce large, colorful 3D blobs, purple gradients, or excessive drop shadows.
- **No inflated claims:** Language must remain precise, restrained, and factual.
- **No noisy sci-fi spectacle:** Animations must be slow, deliberate, and respect `prefers-reduced-motion`.
- **No changes that weaken credibility:** When in doubt, prefer less UI and more structure.

*For product-specific identity management and cross-brand audits, see the [Brand Coherence & Pruning Guide](docs/brand-coherence-pruning-guide.md).*
