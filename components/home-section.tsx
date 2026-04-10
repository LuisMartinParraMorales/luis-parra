"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNavigationState } from "@/components/navigation-provider";
import type { SectionKey } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type HomeSectionProps = {
  sectionKey: SectionKey;
  className?: string;
  children: ReactNode;
};

export function HomeSection({
  sectionKey,
  className,
  children,
}: HomeSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { activeSection } = useNavigationState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={sectionKey}
      data-home-section={sectionKey}
      className={cn(
        "home-section scroll-mt-28 rounded-[2rem] border px-6 py-8 sm:px-10 sm:py-10",
        visible && "home-section-visible",
        activeSection === sectionKey && "home-section-active",
        className,
      )}
    >
      {children}
    </section>
  );
}
