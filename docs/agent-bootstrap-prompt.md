# Agent Bootstrap Prompt

You are working on Luis Parra's public portfolio repo. Build a strong, evidence-backed understanding of his profile, projects, and messaging before changing site content.

Important staging rule:

- treat `context/agent/` as the working area for strategy notes, message drafts, and project-story planning
- do not move material from `context/agent/` into public-facing `content/` paths unless Luis explicitly asks for that promotion

## Goal

Understand Luis well enough to build:

- a credible public profile
- sharp homepage messaging
- strong project story pages
- public-safe summaries of his work

The portfolio should support job applications for:

- Software & ML Engineer
- ML Systems / AI Systems Engineer
- Data Scientist with strong engineering depth

## Workspaces To Use

Primary public repo:

- `/Users/luis.parramorales/dev/luis-parra`

Internal/private source of truth:

- `/Users/luis.parramorales/dev/career-foundation`

Primary current source of truth for experience and project framing:

- `/Users/luis.parramorales/dev/career-foundation/cv/master-cv.docx`

Relevant project repos to inspect:

- `/Users/luis.parramorales/dev/ntap`
- `/Users/luis.parramorales/dev/crdt`
- `/Users/luis.parramorales/dev/polaris-project`
- `/Users/luis.parramorales/dev/decision-support-wb`
- `/Users/luis.parramorales/dev/basildon_local_plan`
- `/Users/luis.parramorales/dev/gtfs_skims`

Supporting CV document:

- `/Users/luis.parramorales/Library/CloudStorage/OneDrive-Arup/CV - Trabajo/Pro Versions/Via/Luis Parra - Via.docx`

## How To Work

Use the harness heavily. Inspect real files, docs, tests, workflows, and git history.

Prefer:

- `rg --files`, `rg`, `find`, `sed`
- `git log`, `git blame`, and authored-commit checks where useful
- `textutil -convert txt -stdout` for `.docx`

Do not write public marketing copy until you understand:

- what Luis actually built
- what is public-safe to share
- which claims are strong versus speculative

Priority rule:

- treat the current master CV as the primary truth for Luis's experience, chronology, education wording, project framing, and technical stack
- use repos and docs to support, sharpen, and evidence that story rather than to override it

## Portfolio Context To Rebuild

Luis wants the site to feel like a product, not a generic portfolio.

The public framing should emphasize:

- AI/ML-powered decision-support systems
- backend-heavy full-stack products
- algorithms, optimisation, and graph methods
- cloud-capable engineering across AWS and GCP
- transport, geospatial, public-sector, and simulation contexts
- AI-augmented engineering without sounding like a low-rigor “vibe coder”

The most important projects to understand:

- Polaris / World Bank platform
- Argos / `gtfs_skims`
- CRDT
- NTAP
- VAMOS / Basildon
- AutoML Agent

## Tasks

1. Read the current master CV first, then `context/agent/` and the internal knowledge-base docs.
2. Inspect the source repos and extract the strongest public-safe stories.
3. For each major project, prepare notes in this structure:
   - problem
   - constraints
   - what Luis built
   - hard decisions
   - outcome
4. Separate public-safe evidence from private/internal-only detail.
5. Store early-stage portfolio strategy and message drafts in `context/agent/` until Luis asks to turn them into public site content.
6. Propose site messaging that is technically specific, ambitious, and honest.

## Deliverables

Update the public repo so it contains:

- agent-context drafts for profile positioning, homepage messaging, project story notes, and site strategy
- only public-facing content when Luis explicitly asks for it
- a list of missing assets or screenshots that would strengthen the site

## Quality Bar

Avoid generic phrases unless they are backed by concrete proof.

The final public messaging should make it clear that Luis:

- builds real systems, not just notebooks
- can own backend-heavy delivery and analytical products
- has strong algorithmic and geospatial depth
- uses AI to accelerate engineering without lowering rigor
