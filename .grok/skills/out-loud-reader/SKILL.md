---
name: out-loud-reader
description: "Add out-loud listening to a long-form reader: Listen button, studio chapter MP3s, narrator vs spoken voices, and tape hiss on spoken lines. Use when the user asks for Listen, read aloud, audiobook, chapter MP3s, narrator vs spoken, tape on dialogue, or out-loud-reader. Do not rewrite the source manuscript. Copy the laws. Never rebuild or edit Dark Corridors."
type: workflow
lifecycle: active
---

# Out Loud Reader

Turn an existing manuscript into a listening reader. **Do not rewrite the source.** Copy it. If the work has a visual constitution, **copy the laws** into the project and obey them.

## Hard stops

- **Do not rebuild Dark Corridors.** Do not invent chapters, change prose, or edit the original manuscript file.
- **Copy the laws** (`DESIGN-LAW.md`) into the project and into the UI. The law is the visual constitution: three inks (black / blood-red / white-grace), the veil, the cross is never redrawn.
- Spoken lines are the **keeper** blocks (first-person interior). Narrator is the prose. Dialogue inside narrator paragraphs stays narrator.

## Required surface

| Piece | Rule |
| --- | --- |
| **Listen button** | User-initiated. Pause / resume. Never autoplay on load. |
| **Studio chapter MP3s** | One high-fidelity MP3 per chapter at `public/audio/chapters/ch-NN.mp3`. Generate with xAI TTS (`POST /v1/tts`). Narrator voice: `orion`. Cache the files. Do not call TTS on every page load. |
| **Narrator vs spoken** | Two voices. Narrator = cinematic (`orion` studio, or speechSynthesis fallback). Spoken = quiet/wise (`lux`) studio MP3s at `public/audio/spoken/{id}.mp3`. Highlight the live block. Show NARRATOR or SPOKEN in the listen chrome. |
| **Tape on spoken lines** | Needle-drop + tape hiss + low hum **only** while a spoken/keeper line plays. Never on narrator. Stop the loop when the line ends. |

## Playback

1. Listen walks the book in order (or from the tapped paragraph).
2. Scene-break markers are silent beats, not spoken.
3. Chapter studio MP3 is also playable as a whole-chapter take.
4. Highlight + scroll the live block into view.
5. Mute, skip chapter, and stop are required.

## Spend

TTS spends the app owner's quota. Generate **once** at build time into `public/audio/`. Never TTS from the browser. Never TTS on every visitor.

See `references/wiring.md` for the engine shape and `references/voices.md` for voice ids.
