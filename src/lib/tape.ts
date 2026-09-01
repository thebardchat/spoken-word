/** Needle-drop + hiss + hum. Spoken lines only. */

class TapeAmbience {
  private ctx: AudioContext | null = null;
  private hiss: AudioBufferSourceNode | null = null;
  private hum: OscillatorNode | null = null;
  private master: GainNode | null = null;

  async ensure(): Promise<AudioContext> {
    if (!this.ctx) this.ctx = new AudioContext();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  async needleDrop() {
    const ctx = await this.ensure();
    const dur = 0.55;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const t = i / data.length;
      const env = t < 0.15 ? t / 0.15 : Math.pow(1 - (t - 0.15) / 0.85, 2.2);
      data[i] = (Math.random() * 2 - 1) * env * 0.35;
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1400;
    bp.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.value = 0.22;
    src.connect(bp);
    bp.connect(g);
    g.connect(ctx.destination);
    src.start();
  }

  async startLoop() {
    const ctx = await this.ensure();
    this.stopLoop();
    this.master = ctx.createGain();
    this.master.gain.value = 0.0001;
    this.master.connect(ctx.destination);
    this.master.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.4);

    const hissLen = ctx.sampleRate * 2;
    const hissBuf = ctx.createBuffer(1, hissLen, ctx.sampleRate);
    const hd = hissBuf.getChannelData(0);
    for (let i = 0; i < hissLen; i++) hd[i] = Math.random() * 2 - 1;
    this.hiss = ctx.createBufferSource();
    this.hiss.buffer = hissBuf;
    this.hiss.loop = true;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 800;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 4200;
    const hg = ctx.createGain();
    hg.gain.value = 0.016;
    this.hiss.connect(hp);
    hp.connect(lp);
    lp.connect(hg);
    hg.connect(this.master);
    this.hiss.start();

    this.hum = ctx.createOscillator();
    this.hum.type = "sine";
    this.hum.frequency.value = 58;
    const humG = ctx.createGain();
    humG.gain.value = 0.012;
    this.hum.connect(humG);
    humG.connect(this.master);
    this.hum.start();
  }

  stopLoop() {
    try {
      this.hiss?.stop();
    } catch {
      /* already */
    }
    try {
      this.hum?.stop();
    } catch {
      /* already */
    }
    this.hiss = null;
    this.hum = null;
    if (this.master && this.ctx) {
      try {
        this.master.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);
      } catch {
        /* */
      }
    }
    this.master = null;
  }
}

export const tape = new TapeAmbience();
