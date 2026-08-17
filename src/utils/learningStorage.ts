// =========================================================================
// Enhanced Player Learning Memory & Traveler Equipment Storage System
// =========================================================================

export interface QuestStepAttempt {
  stepId: string;
  questionText: string;
  isCorrect: boolean;
  userAnswer: string | number | boolean;
  correctAnswer: string | number | boolean;
  explanation: string;
  attemptsCount: number;
  timestamp: string;
  timeSpentSec: number;
  note?: string;
  starred?: boolean;
}

export interface QuestRecord {
  questId: string;
  locationId: string;
  title: string;
  completedAt?: string;
  isCompleted: boolean;
  totalQuestions: number;
  correctCount: number;
  scorePercent: number;
  earnedLP: number;
  badgeId?: string;
  stepAttempts: Record<string, QuestStepAttempt>;
  timeSpentMinutes: number;
}

export interface EquippedGearItem {
  id: string;
  name: string;
  category: 'headwear' | 'tool' | 'bag' | 'accessory' | 'journal' | 'water';
  icon: string;
  buffName: string;
  buffDescription: string;
  acquiredDate: string;
  isEquipped: boolean;
  bonusLPPercent?: number;
  bonusExpPercent?: number;
  hintSpeedBonus?: boolean;
  filterWrongOptionBonus?: boolean;
  protectStreakBonus?: boolean;
}

export interface LearningDailyStreak {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  todayQuestionsAnswered: number;
  dailyGoal: number; // e.g. 5 questions per day
  streakHistory: string[]; // List of YYYY-MM-DD active
  streakFreezeTokens: number;
}

export interface PlayerLearningMemory {
  userId: string;
  questRecords: Record<string, QuestRecord>;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  overallAccuracy: number;
  totalStudyMinutes: number;
  dailyStreak: LearningDailyStreak;
  equippedGear: Record<string, EquippedGearItem>; // Gear ID -> Gear Item
  studyNotes: Record<string, string>; // stepId -> custom note
  starredQuestions: string[]; // List of stepIds
  lastUpdated: string;
}

const STORAGE_KEY = 'saigon_heritage_learning_memory_v2';
const INVENTORY_KEY = 'saigon_heritage_equipped_gear_v2';

// Default initial gear unlocked for all heritage travelers
const DEFAULT_STARTER_GEAR: Record<string, EquippedGearItem> = {
  rew_gear_compass: {
    id: 'rew_gear_compass',
    name: 'La Bàn Đồng Thau Du Khách Phương Nam',
    category: 'tool',
    icon: 'Compass',
    buffName: 'Định Hướng Tri Thức',
    buffDescription: 'Giảm 50% thời gian chờ mở gợi ý AI và tăng độ nhạy quét AR',
    acquiredDate: new Date().toLocaleDateString('vi-VN'),
    isEquipped: true,
    hintSpeedBonus: true
  },
  rew_gear_scarf: {
    id: 'rew_gear_scarf',
    name: 'Khăn Rằn Nam Bộ Sợi Bông Dệt Thủ Công',
    category: 'accessory',
    icon: 'Sparkles',
    buffName: 'Hồn Cốt Nam Bộ',
    buffDescription: 'Biểu tượng văn hóa phương Nam, tăng +10% EXP cho mỗi nhiệm vụ',
    acquiredDate: new Date().toLocaleDateString('vi-VN'),
    isEquipped: true,
    bonusExpPercent: 10
  }
};

export const getTodayDateString = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getLearningMemory = (): PlayerLearningMemory => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: PlayerLearningMemory = JSON.parse(raw);
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load learning memory:', err);
  }

  const today = getTodayDateString();
  const initialMemory: PlayerLearningMemory = {
    userId: 'user_sg_exp_01',
    questRecords: {},
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    overallAccuracy: 0,
    totalStudyMinutes: 0,
    dailyStreak: {
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: today,
      todayQuestionsAnswered: 0,
      dailyGoal: 5,
      streakHistory: [today],
      streakFreezeTokens: 2
    },
    equippedGear: DEFAULT_STARTER_GEAR,
    studyNotes: {},
    starredQuestions: [],
    lastUpdated: new Date().toISOString()
  };

  saveLearningMemory(initialMemory);
  return initialMemory;
};

export const saveLearningMemory = (memory: PlayerLearningMemory): void => {
  try {
    memory.lastUpdated = new Date().toISOString();
    // Recalculate stats
    let totalAnswered = 0;
    let totalCorrect = 0;
    Object.values(memory.questRecords).forEach(q => {
      Object.values(q.stepAttempts).forEach(step => {
        totalAnswered++;
        if (step.isCorrect) totalCorrect++;
      });
    });
    memory.totalQuestionsAnswered = totalAnswered;
    memory.totalCorrectAnswers = totalCorrect;
    memory.overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  } catch (err) {
    console.error('Failed to save learning memory:', err);
  }
};

// Record an individual question attempt
export const recordQuestionAttempt = (
  questId: string,
  locationId: string,
  questTitle: string,
  stepId: string,
  questionText: string,
  isCorrect: boolean,
  userAnswer: string | number | boolean,
  correctAnswer: string | number | boolean,
  explanation: string,
  timeSpentSec: number = 10
): PlayerLearningMemory => {
  const memory = getLearningMemory();
  const today = getTodayDateString();

  if (!memory.questRecords[questId]) {
    memory.questRecords[questId] = {
      questId,
      locationId,
      title: questTitle,
      isCompleted: false,
      totalQuestions: 20,
      correctCount: 0,
      scorePercent: 0,
      earnedLP: 0,
      stepAttempts: {},
      timeSpentMinutes: 0
    };
  }

  const questRecord = memory.questRecords[questId];
  const prevAttempt = questRecord.stepAttempts[stepId];
  const attemptsCount = prevAttempt ? prevAttempt.attemptsCount + 1 : 1;

  questRecord.stepAttempts[stepId] = {
    stepId,
    questionText,
    isCorrect,
    userAnswer,
    correctAnswer,
    explanation,
    attemptsCount,
    timestamp: new Date().toISOString(),
    timeSpentSec: (prevAttempt?.timeSpentSec || 0) + timeSpentSec,
    note: prevAttempt?.note || memory.studyNotes[stepId] || '',
    starred: prevAttempt?.starred || memory.starredQuestions.includes(stepId)
  };

  // Recalculate quest correctness
  const allAttempts = Object.values(questRecord.stepAttempts);
  questRecord.correctCount = allAttempts.filter(a => a.isCorrect).length;
  questRecord.scorePercent = Math.round((questRecord.correctCount / Math.max(1, allAttempts.length)) * 100);
  questRecord.timeSpentMinutes += Math.round(timeSpentSec / 60);

  // Update Daily Streak
  const streak = memory.dailyStreak;
  if (streak.lastActiveDate === today) {
    streak.todayQuestionsAnswered += 1;
  } else {
    // Check if yesterday or gap
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (streak.lastActiveDate === yesterday) {
      streak.currentStreak += 1;
      streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
    } else {
      // Gap day
      streak.currentStreak = 1;
    }
    streak.lastActiveDate = today;
    streak.todayQuestionsAnswered = 1;
    if (!streak.streakHistory.includes(today)) {
      streak.streakHistory.push(today);
    }
  }

  memory.totalStudyMinutes += Math.max(1, Math.round(timeSpentSec / 60));
  saveLearningMemory(memory);
  return memory;
};

// Record complete quest finish
export const recordQuestFinish = (
  questId: string,
  locationId: string,
  questTitle: string,
  totalQuestions: number,
  correctCount: number,
  earnedLP: number,
  badgeId?: string
): PlayerLearningMemory => {
  const memory = getLearningMemory();
  if (!memory.questRecords[questId]) {
    memory.questRecords[questId] = {
      questId,
      locationId,
      title: questTitle,
      isCompleted: true,
      totalQuestions,
      correctCount,
      scorePercent: Math.round((correctCount / Math.max(1, totalQuestions)) * 100),
      earnedLP,
      badgeId,
      completedAt: new Date().toISOString(),
      stepAttempts: {},
      timeSpentMinutes: 15
    };
  } else {
    const q = memory.questRecords[questId];
    q.isCompleted = true;
    q.completedAt = new Date().toISOString();
    q.totalQuestions = Math.max(totalQuestions, Object.keys(q.stepAttempts).length);
    q.correctCount = correctCount;
    q.scorePercent = Math.round((correctCount / Math.max(1, q.totalQuestions)) * 100);
    q.earnedLP = earnedLP;
    if (badgeId) q.badgeId = badgeId;
  }

  saveLearningMemory(memory);
  return memory;
};

// Get list of wrong questions for study & review
export const getReviewQuestions = (): QuestStepAttempt[] => {
  const memory = getLearningMemory();
  const reviewList: QuestStepAttempt[] = [];

  Object.values(memory.questRecords).forEach(quest => {
    Object.values(quest.stepAttempts).forEach(step => {
      if (!step.isCorrect || step.starred) {
        reviewList.push(step);
      }
    });
  });

  return reviewList.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

// Toggle Star Question
export const toggleStarQuestion = (stepId: string): boolean => {
  const memory = getLearningMemory();
  const idx = memory.starredQuestions.indexOf(stepId);
  let isStarred = false;
  if (idx >= 0) {
    memory.starredQuestions.splice(idx, 1);
    isStarred = false;
  } else {
    memory.starredQuestions.push(stepId);
    isStarred = true;
  }

  // Update in attempts
  Object.values(memory.questRecords).forEach(quest => {
    if (quest.stepAttempts[stepId]) {
      quest.stepAttempts[stepId].starred = isStarred;
    }
  });

  saveLearningMemory(memory);
  return isStarred;
};

// Save custom study note
export const saveStudyNote = (stepId: string, note: string): void => {
  const memory = getLearningMemory();
  memory.studyNotes[stepId] = note;
  Object.values(memory.questRecords).forEach(quest => {
    if (quest.stepAttempts[stepId]) {
      quest.stepAttempts[stepId].note = note;
    }
  });
  saveLearningMemory(memory);
};

// Equip or Unequip Traveler Gear
export const toggleEquipGear = (gearId: string): boolean => {
  const memory = getLearningMemory();
  if (memory.equippedGear[gearId]) {
    memory.equippedGear[gearId].isEquipped = !memory.equippedGear[gearId].isEquipped;
    saveLearningMemory(memory);
    return memory.equippedGear[gearId].isEquipped;
  }
  return false;
};

// Add new gear to player inventory
export const addGearToInventory = (gear: EquippedGearItem): void => {
  const memory = getLearningMemory();
  memory.equippedGear[gear.id] = {
    ...gear,
    isEquipped: true,
    acquiredDate: new Date().toLocaleDateString('vi-VN')
  };
  saveLearningMemory(memory);
};

// Get current active Traveler Buffs
export const getActiveTravelerBuffs = () => {
  const memory = getLearningMemory();
  const equipped = Object.values(memory.equippedGear).filter(g => g.isEquipped);

  return {
    extraLPPercent: equipped.reduce((acc, g) => acc + (g.bonusLPPercent || 0), 0),
    extraExpPercent: equipped.reduce((acc, g) => acc + (g.bonusExpPercent || 0), 0),
    hintSpeedBonus: equipped.some(g => g.hintSpeedBonus),
    filterWrongOptionBonus: equipped.some(g => g.filterWrongOptionBonus),
    protectStreakBonus: equipped.some(g => g.protectStreakBonus),
    equippedCount: equipped.length,
    equippedItems: equipped
  };
};
