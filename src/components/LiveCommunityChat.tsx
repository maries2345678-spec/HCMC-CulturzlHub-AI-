import React, { useState, useEffect, useRef } from 'react';
import { Users, Send, Smile, Sparkles, MessageCircle, Clock } from 'lucide-react';
import { UserProfile } from '../types';
import { INITIAL_COMMUNITY_MESSAGES } from '../data/forumData';
import { sound } from '../utils/audio';

interface LiveCommunityChatProps {
  user?: UserProfile;
  currentUser?: UserProfile;
  initialMessages?: { id: string; senderName: string; senderAvatar: string; text: string; timestamp: string }[];
}

export const LiveCommunityChat: React.FC<LiveCommunityChatProps> = ({
  user,
  currentUser,
  initialMessages
}) => {
  const activeUser = user || currentUser || {
    name: 'Lữ Khách Phương Nam',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
    title: 'Học Giả Nam Bộ'
  };

  const [messages, setMessages] = useState(() => {
    if (initialMessages && Array.isArray(initialMessages) && initialMessages.length > 0) {
      return initialMessages;
    }
    return INITIAL_COMMUNITY_MESSAGES || [];
  });
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Poll for community chat updates
    const interval = setInterval(() => {
      fetch('/api/chat/messages')
        .then(res => res.json())
        .then(data => {
          if (data.messages && Array.isArray(data.messages)) {
            setMessages(data.messages);
          }
        })
        .catch(() => {});
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async (customText?: string) => {
    const text = (customText || inputText).trim();
    if (!text) return;

    sound.playClick();
    setInputText('');

    try {
      const res = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senderName: activeUser.name,
          senderAvatar: activeUser.avatar,
          text: text
        })
      });
      const data = await res.json();
      if (data.success && data.message) {
        setMessages(prev => [...prev, data.message]);
      }
    } catch {
      const fallbackMsg = {
        id: `msg_${Date.now()}`,
        senderName: activeUser.name,
        senderAvatar: activeUser.avatar,
        text: text,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    }
  };

  const quickReactions = ['🏛️ Bến Thành', '☕ Cà phê vợt', '⛵ Waterbus', '⭐ Đã nhận huy hiệu!', '🛵 Đang đi Chợ Lớn'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="p-5 rounded-3xl bg-stone-900 border border-amber-500/30 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-['Cinzel',serif] font-bold text-lg text-amber-200">
                Sảnh Trò Chuyện Trực Tuyến
              </h2>
              <span className="flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Đang trực tuyến
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Kết nối với các Lữ Khách đang thám hiểm khắp các quận huyện Sài Gòn
            </p>
          </div>
        </div>
      </div>

      {/* Chat Room Window */}
      <div className="h-[520px] rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl flex flex-col overflow-hidden text-stone-100">
        
        {/* Messages Stream */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3.5">
          {messages.map((msg) => {
            const isMe = msg.senderName === user.name;
            return (
              <div key={msg.id} className={`flex items-start gap-2.5 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                <img
                  src={msg.senderAvatar}
                  alt={msg.senderName}
                  className="w-8 h-8 rounded-full object-cover border border-amber-400/40 shrink-0"
                />
                <div className={`max-w-[75%] space-y-1 ${isMe ? 'items-end' : 'items-start'}`}>
                  <div className={`flex items-center gap-2 text-[10px] text-stone-400 ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <span className="font-bold text-stone-300">{msg.senderName}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isMe 
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-medium rounded-tr-none' 
                      : 'bg-stone-950 border border-stone-800 text-stone-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Reaction Bar */}
        <div className="px-4 py-2 bg-stone-950/80 border-t border-stone-800 flex items-center gap-1.5 overflow-x-auto">
          {quickReactions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="px-2.5 py-1 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-[11px] whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Input Box */}
        <div className="p-3.5 bg-stone-950 border-t border-stone-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              id="live-chat-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhắn tin trò chuyện cùng cộng đồng Lữ Khách..."
              className="flex-1 p-2.5 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-xs sm:text-sm text-stone-100 outline-none"
            />
            <button
              type="submit"
              id="live-chat-send-btn"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none text-stone-950 font-bold transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
