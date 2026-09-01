export type Verse = {
  id: string;
  t: string;
  r: string;
  q?: boolean;
  fromGod?: boolean;
  sermon?: boolean;
  audio?: string;
  fresh?: boolean;
  added?: boolean;
};

export const BIBLE_VERSE_COUNT = 31_102;
export const NIGHTLY_COUNT = 10;
