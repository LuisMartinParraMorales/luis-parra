"use client";

import Link from "next/link";
import { useNavigationState } from "@/components/navigation-provider";
import { navigation, siteIdentity } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { currentPage } = useNavigationState();

  return (
    <header className="sticky top-0 z-30 pt-4">
      <div className="site-panel flex flex-col gap-4 rounded-[1.6rem] px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" scroll className="flex min-w-0 items-center gap-3">
          <span className="brand-mark" aria-hidden="true">
            LP
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-[0.12em] uppercase">
              {siteIdentity.name}
            </span>
            <span className="block truncate text-sm text-muted">
              Software &amp; ML Engineer
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2">
          {navigation.map((item) => {
            const isActive = currentPage === item.key;

            return (
              <Link
                key={item.key}
                href={item.route}
                scroll
                className={cn("nav-pill", isActive && "nav-pill-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent-teal" />
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            {siteIdentity.location}
          </p>
        </div>
      </div>
    </header>
  );
}
