import { Quest } from '../../types';

export const QUESTS_PART_4: Quest[] = [
  // =========================================================================
  // 16. Lễ Hội Nghinh Ông Thắng Tam Vũng Tàu - Level 2
  // =========================================================================
  {
    id: 'quest_le_hoi_nghinh_ong',
    locationId: 'loc_le_hoi_nghinh_ong',
    title: 'Lễ Hội Nghinh Ông & Tục Thờ Thần Nam Hải Cá Voi',
    subtitle: 'Khám phá lễ hội rước kiệu trên biển thiêng liêng và ngôi đình Thắng Tam lưu giữ bộ xương cá voi khổng lồ',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 11,
    rewardLP: 280,
    badgeId: 'badge_le_hoi_nghinh_ong',
    loreChapter: 'Chương 16: Tiếng Trống Rước Ông Ra Biển Lớn',
    steps: [
      {
        id: 'no_step_1',
        title: 'Vị thần bảo trợ ngư dân trong tín ngưỡng vùng biển',
        storyPrompt: 'Nghe tiếng trống hội rộn rã tại Lăng Ông Nam Hải - Đình Thắng Tam:',
        clueVerse: 'Cá Voi cứu mạng giữa trùng khơi,\nNgư dân phụng kính trọn một đời.\nĐức Ngài Nam Hải ban phước lớn,\nThuyền về đầy ắp cá muôn nơi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Trong văn hóa miền biển Nam Bộ, "Ông Nam Hải" được tôn thờ là loài sinh vật biển nào?',
          options: [
            'Cá Voi (Đại tướng quân Nam Hải / Cá Ông)',
            'Cá Mập',
            'Cá Heo',
            'Rùa Biển khổng lồ'
          ],
          correctAnswer: 'Cá Voi (Đại tướng quân Nam Hải / Cá Ông)',
          explanation: 'Ngư dân Nam Bộ xem Cá Voi là vị thần linh cứu giúp tàu bè khi gặp giông bão trên biển, xưng tụng là "Đức Ngài Đại Càn Quốc Gia Nam Hải Hoàng Nhân".',
          hintLevel1: 'Loài cá khổng lồ hiền lành: Cá Voi.',
          hintLevel2: 'Cá Voi.',
          hintLevel3: 'Chọn Cá Voi (Đại tướng quân Nam Hải / Cá Ông).'
        }
      },
      {
        id: 'no_step_2',
        title: 'Thời gian diễn ra lễ hội Nghinh Ông Thắng Tam',
        storyPrompt: 'Lễ hội Nghinh Ông Thắng Tam diễn ra vào ngày tháng âm lịch nào hàng năm?',
        clueVerse: 'Tháng tám trăng tròn rước kiệu hoa,\nĐoàn thuyền rẽ sóng biển bao la.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Lễ hội Nghinh Ông Thắng Tam Vũng Tàu diễn ra định kỳ vào ngày nào âm lịch?',
          options: ['Ngày 16, 17, 18 tháng 8 âm lịch', 'Ngày mùng 1 tháng Giêng', 'Ngày 5 tháng 5 âm lịch', 'Ngày 10 tháng 3 âm lịch'],
          correctAnswer: 'Ngày 16, 17, 18 tháng 8 âm lịch',
          explanation: 'Lễ hội Nghinh Ông Vũng Tàu được tổ chức vào các ngày 16-18/8 Âm lịch hàng năm, thu hút hàng vạn ngư dân và du khách thập phương.',
          hintLevel1: 'Giữa tháng 8 âm lịch (ngày 16-18/8).',
          hintLevel2: 'Chọn Ngày 16, 17, 18 tháng 8 âm lịch.',
          hintLevel3: 'Đáp án là Ngày 16, 17, 18 tháng 8 âm lịch.'
        }
      }
    ]
  },

  // =========================================================================
  // 17. Thành Phố Mới Bình Dương - Level 1
  // =========================================================================
  {
    id: 'quest_thanh_pho_moi_binh_duong',
    locationId: 'loc_thanh_pho_moi_binh_duong',
    title: 'Thành Phố Mới Bình Dương - Đô Thị Thông Minh Đổi Mới Sáng Tạo',
    subtitle: 'Khám phá trung tâm hành chính tập trung tòa tháp đôi và thành phố thông minh đạt Top 1 ICF thế giới 2023',
    category: 'architecture',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 9,
    rewardLP: 240,
    badgeId: 'badge_thanh_pho_moi_binh_duong',
    loreChapter: 'Chương 17: Bình Minh Đô Thị Thông Minh',
    steps: [
      {
        id: 'tpm_step_1',
        title: 'Tòa tháp đôi Trung tâm Hành chính tỉnh Bình Dương',
        storyPrompt: 'Đứng trước quảng trường công viên trung tâm chiêm ngưỡng tòa tháp đôi cao tầng hiện đại:',
        clueVerse: 'Tòa tháp đôi vươn giữa trời cao,\nHành chính tập trung sáng ánh sao.\nThành phố thông minh vươn tầm lớn,\nBình Dương rạng rỡ đón tương lai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Điểm đặc biệt của Tòa nhà Trung tâm Hành chính tỉnh Bình Dương tại Thành Phố Mới là gì?',
          options: [
            'Tòa tháp đôi 21 tầng với bãi đỗ trực thăng trên nóc và quy tụ gần 60 cơ quan sở ngành làm việc tập trung',
            'Được xây dựng hoàn toàn bằng gỗ lim',
            'Là pháo đài quân sự thời xưa',
            'Không có cửa sổ kính'
          ],
          correctAnswer: 'Tòa tháp đôi 21 tầng với bãi đỗ trực thăng trên nóc và quy tụ gần 60 cơ quan sở ngành làm việc tập trung',
          explanation: 'Tòa nhà tháp đôi 21 tầng là trung tâm hành chính kiểu mẫu hiện đại bậc nhất cả nước, phục vụ người dân và doanh nghiệp theo mô hình "Một cửa điện tử".',
          hintLevel1: 'Tòa tháp đôi 21 tầng hiện đại.',
          hintLevel2: 'Chọn phương án đầu tiên.',
          hintLevel3: 'Đáp án là phương án đầu tiên.'
        }
      },
      {
        id: 'tpm_step_2',
        title: 'Giải thưởng Diễn đàn Cộng đồng Thông minh Thế giới (ICF)',
        storyPrompt: 'Năm 2023, Bình Dương đã vinh dự đoạt giải thưởng danh giá toàn cầu nào của ICF?',
        clueVerse: 'Top một thế giới rạng tên son,\nĐô thị thông minh sáng nước non.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Năm 2023, Vùng thông minh Bình Dương đã được ICF vinh danh là Cộng đồng có Chiến lược Phát triển Thông minh tiêu biểu nhất Thế giới (Top 1 ICF 2023)?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Đúng! Tháng 10/2023 tại New York, Diễn đàn ICF đã chính thức vinh danh Bình Dương là Cộng đồng Thông minh của năm (Top 1 Intelligent Community of 2023).',
          hintLevel1: 'Top 1 ICF thế giới năm 2023.',
          hintLevel2: 'Chọn ĐÚNG.',
          hintLevel3: 'Đáp án là ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 18. Hồ Dầu Tiếng (Bình Dương) - Level 2
  // =========================================================================
  {
    id: 'quest_ho_dau_tieng',
    locationId: 'loc_ho_dau_tieng',
    title: 'Biển Hồ Nhân Tạo Giữa Miền Đông Nam Bộ',
    subtitle: 'Giải mã kỳ tích công trình thủy lợi nhân tạo lớn nhất Đông Nam Á khởi công năm 1981',
    category: 'nature_coastal',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 10,
    rewardLP: 260,
    badgeId: 'badge_ho_dau_tieng',
    loreChapter: 'Chương 18: Đại Công Trình Thủy Lợi Thế Kỷ',
    steps: [
      {
        id: 'hdt_step_1',
        title: 'Quy mô hồ nước nhân tạo Dầu Tiếng',
        storyPrompt: 'Ngắm nhìn mặt nước mênh mông như biển hồ tiếp giáp 3 tỉnh Bình Dương, Tây Ninh và Bình Phước:',
        clueVerse: 'Mặt hồ phẳng lặng nước xanh trong,\nĐập ngăn dòng tưới mát ruộng đồng.\nCông trình thủy lợi tầm thế kỷ,\nNuôi sống bao mùa hạt lúa thơm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hồ Dầu Tiếng có diện tích mặt nước rộng khoảng bao nhiêu km² và giữ kỷ lục gì?',
          options: [
            'Rộng khoảng 270 km² - Hồ thủy nông nhân tạo lớn nhất Việt Nam và Đông Nam Á',
            'Rộng 10 km²',
            'Rộng 1.000 km²',
            'Là hồ tự nhiên từ miệng núi lửa'
          ],
          correctAnswer: 'Rộng khoảng 270 km² - Hồ thủy nông nhân tạo lớn nhất Việt Nam và Đông Nam Á',
          explanation: 'Hồ Dầu Tiếng có diện tích mặt nước lên tới 270 km² và dung tích hơn 1.58 tỷ m³ nước, cung cấp nguồn nước ngọt tưới tiêu cho hàng trăm ngàn hecta nông nghiệp.',
          hintLevel1: 'Hồ thủy nông nhân tạo lớn nhất Đông Nam Á rộng 270 km².',
          hintLevel2: 'Chọn phương án đầu tiên.',
          hintLevel3: 'Đáp án là phương án đầu tiên.'
        }
      },
      {
        id: 'hdt_step_2',
        title: 'Nguồn nước ngọt cho sông Sài Gòn',
        storyPrompt: 'Hồ Dầu Tiếng giữ vai trò chiến lược nào đối với TP.HCM và hạ du?',
        clueVerse: 'Điều tiết nguồn nước đẩy mặn xa,\nGiữ cho sông ngọt mát muôn nhà.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Hồ Dầu Tiếng đóng vai trò xả nước đẩy mặn cho sông Sài Gòn và bảo đảm nguồn nước thô cho các nhà máy nước sạch cung cấp cho người dân TP.HCM?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Đúng! Hồ Dầu Tiếng thường xuyên xả nước để đẩy mặn vào mùa khô, bảo đảm nguồn nước ngọt phục vụ sinh hoạt và công nghiệp cho toàn vùng hạ du sông Sài Gòn.',
          hintLevel1: 'Đẩy mặn và cấp nước ngọt cho sông Sài Gòn.',
          hintLevel2: 'Chọn ĐÚNG.',
          hintLevel3: 'Đáp án là ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 19. Bãi Sau Vũng Tàu & Mũi Nghinh Phong - Level 1
  // =========================================================================
  {
    id: 'quest_bai_sau_vung_tau',
    locationId: 'loc_bai_sau_vung_tau',
    title: 'Cổng Trời Đón Gió & Dải Cát Thùy Vân Bãi Sau',
    subtitle: 'Chinh phục Cổng Trời Mũi Nghinh Phong và con đường dạo biển ngập tràn nắng vàng',
    category: 'nature_coastal',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 8,
    rewardLP: 230,
    badgeId: 'badge_bai_sau_vung_tau',
    loreChapter: 'Chương 19: Tiếng Sóng Vỗ Mũi Nghinh Phong',
    steps: [
      {
        id: 'bs_step_1',
        title: 'Tên chữ Hán của dải bờ biển Bãi Sau',
        storyPrompt: 'Dải cát dài phẳng mịn hơn 8km đón trọn ánh bình minh rạng rỡ của thành phố biển Vũng Tàu:',
        clueVerse: 'Bãi Sau sóng vỗ cát mênh mang,\nThùy Vân rực rỡ ánh trăng vàng.\nMũi Nghinh Phong đón ngàn cơn gió,\nBiển trời hòa khúc nhạc hân hoan.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bãi Sau Vũng Tàu còn có tên gọi thơ mộng bằng chữ Hán Việt là gì?',
          options: ['Bãi Thùy Vân', 'Bãi Tầm Dương (Bãi Trước)', 'Bãi Vọng Nguyệt', 'Bãi Dứa'],
          correctAnswer: 'Bãi Thùy Vân',
          explanation: 'Bãi Sau còn có tên là Bãi Thùy Vân (những đám mây trôi buông rủ xuống mặt biển), là bãi tắm dài và đẹp nhất thành phố Vũng Tàu.',
          hintLevel1: 'Bãi Thùy Vân (trùng tên đại lộ ven biển).',
          hintLevel2: 'Bãi Thùy Vân.',
          hintLevel3: 'Chọn Bãi Thùy Vân.'
        }
      },
      {
        id: 'bs_step_2',
        title: 'Địa danh "Mũi Nghinh Phong"',
        storyPrompt: 'Chiếc mũi đá vươn dài ra biển tạo thành Cổng Trời gió lộng mang tên:',
        clueVerse: 'Nghinh Phong đón gió bốn phương trời,\nCổng Trời mở lối ngắm trùng khơi.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên của mũi đất nhô ra biển đón gió nổi tiếng tại Vũng Tàu (gồm 3 từ: Mũi Nghinh Phong):',
          correctAnswer: 'Mũi Nghinh Phong',
          keywords: ['mũi nghinh phong', 'nghinh phong', 'mui nghinh phong'],
          explanation: 'Mũi Nghinh Phong nghĩa là mũi đất "đón gió", trước mặt là biển Đông mênh mông, sau lưng là núi non trùng điệp.',
          hintLevel1: 'Mũi Nghinh Phong.',
          hintLevel2: 'Nghinh Phong.',
          hintLevel3: 'Nhập: Mũi Nghinh Phong.'
        }
      }
    ]
  },

  // =========================================================================
  // 20. Làng Chài Phước Hải & Mắm Hàu Đất Đỏ - Level 2
  // =========================================================================
  {
    id: 'quest_lang_chai_phuoc_hai',
    locationId: 'loc_lang_chai_phuoc_hai',
    title: 'Hương Vị Mắm Hàu Cổ Truyền Làng Chài Phước Hải',
    subtitle: 'Khám phá nghề đục hàu đá và ủ mắm hảo hạng tiến vua của làng chài lâu đời nhất Bà Rịa',
    category: 'cuisine',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 10,
    rewardLP: 270,
    badgeId: 'badge_lang_chai_phuoc_hai',
    loreChapter: 'Chương 20: Vị Mặn Mòi Mắm Hàu Đất Đỏ',
    steps: [
      {
        id: 'lcph_step_1',
        title: 'Đặc sản trứ danh của vùng biển Phước Hải',
        storyPrompt: 'Thưởng thức món mắm tiến vua có màu đỏ au sánh mịn thơm nức mũi:',
        clueVerse: 'Hàu đá bám ghềnh đục sớm mai,\nỦ mắm men nồng đậm ngọt bùi.\nPhước Hải ngàn năm thơm vị biển,\nĐất Đỏ lưu danh tiếng muôn đời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món nước chấm tiến vua nức tiếng làm từ loài hải sản bám trên ghềnh đá Phước Hải là gì?',
          options: ['Mắm Hàu Phước Hải', 'Mắm Tôm', 'Mắm Tép', 'Mắm Cáy'],
          correctAnswer: 'Mắm Hàu Phước Hải',
          explanation: 'Mắm Hàu được chế biến từ ruột hàu đá tươi béo ngậy trộn muối hạt hầm, ủ lên men tự nhiên sau 1-2 tháng cho ra thứ nước mắm đỏ sậm sánh như mật ong.',
          hintLevel1: 'Mắm làm từ con hàu đá: Mắm Hàu.',
          hintLevel2: 'Mắm Hàu.',
          hintLevel3: 'Chọn Mắm Hàu Phước Hải.'
        }
      },
      {
        id: 'lcph_step_2',
        title: 'Hình ảnh những chiếc thuyền thúng tròn',
        storyPrompt: 'Đặc trưng phương tiện đánh bắt ven bờ của ngư dân Phước Hải:',
        clueVerse: 'Thúng chai rẽ sóng vượt trùng khơi,\nSớm mai cập bến cá đầy vơi.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Bờ biển Phước Hải nổi tiếng với hàng trăm chiếc thuyền thúng tròn đan bằng tre trét chai dầu rái xếp dài trên bãi cát trắng?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Đúng! Thuyền thúng nan là nét văn hóa mộc mạc đặc trưng gắn liền với sinh kế đánh bắt ven bờ của ngư dân làng chài Phước Hải.',
          hintLevel1: 'Thuyền thúng tre trét chai dầu rái.',
          hintLevel2: 'Chọn ĐÚNG.',
          hintLevel3: 'Đáp án là ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 21. Phố Đi Bộ Nguyễn Huệ (TP.HCM) - Level 1
  // =========================================================================
  {
    id: 'quest_pho_di_bo_nguyen_hue',
    locationId: 'loc_pho_di_bo_nguyen_hue',
    title: 'Kinh Đô Ánh Sáng & Trái Tim Đô Thành Sài Gòn',
    subtitle: 'Dạo bước trên trục đại lộ Charner xưa, ngắm tượng đài Bác Hồ và đài phun nước nhạc nước hiện đại',
    category: 'culture',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 10,
    rewardLP: 250,
    badgeId: 'badge_pho_di_bo_nguyen_hue',
    loreChapter: 'Chương 21: Bản Hòa Ca Phố Đi Bộ',
    steps: [
      {
        id: 'pnb_step_1',
        title: 'Tiền thân của đại lộ Nguyễn Huệ thời Pháp',
        storyPrompt: 'Đứng giữa quảng trường đi bộ thênh thang lát đá granite hướng thẳng ra bến Bạch Đằng:',
        clueVerse: 'Kênh đào xưa lấp mở đường hoa,\nĐại lộ Charner rạng gấm hoa.\nNay thành phố đi bộ đón khách,\nTrái tim Sài Gòn sáng hoan ca.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đại lộ Nguyễn Huệ ngày nay được hình thành trên cơ sở lấp con kênh đào lịch sử nào vào năm 1887?',
          options: ['Kênh Lớn (Grand Canal / Kênh Chợ Vải)', 'Kênh Tàu Hủ', 'Kênh Nhiêu Lộc', 'Kênh Đôi'],
          correctAnswer: 'Kênh Lớn (Grand Canal / Kênh Chợ Vải)',
          explanation: 'Nơi đây nguyên là con Kênh Lớn (Kênh Chợ Vải). Năm 1887, người Pháp cho lấp kênh và đặt tên là Đại lộ Charner, dân gian quen gọi là Đường Kinh Lấp.',
          hintLevel1: 'Kênh Lớn (Kênh Chợ Vải).',
          hintLevel2: 'Chọn phương án đầu tiên.',
          hintLevel3: 'Đáp án là phương án đầu tiên.'
        }
      },
      {
        id: 'pnb_step_2',
        title: 'Tượng đài Chủ tịch Hồ Chí Minh trang nghiêm',
        storyPrompt: 'Pho tượng đồng trang nghiêm đặt trước trụ sở HĐND - UBND Thành phố:',
        clueVerse: 'Tượng Bác uy nghiêm giữa phố hoa,\nVẫy tay chào đón khách muôn nhà.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tượng đài Chủ tịch Hồ Chí Minh bằng hợp kim đồng cao 7.2m được đặt trang trọng tại công viên trước trụ sở UBND TP.HCM, nhìn thẳng suốt trục phố đi bộ ra sông Sài Gòn?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Đúng! Tượng đài Bác Hồ được khánh thành năm 2015 nhân kỷ niệm 125 năm ngày sinh của Người, là điểm nhấn thiêng liêng của quảng trường Nguyễn Huệ.',
          hintLevel1: 'Tượng đài Bác Hồ khánh thành năm 2015.',
          hintLevel2: 'Chọn ĐÚNG.',
          hintLevel3: 'Đáp án là ĐÚNG.'
        }
      },
      {
        id: 'pnb_step_3',
        title: 'Chung cư cà phê số 42 Nguyễn Huệ',
        storyPrompt: 'Tòa chung cư cổ kính nhiều tầng với hàng chục ban công quán cà phê rực rỡ ánh đèn màu:',
        clueVerse: 'Chung cư bốn mươi hai sáng đèn,\nBan công cà phê ngát hương đêm.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập số nhà của tòa "Chung cư Cà phê" nổi tiếng bậc nhất trên phố đi bộ Nguyễn Huệ (số 42):',
          correctAnswer: '42',
          keywords: ['42', '42 nguyễn huệ', 'chung cư 42'],
          explanation: 'Chung cư 42 Nguyễn Huệ là điểm check-in văn hóa độc đáo, quy tụ hàng chục quán cà phê, tiệm sách và thời trang phong cách vintage.',
          hintLevel1: 'Số 42.',
          hintLevel2: 'Nhập số 42.',
          hintLevel3: 'Đáp án là 42.'
        }
      }
    ]
  }
];
