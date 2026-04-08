import { PageIntro } from "@/components/page-intro";
import {
  capabilityGroups,
  cvSummary,
  education,
  experienceTimeline,
  siteIdentity,
} from "@/lib/site-content";

export default function CvPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        backHref="/#cv"
        eyebrow="Detailed view"
        title="Public CV summary"
        summary={cvSummary}
      />

      <section className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="info-card rounded-[1.4rem] p-6">
          <p className="eyebrow">Public summary</p>
          <h2 className="section-title mt-3 text-3xl font-normal">
            {siteIdentity.title}
          </h2>
          <p className="mt-3 text-sm tracking-[0.1em] text-muted uppercase sm:text-base">
            {siteIdentity.subtitle}
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            This page is the fuller public summary behind the homepage overview.
            For the latest tailored CV version, use the Gmail request flow below.
          </p>
          <a
            href={siteIdentity.requestCvUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent-ink px-5 py-3 text-sm font-semibold text-white hover:translate-y-[-1px]"
          >
            Request latest CV via Gmail
          </a>
        </article>

        <article className="info-card rounded-[1.4rem] p-6">
          <p className="eyebrow">Experience</p>
          <div className="mt-4 space-y-5">
            {experienceTimeline.map((entry) => (
              <article key={`${entry.organization}-${entry.period}`}>
                <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{entry.role}</h3>
                <p className="text-sm text-muted">{entry.organization}</p>
                <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                  {entry.summary}
                </p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {capabilityGroups.map((group) => (
          <article key={group.title} className="info-card rounded-[1.4rem] p-5">
            <p className="eyebrow">{group.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              {group.summary}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {education.map((entry) => (
          <article
            key={`${entry.institution}-${entry.award}`}
            className="info-card rounded-[1.4rem] p-5"
          >
            <p className="eyebrow">{entry.period}</p>
            <h3 className="mt-3 text-xl font-semibold">{entry.award}</h3>
            <p className="mt-1 text-sm text-muted">{entry.institution}</p>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              {entry.detail}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
