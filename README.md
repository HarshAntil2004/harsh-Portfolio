# Harsh Antil — Portfolio

A production-ready personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals and micro-interactions
- **lucide-react** for icons
- Zero external CMS — content lives in one typed file

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Everything — name, summary, skills, experience, projects, education, testimonials —
lives in **`src/content/data.ts`**. Add a new object to the relevant array and it
appears in the UI automatically; no component or layout changes needed.

The **GitHub repositories grid** (`src/components/GithubShowcase.tsx`) is *not*
hardcoded — it calls the public GitHub API (`api.github.com/users/<username>/repos`)
client-side, so new repos you push show up on your next page load. Change the
username in `githubUsername` in `data.ts` if needed.

## Adding a project with a live, runnable demo

Every project object in `data.ts` has a `demo` field. If it's `null`, the
project card shows a "add a URL to enable" placeholder. To make a project's
actual output runnable from the portfolio itself, you have a few options,
depending on what the project is:

1. **It's already a web app** (e.g. deployed on Vercel/Netlify/Render):
   set `demo` to that URL. The project card links straight to it, and you can
   optionally embed it in an `<iframe>` inside `Projects.tsx` for an inline
   preview.
2. **It's a notebook / script** (most of the analytics projects here): host a
   static export of the result — e.g. publish the Tableau dashboard on
   [Tableau Public](https://public.tableau.com) and link that URL as `demo`,
   or export the notebook to HTML with `jupyter nbconvert --to html` and drop
   it in `public/demos/<slug>.html`, then set `demo: "/demos/<slug>.html"`.
3. **It's an API-backed tool**: deploy the backend separately (Vercel
   serverless functions, a small Fly.io/Render service, etc.) and point a
   small client component at it — this repo already shows the pattern in
   `GithubShowcase.tsx` (client-side `fetch` against a public API with
   loading and error states).

This keeps one consistent project-card layout no matter how many projects you
add later, while letting each one link out to wherever its real, working
output lives.

## Adding blog posts

`Blog.tsx` currently renders placeholder cards. To go live with real posts,
add Markdown/MDX files under `src/content/posts/`, install `@next/mdx` or
`contentlayer`, and swap the placeholder list for a generated one — the
section/layout doesn't need to change.

## Theming

Dark mode is the default and is the primary experience; a light mode exists
and is toggled with the sun/moon button in the nav (persisted to
`localStorage`). All colors are CSS variables in `src/app/globals.css` —
change `--signal`, `--teal`, or the `--ink-*` scale to re-theme everything at
once.

## Opening intro animation

`src/components/IntroLoader.tsx` shows a short entrance animation the first
time someone visits in a browser session (photo, name, a signal-line reveal,
then it fades into the site) — it won't replay on every scroll or section
change, only once per session (`sessionStorage`).

**Add your photo**: replace `public/profile.jpg` with your real photo (same
filename, square image works best — it's cropped into a circle). If the file
is missing or fails to load, it automatically falls back to your initials.

## Notes & cheat sheets section

`src/components/Blog.tsx` now renders a grid of downloadable PDF quick
references instead of blog placeholders. Put your PDFs in `public/notes/`
using the filenames listed in `public/notes/README.txt` (which mirrors the
`notes` array in `src/content/data.ts`) — add, rename, or remove entries in
that array to change what shows up.

## GitHub repos section

This has been removed from the page per your request. The code
(`src/components/GithubShowcase.tsx`) has been deleted; if you want it back
later, re-add a component that fetches `https://api.github.com/users/<you>/repos`
client-side and render it in `src/app/page.tsx`.

## Deploying to Vercel


1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the base site.
4. Deploy. Every push to your default branch redeploys automatically.

To use a custom domain, add it under Project → Settings → Domains once
deployed, and update the URLs in `src/app/sitemap.ts` and `src/app/robots.ts`
to match.

## Replacing the résumé file

Drop your latest PDF at `public/Harsh_Antil_Resume.pdf` (same filename) or
update `resumeUrl` in `data.ts` if you rename it.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```
