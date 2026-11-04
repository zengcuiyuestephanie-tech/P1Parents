# PLMGS Parents Hub

A static, responsive microsite for parents of Paya Lebar Methodist Girls' School. Plain HTML, CSS and JavaScript. No build step, no backend, no secrets.

```
index.html          entry point
css/styles.css      all styles (blue and yellow theme, light and dark)
js/main.js          page content (the DATA block) and hash-based navigation
assets/img/         crest and characters
assets/docs/        PDFs parents can open or download
.nojekyll           tells GitHub Pages to serve files as they are
```

All paths are relative, so the site works at `https://zengcuiyuestephanie-tech.github.io/YOUR-REPO/` and from any other folder.

## Publish on GitHub Pages

1. Create a repository named `YOUR-REPO` and upload everything in this folder to the repository root (keep the folder structure).
2. Open Settings > Pages. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. After a minute the site is live at `https://zengcuiyuestephanie-tech.github.io/YOUR-REPO/`.

To preview locally, run `python3 -m http.server` in this folder and open http://localhost:8000/.

## Update content

- Text, dates, form links and PDF names are in the `DATA` block at the top of `js/main.js`.
- To replace a PDF, overwrite the file in `assets/docs/` using the same file name.
- Each page has its own link: `#administrative`, `#p1-parents`, `#orientation`, `#p1-students`, `#storybooks`, `#bring`, `#day0`, `#teachers`, `#canteen`.

## Fonts

The site loads nothing from other websites. Headings use Fredoka and text uses Figtree if installed on the visitor's device, and fall back to rounded system fonts otherwise. To bundle the exact fonts, save `fredoka.woff2` and `figtree.woff2` into `assets/fonts/` and uncomment the two `@font-face` rules at the top of `css/styles.css`.
