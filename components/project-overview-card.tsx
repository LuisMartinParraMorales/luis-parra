import Image from "next/image";
import Link from "next/link";
import type { ProjectCard, ProjectVisualKind } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ProjectOverviewCardProps = {
  project: ProjectCard;
  className?: string;
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
  diagram: "Diagram",
  concept: "Concept visual",
  visualization: "Visual output",
};

export function ProjectOverviewCard({
  project,
  className,
  priority = false,
}: ProjectOverviewCardProps) {
  return (
    <Link
      href={`/projects#${project.id}`}
      aria-label={project.ctaLabel}
      className={cn(
        "project-card project-card-home group block cursor-pointer rounded-[1.7rem] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      <div
        className={cn("accent-bar", accentClassByTone[project.accent])}
        aria-hidden="true"
      />

      <div className="project-media-shell mt-5 overflow-hidden rounded-[1.35rem] border border-border/80">
        <div className="project-media relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            style={{ objectPosition: project.coverImage.objectPosition ?? "center" }}
          />
          <div className="project-media-overlay" aria-hidden="true" />
          <span className="project-media-badge">
            {visualLabelByKind[project.coverImage.kind]}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span>{project.organization}</span>
        <span aria-hidden="true">/</span>
        <span>{project.period}</span>
      </div>
      <h3 className="section-title mt-4 text-3xl font-normal">
        {project.homeTitle ?? project.title}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="chip rounded-full px-3 py-1 text-[0.72rem] font-medium tracking-[0.12em] uppercase text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <span className="cta-link cta-link-dark">
          <span>{project.ctaLabel}</span>
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </Link>
  );
}
