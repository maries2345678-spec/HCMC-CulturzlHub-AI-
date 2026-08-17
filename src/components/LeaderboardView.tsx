import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Crown, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  Users, 
  TrendingUp,
  MapPin,
  Clock,
  Star
} from 'lucide-react';
import { UserProfile } from '../types';
import { sound } from '../utils/audio';

interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  title: string;
  lpPoints: number;
  badgesCount: number;
  completedQuestsCount: number;
  region: string;
  streakDays: number;
}

const TOP_EXPLORERS: LeaderboardUser[] = [
  {
    rank: 1,
    id: 'user_top_1',
    name: 'Trần Hoàng Long',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    title: 'Đại Học Sĩ Đất Gia Định',
    lpPoints: 3450,
    badgesCount: 21,
    completedQuestsCount: 21,
    region: 'TP. Hồ Chí Minh',
    streakDays: 45
  },
  {
    rank: 2,
    id: 'user_top_2',
    name: 'Nguyễn Bích Thảo',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    title: 'Nhà Giám Định Di Sản',
    lpPoints: 2980,
    badgesCount: 19,
    completedQuestsCount: 19,
    region: 'Bình Dương',
    streakDays: 38
  },
  {
    rank: 3,
    id: 'user_top_3',
    name: 'Phạm Minh Vũ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    title: 'Thợ Săn Di Sản Biển Đảo',
    lpPoints: 2640,
    badgesCount: 17,
    completedQuestsCount: 17,
    region: 'Bà Rịa - Vũng Tàu',
    streakDays: 30
  },
  {
    rank: 4,
    id: 'user_top_4',
    name: 'Lê Thùy Dung',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    title: 'Nhà Thám Hiểm Di Sản',
    lpPoints: 2150,
    badgesCount: 14,
    completedQuestsCount: 14,
    region: 'TP. Hồ Chí Minh',
    streakDays: 22
  },
  {
    rank: 5,
    id: 'user_top_5',
    name: 'Võ Quốc Trọng',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    title: 'Nghệ Nhân Làng Gốm',
    lpPoints: 1890,
    badgesCount: 12,
    completedQuestsCount: 12,
    region: 'Bình Dương',
    streakDays: 19
  },
  {
    rank: 6,
    id: 'user_top_6',
    name: 'Đặng Ngọc Hân',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    title: 'Học Giả Nam Bộ',
    lpPoints: 1620,
    badgesCount: 10,
    completedQuestsCount: 10,
    region: 'Bà Rịa - Vũng Tàu',
    streakDays: 14
  },
  {
    rank: 7,
    id: 'user_top_7',
    name: 'Nguyễn Thành Nam',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    title: 'Lữ Khách Đô Thành',
    lpPoints: 1350,
    badgesCount: 8,
    completedQuestsCount: 8,
    region: 'TP. Hồ Chí Minh',
    streakDays: 11
  }
];

interface LeaderboardViewProps {
  currentUser?: UserProfile;
  user?: UserProfile;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ currentUser, user }) => {
  const activeUser = currentUser || user || {
    id: 'user_sg_01',
    name: 'Lữ Khách Phương Nam',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    title: 'Học Giả Nam Bộ',
    lpPoints: 450,
    badgesUnlocked: ['badge_ben_thanh'],
    completedQuests: ['quest_ben_thanh_01']
  };

  const [filterRegion, setFilterRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const badgesCount = Array.isArray(activeUser.badgesUnlocked) ? activeUser.badgesUnlocked.length : 0;
  const completedCount = Array.isArray(activeUser.completedQuests) ? activeUser.completedQuests.length : 0;

  // Merge current user dynamically if not already in top list
  const userRankData: LeaderboardUser = {
    rank: badgesCount > 18 ? 3 : badgesCount > 10 ? 8 : 15,
    id: activeUser.id,
    name: `${activeUser.name} (Bạn)`,
    avatar: activeUser.avatar,
    title: activeUser.title,
    lpPoints: activeUser.lpPoints || 0,
    badgesCount: badgesCount,
    completedQuestsCount: completedCount,
    region: 'Toàn Vùng',
    streakDays: 7
  };

  const filteredList = (TOP_EXPLORERS || []).filter(item => {
    const matchRegion = filterRegion === 'all' || item.region === filterRegion;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 space-y-6 animate-fadeIn pb-24 text-stone-100">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-950 border border-amber-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                BẢNG VÀNG DANH VỌNG DI SẢN PHƯƠNG NAM
              </span>
            </div>
            <h1 className="font-['Cinzel',serif] font-bold text-2xl sm:text-3xl text-amber-200">
              Vinh Danh Lữ Khách Bậc Thầy
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
              Cạnh tranh thu thập trọn bộ 21 Huy hiệu Di sản và tích lũy Linh Điểm (LP) trên khắp 3 địa danh TP.HCM, Bình Dương và Bà Rịa - Vũng Tàu.
            </p>
          </div>

          {/* Current User Snapshot Card */}
          <div className="w-full md:w-auto p-4 rounded-2xl bg-stone-950/80 border border-amber-500/40 flex items-center gap-4 shadow-xl">
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover" 
              />
              <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-black text-[10px]">
                #{userRankData.rank}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-amber-200">{currentUser.name} (Bạn)</div>
              <div className="text-[11px] text-stone-400">{currentUser.title}</div>
              <div className="flex items-center gap-3 mt-1 text-xs">
                <span className="text-amber-400 font-bold font-mono">{currentUser.lpPoints} LP</span>
                <span className="text-stone-500">•</span>
                <span className="text-stone-300">{currentUser.badgesUnlocked.length}/21 Huy hiệu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        {/* Rank 2 */}
        {TOP_EXPLORERS[1] && (
          <div className="order-2 sm:order-1 p-5 rounded-2xl bg-stone-900/90 border border-stone-700/80 flex flex-col items-center text-center space-y-3 relative shadow-lg">
            <div className="absolute top-3 left-3 flex items-center gap-1 text-slate-300 font-bold text-xs">
              <Medal className="w-4 h-4 text-slate-400" />
              <span>HẠNG 2</span>
            </div>
            <div className="relative mt-2">
              <img 
                src={TOP_EXPLORERS[1].avatar} 
                alt={TOP_EXPLORERS[1].name} 
                className="w-16 h-16 rounded-full border-2 border-slate-400 object-cover shadow-md" 
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-400 text-stone-950 font-bold text-xs flex items-center justify-center">
                2
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-100">{TOP_EXPLORERS[1].name}</h3>
              <p className="text-[11px] text-slate-400">{TOP_EXPLORERS[1].title}</p>
            </div>
            <div className="w-full pt-2 border-t border-stone-800 flex justify-between text-xs text-stone-300">
              <span className="text-amber-400 font-bold font-mono">{TOP_EXPLORERS[1].lpPoints} LP</span>
              <span>{TOP_EXPLORERS[1].badgesCount} Huy hiệu</span>
            </div>
          </div>
        )}

        {/* Rank 1 - Champion */}
        {TOP_EXPLORERS[0] && (
          <div className="order-1 sm:order-2 p-6 rounded-2xl bg-gradient-to-b from-amber-950/60 to-stone-900 border-2 border-amber-400 flex flex-col items-center text-center space-y-3 relative shadow-2xl shadow-amber-500/20 transform sm:-translate-y-2">
            <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 font-black text-[11px] flex items-center gap-1 shadow-md">
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span>QUÁN QUÂN DI SẢN</span>
            </div>
            <div className="relative mt-2">
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-xl">
                <img 
                  src={TOP_EXPLORERS[0].avatar} 
                  alt={TOP_EXPLORERS[0].name} 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-amber-400 text-stone-950 font-black text-sm flex items-center justify-center shadow-md">
                1
              </div>
            </div>
            <div>
              <h3 className="font-['Cinzel',serif] font-bold text-base text-amber-200">{TOP_EXPLORERS[0].name}</h3>
              <p className="text-xs text-amber-400 font-medium">{TOP_EXPLORERS[0].title}</p>
            </div>
            <div className="w-full pt-3 border-t border-amber-500/30 flex justify-between text-xs text-stone-200">
              <span className="text-yellow-300 font-black font-mono text-sm">{TOP_EXPLORERS[0].lpPoints} LP</span>
              <span className="font-bold text-emerald-400">{TOP_EXPLORERS[0].badgesCount}/21 Toàn Bộ</span>
            </div>
          </div>
        )}

        {/* Rank 3 */}
        {TOP_EXPLORERS[2] && (
          <div className="order-3 sm:order-3 p-5 rounded-2xl bg-stone-900/90 border border-stone-700/80 flex flex-col items-center text-center space-y-3 relative shadow-lg">
            <div className="absolute top-3 left-3 flex items-center gap-1 text-amber-700 font-bold text-xs">
              <Medal className="w-4 h-4 text-amber-600" />
              <span>HẠNG 3</span>
            </div>
            <div className="relative mt-2">
              <img 
                src={TOP_EXPLORERS[2].avatar} 
                alt={TOP_EXPLORERS[2].name} 
                className="w-16 h-16 rounded-full border-2 border-amber-700 object-cover shadow-md" 
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-700 text-amber-100 font-bold text-xs flex items-center justify-center">
                3
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-100">{TOP_EXPLORERS[2].name}</h3>
              <p className="text-[11px] text-stone-400">{TOP_EXPLORERS[2].title}</p>
            </div>
            <div className="w-full pt-2 border-t border-stone-800 flex justify-between text-xs text-stone-300">
              <span className="text-amber-400 font-bold font-mono">{TOP_EXPLORERS[2].lpPoints} LP</span>
              <span>{TOP_EXPLORERS[2].badgesCount} Huy hiệu</span>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-stone-900/80 p-3 rounded-2xl border border-stone-800">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {['all', 'TP. Hồ Chí Minh', 'Bình Dương', 'Bà Rịa - Vũng Tàu'].map(reg => (
            <button
              key={reg}
              onClick={() => { sound.playClick(); setFilterRegion(reg); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterRegion === reg 
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              {reg === 'all' ? 'Tất cả khu vực' : reg}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên lữ khách..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:border-amber-500/50 outline-none"
          />
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="rounded-2xl bg-stone-900/90 border border-stone-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-950 border-b border-stone-800 text-stone-400 uppercase tracking-wider font-semibold text-[10px]">
              <tr>
                <th className="px-4 py-3 text-center">Thứ Hạng</th>
                <th className="px-4 py-3">Lữ Khách Di Sản</th>
                <th className="px-4 py-3 hidden md:table-cell">Khu Vực</th>
                <th className="px-4 py-3 text-center">Chuỗi Ngày</th>
                <th className="px-4 py-3 text-center">Huy Hiệu</th>
                <th className="px-4 py-3 text-right">Linh Điểm (LP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {filteredList.map((player) => (
                <tr 
                  key={player.id} 
                  className="hover:bg-stone-800/50 transition-colors"
                >
                  <td className="px-4 py-3 text-center">
                    {player.rank === 1 ? (
                      <span className="w-6 h-6 rounded-full bg-amber-400 text-stone-950 font-black text-xs inline-flex items-center justify-center">1</span>
                    ) : player.rank === 2 ? (
                      <span className="w-6 h-6 rounded-full bg-slate-300 text-stone-950 font-bold text-xs inline-flex items-center justify-center">2</span>
                    ) : player.rank === 3 ? (
                      <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold text-xs inline-flex items-center justify-center">3</span>
                    ) : (
                      <span className="text-stone-400 font-mono font-bold">#{player.rank}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={player.avatar} 
                        alt={player.name} 
                        className="w-9 h-9 rounded-full object-cover border border-stone-700 shrink-0" 
                      />
                      <div>
                        <div className="font-bold text-stone-200">{player.name}</div>
                        <div className="text-[10px] text-amber-400/80">{player.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-stone-300">
                    <span className="px-2 py-0.5 rounded-md bg-stone-800 text-[10px]">
                      {player.region}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-orange-400 font-bold font-mono inline-flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-400" />
                      {player.streakDays} ngày
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-stone-200">
                    {player.badgesCount} / 21
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold font-mono text-amber-400 text-sm">
                      {player.lpPoints.toLocaleString()} LP
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
