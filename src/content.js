// Page copy lives here so it can evolve without touching component markup.
import { IconBriefcase, IconCloud, IconWorkflow } from './icons.jsx';

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const HERO = {
  eyebrow: '30+ YEARS BUILDING SOFTWARE',
  headline: 'Software solutions built to ',
  headlineAccent: 'just work.',
  sub: 'Freelance software engineering for teams who need cloud integrations, workflow automation, and production-ready systems — without the overhead of a full agency.',
  primaryCta: 'Email me →',
  secondaryCta: 'See services',
  checks: ['30+ years experience', 'Banks, logistics & steel industries', 'BSc Computer Science'],
};

export const SERVICES = {
  eyebrow: 'WHAT I DO',
  heading: 'Pick one, or mix them — most work is a blend.',
  items: [
    {
      icon: IconBriefcase,
      title: 'Freelance Contract Work',
      blurb: 'Project-based work for teams and businesses.',
      items: [
        ['Flexible timelines', 'Adapt to your schedule'],
        ['Full ownership', 'Take control of your project'],
        ['Clear deliverables', "Know what you're getting"],
      ],
    },
    {
      icon: IconCloud,
      title: 'Cloud Integrations',
      blurb: 'Serverless APIs and event-driven pipelines on AWS.',
      items: [
        ['Lambda', 'Serverless compute functions'],
        ['EventBridge', 'Event routing and processing'],
        ['Observability', 'Monitoring, logs, and alerts'],
      ],
    },
    {
      icon: IconWorkflow,
      title: 'Accounting Automation',
      blurb: 'OAuth flows and automation for finance systems.',
      items: [
        ['OAuth', 'Secure authentication flows'],
        ['Document workflows', 'Automated file handling'],
        ['Production-ready', 'Built to scale and handle failures'],
      ],
    },
  ],
};

export const ABOUT = {
  eyebrow: 'ABOUT',
  heading: 'Salome Becker.',
  bio: [
    "I'm a software engineer with a BSc degree in Computer Science and over 30 years of experience building software for major banks, logistics companies, and steel producers.",
    'I specialize in cloud integrations and workflow automation — delivering robust, scalable solutions that streamline operations and cut out manual work.',
  ],
  tags: ['Cloud & serverless (AWS)', 'Workflow automation', 'Financial systems', 'API integration'],
  stats: [
    { num: '30+', label: 'Years of experience' },
    { num: 'BSc', label: 'Computer Science' },
    { num: 'Banks · Logistics · Steel', label: 'Industries served', wide: true },
  ],
};

export const CONTACT = {
  heading: "Let's build something.",
  primaryCta: 'Email me',
  copyCta: 'Copy email',
  copiedCta: 'Copied!',
  copiedMessage: 'Copied to clipboard',
  copyFailedMessage: 'Copy failed — use the email link',
};

export const FLOATING_CTA = {
  ariaLabel: 'Email Salome Becker',
  title: 'Email Salome',
};
