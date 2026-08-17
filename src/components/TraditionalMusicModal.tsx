import React, { useState, useEffect } from 'react';
import { 
  X, 
  Music, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Radio, 
  BookOpen, 
  Info, 
  Shuffle, 
  Repeat, 
  Compass,
  Headphones,
  Award,
  Layers,
  Heart,
  Share2
} from 'lucide-react';
import { TRADITIONAL_SONGS, TraditionalSong } from '../data/traditionalMusic';
import { sound } from '../utils/audio';

interface TraditionalMusicModalProps {
  onClose: () => void;
}

export const TraditionalMusicModal: React.FC<TraditionalMusicModalProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cai_luong' | 'don_ca_tai_tu' | 'dieu_ly'>('all');
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeNoteIdx, setActiveNoteIdx] = useState<number>(-1);
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isSongLangHit, setIsSongLangHit] = useState<boolean>(false);
  const [isNarratingContext, setIsNarratingContext] = useState<boolean>(false);

  const songsList = TRADITIONAL_SONGS;
  const currentSong = songsList[currentSongIndex] || songsList[0];

  const filteredSongs = songsList.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  const handlePlaySong = (song: TraditionalSong, index?: number) => {
    const targetIdx = index !== undefined ? index : songsList.findIndex(s => s.id === song.id);
    if (targetIdx !== -1) {
      setCurrentSongIndex(targetIdx);
    }

    setIsPlaying(true);
    sound.playSpecificSong(
      song,
      (noteIdx) => {
        setActiveNoteIdx(noteIdx);
        if (song.melodyNotes[noteIdx]?.songLang) {
          setIsSongLangHit(true);
          setTimeout(() => setIsSongLangHit(false), 150);
        }
      },
      () => {
        if (isLooping) {
          handlePlaySong(song);
        } else {
          handleNextSong();
        }
      }
    );
  };

  const handleTogglePlayPause = () => {
    if (isPlaying) {
      sound.stopTraditionalMusic();
      setIsPlaying(false);
    } else {
      handlePlaySong(currentSong);
    }
  };

  const handleNextSong = () => {
    sound.playClick();
    let nextIdx = (currentSongIndex + 1) % songsList.length;
    if (isShuffle) {
      nextIdx = Math.floor(Math.random() * songsList.length);
    }
    const nextSong = songsList[nextIdx];
    setCurrentSongIndex(nextIdx);
    if (isPlaying) {
      handlePlaySong(nextSong, nextIdx);
    }
  };

  const handlePrevSong = () => {
    sound.playClick();
    const prevIdx = (currentSongIndex - 1 + songsList.length) % songsList.length;
    const prevSong = songsList[prevIdx];
    setCurrentSongIndex(prevIdx);
    if (isPlaying) {
      handlePlaySong(prevSong, prevIdx);
    }
  };

  const handleReadContext = () => {
    if (isNarratingContext) {
      sound.stopSpeech();
      setIsNarratingContext(false);
    } else {
      setIsNarratingContext(true);
      const textToRead = `${currentSong.title}. Tác giả: ${currentSong.author}. Điệu thức: ${currentSong.scaleType}. Nhạc cụ chính: ${currentSong.leadInstrument}. Hoàn cảnh lịch sử: ${currentSong.historicalContext}. Trích đoạn: ${currentSong.lyricsExcerpt}`;
      sound.speakText(
        textToRead,
        () => setIsNarratingContext(false),
        0.92,
        1.02
      );
    }
  };

  // Stop music when modal unmounts if needed
  useEffect(() => {
    return () => {
      // Keep playing or clean up based on user preference
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-stone-900 border-2 border-amber-500/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border-b border-amber-500/30 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Headphones className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Không Gian Âm Nhạc Cổ Truyền Nam Bộ
              </span>
              <h3 className="font-['Cinzel',serif] font-bold text-base sm:text-lg text-amber-200">
                Tuyển Tập Cải Lương & Đờn Ca Tài Tử Phương Nam
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.stopTraditionalMusic();
                sound.stopSpeech();
                onClose();
              }}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="px-5 py-2.5 bg-stone-950/90 border-b border-stone-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: `🌟 Toàn Bộ (${songsList.length} bài)` },
            { id: 'cai_luong', label: '🎭 Cải Lương Nam Bộ' },
            { id: 'don_ca_tai_tu', label: '🎼 Đờn Ca Tài Tử (Bản Tổ)' },
            { id: 'dieu_ly', label: '🌾 Dân Ca & Điệu Lý' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 border-amber-300 shadow-md font-extrabold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modal Main Body (Split into Left: Now Playing Stage, Right: Playlist) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
          
          {/* LEFT: NOW PLAYING DECK & LORE (7 cols) */}
          <div className="lg:col-span-7 p-5 space-y-5 flex flex-col justify-between">
            {/* Song Identity Card */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {currentSong.categoryLabel}
                </span>
                <span className="text-xs text-stone-400 font-mono">
                  Điệu: <strong className="text-amber-300">{currentSong.scaleType}</strong>
                </span>
              </div>

              <div>
                <h4 className="font-['Cinzel',serif] font-bold text-lg sm:text-xl text-amber-200 leading-tight">
                  {currentSong.title}
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  Tác giả: <strong className="text-stone-300">{currentSong.author}</strong> ({currentSong.originYear})
                </p>
                <p className="text-[11px] text-amber-400/90 mt-0.5">
                  Nhạc cụ chủ đạo: {currentSong.leadInstrument}
                </p>
              </div>

              {/* Dynamic Pentatonic Visualizer & Song Lang Indicator */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/30 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-bold flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5 text-amber-400" />
                    Ngũ Cung Nam Bộ (Hò - Xự - Xang - Xê - Cống)
                  </span>

                  {/* Song Lang Beat Flash */}
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-[10px] font-bold transition-all ${
                    isSongLangHit 
                      ? 'bg-amber-400 text-stone-950 border-amber-300 scale-105 shadow-md ring-2 ring-amber-400/50' 
                      : 'bg-stone-900 text-stone-400 border-stone-800'
                  }`}>
                    <span>🥁 Song Lang</span>
                  </div>
                </div>

                {/* Notes Wave / Pitch Step Bars */}
                <div className="flex items-end justify-between gap-1 h-16 pt-2 px-1">
                  {currentSong.melodyNotes.map((note, idx) => {
                    const isNoteActive = isPlaying && activeNoteIdx === idx;
                    const heightPercent = Math.min(100, Math.max(25, ((note.freq - 200) / 450) * 100));

                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center gap-1 h-full justify-end"
                      >
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className={`w-full rounded-t-md transition-all duration-150 ${
                            isNoteActive
                              ? 'bg-gradient-to-t from-amber-500 to-yellow-300 shadow-lg shadow-amber-500/50 scale-y-110'
                              : 'bg-stone-800 hover:bg-stone-700'
                          }`}
                        />
                        <span className={`text-[8px] font-mono ${isNoteActive ? 'text-amber-300 font-bold' : 'text-stone-600'}`}>
                          {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Lyrics / Verse Excerpt */}
              <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-amber-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Trích Đoạn Lời Ca & Giai Thoại:
                  </span>
                  <button
                    onClick={handleReadContext}
                    className="text-[10px] text-amber-300 hover:text-amber-100 flex items-center gap-1 underline underline-offset-2"
                  >
                    <Volume2 className="w-3 h-3" />
                    {isNarratingContext ? 'Dừng đọc xuất xứ' : 'Nghe đọc xuất xứ'}
                  </button>
                </div>
                <p className="font-['Cinzel',serif] text-xs sm:text-sm text-stone-200 whitespace-pre-line italic leading-relaxed pl-2 border-l-2 border-amber-500/60">
                  "{currentSong.lyricsExcerpt}"
                </p>
                <p className="text-[11px] text-stone-400 leading-relaxed pt-1">
                  {currentSong.historicalContext}
                </p>
              </div>
            </div>

            {/* Main Audio Player Controls */}
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-xl transition-all ${
                    isShuffle ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-stone-500 hover:text-stone-300'
                  }`}
                  title="Phát ngẫu nhiên"
                >
                  <Shuffle className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsLooping(!isLooping)}
                  className={`p-2 rounded-xl transition-all ${
                    isLooping ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-stone-500 hover:text-stone-300'
                  }`}
                  title="Lặp lại bài hát"
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Core Playback Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevSong}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-all"
                  title="Bài trước đó"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={handleTogglePlayPause}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-stone-950 flex items-center justify-center shadow-lg shadow-amber-500/30 transition-all transform hover:scale-105 active:scale-95"
                  title={isPlaying ? 'Tạm dừng' : 'Phát bản nhạc'}
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-stone-950" /> : <Play className="w-6 h-6 fill-stone-950 ml-0.5" />}
                </button>

                <button
                  onClick={handleNextSong}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-all"
                  title="Bài tiếp theo"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-stone-500 uppercase block font-bold">Thời Gian</span>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {isPlaying ? 'Đang tấu khúc' : 'Sẵn sàng'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: PLAYLIST SELECTION (5 cols) */}
          <div className="lg:col-span-5 p-4 space-y-3 bg-stone-950/50">
            <div className="flex items-center justify-between px-1">
              <h5 className="font-bold text-xs text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-amber-400" />
                Danh Sách 11 Bản Nhạc Cổ ({filteredSongs.length})
              </h5>
              <span className="text-[10px] text-stone-500 font-mono">Âm thanh ngũ cung</span>
            </div>

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {filteredSongs.map((song) => {
                const isSelected = currentSong.id === song.id;
                const isThisPlaying = isSelected && isPlaying;

                return (
                  <div
                    key={song.id}
                    onClick={() => handlePlaySong(song)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-amber-950/30 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-stone-900/80 border-stone-800/80 hover:bg-stone-850 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                        isThisPlaying
                          ? 'bg-amber-500 text-stone-950 border-amber-300 shadow'
                          : isSelected
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            : 'bg-stone-800 text-stone-400 border-stone-700'
                      }`}>
                        {isThisPlaying ? (
                          <div className="flex items-end gap-0.5 h-4">
                            <span className="w-1 bg-stone-950 h-3 animate-pulse" />
                            <span className="w-1 bg-stone-950 h-4 animate-pulse delay-75" />
                            <span className="w-1 bg-stone-950 h-2 animate-pulse delay-150" />
                          </div>
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className={`text-xs font-bold truncate ${isSelected ? 'text-amber-200' : 'text-stone-200'}`}>
                          {song.title}
                        </p>
                        <p className="text-[10px] text-stone-400 truncate">
                          {song.author} • {song.leadInstrument}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800 text-stone-400 shrink-0">
                      {song.category === 'cai_luong' ? 'Cải Lương' : song.category === 'don_ca_tai_tu' ? 'Tài Tử' : 'Điệu Lý'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
