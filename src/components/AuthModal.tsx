import React, { useState } from 'react';
import { 
  X, 
  User, 
  LogIn, 
  UserPlus, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  KeyRound, 
  Mail, 
  Camera,
  LogOut,
  Save,
  CheckCircle2
} from 'lucide-react';
import { UserProfile } from '../types';
import { sound } from '../utils/audio';

interface AuthModalProps {
  currentUser: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onLogin: (updatedProfile: UserProfile) => void;
  onLogout: () => void;
}

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80'
];

export const AuthModal: React.FC<AuthModalProps> = ({
  currentUser,
  isOpen,
  onClose,
  onLogin,
  onLogout
}) => {
  const [tab, setTab] = useState<'profile' | 'login' | 'register'>('profile');
  const [name, setName] = useState<string>(currentUser.name);
  const [email, setEmail] = useState<string>('explorer@saigon.heritage.vn');
  const [password, setPassword] = useState<string>('••••••••');
  const [avatar, setAvatar] = useState<string>(currentUser.avatar);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    
    const updated: UserProfile = {
      ...currentUser,
      name: name.trim() || 'Lữ Khách Phương Nam',
      avatar: avatar
    };

    onLogin(updated);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();

    const updated: UserProfile = {
      ...currentUser,
      id: `user_${Date.now()}`,
      name: name.trim() || (tab === 'login' ? 'Lữ Khách Đăng Nhập' : 'Lữ Khách Mới'),
      avatar: avatar,
      // If registering new, grant welcome bonus
      lpPoints: tab === 'register' ? Math.max(currentUser.lpPoints, 350) : currentUser.lpPoints
    };

    onLogin(updated);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-md bg-stone-900 border-2 border-amber-500/40 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden text-stone-100 flex flex-col">
        
        {/* Header */}
        <div className="relative px-5 py-4 bg-stone-950 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-['Cinzel',serif] font-bold text-base text-amber-200">
                {tab === 'profile' ? 'Hồ Sơ Lữ Khách' : tab === 'login' ? 'Đăng Nhập Tài Khoản' : 'Đăng Ký Khám Phá'}
              </h2>
              <p className="text-[10px] text-stone-400">Lưu trữ tiến trình khám phá & bảng xếp hạng</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 bg-stone-950/60 p-1">
          <button
            onClick={() => { sound.playClick(); setTab('profile'); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              tab === 'profile' 
                ? 'bg-amber-500 text-stone-950 shadow-md' 
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Hồ Sơ Hiện Tại
          </button>
          <button
            onClick={() => { sound.playClick(); setTab('login'); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              tab === 'login' 
                ? 'bg-amber-500 text-stone-950 shadow-md' 
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => { sound.playClick(); setTab('register'); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              tab === 'register' 
                ? 'bg-amber-500 text-stone-950 shadow-md' 
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Tạo Mới (+350 LP)
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-4">
          {tab === 'profile' ? (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              {/* Avatar Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300">Chọn Ảnh Đại Diện (Avatar)</label>
                <div className="flex items-center gap-3">
                  <img 
                    src={avatar} 
                    alt="Preview" 
                    className="w-14 h-14 rounded-2xl border-2 border-amber-400 object-cover shadow-lg" 
                  />
                  <div className="flex-1 grid grid-cols-6 gap-1.5">
                    {PRESET_AVATARS.map((av, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => { sound.playClick(); setAvatar(av); }}
                        className={`w-9 h-9 rounded-xl overflow-hidden border-2 transition-all ${
                          avatar === av ? 'border-amber-400 scale-110 shadow-md' : 'border-stone-700 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={av} alt="Avatar" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">Tên Danh Xưng Lữ Khách</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên hiển thị..."
                  className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500/60 text-xs text-stone-100 outline-none"
                  required
                />
              </div>

              {/* Stats Overview */}
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5">
                <div className="flex justify-between text-stone-300">
                  <span>Cấp Độ Khám Phá:</span>
                  <span className="font-bold text-amber-300">Cấp {currentUser.level} ({currentUser.title})</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Linh Điểm Đang Có:</span>
                  <span className="font-bold text-amber-400 font-mono">{currentUser.lpPoints} LP</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Huy Hiệu Sở Hữu:</span>
                  <span className="font-bold text-emerald-400">{currentUser.badgesUnlocked.length} / 21</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>{saveSuccess ? 'Đã Lưu Thành Công!' : 'Lưu Thay Đổi'}</span>
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">Email / Tên Đăng Nhập</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@saigon.heritage.vn"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500/60 text-xs text-stone-100 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">Mật Khẩu</label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500/60 text-xs text-stone-100 outline-none"
                    required
                  />
                </div>
              </div>

              {tab === 'register' && (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-300">Tên Lữ Khách Bạn Muốn Đặt</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Minh Khang"
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500/60 text-xs text-stone-100 outline-none"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                {tab === 'login' ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                <span>{saveSuccess ? 'Đang Đăng Nhập...' : tab === 'login' ? 'Đăng Nhập Vào Game' : 'Tạo Tài Khoản & Nhận +350 LP'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
