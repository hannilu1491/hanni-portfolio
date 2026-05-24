import { Project, ProjectCategory, ProjectSection, SubProject } from '@/types/project';
import { wixImportedProjects } from './projects-wix-import-ready';

export const categories = ['All', 'UI/UX Design', 'Branding', 'E-commerce Design', 'Illustration'] as const;

const fallbackLinks = { figmaLink: 'https://www.figma.com/', prototypeLink: 'https://www.figma.com/' };
const fallbackImage = '/images/projects/uiux-multimedia/uiux-pet-hotel-official-website.avif';

const projectOrder = ['uiux-multimedia-design', 'logo-business-card-design', 'cis-brand-identity-design', 'ecommerce-social-media-design', 'illustration-design'];

const ensureMinCards = (images: string[], title: string): SubProject[] => {
  const source = images.length ? images : [fallbackImage];
  return Array.from({ length: 4 }).map((_, i) => ({
    title: `${title} Sub Project ${i + 1}`,
    description: 'Placeholder sub project card from asset map for later replacement.',
    image: source[i % source.length],
    tags: ['Sub Project', `Card ${i + 1}`]
  }));
};

export const projects: Project[] = projectOrder
  .map((slug) => wixImportedProjects.find((item) => item.slug === slug))
  .filter((project): project is (typeof wixImportedProjects)[number] => Boolean(project))
  .map((project): Project => ({
    ...project,
    sections: project.sections as ProjectSection[] | undefined,
    category: project.category as ProjectCategory,
    coverImage: project.coverImage || fallbackImage,
    heroImage: project.heroImage || project.coverImage || fallbackImage,
    galleryImages: project.galleryImages?.length ? project.galleryImages : [project.coverImage || fallbackImage],
    subProjects: ensureMinCards(project.galleryImages || [], project.title),
    goal: '建立完整作品敘事與可展示的品牌/數位設計成果，支援實際提案與作品集展示。',
    strategy: project.concept || '以一致的視覺語言與資訊分層，強化品牌辨識與體驗理解。',
    problem: project.challenge || '',
    userNeeds: ['快速理解作品重點。', '看見完整視覺成果。', '可在不同裝置順暢瀏覽。'],
    ...fallbackLinks
  }));
