import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  backHref?: string;
  backLabel?: string;
};

export function PageIntro({
  eyebrow,
  title,
  summary,
  backHref,
  backLabel = "Back to overview",
}: PageIntroProps) {
  return (
    <section className="page-intro rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10">
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:opacity-75"
        >
          <span aria-hidden="true">←</span>
          <span>{backLabel}</span>
        </Link>
      ) : null}
      <p className={backHref ? "eyebrow mt-4" : "eyebrow"}>{eyebrow}</p>
      <h1 className="section-title mt-3 max-w-4xl text-4xl leading-[0.98] font-normal sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
        {summary}
      </p>
    </section>
  );
}
