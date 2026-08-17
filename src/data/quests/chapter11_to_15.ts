import { Quest } from '../../types';

export const QUESTS_PART_3: Quest[] = [
  // =========================================================================
  // 11. Đường Sách Nguyễn Văn Bình (TP.HCM) - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_duong_sach',
    locationId: 'loc_duong_sach',
    title: 'Không Gian Tri Thức & Hương Cà Phê Dưới Vòm Me Bay',
    subtitle: 'Khám phá con đường sách kiểu mẫu đầu tiên của Việt Nam, văn hóa đọc tao nhã và các tác phẩm quý hiếm',
    category: 'culture',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_duong_sach',
    loreChapter: 'Chương 11: Trang Sách Dưới Vòm Me Bay',
    steps: [
      {
        id: 'ds_step_1',
        title: 'Chiều dài và vị trí con đường',
        storyPrompt: 'Bước chân dưới tán cây me rợp bóng mát giữa Nhà thờ Đức Bà và Bưu điện TP.HCM:',
        clueVerse: 'Một trăm bốn mươi tư mét đường me bay,\nTrang sách nồng nàn thơm đắm say.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đường sách Nguyễn Văn Bình có chiều dài khoảng bao nhiêu mét?',
          options: ['Khoảng 144 mét', 'Khoảng 500 mét', 'Khoảng 1.000 mét', 'Khoảng 50 mét'],
          correctAnswer: 'Khoảng 144 mét',
          explanation: 'Đường sách TP.HCM dài 144m, lòng đường rộng 8m nối từ đường Hai Bà Trưng đến Công trường Công xã Paris.',
          hintLevel1: 'Dài khoảng 144m.',
          hintLevel2: '144 mét.',
          hintLevel3: 'Chọn Khoảng 144 mét.'
        }
      },
      {
        id: 'ds_step_2',
        title: 'Năm khánh thành đường sách kiểu mẫu',
        storyPrompt: 'Đường sách Nguyễn Văn Bình chính thức khai trương phục vụ bạn đọc vào tháng năm nào?',
        clueVerse: 'Hai nghìn mười sáu mở đường hoa,\nTri thức ngàn năm đọng nước nhà.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm khai trương Đường sách TP.HCM (gợi ý: 201x):',
          correctAnswer: '2016',
          keywords: ['2016'],
          explanation: 'Đường sách chính thức khai trương ngày 9/1/2016, trở thành con đường sách kiểu mẫu đầu tiên của cả nước.',
          hintLevel1: 'Năm 2016.',
          hintLevel2: '2016.',
          hintLevel3: 'Nhập: 2016.'
        }
      },
      {
        id: 'ds_step_3',
        title: 'Loài cây cổ thụ rợp bóng mát',
        storyPrompt: 'Hai hàng cây cổ thụ che bóng mát cho đường sách thuộc loài cây nào gắn liền với ký ức học trò Sài Gòn?',
        clueVerse: 'Lá me bay nhẹ rụng vai mềm,\nBóng mát đường quen đẹp êm đềm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hàng cây cổ thụ xanh mát bao trùm Đường sách Nguyễn Văn Bình là cây gì?',
          options: ['Cây Me (Lá me bay)', 'Cây Xà Cừ', 'Cây Phượng', 'Cây Bàng'],
          correctAnswer: 'Cây Me (Lá me bay)',
          explanation: 'Hàng cây me cổ thụ tỏa bóng mát dịu dàng, tạo nên cảnh "lá me bay" lãng mạn đặc trưng của con đường tri thức.',
          hintLevel1: 'Cây me chua.',
          hintLevel2: 'Cây Me.',
          hintLevel3: 'Chọn Cây Me (Lá me bay).'
        }
      },
      {
        id: 'ds_step_4',
        title: 'Ý nghĩa tên đường Nguyễn Văn Bình',
        storyPrompt: 'Con đường được đặt theo tên của vị chức sắc tôn giáo và nhân sĩ yêu nước nào?',
        clueVerse: 'Tổng Giám mục Nguyễn Văn Bình kính mến,\nSống phúc âm giữa lòng dân tộc này.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên đường được đặt theo tên của Tổng Giám mục nào?',
          options: ['Tổng Giám mục Phaolô Nguyễn Văn Bình', 'Giám mục Bá Đa Lộc', 'Linh mục Đặng Đức Tuấn', 'Hồng y Phanxicô Xaviê'],
          correctAnswer: 'Tổng Giám mục Phaolô Nguyễn Văn Bình',
          explanation: 'Đường mang tên Tổng Giám mục Phaolô Nguyễn Văn Bình (1910-1995), người có nhiều đóng góp trong việc gắn kết đạo và đời.',
          hintLevel1: 'Tổng Giám mục Phaolô Nguyễn Văn Bình.',
          hintLevel2: 'Nguyễn Văn Bình.',
          hintLevel3: 'Chọn Tổng Giám mục Phaolô Nguyễn Văn Bình.'
        }
      },
      {
        id: 'ds_step_5',
        title: 'Xe buýt sách mô hình cổ (Book Bus)',
        storyPrompt: 'Tại Đường sách có mô hình chiếc xe buýt sách mini độc đáo phục vụ điều gì?',
        clueVerse: 'Xe buýt sách xinh đón thiếu nhi,\nĐọc sách miễn phí thỏa đam mê.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tại Đường sách có mô hình chiếc xe buýt sách cổ kính làm trạm dừng đọc sách và thư viện thiếu nhi miễn phí?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Chiếc xe buýt sách là điểm dừng chân thú vị dành cho các em nhỏ và bạn đọc trải nghiệm đọc sách miễn phí.',
          hintLevel1: 'Trạm xe buýt sách cộng đồng.',
          hintLevel2: 'Đọc sách miễn phí cho trẻ em.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ds_step_6',
        title: 'Số lượng gian hàng nhà xuất bản',
        storyPrompt: 'Đường sách quy tụ khoảng bao nhiêu gian hàng cố định của các nhà xuất bản uy tín?',
        clueVerse: 'Hơn hai mươi gian hàng rực rỡ,\nTrưng bày vạn cuốn sách thơm tho.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đường sách Nguyễn Văn Bình quy tụ khoảng bao nhiêu gian hàng xuất bản và cà phê sách?',
          options: ['Hơn 20 gian hàng', 'Chỉ 3 gian', '100 gian', '500 gian'],
          correctAnswer: 'Hơn 20 gian hàng',
          explanation: 'Đường sách có hơn 20 gian hàng của các đơn vị xuất bản hàng đầu như Kim Đồng, Trẻ, Nhã Nam, Fahasa, Phương Nam...',
          hintLevel1: 'Hơn 20 gian hàng.',
          hintLevel2: 'Hơn 20.',
          hintLevel3: 'Chọn Hơn 20 gian hàng.'
        }
      },
      {
        id: 'ds_step_7',
        title: 'Sân khấu tương tác và giao lưu tác giả',
        storyPrompt: 'Khu vực sân khấu mở ở giữa đường sách thường xuyên diễn ra hoạt động gì vào dịp cuối tuần?',
        clueVerse: 'Tác giả giao lưu cùng bạn đọc,\nKý tặng sách mới rộn tiếng cười.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hoạt động giao lưu văn hóa nào thường diễn ra tại sân khấu A và B của Đường sách?',
          options: [
            'Tọa đàm ra mắt sách mới, giao lưu ký tặng của tác giả và triển lãm chuyên đề',
            'Hội chợ nông sản',
            'Đua xe mô tô',
            'Triển lãm thiết bị nặng'
          ],
          correctAnswer: 'Tọa đàm ra mắt sách mới, giao lưu ký tặng của tác giả và triển lãm chuyên đề',
          explanation: 'Hàng tuần nơi đây tổ chức các buổi tọa đàm tác giả tác phẩm, triển lãm tranh ảnh di sản và không gian ký tặng sách hấp dẫn.',
          hintLevel1: 'Ra mắt sách và giao lưu tác giả.',
          hintLevel2: 'Giao lưu ký tặng sách.',
          hintLevel3: 'Chọn Tọa đàm ra mắt sách mới...'
        }
      },
      {
        id: 'ds_step_8',
        title: 'Văn hóa đọc sách kết hợp thưởng thức cà phê',
        storyPrompt: 'Một nét trải nghiệm tao nhã thu hút người dân và du khách tại đường sách là gì?',
        clueVerse: 'Cà phê thơm đượm nhấp từng ngụm,\nLật giở từng trang đắm say lòng.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Đường sách có các không gian cà phê sách ngoài trời dưới bóng cây xanh mát, cho phép thực khách vừa nhâm nhi cà phê vừa đọc những cuốn sách mới mua?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Mô hình kết hợp giữa văn hóa đọc và cà phê thư giãn ngoài trời đã tạo nên sức hút độc đáo cho đường sách.',
          hintLevel1: 'Cà phê sách ngoài trời.',
          hintLevel2: 'Đọc sách và uống cà phê.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ds_step_9',
        title: 'Triển lãm sách cổ và bản đồ quý hiếm',
        storyPrompt: 'Đường sách thường xuyên tổ chức triển lãm các tài liệu quý hiếm nào về lịch sử Sài Gòn?',
        clueVerse: 'Thư tịch cổ xưa nét son đậm,\nBản đồ lịch sử sáng non sông.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tại lòng đường sách thường có các kệ triển lãm tranh ảnh lịch sử, sách báo xuất bản từ đầu thế kỷ 20 và bản đồ cổ khẳng định chủ quyền biển đảo Việt Nam?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Các cuộc triển lãm sách quý, bản đồ cổ Hoàng Sa - Trường Sa và tư liệu lịch sử được tổ chức định kỳ thu hút đông đảo bạn đọc.',
          hintLevel1: 'Triển lãm tư liệu quý hiếm.',
          hintLevel2: 'Bản đồ cổ và sách xưa.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ds_step_10',
        title: 'Không gian cấm phương tiện cơ giới',
        storyPrompt: 'Quy định giao thông tại Đường sách Nguyễn Văn Bình đảm bảo không gian yên tĩnh bằng cách:',
        clueVerse: 'Cấm xe cơ giới chỉ đi bộ,\nKhông gian tĩnh lặng dạ thanh thản.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Quy định lưu thông trên tuyến đường sách là gì?',
          options: [
            'Dành hoàn toàn cho người đi bộ, nghiêm cấm xe máy và ô tô lưu thông 24/7',
            'Cho phép ô tô chạy tốc độ cao',
            'Cho phép xe buýt chạy qua',
            'Là bãi đỗ xe máy công cộng'
          ],
          correctAnswer: 'Dành hoàn toàn cho người đi bộ, nghiêm cấm xe máy và ô tô lưu thông 24/7',
          explanation: 'Đường sách được thiết kế là tuyến phố đi bộ 100%, tạo môi trường an toàn, tĩnh lặng cho việc đọc sách và dạo chơi.',
          hintLevel1: 'Phố đi bộ hoàn toàn.',
          hintLevel2: 'Cấm phương tiện cơ giới.',
          hintLevel3: 'Chọn Dành hoàn toàn cho người đi bộ...'
        }
      },
      {
        id: 'ds_step_11',
        title: 'Hoạt động Ngày Sách Việt Nam 21/4',
        storyPrompt: 'Mỗi năm vào ngày 21/4 (Ngày Sách và Văn hóa Đọc Việt Nam), Đường sách tổ chức sự kiện gì?',
        clueVerse: 'Hội sách rộn ràng tháng tư về,\nTri ân bạn đọc khắp muôn quê.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ngày 21/4 hằng năm tại Việt Nam là ngày gì?',
          options: [
            'Ngày Sách và Văn hóa Đọc Việt Nam',
            'Ngày Quốc tế Lao động',
            'Ngày Thể thao Việt Nam',
            'Ngày Nhà giáo Việt Nam'
          ],
          correctAnswer: 'Ngày Sách và Văn hóa Đọc Việt Nam',
          explanation: 'Ngày 21/4 là Ngày Sách và Văn hóa Đọc Việt Nam (trùng thời điểm ra mắt cuốn sách "Đường Kách mệnh" của Bác Hồ năm 1927).',
          hintLevel1: 'Ngày Sách Việt Nam.',
          hintLevel2: 'Ngày Sách và Văn hóa Đọc.',
          hintLevel3: 'Chọn Ngày Sách và Văn hóa Đọc Việt Nam.'
        }
      },
      {
        id: 'ds_step_12',
        title: 'Khu vực trưng bày tranh ký họa và bưu thiếp',
        storyPrompt: 'Đến đường sách, du khách có thể bắt gặp các nghệ sĩ trẻ vẽ trực tiếp sản phẩm nghệ thuật nào?',
        clueVerse: 'Nét vẽ ký họa góc phố quen,\nBưu thiếp thủ công rạng ánh đèn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Du khách có thể vẽ chân dung ký họa trực tiếp hoặc mua những tấm bưu thiếp vẽ tay cảnh đẹp Sài Gòn từ các họa sĩ trẻ tại đường sách?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Nghệ thuật vẽ tranh ký họa đường phố và thiết kế bưu thiếp lưu niệm là điểm nhấn nghệ thuật trẻ trung tại đây.',
          hintLevel1: 'Tranh ký họa và bưu thiếp vẽ tay.',
          hintLevel2: 'Nghệ thuật đường phố.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'ds_step_13',
        title: 'Kết nối với các di sản kiến trúc xung quanh',
        storyPrompt: 'Đường sách Nguyễn Văn Bình tạo thành tam giác di sản văn hóa độc nhất cùng hai công trình nào?',
        clueVerse: 'Nhà thờ Đức Bà bên tay trái,\nBưu điện Trung tâm đón bước chân.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai công trình di sản thế kỷ 19 nằm ngay hai đầu Đường sách là gì?',
          options: [
            'Nhà thờ Đức Bà Sài Gòn và Bưu điện Trung tâm TP.HCM',
            'Chợ Bến Thành và Nhà hát Lớn',
            'Dinh Độc Lập và Thảo Cầm Viên',
            'Bến Nhà Rồng và Cầu Mống'
          ],
          correctAnswer: 'Nhà thờ Đức Bà Sài Gòn và Bưu điện Trung tâm TP.HCM',
          explanation: 'Đường sách nằm nép mình bên hông Bưu điện Trung tâm và nhìn thẳng sang Nhà thờ Đức Bà, tạo nên một không gian di sản liền mạch.',
          hintLevel1: 'Nhà thờ Đức Bà và Bưu điện Thành phố.',
          hintLevel2: 'Đức Bà và Bưu điện.',
          hintLevel3: 'Chọn Nhà thờ Đức Bà Sài Gòn và Bưu điện Trung tâm TP.HCM.'
        }
      },
      {
        id: 'ds_step_14',
        title: 'Chương trình Đổi sách lấy cây xanh',
        storyPrompt: 'Hoạt động vì môi trường được các bạn trẻ tổ chức thường xuyên tại đường sách tên là gì?',
        clueVerse: 'Tặng sách trao cây xanh mát lành,\nƯơm mầm tri thức vạn ngày xanh.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên phong trào môi trường ý nghĩa thường niên tại Đường sách (chứa từ "Đổi sách lấy cây"):',
          correctAnswer: 'Đổi sách lấy cây',
          keywords: ['đổi sách lấy cây', 'doi sach lay cay'],
          explanation: 'Chương trình "Đổi sách lấy cây xanh" khuyến khích lối sống xanh và lan tỏa tình yêu sách trong cộng đồng.',
          hintLevel1: 'Đổi sách lấy cây.',
          hintLevel2: 'Đổi sách lấy cây.',
          hintLevel3: 'Nhập: Đổi sách lấy cây.'
        }
      },
      {
        id: 'ds_step_15',
        title: 'Biểu tượng văn hóa đọc của thành phố trẻ',
        storyPrompt: 'Đường sách Nguyễn Văn Bình được đánh giá là:',
        clueVerse: 'Trái tim tri thức giữa đô thành,\nLan tỏa tình yêu sách thắm lành.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Đường sách TP.HCM là điểm sáng văn hóa tiêu biểu, góp phần đưa TP. Hồ Chí Minh gia nhập mạng lưới các thành phố học tập toàn cầu của UNESCO?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Đường sách là biểu tượng cho tinh thần ham học hỏi, yêu chuộng tri thức và lối sống thanh lịch của người dân TP.HCM.',
          hintLevel1: 'Điểm sáng văn hóa thành phố.',
          hintLevel2: 'Mạng lưới thành phố học tập UNESCO.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 12. Chợ Xóm Lưới - Vũng Tàu - Level 1 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_cho_xom_luoi',
    locationId: 'loc_cho_xom_luoi',
    title: 'Thiên Đường Hải Sản Tươi Sống & Bếp Nướng Ven Biển',
    subtitle: 'Khám phá chợ đầu mối hải sản ghe thuyền vừa cập bến, thưởng thức ghẹ xanh, tôm tít, hàu nướng mỡ hành tại chỗ',
    category: 'cuisine',
    difficulty: 'Dễ',
    level: 1,
    estimatedMinutes: 15,
    rewardLP: 350,
    badgeId: 'badge_cho_xom_luoi',
    loreChapter: 'Chương 12: Mặn Mòi Vị Biển Xóm Lưới',
    steps: [
      {
        id: 'cxl_step_1',
        title: 'Vị trí góc đường chợ Xóm Lưới',
        storyPrompt: 'Bước vào con hẻm rộn ràng mùi thơm nướng hải sản của Chợ Xóm Lưới:',
        clueVerse: 'Phan Bội Châu gặp Nguyễn Công Trứ,\nGóc chợ hải sản rạng danh truyền.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chợ Xóm Lưới Vũng Tàu tọa lạc tại góc ngã tư hai tuyến đường nào?',
          options: ['Đường Phan Bội Châu giao với Nguyễn Công Trứ', 'Đường Thùy Vân giao với Hoàng Hoa Thám', 'Đường Hạ Long giao với Trần Phú', 'Đường Lê Lợi giao với Ba Cu'],
          correctAnswer: 'Đường Phan Bội Châu giao với Nguyễn Công Trứ',
          explanation: 'Chợ Xóm Lưới nằm ở góc đường Phan Bội Châu và Nguyễn Công Trứ (Phường 2, TP. Vũng Tàu), gần khu vực Bãi Trước.',
          hintLevel1: 'Góc đường Phan Bội Châu - Nguyễn Công Trứ.',
          hintLevel2: 'Phan Bội Châu và Nguyễn Công Trứ.',
          hintLevel3: 'Chọn Đường Phan Bội Châu giao với Nguyễn Công Trứ.'
        }
      },
      {
        id: 'cxl_step_2',
        title: 'Thời điểm ghe thuyền cập bến tôm cá tươi nhất',
        storyPrompt: 'Thời gian lý tưởng nhất trong ngày để mua được hải sản vừa bốc dỡ từ thuyền đánh bắt gần bờ là khi nào?',
        clueVerse: 'Ba bốn giờ chiều ghe cập bến,\nTôm nhảy ghẹ bơi rạng nắng vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Khung giờ nào chợ Xóm Lưới có hải sản tươi ngon và nhộn nhịp nhất?',
          options: ['Khoảng 15h00 đến 17h00 chiều', '12h00 đêm', '6h00 sáng sớm', '12h00 trưa nắng gắt'],
          correctAnswer: 'Khoảng 15h00 đến 17h00 chiều',
          explanation: 'Tầm 15h - 17h chiều là lúc các ghe lưới đánh bắt gần bờ của ngư dân Bãi Trước cập bến mang hải sản tươi sống đổ về chợ.',
          hintLevel1: 'Khoảng 3h - 5h chiều.',
          hintLevel2: '15h00 đến 17h00 chiều.',
          hintLevel3: 'Chọn Khoảng 15h00 đến 17h00 chiều.'
        }
      },
      {
        id: 'cxl_step_3',
        title: 'Dịch vụ chế biến hấp nướng tại chỗ',
        storyPrompt: 'Nét đặc trưng hấp dẫn nhất của chợ Xóm Lưới đối với du khách là gì?',
        clueVerse: 'Mua ghẹ tươi sống luộc liền tay,\nNướng mỡ hành thơm nức phố này.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Du khách có thể tự tay chọn hải sản tươi sống trong thau rồi thuê các quầy bếp nướng mỡ hành, nướng phô mai, hấp sả ớt lấy liền chỉ với giá từ 15.000đ - 30.000đ/phần?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Dịch vụ chế biến hải sản tại chỗ nhanh chóng, nóng hổi kèm nước chấm muối ớt xanh là trải nghiệm số 1 tại chợ Xóm Lưới.',
          hintLevel1: 'Chế biến ăn liền tại quầy.',
          hintLevel2: 'Hấp nướng tại chỗ.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cxl_step_4',
        title: 'Loại ghẹ đặc sản thịt chắc ngọt',
        storyPrompt: 'Loại ghẹ biển bán chạy nhất tại chợ Xóm Lưới với mai xanh có đốm hoa văn trắng là gì?',
        clueVerse: 'Ghẹ xanh chắc thịt ngọt đậm đà,\nChấm muối tiêu chanh thắm tình ta.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên loại ghẹ biển nổi tiếng thịt chắc và ngọt nhất bán tại chợ Xóm Lưới (chứa từ "Ghẹ xanh"):',
          correctAnswer: 'Ghẹ xanh',
          keywords: ['ghẹ xanh', 'ghe xanh'],
          explanation: 'Ghẹ xanh Vũng Tàu nổi tiếng với thịt ngọt đậm đà, chắc nịch, nhiều gạch vàng ươm.',
          hintLevel1: 'Ghẹ có màu xanh biếc.',
          hintLevel2: 'Ghẹ xanh.',
          hintLevel3: 'Nhập: Ghẹ xanh.'
        }
      },
      {
        id: 'cxl_step_5',
        title: 'Tôm tít (Bề bề) hấp sả gừng',
        storyPrompt: 'Loại hải sản thân giáp nhiều chân thịt dai giòn ngọt bùi còn có tên gọi dân gian là gì?',
        clueVerse: 'Tôm tít vỏ cứng thịt thơm lừng,\nHấp sả ớt cay dạ ngập ngừng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Con tôm tít (tôm tích) ở miền Bắc còn được gọi bằng tên gọi nào?',
          options: ['Bề bề (hoặc con thuyền)', 'Tôm hùm', 'Tôm sú', 'Tôm càng xanh'],
          correctAnswer: 'Bề bề (hoặc con thuyền)',
          explanation: 'Tôm tít (miền Bắc gọi là con bề bề) là món hải sản hấp sả gừng vô cùng được ưa chuộng tại Vũng Tàu.',
          hintLevel1: 'Con bề bề.',
          hintLevel2: 'Bề bề.',
          hintLevel3: 'Chọn Bề bề (hoặc con thuyền).'
        }
      },
      {
        id: 'cxl_step_6',
        title: 'Nước chấm muối ớt xanh thần thánh',
        storyPrompt: 'Loại nước chấm không thể thiếu tôn vinh vị ngọt của hải sản nướng tại Vũng Tàu là gì?',
        clueVerse: 'Muối ớt xanh cay nồng chua ngọt,\nQuyện cùng tôm cá ấm lòng người.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại gia vị nước chấm đặc sản phương Nam dùng kèm hải sản là gì?',
          options: ['Muối ớt xanh (ớt xiêm xanh sữa đặc chanh)', 'Nước tương đen', 'Mắm tôm', 'Tương cà chua'],
          correctAnswer: 'Muối ớt xanh (ớt xiêm xanh sữa đặc chanh)',
          explanation: 'Nước xốt muối ớt xiêm xanh pha sữa đặc, chanh và đường có vị cay nồng, sánh mịn kích thích trọn vẹn vị giác.',
          hintLevel1: 'Muối ớt xanh.',
          hintLevel2: 'Muối ớt xanh.',
          hintLevel3: 'Chọn Muối ớt xanh (ớt xiêm xanh sữa đặc chanh).'
        }
      },
      {
        id: 'cxl_step_7',
        title: 'Món Mực trứng nướng sa tế',
        storyPrompt: 'Những con mực nhỏ trong bụng đầy ắp trứng béo ngậy được tẩm ướp nướng trên than hồng tên là gì?',
        clueVerse: 'Mực trứng nướng sa tế thơm lừng,\nThan hồng tí tách dạ bâng khuâng.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên món mực đặc sản bụng đầy ắp trứng béo bùi (chứa từ "Mực trứng"):',
          correctAnswer: 'Mực trứng',
          keywords: ['mực trứng', 'muc trung'],
          explanation: 'Mực trứng (mực cơm) tươi rói nướng sa tế trên than hồng giữ trọn vị ngọt thơm và bùi béo của bọc trứng.',
          hintLevel1: 'Mực có trứng bên trong.',
          hintLevel2: 'Mực trứng.',
          hintLevel3: 'Nhập: Mực trứng.'
        }
      },
      {
        id: 'cxl_step_8',
        title: 'Ốc hương nướng muối ớt / xào bơ tỏi',
        storyPrompt: 'Loại ốc biển cao cấp có hoa văn chấm nâu tròn, khi chín tỏa mùi thơm tự nhiên như lá dứa là ốc gì?',
        clueVerse: 'Ốc hương nướng muối thơm ngào ngạt,\nThịt giòn sần sật thắm tình quê.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Loại ốc biển hảo hạng có mùi thơm đặc trưng tên là gì?',
          options: ['Ốc hương', 'Ốc bươu vàng', 'Ốc vặn', 'Ốc nhồi'],
          correctAnswer: 'Ốc hương',
          explanation: 'Ốc hương Vũng Tàu thịt giòn ngọt, khi nướng tỏa ra mùi thơm ngát tự nhiên quyến rũ.',
          hintLevel1: 'Ốc tỏa mùi hương thơm.',
          hintLevel2: 'Ốc hương.',
          hintLevel3: 'Chọn Ốc hương.'
        }
      },
      {
        id: 'cxl_step_9',
        title: 'Nguồn gốc hình thành tên gọi Xóm Lưới',
        storyPrompt: 'Tên gọi "Xóm Lưới" xuất phát từ lịch sử khai khẩn nào của phố biển Vũng Tàu?',
        clueVerse: 'Xóm dân chài đan lưới bên sông,\nNgàn năm bám biển giữ non sông.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Địa danh "Xóm Lưới" bắt nguồn từ đâu?',
          options: [
            'Khu dân cư làng chài truyền thống chuyên nghề đan lưới, vá lưới và đi biển của ngư dân xưa',
            'Tên một xưởng may công nghiệp',
            'Nơi giăng lưới bắt chim rừng',
            'Tên một đồn biên phòng'
          ],
          correctAnswer: 'Khu dân cư làng chài truyền thống chuyên nghề đan lưới, vá lưới và đi biển của ngư dân xưa',
          explanation: 'Xưa kia nơi đây là xóm tập trung các gia đình ngư dân làm nghề đan lưới, gỡ cá sau mỗi chuyến ra khơi đánh bắt.',
          hintLevel1: 'Xóm làm nghề đan lưới đánh cá.',
          hintLevel2: 'Làng chài đan lưới.',
          hintLevel3: 'Chọn Khu dân cư làng chài truyền thống chuyên nghề đan lưới...'
        }
      },
      {
        id: 'cxl_step_10',
        title: 'Hàu nướng phô mai / mỡ hành béo ngậy',
        storyPrompt: 'Món hải sản vỏ dày ruột mềm béo ngậy thường được nướng cùng phô mai hoặc mỡ hành đậu phộng là gì?',
        clueVerse: 'Hàu sữa nướng phô mai thơm phức,\nBéo ngậy đậm đà ấm lòng ai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món ăn hải sản giàu kẽm, béo ngậy nướng mỡ hành rất được lòng thực khách là món gì?',
          options: ['Hàu sữa nướng (phô mai hoặc mỡ hành)', 'Cá tra kho tộ', 'Thịt heo quay', 'Gà nướng lu'],
          correctAnswer: 'Hàu sữa nướng (phô mai hoặc mỡ hành)',
          explanation: 'Hàu sữa Long Sơn và Vũng Tàu tươi rói nướng phô mai tan chảy béo ngậy hoặc nướng mỡ hành đậu phộng rang giòn thơm lừng.',
          hintLevel1: 'Con hàu sữa.',
          hintLevel2: 'Hàu nướng.',
          hintLevel3: 'Chọn Hàu sữa nướng (phô mai hoặc mỡ hành).'
        }
      },
      {
        id: 'cxl_step_11',
        title: 'Mẹo lựa chọn ghẹ cái hay ghẹ đực',
        storyPrompt: 'Theo kinh nghiệm của ngư dân chợ Xóm Lưới, nếu muốn ăn ghẹ nhiều gạch ta nên chọn ghẹ nào?',
        clueVerse: 'Yếm vuông ghẹ cái đầy gạch đỏ,\nYếm nhọn ghẹ đực chắc nạc ngon.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Kinh nghiệm chọn ghẹ: Ghẹ có yếm hình bán nguyệt (yếm vuông to) là ghẹ gì và chứa nhiều gì?',
          options: [
            'Ghẹ cái (chứa nhiều gạch son)',
            'Ghẹ đực (chứa nhiều thịt nạc)',
            'Ghẹ không ăn được',
            'Ghẹ lột vỏ'
          ],
          correctAnswer: 'Ghẹ cái (chứa nhiều gạch son)',
          explanation: 'Ghẹ cái có yếm to hình bán nguyệt chứa nhiều gạch bùi béo; ghẹ đực yếm nhỏ hình chữ Y sắc nhọn thì nhiều thịt nạc chắc.',
          hintLevel1: 'Ghẹ cái yếm to nhiều gạch.',
          hintLevel2: 'Ghẹ cái nhiều gạch.',
          hintLevel3: 'Chọn Ghẹ cái (chứa nhiều gạch son).'
        }
      },
      {
        id: 'cxl_step_12',
        title: 'Dịch vụ đóng thùng xốp ướp đá mang về',
        storyPrompt: 'Đối với du khách từ TP.HCM hoặc các tỉnh xa, các tiểu thương chợ Xóm Lưới phục vụ:',
        clueVerse: 'Thùng xốp ướp đá giữ tươi nguyên,\nVề đến đất liền vẫn vẹn nguyên.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các sạp hải sản chợ Xóm Lưới có dịch vụ đóng thùng xốp bảo quản bằng đá lạnh miễn phí, giữ hải sản tươi sống suốt 6-10 tiếng di chuyển đường dài?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Đóng thùng xốp ướp đá giúp hải sản giữ nguyên độ tươi ngon khi mang về làm quà cho người thân.',
          hintLevel1: 'Đóng thùng xốp ướp đá.',
          hintLevel2: 'Bảo quản tươi mang về.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cxl_step_13',
        title: 'Món Sò điệp nướng trứng cút',
        storyPrompt: 'Món ăn vặt đường phố độc đáo tại chợ nướng sò điệp cùng với quả trứng nhỏ xíu tên là gì?',
        clueVerse: 'Sò điệp đập thêm trứng cút vào,\nNướng than thơm nức đón trăng sao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Món sò điệp nướng cùng loại trứng nào là món ăn vặt khoái khẩu của giới trẻ tại Vũng Tàu?',
          options: ['Trứng cút', 'Trứng vịt lộn', 'Trứng đà điểu', 'Trứng ngỗng'],
          correctAnswer: 'Trứng cút',
          explanation: 'Sò điệp nướng trứng cút thêm mỡ hành và tóp mỡ giòn rụm là món ăn vặt đường phố thơm ngon khó cưỡng.',
          hintLevel1: 'Trứng con chim cút.',
          hintLevel2: 'Trứng cút.',
          hintLevel3: 'Chọn Trứng cút.'
        }
      },
      {
        id: 'cxl_step_14',
        title: 'Khoảng cách từ Chợ Xóm Lưới ra Bãi Trước',
        storyPrompt: 'Từ chợ Xóm Lưới đi bộ ra bờ biển Bãi Trước ngắm hoàng hôn mất khoảng bao lâu?',
        clueVerse: 'Chỉ vài bước chân ra mé biển,\nNgắm hoàng hôn buông đẹp tuyệt vời.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Chợ Xóm Lưới cách công viên Bãi Trước khoảng bao xa?',
          options: ['Khoảng 500m (5-7 phút đi bộ)', 'Cách 20 km', 'Cách 50 km', 'Nằm ở đỉnh núi'],
          correctAnswer: 'Khoảng 500m (5-7 phút đi bộ)',
          explanation: 'Chợ chỉ cách công viên Bãi Trước và đường Quang Trung khoảng 500m, rất thuận tiện để vừa mua hải sản vừa ra biển dạo mát.',
          hintLevel1: 'Khoảng 500m.',
          hintLevel2: '500 mét.',
          hintLevel3: 'Chọn Khoảng 500m (5-7 phút đi bộ).'
        }
      },
      {
        id: 'cxl_step_15',
        title: 'Nét đẹp văn hóa hào sảng của dân chài',
        storyPrompt: 'Điều gì tạo nên ấn tượng thân thương khó quên nhất đối với du khách khi ghé chợ Xóm Lưới?',
        clueVerse: 'Nụ cười tươi tắn cô bán hàng,\nGiọng nói hào sảng đậm tình thương.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nét hào sảng, thật thà, vui vẻ và hiếu khách của những người con làng chài Vũng Tàu là nét đẹp văn hóa làm ấm lòng du khách bốn phương?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tinh thần cởi mở, mộc mạc và chân thành của người dân miền biển là giá trị tinh thần đẹp đẽ nhất.',
          hintLevel1: 'Sự hào sảng của dân chài.',
          hintLevel2: 'Văn hóa hiếu khách.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 13. Làng Sơn Mài Tương Bình Hiệp (Bình Dương) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_son_mai_tuong_binh_hiep',
    locationId: 'loc_son_mai_tuong_binh_hiep',
    title: 'Bí Quyết 25 Công Đoạn Mài Nước & Di Sản Cẩn Vỏ Trứng',
    subtitle: 'Tìm hiểu cái nôi sơn mài phương Nam hơn 200 năm, nghệ thuật cẩn ốc xà cừ, dát vàng thếp bạc và mài bóng như gương',
    category: 'culture',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_son_mai_tuong_binh_hiep',
    loreChapter: 'Chương 13: Sắc Son Tương Bình Hiệp',
    steps: [
      {
        id: 'sm_step_1',
        title: 'Lịch sử hình thành làng nghề',
        storyPrompt: 'Đến với làng nghề cổ Tương Bình Hiệp nép mình bên dòng rạch Thủ Dầu Một:',
        clueVerse: 'Hơn hai thế kỷ dựng cơ đồ,\nNghệ nhân đất Thủ sáng bài thơ.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Làng nghề sơn mài Tương Bình Hiệp đã hình thành và phát triển từ khoảng thời gian nào?',
          options: ['Thế kỷ 18 (Hơn 200 năm trước)', 'Thế kỷ 21 mới đây', 'Thế kỷ 10 thời Lý', 'Năm 1990'],
          correctAnswer: 'Thế kỷ 18 (Hơn 200 năm trước)',
          explanation: 'Làng nghề hình thành từ nửa đầu thế kỷ 18 khi các bậc tiền hiền di cư từ miền Trung vào khai phá đất Thủ.',
          hintLevel1: 'Từ thế kỷ 18.',
          hintLevel2: 'Hơn 200 năm.',
          hintLevel3: 'Chọn Thế kỷ 18 (Hơn 200 năm trước).'
        }
      },
      {
        id: 'sm_step_2',
        title: 'Số công đoạn thủ công công phu',
        storyPrompt: 'Để hoàn thiện một tác phẩm tranh hoặc bình phong sơn mài truyền thống đòi hỏi trải qua bao nhiêu công đoạn?',
        clueVerse: 'Hai mươi lăm bước mài trong nước,\nCông phu tỉ mỉ mới thành hình.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Một sản phẩm sơn mài Tương Bình Hiệp truyền thống phải trải qua ít nhất bao nhiêu công đoạn chế tác khắt khe?',
          options: ['25 công đoạn', '3 công đoạn', '5 công đoạn', '50 công đoạn'],
          correctAnswer: '25 công đoạn',
          explanation: 'Mỗi tác phẩm sơn mài đòi hỏi từ 25 công đoạn tỉ mỉ từ làm mộc cốt, hom bó, sơn lót, cẩn trứng/ốc, vẽ then, phủ bóng đến mài nước nhiều lần.',
          hintLevel1: '25 công đoạn.',
          hintLevel2: '25 bước.',
          hintLevel3: 'Chọn 25 công đoạn.'
        }
      },
      {
        id: 'sm_step_3',
        title: 'Kỹ thuật cẩn vỏ trứng độc đáo',
        storyPrompt: 'Chất liệu tự nhiên nào được các nghệ nhân dùng để tạo màu trắng ngà lấp lánh cho tranh sơn mài?',
        clueVerse: 'Vỏ trứng vịt nướng cẩn vào then,\nTrắng ngà lấp lánh ánh hoa đèn.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nguyên liệu tự nhiên dùng tạo mảng màu trắng ngà trong tranh sơn mài (chứa từ "vỏ trứng"):',
          correctAnswer: 'Vỏ trứng',
          keywords: ['vỏ trứng', 'vo trung', 'vỏ trứng vịt'],
          explanation: 'Vỏ trứng vịt hoặc trứng gà được làm sạch, ủ nung nhẹ để tạo độ rạn và độ đậm nhạt rồi dùng keo gắn từng mảnh nhỏ li ti lên bề mặt tranh.',
          hintLevel1: 'Vỏ trứng.',
          hintLevel2: 'Vỏ trứng vịt.',
          hintLevel3: 'Nhập: Vỏ trứng.'
        }
      },
      {
        id: 'sm_step_4',
        title: 'Cây sơn ta lấy mủ tự nhiên',
        storyPrompt: 'Chất liệu nhựa sơn truyền thống dùng phủ lên tranh được lấy từ loài cây nào trồng nhiều ở Phú Thọ?',
        clueVerse: 'Nhựa sơn ta dẻo quánh tự nhiên,\nBóng sâu ngàn thu chẳng đổi phai.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nhựa sơn tự nhiên hảo hạng dùng trong tranh sơn mài truyền thống được lấy từ cây gì?',
          options: ['Cây Sơn ta (Toxicodendron succedaneum)', 'Cây Cao su', 'Cây Thông nhựa', 'Cây Tre'],
          correctAnswer: 'Cây Sơn ta (Toxicodendron succedaneum)',
          explanation: 'Nhựa cây sơn ta có độ bóng sâu thẳm, độ kết dính cực cao và bền bỉ vĩnh cửu với thời gian.',
          hintLevel1: 'Cây Sơn ta.',
          hintLevel2: 'Sơn ta.',
          hintLevel3: 'Chọn Cây Sơn ta (Toxicodendron succedaneum).'
        }
      },
      {
        id: 'sm_step_5',
        title: 'Công đoạn mài nước đặc trưng',
        storyPrompt: 'Tại sao tranh sơn mài lại được gọi là "Sơn mài"?',
        clueVerse: 'Sơn rồi lại mài dưới làn nước,\nHiện dần nét vẽ tựa như mơ.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Điểm khác biệt căn bản giữa tranh sơn mài và các loại tranh sơn dầu/màu nước khác là gì?',
          options: [
            'Họa sĩ vẽ và phủ nhiều lớp sơn then, vàng bạc rồi phải mài trong nước để các lớp màu ẩn hiện theo ý muốn',
            'Chỉ dùng bút lông chấm màu lên vải',
            'In bằng máy in công nghiệp',
            'Dán giấy màu cắt dán'
          ],
          correctAnswer: 'Họa sĩ vẽ và phủ nhiều lớp sơn then, vàng bạc rồi phải mài trong nước để các lớp màu ẩn hiện theo ý muốn',
          explanation: 'Thuật ngữ "Sơn mài" bắt nguồn từ kỹ thuật phủ nhiều lớp sơn son thếp vàng rồi mài phẳng trong nước bằng giấy nhám và than củi.',
          hintLevel1: 'Phủ sơn rồi mài trong nước.',
          hintLevel2: 'Kỹ thuật mài nước.',
          hintLevel3: 'Chọn Họa sĩ vẽ và phủ nhiều lớp sơn then...'
        }
      },
      {
        id: 'sm_step_6',
        title: 'Danh hiệu Di sản văn hóa phi vật thể',
        storyPrompt: 'Nghề sơn mài Tương Bình Hiệp được Bộ Văn hóa, Thể thao và Du lịch vinh danh là Di sản văn hóa phi vật thể quốc gia vào năm nào?',
        clueVerse: 'Hai nghìn mười sáu rạng danh son,\nDi sản quốc gia rạng nước non.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nhập năm nghề sơn mài Tương Bình Hiệp được công nhận Di sản phi vật thể quốc gia (gợi ý: 201x):',
          correctAnswer: '2016',
          keywords: ['2016'],
          explanation: 'Năm 2016, Nghề sơn mài Tương Bình Hiệp chính thức được ghi danh vào Danh mục Di sản văn hóa phi vật thể quốc gia.',
          hintLevel1: 'Năm 2016.',
          hintLevel2: '2016.',
          hintLevel3: 'Nhập: 2016.'
        }
      },
      {
        id: 'sm_step_7',
        title: 'Triển lãm quốc tế Paris 1937',
        storyPrompt: 'Tranh và sản phẩm sơn mài Tương Bình Hiệp từng được đưa đi triển lãm quốc tế và gây tiếng vang lớn tại đâu vào năm 1937?',
        clueVerse: 'Hội chợ Paris vang tiếng tăm,\nSơn mài đất Thủ rạng muôn năm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Năm 1937, sơn mài Bình Dương đã được vinh danh tại hội chợ quốc tế nào?',
          options: ['Hội chợ Quốc tế Paris (Pháp)', 'Hội chợ New York', 'Hội chợ Tokyo', 'Hội chợ London'],
          correctAnswer: 'Hội chợ Quốc tế Paris (Pháp)',
          explanation: 'Năm 1937, các tác phẩm sơn mài Tương Bình Hiệp đã tham dự Hội chợ triển lãm quốc tế tại Paris và nhận được nhiều lời khen ngợi của bạn bè quốc tế.',
          hintLevel1: 'Thủ đô Paris nước Pháp.',
          hintLevel2: 'Hội chợ Paris.',
          hintLevel3: 'Chọn Hội chợ Quốc tế Paris (Pháp).'
        }
      },
      {
        id: 'sm_step_8',
        title: 'Chất liệu lá vàng lá bạc thật',
        storyPrompt: 'Để tạo độ lấp lánh sang trọng cho các chi tiết ánh trăng, cung điện, nghệ nhân dùng:',
        clueVerse: 'Vàng quỳ bạc quỳ dát mỏng tanh,\nLấp lánh hào quang sáng mộng lành.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Các tác phẩm sơn mài cao cấp sử dụng vàng quỳ 24K và bạc quỳ nguyên chất dát mỏng để tạo độ sáng và chiều sâu quang học?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Vàng và bạc quỳ nguyên chất dát mỏng khi được phủ lớp sơn cánh gián và mài nước sẽ ánh lên sắc màu ấm áp, huyền ảo.',
          hintLevel1: 'Dát vàng quỳ và bạc quỳ.',
          hintLevel2: 'Vàng 24k và bạc thật.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'sm_step_9',
        title: 'Vật liệu làm cốt mộc',
        storyPrompt: 'Phần khung cốt bên trong của sản phẩm sơn mài thường được làm bằng loại gỗ hoặc chất liệu nào để không bị cong vênh?',
        clueVerse: 'Gỗ mít gỗ sao sấy kỹ càng,\nHom vải bọc quanh vững sắc vàng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cốt gỗ làm sơn mài đòi hỏi phải xử lý như thế nào?',
          options: [
            'Gỗ khô được ngâm sấy chống mối mọt và bọc vải màn kết hợp bột đá để chống nứt',
            'Dùng gỗ tươi còn đọng nước',
            'Dùng bìa carton mềm',
            'Dùng xốp cách nhiệt'
          ],
          correctAnswer: 'Gỗ khô được ngâm sấy chống mối mọt và bọc vải màn kết hợp bột đá để chống nứt',
          explanation: 'Khâu làm mộc và bọc vải màn (hom bó) nhiều lớp là nền tảng cốt lõi giúp sơn mài không bị nứt vỡ trong điều kiện khí hậu thay đổi.',
          hintLevel1: 'Gỗ sấy bọc vải màn và bột đá.',
          hintLevel2: 'Hom bó kỹ lưỡng.',
          hintLevel3: 'Chọn Gỗ khô được ngâm sấy chống mối mọt...'
        }
      },
      {
        id: 'sm_step_10',
        title: 'Chất liệu cẩn xà cừ (ốc cửu khổng)',
        storyPrompt: 'Các mảnh ốc xà cừ óng ánh 7 sắc cầu vồng cẩn trên tranh sơn mài được khai thác từ loài ốc nào?',
        clueVerse: 'Ốc đỏ ốc xà cừ óng ả,\nBảy sắc cầu vồng rạng biển xa.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên chất liệu vỏ sò ốc óng ánh cầu vồng cẩn trên tranh gỗ (chứa từ "xà cừ" hoặc "vỏ ốc"):',
          correctAnswer: 'Xà cừ',
          keywords: ['xà cừ', 'xa cu', 'vỏ ốc', 'ốc xà cừ'],
          explanation: 'Xà cừ từ vỏ ốc biển (ốc xà cừ, ốc cửu khổng) có khả năng khúc xạ ánh sáng 7 màu rực rỡ dưới các góc nhìn khác nhau.',
          hintLevel1: 'Chất liệu xà cừ.',
          hintLevel2: 'Xà cừ.',
          hintLevel3: 'Nhập: Xà cừ.'
        }
      },
      {
        id: 'sm_step_11',
        title: 'Đề tài tranh sơn mài truyền thống',
        storyPrompt: 'Đề tài sáng tác kinh điển được các nghệ nhân Tương Bình Hiệp ưa chuộng nhất là:',
        clueVerse: 'Cây đa bến nước mái đình xưa,\nBình phong tứ quý nắng ban trưa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Các chủ đề quen thuộc nhất trong tranh sơn mài Tương Bình Hiệp là gì?',
          options: [
            'Phong cảnh làng quê Việt Nam, thiếu nữ áo dài, Tứ quý (Mai Lan Trúc Cúc), Tùng hạc diên niên',
            'Tàu vũ trụ viễn tưởng',
            'Robot công nghiệp',
            'Đua xe F1'
          ],
          correctAnswer: 'Phong cảnh làng quê Việt Nam, thiếu nữ áo dài, Tứ quý (Mai Lan Trúc Cúc), Tùng hạc diên niên',
          explanation: 'Nghệ nhân tập trung khắc họa vẻ đẹp êm đềm của quê hương đất nước, nét thanh tao của người phụ nữ Việt Nam và các biểu tượng cát tường.',
          hintLevel1: 'Làng quê, thiếu nữ áo dài, Tứ quý.',
          hintLevel2: 'Đề tài truyền thống dân tộc.',
          hintLevel3: 'Chọn Phong cảnh làng quê Việt Nam...'
        }
      },
      {
        id: 'sm_step_12',
        title: 'Thời gian ủ khô sơn trong buồng kín',
        storyPrompt: 'Một nghịch lý thú vị trong kỹ thuật sơn mài: Sơn ta muốn khô nhanh lại cần môi trường như thế nào?',
        clueVerse: 'Ủ trong buồng ẩm tối om om,\nCàng ẩm càng mau cứng tựa đồng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Sơn ta khô bằng phản ứng oxy hóa cần điều kiện môi trường nào trong buồng ủ sơn?',
          options: [
            'Môi trường có độ ẩm cao (80-90%) và kín gió, không có ánh nắng trực tiếp',
            'Sấy dưới lò than nóng 100 độ C',
            'Phơi dưới nắng gắt trưa hè',
            'Để trước quạt gió tốc độ cao'
          ],
          correctAnswer: 'Môi trường có độ ẩm cao (80-90%) và kín gió, không có ánh nắng trực tiếp',
          explanation: 'Chất men laccase trong sơn ta hoạt động mạnh nhất trong môi trường ẩm ướt và bóng tối để làm đông cứng màng sơn.',
          hintLevel1: 'Môi trường ẩm cao và kín gió.',
          hintLevel2: 'Độ ẩm 80-90% trong bóng râm.',
          hintLevel3: 'Chọn Môi trường có độ ẩm cao...'
        }
      },
      {
        id: 'sm_step_13',
        title: 'Bột chu sa tạo màu đỏ son',
        storyPrompt: 'Màu đỏ tươi thắm truyền thống (màu son) trong tranh sơn mài được pha chế từ khoáng chất tự nhiên nào?',
        clueVerse: 'Chu sa màu đỏ rực như son,\nTrải mấy trăm năm chẳng hao mòn.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên khoáng chất tự nhiên dùng tạo màu đỏ son rực rỡ trong sơn mài (chứa từ "Chu sa" hoặc "Thần sa"):',
          correctAnswer: 'Chu sa',
          keywords: ['chu sa', 'thần sa', 'khoáng chu sa'],
          explanation: 'Chu sa (khoáng vật cinnabar) được nghiền mịn pha cùng sơn cánh gián tạo nên màu đỏ son tươi tắn, không bao giờ phai.',
          hintLevel1: 'Chu sa.',
          hintLevel2: 'Bột chu sa.',
          hintLevel3: 'Nhập: Chu sa.'
        }
      },
      {
        id: 'sm_step_14',
        title: 'Vị trí làng nghề trên bản đồ du lịch',
        storyPrompt: 'Làng sơn mài Tương Bình Hiệp hiện nay thuộc đơn vị hành chính nào?',
        clueVerse: 'Tương Bình Hiệp đất Thủ yêu thương,\nLàng nghề đón khách khắp muôn phương.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Làng nghề sơn mài Tương Bình Hiệp thuộc phường nào của TP. Thủ Dầu Một?',
          options: ['Phường Tương Bình Hiệp', 'Phường Chánh Mỹ', 'Phường Tân An', 'Phường Lái Thiêu'],
          correctAnswer: 'Phường Tương Bình Hiệp',
          explanation: 'Làng nghề nằm trọn trong địa bàn Phường Tương Bình Hiệp, cách trung tâm TP. Thủ Dầu Một khoảng 5km.',
          hintLevel1: 'Phường Tương Bình Hiệp.',
          hintLevel2: 'Tương Bình Hiệp.',
          hintLevel3: 'Chọn Phường Tương Bình Hiệp.'
        }
      },
      {
        id: 'sm_step_15',
        title: 'Bảo tồn và truyền lửa thế hệ trẻ',
        storyPrompt: 'Để gìn giữ tinh hoa sơn mài, tỉnh Bình Dương đã triển khai đề án:',
        clueVerse: 'Giữ lửa cha ông truyền cháu con,\nSơn mài đất Thủ mãi vẹn tròn.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Tỉnh Bình Dương đã xây dựng Đề án bảo tồn và phát triển làng nghề sơn mài Tương Bình Hiệp kết hợp du lịch trải nghiệm làng nghề truyền thống?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Đề án bảo tồn làng nghề gắn liền với du lịch di sản giúp truyền dạy nghề cho thế hệ trẻ và quảng bá sản phẩm ra toàn cầu.',
          hintLevel1: 'Bảo tồn gắn với du lịch di sản.',
          hintLevel2: 'Truyền lửa thế hệ trẻ.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 14. Đờn Ca Tài Tử Nam Bộ (UNESCO) - Level 2 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_don_ca_tai_tu',
    locationId: 'loc_don_ca_tai_tu',
    title: 'Bản Hòa Tấu Ngũ Tuyệt & 20 Bài Bản Tổ Kinh Điển',
    subtitle: 'Khám phá Di sản văn hóa phi vật thể đại diện của nhân loại (UNESCO), bộ ngũ tuyệt nhạc cụ và nét tài hoa phương Nam',
    category: 'traditional_art',
    difficulty: 'Trung bình',
    level: 2,
    estimatedMinutes: 18,
    rewardLP: 400,
    badgeId: 'badge_don_ca_tai_tu',
    loreChapter: 'Chương 14: Cung Tơ Tiếng Trúc Phương Nam',
    steps: [
      {
        id: 'dctt_step_1',
        title: 'Năm UNESCO ghi danh Di sản nhân loại',
        storyPrompt: 'Lắng nghe cung đàn kìm trầm bổng hòa nhịp đàn tranh thánh thót giữa miền sông nước:',
        clueVerse: 'Hai nghìn mười ba rạng tiếng tơ,\nUNESCO vinh danh thỏa ước mơ.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nghệ thuật Đờn Ca Tài Tử Nam Bộ được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm nào (gợi ý: 201x)?',
          correctAnswer: '2013',
          keywords: ['2013'],
          explanation: 'Ngày 5/12/2013, UNESCO đã chính thức ghi danh Nghệ thuật Đờn Ca Tài Tử Nam Bộ là Di sản văn hóa phi vật thể đại diện của nhân loại.',
          hintLevel1: 'Năm 2013.',
          hintLevel2: '2013.',
          hintLevel3: 'Nhập: 2013.'
        }
      },
      {
        id: 'dctt_step_2',
        title: 'Bộ Ngũ tuyệt nhạc cụ cổ điển',
        storyPrompt: 'Dàn nhạc tài tử truyền thống gồm bộ "Ngũ tuyệt" là 5 nhạc cụ cổ truyền nào?',
        clueVerse: 'Kìm, Tranh, Cò, Bầu cùng Tam rộn rã,\nNgũ tuyệt so dây khúc thái hòa.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bộ ngũ tuyệt nhạc cụ đờn ca tài tử gồm những cây đàn nào?',
          options: [
            'Đàn Kìm (Nguyệt), đàn Tranh (Thập lục), đàn Cò (Nhị), đàn Bầu (Độc huyền), đàn Tam',
            'Đàn Piano, Guitar điện, Trống jazz, Kèn saxophone, Đàn violin',
            'Đàn organ, sáo mèo, khèn bè, chiêng núm, cồng',
            'Trống cơm, kèn đám ma, chuông gió, mõ gỗ, chũm chọe'
          ],
          correctAnswer: 'Đàn Kìm (Nguyệt), đàn Tranh (Thập lục), đàn Cò (Nhị), đàn Bầu (Độc huyền), đàn Tam',
          explanation: 'Bộ Ngũ tuyệt gồm 5 nhạc cụ dây gảy và kéo truyền thống: Kìm, Tranh, Cò, Bầu, Tam tạo nên sự hòa quyện âm thanh hoàn hảo.',
          hintLevel1: 'Kìm, Tranh, Cò, Bầu, Tam.',
          hintLevel2: 'Đàn Kìm, Tranh, Cò, Bầu, Tam.',
          hintLevel3: 'Chọn Đàn Kìm (Nguyệt), đàn Tranh...'
        }
      },
      {
        id: 'dctt_step_3',
        title: 'Cây đàn đứng đầu hàng nhạc cụ tài tử',
        storyPrompt: 'Cây đàn nào được mệnh danh là "Quân tử cầm" giữ vai trò lĩnh xướng trong dàn nhạc tài tử?',
        clueVerse: 'Đàn Kìm thùng tròn như mặt nguyệt,\nChỉ huy dàn nhạc nhịp khoan thai.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên cây đàn có cần dài, thùng tròn như mặt trăng giữ vai trò chủ đạo (chứa từ "Đàn Kìm" hoặc "Đàn Nguyệt"):',
          correctAnswer: 'Đàn Kìm',
          keywords: ['đàn kìm', 'dan kim', 'đàn nguyệt', 'dan nguyet'],
          explanation: 'Đàn Kìm (Đàn Nguyệt) là nhạc cụ chủ soái, giữ vai trò dẫn dắt giai điệu và định hướng cung bậc cho cả dàn nhạc.',
          hintLevel1: 'Đàn Kìm hoặc Đàn Nguyệt.',
          hintLevel2: 'Đàn Kìm.',
          hintLevel3: 'Nhập: Đàn Kìm.'
        }
      },
      {
        id: 'dctt_step_4',
        title: 'Hệ thống 20 bài bản tổ kinh điển',
        storyPrompt: 'Kho tàng âm nhạc Đờn Ca Tài Tử được đúc kết thành bao nhiêu bài bản tổ?',
        clueVerse: 'Hai mươi bài tổ rạng ngàn năm,\nSáu Bắc bảy Hạ ba Nam bốn Oán.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hệ thống bài bản chuẩn mực của Đờn Ca Tài Tử gồm bao nhiêu bài bản tổ?',
          options: [
            '20 bài bản tổ (6 bài Bắc, 7 bài Hạ/Nhạc lễ, 3 bài Nam, 4 bài Oán)',
            '100 bài',
            '12 bài',
            '5 bài'
          ],
          correctAnswer: '20 bài bản tổ (6 bài Bắc, 7 bài Hạ/Nhạc lễ, 3 bài Nam, 4 bài Oán)',
          explanation: 'Hệ thống 20 bài bản tổ kinh điển gồm: 6 Bắc (vui tươi), 7 Hạ (trang nghiêm), 3 Nam (thanh thản), 4 Oán (bi thương sâu lắng).',
          hintLevel1: 'Gồm 20 bài bản tổ.',
          hintLevel2: '20 bài (6 Bắc, 7 Hạ, 3 Nam, 4 Oán).',
          hintLevel3: 'Chọn 20 bài bản tổ...'
        }
      },
      {
        id: 'dctt_step_5',
        title: 'Cây Guitar phím lõm độc nhất vô nhị',
        storyPrompt: 'Sáng tạo độc đáo của nghệ nhân miền Nam khi khoét sâu các phím đàn phương Tây để nhấn nhá làn điệu vọng cổ là gì?',
        clueVerse: 'Guitar phím lõm ngân nga oán,\nNốt luyến cung sầu đọng giọt châu.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Nhạc cụ phương Tây được người Việt Nam cải biến bằng cách khoét lõm các ngăn phím được gọi là gì?',
          options: ['Guitar phím lõm (Lục huyền cầm)', 'Đàn Ukulele', 'Đàn Banjo', 'Đàn Mandolin'],
          correctAnswer: 'Guitar phím lõm (Lục huyền cầm)',
          explanation: 'Đàn Guitar phím lõm ra đời vào thập niên 1930 là sáng tạo độc nhất vô nhị của người Việt để tạo ra các âm rung, nhấn nhá mang hồn cốt Nam Bộ.',
          hintLevel1: 'Guitar phím lõm.',
          hintLevel2: 'Lục huyền cầm / Guitar phím lõm.',
          hintLevel3: 'Chọn Guitar phím lõm (Lục huyền cầm).'
        }
      },
      {
        id: 'dctt_step_6',
        title: 'Nhạc cụ giữ nhịp Song lang',
        storyPrompt: 'Nhạc cụ gõ bằng gỗ nhỏ gọn đặt dưới chân nghệ nhân dùng để gõ giữ nhịp bài bản tên là gì?',
        clueVerse: 'Song lang điểm nhịp cốc cốc vang,\nĐều đặn câu ca vững nhịp đàn.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nhạc cụ gõ bằng gỗ hình bán cầu có cần gạt dùng giữ nhịp trong tài tử (chứa từ "Song lang" hoặc "Song loan"):',
          correctAnswer: 'Song lang',
          keywords: ['song lang', 'song loan', 'song-lang'],
          explanation: 'Song lang (Song loan) bằng gỗ căm xe hay cẩm lai là "nhịp tim" của ban nhạc tài tử, giúp người đờn và người ca giữ đúng trường canh.',
          hintLevel1: 'Song lang.',
          hintLevel2: 'Song lang / Song loan.',
          hintLevel3: 'Nhập: Song lang.'
        }
      },
      {
        id: 'dctt_step_7',
        title: 'Ý nghĩa của hai chữ "Tài Tử"',
        storyPrompt: 'Chữ "Tài tử" trong nghệ thuật Đờn Ca Tài Tử mang hàm ý gì?',
        clueVerse: 'Tài tử thanh tao người nghĩa khí,\nĐàn ca tao nhã chẳng vì tiền.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Ý nghĩa nguyên bản của khái niệm "Tài tử" là gì?',
          options: [
            'Người có tài hoa nghệ thuật, đờn ca vì đam mê tri âm tri kỷ chứ không phải biểu diễn thương mại kiếm tiền',
            'Diễn viên điện ảnh nổi tiếng',
            'Người giàu sang phú quý',
            'Người biểu diễn xiếc'
          ],
          correctAnswer: 'Người có tài hoa nghệ thuật, đờn ca vì đam mê tri âm tri kỷ chứ không phải biểu diễn thương mại kiếm tiền',
          explanation: '"Tài tử" là người tài năng, có tâm hồn nghệ sĩ, chơi đàn hát vì niềm vui tao nhã và tình bạn tri âm tri kỷ sau những giờ lao động vất vả.',
          hintLevel1: 'Đờn ca tao nhã tri âm tri kỷ.',
          hintLevel2: 'Chơi nhạc vì đam mê.',
          hintLevel3: 'Chọn Người có tài hoa nghệ thuật...'
        }
      },
      {
        id: 'dctt_step_8',
        title: 'Bậc nhạc sư tiền bối Nguyễn Quang Đại (Ba Đợi)',
        storyPrompt: 'Vị quan nhạc triều Nguyễn di cư vào Nam cuối thế kỷ 19 có công hệ thống hóa 20 bài bản tổ là ai?',
        clueVerse: 'Nhạc sư Ba Đợi dày công dựng,\nHệ thống bài bản rạng ngàn sau.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên vị nhạc sư tiền bối lỗi lạc của Đờn ca tài tử Nam Bộ (chứa từ "Nguyễn Quang Đại" hoặc "Ba Đợi"):',
          correctAnswer: 'Nguyễn Quang Đại',
          keywords: ['nguyễn quang đại', 'nguyen quang dai', 'ba đợi', 'ba doi'],
          explanation: 'Nhạc sư Nguyễn Quang Đại (thầy Ba Đợi), nguyên là quan nhạc cung đình Huế, đã vào miền Nam truyền dạy và chuẩn hóa hệ thống 20 bài bản tổ tài tử.',
          hintLevel1: 'Nhạc sư Nguyễn Quang Đại.',
          hintLevel2: 'Thầy Ba Đợi.',
          hintLevel3: 'Nhập: Nguyễn Quang Đại.'
        }
      },
      {
        id: 'dctt_step_9',
        title: 'Bốn hơi điệu trong Đờn ca tài tử',
        storyPrompt: 'Âm nhạc tài tử gồm 4 hơi điệu chính diễn tả các sắc thái tình cảm khác nhau là gì?',
        clueVerse: 'Bắc vui, Hạ lễ, Nam thanh thản,\nOán buồn da diết đọng tình sâu.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Bốn hơi điệu cơ bản trong nghệ thuật Đờn Ca Tài Tử là gì?',
          options: [
            'Hơi Bắc (vui tươi, đĩnh đạc), Hơi Hạ (trang nghiêm), Hơi Nam (thanh nhã), Hơi Oán (buồn thương)',
            'Hơi Xuân, Hơi Hạ, Hơi Thu, Hơi Đông',
            'Hơi Nóng, Hơi Lạnh, Hơi Ấm, Hơi Gió',
            'Hơi Cao, Hơi Thấp, Hơi Vừa, Hơi Nhanh'
          ],
          correctAnswer: 'Hơi Bắc (vui tươi, đĩnh đạc), Hơi Hạ (trang nghiêm), Hơi Nam (thanh nhã), Hơi Oán (buồn thương)',
          explanation: 'Bốn hơi điệu (Bắc, Hạ, Nam, Oán) là hệ thống thẩm mỹ tinh tế phản ánh mọi cung bậc cảm xúc của người phương Nam.',
          hintLevel1: 'Bắc, Hạ, Nam, Oán.',
          hintLevel2: '4 hơi điệu Bắc, Hạ, Nam, Oán.',
          hintLevel3: 'Chọn Hơi Bắc (vui tươi...), Hơi Hạ...'
        }
      },
      {
        id: 'dctt_step_10',
        title: 'Không gian diễn xướng đờn ca tài tử',
        storyPrompt: 'Đờn ca tài tử thường được diễn xướng trong không gian sinh hoạt nào?',
        clueVerse: 'Bóng mát vườn dừa trăng thanh gió,\nChiếu hoa trải giữa bến sông quê.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Không gian diễn xướng truyền thống đậm chất dân dã của Đờn ca tài tử là ở đâu?',
          options: [
            'Dưới mái hiên nhà, bóng mát vườn cây, đêm trăng bến sông hay trong các dịp lễ tết chòm xóm',
            'Sân vận động thể thao',
            'Phòng thu âm cách âm kín mít',
            'Rạp chiếu phim hiện đại'
          ],
          correctAnswer: 'Dưới mái hiên nhà, bóng mát vườn cây, đêm trăng bến sông hay trong các dịp lễ tết chòm xóm',
          explanation: 'Đờn ca tài tử gắn bó mật thiết với đời sống thường nhật, mộc mạc, bình dị dưới bóng mát vườn cây, bên bờ kênh sông lộng gió.',
          hintLevel1: 'Dưới mái hiên nhà, vườn cây miệt vườn.',
          hintLevel2: 'Không gian sinh hoạt miệt vườn.',
          hintLevel3: 'Chọn Dưới mái hiên nhà, bóng mát vườn cây...'
        }
      },
      {
        id: 'dctt_step_11',
        title: 'Ngũ cung (Hò Xự Xang Xê Cống)',
        storyPrompt: 'Thang âm 5 nốt nhạc truyền thống của Đờn ca tài tử tương ứng với 5 tên gọi nào?',
        clueVerse: 'Hò Xự Xang Xê Cống bổng trầm,\nNăm cung rung phím đọng tình thâm.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tên 5 nốt trong thang âm ngũ cung của âm nhạc dân tộc phương Nam là gì?',
          options: ['Hò - Xự - Xang - Xê - Cống', 'Do - Re - Mi - Fa - Sol', 'La - Si - Do - Re - Mi', 'Cung - Thương - Giốc - Chủy - Vũ'],
          correctAnswer: 'Hò - Xự - Xang - Xê - Cống',
          explanation: 'Hò, Xự, Xang, Xê, Cống (tương đương xấp xỉ Fa, Sol, La, Do, Re) là hệ thống ngũ cung định hình toàn bộ giai điệu tài tử.',
          hintLevel1: 'Hò Xự Xang Xê Cống.',
          hintLevel2: 'Hò - Xự - Xang - Xê - Cống.',
          hintLevel3: 'Chọn Hò - Xự - Xang - Xê - Cống.'
        }
      },
      {
        id: 'dctt_step_12',
        title: 'Tính chất ngẫu hứng sáng tạo',
        storyPrompt: 'Một nét độc đáo bậc nhất khi các nghệ nhân biểu diễn đờn ca tài tử là gì?',
        clueVerse: 'Ngẫu hứng so dây biến hóa màu,\nChữ đờn bay bổng thỏa lòng nhau.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Trong Đờn ca tài tử, nghệ nhân có quyền ngẫu hứng thêm bớt các chữ đờn (hoa lá), biến tấu giai điệu nhưng vẫn giữ đúng nhịp song lang ở nốt cuối canh?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tính ngẫu hứng và đối đáp tương tác giữa người đờn và người ca là linh hồn sáng tạo bất tận của nghệ thuật tài tử.',
          hintLevel1: 'Tính ngẫu hứng trong khuôn khổ nhịp.',
          hintLevel2: 'Ngẫu hứng sáng tạo.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'dctt_step_13',
        title: 'Địa bàn 21 tỉnh thành Nam Bộ',
        storyPrompt: 'Nghệ thuật Đờn Ca Tài Tử được thực hành và lan tỏa rộng rãi tại bao nhiêu tỉnh thành phố?',
        clueVerse: 'Hai mươi mốt tỉnh thành Nam Bộ,\nKhúc hát tri âm rộn mọi miền.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đờn ca tài tử là di sản chung của bao nhiêu tỉnh, thành phố khu vực Nam Bộ?',
          options: ['21 tỉnh, thành phố (từ Ninh Thuận, Bình Dương, TP.HCM đến Cà Mau)', 'Chỉ 1 tỉnh duy nhất', '5 tỉnh Tây Nguyên', '3 tỉnh Tây Bắc'],
          correctAnswer: '21 tỉnh, thành phố (từ Ninh Thuận, Bình Dương, TP.HCM đến Cà Mau)',
          explanation: 'Hồ sơ UNESCO ghi nhận Đờn ca tài tử tồn tại và phát triển rực rỡ tại 21 tỉnh, thành phố thuộc Đông Nam Bộ và Tây Nam Bộ.',
          hintLevel1: '21 tỉnh thành Nam Bộ.',
          hintLevel2: '21 tỉnh thành.',
          hintLevel3: 'Chọn 21 tỉnh, thành phố...'
        }
      },
      {
        id: 'dctt_step_14',
        title: 'Mối quan hệ mật thiết với Cải Lương',
        storyPrompt: 'Đờn ca tài tử chính là cội nguồn trực tiếp khai sinh ra loại hình nghệ thuật sân khấu nào?',
        clueVerse: 'Từ đờn ca cất bước lên sàn,\nCải Lương rực rỡ rạng non ngàn.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Đờn ca tài tử và hình thức "Ca ra bộ" là cái nôi trực tiếp sinh ra nghệ thuật gì?',
          options: ['Nghệ thuật Cải Lương', 'Hát Xoan', 'Quan họ Bắc Ninh', 'Hát Chèo'],
          correctAnswer: 'Nghệ thuật Cải Lương',
          explanation: 'Từ Đờn ca tài tử phát triển thành "Ca ra bộ" (vừa ca vừa diễn động tác), rồi tiến lên thành lập các gánh hát Cải Lương chuyên nghiệp.',
          hintLevel1: 'Nghệ thuật Cải Lương.',
          hintLevel2: 'Cải Lương.',
          hintLevel3: 'Chọn Nghệ thuật Cải Lương.'
        }
      },
      {
        id: 'dctt_step_15',
        title: 'Giá trị nhân văn cao đẹp',
        storyPrompt: 'Đờn ca tài tử phản ánh phẩm chất cốt lõi nào của con người phương Nam?',
        clueVerse: 'Phóng khoáng hào sảng trọng nghĩa tình,\nMuôn đời sáng mãi ánh quang vinh.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Đờn ca tài tử là tấm gương phản chiếu tâm hồn phóng khoáng, trọng nghĩa khinh tài, yêu chuộng hòa bình và gắn kết cộng đồng sâu sắc của người dân phương Nam?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Tiếng đờn câu ca là sợi dây thiêng liêng cố kết tình làng nghĩa xóm, bồi đắp lòng nhân ái và tình yêu quê hương đất nước.',
          hintLevel1: 'Giá trị nhân văn của đất phương Nam.',
          hintLevel2: 'Tâm hồn hào sảng, trọng nghĩa tình.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  },

  // =========================================================================
  // 15. Nghệ Thuật Cải Lương Nam Bộ - Level 3 (15 câu đố)
  // =========================================================================
  {
    id: 'quest_cai_luong',
    locationId: 'loc_cai_luong',
    title: 'Thánh Đường Kịch Nghệ & Khúc Dạ Cổ Hoài Lang Bất Hủ',
    subtitle: 'Khám phá hơn 100 năm sân khấu Cải Lương vàng son, bản Dạ Cổ Hoài Lang 1919 và những vở tuồng kinh điển',
    category: 'traditional_art',
    difficulty: 'Khó',
    level: 3,
    estimatedMinutes: 20,
    rewardLP: 450,
    badgeId: 'badge_cai_luong',
    loreChapter: 'Chương 15: Đèn Sân Khấu Rạng Hào Quang',
    steps: [
      {
        id: 'cl_step_1',
        title: 'Năm ra đời của nghệ thuật Cải Lương',
        storyPrompt: 'Bước vào rạp hát Trần Hữu Trang rực rỡ ánh đèn sân khấu quyến rũ:',
        clueVerse: 'Một chín một tám dựng gánh tuồng,\nCải cách hát ca tỏa muôn phương.',
        puzzleType: 'cipher_text',
        puzzleData: {
          question: 'Nghệ thuật Cải Lương chính thức định hình và ra mắt vở tuồng hoàn chỉnh đầu tiên vào năm nào (gợi ý: 191x)?',
          correctAnswer: '1918',
          keywords: ['1918'],
          explanation: 'Năm 1918, gánh hát Thầy Năm Tú (Châu Văn Tú) tại Mỹ Tho công diễn vở tuồng "Pháp Việt Nhất Gia" và "Lục Vân Tiên", đánh dấu sự ra đời của Cải Lương.',
          hintLevel1: 'Năm 1918.',
          hintLevel2: '1918.',
          hintLevel3: 'Nhập: 1918.'
        }
      },
      {
        id: 'cl_step_2',
        title: 'Ý nghĩa câu liễn đối định danh "Cải Lương"',
        storyPrompt: 'Hai câu khẩu hiệu bất hủ treo trước rạp hát Tây Đô định nghĩa cho danh xưng Cải Lương là gì?',
        clueVerse: 'Cải cách hát ca theo tiến bộ,\nLương truyền tuồng tích sánh văn minh.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Hai câu thơ xác định tôn chỉ của nghệ thuật Cải Lương là gì?',
          options: [
            '"Cải cách hát ca theo tiến bộ / Lương truyền tuồng tích sánh văn minh"',
            '"Hát cho hay múa cho đẹp / Diễn cho vui lòng khán giả"',
            '"Trăm năm bia đá thì mòn / Ngàn năm sân khấu vẫn còn bia danh"',
            '"Đêm đêm đèn sáng rực rỡ / Khán giả vỗ tay tưng bừng"'
          ],
          correctAnswer: '"Cải cách hát ca theo tiến bộ / Lương truyền tuồng tích sánh văn minh"',
          explanation: 'Câu liễn đối ghép hai chữ đầu CẢI - LƯƠNG khẳng định nghệ thuật luôn cải cách đổi mới theo tiến bộ thời đại và giữ gìn giá trị văn minh nhân văn.',
          hintLevel1: 'Cải cách hát ca theo tiến bộ...',
          hintLevel2: 'Cải cách tiến bộ / Lương truyền văn minh.',
          hintLevel3: 'Chọn "Cải cách hát ca theo tiến bộ / Lương truyền tuồng tích sánh văn minh".'
        }
      },
      {
        id: 'cl_step_3',
        title: 'Tác giả bản "Dạ Cổ Hoài Lang" bất hủ',
        storyPrompt: 'Vị nhạc sĩ tài hoa tại Bạc Liêu đã sáng tác bản "Dạ Cổ Hoài Lang" vào đêm rằm tháng Tám năm 1919 là ai?',
        clueVerse: 'Bác Sáu Lầu đêm trăng thao thức,\nDạ Cổ Hoài Lang vọng ngàn thu.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên nhạc sĩ sáng tác bản Dạ Cổ Hoài Lang (chứa từ "Cao Văn Lầu" hoặc "Sáu Lầu"):',
          correctAnswer: 'Cao Văn Lầu',
          keywords: ['cao văn lầu', 'cao van lau', 'sáu lầu', 'sau lau'],
          explanation: 'Nhạc sĩ Cao Văn Lầu (bác Sáu Lầu, 1892-1976) đã sáng tác bản Dạ Cổ Hoài Lang (Đêm khuya nghe tiếng trống nhớ chồng) tại Bạc Liêu năm 1919.',
          hintLevel1: 'Nhạc sĩ Cao Văn Lầu.',
          hintLevel2: 'Cao Văn Lầu.',
          hintLevel3: 'Nhập: Cao Văn Lầu.'
        }
      },
      {
        id: 'cl_step_4',
        title: 'Tiến trình phát triển nhịp bản Vọng Cổ',
        storyPrompt: 'Từ bản Dạ Cổ Hoài Lang nhịp 2 ban đầu, bài Vọng Cổ đã phát triển qua các thang nhịp nào để đạt đến đỉnh cao 6 câu vọng cổ nhịp 32?',
        clueVerse: 'Nhịp đôi, nhịp bốn, nhịp tám, mười sáu,\nBa mươi hai nhịp lướt bay bổng.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Tiến trình nhân đôi nhịp của bản Vọng Cổ qua các thời kỳ là gì?',
          options: [
            'Nhịp 2 (1919) -> Nhịp 4 -> Nhịp 8 -> Nhịp 16 -> Nhịp 32 -> Nhịp 64',
            'Nhịp 1 -> Nhịp 3 -> Nhịp 5 -> Nhịp 7',
            'Chỉ có 1 nhịp cố định duy nhất',
            'Nhịp 100 tự do'
          ],
          correctAnswer: 'Nhịp 2 (1919) -> Nhịp 4 -> Nhịp 8 -> Nhịp 16 -> Nhịp 32 -> Nhịp 64',
          explanation: 'Vọng cổ đã mở rộng không gian giai điệu từ nhịp đôi (Dạ Cổ) dần lên nhịp 4, nhịp 8, nhịp 16 và hoàn thiện ở nhịp 32 cho phép nghệ sĩ ngân dài giọng ca ngọt ngào.',
          hintLevel1: 'Nhịp 2 -> 4 -> 8 -> 16 -> 32 -> 64.',
          hintLevel2: 'Nhân đôi nhịp điệu.',
          hintLevel3: 'Chọn Nhịp 2 (1919) -> Nhịp 4 -> Nhịp 8...'
        }
      },
      {
        id: 'cl_step_5',
        title: 'Vở tuồng kinh điển "Tiếng Trống Mê Linh"',
        storyPrompt: 'Vở tuồng Cải Lương lịch sử hào hùng ca ngợi khí phách Nữ vương Trưng Trắc chống quân xâm lược Hán tên là gì?',
        clueVerse: 'Tiếng trống Mê Linh rền non nước,\nBảo kiếm tế chàng giục tiến quân.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên vở Cải Lương kinh điển của Đoàn Thanh Minh - Thanh Nga (chứa từ "Tiếng Trống Mê Linh"):',
          correctAnswer: 'Tiếng Trống Mê Linh',
          keywords: ['tiếng trống mê linh', 'tieng trong me linh', 'trống mê linh'],
          explanation: 'Vở tuồng "Tiếng Trống Mê Linh" (soạn giả Việt Dung - Vĩnh Điền) với diễn xuất bất hủ của NSƯT Thanh Nga trong vai Trưng Trắc là tượng đài sân khấu Việt Nam.',
          hintLevel1: 'Tiếng Trống Mê Linh.',
          hintLevel2: 'Tiếng Trống Mê Linh.',
          hintLevel3: 'Nhập: Tiếng Trống Mê Linh.'
        }
      },
      {
        id: 'cl_step_6',
        title: 'Nữ nghệ sĩ huyền thoại - Nữ hoàng sân khấu Thanh Nga',
        storyPrompt: 'Nghệ sĩ tài sắc vẹn toàn được tôn vinh là "Nữ hoàng sân khấu Cải Lương" Nam Bộ là ai?',
        clueVerse: 'Thanh Nga tài sắc sáng muôn phương,\nBao năm sống mãi giữa yêu thương.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên cố Nghệ sĩ Ưu tú - Nữ hoàng sân khấu Cải Lương (chứa từ "Thanh Nga"):',
          correctAnswer: 'Thanh Nga',
          keywords: ['thanh nga', 'nsut thanh nga'],
          explanation: 'Nghệ sĩ Ưu tú Thanh Nga (1942-1978) là ngôi sao sáng chói của đoàn Thanh Minh - Thanh Nga, nổi tiếng với các vai Trưng Trắc, Thái hậu Dương Vân Nga, Quỳnh Nga...',
          hintLevel1: 'Nghệ sĩ Thanh Nga.',
          hintLevel2: 'Thanh Nga.',
          hintLevel3: 'Nhập: Thanh Nga.'
        }
      },
      {
        id: 'cl_step_7',
        title: 'Soạn giả lừng danh Trần Hữu Trang',
        storyPrompt: 'Nhà hát Cải Lương TP.HCM tại Quận 1 được vinh dự mang tên vị soạn giả cách mạng kiệt xuất nào?',
        clueVerse: 'Trần Hữu Trang soạn ngàn trang sử,\nĐời cô Lựu sống mãi thời gian.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên tác giả của các vở tuồng bất hủ "Đời cô Lựu", "Tô Ánh Nguyệt" (chứa từ "Trần Hữu Trang"):',
          correctAnswer: 'Trần Hữu Trang',
          keywords: ['trần hữu trang', 'tran huu trang'],
          explanation: 'Soạn giả Trần Hữu Trang (1906-1966) là bậc thầy kịch bản Cải Lương hiện thực xã hội và là chiến sĩ cách mạng kiên trung.',
          hintLevel1: 'Soạn giả Trần Hữu Trang.',
          hintLevel2: 'Trần Hữu Trang.',
          hintLevel3: 'Nhập: Trần Hữu Trang.'
        }
      },
      {
        id: 'cl_step_8',
        title: 'Cải Lương Tuồng Cổ (Hồ Quảng cải biên)',
        storyPrompt: 'Nhánh nghệ thuật Cải Lương biểu diễn võ thuật, vũ đạo đẹp mắt với trang phục lộng lẫy và âm nhạc tuồng cổ tên là gì?',
        clueVerse: 'Áo giáp kim tuyến thương kích bay,\nTuồng cổ Minh Tơ rạng chốn này.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Dòng Cải Lương có sự kết hợp vũ đạo võ thuật điêu luyện, cờ lệnh, đao kiếm và vũ đạo tuồng cổ gọi là gì?',
          options: ['Cải Lương Tuồng Cổ (Tuồng cổ Nam Bộ)', 'Hát kịch nói Tây phương', 'Múa ba lê', 'Xiếc nhào lộn'],
          correctAnswer: 'Cải Lương Tuồng Cổ (Tuồng cổ Nam Bộ)',
          explanation: 'Cải Lương Tuồng Cổ (tiêu biểu là đoàn Minh Tơ, Huỳnh Long với các nghệ sĩ như NSND Thanh Tòng, Bạch Long...) là đỉnh cao kết hợp vũ đạo, phục trang lộng lẫy.',
          hintLevel1: 'Cải Lương Tuồng Cổ.',
          hintLevel2: 'Tuồng cổ.',
          hintLevel3: 'Chọn Cải Lương Tuồng Cổ (Tuồng cổ Nam Bộ).'
        }
      },
      {
        id: 'cl_step_9',
        title: 'Giải thưởng sân khấu danh giá Thanh Tâm',
        storyPrompt: 'Giải thưởng nghệ thuật Cải Lương uy tín nhất miền Nam trong giai đoạn 1958 - 1968 do nhà báo Trần Tấn Quốc sáng lập tên là gì?',
        clueVerse: 'Huy chương Thanh Tâm trao ngôi sao sáng,\nNâng bước nghệ nhân rạng ngọc ngà.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Giải thưởng Cải Lương huyền thoại thập niên 1960 trao cho các nghệ sĩ trẻ tài năng như Thanh Nga, Bạch Tuyết, Hùng Cường, Lệ Thủy tên là gì?',
          options: ['Giải thưởng Thanh Tâm', 'Giải Oscar', 'Giải Mai Vàng', 'Giải Chuông Vàng'],
          correctAnswer: 'Giải thưởng Thanh Tâm',
          explanation: 'Giải Thanh Tâm (1958-1968) là giải thưởng danh giá nhất thời kỳ hoàng kim của Cải Lương, bệ phóng cho hàng loạt tên tuổi lẫy lừng.',
          hintLevel1: 'Giải Thanh Tâm.',
          hintLevel2: 'Thanh Tâm.',
          hintLevel3: 'Chọn Giải thưởng Thanh Tâm.'
        }
      },
      {
        id: 'cl_step_10',
        title: 'Nghệ sĩ Nhân dân Bạch Tuyết - Cải Lương Chi Bảo',
        storyPrompt: 'Nữ Tiến sĩ Nghệ thuật đầu tiên của Cải Lương Việt Nam được xưng tụng danh xưng "Cải Lương Chi Bảo" là ai?',
        clueVerse: 'Bạch Tuyết Chi Bảo giọng ca vàng,\nTiến sĩ nghệ thuật rạng giang san.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên NSND được mệnh danh là "Cải Lương Chi Bảo" (chứa từ "Bạch Tuyết"):',
          correctAnswer: 'Bạch Tuyết',
          keywords: ['bạch tuyết', 'bach tuyet', 'nsnd bạch tuyết'],
          explanation: 'NSND. Tiến sĩ Bạch Tuyết (sinh năm 1945) là "Cải Lương Chi Bảo" với giọng ca và lối diễn xuất sắc sảo, trí tuệ trong các vở Thái hậu Dương Vân Nga, Đời cô Lựu...',
          hintLevel1: 'NSND Bạch Tuyết.',
          hintLevel2: 'Bạch Tuyết.',
          hintLevel3: 'Nhập: Bạch Tuyết.'
        }
      },
      {
        id: 'cl_step_11',
        title: 'Nghệ sĩ Nhân dân Lệ Thủy & Minh Vương',
        storyPrompt: 'Cặp đôi nghệ sĩ vàng được khán giả mến mộ nhất qua các vở "Tô Ánh Nguyệt", "Đêm lạnh chùa hoang", "Máu nhuộm sân chùa" là ai?',
        clueVerse: 'Minh Vương Lệ Thủy giọng ca ngọt ngào,\nCặp đôi vàng sáng tựa vì sao.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Cặp đôi bạn diễn Cải Lương huyền thoại gắn bó hơn nửa thế kỷ là ai?',
          options: ['NSND Minh Vương & NSND Lệ Thủy', 'Vũ Linh & Tài Linh', 'Kim Tử Long & Ngọc Huyền', 'Trọng Hữu & Thanh Kim Huệ'],
          correctAnswer: 'NSND Minh Vương & NSND Lệ Thủy',
          explanation: 'Cặp đôi Minh Vương - Lệ Thủy là biểu tượng bất hủ của Cải Lương với hàng trăm vở tuồng in sâu trong ký ức nhiều thế hệ khán giả.',
          hintLevel1: 'Minh Vương và Lệ Thủy.',
          hintLevel2: 'Minh Vương - Lệ Thủy.',
          hintLevel3: 'Chọn NSND Minh Vương & NSND Lệ Thủy.'
        }
      },
      {
        id: 'cl_step_12',
        title: 'Cấu trúc bài vọng cổ 6 câu',
        storyPrompt: 'Trong một bài Vọng cổ hoàn chỉnh, nghệ sĩ thường ca bao nhiêu câu với các nốt ngân hơi dài hơi ấn tượng?',
        clueVerse: 'Sáu câu vọng cổ đượm tình sâu,\nNgân dài hơi thở vượt niềm đau.',
        puzzleType: 'multiple_choice',
        puzzleData: {
          question: 'Một bài vọng cổ kinh điển truyền thống gồm bao nhiêu câu ca?',
          options: ['6 câu vọng cổ (câu 1, 2, 3, 4, 5, 6)', '100 câu', '2 câu ngắn', '12 câu liên khúc'],
          correctAnswer: '6 câu vọng cổ (câu 1, 2, 3, 4, 5, 6)',
          explanation: 'Bài vọng cổ chuẩn mực gồm 6 câu, hiện nay trên sân khấu thường rút gọn ca 4 câu (1, 2, 5, 6) kèm nói lối hoặc hát lý dạo đầu.',
          hintLevel1: '6 câu vọng cổ.',
          hintLevel2: 'Sáu câu.',
          hintLevel3: 'Chọn 6 câu vọng cổ (câu 1, 2, 3, 4, 5, 6).'
        }
      },
      {
        id: 'cl_step_13',
        title: 'Nghệ thuật hoá trang phục trang tuồng cổ',
        storyPrompt: 'Đặc điểm phục trang của các nhân vật tướng soái trong Cải Lương tuồng cổ là gì?',
        clueVerse: 'Mũ mãng giáp vàng rực sắc hoa,\nPhục trang lộng lẫy rạng nước nhà.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Phục trang Cải Lương tuồng cổ được may thêu thủ công cầu kỳ bằng vải lụa, đính hàng ngàn hạt kim tuyến, hạt cườm và đội mũ mão tinh xảo nặng hàng kilôgam?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Phục trang lộng lẫy và công phu là nét đặc trưng thị giác làm say đắm người xem sân khấu kịch hát dân tộc.',
          hintLevel1: 'Phục trang đính kim tuyến thủ công.',
          hintLevel2: 'Mũ mão và giáp thêu lộng lẫy.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      },
      {
        id: 'cl_step_14',
        title: 'Cuộc thi Chuông Vàng Vọng Cổ',
        storyPrompt: 'Cuộc thi tìm kiếm tài năng ca cổ Cải Lương uy tín do Đài Truyền hình TP.HCM (HTV) tổ chức thường niên tên là gì?',
        clueVerse: 'Chuông Vàng ngân giục bạn trẻ ca,\nGìn giữ câu hò rạng nước nhà.',
        puzzleType: 'open_ended',
        puzzleData: {
          question: 'Nhập tên cuộc thi ca vọng cổ truyền hình nổi tiếng hàng năm của HTV (chứa từ "Chuông Vàng Vọng Cổ"):',
          correctAnswer: 'Chuông Vàng Vọng Cổ',
          keywords: ['chuông vàng vọng cổ', 'chuong vang vong co', 'chuông vàng'],
          explanation: 'Cuộc thi "Chuông Vàng Vọng Cổ" khởi xướng từ năm 2006 đã phát hiện và chắp cánh cho nhiều thế hệ nghệ sĩ trẻ tài năng.',
          hintLevel1: 'Chuông Vàng Vọng Cổ.',
          hintLevel2: 'Chuông Vàng Vọng Cổ.',
          hintLevel3: 'Nhập: Chuông Vàng Vọng Cổ.'
        }
      },
      {
        id: 'cl_step_15',
        title: 'Sức sống trường tồn của Cải Lương',
        storyPrompt: 'Trải qua hơn một thế kỷ thăng trầm, Cải Lương giữ vững vị thế là:',
        clueVerse: 'Hồn thiêng kịch nghệ của non sông,\nSống mãi muôn đời giữa ước mong.',
        puzzleType: 'true_false',
        puzzleData: {
          question: 'Đúng hay Sai: Nghệ thuật Cải Lương là di sản văn hóa phi vật thể vô giá, là tiếng lòng thổn thức, đạo lý làm người và niềm tự hào sân khấu kịch nghệ của dân tộc Việt Nam?',
          options: ['Đúng', 'Sai'],
          correctAnswer: 'Đúng',
          explanation: 'Chính xác! Cải Lương luôn sống mãi trong trái tim người Việt, tiếp tục sáng tạo đổi mới để hòa nhịp cùng dòng chảy văn hóa đương đại.',
          hintLevel1: 'Di sản kịch nghệ dân tộc.',
          hintLevel2: 'Sức sống trường tồn.',
          hintLevel3: 'Chọn ĐÚNG.'
        }
      }
    ]
  }
];
