import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square, ScrollText } from "lucide-react";
import { chapters, front, type BookBlock } from "@/data/book";
import { LAW_ARTICLES } from "@/data/laws";
import { outLoud, type VoiceKind } from "@/lib/out-loud";

function LineHtml({ html }: { html: string }) {
  const parts = html.split(/(<em>[\s\S]*?<\/em>|<i>[\s\S]*?<\/i>)/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^<(?:em|i)>([\s\S]*?)<\/(?:em|i)>$/);
        if (m) return <em key={i}>{m[1]}</em>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function ReaderApp() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [kind, setKind] = useState<VoiceKind | null>(null);
  const [mode, setMode] = useState<"idle" | "lines" | "chapter">("idle");
  const [paused, setPaused] = useState(false);
  const [lawsOpen, setLawsOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const activeRef = useRef<string | null>(null);
  activeRef.current = activeId;

  useEffect(() => {
    outLoud.bind(chapters, {
      onBlock: (id, k) => {
        setActiveId(id);
        setKind(k);
        if (id) {
          const el = document.getElementById(id);
          el?.scrollIntoView({ block: "center", behavior: "smooth" });
        }
      },
      onMode: setMode,
      onPaused: setPaused,
    });
    return () => outLoud.stop();
  }, []);

  const listening = mode !== "idle";

  const onListen = () => {
    if (listening && !paused) {
      outLoud.pause();
      return;
    }
    if (listening && paused) {
      outLoud.resume();
      return;
    }
    const start = locate(activeRef.current);
    void outLoud.playLines(start.chapter, start.block);
  };

  const onStop = () => outLoud.stop();

  const playFrom = (chapterIndex: number, blockIndex: number) => {
    void outLoud.playLines(chapterIndex, blockIndex);
  };

  const playStudio = (chapterIndex: number) => {
    void outLoud.playChapter(chapterIndex);
  };

  return (
    <div className="reader-shell">
      <FrontMatter
        onListen={onListen}
        listening={listening}
        paused={paused}
        onOpenLaws={() => setLawsOpen(true)}
        onOpenToc={() => setTocOpen(true)}
      />

      {chapters.map((ch, ci) => (
        <section key={ch.id} id={ch.id} className="chapter">
          <header className="chapter-header">
            <span className="chapter-number">{ch.number}</span>
            <h2 className="chapter-title">{ch.title}</h2>
            <button
              type="button"
              className="studio-link"
              onClick={() => playStudio(ci)}
            >
              Studio take
            </button>
          </header>
          <div className="prose">
            {ch.blocks.map((block, bi) => (
              <Block
                key={block.id}
                block={block}
                active={activeId === block.id}
                onPlay={() => playFrom(ci, bi)}
              />
            ))}
          </div>
          {ci < chapters.length - 1 ? (
            <div className="chapter-break" aria-hidden>
              <span className="chapter-break-mark" />
            </div>
          ) : null}
        </section>
      ))}

      <footer className="witness-close">
        {front.close.map((line) => (
          <p key={line}>
            <em>{line}</em>
          </p>
        ))}
        <span className="end-mark" />
        <span className="constitution-mark">{front.constitution}</span>
      </footer>

      <ListenBar
        listening={listening}
        paused={paused}
        kind={kind}
        mode={mode}
        onListen={onListen}
        onStop={onStop}
        onLaws={() => setLawsOpen(true)}
      />

      {lawsOpen ? <LawsOverlay onClose={() => setLawsOpen(false)} /> : null}
      {tocOpen ? (
        <TocOverlay
          onClose={() => setTocOpen(false)}
          onJump={(id) => {
            setTocOpen(false);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      ) : null}
    </div>
  );
}

function locate(activeId: string | null) {
  if (!activeId) return { chapter: 0, block: 0 };
  for (let c = 0; c < chapters.length; c++) {
    const ch = chapters[c];
    if (!ch) continue;
    const b = ch.blocks.findIndex((x) => x.id === activeId);
    if (b >= 0) return { chapter: c, block: b };
  }
  return { chapter: 0, block: 0 };
}

function FrontMatter({
  onListen,
  listening,
  paused,
  onOpenLaws,
  onOpenToc,
}: {
  onListen: () => void;
  listening: boolean;
  paused: boolean;
  onOpenLaws: () => void;
  onOpenToc: () => void;
}) {
  const label = listening && !paused ? "Pause" : listening ? "Resume" : "Listen";
  return (
    <header className="front">
      <p className="series-mark">{front.series}</p>
      <div className="title-block">
        <h1>
          {front.titleLine1}
          <br />
          {front.titleLine2}
        </h1>
        <p className="subtitle">{front.subtitle}</p>
      </div>
      <div className="red-rule" />
      <p className="front-meta">{front.meta}</p>
      <div className="front-scripture">
        {front.scripture.map((s) => (
          <p key={s.cite}>
            {s.lines.map((line) => (
              <span key={line} className="scripture-line">
                <em>{line}</em>
              </span>
            ))}
            <span className="scripture-cite">— {s.cite}</span>
          </p>
        ))}
      </div>
      <p className="dedication">{front.dedication}</p>
      <div className="front-actions">
        <button type="button" className="listen-hero" onClick={onListen}>
          {listening && !paused ? <Pause size={16} strokeWidth={1.75} /> : <Play size={16} strokeWidth={1.75} />}
          {label}
        </button>
        <button type="button" className="ghost-btn" onClick={onOpenToc}>
          Chapters
        </button>
        <button type="button" className="ghost-btn" onClick={onOpenLaws}>
          The Law
        </button>
      </div>
    </header>
  );
}

function Block({
  block,
  active,
  onPlay,
}: {
  block: BookBlock;
  active: boolean;
  onPlay: () => void;
}) {
  if (block.kind === "break") {
    return (
      <p id={block.id} className="scene-break">
        {block.text}
      </p>
    );
  }
  if (block.kind === "spoken") {
    return (
      <button
        type="button"
        id={block.id}
        className={`keeper${active ? " is-live" : ""}`}
        onClick={onPlay}
      >
        <LineHtml html={block.html} />
      </button>
    );
  }
  return (
    <p
      id={block.id}
      className={`narrator-line${block.noIndent ? " no-indent" : ""}${active ? " is-live" : ""}`}
      onClick={onPlay}
    >
      <LineHtml html={block.html} />
    </p>
  );
}

function ListenBar({
  listening,
  paused,
  kind,
  mode,
  onListen,
  onStop,
  onLaws,
}: {
  listening: boolean;
  paused: boolean;
  kind: VoiceKind | null;
  mode: "idle" | "lines" | "chapter";
  onListen: () => void;
  onStop: () => void;
  onLaws: () => void;
}) {
  const label = listening && !paused ? "Pause" : listening ? "Resume" : "Listen";
  return (
    <div className="listen-bar">
      <button type="button" className="listen-main" onClick={onListen}>
        {listening && !paused ? <Pause size={16} strokeWidth={1.75} /> : <Play size={16} strokeWidth={1.75} />}
        {label}
      </button>
      <div className="listen-meta">
        <span className={`voice-pill${kind === "spoken" ? " is-spoken" : ""}`}>
          {mode === "chapter" ? "Studio chapter" : kind === "spoken" ? "Spoken" : kind === "narrator" ? "Narrator" : "Ready"}
        </span>
      </div>
      <button type="button" className="icon-btn" onClick={onLaws} aria-label="The Law">
        <ScrollText size={16} strokeWidth={1.75} />
      </button>
      <button type="button" className="icon-btn" onClick={onStop} aria-label="Stop" disabled={!listening}>
        <Square size={14} strokeWidth={1.75} />
      </button>
    </div>
  );
}

function LawsOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="overlay" role="dialog" aria-labelledby="laws-title">
      <div className="overlay-card">
        <header className="overlay-head">
          <h2 id="laws-title">The Law</h2>
          <button type="button" className="ghost-btn" onClick={onClose}>
            Close
          </button>
        </header>
        <p className="overlay-kicker">Copied. Not rewritten. Eight articles. One source of truth.</p>
        <ol className="law-list">
          {LAW_ARTICLES.map((a) => (
            <li key={a.id}>
              <h3>
                Article {a.id} — {a.title}
              </h3>
              <p>{a.body}</p>
            </li>
          ))}
        </ol>
        <p className="overlay-foot">
          The blood covers the cross. The blood drains. The cross comes back.
        </p>
      </div>
    </div>
  );
}

function TocOverlay({ onClose, onJump }: { onClose: () => void; onJump: (id: string) => void }) {
  return (
    <div className="overlay" role="dialog" aria-labelledby="toc-title">
      <div className="overlay-card">
        <header className="overlay-head">
          <h2 id="toc-title">Chapters</h2>
          <button type="button" className="ghost-btn" onClick={onClose}>
            Close
          </button>
        </header>
        <ol className="toc-list">
          {chapters.map((ch) => (
            <li key={ch.id}>
              <button type="button" onClick={() => onJump(ch.id)}>
                <span>{ch.number}</span>
                {ch.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
