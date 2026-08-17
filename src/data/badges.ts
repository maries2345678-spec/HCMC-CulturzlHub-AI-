import { Badge } from '../types';

export const BADGES: Badge[] = [
  // 1. Chợ Bến Thành
  {
    id: 'badge_ben_thanh',
    name: 'Huy Hiệu Chuông Tháp Bến Thành',
    title: 'Biểu Tượng Đô Thành Sài Gòn',
    category: 'architecture',
    rarity: 'epic',
    icon: 'Store',
    color: '#F59E0B',
    bgGradient: 'from-amber-500 via-amber-600 to-yellow-800',
    description: 'Trao tặng cho lữ khách đã khám phá trọn vẹn 4 cửa Đông - Tây - Nam - Bắc và giải mã 12 bức phù điêu gốm Biên Hòa 1952 tại Chợ Bến Thành.',
    culturalStory: 'Chợ Bến Thành hoàn thành năm 1914, là trái tim giao thương sầm uất của đất Sài Gòn. Tháp đồng hồ 3 mặt hướng ra quảng trường Quách Thị Trang đã trở thành chứng nhân của hơn một thế kỷ thăng trầm lịch sử.',
    perk: '+20% Linh Điểm khi giải mã các manh mối thương mại & ẩm thực Nam Bộ.'
  },

  // 2. Nhà Thờ Đức Bà
  {
    id: 'badge_duc_ba',
    name: 'Huy Hiệu Gạch Hồng Notre-Dame',
    title: 'Bậc Thầy Kiến Trúc Tân Roman',
    category: 'architecture',
    rarity: 'legendary',
    icon: 'Church',
    color: '#EF4444',
    bgGradient: 'from-rose-500 via-red-600 to-amber-900',
    description: 'Minh chứng cho việc giải mã xuất xứ của toàn bộ gạch ngói Marseille và cặp tháp chuông 57.6 mét sừng sững giữa lòng Sài Gòn.',
    culturalStory: 'Nhà thờ Đức Bà Sài Gòn khánh thành năm 1880, sử dụng toàn bộ gạch đỏ vận chuyển từ Marseille (Pháp) mà không cần trát vữa. Trải qua hơn 140 năm, sắc gạch vẫn giữ nguyên sắc hồng tươi tắn.',
    perk: 'Mở khóa góc nhìn lịch sử 3D độc quyền tại Quận 1.'
  },

  // 3. Bưu Điện Trung Tâm
  {
    id: 'badge_buu_dien',
    name: 'Huy Hiệu Bồ Câu Sứ Điệp',
    title: 'Sứ Giả Giao Thoa Đông Tây',
    category: 'architecture',
    rarity: 'rare',
    icon: 'Mail',
    color: '#3B82F6',
    bgGradient: 'from-blue-500 via-sky-600 to-indigo-900',
    description: 'Thu thập sau khi tìm thấy hai bản đồ lịch sử cổ vẽ tay năm 1892 và vòm trần sắt uốn lượn phong cách Gustave Eiffel.',
    culturalStory: 'Bưu điện Trung tâm TP.HCM xây dựng từ 1886 đến 1891 mang phong cách Gothic kết hợp đường nét phương Đông, lưu giữ những chiếc buồng điện thoại bằng gỗ cổ kính độc nhất vô nhị.',
    perk: 'Nhận gợi ý AI "Trợ lý Ba Son" hoàn toàn miễn phí khi gặp câu đố mật thư.'
  },

  // 4. Dinh Độc Lập
  {
    id: 'badge_dinh_doc_lap',
    name: 'Huy Hiệu Phong Thủy Hoàng Gia',
    title: 'Học Giả Kiến Trúc Ngô Viết Thụ',
    category: 'history',
    rarity: 'legendary',
    icon: 'Crown',
    color: '#10B981',
    bgGradient: 'from-emerald-500 via-teal-600 to-emerald-950',
    description: 'Giải mã thành công triết lý chữ Hán ẩn chứa trong tổng thể mặt bằng (Cát, Khẩu, Trung, Tam, Chủ) của Dinh Độc Lập.',
    culturalStory: 'Được thiết kế bởi Kiến trúc sư tài hoa Ngô Viết Thụ - người Việt Nam đầu tiên đoạt giải Khôi nguyên La Mã 1955, Dinh Độc Lập là tuyệt tác kết hợp hài hòa giữa kiến trúc hiện đại và triết học Đông phương.',
    perk: '+50 LP thưởng khi tham gia thảo luận trên Diễn đàn Lữ Khách.'
  },

  // 5. Bến Nhà Rồng
  {
    id: 'badge_ben_nha_rong',
    name: 'Huy Hiệu Hải Đăng Vượt Trùng Dương',
    title: 'Dấu Chân Người Đi Tìm Hình Của Nước',
    category: 'history',
    rarity: 'epic',
    icon: 'Anchor',
    color: '#06B6D4',
    bgGradient: 'from-cyan-500 via-blue-700 to-slate-900',
    description: 'Hoàn thành chuyến hành trình ngược dòng lịch sử 1911 tại bến cảng lịch sử bên dòng sông Sài Gòn.',
    culturalStory: 'Bến Nhà Rồng khởi dựng năm 1863 làm trụ sở Hãng vận tải Messageries Maritimes. Nơi đây ngày 5/6/1911, chàng thanh niên Nguyễn Tất Thành đã bước lên con tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.',
    perk: 'Ưu tiên đổi vé Saigon Waterbus hoàng hôn trong cửa hàng phần thưởng.'
  },

  // 6. Địa Đạo Củ Chi
  {
    id: 'badge_cu_chi',
    name: 'Huy Hiệu Địa Đạo Đất Thép',
    title: 'Kỳ Tích Đất Thép Thành Đồng',
    category: 'history',
    rarity: 'legendary',
    icon: 'Shield',
    color: '#84CC16',
    bgGradient: 'from-lime-600 via-emerald-700 to-stone-950',
    description: 'Hoàn thành cuộc giải mật chiến thuật địa đạo mê cung 250km sâu trong lòng đất Củ Chi và Bếp Hoàng Cầm giấu khói.',
    culturalStory: 'Địa đạo Củ Chi là công trình quân sự kỳ vĩ của thế kỷ 20, minh chứng cho ý chí kiên cường và nghệ thuật chiến tranh nhân dân độc đáo của người dân Sài Gòn - Chợ Lớn - Gia Định.',
    perk: 'Mở khóa danh hiệu Huyền Thoại "Lữ Khách Đất Thép".'
  },

  // 7. Nhà Tù Côn Đảo
  {
    id: 'badge_nha_tu_con_dao',
    name: 'Huy Hiệu Hoa Lê-ki-ma Bất Tử',
    title: 'Ý Chí Thép Nơi Biển Đảo Côn Nôn',
    category: 'history',
    rarity: 'legendary',
    icon: 'Shield',
    color: '#DC2626',
    bgGradient: 'from-red-600 via-rose-700 to-stone-950',
    description: 'Chiêm bái vùng đất thiêng Côn Đảo, tưởng niệm Nữ anh hùng Võ Thị Sáu và hàng vạn chiến sĩ cách mạng kiên trung tại Nghĩa trang Hàng Dương.',
    culturalStory: 'Côn Đảo - từ địa ngục trần gian khét tiếng thời thực dân đã trở thành biểu tượng thiêng liêng về lòng quả cảm và tinh thần yêu nước quật cường của dân tộc Việt Nam.',
    perk: 'Tăng 30% điểm kinh nghiệm (EXP) nhận được cho mọi thử thách lịch sử.'
  },

  // 8. Chùa Hội Khánh
  {
    id: 'badge_chua_hoi_khanh',
    name: 'Huy Hiệu Niết Bàn Đất Thủ',
    title: 'Kỳ Quan Phật Nhập Niết Bàn Châu Á',
    category: 'culture',
    rarity: 'epic',
    icon: 'Flame',
    color: '#D97706',
    bgGradient: 'from-amber-600 via-orange-700 to-stone-950',
    description: 'Chiêm bái pho tượng Phật nằm dài 52m trên mái chùa Hội Khánh và bộ 18 tượng La Hán gỗ mít thế kỷ 20.',
    culturalStory: 'Chùa Hội Khánh khởi dựng năm 1741, là trung tâm Phật giáo cổ kính của Bình Dương, nơi lưu giữ những pho tượng gỗ quý và dấu tích của Hội Danh Dự yêu nước.',
    perk: 'Mở khóa nhạc thiền chuông tĩnh tâm trong mọi hành trình.'
  },

  // 9. Thích Ca Phật Đài
  {
    id: 'badge_thich_ca_phat_dai',
    name: 'Huy Hiệu Bồ Đề Tao Phùng',
    title: 'Hành Giả Thiền Tịnh Miền Duyên Hải',
    category: 'culture',
    rarity: 'rare',
    icon: 'Flame',
    color: '#F59E0B',
    bgGradient: 'from-yellow-500 via-amber-600 to-slate-950',
    description: 'Chinh phục sườn Núi Lớn Vũng Tàu, chiêm ngưỡng tượng Phật ngồi thiền cao 10.2m và cây Bồ Đề chiết từ Ấn Độ.',
    culturalStory: 'Thích Ca Phật Đài khánh thành năm 1963, là biểu tượng tâm linh Phật giáo gắn liền với thiên nhiên biển trời Vũng Tàu.',
    perk: 'Tăng 15% xác suất tìm thấy manh mối ẩn giấu trên bản đồ 3D.'
  },

  // 10. Chợ Thủ Dầu Một
  {
    id: 'badge_cho_thu_dau_mot',
    name: 'Huy Hiệu Tháp Đồng Hồ Đất Thủ',
    title: 'Sành Ăn Ẩm Thực Bánh Bèo Bì Nam Bộ',
    category: 'cuisine',
    rarity: 'rare',
    icon: 'Store',
    color: '#F59E0B',
    bgGradient: 'from-amber-500 via-yellow-600 to-stone-900',
    description: 'Khám phá tháp đồng hồ tròn độc đáo năm 1935 và giải mã bí quyết đĩa bánh bèo bì Mỹ Liên hơn 100 năm tuổi.',
    culturalStory: 'Chợ Thủ Dầu Một bên bờ sông Sài Gòn là cái nôi ẩm thực dân dã trù phú của người dân Bình Dương với hương vị nem Lái Thiêu và bánh bèo bì nức tiếng.',
    perk: 'Giảm 25% điểm LP khi đổi voucher ẩm thực tại hệ thống.'
  },

  // 11. Đường Sách Nguyễn Văn Bình
  {
    id: 'badge_duong_sach',
    name: 'Huy Hiệu Tri Thức Me Bay',
    title: 'Sứ Giả Văn Hóa Đọc Sài Gòn',
    category: 'culture',
    rarity: 'rare',
    icon: 'BookOpen',
    color: '#10B981',
    bgGradient: 'from-emerald-500 via-teal-600 to-stone-950',
    description: 'Dạo bước dưới hàng me cổ thụ và giải mã không gian văn hóa sách đầu tiên của Việt Nam.',
    culturalStory: 'Đường sách Nguyễn Văn Bình khánh thành năm 2016, là điểm hẹn tri thức kết nối bạn đọc yêu sách trong nước và quốc tế.',
    perk: 'Mở khóa quyền truy cập kho sách số và tư liệu di sản miễn phí.'
  },

  // 12. Chợ Xóm Lưới
  {
    id: 'badge_cho_xom_luoi',
    name: 'Huy Hiệu Vị Muối Biển Đông',
    title: 'Vua Ẩm Thực Hải Sản Bãi Trước',
    category: 'cuisine',
    rarity: 'common',
    icon: 'Anchor',
    color: '#0284C7',
    bgGradient: 'from-cyan-500 via-sky-600 to-slate-900',
    description: 'Khám phá bến cá tươi sống Xóm Lưới Vũng Tàu với các món tôm tít, ghẹ xanh, hàu nướng mỡ hành tại chỗ.',
    culturalStory: 'Chợ Xóm Lưới là nơi hội tụ hải sản tươi ngon nhất thành phố biển, mang hơi thở nhộn nhịp của ngư dân phương Nam.',
    perk: '+10% LP thưởng cho các nhiệm vụ khám phá biển đảo.'
  },

  // 13. Làng Sơn Mài Tương Bình Hiệp
  {
    id: 'badge_son_mai_tuong_binh_hiep',
    name: 'Huy Hiệu Sơn Son Vỏ Trứng',
    title: 'Bậc Thầy Nghệ Nhân Sơn Mài Đất Thủ',
    category: 'culture',
    rarity: 'legendary',
    icon: 'Palette',
    color: '#D97706',
    bgGradient: 'from-amber-600 via-red-700 to-stone-950',
    description: 'Giải mã quy trình 25 công đoạn mài nước khắt khe và nghệ thuật cẩn vỏ trứng, dát vàng bạc của làng nghề hơn 200 năm.',
    culturalStory: 'Sơn mài Tương Bình Hiệp là Di sản văn hóa phi vật thể quốc gia, từng rạng danh tại Hội chợ Paris 1937 với độ bóng sâu và bền màu vĩnh cửu.',
    perk: 'Mở khóa khung hình Avatar Vàng Son Cẩn Xà Cừ độc quyền.'
  },

  // 14. Đờn Ca Tài Tử Nam Bộ
  {
    id: 'badge_don_ca_tai_tu',
    name: 'Huy Hiệu Cung Phím Ngũ Tuyệt',
    title: 'Tài Tử Nhạc Sư Phương Nam',
    category: 'traditional_art',
    rarity: 'legendary',
    icon: 'Music',
    color: '#EC4899',
    bgGradient: 'from-pink-500 via-rose-600 to-indigo-950',
    description: 'Lĩnh hội 20 bài bản tổ (6 Bắc, 7 Hạ, 3 Nam, 4 Oán) và tiếng đàn kìm, đàn tranh, guitar phím lõm của Di sản UNESCO.',
    culturalStory: 'Đờn Ca Tài Tử hình thành cuối thế kỷ 19, là điệu hồn hào sảng, phóng khoáng của con người vùng đất sông nước Nam Bộ.',
    perk: 'Kích hoạt trình phát nhạc Đờn Ca Tài Tử & Cải Lương trong suốt quá trình chơi game.'
  },

  // 15. Nghệ Thuật Cải Lương
  {
    id: 'badge_cai_luong',
    name: 'Huy Hiệu Vọng Cổ Vàng Son',
    title: 'Nghệ Sĩ Sân Khấu Kịch Nghệ Dân Tộc',
    category: 'traditional_art',
    rarity: 'legendary',
    icon: 'Music',
    color: '#8B5CF6',
    bgGradient: 'from-purple-500 via-indigo-600 to-slate-950',
    description: 'Giải mã lịch sử bản Dạ Cổ Hoài Lang 1919 và thánh đường nghệ thuật tuồng kịch Cải Lương hơn một thế kỷ qua.',
    culturalStory: 'Cải Lương Nam Bộ ra đời năm 1918, đưa câu vọng cổ ngọt ngào lay động hàng triệu trái tim người Việt qua bao thế hệ.',
    perk: 'Mở khóa trọn vẹn 3 bài Cải Lương kinh điển phát qua Web Audio Engine.'
  },

  // 16. Lễ Hội Nghinh Ông
  {
    id: 'badge_le_hoi_nghinh_ong',
    name: 'Huy Hiệu Lăng Ông Nam Hải',
    title: 'Hộ Thần Biển Khơi Vũng Tàu',
    category: 'culture',
    rarity: 'epic',
    icon: 'Shield',
    color: '#F59E0B',
    bgGradient: 'from-amber-500 via-teal-700 to-slate-950',
    description: 'Chiêm bái bộ xương Cá Voi dài 18m tại Đình Thắng Tam và đoàn thuyền rước kiệu Nghinh Ông trên biển Vũng Tàu.',
    culturalStory: 'Lễ hội Nghinh Ông Vũng Tàu là Di sản văn hóa phi vật thể quốc gia, tôn vinh vị thần biển che chở cho ngư dân vượt bão tố.',
    perk: 'Mở khóa hiệu ứng ánh sáng sóng biển lấp lánh trên bản đồ 3D.'
  },

  // 17. Thành Phố Mới Bình Dương
  {
    id: 'badge_thanh_pho_moi_binh_duong',
    name: 'Huy Hiệu Đô Thị Sáng Tạo ICF',
    title: 'Nhà Kiến Tạo Đô Thị Thông Minh',
    category: 'architecture',
    rarity: 'rare',
    icon: 'Building',
    color: '#06B6D4',
    bgGradient: 'from-cyan-500 via-blue-600 to-stone-900',
    description: 'Khám phá tòa tháp đôi Trung tâm Hành chính tỉnh Bình Dương 104m và công viên sinh thái 75ha.',
    culturalStory: 'Thành phố Mới Bình Dương là biểu tượng của tinh thần đổi mới, vươn tầm thế giới trong Top 7 Cộng đồng thông minh ICF.',
    perk: '+30 Linh Điểm khi giải mã các công trình kiến trúc hiện đại.'
  },

  // 18. Hồ Dầu Tiếng
  {
    id: 'badge_ho_dau_tieng',
    name: 'Huy Hiệu Biển Hồ Phương Nam',
    title: 'Nhà Thám Hiểm Đại Thủy Nông',
    category: 'nature_coastal',
    rarity: 'rare',
    icon: 'Waves',
    color: '#0284C7',
    bgGradient: 'from-blue-600 via-sky-700 to-slate-950',
    description: 'Khám phá hồ nước nhân tạo rộng 270km2 lớn nhất Đông Nam Á và cảnh quan Núi Bà Đen soi bóng nước.',
    culturalStory: 'Hồ Dầu Tiếng xây dựng năm 1981-1985 là kỳ tích thủy nông mang dòng nước ngọt tưới xanh khắp vùng Đông Nam Bộ.',
    perk: 'Mở khóa âm thanh sóng vỗ mặt hồ phẳng lặng.'
  },

  // 19. Bãi Sau Vũng Tàu
  {
    id: 'badge_bai_sau_vung_tau',
    name: 'Huy Hiệu Sóng Biển Thùy Vân',
    title: 'Nhà Du Hành Biển Xanh Vũng Tàu',
    category: 'nature_coastal',
    rarity: 'common',
    icon: 'Waves',
    color: '#0284C7',
    bgGradient: 'from-sky-500 via-blue-600 to-indigo-950',
    description: 'Chinh phục dải cát vàng 8km Bãi Sau và cung đường ven biển Thùy Vân trữ tình.',
    culturalStory: 'Bãi Sau là bãi biển đẹp và sôi động nhất thành phố Vũng Tàu với bờ cát thoai thoải và gió biển dạt dào.',
    perk: 'Tăng tốc độ di chuyển trên bản đồ 3D thêm 25%.'
  },

  // 20. Làng Chài Phước Hải
  {
    id: 'badge_lang_chai_phuoc_hai',
    name: 'Huy Hiệu Giọt Nước Mắm Cơm Than',
    title: 'Bảo Tồn Di Sản Làng Chài Đất Đỏ',
    category: 'culture',
    rarity: 'rare',
    icon: 'Anchor',
    color: '#06B6D4',
    bgGradient: 'from-teal-600 via-cyan-700 to-slate-950',
    description: 'Khám phá làng chài cổ hơn 150 năm tuổi với thuyền thúng nan tròn và nghề ủ nước mắm truyền thống.',
    culturalStory: 'Làng chài Phước Hải lưu giữ nếp sống mộc mạc của ngư dân Đất Đỏ với giọt nước mắm cá cơm than thơm nồng vị biển.',
    perk: 'Ưu tiên đổi quà lưu niệm đặc sản miền duyên hải.'
  },

  // 21. Phố Đi Bộ Nguyễn Huệ
  {
    id: 'badge_pho_di_bo_nguyen_hue',
    name: 'Huy Hiệu Trục Xanh Đại Lộ Sài Gòn',
    title: 'Nhịp Đập Trái Tim Thành Phố',
    category: 'architecture',
    rarity: 'epic',
    icon: 'Footprints',
    color: '#F59E0B',
    bgGradient: 'from-amber-500 via-yellow-600 to-stone-900',
    description: 'Giải mã lịch sử chuyển mình từ Kênh đào Grand Canal (Kênh Charner) xưa đến Quảng trường đi bộ hiện đại bậc nhất.',
    culturalStory: 'Phố đi bộ Nguyễn Huệ là trái tim rộn ràng của người dân Sài Gòn, nơi hội tụ hàng triệu người trong các dịp lễ hội và Đường Hoa Tết cổ truyền.',
    perk: 'Nhận hiệu ứng pháo hoa chúc mừng đặc biệt khi thăng cấp.'
  }
];
