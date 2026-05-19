export type ProjectCategory =
  | 'UX / Product Design'
  | 'Brand Experience'
  | 'Web Design'
  | 'Illustration'
  | 'Experimental Lab';

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
  strategy: string;
  problem: string;
  goal: string;
  userNeeds: string[];
  reflection: string;
  coverImage: string;
  heroImage: string;
  galleryImages: string[];
  figmaLink: string;
  prototypeLink: string;
}
