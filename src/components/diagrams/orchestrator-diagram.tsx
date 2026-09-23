export function OrchestratorDiagram() {
  return (
    <svg
      viewBox="0 0 680 260"
      className="h-auto w-full"
      role="img"
      aria-label="An engineering ticket enters the orchestrator, which splits it into subtasks and routes each one to a cheap model for mechanical edits or a frontier model for design and review, both handing back to review."
    >
      <defs>
        <marker
          id="orchestrator-arrow"
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
        markerEnd="url(#orchestrator-arrow)"
      >
        <path d="M 124 130 L 166 130" />
        <path d="M 310 100 C 335 100, 335 48, 356 48" />
        <path d="M 310 160 C 335 160, 335 212, 356 212" />
        <path d="M 530 48 C 558 48, 558 118, 576 118" />
        <path d="M 530 212 C 558 212, 558 142, 576 142" />
      </g>

      {/* incoming ticket */}
      <rect
        x="14"
        y="98"
        width="110"
        height="64"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <text x="69" y="125" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-medium">
        Engineering
      </text>
      <text x="69" y="141" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-medium">
        ticket
      </text>

      {/* orchestrator hub */}
      <rect x="170" y="80" width="140" height="100" rx="16" className="fill-primary" />
      <text
        x="240"
        y="123"
        textAnchor="middle"
        className="fill-primary-foreground font-mono text-[14px] font-semibold"
      >
        Orchestrator
      </text>
      <text x="240" y="141" textAnchor="middle" className="fill-primary-foreground font-mono text-[10px] opacity-85">
        splits into
      </text>
      <text x="240" y="154" textAnchor="middle" className="fill-primary-foreground font-mono text-[10px] opacity-85">
        subtasks
      </text>

      {/* agent: cheap model */}
      <rect
        x="360"
        y="14"
        width="170"
        height="68"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <text x="445" y="40" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
        Cheap model
      </text>
      <text x="445" y="56" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
        mechanical edits
      </text>

      {/* agent: frontier model */}
      <rect
        x="360"
        y="178"
        width="170"
        height="68"
        rx="12"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <text x="445" y="204" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
        Frontier model
      </text>
      <text x="445" y="220" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
        design &amp; review
      </text>

      {/* handoff back to review */}
      <rect
        x="580"
        y="96"
        width="90"
        height="68"
        rx="12"
        className="fill-secondary stroke-border"
        strokeWidth="1.5"
      />
      <text x="625" y="126" textAnchor="middle" className="fill-foreground font-mono text-[12px] font-semibold">
        Review
      </text>
      <text x="625" y="141" textAnchor="middle" className="fill-muted-foreground font-mono text-[9px]">
        handoff
      </text>
    </svg>
  );
}
