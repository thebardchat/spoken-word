---
description: Playback engine shape for the out-loud reader. Read when implementing Listen.
---

# Wiring

## Files

| Path | Role |
| --- | --- |
| `src/lib/tape.ts` | Needle drop + hiss + hum. Start only for spoken. |
| `src/lib/out-loud.ts` | Queue walker. SpeechSynthesis for narrator fallback. `HTMLAudioElement` for studio MP3s. |
| `public/audio/chapters/ch-NN.mp3` | Whole-chapter studio take (orion). |
| `public/audio/spoken/{id}.mp3` | Keeper line studio take (lux). |

## Queue item

```ts
type Kind = "narrator" | "spoken" | "break";
type Item = { id: string; kind: Kind; text: string; audio?: string };
```

Spoken: play `audio` MP3, start tape, stop tape on `ended`.
Narrator: play chapter-segment if present, else `speechSynthesis`.
Break: 600–900ms silence.

## xAI TTS (server / build script only)

```
POST https://api.x.ai/v1/tts
{ "text": "...", "voice_id": "orion" | "lux", "language": "en" }
→ MP3 bytes
```
