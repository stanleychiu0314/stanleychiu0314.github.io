"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-mono text-xs font-medium tracking-tight whitespace-nowrap text-foreground sm:text-sm"
        >
          <span className="flex gap-1">
            <i className="h-2.5 w-2.5 rounded-full bg-[#e0808f]" />
            <i className="h-2.5 w-2.5 rounded-full bg-primary" />
            <i className="h-2.5 w-2.5 rounded-full bg-[#93c9a8]" />
          </span>
          <span className="hidden sm:inline">stanley chiu</span>
        </Link>
        <nav className="flex items-center gap-0.5 font-mono text-xs sm:gap-1 sm:text-sm">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-2.5 py-1.5 whitespace-nowrap transition-colors sm:px-3",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
