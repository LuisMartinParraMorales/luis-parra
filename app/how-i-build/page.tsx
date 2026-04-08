import { PageIntro } from "@/components/page-intro";
import {
  buildPrinciples,
  deploymentPatterns,
} from "@/lib/site-content";

export default function HowIBuildPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        backHref="/#how-i-build"
        eyebrow="Detailed view"
        title="The engineering bar stays high even when the work starts in spreadsheets, scripts, or prototypes."
        summary="This page is the operating logic behind the portfolio: start from the analytical core, choose the right runtime shape, make trust visible in the system, and use AI as an accelerator rather than a substitute for engineering discipline."
      />

      <section className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
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

        <div className="grid gap-5 md:grid-cols-2">
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
  );
}
