# Hanni Lu Portfolio (Next.js)

高級感 UI/UX 個人作品集網站，使用 Next.js + TypeScript + Tailwind CSS + App Router 建置。

## 1) 如何安裝
```bash
npm install
```

## 2) 如何本機執行
```bash
npm run dev
```
開啟 `http://localhost:3000`。

## 3) 如何修改內容
主要內容來源在 `data/projects.ts`：
- title
- slug
- category
- year
- role
- tools
- tags
- description
- overview
- strategy
- galleryImages
- figmaLink
- prototypeLink

## 4) 如何新增作品
1. 在 `data/projects.ts` 追加一個 `Project` 物件。
2. 新增對應圖片到 `public/images/`。
3. 重新整理 `/projects` 與 `/projects/[slug]` 即可看到新內容。

## 5) 如何部署到 GitHub
```bash
git init
git add .
git commit -m "feat: create portfolio website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## 6) 如何部署到 Vercel
1. 到 Vercel 匯入 GitHub 專案。
2. Framework Preset 選擇 Next.js。
3. 直接 Deploy。

## 7) 如何更新網站
```bash
git add .
git commit -m "chore: update portfolio content"
git push
```
Vercel 會自動重新部署。

## 8) 下載壓縮檔（本機建立）
若 PR 平台不支援二進位檔案預覽，請在專案根目錄執行：
```bash
zip -r portfolio-website.zip portfolio -x "*/node_modules/*"
```
即可產生可下載的壓縮檔。
