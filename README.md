# Mocking by Jay — Independent Rap Label

> **Real rap. Real artists. Booked here.** A high-impact landing page for an independent rap label: roster, studio sessions, and direct booking — no middlemen.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)

## What it is

A single-page marketing site for **Mocking by Jay (MBJ)**, a fictional independent rap label. Visitors discover the roster, explore the studio, and send booking requests through a modal flow — artists for shows and features, or the booth itself. Built mobile-first with a bold editorial aesthetic: blood-red accents, oversized Anton headlines, and buttery scroll-reveal motion.

## Sections

| Section | Highlights |
|---|---|
| **Hero** | Full-viewport crowd shot with red duotone, staggered rise-in copy, scroll parallax, live stats bar (roster size, shows booked, reply time) |
| **Marquee** | Seamless infinite ticker of services (pauses on desktop hover) |
| **Artists** | Filterable roster grid with hover zoom + de-grayscale, staggered reveals, expandable full roster |
| **About** | Label manifesto, principles list, founder quote |
| **Studio** | Full-bleed mic photography with red multiply blend and edge fading, booking CTA |
| **Final CTA + Footer** | Conversion closer, socials, contact |

## Interactions

- **Two-tap artist cards on touch** — first tap previews the color/zoom hover state, second tap opens booking (single click on desktop)
- **Booking modal** — native `<dialog>` with artist/studio mode switch, validated form, and animated success state
- **Scroll reveals** — IntersectionObserver-driven `.reveal` system with per-element delays
- **Press states** — every button mirrors its hover style on `:active` for tactile feedback
- **Mobile menu** — full-screen blurred nav with staggered link entrances
- **Anchor navigation** — hash deep-linking (`/#studio`) with header-offset correction

## Tech stack

- **React 19 + TypeScript** — functional components, hooks only
- **Tailwind CSS v4** — theme tokens, custom utilities, responsive variants
- **Vite** — dev server, production build
- **ESLint + tsc** — lint and type-check gates

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint     # eslint
```

## Project structure

```
public/
  images/            # hero, roster, studio photography
  favicon.svg        # brand mark (notched red block)
src/
  components/        # Hero, Marquee, Artists, About, Studio,
                     # FinalCta, Footer, Header, BookingModal
  data/roster.ts     # artist data
  hooks/useReveal.ts # scroll-reveal observer + delay helper
  App.tsx            # composition + booking + hash navigation
  index.css          # theme, buttons, reveal, dialog styles
```

## Design notes

- **Palette** — ink `#0a0a0b`, paper `#f1efe9`, blood `#dc2626`
- **Type** — Anton (display), Inter (body), Space Mono (labels)
- **Breakpoints** — desktop-first grids collapsing at `1100px / 940px / 560px`
- **Imagery** — grayscale + red multiply blends keep every photo on-brand
