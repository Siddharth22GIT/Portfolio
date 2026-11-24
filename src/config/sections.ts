const SectionId = {
  Hero: 'hero',
  About: 'about',
  Tech: 'tech',
  Experience: 'experience',
  OpenSource: 'open-source',
  Projects: 'projects',
  Credentials: 'credentials',
  Creative: 'creative',
  Contact: 'contact',
} as const;

type SectionId = typeof SectionId[keyof typeof SectionId];

export { SectionId };

export const sections = [
  { id: SectionId.Hero, label: 'Home' },
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Tech, label: 'Skills' },
  { id: SectionId.Experience, label: 'Experience' },
  { id: SectionId.OpenSource, label: 'Open Source' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Credentials, label: 'Credentials' },
  { id: SectionId.Creative, label: 'Creative' },
  { id: SectionId.Contact, label: 'Contact' },
] as const
