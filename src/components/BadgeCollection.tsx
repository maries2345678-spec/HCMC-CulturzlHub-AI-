import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Info, 
  Share2, 
  Layers, 
  ShieldCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Badge, BadgeRarity } from '../types';
import { BADGES } from '../data/badges';
import { sound } from '../utils/audio';

interface BadgeCollectionProps {
  badges?: Badge[];
  unlockedBadgeIds?: string[];
  onSelectBadgeQuest?: (badge: Badge) => void;
  onShareBadge?: (badge: Badge) => void;
}

export const BadgeCollection: React.FC<BadgeCollectionProps> = ({
  badges,
  unlockedBadgeIds = [],
  onSelectBadgeQuest,
  onShareBadge
}) => {
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [inspectBadge, setInspectBadge] = useState<Badge | null>(null);

  const badgeList = badges || BADGES || [];
  const safeUnlockedIds = Array.isArray(unlockedBadgeIds) ? unlockedBadgeIds : [];

  const filteredBadges = badgeList.filter(b => {
    if (selectedRarity === 'all') return true;
    return b.rarity === selectedRarity;
  });

  const getRarityLabel = (rarity: BadgeRarity) => {
    switch (rarity) {
      case 'legendary': return { text: 'Huyền Thoại', color: 'text-amber-400 bg-amber-500/20 border-amber-500/40' };
      case 'epic': return { text: 'Sử Thi', color: 'text-purple-400 bg-purple-500/20 border-purple-500/40' };
      case 'rare': return { text: 'Hiếm', color: 'text-blue-400 bg-blue-500/20 border-blue-500/40' };
      default: return { text: 'Phổ Biến', color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40' };
    }
  };

  const unlockedCount = safeUnlockedIds.length;
  const progressPercent = badgeList.length > 0 ? Math.round((unlockedCount / badgeList.length) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      {/* Header & Progress Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Điện Vinh Danh Di Sản
            </span>
            <h2 className="font-['Cinzel',serif] font-bold text-2xl sm:text-3xl text-amber-200">
              Bộ Sưu Tập Huy Hiệu Văn Hóa Sài Gòn
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
              Mỗi huy hiệu là một minh chứng lịch sử được đúc kết từ những chuyến thám hiểm giải mã di sản. Thu thập đủ bộ để mở khóa chứng chỉ Lữ Khách Danh Dự.
            </p>
          </div>

          {/* Progress Circular / Bar Indicator */}
          <div className="bg-stone-950/80 p-5 rounded-2xl border border-amber-500/30 flex items-center gap-4 min-w-[240px]">
            <div className="relative w-16 h-16 rounded-full bg-stone-900 border-4 border-amber-500/30 flex items-center justify-center">
              <span className="font-bold font-mono text-base text-amber-300">{progressPercent}%</span>
            </div>
            <div>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider">Tiến độ thu thập</p>
              <p className="font-bold text-lg text-amber-300 font-mono">
                {unlockedCount} / {BADGES.length} <span className="text-xs text-stone-400 font-sans">Huy hiệu</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rarity Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-4">
        {[
          { id: 'all', label: 'Tất Cả' },
          { id: 'legendary', label: 'Huyền Thoại (Cam Vàng)' },
          { id: 'epic', label: 'Sử Thi (Tím)' },
          { id: 'rare', label: 'Hiếm (Lam)' },
          { id: 'common', label: 'Phổ Biến (Lục)' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { sound.playClick(); setSelectedRarity(tab.id); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedRarity === tab.id
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3D Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredBadges.map((badge) => {
          const isUnlocked = unlockedBadgeIds.includes(badge.id);
          const rarityMeta = getRarityLabel(badge.rarity);

          return (
            <div
              key={badge.id}
              id={`badge-card-${badge.id}`}
              onClick={() => {
                sound.playDanTranhNote(659.25, 0.6);
                setInspectBadge(badge);
              }}
              className={`group relative p-4 sm:p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                isUnlocked 
                  ? 'bg-stone-900/90 border-amber-500/40 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(245,158,11,0.15)]' 
                  : 'bg-stone-950/60 border-stone-800 opacity-60 hover:opacity-80'
              }`}
            >
              {/* Rarity Tag */}
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border mb-3 ${rarityMeta.color}`}>
                {rarityMeta.text}
              </span>

              {/* 3D Medal Illustration */}
              <div className="relative mb-3.5">
                <div 
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl p-1 shadow-2xl transition-transform duration-500 group-hover:scale-105 ${
                    isUnlocked 
                      ? `bg-gradient-to-tr ${badge.bgGradient} ring-2 ring-amber-400/50` 
                      : 'bg-stone-800 ring-1 ring-stone-700'
                  }`}
                >
                  <div className="w-full h-full bg-stone-950 rounded-[20px] flex items-center justify-center text-amber-300 relative overflow-hidden">
                    {isUnlocked ? (
                      <>
                        <Award className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent gold-shimmer" />
                      </>
                    ) : (
                      <Lock className="w-8 h-8 text-stone-600" />
                    )}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-['Cinzel',serif] font-bold text-sm text-stone-100 group-hover:text-amber-200 line-clamp-1">
                {badge.name}
              </h3>
              <p className="text-[11px] text-amber-400/90 font-medium mb-1 line-clamp-1">
                {badge.title}
              </p>
              <p className="text-[10px] text-stone-400 line-clamp-2 leading-relaxed">
                {badge.description}
              </p>

              {/* Status footer */}
              <div className="mt-3 pt-2 border-t border-stone-800/80 w-full flex items-center justify-center gap-1 text-[11px]">
                {isUnlocked ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã Sở Hữu
                  </span>
                ) : (
                  <span className="text-stone-500 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Chưa Mở Khóa
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Inspect Badge Modal */}
      {inspectBadge && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-stone-100 space-y-5 animate-scaleUp">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${getRarityLabel(inspectBadge.rarity).color}`}>
                Huy Hiệu {getRarityLabel(inspectBadge.rarity).text}
              </span>
              <button
                onClick={() => setInspectBadge(null)}
                className="text-stone-400 hover:text-stone-100 text-xs font-bold px-2 py-1 bg-stone-800 rounded-lg"
              >
                Đóng
              </button>
            </div>

            {/* Medal Centered Preview */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`w-28 h-28 rounded-3xl p-1 bg-gradient-to-tr ${inspectBadge.bgGradient} shadow-2xl ring-4 ring-amber-400/40`}>
                <div className="w-full h-full bg-stone-950 rounded-[20px] flex items-center justify-center relative overflow-hidden">
                  <Award className="w-14 h-14 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.9)]" />
                  <div className="absolute inset-0 gold-shimmer opacity-40" />
                </div>
              </div>

              <div>
                <h3 className="font-['Cinzel',serif] font-bold text-xl text-amber-200">
                  {inspectBadge.name}
                </h3>
                <p className="text-xs text-amber-400 font-semibold">{inspectBadge.title}</p>
              </div>
            </div>

            {/* Cultural Story */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-950 border border-stone-800 text-xs leading-relaxed">
              <p className="font-bold text-amber-300 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                Điển tích di sản:
              </p>
              <p className="text-stone-300">{inspectBadge.culturalStory}</p>
            </div>

            {/* Active Perk */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-300">Đặc quyền lữ khách kích hoạt:</p>
                <p className="text-stone-300">{inspectBadge.perk}</p>
              </div>
            </div>

            {/* Share to Community Forum */}
            {safeUnlockedIds.includes(inspectBadge.id) && (
              <button
                onClick={() => {
                  if (onShareBadge) {
                    onShareBadge(inspectBadge);
                  } else if (onSelectBadgeQuest) {
                    onSelectBadgeQuest(inspectBadge);
                  }
                  setInspectBadge(null);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Khoe Huy Hiệu Này Lên Diễn Đàn Lữ Khách</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
