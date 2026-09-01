import { formatInt, formatSpan, nightsLeft, remainingVerses, scriptureOf } from "@/lib/journey";
import { BIBLE_VERSE_COUNT, NIGHTLY_COUNT, type Verse } from "@/data";
import { formatClock, msUntilNextMidnight } from "@/lib/utils";
import { useEffect, useState } from "react";

export function JourneyStrip({
  verses,
  catalogLeft,
}: {
  verses: Verse[];
  catalogLeft: number;
}) {
  const have = scriptureOf(verses);
  const remain = remainingVerses(have);
  const nights = nightsLeft(have);
  const pct = Math.min(100, (have / BIBLE_VERSE_COUNT) * 100);
  const [until, setUntil] = useState(msUntilNextMidnight());

  useEffect(() => {
    const id = window.setInterval(() => setUntil(msUntilNextMidnight()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const hrs = Math.floor(until / 3_600_000);
  const mins = Math.floor((until % 3_600_000) / 60_000);
  const midnightLabel =
    hrs >= 1 ? `${hrs}h ${mins}m until midnight` : `${mins}m until midnight`;

  return (
    <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 w-[min(28rem,calc(100%-1.5rem))] -translate-x-1/2 md:bottom-7 md:w-[min(28.75rem,calc(100%-8rem))]">
      <div className="rounded-[10px] border border-gold/10 bg-bg/50 px-3 py-2 backdrop-blur-[2px]">
        <div className="mb-1.5 flex items-center justify-between gap-2 text-[0.52rem] tracking-[0.14em] text-gold/45 uppercase">
          <span>
            {formatInt(have)} of {formatInt(BIBLE_VERSE_COUNT)} verses
          </span>
          <span>
            {catalogLeft > 0
              ? `Next ${NIGHTLY_COUNT} at midnight · ${midnightLabel}`
              : `${formatClock()} · treasury growing by your hand`}
          </span>
        </div>
        <div className="h-px w-full bg-gold/10">
          <div className="h-px bg-gold/55" style={{ width: `${Math.max(pct, 0.4)}%` }} />
        </div>
        <p className="mt-1.5 text-center text-[0.52rem] tracking-[0.12em] text-gold/35 uppercase">
          {formatInt(remain)} remaining · {formatInt(nights)} nights · {formatSpan(nights)}
        </p>
      </div>
    </div>
  );
}
