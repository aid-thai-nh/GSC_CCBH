import React from 'react';
import { TableBlock, ListBlock, NoteBlock } from '../data/theoryData';
import { Info, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';

export const RenderTable: React.FC<{ block: TableBlock }> = ({ block }) => {
  return (
    <div className="my-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden transition-all">
      <div className="px-5 py-3.5 bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm md:text-base flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          {block.title}
        </h3>
        <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
          {block.rows.length} mục
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/40 text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
              {block.head.map((col, idx) => (
                <th key={idx} className="px-5 py-3 first:pl-5 last:pr-5">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {block.rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors group"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`px-5 py-3.5 align-top ${
                      cIdx === 0
                        ? 'font-bold text-slate-900 dark:text-white font-mono text-sm whitespace-nowrap'
                        : cIdx === 1 && block.head.length > 2
                        ? 'font-medium text-slate-800 dark:text-slate-200'
                        : 'text-slate-600 dark:text-slate-300 leading-relaxed'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {block.note && (
        <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200/70 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic">
          💡 {block.note}
        </div>
      )}
    </div>
  );
};

export const RenderList: React.FC<{ block: ListBlock }> = ({ block }) => {
  return (
    <div
      className={`my-6 p-5 rounded-2xl border shadow-xs ${
        block.highlight
          ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/60'
          : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800'
      }`}
    >
      <h3
        className={`font-bold text-base mb-4 flex items-center gap-2 ${
          block.highlight ? 'text-amber-900 dark:text-amber-200' : 'text-slate-900 dark:text-white'
        }`}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            block.highlight ? 'bg-amber-500' : 'bg-blue-600'
          }`}
        ></span>
        {block.title}
      </h3>
      <div className="space-y-3">
        {block.items.map((item, idx) => {
          // split title before colon if available
          const parts = item.split(/:\s|—\s/);
          const hasPrefix = parts.length > 1;

          return (
            <div
              key={idx}
              className={`flex items-start gap-3 p-3 rounded-xl transition ${
                block.highlight
                  ? 'bg-white/70 dark:bg-slate-900/80 border border-amber-100 dark:border-amber-900/40'
                  : 'bg-slate-50/80 dark:bg-slate-800/40 hover:bg-slate-100/80'
              }`}
            >
              <CheckCircle2
                className={`w-5 h-5 shrink-0 mt-0.5 ${
                  block.highlight ? 'text-amber-600 dark:text-amber-400' : 'text-blue-600 dark:text-blue-400'
                }`}
              />
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {hasPrefix ? (
                  <>
                    <strong className="text-slate-900 dark:text-white font-semibold">
                      {parts[0]}
                      {item.includes('—') ? ' — ' : ': '}
                    </strong>
                    <span>{parts.slice(1).join(item.includes('—') ? ' — ' : ': ')}</span>
                  </>
                ) : (
                  item
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RenderNote: React.FC<{ block: NoteBlock }> = ({ block }) => {
  const effectiveVariant = block.variant || block.tone || 'info';
  const isMnemonic = effectiveVariant === 'mnemonic';
  const isAlert = effectiveVariant === 'alert';
  const isWarning = effectiveVariant === 'warning' || effectiveVariant === 'warn';

  const borderColor = isMnemonic
    ? 'border-slate-200 dark:border-slate-800 border-l-indigo-600 dark:border-l-indigo-400 bg-slate-50/80 dark:bg-slate-900/80'
    : isAlert
    ? 'border-rose-200 dark:border-rose-900/50 border-l-rose-600 dark:border-l-rose-400 bg-rose-50/40 dark:bg-rose-950/20'
    : isWarning
    ? 'border-amber-200 dark:border-amber-900/50 border-l-amber-600 dark:border-l-amber-400 bg-amber-50/40 dark:bg-amber-950/20'
    : 'border-slate-200 dark:border-slate-800 border-l-sky-600 dark:border-l-sky-400 bg-slate-50/60 dark:bg-slate-900/60';

  const iconColor = isMnemonic
    ? 'text-indigo-600 dark:text-indigo-400'
    : isAlert
    ? 'text-rose-600 dark:text-rose-400'
    : isWarning
    ? 'text-amber-600 dark:text-amber-400'
    : 'text-sky-600 dark:text-sky-400';

  const textColor = isMnemonic
    ? 'text-slate-900 dark:text-white font-bold'
    : isAlert
    ? 'text-rose-950 dark:text-rose-200 font-semibold'
    : isWarning
    ? 'text-amber-950 dark:text-amber-200 font-semibold'
    : 'text-slate-900 dark:text-slate-100 font-semibold';

  return (
    <div className={`my-4 p-4 rounded-xl border border-l-4 ${borderColor} shadow-xs transition-colors`}>
      <div className="flex items-start gap-3">
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
          isMnemonic ? 'bg-indigo-100/70 dark:bg-indigo-900/40' : 'bg-slate-100 dark:bg-slate-800'
        }`}>
          {isMnemonic ? (
            <span className="text-sm select-none">🧠</span>
          ) : isAlert ? (
            <AlertCircle className={`w-4 h-4 ${iconColor}`} />
          ) : isWarning ? (
            <AlertTriangle className={`w-4 h-4 ${iconColor}`} />
          ) : (
            <Info className={`w-4 h-4 ${iconColor}`} />
          )}
        </div>
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className={`text-sm ${textColor}`}>
              {block.title}
            </h4>
            {isMnemonic && (
              <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                Mẹo ghi nhớ
              </span>
            )}
          </div>
          <div className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
            {block.text}
          </div>
        </div>
      </div>
    </div>
  );
};

