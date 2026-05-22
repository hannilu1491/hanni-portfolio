import { Project } from '@/types/project';

export const categories = [
  'All',
  'UI/UX Design',
  'Branding',
  'Web Design',
  'Packaging',
  'Illustration',
  'Editorial / Visual System'
] as const;

export const projects: Project[] = [
  {
    title: 'NEXA Finance App', slug: 'calm-finance-app', category: 'UI/UX Design', year: '2026', role: 'Lead UX/UI Designer', tools: ['Figma', 'Notion', 'Maze'], tags: ['Fintech', 'Mobile UX', 'Design System'], description: 'Designed a calm personal finance flow that improved onboarding clarity and trust.', overview: 'A mobile product redesign focused on reducing financial anxiety and improving task completion.', strategy: 'Reframed key moments through reassurance-first copy, clear hierarchy, and progressive disclosure.', problem: 'Users dropped before completing setup due to information overload and low trust.', goal: 'Improve onboarding completion and weekly retention while keeping visual calmness.', userNeeds: ['As a first-time user, I need to understand where to start quickly.', 'As a busy professional, I need clear weekly snapshots.', 'As an anxious spender, I need gentle feedback instead of warnings.'], reflection: 'I learned how emotional copywriting and pacing can improve objective product metrics.', coverImage: '/images/project-ui.svg', heroImage: '/images/project-ui.svg', galleryImages: ['/images/project-ui.svg', '/images/project-web.svg', '/images/editorial-hero-board.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  },
  {
    title: 'HUALI Brand & Packaging', slug: 'aesora-brand-experience', category: 'Branding', year: '2025', role: 'Brand & Experience Designer', tools: ['Figma', 'After Effects', 'Photoshop'], tags: ['Storytelling', 'Luxury', 'Branding'], description: 'Built a luxury brand narrative across identity, packaging, and digital touchpoints.', overview: 'A premium brand world balancing product storytelling and elegant conversion design.', strategy: 'Editorial composition, tactile neutral palette, and cinematic visual rhythm.', problem: 'The brand had strong visual assets but inconsistent digital storytelling.', goal: 'Unify brand narrative and increase product engagement.', userNeeds: ['Understand brand craft story quickly.', 'Move from inspiration to product intent naturally.'], reflection: 'Consistency across typography, spacing, and pacing creates trust in premium brands.', coverImage: '/images/project-brand.svg', heroImage: '/images/project-brand.svg', galleryImages: ['/images/project-brand.svg', '/images/project-editorial.svg', '/images/project-web.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  },
  {
    title: 'Nord Editorial Web System', slug: 'nord-journal-design-lab', category: 'Editorial / Visual System', year: '2024', role: 'Design Researcher', tools: ['Figma', 'Rive', 'Spline'], tags: ['Editorial', 'Motion', 'Design System'], description: 'Explored interactive editorial layouts blending storytelling with modern UI systems.', overview: 'A visual lab project testing modern publishing interfaces for creative portfolios.', strategy: 'Use restrained motion and grid disruptions to keep curiosity without chaos.', problem: 'Standard portfolio templates feel interchangeable and lack emotional signature.', goal: 'Prototype distinctive yet usable visual patterns for long-form case studies.', userNeeds: ['Skim fast without losing structure.', 'Enjoy moments of surprise without confusion.'], reflection: 'Expressive design works best when paired with strict information architecture.', coverImage: '/images/project-editorial.svg', heroImage: '/images/project-editorial.svg', galleryImages: ['/images/project-editorial.svg', '/images/project-ui.svg', '/images/editorial-hero-board.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  }
];
