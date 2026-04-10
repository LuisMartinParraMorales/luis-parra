import type { ReactNode } from "react";
import { LocalSectionNav } from "@/components/local-section-nav";
import type { SectionNavItem } from "@/lib/site-content";

type PageWithLocalNavProps = {
  items: SectionNavItem[];
  title?: string;
  children: ReactNode;
};

export function PageWithLocalNav({
  items,
  title,
  children,
}: PageWithLocalNavProps) {
  return (
    <div className="lg:grid lg:grid-cols-[11.25rem_minmax(0,1fr)] lg:items-start lg:gap-6 xl:grid-cols-[11.75rem_minmax(0,1fr)] xl:gap-7">
      <LocalSectionNav items={items} title={title} />
      <div className="min-w-0">{children}</div>
    </div>
  );
}
