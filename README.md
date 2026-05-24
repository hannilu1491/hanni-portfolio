# Hanni Lu Portfolio (Next.js)

## Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Content
Edit project data in `data/projects.ts`.

## How to add a new project
1. Open `data/project-add-template.ts` and copy `projectAddTemplate` as your base structure.
2. Add your real image files under `public/images/projects/...`.
3. In `data/projects.ts`, add your new slug into `projectOrder`.
4. Append your new project data using the same fields:
   - `coverImage` for project cards
   - `heroImage` for detail hero banner
   - `galleryImages` for visual system/process/final/responsive blocks
   - `subProjects` (at least 4 cards) for `Sub Project Showcase / 子作品展示`
5. Run `npm run build` to verify no type/image path issues.

## Contact API
Route: `POST /api/contact`

Required fields:
- name
- email
- projectType
- message

Optional:
- company
- budget

### Environment Variables
```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=hanni6015@gmail.com
LINE_CHANNEL_ACCESS_TOKEN=
LINE_USER_ID=
```

- If `RESEND_API_KEY` exists, server sends email via Resend.
- If LINE env vars exist, server also sends optional LINE Messaging API push.
- If LINE vars are missing, API still succeeds (email flow unaffected).
