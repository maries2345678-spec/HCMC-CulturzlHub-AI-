import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Compass, 
  MapPin, 
  BookOpen, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { ChatMessage, Location3D } from '../types';
import { sound } from '../utils/audio';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: Location3D | null;
  initialPrompt?: string;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  currentLocation,
  initialPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_1',
      sender: 'ai',
      senderName: 'Cố Vấn Ba Son',
      text: 'Dạ, kính chào Lữ Khách! Tôi là Ba Son - Cố Vấn Di Sản & Bách Khoa Toàn Thư Phương Nam. Tôi có thể giải đáp MỌI THẮC MẮC của bạn về lịch sử, kiến trúc, văn hóa, ẩm thực, lộ trình du lịch từ TP. Hồ Chí Minh, Bình Dương đến Bà Rịa - Vũng Tàu, cũng như hỗ trợ bạn giải mã các mật thư, câu đố hóc búa nhất. Bạn muốn hỏi điều gì hôm nay?',
      timestamp: 'Vừa xong',
      suggestedActions: [
        'Bí quyết gốm men xanh Lò Gốm Đại Hưng (Bình Dương)',
        'Kiến trúc Pháp và lịch sử Bạch Dinh (Vũng Tàu)',
        'Giải mã xuất xứ gạch Marseille Nhà thờ Đức Bà',
        'Lịch sử ngọn Hải Đăng cổ nhất Vũng Tàu 1862',
        'Kiến trúc 3 gian 2 chái Nhà Cổ Đốc Phủ Đẩu',
        'Lộ trình du hành Sài Gòn - Vũng Tàu bằng đường thủy'
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputVal.trim();
    if (!query || isLoading) return;

    sound.playClick();
    setInputVal('');

    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      senderName: 'Lữ Khách',
      text: query,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          locationContext: currentLocation ? currentLocation.name : 'TP. Hồ Chí Minh',
          history: messages.slice(-5)
        })
      });

      const data = await response.json();
      const aiReplyText = data.reply || 'Ba Son đã ghi nhận. Hãy tiếp tục khám phá các cổ vật nhé!';

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        senderName: 'Cố Vấn Ba Son',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      sound.playDanTranhNote(587.33, 0.8);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        senderName: 'Cố Vấn Ba Son',
        text: 'Vùng đất Sài Gòn - Chợ Lớn chất chứa biết bao ký ức đẹp. Bạn hãy quan sát kỹ các họa tiết hoa văn và niên đại lịch sử của địa điểm để giải mã bí mật nhé!',
        timestamp: 'Vừa xong'
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Text-To-Speech Narrator in Vietnamese
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    sound.playDanTranhNote(440, 1.2);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md h-full bg-stone-900 border-l border-amber-500/30 flex flex-col shadow-2xl text-stone-100 animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 bg-stone-950 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-['Cinzel',serif] font-bold text-base text-amber-200">
                  Cố Vấn Ba Son AI
                </h3>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30 font-bold">
                  Gemini 3.7
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                {currentLocation ? `Đang hỗ trợ tại: ${currentLocation.name}` : 'Giải mã di sản & manh mối TP.HCM'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (isSpeaking) window.speechSynthesis.cancel();
              onClose();
            }}
            className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div key={msg.id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}>
                <div className="flex items-center gap-1.5 text-[10px] text-stone-400 px-1">
                  <span>{msg.senderName}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div className={`relative max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser 
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-medium rounded-tr-none shadow-md' 
                    : 'bg-stone-950/90 border border-stone-800 text-stone-200 rounded-tl-none shadow-lg'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Read Aloud Voice Button for AI messages */}
                  {!isUser && (
                    <button
                      onClick={() => speakText(msg.text)}
                      className="mt-2.5 pt-2 border-t border-stone-800/80 flex items-center gap-1.5 text-[11px] text-amber-400 hover:text-amber-300 transition-colors"
                      title="Đọc to bằng giọng thuyết minh di sản"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe Ba Son thuyết minh</span>
                    </button>
                  )}
                </div>

                {/* Suggested Action Chips */}
                {msg.suggestedActions && (
                  <div className="flex flex-wrap gap-1.5 pt-2 max-w-[90%]">
                    {msg.suggestedActions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(action)}
                        className="px-2.5 py-1 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs text-left transition-colors flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{action}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-stone-400 text-xs p-3 rounded-2xl bg-stone-950/60 w-fit">
              <Bot className="w-4 h-4 text-amber-400 animate-spin" />
              <span>Ba Son đang giải mã thư tịch cổ...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-stone-950 border-t border-stone-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              id="ai-chat-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Hỏi về lịch sử, câu đố hoặc manh mối..."
              className="flex-1 p-2.5 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-xs sm:text-sm text-stone-100 outline-none"
            />
            <button
              type="submit"
              id="ai-chat-send-btn"
              disabled={isLoading || !inputVal.trim()}
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none text-stone-950 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
