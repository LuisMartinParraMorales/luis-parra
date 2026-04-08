import Link from "next/link";
import { ContactMethodCard } from "@/components/contact-method-card";
import { HomeSection } from "@/components/home-section";
import { ProjectOverviewCard } from "@/components/project-overview-card";
import {
  aboutHighlights,
  aboutNarrative,
  buildPrinciples,
  capabilityGroups,
  contactIntro,
  cvOverviewSummary,
  cvSummary,
  deploymentPatterns,
  education,
  experienceTimeline,
  featuredProjects,
  heroContent,
  projectsOverviewSummary,
  siteIdentity,
} from "@/lib/site-content";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <HomeSection sectionKey="luis-parra" className="overflow-hidden">
        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.8fr] xl:items-start">
          <div className="space-y-6">
            <p className="eyebrow">{heroContent.eyebrow}</p>
            <h1 className="section-title max-w-4xl text-5xl leading-[0.95] font-normal sm:text-6xl lg:text-[5rem]">
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

          <div className="grid gap-4">
            {heroContent.signalCards.map((card) => (
              <article key={card.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{card.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/90">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
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

      <HomeSection sectionKey="about">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Profile</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              A profile built around analytical systems that have to work in the real world.
            </h2>
          </div>

          <div className="space-y-5">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">{item.title}</p>
              <p className="mt-3 text-base leading-8 text-foreground/90">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </HomeSection>

      <HomeSection sectionKey="how-i-build">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">How I build</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              Strong systems come from runtime choices, trust, and restraint.
            </h2>
            <div className="mt-8 space-y-4">
              {deploymentPatterns.map((pattern) => (
                <div key={pattern} className="info-card rounded-[1.4rem] p-4">
                  <p className="text-sm leading-7 text-muted sm:text-base">{pattern}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {buildPrinciples.map((principle) => (
              <article key={principle.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{principle.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/90">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection sectionKey="cv">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">CV</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              Public profile signal, with the fuller summary one click away.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {cvSummary}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {cvOverviewSummary}
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

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilityGroups.map((group) => (
                <article key={group.title} className="info-card rounded-[1.4rem] p-5">
                  <p className="eyebrow">{group.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    {group.summary}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
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
        </div>
      </HomeSection>

      <HomeSection sectionKey="contact">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3 text-4xl font-normal sm:text-5xl">
              Direct contact, public code, and a simple way to keep the conversation moving.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {contactIntro}
            </p>
          </div>

          <div className="grid gap-4">
            <ContactMethodCard
              href={`mailto:${siteIdentity.email}`}
              label="Email"
              value={siteIdentity.email}
              tone="gmail"
              compact
            />
            <ContactMethodCard
              href={siteIdentity.linkedinUrl}
              label="LinkedIn"
              value={siteIdentity.linkedinLabel}
              tone="linkedin"
              compact
              external
            />
            <ContactMethodCard
              href={siteIdentity.githubUrl}
              label="GitHub"
              value={siteIdentity.githubLabel}
              tone="github"
              compact
              external
            />
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
