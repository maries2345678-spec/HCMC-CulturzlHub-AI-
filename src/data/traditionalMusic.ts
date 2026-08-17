export interface TraditionalSong {
  id: string;
  title: string;
  category: 'don_ca_tai_tu' | 'cai_luong' | 'dieu_ly';
  categoryLabel: string;
  originYear: string;
  author: string;
  scaleType: 'Bắc (Vui, Trang Trọng)' | 'Nam (Thanh Thản, Êm Dịu)' | 'Oán (Bi Ai, Hoài Cảm)' | 'Ngự (Uy Nghi, Trịnh Trọng)';
  leadInstrument: string;
  description: string;
  historicalContext: string;
  lyricsExcerpt: string;
  tempoBpm: number;
  // Pentatonic melody notes for Web Audio synthesis (frequencies in Hz and durations)
  melodyNotes: { freq: number; dur: number; songLang?: boolean }[];
}

export const TRADITIONAL_SONGS: TraditionalSong[] = [
  {
    id: 'song_da_co_hoai_lang',
    title: 'Dạ Cổ Hoài Lang (Đêm Nghe Tiếng Trống Nhớ Chồng)',
    category: 'cai_luong',
    categoryLabel: 'Bản Nhạc Vua Cải Lương',
    originYear: '1919',
    author: 'Nhạc sĩ Cao Văn Lầu (Bạc Liêu)',
    scaleType: 'Oán (Bi Ai, Hoài Cảm)',
    leadInstrument: 'Đàn Kìm & Đàn Tranh',
    description: 'Kiệt tác bất hủ khởi nguồn cho toàn bộ sự phát triển của bản Vọng Cổ và sân khấu Cải Lương Nam Bộ thế kỷ 20.',
    historicalContext: 'Sáng tác vào năm Kỷ Mùi (1919) tại Bạc Liêu bởi cụ Cao Văn Lầu trong hoàn cảnh bi kịch gia đình, thể hiện tấm lòng thủy chung sắt son của người phụ nữ Nam Bộ.',
    lyricsExcerpt: 'Từ là từ phu tướng,\nBảo kiếm sắc phong lên đàng,\nVào ra luống trông tin chàng,\nNăm canh mơ màng...',
    tempoBpm: 68,
    melodyNotes: [
      { freq: 293.66, dur: 0.8, songLang: true },  // D4 (Hò)
      { freq: 392.00, dur: 0.6 },                  // G4 (Xang)
      { freq: 440.00, dur: 0.6 },                  // A4 (Xê)
      { freq: 493.88, dur: 1.0, songLang: true },  // B4 (Cống)
      { freq: 587.33, dur: 0.8 },                  // D5 (Đố)
      { freq: 440.00, dur: 0.6 },                  // A4
      { freq: 392.00, dur: 0.6, songLang: true },  // G4
      { freq: 329.63, dur: 0.8 },                  // E4 (Xự)
      { freq: 293.66, dur: 1.4, songLang: true },  // D4
      { freq: 261.63, dur: 0.6 },                  // C4
      { freq: 293.66, dur: 1.2, songLang: true },  // D4
    ]
  },
  {
    id: 'song_vong_co_cau_1',
    title: 'Vọng Cổ Câu 1 & 2 (Nhịp 32 Bác Ái)',
    category: 'cai_luong',
    categoryLabel: 'Điệu Hát Cải Lương Bất Hủ',
    originYear: '1936',
    author: 'Nhiều thế hệ nghệ nhân Nam Bộ',
    scaleType: 'Oán (Bi Ai, Hoài Cảm)',
    leadInstrument: 'Đàn Guitar Phím Lõm & Đàn Sến',
    description: 'Làn điệu cốt lõi làm nên linh hồn sân khấu Cải Lương với những câu vô vọng cổ ngọt ngào, ngân dài truyền cảm.',
    historicalContext: 'Phát triển từ nhịp đôi của Dạ Cổ Hoài Lang lên nhịp 4, nhịp 8, nhịp 16 và hoàn thiện ở nhịp 32 kinh điển tại Sài Gòn - Gia Định những năm 1930.',
    lyricsExcerpt: 'Trời đêm nay gió lạnh sương mờ...\nNghe tiếng nhạn kêu sương mà nhớ người tri kỷ...',
    tempoBpm: 60,
    melodyNotes: [
      { freq: 293.66, dur: 0.9, songLang: true },
      { freq: 329.63, dur: 0.5 },
      { freq: 392.00, dur: 0.8, songLang: true },
      { freq: 440.00, dur: 0.7 },
      { freq: 493.88, dur: 1.2, songLang: true },
      { freq: 440.00, dur: 0.5 },
      { freq: 392.00, dur: 0.9 },
      { freq: 293.66, dur: 1.5, songLang: true }
    ]
  },
  {
    id: 'song_luu_thuy_doan',
    title: 'Lưu Thủy Đoản (Khách Điệu Đờn Ca Tài Tử)',
    category: 'don_ca_tai_tu',
    categoryLabel: 'Bản Bắc Cổ Điển',
    originYear: 'Thế kỷ 19',
    author: 'Cổ nhạc dân gian Nam Bộ',
    scaleType: 'Bắc (Vui, Trang Trọng)',
    leadInstrument: 'Đàn Tranh 16 Dây & Đàn Kìm',
    description: 'Một trong những bản Bắc quan trọng nhất trong 20 bản tổ Đờn Ca Tài Tử, giai điệu trong sáng như dòng nước chảy êm đềm.',
    historicalContext: 'Thường được biểu diễn mở đầu các buổi hòa đờn tao nhã tại các nhà vườn Nam Bộ để tạo không khí tươi vui, thanh khiết.',
    lyricsExcerpt: 'Nước chảy xuôi dòng xuôi ngược con đò sang sông,\nTiếng đàn thánh thót vương sầu bóng ai...',
    tempoBpm: 92,
    melodyNotes: [
      { freq: 392.00, dur: 0.4, songLang: true },
      { freq: 440.00, dur: 0.4 },
      { freq: 493.88, dur: 0.4 },
      { freq: 587.33, dur: 0.6, songLang: true },
      { freq: 493.88, dur: 0.4 },
      { freq: 440.00, dur: 0.4 },
      { freq: 392.00, dur: 0.8, songLang: true },
      { freq: 329.63, dur: 0.4 },
      { freq: 293.66, dur: 0.8, songLang: true }
    ]
  },
  {
    id: 'song_kim_tien_ban',
    title: 'Kim Tiền Bản (Tiền Vàng Ngày Hội)',
    category: 'don_ca_tai_tu',
    categoryLabel: 'Bản Bắc Rộn Ràng',
    originYear: 'Đầu thế kỷ 20',
    author: 'Nghệ nhân đờn tài tử Gia Định',
    scaleType: 'Bắc (Vui, Trang Trọng)',
    leadInstrument: 'Đàn Bầu & Đàn Tranh',
    description: 'Bản nhạc diễn tả cảnh phồn hoa, tấp nập của phố thị Sài Gòn - Chợ Lớn xưa với nhịp đờn giòn giã, tươi tắn.',
    historicalContext: 'Thường được tấu trong các dịp lễ hội Kỳ Yên, Tết cổ truyền hoặc đón tiếp khách quý đến thăm dinh thự Nam Bộ.',
    lyricsExcerpt: 'Gió mát trăng thanh dạo khúc cung đàn,\nTiếng cười rộn rã đất trời vào xuân...',
    tempoBpm: 108,
    melodyNotes: [
      { freq: 440.00, dur: 0.35, songLang: true },
      { freq: 493.88, dur: 0.35 },
      { freq: 587.33, dur: 0.5 },
      { freq: 659.25, dur: 0.7, songLang: true },
      { freq: 587.33, dur: 0.35 },
      { freq: 493.88, dur: 0.35 },
      { freq: 440.00, dur: 0.8, songLang: true }
    ]
  },
  {
    id: 'song_tu_dai_oan',
    title: 'Tứ Đại Oán (Bốn Cảnh Sầu Phương Nam)',
    category: 'don_ca_tai_tu',
    categoryLabel: 'Bản Oán Tổ Đờn Ca',
    originYear: 'Cuối thế kỷ 19',
    author: 'Cổ nhạc miền Tây Nam Bộ',
    scaleType: 'Oán (Bi Ai, Hoài Cảm)',
    leadInstrument: 'Đàn Cò & Đàn Kìm',
    description: 'Đỉnh cao của hệ thống điệu Oán trong 20 bản tổ, thể hiện chiều sâu tâm hồn trượng nghĩa và hoài niệm của người mở đất phương Nam.',
    historicalContext: 'Mô tả bốn cảnh tình bi tráng trong lịch sử và đời sống di dân mở cõi phương Nam giữa thiên nhiên sông nước hoang sơ.',
    lyricsExcerpt: 'Mênh mông sóng nước Lục Tỉnh trời chiều,\nTiếng đàn kìm nhỏ giọt sầu ly hương...',
    tempoBpm: 64,
    melodyNotes: [
      { freq: 293.66, dur: 0.8, songLang: true },
      { freq: 349.23, dur: 0.6 },  // F4 (Hơi Oán non)
      { freq: 392.00, dur: 0.9, songLang: true },
      { freq: 440.00, dur: 0.5 },
      { freq: 466.16, dur: 1.1, songLang: true }, // Bb4
      { freq: 392.00, dur: 0.7 },
      { freq: 293.66, dur: 1.4, songLang: true }
    ]
  },
  {
    id: 'song_khoc_hoang_thien',
    title: 'Khốc Hoàng Thiên (Tiếng Khóc Trời Xanh)',
    category: 'cai_luong',
    categoryLabel: 'Điệu Oán Sân Khấu',
    originYear: '1925',
    author: 'Cổ nhạc sân khấu cải lương',
    scaleType: 'Oán (Bi Ai, Hoài Cảm)',
    leadInstrument: 'Đàn Nhị & Guitar Phím Lõm',
    description: 'Bản nhạc sân khấu kinh điển dùng cho các phân đoạn bi kịch lịch sử, chia ly và tưởng nhớ các anh hùng liệt nữ.',
    historicalContext: 'Thường vang lên trong các vở Cải lương lịch sử như Tiếng Trống Mê Linh, Thái Hậu Dương Vân Nga tại rạp hát Sài Gòn.',
    lyricsExcerpt: 'Trời ơi dứt đoạn đường tơ...\nNước mắt lưng tròng tiễn đưa người anh dũng...',
    tempoBpm: 56,
    melodyNotes: [
      { freq: 220.00, dur: 1.0, songLang: true },
      { freq: 293.66, dur: 0.8 },
      { freq: 329.63, dur: 0.9, songLang: true },
      { freq: 392.00, dur: 1.2 },
      { freq: 329.63, dur: 0.7 },
      { freq: 293.66, dur: 1.5, songLang: true }
    ]
  },
  {
    id: 'song_ly_ngua_o',
    title: 'Lý Ngựa Ô Nam Bộ (Khúc Ca Phóng Khoáng)',
    category: 'dieu_ly',
    categoryLabel: 'Dân Ca & Điệu Lý',
    originYear: 'Dân gian Nam Bộ',
    author: 'Truyền khẩu dân gian',
    scaleType: 'Bắc (Vui, Trang Trọng)',
    leadInstrument: 'Sáo Trúc & Song Lang',
    description: 'Điệu lý sôi nổi, hào hùng bậc nhất của miền Nam, mô tả vó ngựa kiêu hãnh của chàng trai Nam Bộ đón dâu về làng.',
    historicalContext: 'Hình tượng chú ngựa ô thắng kiệu vàng phản ánh tinh thần lạc quan, yêu đời và khí phách hào sảng của con người phương Nam.',
    lyricsExcerpt: 'Khớp con ngựa ngựa ô, ngựa ô anh khớp kiệu vàng,\nKiệu vàng anh khớp đưa nàng về dinh...',
    tempoBpm: 120,
    melodyNotes: [
      { freq: 587.33, dur: 0.3, songLang: true },
      { freq: 493.88, dur: 0.3 },
      { freq: 440.00, dur: 0.3 },
      { freq: 392.00, dur: 0.5, songLang: true },
      { freq: 440.00, dur: 0.3 },
      { freq: 493.88, dur: 0.3 },
      { freq: 587.33, dur: 0.6, songLang: true }
    ]
  },
  {
    id: 'song_ly_chim_quyen',
    title: 'Lý Chim Quyên (Bến Nước Tình Quê)',
    category: 'dieu_ly',
    categoryLabel: 'Dân Ca & Điệu Lý',
    originYear: 'Dân gian Nam Bộ',
    author: 'Truyền khẩu miệt vườn sông nước',
    scaleType: 'Nam (Thanh Thản, Êm Dịu)',
    leadInstrument: 'Đàn Tranh & Đàn Bầu',
    description: 'Làn điệu ngọt ngào, sâu lắng gắn liền với bóng mát rặng dừa nước và con đò lững lờ trôi trên dòng sông Hậu, sông Tiền.',
    historicalContext: 'Biểu tượng của tình làng nghĩa xóm và lòng son sắt thủy chung của người thôn quê Tây Nam Bộ.',
    lyricsExcerpt: 'Chim quyên ăn trái mù u,\nThưa ba với má qua cầu theo anh...',
    tempoBpm: 72,
    melodyNotes: [
      { freq: 392.00, dur: 0.6, songLang: true },
      { freq: 440.00, dur: 0.5 },
      { freq: 493.88, dur: 0.7, songLang: true },
      { freq: 587.33, dur: 0.6 },
      { freq: 493.88, dur: 0.5 },
      { freq: 392.00, dur: 1.1, songLang: true }
    ]
  },
  {
    id: 'song_ly_cay_bong',
    title: 'Lý Cây Bông (Rực Rỡ Mùa Hoa)',
    category: 'dieu_ly',
    categoryLabel: 'Dân Ca & Điệu Lý',
    originYear: 'Dân gian Nam Bộ',
    author: 'Truyền khẩu dân gian',
    scaleType: 'Bắc (Vui, Trang Trọng)',
    leadInstrument: 'Đàn Sến & Sáo Trúc',
    description: 'Bản dân ca vui tươi, dí dỏm về vẻ đẹp các loài hoa dân dã đồng bằng Nam Bộ như hoa lý, hoa lài, hoa sen.',
    historicalContext: 'Điệu hát gắn bó với các trò chơi dân gian trẻ em và những đêm trăng giã gạo của trai gái miệt vườn thời mở đất.',
    lyricsExcerpt: 'Bông xanh bông trắng rồi lại vàng bông,\nƠi người ơi là người ơi...',
    tempoBpm: 104,
    melodyNotes: [
      { freq: 440.00, dur: 0.35, songLang: true },
      { freq: 493.88, dur: 0.35 },
      { freq: 392.00, dur: 0.35 },
      { freq: 440.00, dur: 0.7, songLang: true },
      { freq: 587.33, dur: 0.35 },
      { freq: 493.88, dur: 0.7, songLang: true }
    ]
  },
  {
    id: 'song_tay_thi',
    title: 'Tây Thi Cổ Bản (Khúc Khải Hoàn Nam Bộ)',
    category: 'don_ca_tai_tu',
    categoryLabel: 'Bản Bắc Đại Bản',
    originYear: 'Thế kỷ 19',
    author: 'Nhạc giới cổ điển Gia Định',
    scaleType: 'Bắc (Vui, Trang Trọng)',
    leadInstrument: 'Đàn Kìm & Đàn Tranh',
    description: 'Bản nhạc thuộc hàng ngũ "Lục Đại Bản" của Đờn Ca Tài Tử với khúc điệu trang nghiêm, khoáng đạt, tao nhã.',
    historicalContext: 'Được các bậc tiền bối nhạc tài tử Nam Bộ như cụ Ba Đợi truyền dạy tại đất Long An - Sài Gòn, rèn luyện kỹ thuật ngón đờn chuẩn mực.',
    lyricsExcerpt: 'Ngắm cội tùng xanh vươn mình trong gió rét,\nNghe tiếng đàn xưa hòa cùng sông núi rạng ngời...',
    tempoBpm: 88,
    melodyNotes: [
      { freq: 392.00, dur: 0.5, songLang: true },
      { freq: 440.00, dur: 0.4 },
      { freq: 493.88, dur: 0.5, songLang: true },
      { freq: 587.33, dur: 0.8 },
      { freq: 659.25, dur: 0.5, songLang: true },
      { freq: 587.33, dur: 0.4 },
      { freq: 493.88, dur: 0.9, songLang: true }
    ]
  },
  {
    id: 'song_nam_xuan',
    title: 'Nam Xuân (Mùa Xuân Phương Nam)',
    category: 'don_ca_tai_tu',
    categoryLabel: 'Bản Nam Cổ Điển',
    originYear: 'Cuối thế kỷ 19',
    author: 'Cổ nhạc cung đình & tài tử phương Nam',
    scaleType: 'Nam (Thanh Thản, Êm Dịu)',
    leadInstrument: 'Đàn Tranh & Đàn Đáy',
    description: 'Khúc điệu đượm vẻ hoan ca thanh bình, diễn tả cảnh sắc mùa xuân phương Nam trù phú, hoa trái xum xuê.',
    historicalContext: 'Bản nhạc mang đậm triết lý an nhiên, khoan dung của người dân đồng bằng trù phú trong tiết xuân ấm áp.',
    lyricsExcerpt: 'Gió đưa hương bưởi hương cau,\nNắng vàng rực rỡ ngọt ngào đất phương Nam...',
    tempoBpm: 76,
    melodyNotes: [
      { freq: 329.63, dur: 0.6, songLang: true },
      { freq: 392.00, dur: 0.6 },
      { freq: 440.00, dur: 0.8, songLang: true },
      { freq: 493.88, dur: 0.6 },
      { freq: 440.00, dur: 0.5 },
      { freq: 392.00, dur: 0.9, songLang: true },
      { freq: 329.63, dur: 1.2, songLang: true }
    ]
  }
];
