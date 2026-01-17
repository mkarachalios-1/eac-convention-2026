export type Speaker = {
  name: string;
  titleOrOrg?: string;
  session?: string;
  bio?: string;
  photo?: string; // place in /public/speakers
  links?: { label: string; url: string }[];
};

// TODO: populate once speakers are confirmed.
export const speakers: Speaker[] = [];
