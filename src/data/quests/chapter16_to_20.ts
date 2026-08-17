import { Quest } from '../../types';

export const QUESTS_PART_4: Quest[] = [
  // =========================================================================
  // 16. Đền Tưởng Niệm Các Vua Hùng (TP.HCM) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_den_tho_vua_hung',
    locationId: 'loc_den_tho_vua_hung',
    title: 'Hành Trình Hướng Về Cội Nguồn Dân Tộc Phương Nam',
    subtitle: 'Khám phá Đền Vua Hùng tại Công viên Lịch sử Văn hóa Dân tộc (TP. Thủ Đức), đồi Đền cao 21m và trống đồng Đông Sơn',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_den_tho_vua_hung',
    loreChapter: 'Chương 16: Cội Nguồn Non Sông Rực Rỡ',
    steps: [
      {
        id: 'hung_step_1',
        title: 'Vị trí đền Hùng tại TP. Thủ Đức',
        storyPrompt: 'Đứng trước cổng Đền Hùng uy nghi giữa không gian xanh ngát của Công viên Lịch sử - Văn hóa Dân tộc:',
        clueVerse: 'Long Bình đất ngọc rạng trời Nam,\nĐền Hùng sừng sững tựa non ngàn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đền Tưởng niệm các Vua Hùng TP.HCM tọa lạc tại phường nào thuộc TP. Thủ Đức?',
          options: ['Phường Long Bình', 'Phường Thảo Điền', 'Phường Hiệp Phú', 'Phường Linh Trung'],
          correctAnswer: 'Phường Long Bình',
          explanation: 'Đền tọa lạc trên ngọn đồi thuộc Công viên Lịch sử - Văn hóa Dân tộc, Phường Long Bình, TP. Thủ Đức, TP.HCM.',
          hintLevel1: 'Phường Long Bình.',
          hintLevel2: 'Long Bình.',
          hintLevel3: 'Chọn Phường Long Bình.'
        }
      },
      {
        id: 'hung_step_2',
        title: 'Đường tre và bậc thang lên đền',
        storyPrompt: 'Con đường dẫn lên đỉnh đồi rợp bóng tre ngà và gồm bao nhiêu bậc thang đá?',
        clueVerse: 'Bậc đá uốn quanh rặng tre ngà,\nBước chân cung kính nhớ ông cha.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Con đường dẫn lên đền chính được viền bởi hàng cây gì tượng trưng cho khí phách kiên cường bất khuất của dân tộc Việt Nam?',
          options: ['Rặng Tre Ngà (Tre vàng sọc xanh)', 'Rặng Cọ dầu', 'Rặng Dừa nước', 'Rặng Xương rồng'],
          correctAnswer: 'Rặng Tre Ngà (Tre vàng sọc xanh)',
          explanation: 'Con đường dốc lên đền được bao bọc bởi hàng tre ngà xanh tốt, biểu tượng cho sự dẻo dai và khí phách dân tộc.',
          hintLevel1: 'Cây tre ngà.',
          hintLevel2: 'Tre ngà.',
          hintLevel3: 'Chọn Rặng Tre Ngà (Tre vàng sọc xanh).'
        }
      },
      {
        id: 'hung_step_3',
        title: 'Trống đồng Đông Sơn khổng lồ',
        storyPrompt: 'Chiếc trống đồng đặt tại gian trung tâm đền được đúc mô phỏng theo mẫu trống đồng cổ nào?',
        clueVerse: 'Trống đồng Đông Sơn ngân tiếng vang,\nHào khí nghìn năm sáng giang san.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nền văn hóa khảo cổ rực rỡ thời kỳ dựng nước của các Vua Hùng (chứa từ "Đông Sơn"):',
          correctAnswer: 'Đông Sơn',
          keywords: ['đông sơn', 'dong son', 'văn hóa đông sơn'],
          explanation: 'Trống đồng Đông Sơn là biểu tượng đỉnh cao của nền văn minh lúa nước và kỹ nghệ đúc đồng thời Hùng Vương.',
          hintLevel1: 'Văn hóa Đông Sơn.',
          hintLevel2: 'Đông Sơn.',
          hintLevel3: 'Nhập: Đông Sơn.'
        }
      },
      {
        id: 'hung_step_4',
        title: 'Chiều cao ngọn đồi Đền',
        storyPrompt: 'Đền chính được xây dựng trên đỉnh đồi cao bao nhiêu mét so với mực nước biển?',
        clueVerse: 'Đồi cao hai mươi mốt thước xanh,\nGió lộng trời Nam bóng an lành.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ngọn đồi nơi tọa lạc Đền Tưởng niệm các Vua Hùng có độ cao bao nhiêu mét?',
          options: ['Cao khoảng 21 mét', 'Cao 500 mét', 'Cao 5 mét', 'Cao 100 mét'],
          correctAnswer: 'Cao khoảng 21 mét',
          explanation: 'Đền ngự trên đỉnh đồi cao hơn 21m, phóng tầm mắt nhìn trọn dòng sông Đồng Nai và vùng cảnh quan xanh tươi.',
          hintLevel1: 'Độ cao 21 mét.',
          hintLevel2: '21 mét.',
          hintLevel3: 'Chọn Cao khoảng 21 mét.'
        }
      },
      {
        id: 'hung_step_5',
        title: 'Năm khánh thành công trình đền Hùng',
        storyPrompt: 'Đền Tưởng niệm các Vua Hùng tại TP.HCM được chính thức khánh thành vào dịp Giỗ Tổ Hùng Vương năm nào?',
        clueVerse: 'Hai nghìn lẻ chín rạng trời Nam,\nKhánh thành đền Tổ ngát hương trầm.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khánh thành Đền Hùng TP.HCM (gợi ý: 200x):',
          correctAnswer: '2009',
          keywords: ['2009'],
          explanation: 'Công trình được khánh thành trọng thể vào ngày mùng 10 tháng 3 năm Kỷ Sửu (tức năm 2009).',
          hintLevel1: 'Năm 2009.',
          hintLevel2: '2009.',
          hintLevel3: 'Nhập: 2009.'
        }
      },
      {
        id: 'hung_step_6',
        title: 'Biểu tượng chim Lạc trên mái đền',
        storyPrompt: 'Họa tiết điêu khắc trang trí trên đỉnh cột và mái đền khắc họa loài chim thần thoại nào?',
        clueVerse: 'Chim Lạc sải cánh bay vút cao,\nHướng về nguồn cội rạng ngàn sao.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loài chim biểu tượng trên trống đồng được tạc trên mái đền (chứa từ "Chim Lạc"):',
          correctAnswer: 'Chim Lạc',
          keywords: ['chim lạc', 'chim lac', 'lạc hồng'],
          explanation: 'Hình tượng chim Lạc vút bay tượng trưng cho ước mơ vươn cao, nguồn gốc con Rồng cháu Tiên dòng dõi Lạc Hồng.',
          hintLevel1: 'Chim Lạc.',
          hintLevel2: 'Chim Lạc.',
          hintLevel3: 'Nhập: Chim Lạc.'
        }
      },
      {
        id: 'hung_step_7',
        title: 'Quảng trường và cột đá thề',
        storyPrompt: 'Trước sân đền có quảng trường rộng lớn và cột đá khắc ghi lời căn dặn thiêng liêng nào của Bác Hồ?',
        clueVerse: 'Các Vua Hùng đã có công dựng nước,\nBác cháu ta phải cùng nhau giữ lấy nước.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Câu nói bất hủ của Chủ tịch Hồ Chí Minh tại Đền Hùng năm 1954 được khắc tại đền là gì?',
          options: [
            '"Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước"',
            '"Không có gì quý hơn độc lập tự do"',
            '"Đoàn kết, đoàn kết, đại đoàn kết"',
            '"Học, học nữa, học mãi"'
          ],
          correctAnswer: '"Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước"',
          explanation: 'Lời dặn thiêng liêng của Bác Hồ tại Đền Hùng ngày 19/9/1954 là kim chỉ nam cho các thế hệ giữ gìn non sông gấm vóc.',
          hintLevel1: 'Các Vua Hùng đã có công dựng nước...',
          hintLevel2: 'Bác cháu ta phải cùng nhau giữ lấy nước.',
          hintLevel3: 'Chọn "Các Vua Hùng đã có công dựng nước..."'
        }
      },
      {
        id: 'hung_step_8',
        title: 'Nghi lễ rước kiệu ngày Giỗ Tổ mùng 10/3 âm lịch',
        storyPrompt: 'Hằng năm vào ngày mùng 10 tháng 3 âm lịch, nghi lễ truyền thống nào diễn ra trang trọng tại đền?',
        clueVerse: 'Mùng mười tháng ba hội non sông,\nDâng bánh chưng bánh giầy nhớ tổ tông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Lễ vật truyền thống không thể thiếu dâng lên các Vua Hùng trong ngày Giỗ Tổ là gì?',
          options: ['Bánh chưng, bánh giầy và hoa quả tươi', 'Bánh hamburger', 'Bánh pizza', 'Bánh mì sandwich'],
          correctAnswer: 'Bánh chưng, bánh giầy và hoa quả tươi',
          explanation: 'Bánh chưng vuông (tượng trưng cho Đất), bánh giầy tròn (tượng trưng cho Trời) do hoàng tử Lang Liêu dâng tiến theo truyền thuyết.',
          hintLevel1: 'Bánh chưng và bánh giầy.',
          hintLevel2: 'Bánh chưng, bánh giầy.',
          hintLevel3: 'Chọn Bánh chưng, bánh giầy và hoa quả tươi.'
        }
      },
      {
        id: 'hung_step_9',
        title: 'Kiến trúc khối nhà Đền hình hộp vuông và tròn',
        storyPrompt: 'Triết lý văn hóa phương Đông nào thể hiện rõ qua cấu trúc không gian Đền Hùng?',
        clueVerse: 'Trời tròn đất vuông thắm nghĩa ân,\nÂm dương hòa hợp sáng ngàn xuân.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Triết lý vũ trụ quan nào được ứng dụng trong thiết kế đền Hùng?',
          options: ['Triết lý Trời tròn Đất vuông (Âm Dương giao hòa)', 'Kiến trúc Gothic châu Âu', 'Kiến trúc Ba Rốc', 'Kiến trúc La Mã'],
          correctAnswer: 'Triết lý Trời tròn Đất vuông (Âm Dương giao hòa)',
          explanation: 'Mặt bằng đền vuông vức kết hợp vòm mái cong tròn biểu thị triết lý Trời tròn Đất vuông ngàn đời của người Việt.',
          hintLevel1: 'Trời tròn Đất vuông.',
          hintLevel2: 'Âm Dương giao hòa.',
          hintLevel3: 'Chọn Triết lý Trời tròn Đất vuông...'
        }
      },
      {
        id: 'hung_step_10',
        title: 'Gian thờ Quốc Mẫu Âu Cơ và Quốc Phụ Lạc Long Quân',
        storyPrompt: 'Bên cạnh bàn thờ các Vua Hùng, trong đền còn có không gian tôn kính phụng thờ ai?',
        clueVerse: 'Mẹ Âu Cơ cha Lạc Long Quân,\nTrăm trứng nở trăm con sáng ngàn xuân.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Trong đền có ban thờ trang nghiêm phụng thờ Quốc Phụ Lạc Long Quân và Quốc Mẫu Âu Cơ - cội nguồn của truyền thuyết trăm trứng nở trăm con?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Ban thờ tôn vinh Tổ Phụ Lạc Long Quân và Tổ Mẫu Âu Cơ thể hiện đạo lý "Uống nước nhớ nguồn" của dân tộc.',
          hintLevel1: 'Thờ Tổ Phụ Lạc Long Quân và Tổ Mẫu Âu Cơ.',
          hintLevel2: 'Cội nguồn trăm con trăm trứng.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'hung_step_11',
        title: '54 cột biểu tượng cho 54 dân tộc anh em',
        storyPrompt: 'Hành lang sân đền được bao bọc bởi bao nhiêu cột đá tượng trưng cho khối đại đoàn kết toàn dân tộc?',
        clueVerse: 'Năm mươi tư cột đá kiên cường,\nNăm mươi tư dân tộc vẹn tình thương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Số lượng cột đá bao quanh sân đền tượng trưng cho điều gì?',
          options: ['54 cây cột tượng trưng cho 54 dân tộc anh em Việt Nam', '12 cột tượng trưng cho 12 tháng', '4 cột tượng trưng 4 mùa', '100 cột'],
          correctAnswer: '54 cây cột tượng trưng cho 54 dân tộc anh em Việt Nam',
          explanation: 'Hệ thống 54 cột đá hoa cương tượng trưng cho sự gắn bó keo sơn của 54 dân tộc anh em trên dải đất hình chữ S.',
          hintLevel1: '54 dân tộc.',
          hintLevel2: '54 cây cột.',
          hintLevel3: 'Chọn 54 cây cột tượng trưng cho 54 dân tộc anh em Việt Nam.'
        }
      },
      {
        id: 'hung_step_12',
        title: 'Cây đa cổ thụ và đất nước từ Phú Thọ',
        storyPrompt: 'Khi xây dựng đền Hùng tại TP.HCM, nắm đất thiêng và giọt nước linh hồn được rước về từ đâu?',
        clueVerse: 'Đất nước núi Hùng rước về Nam,\nNối liền dòng máu Việt ngàn năm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đất, nước và chân nhang thiêng thờ tại đền được rước từ di tích nào ở miền Bắc?',
          options: ['Khu Di tích Lịch sử Đền Hùng (Núi Nghĩa Lĩnh, tỉnh Phú Thọ)', 'Chùa Hương (Hà Nội)', 'Yên Tử (Quảng Ninh)', 'Đền Gióng (Sóc Sơn)'],
          correctAnswer: 'Khu Di tích Lịch sử Đền Hùng (Núi Nghĩa Lĩnh, tỉnh Phú Thọ)',
          explanation: 'Đoàn đại biểu TP.HCM đã thành kính rước đất thiêng, nước thiêng và chân nhang từ Đền Hùng Phú Thọ về an vị tại đền.',
          hintLevel1: 'Đền Hùng Phú Thọ.',
          hintLevel2: 'Núi Nghĩa Lĩnh, Phú Thọ.',
          hintLevel3: 'Chọn Khu Di tích Lịch sử Đền Hùng (Núi Nghĩa Lĩnh, tỉnh Phú Thọ).'
        }
      },
      {
        id: 'hung_step_13',
        title: 'Hội thi làm bánh chưng bánh giầy',
        storyPrompt: 'Vào dịp lễ hội đầu xuân tại Đền Hùng TP.HCM thường tổ chức cuộc thi dân gian nào sôi nổi?',
        clueVerse: 'Gói bánh chưng xanh giã bánh giầy,\nHội thi truyền thống đón xuân hay.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Hội thi nấu bánh chưng và giã bánh giầy truyền thống thu hút hàng chục đội thi từ các quận huyện và các trường học tham gia mỗi dịp Giỗ Tổ?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hội thi là dịp để thế hệ trẻ tìm hiểu nét đẹp văn hóa cổ truyền và tinh thần hiếu kính tổ tiên.',
          hintLevel1: 'Hội thi gói bánh chưng bánh giầy.',
          hintLevel2: 'Giã bánh giầy thiêng.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'hung_step_14',
        title: 'Ý nghĩa của ngày Quốc lễ 10/3 âm lịch',
        storyPrompt: 'Câu ca dao ngàn đời nhắc nhở người con đất Việt về ngày Giỗ Tổ là gì?',
        clueVerse: 'Dù ai đi ngược về xuôi,\nNhớ ngày Giỗ Tổ mùng mười tháng ba.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Điền từ còn thiếu vào câu ca dao: "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ..." (nhập số hoặc chữ):',
          correctAnswer: 'ba',
          keywords: ['ba', '3', 'tháng ba', 'thang ba'],
          explanation: 'Câu ca dao: "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba" in sâu trong tâm khảm của mọi người dân Việt Nam.',
          hintLevel1: 'Tháng ba âm lịch.',
          hintLevel2: 'Số ba.',
          hintLevel3: 'Nhập: ba.'
        }
      },
      {
        id: 'hung_step_15',
        title: 'Tấm lòng người phương Nam hướng về cội nguồn',
        storyPrompt: 'Đền Tưởng niệm các Vua Hùng tại TP.HCM mang ý nghĩa to lớn gì cho đồng bào miền Nam?',
        clueVerse: 'Trời Nam con cháu một lòng son,\nKhắc cốt ghi tâm nghĩa nước non.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Đền Vua Hùng tại TP.HCM là điểm tựa tâm linh vững chắc, giúp đồng bào và kiều bào phương Nam luôn được dâng hương tưởng niệm tổ tiên mà không cần phải đi hàng ngàn cây số ra đất Bắc?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Ngôi đền là biểu tượng cho sự kết nối thiêng liêng Bắc - Nam một nhà, cùng chung một cội nguồn dòng máu Lạc Hồng.',
          hintLevel1: 'Điểm tựa tâm linh phương Nam.',
          hintLevel2: 'Bắc Nam một nhà.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 17. Hồ Dầu Tiếng (Bình Dương - Tây Ninh) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_ho_dau_tieng',
    locationId: 'loc_ho_dau_tieng',
    title: 'Kỳ Tích Đại Thủy Nông & Biển Hồ Nước Ngọt Đông Nam Bộ',
    subtitle: 'Khám phá công trình hồ thủy lợi nhân tạo lớn nhất Việt Nam, dung tích 1.58 tỷ m3 và điểm cắm trại ven núi Bà Đen',
    category: 'nature',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_ho_dau_tieng',
    loreChapter: 'Chương 17: Biển Hồ Giữa Rừng Xanh',
    steps: [
      {
        id: 'dt_step_1',
        title: 'Diện tích mặt nước hồ nhân tạo',
        storyPrompt: 'Đứng trên đập chính nhìn mặt hồ Dầu Tiếng mênh mông như biển bạc trải dài tận chân núi Bà Đen:',
        clueVerse: 'Hai trăm bảy mươi cây số vuông mặt nước,\nBiển hồ nhân tạo lớn nhất trời Nam.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hồ Dầu Tiếng có diện tích mặt nước hồ xấp xỉ bao nhiêu km²?',
          options: ['Khoảng 270 km²', 'Chỉ 10 km²', '1.000 km²', '50 km²'],
          correctAnswer: 'Khoảng 270 km²',
          explanation: 'Hồ Dầu Tiếng có diện tích mặt nước trải rộng 270 km², dung tích trữ nước đạt hơn 1.58 tỷ m³ nước ngọt.',
          hintLevel1: 'Khoảng 270 km².',
          hintLevel2: '270 km2.',
          hintLevel3: 'Chọn Khoảng 270 km².'
        }
      },
      {
        id: 'dt_step_2',
        title: 'Vị trí địa lý giáp ranh 3 tỉnh',
        storyPrompt: 'Hồ Dầu Tiếng nằm trên địa phận tiếp giáp của 3 tỉnh thành nào?',
        clueVerse: 'Bình Dương, Tây Ninh cùng Bình Phước,\nNối vòng tay lớn giữ nguồn thiêng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hồ Dầu Tiếng trải rộng trên địa bàn của 3 tỉnh nào?',
          options: ['Bình Dương, Tây Ninh và Bình Phước', 'Đồng Nai, TP.HCM và Long An', 'Tiền Giang, Bến Tre và Trà Vinh', 'Lâm Đồng, Đắk Nông và Bình Thuận'],
          correctAnswer: 'Bình Dương, Tây Ninh và Bình Phước',
          explanation: 'Hồ thuộc địa phận giáp ranh giữa huyện Dầu Tiếng (Bình Dương), huyện Dương Minh Châu, Tân Châu (Tây Ninh) và một phần tỉnh Bình Phước.',
          hintLevel1: 'Bình Dương, Tây Ninh, Bình Phước.',
          hintLevel2: '3 tỉnh miền Đông.',
          hintLevel3: 'Chọn Bình Dương, Tây Ninh và Bình Phước.'
        }
      },
      {
        id: 'dt_step_3',
        title: 'Chặn dòng con sông nào để tạo thành hồ',
        storyPrompt: 'Công trình đại thủy nông Dầu Tiếng được hình thành nhờ ngăn dòng con sông nào ở thượng nguồn?',
        clueVerse: 'Ngăn dòng sông Sài Gòn cuộn sóng,\nBiến đồng khô hạn hóa mùa vàng.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên dòng sông bị chặn dòng để hình thành nên Hồ Dầu Tiếng (chứa từ "Sông Sài Gòn"):',
          correctAnswer: 'Sông Sài Gòn',
          keywords: ['sông sài gòn', 'song sai gon', 'sài gòn'],
          explanation: 'Đập thủy lợi Dầu Tiếng chặn dòng sông Sài Gòn ở thượng nguồn tạo thành hồ chứa nước ngọt khổng lồ.',
          hintLevel1: 'Dòng sông mang tên thành phố lớn nhất miền Nam.',
          hintLevel2: 'Sông Sài Gòn.',
          hintLevel3: 'Nhập: Sông Sài Gòn.'
        }
      },
      {
        id: 'dt_step_4',
        title: 'Thời kỳ khởi công xây dựng đại công trình',
        storyPrompt: 'Công trình Hồ Dầu Tiếng được khởi công xây dựng với sự tham gia của hàng vạn thanh niên xung phong vào năm nào?',
        clueVerse: 'Một chín tám mốt đào hồ nước,\nTám lăm hoàn thành thỏa ước mơ.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khởi công xây dựng Hồ Dầu Tiếng (gợi ý: 198x):',
          correctAnswer: '1981',
          keywords: ['1981'],
          explanation: 'Công trình khởi công ngày 29/4/1981 và hoàn thành đưa vào khai thác ngày 10/1/1985.',
          hintLevel1: 'Năm 1981.',
          hintLevel2: '1981.',
          hintLevel3: 'Nhập: 1981.'
        }
      },
      {
        id: 'dt_step_5',
        title: 'Ngọn núi hùng vĩ soi bóng xuống hồ',
        storyPrompt: 'Từ bờ hồ Dầu Tiếng nhìn về hướng Tây, ngọn núi cao nhất Nam Bộ sừng sững soi bóng là núi nào?',
        clueVerse: 'Bà Đen sừng sững soi bóng nước,\nNóc nhà Nam Bộ rạng trời xanh.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên ngọn núi cao 986m soi bóng xuống Hồ Dầu Tiếng (chứa từ "Núi Bà Đen"):',
          correctAnswer: 'Núi Bà Đen',
          keywords: ['núi bà đen', 'nui ba den', 'bà đen'],
          explanation: 'Núi Bà Đen (nóc nhà Nam Bộ cao 986m) soi bóng xuống mặt hồ xanh biếc tạo nên khung cảnh sơn thủy hữu tình tuyệt sắc.',
          hintLevel1: 'Núi Bà Đen Tây Ninh.',
          hintLevel2: 'Núi Bà Đen.',
          hintLevel3: 'Nhập: Núi Bà Đen.'
        }
      },
      {
        id: 'dt_step_6',
        title: 'Vai trò cấp nước tưới tiêu nông nghiệp',
        storyPrompt: 'Hệ thống kênh chính Đông và kênh chính Tây của Hồ Dầu Tiếng cung cấp nước tưới cho bao nhiêu hécta đất nông nghiệp?',
        clueVerse: 'Hơn một trăm ngàn héc-ta đồng ruộng,\nNước ngọt mát lành lúa trĩu bông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hồ Dầu Tiếng tưới trực tiếp cho hơn bao nhiêu diện tích đất canh tác nông nghiệp miền Đông Nam Bộ?',
          options: ['Hơn 100.000 héc-ta', 'Chỉ 1.000 ha', '500 ha', '10.000 ha'],
          correctAnswer: 'Hơn 100.000 héc-ta',
          explanation: 'Hồ cung cấp nước tưới trực tiếp cho hơn 115.000 ha đất canh tác nông nghiệp và tạo nguồn bổ cập nước ngọt sinh hoạt cho hàng triệu người dân TP.HCM và các tỉnh lân cận.',
          hintLevel1: 'Hơn 100.000 hécta.',
          hintLevel2: 'Hơn 100.000 ha.',
          hintLevel3: 'Chọn Hơn 100.000 héc-ta.'
        }
      },
      {
        id: 'dt_step_7',
        title: 'Hoạt động cắm trại và ngắm hoàng hôn',
        storyPrompt: 'Địa điểm cắm trại hạ lều được giới trẻ ưa chuộng nhất ven bờ hồ Dầu Tiếng là gì?',
        clueVerse: 'Bãi cỏ xanh rờn lộng gió mát,\nĐốt lửa trại ngắm hoàng hôn buông.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Ven hồ Dầu Tiếng (như khu Bãi đá trứng, rừng cao su Dầu Tiếng) là điểm cắm trại dã ngoại, chèo thuyền SUP và ngắm hoàng hôn buông sau núi Bà Đen cực kỳ nổi tiếng?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Bãi cỏ thoải rộng bên hồ là thiên đường cắm trại cuối tuần dành cho những ai yêu thích thiên nhiên hoang sơ.',
          hintLevel1: 'Cắm trại và chèo thuyền SUP ven hồ.',
          hintLevel2: 'Thiên đường dã ngoại.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'dt_step_8',
        title: 'Các hòn đảo nổi trên mặt hồ',
        storyPrompt: 'Giữa lòng hồ Dầu Tiếng có những hòn đảo nổi tự nhiên mang tên thân thuộc nào?',
        clueVerse: 'Đảo Nhím đảo Trảng xanh màu lá,\nGhe thuyền rẽ sóng lướt êm trôi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên hai hòn đảo nổi lớn nổi tiếng trong lòng Hồ Dầu Tiếng là gì?',
          options: ['Đảo Nhím và Đảo Trảng', 'Đảo Phú Quốc và Côn Đảo', 'Đảo Hòn Mun và Hòn Tằm', 'Đảo Cát Bà và Cô Tô'],
          correctAnswer: 'Đảo Nhím và Đảo Trảng',
          explanation: 'Đảo Nhím, đảo Trảng, đảo Cần Giờ nhỏ... là những ốc đảo xanh nổi giữa mặt nước hồ tĩnh lặng.',
          hintLevel1: 'Đảo Nhím và Đảo Trảng.',
          hintLevel2: 'Đảo Nhím.',
          hintLevel3: 'Chọn Đảo Nhím và Đảo Trảng.'
        }
      },
      {
        id: 'dt_step_9',
        title: 'Đặc sản cá lăng và cá bống lòng hồ',
        storyPrompt: 'Món ăn dân dã tươi ngon nức tiếng đánh bắt từ lòng hồ Dầu Tiếng là gì?',
        clueVerse: 'Cá lăng nấu lẩu chua măng ngọt,\nCá bống kho tiêu thắm nghĩa tình.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại cá nước ngọt đặc sản sống trong lòng hồ Dầu Tiếng nổi tiếng với thịt ngọt thơm là cá gì?',
          options: ['Cá lăng hồ Dầu Tiếng (nấu lẩu măng chua) và cá bống kho tiêu', 'Cá hồi Na Uy', 'Cá ngừ đại dương', 'Cá tuyết'],
          correctAnswer: 'Cá lăng hồ Dầu Tiếng (nấu lẩu măng chua) và cá bống kho tiêu',
          explanation: 'Cá lăng, cá thát lát, cá chép và cá bống khai thác tự nhiên từ lòng hồ có vị ngọt béo tự nhiên vô cùng hấp dẫn.',
          hintLevel1: 'Cá lăng và cá bống lòng hồ.',
          hintLevel2: 'Cá lăng nấu lẩu.',
          hintLevel3: 'Chọn Cá lăng hồ Dầu Tiếng...'
        }
      },
      {
        id: 'dt_step_10',
        title: 'Chiều dài thân đập chính',
        storyPrompt: 'Đập chính bằng đất ngăn dòng sông Sài Gòn có chiều dài xấp xỉ bao nhiêu mét?',
        clueVerse: 'Thân đập đất dài hơn một cây số,\nChắn dòng cuộn sóng giữ bình yên.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đập đất chính hồ Dầu Tiếng có chiều dài khoảng bao nhiêu?',
          options: ['Dài hơn 1.100 mét (1.1 km)', 'Dài 100 mét', 'Dài 50 km', 'Dài 20 mét'],
          correctAnswer: 'Dài hơn 1.100 mét (1.1 km)',
          explanation: 'Đập chính đắp bằng đất dài 1.134m, cao 29m tính từ đáy móng, kết hợp hệ thống đập phụ dài hơn 27km.',
          hintLevel1: 'Hơn 1.1 km.',
          hintLevel2: '1.100 mét.',
          hintLevel3: 'Chọn Dài hơn 1.100 mét (1.1 km).'
        }
      },
      {
        id: 'dt_step_11',
        title: 'Hồ thủy lợi đa mục tiêu',
        storyPrompt: 'Ngoài tưới nông nghiệp, Hồ Dầu Tiếng còn đóng vai trò quan trọng trong việc:',
        clueVerse: 'Đẩy mặn rửa chua vùng hạ du,\nCắt lũ mùa mưa giữ yên lành.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Hồ Dầu Tiếng có vai trò điều tiết đẩy mặn cho sông Sài Gòn vào mùa khô và cắt lũ bảo vệ vùng hạ du TP.HCM trong mùa mưa bão?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hồ xả nước đẩy mặn giúp các nhà máy nước tại TP.HCM (như Nhà máy nước Tân Hiệp) luôn có nguồn nước ngọt để xử lý.',
          hintLevel1: 'Điều tiết đẩy mặn và cắt lũ.',
          hintLevel2: 'Bảo vệ nguồn nước sinh hoạt TP.HCM.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'dt_step_12',
        title: 'Dự án điện mặt trời nổi trên mặt hồ',
        storyPrompt: 'Trên mặt nước hồ Dầu Tiếng hiện nay đã phát triển nguồn năng lượng tái tạo nào?',
        clueVerse: 'Tấm pin năng lượng đón ánh dương,\nĐiện mặt trời sáng khắp muôn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Công trình năng lượng sạch quy mô lớn xây dựng trên bán ngập hồ Dầu Tiếng là gì?',
          options: ['Nhà máy điện mặt trời Dầu Tiếng (Cụm điện mặt trời lớn hàng đầu Đông Nam Á)', 'Nhà máy điện hạt nhân', 'Nhà máy nhiệt điện than', 'Khai thác mỏ dầu khí'],
          correctAnswer: 'Nhà máy điện mặt trời Dầu Tiếng (Cụm điện mặt trời lớn hàng đầu Đông Nam Á)',
          explanation: 'Cụm nhà máy điện mặt trời Dầu Tiếng công suất 420MW là một trong những dự án điện mặt trời lớn nhất khu vực Đông Nam Á.',
          hintLevel1: 'Điện mặt trời.',
          hintLevel2: 'Nhà máy điện mặt trời Dầu Tiếng.',
          hintLevel3: 'Chọn Nhà máy điện mặt trời Dầu Tiếng...'
        }
      },
      {
        id: 'dt_step_13',
        title: 'Rừng cao su bạt ngàn bao quanh hồ',
        storyPrompt: 'Đường dẫn đến hồ Dầu Tiếng chạy xuyên qua những cánh rừng của loài cây công nghiệp nào?',
        clueVerse: 'Rừng cao su lá đỏ mùa thay lá,\nBóng mát đường dài đẹp như tranh.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loại cây công nghiệp cho mủ trắng trồng bạt ngàn quanh huyện Dầu Tiếng (chứa từ "Cao su"):',
          correctAnswer: 'Cao su',
          keywords: ['cao su', 'rừng cao su', 'cây cao su'],
          explanation: 'Huyện Dầu Tiếng là thủ phủ của những nông trường cao su lâu đời với những hàng cây thẳng tắp thay lá tuyệt đẹp vào mùa đông.',
          hintLevel1: 'Cây Cao su.',
          hintLevel2: 'Cao su.',
          hintLevel3: 'Nhập: Cao su.'
        }
      },
      {
        id: 'dt_step_14',
        title: 'Mùa nước cạn lộ bãi cỏ xanh',
        storyPrompt: 'Vào mùa khô (tháng 12 đến tháng 4 hàng năm), khi nước hồ rút bớt sẽ xuất hiện hiện tượng kỳ thú nào?',
        clueVerse: 'Nước rút bãi cỏ mọc xanh rờn,\nThảo nguyên bao la giữa lòng hồ.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Khi nước hồ rút vào mùa khô, hàng ngàn hécta đáy hồ biến thành những đồng cỏ xanh mướt trải dài như một thảo nguyên bao la ven chân núi Bà Đen?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Thảo nguyên cỏ xanh mùa nước cạn là thời điểm vàng để dựng lều dã ngoại và chụp những bộ ảnh thiên nhiên tuyệt đẹp.',
          hintLevel1: 'Thảo nguyên cỏ xanh đáy hồ.',
          hintLevel2: 'Đồng cỏ mùa nước cạn.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'dt_step_15',
        title: 'Bảo vệ nguồn tài nguyên nước ngọt quý giá',
        storyPrompt: 'Hành động có ý thức nhất mà mỗi du khách cần thực hiện khi đến tham quan cắm trại tại Hồ Dầu Tiếng là gì?',
        clueVerse: 'Không xả rác giữ nước trong xanh,\nĐể lại dấu chân bảo vệ lành.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Thông điệp môi trường quan trọng nhất khi trải nghiệm tại Hồ Dầu Tiếng là gì?',
          options: [
            'Không xả rác, thu dọn toàn bộ rác thải mang về và giữ gìn nguồn nước ngọt nguyên vẹn',
            'Chặt cây đốt lửa bừa bãi',
            'Vứt rác nhựa xuống lòng hồ',
            'Đổ hóa chất độc hại xuống nước'
          ],
          correctAnswer: 'Không xả rác, thu dọn toàn bộ rác thải mang về và giữ gìn nguồn nước ngọt nguyên vẹn',
          explanation: 'Giữ gìn vệ sinh và không để lại rác là trách nhiệm của mọi người để bảo vệ túi nước ngọt sinh mệnh của miền Đông Nam Bộ.',
          hintLevel1: 'Bảo vệ môi trường và thu dọn rác.',
          hintLevel2: 'Không xả rác.',
          hintLevel3: 'Chọn Không xả rác, thu dọn toàn bộ rác thải mang về...'
        }
      }
    ]
  },

  // =========================================================================
  // 18. Mũi Nghinh Phong & Cổng Trời (Vũng Tàu) - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_mui_nghinh_phong',
    locationId: 'loc_mui_nghinh_phong',
    title: 'Gió Biển Bốn Mùa & Chiếc Cổng Trời Hướng Biển Đông',
    subtitle: 'Khám phá mũi đất vươn dài ra biển ngắm gió quanh năm, Cổng Trời sống ảo và hai bãi biển Bãi Trước - Bãi Sau',
    category: 'nature',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_mui_nghinh_phong',
    loreChapter: 'Chương 18: Lộng Gió Nghinh Phong',
    steps: [
      {
        id: 'np_step_1',
        title: 'Ý nghĩa tên gọi Nghinh Phong',
        storyPrompt: 'Đứng nơi mũi đá vươn dài ra biển đón những làn gió biển mát rượi quanh năm:',
        clueVerse: 'Nghinh phong đón gió biển bốn mùa,\nSóng vỗ rì rào nắng sớm trưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai chữ Hán - Việt "Nghinh Phong" có nghĩa là gì?',
          options: ['Đón gió (Nghinh = đón rước, Phong = ngọn gió)', 'Núi cao', 'Bãi cát vàng', 'Hang động ngầm'],
          correctAnswer: 'Đón gió (Nghinh = đón rước, Phong = ngọn gió)',
          explanation: '"Nghinh" là đón chào, rước đón; "Phong" là gió. Nghinh Phong nghĩa là mũi đất vươn ra biển đón trọn những ngọn gió lành từ đại dương.',
          hintLevel1: 'Đón gió.',
          hintLevel2: 'Nghinh = đón, Phong = gió.',
          hintLevel3: 'Chọn Đón gió (Nghinh = đón rước, Phong = ngọn gió).'
        }
      },
      {
        id: 'np_step_2',
        title: 'Cổng Trời sống ảo độc đáo',
        storyPrompt: 'Bức tường gạch vàng cổ kính với ô cửa vòm mở ra toàn cảnh biển xanh mênh mông được du khách gọi là gì?',
        clueVerse: 'Cổng Trời mở lối biển mênh mông,\nKhung hình tuyệt tác thỏa ước mong.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên gọi nổi tiếng của ô cửa vòm nhìn thẳng ra biển tại Mũi Nghinh Phong (chứa từ "Cổng Trời"):',
          correctAnswer: 'Cổng Trời',
          keywords: ['cổng trời', 'cong troi', 'cổng trời vũng tàu'],
          explanation: 'Chiếc "Cổng Trời" màu vàng cam nổi bật với khung nhìn xuyên thẳng ra biển Đông bao la là góc check-in biểu tượng của giới trẻ.',
          hintLevel1: 'Cổng Trời.',
          hintLevel2: 'Cổng Trời.',
          hintLevel3: 'Nhập: Cổng Trời.'
        }
      },
      {
        id: 'np_step_3',
        title: 'Vị trí chia cắt hai bãi biển',
        storyPrompt: 'Mũi Nghinh Phong như một cánh tay vươn ra biển chia tách hai bãi biển nào của Vũng Tàu?',
        clueVerse: 'Một bên Bãi Vọng Nguyệt êm đềm,\nMột bên Bãi Dứa sóng dịu êm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai bãi biển xinh đẹp nằm ở hai bên Mũi Nghinh Phong là bãi biển nào?',
          options: ['Bãi Vọng Nguyệt (Bãi Sau) và Bãi Dứa (Bãi Trước)', 'Bãi Cháy và Bãi Dài', 'Bãi Khem và Bãi Sao', 'Bãi Rạng và Mũi Né'],
          correctAnswer: 'Bãi Vọng Nguyệt (Bãi Sau) và Bãi Dứa (Bãi Trước)',
          explanation: 'Mũi Nghinh Phong nằm ở cực nam bán đảo Vũng Tàu, phía trước là Bãi Vọng Nguyệt hoang sơ và phía sau là Bãi Dứa thanh bình.',
          hintLevel1: 'Bãi Vọng Nguyệt và Bãi Dứa.',
          hintLevel2: 'Vọng Nguyệt và Bãi Dứa.',
          hintLevel3: 'Chọn Bãi Vọng Nguyệt (Bãi Sau) và Bãi Dứa (Bãi Trước).'
        }
      },
      {
        id: 'np_step_4',
        title: 'Ngắm tượng Chúa Kitô Vua trên đỉnh Núi Nhỏ',
        storyPrompt: 'Từ Mũi Nghinh Phong ngước mắt nhìn lên đỉnh Núi Nhỏ, bạn sẽ thấy pho tượng khổng lồ nào?',
        clueVerse: 'Tượng Chúa dang tay trên đỉnh núi,\nChe chở bình an khắp đất trời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tượng đài nổi tiếng sừng sững trên đỉnh Tao Phùng nhìn thấy rõ từ Mũi Nghinh Phong là gì?',
          options: ['Tượng Chúa Kitô Vua (Chúa dang tay)', 'Tượng Nữ thần Tự Do', 'Tượng Nhân sư', 'Tượng David'],
          correctAnswer: 'Tượng Chúa Kitô Vua (Chúa dang tay)',
          explanation: 'Tượng Chúa Kitô Vua cao 32m với sải tay dài 18.3m ngự trên đỉnh Núi Nhỏ ngay phía sau Mũi Nghinh Phong.',
          hintLevel1: 'Tượng Chúa dang tay.',
          hintLevel2: 'Tượng Chúa Kitô Vua.',
          hintLevel3: 'Chọn Tượng Chúa Kitô Vua (Chúa dang tay).'
        }
      },
      {
        id: 'np_step_5',
        title: 'Hòn đảo nhỏ trước mặt mũi Nghinh Phong',
        storyPrompt: 'Nhìn ra biển khơi cách bờ khoảng vài trăm mét là một hòn đảo nhỏ có ngôi miếu cổ thờ ai?',
        clueVerse: 'Hòn Bà nổi giữa sóng triều dâng,\nMiếu Bà linh hiển rạng nhân gian.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên hòn đảo nhỏ có con đường rẽ biển đi bộ ra miếu khi thủy triều rút (chứa từ "Hòn Bà"):',
          correctAnswer: 'Hòn Bà',
          keywords: ['hòn bà', 'hon ba', 'đảo hòn bà'],
          explanation: 'Đảo Hòn Bà với Miếu Bà thờ Thủy Long thần nữ nằm cách mũi đá không xa, nổi tiếng với con đường đá rẽ biển độc đáo khi triều rút.',
          hintLevel1: 'Đảo Hòn Bà.',
          hintLevel2: 'Hòn Bà.',
          hintLevel3: 'Nhập: Hòn Bà.'
        }
      },
      {
        id: 'np_step_6',
        title: 'Hiện tượng con đường rẽ biển ra Hòn Bà',
        storyPrompt: 'Vào những ngày rằm và mùng một âm lịch khi nước biển rút sâu, điều kỳ diệu nào xuất hiện?',
        clueVerse: 'Nước rút lộ ra con đường đá,\nBước bộ ra đảo giữa biển khơi.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Khi thủy triều rút cạn, một con đường đá tự nhiên gập ghềnh dài hàng trăm mét hiện ra nối liền đất liền với đảo Hòn Bà cho người đi bộ qua?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Con đường đá rẽ biển tự nhiên đi bộ ra đảo Hòn Bà là một trong những trải nghiệm kỳ thú nhất tại Vũng Tàu.',
          hintLevel1: 'Con đường đá rẽ biển khi triều rút.',
          hintLevel2: 'Đi bộ ra đảo Hòn Bà.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'np_step_7',
        title: 'Cảnh bình minh và hoàng hôn tuyệt đẹp',
        storyPrompt: 'Đặc điểm địa lý độc đáo của Mũi Nghinh Phong cho phép du khách ngắm trọn vẹn hai khoảnh khắc nào trong ngày?',
        clueVerse: 'Sớm mai đón ánh bình minh rạng,\nChiều tà ngắm ráng đỏ hoàng hôn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Điểm đặc biệt về cảnh sắc mặt trời tại Mũi Nghinh Phong là gì?',
          options: [
            'Có thể ngắm cả bình minh rực rỡ buổi sáng và ráng đỏ hoàng hôn buông chiều muộn',
            'Chỉ nhìn thấy tuyết rơi',
            'Quanh năm sương mù dày đặc không thấy mặt trời',
            'Mặt trời không bao giờ lặn'
          ],
          correctAnswer: 'Có thể ngắm cả bình minh rực rỡ buổi sáng và ráng đỏ hoàng hôn buông chiều muộn',
          explanation: 'Do là mũi đất nhô ra biển 3 mặt, du khách có thể chiêm ngưỡng trọn vẹn cả bình minh từ biển Đông và hoàng hôn phía tây nam.',
          hintLevel1: 'Ngắm cả bình minh và hoàng hôn.',
          hintLevel2: 'Đón mặt trời mọc và lặn.',
          hintLevel3: 'Chọn Có thể ngắm cả bình minh rực rỡ...'
        }
      },
      {
        id: 'np_step_8',
        title: 'Bãi Vọng Nguyệt hoang sơ dưới chân mũi',
        storyPrompt: 'Bãi cát nhỏ nằm ẩn mình dưới vách đá dựng đứng của Mũi Nghinh Phong mang tên thơ mộng là gì?',
        clueVerse: 'Vọng Nguyệt ngắm trăng soi đáy nước,\nSóng vỗ ghềnh đá trắng ngần bay.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên bãi biển thơ mộng có nghĩa là "Ngắm trăng" dưới chân mũi Nghinh Phong (chứa từ "Vọng Nguyệt"):',
          correctAnswer: 'Bãi Vọng Nguyệt',
          keywords: ['bãi vọng nguyệt', 'bai vong nguyet', 'vọng nguyệt'],
          explanation: 'Bãi Vọng Nguyệt (nghĩa là trông trăng / ngắm trăng) có làn nước trong vắt và bãi cát vàng nép mình bên vách đá dựng đứng.',
          hintLevel1: 'Bãi Vọng Nguyệt.',
          hintLevel2: 'Vọng Nguyệt.',
          hintLevel3: 'Nhập: Bãi Vọng Nguyệt.'
        }
      },
      {
        id: 'np_step_9',
        title: 'Cung đường ven biển Hạ Long - Thùy Vân',
        storyPrompt: 'Mũi Nghinh Phong là điểm kết nối giữa hai cung đường ven biển đẹp bậc nhất Vũng Tàu nào?',
        clueVerse: 'Đường Hạ Long uốn lượn Bãi Trước,\nNối dải Thùy Vân rực Bãi Sau.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tuyến đường ven biển chạy qua Mũi Nghinh Phong là tuyến đường nào?',
          options: ['Đường Hạ Long nối tiếp đường Thùy Vân', 'Quốc lộ 1A', 'Cao tốc Long Thành', 'Đường Nguyễn Huệ'],
          correctAnswer: 'Đường Hạ Long nối tiếp đường Thùy Vân',
          explanation: 'Mũi Nghinh Phong nằm ở số 1 đường Hạ Long, điểm giao thoa giữa đường Hạ Long ven Bãi Trước và đường Thùy Vân chạy dài theo Bãi Sau.',
          hintLevel1: 'Đường Hạ Long và Thùy Vân.',
          hintLevel2: 'Hạ Long - Thùy Vân.',
          hintLevel3: 'Chọn Đường Hạ Long nối tiếp đường Thùy Vân.'
        }
      },
      {
        id: 'np_step_10',
        title: 'Khí hậu mát mẻ và gió lộng quanh năm',
        storyPrompt: 'Khí hậu tại Mũi Nghinh Phong có đặc điểm gì nổi bật so với các khu vực nội đô?',
        clueVerse: 'Gió biển thổi tan ngày oi ả,\nKhông khí trong lành sảng khoái thay.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Do nằm vươn ra biển, Mũi Nghinh Phong luôn có gió biển lộng thổi liên tục, nhiệt độ mát mẻ quanh năm dù trong những ngày hè nắng nóng?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Gió biển trong lành mang nhiều ion âm giúp không khí tại mũi luôn thoáng đãng và dễ chịu.',
          hintLevel1: 'Gió biển mát mẻ quanh năm.',
          hintLevel2: 'Khí hậu trong lành lộng gió.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'np_step_11',
        title: 'Loài cỏ đuôi chồn và hoa dại ven vách đá',
        storyPrompt: 'Ven các triền dốc đá dẫn ra mũi Nghinh Phong mọc nhiều loài cỏ và hoa dại nào tạo nên cảnh sắc lãng mạn?',
        clueVerse: 'Cỏ đuôi chồn đung đưa theo gió,\nHoa muống biển tím ngát sườn non.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loài hoa dại màu tím nở rộ bò lan trên triền cát đá ven Mũi Nghinh Phong là hoa gì?',
          options: ['Hoa Muống Biển', 'Hoa Hồng nhung', 'Hoa Cẩm Tú Cầu', 'Hoa Tulip'],
          correctAnswer: 'Hoa Muống Biển',
          explanation: 'Hoa muống biển tím biếc cùng những thảm cỏ vàng đuôi chồn đung đưa trong gió biển tạo nên vẻ đẹp hoang sơ quyến rũ.',
          hintLevel1: 'Hoa Muống Biển tím.',
          hintLevel2: 'Muống biển.',
          hintLevel3: 'Chọn Hoa Muống Biển.'
        }
      },
      {
        id: 'np_step_12',
        title: 'Lưu ý an toàn khi chụp ảnh trên ghềnh đá',
        storyPrompt: 'Khi leo ra các mỏm đá ngoài mép biển để chụp ảnh, du khách cần đặc biệt chú ý điều gì?',
        clueVerse: 'Đá trơn sóng lớn chớ coi thường,\nGiữ gìn an toàn trọn nẻo đường.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khuyến cáo an toàn quan trọng nhất khi tham quan ghềnh đá Mũi Nghinh Phong là gì?',
          options: [
            'Cẩn thận trơn trượt do rêu biển, không trèo ra các mỏm đá chênh vênh khi có sóng lớn hoặc gió giật mạnh',
            'Nhảy từ vách đá xuống biển tắm',
            'Chạy nhảy đuổi bắt trên vách đá ướt',
            'Đi chân trần dẫm lên đá hà sắc nhọn'
          ],
          correctAnswer: 'Cẩn thận trơn trượt do rêu biển, không trèo ra các mỏm đá chênh vênh khi có sóng lớn hoặc gió giật mạnh',
          explanation: 'Ghềnh đá ven biển có nhiều rêu trơn và sóng ngầm nguy hiểm, du khách cần luôn giữ khoảng cách an toàn.',
          hintLevel1: 'Cẩn thận trơn trượt và sóng lớn.',
          hintLevel2: 'Chú ý an toàn ghềnh đá.',
          hintLevel3: 'Chọn Cẩn thận trơn trượt do rêu biển...'
        }
      },
      {
        id: 'np_step_13',
        title: 'Điểm câu cá biển của các cần thủ',
        storyPrompt: 'Các ghềnh đá sâu ven Mũi Nghinh Phong là địa điểm yêu thích của những ai?',
        clueVerse: 'Cần thủ buông câu bên mé đá,\nSăn cá mú cá hồng giữa trùng khơi.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Mũi Nghinh Phong với dòng hải lưu chảy qua là điểm câu cá biển tự nhiên lý tưởng thu hút các cần thủ địa phương?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Nước sâu và nhiều rạn san hô đá ngầm tập trung nhiều loài cá mú, cá hồng, cá tráp thu hút người mê câu cá.',
          hintLevel1: 'Điểm câu cá ghềnh biển.',
          hintLevel2: 'Cần thủ câu cá.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'np_step_14',
        title: 'Bậc tam cấp dẫn lối xuống mũi đá',
        storyPrompt: 'Lối đi từ đường Hạ Long xuống Mũi Nghinh Phong được xây dựng như thế nào?',
        clueVerse: 'Bậc thang đá uốn lượn thênh thang,\nDẫn bước chân ra mũi biển vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đường đi xuống Mũi Nghinh Phong là lối đi dạng gì?',
          options: [
            'Các bậc thang tam cấp bằng đá và bê tông thoai thoải dễ đi',
            'Dây thừng leo núi hiểm trở',
            'Thang máy cáp treo',
            'Đường hầm xuyên núi'
          ],
          correctAnswer: 'Các bậc thang tam cấp bằng đá và bê tông thoai thoải dễ đi',
          explanation: 'Hệ thống bậc thang đá thoai thoải giúp du khách dễ dàng tản bộ từ bãi đỗ xe xuống tận mũi đất.',
          hintLevel1: 'Bậc thang đá thoai thoải.',
          hintLevel2: 'Bậc tam cấp bằng đá.',
          hintLevel3: 'Chọn Các bậc thang tam cấp bằng đá...'
        }
      },
      {
        id: 'np_step_15',
        title: 'Biểu tượng tự do phóng khoáng của Vũng Tàu',
        storyPrompt: 'Mũi Nghinh Phong để lại ấn tượng sâu đậm trong lòng du khách như một biểu tượng của:',
        clueVerse: 'Tự do phóng khoáng giữa trời mây,\nNghinh Phong lưu luyến bước người say.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Mũi Nghinh Phong là biểu tượng của tinh thần tự do, sự giao hòa tuyệt mỹ giữa con người và thiên nhiên biển trời bao la của thành phố biển Vũng Tàu?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Đứng trước biển rộng trời cao tại Mũi Nghinh Phong mang lại cảm giác thư thái, giải phóng mọi âu lo thường nhật.',
          hintLevel1: 'Tinh thần tự do phóng khoáng.',
          hintLevel2: 'Biểu tượng thiên nhiên Vũng Tàu.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 19. Cầu Mống Sài Gòn (TP.HCM) - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_cau_mong',
    locationId: 'loc_cau_mong',
    title: 'Cây Cầu Thép Cổ 1893 & Màu Sơn Xanh Cổ Điển',
    subtitle: 'Khám phá cây cầu bộ hành bắc qua rạch Bến Nghé nối Quận 1 và Quận 4 do công ty Eiffel xây dựng hơn 130 năm',
    category: 'architecture',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_cau_mong',
    loreChapter: 'Chương 19: Dáng Cầu Vồng Trên Bến Nghé',
    steps: [
      {
        id: 'cm_step_1',
        title: 'Năm khánh thành cây cầu thép cổ',
        storyPrompt: 'Đứng ngắm cây cầu thép màu xanh ngọc bắc cong cong qua kênh Bến Nghé êm đềm:',
        clueVerse: 'Một tám chín ba dựng cầu sang,\nVòm thép cong cong bóng nắng vàng.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm Cầu Mống được hoàn thành xây dựng dưới thời Pháp thuộc (gợi ý: 189x):',
          correctAnswer: '1893',
          keywords: ['1893'],
          explanation: 'Cầu Mống được công ty vận chuyển hàng hải Messageries Maritimes đặt hãng thầu xây dựng Levallois-Perret thi công và hoàn thành năm 1893.',
          hintLevel1: 'Năm 1893.',
          hintLevel2: '1893.',
          hintLevel3: 'Nhập: 1893.'
        }
      },
      {
        id: 'cm_step_2',
        title: 'Hãng thiết kế gắn liền với tháp Eiffel',
        storyPrompt: 'Cây cầu được thiết kế và thi công bởi công ty xây dựng của kỹ sư huyền thoại nào người Pháp?',
        clueVerse: 'Gustave Eiffel ghi dấu ấn son,\nThép rèn kiên vững cùng nước non.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên kỹ sư huyền thoại người Pháp thiết kế tháp Eiffel và công ty thi công Cầu Mống (chứa từ "Eiffel"):',
          correctAnswer: 'Gustave Eiffel',
          keywords: ['eiffel', 'gustave eiffel'],
          explanation: 'Cầu Mống do công ty Levallois-Perret (tiền thân là công ty của kỹ sư tài ba Gustave Eiffel - tác giả tháp Eiffel) thiết kế và chế tác khung thép.',
          hintLevel1: 'Kỹ sư Gustave Eiffel.',
          hintLevel2: 'Eiffel.',
          hintLevel3: 'Nhập: Gustave Eiffel.'
        }
      },
      {
        id: 'cm_step_3',
        title: 'Nguồn gốc tên gọi "Cầu Mống"',
        storyPrompt: 'Tại sao người Sài Gòn lại gọi cây cầu này bằng cái tên dân dã thân thương "Cầu Mống"?',
        clueVerse: 'Thân cầu uốn lượn tựa cầu vồng,\nNgười xưa gọi Mống bắc ngang sông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên gọi "Cầu Mống" xuất phát từ đặc điểm hình dáng kiến trúc nào của cây cầu?',
          options: [
            'Thân cầu có nhịp vòm cong vút giống hình chiếc mống (cầu vồng / mống cụt)',
            'Tên của một loại cây trồng ven sông',
            'Tên của một vị quan triều Nguyễn',
            'Nơi bắt mống chim'
          ],
          correctAnswer: 'Thân cầu có nhịp vòm cong vút giống hình chiếc mống (cầu vồng / mống cụt)',
          explanation: 'Trong tiếng miền Nam xưa, "mống" chỉ cầu vồng. Dáng cầu uốn cong hình vòm thép mềm mại tựa như chiếc cầu vồng bắc qua sông.',
          hintLevel1: 'Dáng cong hình cầu vồng (chiếc mống).',
          hintLevel2: 'Dáng vòm cong như mống trời.',
          hintLevel3: 'Chọn Thân cầu có nhịp vòm cong vút...'
        }
      },
      {
        id: 'cm_step_4',
        title: 'Kết nối hai bờ Quận 1 và Quận 4',
        storyPrompt: 'Cầu Mống bắc qua kênh Bến Nghé nối liền hai tuyến đường nào ở hai quận trung tâm?',
        clueVerse: 'Đường Võ Văn Kiệt bên Quận Một,\nNối Bến Vân Đồn phía Quận Tư.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cầu Mống kết nối đường Võ Văn Kiệt (Quận 1) với đường nào ở Quận 4?',
          options: ['Đường Bến Vân Đồn', 'Đường Hoàng Diệu', 'Đường Nguyễn Tất Thành', 'Đường Tôn Thất Thuyết'],
          correctAnswer: 'Đường Bến Vân Đồn',
          explanation: 'Cầu nối thẳng từ đầu đường Nam Kỳ Khởi Nghĩa / Võ Văn Kiệt (Quận 1) sang đường Bến Vân Đồn (Quận 4).',
          hintLevel1: 'Đường Bến Vân Đồn.',
          hintLevel2: 'Bến Vân Đồn.',
          hintLevel3: 'Chọn Đường Bến Vân Đồn.'
        }
      },
      {
        id: 'cm_step_5',
        title: 'Màu sơn xanh ngọc lam đặc trưng',
        storyPrompt: 'Cầu Mống nổi bật giữa không gian sông nước đô thị với màu sơn nổi bật nào?',
        clueVerse: 'Sơn xanh ngọc bích thắm dịu dàng,\nĐẹp như tranh vẽ giữa nắng vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cầu Mống được sơn màu gì mang phong cách cổ điển phương Tây?',
          options: ['Màu xanh ngọc lam (xanh bạc hà / pastel mint)', 'Màu đỏ rực', 'Màu tím than', 'Màu đen tuyền'],
          correctAnswer: 'Màu xanh ngọc lam (xanh bạc hà / pastel mint)',
          explanation: 'Màu sơn xanh ngọc lam thanh lịch giúp cây cầu trăm tuổi vừa mang nét hoài cổ vừa trẻ trung, lãng mạn.',
          hintLevel1: 'Màu xanh ngọc lam.',
          hintLevel2: 'Xanh ngọc / Xanh bạc hà.',
          hintLevel3: 'Chọn Màu xanh ngọc lam (xanh bạc hà / pastel mint).'
        }
      },
      {
        id: 'cm_step_6',
        title: 'Chức năng hiện nay: Cầu dành riêng cho người đi bộ',
        storyPrompt: 'Hiện nay, Cầu Mống phục vụ đối tượng lưu thông nào?',
        clueVerse: 'Cầu xưa cấm hết xe cơ giới,\nDành riêng đi bộ hóng gió ngời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chức năng sử dụng hiện nay của Cầu Mống là gì?',
          options: [
            'Cầu dành riêng cho người đi bộ, hóng gió và tham quan ngắm cảnh',
            'Đường cao tốc cho xe container',
            'Đường ray xe lửa',
            'Bãi đậu xe buýt'
          ],
          correctAnswer: 'Cầu dành riêng cho người đi bộ, hóng gió và tham quan ngắm cảnh',
          explanation: 'Cầu Mống đã được chuyển đổi thành cầu bộ hành 100%, là điểm hóng mát, trò chuyện và ngắm hoàng hôn yêu thích của người dân TP.HCM.',
          hintLevel1: 'Cầu dành cho người đi bộ.',
          hintLevel2: 'Cầu bộ hành.',
          hintLevel3: 'Chọn Cầu dành riêng cho người đi bộ...'
        }
      },
      {
        id: 'cm_step_7',
        title: 'Chiều dài thân cầu thép',
        storyPrompt: 'Chiều dài tổng thể của nhịp cầu thép Cầu Mống là bao nhiêu mét?',
        clueVerse: 'Một trăm hai mươi tám mét dài,\nVòm thép vươn bóng đón ngày mai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cầu Mống có chiều dài khoảng bao nhiêu mét?',
          options: ['Dài 128 mét (rộng 5.2m)', 'Dài 1.000 mét', 'Dài 20 mét', 'Dài 500 mét'],
          correctAnswer: 'Dài 128 mét (rộng 5.2m)',
          explanation: 'Cầu dài 128m, rộng 5.2m, vỉa hè dành cho người đi bộ rộng 0.5m với kết cấu đinh tán rivê kiên cố bằng thép rèn.',
          hintLevel1: 'Dài 128 mét.',
          hintLevel2: '128 mét.',
          hintLevel3: 'Chọn Dài 128 mét (rộng 5.2m).'
        }
      },
      {
        id: 'cm_step_8',
        title: 'Dự án đại lộ Đông Tây và bảo tồn cầu',
        storyPrompt: 'Khi xây dựng đường hầm sông Sài Gòn và Đại lộ Võ Văn Kiệt, Cầu Mống đã được:',
        clueVerse: 'Tháo dỡ cẩn trọng rồi lắp lại,\nBảo tồn di sản vẹn nguyên hoài.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Khi thi công hầm vượt sông Sài Gòn, Cầu Mống đã được tháo dỡ nguyên khối tạm thời, gia cố móng cọc rồi lắp ghép phục nguyên đúng vị trí ban đầu để bảo tồn?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cầu Mống được nâng niu bảo tồn bằng phương pháp tháo lắp kỹ thuật cao, giữ trọn vẹn từng thanh dầm thép lịch sử.',
          hintLevel1: 'Tháo dỡ tạm thời rồi lắp lại nguyên bản.',
          hintLevel2: 'Bảo tồn di sản kiến trúc.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cm_step_9',
        title: 'Ngắm nhìn tòa tháp Bitexco tài chính',
        storyPrompt: 'Đứng giữa Cầu Mống nhìn về phía Quận 1, bạn sẽ bắt trọn góc nhìn tuyệt đẹp của tòa nhà chọc trời biểu tượng nào?',
        clueVerse: 'Búp sen Bitexco vươn cao vút,\nHiện đại hòa cùng nét cổ xưa.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên tòa tháp tài chính hình búp sen soi bóng bên Cầu Mống (chứa từ "Bitexco"):',
          correctAnswer: 'Bitexco',
          keywords: ['bitexco', 'tháp bitexco', 'bitexco financial tower'],
          explanation: 'Góc chụp từ Cầu Mống nhìn sang tòa tháp Bitexco 68 tầng là sự kết hợp kinh điển giữa Sài Gòn xưa cổ kính và TP.HCM nay hiện đại.',
          hintLevel1: 'Tòa tháp Bitexco.',
          hintLevel2: 'Bitexco.',
          hintLevel3: 'Nhập: Bitexco.'
        }
      },
      {
        id: 'cm_step_10',
        title: 'Tòa nhà Ngân hàng Nhà nước cổ kính kế bên',
        storyPrompt: 'Ngay đầu cầu phía Quận 1 là tòa nhà di sản kiến trúc Đông Dương tráng lệ nào?',
        clueVerse: 'Ngân hàng Nhà nước đá nguyên khối,\nKiến trúc Đông Dương rạng nét ngời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Công trình kiến trúc đồ sộ thời Pháp (nguyên gốc Ngân hàng Đông Dương) nằm sát chân Cầu Mống là gì?',
          options: ['Ngân hàng Nhà nước Việt Nam - Chi nhánh TP.HCM', 'Bệnh viện Chợ Rẫy', 'Sân bay Tân Sơn Nhất', 'Khách sạn Caravelle'],
          correctAnswer: 'Ngân hàng Nhà nước Việt Nam - Chi nhánh TP.HCM',
          explanation: 'Tòa nhà Ngân hàng Nhà nước (xây dựng năm 1929-1930) mang phong cách Art Deco kết hợp hoa văn Khmer và Chăm độc đáo.',
          hintLevel1: 'Trụ sở Ngân hàng Nhà nước.',
          hintLevel2: 'Ngân hàng Nhà nước TP.HCM.',
          hintLevel3: 'Chọn Ngân hàng Nhà nước Việt Nam - Chi nhánh TP.HCM.'
        }
      },
      {
        id: 'cm_step_11',
        title: 'Điểm hẹn hóng mát trà chanh của giới trẻ',
        storyPrompt: 'Vào mỗi buổi chiều tối mát mẻ, không gian trên Cầu Mống trở thành:',
        clueVerse: 'Trà chanh cá viên chiên rôm rả,\nTiếng cười bạn trẻ rộn bờ kênh.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Cầu Mống là điểm hẹn hò, trò chuyện, uống trà sữa, trà chanh và đàn hát acoustic yêu thích của sinh viên và giới trẻ TP.HCM?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Không gian thoáng đãng lộng gió sông mát lành khiến Cầu Mống luôn tràn ngập tiếng cười tuổi trẻ.',
          hintLevel1: 'Điểm hẹn hò hóng gió của giới trẻ.',
          hintLevel2: 'Không gian cộng đồng thân thiện.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cm_step_12',
        title: 'Kỹ thuật tán đinh rivê thời kỳ đầu',
        storyPrompt: 'Các mối nối thanh thép của Cầu Mống được liên kết bằng kỹ thuật cổ truyền nào thời cuối thế kỷ 19?',
        clueVerse: 'Đinh tán rivê nung đỏ lửa,\nGhép ngàn thanh thép vững ngàn năm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Công nghệ liên kết kim loại thời Eiffel sử dụng trên Cầu Mống là gì?',
          options: [
            'Tán đinh nóng rivê thủ công (Rivet riveting)',
            'Hàn laser công nghệ cao',
            'Dán bằng keo siêu dính',
            'Buộc dây kẽm'
          ],
          correctAnswer: 'Tán đinh nóng rivê thủ công (Rivet riveting)',
          explanation: 'Hàng chục ngàn chiếc đinh tán rivê được nung đỏ và tán thủ công bằng búa thép tạo nên độ bền vĩnh cửu cho khung cầu.',
          hintLevel1: 'Tán đinh rivê nung nóng.',
          hintLevel2: 'Đinh tán Rivet.',
          hintLevel3: 'Chọn Tán đinh nóng rivê thủ công (Rivet riveting).'
        }
      },
      {
        id: 'cm_step_13',
        title: 'Tàu buýt sông (Waterbus) lướt dưới chân cầu',
        storyPrompt: 'Nhìn từ trên cầu xuống dòng rạch Bến Nghé, du khách có thể bắt gặp phương tiện du lịch đường thủy nào?',
        clueVerse: 'Buýt sông vàng rực rẽ dòng nước,\nChở khách ngắm nhìn phố rạng ngời.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Dưới vòm Cầu Mống là luồng tuyến đường thủy của tàu buýt sông Sài Gòn (Saigon Waterbus) và các tour du thuyền ngắm hoàng hôn kênh Nhiêu Lộc - Tàu Hủ?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cảnh tàu thuyền rẽ sóng dưới chân vòm cầu cổ tạo nên bức tranh đô thị sông nước sống động.',
          hintLevel1: 'Tàu buýt sông và du thuyền.',
          hintLevel2: 'Giao thông thủy Sài Gòn.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cm_step_14',
        title: 'Tên gốc tiếng Pháp của cầu',
        storyPrompt: 'Dưới thời Pháp thuộc, Cầu Mống được người Pháp đặt tên chính thức là gì?',
        clueVerse: 'Pont des Messageries Maritimes xưa,\nTên gọi theo đoàn tàu vượt nắng mưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên tiếng Pháp ban đầu của Cầu Mống là gì?',
          options: ['Pont des Messageries Maritimes (Cầu Hãng Tàu Thủy)', 'Pont Mirabeau', 'Pont Neuf', 'Pont Alexandre III'],
          correctAnswer: 'Pont des Messageries Maritimes (Cầu Hãng Tàu Thủy)',
          explanation: 'Cầu do Hãng Vận tải Đường biển (Compagnie des Messageries Maritimes) xây dựng phục vụ việc đi lại từ cảng sang trung tâm nên mang tên này.',
          hintLevel1: 'Pont des Messageries Maritimes.',
          hintLevel2: 'Cầu Hãng Tàu Thủy.',
          hintLevel3: 'Chọn Pont des Messageries Maritimes...'
        }
      },
      {
        id: 'cm_step_15',
        title: 'Cây cầu chứng nhân lịch sử hơn 130 năm',
        storyPrompt: 'Cầu Mống giữ vị thế là di sản đô thị độc đáo vì:',
        clueVerse: 'Trăm ba mươi năm vững dáng hình,\nChứng nhân lịch sử đất quang vinh.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Cầu Mống là một trong những cây cầu thép cổ xưa nhất còn nguyên vẹn tại TP.HCM, là gạch nối thiêng liêng giữa quá khứ và hiện đại?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cầu Mống là biểu tượng di sản kiến trúc công nghiệp quý báu và là ký ức không thể tách rời của thành phố.',
          hintLevel1: 'Cây cầu thép cổ nhất thành phố.',
          hintLevel2: 'Chứng nhân lịch sử hơn 130 năm.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 20. Làng Gốm Sứ Lái Thiêu - Tân Khánh (Bình Dương) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_lang_gom_lai_thieu',
    locationId: 'loc_lang_gom_lai_thieu',
    title: 'Hồn Đất Nung & Bí Quyết Lò Bầu Đốt Củi Hơn 150 Năm',
    subtitle: 'Khám phá lò bầu cổ, gốm men da lươn, chén dĩa họa tiết con gà trống và nghề gốm tráng men phương Nam',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_lang_gom_lai_thieu',
    loreChapter: 'Chương 20: Ngọn Lửa Lò Bầu Đất Thủ',
    steps: [
      {
        id: 'gom_step_1',
        title: 'Lịch sử hình thành làng gốm',
        storyPrompt: 'Đứng trước những lò nung gốm đỏ rực lửa nồng đượm bên rạch Lái Thiêu:',
        clueVerse: 'Một trăm năm mươi năm lửa đỏ,\nThợ gốm đất lành gầy dựng cơ đồ.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nghề gốm Lái Thiêu - Tân Phước Khánh (Bình Dương) bắt đầu phát triển mạnh mẽ từ khoảng thời gian nào?',
          options: ['Giữa thế kỷ 19 (Khoảng những năm 1860)', 'Năm 2000', 'Thế kỷ 12', 'Năm 1975'],
          correctAnswer: 'Giữa thế kỷ 19 (Khoảng những năm 1860)',
          explanation: 'Nghề gốm Bình Dương hình thành từ giữa thế kỷ 19 do các nghệ nhân gốm người Hoa và người Việt cùng xây dựng lò nung.',
          hintLevel1: 'Giữa thế kỷ 19.',
          hintLevel2: 'Khoảng năm 1860.',
          hintLevel3: 'Chọn Giữa thế kỷ 19 (Khoảng những năm 1860).'
        }
      },
      {
        id: 'gom_step_2',
        title: 'Kiểu lò nung truyền thống: Lò Bầu (Lò Rồng)',
        storyPrompt: 'Kiểu lò nung gốm cổ truyền có nhiều gian nối tiếp thoai thoải theo sườn đồi hình dáng giống con rồng nằm gọi là gì?',
        clueVerse: 'Lò bầu uốn lượn tựa lưng rồng,\nChứa ngàn chén dĩa lửa rực hồng.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loại lò nung gốm nhiều bầu đốt củi truyền thống của Bình Dương (chứa từ "Lò Bầu" hoặc "Lò Rồng"):',
          correctAnswer: 'Lò Bầu',
          keywords: ['lò bầu', 'lo bau', 'lò rồng', 'lo rong'],
          explanation: 'Lò Bầu (Lò Rồng / Lò Cóc) được thiết kế nhiều ngăn kế tiếp nhau theo sườn dốc để tận dụng nhiệt đối lưu khi đốt củi.',
          hintLevel1: 'Lò Bầu hoặc Lò Rồng.',
          hintLevel2: 'Lò Bầu.',
          hintLevel3: 'Nhập: Lò Bầu.'
        }
      },
      {
        id: 'gom_step_3',
        title: 'Họa tiết con gà trống kinh điển',
        storyPrompt: 'Họa tiết dân gian vẽ tay nổi tiếng nhất trên các tô, chén gốm Lái Thiêu là hình ảnh con gì?',
        clueVerse: 'Gà trống gáy sáng gọi ban mai,\nHoa chuối nở tươi thắm nét tài.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên con vật biểu tượng được vẽ tay mộc mạc trên tô chén gốm Nam Bộ (chứa từ "Gà trống"):',
          correctAnswer: 'Gà trống',
          keywords: ['gà trống', 'ga trong', 'con gà trống', 'con gà'],
          explanation: 'Họa tiết Con Gà Trống đỏ đuôi đen bên khóm hoa chuối là nét đặc trưng mộc mạc của dòng gốm dân dụng Nam Bộ.',
          hintLevel1: 'Con gà trống.',
          hintLevel2: 'Gà trống.',
          hintLevel3: 'Nhập: Gà trống.'
        }
      },
      {
        id: 'gom_step_4',
        title: 'Màu men da lươn trứ danh',
        storyPrompt: 'Loại nước men gốm truyền thống có màu nâu vàng óng ánh như da con lươn được gọi là gì?',
        clueVerse: 'Men da lươn bóng đậm màu đất,\nBình lu hũ khạp đẹp ngất ngây.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Màu men gốm đặc trưng nhất dùng tráng lu, khạp, chậu kiểng Lái Thiêu là men gì?',
          options: ['Men Da Lươn (nâu vàng hổ phách)', 'Men Dạ Quang', 'Men Nhũ Bạc', 'Men Sơn Dầu'],
          correctAnswer: 'Men Da Lươn (nâu vàng hổ phách)',
          explanation: 'Men da lươn chế từ đất phù sa và tro củi tạo nên sắc nâu vàng ấm áp, mộc mạc và bền chắc.',
          hintLevel1: 'Men Da Lươn.',
          hintLevel2: 'Da lươn.',
          hintLevel3: 'Chọn Men Da Lươn (nâu vàng hổ phách).'
        }
      },
      {
        id: 'gom_step_5',
        title: 'Sản phẩm Lu chứa nước (Lu da lươn)',
        storyPrompt: 'Vật dụng không thể thiếu trữ nước mưa ngọt trong mỗi gia đình Nam Bộ thời xưa do thợ gốm đất Thủ chế tác là gì?',
        clueVerse: 'Lu khạp hứng trọn giọt mưa sa,\nNuôi sống bao đời mái ấm nhà.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên vật dụng gốm lớn hình trụ tròn phình bụng dùng chứa nước sinh hoạt (chứa từ "Lu" hoặc "Khạp"):',
          correctAnswer: 'Lu',
          keywords: ['lu', 'khạp', 'lu nước', 'lu da lươn'],
          explanation: 'Chiếc Lu (Khạp) da lươn Lái Thiêu từng theo những chuyến ghe bầu xuôi ngược khắp 13 tỉnh Đồng bằng sông Cửu Long.',
          hintLevel1: 'Chiếc Lu chứa nước.',
          hintLevel2: 'Lu nước.',
          hintLevel3: 'Nhập: Lu.'
        }
      },
      {
        id: 'gom_step_6',
        title: 'Nhiệt độ nung gốm trong lò củi',
        storyPrompt: 'Để gốm chín thấu và lớp men tan chảy bóng mịn, nhiệt độ nung trong lò bầu phải đạt khoảng bao nhiêu độ C?',
        clueVerse: 'Một ngàn hai trăm độ lửa hồng,\nĐất biến thành gốm rạng non sông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nhiệt độ nung gốm men chuẩn trong lò bầu củi Lái Thiêu là bao nhiêu?',
          options: ['Khoảng 1.100°C - 1.250°C', 'Khoảng 100°C', 'Khoảng 300°C', 'Khoảng 5.000°C'],
          correctAnswer: 'Khoảng 1.100°C - 1.250°C',
          explanation: 'Thợ đốt lò phải canh củi liên tục suốt 24 - 36 tiếng để nhiệt độ đạt 1.100°C - 1.250°C giúp đất kết khối hoàn toàn sít đặc.',
          hintLevel1: 'Trên 1.100 độ C.',
          hintLevel2: '1.100°C - 1.250°C.',
          hintLevel3: 'Chọn Khoảng 1.100°C - 1.250°C.'
        }
      },
      {
        id: 'gom_step_7',
        title: 'Kỹ thuật chuốt gốm trên bàn xoay',
        storyPrompt: 'Người nghệ nhân dùng đôi bàn tay khéo léo để tạo hình khối đất sét trên thiết bị cơ học nào?',
        clueVerse: 'Bàn xoay nhịp chuyển xoay tít mù,\nBàn tay uốn nắn dáng hình lu.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên chiếc bàn quay tròn dùng tạo hình đất sét thủ công (chứa từ "Bàn xoay"):',
          correctAnswer: 'Bàn xoay',
          keywords: ['bàn xoay', 'ban xoay', 'bàn xoay gốm'],
          explanation: 'Bàn xoay gốm đạp chân hoặc chạy điện là công cụ kinh điển để vuốt tạo dáng bình hoa, chậu kiểng, tô chén.',
          hintLevel1: 'Bàn xoay.',
          hintLevel2: 'Bàn xoay gốm.',
          hintLevel3: 'Nhập: Bàn xoay.'
        }
      },
      {
        id: 'gom_step_8',
        title: 'Chất liệu đất sét trắng và đất cao lanh (Kaolin)',
        storyPrompt: 'Nguồn đất sét dẻo mịn tuyệt vời để sản xuất gốm sứ Bình Dương được khai thác từ đâu?',
        clueVerse: 'Đất sét cao lanh trắng mịn màng,\nQua bàn tay thợ hóa ngọc vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại khoáng sét trắng dẻo cao cấp dùng làm xương gốm sứ là gì?',
          options: ['Đất Cao lanh (Kaolin) và Đất sét dẻo Bình Dương', 'Cát biển mặn', 'Bột xi măng', 'Đất đỏ bazan'],
          correctAnswer: 'Đất Cao lanh (Kaolin) và Đất sét dẻo Bình Dương',
          explanation: 'Bình Dương có mỏ đất sét dẻo và cao lanh tự nhiên dồi dào, chịu nhiệt tốt và không co ngót khi nung.',
          hintLevel1: 'Đất sét cao lanh (Kaolin).',
          hintLevel2: 'Cao lanh.',
          hintLevel3: 'Chọn Đất Cao lanh (Kaolin) và Đất sét dẻo Bình Dương.'
        }
      },
      {
        id: 'gom_step_9',
        title: 'Sản phẩm heo đất tiết kiệm tuổi thơ',
        storyPrompt: 'Làng gốm Lái Thiêu nổi tiếng là thủ phủ sản xuất vật phẩm tiết kiệm tuổi thơ nào của trẻ em cả nước?',
        clueVerse: 'Con heo đất béo tròn xinh xắn,\nBỏ ống tiền tiêu nhớ công cha.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên con vật bằng đất nung sơn màu dùng để bỏ ống tiền tiết kiệm (chứa từ "Heo đất" hoặc "Lợn đất"):',
          correctAnswer: 'Heo đất',
          keywords: ['heo đất', 'heo dat', 'lợn đất', 'lon dat'],
          explanation: 'Làng gốm Lái Thiêu cung cấp hàng triệu chú heo đất rực rỡ sắc màu phục vụ phong trào tiết kiệm của trẻ em cả nước.',
          hintLevel1: 'Heo đất tiết kiệm.',
          hintLevel2: 'Heo đất.',
          hintLevel3: 'Nhập: Heo đất.'
        }
      },
      {
        id: 'gom_step_10',
        title: 'Ba trung tâm gốm lớn của Bình Dương',
        storyPrompt: 'Ba vùng sản xuất gốm truyền thống nức tiếng của tỉnh Bình Dương bao gồm:',
        clueVerse: 'Lái Thiêu, Tân Khánh, Chánh Nghĩa xưa,\nBa làng gốm cổ vượt nắng mưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ba trung tâm gốm truyền thống lớn nhất tỉnh Bình Dương là gì?',
          options: ['Lái Thiêu, Tân Phước Khánh và Chánh Nghĩa', 'Bát Tràng, Chu Đậu và Phù Lãng', 'Thổ Hà, Hương Canh và Bàu Trúc', 'Móng Cái, Hải Phòng và Nam Định'],
          correctAnswer: 'Lái Thiêu, Tân Phước Khánh và Chánh Nghĩa',
          explanation: 'Ba làng gốm cổ Lái Thiêu (Thuận An), Tân Phước Khánh (Tân Uyên) và Chánh Nghĩa (Thủ Dầu Một) tạo nên tam giác gốm trứ danh.',
          hintLevel1: 'Lái Thiêu, Tân Phước Khánh, Chánh Nghĩa.',
          hintLevel2: '3 làng gốm đất Thủ.',
          hintLevel3: 'Chọn Lái Thiêu, Tân Phước Khánh và Chánh Nghĩa.'
        }
      },
      {
        id: 'gom_step_11',
        title: 'Nghệ thuật vẽ men màu thủ công (Underglaze)',
        storyPrompt: 'Đặc trưng thẩm mỹ của gốm Lái Thiêu là nghệ thuật vẽ họa tiết dưới men như thế nào?',
        clueVerse: 'Nét bút tài hoa vẽ dưới men,\nHoa cúc hoa mai sáng ánh đèn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các họa sĩ gốm dùng bút lông vẽ trực tiếp màu khoáng lên cốt gốm mộc thô trước khi nhúng men trong suốt và đưa vào lò nung (vẽ dưới men)?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Kỹ thuật vẽ dưới men giúp họa tiết chìm sâu trong lớp men thủy tinh, không bao giờ bị trầy xước hay bay màu.',
          hintLevel1: 'Kỹ thuật vẽ dưới men.',
          hintLevel2: 'Vẽ màu trước khi nhúng men nung.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'gom_step_12',
        title: 'Chuyển đổi lò nung sang công nghệ lò gas/điện thân thiện môi trường',
        storyPrompt: 'Để giảm thiểu khói bụi ô nhiễm và bảo vệ môi trường, các cơ sở gốm Bình Dương đã thực hiện bước chuyển mình nào?',
        clueVerse: 'Lò gas hiện đại sạch trong lành,\nGiữ trọn nét tinh hoa cha ông.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các xưởng gốm Bình Dương đã chuyển đổi từ đốt củi sang lò nung gas và lò điện sạch, vừa giữ được chất men truyền thống vừa giảm ô nhiễm không khí?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Ứng dụng công nghệ lò nung gas giúp kiểm soát nhiệt độ chính xác, nâng cao tỷ lệ gốm thành phẩm và bảo vệ môi trường sống.',
          hintLevel1: 'Chuyển sang lò gas sạch.',
          hintLevel2: 'Bảo vệ môi trường.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'gom_step_13',
        title: 'Thương hiệu Gốm sứ Minh Long I xuất phát từ đất Bình Dương',
        storyPrompt: 'Tập đoàn gốm sứ cao cấp hàng đầu Việt Nam vươn tầm thế giới có cội nguồn từ làng gốm Bình Dương tên là gì?',
        clueVerse: 'Minh Long sứ ngọc rạng năm châu,\nTinh hoa đất mẹ thắm tình sâu.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên thương hiệu gốm sứ nổi tiếng của gia đình nghệ nhân Lý Ngọc Minh tại Bình Dương (chứa từ "Minh Long"):',
          correctAnswer: 'Minh Long',
          keywords: ['minh long', 'gốm sứ minh long', 'minh long 1'],
          explanation: 'Công ty Gốm sứ Minh Long I do ông Lý Ngọc Minh sáng lập kế thừa truyền thống gốm Bình Dương, đưa sản phẩm sứ Việt Nam vươn tầm toàn cầu.',
          hintLevel1: 'Thương hiệu Minh Long.',
          hintLevel2: 'Gốm sứ Minh Long.',
          hintLevel3: 'Nhập: Minh Long.'
        }
      },
      {
        id: 'gom_step_14',
        title: 'Tour du lịch trải nghiệm tự tay làm gốm',
        storyPrompt: 'Đến tham quan làng gốm, du khách và học sinh được trải nghiệm hoạt động thực tế nào?',
        clueVerse: 'Tự tay chuốt đất nắn bình xinh,\nIn dấu kỷ niệm đậm ân tình.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Du khách có thể tự tay ngồi vào bàn xoay nặn bình hoa, tô chén đất sét và tự tay vẽ màu lên gốm mang về làm kỷ niệm?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Trải nghiệm làm thợ gốm một ngày là hoạt động giáo dục di sản vô cùng được học sinh và du khách yêu thích.',
          hintLevel1: 'Trải nghiệm tự tay làm gốm.',
          hintLevel2: 'Nặn gốm trên bàn xoay.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'gom_step_15',
        title: 'Di sản văn hóa phi vật thể quốc gia',
        storyPrompt: 'Nghề gốm Bình Dương được vinh danh là Di sản văn hóa phi vật thể quốc gia vì:',
        clueVerse: 'Giữ hồn đất sét mãi ngàn năm,\nNgọn lửa làng nghề rạng ánh trăng.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nghề gốm Bình Dương (Tân Phước Khánh) đã được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể cấp Quốc gia năm 2021?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Danh hiệu Di sản quốc gia khẳng định giá trị lịch sử, thẩm mỹ và đóng góp to lớn của nghề gốm đối với văn hóa dân tộc.',
          hintLevel1: 'Di sản phi vật thể quốc gia 2021.',
          hintLevel2: 'Vinh danh nghề gốm truyền thống.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 21. Bảo Tàng Lịch Sử TP.HCM (Dinh Gia Long) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_bao_tang_tp',
    locationId: 'loc_bao_tang_tp',
    title: 'Kho Tàng Bảo Vật Ngàn Năm & Kiến Trúc Đông Dương Cổ Điển',
    subtitle: 'Khám phá hơn 43.000 hiện vật quý hiếm, tượng Phật ngàn tay ngàn mắt, di vật Óc Eo - Phù Nam và xác ướp Xóm Cải',
    category: 'history',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_bao_tang_tp',
    loreChapter: 'Chương 21: Kho Tàng Ký Ức Thời Gian',
    steps: [
      {
        id: 'bt_ls_step_1',
        title: 'Năm khánh thành bảo tàng cổ kính',
        storyPrompt: 'Bước qua cánh cổng rợp bóng cây cổ thụ của Bảo tàng Lịch sử TP.HCM (số 2 Nguyễn Bỉnh Khiêm, Quận 1):',
        clueVerse: 'Một chín hai chín dựng bảo tàng,\nKiến trúc Đông Dương rạng bóng vàng.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khánh thành Bảo tàng Blanchard de la Brosse (tiền thân Bảo tàng Lịch sử TP.HCM, gợi ý: 192x):',
          correctAnswer: '1929',
          keywords: ['1929'],
          explanation: 'Bảo tàng được Hội Nghiên cứu Đông Dương thành lập và chính thức khánh thành mở cửa đón khách vào ngày 1/1/1929.',
          hintLevel1: 'Năm 1929.',
          hintLevel2: '1929.',
          hintLevel3: 'Nhập: 1929.'
        }
      },
      {
        id: 'bt_ls_step_2',
        title: 'Kiến trúc sư thiết kế theo phong cách Đông Dương',
        storyPrompt: 'Kiến trúc sư người Pháp nào đã thiết kế tòa nhà bảo tàng với sự kết hợp tuyệt mỹ giữa kiến trúc cung đình Pháp và mái ngói Á Đông?',
        clueVerse: 'Auguste Delaval vẽ nét rồng,\nMái ngói cong cong giữa khoảng không.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên Kiến trúc sư người Pháp thiết kế tòa nhà bảo tàng (chứa từ "Delaval"):',
          correctAnswer: 'Auguste Delaval',
          keywords: ['delaval', 'auguste delaval'],
          explanation: 'Kiến trúc sư Auguste Delaval đã sáng tạo nên một kiệt tác phong cách kiến trúc Đông Dương (Indochine) độc nhất vô nhị.',
          hintLevel1: 'KTS Auguste Delaval.',
          hintLevel2: 'Delaval.',
          hintLevel3: 'Nhập: Auguste Delaval.'
        }
      },
      {
        id: 'bt_ls_step_3',
        title: 'Tháp bát giác ở gian trung tâm',
        storyPrompt: 'Điểm nhấn kiến trúc nổi bật nhất trên nóc gian sảnh chính của bảo tàng là gì?',
        clueVerse: 'Tháp bát giác vươn mái ngói ngời,\nLấy sáng tự nhiên rạng khoảng trời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khối tháp kiến trúc nổi bật ở trung tâm bảo tàng có hình dáng gì?',
          options: ['Tháp bát giác (8 cạnh) lợp ngói âm dương có hình tượng rồng chầu', 'Tháp nhọn kim tự tháp kính', 'Tháp tròn La Mã', 'Tháp chuông đôi'],
          correctAnswer: 'Tháp bát giác (8 cạnh) lợp ngói âm dương có hình tượng rồng chầu',
          explanation: 'Khối tháp bát giác lợp ngói ống có 2 tầng mái cong nhẹ mang đậm ảnh hưởng kiến trúc cung đình Á Đông.',
          hintLevel1: 'Tháp bát giác 8 cạnh.',
          hintLevel2: 'Bát giác 2 tầng mái.',
          hintLevel3: 'Chọn Tháp bát giác (8 cạnh) lợp ngói âm dương...'
        }
      },
      {
        id: 'bt_ls_step_4',
        title: 'Bộ sưu tập văn hóa Óc Eo - Phù Nam',
        storyPrompt: 'Bảo tàng lưu giữ bộ sưu tập hiện vật vô giá của nền văn minh cổ đại nào từng phát triển rực rỡ tại Nam Bộ từ thế kỷ 1 đến thế kỷ 7?',
        clueVerse: 'Văn hóa Óc Eo nhẫn vàng xưa,\nThương cảng Phù Nam vượt nắng mưa.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nền văn hóa khảo cổ cổ đại trứ danh vùng đồng bằng Nam Bộ (chứa từ "Óc Eo"):',
          correctAnswer: 'Óc Eo',
          keywords: ['óc eo', 'oc eo', 'văn hóa óc eo'],
          explanation: 'Bộ sưu tập văn hóa Óc Eo (Vương quốc Phù Nam) gồm tượng Phật bằng gỗ, con dấu vàng, trang sức đá quý vô cùng phong phú.',
          hintLevel1: 'Văn hóa Óc Eo.',
          hintLevel2: 'Óc Eo.',
          hintLevel3: 'Nhập: Óc Eo.'
        }
      },
      {
        id: 'bt_ls_step_5',
        title: 'Bảo vật Quốc gia: Tượng Phật Thích Ca bằng gỗ thế kỷ 3-4',
        storyPrompt: 'Một trong những Bảo vật Quốc gia vô giá trưng bày tại bảo tàng là pho tượng Phật tạc bằng loại gỗ tự nhiên nào?',
        clueVerse: 'Tượng Phật gỗ xưa nghìn bảy năm,\nNét mặt từ bi sáng ánh trăng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Pho tượng Phật đứng Óc Eo (Bảo vật Quốc gia) có niên đại hơn 1.700 năm được tạc từ loại gỗ gì?',
          options: ['Gỗ Mù U nguyên khối', 'Gỗ Thông', 'Gỗ Ép công nghiệp', 'Gỗ Tre'],
          correctAnswer: 'Gỗ Mù U nguyên khối',
          explanation: 'Tượng Phật gỗ Mù U văn hóa Óc Eo (thế kỷ 3-4) là bảo vật quốc gia được bảo tồn nguyên vẹn qua hàng ngàn năm dưới lòng bùn lầy Nam Bộ.',
          hintLevel1: 'Gỗ Mù U.',
          hintLevel2: 'Mù U.',
          hintLevel3: 'Chọn Gỗ Mù U nguyên khối.'
        }
      },
      {
        id: 'bt_ls_step_6',
        title: 'Hiện vật xác ướp Xóm Cải độc nhất vô nhị',
        storyPrompt: 'Phòng trưng bày thu hút sự tò mò đặc biệt của du khách là thi hài bảo tồn nguyên vẹn của vị phu nhân triều Nguyễn tên là gì?',
        clueVerse: 'Xác ướp Xóm Cải giữ vẹn nguyên,\nBà Nguyễn Thị Hiệu giấc mơ miên.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên vị quý bà triều Nguyễn thế kỷ 19 có thi hài được ướp nguyên vẹn khai quật tại Xóm Cải (Quận 5) năm 1994 (chứa từ "Nguyễn Thị Hiệu"):',
          correctAnswer: 'Nguyễn Thị Hiệu',
          keywords: ['nguyễn thị hiệu', 'nguyen thi hieu', 'bà nguyễn thị hiệu'],
          explanation: 'Bà Nguyễn Thị Hiệu (mất năm 1869 thời vua Tự Đức), thi hài được ướp bằng hợp chất sáp ong và tinh dầu trong quan tài hợp chất nguyên khối.',
          hintLevel1: 'Bà Nguyễn Thị Hiệu.',
          hintLevel2: 'Nguyễn Thị Hiệu.',
          hintLevel3: 'Nhập: Nguyễn Thị Hiệu.'
        }
      },
      {
        id: 'bt_ls_step_7',
        title: 'Nghệ thuật Múa rối nước trong khuôn viên',
        storyPrompt: 'Bên trong sân vườn bảo tàng có thủy đình biểu diễn loại hình nghệ thuật dân gian độc đáo nào?',
        clueVerse: 'Chú Tễu cười duyên lội nước sâu,\nRối nước rộn ràng khúc ca dao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại hình nghệ thuật sân khấu dân gian biểu diễn trên mặt nước tại bảo tàng là gì?',
          options: ['Múa rối nước truyền thống', 'Xiếc thú', 'Múa ba lê', 'Ảo thuật'],
          correctAnswer: 'Múa rối nước truyền thống',
          explanation: 'Nhà hát múa rối nước Rồng Vàng trong khuôn viên bảo tàng tổ chức các suất diễn múa rối nước đặc sắc phục vụ du khách hàng ngày.',
          hintLevel1: 'Múa rối nước.',
          hintLevel2: 'Rối nước truyền thống.',
          hintLevel3: 'Chọn Múa rối nước truyền thống.'
        }
      },
      {
        id: 'bt_ls_step_8',
        title: 'Bộ sưu tập điêu khắc Chăm Pa cổ',
        storyPrompt: 'Phòng trưng bày nghệ thuật Chăm Pa lưu giữ các pho tượng thần Shiva, thần Ganesha tạc bằng chất liệu gì?',
        clueVerse: 'Đá sa thạch tạc bóng nữ thần,\nVũ điệu Apsara ngát hoa xuân.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các tuyệt tác điêu khắc Chăm Pa tại bảo tàng chủ yếu được tạc từ loại đá nào?',
          options: ['Đá sa thạch (Sandstone)', 'Đá vôi mềm', 'Gạch nung', 'Thạch cao'],
          correctAnswer: 'Đá sa thạch (Sandstone)',
          explanation: 'Các bức phù điêu vũ nữ Apsara và tượng thần Hindu giáo được chạm khắc công phu trên đá sa thạch có niên đại từ thế kỷ 7 đến thế kỷ 13.',
          hintLevel1: 'Đá sa thạch.',
          hintLevel2: 'Sa thạch.',
          hintLevel3: 'Chọn Đá sa thạch (Sandstone).'
        }
      },
      {
        id: 'bt_ls_step_9',
        title: 'Bộ sưu tập súng thần công thời Nguyễn',
        storyPrompt: 'Ngoài sân vườn bảo tàng trưng bày dàn vũ khí cổ bảo vệ thành lũy Sài Gòn xưa là gì?',
        clueVerse: 'Súng thần công đúc bằng gang đồng,\nUy phong gác giữ cõi trời đông.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loại đại bác cổ đúc bằng đồng/gang thời vua Gia Long và Minh Mạng (chứa từ "Súng thần công" hoặc "Thần công"):',
          correctAnswer: 'Súng thần công',
          keywords: ['súng thần công', 'sung than cong', 'thần công'],
          explanation: 'Dàn súng thần công thời Nguyễn được đúc tinh xảo với hoa văn rồng mây từng bố trí tại các pháo đài ven sông Sài Gòn.',
          hintLevel1: 'Súng thần công.',
          hintLevel2: 'Thần công.',
          hintLevel3: 'Nhập: Súng thần công.'
        }
      },
      {
        id: 'bt_ls_step_10',
        title: 'Bộ sưu tập gốm cổ các triều đại Lý - Trần - Lê',
        storyPrompt: 'Các hiện vật gốm men ngọc, men hoa nâu và men lam trưng bày tại bảo tàng minh chứng cho:',
        clueVerse: 'Gốm men hoa nâu thời Lý Trần,\nĐỉnh cao mỹ nghệ rạng non sông.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Bảo tàng lưu giữ hàng ngàn hiện vật gốm cổ Việt Nam từ thời tiền sử đến các triều đại Lý, Trần, Lê, Nguyễn phản ánh trình độ thẩm mỹ đỉnh cao của dân tộc?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Bộ sưu tập gốm cổ đa dạng về chủng loại và kỹ thuật tráng men là niềm tự hào của di sản văn hóa Việt Nam.',
          hintLevel1: 'Bộ sưu tập gốm cổ qua các triều đại.',
          hintLevel2: 'Gốm Lý - Trần - Lê.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bt_ls_step_11',
        title: 'Vị trí nằm cạnh Thảo Cầm Viên Sài Gòn',
        storyPrompt: 'Bảo tàng Lịch sử TP.HCM nằm ngay bên cạnh cửa ngõ công viên di sản nào có tuổi đời từ năm 1864?',
        clueVerse: 'Thảo Cầm Viên rợp bóng cây xanh,\nBảo tàng đứng nép dạ an lành.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên vườn bách thảo lâu đời nhất Việt Nam nằm sát cạnh Bảo tàng (chứa từ "Thảo Cầm Viên"):',
          correctAnswer: 'Thảo Cầm Viên',
          keywords: ['thảo cầm viên', 'thao cam vien', 'thảo cầm viên sài gòn'],
          explanation: 'Bảo tàng nằm ngay bên trong cổng chính Thảo Cầm Viên Sài Gòn (vườn thú lâu đời thứ 8 trên thế giới thành lập năm 1864).',
          hintLevel1: 'Thảo Cầm Viên Sài Gòn.',
          hintLevel2: 'Thảo Cầm Viên.',
          hintLevel3: 'Nhập: Thảo Cầm Viên.'
        }
      },
      {
        id: 'bt_ls_step_12',
        title: 'Tượng Phật Avalokiteshvara nghìn mắt nghìn tay',
        storyPrompt: 'Pho tượng Phật bà Quan Âm bằng gỗ phủ sơn son thếp vàng trưng bày tại gian Phật giáo có bao nhiêu cánh tay?',
        clueVerse: 'Nghìn mắt nghìn tay cứu thế gian,\nTâm từ bi rạng ánh hào quang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Danh hiệu của pho tượng Bồ Tát với nhiều bàn tay và con mắt từ bi là gì?',
          options: [
            'Quan Thế Âm Bồ Tát Thiên Thủ Thiên Nhãn (Nghìn mắt nghìn tay)',
            'Phật Di Lặc',
            'Địa Tạng Vương Bồ Tát',
            'Đại Thế Chí Bồ Tát'
          ],
          correctAnswer: 'Quan Thế Âm Bồ Tát Thiên Thủ Thiên Nhãn (Nghìn mắt nghìn tay)',
          explanation: 'Tượng Thiên Thủ Thiên Nhãn biểu thị cho trí tuệ thấu suốt muôn loài (thiên nhãn) và tình thương cứu khổ cứu nạn muôn nơi (thiên thủ).',
          hintLevel1: 'Quan Âm Thiên Thủ Thiên Nhãn.',
          hintLevel2: 'Nghìn mắt nghìn tay.',
          hintLevel3: 'Chọn Quan Thế Âm Bồ Tát Thiên Thủ Thiên Nhãn...'
        }
      },
      {
        id: 'bt_ls_step_13',
        title: 'Số lượng hiện vật đang được bảo tồn',
        storyPrompt: 'Bảo tàng Lịch sử TP.HCM hiện nay đang lưu giữ và bảo quản bao nhiêu hiện vật quý giá?',
        clueVerse: 'Hơn bốn mươi ba ngàn cổ vật,\nLưu giữ ký ức triệu mùa xuân.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Kho bảo tàng hiện đang lưu giữ khoảng bao nhiêu tài liệu và hiện vật lịch sử?',
          options: ['Hơn 43.000 hiện vật quý hiếm', 'Chỉ 50 hiện vật', '500 hiện vật', '1.000 hiện vật'],
          correctAnswer: 'Hơn 43.000 hiện vật quý hiếm',
          explanation: 'Bảo tàng sở hữu kho tàng đồ sộ với hơn 43.000 hiện vật đặc sắc phản ánh lịch sử Việt Nam từ thời nguyên thủy đến năm 1945 và văn hóa các nước châu Á.',
          hintLevel1: 'Hơn 43.000 hiện vật.',
          hintLevel2: 'Hơn 43.000.',
          hintLevel3: 'Chọn Hơn 43.000 hiện vật quý hiếm.'
        }
      },
      {
        id: 'bt_ls_step_14',
        title: 'Công trình Di tích Kiến trúc Nghệ thuật Quốc gia',
        storyPrompt: 'Tòa nhà Bảo tàng Lịch sử TP.HCM được Bộ Văn hóa, Thể thao và Du lịch xếp hạng Di tích Quốc gia vào năm nào?',
        clueVerse: 'Hai nghìn mười hai vinh danh di tích,\nKiến trúc Đông Dương rạng nước non.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm tòa nhà Bảo tàng được xếp hạng Di tích Kiến trúc Nghệ thuật Quốc gia (gợi ý: 201x):',
          correctAnswer: '2012',
          keywords: ['2012'],
          explanation: 'Tòa nhà được xếp hạng Di tích Kiến trúc Nghệ thuật cấp Quốc gia vào năm 2012.',
          hintLevel1: 'Năm 2012.',
          hintLevel2: '2012.',
          hintLevel3: 'Nhập: 2012.'
        }
      },
      {
        id: 'bt_ls_step_15',
        title: 'Sứ mệnh giáo dục truyền thống cho thế hệ mai sau',
        storyPrompt: 'Bảo tàng Lịch sử TP.HCM đóng vai trò gì trong đời sống văn hóa đương đại?',
        clueVerse: 'Cầu nối ngàn năm đưa tri thức,\nNuôi dưỡng tình yêu mảnh đất này.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Bảo tàng Lịch sử TP.HCM là trường học lịch sử trực quan sinh động, khơi dậy niềm tự hào dân tộc và tình yêu di sản cho các thế hệ học sinh, sinh viên và du khách khắp năm châu?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Mỗi hiện vật là một câu chuyện lịch sử sống động truyền cảm hứng yêu nước và ý thức giữ gìn bản sắc văn hóa cho thế hệ mai sau.',
          hintLevel1: 'Trường học lịch sử trực quan.',
          hintLevel2: 'Nuôi dưỡng tình yêu di sản.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  }
];
