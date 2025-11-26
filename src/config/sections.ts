export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Tech = 'tech',
  Projects = 'projects',
  Creative = 'creative',
  Contact = 'contact',
}

export const sections = [
  { id: SectionId.Hero, label: 'Home' },
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Tech, label: 'Tech Stack' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Creative, label: 'Creative' },
  { id: SectionId.Contact, label: 'Contact' },
] as const


