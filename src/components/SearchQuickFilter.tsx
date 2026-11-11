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
  category:
    | 'Thời hạn'
    | 'Cấu trúc thi'
    | 'Tiếng Việt'
    | 'Tiếng Anh'
    | 'Tái bảo hiểm'
    | 'Hoa hồng & Đại lý'
    | 'Nguyên tắc'
    | 'Rủi ro'
    | 'Hợp đồng'
    | 'Tài sản & Kỹ thuật'
    | 'Xe cơ giới'
    | 'Con người'
    | 'Trách nhiệm'
    | 'Tàu thủy & Hàng hóa'
    | 'Bẫy luật'
    | 'Thuật ngữ'
    | 'Lưu ý';
}

export const SearchQuickFilter: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Extract all searchable elements across all 18 chapters
  const allItems: FlatSearchItem[] = useMemo(() => {
    const list: FlatSearchItem[] = [];

    THEORY_CHAPTERS.forEach((chapter) => {
      chapter.blocks.forEach((block: ContentBlock, blockIdx: number) => {
        if (block.type === 'table') {
          const tBlock = block as TableBlock;
          tBlock.rows.forEach((row, rowIdx) => {
            let cat: FlatSearchItem['category'] = 'Thuật ngữ';

            if (chapter.id === 'xe-co-gioi' || tBlock.title.toLowerCase().includes('xe cơ giới') || tBlock.title.toLowerCase().includes('tnds bắt buộc')) {
              cat = 'Xe cơ giới';
            } else if (chapter.id === 'con-nguoi' || tBlock.title.toLowerCase().includes('con người') || tBlock.title.toLowerCase().includes('sức khỏe') || tBlock.title.toLowerCase().includes('thời gian chờ')) {
              cat = 'Con người';
            } else if (chapter.id === 'trach-nhiem' || tBlock.title.toLowerCase().includes('trách nhiệm')) {
              cat = 'Trách nhiệm';
            } else if (chapter.id === 'tai-bao-hiem' || tBlock.title.toLowerCase().includes('tái bảo hiểm')) {
              cat = 'Tái bảo hiểm';
            } else if (chapter.id === 'tau-thuy' || chapter.id === 'hang-hoa' || tBlock.title.toLowerCase().includes('hàng hải') || tBlock.title.toLowerCase().includes('icc') || tBlock.title.toLowerCase().includes('itc')) {
              cat = 'Tàu thủy & Hàng hóa';
            } else if (chapter.id === 'bay-luat' || chapter.id === 'luat-2026' || chapter.id === 'dap-an-lech') {
              cat = 'Bẫy luật';
            } else if (tBlock.title.includes('Mốc thời hạn') || tBlock.title.includes('thời hạn')) {
              cat = 'Thời hạn';
            } else if (tBlock.title.includes('Cấu trúc')) {
              cat = 'Cấu trúc thi';
            } else if (tBlock.title.includes('tiếng Việt')) {
              cat = 'Tiếng Việt';
            } else if (tBlock.title.includes('tiếng Anh')) {
              cat = 'Tiếng Anh';
            } else if (chapter.id === 'nguyen-tac' || tBlock.title.toLowerCase().includes('nguyên tắc')) {
              cat = 'Nguyên tắc';
            } else if (chapter.id === 'rui-ro' || tBlock.title.toLowerCase().includes('rủi ro')) {
              cat = 'Rủi ro';
            } else if (chapter.id === 'hdbh' || tBlock.title.toLowerCase().includes('hợp đồng')) {
              cat = 'Hợp đồng';
            } else if (chapter.id === 'tai-san' || chapter.id === 'tskt' || chapter.id === 'ky-thuat-nang-cao' || tBlock.title.toLowerCase().includes('kỹ thuật') || tBlock.title.toLowerCase().includes('tài sản')) {
              cat = 'Tài sản & Kỹ thuật';
            } else if (tBlock.title.toLowerCase().includes('hoa hồng') || chapter.id === 'dai-ly') {
              cat = 'Hoa hồng & Đại lý';
            }

            list.push({
              id: `${chapter.id}-t-${blockIdx}-${rowIdx}-${row[0]}`,
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
            let cat: FlatSearchItem['category'] = 'Lưu ý';

            if (chapter.id === 'xe-co-gioi') cat = 'Xe cơ giới';
            else if (chapter.id === 'con-nguoi') cat = 'Con người';
            else if (chapter.id === 'trach-nhiem') cat = 'Trách nhiệm';
            else if (chapter.id === 'tai-bao-hiem') cat = 'Tái bảo hiểm';
            else if (chapter.id === 'tau-thuy' || chapter.id === 'hang-hoa') cat = 'Tàu thủy & Hàng hóa';
            else if (chapter.id === 'bay-luat' || chapter.id === 'luat-2026') cat = 'Bẫy luật';
            else if (chapter.id === 'dai-ly') cat = 'Hoa hồng & Đại lý';
            else if (chapter.id === 'nguyen-tac') cat = 'Nguyên tắc';
            else if (chapter.id === 'rui-ro') cat = 'Rủi ro';
            else if (chapter.id === 'hdbh') cat = 'Hợp đồng';
            else if (chapter.id === 'tai-san' || chapter.id === 'tskt' || chapter.id === 'ky-thuat-nang-cao') cat = 'Tài sản & Kỹ thuật';

            list.push({
              id: `${chapter.id}-l-${blockIdx}-${idx}`,
              section: chapter.title,
              title: block.title,
              keyword: parts[0] || 'Quy định',
              description: parts[1] || item,
              extra: parts.length > 2 ? parts.slice(2).join(' — ') : undefined,
              category: cat
            });
          });
        }
      });
    });

    return list;
  }, []);

  const categories = [
    'ALL',
    'Hợp đồng',
    'Tài sản & Kỹ thuật',
    'Xe cơ giới',
    'Con người',
    'Trách nhiệm',
    'Tái bảo hiểm',
    'Tàu thủy & Hàng hóa',
    'Bẫy luật',
    'Nguyên tắc',
    'Rủi ro',
    'Hoa hồng & Đại lý',
    'Thời hạn',
    'Tiếng Anh',
    'Tiếng Việt',
    'Cấu trúc thi'
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
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tra cứu: gõ 150 triệu, 365 ngày, claims-made, quota share, P&I, ICC A, CAR, HĐBH, vô hiệu..."
          className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 shadow-xs text-xs sm:text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded-md transition cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Categories chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-slate-600 font-medium px-1 flex items-center gap-1 shrink-0">
          <Tag className="w-3.5 h-3.5 text-blue-600" /> Bộ lọc ({allItems.length} mục):
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {cat === 'ALL' ? 'Tất cả' : cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono px-1">
        <span>
          Tìm thấy <strong className="text-slate-900">{filteredItems.length}</strong> kết quả
        </span>
        {query && (
          <span>
            Từ khóa: &ldquo;<span className="italic">{query}</span>&rdquo;
          </span>
        )}
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredItems.slice(0, 100).map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition space-y-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-bold text-slate-900 text-sm">
                {item.keyword}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                {item.category}
              </span>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {item.description}
            </div>

            {item.extra && (
              <div className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
                {item.extra}
              </div>
            )}

            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100 font-mono">
              <span className="truncate pr-2">{item.title}</span>
              <span className="shrink-0">{item.section}</span>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="col-span-full py-12 text-center text-xs text-slate-500">
            Không tìm thấy kết quả nào khớp với từ khóa &ldquo;{query}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
};
