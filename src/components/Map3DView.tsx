import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Play, 
  Square, 
  Mic, 
  BookOpen, 
  Music, 
  Camera, 
  Search, 
  Flame, 
  Users, 
  TrendingUp, 
  Navigation, 
  Footprints, 
  Ship, 
  RotateCcw,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Maximize2,
  Minimize2,
  Clock,
  Award,
  Zap,
  Radio
} from 'lucide-react';
import { Location3D } from '../types';
import { LOCATIONS } from '../data/locations';
import { sound } from '../utils/audio';

// Helper for diacritic-insensitive Vietnamese search
function normalizeVietnamese(text: string): string {
  return (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

interface Map3DViewProps {
  locations: Location3D[];
  selectedLocation: Location3D | null;
  onSelectLocation: (loc: Location3D) => void;
  onStartQuest: (loc: Location3D) => void;
  onOpenAI: (prompt?: string) => void;
  onOpenAR?: () => void;
  onOpenJournal?: (loc?: Location3D) => void;
  timeOfDay: 'day' | 'sunset' | 'night';
  userCompletedQuests?: string[];
}

type AudioMode = 'narration' | 'poem' | 'cai_luong' | 'ambient';

// Live community activity events ticker
const LIVE_ACTIVITY_EVENTS = [
  'Lữ khách Minh Khôi vừa hoàn thành nhiệm vụ tại Chợ Bến Thành (+50 LP)',
  'Thảo Vy vừa chụp ảnh thực tế AR tại Bến Nhà Rồng (+100 LP)',
  'Hoàng Nam vừa mở khóa huy hiệu "Đất Thép Thành Đồng" tại Củ Chi',
  'Nhóm bạn Trúc Linh đang nghe hòa tấu Đờn Ca Tài Tử Nam Bộ',
  'Đức Anh vừa gửi một bài cảm nghĩ di sản tại Bưu Điện Trung Tâm',
  'Hương Giang vừa khám phá Tượng Phật nằm dài 52m tại Chùa Hội Khánh',
  'Quang Hải vừa check-in hoàng hôn tại Bãi Sau Vũng Tàu'
];

export const Map3DView: React.FC<Map3DViewProps> = ({
  locations,
  selectedLocation,
  onSelectLocation,
  onStartQuest,
  onOpenAI,
  onOpenAR,
  onOpenJournal,
  timeOfDay,
  userCompletedQuests = []
}) => {
  // 3D Canvas Transform State
  const [zoom, setZoom] = useState<number>(1.0);
  const [tilt, setTilt] = useState<number>(36);
  const [rotation, setRotation] = useState<number>(0);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number; clientX: number; clientY: number; panX: number; panY: number }>({
    x: 0,
    y: 0,
    clientX: 0,
    clientY: 0,
    panX: 0,
    panY: 0
  });

  // Filters, Search & View Controls
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fogOfWar, setFogOfWar] = useState<boolean>(false);
  const [showRoutes, setShowRoutes] = useState<boolean>(true);
  const [showQuickDrawer, setShowQuickDrawer] = useState<boolean>(true);

  // 🗺️ INTERACTIVE 3D MINIMAP & OVERVIEW MODAL STATE
  const [showMinimap, setShowMinimap] = useState<boolean>(true);
  const [quickOverviewLoc, setQuickOverviewLoc] = useState<Location3D | null>(null);

  // 🔥 POPULARITY HEATMAP & TOP 5 TRENDING HUB STATE
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [heatmapFilter, setHeatmapFilter] = useState<'all' | 'hot' | 'trending'>('all');
  const [isTrendingModalOpen, setIsTrendingModalOpen] = useState<boolean>(false);
  const [liveEventIndex, setLiveEventIndex] = useState<number>(0);

  // 🎙️ AUDIO STORYTELLING & NARRATION STATE
  const [autoPlayNarration, setAutoPlayNarration] = useState<boolean>(() => {
    return localStorage.getItem('saigon_auto_audio') !== 'false';
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioMode, setAudioMode] = useState<AudioMode>('narration');
  const [speechRate, setSpeechRate] = useState<number>(0.95);

  // Player Position & Travel Simulation
  const [playerPos, setPlayerPos] = useState<{ x: number; y: number }>({ x: 46, y: 48 });
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [travelMode, setTravelMode] = useState<'water' | 'road'>('road');

  // Focus / Compact Mode
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered locations with robust Vietnamese diacritic matching
  const locationList = locations || LOCATIONS || [];
  const filteredLocations = locationList.filter(loc => {
    const matchProvince = selectedProvince === 'all' || (loc.province && loc.province === selectedProvince);
    const matchCategory = selectedCategory === 'all' || loc.category === selectedCategory;
    
    let matchSearch = true;
    if (searchQuery.trim() !== '') {
      const qNorm = normalizeVietnamese(searchQuery);
      const nameNorm = normalizeVietnamese(loc.name);
      const vnNameNorm = normalizeVietnamese(loc.vietnameseName);
      const distNorm = normalizeVietnamese(loc.district);
      const provNorm = normalizeVietnamese(loc.province || '');
      const titleNorm = normalizeVietnamese(loc.title || '');
      const tagNorm = normalizeVietnamese(loc.trendingTag || '');
      const shortDescNorm = normalizeVietnamese(loc.shortDesc || '');

      matchSearch = (
        nameNorm.includes(qNorm) ||
        vnNameNorm.includes(qNorm) ||
        distNorm.includes(qNorm) ||
        provNorm.includes(qNorm) ||
        titleNorm.includes(qNorm) ||
        tagNorm.includes(qNorm) ||
        shortDescNorm.includes(qNorm)
      );
    }
    
    // Heatmap filtering if active
    let matchHeat = true;
    if (showHeatmap && heatmapFilter === 'hot') {
      matchHeat = (loc.activeExplorers || 0) >= 140;
    } else if (showHeatmap && heatmapFilter === 'trending') {
      matchHeat = (loc.popularityRank || 99) <= 5;
    }

    return matchProvince && matchCategory && matchSearch && matchHeat;
  });

  // Top 5 Trending Locations computed from popularity rank / heat score
  const top5TrendingLocations = [...locationList]
    .sort((a, b) => (b.heatScore || 0) - (a.heatScore || 0))
    .slice(0, 5);

  // Rotate live community activity events ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveEventIndex(prev => (prev + 1) % LIVE_ACTIVITY_EVENTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Calculate distance between player and target location in simulated km
  const calculateDistanceKm = (targetX: number, targetY: number) => {
    const dx = targetX - playerPos.x;
    const dy = targetY - playerPos.y;
    const distUnits = Math.sqrt(dx * dx + dy * dy);
    return Math.max(1, Math.round(distUnits * 1.6));
  };

  // Center camera smoothly onto a location
  const centerCameraOnLocation = useCallback((loc: Location3D) => {
    const offsetX = -(loc.x - 50) * 8.5;
    const offsetY = -(loc.y - 50) * 7.5;
    setPan({ x: Math.max(-350, Math.min(350, offsetX)), y: Math.max(-280, Math.min(280, offsetY)) });
  }, []);

  // Stop any playing audio
  const stopAllAudio = useCallback(() => {
    sound.stopSpeech();
    sound.stopTraditionalMusic();
    sound.stopBackgroundAmbience();
    setIsPlayingAudio(false);
  }, []);

  // Play audio based on mode
  const playAudioForLocation = useCallback((loc: Location3D, mode: AudioMode, rate: number = speechRate) => {
    stopAllAudio();
    setIsPlayingAudio(true);
    setAudioMode(mode);

    if (mode === 'narration') {
      const textToRead = loc.storyNarration || `${loc.name}, ${loc.shortDesc} ${loc.culturalSignificance}`;
      sound.playDanTranhNote(293.66, 0, 0.2);
      sound.speakText(
        textToRead,
        () => {
          setIsPlayingAudio(false);
        },
        rate,
        1.02
      );
    } else if (mode === 'poem') {
      const poemText = loc.poemVerse || `Bóng xưa lưu dấu phương Nam,\nDi sản ngàn năm thắm sắc vàng.\nKhắc ghi câu hát người xưa lại,\nSống mãi muôn đời tiếng rộn vang.`;
      sound.playDanTranhNote(440.0, 0, 0.25);
      sound.playSongLangBeat(0.2);
      sound.playSongLangBeat(2.0);
      sound.speakText(
        poemText,
        () => {
          setIsPlayingAudio(false);
        },
        rate * 0.92,
        1.05
      );
    } else if (mode === 'cai_luong') {
      sound.playCaiLuongSolo();
      if (loc.caiLuongChant) {
        setTimeout(() => {
          sound.speakText(
            loc.caiLuongChant || '',
            () => {
              setIsPlayingAudio(false);
            },
            0.88,
            1.08
          );
        }, 1200);
      }
    } else if (mode === 'ambient') {
      sound.playBackgroundAmbience(loc.audioAmbientType || 'market_bustle', 0.5);
    }
  }, [speechRate, stopAllAudio]);

  // Handle travel animation and state
  const travelToLocation = useCallback((loc: Location3D, autoAudio: boolean = autoPlayNarration) => {
    setIsTraveling(true);
    const isWaterDestination = loc.category === 'nature_coastal' || loc.id === 'loc_ben_nha_rong';
    setTravelMode(isWaterDestination ? 'water' : 'road');
    
    sound.playTravelStart();
    centerCameraOnLocation(loc);

    const steps = 14;
    let currentStep = 0;
    const startX = playerPos.x;
    const startY = playerPos.y;
    const deltaX = (loc.x - startX) / steps;
    const deltaY = (loc.y - startY) / steps;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setPlayerPos({
          x: startX + deltaX * currentStep,
          y: startY + deltaY * currentStep
        });
      } else {
        clearInterval(interval);
        setPlayerPos({ x: loc.x, y: loc.y });
        setIsTraveling(false);
        sound.playTravelArrive();

        if (autoAudio) {
          playAudioForLocation(loc, 'narration');
        }
      }
    }, 45);
  }, [autoPlayNarration, centerCameraOnLocation, playAudioForLocation, playerPos]);

  // Click on a landmark pin: selects it, opens quick overview popup or details
  const handleLocationClick = (loc: Location3D, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    sound.playClick();
    onSelectLocation(loc);
    setQuickOverviewLoc(loc);
    centerCameraOnLocation(loc);

    if (autoPlayNarration && (!selectedLocation || selectedLocation.id !== loc.id)) {
      playAudioForLocation(loc, 'narration');
    }
  };

  // Toggle auto play narration preference
  const toggleAutoPlayNarration = () => {
    const nextVal = !autoPlayNarration;
    setAutoPlayNarration(nextVal);
    localStorage.setItem('saigon_auto_audio', String(nextVal));
    sound.playClick();
  };

  // Check if location is completed
  const isLocationCompleted = (loc: Location3D) => {
    return userCompletedQuests.some(qId => loc.questIds?.includes(qId));
  };

  // Reset Camera View
  const resetCamera = () => {
    sound.playClick();
    setZoom(1.0);
    setTilt(36);
    setRotation(0);
    setPan({ x: 0, y: 0 });
  };

  // Atmosphere background based on time of day
  const getAtmosphereBg = () => {
    if (timeOfDay === 'sunset') {
      return 'from-amber-950 via-stone-900 to-stone-950';
    }
    if (timeOfDay === 'night') {
      return 'from-indigo-950 via-stone-900 to-black';
    }
    return 'from-stone-900 via-stone-900 to-stone-950';
  };

  // Intensity color gradient helper for heat map
  const getHeatIntensityStyle = (explorers: number = 50) => {
    if (explorers >= 240) {
      return {
        badgeColor: 'bg-red-600 text-white',
        halo: 'radial-gradient(circle, rgba(239, 68, 68, 0.45) 0%, rgba(220, 38, 38, 0.2) 50%, transparent 80%)',
        textColor: 'text-red-400',
        barGradient: 'from-red-500 to-rose-600',
        heatText: 'CỰC HOT 🔥🔥🔥'
      };
    }
    if (explorers >= 180) {
      return {
        badgeColor: 'bg-orange-500 text-stone-950',
        halo: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(234, 88, 12, 0.15) 50%, transparent 80%)',
        textColor: 'text-orange-400',
        barGradient: 'from-orange-500 to-amber-500',
        heatText: 'RẤT ĐÔNG 🔥🔥'
      };
    }
    if (explorers >= 120) {
      return {
        badgeColor: 'bg-amber-500 text-stone-950',
        halo: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 80%)',
        textColor: 'text-amber-400',
        barGradient: 'from-amber-400 to-yellow-500',
        heatText: 'SÔI ĐỘNG 🔥'
      };
    }
    return {
      badgeColor: 'bg-emerald-600 text-white',
      halo: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 80%)',
      textColor: 'text-emerald-400',
      barGradient: 'from-emerald-400 to-teal-500',
      heatText: 'THANH BÌNH 🌿'
    };
  };

  // Mouse Drag Handlers for 3D Panning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      clientX: e.clientX,
      clientY: e.clientY,
      panX: pan.x,
      panY: pan.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.clientX;
    const dy = e.clientY - dragStart.clientY;
    setPan({
      x: dragStart.panX + dx,
      y: dragStart.panY + dy
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row bg-stone-950 overflow-hidden select-none">
      {/* Real-time Community Ticker Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-stone-950/90 border-b border-amber-500/30 px-3 py-1 flex items-center justify-between text-[11px] text-amber-200/90 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex items-center gap-1 font-bold text-red-400 uppercase tracking-wider shrink-0">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            Trực Tuyến:
          </span>
          <p className="truncate text-stone-300 transition-all duration-500">
            {LIVE_ACTIVITY_EVENTS[liveEventIndex]}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0 text-stone-400 text-[10px]">
          <span className="flex items-center gap-1 text-amber-400">
            <Users className="w-3 h-3" />
            2,480 lữ khách
          </span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">21 Di Sản Nam Bộ (TP.HCM - B.Dương - BRVT)</span>
        </div>
      </div>

      {/* Top Map Control Bar & Heatmap Filter Options */}
      <div className="absolute top-9 left-3 right-3 sm:left-4 sm:right-4 z-20 flex flex-wrap items-center gap-2 pointer-events-auto">
        {/* Search Input with Real-time Dropdown */}
        <div ref={searchContainerRef} className="relative flex-1 min-w-[210px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearchFocused(true);
            }}
            placeholder="Tìm địa danh (Bến Thành, Củ Chi, Côn Đảo...)"
            className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-stone-900/95 border border-amber-500/40 text-stone-100 placeholder-stone-400 text-xs backdrop-blur-md shadow-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setIsSearchFocused(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-200"
              title="Xóa tìm kiếm"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* 🔍 REAL-TIME AUTOCOMPLETE SEARCH DROPDOWN */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 right-0 mt-1.5 max-h-80 overflow-y-auto rounded-2xl bg-stone-900/95 border border-amber-500/40 shadow-2xl backdrop-blur-xl z-50 p-2 space-y-1.5 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-bold text-amber-400 border-b border-stone-800">
                <span>
                  {searchQuery.trim() 
                    ? `Kết quả (${filteredLocations.length} địa danh):` 
                    : '21 Địa Danh Di Sản Phương Nam:'}
                </span>
                <span className="text-[10px] text-stone-400 font-normal">Nhấp để xem sơ lược & bay tới</span>
              </div>

              {filteredLocations.length > 0 ? (
                filteredLocations.slice(0, 8).map((loc) => {
                  const isCompleted = isLocationCompleted(loc);
                  return (
                    <div
                      key={loc.id}
                      onClick={() => {
                        sound.playClick();
                        onSelectLocation(loc);
                        setQuickOverviewLoc(loc);
                        travelToLocation(loc, true);
                        setIsSearchFocused(false);
                      }}
                      className={`flex items-center gap-2.5 p-2 rounded-xl cursor-pointer transition-all hover:bg-stone-800/90 border ${
                        selectedLocation?.id === loc.id
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-200'
                          : 'border-transparent text-stone-200 hover:border-amber-500/20'
                      }`}
                    >
                      <img
                        src={loc.thumbnail || loc.coverImage}
                        alt={loc.name}
                        className="w-12 h-12 rounded-lg object-cover border border-stone-700 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-xs text-amber-200 truncate">{loc.name}</h4>
                          {isCompleted && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-semibold shrink-0">
                              ✓ Đã xong
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-400 truncate">{loc.title || loc.shortDesc}</p>
                        <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-stone-400">
                          <span className="text-amber-400 font-semibold">{loc.province}</span>
                          <span>•</span>
                          <span>{loc.district}</span>
                          {loc.activeExplorers && (
                            <>
                              <span>•</span>
                              <span className="text-red-400 flex items-center gap-0.5">
                                <Flame className="w-2.5 h-2.5" />
                                {loc.activeExplorers}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playSuccess();
                          onSelectLocation(loc);
                          setQuickOverviewLoc(loc);
                          travelToLocation(loc, true);
                          setIsSearchFocused(false);
                        }}
                        className="px-2 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[10px] shrink-0 shadow flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Sơ Lược</span>
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="p-4 text-center space-y-2">
                  <p className="text-xs text-stone-400">Không tìm thấy địa danh nào khớp với "{searchQuery}".</p>
                  <p className="text-[11px] text-amber-300/80">Thử tìm theo từ khóa nổi bật:</p>
                  <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                    {['Chợ Bến Thành', 'Dinh Độc Lập', 'Củ Chi', 'Côn Đảo', 'Bình Dương', 'Vũng Tàu', 'Bưu Điện', 'Đức Bà'].map(kw => (
                      <button
                        key={kw}
                        onClick={() => {
                          setSearchQuery(kw);
                          sound.playClick();
                        }}
                        className="px-2 py-0.5 rounded-md bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 text-[11px] transition-colors"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Province Quick Filter */}
        <div className="flex items-center bg-stone-900/90 rounded-xl p-0.5 border border-stone-800 backdrop-blur-md shadow-lg text-xs">
          {[
            { id: 'all', label: 'Tất Cả' },
            { id: 'TP. Hồ Chí Minh', label: 'TP.HCM' },
            { id: 'Bình Dương', label: 'Bình Dương' },
            { id: 'Bà Rịa - Vũng Tàu', label: 'BR-VT' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => {
                sound.playClick();
                setSelectedProvince(p.id);
              }}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedProvince === p.id 
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm' 
                  : 'text-stone-300 hover:text-amber-300'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* 🔥 DEDICATED TOP 5 TRENDING & HEATMAP CENTER BUTTON */}
        <button
          onClick={() => {
            sound.playClick();
            setIsTrendingModalOpen(true);
          }}
          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-stone-950 font-black text-xs flex items-center gap-1.5 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all animate-pulse"
          title="Mở Bảng Xếp Hạng Top 5 Xu Hướng & Trung Tâm Điểm Nhiệt Phương Nam"
        >
          <Flame className="w-3.5 h-3.5 fill-stone-950" />
          <span>Top 5 Xu Hướng & Điểm Nhiệt</span>
        </button>

        {/* Heatmap sub-filter toggle */}
        <div className="flex items-center bg-stone-900/90 rounded-xl p-0.5 border border-amber-500/30 backdrop-blur-md shadow-lg text-[11px]">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'hot', label: '🔥 Cực Hot' },
            { id: 'trending', label: '👑 Top 5' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => {
                sound.playClick();
                setHeatmapFilter(f.id as any);
              }}
              className={`px-2 py-0.5 rounded-md font-semibold transition-colors ${
                heatmapFilter === f.id
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-amber-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 🗺️ MINIMAP RADAR TOGGLE */}
        <button
          onClick={() => {
            sound.playClick();
            setShowMinimap(!showMinimap);
          }}
          className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all ${
            showMinimap
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/60'
              : 'bg-stone-900/90 text-stone-400 border-stone-800'
          }`}
          title="Bật/Tắt Bản Đồ Thu Nhỏ (3D Minimap Radar)"
        >
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>{showMinimap ? 'Bản Đồ Thu Nhỏ: Bật' : 'Bản Đồ Thu Nhỏ: Tắt'}</span>
        </button>

        {/* 🎙️ AUTO AUDIO STORYTELLING TOGGLE */}
        <button
          onClick={toggleAutoPlayNarration}
          className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all ${
            autoPlayNarration 
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 ring-1 ring-amber-400/30' 
              : 'bg-stone-900/90 text-stone-400 border-stone-800'
          }`}
          title="Bật/Tắt tự động kể chuyện và đọc thơ di sản khi di chuyển đến địa danh"
        >
          {autoPlayNarration ? (
            <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-stone-400" />
          )}
          <span>{autoPlayNarration ? 'Kể Chuyện: Bật' : 'Kể Chuyện: Tắt'}</span>
        </button>

        {/* 🔍 FOCUS / COMPACT 3D MAP MODE TOGGLE */}
        <button
          onClick={() => {
            sound.playClick();
            setIsFocusMode(!isFocusMode);
          }}
          className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all ${
            isFocusMode 
              ? 'bg-amber-500 text-stone-950 border-amber-300' 
              : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:text-amber-300'
          }`}
          title="Thu gọn các thanh công cụ để mở rộng toàn cảnh Bản Đồ 3D"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isFocusMode ? 'Mở Rộng Giao Diện' : 'Bản Đồ Thu Gọn'}</span>
        </button>
      </div>

      {/* 3D Map Canvas Stage */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`relative flex-1 h-full cursor-grab active:cursor-grabbing bg-gradient-to-b ${getAtmosphereBg()} overflow-hidden perspective-1000`}
      >
        {/* Atmospheric Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute w-96 h-96 -top-20 -left-20 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-96 h-96 bottom-10 right-10 bg-cyan-600/15 rounded-full blur-3xl" />
        </div>

        {/* The 3D Rotatable & Tiltable Isometric Surface */}
        <div 
          className="absolute top-1/2 left-1/2 w-[1200px] h-[1000px] -ml-[600px] -mt-[500px] transition-transform duration-150 ease-out preserve-3d"
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom}) rotateX(${tilt}deg) rotateZ(${rotation}deg)`,
          }}
        >
          {/* Map Base Terrain Board */}
          <div className="relative w-full h-full rounded-3xl bg-stone-900/95 border-4 border-amber-900/60 shadow-[0_50px_100px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 158, 11, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(245, 158, 11, 0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Coastal Vung Tau Sea Waters Base (Bottom-Right) */}
            <div className="absolute bottom-0 right-0 w-[440px] h-[360px] bg-gradient-to-tl from-cyan-950/90 via-sky-900/50 to-transparent rounded-tl-full border-t-2 border-l-2 border-cyan-500/25 pointer-events-none" />

            {/* Dầu Tiếng Lake Base (Top-Left) */}
            <div className="absolute top-0 left-4 w-[280px] h-[180px] bg-gradient-to-br from-sky-950/80 via-blue-900/40 to-transparent rounded-br-full border-b-2 border-r-2 border-sky-500/20 pointer-events-none" />

            {/* SVG Transit Routes & Waterways System */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#0369a1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#082f49" stopOpacity="0.85" />
                </linearGradient>
                <filter id="waterGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Sông Sài Gòn - Sông Bé - Vịnh Gành Rái */}
              <path
                d="M 480,0 Q 460,80 500,160 T 640,320 T 630,560 T 780,720 Q 950,850 1200,920"
                fill="none"
                stroke="url(#riverGrad)"
                strokeWidth="48"
                strokeLinecap="round"
                filter="url(#waterGlow)"
              />
              {/* Kênh Tàu Hủ - Bến Nghé */}
              <path
                d="M 630,560 Q 500,580 340,620 T 120,680"
                fill="none"
                stroke="#0369a1"
                strokeWidth="24"
                strokeOpacity="0.75"
                strokeLinecap="round"
              />

              {/* Transit & Trade Routes */}
              {showRoutes && (
                <>
                  <path
                    d="M 552,480 Q 520,280 468,60"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    strokeOpacity="0.65"
                  />
                  <path
                    d="M 552,480 Q 360,340 216,200"
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    strokeOpacity="0.65"
                  />
                  <path
                    d="M 650,580 Q 780,690 970,820"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    strokeDasharray="10 8"
                    strokeOpacity="0.75"
                  />
                  <path
                    d="M 970,820 Q 1020,880 1116,920"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    strokeOpacity="0.8"
                  />
                </>
              )}
            </svg>

            {/* Regional Zone Watermarks */}
            <div className="absolute top-6 left-1/3 text-amber-500/25 font-['Cinzel',serif] font-black text-2xl tracking-widest pointer-events-none flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500/30" />
              VÙNG ĐẤT THỦ - BÌNH DƯƠNG
            </div>

            <div className="absolute top-20 left-12 text-lime-500/20 font-['Cinzel',serif] font-black text-2xl tracking-widest pointer-events-none">
              ĐẤT THÉP CỦ CHI
            </div>

            <div className="absolute top-[46%] left-1/4 text-amber-400/25 font-['Cinzel',serif] font-black text-3xl tracking-widest pointer-events-none">
              SÀI GÒN - GIA ĐỊNH - CHỢ LỚN
            </div>

            <div className="absolute bottom-20 right-14 text-cyan-400/30 font-['Cinzel',serif] font-black text-2xl tracking-widest pointer-events-none flex items-center gap-2">
              <Ship className="w-6 h-6 text-cyan-400/30" />
              BIỂN ĐẢO VŨNG TÀU - CÔN ĐẢO
            </div>

            {/* 🔥 POPULARITY HEATMAP RADIAL GLOW LAYER */}
            {showHeatmap && (
              <div className="absolute inset-0 pointer-events-none z-10">
                {filteredLocations.map(loc => {
                  const heat = getHeatIntensityStyle(loc.activeExplorers || 50);
                  const radius = Math.min(140, Math.max(60, (loc.activeExplorers || 50) * 0.6));

                  return (
                    <div
                      key={`heat-${loc.id}`}
                      style={{
                        left: `${loc.x}%`,
                        top: `${loc.y}%`,
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        marginLeft: `-${radius}px`,
                        marginTop: `-${radius}px`,
                        background: heat.halo,
                      }}
                      className="absolute rounded-full pointer-events-none transition-all duration-700 animate-pulse"
                    />
                  );
                })}
              </div>
            )}

            {/* Landmarks Pins & 3D Isometric Tokens */}
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation?.id === loc.id;
              const isDone = isLocationCompleted(loc);
              const heat = getHeatIntensityStyle(loc.activeExplorers || 50);

              return (
                <div
                  key={loc.id}
                  id={`landmark-pin-${loc.id}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLocationClick(loc, e);
                  }}
                  style={{
                    left: `${loc.x}%`,
                    top: `${loc.y}%`,
                    zIndex: isSelected ? 40 : 25,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group p-2 touch-manipulation"
                >
                  {/* 3D Pillar Height & Shadow */}
                  <div 
                    className="relative flex flex-col items-center transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      transform: isSelected ? 'scale(1.18) translateY(-8px)' : 'scale(1)',
                    }}
                  >
                    {/* 🔥 Heatmap Real-time Explorer Count Badge */}
                    {showHeatmap && (
                      <div className={`mb-1 px-2 py-0.5 rounded-full text-[10px] font-black tracking-tight shadow-lg border border-white/20 flex items-center gap-1 scale-95 ${heat.badgeColor}`}>
                        <Flame className="w-2.5 h-2.5 shrink-0" />
                        <span>{loc.activeExplorers || 50} người</span>
                        {(loc.popularityRank || 99) <= 3 && (
                          <span className="bg-stone-950/80 text-yellow-300 px-1 rounded text-[9px]">
                            TOP {loc.popularityRank}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Floating Info Tag */}
                    <div className={`mb-1 px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap shadow-2xl border transition-all pointer-events-none flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 border-amber-300 scale-105 ring-2 ring-amber-400/50'
                        : 'bg-stone-900/95 text-stone-200 border-stone-700 group-hover:border-amber-500/70 group-hover:bg-stone-800'
                    }`}>
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
                      )}
                      <span className="truncate max-w-[130px]">{loc.name}</span>
                      {loc.province && (
                        <span className="text-[9px] px-1 rounded bg-stone-800 text-amber-300 font-normal">
                          {loc.province === 'TP. Hồ Chí Minh' ? 'TP.HCM' : loc.province === 'Bà Rịa - Vũng Tàu' ? 'BR-VT' : 'B.Dương'}
                        </span>
                      )}
                    </div>

                    {/* 3D Building Miniature Token */}
                    <div 
                      className={`relative w-13 h-13 rounded-2xl p-1 shadow-2xl flex items-center justify-center transition-all border-2 ${
                        isSelected 
                          ? 'border-amber-400 bg-gradient-to-tr from-amber-600 to-yellow-400 ring-4 ring-amber-400/40' 
                          : isDone 
                            ? 'border-emerald-500 bg-stone-900' 
                            : 'border-amber-500/60 bg-stone-900 group-hover:border-amber-400 group-hover:scale-105'
                      }`}
                    >
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        <img 
                          src={loc.thumbnail || loc.coverImage} 
                          alt={loc.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      </div>

                      {/* Completed Badge Indicator */}
                      {isDone && (
                        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-600 rounded-full border-2 border-stone-900 flex items-center justify-center shadow-md">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}

                      {/* Audio Icon Badge */}
                      {isSelected && isPlayingAudio && (
                        <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-amber-500 rounded-full border-2 border-stone-900 flex items-center justify-center shadow-md animate-pulse">
                          <Volume2 className="w-3 h-3 text-stone-950" />
                        </div>
                      )}
                    </div>

                    {/* Ground Marker Radar Ripple */}
                    <div className={`w-9 h-4 rounded-full blur-xs -mt-1 transition-all ${
                      isSelected ? 'bg-amber-400/60 scale-125' : 'bg-amber-500/30 group-hover:bg-amber-400/50'
                    }`} />
                  </div>
                </div>
              );
            })}

            {/* Real-time Player 3D Avatar Marker */}
            <div
              style={{
                left: `${playerPos.x}%`,
                top: `${playerPos.y}%`,
                transition: 'left 0.85s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.85s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex flex-col items-center"
            >
              {/* Player Tag */}
              <div className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-lg border border-red-300 animate-bounce flex items-center gap-1">
                {travelMode === 'water' ? <Ship className="w-3 h-3" /> : <Footprints className="w-3 h-3" />}
                <span>{isTraveling ? 'Đang du hành...' : 'Lữ khách ở đây'}</span>
              </div>
              {/* Avatar Icon */}
              <div className={`w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 p-0.5 shadow-2xl ${isTraveling ? 'scale-125 transition-transform' : ''}`}>
                <div className="w-full h-full bg-stone-950 rounded-full flex items-center justify-center">
                  <Navigation className={`w-5 h-5 text-amber-300 rotate-45 ${isTraveling ? 'animate-spin' : ''}`} />
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500/20 animate-ping -mt-8" />
            </div>

            {/* Fog of War Overlay */}
            {fogOfWar && (
              <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm pointer-events-none flex items-center justify-center z-50">
                <div className="text-center p-6 bg-stone-900/90 rounded-2xl border border-amber-500/40 shadow-2xl">
                  <EyeOff className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <p className="font-bold text-amber-300">Sương Mù Khám Phá Đang Bật</p>
                  <p className="text-xs text-stone-400">Hoàn thành nhiệm vụ để mở rộng tầm nhìn di sản</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🗺️ INTERACTIVE 3D MINIMAP RADAR (Bản Đồ Thu Nhỏ Góc Trái Màn Hình) */}
        {showMinimap && (
          <div className="absolute top-24 left-4 z-20 w-52 h-44 rounded-2xl bg-stone-900/95 border border-amber-500/40 shadow-2xl backdrop-blur-md p-2 flex flex-col pointer-events-auto animate-in fade-in slide-in-from-left-2">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-stone-800 text-[10px] font-bold text-amber-300">
              <span className="flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-400 animate-spin" />
                Bản Đồ Thu Nhỏ (Radar 21 Điểm)
              </span>
              <button 
                onClick={() => setShowMinimap(false)}
                className="text-stone-400 hover:text-stone-200"
                title="Đóng bản đồ thu nhỏ"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Interactive Miniature Radar Canvas */}
            <div className="relative flex-1 rounded-xl bg-stone-950 border border-stone-800 overflow-hidden">
              {/* Regional outlines in minimap */}
              <div className="absolute top-1 left-2 text-[8px] font-bold text-amber-500/40">Bình Dương</div>
              <div className="absolute top-10 left-3 text-[8px] font-bold text-amber-400/40">TP.HCM</div>
              <div className="absolute bottom-1 right-2 text-[8px] font-bold text-cyan-400/40">BR-Vũng Tàu</div>

              {/* Waterways in minimap */}
              <div className="absolute bottom-0 right-0 w-16 h-12 bg-cyan-950/60 rounded-tl-full pointer-events-none" />

              {/* All 21 landmark interactive points in minimap */}
              {locationList.map((loc) => {
                const isSel = selectedLocation?.id === loc.id;
                const isHot = (loc.heatScore || 0) >= 90;
                return (
                  <button
                    key={`minimap-${loc.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                      onSelectLocation(loc);
                      setQuickOverviewLoc(loc);
                      centerCameraOnLocation(loc);
                    }}
                    style={{
                      left: `${loc.x}%`,
                      top: `${loc.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all hover:scale-175 ${
                      isSel 
                        ? 'bg-amber-400 ring-2 ring-amber-300 scale-150 z-20 animate-ping' 
                        : isHot 
                          ? 'bg-red-500 ring-1 ring-red-400/50 z-10' 
                          : 'bg-stone-500 hover:bg-amber-300'
                    }`}
                    title={`${loc.name} (${loc.province}) - Bấm xem sơ lược`}
                  />
                );
              })}

              {/* Player Position in minimap */}
              <div
                style={{
                  left: `${playerPos.x}%`,
                  top: `${playerPos.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full border border-white z-30 pointer-events-none shadow"
              />
            </div>
            
            <p className="text-[9px] text-stone-400 text-center pt-1 truncate">
              Nhấp điểm đỏ/vàng để mở sơ lược & bay tới
            </p>
          </div>
        )}

        {/* 🧭 SƠ LƯỢC ĐỊA DANH MODAL / FLOATING PREVIEW POPOVER (Khi Du Khách Bấm Vào Địa Danh Từ Bản Đồ) */}
        {quickOverviewLoc && (
          <div className="absolute top-24 right-4 sm:right-6 w-[340px] sm:w-[380px] p-4 rounded-3xl bg-stone-900/98 border border-amber-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl z-40 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Sơ Lược Di Sản Phương Nam
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setQuickOverviewLoc(null);
                }}
                className="p-1 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                title="Đóng bảng sơ lược"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Landmark AI Photo & Badges */}
            <div className="relative h-40 rounded-2xl overflow-hidden mt-3 border border-amber-500/30 group">
              <img
                src={quickOverviewLoc.thumbnail || quickOverviewLoc.coverImage}
                alt={quickOverviewLoc.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute top-2 left-2 flex items-center gap-1 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-amber-500 text-stone-950 font-black text-[10px] uppercase">
                  {quickOverviewLoc.province}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-900/90 text-amber-200 border border-stone-700 text-[10px]">
                  {quickOverviewLoc.district}
                </span>
              </div>

              {quickOverviewLoc.activeExplorers && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-red-600 text-white font-bold text-[10px] flex items-center gap-1 shadow">
                  <Flame className="w-2.5 h-2.5" />
                  <span>{quickOverviewLoc.activeExplorers} lữ khách</span>
                </div>
              )}

              <div className="absolute bottom-2 left-3 right-3">
                <h3 className="font-['Cinzel',serif] font-black text-base text-amber-200 drop-shadow">
                  {quickOverviewLoc.name}
                </h3>
                <p className="text-[11px] text-stone-300 truncate">
                  {quickOverviewLoc.title || quickOverviewLoc.shortDesc}
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="p-2 rounded-xl bg-stone-950/80 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase">Khởi Dựng:</span>
                <p className="font-bold text-amber-300 truncate">{quickOverviewLoc.builtYear}</p>
              </div>
              <div className="p-2 rounded-xl bg-stone-950/80 border border-stone-800">
                <span className="text-[10px] text-stone-400 uppercase">Điểm Nhiệt:</span>
                <p className="font-bold text-red-400 flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  {quickOverviewLoc.heatScore || 85}/100
                </p>
              </div>
            </div>

            {/* Architectural Highlight */}
            <div className="mt-2.5 p-2.5 rounded-xl bg-stone-950/90 border border-stone-800/80 text-[11px] text-stone-300 leading-relaxed">
              <p className="font-bold text-amber-400 mb-0.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Dấu Ấn Lịch Sử & Kiến Trúc:
              </p>
              <p className="line-clamp-2">{quickOverviewLoc.shortDesc || quickOverviewLoc.fullHistory}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-stone-800 text-xs font-bold">
              <button
                onClick={() => {
                  sound.playSuccess();
                  travelToLocation(quickOverviewLoc, true);
                  setQuickOverviewLoc(null);
                }}
                className="py-2 px-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center gap-1 shadow-md hover:scale-105 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Bay Tới</span>
              </button>

              <button
                onClick={() => {
                  playAudioForLocation(quickOverviewLoc, 'narration');
                }}
                className="py-2 px-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 flex items-center justify-center gap-1 hover:scale-105 transition-all"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Thuyết Minh</span>
              </button>

              <button
                onClick={() => {
                  sound.playSuccess();
                  onStartQuest(quickOverviewLoc);
                  setQuickOverviewLoc(null);
                }}
                className="py-2 px-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 text-white flex items-center justify-center gap-1 shadow-md hover:scale-105 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Nhiệm Vụ</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Quick Landmark Drawer Carousel */}
        <div className="absolute bottom-3 left-3 right-16 sm:right-24 z-20 transition-all duration-300">
          {showQuickDrawer ? (
            <div className="bg-stone-900/95 backdrop-blur-md rounded-2xl border border-amber-500/30 p-2 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between px-2 pb-1.5 border-b border-stone-800/80 text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-amber-300">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>21 Địa Danh Nam Bộ ({filteredLocations.length} địa điểm)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-[10px] text-stone-400">Nhấp để mở sơ lược, thuyết minh & du hành</span>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setShowQuickDrawer(false);
                    }}
                    className="px-2 py-0.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] font-semibold flex items-center gap-1 border border-stone-700 transition-colors"
                    title="Thu gọn danh sách để quan sát bản đồ 3D rộng rãi hơn"
                  >
                    <span>Thu Gọn</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pt-1.5 pb-0.5 no-scrollbar scroll-smooth">
                {filteredLocations.map(loc => {
                  const isSel = selectedLocation?.id === loc.id;
                  const isDone = isLocationCompleted(loc);
                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleLocationClick(loc)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-left shrink-0 transition-all border ${
                        isSel 
                          ? 'bg-amber-500 text-stone-950 border-amber-300 font-bold shadow-md scale-102' 
                          : 'bg-stone-950/80 hover:bg-stone-800 text-stone-200 border-stone-800 hover:border-amber-500/40'
                      }`}
                    >
                      <img 
                        src={loc.thumbnail || loc.coverImage} 
                        alt={loc.name} 
                        className="w-7 h-7 rounded-lg object-cover shrink-0" 
                      />
                      <div className="min-w-0 pr-1">
                        <p className="text-xs font-semibold truncate max-w-[110px]">{loc.name}</p>
                        <p className={`text-[9px] truncate ${isSel ? 'text-stone-900' : 'text-stone-400'}`}>
                          {loc.activeExplorers ? `🔥 ${loc.activeExplorers} người` : (loc.province || 'Nam Bộ')}
                        </p>
                      </div>
                      {isDone && <CheckCircle2 className={`w-3 h-3 ${isSel ? 'text-stone-950' : 'text-emerald-400'} shrink-0`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                sound.playClick();
                setShowQuickDrawer(true);
              }}
              className="px-3.5 py-2 rounded-2xl bg-stone-900/90 hover:bg-stone-800 border border-amber-500/50 text-amber-300 font-bold text-xs shadow-2xl backdrop-blur-md flex items-center gap-2 transition-all hover:scale-105"
              title="Mở rộng danh sách 21 địa danh di sản"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Hiện Danh Sách Địa Danh ({filteredLocations.length})</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 3D Map Floating HUD Controls (Bottom Right) */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
          {/* Reset Camera */}
          <button
            onClick={resetCamera}
            className="p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 shadow-xl transition-all"
            title="Đặt lại góc nhìn 3D mặc định"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* 3D Tilt adjust */}
          <button
            onClick={() => setTilt(t => (t === 0 ? 36 : t === 36 ? 55 : 0))}
            className="p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 shadow-xl transition-all font-bold text-xs"
            title="Đổi góc nghiêng 3D"
          >
            3D
          </button>

          {/* Zoom In / Out */}
          <button
            onClick={() => setZoom(z => Math.min(z + 0.15, 2.0))}
            className="p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 shadow-xl transition-all"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => setZoom(z => Math.max(z - 0.15, 0.7))}
            className="p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 shadow-xl transition-all"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Fog of war toggle */}
          <button
            onClick={() => { sound.playClick(); setFogOfWar(!fogOfWar); }}
            className={`p-2.5 rounded-xl border shadow-xl transition-all ${
              fogOfWar ? 'bg-amber-500 text-stone-950 border-amber-400' : 'bg-stone-900/90 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
            title="Bật / Tắt Sương mù khám phá"
          >
            {fogOfWar ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Right Drawer / Selected Landmark Detail Sidebar with Audio Narration Player (chỉ hiển thị khi KHÔNG ở chế độ thu gọn) */}
      {!isFocusMode && selectedLocation && (
        <aside className="w-full md:w-96 bg-stone-900/95 border-t md:border-t-0 md:border-l border-amber-500/20 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto max-h-[52vh] md:max-h-full z-30 shadow-2xl">
          <div className="space-y-4">
            {/* Header with image */}
            <div className="relative h-44 rounded-2xl overflow-hidden border border-amber-500/30 group">
              <img 
                src={selectedLocation.coverImage || selectedLocation.thumbnail} 
                alt={selectedLocation.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              <div className="absolute bottom-2.5 left-3 right-3">
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-500 text-stone-950">
                    {selectedLocation.province || 'TP. Hồ Chí Minh'} • {selectedLocation.district}
                  </span>
                  {selectedLocation.activeExplorers && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-600 text-white flex items-center gap-1">
                      <Flame className="w-2.5 h-2.5" />
                      {selectedLocation.activeExplorers} đang khám phá
                    </span>
                  )}
                </div>
                <h3 className="font-['Cinzel',serif] font-bold text-lg text-amber-200 leading-tight">
                  {selectedLocation.name}
                </h3>
              </div>

              {/* 360 VR Button overlaid on cover image */}
              {onOpenAR && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    onOpenAR();
                  }}
                  className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-amber-500/90 hover:bg-amber-400 text-stone-950 text-[11px] font-bold flex items-center gap-1 shadow-lg backdrop-blur-sm transition-all"
                  title="Mở chế độ thực tế ảo 360° VR"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>360° VR</span>
                </button>
              )}
            </div>

            {/* 🎵 HERITAGE AUDIO NARRATION & POETRY/CẢI LƯƠNG PLAYER */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-b from-amber-500/15 to-stone-950/80 border border-amber-500/40 shadow-xl space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-amber-500 text-stone-950 ${isPlayingAudio ? 'animate-bounce' : ''}`}>
                    <Music className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-300">Âm Thanh Di Sản & Thuyết Minh</h4>
                    <p className="text-[10px] text-stone-400">
                      {isPlayingAudio 
                        ? (audioMode === 'narration' ? '🎙️ Đang kể chuyện lịch sử...' : audioMode === 'poem' ? '📜 Đang ngâm thơ di sản...' : audioMode === 'cai_luong' ? '🎭 Đang hòa tấu Vọng Cổ...' : '🔔 Âm thanh bản địa...')
                        : 'Sẵn sàng phát âm thanh & thơ lục bát'}
                    </p>
                  </div>
                </div>

                {/* Equalizer waves if playing */}
                {isPlayingAudio && (
                  <div className="flex items-end gap-0.5 h-4">
                    <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.4s_infinite] h-3" />
                    <span className="w-1 bg-amber-300 rounded-full animate-[pulse_0.6s_infinite] h-4" />
                    <span className="w-1 bg-amber-500 rounded-full animate-[pulse_0.5s_infinite] h-2" />
                    <span className="w-1 bg-yellow-400 rounded-full animate-[pulse_0.7s_infinite] h-4" />
                  </div>
                )}
              </div>

              {/* Audio Mode Selectors */}
              <div className="grid grid-cols-4 gap-1">
                {[
                  { id: 'narration', label: 'Kể Chuyện', icon: Mic },
                  { id: 'poem', label: 'Ngâm Thơ', icon: BookOpen },
                  { id: 'cai_luong', label: 'Cải Lương', icon: Music },
                  { id: 'ambient', label: 'Âm Cảnh', icon: Volume2 },
                ].map(item => {
                  const Icon = item.icon;
                  const isActive = isPlayingAudio && audioMode === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => playAudioForLocation(selectedLocation, item.id as AudioMode)}
                      className={`py-1.5 px-1 rounded-xl text-[10px] font-bold flex flex-col items-center gap-1 transition-all border ${
                        isActive
                          ? 'bg-amber-500 text-stone-950 border-amber-300 shadow-md'
                          : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-amber-500/40 hover:text-amber-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Lyrics / Poem / Subtitle Display */}
              <div className="p-2.5 rounded-xl bg-stone-950/90 border border-stone-800 text-xs">
                {audioMode === 'poem' && selectedLocation.poemVerse ? (
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      Thơ Di Sản Phương Nam
                    </p>
                    <p className="italic text-amber-200/90 whitespace-pre-line leading-relaxed font-serif text-[11px]">
                      {selectedLocation.poemVerse}
                    </p>
                  </div>
                ) : audioMode === 'cai_luong' && selectedLocation.caiLuongChant ? (
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      Khúc Ca Vọng Cổ Cải Lương
                    </p>
                    <p className="italic text-purple-200/90 leading-relaxed font-serif text-[11px]">
                      "{selectedLocation.caiLuongChant}"
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <Mic className="w-3 h-3" />
                      Lời Thuyết Minh Di Sản
                    </p>
                    <p className="text-stone-300 text-[11px] leading-relaxed line-clamp-3">
                      {selectedLocation.storyNarration || selectedLocation.shortDesc}
                    </p>
                  </div>
                )}
              </div>

              {/* Audio Playback Controls & Speed */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-800/80">
                <div className="flex items-center gap-1.5">
                  {isPlayingAudio ? (
                    <button
                      onClick={stopAllAudio}
                      className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1 shadow"
                    >
                      <Square className="w-3 h-3 fill-white" />
                      <span>Dừng Kể</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => playAudioForLocation(selectedLocation, audioMode)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1 shadow"
                    >
                      <Play className="w-3 h-3 fill-stone-950" />
                      <span>Nghe Kể Chuyện</span>
                    </button>
                  )}

                  <button
                    onClick={() => playAudioForLocation(selectedLocation, audioMode)}
                    className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800"
                    title="Phát lại từ đầu"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Speech rate selector */}
                <div className="flex items-center gap-1 text-[10px]">
                  <span className="text-stone-400">Tốc độ:</span>
                  {[
                    { rate: 0.85, label: '0.85x' },
                    { rate: 0.95, label: '1.0x' },
                    { rate: 1.15, label: '1.15x' }
                  ].map(item => (
                    <button
                      key={item.rate}
                      onClick={() => {
                        setSpeechRate(item.rate);
                        if (isPlayingAudio) {
                          playAudioForLocation(selectedLocation, audioMode, item.rate);
                        }
                      }}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        speechRate === item.rate 
                          ? 'bg-amber-500 text-stone-950' 
                          : 'bg-stone-900 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Travel Distance & Route Info */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <p className="text-stone-400 text-[10px]">Khoảng cách du hành</p>
                  <p className="font-bold text-amber-300">
                    ~{calculateDistanceKm(selectedLocation.x, selectedLocation.y)} km từ vị trí hiện tại
                  </p>
                </div>
              </div>
              <button
                onClick={() => travelToLocation(selectedLocation, true)}
                className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors flex items-center gap-1 shadow"
              >
                <Navigation className="w-3 h-3" />
                <span>Du Hành</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800">
                <p className="text-stone-400 text-[10px] uppercase tracking-wider">Thời kỳ lịch sử</p>
                <p className="font-semibold text-stone-200 truncate">{selectedLocation.historicalPeriod}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800">
                <p className="text-stone-400 text-[10px] uppercase tracking-wider">Khởi dựng / Kiến trúc</p>
                <p className="font-semibold text-stone-200 truncate">{selectedLocation.builtYear}</p>
              </div>
            </div>

            {/* Narrative History */}
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Lịch sử & Hồn cốt di sản
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedLocation.fullHistory}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                Dấu ấn kiến trúc đặc sắc
              </h4>
              {selectedLocation.architecturalHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Secret Fun Fact Box */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs">
              <p className="font-bold text-amber-300 flex items-center gap-1 mb-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Bí mật ít người biết:
              </p>
              <p className="text-stone-300 italic">{selectedLocation.secretFunFact}</p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2 mt-4">
            <button
              id="start-landmark-quest-btn"
              onClick={() => {
                sound.playSuccess();
                onStartQuest(selectedLocation);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              <span>{isLocationCompleted(selectedLocation) ? 'Chơi Lại Nhiệm Vụ' : 'Bắt Đầu Giải Mã Nhiệm Vụ'}</span>
            </button>

            <button
              onClick={() => onOpenAI(`Tôi đang ở ${selectedLocation.name} (${selectedLocation.province || 'TP.HCM'}). Hãy kể cho tôi nghe một bí mật lịch sử đặc biệt hoặc hướng dẫn tôi cách khám phá chi tiết tại đây!`)}
              className="w-full py-2 px-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Hỏi Cố Vấn Ba Son Về Địa Điểm Này</span>
            </button>
          </div>
        </aside>
      )}

      {/* 🔥 TRUNG TÂM ĐIỂM NHIỆT & TOP 5 XU HƯỚNG PHƯƠNG NAM (DEDICATED MODAL) */}
      {isTrendingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-stone-900 border border-amber-500/50 shadow-2xl p-5 sm:p-6 space-y-5">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 text-stone-950 font-bold shadow-lg shadow-red-500/20">
                  <Flame className="w-5 h-5 fill-stone-950 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-['Cinzel',serif] font-black text-lg text-amber-200">
                    Bảng Xếp Hạng Top 5 Xu Hướng & Điểm Nhiệt
                  </h3>
                  <p className="text-xs text-stone-400">
                    Dữ liệu lưu lượng lữ khách và mức độ khám phá trực tiếp thời gian thực
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setIsTrendingModalOpen(false);
                }}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 👑 TOP 5 XU HƯỚNG KHÁM PHÁ HÀNG ĐẦU */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Top 5 Địa Danh Được Yêu Thích Nhất:
                </h4>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  ● Đang cập nhật trực tiếp
                </span>
              </div>

              <div className="space-y-2.5">
                {top5TrendingLocations.map((loc, idx) => {
                  const heat = getHeatIntensityStyle(loc.activeExplorers || 50);
                  const rankMedals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
                  return (
                    <div
                      key={`top5-${loc.id}`}
                      className="p-3 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl shrink-0">{rankMedals[idx]}</span>
                        <img
                          src={loc.thumbnail || loc.coverImage}
                          alt={loc.name}
                          className="w-14 h-14 rounded-xl object-cover border border-stone-700 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h5 className="font-bold text-sm text-amber-200 group-hover:text-amber-300 truncate">
                              {loc.name}
                            </h5>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">
                              {loc.province}
                            </span>
                          </div>
                          <p className="text-xs text-stone-400 line-clamp-1">{loc.trendingTag || loc.shortDesc}</p>
                          
                          {/* Live Heat Progress Bar */}
                          <div className="flex items-center gap-2 mt-1.5">
                            <div className="w-28 sm:w-40 h-2 rounded-full bg-stone-800 overflow-hidden">
                              <div
                                style={{ width: `${Math.min(100, loc.heatScore || 80)}%` }}
                                className={`h-full bg-gradient-to-r ${heat.barGradient} rounded-full`}
                              />
                            </div>
                            <span className="text-[10px] font-bold text-amber-300">
                              {loc.heatScore}/100 Điểm
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs font-bold text-red-400 flex items-center gap-1 justify-end">
                            <Flame className="w-3.5 h-3.5" />
                            {loc.activeExplorers} lữ khách
                          </p>
                          <p className="text-[10px] text-stone-400">{heat.heatText}</p>
                        </div>

                        <button
                          onClick={() => {
                            sound.playClick();
                            onSelectLocation(loc);
                            travelToLocation(loc, true);
                            setIsTrendingModalOpen(false);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-all"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Bay Tới</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ⏰ THỐNG KÊ KHUNG GIỜ VÀNG THAM QUAN */}
            <div className="p-4 rounded-2xl bg-stone-950/90 border border-stone-800 space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                Khung Giờ Vàng Khám Phá Phương Nam:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <span className="font-bold text-emerald-400 text-[11px]">🌅 06:30 - 09:00 (Thanh Bình)</span>
                  <p className="text-[11px] text-stone-400">
                    Vắng vẻ, ánh sáng tuyệt đẹp để chụp ảnh tại Chùa Hội Khánh, Đường Sách, Bến Nhà Rồng.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <span className="font-bold text-amber-400 text-[11px]">🌇 15:30 - 18:00 (Hoàng Hôn)</span>
                  <p className="text-[11px] text-stone-400">
                    Gió biển mát rượi, thưởng thức hải sản tại Bãi Sau Vũng Tàu, Hồ Dầu Tiếng, Chợ Xóm Lưới.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <span className="font-bold text-red-400 text-[11px]">🎆 18:30 - 22:00 (Cực Hot)</span>
                  <p className="text-[11px] text-stone-400">
                    Đại lộ rực rỡ hoa đăng, âm nhạc tại Phố Đi Bộ Nguyễn Huệ, Chợ Bến Thành, Thánh Đường Cải Lương.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-stone-800">
              <span className="text-xs text-stone-400">
                Nhấn vào bất kỳ địa danh nào để định vị và nghe thuyết minh tự động.
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  setIsTrendingModalOpen(false);
                }}
                className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs"
              >
                Đóng Bảng Xu Hướng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
