import { cn } from "@/lib/utils";

type ContactMethodTone = "gmail" | "linkedin" | "github";

type ContactMethodCardProps = {
  href: string;
  label: string;
  value: string;
  description?: string;
  actionLabel?: string;
  ariaLabel?: string;
  tone: ContactMethodTone;
  compact?: boolean;
  external?: boolean;
  className?: string;
};

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon-svg">
      <path
        d="M3.5 6.5h17a1 1 0 0 1 1 1v9.25a1.25 1.25 0 0 1-1.25 1.25H3.75A1.25 1.25 0 0 1 2.5 16.75V7.5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17V8l8 5.75L20 8v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon-svg">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="8.1" cy="9" r="1.2" fill="currentColor" />
      <path
        d="M7 11.4v5.4M11.2 11.4v5.4M11.2 13.4c0-1.1.9-2 2-2h.3c1.3 0 2.3 1 2.3 2.3v3.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon-svg">
      <path
        d="M12 3.2a8.8 8.8 0 0 0-2.78 17.15c.44.08.6-.19.6-.42v-1.52c-2.46.53-2.98-1.04-2.98-1.04-.4-1.02-.98-1.29-.98-1.29-.8-.55.06-.54.06-.54.89.06 1.36.91 1.36.91.79 1.36 2.08.97 2.59.74.08-.57.31-.97.57-1.2-1.96-.22-4.01-.98-4.01-4.38 0-.97.35-1.76.91-2.38-.09-.22-.39-1.12.09-2.34 0 0 .74-.24 2.42.91a8.42 8.42 0 0 1 4.4 0c1.68-1.15 2.42-.91 2.42-.91.48 1.22.18 2.12.09 2.34.57.62.91 1.41.91 2.38 0 3.41-2.06 4.16-4.03 4.37.32.28.61.84.61 1.69v2.5c0 .23.16.5.61.42A8.8 8.8 0 0 0 12 3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactIcon({ tone }: { tone: ContactMethodTone }) {
  switch (tone) {
    case "gmail":
      return <GmailIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "github":
      return <GitHubIcon />;
    default:
      return null;
  }
}

const toneClassByTone: Record<ContactMethodTone, string> = {
  gmail: "contact-icon-shell-gmail",
  linkedin: "contact-icon-shell-linkedin",
  github: "contact-icon-shell-github",
};

export function ContactMethodCard({
  href,
  label,
  value,
  description,
  actionLabel,
  ariaLabel,
  tone,
  compact = false,
  external = false,
  className,
}: ContactMethodCardProps) {
  const sharedProps = external ? { target: "_blank", rel: "noreferrer" } : {};
  const headingClassName = compact
    ? "mt-3 text-lg font-semibold"
    : "contact-card-value mt-3";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...sharedProps}
      className={cn(
        "info-card contact-card rounded-[1.4rem] p-5 sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow">{label}</p>
          <p className={headingClassName}>{value}</p>
        </div>
        <span
          className={cn("contact-icon-shell shrink-0", toneClassByTone[tone])}
          aria-hidden="true"
        >
          <ContactIcon tone={tone} />
        </span>
      </div>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
      ) : null}

      {actionLabel ? (
        <div className="contact-card-action" aria-hidden="true">
          <span>{actionLabel}</span>
          <span className="contact-card-action-icon">↗</span>
        </div>
      ) : null}
    </a>
  );
}
