import type { Verse } from "@/data/types";
import { tape } from "@/lib/tape";

export type VoiceKind = "sweet" | "god" | "quote" | "sermon";

type SpeakOpts = {
  onStart?: (kind: VoiceKind) => void;
  onEnd?: () => void;
};

const SWEET_HINTS = [
  "samantha",
  "victoria",
  "karen",
  "moira",
  "fiona",
  "tessa",
  "zira",
  "female",
  "siri",
  "google uk english female",
  "microsoft zira",
  "eva",
  "allison",
];

const GOD_HINTS = [
  "daniel",
  "alex",
  "david",
  "fred",
  "google uk english male",
  "microsoft david",
  "male",
  "daniel (english (united kingdom))",
  "rishi",
  "arthur",
  "aaron",
];

function scoreVoice(v: SpeechSynthesisVoice, hints: string[], preferLang = "en"): number {
  const name = v.name.toLowerCase();
  const lang = v.lang.toLowerCase();
  let s = 0;
  if (lang.startsWith(preferLang)) s += 4;
  if (lang.startsWith("en-gb") || lang.startsWith("en-us")) s += 2;
  for (const h of hints) if (name.includes(h)) s += 8;
  if (v.localService) s += 1;
  return s;
}

function pick(voices: SpeechSynthesisVoice[], hints: string[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;
  const ranked = [...voices].sort((a, b) => scoreVoice(b, hints) - scoreVoice(a, hints));
  return ranked[0] ?? null;
}

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

class VoiceEngine {
  private voices: SpeechSynthesisVoice[] = [];
  private current: SpeechSynthesisUtterance | null = null;
  private audio: HTMLAudioElement | null = null;
  private token = 0;
  private ended = true;
  private waiters: Array<() => void> = [];

  constructor() {
    if (typeof window === "undefined") return;
    this.refresh();
    window.speechSynthesis?.addEventListener?.("voiceschanged", () => this.refresh());
  }

  private refresh() {
    this.voices = window.speechSynthesis?.getVoices() ?? [];
    for (const w of this.waiters) w();
    this.waiters = [];
  }

  async waitVoices(): Promise<void> {
    this.refresh();
    if (this.voices.length) return;
    await new Promise<void>((resolve) => {
      const t = window.setTimeout(resolve, 800);
      this.waiters.push(() => {
        window.clearTimeout(t);
        resolve();
      });
    });
    this.refresh();
  }

  kindFor(v: Verse): VoiceKind {
    if (v.fromGod) return "god";
    if (v.sermon) return "sermon";
    if (v.q) return "quote";
    return "sweet";
  }

  async unlock() {
    await tape.ensure();
    await this.waitVoices();
  }

  stop() {
    this.token += 1;
    this.ended = true;
    tape.stopLoop();
    this.current = null;
    this.killAudio();
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* */
    }
  }

  private killAudio() {
    if (!this.audio) return;
    try {
      this.audio.pause();
      this.audio.src = "";
    } catch {
      /* */
    }
    this.audio = null;
  }

  async speak(verse: Verse, opts: SpeakOpts = {}): Promise<void> {
    this.stop();
    const mine = this.token;
    this.ended = false;
    await this.waitVoices();
    if (this.token !== mine) return;

    const kind = this.kindFor(verse);
    if (kind === "god") {
      await tape.needleDrop();
      if (this.token !== mine) return;
      await tape.startLoop();
      await delay(420);
      if (this.token !== mine) {
        tape.stopLoop();
        return;
      }
    }

    opts.onStart?.(kind);

    if (verse.audio) {
      const played = await this.playUrl(verse.audio, mine);
      if (this.token === mine) {
        tape.stopLoop();
        if (played) {
          if (!this.ended) opts.onEnd?.();
          return;
        }
      } else {
        return;
      }
    }

    if (this.token !== mine) return;
    await this.speakFallback(verse.t, kind, mine);
    if (this.token === mine) {
      tape.stopLoop();
      if (!this.ended) opts.onEnd?.();
    }
  }

  private playUrl(src: string, mine: number): Promise<boolean> {
    this.killAudio();
    return new Promise((resolve) => {
      const el = new Audio(src);
      this.audio = el;
      let settled = false;
      const done = (ok: boolean) => {
        if (settled) return;
        settled = true;
        window.clearInterval(watch);
        el.onended = null;
        el.onerror = null;
        if (this.audio === el) this.audio = null;
        resolve(ok);
      };
      const watch = window.setInterval(() => {
        if (this.token !== mine) done(true);
      }, 200);
      el.onended = () => done(true);
      el.onerror = () => done(false);
      void el.play().catch(() => done(false));
    });
  }

  private speakFallback(text: string, kind: VoiceKind, mine: number): Promise<void> {
    const minMs = Math.max(1600, Math.min(20000, text.length * 55));
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return delay(minMs);
    }
    return new Promise((resolve) => {
      const utter = new SpeechSynthesisUtterance(text);
      const sweet = pick(this.voices, SWEET_HINTS);
      const god = pick(this.voices, GOD_HINTS);
      if (kind === "god") {
        utter.voice = god ?? sweet;
        utter.rate = 0.72;
        utter.pitch = 0.68;
        utter.volume = 1;
      } else if (kind === "quote" || kind === "sermon") {
        utter.voice = sweet ?? god;
        utter.rate = 0.88;
        utter.pitch = 1.02;
        utter.volume = 0.94;
      } else {
        utter.voice = sweet ?? god;
        utter.rate = 0.84;
        utter.pitch = 1.04;
        utter.volume = 0.95;
      }
      this.current = utter;
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (this.current === utter) this.current = null;
        resolve();
      };
      utter.onend = finish;
      utter.onerror = finish;
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
      } catch {
        finish();
      }
      window.setTimeout(() => {
        if (this.token !== mine || this.current === utter) finish();
      }, minMs + 400);
    });
  }
}

export const voiceEngine = new VoiceEngine();
