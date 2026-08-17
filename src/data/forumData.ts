import { ForumPost } from '../types';

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: 'post_1',
    title: 'Kinh nghiệm giải mã câu đố gạch Marseille ở Nhà Thờ Đức Bà',
    authorName: 'Minh Khang (Lữ Khách Bậc Thầy)',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    authorTitle: 'Nhà Giám Định Di Sản',
    category: 'hints',
    content: 'Chào cả nhà, mình vừa hoàn thành nhiệm vụ ở Nhà Thờ Đức Bà sáng nay! Cho bạn nào đang kẹt ở câu hỏi về nguồn gốc gạch: hãy chú ý đến chi tiết tàu buồm và nước Pháp nhé. Gạch đỏ này không hề trát vữa nhưng chống rêu cực đỉnh, nung từ cảng Marseille. Bác nào kẹt chỗ 6 quả chuông thì hỏi Trợ lý Ba Son gợi ý cấp 1 là ra ngay!',
    locationTag: 'Nhà thờ Đức Bà Sài Gòn',
    likes: 42,
    commentsCount: 6,
    timestamp: '2 giờ trước',
    badgeEarned: 'badge_duc_ba',
    comments: [
      {
        id: 'c_1',
        authorName: 'Thùy Trang',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
        authorTitle: 'Lữ Khách Khởi Nghiệp',
        content: 'Cảm ơn anh Khang nhiều ạ! Nhờ bài viết này mà em giải xong bước 2 trong vòng 3 phút, vừa ẵm được Huy hiệu Gạch Hồng rồi!',
        timestamp: '1 giờ trước',
        likes: 12
      },
      {
        id: 'c_2',
        authorName: 'Quốc Bảo',
        authorAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
        authorTitle: 'Học Giả Nam Bộ',
        content: 'Nhà thờ đang trùng tu nhưng nhìn màu gạch cổ vẫn mê hoặc thật sự. Ai rảnh qua chụp góc bưu điện lấy trọn ánh sáng 3D nhé.',
        timestamp: '45 phút trước',
        likes: 8
      }
    ]
  },
  {
    id: 'post_2',
    title: 'Góc chụp ảnh và tìm chi tiết bí mật ở Hào Sĩ Phường (Quận 5)',
    authorName: 'Hoàng Yến',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    authorTitle: 'Nhiếp Ảnh Gia Đô Thị',
    category: 'culture',
    content: 'Hào Sĩ Phường buổi sáng sớm có nắng rọi xiên qua các ô cửa lá sách xanh vàng cực đẹp. Mọi người khi đến nhớ giữ trật tự và đi nhẹ nói khẽ vì đây là khu dân cư sinh sống của các cô chú lớn tuổi nha. Mình vừa đổi thành công Voucher Cà phê Vợt từ điểm thưởng nhiệm vụ này, xịn xò lắm!',
    locationTag: 'Hẻm Hào Sĩ Phường',
    likes: 68,
    commentsCount: 4,
    timestamp: '5 giờ trước',
    badgeEarned: 'badge_hao_si_phuong',
    comments: [
      {
        id: 'c_3',
        authorName: 'Văn Hậu',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        authorTitle: 'Khám Phá Hẻm Phố',
        content: 'Ban công tầng 2 nhìn như trong phim Vương Gia Vệ luôn bạn ơi. Văn hóa Chợ Lớn ở đây đậm đặc và ấm áp.',
        timestamp: '3 giờ trước',
        likes: 14
      }
    ]
  },
  {
    id: 'post_3',
    title: 'Thảo luận: Ý nghĩa chữ CÁT (吉) trong mặt bằng Dinh Độc Lập',
    authorName: 'Tiến Sĩ Lịch Sử Trần Nam',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    authorTitle: 'Cố Vấn Di Sản Cổ',
    category: 'history',
    content: 'KTS Ngô Viết Thụ đã lồng ghép triết học phương Đông vô cùng tài tình. Không chỉ có chữ CÁT ở tổng thể, mà nhìn thẳng là chữ KHẨU và chữ TRUNG, trên nóc là lầu Tứ phương vô sự. Có bạn nào nhận ra những đốt trúc thanh cao quanh bao lơn tầng 2 chưa?',
    locationTag: 'Dinh Độc Lập',
    likes: 95,
    commentsCount: 9,
    timestamp: '1 ngày trước',
    badgeEarned: 'badge_dinh_doc_lap',
    comments: [
      {
        id: 'c_4',
        authorName: 'Ngọc Lan',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        authorTitle: 'Kiến Trúc Sư Trẻ',
        content: 'Dạ cháu thấy rồi ạ! Hệ lam đốt trúc chắn nắng nhiệt đới cực kỳ thông minh mà lại thuần phong mỹ tục Việt Nam.',
        timestamp: '18 giờ trước',
        likes: 21
      }
    ]
  },
  {
    id: 'post_4',
    title: 'Top 3 quán cà phê vợt và bánh mì lâu đời nhất Sài Gòn nên ghé',
    authorName: 'Bếp Trưởng Sài Thành',
    authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    authorTitle: 'Sành Ăn Đất Gia Định',
    category: 'cuisine',
    content: 'Làm xong nhiệm vụ ẩm thực nhận ngay 160 LP, mình xin gợi ý cho anh em: 1. Cà phê Vợt Phan Đình Phùng (Phú Nhuận - mở 24/7); 2. Cà phê Ba Lù (Chợ Phùng Hưng Q5 chắt lọc bằng bơ thơm lừng); 3. Bánh mì Huỳnh Hoa & Bánh mì Bảy Hổ nức tiếng.',
    locationTag: 'Phố Cà Phê Vợt',
    likes: 114,
    commentsCount: 15,
    timestamp: '1 ngày trước',
    badgeEarned: 'badge_am_thuc_vot',
    comments: []
  }
];

export const INITIAL_COMMUNITY_MESSAGES = [
  {
    id: 'msg_1',
    senderName: 'Lữ Khách Sài Gòn 99',
    senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    text: 'Có ai đang săn huy hiệu Chùa Bà Thiên Hậu ở Quận 5 không? Chùa hôm nay đông vui và hương trầm thơm ngát!',
    timestamp: '10:14'
  },
  {
    id: 'msg_2',
    senderName: 'Mai Anh (Thợ Săn Di Sản)',
    senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    text: 'Mình vừa đổi được vé Saigon Waterbus hoàng hôn 350 LP rồi nè! Chiều nay ai đi chung chuyến 17h15 ngắm hoàng hôn Bến Nhà Rồng hông?',
    timestamp: '10:18'
  },
  {
    id: 'msg_3',
    senderName: 'Tuấn Khang',
    senderAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    text: 'Trợ lý Ba Son AI thông minh ghê, mình hỏi về nguồn gốc gạch Marseille giải thích tường tận từng chi tiết lịch sử luôn!',
    timestamp: '10:22'
  }
];
