import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Heart, 
  Send, 
  Plus, 
  Search, 
  Award, 
  MapPin, 
  Sparkles, 
  HelpCircle, 
  Coffee, 
  BookOpen, 
  User, 
  Share2,
  X,
  Clock
} from 'lucide-react';
import { ForumPost, UserProfile, Location3D } from '../types';
import { INITIAL_FORUM_POSTS } from '../data/forumData';
import { sound } from '../utils/audio';

interface CommunityForumProps {
  user?: UserProfile;
  currentUser?: UserProfile;
  initialPosts?: ForumPost[];
  locations?: Location3D[];
  onOpenAI?: (contextText?: string) => void;
}

export const CommunityForum: React.FC<CommunityForumProps> = ({
  user,
  currentUser,
  initialPosts,
  locations,
  onOpenAI
}) => {
  const activeUser: UserProfile = user || currentUser || {
    id: 'user_sg_01',
    name: 'Lữ Khách Phương Nam',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80',
    lpPoints: 450,
    level: 2,
    exp: 180,
    title: 'Học Giả Nam Bộ',
    badgesUnlocked: ['badge_ben_thanh'],
    completedQuests: ['quest_ben_thanh_01'],
    joinedDate: '2026'
  };

  const [posts, setPosts] = useState<ForumPost[]>(() => {
    if (initialPosts && Array.isArray(initialPosts) && initialPosts.length > 0) {
      return initialPosts;
    }
    return INITIAL_FORUM_POSTS || [];
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState<{ [postId: string]: string }>({});
  
  // New Post Modal State
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newContent, setNewContent] = useState<string>('');
  const [newCategory, setNewCategory] = useState<'hints' | 'history' | 'cuisine' | 'general' | 'showcase'>('hints');
  const [newLocationTag, setNewLocationTag] = useState<string>('');

  // Fetch latest posts from server
  useEffect(() => {
    fetch('/api/forum/posts')
      .then(res => res.json())
      .then(data => {
        if (data.posts && Array.isArray(data.posts)) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
  }, []);

  const handleLikePost = async (postId: string) => {
    sound.playClick();
    try {
      const res = await fetch(`/api/forum/posts/${postId}/like`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: data.likes, isLiked: data.isLiked } : p));
      }
    } catch {
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1, isLiked: true } : p));
    }
  };

  const handleAddComment = async (postId: string) => {
    const text = (commentInput[postId] || '').trim();
    if (!text) return;

    sound.playClick();
    setCommentInput(prev => ({ ...prev, [postId]: '' }));

    try {
      const res = await fetch(`/api/forum/posts/${postId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName: activeUser.name,
          authorAvatar: activeUser.avatar,
          authorTitle: activeUser.title,
          content: text
        })
      });
      const data = await res.json();
      if (data.success && data.comment) {
        setPosts(prev => prev.map(p => {
          if (p.id === postId) {
            return {
              ...p,
              commentsCount: p.commentsCount + 1,
              comments: [...p.comments, data.comment]
            };
          }
          return p;
        }));
      }
    } catch {
      // Local fallback
      const fallbackComment = {
        id: `c_${Date.now()}`,
        authorName: activeUser.name,
        authorAvatar: activeUser.avatar,
        authorTitle: activeUser.title,
        content: text,
        timestamp: 'Vừa xong',
        likes: 0
      };
      setPosts(prev => prev.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: [...p.comments, fallbackComment]
          };
        }
        return p;
      }));
    }
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    sound.playSuccess();
    try {
      const res = await fetch('/api/forum/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
          category: newCategory,
          locationTag: newLocationTag,
          authorName: activeUser.name,
          authorAvatar: activeUser.avatar,
          authorTitle: activeUser.title,
        })
      });
      const data = await res.json();
      if (data.success && data.post) {
        setPosts(prev => [data.post, ...prev]);
      }
    } catch {
      const fallbackPost: ForumPost = {
        id: `post_${Date.now()}`,
        title: newTitle,
        content: newContent,
        category: newCategory,
        locationTag: newLocationTag,
        authorName: activeUser.name,
        authorAvatar: activeUser.avatar,
        authorTitle: activeUser.title,
        likes: 1,
        isLiked: false,
        commentsCount: 0,
        timestamp: 'Vừa xong',
        comments: []
      };
      setPosts(prev => [fallbackPost, ...prev]);
    }

    setNewTitle('');
    setNewContent('');
    setNewLocationTag('');
    setIsNewPostModalOpen(false);
  };

  const filteredPosts = (posts || []).filter(post => {
    const matchCat = selectedCategory === 'all' || post.category === selectedCategory;
    const matchSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.locationTag && post.locationTag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            Cộng Đồng Lữ Khách Sài Gòn
          </span>
          <h2 className="font-['Cinzel',serif] font-bold text-2xl text-amber-200">
            Diễn Đàn Trao Đổi & Giải Mã Manh Mối
          </h2>
          <p className="text-xs text-stone-300">
            Nơi giao lưu, chia sẻ kinh nghiệm vượt thử thách, mẹo ẩm thực và hỗ trợ các lữ khách đồng hành.
          </p>
        </div>

        <button
          id="create-forum-post-btn"
          onClick={() => { sound.playClick(); setIsNewPostModalOpen(true); }}
          className="py-2.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Đăng Bài Chia Sẻ</span>
        </button>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi, manh mối, địa điểm..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-xs text-stone-200 outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'Tất Cả' },
            { id: 'hints', label: 'Manh Mối & Đố Vui' },
            { id: 'history', label: 'Lịch Sử Di Sản' },
            { id: 'cuisine', label: 'Ẩm Thực Hẻm' },
            { id: 'culture', label: 'Văn Hóa & Check-in' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => { sound.playClick(); setSelectedCategory(cat.id); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-900/80 text-stone-400 hover:text-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const isExpanded = expandedPostId === post.id;

          return (
            <article
              key={post.id}
              className="p-5 rounded-3xl bg-stone-900/90 border border-amber-500/20 hover:border-amber-500/40 shadow-lg text-stone-100 space-y-4 transition-all"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/50"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-xs sm:text-sm text-stone-200">{post.authorName}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {post.authorTitle}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {post.timestamp}
                    </p>
                  </div>
                </div>

                {post.locationTag && (
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-xl border border-amber-500/30 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {post.locationTag}
                  </span>
                )}
              </div>

              {/* Title & Body */}
              <div className="space-y-1.5">
                <h3 className="font-['Cinzel',serif] font-bold text-base text-amber-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Post Actions & Stats */}
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleLikePost(post.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border transition-colors ${
                      post.isLiked
                        ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 font-bold'
                        : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-rose-400'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${post.isLiked ? 'fill-rose-400' : ''}`} />
                    <span>{post.likes}</span>
                  </button>

                  <button
                    onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-950 text-stone-400 border border-stone-800 hover:text-stone-200 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.commentsCount} Bình Luận</span>
                  </button>
                </div>

                <button
                  onClick={() => onOpenAI(`Hỏi cố vấn Ba Son về chủ đề diễn đàn: "${post.title}". Nội dung: ${post.content}`)}
                  className="text-amber-400 hover:text-amber-300 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Hỏi Ba Son về bài này</span>
                </button>
              </div>

              {/* Comment Thread (Expanded) */}
              {isExpanded && (
                <div className="pt-3 border-t border-stone-800 space-y-3 animate-fadeIn">
                  {/* Comments list */}
                  <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                    {post.comments.length > 0 ? (
                      post.comments.map((comment) => (
                        <div key={comment.id} className="p-3 rounded-2xl bg-stone-950/80 border border-stone-800 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img src={comment.authorAvatar} alt={comment.authorName} className="w-6 h-6 rounded-full object-cover" />
                              <span className="font-bold text-stone-200">{comment.authorName}</span>
                              <span className="text-[10px] text-amber-400/80 font-medium">({comment.authorTitle})</span>
                            </div>
                            <span className="text-[10px] text-stone-500">{comment.timestamp}</span>
                          </div>
                          <p className="text-stone-300 pl-8 leading-relaxed">{comment.content}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-xs text-stone-500 py-2">Chưa có bình luận nào. Hãy là người đầu tiên!</p>
                    )}
                  </div>

                  {/* Add Comment Input */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={commentInput[post.id] || ''}
                      onChange={(e) => setCommentInput({ ...commentInput, [post.id]: e.target.value })}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleAddComment(post.id); }}
                      placeholder="Viết câu trả lời hoặc góp ý của bạn..."
                      className="flex-1 p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 text-xs text-stone-200 outline-none"
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* New Post Modal */}
      {isNewPostModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-stone-100 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <h3 className="font-['Cinzel',serif] font-bold text-lg text-amber-200">
                Đăng Bài Thảo Luận Mới
              </h3>
              <button
                onClick={() => setIsNewPostModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-stone-400 font-medium mb-1">Tiêu đề bài viết:</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ví dụ: Cần trợ giúp câu đố phù điêu ở Chợ Bến Thành..."
                  className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-400 font-medium mb-1">Chuyên mục:</label>
                  <select
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 outline-none cursor-pointer"
                  >
                    <option value="hints">Manh Mối & Đố Vui</option>
                    <option value="history">Lịch Sử Di Sản</option>
                    <option value="cuisine">Ẩm Thực Hẻm</option>
                    <option value="culture">Văn Hóa & Check-in</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-400 font-medium mb-1">Gắn thẻ địa danh:</label>
                  <input
                    type="text"
                    value={newLocationTag}
                    onChange={(e) => setNewLocationTag(e.target.value)}
                    placeholder="Ví dụ: Chợ Bến Thành, Q.1"
                    className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-400 font-medium mb-1">Nội dung chi tiết:</label>
                <textarea
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Chia sẻ kinh nghiệm, câu đố khó hoặc cảm nhận của bạn..."
                  className="w-full p-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-400 text-stone-100 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewPostModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300 font-bold hover:bg-stone-700"
                >
                  Hủy Bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold shadow-md"
                >
                  Đăng Bài Ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
