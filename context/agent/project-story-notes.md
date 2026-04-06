# Project Story Notes

These are website-ready planning notes, not final polished project pages. They are meant to preserve the strongest story shape before we turn each one into public copy.

## Argo / `gtfs_skims`

### Problem

Public-transport accessibility and skimming workflows needed a fast, reusable way to build generalized-cost matrices from GTFS data rather than relying on one-off analysis code.

### Constraints

- GTFS data is messy and large
- generalized-cost skims need both transport realism and computational efficiency
- outputs need to be trustworthy enough for repeated analytical use
- the public repo has to stand on its own, so the code and tests need to explain the method clearly

### What Luis built

- graph and connector logic around GTFS stop-times and access/egress or transfer edges
- KD-tree based spatial connector search
- shortest-path and output-skim handling work
- test coverage for connector behavior, graph edge cases, config behavior, and disaggregated skim outputs

### Hard decisions

- favor correctness and edge-case coverage over a "black box fast algorithm" story
- make disaggregated outputs and connector edge cases explicit in tests
- keep the public proof point inspectable and reproducible

### Outcome

- stronger open-source proof of algorithmic and transport-network engineering
- reusable public artifact for interviews and portfolio review
- evidence of both implementation and engineering discipline, not only domain familiarity

### Public-safety note

Safe to use as a flagship public project.

## Polaris

### Problem

The starting point was not a clean product. It was a workbook-driven and spreadsheet-heavy prioritisation workflow with a single-file Streamlit prototype over prepared data, which made the analytical logic useful but hard to scale, explain, or extend cleanly.

### Constraints

- the prototype already embodied useful analyst workflows, so the alpha version could not ignore it
- users needed weighting controls, maps, ranked outputs, and summaries without touching code
- the team needed a clearer backend boundary without over-engineering too early
- the system had to preserve prototype behavior while the architecture changed

### What Luis built

- a clearer product direction around an internal prioritisation platform
- workbook inspection and normalization logic in a backend service
- weighted scoring logic with explicit contracts and test coverage
- a React/TypeScript map-first workspace UI
- parity tests that lock service behavior to known prototype scenarios

### Hard decisions

- start with one service and clean internal module boundaries instead of forcing a distributed architecture
- build the UI and contracts around the real analyst journey rather than inventing abstractions too early
- treat parity with the prototype as an engineering requirement, not a nice-to-have

### Outcome

- a much stronger prototype-to-product story than "rebuilt a dashboard"
- clearer separation between UI, service, and analytical logic
- reusable evidence for backend, full-stack, and decision-support product work

### Public-safety note

Safe if we keep the story at the level of internal prioritisation software and avoid unnecessary client-sensitive detail.

## NTAP Journey Time Runtime

### Problem

Journey-time savings calculations and related validation workflows needed a clearer runtime and contract boundary inside a much larger transport analytics platform, especially where Scenexus integration, payload validation, and runtime behavior had to be dependable.

### Constraints

- the work sits inside a broader programme, so the story needs to focus on Luis's slice rather than claiming the whole platform
- runtime code had to integrate with external systems and platform expectations
- validation and repeatability matter because analytical outputs feed downstream decisions and dashboards

### What Luis built

- JT-savings payload contracts and runtime error structures
- a segment-oriented calculation pipeline
- Scenexus-facing runtime service and launcher patterns
- API client, benchmarking, and validation-dashboard workflow pieces
- documentation that turns runtime internals into something other engineers can adopt

### Hard decisions

- keep the calculation core separate from runtime wiring
- use stable payload and error contracts instead of letting runtime integration become ad hoc
- invest in docs and validation flows because integration quality matters as much as formula correctness

### Outcome

- a stronger backend/runtime proof point than a normal analytics script
- evidence for ML-systems-adjacent and platform-facing engineering roles
- reusable material for explaining contract-first engineering in analytical systems

### Public-safety note

Safe if framed as journey-time runtime and validation work within NTAP, not as sole ownership of the full platform.

## Basildon / VAMOS

### Problem

Agent-based model outputs are valuable but hard to operationalize. Analysts needed reusable ways to turn MATSim and related outputs into intervention comparison, congestion views, trip-pattern analysis, and dashboard-ready datasets.

### Constraints

- simulation outputs are large and multi-stage
- workflows need to run repeatedly across scenarios and intervention variants
- outputs need to be understandable to analysts, not only technically correct
- batch execution and filesystem/runtime conventions matter

### What Luis built

- reusable post-processing scripts and orchestration for insights workflows
- VAMOS refactor and batch entrypoints
- congestion and mitigation comparison outputs, including delta overlays and PT reporting
- intervention profiling and concatenation workflows for scenario comparison

### Hard decisions

- refactor legacy analytical logic into reusable scripts and batch-friendly entrypoints
- focus on outputs that make scenario comparison legible rather than producing raw data only
- keep the workflow practical for analysts who need maps, parquet outputs, and dashboard inputs

### Outcome

- stronger operational use of simulation outputs
- evidence of AWS Batch aware analytical engineering
- a differentiated story around transport simulation, post-processing, and insight delivery

### Public-safety note

Safe if sanitized around engineering patterns and analytical outputs, while avoiding unnecessary operational details and internal paths.

## CRDT

### Problem

The programme needed a credible architecture for a crisis-response and resilience digital twin that could combine multi-modal data, incident detection, hazard context, scenario modelling, and analyst-facing outputs.

### Constraints

- public-sector security and governance expectations
- multiple analytical components with different runtime profiles
- need to show value early while keeping an extensible architecture
- platform design had to work around real delivery constraints, not idealized greenfield assumptions

### What Luis built

- strongest currently visible contribution is in architecture and platform-shaping context rather than clearly attributable implementation code
- the repo still gives useful evidence around knowledge-graph, scenario-modelling, API, dashboard, and secure GCP platform design

### Hard decisions

- prefer a chunked and pragmatic platform approach instead of pretending the whole digital twin would arrive fully formed
- balance serverless simplicity with the needs of modelling, ingestion, and dashboard delivery
- build secure-by-design foundations into the architecture rather than treating them as an afterthought

### Outcome

- strong systems-thinking and digital-twin architecture signal
- useful supporting evidence for platform and public-sector positioning

### Public-safety note

Use carefully. This is better as an architecture case or supporting note unless Luis confirms stronger direct ownership.

## Keep Private vs Safe Public

### Safe public themes

- architecture choices
- workflow shape
- analytical-product problems
- validation and testing decisions
- maps, ranked outputs, parquet/export patterns, contracts, and runtime boundaries

### Better kept private

- internal URLs
- cloud account details
- raw data paths
- unnecessary client-specific operational details
- ownership claims that go beyond the directly visible evidence
