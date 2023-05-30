import {
  aws,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  python,
  css,
  reactjs,
  nodejs,
  git,
  postgresql,
  lighthouse,
  pantheremin,
  camswitcher,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Engineer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'LightHouse',
    description: 'An interactive art installation. A cross between a watchtower and a lighthouse, switching between shining a guiding light and compulsively tracking passersby.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: lighthouse,
    repo: 'https://github.com/shahar-cohen/LightHouse-art-installation',
    demo: 'https://youtu.be/Ru6Z45Rh16o',
  },
  {
    id: 'project-2',
    name: 'Pantheremin',
    description:
      'Proximity based arduino MIDI musical device with osc connection to grasshopper for visuals.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pantheremin,
    repo: 'https://github.com/shahar-cohen/Pantheremin',
    demo: 'https://youtu.be/_-8Fbb_CeyA',
  },
  {
    id: 'project-3',
    name: 'CamSwitcher',
    description: 'Video control system based on image recognition from live video feed. Made for an installation at the Bauhaus exhibit in the Israel Museum.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: camswitcher,
    repo: 'https://github.com/shahar-cohen/video-switcher-for-museum-art-installation',
    demo: 'https://github.com/shahar-cohen/video-switcher-for-museum-art-installation',
  },
];

export { services, technologies, experiences, projects };
