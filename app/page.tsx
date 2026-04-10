import Image from "next/image";
import Link from "next/link";
import { ContactMethodCard } from "@/components/contact-method-card";
import { HomeSection } from "@/components/home-section";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import { ProjectOverviewCard } from "@/components/project-overview-card";
import {
  capabilityGroups,
  education,
  experienceTimeline,
  featuredProjects,
  homeBuildHighlights,
  homeBuildSummary,
  homeContactContent,
  homeCvContent,
  homePageSectionNav,
  heroContent,
  profilePhoto,
  projectsOverviewSummary,
  siteIdentity,
} from "@/lib/site-content";

export default function Home() {
  return (
    <PageWithLocalNav items={homePageSectionNav}>
      <div className="space-y-10 sm:space-y-12">
        <HomeSection sectionKey="luis-parra" className="overflow-hidden">
          <div className="grid gap-7 xl:grid-cols-[minmax(0,1.08fr)_minmax(27rem,0.92fr)] xl:items-start">
            <div className="space-y-6">
              <p className="eyebrow">{heroContent.eyebrow}</p>
              <h1 className="section-title max-w-4xl text-5xl leading-[0.95] font-normal sm:text-6xl lg:text-[4.85rem]">
                {siteIdentity.title}
              </h1>
              <p className="max-w-3xl text-base tracking-[0.1em] text-muted uppercase sm:text-lg">
                {siteIdentity.subtitle}
              </p>
              <p className="max-w-3xl text-lg leading-8 text-foreground/92 sm:text-xl">
                {heroContent.intro}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:translate-y-[-1px]"
                >
                  Explore flagship projects
                </Link>
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/40"
                >
                  Read public CV summary
                </Link>
              </div>
            </div>

            <div>
              <article className="hero-portrait-card info-card rounded-[1.4rem] p-3">
                <div className="hero-portrait-frame relative aspect-[6/5] overflow-hidden rounded-[1.18rem]">
                  <Image
                    src={profilePhoto.src}
                    alt={profilePhoto.alt}
                    fill
                    priority
                    sizes="(max-width: 1279px) 100vw, 31vw"
                    className="hero-portrait-image object-cover"
                    style={{ objectPosition: "center 16%" }}
                  />
                  <div className="hero-portrait-overlay" aria-hidden="true" />
                </div>
              </article>
            </div>
          </div>

          <div className="mt-7 grid gap-3.5 md:grid-cols-3">
            {heroContent.signalCards.map((card) => (
              <article key={card.title} className="info-card rounded-[1.4rem] px-5 py-4">
                <p className="eyebrow">{card.title}</p>
                <p className="mt-3 text-base leading-7 text-foreground/90">
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 hero-source-note">
            <p className="text-sm leading-7 text-muted sm:text-[0.98rem]">
              {heroContent.repoSignal}
            </p>
            <a
              href={siteIdentity.portfolioRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-source-link"
            >
              <span>{siteIdentity.portfolioRepoLabel}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </HomeSection>

      <HomeSection sectionKey="projects">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Selected platforms and project proof</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              Four projects that show the shape of the work.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              {projectsOverviewSummary}
            </p>
          </div>
          <Link href="/projects" className="cta-link xl:shrink-0">
            <span>View full case studies</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectOverviewCard
              key={project.id}
              project={project}
              className={project.homeSpan}
              priority={index < 2}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection sectionKey="how-i-build">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div>
            <p className="eyebrow">How I build</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              I start on paper, pressure-test the architecture, and ship in small, test-led slices.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {homeBuildSummary}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              AI is part of that loop, but it does not replace architecture, testing,
              review, or ownership. It helps me move faster without lowering the bar.
            </p>
            <div className="mt-6">
              <Link href="/how-i-build" className="cta-link">
                <span>Read the full engineering approach</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {homeBuildHighlights.map((highlight) => (
              <article key={highlight.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{highlight.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/90">
                  {highlight.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection sectionKey="cv">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div>
            <p className="eyebrow">CV</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              {homeCvContent.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {homeCvContent.intro}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {homeCvContent.note}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cv"
                className="inline-flex items-center justify-center rounded-full bg-accent-ink px-5 py-3 text-sm font-semibold text-white hover:translate-y-[-1px]"
              >
                Read public CV summary
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">Trajectory</p>
              <div className="mt-4 space-y-4">
                {experienceTimeline.map((entry) => (
                  <article key={`${entry.organization}-${entry.period}`}>
                    <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                      {entry.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{entry.role}</h3>
                    <p className="text-sm text-muted">{entry.organization}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">Education</p>
              <div className="mt-4 space-y-4">
                {education.map((entry) => (
                  <article key={`${entry.institution}-${entry.award}`}>
                    <h3 className="text-base font-semibold">{entry.award}</h3>
                    <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">{group.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {group.summary}
              </p>
            </article>
          ))}
        </div>
      </HomeSection>

      <HomeSection sectionKey="contact">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              {homeContactContent.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {homeContactContent.intro}
            </p>
          </div>

          <div className="grid gap-4">
            <ContactMethodCard
              href={`mailto:${siteIdentity.email}`}
              label="Email"
              value={siteIdentity.email}
              actionLabel="Send email"
              ariaLabel={`Send email to ${siteIdentity.email}`}
              tone="gmail"
              compact
            />
            <ContactMethodCard
              href={siteIdentity.linkedinUrl}
              label="LinkedIn"
              value={siteIdentity.linkedinLabel}
              actionLabel="Open LinkedIn"
              ariaLabel={`Open ${siteIdentity.linkedinLabel} on LinkedIn`}
              tone="linkedin"
              compact
              external
            />
            <ContactMethodCard
              href={siteIdentity.githubUrl}
              label="GitHub"
              value={siteIdentity.githubLabel}
              actionLabel="Open GitHub"
              ariaLabel={`Open ${siteIdentity.githubLabel} on GitHub`}
              tone="github"
              compact
              external
            />
          </div>
        </div>
      </HomeSection>
      </div>
    </PageWithLocalNav>
  );
}
