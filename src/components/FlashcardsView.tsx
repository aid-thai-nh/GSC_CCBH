import React, { useState, useMemo } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/theoryData';
import { ChevronLeft, ChevronRight, Shuffle, RotateCw, CheckCircle, HelpCircle, Filter } from 'lucide-react';

export const FlashcardsView: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const categories = ['ALL', 'Nguyên tắc bảo hiểm', 'Rủi ro & Khái niệm', 'Đại lý bảo hiểm', 'Quy định thi', 'Viết tắt tiếng Việt', 'Quy tắc tiếng Anh', 'Tái bảo hiểm'];

  const filteredCards = useMemo(() => {
    if (selectedCat === 'ALL') return FLASHCARDS_DATA;
    return FLASHCARDS_DATA.filter((c) => c.category === selectedCat);
  }, [selectedCat]);

  const [cards, setCards] = useState<Flashcard[]>(filteredCards);

  // Sync cards when category changes
  const handleCatChange = (cat: string) => {
    setSelectedCat(cat);
    const newFiltered = cat === 'ALL' ? FLASHCARDS_DATA : FLASHCARDS_DATA.filter((c) => c.category === cat);
    setCards(newFiltered);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex] || cards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  if (!currentCard) return null;

  const isMastered = masteredIds.has(currentCard.id);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-slate-600 dark:text-slate-400 font-medium px-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Chủ đề:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCatChange(cat)}
            className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition cursor-pointer ${
              selectedCat === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            {cat === 'ALL' ? 'Tất cả thẻ' : cat}
          </button>
        ))}
      </div>

      {/* Top Bar with stats and actions */}
      <div className="flex items-center justify-between px-1">
        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Thẻ <span className="font-bold text-blue-600 dark:text-blue-400">{currentIndex + 1}</span> / {cards.length}
          <span className="ml-3 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
            Đã thuộc: {masteredIds.size}
          </span>
        </div>

        <button
          onClick={handleShuffle}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Xáo trộn thẻ
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-blue-600 h-1.5 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        ></div>
      </div>

      {/* Interactive Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="min-h-[280px] md:min-h-[320px] p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between relative group select-none"
      >
        {/* Header inside Card */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900">
            {currentCard.category}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => toggleMastered(currentCard.id, e)}
              className={`p-1.5 rounded-full transition ${
                isMastered
                  ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
                  : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isMastered ? 'Bỏ đánh dấu đã thuộc' : 'Đánh dấu đã thuộc'}
            >
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Content: Front or Back */}
        <div className="py-6 text-center my-auto">
          {!isFlipped ? (
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold flex items-center justify-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" /> Câu hỏi / Thuật ngữ
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                {currentCard.term}
              </h3>
              <p className="text-xs text-blue-500 font-medium pt-2">
                (Nhấn vào thẻ để xem đáp án & giải thích)
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                Đáp án chuẩn & Bản chất
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {currentCard.definition}
              </h3>
              <div className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 leading-relaxed text-left">
                {currentCard.detail}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer prompt */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <RotateCw className="w-3.5 h-3.5" />
          <span>{isFlipped ? 'Nhấp để lật lại câu hỏi' : 'Nhấp vào thẻ để lật đáp án'}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 transition shadow-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Thẻ trước
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-xs cursor-pointer"
        >
          Thẻ kế tiếp
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
