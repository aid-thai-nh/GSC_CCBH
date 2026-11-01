import React, { useState, useMemo } from 'react';
import {
  THEORY_CHAPTERS,
  TheoryChapter,
  CHAPTER_DIFFICULTY_META,
  DifficultyLevel
} from '../data/theoryData';
import { RenderTable, RenderList, RenderNote } from './TableCard';
import { AudioReader } from './AudioReader';
import { Copy, Check, Bookmark, ArrowUpDown, Filter, Sparkles, Award } from 'lucide-react';

export const FullTheoryView: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>('all');
  const [onlyMnemonics, setOnlyMnemonics] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const [sortByDifficulty, setSortByDifficulty] = useState<boolean>(true);
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | DifficultyLevel>('ALL');

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

  // Prepare full speech text for reading out loud
  const fullSpeechText = chaptersToDisplay
    .map((ch) => {
      const activeBlocks = filterBlocks(ch.blocks);
      if (activeBlocks.length === 0) return '';
      return (
        `${ch.title}. ` +
        activeBlocks
          .map((b) => {
            if (b.type === 'table') {
              return `${b.title}: ` + b.rows.map((r) => r.join(', ')).join('. ');
            } else if (b.type === 'list') {
              return `${b.title}: ` + b.items.join('. ');
            } else {
              return `${b.title}: ` + b.text;
            }
          })
          .join('. ')
      );
    })
    .filter(Boolean)
    .join('. ');

  const getDifficultyBadgeStyle = (diff?: DifficultyLevel) => {
    switch (diff) {
      case 'easy':
        return 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'medium':
        return 'bg-blue-50 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'hard':
        return 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'expert':
        return 'bg-purple-50 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Chapter Selection Bar & Controls - OCD Aligned */}
      <div className="p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs space-y-4">
        {/* Row 1: Sort by Difficulty & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              Lọc cấp độ:
            </span>
            <button
              onClick={() => {
                setDifficultyFilter('ALL');
                setActiveChapterId('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                difficultyFilter === 'ALL'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Tất cả (18)
            </button>
            <button
              onClick={() => {
                setDifficultyFilter('easy');
                setActiveChapterId('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer border ${
                difficultyFilter === 'easy'
                  ? 'bg-emerald-600 text-white border-emerald-600 font-semibold'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60'
              }`}
            >
              Cấp 1: Dễ ⭐ (3)
            </button>
            <button
              onClick={() => {
                setDifficultyFilter('medium');
                setActiveChapterId('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer border ${
                difficultyFilter === 'medium'
                  ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                  : 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-900/60'
              }`}
            >
              Cấp 2: Trung bình ⭐⭐ (4)
            </button>
            <button
              onClick={() => {
                setDifficultyFilter('hard');
                setActiveChapterId('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer border ${
                difficultyFilter === 'hard'
                  ? 'bg-amber-600 text-white border-amber-600 font-semibold'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900/60'
              }`}
            >
              Cấp 3: Nâng cao ⭐⭐⭐ (4)
            </button>
            <button
              onClick={() => {
                setDifficultyFilter('expert');
                setActiveChapterId('all');
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer border ${
                difficultyFilter === 'expert'
                  ? 'bg-purple-600 text-white border-purple-600 font-semibold'
                  : 'bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-900/60'
              }`}
            >
              Cấp 4: Chuyên sâu ⭐⭐⭐⭐ (7)
            </button>
          </div>

          {/* Sắp xếp Toggle & Copy */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSortByDifficulty(!sortByDifficulty)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer border border-slate-200 dark:border-slate-700"
              title="Đổi giữa lộ trình Dễ → Khó và thứ tự mặc định"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-600" />
              <span>{sortByDifficulty ? 'Lộ trình: Dễ → Khó' : 'Thứ tự: Tiêu chuẩn'}</span>
            </button>

            <button
              onClick={() => setOnlyMnemonics(!onlyMnemonics)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border ${
                onlyMnemonics
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 border-slate-900 dark:border-slate-100 font-semibold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
              title="Chỉ hiển thị các hộp Mẹo nhớ then chốt"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{onlyMnemonics ? 'Đang lọc: Mẹo nhớ' : 'Chỉ Mẹo nhớ'}</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition cursor-pointer shadow-xs"
              title="Sao chép toàn bộ lý thuyết dạng Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Đã chép!</span>
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

        {/* Row 2: Chapter Navigation Tabs with Order Rank & Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar py-1">
          <button
            onClick={() => setActiveChapterId('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
              activeChapterId === 'all'
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Tất cả ({chaptersToDisplay.length} chương)
          </button>
          {allProcessedChapters.map((ch) => {
            const meta = CHAPTER_DIFFICULTY_META[ch.id];
            const isSelected = activeChapterId === ch.id;

            return (
              <button
                key={ch.id}
                onClick={() => setActiveChapterId(ch.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="font-mono opacity-80">{meta?.orderRank}.</span>
                <span>{ch.title}</span>
                <span className="text-[10px] opacity-75 font-mono">({meta?.difficultyLabel})</span>
              </button>
            );
          })}
        </div>

        {/* Global Audio Reader Header */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <AudioReader
            title={
              activeChapterId === 'all'
                ? `Toàn bộ 18 chuyên đề lý thuyết (Sắp xếp từ Dễ đến Khó)`
                : (THEORY_CHAPTERS.find((c) => c.id === activeChapterId)?.title || 'Lý thuyết trọng tâm')
            }
            textToRead={fullSpeechText}
          />
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
              key={chapter.id}
              className="p-5 md:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6"
            >
              {/* Chapter Header with Difficulty Evaluation Badge */}
              <div className="pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      Bước {meta?.orderRank || '•'} / 18
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getDifficultyBadgeStyle(
                        meta?.difficulty
                      )}`}
                    >
                      {meta?.difficultyLabel} • Cấp độ {meta?.level} ({meta?.levelName})
                    </span>
                    <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                      {chapter.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono ml-auto">
                      {blocks.length} phần nội dung
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {chapter.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {chapter.summary}
                  </p>
                  {meta?.description && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                      🎯 Trọng tâm ôn thi: {meta.description}
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
