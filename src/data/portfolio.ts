import { Project, Experience, Education, Skill, SocialLink } from '../types';

export const projects: Project[] = [
  // {
  //   id: 'decentrawood',
  //   title: 'Decentrawood',
  //   type: 'Web3 + VR Game',
  //   platforms: ['WebGL', 'WebXR (VR)', 'Android', 'PC'],
  //   description: 'A decentralized immersive experience built in Unity. Deployed via AWS and optimized for Quest 2.',
  //   technologies: ['Unity', 'Web3', 'GitHub', 'AWS S3/CloudFront', 'WebXR Plugin'],
  // },
  {
    id: 'mumbai-gullies',
    title: 'Mumbai Gullies',
    type: '3D Open-World Game',
    platforms: ['PC'],
    description: '3D open-world urban game prototype inspired by Indian locales',
    technologies: ['Unity', 'Blender', 'Git'],
  },
  {
    id: 'mystical-maze',
    title: 'Mystical Maze',
    type: 'Puzzle Game',
    platforms: ['WebGL', 'Android'],
    description: 'Puzzle-based level navigation game with visual VFX',
    technologies: ['Unity', 'Shader Graph', 'Cinemachine'],
  },
  {
    id: 'lord-of-space',
    title: 'Lord of the Space',
    type: 'Space Battle Arena',
    platforms: ['WebGL'],
    description: 'Space battle arena with projectile physics and wave systems',
    technologies: ['Unity', 'C#', 'Particle System'],
  },
  {
    id: 'match-mania',
    title: 'Match Mania',
    type: 'Casual Mobile Game',
    platforms: ['Android'],
    description: 'Match-3 casual game with color-based mechanics',
    technologies: ['Unity', 'UI Toolkit'],
  },
];

export const experiences: Experience[] = [
  {
    id: 'biz-tech',
    company: 'Biz Technologies',
    position: 'Unity Game Developer',
    duration: 'June 2025 – Present',
    description: [
      'Working on VR/Web3 games with cross-platform builds',
      'Designed WebXR environments and managed cloud deployment via AWS (S3, CloudFront, EC2)',
      'Maintained GitHub repos, build pipelines, and WebGL APK deployments'
    ],
    technologies: ['Unity', 'VR/WebXR', 'Web3', 'AWS', 'GitHub'],
  },
  {
    id: 'gameon',
    company: 'GameEon Studios',
    position: 'Jr Game Developer',
    duration: 'Sep 2024 – May 2025',
    description: [
      '2D & 3D game mechanics using Unity and C#',
      'Level and environment design, particle systems, and animation control'
    ],
    technologies: ['Unity', 'C#', 'Level Design', 'Animation'],
  },
  {
    id: 'irealities',
    company: 'I Realities',
    position: 'Unreal Environment Artist',
    duration: 'Oct 2023 – Apr 2024',
    description: [
      'Created cinematic 3D environments for video production'
    ],
    technologies: ['Unreal Engine 5', 'Blender', 'Maya'],
  },
];

export const education: Education[] = [
  {
    id: 'maac',
    institution: 'MAAC',
    degree: 'Diploma in Advanced Game Development and VFX',
    duration: '2018–2022',
  },
  {
    id: 'accelerator',
    institution: 'Nikhil Malankar',
    degree: 'Game Dev Accelerator',
    duration: 'Apr–Nov 2024',
  },
  {
    id: 'unity-cert',
    institution: 'Unity Technologies',
    degree: 'Unity Certified Programmer – Professional Level',
    duration: '2025 (In Progress)',
  },
  {
    id: 'hsc',
    institution: 'Vidyaniketan College of Commerce',
    degree: 'HSC',
    duration: '2016–2018',
  },
];

export const skills: Skill[] = [
  {
    category: 'Game Development',
    items: ['Unity 2D/3D', 'C# Scripting', 'Level Design', 'Game Mechanics'],
  },
  {
    category: 'VR/AR & Web3',
    items: ['Meta Quest', 'WebXR', 'VR Development', 'Web3 Integration', 'Blockchain'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS S3', 'AWS EC2', 'CloudFront', 'Git', 'GitHub', 'GitExtensions'],
  },
  {
    category: '3D & Design',
    items: ['Blender', 'Maya', 'Adobe Photoshop', 'After Effects', 'Shader Graph'],
  },
  {
    category: 'Optimization',
    items: ['WebGL Optimization', 'Performance Tuning', 'Cross-platform Builds'],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/YashD007',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yash-dhanawde-8b1909215',
    icon: 'linkedin',
  },
  {
    platform: 'ArtStation',
    url: 'https://artstation.com/yashdhanawde',
    icon: 'palette',
  },
  // {
  //   platform: 'Email',
  //   url: 'mailto:yashdhanawde2000@gmail.com',
  //   icon: 'mail',
  // },
];