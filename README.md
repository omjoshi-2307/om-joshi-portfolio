<div align="center">

# Om Joshi — Personal Portfolio

**A modern, editorial personal portfolio and interactive engineering showcase.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-FF4FA3?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-EC4899?style=flat-square)](https://oxc.rs/)

[**Explore Live Portfolio →**](https://om-joshi-portfolio.vercel.app) • [**View GitHub Repository →**](https://github.com/omjoshi-2307/om-joshi-portfolio)

</div>

---

## Overview

This repository houses the source code for the personal portfolio of **Om Joshi**, a B.Tech Information Technology student and builder based in Pune, India. 

Designed with an editorial studio aesthetic, the site functions as both an interactive personal showcase and an engineering playground. It chronicles a multi-disciplinary journey spanning low-level embedded hardware, rapid hackathon prototypes, decentralized Web3 escrow protocols, and ongoing explorations in local AI workflows, systems programming, and cybersecurity.

---

## Live Experience

| Environment | URL | Status |
| :--- | :--- | :--- |
| **Production Site** | [om-joshi-portfolio.vercel.app](https://om-joshi-portfolio.vercel.app) | Active |
| **Source Repository** | [github.com/omjoshi-2307/om-joshi-portfolio](https://github.com/omjoshi-2307/om-joshi-portfolio) | Public |

---

## Key Highlights

- **Obsidian & Warm Ivory Design System**: Dual-mode theme engine with an Obsidian Dark Studio palette (`#09090B`) as default and Warm Ivory Light Studio palette (`#F4F1EA`), engineered with an inline anti-flash script for zero-latency theme persistence.
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Keyboard-first modal interface offering fast section jumping, case study navigation, instant theme switching, direct email copying, and social shortcuts.
- **Scroll-Synchronized Visual Chapter Rail**: Fixed bottom navigation rail that tracks reading position and presents visual chapter previews across the narrative.
- **Zero-Dependency Client-Side Router**: Lightweight SPA navigation engine powering deep-linkable case studies (`/work/:slug`) and custom 404 fallback routing.
- **Interactive Project Case Studies**: In-depth breakdowns of real engineering projects, detailing problem statements, technical architecture, and team contributions.
- **Desktop Pointer Micro-Interactions**: Ambient custom cursor tracking layer with contextual state adjustments across interactive UI elements.
- **Accessibility & Motion Preferences**: Comprehensive `prefers-reduced-motion` compliance, accessible skip links, semantic HTML5 elements, and keyboard navigability.
- **Production SEO & Structured Data**: Complete Open Graph, Twitter/X meta cards, canonical URL configuration, and Schema.org `Person` & `CreativeWork` JSON-LD structured data.

---

## Featured Projects & Case Studies

| Project | Context | Core Technologies | Focus Area |
| :--- | :--- | :--- | :--- |
| [**SureD**](https://github.com/Khushal-93/SureD) | Stellar Build Station Pune | React, TypeScript, Tailwind CSS, Stellar, Soroban, Rust, Freighter | Decentralized rental deposit escrow protocol eliminating landlord-tenant disputes via smart contracts. |
| [**WALL-E**](https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot) | Engineering Build | Arduino Uno, Embedded C++, HC-SR04 Ultrasonic, L298N Motor Driver | Autonomous mobile robot featuring real-time ultrasonic obstacle sensing and kinematic evasion routines. |
| **JalSanchaeeNavachar** *(Archive)* | AISSMS Techathon 3.0 | Rapid Prototyping, IoT Telemetry Concepts, UI Wireframing | Formative hackathon sprint exploring residential water telemetry and conservation analytics under tight deadlines. |

---

## Tech Stack

### Core Frontend & Framework
- **React 19** (`^19.2.8`) — UI component architecture and reactive state
- **TypeScript** (`~6.0.2`) — Static type safety and strict interface definitions
- **Vite 8** (`^8.2.0`) — Build toolchain and fast HMR developer environment

### Styling & Design System
- **Tailwind CSS v4** (`^4.3.3`) — Utility-first styling via `@tailwindcss/vite`
- **Design Tokens** (`tokens.css`) — Custom CSS variable system for Obsidian & Ivory themes
- **Typography** — Satoshi (Fontshare), Inter (Google Fonts), JetBrains Mono (Google Fonts)
- **clsx** & **tailwind-merge** — Conditional and conflict-free class composition

### Motion & UI Primitives
- **Framer Motion** (`^13.1.0`) — Layout animations, spring transitions, and modal choreographies
- **Lucide React** (`^1.31.0`) — Scalable vector icon library
- **Radix UI Slot** (`^1.3.3`) — Polymorphic component primitive compositions

### Tooling, Linting & Deployment
- **Oxlint** (`^1.75.0`) — High-performance Rust-based JavaScript/TypeScript linter
- **Vercel Config** (`vercel.json`) — Security headers, immutable asset caching, and SPA rewrites
- **GitHub Pages** — Automated static hosting deployment target

---

## Project Structure

```text
om-joshi-portfolio/
├── public/                     # Static assets, SVG vector graphics, previews
│   ├── media/
│   │   ├── chapter-rail/       # Chapter rail SVG illustrations
│   │   └── journey/            # Journey timeline milestone SVGs
│   ├── favicon.svg             # Vector favicon
│   ├── portfolio-preview.svg   # Social graph preview image
│   ├── robots.txt              # Search crawler directives
│   └── sitemap.xml             # Production sitemap
├── src/
│   ├── components/
│   │   ├── exploration/        # Frontier & research matrix cards
│   │   ├── hero/               # Hero landing section & call-to-actions
│   │   ├── intro/              # Identity summary & personal statement
│   │   ├── journey/            # Chronological evolution & milestone timeline
│   │   ├── layout/             # SiteShell, RootLayout, PageTransition
│   │   ├── motion/             # Framer Motion animation wrapper components
│   │   ├── navigation/         # Navbar, CommandPalette, VisualChapterRail
│   │   ├── pointer/            # Custom desktop pointer indicator
│   │   ├── projects/           # Featured project cards & media viewers
│   │   ├── sections/           # Top-level section compositions
│   │   ├── toolbox/            # Categorized skills matrix & technical index
│   │   └── ui/                 # Reusable UI primitives (Button, Badge, Toggle)
│   ├── config/                 # Site identity, links, navigation, and SEO tags
│   ├── context/                # Theme and Pointer React Context providers
│   ├── data/                   # Structured content for projects, journey, and skills
│   ├── hooks/                  # Custom hooks (router, theme, motion, active section)
│   ├── pages/                  # Route views (ProjectCaseStudyPage, NotFoundPage)
│   ├── styles/                 # Global stylesheet and CSS design tokens
│   ├── types/                  # TypeScript type definitions and interfaces
│   ├── utils/                  # Helper utilities (cn, motion variants)
│   ├── App.tsx                 # Root application shell & router
│   └── main.tsx                # Application mounting entry point
├── .oxlintrc.json              # Oxlint linting rules
├── index.html                  # HTML entry with SEO metadata and anti-flash script
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Production routing and security header rules
└── vite.config.ts              # Vite configuration and manual chunk optimization
