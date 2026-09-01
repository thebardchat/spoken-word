import { BIBLE_VERSE_COUNT, NIGHTLY_COUNT } from "@/data/types";
import { isScripture, type Verse } from "@/data";

export function scriptureOf(verses: Verse[]): number {
  return verses.filter(isScripture).length;
}

export function remainingVerses(have: number): number {
  return Math.max(0, BIBLE_VERSE_COUNT - have);
}

export function nightsLeft(have: number): number {
  return Math.ceil(remainingVerses(have) / NIGHTLY_COUNT);
}

export function formatSpan(nights: number): string {
  const years = nights / 365.25;
  const y = Math.floor(years);
  const months = Math.round((years - y) * 12);
  if (y <= 0) {
    if (nights <= 1) return "tonight";
    if (nights < 45) return `${nights} nights`;
    return `${months} month${months === 1 ? "" : "s"}`;
  }
  if (months === 0) return `${y} year${y === 1 ? "" : "s"}`;
  if (months === 12) return `${y + 1} years`;
  return `${y} year${y === 1 ? "" : "s"}, ${months} month${months === 1 ? "" : "s"}`;
}

export function formatInt(n: number): string {
  return n.toLocaleString("en-US");
}
