import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pane({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[#e0808f]" />
        <i className="h-2.5 w-2.5 rounded-full bg-primary" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#93c9a8]" />
        <span className="ml-1.5 font-mono text-[11px] tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="px-5 py-6 sm:px-6 sm:py-7">{children}</div>
    </section>
  );
}
