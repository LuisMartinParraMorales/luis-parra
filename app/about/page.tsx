import { PageIntro } from "@/components/page-intro";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import {
  aboutPageSectionNav,
  aboutHighlights,
  aboutNarrative,
  capabilityGroups,
} from "@/lib/site-content";

export default function AboutPage() {
  return (
    <PageWithLocalNav items={aboutPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="about-overview"
          backHref="/#about"
          backLabel="Back to home profile summary"
          eyebrow="Detailed view"
          title="A backend-heavy software and ML profile shaped by analytical systems, not by generic tooling lists."
          summary="The through-line in the work is consistent: turn difficult analytical workflows into reliable products, services, and runtimes without stripping away the domain logic that makes them useful."
        />

        <section id="about-narrative" className="scroll-mt-32 grid gap-5 xl:grid-cols-[1fr_1.05fr]">
          <div className="space-y-5">
            {aboutNarrative.map((paragraph) => (
              <article key={paragraph} className="info-card rounded-[1.4rem] p-5">
                <p className="text-base leading-8 text-foreground/92">{paragraph}</p>
              </article>
            ))}
          </div>

          <div className="space-y-5">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{item.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="about-capabilities" className="scroll-mt-32 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => (
            <article key={group.title} className="info-card rounded-[1.4rem] p-5">
              <p className="eyebrow">{group.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {group.summary}
              </p>
            </article>
          ))}
        </section>
      </div>
    </PageWithLocalNav>
  );
}
