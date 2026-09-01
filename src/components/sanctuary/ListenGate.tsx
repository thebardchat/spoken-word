import { Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { formatInt, formatSpan, nightsLeft, remainingVerses } from "@/lib/journey";
import { BIBLE_VERSE_COUNT, NIGHTLY_COUNT } from "@/data/types";
import { formatRemain, msUntilNextMidnight } from "@/lib/utils";
import { CrossMark } from "./CrossMark";

type Props = {
  scriptureNow: number;
  quotesNow: number;
  sermonsNow: number;
  givenToday: number;
  firstVisit: boolean;
  onBegin: () => void;
};

export function ListenGate({
  scriptureNow,
  quotesNow,
  sermonsNow,
  givenToday,
  firstVisit,
  onBegin,
}: Props) {
  const remain = remainingVerses(scriptureNow);
  const nights = nightsLeft(scriptureNow);
  const span = formatSpan(nights);
  const held = Math.max(0, scriptureNow - givenToday);

  return (
    <div className="relative flex min-h-dvh flex-col bg-bg">
      <CrossMark className="pointer-events-none absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-5 pt-8 pb-4 text-center sm:pt-14">
        <div className="mb-5 flex items-center gap-2.5 sm:mb-8">
          <span className="h-px w-8 bg-gold/25" />
          <p className="top-kicker">The Word of God</p>
          <span className="h-px w-8 bg-gold/25" />
        </div>
        <h1 className="font-serif text-balance text-[1.55rem] leading-snug text-fg italic sm:text-[2.15rem]">
          Hear the Word. Keep the hours.
        </h1>
        <p className="mt-3 max-w-md text-pretty text-[0.82rem] leading-relaxed text-muted sm:mt-5 sm:text-sm">
          A sweet voice reads each passage — soft, never a machine. When the
          words are the Lord's own, spoken in the first person, you hear them
          as a recording. Along the way, a short sermon from the old preachers
          is laid among the verses.
        </p>

        <div className="mt-5 grid w-full grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4 sm:gap-3">
          <Stat value={formatInt(scriptureNow)} label="Scripture now" />
          <Stat value={`+${givenToday}`} label="Given this day" />
          <Stat value={formatInt(BIBLE_VERSE_COUNT)} label="In the whole Bible" />
          <Stat value={formatInt(nights)} label="Nights at ten a day" />
        </div>

        <p className="mt-4 max-w-lg text-pretty text-[0.72rem] leading-relaxed text-gold/70 sm:mt-6 sm:text-[0.8rem]">
          {firstVisit ? (
            <>
              You already held {formatInt(held)} passages of Scripture
              {quotesNow ? ` and ${quotesNow} godly sayings` : ""}
              {sermonsNow ? `, with ${sermonsNow} short sermons` : ""}. Ten more were
              opened this morning — the story of Jesus, from the Word made flesh to
              the empty tomb. Ten more are given now, as you begin. At{" "}
              {NIGHTLY_COUNT} verses a night, the remaining {formatInt(remain)} take{" "}
              {span}. Tonight at midnight, ten more will be given. We start now.
            </>
          ) : (
            <>
              You hold {formatInt(held)} passages of Scripture
              {quotesNow ? ` and ${quotesNow} godly sayings` : ""}
              {sermonsNow ? `, with ${sermonsNow} short sermons` : ""}
              {givenToday
                ? `. ${formatInt(givenToday)} more opened for this day`
                : ""}
              . At {NIGHTLY_COUNT} verses a night, the remaining {formatInt(remain)} take{" "}
              {span}. The next ten arrive at midnight.
            </>
          )}
        </p>

        <MidnightClock />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={onBegin}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-gold/40 bg-gold/10 px-8 text-[0.72rem] tracking-[0.18em] text-gold uppercase transition-colors duration-200 hover:bg-gold/16 sm:w-auto"
        >
          <Volume2 className="size-4" />
          Listen
        </button>
        <p className="mt-3 pb-2 text-center text-[0.58rem] tracking-[0.14em] text-gold/35 uppercase sm:text-[0.62rem] sm:tracking-[0.16em]">
          Space to pause · arrows to turn · hours at your right hand
        </p>
      </div>
    </div>
  );
}

function MidnightClock() {
  const [remain, setRemain] = useState(msUntilNextMidnight());

  useEffect(() => {
    const id = window.setInterval(() => setRemain(msUntilNextMidnight()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-6 sm:mt-8">
      <p className="top-kicker">Tonight at midnight</p>
      <p className="mt-1.5 font-serif text-[1.65rem] leading-none text-divine tabular-nums sm:text-[1.9rem]">
        {formatRemain(remain)}
      </p>
      <p className="mt-1.5 text-[0.55rem] tracking-[0.16em] text-gold/40 uppercase">
        until ten more open
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[10px] border border-gold/12 bg-surface px-2.5 py-2.5 sm:px-3 sm:py-3">
      <div className="font-serif text-lg text-divine tabular-nums sm:text-xl">{value}</div>
      <div className="mt-1 text-[0.52rem] tracking-[0.12em] text-muted uppercase sm:text-[0.58rem] sm:tracking-[0.14em]">
        {label}
      </div>
    </div>
  );
}
