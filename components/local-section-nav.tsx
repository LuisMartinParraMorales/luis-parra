"use client";

import { useEffect, useState } from "react";
import { useNavigationState } from "@/components/navigation-provider";
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
  const { activeSection, isHomePage } = useNavigationState();
  const [observedActiveId, setObservedActiveId] = useState(items[0]?.id ?? "");
  const homePageActiveId =
    isHomePage && items.some((item) => item.id === activeSection)
      ? activeSection
      : undefined;

  useEffect(() => {
    if (activeId || homePageActiveId) {
      return;
    }

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    let frameId: number | null = null;

    const updateActiveSection = () => {
      const anchor = 212;
      const reachedSections = sections.filter(
        (section) => section.getBoundingClientRect().top <= anchor,
      );

      if (reachedSections.length > 0) {
        const currentSection = reachedSections[reachedSections.length - 1];

        if (currentSection) {
          setObservedActiveId(currentSection.id);
        }

        return;
      }

      const nearestSection = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - anchor);

        if (!closest) {
          return { id: section.id, distance };
        }

        return distance < closest.distance
          ? { id: section.id, distance }
          : closest;
      }, null as { id: string; distance: number } | null);

      if (nearestSection) {
        setObservedActiveId(nearestSection.id);
      }
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [activeId, homePageActiveId, items]);

  const currentId = activeId ?? homePageActiveId ?? observedActiveId;

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

      <aside className="local-nav-rail hidden self-start lg:sticky lg:top-32 lg:block">
        <div className="local-nav-panel rounded-[1.25rem] px-2.5 py-3">
          <p className="eyebrow">{title}</p>
          <nav className="mt-3.5 space-y-1.5" aria-label={title}>
            {links}
          </nav>
        </div>
      </aside>
    </>
  );
}
