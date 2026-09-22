export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-1 px-5 py-6 font-mono text-xs text-muted-foreground">
        <span>New York, NY</span>
        <span>&middot;</span>
        <span>open to software engineering roles</span>
        <span className="ml-auto">&copy; {new Date().getFullYear()} Stanley Chiu</span>
      </div>
    </footer>
  );
}
