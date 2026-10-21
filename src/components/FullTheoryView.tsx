import React, { useState } from 'react';
import { THEORY_CHAPTERS, TheoryChapter } from '../data/theoryData';
import { RenderTable, RenderList, RenderNote } from './TableCard';
import { AudioReader } from './AudioReader';
import { Copy, Check, Sparkles, BookOpen } from 'lucide-react';

export const FullTheoryView: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>('all');
  const [onlyMnemonics, setOnlyMnemonics] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  // Generate full markdown text for export/copy
  const getFullMarkdown = () => {
    let md = '# TÀI LIỆU ÔN THI CHỨNG CHỈ ĐẠI LÝ BẢO HIỂM\n\n';
    THEORY_CHAPTERS.forEach((ch) => {
      md += `## ${ch.title} (${ch.badge})\n${ch.summary}\n\n`;
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

  const chaptersToDisplay =
    activeChapterId === 'all'
      ? THEORY_CHAPTERS
      : THEORY_CHAPTERS.filter((ch) => ch.id === activeChapterId);

  // Filter blocks if only mnemonics mode is active
  const filterBlocks = (blocks: TheoryChapter['blocks']) => {
    if (!onlyMnemonics) return blocks;
    return blocks.filter((b) => b.type === 'note' && (b as any).variant === 'mnemonic');
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

  return (
    <div className="space-y-6">
      {/* Chapter Selection Bar & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 md:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <button
            onClick={() => setActiveChapterId('all')}
            className={`px-3.5 py-2 rounded-xl font-bold transition cursor-pointer whitespace-nowrap ${
              activeChapterId === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Toàn bộ {THEORY_CHAPTERS.length} chương
          </button>
          {THEORY_CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapterId(ch.id)}
              className={`px-3 py-2 rounded-xl font-semibold transition cursor-pointer whitespace-nowrap ${
                activeChapterId === ch.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {ch.title}
            </button>
          ))}
        </div>

        {/* View Mode & Audio Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Toggle Mẹo học nhanh button */}
          <button
            onClick={() => setOnlyMnemonics(!onlyMnemonics)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
              onlyMnemonics
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900 hover:bg-indigo-100'
            }`}
            title="Chỉ hiển thị các khối Mẹo nhớ nhanh & Thần chú làm bài"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{onlyMnemonics ? 'Hiện toàn bộ lý thuyết' : 'Chỉ xem Mẹo nhớ nhanh'}</span>
          </button>

          {/* Female Vietnamese Audio Reader */}
          <AudioReader
            textToRead={fullSpeechText}
            title={onlyMnemonics ? 'Mẹo nhớ nhanh' : activeChapterId === 'all' ? 'Toàn bộ lý thuyết' : 'Chương đang chọn'}
          />

          {/* Copy Markdown */}
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition cursor-pointer"
            title="Sao chép toàn bộ nội dung lý thuyết định dạng Markdown"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-bold">Đã chép!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Sao chép</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Chapters Content */}
      <div className="space-y-10">
        {chaptersToDisplay.map((chapter: TheoryChapter, chIdx) => {
          const blocksToRender = filterBlocks(chapter.blocks);
          if (blocksToRender.length === 0) return null;

          return (
            <section
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-6 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all"
            >
              {/* Chapter Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide uppercase bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    Chương {chIdx + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {chapter.badge}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {chapter.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {chapter.summary}
                </p>
              </div>

              {/* Blocks */}
              <div className="space-y-2">
                {blocksToRender.map((block, bIdx) => {
                  if (block.type === 'table') {
                    return <RenderTable key={bIdx} block={block} />;
                  }
                  if (block.type === 'list') {
                    return <RenderList key={bIdx} block={block} />;
                  }
                  if (block.type === 'note') {
                    return <RenderNote key={bIdx} block={block} />;
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
