import Image from "next/image";
import type { ProjectCard, ProjectVisual, ProjectVisualKind } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ProjectCaseStudyProps = {
  project: ProjectCard;
  priority?: boolean;
};

const accentClassByTone: Record<ProjectCard["accent"], string> = {
  teal: "accent-bar-teal",
  blue: "accent-bar-blue",
  rust: "accent-bar-rust",
  ink: "accent-bar-ink",
};

const visualLabelByKind: Record<ProjectVisualKind, string> = {
  ui: "UI",
  architecture: "Architecture",
  concept: "Concept visual",
  visualization: "Visual output",
};

function ProjectVisualFigure({
  visual,
  priority = false,
}: {
  visual: ProjectVisual;
  priority?: boolean;
}) {
  const imageClassName =
    visual.kind === "architecture" ? "object-contain p-4" : "object-cover";

  return (
    <figure className="space-y-3">
      <div className="project-media-shell overflow-hidden rounded-[1.35rem] border border-border/80">
        <div className="project-media relative aspect-[16/10] overflow-hidden">
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 60vw"
            className={imageClassName}
            style={{ objectPosition: visual.objectPosition ?? "center" }}
          />
          <div className="project-media-overlay" aria-hidden="true" />
          <span className="project-media-badge">
            {visualLabelByKind[visual.kind]}
          </span>
        </div>
      </div>
      <figcaption className="text-sm leading-7 text-muted">{visual.caption}</figcaption>
    </figure>
  );
}

export function ProjectCaseStudy({
  project,
  priority = false,
}: ProjectCaseStudyProps) {
  return (
    <article id={project.id} className="project-card rounded-[1.9rem] p-6 scroll-mt-32 sm:p-8">
      <div
        className={cn("accent-bar", accentClassByTone[project.accent])}
        aria-hidden="true"
      />

      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <span>{project.organization}</span>
            <span aria-hidden="true">/</span>
            <span>{project.period}</span>
          </div>
          <h2 className="section-title mt-4 text-4xl leading-none font-normal sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/90">
            {project.detailIntro}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip rounded-full px-3 py-1 text-[0.72rem] font-medium tracking-[0.12em] uppercase text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
        <ProjectVisualFigure visual={project.coverImage} priority={priority} />

        <div className="grid gap-4">
          <article className="info-card rounded-[1.4rem] p-5">
            <p className="eyebrow">Problem</p>
            <p className="mt-3 text-base leading-8 text-foreground/92">
              {project.problem}
            </p>
          </article>
          <article className="info-card rounded-[1.4rem] p-5">
            <p className="eyebrow">What I built</p>
            <p className="mt-3 text-base leading-8 text-foreground/92">
              {project.contribution}
            </p>
          </article>
          <article className="info-card rounded-[1.4rem] p-5">
            <p className="eyebrow">Why it matters</p>
            <p className="mt-3 text-base leading-8 text-foreground/92">
              {project.signal}
            </p>
          </article>
        </div>
      </div>

      {project.gallery.length > 0 ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {project.gallery.map((visual) => (
            <ProjectVisualFigure key={`${project.id}-${visual.src}`} visual={visual} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
