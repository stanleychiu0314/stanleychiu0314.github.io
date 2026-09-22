# stanleychiu0314.github.io

Personal site, served at [stanleychiu.dev](https://stanleychiu.dev). Next.js (App Router),
Tailwind v4, shadcn/ui, and [Motion](https://motion.dev) for animation, exported as static
files for GitHub Pages.

## Preview locally

```bash
npm run dev
```

Opens at http://localhost:3000. Nothing here touches the live site until it's built and
pushed to `main` — work on a branch and preview locally first.

## Build

```bash
npm run build
```

Static output goes to `out/`. `next.config.ts` sets `output: "export"`.

## Deploy

GitHub Pages serves the `main` branch. A GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds and publishes `out/` on every push to `main`.
`public/CNAME` keeps the custom domain (`stanleychiu.dev`) attached.

## Adding shadcn components

This repo has the shadcn MCP server configured (`.mcp.json`), so components can be pulled
in directly through Claude, or via the CLI:

```bash
npx shadcn@latest add <component>
```
