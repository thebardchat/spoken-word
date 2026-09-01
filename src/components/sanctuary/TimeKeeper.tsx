import { useEffect, useState } from "react";
import { WEEK_GOAL, formatHours, todayWorkIndex, weekDates } from "@/lib/week";

type Props = {
  actuals: (number | null)[];
  onChange: (i: number, val: number | null) => void;
  onReset: () => void;
  compact?: boolean;
};

export function TimeKeeper({ actuals, onChange, onReset, compact }: Props) {
  const dates = weekDates();
  const todayIdx = todayWorkIndex();
  const worked = actuals.reduce<number>((s, n) => s + (n ?? 0), 0);
  const completed = actuals.filter((a) => a !== null).length;
  const remainingHrs = Math.max(0, WEEK_GOAL - worked);
  const remainingDays = 5 - completed;
  const perDay = remainingDays > 0 ? remainingHrs / remainingDays : 0;
  const pct = Math.min(worked / WEEK_GOAL, 1);
  const circ = 2 * Math.PI * 52;
  const offset = circ - pct * circ;
  const stroke =
    worked >= WEEK_GOAL ? "var(--color-info)" : pct < 0.45 && completed > 0 ? "var(--color-warn)" : "var(--color-ok)";

  let banner = `Default target: ${formatHours(WEEK_GOAL / 5)} hrs a day`;
  let bannerClass = "text-ok bg-ok/10";
  if (worked >= WEEK_GOAL) {
    banner = "Fifty-five hours — the week is complete";
    bannerClass = "text-info bg-info/10";
  } else if (completed > 0) {
    const diff = worked - completed * (WEEK_GOAL / 5);
    if (diff >= 0) {
      banner = diff < 0.01 ? "On track" : `On track — ahead by ${formatHours(diff)} hrs`;
      bannerClass = "text-ok bg-ok/10";
    } else {
      banner = `Behind by ${formatHours(Math.abs(diff))} — need ${formatHours(perDay)} / day`;
      bannerClass = "text-warn bg-warn/10";
    }
  }

  return (
    <aside
      className={[
        "flex h-full min-h-dvh flex-col border-gold/15 bg-surface",
        compact ? "border-t" : "border-l",
      ].join(" ")}
    >
      <div className="border-b border-gold/12 px-4 py-3">
        <p className="text-[0.58rem] tracking-[0.28em] text-gold/60 uppercase">Time Keeper</p>
        <p className="mt-1 font-serif text-lg text-fg">Fifty-five hours</p>
        <p className="text-[0.7rem] text-muted">The work of your hands, for those you love</p>
      </div>

      <div className="flex flex-col items-center px-4 py-4">
        <div className="relative h-[132px] w-[132px]">
          <svg width="132" height="132" viewBox="0 0 132 132" className="-rotate-90">
            <circle cx="66" cy="66" r="52" fill="none" stroke="var(--color-ring-track)" strokeWidth="10" />
            <circle
              className="ring-fill"
              cx="66"
              cy="66"
              r="52"
              fill="none"
              stroke={stroke}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-fg tabular-nums">{formatHours(worked)}</span>
            <span className="text-[0.58rem] tracking-[0.14em] text-muted uppercase">of {WEEK_GOAL}</span>
          </div>
        </div>
        <p className={`mt-3 rounded-[8px] px-3 py-1.5 text-center text-[0.68rem] ${bannerClass}`}>
          {banner}
        </p>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto px-3 pb-3 sanctuary-scroll">
        {dates.map((d, i) => {
          const done = actuals[i] !== null;
          const isToday = i === todayIdx;
          const target = done ? actuals[i]! : perDay || WEEK_GOAL / 5;
          const baseline = WEEK_GOAL / 5;
          const diff = done ? actuals[i]! - baseline : 0;
          return (
            <div
              key={d.iso}
              className={[
                "rounded-[12px] border px-3 py-2.5",
                isToday ? "border-ok/50 bg-surface-2" : "border-gold/12 bg-bg/40",
                done ? "opacity-90" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-[0.62rem] font-medium tracking-[0.16em] text-muted uppercase">
                    {d.name}
                    {isToday ? " · today" : ""}
                  </p>
                  <p className="text-[0.62rem] text-muted/70">{d.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.52rem] tracking-[0.12em] text-muted uppercase">
                    {done ? "Actual" : "Target"}
                  </p>
                  <p className="font-serif text-lg text-gold tabular-nums">{formatHours(target)}</p>
                </div>
              </div>
              <HoursInput
                value={actuals[i]}
                placeholder={formatHours(target)}
                label={`Actual hours for ${d.name}`}
                onCommit={(val) => onChange(i, val)}
              />
              {done ? (
                <p
                  className={[
                    "mt-1.5 text-center text-[0.62rem]",
                    Math.abs(diff) < 0.01 ? "text-info" : diff > 0 ? "text-ok" : "text-warn",
                  ].join(" ")}
                >
                  {Math.abs(diff) < 0.01
                    ? "Exact"
                    : diff > 0
                      ? `+${formatHours(diff)} ahead`
                      : `${formatHours(diff)} short`}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-gold/12 px-3 py-3">
        <Sum val={formatHours(worked)} label="Worked" />
        <Sum val={formatHours(remainingHrs)} label="Left" />
        <Sum val={remainingDays ? formatHours(perDay) : "—"} label="Need / day" />
      </div>
      <button
        type="button"
        className="mx-3 mb-3 min-h-10 rounded-[8px] border border-gold/15 text-[0.62rem] tracking-[0.14em] text-muted uppercase hover:border-warn/40 hover:text-warn"
        onClick={(e) => {
          e.stopPropagation();
          if (window.confirm("Reset all entries for this week?")) onReset();
        }}
      >
        Reset week
      </button>
    </aside>
  );
}

function HoursInput({
  value,
  placeholder,
  label,
  onCommit,
}: {
  value: number | null;
  placeholder: string;
  label: string;
  onCommit: (val: number | null) => void;
}) {
  const [raw, setRaw] = useState(value == null ? "" : formatHours(value));
  useEffect(() => {
    setRaw(value == null ? "" : formatHours(value));
  }, [value]);
  return (
    <label className="mt-1.5 block">
      <span className="sr-only">{label}</span>
      <input
        className="mt-1 h-10 w-full rounded-[8px] border border-gold/18 bg-bg text-center text-sm font-medium text-fg outline-none focus:border-gold/50"
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        onBlur={() => {
          if (raw.trim() === "") onCommit(null);
          else {
            const n = parseFloat(raw);
            onCommit(Number.isFinite(n) ? Math.max(0, Math.min(24, n)) : null);
          }
        }}
        onClick={(e) => e.stopPropagation()}
        onFocus={(e) => e.currentTarget.select()}
      />
    </label>
  );
}

function Sum({ val, label }: { val: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-base font-semibold text-fg tabular-nums">{val}</div>
      <div className="text-[0.55rem] tracking-[0.12em] text-muted uppercase">{label}</div>
    </div>
  );
}
