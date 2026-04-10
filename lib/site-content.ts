import { buildGmailComposeUrl } from "@/lib/utils";

export type SectionKey =
  | "luis-parra"
  | "projects"
  | "how-i-build"
  | "cv"
  | "contact";

export type NavItem = {
  key: SectionKey;
  label: string;
  route: string;
};

export type SectionNavItem = {
  id: string;
  label: string;
};

export type ProjectVisualKind =
  | "ui"
  | "architecture"
  | "diagram"
  | "concept"
  | "visualization";

export type ProjectVisual = {
  src: string;
  alt: string;
  kind: ProjectVisualKind;
  caption: string;
  objectPosition?: string;
};

export type ProjectCard = {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  detailIntro: string;
  problem: string;
  contribution: string;
  challenge?: string;
  signal: string;
  tags: string[];
  accent: "teal" | "blue" | "rust" | "ink";
  ctaLabel: string;
  homeTitle?: string;
  coverImage: ProjectVisual;
  gallery: ProjectVisual[];
  homeSpan?: string;
};

export type CapabilityGroup = {
  title: string;
  summary: string;
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  summary: string;
};

export type EducationEntry = {
  award: string;
  institution: string;
  period: string;
  detail: string;
};

export type BuildPractice = {
  title: string;
  body: string;
};

export const siteIdentity = {
  name: "Luis Parra",
  title: "Software & ML Engineer",
  subtitle: "ML Systems | Algorithms | Full-Stack Products",
  headline: "Software & ML Engineer | ML Systems | Algorithms | Full-Stack Products",
  location: "London, UK",
  email: "luiszapata1998.lmpm@gmail.com",
  githubUrl: "https://github.com/LuisMartinParraMorales",
  githubLabel: "LuisMartinParraMorales",
  linkedinUrl:
    "https://www.linkedin.com/in/luis-martin-parra-morales-b85a6b160/",
  linkedinLabel: "Luis Martin Parra Morales",
  requestCvUrl: buildGmailComposeUrl({
    to: "luiszapata1998.lmpm@gmail.com",
    subject: "Luis Parra CV",
  }),
};

export const navigation: NavItem[] = [
  { key: "luis-parra", label: "Home", route: "/" },
  { key: "projects", label: "Projects", route: "/projects" },
  { key: "how-i-build", label: "How I Build", route: "/how-i-build" },
  { key: "cv", label: "CV", route: "/cv" },
  { key: "contact", label: "Contact", route: "/contact" },
];

export const routeToSectionKey: Record<string, SectionKey> = {
  "/": "luis-parra",
  "/projects": "projects",
  "/how-i-build": "how-i-build",
  "/cv": "cv",
  "/contact": "contact",
};

export const homePageSectionNav: SectionNavItem[] = [
  { id: "luis-parra", label: "Intro" },
  { id: "projects", label: "Projects overview" },
  { id: "how-i-build", label: "Build summary" },
  { id: "cv", label: "CV snapshot" },
  { id: "contact", label: "Contact" },
];

export const projectsPageSectionNav: SectionNavItem[] = [
  { id: "projects-overview", label: "Overview" },
  { id: "polaris", label: "Polaris" },
  { id: "ntap", label: "NTAP" },
  { id: "crdt", label: "CRDT" },
  { id: "argos", label: "Argos" },
];

export const buildPageSectionNav: SectionNavItem[] = [
  { id: "build-overview", label: "Overview" },
  { id: "build-process", label: "Working loop" },
  { id: "build-ai", label: "AI augmentation" },
  { id: "build-delivery", label: "Delivery" },
];

export const cvPageSectionNav: SectionNavItem[] = [
  { id: "cv-overview", label: "Overview" },
  { id: "cv-summary", label: "Summary" },
  { id: "cv-experience", label: "Experience" },
  { id: "cv-capabilities", label: "Capabilities" },
  { id: "cv-education", label: "Education" },
];

export const contactPageSectionNav: SectionNavItem[] = [
  { id: "contact-overview", label: "Overview" },
  { id: "contact-channels", label: "Channels" },
];

export const heroContent = {
  eyebrow: "Backend systems, ML engineering, analytical products",
  intro:
    "I build backend-heavy software and ML systems that turn complex analytical logic into products people can actually use, inspect, and trust. The domains change, but the pattern stays the same: make the workflow explicit, choose the right runtime, and ship something credible.",
  signalCards: [
    {
      title: "Current focus",
      body: "Turning analytical and algorithmic workflows into production systems: backend services, ML components, and interfaces that make complex decisions inspectable by the people who need to act on them.",
    },
    {
      title: "Deployment patterns",
      body: "Managed ML with SageMaker and Vertex AI; containerised services through ECR to ECS/EKS/Fargate or Artifact Registry to Cloud Run; CI/CD across AWS and GCP.",
    },
    {
      title: "Strongest contexts",
      body: "High-constraint products where the cost of being wrong is real: infrastructure, resilience, geospatial intelligence, public-sector decision support, and systems where trust is part of the product.",
    },
  ],
};

export const projectsOverviewSummary =
  "The homepage gives the overview layer. Open the case-study page for the deeper build story, visuals, and delivery decisions behind each project.";

export const cvOverviewSummary =
  "The homepage keeps the CV signal compact. The detailed page carries the fuller public summary and the latest CV request flow.";

export const homeCvContent = {
  title: "The quick CV view: where I’ve worked and what I keep building toward.",
  intro:
    "The recurring thread is fairly consistent: backend systems, algorithms, ML workflows, and product delivery working together in software that people can inspect, use, and trust.",
  note:
    "The detailed page has the fuller public summary and an easy way to request the latest CV.",
};

export const featuredProjects: ProjectCard[] = [
  {
    id: "polaris",
    title: "Polaris",
    organization: "World Bank",
    period: "2025 - 2026",
    summary:
      "I rebuilt a fragile spreadsheet-and-Streamlit workflow for Ukraine reconstruction into a cloud product where analysts can inspect data, tune scenarios, and rank infrastructure priorities with confidence.",
    detailIntro:
      "Polaris started from scripts, spreadsheets, geospatial layers, and a single-file Streamlit prototype used in Ukraine's education reconstruction prioritisation work. As the only full-stack engineer on the alpha, I rebuilt that into a React and Python platform with a guided workspace, explicit service contracts, and an AWS architecture that could support internal analysts without exposing the underlying analytical mess.",
    problem:
      "The World Bank team already had real analytical value, but it lived in a fragile shape: Python scripts, spreadsheets, GIS rasters and shapefiles, processed Excel workbooks, and a Streamlit explorer over prepared outputs. Analysts could inspect results, but the workflow was still pre-production: hard to run, hard to explain, difficult to extend across countries and datasets, and too dependent on manual handling.",
    contribution:
      "I owned the alpha end to end and implemented the full product architecture around the prioritisation workflow. I built the React and TypeScript workspace for workbook upload, inspection, scenario weighting, map outputs, ranked institutions, and oblast summaries, then connected it to an AWS architecture I delivered across the stack: CloudFront and S3 for the web experience, Cognito for access control, an Application Load Balancer in front of ECS on Fargate services, dedicated S3 layers for raw uploads, reference data, processor outputs, and processed workbooks, DynamoDB for job metadata and status, EventBridge and Lambda for scheduled harvesting, Step Functions for orchestration, ECR for container images, Secrets Manager for secrets, and CloudWatch for logs and monitoring. That architecture let the product move beyond a prototype explorer into a cloud-deployed system with explicit processing stages, shared intermediate data, and a cleaner path for new analytical modules.",
    challenge:
      "The hard part was not only full-stack ownership. I used AI-assisted engineering to move fast enough for an alpha, but this was not a context where speed could come at the expense of trust. The tool was being shaped for Ukraine and other war-affected contexts, so deployment had to account for authentication, edge exposure, and the risk of hostile access. At the same time, I still needed behavioral parity with the existing prototype, which meant explicit specs, locked parity scenarios, and tests rather than letting the implementation drift.",
    signal:
      "Polaris is one of the clearest examples of the profile I want to put forward: taking a messy analytical workflow, owning the frontend and backend together, and turning it into a product that feels credible. It shows productisation, AWS architecture, API design, parity validation, and the judgment to combine AI-assisted speed with real engineering discipline.",
    tags: ["AWS", "React", "ECS/Fargate", "Step Functions"],
    accent: "teal",
    ctaLabel: "Read Polaris case study",
    coverImage: {
      src: "/images/projects/polaris/cover-workspace-inspected.png",
      alt: "Polaris prioritisation workspace after loading a workbook, showing scope weights, ranked indicators, map outputs, and grouped comparisons.",
      kind: "ui",
      caption:
        "Loaded workspace showing workbook inspection, scope and weight controls, map outputs, ranked institutions, and grouped comparisons in one analyst workflow.",
      objectPosition: "center top",
    },
    gallery: [
      {
        src: "/images/projects/polaris/detail-workspace-empty-state.png",
        alt: "Polaris workspace before a workbook is loaded, showing the zero-state prioritisation canvas and guide panels.",
        kind: "ui",
        caption:
          "Zero-state workspace showing the guided analyst flow before a workbook is loaded and the scoring canvas activates.",
        objectPosition: "center top",
      },
      {
        src: "/images/projects/polaris/architecture.png",
        alt: "AWS architecture diagram for Polaris microservices and data workflow.",
        kind: "architecture",
        caption:
          "Reference AWS architecture showing CloudFront, S3, Cognito, ALB, ECS on Fargate, DynamoDB, EventBridge, Lambda, Step Functions, ECR, Secrets Manager, and CloudWatch around the Polaris processing workflow.",
      },
    ],
    homeSpan: "md:col-span-2 xl:col-span-2",
  },
  {
    id: "ntap",
    title: "NTAP",
    organization: "Arup City Modelling Lab",
    period: "2024 - Present",
    summary:
      "I helped turn a national transport forecasting workflow from one to two days per scenario into a GPU-backed platform that can run in about ten minutes.",
    detailIntro:
      "NTAP is the Department for Transport's new National Transport Analysis Platform. I worked across the modelling and platform layers that moved a slow, matrix-heavy national workflow into a GPU-backed system for scenario testing, appraisal, and faster policy evaluation.",
    problem:
      "The baseline workflow ran the transport model itself in VISSUM through the traditional four stages: trip generation, distribution, mode choice, and assignment. At NTAP scale that meant 72,250 by 72,250 matrices and more than 1,000 matrix reads and writes across a forecast, with a single scenario taking one to two days. Preprocessing and TAG-based appraisal then sat outside the model as separate analyst-heavy tools, which meant the full workflow was not only slow but also fragmented and manual.",
    contribution:
      "I worked where algorithmic performance and software engineering had to meet. I experimented with parts of the new demand-model stack, parallelised core stages with CUDA, and deployed them as microservices on GCP GPU infrastructure. That covered generation over a synthetic population, gravity-based trip distribution, nested-logit mode choice, and parallelised post-processing, with Protocol Buffers handling efficient service-to-service data exchange. The platform also introduced API-driven preprocessing and TAG-based appraisal around the modelling stage, and I helped productise appraisal code with CI/CD so it could run as part of the platform instead of living as one-off analysis.",
    challenge:
      "The hard part was not only speed. We were replacing a trusted national modelling workflow, so the new stack had to earn confidence as well as runtime gains. That meant making the services inspectable, deployable, and operationally credible while the analytical logic was being reworked underneath.",
    signal:
      "NTAP is one of the clearest examples of the kind of work I like most: taking heavy analytical logic, combining transport-modelling depth with strong software engineering, and turning it into a platform people can actually run and trust. The result was not just faster code. It was a new operational shape for national scenario modelling, with GPU services, CUDA acceleration, and appraisal components that could live inside a real CI/CD-driven platform.",
    tags: ["GCP", "CUDA", "Protocol Buffers", "CI/CD"],
    accent: "rust",
    ctaLabel: "Read NTAP case study",
    homeTitle: "NTAP - National Transport Analysis Platform",
    coverImage: {
      src: "/images/projects/ntap/cover-ui.png",
      alt: "NTAP runtime-facing interface illustrating service orchestration, messaging, and operational controls for model execution.",
      kind: "ui",
      caption:
        "Runtime-facing UI used to explain how model services, orchestration, and execution states were coordinated inside NTAP.",
      objectPosition: "center top",
    },
    gallery: [
      {
        src: "/images/projects/ntap/architecture.png",
        alt: "NTAP architecture diagram showing GPU-backed model services, APIs, data exchange, and appraisal components.",
        kind: "architecture",
        caption:
          "Reference architecture showing how GPU-backed model components, APIs, and appraisal services were deployed as platform microservices rather than remaining isolated analytical code.",
      },
    ],
    homeSpan: "md:col-span-1 xl:col-span-1",
  },
  {
    id: "crdt",
    title: "CRDT",
    organization: "Arup City Modelling Lab",
    period: "2024 - Present",
    summary:
      "An alpha resilience platform that links live transport, hazard, and population signals to anomaly detection, graph reasoning, and mitigation scenario generation.",
    detailIntro:
      "CRDT is an alpha Crisis Response and Resilience Digital Twin built to move from live incident signals into scenario testing and alerting inside one operational system. Instead of treating monitoring, anomaly detection, and mitigation planning as separate tools, the platform ties them together through a transport-ontology context core so users can inspect what is happening now and explore what to do next.",
    problem:
      "Operational users did not just need another dashboard. They needed one system that could ingest demand, network, hazard, and novel data; maintain shared transport context in a knowledge graph; classify incidents and anomalies; estimate network and population impacts; and generate mitigation scenarios without forcing analysts to stitch together disconnected workflows by hand.",
    contribution:
      "My scope sat in the service layer that made the alpha operational. I owned the data harvesters for demand, hazard, and novel data end to end, packaging them as containerised microservices, publishing images through Artifact Registry, and deploying them onto Cloud Run so the platform could pull live and reference data on scheduled and on-demand paths. On the ML side I worked on anomaly-detection experimentation, then productised the selected model as a managed Vertex AI service with CI/CD into GCP so detection logic could be versioned, deployed, and invoked as part of the platform rather than living in notebooks. I also built graph-algorithm services as microservices on the same Artifact Registry to Cloud Run path and worked on the GenAI component behind the mitigation scenario generator. Together those services supported the Neo4j context core and the jump from incident detection into scenario generation, impact analysis, and alerting.",
    challenge:
      "What made the work hard was turning a wide system diagram into a real alpha without collapsing it into a demo. CRDT combined live data ingestion, a knowledge-graph core, graph algorithms, anomaly detection, flood and transport impact modelling, and experimental GenAI. Each part wanted a different runtime shape, so the engineering problem was deciding what should run as a managed ML service, what should run as container microservices, and how to keep the experimental pieces clearly separated from the operational core.",
    signal:
      "CRDT shows the combination of backend engineering, ML engineering, and graph-based systems work that I want to be known for: live data services, managed ML deployment, graph computation, and decision-support product thinking in a public-sector resilience setting. It is a good example of building an alpha that is already system-shaped rather than notebook-shaped.",
    tags: ["Cloud Run", "Vertex AI", "Neo4j", "GenAI"],
    accent: "ink",
    ctaLabel: "Read CRDT case study",
    homeTitle: "CRDT - Crisis Response and Resilience Digital Twin",
    coverImage: {
      src: "/images/projects/crdt/cover-ui.png",
      alt: "CRDT scenario modelling dashboard for resilience analysis.",
      kind: "ui",
      caption:
        "Scenario modelling dashboard used for resilience analysis and operational decision support.",
      objectPosition: "center top",
    },
    gallery: [
      {
        src: "/images/projects/crdt/diagram.png",
        alt: "CRDT system diagram showing the knowledge-graph core, incident detection, scenario modelling, and alerting flows.",
        kind: "diagram",
        caption:
          "System diagram showing how demand, network, hazard, and novel data flow through a Neo4j context core into incident detection, scenario modelling, mitigation generation, and alerting.",
      },
    ],
    homeSpan: "md:col-span-2 xl:col-span-2",
  },
  {
    id: "argos",
    title: "Argos",
    organization: "Arup City Modelling Lab",
    period: "2024 - Present",
    summary:
      "I helped turn raw GTFS feeds into a reproducible skimming engine that builds a unified transit graph, runs parallel shortest paths, and produces OD matrices analysts can reuse.",
    detailIntro:
      "Argos is an open-source transit skimming engine built to turn raw GTFS feeds into reusable generalised-cost matrices and accessibility outputs. Instead of rebuilding feed-specific notebooks every time a network changed, the system gives analysts a structured batch pipeline with explicit stages, inspectable artifacts, and a graph solver shaped for transport-scale shortest-path work.",
    problem:
      "Transit analysts needed more than another script that happened to work on one feed. They needed a repeatable way to go from GTFS inputs, projected origins and destinations, and a validated config into origin-destination skim matrices that could support accessibility and generalised-cost analysis across different networks. Without that, each new study risked turning back into a custom notebook or a brittle chain of feed-specific preprocessing steps.",
    contribution:
      "I worked on the parts of the pipeline where transport logic and software structure had to line up cleanly. That included graph construction, spatial connector generation, shortest-path workflows, output extensions, and the CLI shape that orchestrates the stages. The system diagram captures that architecture well: a thin CLI entrypoint loads validated config, preprocessing reduces the GTFS problem early and persists filtered parquet outputs, connector stages build access, egress, and transfer links with KDTree-based spatial search, and the graph stage assembles a unified transit network before running parallel shortest-path searches to produce the final OD skim matrix. I also worked on the shared contracts and regression-tested behaviour so the pipeline stayed inspectable, rerunnable, and reliable as the product evolved.",
    challenge:
      "What made Argos interesting was that performance was only half the job. The graph solve is the expensive stage, but the architectural quality comes from what happens around it: reducing problem size early, keeping parquet artifacts between stages, and making each step inspectable enough that analysts can rerun or debug one part without reopening the whole GTFS feed. That is a small-system version of the product taste I care about most.",
    signal:
      "Argos is a strong public proof point because it shows algorithmic depth and engineering taste in the same place: GTFS preprocessing, spatial connector logic, graph assembly, shortest-path solving, and an open-source workflow that is explicit enough to trust. It is the kind of transport-software work that looks simple from the outside and turns out to reward careful systems thinking underneath.",
    tags: ["Python", "GTFS", "Graph algorithms", "CLI"],
    accent: "blue",
    ctaLabel: "Read Argos case study",
    coverImage: {
      src: "/images/projects/argos/cover-visual-output.png",
      alt: "Argos visual output showing a dense urban transit accessibility surface across London.",
      kind: "visualization",
      caption:
        "Updated Argos visual output showing the kind of network-scale accessibility surface the skimming workflow can produce.",
      objectPosition: "center center",
    },
    gallery: [
      {
        src: "/images/projects/argos/diagram.png",
        alt: "Argos system diagram showing the staged GTFS skimming pipeline from inputs and CLI orchestration into preprocessing, connectors, graph solving, and the final OD skim matrix.",
        kind: "diagram",
        caption:
          "System diagram showing how validated config, GTFS inputs, staged parquet artifacts, connector generation, and graph solving come together in the Argos skimming pipeline.",
      },
    ],
    homeSpan: "md:col-span-1 xl:col-span-1",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Backend Systems & Full-Stack Delivery",
    summary:
      "Python-first backends, APIs, containerised services, orchestration in ECS/EKS and Kubernetes, and analytical interfaces in JavaScript and React.js.",
  },
  {
    title: "AI / ML Systems & Lifecycle Ownership",
    summary:
      "Anomaly detection, forecasting, econometric and AutoML workflows, AI agents for enterprise workflows, and lifecycle ownership from experimentation to deployment and monitoring.",
  },
  {
    title: "Algorithms & Quantitative Methods",
    summary:
      "Graph analytics, shortest path, routing, scheduling, MIP/OR, generalised-cost modelling, and CUDA acceleration for large-scale computation.",
  },
  {
    title: "Cloud Platforms & Deployment Patterns",
    summary:
      "Managed ML delivery in SageMaker, ECR into ECS/EKS on Fargate or EC2, ECR into Lambda, and CI/CD through CodeBuild and CodePipeline across AWS and GCP environments.",
  },
  {
    title: "Engineering Quality & Reliability",
    summary:
      "TDD, maintainability, automation, and operational discipline built into delivery from the start.",
  },
];

export const homeBuildSummary =
  "I usually start on paper, not in the editor. I sketch the problem, research options with AI and primary sources, pressure-test the architecture with people, and then build in small, test-led slices that stay readable enough to own line by line.";

export const homeBuildHighlights: BuildPractice[] = [
  {
    title: "Start before the editor",
    body: "Sketches, notes, and rough diagrams help me separate the real problem from the first implementation idea before I write code.",
  },
  {
    title: "Use AI to widen the search space",
    body: "I use AI to research options faster, but I still read docs, compare approaches, and decide the architecture myself.",
  },
  {
    title: "Ship with ownership",
    body: "Small PRs, tests, documentation, and CI/CD help me move quickly without losing control of the code or the reasoning behind it.",
  },
];

export const buildWorkingLoop: BuildPractice[] = [
  {
    title: "Start with paper and notes",
    body: "I usually begin away from the editor. Sketching the workflow on paper helps me make the problem concrete before I commit to a technical shape.",
  },
  {
    title: "Research broadly, then narrow deliberately",
    body: "I look across algorithms, cloud runtimes, papers, docs, and implementation patterns. AI helps me explore faster, but I still want the tradeoffs in front of me before I choose.",
  },
  {
    title: "Architect before I automate",
    body: "Once the constraints are clear, I design the system shape, interfaces, and failure boundaries before I try to generate or implement code.",
  },
  {
    title: "Pressure-test the design with people",
    body: "Before the architecture is locked in, I like to review it with teammates, a pair, or someone more senior. A fresher human mind catches risks that momentum can miss.",
  },
  {
    title: "Build in small reviewable slices",
    body: "I prefer small PRs and explicit steps. That keeps reviews easier, limits regressions, and makes every change, including AI-assisted code, something I can inspect line by line.",
  },
  {
    title: "Use tests to understand the logic",
    body: "TDD is not only a safety net for me. Writing tests first helps me pin down behavior, understand edge cases, and reduce hallucination risk when AI is in the loop.",
  },
];

export const buildAiPractices: BuildPractice[] = [
  {
    title: "AI is a research and acceleration tool",
    body: "I use AI to compare options, pressure-test ideas, generate drafts, and move faster through repetitive implementation work. It helps me cover more ground, especially when the space includes unfamiliar libraries or cloud products.",
  },
  {
    title: "Architecture and judgment stay human",
    body: "AI can suggest patterns, but I still decide the system boundaries, the contracts, and the deployment shape. That is where most of the long-term quality comes from.",
  },
  {
    title: "Ownership never leaves me",
    body: "Even if AI writes part of the first draft, I still own every line that ships. Small PRs, tests, and review discipline are how I keep that true.",
  },
];

export const buildDeliveryPractices: BuildPractice[] = [
  {
    title: "Simplify before calling it done",
    body: "I iterate the code until it feels simpler and clearer than the first working version. I try to remove AI verbosity, unnecessary abstraction, and cleverness that does not pay rent.",
  },
  {
    title: "Document while the context is fresh",
    body: "I treat documentation as part of the system, not a cleanup task. Good notes, diagrams, and README-level explanations make the work easier to review, reuse, and extend.",
  },
  {
    title: "Put CI/CD in place early",
    body: "I like the feedback loop to start early: tests, linting, and basic automation first; fuller deployment pipelines once the product shape is stable enough to justify them.",
  },
  {
    title: "Match the runtime to the workload",
    body: "Managed ML services, containerised microservices, and serverless jobs each solve different problems. I choose the runtime to fit the workload, not the trend.",
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    role: "ML & Algorithm Engineer",
    organization: "Arup | City Modelling Lab",
    period: "Sept 2024 - Present",
    summary:
      "Built and productionised Python backends for transport, simulation, and decision-support products across Argos, CRDT, NTAP, and VAMOS, with strong emphasis on testing, CI/CD, and cloud deployment.",
  },
  {
    role: "Software and ML Engineer (Contractor)",
    organization: "World Bank",
    period: "Sep 2025 - Feb 2026",
    summary:
      "Built Polaris as an AI/ML-powered decision-support platform with ML and geospatial microservices, typed APIs, event-driven pipelines, and a React-based map interface.",
  },
  {
    role: "Data Scientist / Analyst",
    organization: "Arup LATAM",
    period: "Jan 2020 - Aug 2024",
    summary:
      "Built optimisation, GTFS, and network-analysis workflows for transport operations, accessibility, demand assessment, and infrastructure planning across Latin America.",
  },
];

export const education: EducationEntry[] = [
  {
    award: "MSc Data Science",
    institution: "Imperial College London",
    period: "2024 - 2025",
    detail: "Distinction | Departmental Scholar | COLFUTURO Scholar",
  },
  {
    award: "BSc Earthquake Engineering",
    institution: "Universidad de los Andes, Colombia",
    period: "2016 - 2020",
    detail: "Full-tuition scholar, Colombia’s National Government",
  },
];

export const cvSummary =
  "This public summary focuses on the shape of the profile and the evidence behind it: backend delivery, algorithms, ML workflows, and deployment rigor operating as one coherent system.";

export const homeContactContent = {
  title: "If the work resonates, I’d be glad to hear from you.",
  intro:
    "The easiest way to reach me is still the simplest one: send an email, look through the code, or connect on LinkedIn. If you want to talk about engineering work, a role, or one of the systems on this site, that is exactly what this section is for.",
};

export const contactIntro =
  "Email is the easiest route for opportunities, CV requests, or a conversation about the systems on this site. LinkedIn and GitHub are there if you want the public profile or the code trail.";
