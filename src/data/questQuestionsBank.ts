import { QuestStep, KnowledgeTier } from '../types';

// Additional high-quality educational quest steps for all 21 heritage locations
// to guarantee every quest has 20+ comprehensive questions
export const EXTRA_QUEST_STEPS: Record<string, QuestStep[]> = {
  // 1. Bến Nhà Rồng
  quest_ben_nha_rong: [
    {
      id: 'bnr_step_16',
      title: 'Hành trình 30 năm bôn ba qua bao nhiêu châu lục?',
      tier: 'advanced',
      tierTitle: 'Vận Dụng Lịch Sử',
      bonusLP: 30,
      storyPrompt: 'Người thanh niên Nguyễn Tất Thành đã đi qua bao nhiêu châu lục trong hành trình cứu nước?',
      clueVerse: 'Bốn biển năm châu bước dặm trường,\nTìm chân lý sáng rạng quê hương.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Trong 30 năm bôn ba (1911 - 1941), Bác Hồ đã đặt chân tới khoảng bao nhiêu quốc gia và qua các châu lục nào?',
        options: [
          'Gần 30 quốc gia thuộc 4 châu lục (Châu Á, Châu Âu, Châu Phi, Châu Mỹ)',
          'Chỉ 3 quốc gia thuộc Châu Á',
          '5 quốc gia Đông Nam Á',
          'Chỉ 2 quốc gia Pháp và Nga'
        ],
        correctAnswer: 'Gần 30 quốc gia thuộc 4 châu lục (Châu Á, Châu Âu, Châu Phi, Châu Mỹ)',
        explanation: 'Bác Hồ đã đi qua gần 30 quốc gia tại 4 châu lục (Á, Âu, Phi, Mỹ), làm nhiều nghề lao động cực nhọc để thấu hiểu nỗi khổ của giai cấp cần lao.',
        hintLevel1: 'Hành trình toàn cầu qua 4 châu lục.',
        hintLevel2: 'Gần 30 quốc gia.',
        hintLevel3: 'Chọn Gần 30 quốc gia thuộc 4 châu lục...'
      }
    },
    {
      id: 'bnr_step_17',
      title: 'Tác phẩm Bản Án Chế Độ Thực Dân Pháp',
      tier: 'advanced',
      tierTitle: 'Tác Phẩm Bất Hủ',
      bonusLP: 35,
      storyPrompt: 'Tác phẩm lý luận nổi tiếng viết bằng tiếng Pháp của Nguyễn Ái Quốc xuất bản năm 1925 tại Paris là gì?',
      clueVerse: 'Bản án đanh thép vạch tội thù,\nThức tỉnh cần lao khỏi ngục tù.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tên tác phẩm xuất bản năm 1925 tại Paris của Nguyễn Ái Quốc vạch trần tội ác thực dân là:',
        options: [
          'Bản án chế độ thực dân Pháp (Le Procès de la colonisation française)',
          'Đường Kách Mệnh',
          'Nhật ký trong tù',
          'Tuyên ngôn Độc lập'
        ],
        correctAnswer: 'Bản án chế độ thực dân Pháp (Le Procès de la colonisation française)',
        explanation: 'Tác phẩm "Bản án chế độ thực dân Pháp" xuất bản năm 1925 là đòn tấn công trực diện vào chủ nghĩa thực dân, kêu gọi các dân tộc thuộc địa đoàn kết tự giải phóng.',
        hintLevel1: 'Tác phẩm tiếng Pháp Le Procès de la colonisation française.',
        hintLevel2: 'Bản án chế độ thực dân Pháp.',
        hintLevel3: 'Chọn Bản án chế độ thực dân Pháp.'
      }
    },
    {
      id: 'bnr_step_18',
      title: 'Cửa biển Cần Giờ nơi con tàu rời sông Sài Gòn',
      tier: 'intermediate',
      tierTitle: 'Địa Lý Lịch Sử',
      bonusLP: 25,
      storyPrompt: 'Từ Bến Nhà Rồng, con tàu Amiral Latouche-Tréville xuôi dòng sông Sài Gòn qua cửa biển nào để ra Biển Đông?',
      clueVerse: 'Xuôi dòng sông lớn hướng trời đông,\nCửa biển Cần Giờ ngút ngát thông.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Con tàu buôn rời Sài Gòn qua cửa biển nào hướng ra Biển Đông?',
        options: ['Cửa biển Cần Giờ (vịnh Gành Rái)', 'Cửa Định An', 'Cửa Ba Lạt', 'Cửa Soài Rạp'],
        correctAnswer: 'Cửa biển Cần Giờ (vịnh Gành Rái)',
        explanation: 'Con tàu xuôi dòng sông Sài Gòn và sông Nhà Bè, qua vịnh Gành Rái - Cần Giờ rồi chính thức tiến ra hải phận quốc tế.',
        hintLevel1: 'Khu vực rừng ngập mặn Cần Giờ.',
        hintLevel2: 'Cửa biển Cần Giờ.',
        hintLevel3: 'Chọn Cửa biển Cần Giờ (vịnh Gành Rái).'
      }
    },
    {
      id: 'bnr_step_19',
      title: 'Công trình kiến trúc bảo tàng Hồ Chí Minh hiện tại',
      tier: 'master',
      tierTitle: 'Đại Sư Di Sản',
      bonusLP: 40,
      storyPrompt: 'Hiện nay, Bến Nhà Rồng là chi nhánh của bảo tàng nào?',
      clueVerse: 'Bảo tàng Bác Hồ đất phương Nam,\nDi sản thiêng liêng rạng muôn vàn.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tên chính thức hiện nay của di tích Bến Nhà Rồng là gì?',
        options: [
          'Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh',
          'Bảo tàng Lịch sử Quốc gia',
          'Bảo tàng Mỹ thuật TP.HCM',
          'Bảo tàng Chứng tích Chiến tranh'
        ],
        correctAnswer: 'Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh',
        explanation: 'Năm 1979, tòa nhà chính thức trở thành Khu lưu niệm Chủ tịch Hồ Chí Minh, và sau này là Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh.',
        hintLevel1: 'Bảo tàng mang tên Bác Hồ chi nhánh miền Nam.',
        hintLevel2: 'Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh.',
        hintLevel3: 'Chọn Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh.'
      }
    },
    {
      id: 'bnr_step_20',
      title: 'Lời dặn thiêng liêng và ý chí cứu nước',
      tier: 'master',
      tierTitle: 'Đại Sư Di Sản',
      bonusLP: 50,
      storyPrompt: 'Trước khi lên đường, khi người bạn hỏi "Lấy tiền đâu mà đi?", người thanh niên Nguyễn Tất Thành đã trả lời bằng hành động gì?',
      clueVerse: 'Bàn tay lao động vượt phong ba,\nÝ chí quật cường rạng nước nhà.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Nguyễn Tất Thành đã giơ hai bàn tay ra và nói điều gì với người bạn Lê?',
        options: [
          '"Tiền đây chứ đâu! Chúng ta sẽ làm bất cứ việc gì để sống và để đi."',
          '"Tôi sẽ vay tiền chính phủ."',
          '"Chúng ta sẽ tìm người giàu tài trợ."',
          '"Tôi sẽ chờ có đủ tiền mới đi."'
        ],
        correctAnswer: '"Tiền đây chứ đâu! Chúng ta sẽ làm bất cứ việc gì để sống và để đi."',
        explanation: 'Câu nói bất hủ thể hiện tinh thần tự lực cánh sinh, ý chí sắt đá và niềm tin mãnh liệt vào sức lao động của người thanh niên yêu nước 21 tuổi.',
        hintLevel1: 'Hai bàn tay lao động chân chính.',
        hintLevel2: '"Tiền đây chứ đâu!"',
        hintLevel3: 'Chọn câu nói về hai bàn tay lao động.'
      }
    }
  ],

  // 2. Dinh Độc Lập
  quest_dinh_doc_lap: [
    {
      id: 'ddl_step_16',
      title: 'Bức tranh sơn mài Bình Ngô Đại Cáo trong Dinh',
      tier: 'advanced',
      tierTitle: 'Kiệt Tác Nghệ Thuật',
      bonusLP: 35,
      storyPrompt: 'Tại Phòng Trình Quốc Thư của Dinh Độc Lập, bức tranh sơn mài khổ lớn nổi tiếng khắc họa tác phẩm văn học nào?',
      clueVerse: 'Sơn mài lấp lánh nét anh hào,\nBình Ngô Đại Cáo dạ xôn xao.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Bức tranh sơn mài ghép 40 tấm tại Phòng Trình Quốc Thư do họa sĩ Nguyễn Văn Minh sáng tác minh họa áng thiên cổ hùng văn nào?',
        options: ['Bình Ngô Đại Cáo (Nguyễn Trãi)', 'Hịch Tướng Sĩ (Trần Hưng Đạo)', 'Nam Quốc Sơn Hà (Lý Thường Kiệt)', 'Truyện Kiều (Nguyễn Du)'],
        correctAnswer: 'Bình Ngô Đại Cáo (Nguyễn Trãi)',
        explanation: 'Bức tranh sơn mài tuyệt tác gồm 40 tấm ghép lại, miêu tả cảnh thái bình thịnh trị sau chiến thắng chống giặc Minh theo áng văn Bình Ngô Đại Cáo.',
        hintLevel1: 'Tác phẩm văn học bất hủ của Nguyễn Trãi.',
        hintLevel2: 'Bình Ngô Đại Cáo.',
        hintLevel3: 'Chọn Bình Ngô Đại Cáo (Nguyễn Trãi).'
      }
    },
    {
      id: 'ddl_step_17',
      title: 'Khuôn viên cây xanh thế kỷ bao quanh Dinh',
      tier: 'intermediate',
      tierTitle: 'Cảnh Quan Di Sản',
      bonusLP: 25,
      storyPrompt: 'Khuôn viên Dinh Độc Lập rộng bao nhiêu hecta và có đặc điểm sinh thái gì đặc biệt?',
      clueVerse: 'Mười hai héc-ta rợp bóng me,\nRừng cây cổ thụ chở che Dinh.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Diện tích khuôn viên công viên bao quanh Dinh Độc Lập rộng khoảng bao nhiêu?',
        options: ['12 hecta với hàng trăm cây cổ thụ quý hiếm', '2 hecta', '30 hecta', '50 hecta'],
        correctAnswer: '12 hecta với hàng trăm cây cổ thụ quý hiếm',
        explanation: 'Khuôn viên Dinh rộng 12 hecta với thảm cỏ xanh mướt và những cây sao đen, dầu rái cổ thụ hơn 100 năm tuổi tạo nên lá phổi xanh giữa trung tâm TP.HCM.',
        hintLevel1: 'Rộng 12 hecta.',
        hintLevel2: '12 ha với cây cổ thụ.',
        hintLevel3: 'Chọn 12 hecta với hàng trăm cây cổ thụ quý hiếm.'
      }
    },
    {
      id: 'ddl_step_18',
      title: 'Hệ thống hầm ngầm kiên cố dưới lòng Dinh',
      tier: 'advanced',
      tierTitle: 'Kết Cấu Quân Sự',
      bonusLP: 35,
      storyPrompt: 'Hệ thống hầm ngầm ở tầng hầm Dinh Độc Lập được bọc bằng chất liệu gì để chống bom phá?',
      clueVerse: 'Tường dày thép đúc bê tông cốt,\nChống bom đạn giặc dưới lòng sâu.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tường hầm ngầm của Dinh Độc Lập được đúc bằng gì để chịu được bom hạng nặng 500kg?',
        options: [
          'Bê tông cốt thép đặc biệt dày 1m và bọc các lớp thép tôi chống xuyên phá',
          'Tường gạch vôi mỏng',
          'Vách gỗ ép chống ẩm',
          'Đá ong tự nhiên'
        ],
        correctAnswer: 'Bê tông cốt thép đặc biệt dày 1m và bọc các lớp thép tôi chống xuyên phá',
        explanation: 'Hầm ngầm gồm phòng tổng đài, trung tâm tác chiến với tường bê tông cốt thép dày 1m bọc thép chịu lực, trang bị hệ thống lọc khí độc và máy phát điện độc lập.',
        hintLevel1: 'Bê tông cốt thép dày 1 mét bọc thép.',
        hintLevel2: 'Bê tông cốt thép đặc biệt.',
        hintLevel3: 'Chọn Bê tông cốt thép đặc biệt dày 1m...'
      }
    },
    {
      id: 'ddl_step_19',
      title: 'Thời khắc lịch sử 11 giờ 30 phút ngày 30/4/1975',
      tier: 'master',
      tierTitle: 'Mốc Son Đại Thắng',
      bonusLP: 45,
      storyPrompt: 'Chiếc xe tăng đầu tiên húc đổ cổng chính Dinh Độc Lập mang số hiệu bao nhiêu?',
      clueVerse: 'Ba chín mươi húc đổ cổng rào,\nCờ bay đỉnh nóc tự hào non sông.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Hai chiếc xe tăng huyền thoại đầu tiên tiến vào cổng Dinh Độc Lập trưa ngày 30/4/1975 mang số hiệu nào?',
        options: ['Xe tăng 390 (húc đổ cổng chính) và Xe tăng 843 (húc cổng phụ)', 'Xe tăng 555 và 999', 'Xe tăng 100 và 200', 'Xe tăng 777 và 888'],
        correctAnswer: 'Xe tăng 390 (húc đổ cổng chính) và Xe tăng 843 (húc cổng phụ)',
        explanation: 'Xe tăng mang số hiệu 390 do Trung úy Vũ Đăng Toàn chỉ huy đã húc đổ cổng chính, ngay sau chiếc 843 của Đại đội trưởng Bùi Quang Thận húc cổng phụ.',
        hintLevel1: 'Số hiệu 390 và 843.',
        hintLevel2: 'Xe tăng 390 và 843.',
        hintLevel3: 'Chọn Xe tăng 390 và Xe tăng 843.'
      }
    },
    {
      id: 'ddl_step_20',
      title: 'Triết lý chữ CÁT (吉) trong kiến trúc mặt tiền',
      tier: 'master',
      tierTitle: 'Đại Sư Kiến Trúc',
      bonusLP: 50,
      storyPrompt: 'Ý nghĩa chữ Cát (吉) mà KTS Ngô Viết Thụ gởi gắm vào mặt bằng tổng thể Dinh là gì?',
      clueVerse: 'Chữ Cát tốt lành gửi non sông,\nCầu cho quốc thái thỏa ước mong.',
      puzzleType: 'true_false',
      puzzleData: {
        question: 'Đúng hay Sai: Toàn bộ mặt bằng Dinh Độc Lập được tạo hình theo chữ CÁT (吉), mang ý nghĩa cầu chúc sự tốt lành, may mắn và thịnh vượng cho đất nước?',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: 'Chính xác! Triết lý kiến trúc phương Đông của KTS Ngô Viết Thụ sắp xếp các khối nhà hình chữ Cát (吉) – tượng trưng cho sự cát tường, an lành.',
        hintLevel1: 'Chữ Hán mang ý nghĩa may mắn, tốt lành.',
        hintLevel2: 'Chữ Cát (吉).',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    }
  ],

  // 3. Chợ Bến Thành
  quest_cho_ben_thanh: [
    {
      id: 'cbt_step_16',
      title: 'Bộ phù điêu gốm Biên Hòa 12 tấm tại 4 cửa',
      tier: 'advanced',
      tierTitle: 'Nghệ Thuật Gốm Di Sản',
      bonusLP: 35,
      storyPrompt: '12 bức phù điêu gốm trên các cửa chợ Bến Thành được chế tác tại lò gốm danh tiếng nào vào năm 1952?',
      clueVerse: 'Gốm màu Biên Hòa nét tài hoa,\nCon bò, nải chuối thắm quê nhà.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Các phù điêu gốm trang trí 4 cửa chợ Bến Thành được chế tác bởi trường nghệ thuật nào?',
        options: ['Trường Mỹ nghệ Thực hành Biên Hòa (Đồng Nai)', 'Gốm Bát Tràng Hà Nội', 'Gốm Chu Đậu Hải Dương', 'Gốm Lái Thiêu Bình Dương'],
        correctAnswer: 'Trường Mỹ nghệ Thực hành Biên Hòa (Đồng Nai)',
        explanation: 'Năm 1952, các nghệ nhân và giảng viên Trường Mỹ nghệ Biên Hòa đã tạo tác 12 bức phù điêu gốm men màu đặc sắc gắn lên 4 cửa chợ.',
        hintLevel1: 'Cái nôi gốm mỹ nghệ Biên Hòa.',
        hintLevel2: 'Trường Mỹ nghệ Thực hành Biên Hòa.',
        hintLevel3: 'Chọn Trường Mỹ nghệ Thực hành Biên Hòa (Đồng Nai).'
      }
    },
    {
      id: 'cbt_step_17',
      title: 'Món ăn biểu tượng chợ Bến Thành: Bún Mắm Nam Bộ',
      tier: 'intermediate',
      tierTitle: 'Ẩm Thực Phương Nam',
      bonusLP: 25,
      storyPrompt: 'Món nước đậm đà hương vị mắm cá linh, cá sặc, tôm tươi, mực giòn và rau đắng nổi tiếng tại khu ẩm thực Chợ Bến Thành là gì?',
      clueVerse: 'Bún mắm thơm nồng cá linh tươi,\nCà tím rau đắng ngát nụ cười.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Món ăn đặc sản Nam Bộ nức tiếng tại Chợ Bến Thành nấu từ mắm cá linh, ăn kèm tôm, mực, heo quay và hoa chuối là:',
        options: ['Bún Mắm Nam Bộ', 'Phở bò', 'Bún chả', 'Mì Quảng'],
        correctAnswer: 'Bún Mắm Nam Bộ',
        explanation: 'Bún mắm Nam Bộ tại Chợ Bến Thành là tinh hoa kết hợp giữa vị mắm cá sông Cửu Long, hải sản tươi rói và hàng chục loại rau đồng nội.',
        hintLevel1: 'Món bún nấu từ mắm cá linh cá sặc.',
        hintLevel2: 'Bún Mắm Nam Bộ.',
        hintLevel3: 'Chọn Bún Mắm Nam Bộ.'
      }
    },
    {
      id: 'cbt_step_18',
      title: 'Kết nối Nhà ga ngầm Metro Bến Thành 2026',
      tier: 'intermediate',
      tierTitle: 'Đô Thị Hiện Đại',
      bonusLP: 30,
      storyPrompt: 'Nhà ga ngầm Metro đối diện chợ Bến Thành là ga trung tâm của tuyến đường sắt đô thị nào?',
      clueVerse: 'Metro ngầm sâu nối đôi bờ,\nTàu lướt êm ru thỏa ước mơ.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Nhà ga ngầm Metro Bến Thành là ga đầu mối của tuyến Metro nào vừa đi vào vận hành thương mại?',
        options: ['Tuyến Metro Số 1 (Bến Thành - Suối Tiên)', 'Tuyến xe lửa Bắc Nam', 'Tuyến Cát Linh - Hà Đông', 'Tuyến Nhổn - Ga Hà Nội'],
        correctAnswer: 'Tuyến Metro Số 1 (Bến Thành - Suối Tiên)',
        explanation: 'Nhà ga trung tâm Bến Thành là ga ngầm quy mô lớn nhất kết nối Tuyến Metro Số 1 (Bến Thành - Suối Tiên) và các tuyến metro tương lai.',
        hintLevel1: 'Tuyến Metro đầu tiên của TP.HCM.',
        hintLevel2: 'Tuyến Metro Số 1.',
        hintLevel3: 'Chọn Tuyến Metro Số 1 (Bến Thành - Suối Tiên).'
      }
    },
    {
      id: 'cbt_step_19',
      title: 'Hệ thống vì kèo sắt đỡ mái chợ chịu lực',
      tier: 'advanced',
      tierTitle: 'Kỹ Thuật Xây Dựng',
      bonusLP: 35,
      storyPrompt: 'Kết cấu đỡ mái rộng lớn của Chợ Bến Thành được thiết kế bằng kết cấu gì?',
      clueVerse: 'Khung sắt chịu lực vượt không gian,\nTrăm năm vững chãi chẳng xê dịch.',
      puzzleType: 'true_false',
      puzzleData: {
        question: 'Đúng hay Sai: Mái chợ Bến Thành sử dụng hệ khung vì kèo sắt thép nhập khẩu từ Pháp với khẩu độ lớn giúp không gian nhà lồng chợ không bị vướng cột, tạo độ thoáng đãng tối đa?',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: 'Chính xác! Công ty Brossard et Mopin đã ứng dụng kết cấu vì kèo thép tân tiến lúc bấy giờ để tạo không gian buôn bán mênh mông, thoáng khí.',
        hintLevel1: 'Kết cấu thép khẩu độ lớn.',
        hintLevel2: 'Tối ưu không gian buôn bán.',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    },
    {
      id: 'cbt_step_20',
      title: 'Tượng đài Trần Nguyên Hãn trước Chợ xưa',
      tier: 'master',
      tierTitle: 'Ký Ức Đô Thị',
      bonusLP: 50,
      storyPrompt: 'Quảng trường trước Cửa Nam Chợ Bến Thành từng có tượng đài danh tướng nào cưỡi ngựa thả chim bồ câu?',
      clueVerse: 'Tướng quân cưỡi ngựa giữa trời sao,\nBồ câu tung cánh dạ thanh cao.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Bức tượng danh nhân lịch sử từng ngự trị tại bùng binh Quách Thị Trang trước chợ Bến Thành suốt nhiều thập kỷ là ai?',
        options: ['Danh tướng Trần Nguyên Hãn', 'Trần Hưng Đạo', 'Quang Trung', 'Lê Lợi'],
        correctAnswer: 'Danh tướng Trần Nguyên Hãn',
        explanation: 'Tượng đài danh tướng Trần Nguyên Hãn cưỡi ngựa tay nâng chim bồ câu biểu trưng cho hòa bình và tinh thần yêu nước là ký ức sâu đậm của người Sài Gòn.',
        hintLevel1: 'Danh tướng thời khởi nghĩa Lam Sơn.',
        hintLevel2: 'Tướng quân Trần Nguyên Hãn.',
        hintLevel3: 'Chọn Danh tướng Trần Nguyên Hãn.'
      }
    }
  ],

  // 4. Nhà Thờ Đức Bà
  quest_nha_tho_duc_ba: [
    {
      id: 'ntdb_step_16',
      title: 'Vật liệu ngói lợp mái chuyển từ Pháp',
      tier: 'intermediate',
      tierTitle: 'Vật Liệu Di Sản',
      bonusLP: 25,
      storyPrompt: 'Mái ngói của Nhà thờ Đức Bà nguyên bản được sản xuất tại thành phố nào của Pháp?',
      clueVerse: 'Ngói đỏ Marseille vượt đại dương,\nChe chở thánh đường trải nắng sương.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Ngói lợp mái nguyên bản của Nhà thờ Đức Bà là ngói gì nhập khẩu trực tiếp từ Pháp?',
        options: ['Ngói Marseille (vùng Marseille nước Pháp)', 'Ngói Paris', 'Ngói Lyon', 'Ngói Bordeaux'],
        correctAnswer: 'Ngói Marseille (vùng Marseille nước Pháp)',
        explanation: 'Hàng trăm ngàn viên ngói Marseille và ngói âm dương chất lượng cao được sản xuất tại Pháp và vận chuyển bằng đường biển sang Sài Gòn.',
        hintLevel1: 'Thành phố cảng Marseille miền Nam nước Pháp.',
        hintLevel2: 'Ngói Marseille.',
        hintLevel3: 'Chọn Ngói Marseille (vùng Marseille nước Pháp).'
      }
    },
    {
      id: 'ntdb_step_17',
      title: 'Bộ kính màu Stained Glass tuyệt mỹ',
      tier: 'advanced',
      tierTitle: 'Nghệ Thuật Kính Màu',
      bonusLP: 35,
      storyPrompt: 'Các ô cửa sổ kính màu của Nhà thờ Đức Bà được chế tác bởi hãng danh tiếng Lorin tại thành phố Chartres miêu tả điều gì?',
      clueVerse: 'Kính màu khúc xạ ánh dương quang,\nTranh thánh lung linh sắc rỡ ràng.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Nội dung các bức tranh kính màu hoa hồng lung linh trong thánh đường khắc họa:',
        options: [
          'Các sự tích trong Kinh Thánh và chân dung các vị Thánh',
          'Phong cảnh sông nước miền Tây',
          'Hình ảnh tháp Eiffel Paris',
          'Các loài hoa nhiệt đới'
        ],
        correctAnswer: 'Các sự tích trong Kinh Thánh và chân dung các vị Thánh',
        explanation: '56 cửa kính màu nghệ thuật của xưởng Lorin (Chartres) miêu tả các điển tích Kinh Thánh rực rỡ dưới ánh nắng ban mai.',
        hintLevel1: 'Các điển tích trong Kinh Thánh.',
        hintLevel2: 'Sự tích Kinh Thánh và các vị Thánh.',
        hintLevel3: 'Chọn Các sự tích trong Kinh Thánh và chân dung các vị Thánh.'
      }
    },
    {
      id: 'ntdb_step_18',
      title: 'Tượng Đức Mẹ Hòa Bình tạc bằng đá cẩm thạch trắng',
      tier: 'intermediate',
      tierTitle: 'Điêu Khắc Tâm Linh',
      bonusLP: 30,
      storyPrompt: 'Bức tượng Đức Mẹ Hòa Bình đặt tại công trường trước nhà thờ được tạc tại quốc gia nào vào năm 1959?',
      clueVerse: 'Cẩm thạch trắng ngời đất Ý xa,\nCầu cho nhân loại thái bình ca.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tượng Đức Mẹ Hòa Bình bằng đá cẩm thạch trắng Carrara được nhà điêu khắc Ciocchetti tạc tại nước nào?',
        options: ['Nước Ý (Italia)', 'Nước Pháp', 'Nước Đức', 'Nước Anh'],
        correctAnswer: 'Nước Ý (Italia)',
        explanation: 'Tượng Đức Mẹ Hòa Bình cao 4,6m, nặng 5,8 tấn được tạc bằng đá cẩm thạch trắng Carrara nguyên khối tại Rome (Ý) vào năm 1959.',
        hintLevel1: 'Đất nước hình chiếc ủng với mỏ đá Carrara trứ danh.',
        hintLevel2: 'Nước Ý (Italia).',
        hintLevel3: 'Chọn Nước Ý (Italia).'
      }
    },
    {
      id: 'ntdb_step_19',
      title: 'Công tác đại trùng tu bảo tồn kéo dài',
      tier: 'advanced',
      tierTitle: 'Bảo Tồn Di Sản Thế Kỷ 21',
      bonusLP: 40,
      storyPrompt: 'Dự án đại trùng tu Nhà thờ Đức Bà Sài Gòn sử dụng vật liệu nhập từ đâu để đảm bảo tính nguyên gốc di sản?',
      clueVerse: 'Trùng tu di sản đón tương lai,\nNgói mới từ Pháp vững lâu dài.',
      puzzleType: 'true_false',
      puzzleData: {
        question: 'Đúng hay Sai: Để bảo tồn tối đa tính nguyên bản, dự án trùng tu Nhà thờ Đức Bà đã đặt mua ngói Marseille và ngói vảy rồng phục chế trực tiếp từ các nhà máy truyền thống tại Pháp và Đức?',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: 'Chính xác! Công tác trùng tu tuân thủ nghiêm ngặt Hiến chương Venice về bảo tồn di sản, đặt vật liệu thủ công chính xác từ châu Âu.',
        hintLevel1: 'Tuân thủ tiêu chuẩn bảo tồn quốc tế.',
        hintLevel2: 'Đặt ngói và vật liệu nguyên gốc từ châu Âu.',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    },
    {
      id: 'ntdb_step_20',
      title: 'Tước hiệu Vương Cung Thánh Đường cao quý',
      tier: 'master',
      tierTitle: 'Đại Sư Tôn Giáo',
      bonusLP: 50,
      storyPrompt: 'Tòa Thánh Vatican đã phong tặng tước hiệu Vương Cung Thánh Đường (Basilica) cho Nhà thờ Đức Bà vào năm nào?',
      clueVerse: 'Vương cung thánh đường rạng danh thơm,\nChuông ngân giáo đường sớm hoàng hôn.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Năm nào Nhà thờ Chính tòa Sài Gòn được Giáo hoàng Gioan XXIII nâng lên hàng Vương Cung Thánh Đường?',
        options: ['Năm 1962', 'Năm 1880', 'Năm 1945', 'Năm 2000'],
        correctAnswer: 'Năm 1962',
        explanation: 'Năm 1962, Tòa thánh Vatican đã ban sắc phong nâng Nhà thờ Chính tòa Sài Gòn lên hàng Vương Cung Thánh Đường (Basilica Minor).',
        hintLevel1: 'Năm 1962.',
        hintLevel2: 'Đầu thập niên 1960.',
        hintLevel3: 'Chọn Năm 1962.'
      }
    }
  ],

  // 5. Bưu Điện Trung Tâm TP.HCM
  quest_buu_dien_tphcm: [
    {
      id: 'bd_step_16',
      title: 'Hàng chữ khắc tên các nhà khoa học vĩ đại',
      tier: 'advanced',
      tierTitle: 'Tôn Vinh Khoa Học',
      bonusLP: 35,
      storyPrompt: 'Trên các ô chữ nhật ở mặt tiền Bưu điện Trung tâm khắc tên của những ai?',
      clueVerse: 'Mặt tiền khắc chữ sáng ngời danh,\nNhà khoa học lớn lập kỳ công.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Mặt tiền Bưu điện khắc tên các nhà bác học có cống hiến lớn cho ngành điện và viễn thông như:',
        options: [
          'Volta, Ampère, Faraday, Galvani, Ohm, Morse, Franklin',
          'Các vị tướng quân đội Pháp',
          'Các triều đại vua Việt Nam',
          'Tên các nhà văn hóa học cổ điển'
        ],
        correctAnswer: 'Volta, Ampère, Faraday, Galvani, Ohm, Morse, Franklin',
        explanation: 'Mặt tiền vinh danh những nhà phát minh vĩ đại đặt nền móng cho nền viễn thông nhân loại như Ampère, Ohm, Morse, Franklin...',
        hintLevel1: 'Những nhà phát minh ngành điện thế giới.',
        hintLevel2: 'Volta, Ampère, Faraday, Morse...',
        hintLevel3: 'Chọn Volta, Ampère, Faraday, Galvani, Ohm, Morse, Franklin.'
      }
    },
    {
      id: 'bd_step_17',
      title: 'Cụ già viết thư thuê huyền thoại Dương Văn Ngộ',
      tier: 'intermediate',
      tierTitle: 'Ký Ức Văn Hóa Sài Gòn',
      bonusLP: 30,
      storyPrompt: 'Người đàn ông gắn bó hơn 30 năm ngồi viết và dịch thư tay cho người dân tại Bưu điện Trung tâm là ai?',
      clueVerse: 'Cụ già viết thư nối nhịp cầu,\nChữ đẹp tình sâu gửi phương nao.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Cụ ông được mệnh danh là "Người viết thư thuê cuối cùng của Sài Gòn" tại Bưu điện Trung tâm tên là gì?',
        options: ['Cụ Dương Văn Ngộ', 'Cụ Trần Văn Ơn', 'Cụ Nguyễn Văn Vĩnh', 'Cụ Phạm Quỳnh'],
        correctAnswer: 'Cụ Dương Văn Ngộ',
        explanation: 'Cụ Dương Văn Ngộ (1930 - 2023) đã ngồi viết và dịch thư tay tiếng Anh, tiếng Pháp cho hàng ngàn người suốt hơn 3 thập kỷ, trở thành nét văn hóa thân thương của Sài Gòn.',
        hintLevel1: 'Cụ mang họ Dương.',
        hintLevel2: 'Cụ Dương Văn Ngộ.',
        hintLevel3: 'Chọn Cụ Dương Văn Ngộ.'
      }
    },
    {
      id: 'bd_step_18',
      title: 'Hệ thống quầy bốt điện thoại gỗ cổ điển',
      tier: 'advanced',
      tierTitle: 'Nội Thất Di Sản',
      bonusLP: 35,
      storyPrompt: 'Dọc hai bên sảnh bưu điện có 14 bốt buồng gọi điện thoại bằng gỗ lim cổ kính thời xưa dùng để làm gì?',
      clueVerse: 'Bốt gỗ lim xưa cách âm dày,\nNơi gửi lời thương khắp đó đây.',
      puzzleType: 'true_false',
      puzzleData: {
        question: 'Đúng hay Sai: Các buồng gỗ lim cổ hai bên sảnh từng là các cabin bốt điện thoại công cộng đường dài cách âm đầu tiên tại Sài Gòn cuối thế kỷ 19?',
        options: ['Đúng', 'Sai'],
        correctAnswer: 'Đúng',
        explanation: 'Chính xác! 14 buồng bốt bằng gỗ lim chạm trổ tinh xảo từng là nơi người dân gọi điện thoại viễn liên quốc tế và liên tỉnh.',
        hintLevel1: 'Bốt điện thoại viễn liên bằng gỗ.',
        hintLevel2: 'Cabin gọi điện cách âm thời xưa.',
        hintLevel3: 'Chọn ĐÚNG.'
      }
    },
    {
      id: 'bd_step_19',
      title: 'Màu sơn vàng hoàng yến đặc trưng',
      tier: 'intermediate',
      tierTitle: 'Màu Sắc Di Sản',
      bonusLP: 25,
      storyPrompt: 'Màu sơn vàng hoàng yến phủ ngoài tòa nhà mang ý nghĩa gì trong kiến trúc Pháp nhiệt đới?',
      clueVerse: 'Vàng tươi hoàng yến thắm phương trời,\nNắng ấm nhiệt đới rạng nơi nơi.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tông màu vàng đất / vàng hoàng yến được người Pháp ưa chuộng trong kiến trúc công sở nhiệt đới vì:',
        options: [
          'Phản xạ tốt ánh nắng mặt trời nhiệt đới, tạo vẻ ấm cúng và sang trọng hài hòa với cây xanh',
          'Chỉ vì giá sơn màu vàng rẻ nhất',
          'Để giống màu cờ nước Pháp',
          'Sơn thử nghiệm tạm thời'
        ],
        correctAnswer: 'Phản xạ tốt ánh nắng mặt trời nhiệt đới, tạo vẻ ấm cúng và sang trọng hài hòa với cây xanh',
        explanation: 'Màu vàng hoàng yến kết hợp viền trắng và cửa lá sách xanh lá cây là bảng màu kinh điển của phong cách kiến trúc Đông Dương, thích ứng hoàn hảo với ánh nắng phương Nam.',
        hintLevel1: 'Thích ứng ánh nắng và nhiệt độ miền nhiệt đới.',
        hintLevel2: 'Phản xạ ánh nắng và hài hòa cây xanh.',
        hintLevel3: 'Chọn Phản xạ tốt ánh nắng mặt trời nhiệt đới...'
      }
    },
    {
      id: 'bd_step_20',
      title: 'Di sản bưu chính phục vụ không ngừng nghỉ',
      tier: 'master',
      tierTitle: 'Đại Sư Di Sản',
      bonusLP: 50,
      storyPrompt: 'Bưu điện Trung tâm TP.HCM nằm trong danh sách các bưu điện đẹp nhất thế giới do tạp chí quốc tế nào bình chọn?',
      clueVerse: 'Kiến trúc đỉnh cao nức tiếng xa,\nBưu điện đẹp nhất thế giới ta.',
      puzzleType: 'multiple_choice',
      puzzleData: {
        question: 'Tạp chí kiến trúc du lịch Architectural Digest (Mỹ) đã xếp Bưu điện Trung tâm TP.HCM vào danh sách:',
        options: [
          'Top 11 Bưu điện có kiến trúc đẹp nhất thế giới',
          'Top 100 sân bay lớn nhất',
          'Top 5 thư viện cổ',
          'Top 10 nhà ga xe lửa'
        ],
        correctAnswer: 'Top 11 Bưu điện có kiến trúc đẹp nhất thế giới',
        explanation: 'Năm 2023, tạp chí danh tiếng Architectural Digest của Mỹ đã vinh danh Bưu điện Trung tâm TP.HCM là một trong 11 bưu điện đẹp nhất hành tinh.',
        hintLevel1: 'Vinh danh Top 11 bưu điện đẹp nhất thế giới.',
        hintLevel2: 'Top 11 bưu điện kiến trúc đẹp nhất.',
        hintLevel3: 'Chọn Top 11 Bưu điện có kiến trúc đẹp nhất thế giới.'
      }
    }
  ]
};
