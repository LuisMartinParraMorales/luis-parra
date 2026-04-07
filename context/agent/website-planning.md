# Website Planning

This file turns the portfolio idea into a build plan.

## Mission

Build a public-facing website that presents Luis as a serious software and ML engineer who ships analytical products, not a generic portfolio owner listing technologies.

The site should make three things obvious within the first screen or two:

- Luis builds real systems
- Luis combines algorithms, backend engineering, cloud delivery, and product thinking
- Luis has unusual depth in transport, geospatial, simulation, and public-sector decision-support work

## Hosting Recommendation

Recommended default: `Vercel`

Why:

- it fits best with a modern portfolio built in Next.js
- preview deployments for each push and pull request make iteration much easier
- it gives us a cleaner path if we later add richer interactions, analytics, contact flows, or lightweight dynamic features
- it is the platform I can support most effectively in this environment

### Vercel versus GitHub Pages

#### Choose Vercel if you want:

- the strongest developer experience for a modern frontend stack
- preview URLs on every push or pull request
- easy custom-domain flow
- room for future dynamic features
- a smoother path for polished motion-heavy design

#### Choose GitHub Pages if you want:

- the simplest possible static hosting setup
- a pure static site with very few moving parts
- minimal platform decisions beyond GitHub itself

### Current recommendation for this portfolio

Pick `Vercel` unless you want to deliberately constrain the site to a very simple static site.

This portfolio wants:

- beautiful design
- room for custom layouts and motion
- inspectable project pages
- likely future iteration

That points toward `Next.js` on `Vercel`.

## Source Notes For Hosting Recommendation

Official docs checked on `2026-04-06`:

- GitHub Pages is a static hosting service for HTML, CSS, and JavaScript from a GitHub repo, optionally with a build step: [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- GitHub Pages also has usage limits including a published-site limit of 1 GB, 10-minute deployment timeout, soft bandwidth limit of 100 GB per month, and soft limit of 10 builds per hour unless using a custom workflow: [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- GitHub Pages supports HTTPS and custom domains: [GitHub Pages HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- Vercel deploys GitHub pushes by default, provides preview deployment URLs, and updates custom domains on production pushes: [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github)
- Vercel supports modern frontend and backend frameworks, including Next.js, Astro, Vite, FastAPI, and others: [Vercel frameworks](https://vercel.com/docs/frameworks)
- Vercel Hobby currently includes 200 projects, 100 deployments per day, and 50 custom domains per project: [Vercel Hobby plan](https://vercel.com/docs/plans/hobby)

## Recommended Technical Direction

Recommended stack:

- `Next.js` with App Router
- TypeScript
- Tailwind CSS
- MDX or structured content files for project stories
- Vercel deployment

Why this stack:

- fast to build
- strong for content-rich sites
- easy to make beautiful
- future-proof if we add contact forms, analytics, or search

## Content Structure

Recommended main pages:

- Home
- Projects
- Project detail pages
- About
- How I Build
- CV
- Contact

Optional later pages:

- Writing
- Notes on transport, ML systems, or engineering

## Home Page Plan

The home page should do the heaviest work.

Recommended sections:

### 1. Hero

Purpose:

- explain what Luis builds in one strong sentence
- create visual atmosphere immediately
- provide quick actions

Content:

- name
- short positioning line
- one short paragraph
- primary CTA to projects
- secondary CTA to CV or contact

### 2. Featured Proof

Purpose:

- show inspectable evidence quickly

Content:

- 3 featured projects
- strong one-line summaries
- visual thumbnails

Recommended projects:

- Argos / `gtfs_skims`
- Polaris
- NTAP

### 3. How I Build

Purpose:

- show engineering taste, not just output

Content themes:

- prototype to product
- contracts and clear boundaries
- testing and parity validation
- cloud and runtime thinking
- AI with rigor, not shortcuts

### 4. Capability Bands

Purpose:

- make the cross-section of skills visible without a boring skill dump

Bands:

- Algorithms and graph methods
- Backend and runtime systems
- AI / ML workflows
- Cloud deployment and orchestration
- Analytical UI and decision support

### 5. Career Through-line

Purpose:

- show the shape of the career without dumping the full CV

Content:

- short timeline across Arup LATAM, Arup CML, and World Bank work
- 1 line per role focused on what changed in scope and technical depth

### 6. Contact / Next Step

Purpose:

- convert interest into action

Content:

- email
- GitHub
- CV link
- optional LinkedIn

## Project Detail Page Plan

Each case study should have:

### Top section

- title
- one-line summary
- role, organization, timeframe
- proof tags such as `backend`, `graph algorithms`, `AWS`, `React`, `simulation`

### Core story

- problem
- constraints
- what Luis built
- hard decisions
- outcome

### Technical section

- architecture or workflow diagram
- selected technical highlights
- what this project proves

### Visual section

- image gallery or inline annotated visuals

### Closing section

- link to related projects or repo if public

## Design Direction

The site should feel more like a high-end product case-study site than a standard developer portfolio.

### Design principles

- editorial typography with strong hierarchy
- warm, confident, technically literate tone
- spacious layouts with visual rhythm
- diagrams, maps, and interface crops as primary decoration
- motion used to clarify, not distract

### Visual direction

Preferred mood:

- precise
- elegant
- modern
- systems-oriented
- human, not corporate

### Avoid

- purple SaaS landing-page look
- generic dark-mode hacker aesthetic
- noisy gradients with no meaning
- icon-grid skill sections
- overlong autobiographical writing

### Promising style direction

- light, paper-like base with deep ink colors
- muted transport and map-inspired accents such as slate, moss, rust, river-blue, or amber
- large headlines
- thin grid lines and subtle diagram overlays
- project cards that feel like case-study covers, not blog cards

## Proposed First Design System

- background: warm off-white
- text: deep charcoal or blue-black
- accent 1: dark moss
- accent 2: muted amber or rust
- accent 3: transport-map blue

Typography direction:

- expressive serif or semi-serif headline font
- clean sans serif for body and UI
- restrained mono for labels or technical metadata

## Build Phases

### Phase 1. Content intake

- collect missing project information
- gather screenshots and diagrams
- confirm privacy boundaries

### Phase 2. Site narrative

- finalize homepage hierarchy
- finalize project order
- finalize short and long profile copy

### Phase 3. Design system and wireframes

- choose visual direction
- define type, color, spacing, card system, and motion principles
- sketch the home page and one project page

### Phase 4. Implementation

- scaffold Next.js app
- build layout and reusable components
- implement home page
- implement projects index
- implement first two flagship project pages

### Phase 5. Polish

- responsive refinement
- motion tuning
- metadata and OG images
- accessibility pass
- copy tightening

## Immediate Next Inputs Needed From Luis

Before implementation, the highest-leverage inputs are:

- which hosting direction you want to commit to
- project answers using the intake template
- screenshots or raw material for Polaris, Argos, NTAP, and VAMOS
- whether you want a headshot on the site
- whether the tone should lean more `technical and understated` or `bold and visibly design-led`

## Recommended Default Path

If you want me to choose the default path and lead the build, I recommend:

1. Build the site with `Next.js` on `Vercel`
2. Start with these pages:
   - Home
   - Projects
   - About
   - CV
   - Contact
3. Launch first with 3 flagship case studies:
   - Argos / `gtfs_skims`
   - Polaris
   - NTAP
4. Add VAMOS and CRDT in a second wave
