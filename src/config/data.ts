import { SectionId } from './sections'

export const profile = {
  name: 'Siddharth Mishra',
  title: 'Full-Stack Developer • Open-Source Contributor',
  tagline:
    'Building scalable web systems, real-time platforms, and developer tools — and sharing CS & engineering with a 10K+ developer community at @gotocodes.',
  status: 'Open to internships & collaborations',
  badges: [
    'React, Next.js, Node.js, TypeScript, C++, Python',
    'Open-Source Contributor • Cockpit & React-Bootstrap',
  ],
}

export const about = {
  paragraph:
    "I'm a Full-Stack Developer focused on scalable web systems, real-time platforms, and accessible UI engineering.\n\nBeyond building products like IPChat, Unravel, and Where's My Bus, I contribute to major open-source projects and run @gotocodes—producing technical content on full-stack development, DSA, and career guidance for a 10K+ developer community.",
  quickInfo: [
    { label: 'Location', value: 'India' },
    { label: 'Focus', value: 'Full Stack & Real-Time Systems' },
    { label: 'Open Source', value: 'Cockpit & React-Bootstrap' },
    { label: 'Founder', value: '@gotocodes (10K+ Devs)' },
  ],
}

export const techStack = {
  languages: {
    title: 'Languages',
    items: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
  },
  frameworks: {
    title: 'Frameworks',
    items: [
      'Node.js',
      'Express.js',
      'React',
      'Next.js',
      'Flask',
      'Tailwind CSS',
      'Socket.IO',
      'Mongoose',
      'HTML5',
      'CSS3',
    ],
  },
  tools: {
    title: 'Tools / Platforms',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Postman',
      'Visual Studio (debugger)',
      'CI/CD (Git-based deployments)',
      'Render',
      'Vercel',
      'MongoDB Atlas',
      'Google Cloud Console (OAuth setup)',
    ],
  },
  databases: {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL'],
  },
  coreCs: {
    title: 'Core CS',
    items: [
      'Data Structures',
      'Algorithms',
      'Operating Systems',
      'Computer Networks',
      'DBMS',
      'Object-Oriented Programming (OOP)',
    ],
  },
  concepts: {
    title: 'Concepts',
    items: [
      'RESTful APIs',
      'JWT Authentication',
      'AES-256-GCM Encryption',
      'Real-Time Communication (WebSockets)',
      'CRUD',
    ],
  },
  softSkills: {
    title: 'Soft Skills',
    items: ['Leadership', 'Teamwork', 'Problem-Solving', 'Technical Communication'],
  },
}

export type ExperienceItem = {
  organization: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    organization: '@gotocodes',
    role: 'Digital Creator',
    period: '2026 - Present',
    description:
      'Produced technical content on Instagram and YouTube (full-stack development, DSA, career guidance), communicating technical concepts clearly to a 10K+ developer community.',
    highlights: ['Instagram & YouTube', 'Full-Stack & DSA', '10K+ Developer Community'],
  },
]

export type OpenSourceContribution = {
  project: string
  stars: string
  date: string
  prUrl: string
  summary: string
  tech: string[]
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    project: 'Cockpit',
    stars: '15.4K+ GitHub Stars',
    date: 'November 2026',
    prUrl: 'https://github.com/cockpit-project/cockpit/pull/23884',
    summary:
      'Improved FileChooser accessibility via semantic ARIA labels, deduplicated screen-reader output and better keyboard navigation.',
    tech: ['React', 'TypeScript', 'ARIA', 'PatternFly'],
  },
  {
    project: 'React-Bootstrap',
    stars: '22.6K+ GitHub Stars',
    date: 'November 2026',
    prUrl: 'https://github.com/react-bootstrap/react-bootstrap/pull/7071#issuecomment-6940652378',
    summary:
      'Fixed iOS select-menu positioning via focus and blur handling on pointer events; added regression tests for modals.',
    tech: ['React', 'TypeScript', 'Vitest', 'DOM APIs'],
  },
]

export type Project = {
  title: string
  date: string
  highlights: string[]
  tech: string[]
  demoUrl: string
}

export const projects: Project[] = [
  {
    title: 'IPChat',
    date: 'March 2026',
    highlights: [
      'Built and deployed a real-time chat platform; handled hundreds of live sessions after a viral Reel (600K+ views, 20K+ saves).',
      'Implemented AES-256-GCM encryption, typing indicators, reply threading and live member lists with Socket.IO.',
    ],
    tech: ['Node.js', 'Express.js', 'Socket.IO', 'AES-256-GCM Encryption', 'JavaScript', 'Git'],
    demoUrl: 'https://ipchat.in',
  },
  {
    title: 'Unravel - Developer Tool for Online C++ Execution',
    date: 'April 2026',
    highlights: [
      'Built a developer tool: a browser-based C++ executor that compiles and runs code online with zero setup and returns output with instant feedback.',
      'Added automatic Big-O complexity analysis so learners see algorithm efficiency instantly; deployed live on Render.',
    ],
    tech: ['C++', 'JavaScript', 'Algorithms', 'Render'],
    demoUrl: 'https://unravel-pl53.onrender.com/',
  },
  {
    title: "Where's My Bus",
    date: 'July 2026',
    highlights: [
      'Architected a full-stack real-time bus tracking platform (MERN + Socket.IO) with RESTful APIs, JWT authentication, admin-managed route and vehicle CRUD, and road-accurate routing via OSRM and Leaflet.',
      'Built route search, live bus status, pinned routes, GPS interpolation and push alerts; deployed on Render, Vercel and MongoDB Atlas.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Leaflet', 'OSRM', 'RESTful APIs'],
    demoUrl: 'https://transport-monitoring-system.vercel.app/',
  },
  {
    title: 'Carbon Footprint Tracker',
    date: 'November 2025',
    highlights: [
      'Built a full-stack Flask app for enterprises to track and reduce carbon emissions using international emission factors.',
      'Built an interactive dashboard for real-time monitoring, sustainability targets and actionable insights; publicly live.',
    ],
    tech: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3'],
    demoUrl: 'https://carbfoot.vercel.app/',
  },
]

export type Certificate = {
  title: string
  issuer: string
  date: string
}

export const certificates: Certificate[] = [
  {
    title: 'Fundamentals of Docker and Kubernetes',
    issuer: 'Scaler',
    date: 'September 2025',
  },
  {
    title: 'MERN Stack Bootcamp - Full Stack Development and DevOps',
    issuer: 'Bootcamp',
    date: 'July 2026',
  },
  {
    title: 'Responsible and Safe AI Systems',
    issuer: 'NPTEL',
    date: 'November 2026',
  },
]

export type Achievement = {
  title: string
  date: string
  bullets: string[]
}

export const achievements: Achievement[] = [
  {
    title: 'Smart India Hackathon (SIH) - Internal Hackathon Winner',
    date: 'September 2026',
    bullets: [
      'Won the internal college hackathon for SIH with a 6-member team, out of 1000+ participating teams.',
      'Selected among the top 50 shortlisted teams, delivering a working software solution under tight hackathon deadlines.',
    ],
  },
]

export type EducationItem = {
  institution: string
  degree: string
  score: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: 'Lovely Professional University, Punjab, India',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    score: '',
    period: '2024 - 2028',
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
  emailAddress: 'siddharthmishra10e@gmail.com',
  github: 'https://github.com/Siddharth22GIT',
  linkedin: 'https://www.linkedin.com/in/-siddharthmishra/',
}

export const navTargets: { id: SectionId; label: string }[] = [
  { id: SectionId.About, label: 'About' },
  { id: SectionId.Tech, label: 'Skills' },
  { id: SectionId.Experience, label: 'Experience' },
  { id: SectionId.OpenSource, label: 'Open Source' },
  { id: SectionId.Projects, label: 'Projects' },
  { id: SectionId.Credentials, label: 'Education' },
  { id: SectionId.Contact, label: 'Contact' },
]
