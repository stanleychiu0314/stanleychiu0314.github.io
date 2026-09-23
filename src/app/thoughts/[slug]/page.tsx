import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pane } from "@/components/pane";
import { MarkdownLite } from "@/components/markdown-lite";
import { thoughts } from "@/lib/thoughts";

export function generateStaticParams() {
  return thoughts.map((thought) => ({ slug: thought.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);
  if (!thought) return {};
  return { title: thought.title, description: thought.dek };
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);
  if (!thought) notFound();

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:py-16">
      <Link
        href="/thoughts"
        className="mb-6 inline-block font-mono text-xs text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
      >
        &larr; all thoughts
      </Link>

      <Pane label={thought.date}>
        <h1 className="mb-2 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {thought.title}
        </h1>
        <p className="mb-6 text-muted-foreground">{thought.dek}</p>
        <MarkdownLite content={thought.body} />
      </Pane>
    </div>
  );
}
