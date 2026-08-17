import { Quest } from '../../types';

export const QUESTS_PART_1: Quest[] = [
  // =========================================================================
  // 1. Bến Nhà Rồng (TP.HCM) - Level 1 (15 câu đố lịch sử & kiến trúc)
  // =========================================================================
  {
    id: 'quest_ben_nha_rong',
    locationId: 'loc_ben_nha_rong',
    title: 'Hành Trình Vượt Trùng Dương 1911',
    subtitle: 'Theo dấu chân chàng thanh niên Nguyễn Tất Thành tại bến cảng lịch sử bên sông Sài Gòn',
    category: 'history',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_ben_nha_rong',
    loreChapter: 'Chương 1: Bến Cảng Khởi Đầu Một Thời Đại',
    steps: [
      {
        id: 'bnr_step_1',
        title: 'Năm tháng người thanh niên ra đi tìm đường cứu nước',
        storyPrompt: 'Đứng bên ngã ba sông Sài Gòn lộng gió, nơi từng ghi dấu con tàu viễn dương rời bến:',
        clueVerse: 'Sông Sài Gòn sóng vỗ mênh mông,\nChàng trai trẻ bước xuống tàu rồng.\nNgày năm tháng sáu năm nào đó,\nMở lối tự do rạng núi sông?',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Người thanh niên Nguyễn Tất Thành (với tên gọi Văn Ba) đã xuống tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước vào ngày tháng năm nào?',
          options: [
            'Ngày 05 tháng 06 năm 1911',
            'Ngày 03 tháng 02 năm 1930',
            'Ngày 19 tháng 08 năm 1945',
            'Ngày 02 tháng 09 năm 1945'
          ],
          correctAnswer: 'Ngày 05 tháng 06 năm 1911',
          explanation: 'Vào ngày 5/6/1911, người thanh niên Nguyễn Tất Thành lấy tên là Văn Ba đã rời bến cảng Sài Gòn trên con tàu buôn Amiral Latouche-Tréville để bắt đầu cuộc hành trình 30 năm tìm đường cứu nước.',
          hintLevel1: 'Hãy nhớ lại mốc thời gian đầu thế kỷ 20, năm Tân Hợi.',
          hintLevel2: 'Sự kiện diễn ra vào đầu tháng 6 năm 1911.',
          hintLevel3: 'Đáp án là ngày 05/06/1911.'
        }
      },
      {
        id: 'bnr_step_2',
        title: 'Ý nghĩa tên gọi Bến Nhà Rồng',
        storyPrompt: 'Hãy ngước nhìn lên đỉnh mái ngói của tòa nhà cổ kính rêu phong:',
        clueVerse: 'Mái ngói son tươi rồng uốn lượn,\nChầu vầng trăng sáng giữa trời cao.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tên gọi "Bến Nhà Rồng" xuất phát từ việc trên nóc tòa nhà trụ sở hãng tàu Messageries Maritimes có gắn tượng hai con rồng bằng đất nung tráng men châu đầu vào mặt trăng (Lưỡng long chầu nguyệt)?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tòa nhà trụ sở xây dựng năm 1863 có gắn tượng hai con rồng đất nung tráng men xanh trên đỉnh mái nên dân gian Sài Gòn quen gọi là "Nhà Rồng" và bến cảng mang tên "Bến Nhà Rồng".',
          hintLevel1: 'Quan sát kiến trúc nóc tòa nhà bảo tàng.',
          hintLevel2: 'Kiến trúc mang biểu tượng Lưỡng long chầu nguyệt truyền thống.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bnr_step_3',
        title: 'Tên con tàu lịch sử',
        storyPrompt: 'Ghi lại chính xác tên con tàu buôn Đô đốc người Pháp đưa người thanh niên yêu nước xuất dương:',
        clueVerse: 'Tàu buồm vượt sóng đại dương,\nĐô đốc nước Pháp dặm trường bôn ba.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Hãy nhập tên con tàu buôn của Pháp mà Bác Hồ đã làm phụ bếp (Anh Ba) khi rời Sài Gòn (chứa từ "Latouche" hoặc "Amiral Latouche-Treville"):',
          correctAnswer: 'Amiral Latouche-Tréville',
          keywords: ['latouche', 'treville', 'tréville', 'amiral'],
          explanation: 'Con tàu buôn Amiral Latouche-Tréville thuộc hãng vận tải Messageries Maritimes của Pháp chính là chứng nhân lịch sử đưa người đi tìm hình của nước.',
          hintLevel1: 'Tên con tàu có chữ Latouche.',
          hintLevel2: 'Tên đầy đủ theo tiếng Pháp: Amiral Latouche-Tréville.',
          hintLevel3: 'Nhập: Amiral Latouche-Tréville hoặc Latouche Treville.'
        }
      },
      {
        id: 'bnr_step_4',
        title: 'Tên gọi của Bác Hồ khi xuống tàu',
        storyPrompt: 'Trong sổ lương của hãng tàu Pháp ghi tên người thanh niên làm phụ bếp:',
        clueVerse: 'Chàng trai yêu nước lấy tên Ba,\nLàm việc phụ bếp vượt phong ba.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bác Hồ đã lấy tên gì khi xin vào làm phụ bếp trên con tàu Amiral Latouche-Tréville?',
          options: ['Văn Ba (Anh Ba)', 'Nguyễn Ái Quốc', 'Hồ Chí Minh', 'Tống Văn Sơ'],
          correctAnswer: 'Văn Ba (Anh Ba)',
          explanation: 'Bác Hồ lấy tên là Văn Ba khi làm việc trên tàu với tư cách phụ bếp để bôn ba khắp các đại dương.',
          hintLevel1: 'Tên thường gọi quen thuộc của miền Nam: Anh Ba.',
          hintLevel2: 'Tên ghi danh: Văn Ba.',
          hintLevel3: 'Chọn Văn Ba (Anh Ba).'
        }
      },
      {
        id: 'bnr_step_5',
        title: 'Năm khởi công xây dựng trụ sở Nhà Rồng',
        storyPrompt: 'Tòa nhà trụ sở thương cảng cổ kính được khởi công xây dựng vào thời gian nào?',
        clueVerse: 'Năm sáu mươi ba thế kỷ trước,\nTrụ sở hãng tàu mọc bến sông.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Giải mã năm xây dựng tòa nhà Nhà Rồng (gợi ý: năm 186x)?',
          correctAnswer: '1863',
          keywords: ['1863'],
          explanation: 'Tòa nhà Bến Nhà Rồng được hãng vận tải đường biển Messageries Maritimes của Pháp xây dựng vào năm 1863.',
          hintLevel1: 'Năm 1863.',
          hintLevel2: 'Nhập số 1863.',
          hintLevel3: 'Đáp án là 1863.'
        }
      },
      {
        id: 'bnr_step_6',
        title: 'Hãng tàu sáng lập Bến Nhà Rồng',
        storyPrompt: 'Hãng vận tải biển nào của Pháp đã đặt chi nhánh đầu tiên tại Bến Nhà Rồng?',
        clueVerse: 'Hãng tàu biển Pháp dựng cơ đồ,\nNối liền hải cảng khắp năm châu.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên hãng vận tải hàng hải của Pháp đã xây dựng tòa nhà Nhà Rồng năm 1863 là gì?',
          options: [
            'Messageries Maritimes',
            'East India Company',
            'Air France',
            'Compagnie des Indes'
          ],
          correctAnswer: 'Messageries Maritimes',
          explanation: 'Công ty Vận tải Đường biển Pháp (Messageries Maritimes) xây dựng tòa nhà này làm trụ sở chi nhánh tại Sài Gòn.',
          hintLevel1: 'Tên bắt đầu bằng chữ M.',
          hintLevel2: 'Messageries Maritimes.',
          hintLevel3: 'Chọn Messageries Maritimes.'
        }
      },
      {
        id: 'bnr_step_7',
        title: 'Chức năng hiện tại của Bến Nhà Rồng',
        storyPrompt: 'Sau ngày thống nhất non sông, tòa nhà Bến Nhà Rồng được chuyển thành:',
        clueVerse: 'Di tích ngàn năm lưu bóng Bác,\nBảo tàng lưu dấu bước người đi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hiện nay, Bến Nhà Rồng là trụ sở của bảo tàng nào?',
          options: [
            'Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh',
            'Bảo tàng Lịch sử TP. Hồ Chí Minh',
            'Bảo tàng Chứng tích Chiến tranh',
            'Bảo tàng Mỹ thuật TP. Hồ Chí Minh'
          ],
          correctAnswer: 'Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh',
          explanation: 'Nơi đây đã trở thành Bảo tàng Hồ Chí Minh - Chi nhánh TP.HCM, lưu giữ hơn 20.000 tư liệu và hiện vật quý giá.',
          hintLevel1: 'Bảo tàng mang tên vị cha già kính yêu của dân tộc.',
          hintLevel2: 'Bảo tàng Hồ Chí Minh.',
          hintLevel3: 'Chọn Bảo tàng Hồ Chí Minh - Chi nhánh TP. Hồ Chí Minh.'
        }
      },
      {
        id: 'bnr_step_8',
        title: 'Địa danh hành chính của Bến Nhà Rồng',
        storyPrompt: 'Bến Nhà Rồng tọa lạc tại quận nào của thành phố mang tên Bác?',
        clueVerse: 'Bên kia Cầu Mống rẽ tay sang,\nQuận Bốn kề sông đón gió ngàn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bến Nhà Rồng thuộc địa phận hành chính của quận nào?',
          options: ['Quận 4', 'Quận 1', 'Quận 3', 'Quận 7'],
          correctAnswer: 'Quận 4',
          explanation: 'Bến Nhà Rồng tọa lạc tại số 1 đường Nguyễn Tất Thành, Phường 12, Quận 4, TP.HCM.',
          hintLevel1: 'Nằm bên kia Cầu Khánh Hội, thuộc Quận 4.',
          hintLevel2: 'Quận 4.',
          hintLevel3: 'Chọn Quận 4.'
        }
      },
      {
        id: 'bnr_step_9',
        title: 'Con sông và ngã ba kênh huyền thoại',
        storyPrompt: 'Bến Nhà Rồng nằm ngay tại vị trí hợp lưu giữa dòng sông Sài Gòn và dòng kênh nào?',
        clueVerse: 'Dòng kênh uốn lượn Bến Nghé xưa,\nNgã ba sông nước đón thuyền đưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bến Nhà Rồng nằm bên ngã ba sông Sài Gòn và dòng kênh lịch sử nào?',
          options: ['Kênh Bến Nghé (Rạch Bến Nghé)', 'Kênh Nhiêu Lộc', 'Kênh Đôi', 'Kênh Tham Lương'],
          correctAnswer: 'Kênh Bến Nghé (Rạch Bến Nghé)',
          explanation: 'Bến Nhà Rồng nằm ngay ngã ba sông Sài Gòn và rạch Bến Nghé, tạo nên vị trí chiến lược đường thủy từ xưa đến nay.',
          hintLevel1: 'Dòng rạch cổ gắn liền với tích bến nước trâu đầm.',
          hintLevel2: 'Kênh Bến Nghé.',
          hintLevel3: 'Chọn Kênh Bến Nghé (Rạch Bến Nghé).'
        }
      },
      {
        id: 'bnr_step_10',
        title: 'Cảng biển đầu tiên của Sài Gòn',
        storyPrompt: 'Bến Nhà Rồng gắn liền với cảng biển thương mại hiện đại đầu tiên của Sài Gòn tên là gì?',
        clueVerse: 'Thương cảng Sài Gòn thời mở lối,\nThuyền bè tấp nập vạn dặm xa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cảng biển gắn liền với Bến Nhà Rồng từ thế kỷ 19 có tên là gì?',
          options: ['Cảng Sài Gòn', 'Cảng Cát Lái', 'Cảng Hiệp Phước', 'Cảng Cái Mép'],
          correctAnswer: 'Cảng Sài Gòn',
          explanation: 'Cảng Sài Gòn là một trong những cảng biển thương mại lâu đời nhất Việt Nam, thành lập từ năm 1860.',
          hintLevel1: 'Tên trùng với tên đô thị Sài Gòn.',
          hintLevel2: 'Cảng Sài Gòn.',
          hintLevel3: 'Chọn Cảng Sài Gòn.'
        }
      },
      {
        id: 'bnr_step_11',
        title: 'Chất liệu làm đôi rồng ngậm ngọc',
        storyPrompt: 'Đôi rồng "Lưỡng long chầu nguyệt" trên nóc Bến Nhà Rồng được chế tác từ chất liệu gì?',
        clueVerse: 'Đất nung tráng men màu lục biếc,\nTrải nắng mưa gội nét uy nghiêm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đôi tượng rồng trên nóc Bến Nhà Rồng được làm bằng chất liệu gì?',
          options: [
            'Đất nung tráng men xanh (gốm men)',
            'Đúc bằng đồng nguyên khối',
            'Tạc bằng đá hoa cương',
            'Đắp bằng thạch cao'
          ],
          correctAnswer: 'Đất nung tráng men xanh (gốm men)',
          explanation: 'Cặp tượng rồng được làm bằng đất nung tráng men xanh đặc trưng của nghề gốm truyền thống Nam Bộ thế kỷ 19.',
          hintLevel1: 'Sản phẩm nghệ thuật từ đất nung tráng men.',
          hintLevel2: 'Đất nung tráng men xanh.',
          hintLevel3: 'Chọn Đất nung tráng men xanh (gốm men).'
        }
      },
      {
        id: 'bnr_step_12',
        title: 'Bến cảng nơi Bác trở về Tổ quốc',
        storyPrompt: 'Sau 30 năm bôn ba hải ngoại, Bác Hồ đã trở về Tổ quốc vào mùa xuân năm nào qua cột mốc Pác Bó?',
        clueVerse: 'Ba mươi năm ấy người bôn ba,\nXuân bốn mốt về lại nước nhà.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm Bác Hồ trở về Tổ quốc tại Cao Bằng sau 30 năm xa xứ (gợi ý: 194x):',
          correctAnswer: '1941',
          keywords: ['1941'],
          explanation: 'Ngày 28/01/1941 (mùa xuân Tân Tỵ), lãnh tụ Nguyễn Ái Quốc đã trở về Tổ quốc qua cột mốc 108 tại Pác Bó, Cao Bằng.',
          hintLevel1: 'Năm 1941.',
          hintLevel2: 'Nhập 1941.',
          hintLevel3: 'Đáp án là 1941.'
        }
      },
      {
        id: 'bnr_step_13',
        title: 'Cây cầu thép cổ kính đối diện Bến Nhà Rồng',
        storyPrompt: 'Cây cầu đi bộ cổ kính bằng thép bắc qua kênh Bến Nghé nối Quận 1 và Quận 4 gần Bến Nhà Rồng tên là gì?',
        clueVerse: 'Cầu Mống duyên dáng bắc qua sông,\nThép sơn màu ngọc uốn lượn vòng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên cây cầu thép cổ hơn 130 năm bắc qua kênh Bến Nghé nhìn sang Bến Nhà Rồng là gì?',
          options: ['Cầu Mống', 'Cầu Khánh Hội', 'Cầu Calmette', 'Cầu Ông Lãnh'],
          correctAnswer: 'Cầu Mống',
          explanation: 'Cầu Mống xây dựng năm 1893-1894 bởi công ty Levallois Perret (Pháp), là một trong những cây cầu thép cổ xưa nhất thành phố.',
          hintLevel1: 'Cây cầu có vòm cong như cầu vồng.',
          hintLevel2: 'Cầu Mống.',
          hintLevel3: 'Chọn Cầu Mống.'
        }
      },
      {
        id: 'bnr_step_14',
        title: 'Công trình cột cờ báo hiệu tàu thuyền',
        storyPrompt: 'Trước Bến Nhà Rồng bên bờ sông Sài Gòn từng có cột cờ nổi tiếng dùng làm tín hiệu hoa tiêu tên là gì?',
        clueVerse: 'Cột cờ Thủ Ngữ đứng bên sông,\nSoi bóng hoa tiêu dặm trùng trùng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cột cờ lịch sử đối diện Bến Nhà Rồng bên bờ Quận 1 tên là gì?',
          options: ['Cột cờ Thủ Ngữ', 'Cột cờ Hà Nội', 'Cột cờ Nam Định', 'Cột cờ Bến Dược'],
          correctAnswer: 'Cột cờ Thủ Ngữ',
          explanation: 'Cột cờ Thủ Ngữ xây dựng năm 1865 tại Bến Bạch Đằng, làm trạm hoa tiêu hướng dẫn tàu bè ra vào sông Sài Gòn.',
          hintLevel1: 'Thủ Ngữ có nghĩa là người gác cửa biển/sông.',
          hintLevel2: 'Cột cờ Thủ Ngữ.',
          hintLevel3: 'Chọn Cột cờ Thủ Ngữ.'
        }
      },
      {
        id: 'bnr_step_15',
        title: 'Tượng đài người thanh niên Nguyễn Tất Thành',
        storyPrompt: 'Trong khuôn viên sân trước Bến Nhà Rồng hiện có tượng đài khắc họa hình ảnh nào của Bác?',
        clueVerse: 'Chàng trai tuổi trẻ vươn tầm mắt,\nÝ chí cứu non nước vẹn toàn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Trong khuôn viên Bến Nhà Rồng có tượng đài "Bác Hồ thời thanh niên ra đi tìm đường cứu nước" bằng đồng với tư thế vững chãi, hướng nhìn ra sông Sài Gòn?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tượng đài Nguyễn Tất Thành bằng đồng đứng uy nghiêm nhìn ra dòng sông Sài Gòn, biểu trưng cho khát vọng tự do và ý chí cứu nước của tuổi trẻ Việt Nam.',
          hintLevel1: 'Tượng đài đặt trang trọng tại sân chính bảo tàng.',
          hintLevel2: 'Tạc hình tượng Nguyễn Tất Thành thời trẻ.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 2. Dinh Độc Lập (TP.HCM) - Level 2 (15 câu đố kiến trúc & lịch sử)
  // =========================================================================
  {
    id: 'quest_dinh_doc_lap',
    locationId: 'loc_dinh_doc_lap',
    title: 'Giải Mã Triết Học Phương Đông & Ngày Non Sông Liền Một Dải',
    subtitle: 'Khám phá bí mật kiến trúc chữ Hán của KTS Ngô Viết Thụ và sự kiện lịch sử 30/4/1975',
    category: 'history',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_dinh_doc_lap',
    loreChapter: 'Chương 2: Dấu Mốc Non Sông Liền Một Dải',
    steps: [
      {
        id: 'ddl_step_1',
        title: 'Kiến trúc sư thiết kế Dinh Độc Lập',
        storyPrompt: 'Đứng trước tiền sảnh rực rỡ, bạn hãy chiêm ngưỡng kiệt tác kết hợp kiến trúc hiện đại và triết học Đông phương:',
        clueVerse: 'Khôi nguyên La Mã rạng danh thơm,\nĐồ án công trình sáng nước non.\nTriết lý chữ Nho lồng nét mới,\nNgô gia ghi dấu nét vuông tròn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ai là Kiến trúc sư người Việt Nam (Khôi nguyên La Mã 1955) đã thiết kế Dinh Độc Lập?',
          options: ['KTS. Ngô Viết Thụ', 'KTS. Huỳnh Tấn Phát', 'KTS. Nguyễn Bá Lăng', 'KTS. Võ Trọng Nghĩa'],
          correctAnswer: 'KTS. Ngô Viết Thụ',
          explanation: 'Kiến trúc sư Ngô Viết Thụ (1926-2000), người Việt Nam đầu tiên đoạt giải Khôi nguyên La Mã (Grand Prix de Rome) năm 1955, là tác giả của công trình Dinh Độc Lập.',
          hintLevel1: 'Vị KTS họ Ngô quê Thừa Thiên Huế.',
          hintLevel2: 'Tên ông là Ngô Viết Thụ.',
          hintLevel3: 'Chọn KTS. Ngô Viết Thụ.'
        }
      },
      {
        id: 'ddl_step_2',
        title: 'Ý nghĩa chữ Hán trên toàn thể mặt bằng',
        storyPrompt: 'Mặt bằng tổng thể của Dinh Độc Lập được tạo hình theo chữ Hán nào để cầu chúc điều may mắn, đại cát đại lợi?',
        clueVerse: 'Mặt bằng trải rộng thế rồng bay,\nChữ CÁT cầu may phước đức dày.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Toàn thể mặt bằng Dinh Độc Lập tạo thành hình chữ Hán nào?',
          options: ['Chữ CÁT (吉 - May mắn, tốt lành)', 'Chữ PHÚC (福 - Hạnh phúc)', 'Chữ TÂM (心 - Tấm lòng)', 'Chữ ĐỨC (德 - Đạo đức)'],
          correctAnswer: 'Chữ CÁT (吉 - May mắn, tốt lành)',
          explanation: 'Toàn thể mặt bằng Dinh Độc Lập tạo thành hình chữ CÁT (吉) mang ý nghĩa tốt lành, phúc đức bền lâu.',
          hintLevel1: 'Chữ Cát có nghĩa là điềm lành, cát tường.',
          hintLevel2: 'Chữ CÁT (吉).',
          hintLevel3: 'Chọn Chữ CÁT (吉 - May mắn, tốt lành).'
        }
      },
      {
        id: 'ddl_step_3',
        title: 'Mặt tiền lầu 2 và chữ Hán phong thủy',
        storyPrompt: 'Khu vực bao lơn lầu hai kết hợp mái hiên trung tâm tạo thành chữ Hán nào tượng trưng cho tinh thần dân chủ và tự do ngôn luận?',
        clueVerse: 'Bao lơn lầu gió mở thênh thang,\nChữ KHẨU mở lời vạn khúc vang.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Mặt tiền bao lơn lầu 2 tạo hình chữ Hán nào?',
          options: ['Chữ KHẨU (口 - Lời nói, giáo dục, tự do ngôn luận)', 'Chữ TÀI (才 - Tài năng)', 'Chữ QUỐC (国 - Đất nước)', 'Chữ THIÊN (天 - Trời)'],
          correctAnswer: 'Chữ KHẨU (口 - Lời nói, giáo dục, tự do ngôn luận)',
          explanation: 'Bao lơn lầu 2 tạo hình chữ KHẨU (口) nhằm nhắc nhở tinh thần dân chủ, tự do tư tưởng và coi trọng tiếng nói của nhân dân.',
          hintLevel1: 'Chữ Khẩu hình vuông, tượng trưng cho miệng nói, phát ngôn.',
          hintLevel2: 'Chữ KHẨU (口).',
          hintLevel3: 'Chọn Chữ KHẨU (口).'
        }
      },
      {
        id: 'ddl_step_4',
        title: 'Thời khắc lịch sử ngày 30/4/1975',
        storyPrompt: 'Vào trưa ngày 30/4/1975, chiếc xe tăng mang số hiệu nào của quân giải phóng đã húc đổ cổng chính Dinh Độc Lập?',
        clueVerse: 'Húc đổ cổng rào vang tiếng súng,\nBa chín mươi về giữa nắng trưa.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập số hiệu của chiếc xe tăng đầu tiên húc tung cánh cổng chính Dinh Độc Lập lúc 10h45 ngày 30/4/1975 (3 chữ số, gồm 3, 9, 0):',
          correctAnswer: '390',
          keywords: ['390', 'xe tăng 390'],
          explanation: 'Xe tăng T-59 số hiệu 390 do Đại đội trưởng Bùi Quang Thận chỉ huy đã húc đổ cổng chính Dinh Độc Lập vào lúc 10 giờ 45 phút ngày 30/4/1975.',
          hintLevel1: 'Xe tăng số 390 và xe 843.',
          hintLevel2: 'Chiếc húc đổ cổng chính là 390.',
          hintLevel3: 'Nhập: 390.'
        }
      },
      {
        id: 'ddl_step_5',
        title: 'Chiếc xe tăng húc cổng phụ',
        storyPrompt: 'Cùng tiến vào Dinh Độc Lập trưa ngày 30/4/1975 còn có chiếc xe tăng húc đổ cổng phụ mang số hiệu nào?',
        clueVerse: 'Tám bốn ba lướt qua cổng phụ,\nSát cánh cùng đồng đội lập công.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chiếc xe tăng số hiệu nào đã húc vào cổng phụ Dinh Độc Lập trưa ngày 30/4/1975?',
          options: ['Xe tăng 843', 'Xe tăng 980', 'Xe tăng 701', 'Xe tăng 555'],
          correctAnswer: 'Xe tăng 843',
          explanation: 'Xe tăng 843 do Trung úy Bùi Quang Thận chỉ huy húc vào cổng phụ trước khi đồng chí cầm lá cờ giải phóng chạy lên nóc Dinh cắm cờ.',
          hintLevel1: 'Bắt đầu bằng số 8.',
          hintLevel2: 'Xe tăng 843.',
          hintLevel3: 'Chọn Xe tăng 843.'
        }
      },
      {
        id: 'ddl_step_6',
        title: 'Ý nghĩa chữ TRUNG ở cột cờ trung tâm',
        storyPrompt: 'Đường dọc chính giữa mặt tiền Dinh kết hợp cột cờ tạo thành chữ Nho nào?',
        clueVerse: 'Cột cờ sừng sững giữa thanh thiên,\nChữ TRUNG son sắt chí kiên cường.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cột cờ chính giữa cắt ngang chữ KHẨU tạo thành chữ Hán nào?',
          options: ['Chữ TRUNG (中 - Trung kiên, chính trực)', 'Chữ ĐẠI (大 - Lớn lao)', 'Chữ NHÂN (人 - Con người)', 'Chữ VƯƠNG (王 - Vua)'],
          correctAnswer: 'Chữ TRUNG (中 - Trung kiên, chính trực)',
          explanation: 'Cột cờ chạy dọc xuyên qua chữ Khẩu tạo thành chữ TRUNG (中), hàm ý người lãnh đạo phải giữ lòng trung chính, son sắt vì dân tộc.',
          hintLevel1: 'Ở chính giữa, trung kiên.',
          hintLevel2: 'Chữ TRUNG (中).',
          hintLevel3: 'Chọn Chữ TRUNG (中 - Trung kiên, chính trực).'
        }
      },
      {
        id: 'ddl_step_7',
        title: 'Họa tiết rèm hoa đá bao quanh lầu 2',
        storyPrompt: 'Hệ thống hoa gió bao bọc mặt tiền lầu 2 được KTS Ngô Viết Thụ cách điệu từ hình tượng thiên nhiên nào?',
        clueVerse: 'Đốt trúc thanh cao che nắng gió,\nNgăn luồng sáng gắt đón bình minh.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các rèm hoa đá chắn nắng mặt tiền Dinh Độc Lập được cách điệu từ hình tượng gì?',
          options: [
            'Những đốt trúc thanh cao (đốt tre, trúc)',
            'Những búp sen đang nở',
            'Những chiếc lá dừa nước',
            'Những bông hoa mai vàng'
          ],
          correctAnswer: 'Những đốt trúc thanh cao (đốt tre, trúc)',
          explanation: 'Hoa đá bao lơn lầu 2 được cách điệu từ những đốt trúc thanh cao của phương Đông, vừa mang tính thẩm mỹ vừa chắn ánh nắng nhiệt đới gay gắt.',
          hintLevel1: 'Cây tre, cây trúc biểu tượng cho người quân tử.',
          hintLevel2: 'Đốt trúc.',
          hintLevel3: 'Chọn Những đốt trúc thanh cao (đốt tre, trúc).'
        }
      },
      {
        id: 'ddl_step_8',
        title: 'Tên gọi cũ của Dinh thời Pháp thuộc',
        storyPrompt: 'Trước khi xây dựng lại vào năm 1962, công trình này có tên là gì dưới thời thuộc địa Pháp?',
        clueVerse: 'Dinh thự thời xưa mang tên Pháp,\nNorodom ghi dấu một thời.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên dinh thự cũ do người Pháp xây dựng năm 1868 trên mảnh đất này (chứa từ "Norodom"):',
          correctAnswer: 'Dinh Norodom',
          keywords: ['norodom', 'dinh norodom'],
          explanation: 'Tòa dinh thự cũ xây dựng từ năm 1868 được đặt tên là Dinh Norodom (theo tên Quốc vương Campuchia thời bấy giờ).',
          hintLevel1: 'Tên Norodom.',
          hintLevel2: 'Dinh Norodom.',
          hintLevel3: 'Nhập: Dinh Norodom.'
        }
      },
      {
        id: 'ddl_step_9',
        title: 'Bãi đáp trực thăng trên nóc Dinh',
        storyPrompt: 'Trên nóc Dinh Độc Lập có bãi đáp trực thăng và hai vòng tròn màu đỏ đánh dấu sự kiện gì?',
        clueVerse: 'Vết bom đỏ thắm trên sàn nóc,\nPhi công quả cảm ném trúng bia.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai vòng tròn sơn màu đỏ trên nóc Dinh đánh dấu vị trí của sự kiện gì?',
          options: [
            'Hai quả bom do phi công Nguyễn Thành Trung ném xuống ngày 08/04/1975',
            'Vị trí đặt pháo cao xạ phòng không',
            'Vị trí tiếp nhiên liệu cho trực thăng',
            'Nơi gắn cờ Tổ quốc ngày 30/4'
          ],
          correctAnswer: 'Hai quả bom do phi công Nguyễn Thành Trung ném xuống ngày 08/04/1975',
          explanation: 'Hai vòng tròn đỏ trên nóc Dinh ghi dấu vị trí 2 quả bom do phi công quả cảm Nguyễn Thành Trung lái máy bay F-5E ném trúng ngày 8/4/1975.',
          hintLevel1: 'Ghi dấu cuộc ném bom lịch sử tháng 4/1975.',
          hintLevel2: 'Vết ném bom của phi công Nguyễn Thành Trung.',
          hintLevel3: 'Chọn phương án về phi công Nguyễn Thành Trung.'
        }
      },
      {
        id: 'ddl_step_10',
        title: 'Hệ thống hầm ngầm tác chiến',
        storyPrompt: 'Dưới tầng hầm Dinh Độc Lập có hệ thống công sự kiên cố nào có khả năng chống được bom hạng nặng?',
        clueVerse: 'Hầm sâu bê tông dày kiên cố,\nĐài phát thanh ngầm giữ chỉ huy.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Dưới tầng hầm Dinh Độc Lập có hệ thống hầm chỉ huy tác chiến, phòng thông tin liên lạc, đài phát thanh dự phòng và tường bọc thép dày 5mm chịu được bom pháo?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hệ thống hầm Dinh Độc Lập sâu dưới lòng đất được đúc bằng bê tông cốt thép kiên cố với đầy đủ trang thiết bị chỉ huy tối tân.',
          hintLevel1: 'Hầm ngầm là một trong những điểm tham quan ấn tượng nhất.',
          hintLevel2: 'Công sự chống bom kiên cố.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ddl_step_11',
        title: 'Phòng Khánh Tiết lộng lẫy',
        storyPrompt: 'Phòng lớn nhất trong Dinh dùng để tổ chức các buổi lễ ký kết ngoại giao và yến tiệc quốc tế tên là gì?',
        clueVerse: 'Đèn chùm pha lê rực sắc hương,\nKhánh Tiết uy nghiêm đón bốn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Căn phòng rộng lớn có sức chứa 500 người dùng tổ chức quốc yến tại Dinh Độc Lập tên là gì?',
          options: ['Phòng Khánh Tiết', 'Phòng Trình Quốc Thư', 'Phòng Đại Yến', 'Phòng Tham Mưu'],
          correctAnswer: 'Phòng Khánh Tiết',
          explanation: 'Phòng Khánh Tiết là phòng lớn nhất của Dinh, nơi diễn ra các cuộc hội nghị và yến tiệc ngoại giao quan trọng bậc nhất.',
          hintLevel1: 'Khánh có nghĩa là chúc mừng, Tiết là ngày lễ.',
          hintLevel2: 'Phòng Khánh Tiết.',
          hintLevel3: 'Chọn Phòng Khánh Tiết.'
        }
      },
      {
        id: 'ddl_step_12',
        title: 'Bức tranh sơn mài "Bình Ngô Đại Cáo"',
        storyPrompt: 'Trong Phòng Trình Quốc Thư có bức tranh sơn mài khổ lớn 40 tấm miêu tả chiến công hiển hách của dân tộc mang tên là gì?',
        clueVerse: 'Sơn son thếp vàng rực ngàn thu,\nBình Ngô Đại Cáo đuổi quân thù.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bức tranh sơn mài tráng lệ do họa sĩ Nguyễn Văn Minh sáng tác năm 1966 tại phòng Trình Quốc Thư lấy cảm hứng từ áng văn thiên cổ nào?',
          options: ['Bình Ngô Đại Cáo', 'Hịch Tướng Sĩ', 'Nam Quốc Sơn Hà', 'Tuyên Ngôn Độc Lập'],
          correctAnswer: 'Bình Ngô Đại Cáo',
          explanation: 'Bức tranh sơn mài ghép từ 40 bức nhỏ tái hiện cảnh vua Lê Lợi chiến thắng quân Minh, lấy cảm hứng từ áng thiên cổ hùng văn "Bình Ngô Đại Cáo".',
          hintLevel1: 'Tác phẩm của Nguyễn Trãi ca ngợi chiến thắng Lam Sơn.',
          hintLevel2: 'Bình Ngô Đại Cáo.',
          hintLevel3: 'Chọn Bình Ngô Đại Cáo.'
        }
      },
      {
        id: 'ddl_step_13',
        title: 'Thời điểm cắm cờ trên nóc Dinh ngày 30/4',
        storyPrompt: 'Đồng chí Bùi Quang Thận đã cắm lá cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam trên nóc Dinh vào thời gian nào?',
        clueVerse: 'Mười một giờ ba mươi nắng vàng rực rỡ,\nCờ giải phóng bay trên nóc Dinh cao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Lá cờ chiến thắng được cắm trên nóc Dinh Độc Lập vào thời khắc lịch sử nào ngày 30/4/1975?',
          options: ['11 giờ 30 phút', '09 giờ 00 phút', '12 giờ 45 phút', '15 giờ 30 phút'],
          correctAnswer: '11 giờ 30 phút',
          explanation: 'Đúng 11 giờ 30 phút ngày 30/4/1975, lá cờ cách mạng tung bay trên nóc Dinh Độc Lập, báo hiệu Chiến dịch Hồ Chí Minh toàn thắng.',
          hintLevel1: 'Vào buổi trưa 11h30.',
          hintLevel2: '11 giờ 30 phút.',
          hintLevel3: 'Chọn 11 giờ 30 phút.'
        }
      },
      {
        id: 'ddl_step_14',
        title: 'Tên gọi hiện nay của Dinh',
        storyPrompt: 'Sau ngày đất nước thống nhất, Dinh Độc Lập còn có tên gọi chính thức là gì?',
        clueVerse: 'Hội trường Thống Nhất rạng non sông,\nNối dải giang sơn thỏa ước mong.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên gọi chính thức hiện nay của di tích Dinh Độc Lập là gì?',
          options: ['Hội trường Thống Nhất', 'Nhà hát Lớn Thành phố', 'Bảo tàng Lịch sử', 'Dinh Thống Sứ'],
          correctAnswer: 'Hội trường Thống Nhất',
          explanation: 'Công trình hiện nay được gọi là Di tích Lịch sử Dinh Độc Lập (Hội trường Thống Nhất), là Di tích Quốc gia Đặc biệt.',
          hintLevel1: 'Mang ý nghĩa thống nhất đất nước.',
          hintLevel2: 'Hội trường Thống Nhất.',
          hintLevel3: 'Chọn Hội trường Thống Nhất.'
        }
      },
      {
        id: 'ddl_step_15',
        title: 'Hồ nước hình bán nguyệt trước sân Dinh',
        storyPrompt: 'Trước sảnh Dinh có hồ nước hình bán nguyệt thả hoa súng mang ý nghĩa phong thủy gì?',
        clueVerse: 'Hồ sen bán nguyệt tụ minh đường,\nNước trong tụ thủy tỏa hào quang.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Hồ nước hình bán nguyệt và đài phun nước trước Dinh đóng vai trò là "Minh Đường tụ thủy" trong thuật phong thủy truyền thống, giúp tụ khí và tạo không khí trong lành?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Hồ nước bán nguyệt phía trước vừa tạo cảnh quan thư thái, vừa là thế Minh Đường tụ thủy điều hòa vi khí hậu theo triết lý Đông phương.',
          hintLevel1: 'Yếu tố nước (Thủy) phía trước công trình kiến trúc.',
          hintLevel2: 'Minh đường tụ thủy phong thủy.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 3. Địa Đạo Củ Chi (TP.HCM) - Level 3 (15 câu đố quân sự & lịch sử)
  // =========================================================================
  {
    id: 'quest_cu_chi',
    locationId: 'loc_cu_chi',
    title: 'Giải Mã Mê Cung Trong Lòng Đất Thép',
    subtitle: 'Khám phá kỳ quan công sự ngầm 250km, bếp Hoàng Cầm giấu khói và lòng quả cảm của quân dân Củ Chi',
    category: 'history',
    difficulty: 'Khó',
    level: 3,
    estimatedMinutes: 20,
    rewardLP: 450,
    badgeId: 'badge_cu_chi',
    loreChapter: 'Chương 3: Đất Thép Thành Đồng',
    steps: [
      {
        id: 'cc_step_1',
        title: 'Chiều dài toàn tuyến địa đạo',
        storyPrompt: 'Bước vào cánh rừng xanh ngắt của Đất Thép, bạn hãy suy ngẫm về kỳ tích đào hầm bằng tay không:',
        clueVerse: 'Hai trăm năm mươi dặm đường sâu,\nQuân dân Đất Thép dựng cơ đồ.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tổng chiều dài của toàn bộ hệ thống đường hầm địa đạo Củ Chi ước tính lên tới bao nhiêu km?',
          options: ['Hơn 250 km', 'Khoảng 50 km', 'Khoảng 100 km', 'Hơn 500 km'],
          correctAnswer: 'Hơn 250 km',
          explanation: 'Hệ thống Địa đạo Củ Chi có tổng chiều dài hơn 250 km chạy ngoằn ngoèo trong lòng đất từ Bến Dược, Bến Đình ra tận sông Sài Gòn.',
          hintLevel1: 'Con số lớn hơn 200 km.',
          hintLevel2: 'Hơn 250 km.',
          hintLevel3: 'Chọn Hơn 250 km.'
        }
      },
      {
        id: 'cc_step_2',
        title: 'Cấu trúc số tầng ngầm của địa đạo',
        storyPrompt: 'Địa đạo được thiết kế phân chia thành bao nhiêu tầng sâu trong lòng đất sét laterit?',
        clueVerse: 'Ba tầng sâu thẳm vững như đồng,\nTầng ba cách mặt đất mười hai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hệ thống hầm địa đạo Củ Chi được cấu tạo gồm mấy tầng chính?',
          options: ['3 tầng (Tầng 1: 3m, Tầng 2: 6m, Tầng 3: 8-12m)', '1 tầng duy nhất', '5 tầng sâu', '7 tầng ngầm'],
          correctAnswer: '3 tầng (Tầng 1: 3m, Tầng 2: 6m, Tầng 3: 8-12m)',
          explanation: 'Địa đạo chia làm 3 tầng sâu khác nhau: Tầng 1 cách mặt đất 3m, Tầng 2 sâu 6m, Tầng 3 sâu từ 8m đến 12m chống được bom hạng nặng.',
          hintLevel1: 'Gồm 3 tầng ngầm.',
          hintLevel2: '3 tầng.',
          hintLevel3: 'Chọn 3 tầng (Tầng 1: 3m, Tầng 2: 6m, Tầng 3: 8-12m).'
        }
      },
      {
        id: 'cc_step_3',
        title: 'Sáng kiến Bếp Hoàng Cầm giấu khói',
        storyPrompt: 'Loại bếp dã chiến huyền thoại nào được sáng chế để nấu nướng mà khói không bốc lên cao bị máy bay địch phát hiện?',
        clueVerse: 'Nấu cơm giấu khói bay là là,\nHoàng Cầm tên gọi rạng ngàn hoa.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loại bếp dã chiến giấu khói nổi tiếng được dùng trong địa đạo (chứa từ "Hoàng Cầm"):',
          correctAnswer: 'Bếp Hoàng Cầm',
          keywords: ['hoàng cầm', 'bep hoang cam', 'bếp hoàng cầm'],
          explanation: 'Bếp Hoàng Cầm do anh nuôi Hoàng Cầm sáng chế năm 1951, có hệ thống rãnh dẫn khói làm khói tỏa ra là là trên mặt đất tựa như sương sớm.',
          hintLevel1: 'Tên một chiến sĩ nuôi quân họ Hoàng.',
          hintLevel2: 'Bếp Hoàng Cầm.',
          hintLevel3: 'Nhập: Bếp Hoàng Cầm.'
        }
      },
      {
        id: 'cc_step_4',
        title: 'Loại đất đặc biệt giúp địa đạo không bị sập',
        storyPrompt: 'Đất ở vùng Củ Chi có đặc tính gì giúp đường hầm không bị sụp lở dù bị bom cày xới?',
        clueVerse: 'Đất sét pha sỏi kết liền khối,\nCàng khô càng cứng tựa bê tông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Địa chất vùng đất Củ Chi có đặc điểm nào giúp đường hầm cực kỳ vững chắc?',
          options: [
            'Đất sét pha đá ong (Laterit), càng đào sâu và tiếp xúc không khí càng cứng rắn',
            'Đất cát phù sa tơi xốp',
            'Đất bùn lầy ven biển',
            'Đất đá vôi mềm xốp'
          ],
          correctAnswer: 'Đất sét pha đá ong (Laterit), càng đào sâu và tiếp xúc không khí càng cứng rắn',
          explanation: 'Đất sét pha laterit có độ kết dính cực cao, khi gặp không khí sẽ khô cứng như đá ong giúp hầm không bị sập.',
          hintLevel1: 'Đất sét laterit đặc trưng miền Đông.',
          hintLevel2: 'Đất sét pha đá ong.',
          hintLevel3: 'Chọn Đất sét pha đá ong (Laterit)...'
        }
      },
      {
        id: 'cc_step_5',
        title: 'Hình thức ngụy trang lỗ thông hơi',
        storyPrompt: 'Để đưa không khí trong lành xuống lòng hầm mà quân địch không phát hiện, người dân đã ngụy trang lỗ thông hơi thành:',
        clueVerse: 'Ụ mối gò đất nép gốc cây,\nLỗ thông hơi thở đón gió mây.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các lỗ thông hơi của địa đạo Củ Chi thường được ngụy trang tài tình dưới dạng gì?',
          options: [
            'Hình những ụ mối tự nhiên hoặc gò đất nép bên gốc cây',
            'Ống khói bằng sắt nhô cao',
            'Hố rác công cộng',
            'Bể chứa nước nổi'
          ],
          correctAnswer: 'Hình những ụ mối tự nhiên hoặc gò đất nép bên gốc cây',
          explanation: 'Các lỗ thông hơi được khoét xiên lên mặt đất và đắp thành những tổ kiến, ụ mối gò đất tự nhiên khiến quân đối phương không thể nhận ra.',
          hintLevel1: 'Trông giống hệt ụ mối trong rừng.',
          hintLevel2: 'Ụ mối tự nhiên.',
          hintLevel3: 'Chọn Hình những ụ mối tự nhiên...'
        }
      },
      {
        id: 'cc_step_6',
        title: 'Món ăn dân dã gắn liền với du khách tại Củ Chi',
        storyPrompt: 'Sau khi trải nghiệm chui hầm, du khách sẽ được thưởng thức món ăn truyền thống giản dị nào chấm với muối mè?',
        clueVerse: 'Củ mì luộc chín thơm ngào ngạt,\nChấm đĩa muối mè đậm nghĩa quê.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món ăn dân dã truyền thống được phục vụ cho du khách tại Địa đạo Củ Chi là gì?',
          options: ['Khoai mì luộc chấm muối mè (muối vừng)', 'Bánh chưng rán', 'Bún bò cay', 'Cơm lam thịt nướng'],
          correctAnswer: 'Khoai mì luộc chấm muối mè (muối vừng)',
          explanation: 'Khoai mì (sắn) luộc chấm muối mè kèm ngụm trà nóng là món ăn tiếp sức cho chiến sĩ du kích trong những năm tháng kháng chiến.',
          hintLevel1: 'Củ sắn / củ mì thơm bùi.',
          hintLevel2: 'Khoai mì luộc chấm muối mè.',
          hintLevel3: 'Chọn Khoai mì luộc chấm muối mè (muối vừng).'
        }
      },
      {
        id: 'cc_step_7',
        title: 'Danh hiệu vẻ vang của Củ Chi',
        storyPrompt: 'Năm 1967 tại Đại hội Anh hùng và Chiến sĩ thi đua toàn quốc, Củ Chi đã được phong tặng danh hiệu cao quý nào?',
        clueVerse: 'Đất Thép Thành Đồng vang tiếng hát,\nBất khuất kiên cường rực sử son.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Củ Chi được Ủy ban Trung ương Mặt trận Dân tộc Giải phóng miền Nam trao tặng danh hiệu gì?',
          options: [
            'Đất Thép Thành Đồng',
            'Thủ Đô Kháng Chiến',
            'Hòn Ngọc Viễn Đông',
            'Thành Phố Hoa Phượng Đỏ'
          ],
          correctAnswer: 'Đất Thép Thành Đồng',
          explanation: 'Củ Chi vinh dự được phong tặng danh hiệu "Đất Thép Thành Đồng" và Huân chương Thành đồng Tổ quốc hạng Nhất.',
          hintLevel1: 'Thành đồng vững chãi như thép.',
          hintLevel2: 'Đất Thép Thành Đồng.',
          hintLevel3: 'Chọn Đất Thép Thành Đồng.'
        }
      },
      {
        id: 'cc_step_8',
        title: 'Kích thước nắp hầm bí mật',
        storyPrompt: 'Cửa hầm ngầm bí mật được thiết kế với kích thước vô cùng đặc biệt:',
        clueVerse: 'Nắp hầm nhỏ hẹp vừa thân áo,\nLá khô ngụy trang lẫn đất bùn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nắp hầm bí mật của địa đạo Củ Chi chỉ có kích thước khoảng 20cm x 30cm, vừa đủ một người lọt thỏm và nắp bằng gỗ/đất rải lá cây khô che khuất hoàn toàn?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Nắp hầm rất nhỏ hẹp chỉ vừa thân người Việt Nam và được rải lá cây khô ngụy trang kỹ lưỡng, khiến kẻ thù dù đứng ngay trên miệng hầm cũng không thể phát hiện.',
          hintLevel1: 'Miệng hầm cực kỳ nhỏ gọn.',
          hintLevel2: 'Ngụy trang bằng lá khô.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cc_step_9',
        title: 'Đền tưởng niệm Bến Dược',
        storyPrompt: 'Trong quần thể địa đạo có một ngôi đền tưởng niệm linh thiêng khắc tên hơn 45.000 liệt sĩ tên là gì?',
        clueVerse: 'Bến Dược ngàn năm lưu danh sáng,\nKhói hương tưởng niệm vạn anh hùng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên ngôi đền tưởng niệm các anh hùng liệt sĩ tại Củ Chi là gì?',
          options: ['Đền Bến Dược', 'Đền Hùng', 'Đền Ngọc Sơn', 'Đền Kiếp Bạc'],
          correctAnswer: 'Đền Bến Dược',
          explanation: 'Đền Tưởng niệm Liệt sĩ Bến Dược Củ Chi là nơi khắc bia ghi danh hơn 45.000 người con ưu tú đã hy sinh vì nền độc lập tự do.',
          hintLevel1: 'Gắn liền với địa danh Bến Dược.',
          hintLevel2: 'Đền Bến Dược.',
          hintLevel3: 'Chọn Đền Bến Dược.'
        }
      },
      {
        id: 'cc_step_10',
        title: 'Phương tiện dụng cụ đào hầm',
        storyPrompt: 'Hàng trăm cây số địa đạo Củ Chi chủ yếu được đào bằng những dụng cụ thủ công đơn sơ nào?',
        clueVerse: 'Lưỡi cuốc cán ngắn cùng ky nan,\nMồ hôi rớt xuống đất nung son.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chiến sĩ và nhân dân Củ Chi đã dùng phương tiện chính nào để đào hàng trăm km địa đạo?',
          options: [
            'Lưỡi cuốc cùn cán ngắn và ky tre / bao bố xúc đất',
            'Máy khoan hầm tự động nhập khẩu',
            'Xe xúc đất hạng nặng',
            'Chất nổ phá đá quy mô lớn'
          ],
          correctAnswer: 'Lưỡi cuốc cùn cán ngắn và ky tre / bao bố xúc đất',
          explanation: 'Toàn bộ địa đạo được đào thủ công bền bỉ bằng những lưỡi cuốc cùn cán ngắn và ky nan kéo từng bao đất lên mặt đất giấu vào ruộng vườn.',
          hintLevel1: 'Sức người thủ công vĩ đại.',
          hintLevel2: 'Cuốc cán ngắn và ky tre.',
          hintLevel3: 'Chọn Lưỡi cuốc cùn cán ngắn...'
        }
      },
      {
        id: 'cc_step_11',
        title: 'Bệnh viện và công xưởng dưới lòng đất',
        storyPrompt: 'Dưới địa đạo có những căn phòng chức năng nào phục vụ chiến đấu và đời sống lâu dài?',
        clueVerse: 'Phòng mổ dưới sâu đèn le lói,\nBệnh xá công xưởng giữa lòng sâu.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Dưới lòng địa đạo Củ Chi có đầy đủ trạm phẫu thuật, phòng hộ sinh, phòng họp chỉ huy, giếng nước ngầm và xưởng tiện chế tạo vũ khí?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Địa đạo Củ Chi là một "thành phố ngầm" hoàn chỉnh với đầy đủ hạ tầng sinh hoạt và chiến đấu.',
          hintLevel1: 'Mê cung ngầm có đầy đủ phòng ban.',
          hintLevel2: 'Có phòng mổ, giếng nước, xưởng vũ khí.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cc_step_12',
        title: 'Đội quân Đội săn chuột chũi của đối phương',
        storyPrompt: 'Đối phương từng lập ra đội lính đặc nhiệm tinh nhuệ nhằm lùng sục lòng địa đạo có tên gọi là gì?',
        clueVerse: 'Lính chuột chũi chui vào hầm tối,\nĐều phải quy hàng trước bẫy chông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Lực lượng lính biệt kích chuyên chui hầm của đối phương được gọi bằng biệt danh gì?',
          options: ['Chuột cống / Chuột chũi (Tunnel Rats)', 'Biệt kích dù', 'Mũ nồi xanh', 'Hải cẩu SEAL'],
          correctAnswer: 'Chuột cống / Chuột chũi (Tunnel Rats)',
          explanation: 'Đội lính "Tunnel Rats" (chuột cống) gồm những người lính có thể hình nhỏ bé mang đèn pin và súng ngắn nhưng đều thất bại trước mạng lưới hầm chông và địa đạo hiểm hóc.',
          hintLevel1: 'Tên loài gặm nhấm sống dưới lòng đất: chuột.',
          hintLevel2: 'Tunnel Rats (Chuột chũi).',
          hintLevel3: 'Chọn Chuột cống / Chuột chũi (Tunnel Rats).'
        }
      },
      {
        id: 'cc_step_13',
        title: 'Bẫy chông tre huyền thoại',
        storyPrompt: 'Vũ khí tự chế bằng tre rừng vô cùng lợi hại đặt tại các cửa ngõ địa đạo là gì?',
        clueVerse: 'Chông tre vót nhọn cắm lòng sâu,\nBẫy lật hố sâu chặn bước thù.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại bẫy tự tạo nào được du kích Củ Chi làm bằng tre rừng để bảo vệ cửa hầm?',
          options: [
            'Bẫy chông tre (chông lật, chông hố, chông cánh bướm)',
            'Bẫy lưới điện',
            'Bẫy laze cảm ứng',
            'Bẫy súng tự động'
          ],
          correctAnswer: 'Bẫy chông tre (chông lật, chông hố, chông cánh bướm)',
          explanation: 'Các loại bẫy chông tre tự tạo đa dạng (chông lật, chông trục, chông hố) đã trở thành nỗi khiếp sợ của kẻ thù xâm nhập.',
          hintLevel1: 'Làm từ cọc tre vót nhọn.',
          hintLevel2: 'Bẫy chông tre.',
          hintLevel3: 'Chọn Bẫy chông tre...'
        }
      },
      {
        id: 'cc_step_14',
        title: 'Hai khu căn cứ địa đạo mở cửa tham quan',
        storyPrompt: 'Hiện nay, hai khu di tích địa đạo Củ Chi đón khách tham quan trải nghiệm là khu nào?',
        clueVerse: 'Bến Dược Bến Đình cùng tỏa sáng,\nChào đón lữ khách khắp muôn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai địa điểm địa đạo Củ Chi đang mở cửa đón khách tham quan là gì?',
          options: [
            'Địa đạo Bến Dược và Địa đạo Bến Đình',
            'Địa đạo Vĩnh Mốc và Địa đạo Khe Sanh',
            'Địa đạo Củ Chi và Địa đạo Tân Trào',
            'Địa đạo An Phú và Địa đạo Bình Dương'
          ],
          correctAnswer: 'Địa đạo Bến Dược và Địa đạo Bến Đình',
          explanation: 'Di tích Lịch sử Địa đạo Củ Chi hiện gồm hai cụm tham quan chính là Địa đạo Bến Dược (Phú Mỹ Hưng) và Địa đạo Bến Đình (Nhuận Đức).',
          hintLevel1: 'Cả hai đều bắt đầu bằng chữ "Bến".',
          hintLevel2: 'Bến Dược và Bến Đình.',
          hintLevel3: 'Chọn Địa đạo Bến Dược và Địa đạo Bến Đình.'
        }
      },
      {
        id: 'cc_step_15',
        title: 'Trải nghiệm bắn súng thể thao quốc phòng',
        storyPrompt: 'Tại khu du lịch Địa đạo Củ Chi, du khách có thể trải nghiệm hoạt động thể thao quân sự đặc biệt nào?',
        clueVerse: 'Tiếng nổ rền vang nơi trường bắn,\nTrải nghiệm quân sự thử tài hoa.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tại Khu di tích Củ Chi có trường bắn thể thao quốc phòng cho phép du khách thử tài thiện xạ với đạn thật dưới sự hướng dẫn an toàn của huấn luyện viên?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Trường bắn súng thể thao quốc phòng tại Bến Dược là một trong những hoạt động trải nghiệm hấp dẫn thu hút đông đảo du khách.',
          hintLevel1: 'Trường bắn súng thể thao.',
          hintLevel2: 'Bắn súng đạn thật có kiểm soát an toàn.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 4. Nhà Tù Côn Đảo - Bà Rịa Vũng Tàu - Level 3 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_nha_tu_con_dao',
    locationId: 'loc_nha_tu_con_dao',
    title: 'Bản Hùng Ca Bất Tử Giữa Trùng Dương',
    subtitle: 'Tìm hiểu lịch sử đấu tranh kiên trung của các chiến sĩ cách mạng, nữ anh hùng Võ Thị Sáu và di tích Côn Lôn',
    category: 'history',
    difficulty: 'Khó',
    level: 3,
    estimatedMinutes: 20,
    rewardLP: 450,
    badgeId: 'badge_nha_tu_con_dao',
    loreChapter: 'Chương 4: Thép Đã Tôi Thế Đấy Giữa Biển Khơi',
    steps: [
      {
        id: 'cd_step_1',
        title: 'Thời gian tồn tại của hệ thống ngục tù Côn Đảo',
        storyPrompt: 'Đứng trước những bức tường đá rêu phong sừng sững giữa ngàn thông Côn Đảo:',
        clueVerse: 'Hơn một trăm năm ngục tù đày ải,\nBiến chốn trần gian hóa trường thi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hệ thống nhà tù Côn Đảo do thực dân Pháp và đế quốc Mỹ duy trì tồn tại trong bao nhiêu năm (1862 - 1975)?',
          options: ['113 năm', '50 năm', '80 năm', '200 năm'],
          correctAnswer: '113 năm',
          explanation: 'Nhà tù Côn Đảo được thành lập ngày 1/2/1862 và tồn tại suốt 113 năm cho đến ngày giải phóng 1/5/1975.',
          hintLevel1: 'Kéo dài hơn 1 thế kỷ (từ 1862 đến 1975).',
          hintLevel2: '113 năm.',
          hintLevel3: 'Chọn 113 năm.'
        }
      },
      {
        id: 'cd_step_2',
        title: 'Nữ anh hùng bất khuất Võ Thị Sáu',
        storyPrompt: 'Người con gái Đất Đỏ kiên trung ngẩng cao đầu trước họng súng kẻ thù là ai?',
        clueVerse: 'Mùa hoa lê-ki-ma nở rộ,\nChị Sáu hiên ngang giữa đất trời.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên Nữ anh hùng Lực lượng Vũ trang Nhân dân hy sinh tại Côn Đảo năm 1952 khi mới 19 tuổi (chứa từ "Võ Thị Sáu"):',
          correctAnswer: 'Võ Thị Sáu',
          keywords: ['võ thị sáu', 'vo thi sau'],
          explanation: 'Chị Võ Thị Sáu (1933-1952), người thiếu nữ Đất Đỏ kiên cường, bất khuất đã hiên ngang hát vang bài Quốc ca trước giờ phút hành quyết.',
          hintLevel1: 'Người con gái mang họ Võ.',
          hintLevel2: 'Chị Võ Thị Sáu.',
          hintLevel3: 'Nhập: Võ Thị Sáu.'
        }
      },
      {
        id: 'cd_step_3',
        title: 'Khu biệt giam Chuồng Cọp Pháp',
        storyPrompt: 'Khu biệt giam khét tiếng với song sắt bên trên để cai ngục tra tấn và rải vôi bột xuống tù nhân có tên là gì?',
        clueVerse: 'Song sắt giam cầm trên gác lửng,\nChuồng Cọp lưu đày nỗi bi thương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khu biệt giam bí mật tàn bạo nhất của thực dân Pháp tại Côn Đảo có tên là gì?',
          options: ['Chuồng Cọp Pháp', 'Chuồng Bò', 'Trại Phú Hải', 'Trại Phú Tường'],
          correctAnswer: 'Chuồng Cọp Pháp',
          explanation: 'Chuồng Cọp Pháp xây dựng năm 1940 với 120 phòng giam biệt lập có song sắt phía trên để cai ngục đi lại tra tấn và rắc vôi sống xuống người tù.',
          hintLevel1: 'Tên con thú ăn thịt chúa sơn lâm: Cọp.',
          hintLevel2: 'Chuồng Cọp.',
          hintLevel3: 'Chọn Chuồng Cọp Pháp.'
        }
      },
      {
        id: 'cd_step_4',
        title: 'Nghĩa trang Hàng Dương linh thiêng',
        storyPrompt: 'Nơi yên nghỉ của hàng vạn chiến sĩ cách mạng và đồng bào yêu nước tại Côn Đảo tên là gì?',
        clueVerse: 'Hàng Dương khói ngát hương thơm tỏa,\nVạn nấm mồ soi bóng trùng khơi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nghĩa trang lịch sử thiêng liêng lớn nhất tại Côn Đảo là nghĩa trang nào?',
          options: ['Nghĩa trang Hàng Dương', 'Nghĩa trang Hàng Keo', 'Nghĩa trang Trường Sơn', 'Nghĩa trang Đường 9'],
          correctAnswer: 'Nghĩa trang Hàng Dương',
          explanation: 'Nghĩa trang Hàng Dương rộng hơn 19ha là nơi an nghỉ của gần 2.000 ngôi mộ liệt sĩ (trong đó có hàng ngàn ngôi mộ vô danh).',
          hintLevel1: 'Tên gắn với loài cây dương biển.',
          hintLevel2: 'Nghĩa trang Hàng Dương.',
          hintLevel3: 'Chọn Nghĩa trang Hàng Dương.'
        }
      },
      {
        id: 'cd_step_5',
        title: 'Cầu Tàu 914 ghi dấu lịch sử',
        storyPrompt: 'Cây cầu tàu đá vươn ra biển Côn Đảo được đặt tên theo con số nào để tưởng nhớ những người đã ngã xuống khi xây cầu?',
        clueVerse: 'Chín trăm mười bốn linh hồn đọng,\nĐắp đá xây cầu vượt sóng khơi.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập tên con số của Cầu Tàu lịch sử tại Côn Đảo (gợi ý: 914):',
          correctAnswer: '914',
          keywords: ['914', 'cầu tàu 914'],
          explanation: 'Cầu Tàu 914 được xây dựng từ năm 1873, con số 914 ước tính số tù nhân đã kiệt sức hy sinh khi gánh từng tảng đá nặng đắp nên cây cầu.',
          hintLevel1: 'Con số 914.',
          hintLevel2: 'Cầu Tàu 914.',
          hintLevel3: 'Nhập: 914.'
        }
      },
      {
        id: 'cd_step_6',
        title: 'Loại cây cổ thụ gắn với mật thư nhà tù',
        storyPrompt: 'Loại cây bóng mát cổ thụ nào trong các trại giam Côn Đảo từng là nơi giấu mật thư liên lạc của các chiến sĩ?',
        clueVerse: 'Cây Bàng cổ thụ xòe bóng mát,\nGiấu lá thư mật nối niềm tin.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại cây cổ thụ hàng trăm năm tuổi tại Côn Đảo được công nhận là Cây Di sản gắn liền với lịch sử cách mạng là cây gì?',
          options: ['Cây Bàng Côn Đảo', 'Cây Phi Lao', 'Cây Phượng Vĩ', 'Cây Me'],
          correctAnswer: 'Cây Bàng Côn Đảo',
          explanation: 'Hơn 50 cây bàng cổ thụ tại các trại giam Côn Đảo đã được vinh danh là Cây Di sản Việt Nam, là chứng nhân che chở và truyền tin của tù nhân.',
          hintLevel1: 'Cây có lá to đổi màu đỏ vào mùa đông, hạt bàng Côn Đảo là đặc sản.',
          hintLevel2: 'Cây Bàng.',
          hintLevel3: 'Chọn Cây Bàng Côn Đảo.'
        }
      },
      {
        id: 'cd_step_7',
        title: 'Tổng Bí thư Lê Duẩn và trường học cách mạng',
        storyPrompt: 'Nhiều đồng chí lãnh đạo kiệt xuất của Đảng như Tổng Bí thư Lê Duẩn, Nguyễn Văn Cừ, Phạm Văn Đồng từng biến nhà tù Côn Đảo thành:',
        clueVerse: 'Biến ngục tù thành trường học đỏ,\nRèn đúc ý chí vững giang san.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các chiến sĩ cộng sản tại Côn Đảo đã có chủ trương nổi tiếng nào để tôi luyện tinh thần cách mạng?',
          options: [
            'Biến nhà tù đế quốc thành trường học cách mạng',
            'Chấp nhận số phận lưu đày',
            'Đình công không lao động',
            'Chờ đợi sự giúp đỡ bên ngoài'
          ],
          correctAnswer: 'Biến nhà tù đế quốc thành trường học cách mạng',
          explanation: 'Trong chốn lao tù tàn bạo, các chiến sĩ đã thành lập Chi bộ Đảng, mở lớp bồi dưỡng lý luận chính trị, ngoại ngữ, biến nhà tù thành trường học cách mạng.',
          hintLevel1: 'Chủ trương biến ngục tù thành trường học.',
          hintLevel2: 'Trường học cách mạng.',
          hintLevel3: 'Chọn Biến nhà tù đế quốc thành trường học cách mạng.'
        }
      },
      {
        id: 'cd_step_8',
        title: 'Loài hoa gắn liền với bài ca chị Võ Thị Sáu',
        storyPrompt: 'Loài hoa trắng ngần gắn liền với hình tượng chị Võ Thị Sáu trong ca khúc bất hủ của nhạc sĩ Nguyễn Đức Toàn tên là gì?',
        clueVerse: 'Mùa hoa lê-ki-ma nở trắng,\nĐất Đỏ miền Đông rộn tiếng ca.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hoa gì được nhắc đến trong ca khúc "Biết ơn chị Võ Thị Sáu"?',
          options: ['Hoa Lê-ki-ma (hoa quả trứng gà)', 'Hoa Sen trắng', 'Hoa Cúc vàng', 'Hoa Bằng lăng'],
          correctAnswer: 'Hoa Lê-ki-ma (hoa quả trứng gà)',
          explanation: '"Mùa hoa lê-ki-ma nở, quê ta miền Đất Đỏ..." - Hoa lê-ki-ma đã gắn liền với người nữ anh hùng trẻ tuổi.',
          hintLevel1: 'Tên hoa phiên âm: Lê-ki-ma.',
          hintLevel2: 'Hoa Lê-ki-ma.',
          hintLevel3: 'Chọn Hoa Lê-ki-ma (hoa quả trứng gà).'
        }
      },
      {
        id: 'cd_step_9',
        title: 'Khu di tích Chuồng Bò',
        storyPrompt: 'Khu biệt giam dùng phân bò và hầm nước bẩn để ngâm tù nhân có tên gọi dân gian là gì?',
        clueVerse: 'Hầm Chuồng Bò hôi tanh u tối,\nTội ác dã man mãi khắc ghi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khu tra tấn tù nhân bằng hầm phân bẩn tại Côn Đảo có tên là gì?',
          options: ['Khu Chuồng Bò', 'Trại Phú Phong', 'Sở Muối', 'Sở Củi'],
          correctAnswer: 'Khu Chuồng Bò',
          explanation: 'Khu Chuồng Bò lập năm 1930 nguyên là nơi nuôi bò, sau cải tạo thành hầm ngâm tù nhân trong nước phân bẩn cực kỳ tàn bạo.',
          hintLevel1: 'Tên gắn với con vật nuôi: con bò.',
          hintLevel2: 'Chuồng Bò.',
          hintLevel3: 'Chọn Khu Chuồng Bò.'
        }
      },
      {
        id: 'cd_step_10',
        title: 'Đỉnh Tình Yêu Côn Đảo',
        storyPrompt: 'Ngọn núi hùng vĩ có hình dáng đôi uyên ương ôm nhau nhìn ra vịnh Bến Đầm tên là gì?',
        clueVerse: 'Đỉnh Tình Yêu xanh ngát chân trời,\nÔm trọn non sông đẹp thắm tươi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên ngọn núi mang biểu tượng tình yêu chung thủy tại Côn Đảo là gì?',
          options: ['Đỉnh Tình Yêu (Hòn Bà)', 'Đỉnh Thánh Giá', 'Núi Chúa', 'Núi Lớn'],
          correctAnswer: 'Đỉnh Tình Yêu (Hòn Bà)',
          explanation: 'Đỉnh Tình Yêu là ngọn núi có hình dáng tựa đôi lứa đang ôm nhau, là biểu tượng tình yêu thủy chung của hòn đảo xinh đẹp.',
          hintLevel1: 'Tên ngọn núi có chữ "Tình Yêu".',
          hintLevel2: 'Đỉnh Tình Yêu.',
          hintLevel3: 'Chọn Đỉnh Tình Yêu (Hòn Bà).'
        }
      },
      {
        id: 'cd_step_11',
        title: 'Vườn quốc gia Côn Đảo và loài rùa biển',
        storyPrompt: 'Côn Đảo là thiên đường bảo tồn loài sinh vật biển quý hiếm nào lên bãi đẻ trứng nhiều nhất Việt Nam?',
        clueVerse: 'Vích biển về đẻ trứng ban đêm,\nBảo tồn sự sống giữa trùng khơi.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loài động vật hoang dã quý hiếm nào được Vườn Quốc gia Côn Đảo bảo tồn lớn nhất cả nước?',
          options: ['Rùa biển (Vích & Đồi mồi)', 'Cá heo xanh', 'Hải cẩu', 'Chim cánh cụt'],
          correctAnswer: 'Rùa biển (Vích & Đồi mồi)',
          explanation: 'Côn Đảo là bãi đẻ của hơn 90% số lượng rùa biển (vích) tại Việt Nam, là khu bảo tồn thiên nhiên biển kiểu mẫu.',
          hintLevel1: 'Loài rùa biển mai xanh (Vích).',
          hintLevel2: 'Rùa biển.',
          hintLevel3: 'Chọn Rùa biển (Vích & Đồi mồi).'
        }
      },
      {
        id: 'cd_step_12',
        title: 'Hạt bàng Côn Đảo đặc sản nức tiếng',
        storyPrompt: 'Món đặc sản quà biếu truyền thống làm từ quả bàng Côn Đảo là gì?',
        clueVerse: 'Mứt hạt bàng rang thơm giòn béo,\nĐượm tình đất đảo gửi người xa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đặc sản ẩm thực độc đáo nhất của Côn Đảo là gì?',
          options: ['Mứt hạt bàng rang muối / ngọt', 'Kẹo dừa', 'Bánh pía sầu riêng', 'Mè xửng'],
          correctAnswer: 'Mứt hạt bàng rang muối / ngọt',
          explanation: 'Mứt hạt bàng rang muối hoặc tẩm đường thơm bùi béo ngậy là món quà lưu niệm đặc trưng không thể bỏ qua tại Côn Đảo.',
          hintLevel1: 'Làm từ hạt của cây bàng.',
          hintLevel2: 'Mứt hạt bàng.',
          hintLevel3: 'Chọn Mứt hạt bàng rang muối / ngọt.'
        }
      },
      {
        id: 'cd_step_13',
        title: 'Nhà tưởng niệm nhà chí sĩ Nguyễn An Ninh',
        storyPrompt: 'Nhà chí sĩ yêu nước lỗi lạc nào của Nam Bộ đã bị giam cầm và hy sinh anh dũng tại Côn Đảo năm 1943?',
        clueVerse: 'Nguyễn An Ninh trí sĩ kiên trung,\nTiếng chuông thức tỉnh giấc ngàn đông.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nhà trí thức, nhà báo, chí sĩ yêu nước tiêu biểu hy sinh tại Côn Đảo (chứa từ "Nguyễn An Ninh"):',
          correctAnswer: 'Nguyễn An Ninh',
          keywords: ['nguyễn an ninh', 'nguyen an ninh'],
          explanation: 'Cụ Nguyễn An Ninh (1900-1943), nhà văn hóa, nhà báo tài ba, người đã cống hiến trọn đời cho sự nghiệp giải phóng dân tộc.',
          hintLevel1: 'Họ Nguyễn, tên An Ninh.',
          hintLevel2: 'Nguyễn An Ninh.',
          hintLevel3: 'Nhập: Nguyễn An Ninh.'
        }
      },
      {
        id: 'cd_step_14',
        title: 'Danh hiệu Di tích Quốc gia Đặc biệt',
        storyPrompt: 'Nhà tù Côn Đảo được Thủ tướng Chính phủ xếp hạng là Di tích Quốc gia nào?',
        clueVerse: 'Địa chỉ đỏ thiêng liêng sông núi,\nDi tích đặc biệt rạng non sông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nhà tù Côn Đảo được xếp hạng là di tích cấp nào?',
          options: ['Di tích Quốc gia Đặc biệt', 'Di tích cấp Tỉnh', 'Kỳ quan thiên nhiên mới', 'Bảo tàng địa phương'],
          correctAnswer: 'Di tích Quốc gia Đặc biệt',
          explanation: 'Năm 2012, Khu Di tích Lịch sử Nhà tù Côn Đảo được xếp hạng Di tích Quốc gia Đặc biệt.',
          hintLevel1: 'Cấp cao nhất của quốc gia.',
          hintLevel2: 'Di tích Quốc gia Đặc biệt.',
          hintLevel3: 'Chọn Di tích Quốc gia Đặc biệt.'
        }
      },
      {
        id: 'cd_step_15',
        title: 'Giờ thăm viếng linh thiêng tại Hàng Dương',
        storyPrompt: 'Nét văn hóa tâm linh độc đáo khi du khách đến viếng mộ chị Võ Thị Sáu tại nghĩa trang Hàng Dương thường diễn ra vào thời gian nào?',
        clueVerse: 'Đêm khuya thanh vắng hương trầm tỏa,\nKhách thập phương về dâng đóa hoa.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Khác với các nghĩa trang thông thường, lễ viếng mộ Chị Sáu và các anh hùng liệt sĩ tại nghĩa trang Hàng Dương diễn ra trang nghiêm và đông đảo nhất từ 22h đêm đến rạng sáng?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Viếng mộ Chị Sáu vào ban đêm (từ 22h00 đến 00h00) trong làn khói hương lung linh và tiếng thông reo là nét sinh hoạt tâm linh vô cùng xúc động và độc đáo.',
          hintLevel1: 'Lễ viếng đêm linh thiêng.',
          hintLevel2: 'Viếng từ đêm đến rạng sáng.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 5. Bưu Điện Trung Tâm TP.HCM - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_buu_dien',
    locationId: 'loc_buu_dien',
    title: 'Giải Mã Vòm Trần Eiffel & Bản Đồ Cổ 1892',
    subtitle: 'Khám phá kiến trúc Phục Hưng hoa lệ, kết cấu vòm trần sắt thép và những bức bản đồ vẽ tay xuyên thế kỷ',
    category: 'architecture',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_buu_dien',
    loreChapter: 'Chương 5: Bức Thư Vượt Thời Gian',
    steps: [
      {
        id: 'bd_step_1',
        title: 'Màu sơn vàng hoàng yến đặc trưng',
        storyPrompt: 'Đứng trước Bưu điện Trung tâm Thành phố rực rỡ dưới ánh nắng sớm mai:',
        clueVerse: 'Sắc vàng hoàng yến sáng phố hoa,\nNét đẹp Tây phương thắm nước nhà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Mặt tiền Bưu điện Trung tâm Thành phố nổi bật với tông màu sơn chủ đạo nào?',
          options: ['Màu vàng hoàng yến (vàng đất)', 'Màu trắng ngọc trai', 'Màu xanh ngọc bích', 'Màu đỏ gạch'],
          correctAnswer: 'Màu vàng hoàng yến (vàng đất)',
          explanation: 'Sắc vàng hoàng yến kết hợp đường chỉ phào trắng là nét đặc trưng của các công trình kiến trúc Pháp tại Việt Nam cuối thế kỷ 19.',
          hintLevel1: 'Màu vàng quý phái đặc trưng Sài Gòn.',
          hintLevel2: 'Vàng hoàng yến.',
          hintLevel3: 'Chọn Màu vàng hoàng yến (vàng đất).'
        }
      },
      {
        id: 'bd_step_2',
        title: 'Kiến trúc sư thiết kế công trình',
        storyPrompt: 'Công trình Bưu điện Sài Gòn do kiến trúc sư người Pháp nào thiết kế trong giai đoạn 1886 - 1891?',
        clueVerse: 'KTS danh tiếng Foulhoux vẽ đồ án,\nVòm cuốn Phục Hưng rạng sớm chiều.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ai là Kiến trúc sư thiết kế công trình Bưu điện Trung tâm Sài Gòn?',
          options: ['Marie-Alfred Foulhoux', 'Gustave Eiffel', 'Jules Bourard', 'Paul Hermite'],
          correctAnswer: 'Marie-Alfred Foulhoux',
          explanation: 'Kiến trúc sư Marie-Alfred Foulhoux là tác giả thiết kế Bưu điện Trung tâm Sài Gòn (thường bị nhầm lẫn với Gustave Eiffel).',
          hintLevel1: 'Họ bắt đầu bằng chữ F.',
          hintLevel2: 'Marie-Alfred Foulhoux.',
          hintLevel3: 'Chọn Marie-Alfred Foulhoux.'
        }
      },
      {
        id: 'bd_step_3',
        title: 'Kết cấu vòm trần sắt thép',
        storyPrompt: 'Bước vào sảnh chính, bạn hãy ngước nhìn lên vòm trần sắt uốn lượn phong cách nào?',
        clueVerse: 'Vòm trần uốn lượn tựa cánh cung,\nTrụ sắt nâng cao đón gió lồng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Vòm trần sảnh chính Bưu điện được nâng đỡ bằng hệ kết cấu gì?',
          options: [
            'Hệ khung sắt uốn vòm lớn kiểu cách mạng công nghiệp Pháp',
            'Toàn bộ bằng gỗ lim chạm trổ',
            'Đổ bê tông nguyên khối không trụ đỡ',
            'Khung tre đan lợp tôn'
          ],
          correctAnswer: 'Hệ khung sắt uốn vòm lớn kiểu cách mạng công nghiệp Pháp',
          explanation: 'Kết cấu vòm sắt uốn lượn thanh thoát là điểm nhấn kỳ vĩ, gợi nhớ các nhà ga xe lửa danh tiếng châu Âu thế kỷ 19.',
          hintLevel1: 'Kết cấu sắt thép vòm cuốn chịu lực.',
          hintLevel2: 'Khung sắt uốn vòm.',
          hintLevel3: 'Chọn Hệ khung sắt uốn vòm lớn...'
        }
      },
      {
        id: 'bd_step_4',
        title: 'Hai bức bản đồ lịch sử vẽ tay quý hiếm',
        storyPrompt: 'Ngay hai bên tường sảnh vào có hai bức bản đồ cổ vẽ tay năm nào ghi lại hệ thống viễn thông và địa lý Sài Gòn?',
        clueVerse: 'Bản đồ vẽ nét cổ xưa,\nSài Gòn năm ấy nắng mưa giao hòa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bức bản đồ vẽ tay nổi tiếng "Saigon et ses environs" ở sảnh bưu điện được hoàn thành vào năm nào?',
          options: ['Năm 1892', 'Năm 1954', 'Năm 1975', 'Năm 2000'],
          correctAnswer: 'Năm 1892',
          explanation: 'Bức bản đồ cổ vẽ tay "Saigon et ses environs" (Sài Gòn và vùng phụ cận) được vẽ công phu vào năm 1892.',
          hintLevel1: 'Vào cuối thế kỷ 19 (năm 1892).',
          hintLevel2: 'Năm 1892.',
          hintLevel3: 'Chọn Năm 1892.'
        }
      },
      {
        id: 'bd_step_5',
        title: 'Tên các nhà khoa học vĩ đại trên mặt tiền',
        storyPrompt: 'Trên các ô cửa vòm mặt tiền Bưu điện có chạm khắc tên của các danh nhân khoa học nào?',
        clueVerse: 'Khắc ghi tên tuổi bậc danh nhân,\nAmpère, Morse, Franklin sáng ngời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các tấm biển hình chữ nhật trên mặt tiền Bưu điện khắc tên các nhà khoa học phát minh trong lĩnh vực nào?',
          options: [
            'Ngành Điện học và Thông tin liên lạc thế giới (Ampère, Faraday, Morse, Volta...)',
            'Ngành Y học thế giới',
            'Ngành Thiên văn học vũ trụ',
            'Các danh tướng thời trung cổ'
          ],
          correctAnswer: 'Ngành Điện học và Thông tin liên lạc thế giới (Ampère, Faraday, Morse, Volta...)',
          explanation: 'Mặt tiền khắc tên các nhà phát minh vĩ đại về điện và viễn thông như Volta, Faraday, Ampère, Morse, Ohm, Galvani...',
          hintLevel1: 'Gắn liền với ngành điện tử và liên lạc viễn thông.',
          hintLevel2: 'Điện học và thông tin liên lạc.',
          hintLevel3: 'Chọn Ngành Điện học và Thông tin liên lạc...'
        }
      },
      {
        id: 'bd_step_6',
        title: 'Cụ già viết thư tay thuê xuyên thế kỷ',
        storyPrompt: 'Cụ ông huyền thoại từng ngồi viết thư thuê và dịch thuật bằng tiếng Pháp, tiếng Anh tại sảnh Bưu điện suốt hơn 30 năm tên là gì?',
        clueVerse: 'Cụ Ngộ ngồi nắn nót từng trang,\nThư tình vượt sóng gửi muôn phương.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên cụ già viết thư thuê nổi tiếng nhất Việt Nam từng ngồi tại Bưu điện TP.HCM (chứa từ "Dương Văn Ngộ"):',
          correctAnswer: 'Dương Văn Ngộ',
          keywords: ['dương văn ngộ', 'duong van ngo'],
          explanation: 'Cụ Dương Văn Ngộ (1930-2023) là người viết thư thuê cuối cùng tại Bưu điện TP.HCM, được Trung tâm Sách Kỷ lục Việt Nam ghi nhận.',
          hintLevel1: 'Họ Dương, tên Văn Ngộ.',
          hintLevel2: 'Cụ Dương Văn Ngộ.',
          hintLevel3: 'Nhập: Dương Văn Ngộ.'
        }
      },
      {
        id: 'bd_step_7',
        title: 'Dãy buồng điện thoại công cộng bằng gỗ',
        storyPrompt: 'Dọc hai bên cánh sảnh Bưu điện có hai dãy buồng điện thoại bằng chất liệu gì lưu giữ ký ức viễn thông xưa?',
        clueVerse: 'Buồng gỗ lim xưa gọi phương xa,\nTiếng chuông reo ấm nghĩa quê nhà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các buồng điện thoại công cộng cổ kính tại Bưu điện được đóng bằng loại gỗ gì?',
          options: ['Gỗ lim / gỗ trắc cổ điển', 'Gỗ ép công nghiệp', 'Khung nhôm kính hiện đại', 'Đúc bằng nhựa tổng hợp'],
          correctAnswer: 'Gỗ lim / gỗ trắc cổ điển',
          explanation: 'Hai dãy buồng điện thoại bằng gỗ lim nâu bóng tạo nên không gian hoài niệm sâu lắng về thời kỳ liên lạc viễn thông đầu thế kỷ 20.',
          hintLevel1: 'Gỗ lim cổ thụ bền chắc.',
          hintLevel2: 'Gỗ lim.',
          hintLevel3: 'Chọn Gỗ lim / gỗ trắc cổ điển.'
        }
      },
      {
        id: 'bd_step_8',
        title: 'Đồng hồ lớn ngay phía trên cổng chính',
        storyPrompt: 'Chiếc đồng hồ tròn cổ điển trên cổng chính Bưu điện hiển thị thời gian và con số ghi nhớ năm khánh thành công trình:',
        clueVerse: 'Kim đồng hồ quay nhịp thảnh thơi,\nGhi dấu năm khởi công rạng ngời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Phía dưới mặt đồng hồ lớn ở cổng chính có đắp nổi các con số chỉ năm xây dựng Bưu điện là năm nào?',
          options: ['1886 - 1891', '1912 - 1914', '1962 - 1966', '1975 - 1980'],
          correctAnswer: '1886 - 1891',
          explanation: 'Mặt tiền Bưu điện ghi rõ niên đại xây dựng 1886 - 1891.',
          hintLevel1: 'Giai đoạn từ 1886 đến 1891.',
          hintLevel2: '1886 - 1891.',
          hintLevel3: 'Chọn 1886 - 1891.'
        }
      },
      {
        id: 'bd_step_9',
        title: 'Tượng nữ thần trên đỉnh vòm đồng hồ',
        storyPrompt: 'Ngay phía trên chiếc đồng hồ lớn ở cửa chính có tạc phù điêu vị thần bảo trợ trong thần thoại Hy Lạp là ai?',
        clueVerse: 'Đầu đội vòng hoa mắt sáng ngời,\nThần Mercury sứ giả truyền tin.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bức tượng bán thân phía trên đồng hồ Bưu điện là vị thần nào (thần truyền tin trong thần thoại Hy Lạp/La Mã)?',
          options: ['Thần Hermes / Mercury (Thần truyền tin)', 'Thần Mặt Trời Apollo', 'Thần Biển Poseidon', 'Thần Sấm Zeus'],
          correctAnswer: 'Thần Hermes / Mercury (Thần truyền tin)',
          explanation: 'Tượng thần Mercury (Hermes) - vị thần đưa tin đội mũ có cánh, tượng trưng cho ngành bưu chính chuyển phát nhanh chóng và tin cậy.',
          hintLevel1: 'Vị thần mang tin tức và liên lạc.',
          hintLevel2: 'Thần Hermes / Mercury.',
          hintLevel3: 'Chọn Thần Hermes / Mercury (Thần truyền tin).'
        }
      },
      {
        id: 'bd_step_10',
        title: 'Gạch lát sàn hoa văn cổ điển',
        storyPrompt: 'Sàn nhà sảnh Bưu điện được lát bằng loại gạch nào giữ nguyên vẻ đẹp suốt hơn một thế kỷ?',
        clueVerse: 'Gạch bông hoa văn nét tinh hoa,\nBước chân du khách ngắm ngọc ngà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại gạch lát sàn tại Bưu điện Trung tâm là loại gạch gì?',
          options: [
            'Gạch bông xi măng hoa văn cổ điển (Encaustic cement tile) nhập từ Pháp',
            'Gạch men kính bóng hiện đại',
            'Đá hoa cương nhân tạo',
            'Gạch tàu đỏ thông thường'
          ],
          correctAnswer: 'Gạch bông xi măng hoa văn cổ điển (Encaustic cement tile) nhập từ Pháp',
          explanation: 'Sàn Bưu điện lát gạch bông xi măng cổ điển với hoa văn hình học tinh tế, bóng đẹp và chống trơn trượt hoàn hảo.',
          hintLevel1: 'Gạch bông xi măng hoa văn cổ.',
          hintLevel2: 'Gạch bông cổ điển.',
          hintLevel3: 'Chọn Gạch bông xi măng hoa văn cổ điển...'
        }
      },
      {
        id: 'bd_step_11',
        title: 'Bức chân dung Bác Hồ ở cuối sảnh',
        storyPrompt: 'Ở bức tường trung tâm chính giữa cuối sảnh Bưu điện trang trọng treo tác phẩm nghệ thuật nào?',
        clueVerse: 'Bác Hồ vẫy chào giữa gian phòng,\nNụ cười ấm áp thỏa ước mong.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Vị trí trang trọng cuối sảnh vòm Bưu điện đặt bức hình nào?',
          options: [
            'Chân dung Chủ tịch Hồ Chí Minh mỉm cười vẫy tay chào đồng bào',
            'Bản đồ thế giới hiện đại',
            'Quốc huy Việt Nam',
            'Bức tranh phong cảnh sông Sài Gòn'
          ],
          correctAnswer: 'Chân dung Chủ tịch Hồ Chí Minh mỉm cười vẫy tay chào đồng bào',
          explanation: 'Bức tranh chân dung Bác Hồ hiền từ vẫy tay chào được treo ở vị trí cao nhất cuối sảnh vòm, tạo điểm nhấn ấm áp, thiêng liêng.',
          hintLevel1: 'Hình ảnh Bác Hồ kính yêu.',
          hintLevel2: 'Chân dung Chủ tịch Hồ Chí Minh.',
          hintLevel3: 'Chọn Chân dung Chủ tịch Hồ Chí Minh...'
        }
      },
      {
        id: 'bd_step_12',
        title: 'Quầy bán bưu thiếp và tem thư lưu niệm',
        storyPrompt: 'Hoạt động trải nghiệm được yêu thích nhất của du khách khi đến Bưu điện Trung tâm là gì?',
        clueVerse: 'Dán con tem nhỏ gửi người thân,\nBưu thiếp trao tay nối tình gần.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Du khách có thể mua những tấm bưu thiếp in hình phong cảnh Sài Gòn xưa, dán tem thư và gửi thư đi khắp các quốc gia trên thế giới ngay tại các quầy bưu chính trong sảnh?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Gửi một tấm bưu thiếp tay đóng dấu bưu điện Sài Gòn về cho gia đình, bạn bè là trải nghiệm văn hóa vô cùng ý nghĩa.',
          hintLevel1: 'Dịch vụ bưu chính gửi thư tay truyền thống.',
          hintLevel2: 'Mua bưu thiếp và dán tem.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'bd_step_13',
        title: 'Vị trí địa lý đối diện công trình danh tiếng',
        storyPrompt: 'Bưu điện Trung tâm Thành phố tọa lạc tại Công trường Công xã Paris, nằm ngay đối diện công trình biểu tượng nào?',
        clueVerse: 'Bên kia quảng trường rực nắng hoa,\nTháp chuông Nhà Thờ Đức Bà ngân nga.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Công trình kiến trúc nằm đối diện ngay trước cửa Bưu điện Trung tâm là gì?',
          options: ['Nhà thờ Đức Bà Sài Gòn', 'Chợ Bến Thành', 'Nhà hát Lớn Thành phố', 'Bảo tàng Mỹ thuật'],
          correctAnswer: 'Nhà thờ Đức Bà Sài Gòn',
          explanation: 'Bưu điện Trung tâm và Nhà thờ Đức Bà cùng tọa lạc tại Công trường Công xã Paris, tạo nên cụm di sản kiến trúc vô giá.',
          hintLevel1: 'Ngôi thánh đường gạch đỏ đôi tháp chuông.',
          hintLevel2: 'Nhà thờ Đức Bà.',
          hintLevel3: 'Chọn Nhà thờ Đức Bà Sài Gòn.'
        }
      },
      {
        id: 'bd_step_14',
        title: 'Hệ thống cửa sổ vòm lá sách thông gió',
        storyPrompt: 'Các cửa sổ bao quanh Bưu điện được thiết kế dạng vòm với cửa lá sách gỗ nhằm mục đích gì?',
        clueVerse: 'Cửa lá sách nghiêng đón gió lành,\nChống nắng nhiệt đới mát trong lành.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hệ thống cửa lá sách kết hợp vòm cuốn được KTS thiết kế nhằm mục đích thích ứng với khí hậu gì?',
          options: [
            'Thích ứng với khí hậu nhiệt đới gió mùa nóng ẩm (lấy sáng và thông gió tự nhiên)',
            'Chống tuyết rơi mùa đông',
            'Cách âm tuyệt đối với tiếng ồn xe ngựa',
            'Trang trí thuần túy không mở được'
          ],
          correctAnswer: 'Thích ứng với khí hậu nhiệt đới gió mùa nóng ẩm (lấy sáng và thông gió tự nhiên)',
          explanation: 'Kiến trúc Đông Dương ứng dụng cửa lá sách gỗ để đón gió tự nhiên và che bớt ánh nắng nhiệt đới gay gắt phương Nam.',
          hintLevel1: 'Khí hậu nhiệt đới nóng ẩm Sài Gòn.',
          hintLevel2: 'Thông gió và che nắng nhiệt đới.',
          hintLevel3: 'Chọn Thích ứng với khí hậu nhiệt đới gió mùa...'
        }
      },
      {
        id: 'bd_step_15',
        title: 'Bảo tồn chức năng bưu chính nguyên vẹn',
        storyPrompt: 'Trải qua hơn 130 năm lịch sử, Bưu điện Trung tâm TP.HCM vẫn duy trì:',
        clueVerse: 'Trăm năm lưu giữ chức năng xưa,\nPhục vụ bưu chính sớm chiều người đưa.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Bưu điện Trung tâm TP.HCM là một trong số rất ít công trình di sản kiến trúc cuối thế kỷ 19 ở châu Á vẫn đang hoạt động bưu chính hàng ngày phục vụ người dân và du khách?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tòa nhà không chỉ là điểm tham quan bảo tàng mà vẫn là một bưu điện trung tâm hoạt động gửi thư, hàng hóa và dịch vụ viễn thông sôi động mỗi ngày.',
          hintLevel1: 'Vẫn hoạt động bưu điện thực tế.',
          hintLevel2: 'Di sản sống.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  }
];
