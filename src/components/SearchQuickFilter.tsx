import React, { useState, useMemo } from 'react';
import { Search, X, Tag } from 'lucide-react';
import { THEORY_CHAPTERS, ContentBlock, TableBlock } from '../data/theoryData';

interface FlatSearchItem {
  id: string;
  section: string;
  title: string;
  keyword: string;
  description: string;
  extra?: string;
  category: 'Thời hạn' | 'Cấu trúc thi' | 'Tiếng Việt' | 'Tiếng Anh' | 'Tái bảo hiểm' | 'Hoa hồng & Đại lý' | 'Nguyên tắc' | 'Rủi ro' | 'Thuật ngữ' | 'Lưu ý';
}

export const SearchQuickFilter: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Extract all searchable elements
  const allItems: FlatSearchItem[] = useMemo(() => {
    const list: FlatSearchItem[] = [];

    THEORY_CHAPTERS.forEach((chapter) => {
      chapter.blocks.forEach((block: ContentBlock) => {
        if (block.type === 'table') {
          const tBlock = block as TableBlock;
          tBlock.rows.forEach((row) => {
            let cat: FlatSearchItem['category'] = 'Thuật ngữ';
            if (tBlock.title.includes('Mốc thời hạn')) cat = 'Thời hạn';
            else if (tBlock.title.includes('Cấu trúc')) cat = 'Cấu trúc thi';
            else if (tBlock.title.includes('tiếng Việt')) cat = 'Tiếng Việt';
            else if (tBlock.title.includes('tiếng Anh')) cat = 'Tiếng Anh';
            else if (tBlock.title.includes('Tái bảo hiểm')) cat = 'Tái bảo hiểm';
            else if (chapter.id === 'nguyen-tac' || tBlock.title.toLowerCase().includes('nguyên tắc')) cat = 'Nguyên tắc';
            else if (chapter.id === 'rui-ro' || tBlock.title.toLowerCase().includes('rủi ro')) cat = 'Rủi ro';
            else if (tBlock.title.toLowerCase().includes('hoa hồng') || chapter.id === 'dai-ly') cat = 'Hoa hồng & Đại lý';

            list.push({
              id: `${chapter.id}-${row[0]}`,
              section: chapter.title,
              title: tBlock.title,
              keyword: row[0],
              description: row[1] || '',
              extra: row[2] || '',
              category: cat
            });
          });
        } else if (block.type === 'list') {
          block.items.forEach((item, idx) => {
            const parts = item.split(/:\s|—\s/);
            list.push({
              id: `${chapter.id}-list-${idx}`,
              section: chapter.title,
              title: block.title,
              keyword: parts[0] || 'Quy định',
              description: parts[1] || item,
              extra: parts.length > 2 ? parts.slice(2).join(' — ') : undefined,
              category: chapter.id === 'dai-ly' ? 'Hoa hồng & Đại lý' : chapter.id === 'nguyen-tac' ? 'Nguyên tắc' : 'Lưu ý'
            });
          });
        }
      });
    });

    return list;
  }, []);

  const categories = [
    'ALL',
    'Nguyên tắc',
    'Rủi ro',
    'Hoa hồng & Đại lý',
    'Thời hạn',
    'Tiếng Anh',
    'Tiếng Việt',
    'Tái bảo hiểm',
    'Cấu trúc thi',
    'Lưu ý'
  ];

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchCat = selectedCategory === 'ALL' || item.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        item.keyword.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.extra && item.extra.toLowerCase().includes(q)) ||
        item.title.toLowerCase().includes(q)
      );
    });
  }, [allItems, query, selectedCategory]);

  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 dark:text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tra cứu: gõ hoa hồng, xe máy, CAR, CPM, HĐBH, 3 năm, phúc khảo, CECR, 20%..."
          className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs text-sm md:text-base"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-600 hover:text-slate-800 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Categories chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-slate-600 dark:text-slate-400 font-medium px-1 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" /> Lọc:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {cat === 'ALL' ? 'Tất cả' : cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 px-1">
        <span>
          Tìm thấy <strong className="text-blue-600 dark:text-blue-400">{filteredItems.length}</strong> kết quả
        </span>
        {query && (
          <span>
            Tìm kiếm theo: &ldquo;<span className="italic">{query}</span>&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-300 dark:hover:border-blue-700 transition space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-base">
                {item.keyword}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {item.category}
              </span>
            </div>

            <div className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
              {item.description}
            </div>

            {item.extra && (
              <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-2">
                {item.extra}
              </div>
            )}

            <div className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center justify-between pt-1">
              <span>{item.title}</span>
              <span className="text-[10px]">{item.section}</span>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-600 dark:text-slate-400">
            Không tìm thấy kết quả nào khớp với từ khóa &ldquo;{query}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
};
