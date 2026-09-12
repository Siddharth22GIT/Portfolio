import { SectionId } from './sections'

export const profile = {
  name: 'Siddharth Mishra',
  title: 'Software Developer • ML • LLMs',
  tagline:
    'Developer by day, Creator by night.',
}

export const about = {
  paragraph:
    "I'm a Software dev, building modern, high-performance apps and developing scalable backend systems.\n\nBeyond development, I run a developers community of over 10,000+ CS students on Instagram.",
  quickInfo: [
    { label: 'Location', value: 'India' },
    { label: 'Education', value: 'B.Tech CSE' },
    { label: 'Focus', value: 'Full Stack & CS Fundamentals' },
    { label: 'Also', value: 'Video editing & motion design' },
  ],
}

export const techStack = {
  frontend: {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'],
  },
  backend: {
    title: 'Backend',
    items: ['Node.js (Express)', 'NextJS', 'Python (Flask)', 'Python(FastAPI)'],
  },
  ML: {
    title: 'ML Stack',
    items: ['XGBoost','Regression','OpenCV','NumPy','Pandas','Scikit','Matplotlib']
  },
  core: {
    title: 'Core CS',
    items: ['C', 'C++','Java', 'Python', 'Data Structures & Algorithms', 'SQL'],
  },
  tools: {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
}

export type Project = {
  title: string
  description: string
  tech: string[]
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Carbon Footprint Tracker',
    description:
      'A Flask web application for companies to track, manage, and visualize their carbon footprint data.',
    tech: ['Flask', 'Python', 'Bootstrap', 'SQLite'],
    demoUrl: 'https://carbfoot.vercel.app/',
  },
  {
    title: 'Creator Studio',
    description:
      "A modern, dynamic, and responsive personal landing page showcasing an individual's work as a creator, developer, and educator.",
    tech: ['React', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://creator-landing-page-hazel.vercel.app/',
  },
  {
    title: 'Master Chef',
    description:
      'MasterChef is a recipe generator website. Just request a food item and get recipes on demand. Explore innovative culinary creations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://siddharth22git.github.io/MasterChef/',
  },
  {
    title: 'Safelink',
    description:
      'SafeLink is a lightweight, privacy-focused web application that helps users verify the safety of any URL before clicking it.',
    tech: ['JavaScript', 'Node.js', 'API'],
    demoUrl: 'https://safelink-seven.vercel.app/',
  },
]

export const creativeSkills = [
  'Video Editing',
  'Color Grading',
  'Motion Graphics',
  'Explainer Visuals',
  'YouTube-style Editing',
]

export const contactLinks = {
  email: 'mailto:siddharthmishra10e@gmail.com',
  github: 'https://github.com/Siddharth22GIT',
  linkedin: 'https://www.linkedin.com/in/-siddharthmishra/',
  x: 'https://x.com/sidmishrx',
}

export const navTargets: { id: SectionId; label: string }[] = [
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Tech, label: 'Tech' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Creative, label: 'Creative' },
  { id: SectionId.Contact, label: 'Contact' },
]


