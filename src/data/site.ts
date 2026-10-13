import type { ImageMetadata } from 'astro';

import gWatercolour from '../assets/photos/g-watercolour-pastel.jpg';
import gWaxResist from '../assets/photos/g-wax-resist-portrait.jpg';
import gAstronaut from '../assets/photos/g-mixed-media-astronaut.jpg';
import gCollage from '../assets/photos/g-collage-space.jpg';
import gPaperDoll from '../assets/photos/g-paper-doll.jpg';
import gCharacter from '../assets/photos/g-character-study.jpg';
import gZebra from '../assets/photos/g-zebra-puppet.jpg';
import gNightHorse from '../assets/photos/g-night-horse.jpg';
import gMovingHorse from '../assets/photos/g-moving-horse.jpg';
import gFox from '../assets/photos/g-popup-fox.jpg';
import gButtons from '../assets/photos/g-self-portrait-buttons.jpg';
import gLetters from '../assets/photos/hero-standing-letters.jpg';

// TODO(Mae): confirm everything below before launch — prices, schedules, stats,
// address, banner date, email and all gallery captions are placeholders from the design.
export const site = {
  name: "Mae's Creative Classroom",
  email: 'contact@maeclassroom.com',
  instagram: 'https://www.instagram.com/mae_creative_classroom',
  instagramHandle: '@mae_creative_classroom',
  studio: ['Unit 4, The Old Print Works', 'Open Wednesday–Saturday'],
  showPricing: true,
  enrollOpen: true,
  banner: 'Autumn term opens for enrolment on 12 August — three places left in the Drawing Intensive.',
};

export const accents = {
  magenta: { border: '#CB218C', label: '#CB218C', tape: 'rgba(203, 33, 140, 0.25)' },
  orange: { border: '#EF9400', label: '#B87200', tape: 'rgba(239, 148, 0, 0.35)' },
  red: { border: '#EA4445', label: '#C9302F', tape: 'rgba(234, 68, 69, 0.25)' },
} as const;

// TODO(Mae): add a real parent quote; the home page hides the section while this is null.
export const quote: { text: string; by: string } | null = null;

// Only questions with confirmed answers. Add more as Mae answers them.
export const faqs = [
  { q: 'How does the trial session work?', a: 'Your child joins one normal class for £22. If they stay for the term, it comes off the fee.' },
  { q: 'What should they bring?', a: 'Nothing. Materials and aprons are included in the term fee.' },
];

type Accent = keyof typeof accents;

export const stats: { value: string; label: string; color: string }[] = [
  { value: '12', label: 'years teaching art', color: '#CB218C' },
  { value: '8', label: 'students per class, maximum', color: '#EF9400' },
  { value: '40+', label: 'school workshops delivered', color: '#EA4445' },
  { value: '300+', label: 'young artists taught', color: '#CB218C' },
];

export const programs: {
  name: string; ages: string; accent: Accent; description: string;
  chips: string[]; highlight?: string; price: number;
}[] = [
  {
    name: 'Little Studio', ages: 'Ages 6–8', accent: 'magenta', price: 190,
    description: 'A first proper art class. Colour mixing, mark making, clay and collage, with a finished piece to take home most weeks. Built to grow confidence before technique.',
    chips: ['Saturdays 9:30', '75 minutes'],
  },
  {
    name: 'Mixed Media Lab', ages: 'Ages 9–12', accent: 'orange', price: 230,
    description: 'Ten weeks, ten materials. Ink, acrylic, lino print, plaster, found objects — each one introduced properly, then combined into a self-directed final piece.',
    chips: ['Wednesdays 16:30', '90 minutes'],
  },
  {
    name: 'Drawing Intensive', ages: 'Ages 13–17', accent: 'red', price: 290,
    description: 'Observational drawing taken seriously: proportion, value, perspective, the figure. Teens leave with a portfolio body of work suitable for GCSE, A-level or foundation applications.',
    chips: ['Thursdays 17:00', '2 hours'], highlight: '3 places left',
  },
];

export const gallery: { image: ImageMetadata; medium: string; credit: string; contain?: boolean }[] = [
  { image: gWatercolour, medium: 'Watercolour and oil pastel', credit: 'Amara, 11' },
  { image: gWaxResist, medium: 'Wax-resist portrait', credit: 'Theo, 8' },
  { image: gAstronaut, medium: 'Mixed-media astronaut', credit: 'Naomi, 7' },
  { image: gCollage, medium: 'Collage in space', credit: 'Cam, 6' },
  { image: gPaperDoll, medium: 'Jointed paper doll, fabric scraps', credit: 'Ines, 10' },
  { image: gCharacter, medium: 'Character study, paper and thread', credit: 'Nadia, 13' },
  { image: gZebra, medium: 'Zebra rod puppet', credit: 'Ruth, 9' },
  { image: gNightHorse, medium: 'Night horse, gouache', credit: 'Yusuf, 12' },
  { image: gMovingHorse, medium: 'Moving horse, split pins', credit: 'Wren, 9' },
  { image: gFox, medium: 'Pop-up fox in autumn', credit: 'Iris, 8', contain: true },
  { image: gButtons, medium: 'Self-portrait with buttons', credit: 'Sam, 7' },
  { image: gLetters, medium: 'Standing letters, pattern study', credit: 'group piece' },
];
