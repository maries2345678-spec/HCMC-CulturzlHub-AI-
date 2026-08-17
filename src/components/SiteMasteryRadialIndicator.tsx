import React, { useState } from 'react';
import { 
  Award, 
  Sparkles, 
  Crown, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Zap, 
  Info,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { KnowledgeTier, Location3D } from '../types';

interface SiteMasteryRadialIndicatorProps {
  questTitle?: string;
  location: Location3D;
  totalQuestions: number;
  correctCount: number;
  answeredCount: number;
  tierStats?: {
    basic: { correct: number; total: number };
    intermediate: { correct: number; total: number };
    advanced: { correct: number; total: number };
    master: { correct: number; total: number };
  };
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

export const SiteMasteryRadialIndicator: React.FC<SiteMasteryRadialIndicatorProps> = ({
  questTitle,
  location,
  totalQuestions,
  correctCount,
  answeredCount,
  tierStats,
  size = 'md',
  showDetails = false
}) => {
  const [isExpanded, setIsExpanded] = useState(showDetails);

  // Calculate percentage
  const total = Math.max(1, totalQuestions || 20);
  const percentage = Math.min(100, Math.round((correctCount / total) * 100));

  // Determine Mastery Rank & Title
  const getMasteryRank = (pct: number) => {
    if (pct === 100) {
      return {
        title: 'Đại Sư Di Sản Phương Nam',
        badge: '👑 Master',
        color: 'text-amber-300',
        strokeColor: '#f59e0b',
        gradientId: 'radial-grandmaster',
        bg: 'from-amber-500/20 to-yellow-500/20',
        border: 'border-amber-400/60',
        rankLevel: 5
      };
    }
    if (pct >= 75) {
      return {
        title: 'Chuyên Gia Cổ Sử',
        badge: '🎓 Expert',
        color: 'text-purple-300',
        strokeColor: '#a855f7',
        gradientId: 'radial-expert',
        bg: 'from-purple-500/20 to-indigo-500/20',
        border: 'border-purple-400/50',
        rankLevel: 4
      };
    }
    if (pct >= 50) {
      return {
        title: 'Nhà Nghiên Cứu Di Tích',
        badge: '🔍 Researcher',
        color: 'text-cyan-300',
        strokeColor: '#06b6d4',
        gradientId: 'radial-researcher',
        bg: 'from-cyan-500/20 to-blue-500/20',
        border: 'border-cyan-400/50',
        rankLevel: 3
      };
    }
    if (pct >= 25) {
      return {
        title: 'Lữ Khách Thông Thái',
        badge: '🌱 Adept',
        color: 'text-emerald-300',
        strokeColor: '#10b981',
        gradientId: 'radial-adept',
        bg: 'from-emerald-500/20 to-teal-500/20',
        border: 'border-emerald-400/50',
        rankLevel: 2
      };
    }
    return {
      title: 'Tập Sự Khảo Cổ',
      badge: '🧭 Novice',
      color: 'text-stone-300',
      strokeColor: '#78716c',
      gradientId: 'radial-novice',
      bg: 'from-stone-800/40 to-stone-900/40',
      border: 'border-stone-700',
      rankLevel: 1
    };
  };

  const rank = getMasteryRank(percentage);

  // SVG Radial Dimensions
  const dim = size === 'sm' ? 44 : size === 'lg' ? 96 : 64;
  const strokeWidth = size === 'sm' ? 4 : size === 'lg' ? 7 : 5;
  const radius = (dim - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-block text-stone-100">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-3 p-1.5 sm:p-2 rounded-2xl bg-stone-950/80 border ${rank.border} shadow-lg cursor-pointer hover:bg-stone-900/90 transition-all`}
        title={`Độ thuần thục di tích: ${percentage}% (${correctCount}/${total} câu) - Bấm để xem chi tiết`}
      >
        {/* SVG Radial Progress Ring */}
        <div className="relative shrink-0 flex items-center justify-center" style={{ width: dim, height: dim }}>
          <svg width={dim} height={dim} className="transform -rotate-90">
            {/* Gradients */}
            <defs>
              <linearGradient id="radial-grandmaster" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="radial-expert" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
              <linearGradient id="radial-researcher" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="radial-adept" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="radial-novice" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a8a29e" />
                <stop offset="100%" stopColor="#57534e" />
              </linearGradient>
            </defs>

            {/* Background Track Circle */}
            <circle
              cx={dim / 2}
              cy={dim / 2}
              r={radius}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth={strokeWidth}
              fill="transparent"
            />

            {/* Foreground Animated Progress Circle */}
            <circle
              cx={dim / 2}
              cy={dim / 2}
              r={radius}
              stroke={`url(#${rank.gradientId})`}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          {/* Center Text inside Circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={`font-mono font-black ${size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-lg' : 'text-xs'} ${rank.color}`}>
              {percentage}%
            </span>
            {size !== 'sm' && (
              <span className="text-[8px] text-stone-400 font-bold uppercase tracking-tighter -mt-0.5">
                Mastery
              </span>
            )}
          </div>
        </div>

        {/* Text Context beside ring */}
        <div className="pr-1 text-left min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${rank.color} bg-white/5`}>
              {rank.badge}
            </span>
            <span className="text-[10px] text-stone-400 font-mono">
              {correctCount}/{total} câu
            </span>
          </div>

          <h5 className={`font-bold text-xs sm:text-sm truncate max-w-[150px] sm:max-w-[180px] ${rank.color}`}>
            {rank.title}
          </h5>

          <p className="text-[10px] text-stone-400 truncate max-w-[150px] sm:max-w-[180px]">
            Di tích: {location.name}
          </p>
        </div>

        <button className="text-stone-400 hover:text-white p-1">
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Mastery Scorecard Dropdown */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-80 mt-2 z-30 p-4 rounded-2xl bg-stone-950/95 border border-amber-500/40 shadow-2xl backdrop-blur-md space-y-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <h6 className="font-bold text-xs text-amber-200">Độ Thuần Thục Di Tích 3D</h6>
                <p className="text-[10px] text-stone-400">{location.name}</p>
              </div>
            </div>

            <span className={`text-xs font-mono font-bold ${rank.color}`}>
              {percentage}% Hoàn Thiện
            </span>
          </div>

          {/* Progress Bar & Questions Answered */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-stone-300">
              <span>Đã trả lời đúng:</span>
              <span className="font-bold text-emerald-400">{correctCount} / {total} câu</span>
            </div>
            <div className="h-2 rounded-full bg-stone-800 overflow-hidden flex">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* 4 Knowledge Tiers Breakdown */}
          {tierStats ? (
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                Phân bổ 4 bậc tri thức (20+ câu):
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <div className="p-2 rounded-xl bg-stone-900/90 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-emerald-300">🌱 Nhập Môn:</span>
                  <span className="font-mono font-bold text-emerald-400">{tierStats.basic.correct}/{tierStats.basic.total}</span>
                </div>
                <div className="p-2 rounded-xl bg-stone-900/90 border border-cyan-500/30 flex items-center justify-between">
                  <span className="text-cyan-300">🔍 Thông Hiểu:</span>
                  <span className="font-mono font-bold text-cyan-400">{tierStats.intermediate.correct}/{tierStats.intermediate.total}</span>
                </div>
                <div className="p-2 rounded-xl bg-stone-900/90 border border-purple-500/30 flex items-center justify-between">
                  <span className="text-purple-300">🎓 Chuyên Sâu:</span>
                  <span className="font-mono font-bold text-purple-400">{tierStats.advanced.correct}/{tierStats.advanced.total}</span>
                </div>
                <div className="p-2 rounded-xl bg-stone-900/90 border border-amber-500/30 flex items-center justify-between">
                  <span className="text-amber-300">👑 Đại Sư:</span>
                  <span className="font-mono font-bold text-amber-400">{tierStats.master.correct}/{tierStats.master.total}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-2 rounded-xl bg-stone-900 text-stone-400 text-[10px] leading-relaxed">
              Vượt qua trọn vẹn 20+ câu hỏi để mở khóa danh hiệu <strong className="text-amber-300">Đại Sư Di Sản Phương Nam</strong> và nhận trọn vẹn điểm thưởng LP!
            </div>
          )}

          {/* Quick Bonus Tag */}
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" />
              Linh Điểm thưởng nhiệm vụ:
            </span>
            <span className="font-bold font-mono">+{Math.max(400, total * 20)} LP</span>
          </div>
        </div>
      )}
    </div>
  );
};
