import { Project } from '@/types/project';

export const categories = ['All', 'UI/UX Design', 'Branding', 'Packaging', 'Illustration', 'Web Design'] as const;

export const projects: Project[] = [
  {
    title: 'Aesora Brand Experience', slug: 'calm-finance-app', category: 'UI/UX Design', year: '2024', role: 'UI/UX & Web Designer', tools: ['Figma', 'Webflow', 'Photoshop'], tags: ['UI/UX & Multimedia Design', 'Web'], description: 'Premium brand experience website with editorial structure and warm visual storytelling.', overview: '以品牌敘事為核心的網站專案，整合產品展示、品牌語言與轉換流程。', challenge: '需要同時兼顧品牌形象與資訊可讀性，並讓使用者快速理解品牌價值。', goal: '建立高質感體驗、提升頁面停留與詢問轉換。', concept: 'Cinematic minimalism：以留白、節奏與焦點建立品牌氛圍。', visualSystem: '暖白底色、柔黑字、焦糖金點綴，搭配 serif 標題與規則化間距系統。', process: '從 sitemap、wireframe 到高保真視覺，逐步迭代首頁與關鍵轉換頁。', outcome: '完成可上線的品牌官網視覺系統與多裝置版型。', strategy: 'Editorial composition with modular sections and calm interaction pacing.', problem: '舊版資訊層級混亂，品牌語氣不一致。', userNeeds: ['快速理解品牌與服務。', '清楚看到產品與案例價值。', '在手機上也能順暢瀏覽。'], reflection: '我學到高級感網站其實來自於節奏與細節一致性。', coverImage: '/images/project-web.svg', heroImage: '/images/project-web.svg', galleryImages: ['/images/project-web.svg', '/images/project-brand.svg', '/images/editorial-hero-board.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com',
    sections: [
      { type: 'text-image', title: 'Project Overview 專案概覽', body: 'Client: Aesora SkinCare / Timeline: 2024 / Role: UI/UX & Visual Design', images: ['/images/project-brand.svg'] },
      { type: 'quote-section', title: 'Design Concept 設計概念', body: '讓品牌語言與使用流程一致，建立有溫度且可轉換的數位體驗。' },
      { type: 'editorial-gallery', title: 'Final Design Showcase 最終設計', images: ['/images/project-web.svg', '/images/project-ui.svg', '/images/editorial-hero-board.svg'] }
    ]
  },
  {
    title: 'Flow Studio Identity', slug: 'aesora-brand-experience', category: 'Branding', year: '2023', role: 'Brand Designer', tools: ['Illustrator', 'Photoshop', 'Figma'], tags: ['Logo & Business Card Design', 'CIS / Brand Identity Design'], description: 'Complete identity system including logo, business card, and visual collateral.', overview: '品牌識別專案，從 logo 到名片與應用規範，建立一致識別。', challenge: '在有限素材下建立可擴充的品牌語言。', goal: '打造可應用於線上線下的完整識別系統。', concept: 'Simple and tactile identity with elegant typography.', visualSystem: '黑白基底搭配金棕色、幾何對位與低飽和質感。', process: 'Logo sketches → identity directions → mockup validations.', outcome: '完成品牌識別與基礎應用手冊。', strategy: 'Reduce visual noise and emphasize memorable brand marks.', problem: '原本品牌風格分散，無統一識別。', userNeeds: ['辨識度高。', '延展性強。'], reflection: '好識別不只好看，還要在不同情境都穩定。', coverImage: '/images/project-brand.svg', heroImage: '/images/project-brand.svg', galleryImages: ['/images/project-brand.svg', '/images/project-web.svg', '/images/project-editorial.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com',
    sections: [
      { type: 'two-column-grid', title: 'Challenge 挑戰', body: '在商業識別與藝術感之間找到平衡，避免過度裝飾。', images: ['/images/project-brand.svg', '/images/project-editorial.svg'] },
      { type: 'mockup-showcase', title: 'Visual System 視覺系統', body: 'Logo / Typography / Color / Stationery', images: ['/images/project-brand.svg', '/images/project-web.svg'] }
    ]
  },
  {
    title: 'Wumi Online Store', slug: 'nord-journal-design-lab', category: 'Web Design', year: '2023', role: 'E-commerce Designer', tools: ['Figma', 'Shopify', 'Photoshop'], tags: ['E-commerce & Social Media Design'], description: 'E-commerce and social campaign design focused on conversion and premium presentation.', overview: '電商網站與社群視覺整合，建立一致購物與品牌體驗。', challenge: '在促購資訊與品牌調性間保持平衡。', goal: '提升商品頁轉換與社群導流效果。', concept: 'Structured commerce with editorial product storytelling.', visualSystem: '卡片模組、視覺層級、產品特寫與暖色材質背景。', process: 'Mapping conversion journey → redesigning product and campaign modules.', outcome: '完成可重複應用的電商視覺模板。', strategy: 'Balance conversion modules with premium storytelling.', problem: '促銷資訊繁雜造成視覺壓力。', userNeeds: ['快速看到主打商品。', '購買流程簡單。'], reflection: '電商設計需要兼顧美感與商業效率。', coverImage: '/images/editorial-hero-board.svg', heroImage: '/images/editorial-hero-board.svg', galleryImages: ['/images/editorial-hero-board.svg', '/images/project-web.svg', '/images/project-ui.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com',
    sections: [{ type: 'full-width-image', title: 'Final Design Showcase', images: ['/images/editorial-hero-board.svg'] }]
  }
];
