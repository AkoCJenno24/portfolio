import type {
  Profile,
  NavItem,
  SkillGroup,
  Project,
  FAQItem,
  ContactInfo,
} from '../types/portfolio';

export const profileData: Profile = {
  name: 'Jenno',
  introduction:
    'Always ready for your next big thing, let’s make it happen!',
  avatar: '/assets/images/avatar.jpg',
};

export const navigationData: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Skills', id: 'skills' },
  { label: 'Project', id: 'projects' },
  { label: 'About Me', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const skillGroupsData: SkillGroup[] = [
  {
    title: 'AI Tools',
    items: [
      { name: 'Claude', logo: 'claude' },
      { name: 'Codex', logo: 'codex' },
      { name: 'Gemini', logo: 'gemini' },
    ],
  },
  {
    title: 'IDEs',
    items: [
      { name: 'VS Code', logo: 'vscode' },
      { name: 'Antigravity', logo: 'antigravity' },
      { name: 'Cursor', logo: 'cursor' },
    ],
  },
  {
    title: 'Development Tools',
    items: [
      { name: 'React.js', logo: 'react' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'GitHub', logo: 'github' },
      { name: 'Firebase', logo: 'firebase' },
      { name: 'Supabase', logo: 'supabase' },
    ],
  },
  {
    title: 'App Development',
    items: [
      { name: 'Web', symbol: 'web' },
      { name: 'Mobile', symbol: 'mobile' },
      { name: 'Desktop', symbol: 'desktop' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    name: 'DropCode',
    description:
      'Fast, temporary code-based file sharing between devices without accounts or setup. Send and receive files seamlessly with a 6-character code.',
    image: '/assets/images/dropcode.jpg',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'TypeScript'],
    demoUrl: 'https://dropcode-jenno.netlify.app/',
    sourceUrl: 'https://github.com/AkoCJenno24/dropcode',
  },
  {
    name: 'Project B',
    description:
      'This is just a dummy description for project section and every this is nonsense.',
    image: '/assets/images/project-code.jpg',
    technologies: ['React', 'NodeJS', 'Express'],
    demoUrl: null,
    sourceUrl: null,
  },
  {
    name: 'Project C',
    description:
      'This is just a dummy description for project section and every this is nonsense.',
    image: '/assets/images/project-code.jpg',
    technologies: ['React', 'NodeJS', 'Express'],
    demoUrl: null,
    sourceUrl: null,
  },
];

// You can write aboutData as a single string, a multi-line string with backticks (` `), or an array of paragraphs (string[]).
export const aboutData = [
  'I’m a BSIT graduate and self-taught developer building web, mobile, and desktop applications through personal projects. I work across the full stack from interfaces to databases, and use AI tools as development companions. I enjoy working independently and am ready to apply my skills to real-world projects. I am constantly expanding my skill set and exploring new technologies to build modern, user-friendly digital experiences.',

  'Even though I am a self-taught developer and not been part of any tech companies or an experienced professional, I have a strong foundation in computer science principles and programming concepts. I am passionate about learning and staying up-to-date with the latest trends and best practices in software development. I enjoy solving complex problems and create innovative solutions.',
];

export const faqsData: FAQItem[] = Array.from({ length: 4 }, () => ({
  question: 'How are you?',
  answer:
    'This is just to answer the non sense question of how are you. just fro content purposes',
}));

export const contactData: ContactInfo = {
  email: 'contactme@yahoo.com',
  socialLinks: [
    { name: 'GitHub', icon: 'github', label: 'linkedin.com/myaccount', url: null },
    { name: 'LinkedIn', icon: 'linkedin', label: 'linkedin.com/myaccount', url: null },
    { name: 'Facebook', icon: 'facebook', label: 'linkedin.com/myaccount', url: null },
  ],
};

