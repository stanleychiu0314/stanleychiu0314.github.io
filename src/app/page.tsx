import Link from "next/link";
import { Hero } from "@/components/hero";
import { Pane } from "@/components/pane";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/lib/projects";

const hobbies = [
  "Volleyball. I was the starting setter on Vanderbilt Men's Club Volleyball, and we won the 2023 NCVF Division II national title",
  "Photography. Looking to travel to Banff and New Zealand next to take some amazing photos",
];

const interests = [
  "agent orchestration, and the question of which loops get to write",
  "developer tools that respect the person using them",
  "Learning, and always learning, whether that means explaining something to a room of students or being the most confused person in it",
  "I think the bottleneck on an engineering team isn't how much code we can produce anymore — it's whether we're making the right calls, especially now that agents can happily chase edge cases nobody asked for",
  "It's strange to me that something as powerful as AI is still mostly a solo, one-on-one chat window — I think it has a lot more to offer once it's built for a whole group instead of one person at a time",
  "Engineering tools like GitHub still assume everyone touching them is an engineer, and I think that assumption is what's actually keeping non-engineers out of real engineering work",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <Hero />

      <div className="mt-10 grid gap-6">
        <Pane label="about-me">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            About me
          </h2>
          <p className="mb-3 font-heading text-lg font-semibold text-foreground">
            I build tooling for coding agents.
          </p>
          <p className="mb-3 max-w-[62ch] text-muted-foreground">
            I studied Computer Science and Human &amp; Organizational Development at
            Vanderbilt, and I was the founding engineer at Handled AI in Brooklyn, where I
            designed an orchestrator that split engineering tickets into subtasks and routed
            each one to a coding agent based on what the work needed.
          </p>
          <p className="mb-3 max-w-[62ch] text-muted-foreground">
            Most of what I have learned since is about boundaries. The agent loops that
            stayed reliable were the ones where I drew a hard line around what the agent was
            allowed to touch. The ones I trusted to stay in their lane did not.
          </p>
          <p className="max-w-[62ch] text-muted-foreground">
            Before that I taught Programming Languages to 150+ students a semester, built VR
            environments for a neuroscience lab, and ran production on a game studio&rsquo;s
            internal FPS title.
          </p>
        </Pane>

        <Pane label="things-i-built">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#c96a7a]">
              Things I&rsquo;ve built
            </h2>
            <Link
              href="/projects"
              className="font-mono text-xs text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              all projects &rarr;
            </Link>
          </div>
          <ul className="grid gap-4">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="grid gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/projects#${project.slug}`}
                    className="font-medium text-foreground underline decoration-transparent underline-offset-4 hover:decoration-primary/50"
                  >
                    {project.title}
                  </Link>
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-mono text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
              </li>
            ))}
          </ul>
        </Pane>

        <Pane label="interests">
          <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#7a9c7f]">
            Some things I&rsquo;m into
          </h2>
          <ul className="grid gap-3">
            {interests.map((thing) => (
              <li key={thing} className="grid grid-cols-[16px_1fr] items-start gap-2.5">
                <span className="leading-[1.65] text-muted-foreground">*</span>
                <span className="text-foreground">{thing}</span>
              </li>
            ))}
          </ul>
        </Pane>

        <Pane label="hobbies">
          <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a15c]">
            Off the clock
          </h2>
          <ul className="grid gap-3">
            {hobbies.map((thing) => (
              <li key={thing} className="grid grid-cols-[16px_1fr] items-start gap-2.5">
                <span className="leading-[1.65] text-muted-foreground">*</span>
                <span className="text-foreground">{thing}</span>
              </li>
            ))}
          </ul>
        </Pane>
      </div>
    </div>
  );
}
