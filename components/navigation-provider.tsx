"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { routeToSectionKey, type SectionKey } from "@/lib/site-content";

type NavigationContextValue = {
  activeSection: SectionKey;
  currentPage: SectionKey;
  isHomePage: boolean;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

function getDefaultSection(pathname: string): SectionKey {
  return routeToSectionKey[pathname] ?? "luis-parra";
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const currentPage = getDefaultSection(pathname);
  const [activeSection, setActiveSection] = useState<SectionKey>(
    currentPage,
  );

  useEffect(() => {
    setActiveSection(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-home-section]"),
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const next = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => {
            const leftDistance = Math.abs(left.boundingClientRect.top - 144);
            const rightDistance = Math.abs(right.boundingClientRect.top - 144);

            return leftDistance - rightDistance;
          })[0];

        const sectionKey = next?.target.getAttribute(
          "data-home-section",
        ) as SectionKey | null;

        if (sectionKey) {
          setActiveSection(sectionKey);
        }
      },
      {
        rootMargin: "-18% 0px -48% 0px",
        threshold: [0.12, 0.25, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage, pathname]);

  return (
    <NavigationContext.Provider value={{ activeSection, currentPage, isHomePage }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationState() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigationState must be used within NavigationProvider");
  }

  return context;
}
