import type { Metadata } from "next";
import Link from "next/link";
import { thoughts } from "@/lib/thoughts";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Short essays from Stanley Chiu on agent orchestration, tooling, and engineering.",
};

export default function ThoughtsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Thoughts
        </h1>
        <p className="mt-2 max-w-[62ch] text-muted-foreground">
          Short essays, mostly about agents, tools, and the judgment calls that do not get
          automated away.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {thoughts.map((thought) => (
          <Link
            key={thought.slug}
            href={`/thoughts/${thought.slug}`}
            className="group flex aspect-square flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-primary/50"
          >
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-3 py-2">
              <i className="h-2 w-2 rounded-full bg-[#e0808f]" />
              <i className="h-2 w-2 rounded-full bg-primary" />
              <i className="h-2 w-2 rounded-full bg-[#93c9a8]" />
              <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                {thought.date}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 px-4 py-4">
              <h2 className="font-heading text-sm font-bold text-foreground group-hover:text-primary sm:text-base">
                {thought.title}
              </h2>
              <p className="line-clamp-4 text-xs text-muted-foreground sm:text-sm">
                {thought.dek}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
