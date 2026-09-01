import { useState } from "react";
import type { Verse } from "@/data/types";

type AddProps = {
  open: boolean;
  onClose: () => void;
  onSave: (text: string, ref: string, kind: "scripture" | "quote") => void;
};

export function AddPanel({ open, onClose, onSave }: AddProps) {
  const [text, setText] = useState("");
  const [ref, setRef] = useState("");
  const [kind, setKind] = useState<"scripture" | "quote">("scripture");
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-bg/96 px-4"
      onClick={onClose}
    >
      <div
        className="panel-shell flex w-full max-w-[520px] flex-col gap-4 p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[0.62rem] tracking-[0.3em] text-gold/60 uppercase">
          Add a verse or saying
        </p>
        <textarea
          id="add-text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type the verse or quote here..."
          className="font-serif w-full resize-none rounded-[8px] border border-gold/22 bg-bg px-4 py-3 text-[1.05rem] text-fg italic outline-none focus:border-gold/50"
        />
        <input
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          placeholder="Reference — e.g. Psalm 27:1  or  — a godly saying"
          className="w-full rounded-[8px] border border-gold/22 bg-bg px-4 py-3 text-[0.78rem] tracking-wide text-fg outline-none focus:border-gold/50"
        />
        <div className="flex items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.15em] text-gold/45 uppercase">Type</span>
          <div className="flex overflow-hidden rounded-[8px] border border-gold/20">
            <button
              type="button"
              className={`px-3.5 py-1.5 text-[0.6rem] tracking-[0.12em] uppercase ${
                kind === "scripture" ? "bg-gold/12 text-gold" : "text-gold/40"
              }`}
              onClick={() => setKind("scripture")}
            >
              Scripture
            </button>
            <button
              type="button"
              className={`px-3.5 py-1.5 text-[0.6rem] tracking-[0.12em] uppercase ${
                kind === "quote" ? "bg-gold/12 text-gold" : "text-gold/40"
              }`}
              onClick={() => setKind("quote")}
            >
              Quote
            </button>
          </div>
        </div>
        <div className="mt-1 flex justify-end gap-2">
          <button
            type="button"
            className="rounded-[8px] border border-gold/15 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold/40 uppercase"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-[8px] border border-gold/35 bg-gold/10 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold uppercase hover:bg-gold/18"
            onClick={() => {
              onSave(text, ref, kind);
              setText("");
              setRef("");
              setKind("scripture");
            }}
          >
            Save to display
          </button>
        </div>
      </div>
    </div>
  );
}

type FavProps = {
  open: boolean;
  verses: Verse[];
  onClose: () => void;
  onPick: (v: Verse) => void;
};

export function FavPanel({ open, verses, onClose, onPick }: FavProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-bg/96 px-4"
      onClick={onClose}
    >
      <div
        className="panel-shell flex max-h-[80vh] w-full max-w-[560px] flex-col gap-4 p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <p className="text-[0.62rem] tracking-[0.3em] text-gold/60 uppercase">Saved verses</p>
          <button
            type="button"
            className="rounded-[8px] border border-gold/15 px-4 py-2 text-[0.6rem] tracking-[0.12em] text-gold/40 uppercase"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="sanctuary-scroll flex flex-col gap-3 overflow-y-auto pr-1">
          {verses.length === 0 ? (
            <p className="py-10 text-center text-[0.7rem] tracking-[0.15em] text-gold/30 uppercase">
              No saved verses yet. Tap the heart on any passage.
            </p>
          ) : (
            verses.map((v) => (
              <button
                type="button"
                key={v.id}
                className="rounded-[8px] border border-gold/10 bg-gold/[0.04] px-4 py-3 text-left hover:border-gold/30"
                onClick={() => onPick(v)}
              >
                <p className="font-serif text-[0.95rem] leading-relaxed text-fg italic">{v.t}</p>
                <span className="mt-1 block text-[0.58rem] tracking-[0.2em] text-gold/50 uppercase">
                  {v.r}
                  {v.fromGod ? " · spoken Word" : ""}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
