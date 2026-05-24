import { Project } from '@/types/project';

export const projectAddTemplate: Project = {
  title: 'New Project Title',
  slug: 'new-project-slug',
  category: 'UI/UX Design',
  year: '2026',
  role: 'Designer',
  tools: ['Figma'],
  tags: ['UI/UX'],
  description: 'Short project description.',
  overview: 'Overview content.',
  challenge: 'Challenge content.',
  goal: 'Goal content.',
  concept: 'Design concept.',
  visualSystem: 'Visual system notes.',
  process: 'Process notes.',
  outcome: 'Outcome summary.',
  strategy: 'Strategy summary.',
  problem: 'Problem definition.',
  userNeeds: ['Need 1', 'Need 2', 'Need 3'],
  reflection: 'Reflection content.',
  coverImage: '/images/projects/path-to-cover.avif',
  heroImage: '/images/projects/path-to-hero.avif',
  galleryImages: [
    '/images/projects/path-to-gallery-1.avif',
    '/images/projects/path-to-gallery-2.avif'
  ],
  subProjects: [
    {
      title: 'Sub Project Card 1',
      description: 'Sub project description.',
      image: '/images/projects/path-to-sub-1.avif',
      tags: ['Tag A', 'Tag B']
    },
    {
      title: 'Sub Project Card 2',
      description: 'Sub project description.',
      image: '/images/projects/path-to-sub-2.avif',
      tags: ['Tag A', 'Tag B']
    },
    {
      title: 'Sub Project Card 3',
      description: 'Sub project description.',
      image: '/images/projects/path-to-sub-3.avif',
      tags: ['Tag A', 'Tag B']
    },
    {
      title: 'Sub Project Card 4',
      description: 'Sub project description.',
      image: '/images/projects/path-to-sub-4.avif',
      tags: ['Tag A', 'Tag B']
    }
  ],
  figmaLink: 'https://www.figma.com/',
  prototypeLink: 'https://www.figma.com/'
};
