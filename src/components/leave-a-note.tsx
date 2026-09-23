"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "stanley.posiang.chiu@gmail.com";

export function LeaveANote() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;

    const subject = `Note from ${name.trim() || "your site"}`;
    const body = name.trim() ? `${message}\n\n— ${name}` : message;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <label className="grid gap-1.5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
          name (optional)
        </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="who's writing?"
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
          message
        </span>
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="say whatever you want"
          rows={4}
          className="resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Opens your email client, addressed to me. Nothing is sent until you do.
        </p>
        <Button type="submit" size="sm">
          Send
        </Button>
      </div>
    </form>
  );
}
