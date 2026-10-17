/**
 * Web Audio API synthesizer for hilarious ragebait sound effects.
 * 100% client-side, zero external dependencies or network assets.
 * Now featuring authentic Indian sonic chaos: Pressure Cooker Whistle, Auto Horn, Soap Opera Gongs!
 */
class RageAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Cartoon boing / whoosh when button runs away
  playBoing() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.3);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  // Obnoxious alert when password is made public
  playAlarm() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [0, 0.12, 0.24].forEach((offset, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(idx % 2 === 0 ? 880 : 660, now + offset);
        gain.gain.setValueAtTime(0.15, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.1);
      });
    } catch (e) {}
  }

  // Glitch sound
  playGlitch() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.setValueAtTime(480, now + 0.04);
      osc.frequency.setValueAtTime(120, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  // Lock buffer / typewriter purge sound
  playLockPurge() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Fast stutter buzz
      for (let i = 0; i < 6; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180 + i * 40, now + i * 0.06);
        gain.gain.setValueAtTime(0.15, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + (i + 1) * 0.06);
      }
    } catch (e) {}
  }

  // =========================================================================
  // 🇮🇳 INDIA SPECIAL: PRESSURE COOKER WHISTLE (For Save Profile)
  // High-pitched screeching steam whistle (shhhhh-WHEEEEEEEEEE-shhh)
  // =========================================================================
  playPressureCooker() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. White noise steam buildup
      const bufferSize = this.ctx.sampleRate * 2.2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(3800, now + 0.6);
      filter.frequency.setValueAtTime(3800, now + 1.8);
      filter.Q.setValueAtTime(5, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.02, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.25, now + 0.5);
      noiseGain.gain.setValueAtTime(0.25, now + 1.6);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      // 2. Screeching whistle tone (sine + square harmonic)
      const whistleOsc = this.ctx.createOscillator();
      const whistleGain = this.ctx.createGain();

      whistleOsc.type = 'sawtooth';
      whistleOsc.frequency.setValueAtTime(1400, now);
      whistleOsc.frequency.exponentialRampToValueAtTime(2850, now + 0.5);
      whistleOsc.frequency.setValueAtTime(2900, now + 1.6);

      // High whistle gain envelope
      whistleGain.gain.setValueAtTime(0.001, now);
      whistleGain.gain.exponentialRampToValueAtTime(0.35, now + 0.5);
      whistleGain.gain.setValueAtTime(0.35, now + 1.6);
      whistleGain.gain.exponentialRampToValueAtTime(0.001, now + 2.1);

      whistleOsc.connect(whistleGain);
      whistleGain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 2.2);
      whistleOsc.start(now);
      whistleOsc.stop(now + 2.1);
    } catch (e) {}
  }

  // =========================================================================
  // 🇮🇳 INDIA SPECIAL: AUTO RICKSHAW HORN (POM POM PAAAA-POM)
  // =========================================================================
  playRickshawHorn() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const beeps = [0, 0.15, 0.35, 0.55];
      const durations = [0.1, 0.1, 0.15, 0.25];

      beeps.forEach((start, idx) => {
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc1.type = 'sawtooth';
        osc2.type = 'square';

        osc1.frequency.setValueAtTime(380, now + start);
        osc2.frequency.setValueAtTime(425, now + start);

        gain.gain.setValueAtTime(0.28, now + start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + start + durations[idx]);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);

        osc1.start(now + start);
        osc1.stop(now + start + durations[idx]);
        osc2.start(now + start);
        osc2.stop(now + start + durations[idx]);
      });
    } catch (e) {}
  }

  // =========================================================================
  // 🇮🇳 INDIA SPECIAL: DRAMATIC DAILY SOAP OPERA GONG (For Permanently Delete)
  // Ekta Kapoor style triple thunderous metallic orchestral crash:
  // DHOOM! (flash 1) ... DHOOM! (flash 2) ... DHOOM! (flash 3)
  // =========================================================================
  playSerialDramaticGong() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const hits = [0, 0.45, 0.95];

      hits.forEach((offset, idx) => {
        // Bass boom
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(110, now + offset);
        subOsc.frequency.exponentialRampToValueAtTime(40, now + offset + 0.38);
        subGain.gain.setValueAtTime(0.4, now + offset);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.4);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);
        subOsc.start(now + offset);
        subOsc.stop(now + offset + 0.4);

        // Harsh cymbal / brass clash
        [220, 311.13, 440, 622.25].forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now + offset);
          gain.gain.setValueAtTime(0.18, now + offset);
          gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.35);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + 0.35);
        });
      });
    } catch (e) {}
  }

  // Swap button swoosh
  playSwap() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  playDing() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {}
  }
}

window.soundEngine = new RageAudio();
['click', 'keydown', 'mousemove'].forEach(evt => {
  window.addEventListener(evt, () => window.soundEngine.init(), { once: true });
});
