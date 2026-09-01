import type { Verse } from "@/data/types";

const K = {
  added: "sb_added_verses",
  favs: "sb_favorites",
  unlockDate: "sb_unlock_date",
  unlockNights: "sb_unlock_nights",
  actuals: "sb_timecheck_actuals",
  weekStart: "sb_timecheck_week",
  heard: "sb_has_heard",
} as const;

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota */
  }
}

export function loadAdded(): Verse[] {
  return read<Verse[]>(K.added, []);
}
export function saveAdded(v: Verse[]) {
  write(K.added, v);
}

export function loadFavs(): string[] {
  return read<string[]>(K.favs, []);
}
export function saveFavs(v: string[]) {
  write(K.favs, v);
}

export function loadUnlock(): { date: string | null; nights: number } {
  return {
    date: read<string | null>(K.unlockDate, null),
    nights: read<number>(K.unlockNights, 0),
  };
}
export function saveUnlock(date: string, nights: number) {
  write(K.unlockDate, date);
  write(K.unlockNights, nights);
}

export function loadActuals(): (number | null)[] {
  const v = read<(number | null)[]>(K.actuals, [null, null, null, null, null]);
  if (!Array.isArray(v) || v.length !== 5) return [null, null, null, null, null];
  return v;
}
export function saveActuals(v: (number | null)[]) {
  write(K.actuals, v);
}

export function loadWeekStart(): string | null {
  return read<string | null>(K.weekStart, null);
}
export function saveWeekStart(v: string) {
  write(K.weekStart, v);
}

export function loadHasHeard(): boolean {
  return read<boolean>(K.heard, false);
}
export function saveHasHeard() {
  write(K.heard, true);
}
