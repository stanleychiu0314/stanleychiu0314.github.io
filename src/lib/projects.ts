export type Project = {
  slug: string;
  title: string;
  href?: string;
  demoUrl?: string;
  image?: string;
  tags: string[];
  summary: string;
  detail?: string;
  hardPart?: string;
};

export const projects: Project[] = [
  {
    slug: "orchestrator",
    title: "An orchestrator that routes subtasks to different coding agents",
    tags: ["Agents", "Systems"],
    summary:
      "Cheaper models handled mechanical edits, stronger ones handled design and review.",
    detail:
      "At Handled AI I designed the routing layer that decided which coding agent should handle each incoming engineering ticket, splitting the work into subtasks and sending each one to whatever the work actually needed instead of defaulting everything to the same model.",
    hardPart:
      "The failure mode was agents that wandered outside their lane. The loops that stayed reliable were the ones where I drew a hard boundary around what the agent was allowed to touch — file scope, tool access, and a clear handoff back to review. Loops I trusted to police themselves did not.",
  },
  {
    slug: "triage-pipeline",
    title: "A triage pipeline that scores, tags, and links product feedback",
    tags: ["Systems", "Pipelines"],
    summary:
      "It replaced a gate that quietly created no issue at all for anything judged a duplicate.",
    detail:
      "Feedback came in faster than anyone could read it. The pipeline scored each piece, tagged it, and linked it to existing issues so nothing that mattered got silently dropped.",
    hardPart:
      "The previous version treated a duplicate verdict as a reason to do nothing, which meant real signal disappeared with no record it had ever arrived. I rebuilt it so a duplicate still links and counts, and only true noise gets filtered out.",
  },
  {
    slug: "courseflix",
    title: "CourseFlix, a course review and scheduling platform for Vanderbilt",
    href: "https://github.com/stanleychiu0314/courseflix",
    image: "/projects/courseflix-list.png",
    tags: ["React", "Express", "PostgreSQL", "CI/CD"],
    summary: "A 5-person team project — I set up the repo and built the CI/CD pipeline.",
    detail:
      "Course search, peer reviews, grade distributions, and schedule planning for Vanderbilt students, built with a team of five: React/Vite frontend, Express API, PostgreSQL backend, Microsoft Azure AD login.",
    hardPart:
      "I stood up the repo and built the GitHub Actions CI/CD pipeline the rest of the team shipped through, then stayed on as the one merging feature PRs — including a cross-listing fix so reviews on one course correctly show up on its cross-listed sibling.",
  },
  {
    slug: "vandycv",
    title: "VandyCV, an LLM-backed resume builder",
    href: "https://github.com/stanleychiu0314/vandycv",
    demoUrl: "https://www.youtube.com/watch?v=Ob2rA8JFz4I&feature=youtu.be",
    tags: ["Next.js", "Flask", "PostgreSQL"],
    summary: "I owned the backend, the schema, and the prompting.",
    detail:
      "A team project where the model helps draft resume bullets from a user's raw experience. Next.js frontend, Flask API, PostgreSQL for storage.",
    hardPart:
      "I owned the backend, the schema, and the OpenAI integration on a team of three — including prompt design and cutting both latency and token cost with response caching.",
  },
  {
    slug: "klondike-solitaire",
    title: "Klondike Solitaire, a production full-stack game",
    href: "https://github.com/stanleychiu0314/KlondikeSolitair",
    image: "/projects/klondike-gameplay.png",
    tags: ["React", "Node", "MongoDB"],
    summary: "Every move stored with before and after state, so undo and replay came for free.",
    detail:
      "A full-stack card game with an authoritative server, built solo end to end: React client, Node/Express API, MongoDB for state, deployed behind nginx on AWS.",
    hardPart:
      "Redesigning the data model mid-project so every move persisted as a document with before/after state bought unbounded undo and move-by-move replay for free. Separately, I found an OAuth flow that exposed client secrets in frontend code and moved token exchange server-side, and refactored batch autocomplete to sequential requests after batching broke server-side validation.",
  },
  {
    slug: "vr-lab",
    title: "VR environments for the Wallace Lab at the Vanderbilt Kennedy Center",
    tags: ["Unity", "C#"],
    summary: "Eye tracking and binaural audio, inside a frame budget.",
    detail:
      "Built VR environments for a neuroscience lab studying attention and behavior, in Unity and C#, integrating eye tracking and binaural audio while holding a strict frame budget.",
  },
];

export const featuredProjects = projects.slice(0, 3);
