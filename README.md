# EAC Convention 2026 – Delegate App (GitHub Pages)

A lightweight, mobile-friendly delegate hub for the **European Airshow Council Convention 2026** in **Athens, Greece**.

## What’s included

- Timetable (searchable)
- Venue + embedded map
- Hotel overview + booking link (EAC code)
- Athens travel guide (airport transfers, transport, emergency numbers, border-control note)
- Sponsors / partnering packages (editable)
- Speakers page (placeholder until confirmed)
- Safety page with **Barker’s Airshow Accident Database** + recent Barker reports (PDF)

## Quick start (local)

```bash
npm install
npm run dev
```

Open the dev server URL shown in your terminal.

## Edit content

Most content is data-driven. Update the files in:

- `src/data/schedule.ts`
- `src/data/sponsors.ts`
- `src/data/speakers.ts`
- `src/data/convention.ts`

Logos/photos go in:

- `public/sponsors`
- `public/speakers`

Downloadable resources are in:

- `public/resources`

> **Note:** If you do not want the Barker dataset/reports publicly downloadable, remove them from `public/resources` and replace links on the Safety page with your internal URL.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages.

Steps:

1. Push this repository to GitHub.
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Commit/push to `main`. The workflow will publish the site.

The workflow sets `VITE_BASE` to `/<repo-name>/` so assets work correctly on GitHub Pages.

## Convention reference pack

The original convention information pack used to seed this site is included at:

- `public/resources/EAC-Convention-2026-Info-Pack.pdf`

## License

Internal EAC use unless otherwise specified.
