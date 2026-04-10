import { ContactMethodCard } from "@/components/contact-method-card";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import { PageIntro } from "@/components/page-intro";
import {
  contactIntro,
  contactPageSectionNav,
  siteIdentity,
} from "@/lib/site-content";

export default function ContactPage() {
  return (
    <PageWithLocalNav items={contactPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="contact-overview"
          backHref="/#contact"
          backLabel="Back to home contact summary"
          eyebrow="Detailed view"
          title="If the work resonates, I'd be glad to hear from you."
          summary={contactIntro}
        />

        <section id="contact-channels" className="scroll-mt-32 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ContactMethodCard
            href={`mailto:${siteIdentity.email}`}
            label="Email"
            value={siteIdentity.email}
            description="Best for opportunities, collaboration, or asking for the latest CV."
            actionLabel="Send email"
            ariaLabel={`Send email to ${siteIdentity.email}`}
            tone="gmail"
          />

          <ContactMethodCard
            href={siteIdentity.linkedinUrl}
            label="LinkedIn"
            value={siteIdentity.linkedinLabel}
            description="Professional profile, public experience summary, and a good route for direct outreach."
            actionLabel="Open LinkedIn"
            ariaLabel={`Open ${siteIdentity.linkedinLabel} on LinkedIn`}
            tone="linkedin"
            external
          />

          <ContactMethodCard
            href={siteIdentity.githubUrl}
            label="GitHub"
            value={siteIdentity.githubLabel}
            description="Public code, portfolio repo, and the most inspectable technical proof."
            actionLabel="Open GitHub"
            ariaLabel={`Open ${siteIdentity.githubLabel} on GitHub`}
            tone="github"
            external
          />
        </section>
      </div>
    </PageWithLocalNav>
  );
}
