import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client lazily & safely
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

// Resilient Gemini Model Generation with Fallback & Retry
const CANDIDATE_MODELS = [
  'gemini-3.7-flash',
  'gemini-2.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-flash-latest'
];

async function generateContentWithRetryAndFallback(
  ai: GoogleGenAI,
  params: {
    contents: any;
    config?: any;
  }
): Promise<string | null> {
  let lastError: any = null;

  for (const model of CANDIDATE_MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: params.contents,
          config: params.config,
        });
        if (response && response.text) {
          return response.text;
        }
      } catch (err: any) {
        lastError = err;
        const errMsg = err?.message || String(err);
        const isTransient = errMsg.includes('503') || errMsg.includes('429') || errMsg.includes('high demand') || errMsg.includes('UNAVAILABLE') || errMsg.includes('RESOURCE_EXHAUSTED');
        
        console.warn(`[Gemini API] Attempt ${attempt} on model ${model} failed (${isTransient ? 'transient/503' : 'other'}):`, errMsg);
        
        if (isTransient && attempt < 2) {
          await new Promise(resolve => setTimeout(resolve, 350));
          continue;
        }
        break;
      }
    }
  }

  console.error('[Gemini API] All fallback models exhausted:', lastError?.message || lastError);
  return null;
}

// In-memory data store for community forum and live chat
let forumPosts = [
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
    isLiked: false,
    commentsCount: 2,
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
    isLiked: false,
    commentsCount: 1,
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
  }
];

let liveChatMessages = [
  {
    id: 'msg_1',
    senderName: 'Lữ Khách Sài Gòn 99',
    senderAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    text: 'Có ai đang săn huy hiệu Chùa Bà Thiên Hậu ở Quận 5 không? Chùa hôm nay hương trầm thơm ngát và gốm Cây Mai lộng lẫy quá!',
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

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// API: Cultural AI Assistant "Trợ lý Ba Son" Chat
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, locationContext, currentQuest, history } = req.body;
    const ai = getGenAI();

    const systemInstruction = `
Bạn là "Cố Vấn Di Sản Ba Son" (Bason Heritage Master) - Trợ lý Trí tuệ Nhân tạo toàn năng kiêm Bách khoa toàn thư sống động.
Bạn có kiến thức sâu rộng không chỉ về di sản văn hóa, lịch sử, nghệ thuật truyền thống, địa lý, ẩm thực, kiến trúc phương Nam (TP. Hồ Chí Minh, Bình Dương, Bà Rịa - Vũng Tàu, Đồng bằng Sông Cửu Long) mà còn có khả năng giải đáp MỌI LĨNH VỰC KHÁC trong quá trình người dùng tìm hiểu và khám phá (khoa học, nghệ thuật, lịch sử thế giới, ngôn ngữ, du lịch, đời sống, công nghệ, toán học, câu đố logic...).

ĐẶC ĐIỂM & NGUYÊN TẮC HOẠT ĐỘNG:
1. KHÔNG GIỚI HẠN PHẠM VI: Bạn sẵn sàng giải đáp bất kỳ câu hỏi nào người dùng đặt ra (từ câu đố trong game, mẹo làm nhiệm vụ, giải thích từ ngữ cổ, chỉ dẫn địa điểm, lộ trình du lịch thực tế, cho đến các câu hỏi mở rộng về tri thức thế giới).
2. PHONG CÁCH GIAO TIẾP:
   - Xưng hô lịch thiệp, hào sảng, thân thiện (ví dụ: "Dạ chào bạn / Lữ khách", "Ba Son xin chia sẻ...", "Theo dòng lịch sử...").
   - Lối hành văn tiếng Việt chuẩn mực, mượt mà, giàu cảm xúc, chuẩn chính tả và ngữ pháp.
   - Trình bày mạch lạc, dùng Markdown (gạch đầu dòng, in đậm từ khóa quan trọng) để người đọc dễ theo dõi.
3. KHI HỖ TRỢ GIẢI ĐỐ:
   - Nếu người dùng cần gợi ý: Đưa ra chỉ dẫn thông minh, gợi mở tư duy logic mà không làm mất đi tính trải nghiệm.
   - Nếu người dùng hỏi thẳng đáp án: Tận tình cung cấp câu trả lời chính xác kèm theo phân tích nguồn gốc lịch sử hoặc câu chuyện thú vị đằng sau.
4. TẬN DỤNG BỐI CẢNH HIỆN TẠI:
   - Địa điểm người dùng đang xem/đứng: ${locationContext || 'Hành trình di sản phương Nam'}.
   - Nhiệm vụ hiện tại: ${currentQuest || 'Khám phá tự do'}.
   - Hãy khéo léo liên hệ bối cảnh này vào câu trả lời khi phù hợp để mang lại trải nghiệm nhập vai sinh động nhất.
`;

    if (!ai) {
      // Fallback if API key is not yet configured
      return res.json({
        reply: `Dạ chào Lữ Khách! Tôi là Ba Son, người bạn đồng hành khám phá di sản đất Sài Gòn - Gia Định. Về câu hỏi của bạn tại ${locationContext || 'TP.HCM'}: Đất Sài Gòn với hơn 300 năm hình thành luôn chất chứa bao điều kỳ thú từ kiến trúc gạch ngói, mái ngõ Chợ Lớn đến tiếng còi tàu sông Bến Nghé. Hãy quan sát thật kỹ các hoa văn phù điêu và câu đố để tìm ra lời giải nhé!`
      });
    }

    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        contents.push({
          role: h.sender === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{
        text: `Địa điểm hiện tại: ${locationContext || 'Không xác định'}\nNhiệm vụ đang làm: ${currentQuest || 'Khám phá tự do'}\nCâu hỏi của người chơi: ${message}`
      }]
    });

    const replyText = await generateContentWithRetryAndFallback(ai, {
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = replyText || `Dạ, Cố vấn Ba Son đây! Về câu hỏi của bạn tại ${locationContext || 'TP.HCM'}: Sài Gòn - Gia Định với hơn 300 năm lịch sử có rất nhiều bí ẩn di sản thú vị. Bạn hãy đối chiếu hoa văn kiến trúc và các chi tiết niên đại để tìm ra đáp án nhé!`;
    res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/gemini/chat:', error);
    res.json({
      reply: 'Dạ, Ba Son đây! Đất Sài Gòn chứa đựng muôn vàn bí ẩn di sản. Bạn hãy chú ý đến những chi tiết kiến trúc đặc trưng của địa điểm này để giải mã manh mối nhé!'
    });
  }
});

// API: Smart Clue Deciphering & Hints
app.post('/api/gemini/hint', async (req, res) => {
  try {
    const { questTitle, stepTitle, question, clueVerse, hintLevel, locationName } = req.body;
    const ai = getGenAI();

    const systemInstruction = `
Bạn là "Hệ Thống Giải Mã Di Sản Sài Gòn".
Cung cấp gợi ý thông minh dựa trên cấp độ người chơi yêu cầu:
- Cấp 1 (hintLevel = 1): Gợi ý manh mối khẽ khàng, khơi gợi tư duy, liên hệ sự vật đời thường hoặc từ khóa then chốt mà KHÔNG tiết lộ trực tiếp.
- Cấp 2 (hintLevel = 2): Chỉ điểm bối cảnh lịch sử, năm tháng, kiến trúc hoặc tọa độ địa lý cụ thể giúp người chơi khoanh vùng.
- Cấp 3 (hintLevel = 3): Phân tích sâu sắc lời giải mã, giải thích nguồn gốc văn hóa của câu đố và đưa ra đáp án chính xác.
Độ dài ngắn gọn, súc tích (dưới 100 từ), giàu cảm xúc di sản.
`;

    if (!ai) {
      return res.json({
        hint: `[Gợi ý cấp ${hintLevel || 1}] Hãy liên hệ giữa câu thơ manh mối và các chi tiết lịch sử thực tế tại ${locationName || 'địa điểm này'}.`
      });
    }

    const prompt = `Địa điểm: ${locationName}\nNhiệm vụ: ${questTitle} - ${stepTitle}\nCâu thơ/manh mối: ${clueVerse}\nCâu hỏi: ${question}\nYêu cầu cấp độ gợi ý: Cấp ${hintLevel} (1: Khẽ khàng, 2: Chỉ điểm lịch sử, 3: Phân tích sâu & lời giải)`;

    const hintText = await generateContentWithRetryAndFallback(ai, {
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.6,
      }
    });

    res.json({ hint: hintText || `[Gợi ý cấp ${hintLevel || 1}] Quan sát kỹ các chi tiết hoa văn và niên đại lịch sử của địa điểm ${locationName || ''} nhé!` });
  } catch (error: any) {
    console.error('Error in /api/gemini/hint:', error);
    res.json({
      hint: 'Hãy đọc kỹ câu thơ lục bát và liên kết với các hiện vật trưng bày tại đây!'
    });
  }
});

// Forum Endpoints
app.get('/api/forum/posts', (req, res) => {
  res.json({ posts: forumPosts });
});

app.post('/api/forum/posts', (req, res) => {
  const { title, authorName, authorAvatar, authorTitle, category, content, locationTag, badgeEarned } = req.body;
  const newPost = {
    id: `post_${Date.now()}`,
    title: title || 'Chia sẻ của Lữ Khách',
    authorName: authorName || 'Lữ Khách Ẩn Danh',
    authorAvatar: authorAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    authorTitle: authorTitle || 'Lữ Khách Tập Sự',
    category: category || 'general',
    content: content || '',
    locationTag: locationTag || '',
    likes: 1,
    isLiked: false,
    commentsCount: 0,
    timestamp: 'Vừa xong',
    badgeEarned: badgeEarned || undefined,
    comments: []
  };
  forumPosts.unshift(newPost);
  res.json({ success: true, post: newPost });
});

app.post('/api/forum/posts/:id/like', (req, res) => {
  const { id } = req.params;
  const post = forumPosts.find(p => p.id === id);
  if (post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    res.json({ success: true, likes: post.likes, isLiked: post.isLiked });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.post('/api/forum/posts/:id/comment', (req, res) => {
  const { id } = req.params;
  const { authorName, authorAvatar, authorTitle, content } = req.body;
  const post = forumPosts.find(p => p.id === id);
  if (post) {
    const newComment = {
      id: `c_${Date.now()}`,
      authorName: authorName || 'Lữ Khách',
      authorAvatar: authorAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      authorTitle: authorTitle || 'Lữ Khách',
      content: content || '',
      timestamp: 'Vừa xong',
      likes: 0
    };
    post.comments.push(newComment);
    post.commentsCount = post.comments.length;
    res.json({ success: true, comment: newComment });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

// Community Chat Endpoints
app.get('/api/chat/messages', (req, res) => {
  res.json({ messages: liveChatMessages });
});

app.post('/api/chat/messages', (req, res) => {
  const { senderName, senderAvatar, text } = req.body;
  const newMsg = {
    id: `msg_${Date.now()}`,
    senderName: senderName || 'Lữ Khách',
    senderAvatar: senderAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    text: text || '',
    timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  };
  liveChatMessages.push(newMsg);
  // Keep last 50 messages
  if (liveChatMessages.length > 50) {
    liveChatMessages = liveChatMessages.slice(-50);
  }
  res.json({ success: true, message: newMsg });
});

// Vite Middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Heritage Exploration Game server running on port ${PORT}`);
  });
}

startServer();
