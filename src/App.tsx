import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { FullTheoryView } from './components/FullTheoryView';
import { SearchQuickFilter } from './components/SearchQuickFilter';
import { FlashcardsView } from './components/FlashcardsView';
import { RandomExamView } from './components/RandomExamView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'exam' | 'theory' | 'search' | 'flashcards'>('exam');
  const [targetChapterId, setTargetChapterId] = useState<string>('all');
  const [showGuideBanner, setShowGuideBanner] = useState<boolean>(true);

  const handleNavigateToChapter = (chapterId: string) => {
    setTargetChapterId(chapterId);
    setActiveTab('theory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header - OCD Friendly: Clean, Minimalist, Perfectly Aligned */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-sm sm:text-base tracking-tight leading-none text-slate-900">
                  Luyện Thi Đại Lý Bảo Hiểm
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Chuẩn 18 Chuyên đề GSC
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">
                Hợp đồng • Tài sản & Kỹ thuật • Xe cơ giới • Con người • Trách nhiệm • Tái bảo hiểm • Bẫy luật
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGuideBanner(!showGuideBanner)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer border border-slate-200"
              title="Xem hướng dẫn lộ trình ôn thi 3 bước"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>{showGuideBanner ? 'Ẩn lộ trình' : 'Lộ trình ôn'}</span>
            </button>

            <a
              href="https://gsc-cheat-sheet.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition border border-transparent hover:border-slate-200"
              title="Mở tài liệu nguồn GSC Cheat Sheet"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nguồn: GSC Cheat Sheet</span>
            </a>
          </div>
        </div>

        {/* Navigation Tabs - Disciplined Segmented Control */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-100">
          <div className="py-2 overflow-x-auto no-scrollbar">
            <nav className="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/80 gap-1 text-xs sm:text-sm">
              <button
                onClick={() => setActiveTab('exam')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'exam'
                    ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Thi sát hạch (662 câu)</span>
              </button>

              <button
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'theory'
                    ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Toàn bộ lý thuyết (18 chuyên đề)</span>
              </button>

              <button
                onClick={() => setActiveTab('flashcards')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'flashcards'
                    ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>Flashcard ghi nhớ (102 thẻ)</span>
              </button>

              <button
                onClick={() => setActiveTab('search')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'search'
                    ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Search className="w-4 h-4 text-blue-600" />
                <span>Tra cứu nhanh</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Onboarding & Learning Roadmap Banner */}
        {showGuideBanner && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/80 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600 text-white flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Lộ trình ôn thi 3 bước
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Bám sát chuẩn Bộ Tài Chính</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Bí quyết vượt qua kỳ thi sát hạch Đại lý bảo hiểm với điểm số cao
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                  Hệ thống chia sẵn 18 chuyên đề từ Dễ đến Khó. Khi làm sai bất kỳ câu trắc nghiệm nào, bạn sẽ nhận được giải thích tường tận, căn cứ pháp lý và nút bấm chuyển thẳng tới phần lý thuyết để đọc lại ngay.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-blue-100">
              <div
                onClick={() => {
                  setActiveTab('theory');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center justify-between text-xs font-bold text-blue-700 mb-1">
                  <span>Bước 1: Nắm chắc lý thuyết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Đọc 18 chuyên đề được sắp xếp khoa học từ Dễ ⭐ đến Chuyên sâu ⭐⭐⭐⭐, kèm mẹo ghi nhớ cốt lõi.
                </div>
              </div>

              <div
                onClick={() => {
                  setActiveTab('flashcards');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center justify-between text-xs font-bold text-indigo-700 mb-1">
                  <span>Bước 2: Luyện Flashcard</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Lật 102 thẻ ghi nhớ nhanh các thuật ngữ, định mức hoa hồng TT 67 và các mốc thời hạn then chốt.
                </div>
              </div>

              <div
                onClick={() => {
                  setActiveTab('exam');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition cursor-pointer shadow-2xs group"
              >
                <div className="flex items-center justify-between text-xs font-bold text-emerald-700 mb-1">
                  <span>Bước 3: Thi sát hạch 40 câu</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Làm đề mô phỏng 60 phút (cần đúng ≥ 30/40 câu để đỗ). Xem phân tích sâu từng câu trả lời sai.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Views */}
        {activeTab === 'exam' && <RandomExamView onNavigateToChapter={handleNavigateToChapter} />}
        {activeTab === 'theory' && <FullTheoryView initialChapterId={targetChapterId} />}
        {activeTab === 'flashcards' && <FlashcardsView />}
        {activeTab === 'search' && <SearchQuickFilter />}
      </main>

      {/* Footer - Quiet & Balanced */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p className="max-w-2xl mx-auto leading-relaxed">
          Tài liệu và ngân hàng 662 câu hỏi ôn thi chứng chỉ đại lý bảo hiểm được cập nhật đầy đủ trọn bộ 18 chuyên đề theo chuẩn GSC Cheat Sheet, Luật Kinh doanh bảo hiểm số 08/2022/QH15, Nghị định 67/2023/NĐ-CP và Thông tư 67/2023/TT-BTC.
        </p>
      </footer>
    </div>
  );
}
