import type { Metadata } from "next";
import { Pane } from "@/components/pane";
import { LeaveANote } from "@/components/leave-a-note";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Stanley Chiu.",
};

const links = [
  {
    label: "email",
    value: "posiang.chiu.stanley@gmail.com",
    href: "mailto:posiang.chiu.stanley@gmail.com",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/stanleychiu0314",
    href: "https://www.linkedin.com/in/stanleychiu0314/",
  },
  {
    label: "github",
    value: "github.com/stanleychiu0314",
    href: "https://github.com/stanleychiu0314",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Say hello
        </h1>
        <p className="mt-2 max-w-[62ch] text-muted-foreground">
          I&rsquo;m open to software engineering roles in New York and remote. Email is the
          fastest way to reach me.
        </p>
      </div>

      <Pane label="contact">
        <ul className="grid gap-4">
          {links.map((link) => (
            <li key={link.label} className="grid grid-cols-[88px_1fr] items-baseline gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {link.label}
              </span>
              <a
                href={link.href}
                className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </Pane>

      <div className="mt-6">
        <Pane label="leave-a-note">
          <h2 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a15c]">
            Or just drop a note
          </h2>
          <LeaveANote />
        </Pane>
      </div>
    </div>
  );
}
