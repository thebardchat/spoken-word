import {
  ChevronLeft,
  Clock3,
  Heart,
  Maximize,
  Minimize,
  Pause,
  Play,
  Plus,
  Volume2,
  VolumeX,
} from "lucide-react";

type Props = {
  paused: boolean;
  muted: boolean;
  fullscreen: boolean;
  timeOpen: boolean;
  savedCount: number;
  onPrev: () => void;
  onTogglePause: () => void;
  onMute: () => void;
  onFavs: () => void;
  onAdd: () => void;
  onTime: () => void;
  onFullscreen: () => void;
};

export function Controls({
  paused,
  muted,
  fullscreen,
  timeOpen,
  savedCount,
  onPrev,
  onTogglePause,
  onMute,
  onFavs,
  onAdd,
  onTime,
  onFullscreen,
}: Props) {
  return (
    <div className="absolute top-3 right-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-1.5">
      <button type="button" className="ctrl-btn" onClick={onPrev} title="Previous (←)">
        <ChevronLeft className="size-3.5" />
        <span className="hidden sm:inline">Prev</span>
      </button>
      <button
        type="button"
        className="ctrl-btn"
        onClick={onTogglePause}
        title="Pause / resume (Space)"
      >
        {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
        <span className="hidden sm:inline">{paused ? "Resume" : "Pause"}</span>
      </button>
      <button type="button" className={`ctrl-btn ${muted ? "" : "active"}`} onClick={onMute} title="Voice">
        {muted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
        <span className="hidden md:inline">{muted ? "Silent" : "Voice"}</span>
      </button>
      <button type="button" className="ctrl-btn" onClick={onFavs} title="Saved verses">
        <Heart className="size-3.5" />
        <span className="hidden sm:inline">Saved</span>
        {savedCount ? <span className="tabular-nums opacity-70">{savedCount}</span> : null}
      </button>
      <button type="button" className="ctrl-btn" onClick={onAdd} title="Add a verse (A)">
        <Plus className="size-3.5" />
        <span className="hidden sm:inline">Add</span>
      </button>
      <button
        type="button"
        className={`ctrl-btn hours-mobile-only ${timeOpen ? "active" : ""}`}
        onClick={onTime}
        title="Time keeper"
      >
        <Clock3 className="size-3.5" />
        <span className="hidden sm:inline">Hours</span>
      </button>
      <button type="button" className="ctrl-btn" onClick={onFullscreen} title="Fullscreen (F)">
        {fullscreen ? <Minimize className="size-3.5" /> : <Maximize className="size-3.5" />}
        <span className="hidden md:inline">Full</span>
      </button>
    </div>
  );
}
