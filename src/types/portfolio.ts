export type ThemeMode = 'light' | 'dark';

export interface Profile {
  name: string;
  introduction: string;
  avatar: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export type IconName =
  | 'web'
  | 'mobile'
  | 'desktop'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'facebook';

export interface SkillItem {
  name: string;
  logo?: string;
  symbol?: IconName;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface ProjectTechnology {
  name: string;
  logo?: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: (string | ProjectTechnology)[];
  demoUrl: string | null;
  sourceUrl: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  icon: IconName;
  label: string;
  url: string | null;
}

export interface ContactInfo {
  email: string;
  socialLinks: SocialLink[];
}

