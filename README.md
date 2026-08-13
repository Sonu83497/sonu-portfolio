# Sonu Prajapati — AI & ML Portfolio

A production-ready, dashboard-style personal portfolio for **Sonu Prajapati**, an aspiring AI & Machine
Learning Engineer. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion,
in a premium dark-navy "signal blue" theme inspired by Apple, Vercel, and Linear.

## Tech stack

- **Next.js 16** (App Router, React 19)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first `@theme` design tokens, no `tailwind.config.js` needed)
- **Framer Motion** for scroll reveals, hover states, and page-load choreography
- **lucide-react** for icons
- **class-variance-authority** + **tailwind-merge** for a small shadcn-style variant system

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, viewport
  page.tsx           Assembles all sections
  globals.css         Tailwind v4 theme tokens + base styles
  robots.ts / sitemap.ts   SEO routes
components/
  layout/            Navbar, Footer, ambient background field
  sections/           Hero, About, Skills, Featured Project, Projects,
                       GitHub Stats, Timeline, Certificates, Contact
  ui/                 Reusable primitives: Button, Badge, GlassCard,
                       Container, SectionHeading
hooks/
  use-active-section.ts   Scroll-spy for the navbar
  use-scrolled.ts         Sticky navbar blur trigger
lib/
  constants.ts        All site copy & data (single source of truth)
  utils.ts             `cn()` class merger + formatting helpers
public/
  favicon.svg
```

## Customizing content

All text, links, skills, projects, timeline stages, and certificates live in **`lib/constants.ts`**.
Update that file to change the site's content without touching component code.

## Swapping in real assets

This build ships with illustrated placeholders instead of binary assets that can't be generated in this
environment. Before deploying for real, add:

- **Profile photo** — replace the monogram card in `components/sections/hero.tsx` with an
  `next/image` of a real photo (drop the file in `public/images/` and reference it).
- **Resume PDF** — add your resume at `public/resume/sonu-prajapati-resume.pdf` (the path already
  referenced by `SITE.resumeUrl` in `lib/constants.ts`).
- **Open Graph image** — add `public/og-image.png` (1200×630) for social share previews.
- **Project screenshots** — the featured project and project cards currently use styled gradient
  panels; swap them for real screenshots via `next/image` if you have them.
- **GitHub stats** — `components/sections/github-stats.tsx` currently renders illustrative, static
  stats and a deterministic contribution graph. Wire it up to the GitHub REST/GraphQL API (or a
  service like `github-readme-stats`) for live data if desired.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the
   base site.
4. Deploy — no configuration changes needed.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Accessibility & quality notes

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and labelled icon-only controls.
- Visible focus states via `:focus-visible`.
- `prefers-reduced-motion` is respected — animations are disabled for users who request it.
- Fully responsive from small mobile widths up through large desktop layouts.
