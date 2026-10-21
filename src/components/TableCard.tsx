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
  const isMnemonic = block.variant === 'mnemonic';
  const isAlert = block.variant === 'alert';
  const isWarning = block.variant === 'warning';

  const borderColor = isMnemonic
    ? 'border-indigo-400 dark:border-indigo-600 bg-linear-to-r from-indigo-50/90 via-purple-50/70 to-pink-50/50 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20 ring-1 ring-indigo-300 dark:ring-indigo-800'
    : isAlert
    ? 'border-rose-300 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/30'
    : isWarning
    ? 'border-amber-300 dark:border-amber-900 bg-amber-50/70 dark:bg-amber-950/30'
    : 'border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/30';

  const iconColor = isMnemonic
    ? 'text-indigo-600 dark:text-indigo-400'
    : isAlert
    ? 'text-rose-600 dark:text-rose-400'
    : isWarning
    ? 'text-amber-600 dark:text-amber-400'
    : 'text-blue-600 dark:text-blue-400';

  const textColor = isMnemonic
    ? 'text-indigo-950 dark:text-indigo-100 font-black'
    : isAlert
    ? 'text-rose-950 dark:text-rose-200'
    : isWarning
    ? 'text-amber-950 dark:text-amber-200'
    : 'text-blue-950 dark:text-blue-200';

  return (
    <div className={`my-5 p-4 md:p-5 rounded-2xl border-l-4 border ${borderColor} shadow-xs transition-all`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isMnemonic ? 'bg-indigo-100 dark:bg-indigo-900/60' : ''}`}>
          {isMnemonic ? (
            <span className="text-lg">🧠</span>
          ) : isAlert ? (
            <AlertCircle className={`w-5 h-5 ${iconColor}`} />
          ) : isWarning ? (
            <AlertTriangle className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <Info className={`w-5 h-5 ${iconColor}`} />
          )}
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2">
            <h4 className={`text-sm md:text-base ${textColor}`}>
              {block.title}
            </h4>
            {isMnemonic && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300">
                Mẹo độc quyền
              </span>
            )}
          </div>
          <div className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line font-medium">
            {block.text}
          </div>
        </div>
      </div>
    </div>
  );
};

