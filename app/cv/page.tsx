import { PageIntro } from "@/components/page-intro";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import {
  capabilityGroups,
  cvPageSectionNav,
  cvSummary,
  education,
  experienceTimeline,
  siteIdentity,
} from "@/lib/site-content";

export default function CvPage() {
  return (
    <PageWithLocalNav items={cvPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="cv-overview"
          backHref="/#cv"
          backLabel="Back to home CV snapshot"
          eyebrow="Detailed view"
          title="Public CV summary"
          summary={cvSummary}
        />

        <section id="cv-summary" className="scroll-mt-32">
          <article className="info-card rounded-[1.4rem] p-6">
            <p className="eyebrow">Public summary</p>
            <h2 className="section-title mt-3 text-3xl font-normal">
              {siteIdentity.title}
            </h2>
            <p className="mt-3 text-sm tracking-[0.1em] text-muted uppercase sm:text-base">
              {siteIdentity.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              This page is the fuller public summary behind the homepage overview.
              You can download the posted version directly, or use the Gmail flow
              if you want the latest tailored CV.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteIdentity.cvDownloadUrl}
                download
                className="primary-action"
              >
                Download public CV
              </a>
              <a
                href={siteIdentity.requestCvUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-action"
              >
                Request latest CV via Gmail
              </a>
            </div>
          </article>
        </section>

        <section id="cv-experience" className="scroll-mt-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              A trajectory built around analytical systems, product delivery, and operational rigor.
            </h2>
          </div>

          <div className="mt-8 grid gap-5">
            {experienceTimeline.map((entry) => (
              <article
                key={`${entry.organization}-${entry.period}`}
                className="info-card rounded-[1.4rem] p-6"
              >
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
        </section>

        <section id="cv-capabilities" className="scroll-mt-32 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">{group.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {group.summary}
              </p>
            </article>
          ))}
        </section>

        <section id="cv-education" className="scroll-mt-32 grid gap-5 md:grid-cols-2">
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
    </PageWithLocalNav>
  );
}
