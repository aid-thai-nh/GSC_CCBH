import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  CreditCard,
  CheckSquare,
  Sparkles,
  Moon,
  Sun,
  ShieldCheck,
  Trophy,
  Flame,
  ExternalLink
} from 'lucide-react';
import { FullTheoryView } from './components/FullTheoryView';
import { SearchQuickFilter } from './components/SearchQuickFilter';
import { FlashcardsView } from './components/FlashcardsView';
import { RandomExamView } from './components/RandomExamView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'exam' | 'theory' | 'search' | 'flashcards'>('exam');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-base md:text-lg tracking-tight leading-tight flex items-center gap-2">
                Luyện Thi Đại Lý Bảo Hiểm
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded-full border border-amber-300 dark:border-amber-800">
                  <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                  Mục tiêu 20/20
                </span>
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Quy định thi • Từ viết tắt • Đại lý bảo hiểm • Nguyên tắc bảo hiểm • Rủi ro & Khái niệm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://gsc-cheat-sheet.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Mở trang gốc gsc-cheat-sheet.netlify.app"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nguồn: GSC Cheat Sheet</span>
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Chuyển chế độ Sáng / Tối"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar border-t border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-2 py-2">
            <button
              onClick={() => setActiveTab('exam')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'exam'
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-100" />
              <span>Phòng thi trắc nghiệm (10 - 20 - 40 câu)</span>
            </button>

            <button
              onClick={() => setActiveTab('theory')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'theory'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Toàn bộ lý thuyết</span>
            </button>

            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'search'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Tra cứu nhanh</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                activeTab === 'flashcards'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Flashcard ghi nhớ (37 thẻ)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Dynamic Tab Content */}
        {activeTab === 'exam' && <RandomExamView />}
        {activeTab === 'theory' && <FullTheoryView />}
        {activeTab === 'search' && <SearchQuickFilter />}
        {activeTab === 'flashcards' && <FlashcardsView />}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-600 dark:text-slate-400">
        <p className="max-w-xl mx-auto">
          Bộ câu hỏi ôn luyện được xây dựng bám sát 100% trọn bộ 5 chuyên đề trọng tâm: Quy định thi, Từ viết tắt, Đại lý bảo hiểm, Nguyên tắc bảo hiểm và Rủi ro & Khái niệm cơ bản theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và Thông tư 67/2023/TT-BTC.
        </p>
      </footer>
    </div>
  );
}
