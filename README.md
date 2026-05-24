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

## Recommended project image folder structure
For each project slug, organize files like this:

```txt
public/images/projects/{slug}/
  hero/
    hero-banner.jpg
  gallery/
    gallery-01.jpg
    gallery-02.jpg
    gallery-03.jpg
  mockups/
    desktop-mockup-01.jpg
    desktop-mockup-02.jpg
    browser-mockup-01.jpg
  mobile/
    mobile-ui-01.jpg
    mobile-ui-02.jpg
```

## Image usage in the site
- `hero/hero-banner.jpg` → Project detail top hero banner
- `gallery/gallery-*.jpg` → Visual Showcase and Gallery storytelling sections
- `mockups/desktop-mockup-*.jpg` → Macbook / Desktop showcase slider
- `mockups/browser-mockup-*.jpg` → Browser frame showcase slider
- `mobile/mobile-ui-*.jpg` → iPhone mockup showcase slider
- `cover.jpg` (optional in root) → Home and Projects card cover image

## Recommended image sizes
- hero banner: `1920x1080`
- gallery landscape: `1920x1200`
- gallery portrait: `1600x2200`
- desktop/browser mockup source: `1920x1200`
- mobile UI source: `1290x2796`
- card cover: `1200x1500` (4:5)

## How to add a new project
1. Copy `projectAddTemplate` from `data/project-add-template.ts`.
2. Add files under `public/images/projects/{slug}/` with the structure above.
3. In `data/projects.ts`, map:
   - `heroImage` to `hero/hero-banner.jpg`
   - `coverImage` to `cover.jpg`
   - `galleryImages` to `gallery/*`, `mockups/*`, and `mobile/*` as needed
4. Verify the detail page shows Hero, Visual Showcase, Mockup Showcase, and Gallery in correct order.
5. Run `npm run build`.

## Contact API
Route: `POST /api/contact`


## MacBook Slider maintenance
- Component path: `components/MacBookSlider.tsx`
- To adjust MacBook frame style, edit these classes inside `MacBookSlider`:
  - outer frame: `frameClass` variable
  - screen bezel: `rounded-[22px] border border-[#7f858f] bg-[#171a1f] p-[8px]`
  - bottom deck/chin: `mx-auto mt-2 h-[10px] w-[45%] ...`
- Wrapper component used in pages: `components/PremiumShowcaseSlider.tsx`.

## How to replace slider images
- Slider images come from `data/projects.ts` field `sliderImages` (fallback to `galleryImages`).
- Example:
```ts
sliderImages: [
  "/images/projects/uiux-multimedia/slider-01.jpg",
  "/images/projects/uiux-multimedia/slider-02.jpg",
  "/images/projects/uiux-multimedia/slider-03.jpg"
]
```
- Replace flow:
  1. Put new files into `public/images/projects/<slug>/`
  2. Update `sliderImages` paths in `data/projects.ts`
  3. Run `npm run dev` and verify
  4. Commit and push


## Hero parallax assets (replaceable)
Store hero assets in `public/images/hero/`:
- `hero-bg-nature.jpg`
- `hero-browser-frame.svg`
- `hero-ui-screen-01.jpg`
- `hero-ui-screen-02.jpg`
- `floating-leaf-01.png`
- `floating-leaf-02.png`
- `floating-flower-01.png`
- `floating-paper-card.png`
- `floating-color-palette.png`
- `foreground-plant-shadow.png`

Hero asset paths are centralized in `data/hero-assets.ts` via `heroAssets` array.
- Replace natural floating elements: swap `public/images/hero/floating-*.png`
- Replace main screen: swap `hero-ui-screen-01.jpg`
- Replace background: swap `hero-bg-nature.jpg`
- If an asset is missing, Hero falls back to built-in project images (no broken image block).
