"use client";

import { useEffect, useState } from "react";
import type { SectionNavItem } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type LocalSectionNavProps = {
  items: SectionNavItem[];
  title?: string;
  activeId?: string;
};

export function LocalSectionNav({
  items,
  title = "On this page",
  activeId,
}: LocalSectionNavProps) {
  const [observedActiveId, setObservedActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (activeId) {
      return;
    }

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const next = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => {
            const leftDistance = Math.abs(left.boundingClientRect.top - 156);
            const rightDistance = Math.abs(right.boundingClientRect.top - 156);

            return leftDistance - rightDistance;
          })[0];

        if (!next?.target.id) {
          return;
        }

        setObservedActiveId(next.target.id);
      },
      {
        rootMargin: "-18% 0px -56% 0px",
        threshold: [0.1, 0.2, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeId, items]);

  const currentId = activeId ?? observedActiveId;

  if (items.length === 0) {
    return null;
  }

  const links = items.map((item) => {
    const isActive = currentId === item.id;

    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={cn("local-nav-link", isActive && "local-nav-link-active")}
        aria-current={isActive ? "location" : undefined}
      >
        <span className="local-nav-dot" aria-hidden="true" />
        <span>{item.label}</span>
      </a>
    );
  });

  return (
    <>
      <nav className="site-panel mb-6 flex gap-2 overflow-x-auto rounded-[1.4rem] px-3 py-3 lg:hidden">
        {items.map((item) => {
          const isActive = currentId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "mobile-local-nav-link whitespace-nowrap",
                isActive && "mobile-local-nav-link-active",
              )}
              aria-current={isActive ? "location" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <aside className="hidden lg:block">
        <div className="local-nav-panel sticky top-28 rounded-[1.5rem] p-4">
          <p className="eyebrow">{title}</p>
          <nav className="mt-4 space-y-2">{links}</nav>
        </div>
      </aside>
    </>
  );
}
