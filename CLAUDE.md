# CLAUDE.md | Frontend Website Rules (Next.js App Router)

## Always Do First
- Invoke the `frontend-design` skill before writing any frontend code, every session, no exceptions.

---

## Environment & Architecture

- This project uses Next.js (App Router).
- All UI must be built within the `/app` directory structure.
- Development server is started manually using:

  npm run dev

- The site runs at:
  
  http://localhost:3000

- Never start custom static servers.
- Never use serve.mjs.
- Never spawn background Node HTTP servers.
- Never run multiple dev servers simultaneously.
- Do not perform screenshot automation unless explicitly requested.

---
## Brand Naming Rules (Strict)

### MW Group

Use only when referring to the parent umbrella brand that includes:

- Men at Work Traffic Management  
- MW Training & Planning  
- The Temp Company  
- QualCard  

Never use:
- MAW Group  
- Men at Work Group  

The correct name is always: **MW Group**

---

### Men at Work Traffic Management

Use when referring formally to the core traffic management business.

---

### Men at Work

Use in conversational or marketing tone when referencing the traffic business.

Example (correct):  
"Men at Work has delivered traffic solutions across the South Island since 2008."

Avoid in marketing copy:  
"MW Traffic Management has delivered..."

---
Writing Standards – Punctuation Rules

Include the following directive:

- Em dashes (—) are strictly prohibited across all content and code.
- Do not generate em dashes in any headings, paragraphs, UI text, or documentation.
- Use commas instead.
- If structural clarity requires separation, rewrite the sentence instead of using a dash.
- Never substitute with double hyphens.

This rule applies to:
- Marketing copy
- UI text
- Documentation
- Code comments
- Metadata

---

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly.
- Swap in placeholder content only where real content is not provided.
- Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).

When visual comparison is required:
- View output at localhost:3000 (or relevant route).
- Compare visually.
- Fix mismatches.
- Repeat until layout and spacing align with reference or user approves.

Do not create separate static demo HTML files unless explicitly requested.
All demos must be built as proper Next routes (e.g. `/demo`).

---

## Demo & Experimental Pages

- If creating a demo concept, build it inside:
  
  app/demo/page.tsx

- Never use standalone hero-demo.html.
- Never spin up a separate static server for demos.
- All previewing must happen within the Next dev server.

---

## Output Defaults

- Use proper Next.js file structure.
- Use components inside `/app/components` when appropriate.
- No single index.html file unless explicitly requested.
- No Tailwind CDN script tags.
- Use installed Tailwind configuration.
- Mobile-first responsive.

---

## Brand Assets

- Always check the `brand_assets/` folder before designing.
- If assets exist there, use them.
- If a logo is present, use it.
- If a color palette is defined, use exact values.
- Do not invent brand colors if official ones exist.

---

## Anti-Generic Guardrails

- Colors:
  - Never use default Tailwind palette as primary branding (no blue-600, indigo-500, etc.).
  - Derive from brand color system.

- Shadows:
  - Never use flat `shadow-md`.
  - Use layered, color-tinted shadows with low opacity.

- Typography:
  - Never use the same font for headings and body.
  - Pair display/serif with clean sans.
  - Apply tight tracking (-0.03em) on large headings.
  - Use generous body line-height (~1.7).

- Gradients:
  - Layer multiple radial gradients.
  - Add subtle depth where appropriate.
  - Do not overuse noise or texture unless aligned with brand.

- Animations:
  - Only animate transform and opacity.
  - Never use transition-all.
  - Use subtle easing.
  - No unnecessary motion.

- Interactive states:
  - Every clickable element must have hover, focus-visible, and active states.

- Images:
  - Use overlays intentionally.
  - Ensure contrast and readability.

- Spacing:
  - Use consistent spacing tokens.
  - Avoid arbitrary Tailwind steps.

- Depth:
  - Implement clear layering hierarchy (base → elevated → floating).

---

## Mobile-First Rule

- All UI work must be mobile-first.
- Desktop and mobile traffic are expected to be roughly equal.
- Every component must be visually correct and functional at both sizes.
- Validate layouts at small and large breakpoints.

---

## Hard Rules

- Do not add sections, features, or content not requested.
- Do not “improve” reference designs unless instructed.
- Do not start additional dev servers.
- Do not run background processes.
- Do not use transition-all.
- Do not use default Tailwind blue/indigo as primary brand color.
- Do not push changes to GitHub until explicitly instructed.

---

## Deployment Discipline

- Local development only via npm run dev.
- Production deploys handled via Git push to main and Vercel.
- No automated pushes.
- Wait for user instruction before committing or pushing.