import { ReactElement } from 'react';

export interface SocialLink {
  name: string;
  icon: ReactElement;
  link: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  social: SocialLink[];
  about: string[];
  resumeUrl: string;
  githubUsername: string;
}

export interface Project {
  name: string;
  timeline: string;
  description: string;
  github: string;
  demo: string | null;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface FeatureImportance {
  label: string;
  value: number;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  timeline: string;
  logo?: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  timeline: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  skills: Record<string, Skill[]>;
  featureImportance: FeatureImportance[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}
