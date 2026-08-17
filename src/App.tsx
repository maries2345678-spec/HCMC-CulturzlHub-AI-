/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserProfile, Location3D, Quest, Badge, RewardItem } from './types';
import { LOCATIONS } from './data/locations';
import { QUESTS } from './data/quests';
import { BADGES } from './data/badges';
import { REWARDS } from './data/rewards';
import { INITIAL_FORUM_POSTS, INITIAL_COMMUNITY_MESSAGES } from './data/forumData';

import { Navbar } from './components/Navbar';
import { Map3DView } from './components/Map3DView';
import { QuestModal } from './components/QuestModal';
import { QuestListView } from './components/QuestListView';
import { BadgeCollection } from './components/BadgeCollection';
import { LeaderboardView } from './components/LeaderboardView';
import { CommunityForum } from './components/CommunityForum';
import { LiveCommunityChat } from './components/LiveCommunityChat';
import { RewardRedemption } from './components/RewardRedemption';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { UserProfileModal } from './components/UserProfileModal';
import { AuthModal } from './components/AuthModal';
import { ARHeritageScannerModal } from './components/ARHeritageScannerModal';
import { TravelJournalModal } from './components/TravelJournalModal';
import { sound } from './utils/audio';

const STORAGE_KEY = 'saigon_heritage_explorer_user_v2';

export default function App() {
  // Navigation & Atmosphere State
  const [activeTab, setActiveTab] = useState<'map' | 'quests' | 'badges' | 'leaderboard' | 'forum' | 'chat' | 'rewards'>('map');
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'sunset' | 'night'>('day');
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // User Profile State (persisted locally)
  const [user, setUser] = useState<UserProfile>(() => {
    const defaultUser: UserProfile = {
      id: 'user_sg_01',
      username: 'lu_khach_01',
      name: 'Lữ Khách Phương Nam',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
      lpPoints: 450, // Starter bonus LP
      level: 2,
      exp: 180,
      title: 'Học Giả Nam Bộ',
      badgesUnlocked: ['badge_ben_thanh'], // Starts with starter badge
      completedQuests: ['quest_ben_thanh_01'],
      redeemedRewardCodes: [],
      joinedDate: '2026'
    };
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultUser,
          ...parsed,
          badgesUnlocked: Array.isArray(parsed?.badgesUnlocked) ? parsed.badgesUnlocked : defaultUser.badgesUnlocked,
          completedQuests: Array.isArray(parsed?.completedQuests) ? parsed.completedQuests : defaultUser.completedQuests,
          lpPoints: typeof parsed?.lpPoints === 'number' ? parsed.lpPoints : defaultUser.lpPoints,
        };
      }
    } catch {}
    return defaultUser;
  });

  // Active Modals & Drawers
  const [selectedLocation, setSelectedLocation] = useState<Location3D | null>(LOCATIONS[0]);
  const [activeQuest, setActiveQuest] = useState<{ quest: Quest; location: Location3D; badge?: Badge } | null>(null);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState<boolean>(false);
  const [aiAssistantPrompt, setAiAssistantPrompt] = useState<string | undefined>(undefined);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isARScannerOpen, setIsARScannerOpen] = useState<boolean>(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState<boolean>(false);
  const [journalTargetLocation, setJournalTargetLocation] = useState<Location3D | null>(null);

  const handleOpenJournal = (loc?: Location3D) => {
    setJournalTargetLocation(loc || selectedLocation || LOCATIONS[0]);
    setIsJournalModalOpen(true);
  };

  // Save user profile state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } catch {}
  }, [user]);

  // Handle starting a quest from location
  const handleStartQuest = (loc: Location3D) => {
    const quest = QUESTS.find(q => q.locationId === loc.id) || QUESTS[0];
    const badge = BADGES.find(b => b.id === quest.badgeId);
    setActiveQuest({ quest, location: loc, badge });
  };

  // Handle quest completion
  const handleCompleteQuest = (questId: string, earnedLP: number, badgeId: string) => {
    setUser(prev => {
      const newBadges = prev.badgesUnlocked.includes(badgeId)
        ? prev.badgesUnlocked
        : [...prev.badgesUnlocked, badgeId];

      const newCompleted = prev.completedQuests.includes(questId)
        ? prev.completedQuests
        : [...prev.completedQuests, questId];

      const newExp = prev.exp + 120;
      const newLevel = Math.floor(newExp / 100) + 1;

      let newTitle = prev.title;
      if (newBadges.length >= 18) newTitle = 'Đại Học Sĩ Đất Gia Định';
      else if (newBadges.length >= 12) newTitle = 'Nhà Giám Định Di Sản';
      else if (newBadges.length >= 6) newTitle = 'Nhà Thám Hiểm Di Sản';
      else if (newBadges.length >= 3) newTitle = 'Học Giả Nam Bộ';

      return {
        ...prev,
        lpPoints: prev.lpPoints + earnedLP,
        exp: newExp,
        level: newLevel,
        title: newTitle,
        badgesUnlocked: newBadges,
        completedQuests: newCompleted
      };
    });
  };

  // Handle redeeming a cultural reward
  const handleRedeemReward = (reward: RewardItem) => {
    if (user.lpPoints < reward.costLP) {
      alert('Bạn không đủ Linh Điểm (LP) để quy đổi phần thưởng này!');
      return;
    }
    if (user.badgesUnlocked.length < reward.requiredBadgesCount) {
      alert(`Bạn cần ít nhất ${reward.requiredBadgesCount} huy hiệu để mở khóa phần thưởng này!`);
      return;
    }

    sound.playSuccess();
    setUser(prev => ({
      ...prev,
      lpPoints: prev.lpPoints - reward.costLP
    }));

    // Post automatic boast to community forum
    fetch('/api/forum/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Vừa đổi thành công: ${reward.name}!`,
        authorName: user.name,
        authorAvatar: user.avatar,
        authorTitle: user.title,
        category: 'general',
        content: `Mình vừa quy đổi thành công phần thưởng "${reward.name}" từ đối tác ${reward.partner} với giá ${reward.costLP} LP. Cảm ơn game khám phá di sản đã mang lại trải nghiệm tuyệt vời! Mọi người cùng cố gắng săn thêm huy hiệu nhé!`,
        locationTag: 'Trung tâm Đổi Thưởng',
      })
    }).catch(() => {});
  };

  // Handle sharing quest milestone to community forum
  const handleShareToForum = (questTitle: string, badgeName: string, locationName: string) => {
    sound.playSuccess();
    // Reward bonus LP for community sharing
    setUser(prev => ({
      ...prev,
      lpPoints: prev.lpPoints + 50
    }));

    fetch('/api/forum/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Vừa giải mã thành công nhiệm vụ: ${questTitle}!`,
        authorName: user.name,
        authorAvatar: user.avatar,
        authorTitle: user.title,
        category: 'hints',
        content: `Vừa xuất sắc vượt qua toàn bộ câu hỏi và thử thách tại ${locationName} và rinh về ${badgeName}! Manh mối thơ cổ ở đây rất thú vị, ai kẹt ở bước nào thì bình luận bên dưới mình và cố vấn Ba Son sẽ hỗ trợ nha!`,
        locationTag: locationName,
        badgeEarned: badgeName
      })
    }).catch(() => {});

    setActiveTab('forum');
  };

  return (
    <div className="min-h-screen bg-stone-950 font-['Plus_Jakarta_Sans',sans-serif] text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950">
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        timeOfDay={timeOfDay}
        setTimeOfDay={setTimeOfDay}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        onOpenProfile={() => setIsAuthModalOpen(true)}
        onOpenAI={() => {
          setAiAssistantPrompt(undefined);
          setIsAIAssistantOpen(true);
        }}
        onOpenAR={() => setIsARScannerOpen(true)}
        onOpenJournal={() => handleOpenJournal()}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 relative flex flex-col min-h-0 h-[calc(100vh-64px)] overflow-hidden">
        {activeTab === 'map' && (
          <Map3DView
            locations={LOCATIONS}
            selectedLocation={selectedLocation}
            onSelectLocation={(loc) => setSelectedLocation(loc)}
            onStartQuest={handleStartQuest}
            completedQuests={user.completedQuests}
            timeOfDay={timeOfDay}
            onOpenAI={(prompt) => {
              setAiAssistantPrompt(prompt);
              setIsAIAssistantOpen(true);
            }}
            onOpenAR={() => setIsARScannerOpen(true)}
            onOpenJournal={handleOpenJournal}
          />
        )}

        {activeTab === 'quests' && (
          <QuestListView
            quests={QUESTS}
            locations={LOCATIONS}
            badges={BADGES}
            completedQuests={user.completedQuests}
            onStartQuest={handleStartQuest}
          />
        )}

        {activeTab === 'badges' && (
          <BadgeCollection
            badges={BADGES}
            unlockedBadgeIds={user.badgesUnlocked}
            onSelectBadgeQuest={(badge) => {
              const loc = LOCATIONS.find(l => l.id === badge.locationId);
              if (loc) {
                handleStartQuest(loc);
              }
            }}
            onShareBadge={(badge) => {
              setActiveTab('forum');
            }}
          />
        )}

        {activeTab === 'leaderboard' && (
          <LeaderboardView currentUser={user} />
        )}

        {activeTab === 'forum' && (
          <CommunityForum
            user={user}
            currentUser={user}
            initialPosts={INITIAL_FORUM_POSTS}
            locations={LOCATIONS}
            onOpenAI={(prompt) => {
              setAiAssistantPrompt(prompt);
              setIsAIAssistantOpen(true);
            }}
          />
        )}

        {activeTab === 'chat' && (
          <LiveCommunityChat
            user={user}
            currentUser={user}
            initialMessages={INITIAL_COMMUNITY_MESSAGES}
          />
        )}

        {activeTab === 'rewards' && (
          <RewardRedemption
            user={user}
            rewards={REWARDS}
            userLP={user.lpPoints}
            badgesCount={user.badgesUnlocked.length}
            onRedeemReward={handleRedeemReward}
          />
        )}
      </main>

      {/* Interactive Quest Modal */}
      {activeQuest && (
        <QuestModal
          quest={activeQuest.quest}
          location={activeQuest.location}
          badge={activeQuest.badge}
          onClose={() => setActiveQuest(null)}
          onCompleteQuest={handleCompleteQuest}
          onShareToForum={handleShareToForum}
          onOpenJournal={handleOpenJournal}
        />
      )}

      {/* AI Heritage Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        currentLocation={selectedLocation}
        initialPrompt={aiAssistantPrompt}
      />

      {/* User Auth & Profile Modal */}
      <AuthModal
        currentUser={user}
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(updated) => setUser(updated)}
        onLogout={() => {
          localStorage.removeItem(STORAGE_KEY);
          window.location.reload();
        }}
      />

      {/* AR Heritage Camera Scanner Modal */}
      {isARScannerOpen && (
        <ARHeritageScannerModal
          locations={LOCATIONS}
          onClose={() => setIsARScannerOpen(false)}
          onAwardLP={(points, landmarkName) => {
            sound.playSuccess();
            setUser(prev => ({
              ...prev,
              lpPoints: prev.lpPoints + points,
              exp: prev.exp + 60
            }));
          }}
          onSelectLocation={(loc) => {
            setSelectedLocation(loc);
            setActiveTab('map');
          }}
          onSelectAndTeleport={(loc) => {
            setSelectedLocation(loc);
            setActiveTab('map');
          }}
          onStartQuest={(loc) => {
            handleStartQuest(loc);
          }}
        />
      )}

      {/* 📖 Travel Journal Modal (Nhật Ký Lữ Hành Phương Nam) */}
      {isJournalModalOpen && (
        <TravelJournalModal
          locations={LOCATIONS}
          initialLocation={journalTargetLocation}
          completedQuestLocationIds={
            LOCATIONS.filter(loc => loc.questIds.some(qId => user.completedQuests.includes(qId))).map(l => l.id)
          }
          onClose={() => setIsJournalModalOpen(false)}
          onSelectAndTeleport={(loc) => {
            setSelectedLocation(loc);
            setActiveTab('map');
          }}
          onShareToForum={(title, content, locationName) => {
            setActiveTab('forum');
            sound.playSuccess();
          }}
          onAwardLP={(pts, reason) => {
            sound.playSuccess();
            setUser(prev => ({
              ...prev,
              lpPoints: prev.lpPoints + pts,
              exp: prev.exp + 40
            }));
          }}
        />
      )}
    </div>
  );
}
