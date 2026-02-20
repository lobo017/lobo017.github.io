# Ethan Lobo — Portfolio

Personal site. Built to show what I've worked on and how I think about problems.

**Live at** [lobo017.github.io](https://lobo017.github.io)

## Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Hosting**: GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build & deploy

```bash
npm run build
```

Static output lands in `out/`. GitHub Actions deploys on push to `main`.

## Project structure

```
app/
  globals.css        ← design tokens, utility classes
  layout.tsx         ← root layout, font loading, metadata
  page.tsx           ← section composition

components/
  Header.tsx         ← sticky nav, mobile menu
  Hero.tsx           ← intro, rotating tagline, CTAs
  Projects.tsx       ← project cards from data
  Experience.tsx     ← timeline
  TechMarquee.tsx    ← draggable scrolling tech strip
  About.tsx          ← narrative + highlights
  Contact.tsx        ← email / LinkedIn CTAs
  Footer.tsx         ← links, copyright
  Reveal.tsx         ← scroll-triggered fade-in wrapper
  SectionHeading.tsx ← reusable section header

data/
  portfolio.ts       ← experience, projects, tech stack
```

## License

Personal project — not intended for reuse, but feel free to reference the structure.
