import { todayKey } from "./utils";

export const WEEK_GOAL = 55;
export const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

export function mondayOf(d = new Date()): Date {
  const day = d.getDay();
  const offset = day === 0 ? -6 : 1 - day;
  const mon = new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset);
  mon.setHours(0, 0, 0, 0);
  return mon;
}

export function mondayKey(d = new Date()): string {
  return todayKey(mondayOf(d));
}

export function weekDates(monday = mondayOf()): { name: string; date: string; iso: string }[] {
  return DAY_NAMES.map((name, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      name,
      date: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      iso: todayKey(d),
    };
  });
}

/** 0–4 Mon–Fri; -1 on weekend */
export function todayWorkIndex(d = new Date()): number {
  const js = d.getDay();
  if (js >= 1 && js <= 5) return js - 1;
  return -1;
}

export function formatHours(n: number): string {
  return n.toFixed(2);
}
