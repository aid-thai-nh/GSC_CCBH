import React, { useState, useMemo, useEffect } from 'react';
import {
  THEORY_CHAPTERS,
  TheoryChapter,
  CHAPTER_DIFFICULTY_META,
  DifficultyLevel
} from '../data/theoryData';
import { RenderTable, RenderList, RenderNote } from './TableCard';
import { Copy, Check, Bookmark, ArrowUpDown, Filter, Sparkles } from 'lucide-react';

interface FullTheoryViewProps {
  initialChapterId?: string;
}

export const FullTheoryView: React.FC<FullTheoryViewProps> = ({ initialChapterId }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(initialChapterId || 'all');
  const [onlyMnemonics, setOnlyMnemonics] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const [sortByDifficulty, setSortByDifficulty] = useState<boolean>(true);
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | DifficultyLevel>('ALL');

  useEffect(() => {
    if (initialChapterId) {
      setActiveChapterId(initialChapterId);
      setTimeout(() => {
        const el = document.getElementById(`chapter-${initialChapterId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialChapterId]);

  // Compute sorted & filtered chapters
  const allProcessedChapters = useMemo(() => {
    let list = [...THEORY_CHAPTERS];
    if (sortByDifficulty) {
      list.sort((a, b) => {
        const rankA = CHAPTER_DIFFICULTY_META[a.id]?.orderRank ?? 99;
        const rankB = CHAPTER_DIFFICULTY_META[b.id]?.orderRank ?? 99;
        return rankA - rankB;
      });
    }
    return list;
  }, [sortByDifficulty]);

  const chaptersToDisplay = useMemo(() => {
    if (activeChapterId !== 'all') {
      return THEORY_CHAPTERS.filter((ch) => ch.id === activeChapterId);
    }

    let list = allProcessedChapters;
    if (difficultyFilter !== 'ALL') {
      list = list.filter((ch) => CHAPTER_DIFFICULTY_META[ch.id]?.difficulty === difficultyFilter);
    }
    return list;
  }, [activeChapterId, allProcessedChapters, difficultyFilter]);

  // Filter blocks if only mnemonics mode is active
  const filterBlocks = (blocks: TheoryChapter['blocks']) => {
    if (!onlyMnemonics) return blocks;
    return blocks.filter((b) => b.type === 'note' && (b as any).variant === 'mnemonic');
  };

  // Generate full markdown text for export/copy
  const getFullMarkdown = () => {
    let md = '# TÀI LIỆU ÔN THI CHỨNG CHỈ ĐẠI LÝ BẢO HIỂM (TRỌN BỘ 18 CHUYÊN ĐỀ TỪ DỄ ĐẾN KHÓ)\n\n';
    allProcessedChapters.forEach((ch) => {
      const meta = CHAPTER_DIFFICULTY_META[ch.id];
      md += `## Bước ${meta?.orderRank || '•'}: ${ch.title} [${meta?.difficultyLabel || 'Chuyên đề'}] (${ch.badge})\n`;
      md += `${ch.summary}\n\n`;
      ch.blocks.forEach((block) => {
        if (onlyMnemonics && block.type !== 'note' && (block as any).variant !== 'mnemonic') {
          return;
        }
        if (block.type === 'table') {
          md += `### ${block.title}\n\n`;
          md += `| ${block.head.join(' | ')} |\n`;
          md += `| ${block.head.map(() => '---').join(' | ')} |\n`;
          block.rows.forEach((r) => {
            md += `| ${r.join(' | ')} |\n`;
          });
          if (block.note) md += `\n*Ghi chú: ${block.note}*\n`;
          md += '\n';
        } else if (block.type === 'list') {
          md += `### ${block.title}\n\n`;
          block.items.forEach((item) => {
            md += `- ${item}\n`;
          });
          md += '\n';
        } else if (block.type === 'note') {
          md += `> **${block.title}**\n> ${block.text}\n\n`;
        }
      });
    });
    return md;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(getFullMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDifficultyBadgeStyle = (diff?: DifficultyLevel) => {
    switch (diff) {
      case 'easy':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'medium':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'hard':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'expert':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const levelOptions: Array<{
    key: 'ALL' | DifficultyLevel;
    label: string;
    subLabel: string;
    count: number;
    colorClasses: {
      active: string;
      inactive: string;
    };
  }> = [
    {
      key: 'ALL',
      label: 'Tất cả cấp độ',
      subLabel: 'Trọn bộ 18 chuyên đề',
      count: 18,
      colorClasses: {
        active: 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-slate-900/20',
        inactive: 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      }
    },
    {
      key: 'easy',
      label: 'Cấp 1: Dễ ⭐',
      subLabel: 'Thi cử, Viết tắt, Rủi ro',
      count: 3,
      colorClasses: {
        active: 'bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-500/20',
        inactive: 'bg-white text-emerald-900 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50/50'
      }
    },
    {
      key: 'medium',
      label: 'Cấp 2: Trung bình ⭐⭐',
      subLabel: 'Nguyên tắc, Đại lý, HĐ, Con người',
      count: 4,
      colorClasses: {
        active: 'bg-blue-600 text-white border-blue-600 shadow-sm ring-2 ring-blue-500/20',
        inactive: 'bg-white text-blue-900 border-blue-200 hover:border-blue-300 hover:bg-blue-50/50'
      }
    },
    {
      key: 'hard',
      label: 'Cấp 3: Nâng cao ⭐⭐⭐',
      subLabel: 'Xe cơ giới, Tài sản, Trách nhiệm',
      count: 4,
      colorClasses: {
        active: 'bg-amber-600 text-white border-amber-600 shadow-sm ring-2 ring-amber-500/20',
        inactive: 'bg-white text-amber-900 border-amber-200 hover:border-amber-300 hover:bg-amber-50/50'
      }
    },
    {
      key: 'expert',
      label: 'Cấp 4: Chuyên sâu ⭐⭐⭐⭐',
      subLabel: 'Tái BH, CAR/EAR, Hàng hải, Bẫy',
      count: 7,
      colorClasses: {
        active: 'bg-purple-600 text-white border-purple-600 shadow-sm ring-2 ring-purple-500/20',
        inactive: 'bg-white text-purple-900 border-purple-200 hover:border-purple-300 hover:bg-purple-50/50'
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Chapter Selection Bar & Controls - Redesigned: Large, High-Contrast, Touch-Friendly */}
      <div className="p-5 md:p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-5">
        {/* Header & Auxiliary Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-blue-100 text-blue-700">
                <Filter className="w-4 h-4" />
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Bộ Lọc Cấp Độ & Chuyên Đề Lý Thuyết
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Bấm chọn cấp độ để lọc nhanh các chuyên đề theo thứ tự nhận thức từ dễ đến chuyên sâu
            </p>
          </div>

          {/* Action buttons (Sắp xếp, Mẹo nhớ, Sao chép) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSortByDifficulty(!sortByDifficulty)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition cursor-pointer border border-slate-200"
              title="Đổi giữa lộ trình Dễ → Khó và thứ tự mặc định"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
              <span>{sortByDifficulty ? 'Lộ trình: Dễ → Khó' : 'Thứ tự: Chuẩn'}</span>
            </button>

            <button
              onClick={() => setOnlyMnemonics(!onlyMnemonics)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                onlyMnemonics
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title="Chỉ hiển thị các hộp Mẹo nhớ then chốt"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{onlyMnemonics ? 'Đang lọc: Mẹo nhớ' : 'Chỉ Mẹo nhớ'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition cursor-pointer shadow-2xs"
              title="Sao chép toàn bộ lý thuyết dạng Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Đã chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sao chép</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Level Filter - Large, Clean, Easy-to-tap Cards */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            1. Chọn cấp độ độ khó (Bấm để xem danh sách chuyên đề tương ứng):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {levelOptions.map((opt) => {
              const isSelected = difficultyFilter === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => {
                    setDifficultyFilter(opt.key);
                    setActiveChapterId('all');
                  }}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    isSelected ? opt.colorClasses.active : opt.colorClasses.inactive
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-xs sm:text-sm leading-snug">
                      {opt.label}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {opt.count}
                    </span>
                  </div>
                  <div
                    className={`text-[11px] leading-tight truncate ${
                      isSelected ? 'text-white/80' : 'text-slate-500'
                    }`}
                  >
                    {opt.subLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chapter Selection Bar - Comfortable, Easy to Click */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
              2. Chọn chuyên đề cụ thể ({chaptersToDisplay.length} chuyên đề):
            </label>
            <span className="text-[11px] text-slate-500 font-mono">
              Cuộn ngang để xem thêm ➔
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto text-xs sm:text-sm no-scrollbar py-1">
            <button
              onClick={() => setActiveChapterId('all')}
              className={`px-4 py-2.5 rounded-xl font-bold transition cursor-pointer whitespace-nowrap border ${
                activeChapterId === 'all'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Xem tất cả ({chaptersToDisplay.length} chương)
            </button>

            {chaptersToDisplay.map((ch) => {
              const meta = CHAPTER_DIFFICULTY_META[ch.id];
              const isSelected = activeChapterId === ch.id;

              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapterId(ch.id)}
                  className={`px-4 py-2.5 rounded-xl font-medium transition cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <span className="font-mono font-bold opacity-80">#{meta?.orderRank || '•'}</span>
                  <span className="font-semibold">{ch.title}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    {meta?.difficultyLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chapters Content Display */}
      <div className="space-y-8">
        {chaptersToDisplay.map((chapter) => {
          const blocks = filterBlocks(chapter.blocks);
          if (blocks.length === 0) return null;
          const meta = CHAPTER_DIFFICULTY_META[chapter.id];

          return (
            <section
              id={`chapter-${chapter.id}`}
              key={chapter.id}
              className="p-5 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-6 scroll-mt-24 transition-all"
            >
              {/* Chapter Header with Difficulty Evaluation Badge */}
              <div className="pb-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      Bước {meta?.orderRank || '•'} / 18
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getDifficultyBadgeStyle(
                        meta?.difficulty
                      )}`}
                    >
                      {meta?.difficultyLabel} • Cấp độ {meta?.level} ({meta?.levelName})
                    </span>
                    <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                      {chapter.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono ml-auto">
                      {blocks.length} phần nội dung
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                    {chapter.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {chapter.summary}
                  </p>
                  {meta?.description && (
                    <div className="text-xs text-slate-600 mt-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      🎯 <strong className="font-semibold text-slate-800">Trọng tâm ôn thi:</strong> {meta.description}
                    </div>
                  )}
                </div>
              </div>

              {/* Render Blocks */}
              <div className="space-y-4">
                {blocks.map((block, idx) => {
                  if (block.type === 'table') {
                    return <RenderTable key={idx} block={block} />;
                  } else if (block.type === 'list') {
                    return <RenderList key={idx} block={block} />;
                  } else if (block.type === 'note') {
                    return <RenderNote key={idx} block={block} />;
                  }
                  return null;
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
