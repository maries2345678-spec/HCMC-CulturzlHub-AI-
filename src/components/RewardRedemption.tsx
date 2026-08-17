import React, { useState, useEffect } from 'react';
import { 
  Gift, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  QrCode, 
  Download, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  X,
  ExternalLink,
  Compass,
  Briefcase,
  Check,
  Shield,
  Zap,
  Tag,
  Package,
  Layers
} from 'lucide-react';
import { RewardItem, UserProfile } from '../types';
import { REWARDS } from '../data/rewards';
import { sound } from '../utils/audio';
import { 
  getLearningMemory, 
  toggleEquipGear, 
  addGearToInventory, 
  getActiveTravelerBuffs,
  EquippedGearItem 
} from '../utils/learningStorage';

interface RewardRedemptionProps {
  user?: UserProfile;
  currentUser?: UserProfile;
  rewards?: RewardItem[];
  userLP?: number;
  badgesCount?: number;
  onRedeemReward: (reward: RewardItem) => boolean;
}

export const RewardRedemption: React.FC<RewardRedemptionProps> = ({
  user,
  currentUser,
  rewards,
  userLP,
  badgesCount,
  onRedeemReward
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'gear' | 'ticket' | 'cuisine' | 'inventory'>('gear');
  const [selectedRewardForRedeem, setSelectedRewardForRedeem] = useState<RewardItem | null>(null);
  const [activeVoucher, setActiveVoucher] = useState<{ reward: RewardItem; code: string; date: string } | null>(null);
  const [equippedMemory, setEquippedMemory] = useState(getLearningMemory());

  const activeUser = user || currentUser;
  const currentLP = activeUser?.lpPoints ?? userLP ?? 0;
  const currentBadgesCount = activeUser?.badgesUnlocked?.length ?? badgesCount ?? 0;
  const rewardsList = rewards || REWARDS || [];

  const activeBuffs = getActiveTravelerBuffs();

  const handleToggleEquip = (gearId: string) => {
    sound.playClick();
    toggleEquipGear(gearId);
    setEquippedMemory(getLearningMemory());
  };

  const filteredRewards = rewardsList.filter(r => {
    if (activeTab === 'all') return true;
    if (activeTab === 'gear') return r.id.startsWith('rew_gear_') || r.category === 'souvenir';
    if (activeTab === 'ticket') return r.category === 'ticket';
    if (activeTab === 'cuisine') return r.category === 'cuisine';
    return true;
  });

  const handleConfirmRedeem = () => {
    if (!selectedRewardForRedeem) return;

    const success = onRedeemReward(selectedRewardForRedeem);
    if (success) {
      sound.playSuccess();
      const voucherCode = `SG-${selectedRewardForRedeem.id.toUpperCase().replace('REW_', '').slice(0, 8)}-${Math.floor(100000 + Math.random() * 900000)}`;
      
      // If it is traveler gear, add to player inventory automatically
      if (selectedRewardForRedeem.id.startsWith('rew_gear_')) {
        let buffName = 'Trang Bị Thám Hiểm';
        let buffDescription = selectedRewardForRedeem.description;
        let bonusLP = 0;
        let bonusExp = 0;

        if (selectedRewardForRedeem.id.includes('magnifier')) {
          buffName = 'Kính Lúp Soi Cổ Vật';
          buffDescription = 'Nhận thêm +20% Điểm Thám Hiểm (LP) khi trả lời đúng lần đầu';
          bonusLP = 20;
        } else if (selectedRewardForRedeem.id.includes('tumbler')) {
          buffName = 'Bình Giữ Nhiệt Lữ Khách';
          buffDescription = 'Tăng +15% EXP nhân vật và bảo vệ năng lượng hành trình';
          bonusExp = 15;
        } else if (selectedRewardForRedeem.id.includes('flashlight')) {
          buffName = 'Đèn Pin Dã Ngoại';
          buffDescription = 'Soi sáng tự động lọc bớt 1 đáp án sai trong câu hỏi';
        }

        const newGear: EquippedGearItem = {
          id: selectedRewardForRedeem.id,
          name: selectedRewardForRedeem.name,
          category: 'tool',
          icon: 'Package',
          buffName,
          buffDescription,
          acquiredDate: new Date().toLocaleDateString('vi-VN'),
          isEquipped: true,
          bonusLPPercent: bonusLP,
          bonusExpPercent: bonusExp
        };
        addGearToInventory(newGear);
        setEquippedMemory(getLearningMemory());
      }

      setActiveVoucher({
        reward: selectedRewardForRedeem,
        code: voucherCode,
        date: new Date().toLocaleDateString('vi-VN')
      });
      setSelectedRewardForRedeem(null);
    } else {
      sound.playError();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      {/* Top Header & LP Balance */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/50 to-stone-900 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            Đặc Quyền Di Sản & Trang Bị Du Hành
          </span>
          <h2 className="font-['Cinzel',serif] font-bold text-2xl sm:text-3xl text-amber-200">
            Kho Trang Bị & Đổi Thưởng Thành Tích
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            Sử dụng Linh Điểm (LP) và Huy hiệu mở khóa để đổi lấy các trang bị du hành di sản thiết thực (Bình giữ nhiệt, Nón tai bèo, Túi canvas, La bàn đồng thau, Sổ tay da) cùng vé trải nghiệm thực tế.
          </p>
        </div>

        {/* User Balance Card */}
        <div className="bg-stone-950/90 p-5 rounded-2xl border border-amber-500/40 min-w-[240px] flex items-center gap-4 shadow-inner">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <p className="text-[11px] text-stone-400 uppercase tracking-wider">Linh Điểm Hiện Có</p>
            <p className="text-2xl font-bold font-mono text-amber-300">{currentLP} LP</p>
            <p className="text-[10px] text-emerald-400 font-semibold">{currentBadgesCount} Huy hiệu di sản</p>
          </div>
        </div>
      </div>

      {/* Active Traveler Buffs Strip */}
      <div className="p-4 rounded-2xl bg-stone-900/90 border border-amber-500/20 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-amber-200">
              Hiệu Ứng Trang Bị Đang Kích Hoạt ({activeBuffs.equippedCount} món)
            </h4>
            <p className="text-[11px] text-stone-400">
              {activeBuffs.extraLPPercent > 0 && `+${activeBuffs.extraLPPercent}% LP • `}
              {activeBuffs.extraExpPercent > 0 && `+${activeBuffs.extraExpPercent}% EXP • `}
              {activeBuffs.hintSpeedBonus && 'Mở Gợi Ý Nhanh • '}
              Trang bị du hành đồng hành cùng lữ khách
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('inventory')}
          className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 flex items-center gap-1.5"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Mở Tủ Đồ Cá Nhân</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-3 overflow-x-auto">
        {[
          { id: 'gear', label: '🎒 Trang Bị Du Hành Di Sản', icon: Briefcase },
          { id: 'ticket', label: '🎫 Vé Trải Nghiệm Thực Tế', icon: Gift },
          { id: 'cuisine', label: '🍜 Hương Vị Ẩm Thực', icon: Sparkles },
          { id: 'all', label: '🌟 Tất Cả Quà Tặng', icon: Layers },
          { id: 'inventory', label: '🏷️ Tủ Đồ Của Tôi', icon: Package }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playClick();
                setActiveTab(tab.id as any);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-md font-extrabold'
                  : 'bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* INVENTORY TAB VIEW */}
      {activeTab === 'inventory' ? (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/30">
            <h3 className="font-bold text-amber-200 text-base mb-1 flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-400" />
              Tủ Đồ Trang Bị Du Hành Của Lữ Khách
            </h3>
            <p className="text-xs text-stone-400">
              Các món đồ thám hiểm bạn đã quy đổi hoặc được trang bị. Hãy bật "Đang Mặc" để nhận hiệu ứng hỗ trợ giải đố và quét AR!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(Object.values(equippedMemory.equippedGear) as EquippedGearItem[]).map((gear: EquippedGearItem) => (
              <div
                key={gear.id}
                className={`p-5 rounded-2xl border transition-all ${
                  gear.isEquipped
                    ? 'bg-amber-950/20 border-amber-500/60 shadow-lg ring-1 ring-amber-500/30'
                    : 'bg-stone-900 border-stone-800 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${
                    gear.isEquipped 
                      ? 'bg-emerald-500 text-stone-950' 
                      : 'bg-stone-800 text-stone-400'
                  }`}>
                    {gear.isEquipped ? 'Đang Trang Bị' : 'Trong Túi Đồ'}
                  </span>
                </div>

                <h4 className="font-bold text-amber-100 text-sm mb-1">{gear.name}</h4>
                <div className="p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 mb-3 space-y-1">
                  <p className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {gear.buffName}
                  </p>
                  <p className="text-[11px] text-stone-300 leading-relaxed">{gear.buffDescription}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-xs">
                  <span className="text-stone-500 text-[10px]">Ngày nhận: {gear.acquiredDate}</span>
                  <button
                    onClick={() => handleToggleEquip(gear.id)}
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                      gear.isEquipped
                        ? 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                        : 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow'
                    }`}
                  >
                    {gear.isEquipped ? 'Tháo Ra' : 'Mặc Ngay'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* REWARDS STORE GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRewards.map((reward) => {
            const canAfford = currentLP >= reward.costLP && currentBadgesCount >= reward.requiredBadgesCount;
            const isGear = reward.id.startsWith('rew_gear_');

            return (
              <div
                key={reward.id}
                className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-stone-950">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-black/40" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {isGear ? (
                      <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        Trang Bị Du Hành
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-wider shadow flex items-center gap-1">
                        <Gift className="w-3 h-3" />
                        Vé / Voucher
                      </span>
                    )}
                  </div>

                  {reward.valueVND && (
                    <div className="absolute top-3 right-3 bg-stone-950/90 border border-amber-500/40 px-2 py-0.5 rounded-lg text-[10px] text-amber-300 font-bold">
                      Trị giá {reward.valueVND}
                    </div>
                  )}

                  {/* LP Cost Badge */}
                  <div className="absolute bottom-3 right-3 bg-stone-950/95 border border-amber-400 px-3 py-1 rounded-xl text-amber-300 font-bold font-mono text-sm shadow">
                    {reward.costLP} LP
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-[10px] text-amber-400/90 font-bold uppercase tracking-wider">
                      {reward.partner}
                    </p>
                    <h3 className="font-bold text-base text-stone-100 group-hover:text-amber-200 transition-colors line-clamp-2">
                      {reward.name}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-3 leading-relaxed">
                      {reward.description}
                    </p>
                  </div>

                  {/* Requirements & Action */}
                  <div className="space-y-3 pt-3 border-t border-stone-800">
                    <div className="flex items-center justify-between text-xs text-stone-400">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Yêu cầu: {reward.requiredBadgesCount} Huy hiệu
                      </span>
                      <span className="text-[11px] text-stone-500">
                        Còn {reward.remainingQuota} suất
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedRewardForRedeem(reward);
                      }}
                      disabled={!canAfford}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        canAfford
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md font-extrabold cursor-pointer'
                          : 'bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700'
                      }`}
                    >
                      <Gift className="w-4 h-4" />
                      <span>{canAfford ? 'Đổi Trang Bị Ngay' : 'Chưa Đủ LP / Huy Hiệu'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CONFIRMATION REDEMPTION MODAL */}
      {selectedRewardForRedeem && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200 text-stone-100">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <h3 className="font-bold text-amber-200 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Xác Nhận Đổi Quà Tặng
              </h3>
              <button
                onClick={() => setSelectedRewardForRedeem(null)}
                className="p-1 rounded-lg bg-stone-800 text-stone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-stone-950 border border-stone-800 flex items-center gap-3">
                <img
                  src={selectedRewardForRedeem.image}
                  alt={selectedRewardForRedeem.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-stone-100 line-clamp-2">
                    {selectedRewardForRedeem.name}
                  </h4>
                  <p className="text-xs text-amber-400 font-mono font-bold mt-1">
                    Chi phí: {selectedRewardForRedeem.costLP} LP
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                {selectedRewardForRedeem.terms}
              </p>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Xác nhận trừ {selectedRewardForRedeem.costLP} LP
                </p>
                <p className="text-[11px] text-stone-300">
                  Sau khi đổi thành công, bạn sẽ nhận được mã voucher QR và trang bị sẽ tự động được thêm vào Tủ Đồ Cá Nhân.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setSelectedRewardForRedeem(null)}
                className="flex-1 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold"
              >
                Hủy Bỏ
              </button>
              <button
                onClick={handleConfirmRedeem}
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold shadow-lg"
              >
                Xác Nhận Đổi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ACTIVE VOUCHER SUCCESS MODAL */}
      {activeVoucher && (
        <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-amber-400/60 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 text-stone-100 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveVoucher(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Cinzel',serif] font-bold text-xl text-amber-200">
                Đổi Trang Bị Thành Công!
              </h3>
              <p className="text-xs text-stone-400">
                Lưu mã QR hoặc xuất trình mã này cho nhân viên đối tác / điểm nhận quà
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-5 rounded-2xl bg-stone-950 border border-amber-500/40 space-y-4 shadow-inner text-center">
              <div className="w-36 h-36 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <QrCode className="w-full h-full text-stone-950" />
              </div>

              <div className="space-y-1">
                <p className="text-[11px] text-stone-400 uppercase tracking-widest">MÃ XÁC NHẬN DU HÀNH</p>
                <p className="text-xl font-bold font-mono text-amber-400 tracking-wider">
                  {activeVoucher.code}
                </p>
              </div>

              <div className="text-left p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs space-y-1">
                <p className="font-bold text-amber-200">{activeVoucher.reward.name}</p>
                <p className="text-stone-400 text-[11px]">Đối tác: {activeVoucher.reward.partner}</p>
                <p className="text-stone-400 text-[11px]">Ngày cấp: {activeVoucher.date}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveVoucher(null);
                setActiveTab('inventory');
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm shadow-md"
            >
              Mở Tủ Đồ Kiểm Tra Trang Bị
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
