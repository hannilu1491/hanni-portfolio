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
