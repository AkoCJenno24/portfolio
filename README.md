# Jenno's Portfolio (React + TypeScript)

A modern, high-performance developer portfolio built with **React 19**, **TypeScript**, and **Vite**, adhering to modern frontend engineering standards, semantic HTML, accessibility (WCAG), and responsive design.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- `npm` (installed alongside Node.js)

### Installation
Clone or navigate to the repository directory and install dependencies:

```bash
npm install
```

### Running Locally (Development Server)
To start the Vite hot-reloading development server:

```bash
npm run dev
```

Open your browser at:
```text
http://127.0.0.1:5173
```

### Production Build & Type Checking
To perform strict TypeScript verification and build the production bundle:

```bash
npm run build
```

To preview the built production bundle locally:
```bash
npm run preview
```

---

## 📁 Project Architecture & Folder Structure

```text
jenno-portfolio/
├── public/                     # Static public assets served directly
│   └── assets/
│       ├── favicon.svg         # Brand favicon mark
│       ├── fonts/              # Self-hosted Outfit typeface (400, 500, 600, 700)
│       ├── icons/              # Technology brand SVG marks
│       └── images/             # Avatar & project screenshots
├── src/
│   ├── components/             # Modular, single-responsibility UI components
│   │   ├── layout/             # Application structural layout
│   │   │   ├── Header.tsx      # Sticky navbar with theme & mobile drawer controls
│   │   │   ├── Navigation.tsx  # Responsive desktop & mobile nav links
│   │   │   ├── BackToTop.tsx   # Accessible scroll-to-top button
│   │   │   └── SkipLink.tsx    # Accessible keyboard skip navigation
│   │   ├── sections/           # Portfolio page sections
│   │   │   ├── HeroSection.tsx # Introduction, greeting, and avatar
│   │   │   ├── SkillsSection.tsx # Categorized tool & skill cards
│   │   │   ├── ProjectsSection.tsx # Projects grid with demo & source links
│   │   │   ├── AboutSection.tsx    # Biography & interactive FAQ accordion
│   │   │   └── ContactSection.tsx  # Contact links, email, and social profiles
│   │   └── ui/                 # Reusable primitive components
│   │       ├── Accordion.tsx   # Accessible FAQ collapsible accordion
│   │       ├── Button.tsx      # Polymorphic button/anchor component
│   │       └── Icon.tsx        # Type-safe vector SVG icons
│   ├── context/
│   │   └── ThemeContext.tsx    # Light/Dark mode state management & localStorage persistence
│   ├── data/
│   │   └── portfolioData.ts    # Strongly typed configuration data (projects, skills, bio)
│   ├── hooks/                  # Custom React hooks
│   │   ├── useTheme.ts         # Hook to access and toggle theme
│   │   ├── useScrollSpy.ts     # Tracks active visible section during scrolling
│   │   └── useScrollHeader.ts  # Sticky elevation, dynamic height & BackToTop trigger
│   ├── styles/
│   │   └── index.css           # Design tokens, variables, typography, and responsive styles
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces and domain models
│   ├── App.tsx                 # Root application composition
│   └── main.tsx                # React DOM entrypoint
├── index.html                  # HTML template with metadata and viewport configuration
├── package.json                # Project dependencies and script runner
├── tsconfig.json               # TypeScript base configuration
├── tsconfig.app.json           # Client app compiler options
├── tsconfig.node.json          # Node/Vite compiler options
└── vite.config.ts              # Vite configuration
```

---

## 🎨 Key Features & Developer Standards

- **React 19 & Strict TypeScript**: Strict compiler checks (`strict: true`, no `any`), fully typed data models, props, and callbacks.
- **Theme Persistence**: Light and dark themes switch smoothly and persist in `localStorage`. Automatically syncs `<meta name="theme-color">` for mobile browsers.
- **ScrollSpy & Active Navigation**: Smooth active section tracking in the navbar with sticky header offset compensation.
- **Accessible & Responsive**:
  - Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
  - Keyboard accessible navigation with `Escape` to close mobile drawers, and `SkipLink` for screen readers.
  - Respects user preference for reduced motion (`prefers-reduced-motion`).
- **Clean Content Separation**: Edit content directly in `src/data/portfolioData.ts` without touching React component markup.
