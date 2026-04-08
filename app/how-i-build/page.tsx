import { PageIntro } from "@/components/page-intro";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import {
  buildPageSectionNav,
  buildPrinciples,
  deploymentPatterns,
} from "@/lib/site-content";

export default function HowIBuildPage() {
  return (
    <PageWithLocalNav items={buildPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="build-overview"
          backHref="/#how-i-build"
          eyebrow="Detailed view"
          title="The engineering bar stays high even when the work starts in spreadsheets, scripts, or prototypes."
          summary="This page is the operating logic behind the portfolio: start from the analytical core, choose the right runtime shape, make trust visible in the system, and use AI as an accelerator rather than a substitute for engineering discipline."
        />

        <section id="build-deployment" className="scroll-mt-32 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Deployment patterns</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              Delivery patterns matched to the runtime problem.
            </h2>
          </div>
          <div className="space-y-4">
            {deploymentPatterns.map((pattern) => (
              <article key={pattern} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">Deployment pattern</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {pattern}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="build-principles" className="scroll-mt-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Principles</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              The judgment calls that keep the work credible after the first demo.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {buildPrinciples.map((principle) => (
              <article key={principle.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{principle.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageWithLocalNav>
  );
}
