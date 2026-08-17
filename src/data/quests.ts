import { Quest, QuestStep, KnowledgeTier } from '../types';
import { QUESTS_PART_1 } from './quests/chapter1_to_5';
import { QUESTS_PART_2 } from './quests/chapter6_to_10';
import { QUESTS_PART_3 } from './quests/chapter11_to_15';
import { QUESTS_PART_4 } from './quests/chapter16_to_21';
import { EXTRA_QUEST_STEPS } from './questQuestionsBank';
import { LOCATIONS } from './locations';

// Generate tailored deep-learning questions based on location metadata if a quest has fewer than 20 questions
function generateSupplementaryQuestions(quest: Quest, neededCount: number): QuestStep[] {
  const loc = LOCATIONS.find(l => l.id === quest.locationId);
  const locName = loc?.vietnameseName || loc?.name || quest.title;
  const startIdx = (quest.steps || []).length + 1;
  const generated: QuestStep[] = [];

  const questionTemplates = [
    {
      title: `Vật liệu và kỹ nghệ xây dựng đặc trưng của ${locName}`,
      tier: 'intermediate' as KnowledgeTier,
      tierTitle: 'Kỹ Thuật Xây Dựng',
      bonusLP: 25,
      storyPrompt: `Tìm hiểu về nghệ thuật kiến trúc và vật liệu xây dựng tại ${locName}:`,
      clueVerse: `Bàn tay thợ khéo dựng nên,\nTrăm năm vững chãi bia truyền ngàn thu.`,
      puzzleType: 'multiple_choice' as const,
      puzzleData: {
        question: `Đặc điểm kiến trúc và kỹ thuật thi công nổi bật tại ${locName} là gì?`,
        options: [
          loc?.architecturalHighlights?.[0] || `Sự kết hợp tinh tế giữa phong cách kiến trúc bản địa và nghệ thuật chạm khắc truyền thống`,
          `Xây dựng hoàn toàn bằng kính hiện đại công nghiệp`,
          `Mô phỏng kiến trúc Bắc Âu mùa đông`,
          `Kiến trúc bê tông đúc sẵn không hoa văn`
        ],
        correctAnswer: loc?.architecturalHighlights?.[0] || `Sự kết hợp tinh tế giữa phong cách kiến trúc bản địa và nghệ thuật chạm khắc truyền thống`,
        explanation: `Công trình mang giá trị kiến trúc nổi bật: ${loc?.architecturalHighlights?.join('; ') || loc?.shortDesc}`,
        hintLevel1: 'Quan sát các đường nét hoa văn và vật liệu chủ đạo.',
        hintLevel2: 'Kiến trúc mang bản sắc văn hóa đặc trưng phương Nam.',
        hintLevel3: `Chọn: ${loc?.architecturalHighlights?.[0] || 'Sự kết hợp tinh tế...'}`
      }
    },
    {
      title: `Ý nghĩa văn hóa và tâm linh của ${locName}`,
      tier: 'advanced' as KnowledgeTier,
      tierTitle: 'Giá Trị Văn Hóa',
      bonusLP: 30,
      storyPrompt: `Khám phá vai trò văn hóa và đời sống tinh thần của ${locName} trong cộng đồng:`,
      clueVerse: `Hồn thiêng đất Việt ngàn đời,\nNơi gửi ước vọng rạng ngời mai sau.`,
      puzzleType: 'true_false' as const,
      puzzleData: {
        question: `Đúng hay Sai: ${locName} được công nhận là di tích có giá trị văn hóa lịch sử to lớn, gắn liền với tiến trình hình thành và phát triển của vùng đất Nam Bộ (${loc?.culturalSignificance || loc?.historicalPeriod})?`,
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: `Chính xác! ${loc?.culturalSignificance || 'Công trình là biểu tượng văn hóa tiêu biểu, lưu giữ ký ức lịch sử vô giá.'}`,
        hintLevel1: 'Di tích lịch sử văn hóa cấp Quốc gia hoặc Tỉnh.',
        hintLevel2: 'Gắn liền với lịch sử Nam Bộ.',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    },
    {
      title: `Bí ẩn và giai thoại thú vị (Secret Fun Fact)`,
      tier: 'advanced' as KnowledgeTier,
      tierTitle: 'Bí Mật Di Tích',
      bonusLP: 35,
      storyPrompt: `Giải mã điều kỳ thú ít người biết về ${locName}:`,
      clueVerse: 'Bí mật lưu dấu ngàn năm,\nLữ khách tri thức ghé thăm tỏ tường.',
      puzzleType: 'multiple_choice' as const,
      puzzleData: {
        question: `Điều kỳ thú hoặc giai thoại đặc biệt nào gắn liền với ${locName}?`,
        options: [
          loc?.secretFunFact || `Công trình lưu giữ những bảo vật và dấu ấn kiến trúc độc nhất vô nhị`,
          `Chưa từng đón du khách tham quan`,
          `Được di dời từ miền Bắc vào năm 2000`,
          `Xây dựng trên đỉnh núi tuyết`
        ],
        correctAnswer: loc?.secretFunFact || `Công trình lưu giữ những bảo vật và dấu ấn kiến trúc độc nhất vô nhị`,
        explanation: `Bí mật thú vị: ${loc?.secretFunFact || loc?.culturalSignificance}`,
        hintLevel1: 'Giai thoại truyền miệng độc đáo.',
        hintLevel2: 'Xem thông tin bảo tồn và câu chuyện lịch sử.',
        hintLevel3: `Chọn: ${loc?.secretFunFact || 'Công trình lưu giữ...'}`
      }
    },
    {
      title: `Niên đại lịch sử và bối cảnh thành lập`,
      tier: 'intermediate' as KnowledgeTier,
      tierTitle: 'Niên Biểu Lịch Sử',
      bonusLP: 25,
      storyPrompt: `Xác định mốc thời gian hình thành và phát triển của ${locName}:`,
      clueVerse: 'Thời gian gõ nhịp ngàn thu,\nDấu xưa còn đó mịt mù khói sương.',
      puzzleType: 'multiple_choice' as const,
      puzzleData: {
        question: `${locName} được khởi dựng hoặc gắn liền với giai đoạn lịch sử nào?`,
        options: [
          `Giai đoạn ${loc?.builtYear || 'thế kỷ 19'} (${loc?.historicalPeriod || 'Thời kỳ phát triển Nam Bộ'})`,
          `Năm 2025 thời đại AI`,
          `Thời kỳ đồ đá cũ`,
          `Thời kỳ La Mã cổ đại`
        ],
        correctAnswer: `Giai đoạn ${loc?.builtYear || 'thế kỷ 19'} (${loc?.historicalPeriod || 'Thời kỳ phát triển Nam Bộ'})`,
        explanation: `Công trình được xây dựng vào giai đoạn ${loc?.builtYear || 'lịch sử hào hùng'}, phản ánh bối cảnh ${loc?.historicalPeriod || 'vùng đất phương Nam'}.`,
        hintLevel1: 'Niên đại khởi dựng công trình.',
        hintLevel2: `Năm ${loc?.builtYear || 'lịch sử'}.`,
        hintLevel3: `Chọn Giai đoạn ${loc?.builtYear || 'thế kỷ 19'}...`
      }
    },
    {
      title: `Bảo tồn di sản và chuyển đổi số thời đại 2026`,
      tier: 'master' as KnowledgeTier,
      tierTitle: 'Đại Sư Bảo Tồn',
      bonusLP: 50,
      storyPrompt: `Sứ mệnh gìn giữ và lan tỏa giá trị ${locName} cho các thế hệ tương lai:`,
      clueVerse: 'Nối dòng di sản hôm nay,\nCho đời sau mãi dựng xây cơ đồ.',
      puzzleType: 'multiple_choice' as const,
      puzzleData: {
        question: `Giải pháp bảo tồn bền vững và số hóa ${locName} trong kỷ nguyên hiện đại bao gồm:`,
        options: [
          'Số hóa 3D/AR, bảo tồn nguyên trạng cấu trúc kiến trúc gốc và giáo dục di sản cho thế hệ trẻ',
          'Đập bỏ xây mới hoàn toàn bằng chung cư',
          'Đóng cửa vĩnh viễn không cho ai vào',
          'Bán đấu giá toàn bộ cổ vật'
        ],
        correctAnswer: 'Số hóa 3D/AR, bảo tồn nguyên trạng cấu trúc kiến trúc gốc và giáo dục di sản cho thế hệ trẻ',
        explanation: 'Kết hợp hài hòa giữa bảo tồn nguyên trạng di sản vật thể và công nghệ thực tế ảo 3D/AR giúp lan tỏa tình yêu di sản cho hàng triệu bạn trẻ trong và ngoài nước.',
        hintLevel1: 'Ứng dụng công nghệ số hóa và bảo tồn nguyên gốc.',
        hintLevel2: 'Số hóa 3D/AR và giáo dục di sản.',
        hintLevel3: 'Chọn Số hóa 3D/AR, bảo tồn nguyên trạng...'
      }
    },
    {
      title: `Vị trí địa lý và không gian cảnh quan đô thị`,
      tier: 'intermediate' as KnowledgeTier,
      tierTitle: 'Địa Lý Di Sản',
      bonusLP: 20,
      storyPrompt: `Tọa độ và không gian sinh thái bao quanh ${locName}:`,
      clueVerse: 'Non xanh nước biếc một màu,\nĐất lành chim đậu trước sau nghĩa tình.',
      puzzleType: 'multiple_choice' as const,
      puzzleData: {
        question: `${locName} tọa lạc tại khu vực địa lý nào?`,
        options: [
          `${loc?.district || 'Trung tâm'}, ${loc?.province || 'TP. Hồ Chí Minh'}`,
          'Thủ đô Paris nước Pháp',
          'Vịnh Tokyo Nhật Bản',
          'Sa mạc Sahara'
        ],
        correctAnswer: `${loc?.district || 'Trung tâm'}, ${loc?.province || 'TP. Hồ Chí Minh'}`,
        explanation: `Địa danh nằm tại ${loc?.district}, thuộc tỉnh/thành phố ${loc?.province}.`,
        hintLevel1: 'Địa bàn hành chính của di tích.',
        hintLevel2: `${loc?.district}, ${loc?.province}.`,
        hintLevel3: `Chọn ${loc?.district || 'Trung tâm'}, ${loc?.province || 'TP. Hồ Chí Minh'}.`
      }
    },
    {
      title: `Âm vang không gian và giai điệu di sản`,
      tier: 'advanced' as KnowledgeTier,
      tierTitle: 'Thính Giác & Âm Thanh',
      bonusLP: 30,
      storyPrompt: `Âm thanh đặc trưng gắn liền với không gian ${locName} là gì?`,
      clueVerse: 'Tiếng chuông tiếng sóng tiếng đờn,\nNghe như tiếng gọi cội nguồn thiêng liêng.',
      puzzleType: 'true_false' as const,
      puzzleData: {
        question: `Đúng hay Sai: Không gian di sản ${locName} gắn liền với âm thanh đặc trưng ${loc?.audioAmbientType || 'truyền thống'}, tạo nên hồn cốt riêng biệt cho địa danh?`,
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: `Chính xác! Âm thanh đặc trưng ${loc?.audioAmbientType} hòa cùng cảnh quan tạo nên trải nghiệm văn hóa đa giác quan chân thực.`,
        hintLevel1: 'Môi trường âm thanh đặc trưng của di tích.',
        hintLevel2: 'Âm thanh tự nhiên / văn hóa bản địa.',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    }
  ];

  for (let i = 0; i < neededCount; i++) {
    const tmpl = questionTemplates[i % questionTemplates.length];
    const stepNum = startIdx + i;
    generated.push({
      id: `${quest.id}_gen_step_${stepNum}`,
      title: `${tmpl.title} (Câu ${stepNum})`,
      tier: tmpl.tier,
      tierTitle: tmpl.tierTitle,
      bonusLP: tmpl.bonusLP,
      storyPrompt: tmpl.storyPrompt,
      clueVerse: tmpl.clueVerse,
      puzzleType: tmpl.puzzleType,
      puzzleData: {
        ...tmpl.puzzleData,
        question: tmpl.puzzleData.question
      }
    });
  }

  return generated;
}

// Ensure every single quest in the application has AT LEAST 20 comprehensive questions
const RAW_QUESTS: Quest[] = [
  ...QUESTS_PART_1,
  ...QUESTS_PART_2,
  ...QUESTS_PART_3,
  ...QUESTS_PART_4
];

export const QUESTS: Quest[] = RAW_QUESTS.map(quest => {
  let existingSteps = [...(quest.steps || [])];

  // 1. Add extra handmade questions if in bank
  if (EXTRA_QUEST_STEPS[quest.id]) {
    const extra = EXTRA_QUEST_STEPS[quest.id];
    // Add steps not already included
    extra.forEach(exStep => {
      if (!existingSteps.some(s => s.id === exStep.id)) {
        existingSteps.push(exStep);
      }
    });
  }

  // 2. Guarantee MINIMUM 20 questions for every single quest!
  const MIN_QUESTIONS = 20;
  if (existingSteps.length < MIN_QUESTIONS) {
    const needed = MIN_QUESTIONS - existingSteps.length;
    const supp = generateSupplementaryQuestions(quest, needed);
    existingSteps = [...existingSteps, ...supp];
  }

  // Enforce proper Tier classification for all 20+ steps
  const enrichedSteps = existingSteps.map((step, idx) => {
    let tier: KnowledgeTier = step.tier || 'basic';
    let tierTitle = step.tierTitle || 'Cơ Bản (Nhận Biết)';
    const ratio = idx / Math.max(1, existingSteps.length - 1);

    if (ratio < 0.25) {
      tier = 'basic';
      tierTitle = 'Tier 1: Nhập Môn Nhận Biết';
    } else if (ratio < 0.55) {
      tier = 'intermediate';
      tierTitle = 'Tier 2: Thông Hiểu & Kết Cấu';
    } else if (ratio < 0.85) {
      tier = 'advanced';
      tierTitle = 'Tier 3: Vận Dụng & Sự Kiện';
    } else {
      tier = 'master';
      tierTitle = 'Tier 4: Đại Sư Di Sản Phương Nam';
    }

    return {
      ...step,
      tier,
      tierTitle
    };
  });

  return {
    ...quest,
    steps: enrichedSteps,
    rewardLP: Math.max(quest.rewardLP, 400),
    estimatedMinutes: Math.max(quest.estimatedMinutes || 20, 25)
  };
});

export default QUESTS;
