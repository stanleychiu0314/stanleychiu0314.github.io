import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Pane } from "@/components/pane";
import { OrchestratorDiagram } from "@/components/diagrams/orchestrator-diagram";
import { TriageDiagram } from "@/components/diagrams/triage-diagram";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Stanley Chiu has built — agent orchestration, pipelines, and full-stack projects.",
};

const diagrams: Record<string, ReactNode> = {
  orchestrator: <OrchestratorDiagram />,
  "triage-pipeline": <TriageDiagram />,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Things I&rsquo;ve built
        </h1>
        <p className="mt-2 max-w-[62ch] text-muted-foreground">
          A few systems and projects, with the parts that were actually hard to get right.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Pane key={project.slug} label={project.slug} className="scroll-mt-24" >
            <div id={project.slug} className="grid gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-heading text-xl font-bold text-foreground">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground">{project.detail ?? project.summary}</p>

              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full rounded-xl border border-border"
                />
              )}

              {diagrams[project.slug] && (
                <div className="rounded-xl border border-border bg-card px-4 py-5">
                  {diagrams[project.slug]}
                </div>
              )}

              {project.hardPart && (
                <div className="mt-1 rounded-xl border border-border bg-secondary/50 px-4 py-3">
                  <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    The hard part
                  </p>
                  <p className="text-sm text-foreground/90">{project.hardPart}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                  >
                    view repository &rarr;
                  </Link>
                )}

                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                  >
                    watch demo &rarr;
                  </Link>
                )}
              </div>
            </div>
          </Pane>
        ))}
      </div>
    </div>
  );
}
