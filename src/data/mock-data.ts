import { Deployment, StatItem } from '@/types';

export const crewPulse: StatItem[] = [
  { label: 'Open Tasks', value: '32' },
  { label: 'Unclaimed', value: '8' },
  { label: 'New Signups', value: '14' },
  { label: 'Today Ops', value: '11' },
];

export const deployments: Deployment[] = [
  { title: 'Defqon Week', date: '14 Jul 2026', participation: 88, location: 'Biddinghuizen', image: '/images/event-1.jpg' },
  { title: 'Dominance Grounds', date: '02 Aug 2026', participation: 72, location: 'Eindhoven', image: '/images/event-2.jpg' },
  { title: 'Night Ember Ritual', date: '19 Aug 2026', participation: 64, location: 'Rotterdam', image: '/images/event-3.jpg' },
];
