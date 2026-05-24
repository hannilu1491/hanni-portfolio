import { Project, ProjectCategory, ProjectSection } from '@/types/project';
import { wixImportedProjects } from './projects-wix-import-ready';

export const categories = ['All', 'UI/UX Design', 'Branding', 'E-commerce Design', 'Illustration'] as const;

const fallbackLinks = {
  figmaLink: 'https://www.figma.com/',
  prototypeLink: 'https://www.figma.com/'
};

const coverImageBySlug: Record<string, string> = {
  'uiux-multimedia-design': '/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif',
  'logo-business-card-design': '/images/projects/logo-business-card/logo-business-card-grey-gold-deer.avif',
  'cis-brand-identity-design': '/images/projects/brand-identity/brand-identity-corner-98-real-estate.avif',
  'ecommerce-social-media-design': '/images/projects/ecommerce-social/ecommerce-gift-edm-design.avif',
  'illustration-design': '/images/projects/illustration/illustration-postcard-series.avif'
};

const heroImageBySlug: Record<string, string> = {
  'uiux-multimedia-design': '/images/projects/uiux-multimedia/uiux-pet-hotel-showcase.avif',
  'logo-business-card-design': '/images/projects/logo-business-card/logo-business-card-grey-gold-deer.avif',
  'cis-brand-identity-design': '/images/projects/brand-identity/brand-identity-corner-98-real-estate.avif',
  'ecommerce-social-media-design': '/images/projects/ecommerce-social/ecommerce-product-detail-thermos.avif',
  'illustration-design': '/images/projects/illustration/illustration-collage.avif'
};

const projectOrder = [
  'uiux-multimedia-design',
  'logo-business-card-design',
  'cis-brand-identity-design',
  'ecommerce-social-media-design',
  'illustration-design'
];

export const projects: Project[] = projectOrder
  .map((slug) => wixImportedProjects.find((item) => item.slug === slug))
  .filter((project): project is (typeof wixImportedProjects)[number] => Boolean(project))
  .map((project): Project => ({
    ...project,
    sections: project.sections as ProjectSection[] | undefined,
    category: project.category as ProjectCategory,
    coverImage: coverImageBySlug[project.slug] || project.coverImage,
    heroImage: heroImageBySlug[project.slug] || project.heroImage,
    goal:
      project.slug === 'uiux-multimedia-design'
        ? '建立一個可直接對客展示的寵物旅館品牌官網體驗，強化服務信任感與預約意圖。'
        : project.slug === 'logo-business-card-design'
        ? '在短時間內輸出多組具有產業辨識度的品牌識別，並可落地於名片與商務情境。'
        : project.slug === 'cis-brand-identity-design'
        ? '打造具在地記憶點與一致延展性的房地產 CIS，支撐銷售與品牌溝通。'
        : project.slug === 'ecommerce-social-media-design'
        ? '優化促銷資訊與商品賣點呈現，提升活動點擊率與商品頁理解效率。'
        : '建立可跨載體使用的插畫系列，兼顧角色辨識、敘事張力與商業應用彈性。',
    strategy:
      project.slug === 'uiux-multimedia-design'
        ? '以內容分層 + 情境視覺雙軌策略，先解決「看懂服務」，再建立「想預約」的品牌感受。'
        : project.slug === 'logo-business-card-design'
        ? '採用「符號極簡化 + 色彩性格化」策略，讓每個品牌在小尺寸介面仍能被快速識別。'
        : project.slug === 'cis-brand-identity-design'
        ? '將街角地景語彙轉為識別主軸，透過高一致性的色彩與版式控制跨媒體品牌記憶。'
        : project.slug === 'ecommerce-social-media-design'
        ? '使用「賣點模組化 + 通路尺寸模板化」方法，兼顧大量素材產出與視覺一致性。'
        : '以角色設定先行，建立可延展的圖像語法，讓單張作品與系列敘事彼此呼應。',
    problem: project.challenge || '',
    userNeeds:
      project.slug === 'uiux-multimedia-design'
        ? ['快速理解服務差異與流程。', '在手機與桌機皆能順暢瀏覽。', '透過視覺建立品牌信任。']
        : project.slug === 'logo-business-card-design'
        ? ['Logo 需要高辨識度。', '名片資訊需清楚且有質感。', '品牌風格能快速延展到其他物料。']
        : project.slug === 'cis-brand-identity-design'
        ? ['品牌要有在地連結與記憶點。', '銷售物料在不同尺寸維持一致。', '資訊可讀性與視覺吸引力並重。']
        : project.slug === 'ecommerce-social-media-design'
        ? ['第一眼看到促銷重點。', '快速掌握商品關鍵規格。', '在不同平台看到一致品牌語言。']
        : ['角色有明確個性與表情語彙。', '作品可用於節慶與商業素材。', '系列圖像具有一致風格。'],
    ...fallbackLinks
  }));
