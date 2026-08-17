import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  X, 
  Sparkles, 
  Award, 
  MapPin, 
  Compass, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Info, 
  Play, 
  Pause,
  Eye, 
  Layers, 
  ChevronRight, 
  Camera, 
  Clock, 
  ZoomIn, 
  ZoomOut, 
  Navigation,
  Globe,
  Sliders,
  Maximize2,
  Minimize2,
  Flame,
  Calendar,
  History,
  SplitSquareVertical,
  Radio,
  FileText,
  FastForward,
  SkipBack,
  SkipForward
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Location3D } from '../types';
import { LOCATIONS } from '../data/locations';
import { sound } from '../utils/audio';

interface ARHeritageScannerModalProps {
  locations?: Location3D[];
  selectedInitialLocation?: Location3D;
  onClose: () => void;
  onSelectLocation?: (loc: Location3D) => void;
  onSelectAndTeleport?: (loc: Location3D) => void;
  onStartQuest?: (loc: Location3D) => void;
  onAwardLP?: (lp: number, reason: string) => void;
}

export interface HistoricalEra {
  year: number;
  label: string;
  eraName: string;
  historicalPeriod: string;
  historicalName: string;
  architecturalEvolution: string;
  structureChanges: string[];
  historicalContext: string;
  materialsUsed: string;
  visualFilter: string;
  audioAmbience?: string;
  quote?: string;
}

// Rich historical timeline dataset for all 21 heritage locations
const HISTORICAL_TIMELINE_DATA: Record<string, HistoricalEra[]> = {
  // 1. Bến Nhà Rồng
  loc_ben_nha_rong: [
    {
      year: 1863,
      label: '1863',
      eraName: 'Khởi dựng Trụ sở Hãng Tàu',
      historicalPeriod: 'Thời kỳ Pháp thuộc đầu thế kỷ 19',
      historicalName: 'Trụ sở Messageries Maritimes',
      architecturalEvolution: 'Khởi công xây dựng trụ sở hãng vận tải Hoàng gia Pháp Messageries Maritimes bên ngã ba sông Sài Gòn và rạch Bến Nghé. Kiến trúc mang phong cách Tây phương kết hợp đôi rồng ngậm ngọc nguy nga trên nóc ngói âm dương.',
      structureChanges: ['Đặt biểu tượng đôi rồng gốm men xanh trên nóc', 'Khung tường gạch nung kiên cố 2 tầng', 'Cầu tàu cảng đón thuyền viễn dương'],
      historicalContext: 'Cửa ngõ hàng hải sầm uất đón nhận các chuyến tàu hơi nước nối liền Sài Gòn với Marseille (Pháp) và Viễn Đông.',
      materialsUsed: 'Gạch thẻ nung, đá ong, vôi vữa cổ truyền, ngói tráng men',
      visualFilter: 'sepia(0.85) contrast(1.25) brightness(0.88)',
      quote: 'Đôi rồng uốn lượn chầu mặt trăng ngậm ngọc – biểu tượng phương Đông ngự trên tòa nhà Tây phương.'
    },
    {
      year: 1911,
      label: '1911',
      eraName: 'Mốc Son Lịch Sử Vượt Trùng Dương',
      historicalPeriod: 'Đầu thế kỷ 20',
      historicalName: 'Bến Cảng Sài Gòn - Bến Nhà Rồng',
      architecturalEvolution: 'Tòa nhà giữ nguyên kết cấu mái ngói cổ kính, khu vực cầu tàu mở rộng đón tàu buôn Amiral Latouche-Tréville cập bến. Nơi người thanh niên Nguyễn Tất Thành bước lên tàu ra đi tìm đường cứu nước ngày 5/6/1911.',
      structureChanges: ['Cầu cảng tàu buôn viễn dương bằng gỗ sắt', 'Bến tiếp nhận than đá và kho hàng', 'Đèn biển hoa tiêu ven sông'],
      historicalContext: 'Thời điểm lịch sử dân tộc chuyển mình khi người thanh niên yêu nước Văn Ba quyết định xuất dương tìm con đường giải phóng non sông.',
      materialsUsed: 'Gỗ lim, đinh sắt đóng tàu, đá kè bờ sông',
      visualFilter: 'sepia(0.6) contrast(1.15) brightness(0.92)',
      quote: 'Ngày 5/6/1911: Người thanh niên Văn Ba mang theo bầu nhiệt huyết cứu nước rời bến cảng quê hương.'
    },
    {
      year: 1979,
      label: '1979',
      eraName: 'Khu Lưu Niệm Chủ Tịch Hồ Chí Minh',
      historicalPeriod: 'Sau ngày đất nước thống nhất',
      historicalName: 'Khu Lưu Niệm Bác Hồ',
      architecturalEvolution: 'Tòa nhà được trùng tu và chuyển đổi thành Khu Lưu niệm Chủ tịch Hồ Chí Minh, lưu giữ hàng ngàn hiện vật, tư liệu quý giá về hành trình cứu nước của Bác.',
      structureChanges: ['Tu sửa kiến trúc đôi rồng mái ngói', 'Bổ sung các phòng trưng bày hiện vật lịch sử', 'Công viên cây xanh bến sông'],
      historicalContext: 'Điểm hẹn tri ân và giáo dục truyền thống cách mạng thiêng liêng cho đồng bào cả nước và bạn bè năm châu.',
      materialsUsed: 'Gỗ quý, kính trưng bày an toàn, bê tông phục chế',
      visualFilter: 'saturate(0.7) contrast(1.12) brightness(0.96)',
      quote: 'Nơi lưu dấu muôn vàn kỷ niệm thiêng liêng về cuộc đời vị Cha già dân tộc.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Bảo Tàng Di Sản & Công Viên Cảng Biển Hiện Đại',
      historicalPeriod: 'Thời kỳ Đổi mới & Chuyển đổi số',
      historicalName: 'Bảo tàng Hồ Chí Minh - Chi nhánh TP.HCM',
      architecturalEvolution: 'Công trình được bảo tồn nguyên vẹn kiến trúc lịch sử, kết hợp hệ thống chiếu sáng nghệ thuật lung linh về đêm soi bóng sông Sài Gòn và công nghệ số hóa 3D thực tế ảo.',
      structureChanges: ['Bảo tồn nguyên trạng hoa văn rồng đỉnh mái', 'Hệ thống đèn LED chiếu sáng kiến trúc mỹ thuật', 'Bến tàu du lịch đường thủy hiện đại'],
      historicalContext: 'Di tích quốc gia đặc biệt, biểu tượng văn hóa bất diệt của TP. Hồ Chí Minh văn minh, hiện đại và nghĩa tình.',
      materialsUsed: 'Vật liệu bảo tồn di sản chuẩn quốc tế, kính cường lực, hệ thống ánh sáng LED cao cấp',
      visualFilter: 'none',
      quote: 'Ngọn hải đăng lịch sử rực sáng bên dòng sông Sài Gòn vươn mình ra biển lớn.'
    }
  ],

  // 2. Dinh Độc Lập
  loc_dinh_doc_lap: [
    {
      year: 1868,
      label: '1868',
      eraName: 'Dinh Thống Đốc Norodom',
      historicalPeriod: 'Nửa cuối thế kỷ 19',
      historicalName: 'Dinh Norodom (Palais Norodom)',
      architecturalEvolution: 'Khởi công xây dựng Dinh Thống đốc Nam Kỳ do kiến trúc sư Hermite thiết kế theo phong cách Tân Baroque cổ điển phương Tây tráng lệ với mái vòm lớn và hàng cột Hy Lạp.',
      structureChanges: ['Tòa dinh thự đồ sộ phong cách Tân Cổ điển', 'Mái vòm trung tâm cao vút', 'Khuôn viên công viên bao quanh 12 hecta'],
      historicalContext: 'Trung tâm quyền lực đầu não của chính quyền thực dân Pháp trên toàn cõi Đông Dương.',
      materialsUsed: 'Đá cẩm thạch nhập khẩu từ Pháp, gạch nung bản địa, khung sắt đúc',
      visualFilter: 'sepia(0.8) contrast(1.2) brightness(0.9)',
      quote: 'Tòa dinh thự đồ sộ mang dáng dấp hoàng gia châu Âu sừng sững giữa rừng cây cổ thụ Sài Gòn.'
    },
    {
      year: 1966,
      label: '1966',
      eraName: 'Tuyệt Tác Kiến Trúc Ngô Viết Thụ',
      historicalPeriod: 'Thập niên 1960',
      historicalName: 'Dinh Độc Lập (Phủ Tổng Thống)',
      architecturalEvolution: 'Sau khi Dinh cũ bị ném bom năm 1962, Kiến trúc sư tài hoa Ngô Viết Thụ (Khôi nguyên La Mã) đã thiết kế nên công trình kiệt tác kết hợp triết lý phương Đông (chữ Cát, Khẩu, Trung, Tam, Chủ) và công năng hiện đại.',
      structureChanges: ['Mặt tiền bức rèm hoa đá hình gióng trúc thanh nhã', 'Hệ thống hầm ngầm kiên cố chống bom đạn', 'Sân thượng có bãi đáp trực thăng'],
      historicalContext: 'Công trình kiến trúc hiện đại tiêu biểu nhất miền Nam Việt Nam thập niên 1960.',
      materialsUsed: 'Bê tông cốt thép đúc nguyên khối, đá rửa, gỗ quý gõ đỏ và cẩm lai',
      visualFilter: 'saturate(0.65) contrast(1.18) sepia(0.2)',
      quote: 'Triết lý phương Đông hài hòa cùng kiến trúc hiện đại tạo nên kiệt tác thế kỷ.'
    },
    {
      year: 1975,
      label: '1975',
      eraName: 'Thời Khắc Lịch Sử 30 Tháng 4',
      historicalPeriod: 'Mùa xuân 1975',
      historicalName: 'Hội Trường Thống Nhất',
      architecturalEvolution: '11 giờ 30 phút ngày 30/4/1975, xe tăng 390 húc đổ cánh cổng sắt Dinh Độc Lập, lá cờ Mặt trận Dân tộc Giải phóng miền Nam tung bay trên nóc Dinh, đánh dấu thời khắc non sông liền một dải.',
      structureChanges: ['Cánh cổng sắt lịch sử lưu dấu ấn xe tăng 390 và 843', 'Bảo tồn nguyên trạng phòng họp Nội các và phòng Khánh tiết', 'Giữ nguyên cột cờ đỉnh nóc Dinh'],
      historicalContext: 'Biểu tượng chiến thắng vĩ đại của cuộc kháng chiến giành độc lập, tự do và thống nhất Tổ quốc.',
      materialsUsed: 'Thép tôi cổng chính, thảm dệt truyền thống, tranh sơn mài khổ lớn',
      visualFilter: 'saturate(0.8) contrast(1.15) brightness(0.98)',
      quote: '11h30 ngày 30/4/1975: Cờ giải phóng tung bay trên nóc Dinh, non sông nối liền một dải!'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Di Tích Quốc Gia Đặc Biệt & Công Viên Xanh',
      historicalPeriod: 'Đương đại',
      historicalName: 'Di Tích Lịch Sử Dinh Độc Lập',
      architecturalEvolution: 'Khuôn viên di tích 12 hecta với hàng trăm cây cổ thụ xanh mát được bảo tồn nguyên trạng, đón hàng triệu du khách quốc tế đến chiêm ngưỡng không gian kiến trúc đỉnh cao và hệ thống hầm ngầm.',
      structureChanges: ['Hệ thống thuyết minh tự động thông minh', 'Khu trưng bày triển lãm lịch sử "Từ Dinh Norodom đến Dinh Độc Lập"', 'Hệ thống cảnh quan cây xanh thế kỷ'],
      historicalContext: 'Điểm đến di sản quốc gia hàng đầu, niềm tự hào kiến trúc và lịch sử của người dân TP.HCM.',
      materialsUsed: 'Kính bảo tồn chuyên dụng, hệ thống điều hòa bảo quản hiện vật',
      visualFilter: 'none',
      quote: 'Không gian xanh trầm mặc giữa lòng phố thị sôi động, kể câu chuyện lịch sử ngàn thu.'
    }
  ],

  // 3. Nhà Tù Côn Đảo
  loc_nha_tu_con_dao: [
    {
      year: 1862,
      label: '1862',
      eraName: 'Banh I Khởi Lập (Maison Centrale)',
      historicalPeriod: 'Năm 1862 thời Pháp thuộc',
      historicalName: 'Bagne de Poulo Condore (Nhà tù Côn Lôn)',
      architecturalEvolution: 'Thực dân Pháp xây dựng trại giam đầu tiên (Banh I - sau là Trại Phú Hải) trên đảo Côn Sơn nhằm đày ải và giam cầm các sĩ phu yêu nước phong trào Cần Vương và Đông Du.',
      structureChanges: ['Xây tường đá dày kiên cố cao 4m bao quanh', 'Hệ thống phòng giam tập thể bằng đá tảng', 'Tháp canh bốn góc nhìn ra biển'],
      historicalContext: 'Địa ngục trần gian bắt đầu được thiết lập giữa biển khơi Đông Nam Bộ.',
      materialsUsed: 'Đá hòn Côn Đảo, vôi cát san hô, rơm bện và song sắt nặng',
      visualFilter: 'sepia(0.9) contrast(1.3) brightness(0.85)',
      quote: 'Bức tường đá san hô lạnh lẽo giữa biển khơi lưu dấu ý chí kiên trung của những người con ái quốc.'
    },
    {
      year: 1940,
      label: '1940',
      eraName: 'Chuồng Cọp Pháp Bí Mật',
      historicalPeriod: 'Thập niên 1940',
      historicalName: 'Trại Phú Hải - Hệ Thống Chuồng Cọp Côn Đảo',
      architecturalEvolution: 'Pháp bí mật xây dựng hệ thống Chuồng Cọp với 120 phòng biệt giam nóc chấn song sắt có lối đi phía trên cho cai ngục theo dõi và tra tấn dã man tù nhân chính trị.',
      structureChanges: ['Xây dựng khu Chuồng Cọp Pháp bí mật ngụy trang', 'Hầm đá tối và xà lim biệt giam', 'Sân phơi nắng tra tấn tù nhân'],
      historicalContext: 'Nơi thử thách ý chí sắt đá của các chiến sĩ cách mạng như Tôn Đức Thắng, Lê Duẩn, Phạm Văn Đồng, Võ Thị Sáu.',
      materialsUsed: 'Đá tảng nguyên khối, chấn song sắt đặc, vôi bột tra tấn',
      visualFilter: 'sepia(0.65) contrast(1.35) brightness(0.82)',
      quote: 'Bí mật Chuồng Cọp chấn động lương tri thế giới về sự tàn bạo của ngục tù thực dân.'
    },
    {
      year: 1975,
      label: '1975',
      eraName: 'Giải Phóng Côn Đảo & Mở Cửa Ngục Tù',
      historicalPeriod: 'Tháng 5/1975',
      historicalName: 'Di Tích Nhà Tù Côn Đảo',
      architecturalEvolution: 'Đầu tháng 5/1975, tù chính trị Côn Đảo đồng loạt nổi dậy giải phóng nhà tù. Toàn bộ hệ thống xiềng xích, xà lim được giữ lại làm chứng tích tội ác chiến tranh.',
      structureChanges: ['Phá bỏ toàn bộ gông cùm xiềng xích', 'Bảo quản nguyên trạng các dãy phòng giam và Chuồng Cọp', 'Lập Nghĩa trang Hàng Dương viếng các anh hùng liệt sĩ'],
      historicalContext: 'Khúc tráng ca bất diệt của lòng yêu nước và ý chí bất khuất trước quân thù.',
      materialsUsed: 'Gông cùm sắt lịch sử, đá tưởng niệm, hoa tươi',
      visualFilter: 'saturate(0.7) contrast(1.15) brightness(0.95)',
      quote: 'Hàng ngàn chiến sĩ kiên trung bước ra khỏi ngục tối trong ngày hội non sông toàn thắng.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Di Tích Quốc Gia Đặc Biệt & Không Gian Thiêng',
      historicalPeriod: 'Thời đại ngày nay',
      historicalName: 'Khu Di Tích Lịch Sử Quốc Gia Đặc Biệt Côn Đảo',
      architecturalEvolution: 'Toàn bộ 8 trại giam, Chuồng Cọp, Nghĩa trang Hàng Dương và Cây Bàng di sản được trùng tu bảo tồn khoa học, trở thành trường học cách mạng lớn và điểm du lịch tâm linh thiêng liêng.',
      structureChanges: ['Bảo tồn chống xuống cấp bằng công nghệ vi khí hậu', 'Hệ thống bảo tàng trưng bày hiện vật sống động', 'Công viên tưởng niệm Côn Đảo xanh mát'],
      historicalContext: 'Bản anh hùng ca sáng ngời lòng yêu nước của dân tộc Việt Nam ngàn đời tri ân.',
      materialsUsed: 'Vật liệu bảo tồn đá san hô tự nhiên, cây xanh biển đảo',
      visualFilter: 'none',
      quote: 'Đất thép Côn Đảo hôm nay xanh tươi ngút ngàn, đời đời khắc ghi công ơn các anh hùng liệt sĩ.'
    }
  ],

  // 4. Phố Đi Bộ Nguyễn Huệ
  loc_pho_di_bo_nguyen_hue: [
    {
      year: 1860,
      label: '1860s',
      eraName: 'Kênh Grand Canal (Kênh Chợ Vải)',
      historicalPeriod: 'Thời kỳ Sơ khai Sài Gòn',
      historicalName: 'Kênh Grand Canal (Kênh Lớn)',
      architecturalEvolution: 'Xưa kia vốn là con kênh đào tự nhiên nối thẳng từ sông Sài Gòn vào khu thương thuyền buôn bán tấp nập. Thuyền buôn khắp Lục tỉnh Nam Kỳ chở lúa gạo, vải vóc, cau trầu tấp nập cập bến.',
      structureChanges: ['Bờ kênh kè cọc gỗ và đất đỏ', 'Thuyền ghe tấp nập giao thương', 'Cầu gỗ bắc qua hai bờ kênh'],
      historicalContext: 'Cửa ngõ giao thương đường thủy trọng yếu nhất của đất Gia Định - Bến Nghé xưa.',
      materialsUsed: 'Cọc gỗ đước, đá hộc kè bờ, thuyền gỗ ba lá',
      visualFilter: 'sepia(0.9) contrast(1.25) brightness(0.85)',
      quote: 'Tiếng hò chèo ghe rộn rã trên dòng kênh Grand Canal – nhịp đập phồn hoa buổi đầu Sài Gòn.'
    },
    {
      year: 1887,
      label: '1887',
      eraName: 'Đại Lộ Charner (Đường Kinh Lấp)',
      historicalPeriod: 'Cuối thế kỷ 19',
      historicalName: 'Đại lộ Charner (Boulevard Charner)',
      architecturalEvolution: 'Người Pháp cho lấp dòng kênh Grand Canal để biến thành đại lộ quy mô bậc nhất Đông Dương. Cuối đại lộ xây dựng Tòa Thị Chính Sài Gòn (Hôtel de Ville) lộng lẫy phong cách Phục Hưng.',
      structureChanges: ['Lấp hoàn toàn lòng kênh đặt hệ thống cống ngầm', 'Trồng hai hàng cây sao đen cổ thụ rợp bóng', 'Xây dựng Tòa Thị Chính ở đầu đại lộ'],
      historicalContext: 'Hình thành trục không gian đô thị sang trọng bậc nhất Sài Gòn - "Hòn ngọc Viễn Đông".',
      materialsUsed: 'Đá lát vỉa hè, nhựa đường nhập khẩu, đèn đường khí đốt',
      visualFilter: 'sepia(0.6) contrast(1.18) brightness(0.92)',
      quote: 'Kinh Lấp hóa đại lộ hoa lệ – biểu tượng quy hoạch đô thị kiểu mẫu thời bấy giờ.'
    },
    {
      year: 1955,
      label: '1955',
      eraName: 'Đại Lộ Nguyễn Huệ & Chợ Hoa Xuân',
      historicalPeriod: 'Thập niên 1950 - 1990',
      historicalName: 'Đại lộ Nguyễn Huệ',
      architecturalEvolution: 'Đại lộ chính thức mang tên Anh hùng dân tộc Quang Trung - Nguyễn Huệ. Trở thành trung tâm sinh hoạt lễ hội hoa xuân tưng bừng mỗi dịp Tết Nguyên Đán với hàng ngàn chậu mai vàng và vạn thọ.',
      structureChanges: ['Lắp đặt bồn hoa trung tâm (Bồn Binh Cây Liễu)', 'Đường phố rực rỡ bảng hiệu thương mại', 'Đường hoa Tết truyền thống rực rỡ'],
      historicalContext: 'Trái tim nhộn nhịp của văn hóa đô thị, ký ức tuổi thơ của bao thế hệ người dân Sài Gòn.',
      materialsUsed: 'Gạch lát hoa xi măng, trụ đèn chiếu sáng hoa sen, hoa tươi Nam Bộ',
      visualFilter: 'saturate(0.7) contrast(1.15) sepia(0.15)',
      quote: 'Đường hoa Nguyễn Huệ mỗi độ Tết về – phong vị mùa xuân không thể phai mờ trong lòng người phương Nam.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Quảng Trường Đi Bộ Hiện Đại Bậc Nhất',
      historicalPeriod: 'Thời đại kỷ nguyên số',
      historicalName: 'Quảng trường Phố đi bộ Nguyễn Huệ',
      architecturalEvolution: 'Nâng cấp thành quảng trường đi bộ lát toàn bộ đá granite tự nhiên dài 670m, tích hợp nhạc nước nghệ thuật ngầm, tượng đài Bác Hồ trang nghiêm và kết nối trực tiếp với công viên bờ sông Bạch Đằng.',
      structureChanges: ['Lát đá granite tự nhiên cao cấp toàn tuyến', 'Đài phun nước âm sàn trình diễn ánh sáng laser', 'Hệ thống cây xanh, ghế nghỉ và ngầm hóa giao thông'],
      historicalContext: 'Biểu tượng của một TP.HCM năng động, hội nhập quốc tế, nơi diễn ra các lễ hội lớn nhất của đất nước.',
      materialsUsed: 'Đá granite tự nhiên nguyên khối, hệ thống phun nước điều khiển tự động thông minh',
      visualFilter: 'none',
      quote: 'Đại lộ phồn hoa rực rỡ kết nối quá khứ trăm năm với tương lai rạng ngời của thành phố mang tên Bác.'
    }
  ],

  // 5. Chợ Bến Thành
  loc_cho_ben_thanh: [
    {
      year: 1859,
      label: '1859',
      eraName: 'Chợ Bến Thành Cũ Ven Sông',
      historicalPeriod: 'Trước năm 1912',
      historicalName: 'Chợ Bến Thành (Bến Cũ sông Bến Nghé)',
      architecturalEvolution: 'Nguyên khởi chợ nằm ven sông Bến Nghé gần thành Gia Định làm bến đậu cho thuyền buôn. Sau trận hỏa hoạn và quá tải, chợ được quy hoạch dời về đầm Bồ Rẫy (vị trí ngày nay).',
      structureChanges: ['Nhà lồng chợ khung gỗ lợp lá dừa nước', 'Bến thuyền gỗ đón hàng hóa nông sản'],
      historicalContext: 'Cái tên "Bến Thành" xuất phát từ vị trí chợ nằm ngay bến sông cạnh thành lũy.',
      materialsUsed: 'Gỗ đước, tre nứa, ngói đất nung sơ khai',
      visualFilter: 'sepia(0.85) contrast(1.2) brightness(0.85)',
      quote: 'Chợ Bến Thành bên bến sông Bến Nghé – cội nguồn giao thương trù phú của Gia Định xưa.'
    },
    {
      year: 1914,
      label: '1914',
      eraName: 'Khánh Thành Chợ Mới Mạ Thao',
      historicalPeriod: 'Năm 1914',
      historicalName: 'Les Halles Centrales (Chợ Bến Thành Mới)',
      architecturalEvolution: 'Khánh thành ngôi chợ mới kiên cố với tháp đồng hồ 3 mặt độc đáo do hãng Brossard et Mopin xây dựng. Sự kiện "Ăn khánh thành Chợ Mới" rộn rã suốt 3 ngày đêm quy tụ hàng vạn người.',
      structureChanges: ['Tháp đồng hồ 4 mặt đỉnh Cửa Nam kiêu hãnh', 'Hệ vì kèo sắt chịu lực khẩu độ lớn', 'Hệ thống 4 cửa chính Đông - Tây - Nam - Bắc'],
      historicalContext: 'Biểu tượng bất tử đại diện cho thương mại và nhịp sống đô thị Sài Gòn.',
      materialsUsed: 'Bê tông cốt thép, khung sắt nhập từ Pháp, ngói đất nung',
      visualFilter: 'sepia(0.6) contrast(1.15) brightness(0.92)',
      quote: 'Tháp đồng hồ Chợ Bến Thành sừng sững gõ nhịp thời gian qua hơn một thế kỷ thịnh vượng.'
    },
    {
      year: 1952,
      label: '1952',
      eraName: 'Gắn Phù Điêu Gốm Biên Hòa',
      historicalPeriod: 'Thập niên 1950',
      historicalName: 'Chợ Bến Thành Sài Gòn',
      architecturalEvolution: 'Năm 1952, 12 bức phù điêu gốm Biên Hòa tuyệt tác của các nghệ nhân Trường Mỹ nghệ Biên Hòa được gắn lên 4 cửa chợ, khắc họa sản vật trù phú miền Nam (con bò, nải chuối, con cá, chùm bông lúa).',
      structureChanges: ['Gắn 12 bức phù điêu gốm men màu nghệ thuật', 'Tu bổ mái hiên che mưa nắng nhiệt đới', 'Quy hoạch khu ăn uống ẩm thực đêm'],
      historicalContext: 'Đỉnh cao giao thoa giữa kỹ nghệ gốm Nam Bộ và kiến trúc công cộng.',
      materialsUsed: 'Gốm men màu Biên Hòa, sắt đúc, mái ngói đỏ',
      visualFilter: 'saturate(0.7) contrast(1.12) sepia(0.2)',
      quote: 'Những bức phù điêu gốm Biên Hòa gói trọn hồn quê và sản vật trù phú của đất phương Nam.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Di Sản Sống & Kết Nối Tuyến Metro Số 1',
      historicalPeriod: 'Thời kỳ Đương đại',
      historicalName: 'Chợ Bến Thành - Biểu tượng TP.HCM',
      architecturalEvolution: 'Chợ Bến Thành được bảo tồn nguyên vẹn kiến trúc cổ kính, kết nối trực tiếp với Nhà ga ngầm Metro Bến Thành hiện đại và quảng trường Quách Thị Trang khang trang.',
      structureChanges: ['Trùng tu tôn tạo màu sơn vàng nguyên bản', 'Bảo tồn 12 phù điêu gốm quý', 'Kết nối nhà ga ngầm Metro số 1 Bến Thành - Suối Tiên'],
      historicalContext: 'Địa danh du lịch quốc tế số 1 của TP.HCM, thiên đường ẩm thực đường phố nổi tiếng thế giới.',
      materialsUsed: 'Vật liệu bảo tồn ngói cổ, đá granite lát quảng trường ngầm',
      visualFilter: 'none',
      quote: 'Biểu tượng trường tồn của Sài Gòn – nơi quá khứ trăm năm hòa nhịp cùng tương lai hiện đại.'
    }
  ],

  // 6. Chùa Hội Khánh (Bình Dương)
  loc_chua_hoi_khanh: [
    {
      year: 1741,
      label: '1741',
      eraName: 'Khởi Dựng Chùa Cổ Dưới Chân Đồi',
      historicalPeriod: 'Thế kỷ 18',
      historicalName: 'Chùa Hội Khánh Cổ Tự',
      architecturalEvolution: 'Thiền sư Đại Ngạn (thuộc dòng thiền Lâm Tế) khai sơn dựng thảo am tu tập dưới chân đồi. Sau phát triển thành ngôi chùa rường gỗ mít cổ kính thanh tịnh.',
      structureChanges: ['Kiến trúc nhà rường bằng gỗ rừng nguyên khối', 'Mái lợp ngói âm dương thanh nhã', 'Khu vườn tượng Phật rợp bóng cây cổ thụ'],
      historicalContext: 'Cái nôi Phật giáo Đàng Trong sớm nhất vùng đất Thủ Dầu Một.',
      materialsUsed: 'Gỗ mít rừng, ngói vảy rồng, đá ong lát nền',
      visualFilter: 'sepia(0.85) contrast(1.2) brightness(0.88)',
      quote: 'Tiếng chuông chùa Hội Khánh ngân vang giữa rừng cây đất Thủ từ thuở tiền nhân mở đất.'
    },
    {
      year: 1923,
      label: '1923',
      eraName: 'Căn Cứ Hội Danh Dự Yêu Nước',
      historicalPeriod: 'Thập niên 1920',
      historicalName: 'Chùa Hội Khánh - Căn cứ Hội Danh Dự',
      architecturalEvolution: 'Cụ Phó bảng Nguyễn Sinh Sắc (thân sinh Chủ tịch Hồ Chí Minh) cùng cụ Tú Cúc (Phan Đình Viện) và Hòa thượng Từ Văn thành lập Hội Danh Dự tại chùa nhằm truyền bá tư tưởng yêu nước, bốc thuốc chữa bệnh cứu dân nghèo.',
      structureChanges: ['Bảo tồn gian chánh điện gỗ chạm khắc rồng phượng', 'Phòng thuốc Nam từ thiện cứu trợ đồng bào'],
      historicalContext: 'Địa chỉ đỏ lịch sử nuôi dưỡng tinh thần ái quốc của các tầng lớp nhân dân Nam Bộ.',
      materialsUsed: 'Gỗ quý đất Thủ, thảo dược Nam y, tranh tượng Phật thếp vàng',
      visualFilter: 'sepia(0.6) contrast(1.15) brightness(0.92)',
      quote: 'Nơi cụ thân sinh Bác Hồ gieo mầm tư tưởng yêu nước thương dân giữa lòng đất Thủ kiên cường.'
    },
    {
      year: 2013,
      label: '2013',
      eraName: 'Xác Lập Kỷ Lục Tượng Phật Nằm 52m',
      historicalPeriod: 'Năm 2013',
      historicalName: 'Đại Tượng Phật Nhập Niết Bàn',
      architecturalEvolution: 'Khánh thành pho đại tượng Phật Thích Ca nhập Niết bàn dài 52m, cao 12m an tọa trên mái giảng đường tôn nghiêm, xác lập kỷ lục Tượng Phật nằm trên mái chùa dài nhất châu Á.',
      structureChanges: ['Đại tượng Phật nằm 52m phủ màu trắng thanh thoát', 'Tầng trệt là thư viện Phật học và giảng đường 1.000 chỗ', 'Khu vườn Bồ Đề và hồ sen tịnh độ'],
      historicalContext: 'Kỳ quan Phật giáo hiện đại kết hợp hài hòa trong quần thể cổ tự gần 300 năm tuổi.',
      materialsUsed: 'Bê tông cốt thép đúc nghệ thuật, sơn nano chống thấm, gạch ốp cao cấp',
      visualFilter: 'saturate(0.85) contrast(1.1) brightness(0.98)',
      quote: 'Pho đại tượng Phật nằm 52 mét uy nghiêm trên mái chùa – niềm tự hào Phật giáo Việt Nam vươn tầm châu lục.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Di Tích Quốc Gia & Điểm Hẹn Tâm Linh',
      historicalPeriod: 'Thời đại ngày nay',
      historicalName: 'Chùa Hội Khánh - Danh lam Di tích Quốc gia',
      architecturalEvolution: 'Bảo tồn nguyên vẹn bộ tượng Thập Bát La Hán bằng gỗ mít cổ dát vàng cùng khuôn viên đại tượng Phật nằm thanh tịnh, thu hút hàng vạn lữ khách chiêm bái và tìm về chốn bình yên.',
      structureChanges: ['Hệ thống bảo quản cổ vật gỗ bằng công nghệ sinh học', 'Hoa viên thanh tịnh với hàng cây sao dầu trăm tuổi'],
      historicalContext: 'Di tích Lịch sử - Văn hóa cấp Quốc gia tiêu biểu nhất của tỉnh Bình Dương.',
      materialsUsed: 'Vật liệu bảo tồn thiên nhiên, hệ thống chiếu sáng hoa đăng ban đêm',
      visualFilter: 'none',
      quote: 'Cõi an lạc đất Thủ – nơi hội tụ kiến trúc rường gỗ cổ truyền và đại tượng Phật kỷ lục châu Á.'
    }
  ],

  // 7. Chợ Thủ Dầu Một (Bình Dương)
  loc_cho_thu_dau_mot: [
    {
      year: 1880,
      label: '1880s',
      eraName: 'Bến Chợ Ven Sông Sài Gòn',
      historicalPeriod: 'Cuối thế kỷ 19',
      historicalName: 'Chợ Thủ Dầu Một (Bến Đậu Ghe Xuồng)',
      architecturalEvolution: 'Chợ nằm ven sông Sài Gòn làm bến đậu cho các ghe thuyền buôn từ Lục tỉnh Nam Kỳ chở nông sản, gốm sứ Lái Thiêu và sơn mài lên buôn bán.',
      structureChanges: ['Bến đỗ ghe thuyền bằng cọc gỗ đước', 'Nhà lồng chợ mái lá dừa nước đơn sơ'],
      historicalContext: 'Đô thị thương mại sầm uất đầu tiên của vùng đất Thủ giàu truyền thống.',
      materialsUsed: 'Gỗ rừng Lái Thiêu, tre nứa, đá chẻ',
      visualFilter: 'sepia(0.85) contrast(1.2) brightness(0.88)',
      quote: 'Ghe thuyền san sát cập bến Thủ Dầu Một giao thương gốm sứ và sản vật cây trái Nam Bộ.'
    },
    {
      year: 1935,
      label: '1935',
      eraName: 'Khánh Thành Tháp Đồng Hồ Tròn Art Deco',
      historicalPeriod: 'Năm 1935',
      historicalName: 'Nhà Lồng Chợ Thủ Dầu Một',
      architecturalEvolution: 'Khánh thành nhà lồng chợ kiên cố với Tháp đồng hồ tròn (Cylindrical Clock Tower) độc đáo cao 12m mang phong cách Art Deco kết hợp kiến trúc Pháp - Việt.',
      structureChanges: ['Xây tháp đồng hồ hình trụ tròn vươn cao ở mặt tiền', 'Hệ thống mái ngói vòm thoáng khí nhiệt đới', 'Các gian hàng phân khu trật tự'],
      historicalContext: 'Công trình kiến trúc điểm nhấn định hình diện mạo đô thị Thủ Dầu Một suốt thế kỷ 20.',
      materialsUsed: 'Bê tông cốt thép, xi măng đúc nổi, gạch nung, máy đồng hồ cơ cổ',
      visualFilter: 'sepia(0.6) contrast(1.15) brightness(0.92)',
      quote: 'Tháp đồng hồ tròn kiêu hãnh vươn cao – biểu tượng thân thương gắn bó cùng bao thế hệ người dân đất Thủ.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Di Tích Kiến Trúc & Thiên Đường Ẩm Thực',
      historicalPeriod: 'Hiện đại 2026',
      historicalName: 'Chợ Thủ Dầu Một - Phố Đi Bộ Ven Sông',
      architecturalEvolution: 'Chợ được trùng tu giữ gìn tháp đồng hồ tròn biểu tượng, chỉnh trang tuyến phố đi bộ Bạch Đằng ven sông và bảo tồn các thương hiệu ẩm thực trăm năm như Bánh bèo bì Mỹ Liên, nem Lái Thiêu.',
      structureChanges: ['Bảo tồn phục chế màu sơn và bộ đồng hồ cổ', 'Phố đi bộ và công viên bờ sông Bạch Đằng kết nối chợ', 'Khu ẩm thực đêm sạch đẹp văn minh'],
      historicalContext: 'Di tích kiến trúc nghệ thuật cấp tỉnh, điểm đến ẩm thực và văn hóa không thể bỏ qua tại Bình Dương.',
      materialsUsed: 'Sơn bảo tồn kiến trúc cổ, đèn nghệ thuật ban đêm, đá lát lối đi',
      visualFilter: 'none',
      quote: 'Hương vị bánh bèo bì trăm năm hòa cùng nhịp sống văn minh hiện đại bên dòng sông Sài Gòn.'
    }
  ]
};

// Generic fallback era generator for any other location
function getErasForLocation(loc: Location3D): HistoricalEra[] {
  if (HISTORICAL_TIMELINE_DATA[loc.id]) {
    return HISTORICAL_TIMELINE_DATA[loc.id];
  }

  // Generate standard 4-era evolution based on location built year
  const builtYearNum = parseInt(loc.builtYear.match(/\d{4}/)?.[0] || '1900', 10);

  return [
    {
      year: Math.max(1860, builtYearNum),
      label: `${Math.max(1860, builtYearNum)}`,
      eraName: 'Thời Kỳ Khởi Dựng & Định Hình',
      historicalPeriod: loc.historicalPeriod || 'Thuở ban sơ khai hoang mở cõi',
      historicalName: loc.name,
      architecturalEvolution: `Công trình được khởi dựng vào giai đoạn ${loc.builtYear}. Kiến trúc sơ khai sử dụng các vật liệu truyền thống đặc trưng bản địa với kỹ thuật chạm khắc tinh xảo.`,
      structureChanges: ['Đặt nền móng kết cấu ban đầu', 'Ứng dụng kiến trúc truyền thống phù hợp khí hậu Nam Bộ'],
      historicalContext: loc.culturalSignificance || loc.shortDesc,
      materialsUsed: 'Gỗ quý, đá ong, gạch nung cổ truyền, vôi vữa tự nhiên',
      visualFilter: 'sepia(0.85) contrast(1.2) brightness(0.88)',
      quote: `Dấu ấn khởi đầu của ${loc.vietnameseName || loc.name} qua dòng lịch sử.`
    },
    {
      year: 1945,
      label: '1945',
      eraName: 'Giai Đoạn Biến Thiên Lịch Sử',
      historicalPeriod: 'Giữa thế kỷ 20',
      historicalName: loc.name,
      architecturalEvolution: 'Công trình trải qua những biến động lịch sử quan trọng, được gia cố kết cấu và gắn liền với các phong trào yêu nước của nhân dân Nam Bộ.',
      structureChanges: ['Gia cố tường bao và mái che', 'Mở rộng không gian phục vụ cộng đồng'],
      historicalContext: 'Giai đoạn thử thách tôi luyện ý chí bất khuất của con người phương Nam.',
      materialsUsed: 'Bê tông sơ khai, sắt thép, ngói đỏ',
      visualFilter: 'sepia(0.55) contrast(1.15) brightness(0.92)',
      quote: 'Kiên cường đứng vững qua khói lửa chiến tranh và biến thiên thời cuộc.'
    },
    {
      year: 1985,
      label: '1985',
      eraName: 'Thời Kỳ Đổi Mới & Phục Hồi',
      historicalPeriod: 'Thập niên 1980 - 1990',
      historicalName: loc.vietnameseName || loc.name,
      architecturalEvolution: 'Sau ngày đất nước thống nhất và bước vào thời kỳ Đổi Mới, công trình được đưa vào danh mục di sản bảo tồn, tu bổ các hạng mục xuống cấp.',
      structureChanges: ['Trùng tu mái ngói và các chi tiết chạm khắc', 'Xây dựng khuôn viên bảo vệ di tích'],
      historicalContext: 'Thời kỳ phục hồi và tôn vinh các giá trị văn hóa truyền thống dân tộc.',
      materialsUsed: 'Vật liệu phục chế di sản, gỗ lim, gạch lát phục cổ',
      visualFilter: 'saturate(0.7) contrast(1.1) brightness(0.96)',
      quote: 'Bảo tồn và thắp sáng lại những giá trị di sản quý báu của tiền nhân để lại.'
    },
    {
      year: 2026,
      label: '2026',
      eraName: 'Kỷ Nguyên Số & Tỏa Sáng Đương Đại',
      historicalPeriod: 'Thời đại kỷ nguyên số 2026',
      historicalName: loc.vietnameseName || loc.name,
      architecturalEvolution: `Được bảo tồn khoa học theo tiêu chuẩn hiện đại, ứng dụng công nghệ 3D/AR số hóa và trở thành điểm đến văn hóa du lịch tự hào của vùng đất phương Nam.`,
      structureChanges: ['Số hóa di sản 3D tương tác', 'Chiếu sáng mỹ thuật thông minh', 'Cảnh quan xanh sạch đẹp văn minh'],
      historicalContext: loc.culturalSignificance || loc.shortDesc,
      materialsUsed: 'Vật liệu bảo tồn cao cấp chuẩn quốc tế, công nghệ vi khí hậu',
      visualFilter: 'none',
      quote: `Di sản sống trường tồn cùng non sông đất nước thế kỷ 21.`
    }
  ];
}

export const ARHeritageScannerModal: React.FC<ARHeritageScannerModalProps> = ({
  locations,
  selectedInitialLocation,
  onClose,
  onSelectLocation,
  onSelectAndTeleport,
  onStartQuest,
  onAwardLP
}) => {
  const locList = (locations && locations.length > 0) ? locations : LOCATIONS;
  const [selectedLoc, setSelectedLoc] = useState<Location3D>(
    selectedInitialLocation || locList[0] || LOCATIONS[0]
  );
  
  // 360 Viewport Transforms
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [pitchAngle, setPitchAngle] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isNarrationPlaying, setIsNarrationPlaying] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'normal' | 'wireframe' | 'split_compare'>('normal');

  // ⏳ HISTORICAL TIME SLIDER ENGINE STATE
  const eras = getErasForLocation(selectedLoc);
  const [activeEraIndex, setActiveEraIndex] = useState<number>(eras.length - 1);
  const [isTimelapsePlaying, setIsTimelapsePlaying] = useState<boolean>(false);
  const [splitPosition, setSplitPosition] = useState<number>(50); // 0-100% for Before & After split slider
  const [isSplitDragging, setIsSplitDragging] = useState<boolean>(false);

  // Active Hotspot Card
  const [activeHotspot, setActiveHotspot] = useState<{
    id: string;
    x: number;
    y: number;
    title: string;
    category: string;
    content: string;
  } | null>(null);

  // Scanned / Explored IDs state in localStorage
  const [exploredIds, setExploredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('saigon_vr_explored_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Current Active Era
  const currentEra = eras[Math.min(activeEraIndex, eras.length - 1)] || eras[0];

  // Dragging state for 360 VR Pan
  const isDragging = useRef<boolean>(false);
  const startCoords = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const splitContainerRef = useRef<HTMLDivElement>(null);

  // When location changes, reset era to the latest one
  useEffect(() => {
    const locEras = getErasForLocation(selectedLoc);
    setActiveEraIndex(locEras.length - 1);
    setIsTimelapsePlaying(false);
  }, [selectedLoc.id]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // ⏩ Auto Timelapse Historical Playback
  useEffect(() => {
    if (!isTimelapsePlaying) return;
    const interval = setInterval(() => {
      setActiveEraIndex(prev => {
        const next = prev + 1;
        if (next >= eras.length) {
          setIsTimelapsePlaying(false);
          sound.playSuccess();
          return prev;
        }
        sound.playDanTranhNote(350 + next * 40, 0, 0.15);
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isTimelapsePlaying, eras.length]);

  // Handle first-time reward on visiting location in VR
  useEffect(() => {
    if (!exploredIds.includes(selectedLoc.id)) {
      const updated = [...exploredIds, selectedLoc.id];
      setExploredIds(updated);
      try {
        localStorage.setItem('saigon_vr_explored_ids', JSON.stringify(updated));
      } catch {}
      
      if (onAwardLP) {
        onAwardLP(75, `Quét AR & Du Hành Thời Gian Kiến Trúc: ${selectedLoc.vietnameseName || selectedLoc.name}`);
      }

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  }, [selectedLoc.id]);

  // 3D Hotspots customized for each location
  const hotspots = [
    {
      id: 'hs_1',
      x: 32,
      y: 38,
      title: 'Dấu Ấn Kiến Trúc Giai Đoạn Này',
      category: 'Kiến Trúc',
      content: currentEra.architecturalEvolution
    },
    {
      id: 'hs_2',
      x: 68,
      y: 46,
      title: 'Vật Liệu & Kỹ Nghệ Xây Dựng',
      category: 'Kỹ Thuật',
      content: `Vật liệu chủ đạo: ${currentEra.materialsUsed}. Cải tiến: ${currentEra.structureChanges.join('; ')}`
    },
    {
      id: 'hs_3',
      x: 50,
      y: 70,
      title: 'Bối Cảnh Xã Hội & Sự Kiện',
      category: 'Lịch Sử',
      content: currentEra.historicalContext
    }
  ];

  // Mouse / Touch handlers for 360 Panoramic Look-Around
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isSplitDragging) return;
    isDragging.current = true;
    startCoords.current = { x: e.clientX, y: e.clientY };
    setIsAutoRotating(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isSplitDragging && splitContainerRef.current) {
      const rect = splitContainerRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
      setSplitPosition(pct);
      return;
    }

    if (!isDragging.current) return;
    const deltaX = e.clientX - startCoords.current.x;
    const deltaY = e.clientY - startCoords.current.y;
    startCoords.current = { x: e.clientX, y: e.clientY };

    setRotationAngle(prev => (prev + deltaX * 0.4) % 360);
    setPitchAngle(prev => Math.max(-45, Math.min(45, prev - deltaY * 0.3)));
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsSplitDragging(false);
  };

  // Play Audio Narration for the selected historical era
  const handlePlayAudioNarration = () => {
    sound.playClick();
    if (isNarrationPlaying) {
      sound.stopSpeech();
      setIsNarrationPlaying(false);
    } else {
      const textToRead = `Năm ${currentEra.year}, ${currentEra.historicalName}. ${currentEra.eraName}. ${currentEra.architecturalEvolution} Bối cảnh: ${currentEra.historicalContext}`;
      sound.playDanTranhNote(440, 0, 0.2);
      sound.speakText(
        textToRead,
        () => setIsNarrationPlaying(false),
        0.95,
        1.0
      );
      setIsNarrationPlaying(true);
    }
  };

  // Switch location handler
  const handleSelectLandmark = (loc: Location3D) => {
    sound.playClick();
    setSelectedLoc(loc);
    setActiveHotspot(null);
    if (onSelectLocation) onSelectLocation(loc);
  };

  // Handle Era Click
  const handleSelectEra = (idx: number) => {
    sound.playClick();
    setActiveEraIndex(idx);
    setIsTimelapsePlaying(false);
    sound.playDanTranhNote(300 + idx * 50, 0, 0.18);
  };

  // Calculate dynamic CSS filter
  const getFilterStyle = (era: HistoricalEra) => {
    if (viewMode === 'wireframe') {
      return 'invert(1) hue-rotate(180deg) contrast(2.2) brightness(0.9)';
    }
    return era.visualFilter;
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 select-none animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl h-[94vh] max-h-[900px] bg-stone-900 border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* TOP HUD BAR */}
        <div className="px-4 py-3 bg-stone-950/95 border-b border-amber-500/30 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
              <History className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-amber-300">
                  {selectedLoc.vietnameseName || selectedLoc.name}
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/90 text-white font-black uppercase tracking-wider shadow flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  Time Travel 3D
                </span>
              </div>
              <p className="text-xs text-stone-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-amber-400" />
                {selectedLoc.district} • {selectedLoc.province} • Khởi dựng {selectedLoc.builtYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Visual View Mode Toggles */}
            <div className="hidden sm:flex items-center bg-stone-900 rounded-xl p-1 border border-stone-750 text-xs">
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('normal');
                }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  viewMode === 'normal'
                    ? 'bg-amber-500 text-stone-950 shadow'
                    : 'text-stone-400 hover:text-amber-200'
                }`}
                title="Chế độ Thị Giác Kỷ Nguyên Lịch Sử"
              >
                Kỷ Nguyên
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('split_compare');
                }}
                className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                  viewMode === 'split_compare'
                    ? 'bg-amber-500 text-stone-950 shadow'
                    : 'text-stone-400 hover:text-amber-200'
                }`}
                title="Thanh Trượt So Sánh Quá Khứ vs Hiện Tại (Before & After Split)"
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>So Sánh</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setViewMode('wireframe');
                }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  viewMode === 'wireframe'
                    ? 'bg-amber-500 text-stone-950 shadow'
                    : 'text-stone-400 hover:text-amber-200'
                }`}
                title="Bản Vẽ Phục Dựng Kết Cấu Kỹ Thuật"
              >
                Bản Vẽ
              </button>
            </div>

            {/* Audio Voice Narration */}
            <button
              onClick={handlePlayAudioNarration}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isNarrationPlaying 
                  ? 'bg-amber-500 text-stone-950 border-amber-400 animate-pulse font-bold' 
                  : 'bg-stone-800/80 text-amber-300 border-amber-500/30 hover:bg-stone-700'
              }`}
              title="Nghe thuyết minh tiến trình kiến trúc"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isNarrationPlaying ? 'Đang đọc...' : 'Thuyết minh'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                sound.stopSpeech();
                onClose();
              }}
              className="w-9 h-9 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-rose-900/40 border border-stone-700 flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN BODY: 360° VR VIEWPORT + HISTORICAL TIME SLIDER + CONTROLS */}
        <div className="relative flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* 360° INTERACTIVE VIEWPORT WITH HISTORICAL SHADER */}
          <div 
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="relative flex-1 bg-stone-950 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
          >
            {/* Standard Mode: Single Panoramic Sphere with Historical Filter */}
            {viewMode !== 'split_compare' ? (
              <div 
                className="absolute inset-0 transition-all duration-300 ease-out"
                style={{
                  backgroundImage: `url(${selectedLoc.coverImage})`,
                  backgroundPosition: `${(rotationAngle / 360) * 100}% ${50 + pitchAngle * 0.4}%`,
                  backgroundSize: `${zoomLevel * 140}% cover`,
                  backgroundRepeat: 'repeat-x',
                  filter: getFilterStyle(currentEra)
                }}
              />
            ) : (
              /* Split-Screen Compare Mode (Before & After Slider) */
              <div ref={splitContainerRef} className="absolute inset-0 overflow-hidden">
                {/* Left Side: Historical Past Era View */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.6)] z-10"
                  style={{ width: `${splitPosition}%` }}
                >
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-full"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                      height: '100%',
                      backgroundImage: `url(${selectedLoc.coverImage})`,
                      backgroundPosition: `${(rotationAngle / 360) * 100}% ${50 + pitchAngle * 0.4}%`,
                      backgroundSize: `${zoomLevel * 140}% cover`,
                      backgroundRepeat: 'repeat-x',
                      filter: currentEra.visualFilter
                    }}
                  />
                  {/* Left Label */}
                  <div className="absolute top-16 left-4 px-3 py-1 rounded-xl bg-stone-950/90 border border-amber-500/50 text-amber-300 text-xs font-bold shadow-lg backdrop-blur-md">
                    🏛️ Quá Khứ: Năm {currentEra.year}
                  </div>
                </div>

                {/* Right Side: Modern Present Day View */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${selectedLoc.coverImage})`,
                    backgroundPosition: `${(rotationAngle / 360) * 100}% ${50 + pitchAngle * 0.4}%`,
                    backgroundSize: `${zoomLevel * 140}% cover`,
                    backgroundRepeat: 'repeat-x',
                    filter: 'none'
                  }}
                >
                  {/* Right Label */}
                  <div className="absolute top-16 right-4 px-3 py-1 rounded-xl bg-stone-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg backdrop-blur-md">
                    ✨ Hiện Đại: Năm 2026
                  </div>
                </div>

                {/* Drag Handle Divider */}
                <div 
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setIsSplitDragging(true);
                  }}
                  style={{ left: `${splitPosition}%` }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-9 h-9 rounded-full bg-amber-500 text-stone-950 border-2 border-white shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-115 active:scale-125 transition-transform"
                  title="Kéo sang trái/phải để so sánh kiến trúc xưa và nay"
                >
                  <SplitSquareVertical className="w-5 h-5" />
                </div>
              </div>
            )}

            {/* Dark vignette overlay for depth */}
            <div className="absolute inset-0 bg-radial from-transparent via-stone-950/30 to-stone-950/80 pointer-events-none" />

            {/* Floating Era Badge & Compass */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
              <div className="px-3 py-1.5 rounded-xl bg-stone-900/90 backdrop-blur-md border border-amber-500/40 flex items-center gap-2 text-xs text-amber-300 font-mono shadow-xl">
                <Compass 
                  className="w-4 h-4 text-amber-400" 
                  style={{ transform: `rotate(${-rotationAngle}deg)` }}
                />
                <span>Góc: {Math.round(rotationAngle)}°</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-black text-xs shadow-xl flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>NĂM {currentEra.year}</span>
              </div>
            </div>

            {/* Interactive 3D Hotspots on the landmark */}
            {hotspots.map((hs, idx) => {
              const basePos = (hs.x * 3.6 + rotationAngle) % 360;
              const isVisibleInFOV = basePos > 40 && basePos < 320;
              const screenX = ((basePos - 40) / 280) * 100;

              if (!isVisibleInFOV) return null;

              return (
                <div 
                  key={hs.id}
                  style={{
                    left: `${screenX}%`,
                    top: `${hs.y + pitchAngle * 0.3}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-75"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                      setActiveHotspot(hs);
                    }}
                    className="group relative flex items-center justify-center"
                  >
                    <span className="absolute w-8 h-8 rounded-full bg-amber-500/30 animate-ping" />
                    <span className="w-7 h-7 rounded-full bg-amber-500 border-2 border-stone-950 text-stone-950 flex items-center justify-center font-bold text-xs shadow-lg group-hover:scale-125 transition-transform">
                      {idx + 1}
                    </span>
                    <span className="absolute bottom-8 px-2.5 py-1 rounded-lg bg-stone-900/90 text-[11px] font-semibold text-amber-200 whitespace-nowrap border border-amber-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {hs.title}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Active Hotspot Info Card Popup */}
            {activeHotspot && (
              <div 
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-28 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 p-4 rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-amber-500/50 shadow-2xl z-30 animate-in slide-in-from-bottom duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 font-bold uppercase border border-amber-500/30">
                    {activeHotspot.category} • Năm {currentEra.year}
                  </span>
                  <button 
                    onClick={() => setActiveHotspot(null)}
                    className="text-stone-400 hover:text-stone-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h4 className="text-sm font-bold text-amber-300 mb-1">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {activeHotspot.content}
                </p>
                <div className="flex items-center justify-between text-[11px] text-amber-400/80 pt-2 border-t border-stone-800">
                  <span>🏛️ Khảo sát kiến trúc {currentEra.year}</span>
                  <button 
                    onClick={() => {
                      sound.playClick();
                      sound.speakText(activeHotspot.content);
                    }}
                    className="text-amber-300 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Volume2 className="w-3 h-3" /> Nghe chi tiết
                  </button>
                </div>
              </div>
            )}

            {/* Quick Viewport Floating Action Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.2))}
                className="w-8 h-8 rounded-xl bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:bg-stone-800 flex items-center justify-center shadow-lg"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.2))}
                className="w-8 h-8 rounded-xl bg-stone-900/80 backdrop-blur-md border border-stone-700 text-stone-200 hover:bg-stone-800 flex items-center justify-center shadow-lg"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`w-8 h-8 rounded-xl border flex items-center justify-center shadow-lg transition-all ${
                  isAutoRotating 
                    ? 'bg-amber-500 text-stone-950 border-amber-400' 
                    : 'bg-stone-900/80 text-stone-300 border-stone-700 hover:bg-stone-800'
                }`}
                title="Tự động xoay 360°"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            {/* ⏳ DÒNG THỜI GIAN LỊCH SỬ TƯƠNG TÁC (HISTORICAL TIME SLIDER TOOL BAR) */}
            <div className="absolute bottom-3 left-3 right-3 sm:left-6 sm:right-6 z-30 p-3 sm:p-4 rounded-3xl bg-stone-950/95 border border-amber-500/50 shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <span>Dòng Thời Gian Lịch Sử Kiến Trúc</span>
                      <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500 text-stone-950 font-black">
                        Năm {currentEra.year}
                      </span>
                    </h3>
                    <p className="text-[11px] text-stone-400 truncate max-w-[200px] sm:max-w-md">
                      {currentEra.historicalName} • {currentEra.eraName}
                    </p>
                  </div>
                </div>

                {/* Timelapse Auto Playback Button */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setIsTimelapsePlaying(!isTimelapsePlaying);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow transition-all ${
                      isTimelapsePlaying
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 hover:scale-105'
                    }`}
                    title="Tự động tua dòng thời gian lịch sử qua các thế kỷ"
                  >
                    {isTimelapsePlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isTimelapsePlaying ? 'Dừng Tua' : 'Tua Lịch Sử'}</span>
                  </button>
                </div>
              </div>

              {/* Historical Step Slider Milestones */}
              <div className="relative pt-2 pb-1">
                {/* Connecting Track Bar */}
                <div className="absolute top-5 left-4 right-4 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 transition-all duration-500"
                    style={{ width: `${(activeEraIndex / (eras.length - 1)) * 100}%` }}
                  />
                </div>

                {/* Milestones Buttons */}
                <div className="relative flex justify-between items-center z-10 px-1">
                  {eras.map((era, idx) => {
                    const isActive = activeEraIndex === idx;
                    const isPassed = activeEraIndex >= idx;

                    return (
                      <button
                        key={`era-btn-${era.year}`}
                        onClick={() => handleSelectEra(idx)}
                        className="flex flex-col items-center group focus:outline-none transition-transform"
                      >
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[11px] border-2 transition-all shadow-lg ${
                          isActive 
                            ? 'bg-amber-400 text-stone-950 border-white scale-125 ring-4 ring-amber-400/40' 
                            : isPassed 
                              ? 'bg-amber-600 text-white border-amber-400' 
                              : 'bg-stone-800 text-stone-400 border-stone-700 hover:border-amber-500/60'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className={`mt-1.5 text-[11px] font-bold transition-colors ${
                          isActive ? 'text-amber-300 scale-105' : 'text-stone-400 group-hover:text-stone-200'
                        }`}>
                          {era.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: ARCHITECTURAL EVOLUTION PROFILE & 21 HERITAGE PLACES */}
          <div className="w-full md:w-88 bg-stone-950/95 border-t md:border-t-0 md:border-l border-amber-500/20 flex flex-col p-3.5 overflow-y-auto space-y-3">
            
            {/* 🏛️ ARCHITECTURAL EVOLUTION DOSSIER FOR CURRENT ERA */}
            <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-amber-500/35 shadow-xl space-y-2.5 animate-in fade-in">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hồ Sơ Kiến Trúc Năm {currentEra.year}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700 font-mono">
                  {currentEra.historicalPeriod}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-black text-amber-200 leading-tight">
                  {currentEra.historicalName}
                </h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {currentEra.architecturalEvolution}
                </p>
              </div>

              {/* Structural Changes List */}
              <div className="space-y-1 pt-1 border-t border-stone-800/80">
                <span className="text-[10px] font-bold text-amber-400/90 uppercase">Thay đổi kết cấu:</span>
                {currentEra.structureChanges.map((change, i) => (
                  <div key={i} className="text-[11px] text-stone-300 flex items-start gap-1.5">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span>{change}</span>
                  </div>
                ))}
              </div>

              {/* Materials & Heritage Quote */}
              <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-[11px] text-stone-300 space-y-1">
                <p>
                  <strong className="text-amber-400">Vật liệu:</strong> {currentEra.materialsUsed}
                </p>
                {currentEra.quote && (
                  <p className="italic text-amber-200/90 pt-1 border-t border-stone-800">
                    "{currentEra.quote}"
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons: Teleport or Start Quest */}
            <div className="grid grid-cols-2 gap-2">
              {onSelectAndTeleport && (
                <button
                  onClick={() => {
                    sound.playClick();
                    onSelectAndTeleport(selectedLoc);
                    onClose();
                  }}
                  className="py-2 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" /> Đến Vị Trí Này
                </button>
              )}

              {onStartQuest && (
                <button
                  onClick={() => {
                    sound.playSuccess();
                    onStartQuest(selectedLoc);
                    onClose();
                  }}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-stone-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-lg transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Giải Mật Mã
                </button>
              )}
            </div>

            {/* 21 Heritage Locations List Picker */}
            <div className="flex-1 flex flex-col pt-1">
              <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Chọn Địa Danh (21 Di Sản)</span>
                <span className="text-[10px] text-stone-400">{locList.length} địa điểm</span>
              </h3>

              <div className="flex-1 space-y-1.5 overflow-y-auto max-h-56 md:max-h-64 pr-1">
                {locList.map((loc) => {
                  const isSelected = loc.id === selectedLoc.id;
                  const isExplored = exploredIds.includes(loc.id);

                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleSelectLandmark(loc)}
                      className={`w-full p-2 rounded-xl text-left flex items-center gap-2.5 transition-all border ${
                        isSelected 
                          ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400/40' 
                          : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-amber-500/30 hover:bg-stone-850'
                      }`}
                    >
                      <img 
                        src={loc.thumbnail || loc.coverImage} 
                        alt={loc.name}
                        className="w-10 h-10 rounded-lg object-cover border border-amber-500/30 shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                            {loc.vietnameseName || loc.name}
                          </h4>
                          {isExplored && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                          )}
                        </div>
                        <p className="text-[10px] text-stone-400 truncate">
                          {loc.province} • {loc.builtYear}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
