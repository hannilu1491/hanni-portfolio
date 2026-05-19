import { Project } from '@/types/project';

export const categories = [
  'All',
  'UX / Product Design',
  'Brand Experience',
  'Web Design',
  'Illustration',
  'Experimental Lab'
] as const;

export const projects: Project[] = [
  {
    title: 'Calm Finance App Redesign', slug: 'calm-finance-app', category: 'UX / Product Design', year: '2026', role: 'Lead UX/UI Designer', tools: ['Figma', 'Notion', 'Maze'], tags: ['Fintech', 'Mobile UX', 'Design System'], description: 'Reframed a stressful budgeting flow into a guided emotional finance experience.', overview: 'A mobile product redesign focused on reducing financial anxiety and improving task completion.', strategy: 'Built around reassurance-first content, clear hierarchy, and progressive disclosure.', problem: 'Users dropped before completing setup due to information overload and low trust.', goal: 'Improve onboarding completion and weekly retention while keeping visual calmness.', userNeeds: ['As a first-time user, I need to understand where to start quickly.', 'As a busy professional, I need clear weekly snapshots.', 'As an anxious spender, I need gentle feedback instead of warnings.'], reflection: 'I learned how emotional copywriting and pacing can improve objective product metrics.', coverImage: '/images/placeholder.svg', heroImage: '/images/placeholder.svg', galleryImages: ['/images/placeholder.svg', '/images/placeholder.svg', '/images/placeholder.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  },
  {
    title: 'Aesora Brand Experience Site', slug: 'aesora-brand-experience', category: 'Brand Experience', year: '2025', role: 'Brand & Experience Designer', tools: ['Figma', 'After Effects', 'Photoshop'], tags: ['Storytelling', 'Luxury', 'Web Experience'], description: 'Crafted a narrative-led digital brand world with immersive editorial pacing.', overview: 'A premium e-commerce brand microsite balancing conversion and artistic expression.', strategy: 'Editorial composition, cinematic image rhythm, and controlled interaction details.', problem: 'The brand had strong visual assets but inconsistent digital storytelling.', goal: 'Unify brand narrative and increase product page engagement time.', userNeeds: ['Understand brand craft story quickly.', 'Move from inspiration to product intent naturally.'], reflection: 'Consistency across typography, spacing, and pacing creates trust in premium brands.', coverImage: '/images/placeholder.svg', heroImage: '/images/placeholder.svg', galleryImages: ['/images/placeholder.svg', '/images/placeholder.svg', '/images/placeholder.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  },
  {
    title: 'Nord Journal Design Lab', slug: 'nord-journal-design-lab', category: 'Experimental Lab', year: '2024', role: 'Design Researcher', tools: ['Figma', 'Rive', 'Spline'], tags: ['Experiment', 'Motion', 'Editorial UI'], description: 'Explored interactive editorial layouts that blend reading and micro-interactions.', overview: 'A visual lab project testing modern publishing interfaces for creative portfolios.', strategy: 'Use restrained motion and grid disruptions to keep curiosity without chaos.', problem: 'Standard portfolio templates feel interchangeable and lack emotional signature.', goal: 'Prototype distinctive yet usable visual patterns for long-form case studies.', userNeeds: ['Skim fast without losing structure.', 'Enjoy moments of surprise without confusion.'], reflection: 'Expressive design works best when paired with strict information architecture.', coverImage: '/images/placeholder.svg', heroImage: '/images/placeholder.svg', galleryImages: ['/images/placeholder.svg', '/images/placeholder.svg', '/images/placeholder.svg'], figmaLink: 'https://figma.com', prototypeLink: 'https://figma.com'
  }
];
