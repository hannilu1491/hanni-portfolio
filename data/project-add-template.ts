// 新增作品範本：複製一筆到 data/projects.ts 的 projects array 裡，並替換內容與圖片路徑。
export const projectTemplate = {
  title: "New Project Title",
  slug: "new-project-slug",
  category: "Branding",
  year: "2026",
  role: "Visual Designer",
  tools: ["Figma", "Illustrator", "Photoshop"],
  tags: ["Branding", "Visual System"],
  coverImage: "/images/projects/brand-identity/brand-identity-subcard-01.jpg",
  heroImage: "/images/projects/brand-identity/brand-identity-hero-banner.jpg",
  description: "一句話介紹這個作品。",
  overview: "專案背景與內容。",
  challenge: "遇到的問題或需求。",
  goal: "設計目標。",
  concept: "設計概念。",
  visualSystem: "色彩、字體、版式、元件邏輯。",
  process: "你的設計流程。",
  outcome: "最後成果。",
  reflection: "學到什麼、未來可優化什麼。",
  galleryImages: [
    "/images/projects/brand-identity/brand-identity-overview.jpg",
    "/images/projects/brand-identity/brand-identity-process.jpg",
    "/images/projects/brand-identity/brand-identity-final-showcase.jpg"
  ],
  sections: [
    {
      type: "text-image",
      title: "Project Overview 專案概覽",
      body: "這裡放專案簡介。",
      images: ["/images/projects/brand-identity/brand-identity-overview.jpg"]
    },
    {
      type: "editorial-gallery",
      title: "Final Showcase 最終展示",
      body: "這裡放作品展示。",
      images: [
        "/images/projects/brand-identity/brand-identity-final-showcase.jpg",
        "/images/projects/brand-identity/brand-identity-responsive.jpg"
      ]
    }
  ]
};