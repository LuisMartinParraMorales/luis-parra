"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
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
  onInspect,
  priority = false,
}: {
  visual: ProjectVisual;
  onInspect: (
    visual: ProjectVisual,
    trigger: HTMLButtonElement,
  ) => void;
  priority?: boolean;
}) {
  const imageClassName =
    visual.kind === "architecture" ? "object-contain p-4" : "object-cover";

  const handleInspect = (event: MouseEvent<HTMLButtonElement>) => {
    onInspect(visual, event.currentTarget);
  };

  return (
    <figure className="space-y-3">
      <div className="project-media-shell overflow-hidden rounded-[1.35rem] border border-border/80">
        <button
          type="button"
          className="project-media-trigger block w-full text-left"
          onClick={handleInspect}
          aria-label={`Inspect ${visualLabelByKind[visual.kind].toLowerCase()}: ${visual.alt}`}
        >
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
            <span className="project-media-inspect">
              Inspect
            </span>
          </div>
        </button>
      </div>
      <figcaption className="text-sm leading-7 text-muted">{visual.caption}</figcaption>
    </figure>
  );
}

export function ProjectCaseStudy({
  project,
  priority = false,
}: ProjectCaseStudyProps) {
  const [selectedVisual, setSelectedVisual] = useState<ProjectVisual | null>(null);
  const [zoom, setZoom] = useState(1);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openVisual = (
    visual: ProjectVisual,
    trigger: HTMLButtonElement,
  ) => {
    lastTriggerRef.current = trigger;
    setSelectedVisual(visual);
    setZoom(visual.kind === "architecture" ? 1.15 : 1);
  };

  const closeLightbox = () => {
    setSelectedVisual(null);
    setZoom(1);
    lastTriggerRef.current?.focus();
  };

  useEffect(() => {
    if (!selectedVisual) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedVisual(null);
        setZoom(1);
        lastTriggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVisual]);

  const canZoomOut = zoom > 0.85;
  const canZoomIn = zoom < 2.5;

  const adjustZoom = (delta: number) => {
    setZoom((currentZoom) => {
      const nextZoom = Number((currentZoom + delta).toFixed(2));
      return Math.max(0.85, Math.min(2.5, nextZoom));
    });
  };

  return (
    <>
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
          <ProjectVisualFigure
            visual={project.coverImage}
            priority={priority}
            onInspect={openVisual}
          />

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
              <ProjectVisualFigure
                key={`${project.id}-${visual.src}`}
                visual={visual}
                onInspect={openVisual}
              />
            ))}
          </div>
        ) : null}
      </article>

      {selectedVisual ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} visual viewer`}
        >
          <button
            type="button"
            className="project-lightbox-backdrop"
            onClick={() => closeLightbox()}
            aria-label="Close image viewer"
          />

          <div className="project-lightbox-panel">
            <div className="project-lightbox-header">
              <div>
                <p className="eyebrow">Expanded visual</p>
                <h3 className="section-title mt-2 text-3xl leading-none font-normal sm:text-4xl">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                className="project-lightbox-close"
                onClick={() => closeLightbox()}
              >
                Close
              </button>
            </div>

            <div className="project-lightbox-toolbar">
              <span className="project-media-badge project-lightbox-kind">
                {visualLabelByKind[selectedVisual.kind]}
              </span>

              <div className="project-lightbox-controls">
                <button
                  type="button"
                  className="project-lightbox-control"
                  onClick={() => adjustZoom(-0.2)}
                  disabled={!canZoomOut}
                >
                  Zoom out
                </button>
                <button
                  type="button"
                  className="project-lightbox-control"
                  onClick={() => setZoom(1)}
                  disabled={zoom === 1}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="project-lightbox-control"
                  onClick={() => adjustZoom(0.2)}
                  disabled={!canZoomIn}
                >
                  Zoom in
                </button>
              </div>
            </div>

            <div className="project-lightbox-stage">
              <div className="project-lightbox-stage-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedVisual.src}
                  alt={selectedVisual.alt}
                  className="project-lightbox-image"
                  style={{
                    width: `${zoom * 100}%`,
                    objectPosition: selectedVisual.objectPosition ?? "center",
                  }}
                />
              </div>
            </div>

            <p className="project-lightbox-caption">
              {selectedVisual.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
