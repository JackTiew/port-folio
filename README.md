# port-folio

Personal portfolio site for Jack Tiew, built with React and Vite.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (also available as `npm start`) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- [skillicons.dev](https://skillicons.dev) for tech stack logos

## Customize content

Edit `src/data/portfolio.js` for copy, projects, links, and tech stack icons.

Add your photo at `public/assets/profile-photo.jpg` (falls back to initials if missing).

## Navigation

- **Mouse wheel** or **arrow keys** move between full-page sections (Home → About → Work) via `src/views/Main.jsx`.
- Section dots (desktop) or tabs (mobile) jump directly to a section.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Editor settings

The project uses 2-space indentation. See `.editorconfig` for details.
