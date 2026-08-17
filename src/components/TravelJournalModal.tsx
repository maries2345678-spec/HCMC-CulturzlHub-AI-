import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Star, 
  Heart, 
  Share2, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Filter, 
  Check, 
  Award, 
  Sun, 
  Sunset, 
  CloudRain, 
  Wind, 
  Moon, 
  Compass, 
  Tag, 
  Copy,
  ChevronRight,
  Smile,
  Flame,
  Bookmark,
  Camera
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Location3D, TravelJournalEntry, Province } from '../types';
import { sound } from '../utils/audio';

interface TravelJournalModalProps {
  locations: Location3D[];
  initialLocation?: Location3D | null;
  completedQuestLocationIds?: string[];
  onClose: () => void;
  onSelectAndTeleport?: (location: Location3D) => void;
  onShareToForum?: (title: string, content: string, locationName: string) => void;
  onAwardLP?: (amount: number, reason: string) => void;
}

const STORAGE_KEY = 'saigon_travel_journal_entries';

const MOODS = [
  { id: 'proud', label: 'Tự Hào Non Sông', emoji: '🇻🇳', color: 'from-red-600 to-amber-600', text: 'text-red-400' },
  { id: 'wonder', label: 'Say Mê Di Sản', emoji: '✨', color: 'from-amber-500 to-yellow-400', text: 'text-amber-400' },
  { id: 'nostalgic', label: 'Hoài Niệm Xưa', emoji: '📜', color: 'from-orange-600 to-amber-700', text: 'text-orange-400' },
  { id: 'inspired', label: 'Khai Sáng Tri Thức', emoji: '💡', color: 'from-emerald-600 to-teal-500', text: 'text-emerald-400' },
  { id: 'peaceful', label: 'An Yên Tĩnh Lặng', emoji: '🕊️', color: 'from-sky-600 to-cyan-500', text: 'text-sky-400' },
  { id: 'excited', label: 'Hào Sảng Phương Nam', emoji: '🔥', color: 'from-rose-600 to-amber-500', text: 'text-rose-400' },
] as const;

const WEATHERS = [
  { id: 'sunny', label: 'Nắng Vàng', icon: Sun, color: 'text-amber-400' },
  { id: 'sunset', label: 'Chiều Tà Hoàng Hôn', icon: Sunset, color: 'text-orange-400' },
  { id: 'rain', label: 'Mưa Rào Phương Nam', icon: CloudRain, color: 'text-sky-400' },
  { id: 'breeze', label: 'Gió Biển Mát Lành', icon: Wind, color: 'text-teal-400' },
  { id: 'night', label: 'Đêm Hoa Đăng', icon: Moon, color: 'text-indigo-400' },
] as const;

const POPULAR_TAGS = [
  '#KienTrucCo',
  '#LichSuOaiHung',
  '#AmThucXua',
  '#CheckinDep',
  '#NgamThoLuchBat',
  '#VongCoVangBong',
  '#DatThep',
  '#BienDaoQueHuong',
  '#GomSuDatThu',
  '#KyUcThoiGian'
];

export const TravelJournalModal: React.FC<TravelJournalModalProps> = ({
  locations,
  initialLocation,
  completedQuestLocationIds = [],
  onClose,
  onSelectAndTeleport,
  onShareToForum,
  onAwardLP
}) => {
  // Load saved journal entries
  const [entries, setEntries] = useState<TravelJournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}

    // Initial default seed entries for an authentic experience
    return [
      {
        id: 'journal_1',
        locationId: 'loc_ben_nha_rong',
        locationName: 'Bến Nhà Rồng',
        province: 'TP. Hồ Chí Minh',
        district: 'Quận 4',
        thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
        visitedDate: new Date().toLocaleDateString('vi-VN'),
        note: 'Đứng bên bờ sông Sài Gòn lộng gió ngắm đôi rồng ngậm ngọc châu nguyệt trên nóc bến cảng, lòng dâng trào niềm xúc động vô bờ khi nghĩ về chuyến vượt trùng dương tìm đường cứu nước năm 1911 của Bác.',
        mood: 'proud',
        tags: ['#LichSuOaiHung', '#BienDaoQueHuong', '#KyUcThoiGian'],
        rating: 5,
        weather: 'sunset',
        questCompleted: true,
        badgeEarnedName: 'Huy Hiệu Bến Nhà Rồng 1911',
        isFavorite: true,
        updatedAt: new Date().toISOString()
      },
      {
        id: 'journal_2',
        locationId: 'loc_buu_dien',
        locationName: 'Bưu Điện Trung Tâm TP.HCM',
        province: 'TP. Hồ Chí Minh',
        district: 'Quận 1',
        thumbnail: 'https://images.unsplash.com/photo-1598887142487-3c854d51d2c7?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1598887142487-3c854d51d2c7?auto=format&fit=crop&w=1200&q=80',
        visitedDate: new Date().toLocaleDateString('vi-VN'),
        note: 'Vòm trần sắt uốn lượn phong cách Eiffel tuyệt mỹ. Đứng ngắm hai bức bản đồ lịch sử vẽ tay 1892 mà ngỡ như lạc về Sài Gòn hoa lệ một thế kỷ trước. Nhất định sẽ quay lại viết vài dòng bưu thiếp gửi bạn bè.',
        mood: 'wonder',
        tags: ['#KienTrucCo', '#CheckinDep', '#KyUcThoiGian'],
        rating: 5,
        weather: 'sunny',
        questCompleted: true,
        badgeEarnedName: 'Huy Hiệu Bưu Điện Cổ Điển',
        isFavorite: true,
        updatedAt: new Date().toISOString()
      }
    ];
  });

  // Active View Tab: 'list' | 'editor'
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>(
    initialLocation ? 'editor' : 'list'
  );

  // Search & Filters for List View
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>('all');
  const [selectedMoodFilter, setSelectedMoodFilter] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);

  // Form State for Editor
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [selectedLocId, setSelectedLocId] = useState<string>(
    initialLocation?.id || locations[0]?.id || 'loc_ben_nha_rong'
  );
  const [noteContent, setNoteContent] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [mood, setMood] = useState<TravelJournalEntry['mood']>('wonder');
  const [weather, setWeather] = useState<TravelJournalEntry['weather']>('sunny');
  const [selectedTags, setSelectedTags] = useState<string[]>(['#CheckinDep', '#LichSuOaiHung']);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {}
  }, [entries]);

  // If initialLocation changes, prepopulate editor
  useEffect(() => {
    if (initialLocation) {
      setSelectedLocId(initialLocation.id);
      const existing = entries.find(e => e.locationId === initialLocation.id);
      if (existing) {
        setEditingEntryId(existing.id);
        setNoteContent(existing.note);
        setRating(existing.rating);
        setMood(existing.mood);
        setWeather(existing.weather || 'sunny');
        setSelectedTags(existing.tags);
        setIsFavorite(existing.isFavorite || false);
        setCustomPhotoUrl(existing.photoUrl || '');
      } else {
        setEditingEntryId(null);
        setNoteContent('');
        setRating(5);
        setMood('wonder');
        setWeather('sunny');
        setSelectedTags(['#CheckinDep', '#LichSuOaiHung']);
        setIsFavorite(false);
        setCustomPhotoUrl('');
      }
      setActiveTab('editor');
    }
  }, [initialLocation]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleEditEntry = (entry: TravelJournalEntry) => {
    sound.playClick();
    setEditingEntryId(entry.id);
    setSelectedLocId(entry.locationId);
    setNoteContent(entry.note);
    setRating(entry.rating);
    setMood(entry.mood);
    setWeather(entry.weather || 'sunny');
    setSelectedTags(entry.tags);
    setIsFavorite(entry.isFavorite || false);
    setCustomPhotoUrl(entry.photoUrl || '');
    setActiveTab('editor');
  };

  const handleDeleteEntry = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    if (window.confirm('Bạn có chắc chắn muốn xóa trang nhật ký ký sự này không?')) {
      const updated = entries.filter(item => item.id !== id);
      setEntries(updated);
      showToast('Đã xóa trang nhật ký thành công!');
    }
  };

  const handleSaveEntry = () => {
    if (!noteContent.trim()) {
      showToast('Vui lòng nhập cảm nghĩ hoặc ghi chú cá nhân của bạn!');
      return;
    }

    sound.playSuccess();
    const loc = locations.find(l => l.id === selectedLocId) || locations[0];
    const isCompleted = completedQuestLocationIds.includes(loc.id);

    const isNew = !editingEntryId;

    if (editingEntryId) {
      // Update existing
      setEntries(prev => prev.map(item => {
        if (item.id === editingEntryId) {
          return {
            ...item,
            locationId: loc.id,
            locationName: loc.name,
            province: loc.province,
            district: loc.district,
            thumbnail: loc.thumbnail,
            coverImage: loc.coverImage,
            note: noteContent.trim(),
            rating,
            mood,
            weather,
            tags: selectedTags,
            photoUrl: customPhotoUrl.trim() || undefined,
            isFavorite,
            questCompleted: isCompleted,
            updatedAt: new Date().toISOString()
          };
        }
        return item;
      }));
      showToast('Đã cập nhật trang nhật ký thành công!');
    } else {
      // Create new
      const newEntry: TravelJournalEntry = {
        id: `journal_${Date.now()}`,
        locationId: loc.id,
        locationName: loc.name,
        province: loc.province,
        district: loc.district,
        thumbnail: loc.thumbnail,
        coverImage: loc.coverImage,
        visitedDate: new Date().toLocaleDateString('vi-VN'),
        note: noteContent.trim(),
        rating,
        mood,
        weather,
        tags: selectedTags,
        photoUrl: customPhotoUrl.trim() || undefined,
        isFavorite,
        questCompleted: isCompleted,
        updatedAt: new Date().toISOString()
      };

      setEntries(prev => [newEntry, ...prev]);

      // Award bonus LP for reflecting in travel journal
      if (onAwardLP && isNew) {
        onAwardLP(30, `Đính kèm cảm nghĩ Nhật Ký Lữ Hành tại ${loc.name}`);
      }

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 }
      });

      showToast('🎉 Đã thêm vào Nhật Ký Lữ Hành (+30 LP)!');
    }

    setActiveTab('list');
  };

  const handleToggleTag = (tag: string) => {
    sound.playClick();
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      if (selectedTags.length >= 5) {
        showToast('Bạn có thể chọn tối đa 5 thẻ kỷ niệm.');
        return;
      }
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleShareEntry = (entry: TravelJournalEntry, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    if (onShareToForum) {
      onShareToForum(
        `[Nhật Ký Lữ Hành] Ký ức tại ${entry.locationName}`,
        `"${entry.note}" \n\n📍 Địa danh: ${entry.locationName} (${entry.province || 'Nam Bộ'})\n⭐ Đánh giá: ${entry.rating}/5 sao | Cảm xúc: ${entry.mood}\n🏷️ Thẻ: ${entry.tags.join(' ')}`,
        entry.locationName
      );
      showToast('Đã chia sẻ trang nhật ký lên Diễn đàn (+50 LP)!');
    } else {
      navigator.clipboard.writeText(`[Nhật Ký Lữ Hành - ${entry.locationName}]\n${entry.note}\n⭐ Đánh giá: ${entry.rating}/5 sao`);
      showToast('Đã sao chép nội dung nhật ký vào bộ nhớ tạm!');
    }
  };

  // Filtered Entries
  const filteredEntries = entries.filter(entry => {
    const matchSearch = entry.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.note.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchProvince = selectedProvinceFilter === 'all' || entry.province === selectedProvinceFilter;
    const matchMood = selectedMoodFilter === 'all' || entry.mood === selectedMoodFilter;
    const matchFav = !onlyFavorites || entry.isFavorite;
    return matchSearch && matchProvince && matchMood && matchFav;
  });

  const selectedLocationObj = locations.find(l => l.id === selectedLocId) || locations[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-stone-900 border border-amber-500/40 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-stone-100"
      >
        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-amber-500 text-stone-950 font-bold text-xs shadow-2xl animate-in slide-in-from-top duration-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-stone-950" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 bg-stone-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Cinzel',serif] font-bold text-lg sm:text-xl text-amber-200">
                  Nhật Ký Lữ Hành Phương Nam
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  {entries.length} Ký sự
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Lưu giữ cảm nghĩ, ghi chú kỷ niệm & đánh giá sau mỗi chuyến khám phá di sản
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch button */}
            <div className="flex bg-stone-900 p-1 rounded-xl border border-stone-800">
              <button
                onClick={() => { sound.playClick(); setActiveTab('list'); }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'list' 
                    ? 'bg-amber-500 text-stone-950 shadow' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Sổ Ký Sự ({entries.length})
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setEditingEntryId(null);
                  setNoteContent('');
                  setRating(5);
                  setMood('wonder');
                  setSelectedTags(['#CheckinDep', '#LichSuOaiHung']);
                  setIsFavorite(false);
                  setCustomPhotoUrl('');
                  setActiveTab('editor');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  activeTab === 'editor' 
                    ? 'bg-amber-500 text-stone-950 shadow' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Viết Nhật Ký Mới</span>
              </button>
            </div>

            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="w-9 h-9 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'list' ? (
            /* TAB 1: LIST OF JOURNAL ENTRIES */
            <div className="space-y-4">
              {/* Search & Filter Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div className="sm:col-span-5 relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm theo tên địa danh, cảm nghĩ, hashtag..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <select
                    value={selectedProvinceFilter}
                    onChange={(e) => setSelectedProvinceFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">Tất Cả Vùng Đất</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Bình Dương">Bình Dương</option>
                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <select
                    value={selectedMoodFilter}
                    onChange={(e) => setSelectedMoodFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">Tất Cả Cảm Xúc</option>
                    {MOODS.map(m => (
                      <option key={m.id} value={m.id}>{m.emoji} {m.label}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 flex items-center">
                  <button
                    onClick={() => setOnlyFavorites(!onlyFavorites)}
                    className={`w-full py-2 px-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      onlyFavorites 
                        ? 'bg-rose-500/20 border-rose-500 text-rose-300' 
                        : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>Yêu Thích</span>
                  </button>
                </div>
              </div>

              {/* Journal Entries Grid / Stream */}
              {filteredEntries.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-3xl bg-stone-950/60 border border-stone-800 space-y-3">
                  <BookOpen className="w-12 h-12 text-stone-600 mx-auto" />
                  <h4 className="text-base font-bold text-stone-300">Chưa có trang nhật ký phù hợp</h4>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    Hãy nhấp vào nút "Viết Nhật Ký Mới" hoặc hoàn thành một nhiệm vụ di sản để bắt đầu ghi lại cảm nghĩ và kỷ niệm của bạn!
                  </p>
                  <button
                    onClick={() => { sound.playClick(); setActiveTab('editor'); }}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold inline-flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Viết Trang Nhật Ký Đầu Tiên</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredEntries.map((entry) => {
                    const moodObj = MOODS.find(m => m.id === entry.mood) || MOODS[0];
                    const weatherObj = WEATHERS.find(w => w.id === entry.weather) || WEATHERS[0];
                    const WeatherIcon = weatherObj.icon;
                    const loc = locations.find(l => l.id === entry.locationId);

                    return (
                      <div
                        key={entry.id}
                        onClick={() => handleEditEntry(entry)}
                        className="group relative rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between cursor-pointer"
                      >
                        {/* Top Card Bar */}
                        <div>
                          <div className="flex items-start gap-3 mb-3">
                            <img
                              src={entry.thumbnail || entry.coverImage || loc?.thumbnail}
                              alt={entry.locationName}
                              className="w-14 h-14 rounded-xl object-cover border border-stone-700 shrink-0 group-hover:scale-105 transition-transform"
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-bold text-sm text-amber-200 truncate group-hover:text-amber-300">
                                  {entry.locationName}
                                </h4>
                                {entry.isFavorite && (
                                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                                )}
                              </div>
                              <p className="text-[11px] text-stone-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-amber-500" />
                                <span>{entry.district || loc?.district || 'Nam Bộ'}, {entry.province || loc?.province}</span>
                              </p>
                              
                              {/* Date & Rating */}
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-stone-500 flex items-center gap-1 font-mono">
                                  <Calendar className="w-3 h-3" />
                                  {entry.visitedDate}
                                </span>
                                <div className="flex items-center text-amber-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-3 h-3 ${i < entry.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'}`} 
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Mood & Weather Badges */}
                          <div className="flex items-center gap-1.5 flex-wrap mb-2.5">
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
                              <span>{moodObj.emoji}</span>
                              <span>{moodObj.label}</span>
                            </span>
                            
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900 text-stone-300 font-medium border border-stone-800 flex items-center gap-1">
                              <WeatherIcon className={`w-3 h-3 ${weatherObj.color}`} />
                              <span>{weatherObj.label}</span>
                            </span>

                            {entry.questCompleted && (
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 font-bold border border-emerald-500/40 flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>Đã Giải Mã Di Sản</span>
                              </span>
                            )}
                          </div>

                          {/* Note Content */}
                          <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800/80 italic font-serif">
                            "{entry.note}"
                          </p>

                          {/* Tags */}
                          {entry.tags && entry.tags.length > 0 && (
                            <div className="flex items-center gap-1 flex-wrap mt-2.5">
                              {entry.tags.map(tag => (
                                <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-800">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Card Actions Footer */}
                        <div className="flex items-center justify-between pt-3 mt-3 border-t border-stone-800/80">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={(e) => handleShareEntry(entry, e)}
                              className="px-2.5 py-1 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-400 text-[11px] font-bold flex items-center gap-1 border border-stone-800 hover:border-amber-500/30 transition-colors"
                              title="Chia sẻ lên Diễn Đàn hoặc Sao Chép"
                            >
                              <Share2 className="w-3 h-3" />
                              <span>Chia Sẻ</span>
                            </button>

                            {loc && onSelectAndTeleport && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  sound.playClick();
                                  onSelectAndTeleport(loc);
                                  onClose();
                                }}
                                className="px-2.5 py-1 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-[11px] font-bold flex items-center gap-1 border border-stone-800 transition-colors"
                                title="Đến vị trí này trên bản đồ 3D"
                              >
                                <Compass className="w-3 h-3 text-amber-400" />
                                <span>Bay Đến 3D</span>
                              </button>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditEntry(entry);
                              }}
                              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-amber-300"
                              title="Chỉnh sửa ghi chú"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={(e) => handleDeleteEntry(entry.id, e)}
                              className="p-1.5 rounded-lg bg-stone-900 hover:bg-rose-950 text-stone-400 hover:text-rose-400"
                              title="Xóa trang này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* TAB 2: EDITOR (ADD / EDIT JOURNAL ENTRY) */
            <div className="space-y-5 max-w-2xl mx-auto bg-stone-950/80 p-4 sm:p-6 rounded-3xl border border-stone-800">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-amber-400" />
                  <h4 className="font-bold text-base text-amber-300">
                    {editingEntryId ? 'Chỉnh Sửa Trang Ký Sự' : 'Thêm Cảm Nghĩ & Kỷ Niệm Mới'}
                  </h4>
                </div>
                <span className="text-xs text-stone-400">
                  {new Date().toLocaleDateString('vi-VN')}
                </span>
              </div>

              {/* Step 1: Choose Location */}
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Chọn Địa Danh Di Sản Ghé Thăm:</span>
                </label>
                <select
                  value={selectedLocId}
                  onChange={(e) => {
                    sound.playClick();
                    setSelectedLocId(e.target.value);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-amber-500/30 text-xs text-amber-200 font-semibold focus:outline-none focus:border-amber-400"
                >
                  {locations.map(loc => {
                    const isDone = completedQuestLocationIds.includes(loc.id);
                    return (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} - {loc.district}, {loc.province} {isDone ? '🏆 (Đã xong nhiệm vụ)' : ''}
                      </option>
                    );
                  })}
                </select>

                {/* Selected Location Mini Banner */}
                {selectedLocationObj && (
                  <div className="mt-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center gap-3">
                    <img 
                      src={selectedLocationObj.thumbnail || selectedLocationObj.coverImage} 
                      alt={selectedLocationObj.name} 
                      className="w-12 h-12 rounded-lg object-cover border border-stone-700 shrink-0" 
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-stone-200 truncate">{selectedLocationObj.vietnameseName || selectedLocationObj.name}</p>
                      <p className="text-[11px] text-amber-400/80 truncate">{selectedLocationObj.title}</p>
                      <p className="text-[10px] text-stone-500">Khởi dựng: {selectedLocationObj.builtYear}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Rating & Mood */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-amber-200 mb-1.5 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>Đánh Giá Cảm Nhận:</span>
                  </label>
                  <div className="flex items-center gap-2 bg-stone-900 p-2 rounded-xl border border-stone-800">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => { sound.playClick(); setRating(star); }}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star 
                          className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700 hover:text-amber-500/50'}`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-auto font-mono">{rating}/5 ⭐</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-200 mb-1.5 flex items-center gap-1.5">
                    <Smile className="w-3.5 h-3.5 text-amber-400" />
                    <span>Tâm Trạng / Cảm Xúc:</span>
                  </label>
                  <select
                    value={mood}
                    onChange={(e) => { sound.playClick(); setMood(e.target.value as any); }}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-semibold"
                  >
                    {MOODS.map(m => (
                      <option key={m.id} value={m.id}>{m.emoji} {m.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Weather Atmosphere */}
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bối Cảnh & Thời Tiết Lúc Ghé Thăm:</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {WEATHERS.map(w => {
                    const Icon = w.icon;
                    const isSel = weather === w.id;
                    return (
                      <button
                        key={w.id}
                        type="button"
                        onClick={() => { sound.playClick(); setWeather(w.id); }}
                        className={`p-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                          isSel 
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow' 
                            : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${w.color}`} />
                        <span className="text-[10px]">{w.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Reflection Note (Textarea) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cảm Nghĩ & Ghi Chú Cá Nhân:</span>
                  </label>
                  <span className="text-[10px] text-stone-500">
                    {noteContent.length}/500 ký tự
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  maxLength={500}
                  placeholder="Ghi lại cảm xúc của bạn khi đứng trước di tích này: kiến trúc ấn tượng nhất, câu chuyện lịch sử làm bạn xúc động, món ăn vừa thưởng thức, hoặc một lời hứa sẽ quay lại..."
                  className="w-full p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
                />
              </div>

              {/* Step 5: Tags Selector */}
              <div>
                <label className="block text-xs font-bold text-amber-200 mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Gắn Thẻ Kỷ Niệm (Chọn tối đa 5):</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_TAGS.map(tag => {
                    const isSel = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleToggleTag(tag)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                          isSel 
                            ? 'bg-amber-500 text-stone-950 border-amber-300' 
                            : 'bg-stone-900 text-stone-400 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 6: Custom Photo URL & Favorite */}
              <div className="space-y-3 pt-2 border-t border-stone-800">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-stone-400" />
                    <span>Liên Kết Ảnh Kỷ Niệm Của Bạn (Tùy chọn):</span>
                  </label>
                  <input
                    type="url"
                    value={customPhotoUrl}
                    onChange={(e) => setCustomPhotoUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/... hoặc dán link ảnh kỷ niệm"
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={isFavorite}
                    onChange={(e) => { sound.playClick(); setIsFavorite(e.target.checked); }}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 focus:ring-offset-stone-900"
                  />
                  <span className="text-xs text-stone-300 font-semibold flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                    <span>Đánh dấu đây là địa danh tâm đắc nhất của tôi</span>
                  </span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={handleSaveEntry}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingEntryId ? 'Cập Nhật Nhật Ký' : 'Lưu Vào Nhật Ký Lữ Hành (+30 LP)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => { sound.playClick(); setActiveTab('list'); }}
                  className="py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 font-bold text-xs"
                >
                  Hủy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
