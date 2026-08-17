import { Quest } from '../../types';

export const QUESTS_PART_2: Quest[] = [
  // =========================================================================
  // 6. Chùa Hội Khánh (Bình Dương) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_chua_hoi_khanh',
    locationId: 'loc_chua_hoi_khanh',
    title: 'Bí Mật Ngôi Cổ Tự 1741 & Kỷ Lục Tượng Phật Nhập Niết Bàn',
    subtitle: 'Khám phá pho tượng Phật nằm dài 52m trên mái chùa, bộ tượng La Hán gỗ mít 1904 và di tích cụ Phó bảng Nguyễn Sinh Sắc',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_chua_hoi_khanh',
    loreChapter: 'Chương 6: Chuông Chiều Đất Thủ',
    steps: [
      {
        id: 'chk_step_1',
        title: 'Năm khởi dựng chùa Hội Khánh',
        storyPrompt: 'Đứng dưới bóng mát của hàng cây dầu cổ thụ tại vùng đất Thủ Dầu Một:',
        clueVerse: 'Một bảy bốn mốt dựng chùa xưa,\nThời vua Hiển Tông trải nắng mưa.\nĐại Ngạn thiền sư gieo đuốc tuệ,\nHội Khánh ngàn năm tiếng chuông đưa.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Chùa Hội Khánh được khởi dựng vào năm nào dưới thời vua Lê Hiển Tông (gợi ý: 174x)?',
          correctAnswer: '1741',
          keywords: ['1741'],
          explanation: 'Chùa Hội Khánh được Thiền sư Đại Ngạn (dòng thiền Liễu Quán) khai sơn khởi dựng vào năm 1741.',
          hintLevel1: 'Năm 1741.',
          hintLevel2: 'Nhập số 1741.',
          hintLevel3: 'Đáp án là 1741.'
        }
      },
      {
        id: 'chk_step_2',
        title: 'Kỷ lục tượng Phật Thích Ca nhập Niết bàn',
        storyPrompt: 'Chiêm ngưỡng pho tượng Phật Thích Ca nằm an nhiên ngự trên mái tòa nhà bảo tàng:',
        clueVerse: 'Năm mươi hai thước trải đài sen,\nKỷ lục châu Á rạng ánh đèn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Pho tượng Phật Thích Ca nhập Niết bàn ngự trên mái chùa Hội Khánh có chiều dài bao nhiêu mét (xác lập Kỷ lục Châu Á)?',
          options: ['Dài 52 mét (cao 12 mét)', 'Dài 20 mét', 'Dài 30 mét', 'Dài 100 mét'],
          correctAnswer: 'Dài 52 mét (cao 12 mét)',
          explanation: 'Pho tượng Phật nằm dài 52m, cao 12m ngự trên mái Trung tâm Văn hóa Phật giáo Chùa Hội Khánh được Tổ chức Kỷ lục Châu Á xác lập kỷ lục Tượng Phật nhập Niết bàn trên mái chùa dài nhất Châu Á.',
          hintLevel1: 'Chiều dài 52m.',
          hintLevel2: '52 mét.',
          hintLevel3: 'Chọn Dài 52 mét (cao 12 mét).'
        }
      },
      {
        id: 'chk_step_3',
        title: 'Bộ tượng Thập Bát La Hán bằng gỗ quý',
        storyPrompt: 'Bước vào chánh điện cổ kính, bạn hãy chiêm bái bộ 18 vị La Hán tạc bằng loại gỗ gì?',
        clueVerse: 'Mười tám La Hán gỗ mít xưa,\nThợ mộc Chợ Thủ nét tài hoa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bộ tượng 18 vị La Hán tuyệt tác tại Chùa Hội Khánh được các nghệ nhân mộc đất Thủ đục đẽo từ loại gỗ gì vào năm 1904?',
          options: ['Gỗ Mít cổ thụ sơn son thếp vàng', 'Gỗ Thông ép', 'Đúc bằng xi măng cốt thép', 'Tạc bằng thạch cao'],
          correctAnswer: 'Gỗ Mít cổ thụ sơn son thếp vàng',
          explanation: 'Bộ tượng 18 vị La Hán bằng gỗ mít sơn son thếp vàng do nhóm thợ mộc Chợ Thủ đục đẽo công phu năm Giáp Thìn (1904), mỗi pho tượng có nét mặt thần thái sống động độc nhất vô nhị.',
          hintLevel1: 'Gỗ từ cây mít quen thuộc làng quê.',
          hintLevel2: 'Gỗ mít.',
          hintLevel3: 'Chọn Gỗ Mít cổ thụ sơn son thếp vàng.'
        }
      },
      {
        id: 'chk_step_4',
        title: 'Cụ Phó bảng Nguyễn Sinh Sắc tại Chùa Hội Khánh',
        storyPrompt: 'Thân sinh của Chủ tịch Hồ Chí Minh – Cụ Phó bảng Nguyễn Sinh Sắc đã từng làm gì tại Chùa Hội Khánh từ năm 1923 - 1926?',
        clueVerse: 'Cụ Phó bảng về đất Thủ xưa,\nBốc thuốc dạy chữ sớm chiều đưa.\nLập Hội Danh Dự nhen lửa đỏ,\nYêu nước thương dân trọn ước mơ.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cụ Nguyễn Sinh Sắc cùng các nhân sĩ yêu nước đã thành lập tổ chức bí mật nào tại Chùa Hội Khánh?',
          options: [
            'Hội Danh Dự (Hội yêu nước truyền bá tư tưởng dân tộc)',
            'Hội Hướng Đạo Sinh',
            'Đông Kinh Nghĩa Thục',
            'Hội Khuyến Học'
          ],
          correctAnswer: 'Hội Danh Dự (Hội yêu nước truyền bá tư tưởng dân tộc)',
          explanation: 'Cụ Phó bảng Nguyễn Sinh Sắc cùng hòa thượng Từ Văn và các cụ Tú Cúc, thầy giáo giáo đã thành lập "Hội Danh Dự" nhằm cổ vũ tinh thần yêu nước và tương thân tương ái.',
          hintLevel1: 'Hội mang tên "Danh Dự".',
          hintLevel2: 'Hội Danh Dự.',
          hintLevel3: 'Chọn Hội Danh Dự...'
        }
      },
      {
        id: 'chk_step_5',
        title: 'Số lượng cột gỗ quý trong chánh điện',
        storyPrompt: 'Chánh điện Chùa Hội Khánh giữ nguyên nét kiến trúc nhà rường Nam Bộ với bao nhiêu cây cột gỗ quý nâng đỡ mái ngói?',
        clueVerse: 'Chín mươi hai cột gỗ rường rực rỡ,\nTrăm năm vững chãi thế kiên cường.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chánh điện Chùa Hội Khánh được nâng đỡ bởi hệ thống bao nhiêu cột gỗ quý?',
          options: ['92 cây cột gỗ', '36 cây cột', '50 cây cột', '12 cây cột'],
          correctAnswer: '92 cây cột gỗ',
          explanation: 'Chánh điện có tới 92 cây cột gỗ quý (gỗ lim, sao, trắc) được liên kết mộng mị hoàn hảo theo lối kiến trúc tứ trụ truyền thống Nam Bộ.',
          hintLevel1: 'Gần 100 cây cột gỗ (92 cột).',
          hintLevel2: '92 cây cột.',
          hintLevel3: 'Chọn 92 cây cột gỗ.'
        }
      },
      {
        id: 'chk_step_6',
        title: 'Hệ phái thiền của chùa',
        storyPrompt: 'Chùa Hội Khánh thuộc truyền thừa tông phái thiền Phật giáo nào tại Nam Bộ?',
        clueVerse: 'Dòng thiền Liễu Quán tỏa ngát hương,\nTruyền đăng tục diệm khắp muôn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chùa Hội Khánh thuộc truyền thừa thiền phái nào?',
          options: ['Thiền phái Lâm Tế dòng Liễu Quán', 'Thiền phái Trúc Lâm Yên Tử', 'Phật giáo Nam tông Theravada', 'Mật tông Tây Tạng'],
          correctAnswer: 'Thiền phái Lâm Tế dòng Liễu Quán',
          explanation: 'Chùa thuộc truyền thừa Thiền phái Lâm Tế dòng Liễu Quán, một chi phái Phật giáo Việt Nam có ảnh hưởng sâu rộng từ Đàng Trong.',
          hintLevel1: 'Lâm Tế Liễu Quán.',
          hintLevel2: 'Thiền phái Lâm Tế dòng Liễu Quán.',
          hintLevel3: 'Chọn Thiền phái Lâm Tế dòng Liễu Quán.'
        }
      },
      {
        id: 'chk_step_7',
        title: 'Bức hoành phi "Đại Hùng Bảo Điện"',
        storyPrompt: 'Bức hoành phi cổ sơn son thếp vàng treo giữa chánh điện mang 4 chữ đại tự nào?',
        clueVerse: 'Đại Hùng Bảo Điện sáng quang minh,\nPhật ngự từ bi chiếu vạn tình.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bốn chữ Hán đại tự khắc trên bức hoành phi chính tại gian giữa chánh điện là gì?',
          options: ['Đại Hùng Bảo Điện (大雄寶殿)', 'Từ Bi Hỷ Xả', 'Phật Quang Phổ Chiếu', 'Vạn Cổ Trường Tồn'],
          correctAnswer: 'Đại Hùng Bảo Điện (大雄寶殿)',
          explanation: '"Đại Hùng Bảo Điện" là danh hiệu trang nghiêm tôn xưng nơi thờ Đức Thế Tôn tại các tự viện Phật giáo.',
          hintLevel1: 'Đại Hùng Bảo Điện.',
          hintLevel2: 'Đại Hùng Bảo Điện.',
          hintLevel3: 'Chọn Đại Hùng Bảo Điện (大雄寶殿).'
        }
      },
      {
        id: 'chk_step_8',
        title: 'Địa chỉ của Chùa Hội Khánh',
        storyPrompt: 'Chùa Hội Khánh tọa lạc tại phường nào của thành phố Thủ Dầu Một, tỉnh Bình Dương?',
        clueVerse: 'Phú Cường đất Thủ rợp bóng cây,\nChùa xưa Hội Khánh đón gió mây.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chùa Hội Khánh tọa lạc tại phường nào thuộc TP. Thủ Dầu Một?',
          options: ['Phường Phú Cường', 'Phường Chánh Nghĩa', 'Phường Hiệp Thành', 'Phường Lái Thiêu'],
          correctAnswer: 'Phường Phú Cường',
          explanation: 'Chùa Hội Khánh tọa lạc tại số 35 đường Yersin, Phường Phú Cường, TP. Thủ Dầu Một, tỉnh Bình Dương.',
          hintLevel1: 'Phường Phú Cường.',
          hintLevel2: 'Phú Cường.',
          hintLevel3: 'Chọn Phường Phú Cường.'
        }
      },
      {
        id: 'chk_step_9',
        title: 'Chuông đại hồng chung cổ',
        storyPrompt: 'Quả chuông đồng đại hồng chung tại chùa được đúc vào thời vua nào của triều Nguyễn?',
        clueVerse: 'Đại hồng chung đúc thời Thiệu Trị,\nTiếng ngân vang vọng khắp ngàn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đại hồng chung Chùa Hội Khánh được đúc vào năm 1843 dưới thời vua nào?',
          options: ['Vua Thiệu Trị', 'Vua Gia Long', 'Vua Minh Mạng', 'Vua Tự Đức'],
          correctAnswer: 'Vua Thiệu Trị',
          explanation: 'Quả đại hồng chung chùa Hội Khánh được đúc vào năm Quý Mão (1843) thời vua Thiệu Trị.',
          hintLevel1: 'Vị vua thứ 3 của triều Nguyễn, con vua Minh Mạng.',
          hintLevel2: 'Vua Thiệu Trị.',
          hintLevel3: 'Chọn Vua Thiệu Trị.'
        }
      },
      {
        id: 'chk_step_10',
        title: 'Vật liệu xây dựng bệ tượng Phật nằm',
        storyPrompt: 'Bên dưới bệ tượng Phật nằm dài 52m là công trình gì phục vụ Phật tử và du khách?',
        clueVerse: 'Bảo tàng Phật giáo dưới đài sen,\nThư viện kinh văn sáng ngọn đèn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Dưới bệ tượng Phật nằm kỷ lục Châu Á là một tòa nhà 2 tầng làm Trung tâm Văn hóa Phật giáo, thư viện sách và nơi trưng bày hiện vật Phật giáo?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tòa nhà bên dưới bệ tượng Phật là trung tâm văn hóa Phật giáo, thư viện kinh sách và giảng đường phục vụ học tập, hoằng pháp.',
          hintLevel1: 'Tòa nhà làm trung tâm văn hóa và thư viện.',
          hintLevel2: 'Bảo tàng văn hóa Phật giáo.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'chk_step_11',
        title: 'Di tích lịch sử - văn hóa cấp Quốc gia',
        storyPrompt: 'Chùa Hội Khánh được Bộ Văn hóa Thông tin xếp hạng Di tích Lịch sử - Văn hóa cấp Quốc gia vào năm nào?',
        clueVerse: 'Chín ba công nhận di tích vàng,\nHội Khánh rạng danh khắp thế gian.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm Chùa Hội Khánh được công nhận Di tích cấp Quốc gia (gợi ý: 199x):',
          correctAnswer: '1993',
          keywords: ['1993'],
          explanation: 'Chùa Hội Khánh được công nhận Di tích Lịch sử - Văn hóa cấp Quốc gia vào ngày 7/1/1993.',
          hintLevel1: 'Năm 1993.',
          hintLevel2: '1993.',
          hintLevel3: 'Nhập: 1993.'
        }
      },
      {
        id: 'chk_step_12',
        title: 'Nét chạm trổ điêu khắc trên vì kèo',
        storyPrompt: 'Nghệ thuật chạm khắc gỗ trên các vì kèo, bao lam chùa Hội Khánh thể hiện đề tài gì?',
        clueVerse: 'Tứ linh long phụng quy phụng hoàng,\nTứ thời mai cúc trúc tùng sang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hoa văn điêu khắc trên bao lam và cột kèo chùa Hội Khánh chủ yếu là các mô-típ nào?',
          options: [
            'Tứ linh (Long, Lân, Quy, Phụng) và Tứ quý (Tùng, Cúc, Trúc, Mai)',
            'Hình học trừu tượng phương Tây',
            'Thần thoại Bắc Âu',
            'Tranh phong cảnh sa mạc'
          ],
          correctAnswer: 'Tứ linh (Long, Lân, Quy, Phụng) và Tứ quý (Tùng, Cúc, Trúc, Mai)',
          explanation: 'Các nghệ nhân thợ mộc Thủ Dầu Một đã chạm trổ tinh xảo các họa tiết Tứ linh, Tứ quý, hoa lá sen cách điệu đậm chất nghệ thuật dân gian Việt Nam.',
          hintLevel1: 'Tứ linh và Tứ quý truyền thống.',
          hintLevel2: 'Long, Lân, Quy, Phụng.',
          hintLevel3: 'Chọn Tứ linh (Long, Lân, Quy, Phụng)...'
        }
      },
      {
        id: 'chk_step_13',
        title: 'Vườn cây dầu cổ thụ trăm năm',
        storyPrompt: 'Khuôn viên chùa Hội Khánh nổi tiếng có rặng cây cổ thụ nào tỏa bóng mát quanh năm?',
        clueVerse: 'Cây Dầu rái đứng che sương gió,\nBóng mát thanh tịnh chốn thiền môn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại cây cổ thụ đặc trưng rợp bóng mát trong khuôn viên Chùa Hội Khánh là cây gì?',
          options: ['Cây Dầu Rái (Dầu cát) cổ thụ', 'Cây Thông', 'Cây Bạch Dương', 'Cây Cau kiểng'],
          correctAnswer: 'Cây Dầu Rái (Dầu cát) cổ thụ',
          explanation: 'Vườn chùa có nhiều cây Dầu Rái cổ thụ cao vút hàng trăm năm tuổi, tạo nên nét bình yên, thanh tịnh của vùng đất Thủ Dầu Một.',
          hintLevel1: 'Cây Dầu - loài cây cho tên gọi Thủ Dầu Một.',
          hintLevel2: 'Cây Dầu Rái.',
          hintLevel3: 'Chọn Cây Dầu Rái (Dầu cát) cổ thụ.'
        }
      },
      {
        id: 'chk_step_14',
        title: 'Giếng nước cổ trong sân chùa',
        storyPrompt: 'Giếng nước cổ kính trong sân chùa Hội Khánh từng cung cấp nguồn nước ngọt mát lành cho:',
        clueVerse: 'Giếng cổ nước trong mạch đất lành,\nNuôi sống bao người giữa chiến tranh.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Giếng nước cổ chùa Hội Khánh được đào từ thế kỷ 18, nước luôn trong vắt ngọt mát quanh năm và từng là nơi cụ Nguyễn Sinh Sắc cùng các nhà sư lấy nước bốc thuốc?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Giếng cổ này là nguồn nước sinh hoạt và làm thuốc chữa bệnh của nhà chùa và nhân dân địa phương suốt nhiều thế kỷ.',
          hintLevel1: 'Giếng cổ gắn với lịch sử chùa.',
          hintLevel2: 'Nguồn nước mát lành.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'chk_step_15',
        title: 'Ý nghĩa tên gọi Hội Khánh',
        storyPrompt: 'Hai chữ "Hội Khánh" đặt tên cho ngôi chùa mang ý nghĩa tốt đẹp gì?',
        clueVerse: 'Hội tụ muôn điều lành phúc đức,\nKhánh chúc thái bình khắp non sông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ý nghĩa của tên gọi "Hội Khánh" là gì?',
          options: [
            'Hội tụ những điều tốt lành, phúc đức và chúc mừng sự an lạc của muôn loài',
            'Ngôi chùa ở vùng biển',
            'Nơi tụ họp buôn bán mùa vụ',
            'Nơi ngắm trăng rằm'
          ],
          correctAnswer: 'Hội tụ những điều tốt lành, phúc đức và chúc mừng sự an lạc của muôn loài',
          explanation: '"Hội" là tụ họp, kết nối; "Khánh" là niềm vui, phúc lành. Tên Hội Khánh gửi gắm ước nguyện hội tụ phúc lành cho thế gian.',
          hintLevel1: 'Hội tụ phúc đức, niềm vui.',
          hintLevel2: 'Hội tụ điều tốt lành.',
          hintLevel3: 'Chọn Hội tụ những điều tốt lành...'
        }
      }
    ]
  },

  // =========================================================================
  // 7. Thích Ca Phật Đài (Bà Rịa – Vũng Tàu) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_thich_ca_phat_dai',
    locationId: 'loc_thich_ca_phat_dai',
    title: 'Danh Thắng Phật Giáo Duyên Hải & Cội Bồ Đề Ấn Độ',
    subtitle: 'Khám phá quần thể chùa tháp trên sườn Núi Lớn, tượng Đức Phật tọa thiền 10.2m và cây Bồ Đề chiết từ Ấn Độ 1960',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_thich_ca_phat_dai',
    loreChapter: 'Chương 7: Ánh Sen Sườn Núi Lớn',
    steps: [
      {
        id: 'tcpd_step_1',
        title: 'Vị trí xây dựng trên ngọn núi nào',
        storyPrompt: 'Đứng ngắm nhìn cảnh biển trời bao la từ sườn núi thoai thoải của Vũng Tàu:',
        clueVerse: 'Núi Lớn nghiêng soi bóng biển xanh,\nThích Ca Phật Đài tọa đất lành.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Quần thể danh thắng Thích Ca Phật Đài tọa lạc trên sườn ngọn núi nào tại TP. Vũng Tàu?',
          options: ['Sườn Núi Lớn (Đại Sơn)', 'Núi Nhỏ (Tao Phùng)', 'Núi Dinh', 'Núi Thị Vải'],
          correctAnswer: 'Sườn Núi Lớn (Đại Sơn)',
          explanation: 'Thích Ca Phật Đài tọa lạc tại số 608 đường Trần Phú, trên sườn phía bắc của Núi Lớn (núi Tương Kỳ / Đại Sơn).',
          hintLevel1: 'Ngọn núi lớn nhất của Vũng Tàu.',
          hintLevel2: 'Núi Lớn.',
          hintLevel3: 'Chọn Sườn Núi Lớn (Đại Sơn).'
        }
      },
      {
        id: 'tcpd_step_2',
        title: 'Nguồn gốc cây Bồ Đề linh thiêng',
        storyPrompt: 'Cây Bồ Đề cổ thụ tỏa bóng mát trong hoa viên Thích Ca Phật Đài có nguồn gốc từ đâu?',
        clueVerse: 'Cội bồ đề chiết từ Ấn Độ,\nĐại đức Narada kính tặng trao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cây Bồ Đề tại Thích Ca Phật Đài được chiết từ cội Bồ Đề Đạo Tràng (Bodh Gaya, Ấn Độ) do ai mang về trao tặng năm 1960?',
          options: ['Đại đức Narada Maha Thera (Tích Lan / Sri Lanka)', 'Thiền sư Thích Nhất Hạnh', 'Đại sư Pháp Hiền', 'Đoàn sứ thần Thái Lan'],
          correctAnswer: 'Đại đức Narada Maha Thera (Tích Lan / Sri Lanka)',
          explanation: 'Năm 1960, Đại đức Narada Maha Thera đã mang tặng một nhánh cây Bồ Đề chiết từ chính cây Bồ Đề Đạo Tràng bên Ấn Độ để trồng tại đây.',
          hintLevel1: 'Vị cao tăng nổi tiếng người Sri Lanka: Narada.',
          hintLevel2: 'Đại đức Narada Maha Thera.',
          hintLevel3: 'Chọn Đại đức Narada Maha Thera (Tích Lan / Sri Lanka).'
        }
      },
      {
        id: 'tcpd_step_3',
        title: 'Chiều cao tượng Đức Phật Thích Ca ngồi thiền',
        storyPrompt: 'Pho tượng Đức Phật Thích Ca Mâu Ni tọa thiền trên đài sen trắng cao bao nhiêu mét?',
        clueVerse: 'Đài sen tượng Phật ngự uy nghiêm,\nMười mét hai vươn giữa nắng hiền.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tượng Đức Phật Thích Ca ngồi thiền trên tòa sen tại Thích Ca Phật Đài có chiều cao tổng thể là bao nhiêu?',
          options: ['Cao 10.2 mét (tòa sen cao 3.7m)', 'Cao 5 mét', 'Cao 25 mét', 'Cao 40 mét'],
          correctAnswer: 'Cao 10.2 mét (tòa sen cao 3.7m)',
          explanation: 'Tượng Đức Phật ngồi thiền cao 10.2m (trong đó tượng cao 6.5m, tòa sen cao 3.7m), đúc bằng bê tông cốt thép màu trắng trang nghiêm.',
          hintLevel1: 'Hơn 10 mét (10.2m).',
          hintLevel2: '10.2 mét.',
          hintLevel3: 'Chọn Cao 10.2 mét (tòa sen cao 3.7m).'
        }
      },
      {
        id: 'tcpd_step_4',
        title: 'Bảo tháp Xá lợi Phật hình bát giác',
        storyPrompt: 'Bảo tháp linh thiêng nơi lưu giữ 13 viên xá lợi Phật có hình dáng kiến trúc gì và cao bao nhiêu mét?',
        clueVerse: 'Tháp bát giác vươn mười bảy thước,\nLưu giữ xá lợi ngọc ngàn năm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bảo tháp Xá lợi tại Thích Ca Phật Đài có hình dáng gì và cao bao nhiêu mét?',
          options: ['Hình bát giác (8 cạnh), cao 17 mét', 'Hình tứ giác, cao 5 mét', 'Hình tròn, cao 30 mét', 'Hình tam giác, cao 10 mét'],
          correctAnswer: 'Hình bát giác (8 cạnh), cao 17 mét',
          explanation: 'Bảo tháp Xá lợi hình bát giác cao 17m, bên trong thờ 13 viên ngọc xá lợi Phật do Đại đức Narada trao tặng.',
          hintLevel1: 'Hình bát giác cao 17m.',
          hintLevel2: 'Bát giác 17m.',
          hintLevel3: 'Chọn Hình bát giác (8 cạnh), cao 17 mét.'
        }
      },
      {
        id: 'tcpd_step_5',
        title: 'Sử thi đá tái hiện cuộc đời Đức Phật',
        storyPrompt: 'Quần thể Thích Ca Phật Đài được quy hoạch tái hiện 4 dấu mốc trọng đại nào trong cuộc đời Đức Phật?',
        clueVerse: 'Đản sinh, Xuất gia rồi Thành đạo,\nNhập Niết bàn rạng ánh hào quang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bốn cụm tượng chính tại Thích Ca Phật Đài tái hiện những giai đoạn nào của Đức Phật Thích Ca?',
          options: [
            'Phật Đản sinh, Phật Xuất gia (cắt tóc), Phật Thành đạo và Phật Nhập Niết bàn',
            'Tuổi ấu thơ, đi học, làm vua, xuất gia',
            'Hành trình sang Ấn Độ, Tây Tạng, Trung Hoa, Việt Nam',
            'Tứ đại đệ tử'
          ],
          correctAnswer: 'Phật Đản sinh, Phật Xuất gia (cắt tóc), Phật Thành đạo và Phật Nhập Niết bàn',
          explanation: 'Khu di tích như một cuốn sử thi điêu khắc sống động tái hiện trọn vẹn 4 giai đoạn quan trọng nhất cuộc đời Phật Thích Ca.',
          hintLevel1: 'Đản sinh, Xuất gia, Thành đạo, Niết bàn.',
          hintLevel2: '4 giai đoạn cuộc đời Phật.',
          hintLevel3: 'Chọn Phật Đản sinh, Phật Xuất gia...'
        }
      },
      {
        id: 'tcpd_step_6',
        title: 'Hình ảnh chú ngựa Kiền Trắc',
        storyPrompt: 'Trong cụm tượng Phật Xuất gia, hình ảnh Thái tử Tất Đạt Đa cắt tóc có sự xuất hiện của chú ngựa trung thành tên là gì?',
        clueVerse: 'Ngựa Kiền Trắc hí vang đêm vắng,\nTiễn bước thái tử dấn thân tu.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên con ngựa bạch trung thành của Thái tử Tất Đạt Đa khi xuất gia (chứa từ "Kiền Trắc"):',
          correctAnswer: 'Kiền Trắc',
          keywords: ['kiền trắc', 'kien trac', 'kanthaka'],
          explanation: 'Ngựa Kiền Trắc (Kanthaka) và người hầu Xa Nặc đã đưa Thái tử vượt thành Ca Tỳ La Vệ trong đêm xuất gia.',
          hintLevel1: 'Tên con ngựa là Kiền Trắc.',
          hintLevel2: 'Kiền Trắc.',
          hintLevel3: 'Nhập: Kiền Trắc.'
        }
      },
      {
        id: 'tcpd_step_7',
        title: 'Năm khánh thành quần thể Thích Ca Phật Đài',
        storyPrompt: 'Quần thể Thích Ca Phật Đài được hoàn thành và khánh thành vào năm nào?',
        clueVerse: 'Một chín sáu ba rạng ánh thiền,\nKhánh thành Phật đài đón khách hiền.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khánh thành Thích Ca Phật Đài (gợi ý: 196x):',
          correctAnswer: '1963',
          keywords: ['1963'],
          explanation: 'Công trình được chính thức khánh thành vào ngày 10/3/1963 sau gần 2 năm thi công công phu.',
          hintLevel1: 'Năm 1963.',
          hintLevel2: '1963.',
          hintLevel3: 'Nhập: 1963.'
        }
      },
      {
        id: 'tcpd_step_8',
        title: 'Tầm nhìn bao quát vịnh Gành Rái',
        storyPrompt: 'Đứng từ sân tượng Phật nhìn xuống, du khách có thể phóng tầm mắt chiêm ngưỡng vùng vịnh biển nào?',
        clueVerse: 'Vịnh Gành Rái sóng vỗ rì rào,\nTàu bè cập bến ngắm trăng sao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Vùng vịnh biển tuyệt đẹp nhìn thấy từ Thích Ca Phật Đài là vịnh nào?',
          options: ['Vịnh Gành Rái', 'Vịnh Cam Ranh', 'Vịnh Hạ Long', 'Vịnh Thái Lan'],
          correctAnswer: 'Vịnh Gành Rái',
          explanation: 'Từ Thích Ca Phật Đài, bạn có thể ngắm toàn cảnh Vịnh Gành Rái và luồng tàu biển quốc tế ra vào sông Lòng Tàu và Thị Vải.',
          hintLevel1: 'Vịnh Gành Rái.',
          hintLevel2: 'Gành Rái.',
          hintLevel3: 'Chọn Vịnh Gành Rái.'
        }
      },
      {
        id: 'tcpd_step_9',
        title: 'Tượng Phật nhập Niết bàn dài bao nhiêu mét',
        storyPrompt: 'Pho tượng Đức Phật Thích Ca nằm nghiêng nhập Niết bàn tại cụm tượng Niết bàn có chiều dài là:',
        clueVerse: 'Phật nằm an lạc giữa rừng hoa,\nMười hai thước trải bóng trăng tà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tượng Phật nhập Niết bàn tại Thích Ca Phật Đài dài bao nhiêu mét?',
          options: ['Dài 12.2 mét', 'Dài 50 mét', 'Dài 3 mét', 'Dài 25 mét'],
          correctAnswer: 'Dài 12.2 mét',
          explanation: 'Tượng Phật nhập Niết bàn quay đầu về hướng Tây dài 12.2m, xung quanh tạc hình tượng 9 đệ tử đứng chắp tay tiễn biệt.',
          hintLevel1: 'Dài 12.2m.',
          hintLevel2: '12.2 mét.',
          hintLevel3: 'Chọn Dài 12.2 mét.'
        }
      },
      {
        id: 'tcpd_step_10',
        title: 'Chùa Hộ Pháp ở chân núi',
        storyPrompt: 'Ngôi chùa cổ kính nằm ở chân đồi trước lối lên Thích Ca Phật Đài có tên là gì?',
        clueVerse: 'Chùa Hộ Pháp rợp bóng cây bàng,\nLối lên Phật đài thanh tịnh sang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ngôi chùa nằm ngay cửa ngõ trước đường bậc thang lên Thích Ca Phật Đài tên là gì?',
          options: ['Chùa Hộ Pháp (Chùa Thiền Lâm)', 'Chùa Quán Thế Âm', 'Chùa Linh Sơn', 'Chùa Hải Vân'],
          correctAnswer: 'Chùa Hộ Pháp (Chùa Thiền Lâm)',
          explanation: 'Ngôi chùa dưới chân núi có tên là Chùa Hộ Pháp (nguyên gốc Thiền Lâm Tự lập năm 1957).',
          hintLevel1: 'Chùa Hộ Pháp.',
          hintLevel2: 'Hộ Pháp.',
          hintLevel3: 'Chọn Chùa Hộ Pháp (Chùa Thiền Lâm).'
        }
      },
      {
        id: 'tcpd_step_11',
        title: 'Xếp hạng Di tích Quốc gia',
        storyPrompt: 'Thích Ca Phật Đài được Bộ Văn hóa Thông tin công nhận là Di tích Lịch sử - Văn hóa cấp Quốc gia vào năm nào?',
        clueVerse: 'Tám chín vinh danh di tích vàng,\nThích Ca Phật Đài ngát hương trang.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm Thích Ca Phật Đài được công nhận Di tích cấp Quốc gia (gợi ý: 198x):',
          correctAnswer: '1989',
          keywords: ['1989'],
          explanation: 'Di tích được công nhận Di tích Lịch sử - Văn hóa cấp Quốc gia theo Quyết định ngày 2/3/1989.',
          hintLevel1: 'Năm 1989.',
          hintLevel2: '1989.',
          hintLevel3: 'Nhập: 1989.'
        }
      },
      {
        id: 'tcpd_step_12',
        title: 'Tượng Phật chuyển Pháp Luân',
        storyPrompt: 'Bức tượng tái hiện Đức Phật thuyết pháp lần đầu tiên cho 5 anh em Kiều Trần Như ở vườn Lộc Uyển tên là gì?',
        clueVerse: 'Vườn Lộc Uyển chuyển Pháp Luân xưa,\nNăm vị tỳ kheo đạo sáng thừa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bài kinh đầu tiên Đức Phật thuyết giảng tại vườn Lộc Uyển là kinh gì?',
          options: ['Kinh Chuyển Pháp Luân (Tứ Diệu Đế)', 'Kinh Kim Cương', 'Kinh Pháp Hoa', 'Kinh Lăng Nghiêm'],
          correctAnswer: 'Kinh Chuyển Pháp Luân (Tứ Diệu Đế)',
          explanation: 'Đức Phật chuyển bánh xe pháp luân thuyết giảng bài kinh đầu tiên về Tứ Diệu Đế (Khổ, Tập, Diệt, Đạo) cho 5 anh em Kiều Trần Như.',
          hintLevel1: 'Chuyển Pháp Luân.',
          hintLevel2: 'Kinh Chuyển Pháp Luân.',
          hintLevel3: 'Chọn Kinh Chuyển Pháp Luân (Tứ Diệu Đế).'
        }
      },
      {
        id: 'tcpd_step_13',
        title: 'Không gian thiên nhiên trong lành',
        storyPrompt: 'Cảnh quan bao quanh Thích Ca Phật Đài có sự hòa hợp độc đáo giữa yếu tố nào?',
        clueVerse: 'Rừng cây hoa cỏ biển mênh mông,\nThanh tịnh an nhiên thỏa ước mong.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Thích Ca Phật Đài có sự kết hợp hài hòa tuyệt mỹ giữa kiến trúc tôn giáo và cảnh quan thiên nhiên rừng cây sườn núi nhìn thẳng ra biển cả bao la?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cảnh sắc non xanh nước biếc hòa cùng không gian thiền tịnh khiến nơi đây trở thành danh thắng độc nhất vô nhị.',
          hintLevel1: 'Non nước hữu tình.',
          hintLevel2: 'Hòa quyện núi rừng và biển.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'tcpd_step_14',
        title: 'Bậc thang đá dẫn lên đài sen',
        storyPrompt: 'Hệ thống đường dẫn lên tượng Phật gồm bao nhiêu bậc thang đá uốn lượn rợp bóng cây?',
        clueVerse: 'Bậc đá uốn quanh sườn núi xanh,\nBước chân thanh thản dạ an lành.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đường lên Thích Ca Phật Đài là hệ thống lối đi như thế nào?',
          options: [
            'Các bậc thang đá thoai thoải rợp bóng mát cây bồ đề và hoa sứ',
            'Thang máy kính hiện đại',
            'Đường hầm cáp treo ngầm',
            'Đường sắt leo núi'
          ],
          correctAnswer: 'Các bậc thang đá thoai thoải rợp bóng mát cây bồ đề và hoa sứ',
          explanation: 'Lối đi gồm các bậc tam cấp thoai thoải uốn lượn qua những rặng hoa sứ thơm ngát và rừng cây cổ thụ.',
          hintLevel1: 'Bậc thang đá thoai thoải.',
          hintLevel2: 'Bậc thang đá dưới bóng cây sứ.',
          hintLevel3: 'Chọn Các bậc thang đá thoai thoải...'
        }
      },
      {
        id: 'tcpd_step_15',
        title: 'Ý nghĩa tâm linh của ngọn hải đăng tâm hồn',
        storyPrompt: 'Đối với ngư dân Vũng Tàu đi biển, hình ảnh Thích Ca Phật Đài trên sườn núi mang ý nghĩa gì?',
        clueVerse: 'Từ khơi xa ngóng bóng Phật đài,\nCầu mong biển lặng sóng êm trôi.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Khi đi biển từ xa nhìn vào đất liền, tượng Phật trắng sừng sững trên sườn núi như một điểm tựa tinh thần, soi đường và cầu bình an cho ngư dân vượt qua sóng gió?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tượng Phật trên núi từ lâu đã trở thành biểu tượng che chở bình an trong tâm thức của bà con ngư dân miền duyên hải.',
          hintLevel1: 'Điểm tựa tâm linh của ngư dân.',
          hintLevel2: 'Biểu tượng bình an trên biển.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 8. Nhà thờ Đức Bà Sài Gòn - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_duc_ba',
    locationId: 'loc_duc_ba',
    title: 'Giải Mã Viên Ngọc Tân Roman & Gạch Đỏ Marseille',
    subtitle: 'Khám phá bí mật gạch ngói vận chuyển từ Pháp, cặp tháp chuông 57.6m và tượng Đức Mẹ Hòa Bình bằng cẩm thạch trắng Carrara',
    category: 'architecture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_duc_ba',
    loreChapter: 'Chương 8: Tiếng Chuông Ngân Giữa Đô Thành',
    steps: [
      {
        id: 'ndb_step_1',
        title: 'Xuất xứ những viên gạch đỏ không bám rêu',
        storyPrompt: 'Đứng ngắm nhìn những bức tường gạch đỏ hồng rực rỡ suốt hơn 140 năm qua:',
        clueVerse: 'Gạch đỏ Marseille vượt sóng khơi,\nTrăm năm sắc thắm rạng khung trời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Toàn bộ gạch đỏ xây dựng Nhà thờ Đức Bà Sài Gòn được sản xuất và chở bằng tàu biển từ thành phố nào của nước Pháp?',
          options: ['Thành phố cảng Marseille (Pháp)', 'Thành phố Paris', 'Thành phố Lyon', 'Thành phố Bordeaux'],
          correctAnswer: 'Thành phố cảng Marseille (Pháp)',
          explanation: 'Toàn bộ gạch xây tường được đặt nung tại vùng Marseille (Pháp), có đặc tính chịu nhiệt tốt, không bám rêu mốc và giữ nguyên màu đỏ hồng tươi tắn suốt hơn 140 năm.',
          hintLevel1: 'Thành phố cảng nổi tiếng miền Nam nước Pháp.',
          hintLevel2: 'Marseille.',
          hintLevel3: 'Chọn Thành phố cảng Marseille (Pháp).'
        }
      },
      {
        id: 'ndb_step_2',
        title: 'Kiến trúc sư thiết kế công trình',
        storyPrompt: 'Bản thiết kế Nhà thờ Đức Bà Sài Gòn được chọn từ đồ án đoạt giải nhất của vị kiến trúc sư người Pháp nào?',
        clueVerse: 'Jules Bourard vẽ nét uy nghi,\nTân Roman Gothic rạng sử thi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ai là Kiến trúc sư thiết kế Vương cung Thánh đường Đức Bà Sài Gòn?',
          options: ['Jules Bourard', 'Paul Hermite', 'Marie-Alfred Foulhoux', 'Gustave Eiffel'],
          correctAnswer: 'Jules Bourard',
          explanation: 'Kiến trúc sư Jules Bourard đã chiến thắng trong cuộc thi đồ án kiến trúc năm 1877 để trực tiếp chỉ huy xây dựng thánh đường.',
          hintLevel1: 'Họ bắt đầu bằng chữ B.',
          hintLevel2: 'Jules Bourard.',
          hintLevel3: 'Chọn Jules Bourard.'
        }
      },
      {
        id: 'ndb_step_3',
        title: 'Chiều cao đôi tháp chuông',
        storyPrompt: 'Đôi tháp chuông vươn cao kiêu hãnh giữa bầu trời Sài Gòn có chiều cao chính xác là bao nhiêu?',
        clueVerse: 'Tháp chuông năm mươi bảy mét sáu,\nVươn thẳng trời xanh bóng nguy nga.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chiều cao tổng thể của đôi tháp chuông Nhà thờ Đức Bà (sau khi gắn thêm chóp nhọn thép năm 1895) là bao nhiêu?',
          options: ['57.6 mét', '36.6 mét', '80.0 mét', '100 mét'],
          correctAnswer: '57.6 mét',
          explanation: 'Ban đầu hai tháp chuông cao 36.6m, đến năm 1895 được lắp thêm 2 chóp nhọn bọc thép cao 21m, nâng tổng chiều cao lên 57.6m.',
          hintLevel1: '57.6 mét.',
          hintLevel2: '57.6m.',
          hintLevel3: 'Chọn 57.6 mét.'
        }
      },
      {
        id: 'ndb_step_4',
        title: 'Bộ 6 quả chuông đồng',
        storyPrompt: 'Trong hai tháp chuông treo bộ chuông đồng gồm bao nhiêu quả với tổng trọng lượng gần 30 tấn?',
        clueVerse: 'Sáu quả chuông đồng ngân thánh thót,\nSol La Si Do Re Mi vang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bộ chuông trong tháp Nhà thờ Đức Bà gồm mấy quả chuông đồng đúc tại Pháp năm 1879?',
          options: ['6 quả chuông (âm Sol, La, Si, Do, Re, Mi)', '2 quả chuông', '4 quả chuông', '12 quả chuông'],
          correctAnswer: '6 quả chuông (âm Sol, La, Si, Do, Re, Mi)',
          explanation: 'Nhà thờ có bộ 6 chuông đồng lớn nặng tổng cộng 28.85 tấn do hãng đúc chuông danh tiếng Bollee tại Pháp chế tác.',
          hintLevel1: 'Gồm 6 quả chuông tương ứng 6 nốt nhạc.',
          hintLevel2: '6 quả chuông.',
          hintLevel3: 'Chọn 6 quả chuông (âm Sol, La, Si, Do, Re, Mi).'
        }
      },
      {
        id: 'ndb_step_5',
        title: 'Tượng Đức Mẹ Hòa Bình bằng cẩm thạch trắng',
        storyPrompt: 'Bức tượng Đức Mẹ đặt tại công viên quảng trường trước nhà thờ được tạc từ loại đá quý nào?',
        clueVerse: 'Cẩm thạch Carrara trắng tinh khôi,\nĐức Mẹ mỉm cười ban phúc đời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tượng Đức Mẹ Hòa Bình dựng năm 1959 được tạc bằng loại đá cẩm thạch trắng nguyên khối nhập từ nước nào?',
          options: ['Đá cẩm thạch trắng Carrara (nước Ý / Italia)', 'Đá hoa cương Việt Nam', 'Đá cẩm thạch Hy Lạp', 'Thạch cao Pháp'],
          correctAnswer: 'Đá cẩm thạch trắng Carrara (nước Ý / Italia)',
          explanation: 'Tượng Đức Mẹ Hòa Bình cao 4.6m, nặng 5.8 tấn do nhà điêu khắc người Ý G. Ciocchetti tạc bằng đá cẩm thạch trắng Carrara trứ danh của nước Ý.',
          hintLevel1: 'Đá cẩm thạch vùng Carrara, Italia.',
          hintLevel2: 'Đá cẩm thạch Ý.',
          hintLevel3: 'Chọn Đá cẩm thạch trắng Carrara (nước Ý / Italia).'
        }
      },
      {
        id: 'ndb_step_6',
        title: 'Tên gọi tước hiệu Vương cung Thánh đường',
        storyPrompt: 'Nhà thờ Đức Bà Sài Gòn được Tòa Thánh Vatican phong tặng tước hiệu cao quý "Vương cung Thánh đường" vào năm nào?',
        clueVerse: 'Năm chín Vatican tấn phong danh hiệu,\nVương cung Thánh đường rạng đức tin.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm Nhà thờ được nâng lên hàng Tiểu Vương cung Thánh đường (gợi ý: 195x):',
          correctAnswer: '1959',
          keywords: ['1959'],
          explanation: 'Năm 1959, Giáo hoàng Gioan XXIII đã ban sắc lệnh nâng Nhà thờ Chính tòa Sài Gòn lên hàng Tiểu Vương cung Thánh đường (Basilica).',
          hintLevel1: 'Năm 1959.',
          hintLevel2: '1959.',
          hintLevel3: 'Nhập: 1959.'
        }
      },
      {
        id: 'ndb_step_7',
        title: 'Hệ thống kính màu hoa hồng',
        storyPrompt: 'Bên trong thánh đường có 56 ô cửa sổ kính màu tráng lệ mô tả các tích truyện Kinh thánh do hãng nào sản xuất?',
        clueVerse: 'Kính màu hoa hồng lung linh sắc,\nÁnh sáng thiên đường rọi sớm mai.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các ô kính màu nghệ thuật (Stained glass) của Nhà thờ Đức Bà được hãng Lorin danh tiếng của thành phố Chartres (Pháp) sản xuất thủ công tỉ mỉ?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hệ thống kính màu tráng lệ do hãng Lorin sản xuất mang lại hiệu ứng ánh sáng huyền ảo cho thánh đường.',
          hintLevel1: 'Kính màu nghệ thuật từ Chartres, Pháp.',
          hintLevel2: 'Hãng Lorin.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ndb_step_8',
        title: 'Đặc điểm độc đáo về hàng rào bao quanh',
        storyPrompt: 'Một điểm khác biệt hoàn toàn giữa Nhà thờ Đức Bà Sài Gòn với nhiều nhà thờ khác là gì?',
        clueVerse: 'Không hàng rào chắn mở thênh thang,\nHòa vào quảng trường đón nắng vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Điểm đặc biệt trong quy hoạch không gian xung quanh Nhà thờ Đức Bà là gì?',
          options: [
            'Không hề có hàng rào hay tường bao quanh, tạo không gian mở hòa nhập với quảng trường',
            'Bao quanh bởi hào nước sâu',
            'Tường thành kiên cố bằng đá dày 2m',
            'Hàng rào thép gai bao bọc kín'
          ],
          correctAnswer: 'Không hề có hàng rào hay tường bao quanh, tạo không gian mở hòa nhập với quảng trường',
          explanation: 'Nhà thờ không có hàng rào ngăn cách, tạo nên một không gian giao lưu công cộng thanh lịch, cởi mở giữa trung tâm đô thị.',
          hintLevel1: 'Không có hàng rào bao bọc.',
          hintLevel2: 'Không gian mở hoàn toàn.',
          hintLevel3: 'Chọn Không hề có hàng rào hay tường bao quanh...'
        }
      },
      {
        id: 'ndb_step_9',
        title: 'Chiếc đồng hồ cổ ở mặt tiền',
        storyPrompt: 'Chiếc đồng hồ lớn giữa hai tháp chuông sản xuất tại Thụy Sĩ năm 1887 mang nhãn hiệu gì?',
        clueVerse: 'Đồng hồ Thụy Sĩ nhịp tuần hoàn,\nHơn trăm năm chạy chẳng sai nhàn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bộ máy đồng hồ cơ học cổ giữa mặt tiền Nhà thờ Đức Bà nặng khoảng 1 tấn do hãng nào chế tác?',
          options: ['Hãng R.A (Thụy Sĩ)', 'Hãng Rolex', 'Hãng Seiko', 'Hãng Casio'],
          correctAnswer: 'Hãng R.A (Thụy Sĩ)',
          explanation: 'Bộ máy đồng hồ cổ do hãng R.A (Thụy Sĩ) chế tạo năm 1887, vận hành bằng hệ thống dây cót và quả lắc cơ học bền bỉ.',
          hintLevel1: 'Hãng đồng hồ cổ R.A.',
          hintLevel2: 'Hãng R.A.',
          hintLevel3: 'Chọn Hãng R.A (Thụy Sĩ).'
        }
      },
      {
        id: 'ndb_step_10',
        title: 'Cây đàn Đại phong cầm cổ (Organ pipe)',
        storyPrompt: 'Trên gác đàn của nhà thờ từng có cây đàn phong cầm ống cổ xưa được chế tác bởi chuyên gia nào?',
        clueVerse: 'Ống đồng phong cầm vang thánh thót,\nKhúc nhạc thiên cung vọng giáo đường.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nhà thờ Đức Bà sở hữu một trong những cây đại phong cầm ống (pipe organ) lâu đời nhất Đông Nam Á do các nghệ nhân Pháp chế tác?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cây đại phong cầm cổ với hệ thống phím và ống hơi bằng gỗ và đồng là báu vật âm nhạc thánh ca vô giá.',
          hintLevel1: 'Đại phong cầm ống cổ kính.',
          hintLevel2: 'Nhạc cụ vô giá.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ndb_step_11',
        title: 'Số lượng cột lớn trong gian chính',
        storyPrompt: 'Lòng thánh đường được chia làm gian chính và hai gian phụ bởi hai hàng cột lớn gồm bao nhiêu cột tượng trưng cho 12 vị Tông đồ?',
        clueVerse: 'Mười hai cột lớn nâng trần cao,\nTượng trưng Tông đồ rạng ánh sao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai hàng cột chính trong lòng nhà thờ gồm bao nhiêu cột hình chữ nhật tượng trưng cho 12 vị Tông đồ?',
          options: ['12 cột chính', '4 cột', '8 cột', '24 cột'],
          correctAnswer: '12 cột chính',
          explanation: 'Hai hàng cột lớn gồm 12 cột (mỗi bên 6 cột) tượng trưng cho 12 vị Tông đồ của Chúa Kitô.',
          hintLevel1: 'Tương ứng 12 vị Tông đồ.',
          hintLevel2: '12 cột.',
          hintLevel3: 'Chọn 12 cột chính.'
        }
      },
      {
        id: 'ndb_step_12',
        title: 'Vật liệu ngói lợp mái nhà thờ',
        storyPrompt: 'Những viên ngói lợp trên mái nhà thờ được nhập từ Pháp gồm những loại ngói truyền thống nào?',
        clueVerse: 'Ngói ngói vảy cá xen ngói âm dương,\nChắn mưa nhiệt đới tỏa sắc hương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Mái nhà thờ được lợp bằng loại ngói nào?',
          options: [
            'Ngói ngàm Marseille và ngói vảy cá (ngói mâm)',
            'Tôn mạ kẽm',
            'Tấm lợp nhựa lấy sáng',
            'Lá dừa nước'
          ],
          correctAnswer: 'Ngói ngàm Marseille và ngói vảy cá (ngói mâm)',
          explanation: 'Mái nhà thờ lợp bằng ngói ngàm Marseille và ngói vảy cá đất nung trứ danh từ Pháp.',
          hintLevel1: 'Ngói nung Marseille và ngói vảy cá.',
          hintLevel2: 'Ngói Marseille.',
          hintLevel3: 'Chọn Ngói ngàm Marseille và ngói vảy cá...'
        }
      },
      {
        id: 'ndb_step_13',
        title: 'Thời gian đặt viên đá đầu tiên',
        storyPrompt: 'Lễ đặt viên đá đầu tiên khởi công xây dựng Nhà thờ Đức Bà diễn ra vào ngày tháng năm nào?',
        clueVerse: 'Bảy tháng mười năm bảy bảy xưa,\nGiám mục Colombert làm lễ đưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Viên đá đầu tiên xây dựng Nhà thờ Đức Bà Sài Gòn được đặt vào ngày nào?',
          options: ['Ngày 07 tháng 10 năm 1877', 'Ngày 01 tháng 01 năm 1860', 'Ngày 30 tháng 04 năm 1975', 'Ngày 02 tháng 09 năm 1945'],
          correctAnswer: 'Ngày 07 tháng 10 năm 1877',
          explanation: 'Lễ đặt viên đá đầu tiên do Giám mục Isidore Colombert chủ trì vào ngày 7/10/1877.',
          hintLevel1: 'Ngày 07/10/1877.',
          hintLevel2: '07 tháng 10 năm 1877.',
          hintLevel3: 'Chọn Ngày 07 tháng 10 năm 1877.'
        }
      },
      {
        id: 'ndb_step_14',
        title: 'Tên quảng trường trước nhà thờ',
        storyPrompt: 'Quảng trường trước mặt tiền Nhà thờ Đức Bà mang tên lịch sử nào?',
        clueVerse: 'Công xã Paris rợp bóng me bay,\nQuảng trường lịch sử giữa chốn này.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên công trường (quảng trường) nơi Nhà thờ Đức Bà và Bưu điện tọa lạc (chứa từ "Công xã Paris"):',
          correctAnswer: 'Công xã Paris',
          keywords: ['công xã paris', 'cong xa paris', 'paris'],
          explanation: 'Công trường Công xã Paris là quảng trường trung tâm kết nối Nhà thờ Đức Bà, Bưu điện Trung tâm và Đường sách Nguyễn Văn Bình.',
          hintLevel1: 'Công trường Công xã Paris.',
          hintLevel2: 'Công xã Paris.',
          hintLevel3: 'Nhập: Công xã Paris.'
        }
      },
      {
        id: 'ndb_step_15',
        title: 'Dự án đại trùng tu bảo tồn di sản',
        storyPrompt: 'Hiện nay, Nhà thờ Đức Bà đang trải qua dự án đại trùng tu bảo tồn với mục tiêu:',
        clueVerse: 'Trùng tu cẩn trọng giữ nét xưa,\nBảo tồn di sản vạn năm thừa.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Dự án đại trùng tu Nhà thờ Đức Bà sử dụng các loại vật liệu nhập khẩu trực tiếp từ Pháp, Bỉ, Đức (như ngói Marseille, kính màu, gạch nung) để phục chế nguyên bản 100% công trình?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Dự án trùng tu thực hiện theo tiêu chuẩn bảo tồn quốc tế khắt khe, nhập ngói và vật liệu từ đúng các nhà máy gốc tại châu Âu để giữ nguyên giá trị lịch sử.',
          hintLevel1: 'Phục chế theo chuẩn quốc tế.',
          hintLevel2: 'Nhập vật liệu gốc nguyên bản.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 9. Chợ Thủ Dầu Một (Bình Dương) - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_cho_thu_dau_mot',
    locationId: 'loc_cho_thu_dau_mot',
    title: 'Giải Mã Tháp Đồng Hồ Cổ & Ẩm Thực Bánh Bèo Bì',
    subtitle: 'Khám phá kiến trúc nhà lồng chợ 1935, tháp đồng hồ tròn ven sông Sài Gòn và đặc sản bánh bèo bì Mỹ Liên hơn 100 năm',
    category: 'cuisine',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_cho_thu_dau_mot',
    loreChapter: 'Chương 9: Hương Vị Đất Thủ',
    steps: [
      {
        id: 'ctdm_step_1',
        title: 'Tháp đồng hồ hình trụ tròn',
        storyPrompt: 'Đứng trước cổng chính Chợ Thủ Dầu Một, bạn hãy ngước nhìn lên biểu tượng nổi bật nhất của chợ:',
        clueVerse: 'Tháp tròn đồng hồ vươn giữa trời,\nBốn mặt chỉ giờ đón khách chơi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Kiến trúc nổi bật nhất tại mặt tiền Chợ Thủ Dầu Một (Chợ Phú Cường) là gì?',
          options: [
            'Tháp đồng hồ hình trụ tròn vươn cao ở chính giữa mặt tiền',
            'Đôi tháp chuông Gothic',
            'Cổng tam quan mái cong',
            'Kim tự tháp kính'
          ],
          correctAnswer: 'Tháp đồng hồ hình trụ tròn vươn cao ở chính giữa mặt tiền',
          explanation: 'Tháp đồng hồ hình trụ tròn độc đáo mang phong cách Art Deco kết hợp nhiệt đới là biểu tượng nhận diện của Chợ Thủ Dầu Một suốt gần 1 thế kỷ.',
          hintLevel1: 'Tháp đồng hồ tròn.',
          hintLevel2: 'Tháp đồng hồ hình trụ tròn.',
          hintLevel3: 'Chọn Tháp đồng hồ hình trụ tròn...'
        }
      },
      {
        id: 'ctdm_step_2',
        title: 'Đặc sản Bánh bèo bì Mỹ Liên hơn 100 năm',
        storyPrompt: 'Món ăn đặc sản nức tiếng đất Thủ được công nhận Kỷ lục ẩm thực Châu Á là gì?',
        clueVerse: 'Bánh bèo bì thắm vị quê hương,\nNước mắm chua ngọt ngát sắc hương.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên món bánh đặc sản nổi tiếng nhất của Bình Dương ăn kèm với bì heo và thịt nạc ram (chứa từ "bánh bèo bì"):',
          correctAnswer: 'Bánh bèo bì',
          keywords: ['bánh bèo bì', 'banh beo bi', 'bèo bì'],
          explanation: 'Bánh bèo bì (nổi tiếng nhất là Bánh bèo bì Mỹ Liên - Chợ Búng có từ năm 1901) là đặc sản trứ danh của Bình Dương.',
          hintLevel1: 'Bánh bèo ăn cùng với bì.',
          hintLevel2: 'Bánh bèo bì.',
          hintLevel3: 'Nhập: Bánh bèo bì.'
        }
      },
      {
        id: 'ctdm_step_3',
        title: 'Năm xây dựng nhà lồng chợ hiện đại',
        storyPrompt: 'Nhà lồng chợ Chợ Thủ Dầu Một kiên cố với tháp đồng hồ được xây dựng vào giai đoạn nào thời Pháp thuộc?',
        clueVerse: 'Ba lăm ba tám dựng chợ sang,\nBên dòng sông chảy đón hàng ngàn ghe.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nhà lồng Chợ Thủ Dầu Một hiện nay được xây dựng vào năm nào?',
          options: ['1935 - 1938', '1860 - 1863', '1975 - 1980', '2010 - 2012'],
          correctAnswer: '1935 - 1938',
          explanation: 'Chợ được xây dựng kiên cố từ năm 1935 và khánh thành vào năm 1938 dưới thời Pháp thuộc.',
          hintLevel1: 'Thập niên 1930.',
          hintLevel2: '1935 - 1938.',
          hintLevel3: 'Chọn 1935 - 1938.'
        }
      },
      {
        id: 'ctdm_step_4',
        title: 'Con sông uốn lượn cạnh chợ',
        storyPrompt: 'Chợ Thủ Dầu Một có bến thuyền giao thương nhộn nhịp nằm ngay bên bờ con sông nào?',
        clueVerse: 'Bến sông Sài Gòn ghe xuôi ngược,\nChở trái sầu riêng trái măng cụt về.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chợ Thủ Dầu Một tọa lạc ngay sát bờ con sông nào?',
          options: ['Sông Sài Gòn', 'Sông Đồng Nai', 'Sông Tiền', 'Sông Hậu'],
          correctAnswer: 'Sông Sài Gòn',
          explanation: 'Chợ nằm ven sông Sài Gòn và rạch Thủ Dầu Một, thuận tiện cho thuyền bè từ Lục tỉnh Nam Kỳ và miệt vườn Lái Thiêu cập bến giao thương.',
          hintLevel1: 'Dòng sông Sài Gòn.',
          hintLevel2: 'Sông Sài Gòn.',
          hintLevel3: 'Chọn Sông Sài Gòn.'
        }
      },
      {
        id: 'ctdm_step_5',
        title: 'Đặc sản trái cây miệt vườn Lái Thiêu',
        storyPrompt: 'Mỗi độ hè về (tháng 5 - tháng 7 âm lịch), Chợ Thủ ngập tràn loại trái cây nữ hoàng miệt vườn Lái Thiêu nào?',
        clueVerse: 'Măng cụt Lái Thiêu ngọt đậm đà,\nSầu riêng béo ngậy rạng quê ta.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại quả đặc sản vang danh của miệt vườn Bình Dương được bán nhiều nhất tại Chợ Thủ là quả gì?',
          options: ['Măng cụt Lái Thiêu (và Sầu riêng)', 'Táo đá Sa Pa', 'Vải thiều Bắc Giang', 'Nhãn lồng Hưng Yên'],
          correctAnswer: 'Măng cụt Lái Thiêu (và Sầu riêng)',
          explanation: 'Măng cụt Lái Thiêu với múi trắng ngần, vị ngọt thanh mát xen lẫn chua nhẹ được mệnh danh là nữ hoàng trái cây nhiệt đới.',
          hintLevel1: 'Măng cụt Lái Thiêu.',
          hintLevel2: 'Măng cụt.',
          hintLevel3: 'Chọn Măng cụt Lái Thiêu (và Sầu riêng).'
        }
      },
      {
        id: 'ctdm_step_6',
        title: 'Nem Lái Thiêu gia truyền',
        storyPrompt: 'Món nem truyền thống gói bằng lá chuối xanh có vị chua cay ngọt đậm đà đất Thủ tên là gì?',
        clueVerse: 'Nem Lái Thiêu hồng tươi thắm sắc,\nGói lá chuối tiêu đượm nghĩa tình.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên đặc sản nem chua truyền thống của vùng Lái Thiêu - Bình Dương (chứa từ "Nem Lái Thiêu"):',
          correctAnswer: 'Nem Lái Thiêu',
          keywords: ['nem lái thiêu', 'nem lai thieu'],
          explanation: 'Nem Lái Thiêu làm từ thịt nạc heo tươi quết nhuyễn cùng bì heo và tỏi ớt, lên men tự nhiên gói lá chuối xanh thơm lừng.',
          hintLevel1: 'Nem gắn với địa danh Lái Thiêu.',
          hintLevel2: 'Nem Lái Thiêu.',
          hintLevel3: 'Nhập: Nem Lái Thiêu.'
        }
      },
      {
        id: 'ctdm_step_7',
        title: 'Phố cổ người Hoa quanh chợ',
        storyPrompt: 'Quanh Chợ Thủ Dầu Một có những dãy phố buôn bán của cộng đồng nào định cư từ thế kỷ 18-19?',
        clueVerse: 'Phố cổ người Hoa mái ngói nghiêng,\nĐèn lồng đỏ thắm giữa phố thiêng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cộng đồng cư dân nào đã cùng người Việt xây dựng nên các dãy phố buôn bán sầm uất quanh chợ Thủ?',
          options: ['Người Hoa (các bang Triều Châu, Quảng Đông, Phúc Kiến, Hẹ)', 'Người Chăm', 'Người Khmer', 'Người Ấn'],
          correctAnswer: 'Người Hoa (các bang Triều Châu, Quảng Đông, Phúc Kiến, Hẹ)',
          explanation: 'Các thương nhân người Hoa đến định cư ven sông Sài Gòn đã lập nên nhiều cửa hiệu buôn bán gốm sứ, thuốc bắc và ẩm thực đặc sắc.',
          hintLevel1: 'Cộng đồng người Hoa di cư.',
          hintLevel2: 'Người Hoa.',
          hintLevel3: 'Chọn Người Hoa (các bang Triều Châu, Quảng Đông...)'
        }
      },
      {
        id: 'ctdm_step_8',
        title: 'Chùa Bà Thiên Hậu Phú Cường gần chợ',
        storyPrompt: 'Ngay cạnh Chợ Thủ Dầu Một có ngôi miếu cổ linh thiêng thờ Thiên Hậu Thánh Mẫu thu hút hàng triệu du khách dịp rằm tháng Giêng là gì?',
        clueVerse: 'Rằm tháng Giêng rước kiệu Bà Thiên Hậu,\nĐất Thủ rộn ràng lễ hội xuân.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên ngôi miếu thờ Thiên Hậu Thánh Mẫu nổi tiếng bậc nhất gần chợ Thủ Dầu Một là gì?',
          options: ['Chùa Bà Thiên Hậu (Miếu Bà Phú Cường)', 'Chùa Bà Đen Tây Ninh', 'Chùa Bà Chúa Xứ Châu Đốc', 'Chùa Thầy'],
          correctAnswer: 'Chùa Bà Thiên Hậu (Miếu Bà Phú Cường)',
          explanation: 'Chùa Bà Thiên Hậu (cơ sở 1 tại đường Nguyễn Du, TP. Thủ Dầu Một) là trung tâm lễ hội rằm tháng Giêng lớn nhất miền Đông Nam Bộ.',
          hintLevel1: 'Chùa Bà Thiên Hậu.',
          hintLevel2: 'Chùa Bà Phú Cường.',
          hintLevel3: 'Chọn Chùa Bà Thiên Hậu (Miếu Bà Phú Cường).'
        }
      },
      {
        id: 'ctdm_step_9',
        title: 'Món Gỏi gà măng cụt nức tiếng',
        storyPrompt: 'Món ăn đặc sản "gây sốt" ẩm thực mỗi mùa hè tại Bình Dương kết hợp giữa thịt gà ta thả vườn và trái măng cụt xanh là gì?',
        clueVerse: 'Măng cụt giòn chua hòa thịt gà,\nĐậm đà nước mắm thắm tình quê.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên món gỏi nức tiếng mùa hè của Bình Dương (chứa từ "gỏi gà măng cụt"):',
          correctAnswer: 'Gỏi gà măng cụt',
          keywords: ['gỏi gà măng cụt', 'goi ga mang cut'],
          explanation: 'Gỏi gà măng cụt kết hợp vị giòn chua ngọt của măng cụt non và vị bùi ngọt của thịt gà ta chấm muối tiêu ớt cay nồng.',
          hintLevel1: 'Gỏi gà trộn măng cụt.',
          hintLevel2: 'Gỏi gà măng cụt.',
          hintLevel3: 'Nhập: Gỏi gà măng cụt.'
        }
      },
      {
        id: 'ctdm_step_10',
        title: 'Cấu trúc nhà lồng thoáng mát',
        storyPrompt: 'Nhà lồng Chợ Thủ Dầu Một được thiết kế với đặc điểm kiến trúc nhiệt đới nào?',
        clueVerse: 'Mái vòm cao đón gió tự nhiên,\nCửa sổ thông thoáng mát trăm miền.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nhà lồng chợ có hệ thống mái vòm cao chịu lực, các cửa thông gió đón gió mát từ sông Sài Gòn thổi vào giúp chợ luôn thoáng đãng?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Thiết kế thông gió đối lưu tự nhiên giúp không gian chợ luôn mát mẻ dù trong những ngày hè oi ả.',
          hintLevel1: 'Kiến trúc nhiệt đới đón gió sông.',
          hintLevel2: 'Thoáng mát tự nhiên.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ctdm_step_11',
        title: 'Nghề gốm sứ truyền thống bán tại chợ',
        storyPrompt: 'Tại các gian hàng lưu niệm Chợ Thủ, bạn có thể tìm thấy các sản phẩm gốm tráng men đặc trưng của lò gốm nào?',
        clueVerse: 'Gốm men xanh Lái Thiêu mộc mạc,\nChén dĩa hoa đào thắm nét duyên.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Dòng gốm dân dụng nổi tiếng với họa tiết hoa cúc, con gà trống thường bán tại Chợ Thủ là gốm gì?',
          options: ['Gốm Lái Thiêu / Gốm Tân Khánh', 'Gốm Bát Tràng', 'Gốm Chu Đậu', 'Gốm Bàu Trúc'],
          correctAnswer: 'Gốm Lái Thiêu / Gốm Tân Khánh',
          explanation: 'Gốm sứ Lái Thiêu với họa tiết con gà trống hoa chuối, bình cắm hoa men da lươn là sản vật thủ công nổi tiếng của đất Bình Dương.',
          hintLevel1: 'Gốm Lái Thiêu Bình Dương.',
          hintLevel2: 'Gốm Lái Thiêu.',
          hintLevel3: 'Chọn Gốm Lái Thiêu / Gốm Tân Khánh.'
        }
      },
      {
        id: 'ctdm_step_12',
        title: 'Chợ đêm và phố đi bộ ven sông',
        storyPrompt: 'Vào ban đêm, khu vực bờ kè sông Sài Gòn đối diện chợ biến thành:',
        clueVerse: 'Phố đêm rực rỡ ánh đèn hoa,\nẨm thực nhộn nhịp khách gần xa.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Đoạn đường Bạch Đằng ven sông sát Chợ Thủ Dầu Một được quy hoạch thành phố đi bộ và chợ đêm ẩm thực sôi động về đêm?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Phố đi bộ Bạch Đằng ven sông Sài Gòn là điểm vui chơi, ngắm cảnh và thưởng thức ẩm thực đêm yêu thích của người dân và du khách.',
          hintLevel1: 'Phố đi bộ Bạch Đằng ven sông.',
          hintLevel2: 'Chợ đêm ven sông.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ctdm_step_13',
        title: 'Món Bún tôm Châu Trúc / Bình Dương',
        storyPrompt: 'Món bún tôm tươi quết nhuyễn nấu nước dùng trong vắt ngọt lịm bán tại chợ đất Thủ tên là gì?',
        clueVerse: 'Bún tôm quết nhuyễn nước dùng thơm,\nSợi bún tươi ép trắng nõn nà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món bún dân dã nổi tiếng chế biến từ tôm tươi quết nhuyễn ép bún tại chỗ ở Bình Dương là gì?',
          options: ['Bún tôm Bình Dương', 'Bún chả Hà Nội', 'Bún mắm miền Tây', 'Bún cá Châu Đốc'],
          correctAnswer: 'Bún tôm Bình Dương',
          explanation: 'Bún tôm Bình Dương làm từ tôm đất tươi quết nhuyễn, nước luộc tôm ngọt thanh hòa cùng sợi bún gạo tươi ép trực tiếp vào nồi nước sôi.',
          hintLevel1: 'Bún tôm.',
          hintLevel2: 'Bún tôm Bình Dương.',
          hintLevel3: 'Chọn Bún tôm Bình Dương.'
        }
      },
      {
        id: 'ctdm_step_14',
        title: 'Ý nghĩa tên gọi "Thủ Dầu Một"',
        storyPrompt: 'Theo truyền thuyết dân gian, tên gọi "Thủ Dầu Một" xuất phát từ:',
        clueVerse: 'Đồn thủ ngày xưa bên gốc cây,\nMột cây dầu rái ngát tầng mây.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nguồn gốc địa danh "Thủ Dầu Một" theo cách giải thích dân gian phổ biến nhất là gì?',
          options: [
            'Nơi có một đồn canh (Thủ) đặt bên cạnh một cây Dầu rái cổ thụ to lớn đơn độc',
            'Tên của một vị tướng thời Nguyễn',
            'Phiên âm từ một từ tiếng Phạn',
            'Nơi chỉ trồng duy nhất một loại cây'
          ],
          correctAnswer: 'Nơi có một đồn canh (Thủ) đặt bên cạnh một cây Dầu rái cổ thụ to lớn đơn độc',
          explanation: '"Thủ" là đồn canh giữ; "Dầu Một" là một cây Dầu rái đại thụ mọc độc nhất trên đỉnh đồi gần bến sông ngày xưa.',
          hintLevel1: 'Đồn thủ + Cây dầu đơn độc.',
          hintLevel2: 'Đồn canh cạnh cây dầu.',
          hintLevel3: 'Chọn Nơi có một đồn canh (Thủ) đặt bên cạnh một cây Dầu rái...'
        }
      },
      {
        id: 'ctdm_step_15',
        title: 'Giá trị di sản ký ức của chợ',
        storyPrompt: 'Chợ Thủ Dầu Một là biểu tượng văn hóa lưu giữ điều gì cho đất Thủ qua bao thăng trầm?',
        clueVerse: 'Trăm năm lưu giữ nét hồn quê,\nTháp đồng hồ điểm nhịp người về.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Chợ Thủ Dầu Một không chỉ là trung tâm mua sắm mà còn là Di tích văn hóa - kiến trúc lưu giữ ký ức sinh hoạt, buôn bán và tinh thần hào sảng của người dân đất Thủ Bình Dương?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Ngôi chợ với tháp đồng hồ cổ kính là niềm tự hào và biểu tượng thân thương của mọi người con đất Thủ.',
          hintLevel1: 'Biểu tượng ký ức đất Thủ.',
          hintLevel2: 'Di sản sống động.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 10. Chợ Bến Thành - TP.HCM - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_ben_thanh',
    locationId: 'loc_ben_thanh',
    title: 'Trái Tim Giao Thương & Tháp Đồng Hồ 3 Mặt Trứ Danh',
    subtitle: 'Giải mã tháp đồng hồ 3 mặt Cửa Nam, 12 bức phù điêu gốm Biên Hòa 1952 và lịch sử hơn 110 năm Chợ Bến Thành',
    category: 'architecture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_ben_thanh',
    loreChapter: 'Chương 10: Nhịp Đập Bến Thành',
    steps: [
      {
        id: 'bt_step_1',
        title: 'Tháp đồng hồ biểu tượng ở Cửa Nam',
        storyPrompt: 'Đứng trước Cửa Nam rực rỡ cờ hoa của Chợ Bến Thành:',
        clueVerse: 'Đồng hồ ba mặt ngắm muôn phương,\nBến Thành tấp nập phố thân thương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tháp đồng hồ biểu tượng của Chợ Bến Thành ở Cửa Nam có bao nhiêu mặt đồng hồ hiển thị thời gian?',
          options: ['3 mặt đồng hồ', '1 mặt', '2 mặt', '4 mặt'],
          correctAnswer: '3 mặt đồng hồ',
          explanation: 'Tháp đồng hồ Cửa Nam cao 28m có 3 mặt đồng hồ nhìn ra các hướng đường Lê Lợi, Phan Chu Trinh và Phan Bội Châu.',
          hintLevel1: 'Có 3 mặt đồng hồ.',
          hintLevel2: '3 mặt.',
          hintLevel3: 'Chọn 3 mặt đồng hồ.'
        }
      },
      {
        id: 'bt_step_2',
        title: 'Năm khánh thành ngôi chợ mới',
        storyPrompt: 'Ngôi chợ Bến Thành hiện nay (Chợ Mới) được hãng thầu Brossard et Maupin khánh thành vào tháng năm nào?',
        clueVerse: 'Một chín một bốn khánh thành chợ,\nLễ hội tưng bừng rộn Sài Gòn.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khánh thành Chợ Bến Thành hiện nay (gợi ý: 191x):',
          correctAnswer: '1914',
          keywords: ['1914'],
          explanation: 'Chợ Bến Thành được chính thức khánh thành vào tháng 3/1914 sau 2 năm xây dựng trên vùng đầm lầy Bồ Rệt.',
          hintLevel1: 'Năm 1914.',
          hintLevel2: '1914.',
          hintLevel3: 'Nhập: 1914.'
        }
      },
      {
        id: 'bt_step_3',
        title: '12 bức phù điêu gốm Biên Hòa',
        storyPrompt: 'Gắn trên 4 cửa chính của Chợ Bến Thành là 12 bức phù điêu gốm mỹ thuật do trường Mỹ nghệ Biên Hòa tạo tác năm 1952 mô tả điều gì?',
        clueVerse: 'Mười hai phù điêu gốm nung men,\nSản vật phương Nam rạng ánh đèn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các bức phù điêu gốm trên các cửa Chợ Bến Thành khắc họa những hình ảnh gì?',
          options: [
            'Các sản vật dân dã phương Nam (con bò, nải chuối, chùm xoài, con vịt, con cá bống...)',
            'Các vị tướng quân đội',
            'Các kỳ quan thế giới',
            'Các chữ số La Mã'
          ],
          correctAnswer: 'Các sản vật dân dã phương Nam (con bò, nải chuối, chùm xoài, con vịt, con cá bống...)',
          explanation: '12 bức phù điêu bằng gốm nung Biên Hòa do các nghệ nhân Lê Văn Mậu, Nguyễn Trí Lạc sáng tác năm 1952 miêu tả sinh động nông sản trù phú phương Nam.',
          hintLevel1: 'Sản vật thiên nhiên nông nghiệp phương Nam.',
          hintLevel2: 'Bò, cá, vịt, chuối, xoài.',
          hintLevel3: 'Chọn Các sản vật dân dã phương Nam...'
        }
      },
      {
        id: 'bt_step_4',
        title: 'Vị trí 4 cửa chính của Chợ',
        storyPrompt: 'Bốn cửa chính của Chợ Bến Thành quay mặt ra 4 tuyến đường lớn tương ứng với các hướng:',
        clueVerse: 'Bốn cửa Đông Tây Nam Bắc mở,\nĐón khách thập phương dạo chợ hoa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cửa Nam (có tháp đồng hồ) quay mặt ra đại lộ nào?',
          options: ['Đường Lê Lợi (Quảng trường Quách Thị Trang)', 'Đường Phan Chu Trinh', 'Đường Phan Bội Châu', 'Đường Lê Thánh Tôn'],
          correctAnswer: 'Đường Lê Lợi (Quảng trường Quách Thị Trang)',
          explanation: 'Cửa Nam nhìn ra đường Lê Lợi và Quảng trường Quách Thị Trang; Cửa Bắc nhìn ra đường Lê Thánh Tôn; Cửa Đông nhìn ra Phan Bội Châu; Cửa Tây nhìn ra Phan Chu Trinh.',
          hintLevel1: 'Đại lộ Lê Lợi.',
          hintLevel2: 'Đường Lê Lợi.',
          hintLevel3: 'Chọn Đường Lê Lợi (Quảng trường Quách Thị Trang).'
        }
      },
      {
        id: 'bt_step_5',
        title: 'Nguồn gốc tên gọi "Bến Thành"',
        storyPrompt: 'Tên gọi "Bến Thành" có nguồn gốc lịch sử từ đâu?',
        clueVerse: 'Bến sông cập bến dưới chân Thành,\nThành Quy năm ấy nước trong xanh.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên gọi "Bến Thành" bắt nguồn từ đâu?',
          options: [
            'Bến sông (bến nước) nằm gần Thành Bát Quái (Thành Quy) thời vua Gia Long',
            'Tên một vị thương nhân người Pháp',
            'Tên một vị quan triều Nguyễn',
            'Nơi tổ chức lễ thành hôn'
          ],
          correctAnswer: 'Bến sông (bến nước) nằm gần Thành Bát Quái (Thành Quy) thời vua Gia Long',
          explanation: 'Chợ Bến Thành ban đầu nằm ven sông Bến Nghé gần Thành Bát Quái (Thành Quy do Nguyễn Ánh xây năm 1790), nên được gọi là chợ Bến Thành.',
          hintLevel1: 'Bến nước bên chân thành lũy.',
          hintLevel2: 'Bến sông gần Thành Bát Quái.',
          hintLevel3: 'Chọn Bến sông (bến nước) nằm gần Thành Bát Quái...'
        }
      },
      {
        id: 'bt_step_6',
        title: 'Chợ Bến Thành Cũ (Chợ Cũ)',
        storyPrompt: 'Trước khi dời về vị trí hiện nay, Chợ Bến Thành cũ tọa lạc tại vị trí con đường nào ngày nay?',
        clueVerse: 'Chợ Cũ Hàm Nghi bên bến sông,\nGhe thuyền tấp nập khách chờ mong.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khu vực Chợ Cũ (tiền thân Chợ Bến Thành) trước năm 1914 nằm ở đoạn đường nào?',
          options: ['Đường Hàm Nghi (ven rạch Bến Nghé)', 'Đường Nguyễn Huệ', 'Đường Đồng Khởi', 'Đường Hai Bà Trưng'],
          correctAnswer: 'Đường Hàm Nghi (ven rạch Bến Nghé)',
          explanation: 'Chợ Bến Thành cũ nằm ven kênh Bến Nghé dọc đường Hàm Nghi, sau khi bị hỏa hoạn người Pháp mới dời về vị trí đầm Bồ Rệt hiện nay.',
          hintLevel1: 'Đường Hàm Nghi.',
          hintLevel2: 'Hàm Nghi.',
          hintLevel3: 'Chọn Đường Hàm Nghi (ven rạch Bến Nghé).'
        }
      },
      {
        id: 'bt_step_7',
        title: 'Thiên đường ẩm thực Nam Bộ bên trong chợ',
        storyPrompt: 'Khu ẩm thực Cửa Tây và gian giữa Chợ Bến Thành nổi tiếng với những món ngon nào?',
        clueVerse: 'Bún riêu chè ngọt bánh xèo thơm,\nẤm lòng thực khách dạ bùi ngùi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món ăn đặc sản nức tiếng bán chạy nhất tại khu ẩm thực Chợ Bến Thành là gì?',
          options: [
            'Bún riêu gánh, gỏi cuốn, bánh bèo, chè thập cẩm Sài Gòn',
            'Pizza kiểu Ý',
            'Sushi Nhật Bản',
            'Vịt quay Bắc Kinh'
          ],
          correctAnswer: 'Bún riêu gánh, gỏi cuốn, bánh bèo, chè thập cẩm Sài Gòn',
          explanation: 'Bún riêu gánh, bún mắm, chè sương sa hạt lựu và các món bánh dân dã Nam Bộ tại Chợ Bến Thành là nét ẩm thực thu hút du khách khắp năm châu.',
          hintLevel1: 'Bún riêu, chè ngọt, bánh bèo.',
          hintLevel2: 'Món ăn dân gian Nam Bộ.',
          hintLevel3: 'Chọn Bún riêu gánh, gỏi cuốn...'
        }
      },
      {
        id: 'bt_step_8',
        title: 'Mặt hàng quà lưu niệm thủ công',
        storyPrompt: 'Du khách quốc tế đến Chợ Bến Thành thường tìm mua sản phẩm thủ công mỹ nghệ nào?',
        clueVerse: 'Áo dài lụa tơ tranh sơn mài,\nCà phê nón lá đón ngày mai.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Chợ Bến Thành là một trong những trung tâm bán lẻ quà lưu niệm thủ công lớn nhất với vải lụa tơ tằm, đồ sơn mài, nón lá và cà phê hạt Robusta/Arabica Việt Nam?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hàng ngàn gian hàng tại Chợ Bến Thành bày bán đầy đủ các sản phẩm lưu niệm đậm đà bản sắc văn hóa Việt Nam.',
          hintLevel1: 'Thủ công mỹ nghệ và đặc sản.',
          hintLevel2: 'Đồ lưu niệm tơ tằm, sơn mài.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bt_step_9',
        title: 'Khu chợ đêm Bến Thành',
        storyPrompt: 'Sau 18h tối khi chợ lồng đóng cửa, hai bên đường Phan Chu Trinh và Phan Bội Châu biến thành:',
        clueVerse: 'Chợ đêm lên đèn thơm món nướng,\nDu khách dạo bước ngắm trăng thanh.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Chợ đêm Bến Thành ngoài trời mở cửa từ chiều tối đến khuya, là điểm hẹn ẩm thực đêm và mua sắm thời trang sầm uất?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Chợ đêm Bến Thành là nét sinh hoạt kinh tế đêm hấp dẫn bậc nhất của TP.HCM.',
          hintLevel1: 'Chợ đêm Bến Thành.',
          hintLevel2: 'Hoạt động ẩm thực đêm.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bt_step_10',
        title: 'Ga ngầm Metro số 1 Bến Thành',
        storyPrompt: 'Ngay dưới lòng đất trước Cửa Nam Chợ Bến Thành là công trình giao thông hiện đại bậc nhất nào?',
        clueVerse: 'Ga ngầm Metro sâu lòng đất,\nKết nối đô thị hiện đại sang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Công trình giao thông ngầm hiện đại nằm ngay trước Chợ Bến Thành là gì?',
          options: ['Ga trung tâm ngầm Metro Bến Thành (Tuyến Metro số 1 Bến Thành - Suối Tiên)', 'Hầm vượt sông Sài Gòn', 'Sân bay quốc tế', 'Cảng hàng hải'],
          correctAnswer: 'Ga trung tâm ngầm Metro Bến Thành (Tuyến Metro số 1 Bến Thành - Suối Tiên)',
          explanation: 'Ga ngầm Bến Thành là ga trung tâm quy mô ngầm hiện đại kết nối các tuyến đường sắt đô thị trong tương lai của TP.HCM.',
          hintLevel1: 'Ga ngầm Metro.',
          hintLevel2: 'Ga trung tâm Bến Thành Tuyến Metro số 1.',
          hintLevel3: 'Chọn Ga trung tâm ngầm Metro Bến Thành...'
        }
      },
      {
        id: 'bt_step_11',
        title: 'Giếng trời lấy sáng (Toplight) ga Metro Bến Thành',
        storyPrompt: 'Điểm nhấn kiến trúc mặt đất phía trước Chợ Bến Thành tại ga ngầm Metro có hình dáng gì?',
        clueVerse: 'Hoa sen nở bung đón ánh dương,\nGiếng trời lấy sáng rực muôn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Giếng trời lấy sáng khổng lồ tại quảng trường trước Chợ Bến Thành được thiết kế theo hình tượng hoa gì?',
          options: ['Hoa Sen cách điệu', 'Hoa Mai vàng', 'Hoa Hướng dương', 'Hoa Đào'],
          correctAnswer: 'Hoa Sen cách điệu',
          explanation: 'Giếng trời lấy sáng (Toplight) ga ngầm Bến Thành nhìn từ trên cao có hình dáng như một đóa hoa sen khổng lồ đón ánh sáng tự nhiên xuống lòng ga ngầm.',
          hintLevel1: 'Quốc hoa Việt Nam: Hoa Sen.',
          hintLevel2: 'Hoa Sen.',
          hintLevel3: 'Chọn Hoa Sen cách điệu.'
        }
      },
      {
        id: 'bt_step_12',
        title: 'Số lượng gian hàng bên trong chợ',
        storyPrompt: 'Bên trong khuôn viên nhà lồng Chợ Bến Thành có khoảng bao nhiêu sạp hàng kinh doanh?',
        clueVerse: 'Gần một ngàn rưỡi sạp hàng xôm tụ,\nĐầy ắp tơ lụa ngát hương hoa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chợ Bến Thành có khoảng bao nhiêu sạp hàng kinh doanh các loại?',
          options: ['Hơn 1.400 sạp hàng', 'Chỉ 100 sạp', '50 sạp', '5.000 sạp'],
          correctAnswer: 'Hơn 1.400 sạp hàng',
          explanation: 'Chợ Bến Thành có diện tích hơn 13.000m2 với hơn 1.400 sạp kinh doanh đủ các ngành hàng từ thực phẩm tươi sống, vải vóc, quần áo đến mỹ nghệ lưu niệm.',
          hintLevel1: 'Hơn 1.400 sạp.',
          hintLevel2: 'Hơn 1.400 sạp hàng.',
          hintLevel3: 'Chọn Hơn 1.400 sạp hàng.'
        }
      },
      {
        id: 'bt_step_13',
        title: 'Nghệ thuật giao tiếp đa ngôn ngữ của tiểu thương',
        storyPrompt: 'Một nét văn hóa độc đáo của các cô chú tiểu thương Chợ Bến Thành là:',
        clueVerse: 'Tiếng Anh tiếng Pháp nói lưu loát,\nTiếng Nhật tiếng Hoa mến khách người.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các tiểu thương tại Chợ Bến Thành nổi tiếng với khả năng giao tiếp bán hàng bằng nhiều ngoại ngữ khác nhau (tiếng Anh, tiếng Pháp, tiếng Nhật, tiếng Hàn, tiếng Hoa)?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Sự năng động, hoạt bát và khả năng nói nhiều thứ tiếng của tiểu thương Chợ Bến Thành luôn để lại ấn tượng đẹp trong lòng khách du lịch quốc tế.',
          hintLevel1: 'Tiểu thương nói được nhiều ngoại ngữ.',
          hintLevel2: 'Đa ngôn ngữ.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bt_step_14',
        title: 'Lễ hội khánh thành chợ năm 1914',
        storyPrompt: 'Khi Chợ Bến Thành khánh thành vào cuối tháng 3 năm 1914, sự kiện đã diễn ra trong bao nhiêu ngày với tên gọi "Lễ mở chợ"?',
        clueVerse: 'Ba ngày mở chợ hội tưng bừng,\nPháo hoa rực rỡ sáng không gian.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Lễ hội khánh thành Chợ Bến Thành năm 1914 diễn ra trong bao nhiêu ngày đêm?',
          options: ['3 ngày đêm (28, 29, 30 tháng 3 năm 1914)', '1 ngày duy nhất', '1 tuần lễ', '1 tháng'],
          correctAnswer: '3 ngày đêm (28, 29, 30 tháng 3 năm 1914)',
          explanation: 'Lễ hội khánh thành chợ diễn ra suốt 3 ngày đêm với xe hoa diễu hành, bắn pháo hoa và hơn 100.000 người từ khắp Lục tỉnh đổ về tham dự.',
          hintLevel1: '3 ngày đêm.',
          hintLevel2: '3 ngày.',
          hintLevel3: 'Chọn 3 ngày đêm (28, 29, 30 tháng 3 năm 1914).'
        }
      },
      {
        id: 'bt_step_15',
        title: 'Biểu tượng nhận diện của TP. Hồ Chí Minh',
        storyPrompt: 'Hình ảnh tháp đồng hồ Chợ Bến Thành từ lâu đã được chọn làm:',
        clueVerse: 'Biểu tượng đô thành sáng ngàn năm,\nTrái tim Sài Gòn rạng tương lai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hình ảnh Chợ Bến Thành được công nhận là biểu tượng gì của thành phố?',
          options: [
            'Biểu tượng văn hóa, du lịch và lịch sử số 1 của Thành phố Hồ Chí Minh',
            'Tòa nhà cao nhất Đông Nam Á',
            'Bến cảng quân sự bí mật',
            'Khu bảo tồn động vật hoang dã'
          ],
          correctAnswer: 'Biểu tượng văn hóa, du lịch và lịch sử số 1 của Thành phố Hồ Chí Minh',
          explanation: 'Tháp đồng hồ Chợ Bến Thành là hình ảnh nhận diện thương hiệu du lịch thân thuộc nhất của TP.HCM trên bản đồ thế giới.',
          hintLevel1: 'Biểu tượng số 1 của thành phố.',
          hintLevel2: 'Biểu tượng du lịch TP.HCM.',
          hintLevel3: 'Chọn Biểu tượng văn hóa, du lịch và lịch sử số 1...'
        }
      }
    ]
  }
];
