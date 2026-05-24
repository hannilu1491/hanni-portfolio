# Hanni Lu Portfolio (Next.js)

## Setup
```bash
npm install
npm run dev
npm run build
```

## Project content source
- Main data file: `data/projects.ts`
- New project scaffold: `data/project-add-template.ts`
- Images root: `public/images/projects/{slug}/`

## Required image naming per project
Place these files in `public/images/projects/{slug}/`:
- `hero-banner.jpg` → project detail top hero banner
- `cover.jpg` → homepage/projects card cover
- `visual-system-01.jpg` → visual system gallery image 1
- `visual-system-02.jpg` → visual system gallery image 2
- `showcase-01.jpg` → final showcase image 1
- `showcase-02.jpg` → final showcase image 2
- `showcase-03.jpg` → final showcase image 3
- `showcase-04.jpg` → final showcase image 4

## Recommended image sizes
- hero-banner: `1920x1080`
- cover: `1200x1500` (4:5)
- visual-system: `1600x2000`
- showcase: `1600x2200`

## How to add a new project
1. Copy `projectAddTemplate` from `data/project-add-template.ts`.
2. Add images into `public/images/projects/{slug}/` using names above.
3. Add the project object into `data/projects.ts` and ensure `coverImage`, `heroImage`, `galleryImages` are mapped to those files.
4. Add slug into ordering arrays if needed (featured/order).
5. Run `npm run build`.

## Contact API
Route: `POST /api/contact`
