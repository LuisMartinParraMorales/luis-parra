import { PageIntro } from "@/components/page-intro";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import {
  buildAiPractices,
  buildDeliveryPractices,
  buildPageSectionNav,
  buildWorkingLoop,
} from "@/lib/site-content";

export default function HowIBuildPage() {
  return (
    <PageWithLocalNav items={buildPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="build-overview"
          backHref="/#how-i-build"
          backLabel="Back to home build summary"
          eyebrow="Detailed view"
          title="I work best when the problem is clear, the architecture is deliberate, and the code stays reviewable."
          summary="My process usually starts on paper, not in the editor. I sketch the problem, research options with AI and primary sources, pressure-test the architecture with people, and then build in small, test-led slices. AI helps me move faster, but it does not replace judgment, review, or ownership."
        />

        <section id="build-process" className="scroll-mt-32 grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div>
            <p className="eyebrow">Working loop</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              The workflow I come back to when the problem is hard.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              This is the part of my engineering process that feels most personal:
              make the problem concrete, narrow the option space carefully, and
              keep the build small enough that every decision stays inspectable.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {buildWorkingLoop.map((step) => (
              <article key={step.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{step.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="build-ai" className="scroll-mt-32 grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div>
            <p className="eyebrow">AI augmentation</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              AI is in the loop, but the engineering bar still has to be human.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              I do not treat AI as a replacement for architecture or code review.
              I treat it as a way to explore faster, draft faster, and learn faster
              while keeping the difficult parts of engineering under deliberate human control.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {buildAiPractices.map((practice) => (
              <article key={practice.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{practice.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {practice.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="build-delivery" className="scroll-mt-32 grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <div>
            <p className="eyebrow">Delivery discipline</p>
            <h2 className="section-title mt-3 text-3xl font-normal sm:text-4xl">
              The work is not done when the code runs locally.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              I care a lot about the boring-looking practices that make software survive:
              simpler code, clearer documentation, early CI/CD, and runtime choices that
              fit the workload instead of following fashion.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {buildDeliveryPractices.map((practice) => (
              <article key={practice.title} className="info-card rounded-[1.4rem] p-5">
                <p className="eyebrow">{practice.title}</p>
                <p className="mt-3 text-base leading-8 text-foreground/92">
                  {practice.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageWithLocalNav>
  );
}
