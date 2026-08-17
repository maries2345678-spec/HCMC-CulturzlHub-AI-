// Web Audio API Sound Synthesis Engine for Southern Heritage, Traditional Folk (Cải Lương, Đờn Ca Tài Tử), Speech Narration & FX
import { TraditionalSong } from '../data/traditionalMusic';

class HeritageAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlayingTraditional: boolean = false;
  private currentLoopTimer: any = null;
  private songPlaybackTimers: any[] = [];
  private ambientOscillators: { stop: () => void }[] = [];
  private isSpeaking: boolean = false;
  private currentSong: TraditionalSong | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopTraditionalMusic();
      this.stopSpeech();
      this.stopBackgroundAmbience();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // 1. UI Click
  public playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // 2. Success Chord
  public playSuccess() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + index * 0.08);

      gain.gain.setValueAtTime(0, this.ctx.currentTime + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + index * 0.08 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + index * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(this.ctx.currentTime + index * 0.08);
      osc.stop(this.ctx.currentTime + index * 0.08 + 0.65);
    });
  }

  // 3. Error Buzz
  public playError() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(150, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  // 4. Heritage Bell
  public playHeritageBell(deep: boolean = false) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const baseFreq = deep ? 220 : 440;
    const harmonics = [1, 2.01, 3.01, 4.2];

    harmonics.forEach((h, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * h, this.ctx.currentTime);

      const amp = 0.25 / (i + 1);
      gain.gain.setValueAtTime(amp, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.6);
    });
  }

  // 5. Cyclo Bell Chime
  public playCycloBell() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const chimeNotes = [1760, 2093];
    chimeNotes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.4);
    });
  }

  // 6. Song Lang Wooden Clapper
  public playSongLangBeat(delayOffset: number = 0) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const t = this.ctx.currentTime + delayOffset;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'square';
    osc.frequency.setValueAtTime(920, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.04);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, t);
    filter.Q.setValueAtTime(4.0, t);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.07);
  }

  // 7. Đàn Tranh Pluck Note (Ngũ cung Nam Bộ)
  public playDanTranhNote(freq: number, startTimeOffset: number = 0, volume: number = 0.25) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTimeOffset);

    // Vibrato effect (nhấn rung phím đàn tranh)
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, this.ctx.currentTime + startTimeOffset);
    vibratoGain.gain.setValueAtTime(4.5, this.ctx.currentTime + startTimeOffset);
    vibrato.connect(osc.frequency);
    vibrato.start(this.ctx.currentTime + startTimeOffset);
    vibrato.stop(this.ctx.currentTime + startTimeOffset + 1.4);

    gain.gain.setValueAtTime(0, this.ctx.currentTime + startTimeOffset);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + startTimeOffset + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTimeOffset + 1.3);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime + startTimeOffset);
    osc.stop(this.ctx.currentTime + startTimeOffset + 1.4);
  }

  // 8. Đàn Kìm / Guitar Phím Lõm Note (Chân mộc sâu lắng)
  public playDanKimNote(freq: number, startTimeOffset: number = 0, volume: number = 0.22) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTimeOffset);

    // Pitch bend / luyến láy
    osc.frequency.linearRampToValueAtTime(freq * 1.02, this.ctx.currentTime + startTimeOffset + 0.1);
    osc.frequency.linearRampToValueAtTime(freq, this.ctx.currentTime + startTimeOffset + 0.3);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, this.ctx.currentTime + startTimeOffset);

    gain.gain.setValueAtTime(0, this.ctx.currentTime + startTimeOffset);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + startTimeOffset + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTimeOffset + 1.1);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime + startTimeOffset);
    osc.stop(this.ctx.currentTime + startTimeOffset + 1.2);
  }

  // 9. Sáo Trúc / Flute Note
  public playSaoTrucNote(freq: number, startTimeOffset: number = 0, volume: number = 0.18) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTimeOffset);

    gain.gain.setValueAtTime(0, this.ctx.currentTime + startTimeOffset);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + startTimeOffset + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + startTimeOffset + 1.0);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime + startTimeOffset);
    osc.stop(this.ctx.currentTime + startTimeOffset + 1.1);
  }

  // 🌟 PLAY DEDICATED TRADITIONAL SONG FROM THE 10+ PLAYLIST
  public playSpecificSong(
    song: TraditionalSong,
    onNoteChange?: (noteIdx: number) => void,
    onFinished?: () => void
  ) {
    if (this.isMuted) return;
    this.stopTraditionalMusic();
    this.initContext();
    if (!this.ctx) return;

    this.isPlayingTraditional = true;
    this.currentSong = song;

    let accumulatedDelay = 0;
    const bpm = song.tempoBpm || 80;
    const timeScale = 60 / bpm;

    song.melodyNotes.forEach((item, index) => {
      const startTime = accumulatedDelay;
      
      // Timer for UI note animation
      const noteTimer = setTimeout(() => {
        if (this.isPlayingTraditional && onNoteChange) {
          onNoteChange(index);
        }
      }, startTime * 1000);
      this.songPlaybackTimers.push(noteTimer);

      // Play instrument note
      if (song.category === 'cai_luong') {
        this.playDanKimNote(item.freq, startTime, 0.24);
      } else if (song.category === 'dieu_ly') {
        this.playSaoTrucNote(item.freq, startTime, 0.20);
        this.playDanTranhNote(item.freq, startTime + 0.05, 0.16);
      } else {
        this.playDanTranhNote(item.freq, startTime, 0.25);
      }

      // Play Song Lang clapper if note has songLang flag
      if (item.songLang) {
        this.playSongLangBeat(startTime);
      }

      accumulatedDelay += item.dur * timeScale;
    });

    // End of song trigger / loop
    const endTimer = setTimeout(() => {
      if (this.isPlayingTraditional) {
        if (onFinished) {
          onFinished();
        } else {
          // Loop song seamlessly
          this.playSpecificSong(song, onNoteChange, onFinished);
        }
      }
    }, (accumulatedDelay + 1.0) * 1000);
    this.songPlaybackTimers.push(endTimer);
  }

  // 10. Traditional Southern Pentatonic Melody Loop
  public playTraditionalMelody() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const pentatonicScale = [293.66, 329.63, 392.00, 440.00, 493.88, 587.33];
    const melodySeq = [
      { noteIdx: 0, delay: 0.0 },
      { noteIdx: 2, delay: 0.35 },
      { noteIdx: 3, delay: 0.7 },
      { noteIdx: 4, delay: 1.1 },
      { noteIdx: 5, delay: 1.5 },
      { noteIdx: 3, delay: 2.0 },
      { noteIdx: 2, delay: 2.4 },
      { noteIdx: 0, delay: 2.9 },
    ];

    melodySeq.forEach((step) => {
      this.playDanTranhNote(pentatonicScale[step.noteIdx], step.delay, 0.22);
      if (step.noteIdx === 0 || step.noteIdx === 4) {
        this.playSongLangBeat(step.delay);
      }
    });
  }

  public playCaiLuongSolo() {
    this.playDanKimNote(293.66, 0, 0.25);
    this.playSongLangBeat(0);
    this.playDanKimNote(392.00, 0.4, 0.22);
    this.playDanKimNote(440.00, 0.8, 0.22);
    this.playDanKimNote(493.88, 1.2, 0.28);
    this.playSongLangBeat(1.2);
  }

  // 11. Speech Synthesis for Landmark History Narration & Poetry Chanting
  public speakText(
    text: string, 
    onEnd?: () => void, 
    rate: number = 0.95, 
    pitch: number = 1.05
  ): boolean {
    if (this.isMuted) {
      if (onEnd) onEnd();
      return false;
    }

    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return false;
    }

    this.stopSpeech();
    this.isSpeaking = true;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VI'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
    return true;
  }

  public stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  public getIsPlayingTraditional(): boolean {
    return this.isPlayingTraditional;
  }

  public getCurrentSong(): TraditionalSong | null {
    return this.currentSong;
  }

  public stopTraditionalMusic() {
    this.isPlayingTraditional = false;
    this.currentSong = null;
    this.songPlaybackTimers.forEach(t => clearTimeout(t));
    this.songPlaybackTimers = [];
    if (this.currentLoopTimer) {
      clearInterval(this.currentLoopTimer);
      this.currentLoopTimer = null;
    }
  }

  public stopBackgroundAmbience() {
    this.ambientOscillators.forEach(item => item.stop());
    this.ambientOscillators = [];
  }

  public triggerLandmarkSound(ambientType: string) {
    if (this.isMuted) return;

    switch (ambientType) {
      case 'church_bell':
        this.playHeritageBell(false);
        break;
      case 'market_bustle':
      case 'street_chime':
        this.playCycloBell();
        break;
      case 'river_wave':
      case 'sea_waves':
        this.playHeritageBell(true);
        break;
      case 'traditional_music':
        this.playTraditionalMelody();
        break;
      case 'cai_luong':
        this.playCaiLuongSolo();
        break;
      default:
        this.playClick();
        break;
    }
  }
}

export const sound = new HeritageAudioEngine();
