import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  MapPin, 
  Play, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Filter, 
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { Quest, Location3D, Badge } from '../types';
import { QUESTS } from '../data/quests';
import { LOCATIONS } from '../data/locations';
import { BADGES } from '../data/badges';
import { sound } from '../utils/audio';

interface QuestListViewProps {
  quests?: Quest[];
  locations?: Location3D[];
  badges?: Badge[];
  completedQuests?: string[];
  onStartQuest: (loc: Location3D) => void;
  onOpenAI?: (context?: string) => void;
}

export const QuestListView: React.FC<QuestListViewProps> = ({
  quests,
  locations,
  badges,
  completedQuests = [],
  onStartQuest,
  onOpenAI
}) => {
  const [filter, setFilter] = useState<'all' | 'uncompleted' | 'completed'>('all');

  const questList = quests || QUESTS || [];
  const safeDoneList = Array.isArray(completedQuests) ? completedQuests : [];

  const filteredQuests = questList.filter(q => {
    const isDone = safeDoneList.includes(q.id);
    if (filter === 'completed') return isDone;
    if (filter === 'uncompleted') return !isDone;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            Hành Trình Khám Phá
          </span>
          <h2 className="font-['Cinzel',serif] font-bold text-2xl sm:text-3xl text-amber-200">
            Danh Sách Nhiệm Vụ Di Sản TP.HCM
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Vượt qua các câu đố văn hóa, giải mã thơ lục bát cổ và tìm kiếm chi tiết kiến trúc ẩn giấu để mở khóa huy hiệu danh giá.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center gap-1.5 bg-stone-950/90 p-1 rounded-2xl border border-stone-800">
          {[
            { id: 'all', label: 'Tất Cả' },
            { id: 'uncompleted', label: 'Chưa Làm' },
            { id: 'completed', label: 'Đã Hoàn Thành' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => { sound.playClick(); setFilter(f.id as any); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === f.id
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuests.map((quest) => {
          const loc = LOCATIONS.find(l => l.id === quest.locationId);
          const badge = BADGES.find(b => b.id === quest.badgeId);
          const isDone = completedQuests.includes(quest.id);

          return (
            <div
              key={quest.id}
              className={`group p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                isDone 
                  ? 'bg-stone-900/70 border-emerald-500/30' 
                  : 'bg-stone-900/90 border-amber-500/30 hover:border-amber-400 hover:-translate-y-1 hover:shadow-xl'
              }`}
            >
              {/* Header with location tag & completion badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                    {quest.loreChapter}
                  </span>
                  <h3 className="font-['Cinzel',serif] font-bold text-lg text-stone-100 group-hover:text-amber-200">
                    {quest.title}
                  </h3>
                </div>

                {isDone ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-xl border border-emerald-500/40">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã xong
                  </span>
                ) : (
                  <span className="text-xs font-bold font-mono text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-xl border border-amber-500/40">
                    +{quest.rewardLP} LP
                  </span>
                )}
              </div>

              {/* Location Reference */}
              {loc && (
                <div className="flex items-center gap-2 text-xs text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{loc.name} ({loc.district})</span>
                </div>
              )}

              {/* Description / Story line */}
              <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                {quest.description}
              </p>

              {/* Steps indicator & Badge reward preview */}
              <div className="p-3 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>{quest.steps.length} Câu đố & Manh mối</span>
                </div>

                {badge && (
                  <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="truncate max-w-[140px]">{badge.name}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  if (loc) {
                    onStartQuest(loc);
                  }
                }}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  isDone
                    ? 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{isDone ? 'Chơi Lại Thử Thách' : 'Bắt Đầu Giải Mã Nhiệm Vụ'}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
