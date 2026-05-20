# maipal-website

The presentation website for **MaiPal · 脉伴** — `maipal.org`.

> An AI wellness companion app designed around traditional Chinese medicine logic.
> A warm, trustworthy guide for adults 45–65 navigating sub-health concerns.

This is the **apex marketing site**. The actual app will live at
`app.maipal.org` (coming soon).

---

## Pages

| Route        | Purpose                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `/`          | Single-page presentation site (hero, problem, solution, product, app preview, traction, roadmap, team). |
| `/slideshow` | Auto-cycling, fullscreen, TV-friendly slideshow of the pitch deck. Use this for the annual show — press `F` for fullscreen, `← / →` to navigate, `P` to pause. |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes ./dist
npm run preview  # serves ./dist locally
```

Astro is configured to output a fully static site to `./dist/`, which is the
folder Cloudflare Pages picks up automatically. No edge runtime or adapter
is required.

## Slideshow controls (annual show)

| Key                     | Action               |
| ----------------------- | -------------------- |
| `→` / `Space` / `PgDn`  | Next slide           |
| `←` / `PgUp`            | Previous slide       |
| `P` / `K`               | Pause / resume       |
| `F`                     | Toggle fullscreen    |
| `Home` / `End`          | Jump to first / last |
| `1`–`9`                 | Jump to slide N      |

The slideshow auto-advances every 9 s. Slides use the original PowerPoint
exports as full-resolution PNGs, plus two embedded GIFs for the live
demos and the original brand caption underneath.

## Design system

All visual tokens (colors, typography, hairlines, radii, shadows, motion)
come from `../maipal-design-system/colors_and_type.css`. The same file is
copied into `src/styles/tokens.css` and the project fonts live in
`public/fonts/`. The full design language is documented in the design
system repo's README.

## Deployment

The `MedTechLab/maipal-website` repo is wired to **Cloudflare Pages**
with auto-deploy on every push. Cloudflare runs `npm run build` and
serves `./dist` at `https://maipal.org`.

## Folder layout

```
public/
  assets/    Shared brand imagery (doctor mascot, shan-shui background, etc.)
  fonts/     ChillHuoKai brush-kai OTFs
  slides/    Original PPT exports + demo GIFs
  favicon.svg

src/
  components/   Section components (Hero, Solution, AppPreview, Team, …)
  layouts/      Page shell
  pages/        index.astro · slideshow.astro
  styles/       tokens.css · global.css
```
