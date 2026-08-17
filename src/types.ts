export type Province = 
  | 'TP. Hồ Chí Minh'
  | 'Bình Dương'
  | 'Bà Rịa - Vũng Tàu';

export type District = 
  | 'Quận 1' 
  | 'Quận 3' 
  | 'Quận 5' 
  | 'Quận 4' 
  | 'TP. Thủ Đức' 
  | 'Bình Thạnh'
  | 'Củ Chi'
  | 'Quận 1 / Quận 4'
  | 'Phú Nhuận / Quận 3'
  | 'TP. Thủ Dầu Một (Bình Dương)'
  | 'TP. Mới Bình Dương'
  | 'Huyện Dầu Tiếng (Bình Dương)'
  | 'TP. Vũng Tàu (Bà Rịa - Vũng Tàu)'
  | 'Huyện Côn Đảo (Bà Rịa - Vũng Tàu)'
  | 'Huyện Đất Đỏ (Bà Rịa - Vũng Tàu)';

export type Category = 
  | 'architecture'      // Kiến trúc & Cổ vật
  | 'history'           // Lịch sử Sài Gòn - Nam Bộ
  | 'cuisine'           // Ẩm thực & Hương vị xưa
  | 'culture'           // Phong tục, Tín ngưỡng, Lễ hội & Nghệ thuật
  | 'secret_alley'      // Hẻm phố & Ký ức đô thị
  | 'nature_coastal'    // Di sản biển đảo & Thắng cảnh thiên nhiên
  | 'nature'            // Thiên nhiên & Thắng cảnh
  | 'traditional_art';  // Đờn ca tài tử & Cải lương Nam Bộ

export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';

export type KnowledgeTier = 'basic' | 'intermediate' | 'advanced' | 'master';

export interface Location3D {
  id: string;
  name: string;
  vietnameseName: string;
  title: string;
  province?: Province;
  district: District;
  category: Category;
  x: number; // 0 to 100 on map coordinate
  y: number; // 0 to 100 on map coordinate
  elevation: number; // 3D height
  builtYear: string;
  architect?: string;
  historicalPeriod: string;
  iconName: string;
  color: string;
  coverImage: string;
  thumbnail: string;
  shortDesc: string;
  fullHistory: string;
  architecturalHighlights: string[];
  culturalSignificance: string;
  secretFunFact: string;
  audioAmbientType: 'church_bell' | 'market_bustle' | 'river_wave' | 'traditional_music' | 'street_chime' | 'alley_echo' | 'sea_waves' | 'pottery_kiln' | 'cai_luong';
  poemVerse?: string;
  storyNarration?: string;
  caiLuongChant?: string;
  activeExplorers?: number;
  heatScore?: number; // 0 to 100
  popularityRank?: number;
  trendingTag?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  questIds: string[];
  isUnlocked: boolean;
}

export type PuzzleType = 
  | 'multiple_choice'   // Trắc nghiệm kiến thức
  | 'true_false'         // Đúng hay Sai
  | 'open_ended'         // Tự luận / Trả lời mở
  | 'cipher_text'        // Mật mã số / Chữ cổ
  | 'ordering'           // Sắp xếp thứ tự thời gian/bước làm
  | 'fill_blank';        // Điền từ còn thiếu vào điệu lý/lời ca

export interface QuestStep {
  id: string;
  title: string;
  tier?: KnowledgeTier;
  tierTitle?: string;
  bonusLP?: number;
  storyPrompt: string;
  clueVerse: string; // Thơ lục bát / câu hò / mật ngôn
  puzzleType: PuzzleType;
  puzzleData: {
    question: string;
    options?: string[]; // Cho multiple_choice hoặc true_false
    correctAnswer: string | number | boolean;
    explanation: string;
    keywords?: string[]; // Dùng để chấm tự luận thông minh
    hintLevel1: string;  // Manh mối khẽ khàng
    hintLevel2: string;  // Chỉ điểm lịch sử & tọa độ
    hintLevel3: string;  // Phân tích chuyên sâu & đáp án
  };
}

export interface Badge {
  id: string;
  name: string;
  title: string;
  category: Category;
  rarity: BadgeRarity;
  icon: string;
  color: string;
  bgGradient: string;
  description: string;
  culturalStory: string;
  perk: string;
  unlockedAt?: string;
}

export interface Quest {
  id: string;
  locationId: string;
  title: string;
  subtitle: string;
  category: Category;
  difficulty: 'Dễ' | 'Trung Bình' | 'Trung bình' | 'Khó' | 'Kỳ Công' | 'Huyền Thoại';
  level: number; // 1, 2, 3, 4
  estimatedMinutes: number;
  rewardLP: number;
  badgeId: string;
  loreChapter: string;
  description?: string;
  steps: QuestStep[];
  isCompleted?: boolean;
}

export interface ForumComment {
  id: string;
  authorName: string;
  authorAvatar: string;
  authorTitle: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface ForumPost {
  id: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  authorTitle: string;
  category: 'hints' | 'history' | 'cuisine' | 'general' | 'showcase' | 'culture' | 'music';
  content: string;
  locationTag?: string;
  likes: number;
  isLiked?: boolean;
  commentsCount: number;
  comments: ForumComment[];
  timestamp: string;
  badgeEarned?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'player';
  senderName: string;
  senderAvatar?: string;
  text: string;
  timestamp: string;
  suggestedActions?: string[];
  locationContext?: string;
  hintLevel?: number;
}

export interface RewardItem {
  id: string;
  name: string;
  partner: string;
  category: 'ticket' | 'cuisine' | 'souvenir' | 'honor' | 'daily_gift';
  costLP: number;
  requiredBadgesCount: number;
  requiredBadgeId?: string;
  description: string;
  terms: string;
  expiryDays: number;
  remainingQuota: number;
  image: string;
  redeemedCode?: string;
  isRedeemed?: boolean;
  valueVND?: string; // Giá trị tương đương
}

export interface TravelJournalEntry {
  id: string;
  locationId: string;
  locationName: string;
  province?: Province;
  district?: District;
  thumbnail?: string;
  coverImage?: string;
  visitedDate: string;
  note: string;
  mood: 'wonder' | 'nostalgic' | 'inspired' | 'peaceful' | 'proud' | 'excited';
  tags: string[];
  rating: number; // 1 to 5
  weather?: 'sunny' | 'sunset' | 'rain' | 'breeze' | 'night';
  photoUrl?: string;
  questCompleted?: boolean;
  badgeEarnedName?: string;
  isFavorite?: boolean;
  updatedAt: string;
}

export interface TraditionalSong {
  id: string;
  title: string;
  type: 'cai_luong' | 'don_ca_tai_tu' | 'ly_nam_bo';
  artist: string;
  duration: string;
  description: string;
  audioKeyNote: number; // Tần số gốc để tổng hợp âm thanh
  melodySteps: number[]; // Giai điệu ngũ cung mô phỏng
}

export interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  title: string;
  lpPoints: number;
  badgesCount: number;
  completedCount: number;
  region: string;
}

export interface UserProfile {
  id: string;
  username: string; // Tên đăng nhập
  name: string;
  title: string;
  avatar: string;
  level: number;
  exp: number;
  lpPoints: number;
  badgesUnlocked: string[];
  completedQuests: string[];
  redeemedRewardCodes: { rewardId: string; code: string; date: string; name: string }[];
  joinedDate: string;
  lastLoginDate?: string;
}
