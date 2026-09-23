export function TriageDiagram() {
  return (
    <div>
      <svg
        viewBox="0 0 680 260"
        className="h-auto w-full"
        role="img"
        aria-label="Feedback flows through scoring, tagging, and linking. A duplicate verdict still links to the existing issue and counts, while true noise gets filtered out."
      >
        <defs>
          <marker
            id="triage-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-muted-foreground" />
          </marker>
        </defs>

        <g
          className="stroke-muted-foreground"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#triage-arrow)"
        >
          <path d="M 100 130 L 126 130" />
          <path d="M 220 130 L 246 130" />
          <path d="M 340 130 L 366 130" />
          <path d="M 480 100 C 500 100, 500 48, 516 48" />
          <path d="M 480 160 C 500 160, 500 212, 516 212" />
        </g>

        {/* incoming feedback */}
        <rect x="10" y="98" width="90" height="64" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="55" y="125" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-medium">
          Feedback
        </text>
        <text x="55" y="141" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
          stream
        </text>

        {/* score */}
        <rect x="130" y="98" width="90" height="64" rx="12" className="fill-secondary stroke-border" strokeWidth="1.5" />
        <text x="175" y="134" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
          Score
        </text>

        {/* tag */}
        <rect x="250" y="98" width="90" height="64" rx="12" className="fill-secondary stroke-border" strokeWidth="1.5" />
        <text x="295" y="134" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
          Tag
        </text>

        {/* link decision */}
        <rect x="370" y="98" width="110" height="64" rx="12" className="fill-primary" />
        <text
          x="425"
          y="126"
          textAnchor="middle"
          className="fill-primary-foreground font-mono text-[12px] font-semibold"
        >
          Link to
        </text>
        <text
          x="425"
          y="141"
          textAnchor="middle"
          className="fill-primary-foreground font-mono text-[12px] font-semibold"
        >
          issue
        </text>

        {/* outcome: duplicate, still linked + counted */}
        <rect x="520" y="14" width="150" height="68" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="595" y="40" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
          Duplicate
        </text>
        <text x="595" y="56" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
          linked + counted
        </text>

        {/* outcome: true noise, filtered out */}
        <rect x="520" y="178" width="150" height="68" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="595" y="204" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
          True noise
        </text>
        <text x="595" y="220" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
          filtered out
        </text>
      </svg>

      <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
        before: a duplicate verdict silently created nothing — now: it still links and counts
      </p>
    </div>
  );
}
