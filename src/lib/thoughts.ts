export type Thought = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  body: string;
};

export const thoughts: Thought[] = [
  {
    slug: "ai-in-groupchats",
    title: "What if we had AI in groupchats?",
    dek: "Not a smarter assistant for one person. Something that actually sits inside the group.",
    date: "2026-09-24",
    body: `Every AI chat I use assumes there is exactly one person on the other side of the conversation. That works fine until you notice how much of your actual thinking happens in a group instead of alone. Planning a trip with friends, deciding on a restaurant, arguing about which apartment to rent, coordinating a project with people who are not all looking at the same screen.

What if the assistant lived in the groupchat itself instead of in five separate one on one conversations that never talk to each other. It would see the whole conversation, not a summary someone typed in later. It would know what was already decided, who pushed back and why, and what is still actually up for debate versus already settled.

## A different kind of memory

The hard part is not making it smarter. It is making it act like a member of the group instead of a tool one person occasionally consults. That means knowing when to speak up unprompted and when to stay quiet, and it means treating disagreement inside the group as real signal instead of noise to average away.

I do not know exactly what this looks like yet. I know it is not a chatbot bolted onto the side of a group chat, answering questions when tagged. It is closer to a quiet participant that remembers everything the group already worked out, so nobody has to re-explain themselves every time they open the app.`,
  },
  {
    slug: "which-loops-get-to-write",
    title: "The question of which loops get to write",
    dek: "Read access is cheap. Write access is the whole design problem.",
    date: "2026-09-23",
    body: `Most of the interesting decisions in agent orchestration are not about which model to call. They are about what that model is allowed to touch once it starts working. A loop that can read a codebase, search it, and suggest a diff is low risk. The moment it can write to that codebase without a human in the loop, every assumption about correctness has to hold at once, not just on average.

I spent a long stretch designing the routing layer that decided which agent handled which ticket. The interesting part was never the routing table. It was deciding, for each subtask, how much write access the agent actually needed to do the job, and refusing to give it more than that even when giving it more would have been faster in the short run.

## Boundaries as the actual product

The loops that stayed reliable were the ones with a hard line around file scope, tool access, and a clear handoff back to review. The ones I trusted to police themselves did not stay reliable, no matter how good the underlying model got. That is the part of this work that will not go away as models improve: someone still has to decide which loop gets to write, and what happens when it is wrong.`,
  },
  {
    slug: "tools-that-respect-you",
    title: "Tools that respect the person using them",
    dek: "Most developer tools are built for the tool's convenience, not the person holding it.",
    date: "2026-09-20",
    body: `A lot of developer tooling is designed around what is easy for the tool to do, not what is useful for the person using it. You can tell the difference immediately. A tool that respects you tells you what it is about to do before it does it, gives you an easy way to stop it, and never hides a destructive action behind something that looks routine.

The tools I trust the most are the ones that assume I am going to be wrong sometimes and design for that, instead of assuming I will always confirm carefully before pressing enter. Undo, dry runs, diffs before writes. None of that is exciting to build. All of it is the difference between a tool people rely on and a tool people are careful around.

I think this matters more, not less, as more of the work gets delegated to agents instead of typed directly by a person. If the tool does not respect the person watching it work, an agent using that same tool will not either. The bar for what counts as a well designed tool should go up, not down, once something other than a human is the one clicking the buttons.`,
  },
  {
    slug: "code-was-never-the-bottleneck",
    title: "Code was never the bottleneck",
    dek: "The scarce resource on an engineering team has never been typing speed. It is judgment.",
    date: "2026-09-10",
    body: `For a long time the story was that engineering teams move slowly because writing code takes time. That story is getting harder to believe. Code generation is fast now, and getting faster, and a team that can produce ten times as much code does not automatically ship ten times as much value.

What actually slows a team down is deciding what to build, what to cut, and which shortcuts are safe to take today and which ones turn into a rewrite in six months. Those are judgment calls, not typing exercises, and they do not get faster just because the tools generating code got faster.

I think this is the real shift worth paying attention to. As it gets cheaper to produce code, including code nobody asked for and code that quietly does the wrong thing very confidently, the bottleneck moves upstream, to the person or the process deciding what gets built at all. Reviewing decisions is going to matter more than reviewing diffs.`,
  },
  {
    slug: "built-for-one-person-at-a-time",
    title: "Built for one person at a time",
    dek: "Something this capable should not still default to a solo chat window.",
    date: "2026-09-05",
    body: `Most of the AI tools I use are built around a single person typing into a single chat window. That design has been useful, but it is also strange to me given how capable these systems have gotten. A huge amount of real work does not happen inside one person's head. It happens in a group deciding something together.

A group chat, a planning meeting, a shared document with three people editing it, all of that is a different shape of problem than one person asking one assistant one question at a time. Whoever is in the conversation, what they already agreed on, what they disagree about, that context matters as much as the question itself.

I do not think the solo chat window is wrong. I think it is incomplete. The next useful version of this technology probably looks less like a smarter individual assistant and more like something that can sit inside a group the way a good collaborator does, tracking context that belongs to the whole room instead of to one person's chat history.`,
  },
  {
    slug: "who-gets-to-touch-the-repo",
    title: "Who gets to touch the repo",
    dek: "Most engineering tools quietly assume everyone using them is already an engineer.",
    date: "2026-08-28",
    body: `Open almost any tool built for software teams and it assumes, somewhere in its design, that the person using it already knows how to read a diff, resolve a merge conflict, and reason about a build pipeline. That assumption used to be reasonable, because engineering work required all of that just to participate.

It is less reasonable now. Agents can handle a lot of the mechanical parts of engineering work, the parts that used to be the entry ticket. What is left is closer to describing what you want clearly, reviewing whether the result actually does that, and deciding what happens next. Those are not exclusively engineering skills.

I think the tools have not caught up to that yet. They are still built for people who already speak the tool's language fluently, which keeps non-engineers out of work they could otherwise meaningfully do. The interesting design problem is not making the tools smarter. It is making them legible to someone who has a clear idea and no git experience at all.`,
  },
];

export const latestThoughts = thoughts.slice(0, 3);
