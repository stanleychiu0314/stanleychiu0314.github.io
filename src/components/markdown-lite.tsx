import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function MarkdownLite({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="grid gap-4">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h3
              key={i}
              className="mt-2 font-heading text-base font-bold text-foreground"
            >
              {block.slice(3)}
            </h3>
          );
        }

        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={i} className="grid gap-2">
              {lines.map((line, j) => (
                <li key={j} className="grid grid-cols-[16px_1fr] items-start gap-2.5">
                  <span className="leading-[1.65] text-muted-foreground">*</span>
                  <span className="text-foreground">{renderInline(line.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
