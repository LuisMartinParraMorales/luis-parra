import { buildGmailComposeUrl } from "@/lib/utils";

export type SectionKey =
  | "luis-parra"
  | "projects"
  | "about"
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

export type ProjectVisualKind = "ui" | "architecture" | "concept" | "visualization";

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
  { key: "about", label: "About", route: "/about" },
  { key: "how-i-build", label: "How I Build", route: "/how-i-build" },
  { key: "cv", label: "CV", route: "/cv" },
  { key: "contact", label: "Contact", route: "/contact" },
];

export const routeToSectionKey: Record<string, SectionKey> = {
  "/": "luis-parra",
  "/projects": "projects",
  "/about": "about",
  "/how-i-build": "how-i-build",
  "/cv": "cv",
  "/contact": "contact",
};

export const homePageSectionNav: SectionNavItem[] = [
  { id: "luis-parra", label: "Intro" },
  { id: "projects", label: "Projects overview" },
  { id: "about", label: "Profile summary" },
  { id: "how-i-build", label: "Build summary" },
  { id: "cv", label: "CV snapshot" },
  { id: "contact", label: "Contact" },
];

export const projectsPageSectionNav: SectionNavItem[] = [
  { id: "projects-overview", label: "Overview" },
  { id: "polaris", label: "Polaris" },
  { id: "argos", label: "Argos" },
  { id: "ntap", label: "NTAP" },
  { id: "crdt", label: "CRDT" },
];

export const aboutPageSectionNav: SectionNavItem[] = [
  { id: "about-overview", label: "Overview" },
  { id: "about-narrative", label: "Narrative" },
  { id: "about-capabilities", label: "Capabilities" },
];

export const buildPageSectionNav: SectionNavItem[] = [
  { id: "build-overview", label: "Overview" },
  { id: "build-deployment", label: "Deployment" },
  { id: "build-principles", label: "Principles" },
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
  eyebrow: "Backend systems, ML delivery, analytical products",
  intro:
    "I build backend-heavy software and ML products that turn analytical workflows into usable decision-support tools across transport, geospatial, simulation, and public-sector contexts.",
  signalCards: [
    {
      title: "Current focus",
      body: "Productising analytical workflows with backend services, ML pipelines, and interfaces that non-specialists can trust.",
    },
    {
      title: "Deployment patterns",
      body: "SageMaker, ECR into ECS/EKS, ECR into Lambda, and CI/CD through CodeBuild and CodePipeline.",
    },
    {
      title: "Strongest contexts",
      body: "Transport, geospatial, simulation, infrastructure, and public-sector systems where correctness and delivery both matter.",
    },
  ],
};

export const projectsOverviewSummary =
  "The homepage gives the overview layer. Open the case-study page for the deeper build story, visuals, and delivery decisions behind each project.";

export const cvOverviewSummary =
  "The homepage keeps the CV signal compact. The detailed page carries the fuller public summary and the latest CV request flow.";

export const featuredProjects: ProjectCard[] = [
  {
    id: "polaris",
    title: "Polaris",
    organization: "World Bank",
    period: "2025 - 2026",
    summary:
      "AI/ML decision-support platform for infrastructure prioritisation in data-scarce countries.",
    detailIntro:
      "A full-stack platform that turned fragmented global, administrative, and satellite-derived data into investment signals inside a usable prioritisation workflow.",
    problem:
      "Prioritisation teams needed a credible way to combine geospatial evidence, ML signals, and infrastructure context without relying on brittle prototype-heavy analysis.",
    contribution:
      "Delivered the product stack across ML and geospatial microservices, typed APIs, scheduled and event-driven pipelines, and a React-based map interface.",
    signal:
      "Shows full-stack delivery, cloud deployment, typed services, and productisation of a previously prototype-heavy workflow.",
    tags: ["AWS", "React", "Geospatial", "Decision support"],
    accent: "teal",
    ctaLabel: "Read Polaris case study",
    coverImage: {
      src: "/images/projects/polaris/cover-workspace-inspected.png",
      alt: "Polaris prioritisation workspace after loading a workbook, showing scope weights, ranked indicators, map outputs, and grouped comparisons.",
      kind: "ui",
      caption:
        "Loaded workspace view showing scoped indicators, weighted ranking, spatial outputs, and grouped comparisons in one workflow.",
      objectPosition: "center top",
    },
    gallery: [
      {
        src: "/images/projects/polaris/detail-workspace-empty-state.png",
        alt: "Polaris workspace before a workbook is loaded, showing the zero-state prioritisation canvas and guide panels.",
        kind: "ui",
        caption:
          "Zero-state workspace before a workbook is loaded, clarifying how the prioritisation canvas activates.",
        objectPosition: "center top",
      },
      {
        src: "/images/projects/polaris/architecture.png",
        alt: "AWS architecture diagram for Polaris microservices and data workflow.",
        kind: "architecture",
        caption:
          "Reference AWS architecture showing the service and data workflow behind Polaris.",
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
      "Open-source GTFS skimming engine for generalized-cost analysis and reusable accessibility outputs.",
    detailIntro:
      "An open-source transit skimming engine that turns GTFS feeds into reusable accessibility and generalised-cost outputs.",
    problem:
      "Analysts needed reproducible skims and accessibility outputs without rebuilding custom notebooks and feed-specific scripts for every new network.",
    contribution:
      "Worked on graph construction, spatial connector generation, shortest-path workflows, output extensions, and regression-tested CLI tooling for generalized-cost analysis.",
    signal:
      "Shows algorithmic depth, open-source proof, transport-network reasoning, and correctness-focused engineering.",
    tags: ["GTFS", "Graph algorithms", "Open source", "Python"],
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
        src: "/images/projects/argos/architecture.png",
        alt: "Argos architecture diagram for GTFS ingestion and skimming workflow.",
        kind: "architecture",
        caption:
          "Reference architecture for GTFS ingest, skimming workflow, and output generation.",
      },
    ],
    homeSpan: "md:col-span-1 xl:col-span-1",
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
    tags: ["GCP", "CUDA", "CI/CD", "Microservices"],
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
      "Resilience platform combining real-time multimodal data, anomaly detection, and scenario analysis for crisis response.",
    detailIntro:
      "A public-sector resilience platform that brings live multimodal data, incident logic, anomaly detection, and scenario analysis into one operational workflow.",
    problem:
      "Operational users needed one environment to move from live data and incident context into scenario exploration without jumping across disconnected tools.",
    contribution:
      "Contributed to backend and cloud-facing components that supported ingestion, AI/ML workflows, and decision-support services in GCP-oriented delivery.",
    signal:
      "Shows cloud-aware backend work in a digital-twin-style public-sector system where data flows, scenarios, and operational trust all matter.",
    tags: ["GCP", "Resilience", "Anomaly detection", "Public sector"],
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
        src: "/images/projects/crdt/architecture.png",
        alt: "CRDT reference architecture diagram for data ingestion and decision-support services.",
        kind: "architecture",
        caption:
          "Reference architecture for ingestion, analytics, and decision-support services behind CRDT.",
      },
    ],
    homeSpan: "md:col-span-2 xl:col-span-2",
  },
];

export const aboutNarrative = [
  "I am strongest where analytical logic and software delivery meet. The work usually starts in an awkward state: a spreadsheet process, a GTFS pipeline, a simulation output, or a prototype that only specialists can operate confidently.",
  "My role is to preserve what matters in that analytical core while giving it a cleaner system shape: typed APIs, backend services, orchestration-aware workflows, and interfaces that let people use the system without touching the internals.",
  "That makes the profile broader than a generic data scientist and more product-facing than a purely algorithmic specialist. It is a backend-heavy, cloud-capable engineering profile grounded in algorithms, decision support, and operational rigor.",
];

export const aboutHighlights = [
  {
    title: "Where the profile is strongest",
    body: "Software and ML systems that need algorithms, product delivery, and deployment choices to work together as one credible whole.",
  },
  {
    title: "What makes it distinctive",
    body: "Transport, geospatial, simulation, and public-sector depth combined with the ability to build services, runtimes, and usable analytical interfaces.",
  },
  {
    title: "Best-fit role families",
    body: "Software & ML Engineer, ML Systems / AI Systems Engineer, and backend-heavy analytical product roles where operational rigor matters.",
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

export const buildPrinciples = [
  {
    title: "Start from the analytical core",
    body: "I begin with the real scoring logic, routing workflow, simulation output, or domain constraint instead of designing the surface first and hoping the internals catch up.",
  },
  {
    title: "Choose the right runtime shape",
    body: "Managed ML platforms, containerised microservices, and serverless functions each solve different operational problems. I choose the runtime to match the workflow, not the trend.",
  },
  {
    title: "Make trust visible in the system",
    body: "Typed contracts, tests, validation, regression checks, and explicit tradeoffs are part of the product itself when the software supports real decisions.",
  },
  {
    title: "Use AI without dropping standards",
    body: "AI can accelerate engineering, but the outcome still has to be understandable, maintainable, and reliable after the first demo or prototype stage.",
  },
];

export const deploymentPatterns = [
  "Managed ML platforms such as SageMaker for model-centric delivery.",
  "Containerised microservices built from ECR into ECS/EKS on Fargate or EC2 for service-heavy systems.",
  "Serverless services packaged from ECR into Lambda for targeted event-driven workflows.",
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
    award: "MSc Transport with Data Science",
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

export const contactIntro =
  "The public contact layer stays simple in v1: direct email, public code, and a clear path to ask for the latest CV or discuss relevant engineering work.";
