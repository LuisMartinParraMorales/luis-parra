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

      <section className="grid gap-5 md:grid-cols-2">
        <a
          href={`mailto:${siteIdentity.email}`}
          className="info-card rounded-[1.4rem] p-6"
        >
          <p className="eyebrow">Email</p>
          <p className="mt-3 text-2xl font-semibold break-all">
            {siteIdentity.email}
          </p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Best for opportunities, collaboration, or asking for the latest CV.
          </p>
        </a>

        <a
          href={siteIdentity.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="info-card rounded-[1.4rem] p-6"
        >
          <p className="eyebrow">GitHub</p>
          <p className="mt-3 text-2xl font-semibold">{siteIdentity.githubLabel}</p>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Public code, portfolio repo, and the most inspectable technical proof.
          </p>
        </a>
      </section>
    </div>
  );
}
