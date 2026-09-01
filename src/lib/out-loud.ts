import type { BookBlock, Chapter } from "@/data/book";
import { tape } from "@/lib/tape";

export type VoiceKind = "narrator" | "spoken";

type Listener = {
  onBlock?: (id: string | null, kind: VoiceKind | null) => void;
  onMode?: (mode: "idle" | "lines" | "chapter") => void;
  onPaused?: (paused: boolean) => void;
};

const NARRATOR_HINTS = [
  "daniel",
  "alex",
  "david",
  "fred",
  "google uk english male",
  "microsoft david",
  "rishi",
  "arthur",
  "aaron",
  "male",
];

function pickVoice(voices: SpeechSynthesisVoice[], hints: string[]) {
  if (!voices.length) return null;
  const ranked = [...voices].sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) => {
      const name = v.name.toLowerCase();
      let s = v.lang.toLowerCase().startsWith("en") ? 4 : 0;
      for (const h of hints) if (name.includes(h)) s += 8;
      if (v.localService) s += 1;
      return s;
    };
    return score(b) - score(a);
  });
  return ranked[0] ?? null;
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

class OutLoud {
  private chapters: Chapter[] = [];
  private listener: Listener = {};
  private token = 0;
  private audio: HTMLAudioElement | null = null;
  private utter: SpeechSynthesisUtterance | null = null;
  private paused = false;
  private mode: "idle" | "lines" | "chapter" = "idle";
  private voices: SpeechSynthesisVoice[] = [];
  private currentKind: VoiceKind | null = null;

  bind(chapters: Chapter[], listener: Listener) {
    this.chapters = chapters;
    this.listener = listener;
    if (typeof window !== "undefined") {
      this.voices = window.speechSynthesis?.getVoices() ?? [];
      window.speechSynthesis?.addEventListener?.("voiceschanged", () => {
        this.voices = window.speechSynthesis.getVoices();
      });
    }
  }

  getMode() {
    return this.mode;
  }

  isPaused() {
    return this.paused;
  }

  async unlock() {
    await tape.ensure();
    this.voices = window.speechSynthesis?.getVoices() ?? [];
  }

  stop() {
    this.token += 1;
    this.paused = false;
    this.mode = "idle";
    this.currentKind = null;
    tape.stopLoop();
    this.killAudio();
    try {
      window.speechSynthesis?.cancel();
    } catch {
      /* */
    }
    this.listener.onBlock?.(null, null);
    this.listener.onPaused?.(false);
    this.listener.onMode?.("idle");
  }

  pause() {
    if (this.mode === "idle" || this.paused) return;
    this.paused = true;
    tape.stopLoop();
    this.audio?.pause();
    try {
      window.speechSynthesis?.pause();
    } catch {
      /* */
    }
    this.listener.onPaused?.(true);
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    this.listener.onPaused?.(false);
    if (this.currentKind === "spoken") {
      void tape.startLoop();
    }
    if (this.audio && !this.audio.ended) {
      void this.audio.play();
      return;
    }
    try {
      window.speechSynthesis?.resume();
    } catch {
      /* */
    }
  }

  async playLines(chapterIndex: number, blockIndex: number) {
    await this.unlock();
    this.token += 1;
    const mine = this.token;
    this.paused = false;
    this.mode = "lines";
    this.listener.onMode?.("lines");
    this.listener.onPaused?.(false);
    const chs = this.chapters;
    for (let c = chapterIndex; c < chs.length; c++) {
      const ch = chs[c];
      if (!ch) return;
      const start = c === chapterIndex ? blockIndex : 0;
      for (let b = start; b < ch.blocks.length; b++) {
        if (this.token !== mine) return;
        await this.waitUnpaused(mine);
        if (this.token !== mine) return;
        const block = ch.blocks[b];
        if (!block) continue;
        if (block.kind === "break") {
          this.listener.onBlock?.(block.id, null);
          await delay(700);
          continue;
        }
        const kind: VoiceKind = block.kind === "spoken" ? "spoken" : "narrator";
        this.currentKind = kind;
        this.listener.onBlock?.(block.id, kind);
        await this.speakBlock(block, mine);
      }
    }
    if (this.token === mine) this.stop();
  }

  async playChapter(chapterIndex: number) {
    await this.unlock();
    const ch = this.chapters[chapterIndex];
    if (!ch) return;
    this.token += 1;
    const mine = this.token;
    this.paused = false;
    this.mode = "chapter";
    this.currentKind = "narrator";
    this.listener.onMode?.("chapter");
    this.listener.onPaused?.(false);
    this.listener.onBlock?.(ch.blocks[0]?.id ?? ch.id, "narrator");
    await this.playUrl(ch.studio, mine);
    if (this.token === mine) this.stop();
  }

  private async speakBlock(block: BookBlock, mine: number) {
    if (block.kind === "spoken") {
      await tape.needleDrop();
      if (this.token !== mine) return;
      await tape.startLoop();
      await delay(280);
      if (this.token !== mine) {
        tape.stopLoop();
        return;
      }
      if (block.audio) {
        await this.playUrl(block.audio, mine);
      } else {
        await this.speakFallback(block.text, "spoken", mine);
      }
      tape.stopLoop();
      return;
    }
    await this.speakFallback(block.text, "narrator", mine);
  }

  private playUrl(src: string, mine: number) {
    this.killAudio();
    return new Promise<void>((resolve) => {
      const el = new Audio(src);
      this.audio = el;
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        window.clearInterval(watch);
        el.onended = null;
        el.onerror = null;
        if (this.audio === el) this.audio = null;
        resolve();
      };
      const watch = window.setInterval(() => {
        if (this.token !== mine) done();
      }, 200);
      el.onended = done;
      el.onerror = done;
      void el.play().catch(done);
    });
  }

  private speakFallback(text: string, kind: VoiceKind, mine: number) {
    const minMs = Math.max(1400, Math.min(22000, text.length * 52));
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return delay(minMs);
    }
    return new Promise<void>((resolve) => {
      try {
        window.speechSynthesis.cancel();
      } catch {
        /* */
      }
      const u = new SpeechSynthesisUtterance(text);
      const voice = pickVoice(this.voices, NARRATOR_HINTS);
      if (voice) u.voice = voice;
      if (kind === "spoken") {
        u.rate = 0.72;
        u.pitch = 0.7;
      } else {
        u.rate = 0.88;
        u.pitch = 0.92;
      }
      this.utter = u;
      const started = Date.now();
      let settled = false;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (this.utter === u) this.utter = null;
        resolve();
      };
      const done = () => {
        const wait = minMs - (Date.now() - started);
        if (wait > 80 && this.token === mine) window.setTimeout(finish, wait);
        else finish();
      };
      u.onend = done;
      u.onerror = done;
      try {
        window.speechSynthesis.speak(u);
      } catch {
        done();
      }
      window.setTimeout(() => {
        if (this.token !== mine) {
          finish();
          return;
        }
        if (this.utter === u) done();
      }, minMs + 6000);
    });
  }

  private async waitUnpaused(mine: number) {
    while (this.paused && this.token === mine) {
      await delay(120);
    }
  }

  private killAudio() {
    if (this.audio) {
      this.audio.onended = null;
      this.audio.onerror = null;
      try {
        this.audio.pause();
      } catch {
        /* */
      }
      this.audio.src = "";
      this.audio = null;
    }
  }
}

export const outLoud = new OutLoud();
