# Raynold Bobola | Portfolio 2.1

A desktop-inspired developer portfolio: draggable windows, a dock, desktop icons and a live clock, styled after a Linux desktop.

**Live:** https://ray743.github.io/portfolio/

## Features

- Desktop UI with draggable, maximisable windows (double-click the title bar, or press Esc to close)
- Windows: About, Resume (experience, education, certifications), Skills, Projects, Contact
- Bottom dock for quick navigation plus GitHub and LinkedIn links
- Project cards with tech tags and detail modals
- Contact form powered by EmailJS
- Fully responsive: windows go full screen on phones
- SEO and link-preview meta tags, structured data, reduced-motion support

## Tech

React 19, Vite 7, Tailwind CSS 4, Framer Motion, react-icons, lucide-react, EmailJS, gh-pages.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds to `dist/` and publishes it to the `gh-pages` branch. The Vite `base` is `/portfolio/`.

## Editing content

- Profile, experience, education and certifications: `src/data/resumeData.json`
- Projects: `src/components/sections/projects.jsx`
- Skills: `src/components/sections/skills.jsx`
- Window list (desktop icons and dock): `src/components/sectionsConfig.jsx`
