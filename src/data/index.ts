import type { Verse } from "./types";
import { CATALOG_VERSES } from "./verses-catalog";
import { SERMONS } from "./sermons";
import { START_VERSES } from "./verses-start";

export type { Verse } from "./types";
export { BIBLE_VERSE_COUNT, NIGHTLY_COUNT } from "./types";
export { CATALOG_VERSES, SERMONS, START_VERSES };

export function isScripture(v: Verse): boolean {
  return !v.q && !v.sermon;
}

export function scriptureCount(list: Verse[]): number {
  return list.filter(isScripture).length;
}

export function makeAddedVerse(
  text: string,
  ref: string,
  kind: "scripture" | "quote",
): Verse {
  const id = `added-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id,
    t: text,
    r: ref,
    q: kind === "quote",
    added: true,
    fresh: true,
  };
}
