export type ProjectCategory =
  | 'UX / Product Design'
  | 'Brand Experience'
  | 'Web Design'
  | 'Illustration'
  | 'Experimental Lab'
  | 'UI/UX Design'
  | 'Branding'
  | 'Packaging'
  | 'Editorial / Visual System';

export type ProjectSectionType =
  | 'full-width-image'
  | 'two-column-grid'
  | 'text-image'
  | 'image-text'
  | 'editorial-gallery'
  | 'quote-section'
  | 'stats-section'
  | 'mockup-showcase';

export interface ProjectSection {
  type: ProjectSectionType;
  title?: string;
  subtitle?: string;
  body?: string;
  images?: string[];
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  description: string;
  overview: string;
  challenge?: string;
  goal: string;
  concept?: string;
  visualSystem?: string;
  process?: string;
  outcome?: string;
  strategy: string;
  problem: string;
  userNeeds: string[];
  reflection: string;
  coverImage: string;
  heroImage: string;
  galleryImages: string[];
  figmaLink: string;
  prototypeLink: string;
  sections?: ProjectSection[];
}
