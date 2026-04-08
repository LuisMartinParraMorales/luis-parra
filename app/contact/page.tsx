import { ContactMethodCard } from "@/components/contact-method-card";
import { PageIntro } from "@/components/page-intro";
import { contactIntro, siteIdentity } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        backHref="/#contact"
        eyebrow="Detailed view"
        title="The public contact layer is direct: email, public code, and a clear path to continue the conversation."
        summary={contactIntro}
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <ContactMethodCard
          href={`mailto:${siteIdentity.email}`}
          label="Email"
          value={siteIdentity.email}
          description="Best for opportunities, collaboration, or asking for the latest CV."
          tone="gmail"
        />

        <ContactMethodCard
          href={siteIdentity.linkedinUrl}
          label="LinkedIn"
          value={siteIdentity.linkedinLabel}
          description="Professional profile, public experience summary, and a good route for direct outreach."
          tone="linkedin"
          external
        />

        <ContactMethodCard
          href={siteIdentity.githubUrl}
          label="GitHub"
          value={siteIdentity.githubLabel}
          description="Public code, portfolio repo, and the most inspectable technical proof."
          tone="github"
          external
        />
      </section>
    </div>
  );
}
