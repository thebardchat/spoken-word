import { useCallback, useEffect, useRef, useState } from "react";
import { START_VERSES } from "@/data";
import { voiceEngine, type VoiceKind } from "@/lib/speech";
import { msUntilNextMidnight } from "@/lib/utils";
import { useSanctuary } from "@/store/sanctuary";
import { AddPanel, FavPanel } from "./Panels";
import { Controls } from "./Controls";
import { JourneyStrip } from "./JourneyStrip";
import { ListenGate } from "./ListenGate";
import { TimeKeeper } from "./TimeKeeper";
import { VerseStage } from "./VerseStage";

const FADE = 1800;
const HOLD_SILENT = 10000;
const REST_AFTER_SPEECH = 2200;

export function SanctuaryApp() {
  const ready = useSanctuary((s) => s.ready);
  const verses = useSanctuary((s) => s.verses);
  const favorites = useSanctuary((s) => s.favorites);
  const panel = useSanctuary((s) => s.panel);
  const toast = useSanctuary((s) => s.toast);
  const actuals = useSanctuary((s) => s.actuals);
  const catalogLeft = useSanctuary((s) => s.catalogLeft);
  const justUnlocked = useSanctuary((s) => s.justUnlocked);
  const firstVisit = useSanctuary((s) => s.firstVisit);
  const hydrate = useSanctuary((s) => s.hydrate);
  const applyMidnightUnlock = useSanctuary((s) => s.applyMidnightUnlock);
  const toggleFav = useSanctuary((s) => s.toggleFav);
  const addVerse = useSanctuary((s) => s.addVerse);
  const setPanel = useSanctuary((s) => s.setPanel);
  const setActual = useSanctuary((s) => s.setActual);
  const resetWeek = useSanctuary((s) => s.resetWeek);

  const [listening, setListening] = useState(false);
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [kind, setKind] = useState<VoiceKind | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [pb, setPb] = useState(0);
  const [pbMs, setPbMs] = useState(HOLD_SILENT);

  const timers = useRef<number[]>([]);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const mutedRef = useRef(false);
  const versesRef = useRef(verses);
  const listeningRef = useRef(false);

  indexRef.current = index;
  pausedRef.current = paused;
  mutedRef.current = muted;
  versesRef.current = verses;
  listeningRef.current = listening;

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const goTo = useCallback((next: number, opts?: { speak?: boolean }) => {
    const list = versesRef.current;
    if (!list.length) return;
    const i = ((next % list.length) + list.length) % list.length;
    clearTimers();
    voiceEngine.stop();
    setSpeaking(false);
    setKind(null);
    setOpacity(0);
    setIndex(i);
    later(() => {
      setOpacity(1);
      const v = versesRef.current[i];
      if (!v) return;
      const shouldSpeak =
        (opts?.speak ?? true) &&
        listeningRef.current &&
        !mutedRef.current &&
        !pausedRef.current;
      const hold = shouldSpeak ? Math.max(8000, v.t.length * 90) : HOLD_SILENT;
      setPbMs(hold + FADE);
      setPb(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPb(100));
      });
      if (shouldSpeak) {
        void voiceEngine.speak(v, {
          onStart: (k) => {
            setSpeaking(true);
            setKind(k);
          },
          onEnd: () => {
            setSpeaking(false);
            setKind(null);
            if (pausedRef.current) return;
            later(() => {
              setOpacity(0);
              later(() => goTo(indexRef.current + 1), FADE + 80);
            }, REST_AFTER_SPEECH);
          },
        });
      } else {
        later(() => {
          if (pausedRef.current) return;
          setOpacity(0);
          later(() => goTo(indexRef.current + 1), FADE + 80);
        }, HOLD_SILENT);
      }
    }, 280);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const tick = () => {
      const before = useSanctuary.getState().lastUnlock;
      applyMidnightUnlock();
      const after = useSanctuary.getState().lastUnlock;
      const gift = useSanctuary.getState().justUnlocked;
      if (after !== before && gift.length && listeningRef.current) {
        goTo(0);
      }
    };
    const t = window.setTimeout(tick, msUntilNextMidnight());
    const iv = window.setInterval(tick, 20_000);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(iv);
    };
  }, [ready, applyMidnightUnlock, goTo]);

  const togglePause = useCallback(() => {
    if (pausedRef.current) {
      setPaused(false);
      goTo(indexRef.current, { speak: true });
    } else {
      setPaused(true);
      clearTimers();
      voiceEngine.stop();
      setSpeaking(false);
      setKind(null);
    }
  }, [goTo]);

  const prev = useCallback(() => {
    setPaused(false);
    goTo(indexRef.current - 1);
  }, [goTo]);

  const next = useCallback(() => {
    setPaused(false);
    goTo(indexRef.current + 1);
  }, [goTo]);

  const begin = useCallback(async () => {
    setListening(true);
    listeningRef.current = true;
    await voiceEngine.unlock();
    setPaused(false);
    goTo(0);
  }, [goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const open = useSanctuary.getState().panel;
      if (open) {
        if (e.key === "Escape") setPanel(null);
        return;
      }
      if (!listeningRef.current) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void begin();
        }
        return;
      }
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        togglePause();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "f" || e.key === "F") void toggleFs();
      if (e.key === "a" || e.key === "A") setPanel("add");
      if (e.key === "m" || e.key === "M") setMuted((m) => !m);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [begin, next, prev, setPanel, togglePause]);

  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  async function toggleFs() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      /* */
    }
  }

  if (!ready) {
    return <div className="min-h-dvh bg-bg" />;
  }

  const scriptureNow = verses.filter((v) => !v.q && !v.sermon).length;
  const quotesNow = verses.filter((v) => v.q).length;
  const sermonsNow = verses.filter((v) => v.sermon).length;
  const morningGift = START_VERSES.filter((v) => v.fresh).length;
  const givenToday = firstVisit ? morningGift + justUnlocked.length : justUnlocked.length;

  if (!listening) {
    return (
      <ListenGate
        scriptureNow={scriptureNow}
        quotesNow={quotesNow}
        sermonsNow={sermonsNow}
        givenToday={givenToday}
        firstVisit={firstVisit}
        onBegin={() => void begin()}
      />
    );
  }

  const verse = verses[index] ?? verses[0];
  const saved = verses.filter((v) => favorites.includes(v.t));
  const timeOpen = panel === "time";

  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div
        className="grid min-h-dvh grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18.75rem]"
        onClick={(e) => {
          const t = e.target as HTMLElement;
          if (t.closest("button, input, textarea, aside, .panel-shell")) return;
          togglePause();
        }}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Controls
            paused={paused}
            muted={muted}
            fullscreen={fullscreen}
            timeOpen={timeOpen}
            savedCount={favorites.length}
            onPrev={() => prev()}
            onTogglePause={() => togglePause()}
            onMute={() => {
              const nextMuted = !muted;
              setMuted(nextMuted);
              if (nextMuted) {
                voiceEngine.stop();
                setSpeaking(false);
              }
            }}
            onFavs={() => setPanel("fav")}
            onAdd={() => setPanel("add")}
            onTime={() => setPanel(timeOpen ? null : "time")}
            onFullscreen={() => void toggleFs()}
          />

          {verse ? (
            <VerseStage
              verse={verse}
              opacity={opacity}
              index={index}
              total={verses.length}
              favored={favorites.includes(verse.t)}
              speaking={speaking}
              kind={kind}
              paused={paused}
              onFav={() => toggleFav(verse)}
            />
          ) : null}

          <JourneyStrip verses={verses} catalogLeft={catalogLeft} />
        </div>

        <div className="hidden h-dvh lg:block">
          <TimeKeeper actuals={actuals} onChange={setActual} onReset={resetWeek} />
        </div>
      </div>

      {timeOpen ? (
        <div
          className="fixed inset-0 z-30 bg-bg/80 lg:hidden"
          onClick={() => setPanel(null)}
        >
          <div
            className="absolute inset-y-0 right-0 w-full max-w-[22.5rem] overflow-y-auto bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <TimeKeeper compact actuals={actuals} onChange={setActual} onReset={resetWeek} />
          </div>
        </div>
      ) : null}

      <AddPanel
        open={panel === "add"}
        onClose={() => setPanel(null)}
        onSave={(text, ref, kind) => {
          const v = addVerse(text, ref, kind);
          if (v) {
            const i = useSanctuary.getState().verses.findIndex((x) => x.id === v.id);
            if (i >= 0) goTo(i);
          }
        }}
      />
      <FavPanel
        open={panel === "fav"}
        verses={saved}
        onClose={() => setPanel(null)}
        onPick={(v) => {
          const i = verses.findIndex((x) => x.t === v.t);
          setPanel(null);
          if (i >= 0) goTo(i);
        }}
      />

      <div
        className="progress-fill"
        style={{
          width: `${pb}%`,
          transition: pb === 0 ? "none" : `width ${pbMs}ms linear`,
        }}
      />

      {toast ? (
        <div className="pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-[8px] border border-gold/25 bg-gold/12 px-4 py-2 text-[0.62rem] tracking-[0.16em] text-gold uppercase">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
