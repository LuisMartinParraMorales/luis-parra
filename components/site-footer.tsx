import { siteIdentity } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-6 text-sm text-muted">
      <div className="flex flex-col gap-3 border-t border-border/80 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteIdentity.name} portfolio.</p>
        <p className="font-mono text-xs tracking-[0.14em] uppercase">
          {siteIdentity.subtitle}
        </p>
      </div>
    </footer>
  );
}
