import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  CreditCard,
  Moon,
  Sun,
  ShieldCheck,
  CheckCircle2,
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
      {/* Top Header - OCD Friendly: Clean, Minimalist, Perfectly Aligned */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-sm sm:text-base tracking-tight leading-none text-slate-900 dark:text-white">
                  Luyện Thi Đại Lý Bảo Hiểm
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-3 h-3 text-slate-500" />
                  Chuẩn 18 Chuyên đề GSC
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 hidden sm:block">
                Hợp đồng • Tài sản & Kỹ thuật • Xe cơ giới • Con người • Trách nhiệm • Tái bảo hiểm • Bẫy luật
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://gsc-cheat-sheet.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title="Mở tài liệu nguồn GSC Cheat Sheet"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Nguồn: GSC Cheat Sheet</span>
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={darkMode ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-slate-200" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Disciplined Segmented Control */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="py-2 overflow-x-auto no-scrollbar">
            <nav className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 gap-1 text-xs sm:text-sm">
              <button
                onClick={() => setActiveTab('exam')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'exam'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold border border-slate-200/80 dark:border-slate-700/80'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span>Thi sát hạch (662 câu)</span>
              </button>

              <button
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'theory'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold border border-slate-200/80 dark:border-slate-700/80'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Toàn bộ lý thuyết (18 chuyên đề)</span>
              </button>

              <button
                onClick={() => setActiveTab('search')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'search'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold border border-slate-200/80 dark:border-slate-700/80'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Tra cứu nhanh</span>
              </button>

              <button
                onClick={() => setActiveTab('flashcards')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                  activeTab === 'flashcards'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold border border-slate-200/80 dark:border-slate-700/80'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Flashcard ghi nhớ (102 thẻ)</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'exam' && <RandomExamView />}
        {activeTab === 'theory' && <FullTheoryView />}
        {activeTab === 'search' && <SearchQuickFilter />}
        {activeTab === 'flashcards' && <FlashcardsView />}
      </main>

      {/* Footer - Quiet & Balanced */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p className="max-w-2xl mx-auto leading-relaxed">
          Tài liệu và ngân hàng 662 câu hỏi ôn thi chứng chỉ đại lý bảo hiểm được cập nhật đầy đủ trọn bộ 18 chuyên đề theo chuẩn GSC Cheat Sheet, Luật Kinh doanh bảo hiểm số 08/2022/QH15, Nghị định 67/2023/NĐ-CP và Thông tư 67/2023/TT-BTC.
        </p>
      </footer>
    </div>
  );
}
