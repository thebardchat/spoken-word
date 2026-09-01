import { create } from "zustand";
import { CATALOG_VERSES, makeAddedVerse, START_VERSES, type Verse } from "@/data";
import {
  loadActuals,
  loadFavs,
  loadWeekStart,
  saveActuals,
  saveAdded,
  saveFavs,
  saveWeekStart,
} from "@/lib/storage";
import { buildUnlocked } from "@/lib/unlock";
import { mondayKey } from "@/lib/week";

type Panel = null | "add" | "fav" | "time" | "journey";

type State = {
  ready: boolean;
  verses: Verse[];
  nights: number;
  lastUnlock: string;
  catalogLeft: number;
  justUnlocked: Verse[];
  firstVisit: boolean;
  favorites: string[];
  added: Verse[];
  actuals: (number | null)[];
  weekStart: string;
  panel: Panel;
  toast: string | null;
  hydrate: () => void;
  applyMidnightUnlock: () => void;
  toggleFav: (v: Verse) => void;
  addVerse: (text: string, ref: string, kind: "scripture" | "quote") => Verse | null;
  setPanel: (p: Panel) => void;
  setActual: (i: number, val: number | null) => void;
  resetWeek: () => void;
  showToast: (msg: string) => void;
  clearJustUnlocked: () => void;
};

let toastTimer: number | undefined;

export const useSanctuary = create<State>((set, get) => ({
  ready: false,
  verses: START_VERSES,
  nights: 0,
  lastUnlock: "",
  catalogLeft: CATALOG_VERSES.length,
  justUnlocked: [],
  firstVisit: true,
  favorites: [],
  added: [],
  actuals: [null, null, null, null, null],
  weekStart: "",
  panel: null,
  toast: null,

  hydrate: () => {
    const unlocked = buildUnlocked();
    const week = mondayKey();
    const storedWeek = loadWeekStart();
    let actuals = loadActuals();
    if (storedWeek !== week) {
      actuals = [null, null, null, null, null];
      saveWeekStart(week);
      saveActuals(actuals);
    }
    set({
      ready: true,
      verses: unlocked.verses,
      nights: unlocked.nights,
      lastUnlock: unlocked.lastDate,
      catalogLeft: unlocked.catalogLeft,
      justUnlocked: unlocked.justUnlocked,
      firstVisit: unlocked.firstVisit,
      favorites: loadFavs(),
      added: unlocked.verses.filter((v) => v.added),
      actuals,
      weekStart: week,
    });
  },

  applyMidnightUnlock: () => {
    const prevDate = get().lastUnlock;
    const unlocked = buildUnlocked();
    if (!unlocked.justUnlocked.length) return;
    if (unlocked.lastDate === prevDate) return;
    set({
      verses: unlocked.verses,
      nights: unlocked.nights,
      lastUnlock: unlocked.lastDate,
      catalogLeft: unlocked.catalogLeft,
      justUnlocked: unlocked.justUnlocked,
      firstVisit: false,
    });
    get().showToast("Ten new passages have been opened for this day");
  },

  toggleFav: (v) => {
    const favs = get().favorites;
    const next = favs.includes(v.t) ? favs.filter((t) => t !== v.t) : [...favs, v.t];
    saveFavs(next);
    set({ favorites: next });
    get().showToast(next.includes(v.t) ? "Kept in your saved verses" : "Removed from saved");
  },

  addVerse: (text, ref, kind) => {
    const t = text.trim();
    if (!t) {
      get().showToast("Add the verse text first");
      return null;
    }
    const entry = makeAddedVerse(t, ref.trim(), kind);
    const added = [...get().added, entry];
    saveAdded(added);
    set({
      added,
      verses: [...get().verses, entry],
      panel: null,
    });
    get().showToast("Added to your display");
    return entry;
  },

  setPanel: (panel) => set({ panel }),

  setActual: (i, val) => {
    const actuals = [...get().actuals];
    actuals[i] = val;
    saveActuals(actuals);
    set({ actuals });
  },

  resetWeek: () => {
    const actuals = [null, null, null, null, null] as (number | null)[];
    saveActuals(actuals);
    saveWeekStart(mondayKey());
    set({ actuals, weekStart: mondayKey() });
    get().showToast("Week cleared");
  },

  showToast: (msg) => {
    if (toastTimer) window.clearTimeout(toastTimer);
    set({ toast: msg });
    toastTimer = window.setTimeout(() => set({ toast: null }), 2400);
  },

  clearJustUnlocked: () => set({ justUnlocked: [] }),
}));
