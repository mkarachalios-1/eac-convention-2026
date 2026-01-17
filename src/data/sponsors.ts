export type SponsorTier = 'Partner' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  website?: string;
  description?: string;
  logo?: string; // place in /public/sponsors
};

// TODO: update with confirmed partners/sponsors and logos.
export const sponsors: Sponsor[] = [
  {
    name: 'AeroPact',
    tier: 'Partner',
    website: 'https://aeropact.com/',
    description: 'Convention partner (as per convention material).',
    logo: 'sponsors/aeropact.png',
  },
];
