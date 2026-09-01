import {
  CATALOG_VERSES,
  NIGHTLY_COUNT,
  SERMONS,
  START_VERSES,
  type Verse,
} from "@/data";
import { loadAdded, loadUnlock, saveUnlock } from "./storage";
import { daysBetween, todayKey } from "./utils";

const CATCHUP_CAP = 5; // nights

export type UnlockState = {
  verses: Verse[];
  nights: number;
  lastDate: string;
  justUnlocked: Verse[];
  catalogLeft: number;
  firstVisit: boolean;
};

export function buildUnlocked(now = new Date()): UnlockState {
  const today = todayKey(now);
  const added = loadAdded();
  const stored = loadUnlock();
  let nights = stored.nights;
  let lastDate = stored.date;
  let justUnlocked: Verse[] = [];
  const firstVisit = !lastDate;

  if (!lastDate || nights < 1) {
    // Opening gift: ten more, right now, as you begin.
    lastDate = today;
    nights = Math.max(1, nights);
    justUnlocked = CATALOG_VERSES.slice(0, NIGHTLY_COUNT);
    saveUnlock(lastDate, nights);
  } else if (lastDate < today) {
    const missed = Math.min(daysBetween(lastDate, today), CATCHUP_CAP);
    const from = nights * NIGHTLY_COUNT;
    justUnlocked = CATALOG_VERSES.slice(from, from + missed * NIGHTLY_COUNT);
    nights += missed;
    lastDate = today;
    saveUnlock(lastDate, nights);
  }

  const fromCatalog = CATALOG_VERSES.slice(0, nights * NIGHTLY_COUNT);
  const todayBatch = fromCatalog.slice(Math.max(0, (nights - 1) * NIGHTLY_COUNT));
  const olderCatalog = fromCatalog.slice(0, Math.max(0, (nights - 1) * NIGHTLY_COUNT));
  const fresh = START_VERSES.filter((v) => v.fresh);
  const restStart = START_VERSES.filter((v) => !v.fresh);

  // Start every day with the new ones. Sermons rest among the Word after the gift.
  const verses = firstVisit
    ? [...fresh, ...todayBatch, ...SERMONS, ...restStart, ...added]
    : [...todayBatch, ...SERMONS, ...START_VERSES, ...olderCatalog, ...added];

  const catalogLeft = Math.max(0, CATALOG_VERSES.length - nights * NIGHTLY_COUNT);
  return { verses, nights, lastDate, justUnlocked, catalogLeft, firstVisit };
}

export function forceUnlockNow(currentNights: number): Verse[] {
  const from = currentNights * NIGHTLY_COUNT;
  const batch = CATALOG_VERSES.slice(from, from + NIGHTLY_COUNT);
  if (!batch.length) return [];
  const today = todayKey();
  saveUnlock(today, currentNights + 1);
  return batch;
}
