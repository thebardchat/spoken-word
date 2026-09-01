import { Heart } from "lucide-react";
import type { Verse } from "@/data/types";
import type { VoiceKind } from "@/lib/speech";
import { CrossMark } from "./CrossMark";

type Props = {
  verse: Verse;
  opacity: number;
  index: number;
  total: number;
  favored: boolean;
  speaking: boolean;
  kind: VoiceKind | null;
  paused: boolean;
  onFav: () => void;
};

function pillLabel(kind: VoiceKind) {
  if (kind === "god") return "Spoken Word · a recording";
  if (kind === "sermon") return "A short sermon · sweet voice";
  if (kind === "quote") return "A godly saying · sweet voice";
  return "Sweet voice";
}

export function VerseStage({
  verse,
  opacity,
  index,
  total,
  favored,
  speaking,
  kind,
  paused,
  onFav,
}: Props) {
  const isGod = Boolean(verse.fromGod);
  const isQuote = Boolean(verse.q);
  const isSermon = Boolean(verse.sermon);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-5 py-16 sm:px-10">
      <CrossMark className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] opacity-[0.04]" />

      <div className="pointer-events-none absolute top-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
        <span className="h-px w-8 bg-gold/25" />
        <p className="top-kicker whitespace-nowrap">The Word of God</p>
        <span className="h-px w-8 bg-gold/25" />
      </div>

      <div
        className="relative z-10 w-full max-w-[700px] text-center"
        style={{
          opacity,
          transition: "opacity 1.8s ease-in-out",
        }}
      >
        {isGod ? <RecordingBadge active={speaking && kind === "god"} /> : null}
        {isSermon ? <SermonBadge /> : null}

        <div className="gold-hairline mx-auto w-9" />

        <p
          className={[
            "font-serif my-8 text-pretty text-[clamp(1.2rem,2.4vw,1.85rem)] leading-[1.95] tracking-[0.02em]",
            isGod
              ? "text-divine not-italic"
              : isSermon
                ? "text-vellum not-italic"
                : isQuote
                  ? "text-vellum not-italic"
                  : "text-fg italic",
          ].join(" ")}
        >
          {isQuote || isGod || isSermon ? null : (
            <span className="mr-0.5 text-gold/40 not-italic">“</span>
          )}
          {verse.t}
          {isQuote || isGod || isSermon ? null : (
            <span className="text-gold/40 not-italic">”</span>
          )}
        </p>

        <p
          className={[
            "text-[0.67rem] tracking-[0.26em] uppercase",
            isGod
              ? "text-divine/80 tracking-[0.18em]"
              : isSermon
                ? "text-gold/80 tracking-[0.16em]"
                : "text-gold/70",
          ].join(" ")}
        >
          {verse.r}
        </p>

        <div className="gold-hairline mx-auto mt-8 w-9" />

        <button
          type="button"
          title="Save this passage"
          onClick={(e) => {
            e.stopPropagation();
            onFav();
          }}
          className={[
            "absolute top-1/2 -right-2 hidden -translate-y-1/2 p-2 transition-opacity sm:block",
            favored ? "text-heart opacity-90" : "text-gold opacity-30 hover:opacity-80",
          ].join(" ")}
          aria-label={favored ? "Remove from saved" : "Save passage"}
        >
          <Heart className="size-5" fill={favored ? "currentColor" : "none"} />
        </button>
      </div>

      {paused ? (
        <p className="pointer-events-none absolute bottom-28 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] tracking-[0.2em] text-gold/50 uppercase">
          Paused — click or press Space to resume
        </p>
      ) : speaking && kind ? (
        <p
          className={[
            "pointer-events-none absolute bottom-28 left-1/2 z-10 -translate-x-1/2 voice-pill",
            kind === "god" ? "is-god" : "",
          ].join(" ")}
        >
          {pillLabel(kind)}
        </p>
      ) : null}

      <p className="pointer-events-none absolute right-4 bottom-4 text-[0.58rem] tracking-[0.18em] text-gold/30 tabular-nums">
        {index + 1} / {total}
      </p>
      <p className="pointer-events-none absolute bottom-4 left-4 hidden text-[0.55rem] tracking-[0.14em] text-gold/25 uppercase sm:block">
        Space · arrows · F fullscreen
      </p>
    </div>
  );
}

function RecordingBadge({ active }: { active: boolean }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-3 text-divine/80">
      <span className={`analog-reel ${active ? "spin" : ""}`} />
      <div>
        <p className="text-[0.58rem] tracking-[0.22em] uppercase">
          A recording of the spoken Word
        </p>
        <p className="mt-0.5 text-[0.52rem] tracking-[0.14em] text-divine/50 uppercase">
          Direct from the Lord
        </p>
      </div>
      <div className="flex h-4 items-end gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`vu-bar ${active ? "on" : ""}`}
            style={{
              height: `${8 + (i % 3) * 5}px`,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
      <span className={`analog-reel ${active ? "spin" : ""}`} />
    </div>
  );
}

function SermonBadge() {
  return (
    <div className="mb-5 text-gold/70">
      <p className="text-[0.58rem] tracking-[0.22em] uppercase">A short sermon</p>
      <p className="mt-0.5 text-[0.52rem] tracking-[0.14em] text-gold/40 uppercase">
        From the old preachers
      </p>
    </div>
  );
}
