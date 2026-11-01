export interface TableBlock {
  type: 'table';
  title: string;
  head: string[];
  rows: string[][];
  note?: string;
}

export interface ListBlock {
  type: 'list';
  title: string;
  items: string[];
  highlight?: boolean;
}

export interface NoteBlock {
  type: 'note';
  title: string;
  text: string;
  variant?: 'info' | 'warning' | 'alert' | 'mnemonic' | 'ok' | 'warn';
  tone?: 'info' | 'warning' | 'alert' | 'mnemonic' | 'ok' | 'warn';
}

export type ContentBlock = TableBlock | ListBlock | NoteBlock;

export interface TheoryChapter {
  id: string;
  title: string;
  badge: string;
  summary: string;
  blocks: ContentBlock[];
}

export interface Flashcard {
  id: string;
  term: string;
  category:
    | 'Quy định thi'
    | 'Viết tắt tiếng Việt'
    | 'Quy tắc tiếng Anh'
    | 'Tái bảo hiểm'
    | 'Thuật ngữ'
    | 'Đại lý bảo hiểm'
    | 'Nguyên tắc bảo hiểm'
    | 'Rủi ro & Khái niệm'
    | 'Hợp đồng bảo hiểm'
    | 'Bảo hiểm tài sản & thiệt hại'
    | 'Tài sản kỹ thuật'
    | 'Bảo hiểm xe cơ giới'
    | 'Bảo hiểm con người'
    | 'Bảo hiểm trách nhiệm'
    | 'Bẫy luật & Hàng hải';
  definition: string;
  detail: string;
  trapWarning?: string;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'expert';

export interface DifficultyMeta {
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  orderRank: number; // 1 to 18
  level: number; // 1 to 4
  levelName: string;
  description: string;
}

export const CHAPTER_DIFFICULTY_META: Record<string, DifficultyMeta> = {
  'thi-cu': {
    difficulty: 'easy',
    difficultyLabel: 'Dễ ⭐',
    orderRank: 1,
    level: 1,
    levelName: 'Nền tảng thi cử',
    description: 'Quy định thi, thời gian làm bài, điểm đỗ 75%, mốc số 3-5-10-20 ngày'
  },
  'viet-tat': {
    difficulty: 'easy',
    difficultyLabel: 'Dễ ⭐',
    orderRank: 2,
    level: 1,
    levelName: 'Từ vựng & Khái niệm',
    description: 'Thuật ngữ DNBH, BMBH, NĐBH, NTH, STBH, P&I'
  },
  'rui-ro': {
    difficulty: 'easy',
    difficultyLabel: 'Dễ ⭐',
    orderRank: 3,
    level: 1,
    levelName: 'Khái niệm rủi ro',
    description: 'Hazard, Peril, Loss, 5 biện pháp quản trị rủi ro cơ bản'
  },
  'nguyen-tac': {
    difficulty: 'medium',
    difficultyLabel: 'Trung bình ⭐⭐',
    orderRank: 4,
    level: 2,
    levelName: 'Nguyên tắc nghiệp vụ',
    description: '10 nguyên tắc: Trung thực tuyệt đối, Quyền lợi, Bồi thường, Thế quyền, Khoán'
  },
  'dai-ly': {
    difficulty: 'medium',
    difficultyLabel: 'Trung bình ⭐⭐',
    orderRank: 5,
    level: 2,
    levelName: 'Pháp luật đại lý',
    description: 'Quyền & nghĩa vụ đại lý, 4 điều cấm Điều 129, hoa hồng TT 67'
  },
  'hdbh': {
    difficulty: 'medium',
    difficultyLabel: 'Trung bình ⭐⭐',
    orderRank: 6,
    level: 2,
    levelName: 'Hợp đồng bảo hiểm',
    description: 'Giao kết, chuyển nhượng, vô hiệu vs hủy bỏ vs đơn phương chấm dứt'
  },
  'con-nguoi': {
    difficulty: 'medium',
    difficultyLabel: 'Trung bình ⭐⭐',
    orderRank: 7,
    level: 2,
    levelName: 'Bảo hiểm con người',
    description: 'Tai nạn, sức khỏe, bảng thời gian chờ 30-270-365 ngày, nguyên tắc khoán'
  },
  'xe-co-gioi': {
    difficulty: 'hard',
    difficultyLabel: 'Nâng cao ⭐⭐⭐',
    orderRank: 8,
    level: 3,
    levelName: 'Bảo hiểm xe cơ giới',
    description: 'Nghị định 67/2023, TNDS 150 triệu, tạm ứng nhân đạo, hoa hồng xe máy 20%'
  },
  'tai-san': {
    difficulty: 'hard',
    difficultyLabel: 'Nâng cao ⭐⭐⭐',
    orderRank: 9,
    level: 3,
    levelName: 'Tài sản & Thiệt hại',
    description: 'Bảo hiểm trên/dưới/trùng giá trị, bồi thường tỷ lệ, cháy nổ M1-M5, gián đoạn KD ABI'
  },
  'trach-nhiem': {
    difficulty: 'hard',
    difficultyLabel: 'Nâng cao ⭐⭐⭐',
    orderRank: 10,
    level: 3,
    levelName: 'Bảo hiểm trách nhiệm',
    description: 'Điều 57-61, Claims-made vs Loss-occurrence, hạn mức vụ vs tổng năm'
  },
  'luat-2026': {
    difficulty: 'hard',
    difficultyLabel: 'Nâng cao ⭐⭐⭐',
    orderRank: 11,
    level: 3,
    levelName: 'Pháp luật KDBH 2025-2026',
    description: 'Luật KDBH 2022, TT 67/2023, NĐ 174/2024 xử phạt VPHC mới'
  },
  'tskt': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 12,
    level: 4,
    levelName: 'Kỹ thuật công trình',
    description: 'CAR/EAR Munich Re Phần I & II, CPM máy móc thi công, đổ vỡ MB'
  },
  'tai-bao-hiem': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 13,
    level: 4,
    levelName: 'Tái bảo hiểm',
    description: 'Quota Share, Surplus Line mức dôi, Excess of Loss, giữ lại ≤ 10% VCSH'
  },
  'hang-hoa': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 14,
    level: 4,
    levelName: 'Hàng hóa vận chuyển',
    description: 'ICC A/B/C London, Incoterms CIF 110%, từ kho đến kho'
  },
  'tau-thuy': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 15,
    level: 4,
    levelName: 'Bảo hiểm hàng hải',
    description: 'ITC Hulls 1/10/83, tổn thất chung GA, hội P&I, tổn thất ước tính CTL'
  },
  'ky-thuat-nang-cao': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 16,
    level: 4,
    levelName: 'Kỹ thuật nâng cao',
    description: 'Munich Re Endorsements, bảo hành mở rộng, giới hạn địa chấn lũ lụt'
  },
  'bay-luat': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 17,
    level: 4,
    levelName: 'Bẫy đề thi',
    description: '13 bẫy chốt chặn số hay sai nhất phòng thi, Điều 9 & 129'
  },
  'dap-an-lech': {
    difficulty: 'expert',
    difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
    orderRank: 18,
    level: 4,
    levelName: 'Đáp án lệch & Audit',
    description: '6 câu lệch giữa đề cũ và Luật 2022, chiến thuật chọn đáp án phòng thi'
  }
};

export const THEORY_CHAPTERS: TheoryChapter[] = [
  {
    id: 'thi-cu',
    title: 'Quy định thi & chứng chỉ',
    badge: 'Nền tảng thi cử',
    summary: 'Số câu hỏi, thời gian làm bài, tỷ lệ điểm đỗ và toàn bộ các mốc thời hạn pháp lý hay xuất hiện trong đề thi.',
    blocks: [
      {
        type: 'note',
        title: '🧠 MẸO HỌC NHANH: THẦN CHÚ CON SỐ & MỐC THỜI HẠN',
        text: 'Nhớ theo chuỗi số: "3 — 5 — 10 — 20 — 12 — 3":\n• 3 NGÀY: Cơ sở đào tạo (CSĐT) in cấp chứng chỉ; Thi máy tính duyệt kết quả (Online 1, 2 và Viết 2).\n• 5 NGÀY: Thi giấy duyệt kết quả (chấm tay lâu hơn); Chấm xong đơn phúc khảo.\n• 10 NGÀY: Hạn chót gửi danh sách đăng ký thi trước ngày thi.\n• 20 NGÀY: Hạn nộp đơn phúc khảo (khiếu nại điểm thi giấy).\n• 12 THÁNG (1 NĂM): Bị thu hồi chứng chỉ do gian lận/vi phạm → cấm thi 1 năm.\n• 3 NĂM: Bỏ nghề không hoạt động đại lý liên tục 3 năm → chứng chỉ hết hạn, phải thi lại từ đầu.',
        variant: 'mnemonic'
      },
      {
        type: 'note',
        title: '🧠 MẸO NHỚ ĐIỀU KIỆN ĐỖ & CƠ QUAN THẨM QUYỀN',
        text: '• ĐIỂM ĐỖ: Mọi chứng chỉ đại lý luôn là 75% (30/40 câu hoặc 15/20 câu). Chỉ riêng "Chứng chỉ bảo hiểm" (không phải đại lý) mới là 70% (42/60 câu).\n• CỤC QLGSBH (Bộ Tài chính): Tổ chức thi và phê duyệt kết quả.\n• CƠ SỞ ĐÀO TẠO (CSĐT): In và trao cấp chứng chỉ cho thí sinh.\n• PHÚC KHẢO: CHỈ áp dụng cho thi giấy. Thi trên máy chấm tự động không phúc khảo!',
        variant: 'mnemonic'
      },
      {
        type: 'table',
        title: 'Cấu trúc đề thi chứng chỉ',
        head: ['Loại chứng chỉ', 'Số câu', 'Thời gian', 'Đỗ khi đúng'],
        rows: [
          ['Chứng chỉ ĐLBH (cơ bản)', '40 câu', '60 phút', '≥ 30 câu (75%)'],
          ['CC ĐLBH liên kết đơn vị (đã có CCĐL BHNT CB)', '20 câu', '40 phút', '≥ 15 câu (75%)'],
          ['CC ĐLBH hàng hải / hàng không (đã có CC ĐLBH PNT CB)', '20 câu', '40 phút', '≥ 15 câu (75%)'],
          ['Chứng chỉ bảo hiểm (không phải đại lý)', '60 câu', '90 phút', '≥ 42 câu (70%)']
        ],
        note: 'Đề thi trắc nghiệm khách quan 4 lựa chọn, chỉ có 1 đáp án đúng duy nhất.'
      },
      {
        type: 'list',
        title: '6 loại chứng chỉ đại lý bảo hiểm theo quy định hiện hành',
        items: [
          'CC ĐLBH nhân thọ cơ bản — Sản phẩm bảo hiểm (SPBH) nhân thọ (trừ liên kết đơn vị) và SPBH sức khỏe.',
          'CC ĐLBH liên kết đơn vị — Sản phẩm bảo hiểm liên kết đơn vị (yêu cầu đã có chứng chỉ ĐLBH nhân thọ cơ bản).',
          'CC ĐLBH phi nhân thọ cơ bản — SPBH phi nhân thọ (trừ hàng hải, hàng không), SPBH sức khỏe thời hạn ≤ 1 năm, SPBH rủi ro tử vong thời hạn ≤ 1 năm.',
          'CC ĐLBH hàng hải — SPBH hàng hải.',
          'CC ĐLBH hàng không — SPBH hàng không.',
          'CC ĐLBH sức khỏe — SPBH thuộc loại hình bảo hiểm sức khỏe chuyên biệt.'
        ]
      },
      {
        type: 'table',
        title: 'Mốc thời hạn hay hỏi trong đề thi (Bắt buộc học thuộc)',
        head: ['Nội dung quy định', 'Thời hạn chuẩn', 'Mẹo ghi nhớ'],
        rows: [
          ['Cấp chứng chỉ ĐLBH sau khi có Quyết định phê duyệt kết quả', '3 ngày', 'CSĐT cấp nhanh trong 3 ngày làm việc'],
          ['Phê duyệt kết quả thi trên giấy (hình thức Viết 1)', '5 ngày từ ngày thi', 'Thi giấy mất công chấm hơn nên 5 ngày'],
          ['Phê duyệt kết quả thi trên máy (Online 1, 2) và Viết 2', '3 ngày', 'Thi máy chấm tự động nên nhanh hơn (3 ngày)'],
          ['Nộp đơn phúc khảo bài thi', '20 ngày kể từ ngày có QĐ', 'Nhớ con số 20 ngày cho thí sinh khiếu nại'],
          ['Chấm và trả lời đơn phúc khảo', '5 ngày', 'Thời gian xử lý phúc khảo là 5 ngày'],
          ['Không hoạt động đại lý liên tục → phải thi lại chứng chỉ mới', '3 năm', 'Bỏ nghề 3 năm liên tiếp phải thi sát hạch lại'],
          ['Bị thu hồi chứng chỉ do gian lận/vi phạm → cấm dự thi', '12 tháng kế tiếp', 'Cấm thi 1 năm (12 tháng)'],
          ['Đăng ký dự thi chứng chỉ bảo hiểm trước ngày thi tối thiểu', '10 ngày', 'Hạn chót gửi danh sách đăng ký']
        ]
      },
      {
        type: 'note',
        title: 'Lưu ý cốt lõi tránh bẫy đề thi',
        text: 'Phúc khảo CHỈ áp dụng với các kỳ thi trên giấy. Kỳ thi trên máy tính chấm tự động không phúc khảo điểm số. Cơ quan tổ chức thi và ra quyết định phê duyệt kết quả là Cục Quản lý giám sát bảo hiểm (Cục QLGSBH) trực thuộc Bộ Tài chính; còn bên in và trao cấp chứng chỉ cho học viên là Cơ sở đào tạo (CSĐT).',
        variant: 'warning'
      }
    ]
  },
  {
    id: 'viet-tat',
    title: 'Từ viết tắt & thuật ngữ',
    badge: 'Tra cứu & Giải mã',
    summary: 'Giải nghĩa toàn bộ chữ viết tắt tiếng Việt, thuật ngữ chuẩn quốc tế (ABI, CAR, EAR, CPM, CECR), nghiệp vụ Tái bảo hiểm và các cụm từ chuyên ngành lạ tai.',
    blocks: [
      {
        type: 'note',
        title: '🧠 THẦN CHÚ BỐN ĐƠN KỸ THUẬT: "CAR XÂY — EAR LẮP — CPM MÁY — CECR XONG"',
        text: 'Chỉ cần nhẩm câu thần chú này là không bao giờ bị lừa:\n1. CAR (Construction All Risks) → Bảo hiểm CÔNG TRÌNH XÂY DỰNG (nhà, cầu, đập) trong lúc ĐANG THI CÔNG.\n2. EAR (Erection All Risks) → Bảo hiểm MÁY MÓC DÂY CHUYỀN trong lúc ĐANG LẮP ĐẶT.\n3. CPM (Plant & Machinery) → Bảo hiểm BẢN THÂN XE MÁY THI CÔNG (cần cẩu, máy xúc, máy ủi). Đơn CAR không bao gồm CPM!\n4. CECR (Completed Risks) → Bảo hiểm công trình dân dụng ĐÃ XÂY XONG và ĐƯA VÀO SỬ DỤNG. Luôn định giá theo GIÁ TRỊ THAY THẾ MỚI.\n5. MB (Machinery Breakdown) → Đổ vỡ máy móc nội tại.\n6. BI (Business Interruption) → Gián đoạn kinh doanh, bồi thường LỢI NHUẬN RÒNG BỊ MẤT.',
        variant: 'mnemonic'
      },
      {
        type: 'note',
        title: '🧠 THẦN CHÚ TÁI BẢO HIỂM: "QS CHIA ĐỀU — SURPLUS DÔI — XL VƯỢT TIỀN — STOP LOSS VƯỢT TỶ LỆ"',
        text: '• QS (Quota Share): Chia theo MỘT TỶ LỆ % CỐ ĐỊNH cho mọi hợp đồng.\n• Surplus (Mức dôi): Giữ lại một mức tiền cố định, phần vượt (mức dôi) nhượng đi.\n• XL / XOL (Excess of Loss): Tái bảo hiểm chỉ trả khi số tiền bồi thường từng vụ VƯỢT MỨC tự chịu.\n• Stop Loss (SL): Chỉ trả khi TỔNG TỶ LỆ TỔN THẤT CẢ NĂM vượt mức an toàn.\n• Treaty: Ký hợp đồng khung cả năm, tự động nhượng.\n• Fac: Tùy ý thương lượng riêng từng vụ lẻ.',
        variant: 'mnemonic'
      },
      {
        type: 'table',
        title: 'Từ viết tắt tiếng Việt (Gặp liên tục trong mọi chuyên đề)',
        head: ['Viết tắt', 'Tên đầy đủ', 'Ghi chú & bản chất'],
        rows: [
          ['HĐBH', 'Hợp đồng bảo hiểm', 'Văn bản thỏa thuận giữa bên mua và doanh nghiệp bảo hiểm; xuất hiện dày đặc trong mọi chương.'],
          ['DNBH', 'Doanh nghiệp bảo hiểm', 'Bên bán bảo hiểm (công ty bảo hiểm thương mại có giấy phép của Bộ Tài chính).'],
          ['BMBH', 'Bên mua bảo hiểm', 'Người ký hợp đồng và đóng phí bảo hiểm. BMBH có thể trùng hoặc khác với Người được bảo hiểm.'],
          ['NĐBH', 'Người được bảo hiểm', 'Người mà tính mạng, sức khỏe, tài sản hoặc trách nhiệm dân sự của họ được bảo vệ theo hợp đồng.'],
          ['STBH', 'Số tiền bảo hiểm', 'Mức tiền thỏa thuận trong HĐBH, là trần bồi thường tối đa mà DNBH phải chi trả khi xảy ra sự kiện bảo hiểm.'],
          ['LKDBH', 'Luật Kinh doanh bảo hiểm', 'Luật số 08/2022/QH15, chiếm khoảng 80% câu hỏi lý thuyết trong đề thi.'],
          ['TNDS', 'Trách nhiệm dân sự', 'Hay đi kèm: TNDS của chủ xe cơ giới — một trong các nghiệp vụ bảo hiểm bắt buộc theo luật.'],
          ['BHXH / BHYT', 'Bảo hiểm xã hội / Bảo hiểm y tế', 'Chính sách an sinh do Nhà nước quản lý thực hiện, KHÔNG thuộc phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm.'],
          ['TNHH', 'Trách nhiệm hữu hạn', 'Loại hình tổ chức doanh nghiệp bảo hiểm (công ty TNHH bảo hiểm 1 hoặc 2 thành viên trở lên).'],
          ['QLGSBH', 'Quản lý giám sát bảo hiểm', 'Cục QLGSBH thuộc Bộ Tài chính, cơ quan quản lý nhà nước trực tiếp tổ chức kỳ thi và phê duyệt kết quả.'],
          ['CSĐT', 'Cơ sở đào tạo', 'Cơ sở được Bộ Tài chính cấp phép đào tạo đại lý; là đơn vị trực tiếp cấp chứng chỉ sau khi thí sinh thi đạt.']
        ]
      },
      {
        type: 'table',
        title: 'Từ viết tắt tiếng Anh — Các bộ quy tắc bảo hiểm quốc tế',
        head: ['Ký hiệu', 'Tên tiếng Anh & Tổ chức', 'Bảo hiểm cho cái gì (Đối tượng bảo vệ)'],
        rows: [
          ['ABI', 'Association of British Insurers (Hiệp hội bảo hiểm Vương quốc Anh)', 'Không phải tên một loại bảo hiểm, mà là TỔ CHỨC soạn thảo ra các bộ quy tắc mẫu quốc tế ("Mọi rủi ro tài sản", "Hỏa hoạn và rủi ro đặc biệt", "Gián đoạn kinh doanh"). Thấy chữ ABI trong đề tức là đang hỏi theo bộ quy tắc Anh.'],
          ['CAR', 'Contractors All Risks (Mọi rủi ro của nhà thầu)', 'Công trình ĐANG TRONG QUÁ TRÌNH XÂY DỰNG: nhà cửa, cầu đường, nhà xưởng, đập thủy điện. Bảo hiểm cho chính thân công trình trong thời gian thi công.'],
          ['EAR', 'Erection All Risks (Mọi rủi ro lắp đặt)', 'Công trình ĐANG LẮP ĐẶT máy móc, thiết bị, dây chuyền sản xuất công nghiệp. Cùng bộ với CAR nên đề hay viết "CAR/EAR". Khác biệt: CAR thiên về XÂY, EAR thiên về LẮP ĐẶT máy.'],
          ['CPM', 'Contractors Plant and Machinery (Máy móc thiết bị của nhà thầu)', 'BẢN THÂN máy móc thi công tại công trường: cần cẩu, máy xúc, máy ủi, trạm trộn bê tông. Đơn CAR chỉ bảo vệ công trình, KHÔNG tự động bảo hiểm thiết bị CPM (phải mua riêng). Đây là bẫy kinh điển!'],
          ['CECR', 'Civil Engineering Completed Risks (Công trình dân dụng đã hoàn thành)', 'Công trình dân dụng ĐÃ XÂY DỰNG XONG và ĐƯA VÀO SỬ DỤNG: cầu, đập, kè, hầm giao thông. Nối tiếp đơn CAR (CAR bảo vệ lúc xây, CECR bảo vệ sau khi hoàn thành đưa vào vận hành).'],
          ['MB', 'Machinery Breakdown (Đổ vỡ máy móc)', 'Máy móc đang vận hành bình thường thì hỏng hóc do sự cố cơ điện nội tại: quá tải, đoản mạch, vỡ trục khuỷu, mỏi kim loại.'],
          ['BI', 'Business Interruption (Gián đoạn kinh doanh)', 'Không đền bù hỏng hóc tài sản hữu hình, mà bảo hiểm KHOẢN LỢI NHUẬN BỊ MẤT và chi phí duy trì hoạt động phát sinh do tài sản bị thiệt hại phải ngừng kinh doanh.'],
          ['Munich Re', 'Munich Reinsurance (Tập đoàn Tái bảo hiểm Munich - Đức)', 'Tương tự ABI, đây là hãng tái bảo hiểm đầu ngành soạn thảo các điều khoản mẫu kỹ thuật. Hầu hết đơn CAR/EAR, CPM, CECR ở Việt Nam đều áp dụng quy tắc Munich Re.']
        ]
      },
      {
        type: 'table',
        title: 'Viết tắt trong nghiệp vụ Tái bảo hiểm',
        head: ['Ký hiệu', 'Tên đầy đủ', 'Cơ chế hoạt động cốt lõi'],
        rows: [
          ['QS', 'Quota Share (Tái bảo hiểm số thành)', 'Chia sẻ rủi ro theo MỘT TỶ LỆ PHẦN TRĂM CỐ ĐỊNH cho mọi hợp đồng trong nhóm (Ví dụ: giữ lại 40%, nhượng tái 60%).'],
          ['SPL', 'Surplus (Tái bảo hiểm mức dôi)', 'Doanh nghiệp giữ lại một mức tiền cố định (mức giữ lại), phần vượt quá trần sẽ chuyển nhượng cho nhà tái bảo hiểm. Tỷ lệ nhượng linh hoạt theo từng hợp đồng.'],
          ['XL / XOL', 'Excess of Loss (Vượt mức bồi thường)', 'Tái bảo hiểm phi tỷ lệ: Nhà tái bảo hiểm chỉ chi trả khi số tiền bồi thường thực tế của vụ tổn thất vượt qua một mức tự chịu định trước.'],
          ['SL', 'Stop Loss (Vượt tỷ lệ bồi thường)', 'Nhà tái bảo hiểm chịu trách nhiệm khi TỔNG TỶ LỆ TỔN THẤT của cả danh mục trong cả năm vượt ngưỡng khống chế thỏa thuận.'],
          ['Treaty', 'Tái bảo hiểm cố định (Theo hợp đồng)', 'Ký kết hợp đồng khung hàng năm: Mọi rủi ro thỏa mãn điều kiện quy định sẽ TỰ ĐỘNG được chuyển nhượng tái bảo hiểm.'],
          ['Fac', 'Facultative (Tái bảo hiểm tạm thời)', 'Thỏa thuận riêng lẻ từng vụ việc cụ thể: Doanh nghiệp nhượng có quyền mời hoặc không, nhà nhận tái có toàn quyền chấp nhận hoặc từ chối.']
        ]
      },
      {
        type: 'list',
        title: 'Ba cặp khái niệm dễ nhầm lẫn nhất (Trọng tâm phân loại bẫy thi)',
        highlight: true,
        items: [
          'CAR vs EAR: Đều là bảo hiểm "Mọi rủi ro" trong giai đoạn thi công. Phân biệt: CAR dành cho phần XÂY DỰNG kiến trúc, EAR dành cho phần LẮP ĐẶT máy móc dây chuyền.',
          'CAR vs CPM: Đơn CAR bảo hiểm cho CÔNG TRÌNH XÂY DỰNG; còn CPM bảo hiểm cho BẢN THÂN MÁY MÓC THI CÔNG (máy xúc, cần cẩu). Mua CAR KHÔNG tự động bảo hiểm máy thi công.',
          'CAR vs CECR: CAR áp dụng lúc công trình ĐANG THI CÔNG; CECR áp dụng sau khi công trình ĐÃ HOÀN THÀNH và ĐƯA VÀO VẬN HÀNH KHAI THÁC.',
          'BMBH vs NĐBH: Bên mua bảo hiểm (BMBH) là người ký hợp đồng và thanh toán phí; Người được bảo hiểm (NĐBH) là đối tượng được bảo vệ tính mạng/sức khỏe/tài sản. Trong nhiều trường hợp, BMBH không nhất thiết phải là NĐBH.'
        ]
      },
      {
        type: 'table',
        title: 'Cụm từ chuyên ngành nghe lạ tai (Giải nghĩa đời thường)',
        head: ['Thuật ngữ trong đề thi', 'Ý nghĩa đơn giản & ví dụ thực tế'],
        rows: [
          ['Khuyết tật của vật liệu', 'Vật liệu đã bị lỗi ngầm từ bên trong trước khi đưa vào công trường (ví dụ: thép lẫn tạp chất bọt khí, bê tông trộn sai mác, đá non bị nứt).'],
          ['Khuyết tật đúc', 'Chi tiết máy khi đúc tại xưởng cơ khí đã bị khuyết tật bên trong (như rỗ khí, nứt vi mô trong lòng khối kim loại).'],
          ['Tay nghề kém', 'Công nhân thực hiện sai quy trình kỹ thuật (ví dụ: thợ hàn không ngấu mối nối, đầm bê tông dối, siết bu-lông thiếu mô-men lực).'],
          ['Lỗi thiết kế', 'Bản vẽ kỹ thuật và tính toán chịu lực sai ngay từ đầu của kỹ sư thiết kế (vật liệu và tay nghề thi công vẫn đạt chuẩn).'],
          ['Tổn thất trực tiếp / gián tiếp', 'Tổn thất trực tiếp là thiệt hại tại chính cấu kiện bị lỗi. Tổn thất gián tiếp là các bộ phận khác không có lỗi nhưng bị sập đổ hoặc hư hỏng lây.'],
          ['Mức khấu trừ', 'Khoản tiền người được bảo hiểm phải tự chịu trong mỗi sự cố tổn thất; công ty bảo hiểm chỉ bồi thường phần chi phí vượt trên mức này.'],
          ['Giá trị thay thế mới', 'Chi phí cần thiết để mua mới hoặc xây dựng mới một tài sản cùng loại tại thời điểm hiện tại, KHÔNG trừ khấu hao hao mòn.'],
          ['Điều khoản sửa đổi bổ sung (SĐBS)', 'Điều khoản thỏa thuận thêm để mở rộng hoặc thu hẹp quyền lợi. Đề thi ghi "không kèm SĐBS" nghĩa là chỉ xét theo phạm vi quy tắc cơ bản ban đầu.']
        ]
      },
      {
        type: 'note',
        title: 'CECR — Những điểm mấu chốt bắt buộc phải nhớ khi làm đề',
        text: '1. Đối tượng bảo hiểm: Công trình kỹ thuật dân dụng ĐÃ kết thúc xây dựng/lắp đặt và chính thức đưa vào sử dụng.\n2. Giá trị tham gia bảo hiểm: Luôn tính theo GIÁ TRỊ THAY THẾ MỚI của công trình (không dùng giá trị ghi sổ hay giá trị thực tế đã trừ khấu hao).\n3. Phạm vi bảo hiểm bao gồm cả ba yếu tố chính: Hỏa hoạn/sét đánh trực tiếp/nổ; Bão có sức gió từ cấp 8 trở lên; Lũ lụt, triều cường và sụt lún, lở đất đá tự nhiên.',
        variant: 'alert'
      }
    ]
  },
  {
    id: 'dai-ly',
    title: 'Đại lý bảo hiểm',
    badge: 'Rất hay ra đề thi',
    summary: 'Khái niệm, điều kiện hoạt động, nguyên tắc hành nghề, quyền & nghĩa vụ, tỷ lệ hoa hồng tối đa phi nhân thọ & bắt buộc (TT 67/2023/TT-BTC).',
    blocks: [
      {
        type: 'note',
        title: '🧠 MẸO NHỚ QUYỀN HẠN ĐẠI LÝ: "6 ĐƯỢC LÀM & 4 KHÔNG TUYỆT ĐỐI"',
        text: '• ĐƯỢC: Tư vấn, Giới thiệu, Chào bán, Thu xếp giao kết hợp đồng, Thu phí bảo hiểm, Thu thập hồ sơ bồi thường.\n• 4 KHÔNG (BẪY THI CỰC LỚN): Đại lý KHÔNG KÝ HỢP ĐỒNG — KHÔNG GIÁM ĐỊNH TỔN THẤT — KHÔNG QUYẾT ĐỊNH BỒI THƯỜNG — KHÔNG THU XẾP TÁI BẢO HIỂM. (Tất cả 4 quyền này là của Doanh nghiệp bảo hiểm).',
        variant: 'mnemonic'
      },
      {
        type: 'note',
        title: '🧠 BÀI CA HOA HỒNG TỐI ĐA (DỄ HỌC NHẤT)',
        text: '• THẤP NHẤT TOÀN NGÀNH: Hàng không 0,5% (bay trên trời quá cao, hoa hồng tí hon).\n• CAO NHẤT PHI NHÂN THỌ & SỨC KHỎE: Nông nghiệp 20% và Sức khỏe 20% (người nông dân và sức khỏe là quý nhất).\n• BẮT BUỘC XE MÁY VS Ô TÔ: Xe máy 20% — Ô tô chỉ 5% (Xe máy hoa hồng gấp 4 lần ô tô).\n• CHÁY NỔ: Tự nguyện 10% — Bắt buộc cưa đôi chỉ còn 5%.\n• THÂN TÀU: Tàu biển 5% — Tàu sông/cá nhỏ 15%.\n• TRẦN THƯỞNG HỖ TRỢ: Phi nhân thọ 50% — Sức khỏe 100%.\n• ĐẠI LÝ LÀM SAI GÂY HẠI CHO KHÁCH: DNBH vẫn phải chịu trách nhiệm đền cho khách, rồi mới đòi đại lý.',
        variant: 'mnemonic'
      },
      {
        type: 'note',
        title: 'Khái niệm đại lý bảo hiểm (Điều 124 LKDBH)',
        text: 'Đại lý bảo hiểm (ĐLBH) là tổ chức, cá nhân được doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài, tổ chức tương hỗ cung cấp bảo hiểm vi mô ỦY QUYỀN trên cơ sở HỢP ĐỒNG ĐẠI LÝ BẢO HIỂM để thực hiện hoạt động đại lý bảo hiểm.',
        variant: 'info'
      },
      {
        type: 'list',
        title: '6 nội dung hoạt động của đại lý bảo hiểm (Khoản 5 Điều 4 LKDBH)',
        highlight: true,
        items: [
          'Tư vấn sản phẩm bảo hiểm.',
          'Giới thiệu sản phẩm bảo hiểm.',
          'Chào bán sản phẩm bảo hiểm.',
          'Thu xếp việc giao kết hợp đồng bảo hiểm.',
          'Thu phí bảo hiểm theo ủy quyền.',
          'Thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.'
        ]
      },
      {
        type: 'note',
        title: 'Bẫy đề thi kinh điển về quyền hạn đại lý',
        text: 'Đại lý bảo hiểm KHÔNG ĐƯỢC thay mặt DNBH ký kết hợp đồng bảo hiểm, KHÔNG được thu xếp tái bảo hiểm, KHÔNG được giám định tổn thất và KHÔNG được quyết định bồi thường. Đại lý chỉ có quyền "thu xếp việc giao kết", còn bên ký kết hợp đồng và quyết định chi trả bồi thường là Doanh nghiệp bảo hiểm.',
        variant: 'warning'
      },
      {
        type: 'list',
        title: 'Điều kiện cá nhân làm đại lý bảo hiểm (Điều 125 LKDBH)',
        items: [
          'Là công dân Việt Nam thường trú tại Việt Nam.',
          'Có năng lực hành vi dân sự đầy đủ.',
          'Có chứng chỉ đại lý bảo hiểm phù hợp theo quy định pháp luật.'
        ]
      },
      {
        type: 'list',
        title: 'Điều kiện tổ chức làm đại lý bảo hiểm (Điều 125 LKDBH, Điều 62 NĐ 46)',
        items: [
          'Được thành lập và hoạt động hợp pháp tại Việt Nam.',
          'Đã đăng ký ngành, nghề kinh doanh hoạt động đại lý bảo hiểm theo quy định của pháp luật.',
          'Có nhân viên trực tiếp thực hiện đủ điều kiện hoạt động ĐLBH (đủ năng lực, có chứng chỉ phù hợp).',
          'Tổ chức khác (không phải ngân hàng): Có tối thiểu 03 nhân viên trực tiếp thực hiện hoạt động ĐLBH.',
          'Tổ chức tín dụng / chi nhánh ngân hàng nước ngoài: Mỗi chi nhánh, phòng giao dịch phải có quầy (hoặc bàn) giao dịch riêng, tách biệt hoàn toàn với khu vực thực hiện các nghiệp vụ ngân hàng khác.'
        ]
      },
      {
        type: 'list',
        title: 'Các đối tượng KHÔNG ĐƯỢC làm đại lý bảo hiểm',
        items: [
          'Cá nhân đang bị truy cứu trách nhiệm hình sự, đang chấp hành hình phạt tù, đang chấp hành hình phạt cấm hành nghề liên quan đến lĩnh vực bảo hiểm.',
          'Pháp nhân thương mại đang bị truy cứu trách nhiệm hình sự; tổ chức đang bị đình chỉ hoạt động có thời hạn / vĩnh viễn; tổ chức đang bị cấm kinh doanh, cấm hoạt động trong lĩnh vực liên quan đến bảo hiểm.'
        ]
      },
      {
        type: 'list',
        title: 'Nguyên tắc hoạt động của đại lý bảo hiểm (Điều 127 LKDBH)',
        items: [
          'Cá nhân KHÔNG được đồng thời làm đại lý cho DNBH khác hoạt động trong CÙNG LOẠI HÌNH bảo hiểm với DNBH đang làm đại lý.',
          'Tổ chức KHÔNG được đồng thời làm đại lý cho DNBH khác nếu không được chấp thuận BẰNG VĂN BẢN của DNBH đang làm đại lý.',
          'Chỉ được thực hiện hoạt động ĐLBH đối với những sản phẩm bảo hiểm ĐÃ ĐƯỢC ĐÀO TẠO.',
          'Thông tin cá nhân hoạt động ĐLBH phải được đăng ký và cập nhật tại cơ sở dữ liệu về hoạt động KDBH (Điều 11 LKDBH).',
          'Đã được cấp chứng chỉ ĐLBH nhưng không hoạt động đại lý trong 03 NĂM LIÊN TỤC thì phải thi lấy chứng chỉ mới trước khi hoạt động lại.'
        ]
      },
      {
        type: 'list',
        title: '7 nội dung bắt buộc trong Hợp đồng đại lý bảo hiểm (Điều 126 LKDBH)',
        items: [
          'Tên, địa chỉ của đại lý bảo hiểm.',
          'Tên, địa chỉ trụ sở chính của doanh nghiệp bảo hiểm.',
          'Nội dung và phạm vi hoạt động đại lý bảo hiểm.',
          'Quyền và nghĩa vụ của DNBH và đại lý bảo hiểm.',
          'Hoa hồng ĐLBH, thưởng, hỗ trợ ĐLBH và các quyền lợi khác (nếu có).',
          'Thời hạn hợp đồng đại lý.',
          'Phương thức giải quyết tranh chấp hợp đồng.'
        ]
      },
      {
        type: 'note',
        title: 'Ghi nhớ cốt lõi về hoa hồng đại lý',
        text: 'Hoa hồng đại lý bảo hiểm CHỈ được trả cho ĐẠI LÝ BẢO HIỂM — tuyệt đối không chi trả cho bên mua bảo hiểm, người được bảo hiểm hay người thụ hưởng. Mức chi trả hoa hồng, thưởng, hỗ trợ không vượt quá mức tối đa do Bộ trưởng Bộ Tài chính quy định.',
        variant: 'info'
      },
      {
        type: 'table',
        title: 'Tỷ lệ hoa hồng tối đa — Bảo hiểm PHI NHÂN THỌ (Thông tư 67/2023/TT-BTC)',
        head: ['Nghiệp vụ bảo hiểm phi nhân thọ', 'Tỷ lệ tối đa (%)', 'Ghi chú nhớ nhanh'],
        rows: [
          ['Bảo hiểm tài sản', '5%', 'Tài sản chung mức 5%'],
          ['Bảo hiểm hàng hóa vận chuyển', '10%', 'Hàng hóa đường bộ, biển 10%'],
          ['Thân tàu và TNDS chủ tàu — TÀU BIỂN', '5%', 'Tàu biển lớn: 5%'],
          ['Thân tàu và TNDS chủ tàu — TRỪ TÀU BIỂN (sông, cá)', '15%', 'Tàu sông, tàu cá nội địa: 15%'],
          ['Bảo hiểm trách nhiệm', '5%', 'Trách nhiệm chung 5%'],
          ['Bảo hiểm hàng không', '0,5%', 'Thấp nhất toàn ngành (0,5%)'],
          ['Xe cơ giới (TRỪ TNDS bắt buộc)', '10%', 'Thân vỏ xe tự nguyện 10%'],
          ['Bảo hiểm cháy, nổ TỰ NGUYỆN', '10%', 'Tự nguyện là 10%'],
          ['Bảo hiểm tín dụng và rủi ro tài chính', '10%', 'Tín dụng 10%'],
          ['Bảo hiểm thiệt hại khác', '10%', 'Khác 10%'],
          ['Bảo hiểm nông nghiệp', '20%', 'Cao nhất nhóm PNT (20%)'],
          ['Bảo hiểm bảo lãnh', '10%', 'Bảo lãnh 10%']
        ]
      },
      {
        type: 'table',
        title: 'Tỷ lệ hoa hồng tối đa — Bảo hiểm BẮT BUỘC',
        head: ['Loại bảo hiểm bắt buộc theo luật', 'Tỷ lệ tối đa (%)', 'Điểm thi hay gài bẫy'],
        rows: [
          ['TNDS của chủ xe MÔ TÔ, XE MÁY', '20%', 'Cao nhất nhóm bắt buộc (20%)'],
          ['TNDS của chủ xe Ô TÔ', '5%', 'Ô tô chỉ có 5% (dễ nhầm với xe máy)'],
          ['Cháy, nổ BẮT BUỘC', '5%', 'Bắt buộc chỉ 5% (tự nguyện là 10%)'],
          ['Công trình trong thời gian xây dựng', '5%', 'Bảo hiểm xây dựng bắt buộc 5%'],
          ['Trách nhiệm nghề nghiệp tư vấn đầu tư xây dựng', '5%', 'Tư vấn xây dựng 5%'],
          ['TNDS với bên thứ ba trong đầu tư xây dựng', '5%', 'Bên thứ ba công trường 5%'],
          ['Người lao động thi công trên công trường', '5%', 'Tai nạn công nhân bắt buộc 5%']
        ]
      },
      {
        type: 'note',
        title: 'Bẫy thi cực kỳ nguy hiểm: Cùng tên nhưng 2 mức khác nhau!',
        text: 'Đọc kỹ chữ "bắt buộc" hay "tự nguyện" trong đề:\n- Cháy nổ TỰ NGUYỆN là 10%, nhưng cháy nổ BẮT BUỘC chỉ có 5%.\n- Xe cơ giới thân vỏ là 10%, TNDS bắt buộc của xe Ô TÔ là 5%, trong khi TNDS bắt buộc xe MÔ TÔ, XE MÁY lại lên tới 20% (mức cao nhất của nhóm bắt buộc).\n- Tàu biển 5%, nhưng tàu KHÔNG phải tàu biển (tàu sông, tàu đánh cá) là 15%.\n- Thấp nhất toàn bộ hệ thống là Hàng không: 0,5%.\n- Cao nhất nhóm phi nhân thọ là Nông nghiệp: 20%.',
        variant: 'alert'
      },
      {
        type: 'list',
        title: 'Hoa hồng bảo hiểm sức khỏe, nhân thọ và các trường hợp riêng',
        items: [
          'Bảo hiểm SỨC KHỎE: Tối đa 20% (mức chung toàn diện, không chia nhỏ nghiệp vụ).',
          'Bảo hiểm HƯU TRÍ: 3% tổng phí bảo hiểm thu được.',
          'Bảo hiểm nhân thọ NHÓM: Tối đa bằng 50% tỷ lệ tương ứng của hợp đồng nhân thọ CÁ NHÂN cùng loại.',
          'Bảo hiểm VI MÔ qua đại lý của tổ chức tương hỗ: Tối đa 10% phí thực tế thu được.',
          'Nhân thọ cá nhân trả phí định kỳ (từ 01/7/2024): Tử kỳ và trọn đời 40% năm đầu; Hỗn hợp / sinh kỳ / định kỳ trên 10 năm là 30%, từ 10 năm trở xuống là 25%; Liên kết chung và liên kết đơn vị là 30% năm đầu.',
          'Sản phẩm có văn bản hướng dẫn riêng thì áp dụng theo tỷ lệ của văn bản riêng đó.'
        ]
      },
      {
        type: 'list',
        title: 'Cách tính và trần thưởng, hỗ trợ đại lý (Điều 51, 52 TT 67/2023/TT-BTC)',
        items: [
          'Hoa hồng tính trên PHÍ BẢO HIỂM THỰC TẾ THU ĐƯỢC của từng hợp đồng, KHÔNG tính trên phí danh nghĩa ghi trên hợp đồng.',
          'Hợp đồng bảo hiểm TRỌN GÓI: Hoa hồng bằng TỔNG hoa hồng của từng nghiệp vụ trong gói, không lấy một tỷ lệ chung.',
          'Thưởng, hỗ trợ và quyền lợi khác — bảo hiểm PHI NHÂN THỌ: Tổng không vượt quá 50% hoa hồng của tất cả hợp đồng đã khai thác trong năm tài chính.',
          'Thưởng, hỗ trợ và quyền lợi khác — bảo hiểm SỨC KHỎE: Tổng không vượt quá 100% hoa hồng của tất cả hợp đồng sức khỏe đã khai thác trong năm tài chính.',
          'DNBH ký nhiều hợp đồng đại lý cho cùng một hợp đồng bảo hiểm thì TỔNG hoa hồng chi ra vẫn không được vượt mức tối đa.',
          'Bán hàng trực tiếp không qua đại lý: Mức giảm phí tối đa không vượt quá tỷ lệ hoa hồng của sản phẩm đó.'
        ]
      },
      {
        type: 'note',
        title: 'Trách nhiệm pháp lý khi đại lý làm sai',
        text: 'Nếu đại lý bảo hiểm vi phạm hợp đồng đại lý gây thiệt hại đến quyền, lợi ích hợp pháp của người được bảo hiểm hoặc bên mua bảo hiểm thì DOANH NGHIỆP BẢO HIỂM VẪN PHẢI CHỊU TRÁCH NHIỆM thực hiện các nghĩa vụ theo hợp đồng bảo hiểm do đại lý thu xếp giao kết. Sau đó, DNBH có quyền yêu cầu đại lý bồi hoàn lại.',
        variant: 'alert'
      }
    ]
  },
  {
    id: 'nguyen-tac',
    title: 'Nguyên tắc bảo hiểm',
    badge: 'Rất hay ra đề thi',
    summary: '10 nguyên tắc hoạt động bảo hiểm và 5 nguyên tắc giao kết hợp đồng theo Điều 16 Luật Kinh doanh bảo hiểm số 08/2022/QH15.',
    blocks: [
      {
        type: 'note',
        title: '🧠 MẸO NHỚ THẦN TỐC: "5 NGUYÊN TẮC GIAO KẾT HỢP ĐỒNG (ĐIỀU 16 LKDBH)"',
        text: 'Nhớ câu thần chú: "TRUNG THỰC - QUYỀN LỢI - BỒI THƯỜNG - THẾ QUYỀN - RỦI RO NGẪU NHIÊN":\n1. TRUNG THỰC TUYỆT ĐỐI (Uberrima Fides): Cả 2 bên phải trung thực 100%, bên mua khai đúng bệnh tật/tài sản, DNBH giải thích rõ điều khoản và bảo mật.\n2. QUYỀN LỢI CÓ THỂ ĐƯỢC BẢO HIỂM: Phải có thiệt hại tài chính nếu đối tượng gặp nạn. BH tài sản: phải có lúc tổn thất. BH nhân thọ: phải có lúc ký hợp đồng.\n3. BỒI THƯỜNG: Chỉ đền đúng thiệt hại thực tế, KHÔNG ĐƯỢC LÀM GIÀU từ bảo hiểm. Không áp dụng cho BH nhân thọ (BH con người áp dụng nguyên tắc KHOÁN).\n4. THẾ QUYỀN: DNBH đền xong được thay khách hàng đi đòi người thứ ba. CHỈ áp dụng BH tài sản & TNDS. TUYỆT ĐỐI KHÔNG áp dụng BH nhân thọ/con người.\n5. RỦI RO NGẪU NHIÊN: Rủi ro phải bất ngờ, không lường trước được, không cố ý.',
        variant: 'mnemonic'
      },
      {
        type: 'list',
        title: '5 nguyên tắc giao kết & thực hiện HĐBH (Điều 16 LKDBH 2022)',
        highlight: true,
        items: [
          'Trung thực tuyệt đối: Các bên cung cấp thông tin, thực hiện các quyền và nghĩa vụ một cách trung thực nhất, trên cơ sở tin tưởng tuyệt đối lẫn nhau trong quá trình giao kết và thực hiện hợp đồng.',
          'Quyền lợi có thể được bảo hiểm: Bên mua bảo hiểm phải có quyền lợi có thể được bảo hiểm phù hợp với từng loại hợp đồng bảo hiểm theo quy định của Luật này.',
          'Bồi thường: Số tiền bồi thường mà người được bảo hiểm nhận được KHÔNG VƯỢT QUÁ thiệt hại thực tế trong sự kiện bảo hiểm, trừ trường hợp có thỏa thuận khác trong hợp đồng.',
          'Thế quyền: Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba có hành vi gây thiệt hại bồi hoàn trong phạm vi số tiền bồi thường bảo hiểm. Nguyên tắc này KHÔNG ÁP DỤNG đối với hợp đồng bảo hiểm nhân thọ và quyền lợi khoán trong bảo hiểm sức khỏe.',
          'Rủi ro ngẫu nhiên: Rủi ro được bảo hiểm phải là những rủi ro bất ngờ, không lường trước được, xảy ra ngoài ý muốn của các bên.'
        ]
      },
      {
        type: 'table',
        title: 'Bảng 10 nguyên tắc hoạt động kinh doanh bảo hiểm',
        head: ['Nguyên tắc', 'Nội dung cốt lõi', 'Ứng dụng & Bẫy đề thi'],
        rows: [
          [
            '1. Số đông bù số ít (Law of large numbers)',
            'Dựa trên quy luật số lớn trong toán xác suất thống kê để tính phí. Gom sự đóng góp phí của số đông người để bù đắp tổn thất cho số ít người gặp nạn.',
            'Cần số đông tham gia rủi ro cùng loại để phân tán rủi ro an toàn.'
          ],
          [
            '2. Lựa chọn rủi ro (Risk Selection)',
            'DNBH chỉ chấp nhận bảo hiểm cho những rủi ro có thể quản lý được: rủi ro thuần túy, bất ngờ, đo lường được bằng tiền, không mang tính thảm họa hủy diệt, không trái đạo đức/luật pháp.',
            'DNBH không nhận bảo hiểm cho rủi ro đầu cơ (chứng khoán, đánh bạc) hoặc hành vi cố ý.'
          ],
          [
            '3. Quyền lợi có thể được bảo hiểm (Insurable Interest)',
            'Bên mua phải có mối quan hệ pháp lý, kinh tế (quyền sở hữu, quyền chiếm hữu, quan hệ hôn nhân, huyết thống, nuôi dưỡng, cấp dưỡng hoặc nghĩa vụ tài chính) với đối tượng bảo hiểm.',
            'Bẫy thi: BH tài sản quyền lợi phải có lúc TỔN THẤT; BH con người phải có lúc GIAO KẾT HỢP ĐỒNG.'
          ],
          [
            '4. Trung thực tuyệt đối (Utmost Good Faith)',
            'Bên mua phải kê khai trung thực mọi tiền sử bệnh, rủi ro. DNBH phải giải thích rõ quy tắc, điều khoản loại trừ và bảo mật thông tin.',
            'Nếu bên mua cố ý gian dối che giấu bệnh tật: DNBH có quyền đơn phương hủy hợp đồng, không bồi thường và không hoàn phí.'
          ],
          [
            '5. Nguyên nhân gần (Proximate Cause)',
            'Nguyên nhân chủ yếu, trực tiếp và đủ mạnh để khởi động cả một chuỗi mắt xích sự kiện dẫn đến kết quả tổn thất, mà không bị ngắt quãng bởi bất kỳ lực độc lập mới nào.',
            'Chỉ bồi thường khi nguyên nhân gần thuộc phạm vi bảo hiểm. Nếu nguyên nhân gần là rủi ro loại trừ thì DNBH từ chối bồi thường.'
          ],
          [
            '6. Nguyên nhân trực tiếp (Direct Cause)',
            'Nguyên nhân chi phối và tác động tức thời gây ra tổn thất. Tổn thất phải phát sinh trực tiếp bởi sự kiện được bảo hiểm bảo vệ.',
            'Phân biệt với nguyên nhân gián tiếp, nguyên nhân xa.'
          ],
          [
            '7. Bồi thường (Indemnity)',
            'Đền bù thiệt hại tài chính nhằm khôi phục lại tình trạng tài chính của NĐBH NHƯ NGAY TRƯỚC KHI xảy ra tổn thất. Không lớn hơn giá trị thiệt hại thực tế.',
            'Mục tiêu: Đưa về trạng thái ban đầu, KHÔNG ĐƯỢC KIẾM LỜI từ rủi ro bảo hiểm. Chỉ áp dụng cho BH tài sản và BH thiệt hại.'
          ],
          [
            '8. Thế quyền (Subrogation)',
            'Sau khi bồi thường xong, DNBH được chuyển giao quyền đòi người thứ ba đã gây ra thiệt hại. Số tiền đòi không vượt quá số tiền DNBH đã bồi thường.',
            'Bẫy thi cực lớn: CHỈ ÁP DỤNG CHO BH TÀI SẢN & TNDS. TUYỆT ĐỐI KHÔNG ÁP DỤNG CHO BH NHÂN THỌ VÀ QUYỀN LỢI KHOÁN.'
          ],
          [
            '9. Đóng góp bồi thường (Contribution)',
            'Áp dụng khi Bảo hiểm trùng (một tài sản mua nhiều hợp đồng tại nhiều DNBH) hoặc đồng bảo hiểm: mỗi DNBH chia sẻ bồi thường theo TỶ LỆ số tiền bảo hiểm đã nhận.',
            'Tổng số tiền tất cả DNBH bồi thường không bao giờ được vượt quá giá trị thiệt hại thực tế của tài sản.'
          ],
          [
            '10. Nguyên tắc Khoán (Fixed Benefit)',
            'Áp dụng cho bảo hiểm con người (tử vong, thương tật, trợ cấp ngày nằm viện). Chi trả cố định theo số tiền đã thỏa thuận trước trong hợp đồng.',
            'Đặc điểm: Khách hàng có thể mua nhiều hợp đồng tại nhiều công ty và ĐƯỢC NHẬN TIỀN TỪ TẤT CẢ CÁC HỢP ĐỒNG ĐỒNG THỜI (không bị coi là bảo hiểm trùng).'
          ]
        ]
      },
      {
        type: 'note',
        title: '⚠️ 4 ĐIỂM PHÂN BIỆT SỐNG CÒN GIỮA NGUYÊN TẮC BỒI THƯỜNG VÀ NGUYÊN TẮC KHOÁN',
        text: '1. BẢO HIỂM TÀI SẢN = NGUYÊN TẮC BỒI THƯỜNG:\n• Bồi thường đúng thiệt hại thực tế, không vượt quá giá trị tổn thất.\n• Bị ràng buộc nguyên tắc đóng góp bồi thường (không được lĩnh trùng gấp đôi).\n• Bị áp dụng nguyên tắc thế quyền (DNBH được đi đòi người thứ 3).\n\n2. BẢO HIỂM CON NGƯỜI (NHÂN THỌ) = NGUYÊN TẮC KHOÁN:\n• Tính mạng, thân thể con người là vô giá, không đo lường được bằng tiền.\n• Trả theo đúng số tiền bảo hiểm (STBH) đã thỏa thuận khi xảy ra sự kiện tử vong, thương tật.\n• ĐƯỢC NHẬN ĐỒNG THỜI TỪ NHIỀU HỢP ĐỒNG (mua 5 công ty thì nhận đủ cả 5 công ty).\n• KHÔNG ÁP DỤNG THẾ QUYỀN: Người thứ 3 đâm xe gây tử vong cho NĐBH, DNBH trả đủ tiền tử kỳ cho người thụ hưởng và KHÔNG ĐƯỢC quyền đòi bồi hoàn từ người thứ 3.',
        variant: 'warning'
      },
      {
        type: 'note',
        title: '🧠 BẪY THI VỀ THỜI ĐIỂM CỦA "QUYỀN LỢI CÓ THỂ ĐƯỢC BẢO HIỂM"',
        text: '• BẢO HIỂM NHÂN THỌ / SỨC KHỎE: Quyền lợi có thể được bảo hiểm phải tồn tại TẠI THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG. (Ví dụ: Vợ chồng mua cho nhau, sau này ly hôn thì hợp đồng vẫn có hiệu lực pháp lý).\n• BẢO HIỂM TÀI SẢN: Quyền lợi có thể được bảo hiểm phải tồn tại TẠI THỜI ĐIỂM XẢY RA TỔN THẤT. (Nếu đã bán xe ô tô cho người khác rồi mà xe bị cháy, bên bán không còn quyền lợi tài sản nên không được nhận tiền bồi thường).',
        variant: 'mnemonic'
      },
      {
        type: 'table',
        title: 'Bảng đối chiếu chuyên sâu: Nguyên tắc Bồi thường vs Nguyên tắc Khoán',
        head: ['Tiêu chí so sánh', 'Bảo hiểm Tài sản & TNDS (Nguyên tắc Bồi thường)', 'Bảo hiểm Con người / Nhân thọ (Nguyên tắc Khoán)'],
        rows: [
          [
            'Bản chất pháp lý',
            'Đền bù thiệt hại thực tế phát sinh để phục hồi trạng thái tài chính ban đầu.',
            'Chi trả số tiền khoán cố định đã được thỏa thuận trước trên hợp đồng khi xảy ra sự kiện.'
          ],
          [
            'Đối tượng bảo hiểm',
            'Tài sản vật chất, quyền tài sản, trách nhiệm dân sự đối với bên thứ ba.',
            'Tuổi thọ, tính mạng, thân thể và sức khỏe con người (vô giá, không thể định giá bằng tiền).'
          ],
          [
            'Giới hạn bồi thường tối đa',
            'Số tiền bồi thường KHÔNG VƯỢT QUÁ giá trị thiệt hại thực tế trong sự kiện bảo hiểm.',
            'Bằng ĐÚNG số tiền bảo hiểm (STBH) đã thỏa thuận, không phụ thuộc vào thiệt hại thực tế.'
          ],
          [
            'Tham gia nhiều hợp đồng (Bảo hiểm trùng)',
            'Các DNBH chỉ chia sẻ bồi thường theo tỷ lệ, tổng tiền bồi thường không vượt quá giá trị tài sản.',
            'ĐƯỢC NHẬN ĐẦY ĐỦ từ TẤT CẢ các hợp đồng tại nhiều công ty khác nhau (không bị coi là bảo hiểm trùng).'
          ],
          [
            'Áp dụng Thế quyền (Subrogation)',
            'BẮT BUỘC ÁP DỤNG: DNBH bồi thường xong có quyền yêu cầu người thứ ba bồi hoàn.',
            'TUYỆT ĐỐI KHÔNG ÁP DỤNG: DNBH trả đủ tiền và KHÔNG CÓ QUYỀN đòi người thứ ba gây nạn.'
          ],
          [
            'Câu thần chú mẹo thi',
            'Tài sản thì Bồi thường - Chỉ hòa, cấm lãi - Bị áp dụng thế quyền.',
            'Con người thì Khoán - Mua bao nhiêu nhận bấy nhiêu - Tuyệt đối cấm thế quyền.'
          ]
        ]
      },
      {
        type: 'table',
        title: 'Bảng quy tắc Thế quyền (Subrogation) & Giảm trừ số tiền bồi thường (Điều 54 LKDBH)',
        head: ['Tình huống / Hành vi', 'Quy định pháp luật & Cách xử lý của DNBH', 'Bẫy đề thi cần nhớ'],
        rows: [
          [
            'Điều kiện thực hiện quyền thế quyền',
            'Chỉ phát sinh sau khi DNBH ĐÃ CHI TRẢ bồi thường cho NĐBH.',
            'DNBH chưa bồi thường thì chưa có quyền thay mặt khách hàng đi khởi kiện người thứ ba.'
          ],
          [
            'Giới hạn số tiền đòi người thứ ba',
            'Chỉ được đòi trong phạm vi số tiền mà DNBH đã bồi thường cho NĐBH.',
            'Nếu thiệt hại thực tế là 100 tr, DNBH bồi thường 80 tr, DNBH chỉ được đòi người thứ ba 80 tr.'
          ],
          [
            'NĐBH tự ý từ bỏ quyền đòi người thứ ba',
            'DNBH ĐƯỢC QUYỀN GIẢM TRỪ số tiền bồi thường tương ứng với phần thiệt hại mà NĐBH đã từ bỏ.',
            'Nếu NĐBH tự hòa giải nhận 20 tr từ người thứ 3 thì DNBH sẽ giảm trừ 20 tr khi bồi thường.'
          ],
          [
            'Người thứ ba gây thiệt hại là người thân trong gia đình NĐBH',
            'DNBH KHÔNG ĐƯỢC áp dụng quyền thế quyền đối với cha mẹ, vợ chồng, con cái của NĐBH (trừ khi cố ý).',
            'Tránh việc DNBH đòi bồi hoàn lại chính những người phụ thuộc trong gia đình của NĐBH.'
          ],
          [
            'Áp dụng trong bảo hiểm sức khỏe',
            'Chỉ áp dụng thế quyền đối với quyền lợi CHI PHÍ Y TẾ THỰC TẾ. Không áp dụng thế quyền cho quyền lợi KHOÁN.',
            'Bẫy trắc nghiệm: Viện phí thực tế có thể thế quyền; tử vong / trợ cấp ngày khoán thì không.'
          ]
        ]
      },
      {
        type: 'table',
        title: 'Bảng tính Đóng góp bồi thường trong Bảo hiểm trùng (Điều 49 LKDBH)',
        head: ['Thuật ngữ / Công thức', 'Quy định chi tiết', 'Ví dụ trắc nghiệm chuẩn Bộ Tài chính'],
        rows: [
          [
            'Định nghĩa Bảo hiểm trùng',
            'Khi BMBH giao kết hợp đồng với từ hai DNBH trở lên để bảo hiểm cho CÙNG MỘT TÀI SẢN, có cùng điều kiện và tổng STBH > Giá trị tài sản.',
            'Chỉ xảy ra trong bảo hiểm tài sản / thiệt hại. Không có khái niệm bảo hiểm trùng trong bảo hiểm nhân thọ.'
          ],
          [
            'Công thức chia sẻ bồi thường',
            'Tiền bồi thường DNBH X = Thiệt hại thực tế × (STBH tại X / Tổng STBH tất cả các DNBH).',
            'Đảm bảo tổng bồi thường của tất cả các DNBH = Đúng giá trị thiệt hại thực tế.'
          ],
          [
            'Ví dụ mẫu tính toán thi cử',
            'Ngôi nhà 2 tỷ, mua tại Bảo Việt 1,2 tỷ, mua tại PVI 0,8 tỷ. Thiệt hại do cháy là 500 triệu đồng.',
            'Bảo Việt trả: 500 × (1,2 / 2) = 300 triệu. PVI trả: 500 × (0,8 / 2) = 200 triệu. Tổng nhận đúng 500 triệu.'
          ]
        ]
      },
      {
        type: 'note',
        title: '🎯 BẢNG MẸO NHẬN DIỆN TỪ KHÓA ĐỀ THI VỀ NGUYÊN TẮC BẢO HIỂM',
        text: 'Thấy từ khóa sau => Chọn ngay nguyên tắc tương ứng:\n• "Tin tưởng tuyệt đối", "cung cấp trung thực", "khai báo tiền sử" => Chọn: TRUNG THỰC TUYỆT ĐỐI.\n• "Có lợi ích kinh tế", "mối quan hệ nuôi dưỡng", "khi giao kết HĐ", "khi xảy ra tổn thất" => Chọn: QUYỀN LỢI CÓ THỂ ĐƯỢC BẢO HIỂM.\n• "Khôi phục trạng thái tài chính ban đầu", "không vượt quá thiệt hại thực tế", "không được kiếm lời" => Chọn: NGUYÊN TẮC BỒI THƯỜNG.\n• "Trả đúng số tiền đã thỏa thuận", "mua nhiều nhận đủ", "bảo hiểm con người" => Chọn: NGUYÊN TẮC KHOÁN.\n• "Đòi người thứ ba", "chuyển giao quyền đòi", "không áp dụng cho nhân thọ" => Chọn: THẾ QUYỀN.\n• "Bảo hiểm trùng", "chia sẻ theo tỷ lệ", "tổng số tiền bảo hiểm lớn hơn giá trị" => Chọn: ĐÓNG GÓP BỒI THƯỜNG.\n• "Nguyên nhân chủ yếu khởi động chuỗi mắt xích sự kiện", "không bị ngắt quãng" => Chọn: NGUYÊN NHÂN GẦN.\n• "Số lớn", "xác suất thống kê", "lấy phí số đông bù số ít" => Chọn: SỐ ĐÔNG BÙ SỐ ÍT.',
        variant: 'mnemonic'
      }
    ]
  },
  {
    id: 'rui-ro',
    title: 'Rủi ro & Khái niệm cơ bản',
    badge: 'Nền tảng thi cử',
    summary: 'Bản chất rủi ro, bộ ba Nguy cơ - Hiểm họa - Tổn thất, phân loại rủi ro (thuần túy, đầu cơ, cơ bản, riêng biệt), 5 biện pháp quản trị rủi ro và các khái niệm cốt lõi: BMBH, NĐBH, NTH, STBH, GTBH, Mức khấu trừ & Miễn thường.',
    blocks: [
      {
        type: 'note',
        title: '🧠 MẸO NHỚ THẦN TỐC: BỘ BA "NGUY CƠ (HAZARD) — HIỂM HỌA (PERIL) — TỔN THẤT (LOSS)"',
        text: 'Nhớ trật tự phát sinh dây chuyền: NGUY CƠ -> HIỂM HỌA -> TỔN THẤT.\n1. NGUY CƠ (Hazard): Điều kiện làm tăng khả năng xảy ra rủi ro (Ví dụ: Nhà bằng gỗ, chứa xăng dầu, lái xe say rượu).\n2. HIỂM HỌA (Peril): Nguyên nhân TRỰC TIẾP gây ra thiệt hại (Ví dụ: Cháy nhà, sét đánh, lũ lụt, tai nạn xe tông).\n3. TỔN THẤT (Loss): Hậu quả thiệt hại thực tế tính bằng tiền hoặc giảm sút sức khỏe, tính mạng (Ví dụ: Nhà bị thiêu rụi trị giá 500 triệu đồng).',
        variant: 'mnemonic'
      },
      {
        type: 'table',
        title: 'Bảng phân tích 3 loại Nguy cơ (Hazard) trong kinh doanh bảo hiểm',
        head: ['Loại nguy cơ (Hazard)', 'Bản chất & Định nghĩa', 'Ví dụ thực tế & Bẫy trắc nghiệm'],
        rows: [
          [
            '1. Nguy cơ vật chất (Physical Hazard)',
            'Tình trạng cơ học, vật lý, cấu tạo hoặc vị trí địa lý của đối tượng bảo hiểm làm gia tăng xác suất tổn thất.',
            'Ví dụ: Nhà làm bằng vách gỗ lợp lá; kho chứa hóa chất dễ cháy nổ; nhà ở ven sườn đồi dễ sạt lở.'
          ],
          [
            '2. Nguy cơ đạo đức (Moral Hazard)',
            'Ý định cố ý, gian lận, không trung thực hoặc hành vi lừa dối của con người nhằm trục lợi tiền bảo hiểm.',
            'Ví dụ: Tự đốt nhà để đòi tiền bồi thường; che giấu bệnh ung thư giai đoạn cuối khi ký hợp đồng bảo hiểm nhân thọ.'
          ],
          [
            '3. Nguy cơ tinh thần / thái độ (Morale Hazard)',
            'Thái độ vô trách nhiệm, bất cẩn, thờ ơ, lơ là trong bảo vệ tài sản do ỷ lại rằng mình đã mua bảo hiểm.',
            'Ví dụ: Ra khỏi nhà không khóa cửa vì nghĩ "đã có bảo hiểm lo"; lái xe phóng nhanh vượt ẩu do xe đã mua bảo hiểm thân vỏ.'
          ]
        ]
      },
      {
        type: 'table',
        title: 'Bảng phân loại các nhóm Rủi ro & Rủi ro được bảo hiểm (Insurable Risk)',
        head: ['Cặp phân loại rủi ro', 'Đặc điểm & Khả năng sinh lời / tổn thất', 'Quan điểm của Doanh nghiệp bảo hiểm'],
        rows: [
          [
            'Rủi ro thuần túy (Pure Risk) vs Rủi ro đầu cơ (Speculative Risk)',
            '• Rủi ro thuần túy: Chỉ có 2 khả năng (Tổn thất HOẶC Không tổn thất/Hòa vốn).\n• Rủi ro đầu cơ: Có 3 khả năng (Sinh lời, Hòa vốn, hoặc Thua lỗ).',
            '• DNBH CHỈ CHẤP NHẬN bảo hiểm cho Rủi ro thuần túy (ốm đau, cháy nổ, tai nạn).\n• DNBH TUYỆT ĐỐI TỪ CHỐI bảo hiểm cho Rủi ro đầu cơ (chứng khoán, bất động sản, đánh bạc).'
          ],
          [
            'Rủi ro cơ bản (Fundamental Risk) vs Rủi ro riêng biệt (Particular Risk)',
            '• Rủi ro cơ bản: Tác động diện rộng lên toàn bộ xã hội hoặc cộng đồng (Động đất, sóng thần, chiến tranh, suy thoái kinh tế).\n• Rủi ro riêng biệt: Tác động riêng lẻ lên một cá nhân hoặc tổ chức cụ thể (Trộm cắp, hỏa hoạn nhà riêng, tai nạn xe cá nhân).',
            '• Rủi ro cơ bản thường thuộc phạm vi loại trừ hoặc cần chương trình cứu trợ đặc biệt của Nhà nước.\n• Rủi ro riêng biệt là đối tượng kinh doanh chính của bảo hiểm thương mại.'
          ],
          [
            '6 Điều kiện của Rủi ro ĐƯỢC BẢO HIỂM (Insurable Risk)',
            '1. Phải là rủi ro thuần túy.\n2. Xảy ra bất ngờ, ngẫu nhiên ngoài ý muốn.\n3. Đo lường được bằng tiền.\n4. Số lượng đối tượng đủ lớn để phân tán rủi ro.\n5. Không mang tính thảm họa hủy diệt hàng loạt.\n6. Phí bảo hiểm phải ở mức hợp lý.',
            'Đề thi hay hỏi: "Điều kiện nào sau đây KHÔNG PHẢI là điều kiện của rủi ro được bảo hiểm?" -> Rủi ro đầu cơ hoặc rủi ro cố ý!'
          ]
        ]
      },
      {
        type: 'table',
        title: 'Bảng 5 biện pháp quản trị rủi ro (Risk Management Techniques)',
        head: ['Biện pháp quản trị', 'Nội dung cốt lõi', 'Ví dụ minh họa & Ứng dụng'],
        rows: [
          [
            '1. Né tránh rủi ro (Risk Avoidance)',
            'Chủ động không tham gia hoặc từ bỏ hoạt động chứa đựng rủi ro để triệt tiêu hoàn toàn khả năng tổn thất.',
            'Ví dụ: Không đi máy bay để tránh tai nạn hàng không; không mở nhà máy hóa chất.'
          ],
          [
            '2. Ngăn ngừa tổn thất (Loss Prevention)',
            'Áp dụng các biện pháp kỹ thuật nhằm làm giảm TẦN SUẤT hoặc XÁC SUẤT xảy ra rủi ro.',
            'Ví dụ: Lắp đặt hệ thống camera an ninh; cấm hút thuốc trong kho xăng; định kỳ kiểm tra phanh xe ô tô.'
          ],
          [
            '3. Giảm thiểu tổn thất (Loss Reduction)',
            'Áp dụng biện pháp nhằm làm giảm MỨC ĐỘ TRẦM TRỌNG / THIỆT HẠI khi rủi ro đã thực sự xảy ra.',
            'Ví dụ: Lắp đặt vòi phun nước Sprinkler tự động dập lửa khi có khói; đeo dây an toàn / túi khí khi lái xe.'
          ],
          [
            '4. Chấp nhận / Tự gánh chịu rủi ro (Risk Retention)',
            'Tự chuẩn bị nguồn lực tài chính cá nhân hoặc lập quỹ dự phòng để tự chi trả khi xảy ra tổn thất nhỏ.',
            'Ví dụ: Chấp nhận chịu mức khấu trừ 1 triệu đồng khi mua bảo hiểm xe ô tô; doanh nghiệp lập quỹ dự phòng rủi ro.'
          ],
          [
            '5. Chuyển giao rủi ro (Risk Transfer)',
            'Chuyển gánh nặng tài chính của tổn thất tiềm năng sang cho một chủ thể khác chịu trách nhiệm thay.',
            'MUA BẢO HIỂM là hình thức chuyển giao rủi ro điển hình, văn minh và phổ biến nhất trong nền kinh tế.'
          ]
        ]
      },
      {
        type: 'note',
        title: '🧠 MẸO NHỚ THẦN TỐC: PHÂN BIỆT "NGĂN NGỪA TỔN THẤT" VÀ "GIẢM THIỂU TỔN THẤT"',
        text: '• NGĂN NGỪA (Prevention) = Tác động TRƯỚC KHI rủi ro xảy ra để GIẢM TẦN SUẤT (Xác suất = 0 hoặc giảm mạnh).\n• GIẢM THIỂU (Reduction) = Tác động KHI HOẶC SAU KHI rủi ro xảy ra để GIẢM ĐỘ LỚN THIỆT HẠI (Hạn chế tối đa thiệt hại lan rộng).',
        variant: 'mnemonic'
      },
      {
        type: 'table',
        title: 'Bảng các thuật ngữ & chủ thể nền tảng trong Hợp đồng bảo hiểm',
        head: ['Thuật ngữ / Chủ thể', 'Định nghĩa chuẩn Luật KDBH số 08/2022/QH15', 'Quyền & Nghĩa vụ chính'],
        rows: [
          [
            'Bên mua bảo hiểm (BMBH)',
            'Tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm.',
            'Phải từ đủ 18 tuổi trở lên hoặc có người đại diện hợp pháp; có quyền lợi có thể được bảo hiểm; có nghĩa vụ đóng phí đầy đủ.'
          ],
          [
            'Người được bảo hiểm (NĐBH)',
            'Tổ chức, cá nhân có tài sản, trách nhiệm dân sự, sức khỏe, tính mạng được bảo hiểm theo hợp đồng.',
            'Là đối tượng được bảo vệ trực tiếp. Trong bảo hiểm nhân thọ, NĐBH có thể trùng hoặc khác BMBH.'
          ],
          [
            'Người thụ hưởng (NTH)',
            'Tổ chức, cá nhân được Bên mua bảo hiểm chỉ định để nhận tiền bồi thường / trả tiền bảo hiểm.',
            'Chỉ xuất hiện trong hợp đồng bảo hiểm con người. BMBH có quyền thay đổi NTH nhưng phải thông báo bằng văn bản cho DNBH.'
          ],
          [
            'Số tiền bảo hiểm (STBH)',
            'Số tiền mà DNBH thỏa thuận chi trả khi có sự kiện bảo hiểm xảy ra theo quy định trong hợp đồng.',
            'Là giới hạn trách nhiệm tối đa của DNBH trong suốt thời hạn bảo hiểm.'
          ],
          [
            'Giá trị bảo hiểm (GTBH)',
            'Giá trị thực tế bằng tiền của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng hoặc xảy ra sự kiện.',
            'CHỈ CÓ trong bảo hiểm tài sản. KHÔNG CÓ trong bảo hiểm nhân thọ vì tính mạng con người là vô giá.'
          ],
          [
            'Sự kiện bảo hiểm',
            'Sự kiện khách quan do các bên thỏa thuận hoặc pháp luật quy định mà khi xảy ra thì DNBH phải bồi thường.',
            'Phải có tính chất bất ngờ, ngẫu nhiên, không do hành vi cố ý của người thụ hưởng hoặc BMBH.'
          ]
        ]
      },
      {
        type: 'note',
        title: '⚠️ BẪY THI CỰC KỲ NGUY HIỂM: 3 TRẠNG THÁI GIÁ TRỊ TRONG BẢO HIỂM TÀI SẢN',
        text: '1. BẢO HIỂM ĐÚNG GIÁ TRỊ (STBH = GTBH):\n• DNBH bồi thường toàn bộ thiệt hại thực tế phát sinh (tối đa bằng STBH).\n\n2. BẢO HIỂM DƯỚI GIÁ TRỊ (STBH < GTBH):\n• DNBH bồi thường THEO TỶ LỆ: Số tiền bồi thường = Thiệt hại thực tế × (STBH / GTBH).\n• Ví dụ: Nhà trị giá 2 tỷ đồng, mua bảo hiểm 1 tỷ đồng (50%). Khi cháy thiệt hại 600 triệu, DNBH chỉ bồi thường = 600 tr × (1 tỷ / 2 tỷ) = 300 triệu đồng! Phần còn lại do chủ nhà tự chịu.\n\n3. BẢO HIỂM TRÊN GIÁ TRỊ (STBH > GTBH):\n• Phần vượt quá giá trị tài sản BỊ VÔ HIỆU THEO PHÁP LUẬT.\n• DNBH chỉ bồi thường tối đa bằng GIÁ TRỊ THIỆT HẠI THỰC TẾ (không bao giờ vượt quá GTBH để ngăn chặn trục lợi).\n• DNBH phải hoàn lại phí bảo hiểm cho phần vượt quá sau khi trừ đi chi phí hợp lý (nếu BMBH không có lỗi gian dối cố ý).',
        variant: 'warning'
      },
      {
        type: 'table',
        title: 'Bảng đối chiếu Mức khấu trừ (Deductible) vs Miễn thường không khấu trừ (Franchise)',
        head: ['Tiêu chí phân biệt', 'Mức khấu trừ có mức (Deductible)', 'Miễn thường không khấu trừ (Disappearing Franchise)'],
        rows: [
          [
            'Khái niệm cốt lõi',
            'Khoản tiền quy định trước mà Bên mua bảo hiểm phải tự gánh chịu trong mỗi vụ tổn thất.',
            'Mức ranh giới: Nếu tổn thất vượt qua mức này thì DNBH sẽ gánh vác toàn bộ không trừ đồng nào.'
          ],
          [
            'Khi tổn thất ≤ Mức quy định',
            'Khách hàng tự chịu toàn bộ 100%, DNBH không bồi thường đồng nào.',
            'Khách hàng tự chịu toàn bộ 100%, DNBH không bồi thường đồng nào.'
          ],
          [
            'Khi tổn thất > Mức quy định',
            'DNBH bồi thường phần VƯỢT QUÁ:\nSố tiền bồi thường = Tổn thất - Mức khấu trừ.',
            'DNBH bồi thường TOÀN BỘ TỔN THẤT THỰC TẾ (không trừ bất kỳ khoản nào).'
          ],
          [
            'Ví dụ cụ thể (Mức quy định: 10 triệu, Tổn thất thực tế: 50 triệu)',
            'DNBH bồi thường = 50 tr - 10 tr = 40 triệu đồng.',
            'DNBH bồi thường = ĐỦ 50 triệu đồng!'
          ],
          [
            'Mục đích áp dụng',
            'Nâng cao ý thức tự bảo quản tài sản của khách hàng và giảm chi phí giải quyết bồi thường cho các vụ tổn thất nhỏ.',
            'Kích khích khách hàng khai báo và bảo vệ tài sản, giảm chi phí hành chính cho tổn thất vụn vặt.'
          ]
        ]
      },
      {
        type: 'note',
        title: '🧠 MẸO NHỚ CÁC TRƯỜNG HỢP LOẠI TRỪ TRÁCH NHIỆM BẢO HIỂM (ĐIỀU 19 LUẬT KDBH 2022)',
        text: 'DNBH KHÔNG PHẢI BỒI THƯỜNG / TRẢ TIỀN BẢO HIỂM trong các trường hợp sau:\n1. Hành vi CỐ Ý gây tổn thất của Bên mua bảo hiểm, Người được bảo hiểm hoặc Người thụ hưởng.\n2. NĐBH chết do TỰ TỬ trong thời hạn 2 NĂM kể từ ngày nộp khoản phí bảo hiểm đầu tiên hoặc kể từ ngày hợp đồng được khôi phục hiệu lực.\n3. NĐBH chết hoặc thương tật vĩnh viễn do lỗi cố ý của Người thụ hưởng (Nếu có nhiều người thụ hưởng thì chỉ người có lỗi cố ý bị tước quyền lợi, những người còn lại vẫn nhận bình thường).\n4. NĐBH chết do bị thi hành án tử hình.\n5. Các trường hợp loại trừ khác theo quy định pháp luật (chiến tranh, khủng bố, thảm họa hạt nhân, vi phạm pháp luật hình sự).',
        variant: 'mnemonic'
      }
    ]
  },
  {
    id: "hdbh",
    title: "Hợp đồng bảo hiểm",
    badge: "Trọng tâm số 1",
    summary: "Định nghĩa HĐBH, hình thức, 4 loại hợp đồng, trường hợp vô hiệu (Điều 25), các mốc thời hạn vàng (1 năm, 15 ngày, 3 năm, 30 ngày), quyền và nghĩa vụ các bên.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: HỢP ĐỒNG BẢO HIỂM & CÁC MỐC THỜI HẠN VÀNG",
            "text": "Nhớ các mốc số vàng:\n• 1 NĂM: Thời hạn nộp hồ sơ yêu cầu bồi thường kể từ ngày xảy ra sự kiện.\n• 15 NGÀY: DNBH phải bồi thường nếu trong HĐ không có thỏa thuận về thời hạn.\n• 3 NĂM: Thời hiệu khởi kiện tranh chấp hợp đồng bảo hiểm.\n• 30 NGÀY: Công bố chuyển giao danh mục HĐBH sau khi Bộ Tài chính chấp thuận.\n• VÔ HIỆU: Vô hiệu ngay TỪ THỜI ĐIỂM GIAO KẾT, hoàn trả cho nhau những gì đã nhận (không có quyền lợi, không có đối tượng, biết sự kiện đã xảy ra, giả tạo, người chưa thành niên không đại diện).",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Định nghĩa (Khoản 16 Điều 4 LKDBH)",
            "text": "HĐBH là sự THỎA THUẬN giữa bên mua bảo hiểm và DNBH, theo đó bên mua bảo hiểm phải đóng phí bảo hiểm, DNBH phải bồi thường / trả tiền bảo hiểm theo thỏa thuận trong hợp đồng.",
            "variant": "info"
      },
      {
            "type": "list",
            "title": "Hình thức & bằng chứng giao kết",
            "items": [
                  "HĐBH phải được lập thành VĂN BẢN.",
                  "Bằng chứng giao kết HĐBH: hợp đồng, GIẤY CHỨNG NHẬN BẢO HIỂM, ĐƠN BẢO HIỂM hoặc hình thức khác theo quy định pháp luật."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "4 loại hợp đồng bảo hiểm",
            "items": [
                  "HĐBH nhân thọ.",
                  "HĐBH sức khỏe.",
                  "HĐBH tài sản, thiệt hại (bao gồm HĐBH tài sản và HĐBH thiệt hại).",
                  "HĐBH trách nhiệm."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "Trường hợp HĐBH VÔ HIỆU (Điều 25 LKDBH)",
            "items": [
                  "Bên mua bảo hiểm KHÔNG có quyền lợi có thể được bảo hiểm tại thời điểm giao kết.",
                  "KHÔNG có đối tượng bảo hiểm tại thời điểm giao kết.",
                  "Tại thời điểm giao kết, bên mua bảo hiểm BIẾT sự kiện bảo hiểm ĐÃ XẢY RA.",
                  "Hợp đồng giao kết GIẢ TẠO.",
                  "Bên mua bảo hiểm là người chưa thành niên, mất/hạn chế năng lực hành vi dân sự mà không có người đại diện theo pháp luật.",
                  "Giao kết do bị nhầm lẫn, lừa dối, đe dọa, cưỡng ép.",
                  "Đối tượng bảo hiểm là đối tượng bị cấm theo quy định pháp luật."
            ],
            "highlight": true
      },
      {
            "type": "note",
            "title": "Hệ quả khi HĐBH vô hiệu",
            "text": "Hợp đồng KHÔNG có hiệu lực TỪ THỜI ĐIỂM GIAO KẾT. Các bên hoàn trả cho nhau những gì đã nhận. Bên có lỗi gây thiệt hại thì phải bồi thường.",
            "variant": "warning"
      },
      {
            "type": "table",
            "title": "Các mốc thời hạn quan trọng",
            "head": [
                  "Nội dung",
                  "Thời hạn"
            ],
            "rows": [
                  [
                        "Nộp hồ sơ yêu cầu bồi thường, trả tiền bảo hiểm",
                        "01 NĂM kể từ ngày xảy ra sự kiện bảo hiểm"
                  ],
                  [
                        "DNBH bồi thường khi KHÔNG có thỏa thuận về thời hạn",
                        "15 NGÀY kể từ ngày nhận đủ hồ sơ hợp lệ"
                  ],
                  [
                        "Thời hiệu khởi kiện về HĐBH",
                        "03 NĂM kể từ thời điểm phát sinh tranh chấp"
                  ],
                  [
                        "Công bố việc chuyển giao danh mục HĐBH sau khi Bộ Tài chính chấp thuận",
                        "30 NGÀY"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Lưu ý về thời hạn nộp hồ sơ",
            "text": "Thời gian xảy ra sự kiện bất khả kháng hoặc trở ngại khách quan KHÔNG tính vào thời hạn 01 năm. Nếu NĐBH chứng minh được không biết thời điểm xảy ra sự kiện bảo hiểm, thời hạn tính từ ngày họ BIẾT sự kiện xảy ra. Nếu người thứ ba yêu cầu bồi thường, thời hạn tính từ ngày người thứ ba yêu cầu.",
            "variant": "info"
      },
      {
            "type": "list",
            "title": "Nghĩa vụ của bên mua bảo hiểm",
            "items": [
                  "Đóng phí bảo hiểm đầy đủ theo thời hạn và phương thức đã thỏa thuận.",
                  "Kê khai đầy đủ, trung thực mọi thông tin liên quan đến HĐBH theo yêu cầu của DNBH.",
                  "Thông báo những trường hợp có thể làm TĂNG rủi ro hoặc phát sinh thêm trách nhiệm của DNBH.",
                  "Thông báo cho DNBH về việc xảy ra sự kiện bảo hiểm theo thỏa thuận.",
                  "Áp dụng biện pháp đề phòng, hạn chế tổn thất theo quy định.",
                  "BẪY: \"Lựa chọn DNBH có đủ năng lực tài chính\" là QUYỀN, KHÔNG phải nghĩa vụ."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "Nghĩa vụ của doanh nghiệp bảo hiểm",
            "items": [
                  "Cung cấp cho bên mua bảo hiểm BẰNG CHỨNG GIAO KẾT hợp đồng bảo hiểm.",
                  "Giải thích rõ ràng, đầy đủ điều kiện, điều khoản, quyền lợi, ĐIỀU KHOẢN LOẠI TRỪ trách nhiệm bảo hiểm.",
                  "Bồi thường, trả tiền bảo hiểm khi xảy ra sự kiện bảo hiểm.",
                  "Giải thích bằng văn bản lý do TỪ CHỐI bồi thường, trả tiền bảo hiểm.",
                  "Bảo mật thông tin do bên mua bảo hiểm, NĐBH cung cấp (trừ khi CQNN có thẩm quyền yêu cầu hoặc được đồng ý).",
                  "BẪY: DNBH KHÔNG có quyền thay đổi người thụ hưởng; KHÔNG có trách nhiệm điền giấy yêu cầu bảo hiểm; KHÔNG trả hoa hồng cho người được bảo hiểm."
            ],
            "highlight": false
      },
      {
            "type": "note",
            "title": "Điều khoản loại trừ trách nhiệm KHÔNG được áp dụng khi",
            "text": "Bên mua bảo hiểm có lý do CHÍNH ĐÁNG làm chậm trễ thông báo sự kiện bảo hiểm, HOẶC DNBH vi phạm nghĩa vụ giải thích rõ ràng điều khoản loại trừ khi giao kết hợp đồng.",
            "variant": "warning"
      }
]
  },
  {
    id: "tai-san",
    title: "Bảo hiểm tài sản & thiệt hại",
    badge: "Trọng tâm thi cử",
    summary: "Đối tượng tài sản và thiệt hại, trên giá trị, dưới giá trị, bảo hiểm trùng, căn cứ bồi thường giá thị trường, 3 hình thức bồi thường, bảo hiểm gián đoạn kinh doanh (ABI), cháy nổ bắt buộc.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: CĂN CỨ BỒI THƯỜNG TÀI SẢN & BẢO HIỂM TRÙNG",
            "text": "Các nguyên tắc cốt lõi:\n• CĂN CỨ BỒI THƯỜNG: Giá thị trường tại THỜI ĐIỂM và NƠI XẢY RA TỔN THẤT (không lấy giá sổ sách, không lấy giá lúc ký hợp đồng).\n• 3 HÌNH THỨC BỒI THƯỜNG: Sửa chữa, Thay thế, Trả tiền. Không thỏa thuận được thì bồi thường BẰNG TIỀN.\n• DƯỚI GIÁ TRỊ: Bồi thường theo TỶ LỆ = Thiệt hại × (STBH / Giá thị trường).\n• BẢO HIỂM TRÙNG: Mỗi công ty bồi thường theo tỷ lệ STBH của mình trên tổng STBH. Tổng tiền bồi thường không vượt quá giá trị thiệt hại thực tế.\n• CHÁY NỔ BẮT BUỘC: Giảm tối đa 20% tiền bồi thường nếu không thực hiện kiến nghị an toàn PCCC.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đối tượng & quyền lợi có thể được bảo hiểm",
            "text": "Đối tượng HĐBH tài sản là TÀI SẢN theo Bộ luật Dân sự: vật, tiền, giấy tờ có giá, quyền tài sản; gồm động sản, bất động sản, tài sản hiện có và tài sản hình thành trong tương lai. Quyền lợi có thể được bảo hiểm phát sinh từ quyền sở hữu, quyền khác đối với tài sản, quyền chiếm hữu hoặc quyền sử dụng. Người thuê, mượn chỉ có quyền lợi được bảo hiểm khi quyền chiếm hữu, sử dụng hoặc nghĩa vụ tài chính của họ làm phát sinh lợi ích đối với tài sản.",
            "variant": "info"
      },
      {
            "type": "note",
            "title": "Hợp đồng bảo hiểm THIỆT HẠI",
            "text": "Đối tượng là lợi ích kinh tế hoặc nghĩa vụ thực hiện hợp đồng, nghĩa vụ theo pháp luật mà NĐBH phải gánh chịu khi có tổn thất. Tại thời điểm xảy ra tổn thất, bên mua hoặc NĐBH phải có quyền lợi có thể được bảo hiểm. Đây là nửa còn lại của nhóm hợp đồng bảo hiểm tài sản và thiệt hại, không đồng nhất với bảo hiểm một vật hữu hình.",
            "variant": "info"
      },
      {
            "type": "table",
            "title": "So sánh 3 tình huống về số tiền bảo hiểm",
            "head": [
                  "Tình huống",
                  "Định nghĩa",
                  "Cách bồi thường"
            ],
            "rows": [
                  [
                        "HĐBH TRÊN giá trị",
                        "STBH CAO HƠN giá thị trường tài sản tại thời điểm giao kết. Các bên KHÔNG được cố ý giao kết.",
                        "Nếu giao kết do lỗi VÔ Ý: chưa có sự kiện thì hoàn phần phí vượt sau khi trừ chi phí hợp lý theo thỏa thuận; đã có sự kiện thì bồi thường theo giá thị trường lúc thiệt hại và hoàn phần phí vượt."
                  ],
                  [
                        "HĐBH DƯỚI giá trị",
                        "STBH THẤP HƠN giá thị trường tài sản tại thời điểm giao kết.",
                        "Bồi thường theo TỶ LỆ tương ứng giữa STBH và GIÁ THỊ TRƯỜNG. Tiền bồi thường không vượt số tiền bảo hiểm, trừ khi hợp đồng có thỏa thuận khác."
                  ],
                  [
                        "HĐBH TRÙNG",
                        "Từ 2 HĐBH trở lên bảo hiểm cùng phạm vi, đối tượng, thời hạn, sự kiện mà TỔNG STBH vượt quá giá thị trường tài sản.",
                        "Mỗi HĐ bồi thường theo TỶ LỆ giữa STBH của HĐ đó trên tổng STBH. Tổng bồi thường KHÔNG vượt quá giá trị thiệt hại thực tế."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Căn cứ bồi thường",
            "text": "Xác định trên cơ sở GIÁ THỊ TRƯỜNG của tài sản tại THỜI ĐIỂM và NƠI XẢY RA TỔN THẤT + MỨC ĐỘ THIỆT HẠI THỰC TẾ (trừ khi có thỏa thuận khác). Không dùng giá trị sổ sách, không dùng giá tại thời điểm tham gia bảo hiểm. Chi phí xác định giá thị trường và mức độ thiệt hại do DNBH chi trả.",
            "variant": "info"
      },
      {
            "type": "list",
            "title": "3 hình thức bồi thường",
            "items": [
                  "Sửa chữa tài sản bị thiệt hại.",
                  "Thay thế tài sản bị thiệt hại bằng tài sản khác.",
                  "Trả tiền bồi thường.",
                  "Nếu các bên KHÔNG thỏa thuận được hình thức thì bồi thường BẰNG TIỀN.",
                  "Chỉ với hình thức THAY THẾ hoặc TRẢ TIỀN: DNBH có quyền thu hồi tài sản sau khi đã thay thế hoặc bồi thường toàn bộ theo giá thị trường."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "Giám định tổn thất (Điều 53)",
            "items": [
                  "DNBH hoặc người được ủy quyền giám định nguyên nhân và mức độ tổn thất; DNBH chịu chi phí giám định.",
                  "Nếu không thống nhất về nguyên nhân hoặc mức độ tổn thất, các bên có thể thỏa thuận thuê giám định viên độc lập.",
                  "Không thỏa thuận được người giám định: một bên yêu cầu Tòa án hoặc Trọng tài trưng cầu; kết luận giám định độc lập có giá trị bắt buộc."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "Thế quyền yêu cầu bên thứ ba bồi hoàn (Điều 54)",
            "items": [
                  "Sau khi bồi thường, NĐBH chuyển cho DNBH quyền yêu cầu bên thứ ba hoàn trả trong phạm vi số tiền DNBH đã trả.",
                  "NĐBH phải cung cấp tài liệu, thông tin cần thiết. Từ chối chuyển quyền làm DNBH được khấu trừ tiền bồi thường theo mức độ lỗi.",
                  "DNBH không truy đòi cha, mẹ, vợ, chồng, con của NĐBH, trừ trường hợp người đó cố ý gây tổn thất."
            ],
            "highlight": false
      },
      {
            "type": "note",
            "title": "Chuyển giao hợp đồng bảo hiểm",
            "text": "Bên nhận chuyển giao phải có quyền lợi có thể được bảo hiểm và kế thừa quyền, nghĩa vụ. Việc chuyển giao chỉ có hiệu lực khi thông báo bằng văn bản và được DNBH đồng ý bằng văn bản, trừ tập quán quốc tế hoặc thỏa thuận khác trong hợp đồng.",
            "variant": "info"
      },
      {
            "type": "note",
            "title": "Nghĩa vụ khi xảy ra tổn thất",
            "text": "NGƯỜI ĐƯỢC BẢO HIỂM (không phải DNBH) KHÔNG được từ bỏ tài sản được bảo hiểm và phải áp dụng các biện pháp cần thiết trong khả năng cho phép để ngăn chặn hoặc giảm thiểu tổn thất.",
            "variant": "warning"
      },
      {
            "type": "list",
            "title": "Bảo đảm an toàn và chi phí hạn chế tổn thất",
            "items": [
                  "QUYỀN của DNBH: kiểm tra, khuyến nghị hoặc yêu cầu biện pháp bảo đảm an toàn; có thể ấn định thời hạn khắc phục.",
                  "Hết thời hạn mà bên mua/NĐBH không khắc phục: DNBH có thể tăng phí hoặc đơn phương chấm dứt hợp đồng.",
                  "NGHĨA VỤ của DNBH: ngoài tiền bồi thường, trả chi phí cần thiết, hợp lý để đề phòng, hạn chế tổn thất và thực hiện hướng dẫn của DNBH theo thỏa thuận."
            ],
            "highlight": false
      },
      {
            "type": "table",
            "title": "Bảo hiểm gián đoạn kinh doanh (ABI) — hay ra đề",
            "head": [
                  "Khái niệm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Thời hạn bồi thường",
                        "Bắt đầu từ khi thiệt hại vật chất xảy ra TRONG thời hạn bảo hiểm gây gián đoạn kinh doanh, CÓ THỂ kéo dài vượt quá thời hạn bảo hiểm, nhưng KHÔNG vượt quá thời hạn bồi thường tối đa đã thỏa thuận."
                  ],
                  [
                        "Doanh thu tiêu chuẩn",
                        "Doanh thu của giai đoạn tương ứng với thời hạn bồi thường trong 12 tháng ngay trước thời điểm xảy ra thiệt hại, ĐƯỢC ĐIỀU CHỈNH để phản ánh xu hướng, thay đổi trong hoạt động kinh doanh."
                  ],
                  [
                        "Tiền lương, tiền công",
                        "CÓ THỂ được bảo hiểm như một thành phần chi phí cố định trong Lợi nhuận gộp, HOẶC tách riêng để bảo hiểm riêng (cả hai đều đúng)."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Điều kiện kích hoạt & công thức Gián đoạn kinh doanh",
            "items": [
                  "Phải có thiệt hại vật chất tại địa điểm và trong thời hạn bảo hiểm; đồng thời tồn tại hợp đồng bảo hiểm thiệt hại vật chất đang có hiệu lực.",
                  "Trách nhiệm bồi thường thiệt hại vật chất phải được thực hiện hoặc thừa nhận; vẫn đáp ứng nếu lẽ ra được bồi thường nhưng tổn thất thấp hơn mức miễn thường.",
                  "Lợi nhuận gộp = Lãi ròng trước thuế + Chi phí cố định; hoặc = Doanh thu − Chi phí biến đổi − Chi phí cố định tự bảo hiểm.",
                  "Bồi thường suy giảm doanh thu = (Doanh thu tiêu chuẩn − Doanh thu thực tế) × Tỷ lệ lợi nhuận gộp.",
                  "Thời hạn bồi thường thông thường 12 tháng nhưng có thể thỏa thuận dài hoặc ngắn hơn; mức miễn thường thường tính theo ngày."
            ],
            "highlight": false
      },
      {
            "type": "list",
            "title": "Bảo hiểm bắt buộc — 4 loại (Điều 8 LKDBH)",
            "items": [
                  "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
                  "Bảo hiểm cháy, nổ bắt buộc.",
                  "Bảo hiểm bắt buộc trong hoạt động đầu tư xây dựng.",
                  "Bảo hiểm bắt buộc theo quy định của luật khác.",
                  "Mục đích: bảo vệ lợi ích công cộng, môi trường và an toàn xã hội.",
                  "BẪY: một số TNNN là bắt buộc theo luật chuyên ngành; không được kết luận mọi bảo hiểm trách nhiệm nghề nghiệp đều tự nguyện."
            ],
            "highlight": true
      },
      {
            "type": "list",
            "title": "Bảo hiểm cháy, nổ bắt buộc — phạm vi và STBH",
            "items": [
                  "Đối tượng: toàn bộ tài sản của cơ sở có nguy hiểm về cháy, nổ gồm nhà/công trình và tài sản gắn liền, máy móc thiết bị, hàng hóa vật tư; phải ghi rõ đối tượng và địa điểm.",
                  "Phạm vi: thiệt hại do CHÁY, NỔ, trừ các trường hợp loại trừ.",
                  "STBH tối thiểu theo giá thị trường lúc giao kết. Không xác định được: nhà/công trình/máy móc theo giá trị còn lại hoặc thay thế; hàng hóa/vật tư theo hóa đơn, chứng từ hợp lệ.",
                  "Thông báo ngay và gửi thông báo bằng văn bản trong 14 ngày. Bồi thường không vượt STBH sau giảm trừ.",
                  "Có thể giảm tối đa 20% nếu không thực hiện đầy đủ, đúng hạn kiến nghị PCCC và vi phạm đó làm tăng thiệt hại."
            ],
            "highlight": true
      },
      {
            "type": "note",
            "title": "Cháy, nổ bắt buộc — loại trừ trọng yếu",
            "text": "Thiên tai như động đất, núi lửa; biến cố chính trị/an ninh; đốt nổ theo quyết định cơ quan nhà nước; tự lên men, tự tỏa nhiệt hoặc xử lý dùng nhiệt; sét không gây cháy nổ; vũ khí hạt nhân; hư hỏng thiết bị điện do quá tải, quá áp, đoản mạch, hồ quang mà không gây cháy nổ; cố ý gây cháy nổ hoặc cố ý vi phạm PCCC là nguyên nhân trực tiếp; dữ liệu/phần mềm; đốt rừng, đồng cỏ hoặc làm sạch đất.",
            "variant": "warning"
      },
      {
            "type": "list",
            "title": "Hồ sơ bồi thường cháy, nổ bắt buộc",
            "items": [
                  "Văn bản yêu cầu bồi thường; hợp đồng hoặc GCNBH.",
                  "Biên bản kiểm tra an toàn PCCC; biên bản giám định của DNBH hoặc người được ủy quyền.",
                  "Kết luận hoặc thông báo về nguyên nhân cháy, nổ của cơ quan có thẩm quyền.",
                  "Bản kê và chứng từ chứng minh thiệt hại."
            ],
            "highlight": false
      },
      {
            "type": "note",
            "title": "Đơn vị rủi ro",
            "text": "Việc coi các hạng mục là đơn vị rủi ro riêng phụ thuộc quy tắc và biểu phí áp dụng: có thể dựa vào khoảng cách không gian hoặc kết cấu phân cách chống cháy phù hợp. Đây không phải quy tắc chung bắt buộc luôn phải đồng thời đủ cả hai tiêu chí.",
            "variant": "info"
      },
      {
            "type": "note",
            "title": "Nội dung kỹ thuật và trách nhiệm học ở đâu?",
            "text": "CAR/EAR, CPM, mức khấu trừ và bảo hiểm xây dựng xem tại chương Tài sản kỹ thuật. Trách nhiệm nghề nghiệp tư vấn xây dựng xem tại chương Bảo hiểm trách nhiệm. Chương này chỉ giữ nguyên tắc pháp lý chung của bảo hiểm tài sản và thiệt hại.",
            "variant": "info"
      }
]
  },
  {
    id: "tskt",
    title: "Tài sản kỹ thuật (ABI, CAR/EAR, CPM)",
    badge: "Chuyên đề kỹ thuật",
    summary: "Quy tắc ABI của Hiệp hội Anh, đơn CAR/EAR xây dựng lắp đặt, máy móc CPM, CECR công trình hoàn thành, đổ vỡ máy móc MB, điều khoản 72 giờ, mẹo phân biệt lỗi thiết kế vs khuyết tật vật liệu.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM KỸ THUẬT & MẸO LÀM BÀI ABI",
            "text": "Bí quyết thi điểm cao:\n• MẸO LÀM BÀI ABI: Phương án đúng thường là câu DÀI NHẤT có điều kiện: \"Không, TRỪ KHI...\" hoặc \"Có, NẾU không bị loại trừ...\".\n• ĐIỀU KHOẢN 72 GIỜ: Mọi tổn thất do giông bão, lũ lụt, động đất phát sinh trong 72 GIỜ LIÊN TỤC được tính là MỘT sự cố bảo hiểm duy nhất.\n• LỖI THIẾT KẾ: Loại trừ triệt để! Cả hạng mục lỗi lẫn hạng mục bị vạ lây đều KHÔNG được bồi thường.\n• KHUYẾT TẬT VẬT LIỆU / TAY NGHỀ KÉM: Hạng mục có lỗi KHÔNG được bồi thường, nhưng hạng mục bị vạ lây ĐƯỢC bồi thường.\n• ĐỔ VỠ MÁY MÓC (MB): Chỉ lo hỏng hóc TỪ BÊN TRONG cơ điện; loại trừ lửa, sét trực tiếp và nổ hóa học.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đọc trước: chuyên đề này ra bao nhiêu câu",
            "text": "Ngân hàng đề xếp 116 câu vào nhóm \"TSKT - Hàng hải\" nhưng KHÔNG câu nào hỏi về tàu biển, vận đơn hay tổn thất chung. Toàn bộ hỏi tài sản kỹ thuật: quy tắc ABI của Hiệp hội bảo hiểm Vương quốc Anh (37 câu), đơn CAR/EAR xây dựng lắp đặt (22 câu), gián đoạn kinh doanh (16 câu), trách nhiệm nghề nghiệp (18 câu), hỏa hoạn và rủi ro đặc biệt (23 câu), máy móc chủ thầu CPM (8 câu). Đừng mất thời gian ôn hàng hải.",
            "variant": "warning"
      },
      {
            "type": "table",
            "title": "Chữ viết tắt trong chương này",
            "head": [
                  "Viết tắt",
                  "Nghĩa",
                  "Bảo hiểm cho"
            ],
            "rows": [
                  [
                        "ABI",
                        "Hiệp hội bảo hiểm Vương quốc Anh (Association of British Insurers)",
                        "Tổ chức soạn bộ quy tắc mẫu, không phải một loại bảo hiểm."
                  ],
                  [
                        "CAR",
                        "Mọi rủi ro của nhà thầu (Contractors All Risks)",
                        "Công trình đang XÂY DỰNG."
                  ],
                  [
                        "EAR",
                        "Mọi rủi ro lắp đặt (Erection All Risks)",
                        "Công trình đang LẮP ĐẶT máy móc, thiết bị."
                  ],
                  [
                        "CPM",
                        "Máy móc thiết bị chủ thầu (Contractors Plant and Machinery)",
                        "Bản thân máy thi công: cần cẩu, máy xúc."
                  ],
                  [
                        "CECR",
                        "Công trình dân dụng đã hoàn thành (Civil Engineering Completed Risks)",
                        "Công trình đã xong, đang sử dụng."
                  ],
                  [
                        "Munich Re",
                        "Hãng tái bảo hiểm Munich Reinsurance của Đức",
                        "Nơi soạn quy tắc mẫu cho CAR/EAR, CPM, CECR."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẹo làm bài quy tắc ABI",
            "text": "Đáp án hiếm khi là \"Có\" hoặc \"Không\" trần trụi. Phương án đúng thường là câu dài nhất, có kèm điều kiện: \"Không, TRỪ KHI...\" hoặc \"Có, NẾU không bị loại trừ bởi điều kiện khác\". Gặp câu ABI mà thấy 2 phương án Có/Không cụt lủn và 1 phương án dài có mệnh đề điều kiện thì chọn phương án dài.",
            "variant": "info"
      },
      {
            "type": "table",
            "title": "Quy tắc \"Mọi rủi ro tài sản\" (ABI) — tài sản nào được bảo hiểm",
            "head": [
                  "Tình huống",
                  "Kết luận"
            ],
            "rows": [
                  [
                        "Nhà xưởng, máy móc, thiết bị",
                        "ĐƯỢC bảo hiểm. Còn hệ thống thoát nước bể bơi, giếng, cây cảnh thì KHÔNG."
                  ],
                  [
                        "Kính lắp cố định",
                        "KHÔNG, trừ khi mua thêm điều khoản bổ sung riêng cho kính lắp cố định."
                  ],
                  [
                        "Máy móc đang lắp đặt, di chuyển, tháo dỡ lắp lại",
                        "KHÔNG, nếu nguyên nhân thiệt hại quy được cho chính hoạt động lắp đặt/di chuyển đó."
                  ],
                  [
                        "Cháy nổ do trục trặc dữ liệu điện tử",
                        "CÓ, nếu không bị loại trừ bởi các điều kiện khác của quy tắc."
                  ],
                  [
                        "Thiệt hại tài chính do ngừng việc, trì hoãn, mất thị trường",
                        "KHÔNG thuộc phạm vi (đây là đối tượng của đơn Gián đoạn kinh doanh)."
                  ],
                  [
                        "Gián đoạn cấp nước/điện/khí đốt, hỏng hệ thống thoát thải",
                        "KHÔNG, trừ khi thiệt hại xảy ra tiếp theo do một nguyên nhân khác không bị loại trừ."
                  ],
                  [
                        "Vỡ/tràn nước từ bể chứa, đường ống",
                        "KHÔNG, trừ khi phát sinh trực tiếp từ thiệt hại do một nguyên nhân không bị loại trừ."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Các điều khoản ABI hay ra đề",
            "head": [
                  "Điều khoản",
                  "Nội dung phải nhớ"
            ],
            "rows": [
                  [
                        "Điều khoản 72 giờ",
                        "Mọi tổn thất phát sinh trong vòng 72 GIỜ LIÊN TỤC do giông bão, lũ lụt, động đất được coi là MỘT sự cố. Bẫy: phương án sai ghi \"72 giờ kể từ khi xảy ra tổn thất đầu tiên\"."
                  ],
                  [
                        "Điều khoản trượt giá 10%",
                        "Số tiền bảo hiểm tăng dần đến 10% trong thời hạn bảo hiểm, TÍNH THEO TỶ LỆ TƯƠNG ỨNG bằng SỐ NGÀY đã trôi qua."
                  ],
                  [
                        "Điều khoản hệ thống thiết bị 4B",
                        "Bảo hiểm thiệt hại DO CHÁY đối với máy móc thiết bị điện phát sinh từ vượt dòng, quá áp, đoản mạch, hồ quang điện. Bẫy: tổn thất KHÔNG gây cháy thì không thuộc phạm vi."
                  ],
                  [
                        "Giá trị thay thế mới",
                        "Máy móc, nhà xưởng CÓ THỂ bảo hiểm theo giá trị thay thế mới, nhưng phải mua THÊM điều khoản sửa đổi bổ sung."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Đơn \"Hỏa hoạn và các rủi ro đặc biệt\" (ABI)",
            "head": [
                  "Tình huống",
                  "Kết luận"
            ],
            "rows": [
                  [
                        "Ô nhiễm, nhiễm bẩn phát sinh TỪ RỦI RO ĐƯỢC BẢO HIỂM",
                        "KHÔNG bị loại trừ. Còn ô nhiễm nói chung, máy móc chạy quá tải, bạo loạn thì bị loại trừ."
                  ],
                  [
                        "Cháy máy móc phát sinh từ hồ quang điện của thiết bị KHÁC",
                        "KHÔNG bị loại trừ. Còn đoản mạch trực tiếp, nhiễm phóng xạ, nước từ sprinkler thì loại trừ."
                  ],
                  [
                        "Nhóm H \"Giông, bão, lụt\" — nước mưa hắt qua cửa sổ KHÔNG ĐÓNG",
                        "KHÔNG được bảo hiểm (lỗi của người được bảo hiểm)."
                  ],
                  [
                        "Nhóm H — nước biển tràn vào do bão, nước tràn qua chỗ hở do bão gây ra",
                        "ĐƯỢC bảo hiểm."
                  ],
                  [
                        "Rủi ro A + H — nước tràn từ HỒ chứa",
                        "ĐƯỢC bảo hiểm. Nước từ BỂ chứa, đường ống, nước mưa ngấm tường thì không."
                  ],
                  [
                        "Rủi ro A + G — công trình đang thi công",
                        "ĐƯỢC bảo hiểm NẾU mọi cửa và ô mở đã hoàn thành để chống giông bão."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Đơn \"Gián đoạn kinh doanh\" (ABI)",
            "head": [
                  "Khái niệm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Đối tượng bảo hiểm",
                        "SỤT GIẢM DOANH THU do hậu quả thiệt hại được bảo hiểm + CHI PHÍ HOẠT ĐỘNG GIA TĂNG để hạn chế sụt giảm đó. KHÔNG bảo hiểm \"mất thị trường\"."
                  ],
                  [
                        "Lợi nhuận gộp",
                        "Lợi nhuận ròng TRƯỚC THUẾ cộng chi phí cố định. Bẫy: phương án sai ghi \"sau thuế\"."
                  ],
                  [
                        "Chi phí hoạt động không được bảo hiểm",
                        "Chi phí BIẾN ĐỔI và những chi phí cố định mà người được bảo hiểm muốn tự bảo hiểm."
                  ],
                  [
                        "Doanh thu tiêu chuẩn",
                        "Doanh thu của GIAI ĐOẠN tương ứng với thời hạn bồi thường trong 12 tháng ngay trước ngày xảy ra thiệt hại, ĐƯỢC ĐIỀU CHỈNH theo xu hướng và hoàn cảnh kinh doanh. Đừng nhầm với doanh thu năm = toàn bộ 12 tháng trước sự cố."
                  ],
                  [
                        "Thời hạn bồi thường",
                        "Bắt đầu từ khi thiệt hại vật chất xảy ra TRONG thời hạn bảo hiểm, và CÓ THỂ kéo dài vượt quá ngày kết thúc hợp đồng."
                  ],
                  [
                        "Chi phí gia tăng THUỘC hạng mục lợi nhuận gộp",
                        "Hạn mức = tỷ lệ lợi nhuận gộp × doanh thu khôi phục lại được nhờ chi phí đó."
                  ],
                  [
                        "Chi phí gia tăng THÊM NGOÀI hạng mục lợi nhuận gộp",
                        "Có hạn mức RIÊNG quy định trong hợp đồng, ngoài số tiền bảo hiểm lợi nhuận gộp."
                  ],
                  [
                        "Không phải đối tượng bảo hiểm",
                        "Nguyên vật liệu sản xuất, chi phí đóng gói vận chuyển. Riêng tiền lương duy trì bộ máy thì ĐƯỢC."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Máy móc thiết bị chủ thầu (CPM — Munich Re)",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Số tiền bảo hiểm",
                        "Theo GIÁ TRỊ THAY THẾ MỚI (không phải giá thị trường, không phải giá trị sổ sách)."
                  ],
                  [
                        "Đối tượng bảo hiểm",
                        "Máy móc thiết bị THUỘC SỞ HỮU và cả THUÊ, MƯỢN thuộc quyền quản lý của người được bảo hiểm, phục vụ thi công."
                  ],
                  [
                        "Không thuộc phạm vi",
                        "Tổn thất khi máy móc LƯU HÀNH TRÊN CÔNG LỘ. Trong công trình và trong kho bãi chủ thầu thì được."
                  ],
                  [
                        "Thiết bị ngầm dưới đất",
                        "KHÔNG được bảo hiểm nếu không kèm điều khoản sửa đổi bổ sung."
                  ],
                  [
                        "Bồi thường khi bảo hiểm dưới giá trị",
                        "Bồi thường = Chi phí khắc phục × (STBH ÷ Giá trị thay thế mới) − Mức miễn thường. Áp dụng quy tắc tỷ lệ."
                  ],
                  [
                        "CPM riêng, không mua CAR",
                        "Cần cẩu của nhà thầu KHÔNG được bồi thường theo đơn CAR vì đơn CAR không được mua."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân biệt 3 đơn trách nhiệm (câu tình huống hay ra)",
            "head": [
                  "Loại đơn",
                  "Bồi thường cho",
                  "Ví dụ"
            ],
            "rows": [
                  [
                        "Trách nhiệm CÔNG CỘNG",
                        "Thiệt hại phát sinh từ hoạt động kinh doanh được bảo hiểm, tại hoặc ngoài địa điểm tùy điều khoản.",
                        "Bệnh nhân gãy chân do giường bệnh mục gãy. Khách thăm phòng triển lãm bị thương tại nhà máy."
                  ],
                  [
                        "Trách nhiệm SẢN PHẨM",
                        "Thiệt hại do sản phẩm ĐÃ RỜI KHỎI sự kiểm soát của người được bảo hiểm gây ra.",
                        "Gia súc CHẾT do mảnh kim loại lẫn trong thức ăn. Còn gia súc chê ăn, không tăng cân, thiếu protein mà không gây bệnh thì KHÔNG bồi thường — phải có thiệt hại thực tế."
                  ],
                  [
                        "Trách nhiệm NGHỀ NGHIỆP",
                        "Thiệt hại do LỖI CHUYÊN MÔN trong hành nghề.",
                        "Thiệt hại tài sản công trình do LỖI THIẾT KẾ của kỹ sư tư vấn."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Chốt về trách nhiệm nghề nghiệp & sản phẩm",
            "items": [
                  "Trách nhiệm sản phẩm — \"Sản phẩm\" = hàng hóa (gồm cả bao bì, thùng chứa, hướng dẫn sử dụng) ĐÃ được bán/cung cấp/sửa chữa VÀ đã rời khỏi sự kiểm soát của người được bảo hiểm.",
                  "Trách nhiệm sản phẩm chỉ bồi thường khi có THIỆT HẠI THỰC TẾ về người hoặc tài sản. Khách hàng không hài lòng, hàng không đúng công bố mà chưa gây hại thì không thuộc phạm vi.",
                  "Trách nhiệm công cộng và trách nhiệm sản phẩm thông thường là tự nguyện. Trách nhiệm nghề nghiệp KHÔNG mặc nhiên tự nguyện: tư vấn xây dựng, khám chữa bệnh, luật sư, kiểm toán và một số nghề khác phải mua hoặc thực hiện cơ chế bảo đảm theo luật chuyên ngành.",
                  "Kỹ sư tư vấn thiết kế: phạm vi và loại trừ phụ thuộc hợp đồng cùng quy định bắt buộc hiện hành; không suy rộng một điều khoản mẫu thành quy tắc cho mọi đơn trách nhiệm nghề nghiệp.",
                  "Thời điểm phát hiện tổn thất không tự quyết định trách nhiệm. Phải xác định đơn theo claims-made hay loss-occurrence, ngày hồi tố, thời hạn thông báo và thời hạn báo cáo mở rộng.",
                  "Nguyên tắc thế quyền KHÔNG áp dụng cho bảo hiểm NHÂN THỌ và quyền lợi khoán trong bảo hiểm sức khỏe. Quyền lợi bồi hoàn thực hiện theo luật và hợp đồng; thế quyền vẫn áp dụng cho hàng hải, tài sản và trách nhiệm dân sự."
            ],
            "highlight": false
      },
      {
            "type": "note",
            "title": "Đơn CAR/EAR — điểm chốt",
            "text": "Mức khấu trừ là mức miễn thường có khấu trừ cho MỖI VÀ MỌI SỰ CỐ. Đơn CAR không kèm điều khoản bổ sung thì KHÔNG bảo hiểm: máy móc thiết bị của nhà thầu (cần cẩu, máy xúc) và trách nhiệm với người thứ ba như khách thăm quan — muốn có phải mua thêm CPM và Phần II trách nhiệm.",
            "variant": "info"
      },
      {
            "type": "table",
            "title": "Đơn CAR/EAR — phạm vi và giới hạn (20 câu)",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Cấu trúc đơn",
                        "Phần I — Tổn thất vật chất (công trình đang xây/lắp). Phần II — Trách nhiệm với bên thứ ba về người và tài sản, tức TNDS của CHỦ ĐẦU TƯ VÀ NHÀ THẦU THI CÔNG."
                  ],
                  [
                        "Tài sản trên và xung quanh công trường",
                        "Thuộc quyền sở hữu, quản lý, chăm sóc của người được bảo hiểm thì bảo hiểm được theo CẢ Phần I và Phần II. Bẫy: phương án chỉ chọn một phần là sai."
                  ],
                  [
                        "Giới hạn Phần II",
                        "KHÔNG VƯỢT QUÁ 50% số tiền bảo hiểm của Phần I. Bẫy: các phương án 75%, 90% và \"không có giới hạn\"."
                  ],
                  [
                        "STBH mỗi và mọi vụ tổn thất",
                        "KHÔNG giới hạn SỐ VỤ trong thời hạn bảo hiểm, nhưng TỔNG bồi thường của một hay nhiều vụ không vượt quá số tiền bảo hiểm."
                  ],
                  [
                        "Mức khấu trừ",
                        "Mức miễn thường có khấu trừ cho MỖI VÀ MỌI SỰ CỐ. Bẫy: phương án sai bỏ chữ \"mỗi\", chỉ ghi \"cho mọi sự cố\"."
                  ],
                  [
                        "Thời gian bảo hành",
                        "Không kèm điều khoản sửa đổi bổ sung thì tổn thất gây ra cho bên thứ ba trong thời gian bảo hành KHÔNG thuộc trách nhiệm bảo hiểm."
                  ],
                  [
                        "Thời hạn kết thúc của EAR",
                        "Khi thiết bị được bàn giao HOẶC ngay khi kết thúc chạy thử lần đầu, tùy thời điểm nào ĐẾN TRƯỚC; chạy thử không muộn hơn ngày ghi trên giấy chứng nhận."
                  ],
                  [
                        "Vật liệu, thiết bị khi vận chuyển trong công trường",
                        "ĐƯỢC bảo hiểm, kể cả lúc lắp đặt hay tháo dỡ trong khu vực công trường."
                  ],
                  [
                        "Chi phí dọn dẹp hiện trường",
                        "Chỉ là chi phí dọn phế thải, đất đá DO SỰ CỐ THUỘC TRÁCH NHIỆM BẢO HIỂM gây ra, để tiếp tục thi công. KHÔNG phải dọn mặt bằng ban đầu, cũng không phải dọn khi bàn giao."
                  ],
                  [
                        "Thiệt hại được bảo hiểm điển hình",
                        "Hạng mục công trình bị thiệt hại DO BÃO. Còn thiệt hại do lỗi thiết kế và tổn thất hồ sơ, bản vẽ, sổ sách, hóa đơn thì KHÔNG."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Một câu trong đề có đáp án mâu thuẫn — cứ chọn theo đề",
            "text": "Câu \"Đối tượng có thể được bảo hiểm theo Phần I — Phần tổn thất vật chất của Đơn CAR/EAR là:\" có khóa đáp án là \"B, C đúng\", tức tài sản xung quanh công trường và TRÁCH NHIỆM VỚI NGƯỜI THỨ BA. Nhưng trách nhiệm với người thứ ba chính là định nghĩa của Phần II, không thể nằm trong Phần I. Đây là lỗi khóa đáp án của người soạn đề. Đi thi cứ chọn \"B, C đúng\" để lấy điểm, nhưng đừng lấy câu này làm kiến thức: trên thực tế Phần I bảo hiểm CÔNG TRÌNH xây dựng lắp đặt và tài sản quanh công trường.",
            "variant": "warning"
      },
      {
            "type": "table",
            "title": "Hiểu nghĩa mấy cụm từ nghe lạ tai trong đề",
            "head": [
                  "Đề viết",
                  "Nghĩa đơn giản"
            ],
            "rows": [
                  [
                        "Khuyết tật của vật liệu",
                        "Vật liệu đã lỗi sẵn từ bên trong trước khi đưa vào công trình: thép lẫn tạp chất, bê tông trộn sai mác, mối hàn bị rỗ. Không phải hỏng do va đập hay mưa bão."
                  ],
                  [
                        "Khuyết tật đúc",
                        "Cùng loại với trên nhưng nói riêng về chi tiết máy được đúc ra đã bị lỗi: rỗ khí, nứt ngầm trong lòng khối kim loại."
                  ],
                  [
                        "Tay nghề kém",
                        "Thợ thi công làm sai kỹ thuật: hàn không ngấu, đổ bê tông không đầm kỹ, siết bu lông không đủ lực."
                  ],
                  [
                        "Lỗi thiết kế",
                        "Bản vẽ tính sai ngay từ đầu — vật liệu và tay nghề đều tốt nhưng phương án thiết kế đã hỏng."
                  ],
                  [
                        "Tổn thất trực tiếp",
                        "Hư hỏng ngay tại chính hạng mục có lỗi."
                  ],
                  [
                        "Tổn thất gián tiếp",
                        "Hạng mục khác không có lỗi gì nhưng bị vạ lây do hạng mục lỗi hỏng trước."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Nguyên tắc gốc: ai có lỗi thì tự chịu",
            "text": "Bảo hiểm không trả tiền cho phần việc mà nhà thầu làm hỏng, vì đó là nghĩa vụ nhà thầu phải tự sửa. Nhưng nếu phần việc hỏng đó kéo theo hạng mục khác vốn không có lỗi bị hư, thì phần vạ lây này là rủi ro bất ngờ nên được bồi thường. Nắm ý này thì không cần học thuộc từng câu.",
            "variant": "info"
      },
      {
            "type": "table",
            "title": "Bồi thường theo nguyên nhân — 4 câu hay ra",
            "head": [
                  "Nguyên nhân",
                  "Hạng mục CÓ lỗi",
                  "Hạng mục bị vạ lây"
            ],
            "rows": [
                  [
                        "Đơn CAR — khuyết tật vật liệu, tay nghề kém",
                        "KHÔNG bồi thường",
                        "ĐƯỢC bồi thường"
                  ],
                  [
                        "Đơn CAR — lỗi thiết kế",
                        "KHÔNG bồi thường",
                        "KHÔNG bồi thường"
                  ],
                  [
                        "Đơn EAR — khuyết tật đúc, tay nghề kém nhưng không phải lỗi khi lắp đặt",
                        "KHÔNG bồi thường",
                        "KHÔNG bồi thường"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Ba tình huống đề ra từ bảng trên",
            "items": [
                  "Khuyết tật vật liệu làm hỏng trực tiếp hạng mục A, vạ lây hạng mục B: chỉ HẠNG MỤC B được bồi thường.",
                  "Cầu bị lỗi THIẾT KẾ nên trụ đổ, kéo theo gầm cầu hỏng: CẢ trụ lẫn gầm đều KHÔNG được bồi thường. Lỗi thiết kế loại trừ triệt để hơn khuyết tật vật liệu, đừng áp nhầm quy tắc \"vạ lây thì được\".",
                  "Đơn EAR, khuyết tật đúc và tay nghề kém nhưng lỗi không nằm ở khâu lắp đặt: tổn thất gián tiếp KHÔNG được bồi thường. Đề hỏi dạng đúng/sai, phát biểu nói \"thuộc trách nhiệm bảo hiểm\" là SAI.",
                  "Việc có bồi thường khi phát hiện hoặc khiếu nại sau ngày hết hạn phải căn cứ cơ sở bảo hiểm, ngày hồi tố và thời hạn báo cáo của hợp đồng; không áp dụng một kết luận chung cho mọi đơn trách nhiệm."
            ],
            "highlight": false
      },
      {
            "type": "note",
            "title": "Bẫy câu chữ: hai câu trả lời Có và Không nhưng cùng một ý",
            "text": "Đề hỏi \"tổn thất gián tiếp do khuyết tật vật liệu, tay nghề kém có THUỘC TRÁCH NHIỆM BẢO HIỂM không\" — đáp án CÓ. Đề khác hỏi \"có thuộc ĐIỂM LOẠI TRỪ không\" — đáp án KHÔNG. Hai đáp án trái ngược nhưng nói y hệt nhau, vì thuộc trách nhiệm bảo hiểm nghĩa là không bị loại trừ. Đọc kỹ vế cuối câu hỏi trước khi chọn.",
            "variant": "warning"
      },
      {
            "type": "table",
            "title": "Cặp bẫy xe cẩu đổ — cùng tình huống, đáp án ngược nhau",
            "head": [
                  "Phần I của đơn ghi gì",
                  "Xe cẩu nhà thầu A",
                  "Máy xúc nhà thầu B",
                  "Khách tham quan"
            ],
            "rows": [
                  [
                        "Chỉ ghi \"xe cẩu nhà thầu A\" (kèm SĐBS 002 trách nhiệm chéo)",
                        "Bồi thường",
                        "KHÔNG bồi thường",
                        "Bồi thường"
                  ],
                  [
                        "Ghi chung \"máy móc thiết bị chủ thầu CPM\" (không kèm SĐBS)",
                        "Bồi thường",
                        "Bồi thường",
                        "Bồi thường"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Đọc kỹ danh mục Phần I trước khi chọn",
            "text": "Điều quyết định không phải điều khoản trách nhiệm chéo, mà là Phần I liệt kê tài sản của AI. Ghi đích danh \"xe cẩu nhà thầu A\" thì máy xúc của nhà thầu B nằm ngoài đơn nên không được bồi thường; ghi chung \"máy móc thiết bị chủ thầu CPM\" thì máy của cả hai nhà thầu đều nằm trong. Gặp câu tình huống nhiều nhà thầu, đọc dòng liệt kê Phần I trước tiên.",
            "variant": "info"
      },
      {
            "type": "list",
            "title": "Điều kiện bồi thường Phần II — phải có ĐỦ ba",
            "items": [
                  "Có hành vi bất cẩn, sai sót và phát sinh trách nhiệm theo quy định pháp luật.",
                  "Phải có THIỆT HẠI THỰC TẾ về người và/hoặc tài sản của bên thứ ba — tức tổn thất vật chất với nhà cửa, máy móc, đồ đạc, hàng hóa.",
                  "Có mối quan hệ NHÂN QUẢ giữa hành vi bất cẩn và thiệt hại đó.",
                  "Hệ quả: công trình thi công ồn và bụi làm nhà hàng bên cạnh vắng khách, giảm doanh thu thì KHÔNG bồi thường — thiệt hại thuần túy tài chính, không có tổn thất vật chất.",
                  "Tổng bồi thường Phần II KHÔNG được vượt mức trách nhiệm; phương án nói \"có thể vượt quá Phần I\" là sai."
            ],
            "highlight": false
      },
      {
            "type": "table",
            "title": "Đổ vỡ máy móc (Machinery Breakdown — Munich Re)",
            "head": [
                  "Nhóm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "THUỘC phạm vi bảo hiểm",
                        "Khuyết tật về đúc và nguyên vật liệu; lỗi thiết kế; đoản mạch, quá điện áp; nổ VẬT LÝ; tác động của lực ly tâm; hỏng hóc, trục trặc về cơ điện."
                  ],
                  [
                        "KHÔNG thuộc phạm vi",
                        "Hỏa hoạn và sét đánh TRỰC TIẾP vào máy móc; nổ HÓA HỌC."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẹo nhớ đổ vỡ máy móc",
            "text": "Đơn này lo hỏng hóc TỪ BÊN TRONG máy: đúc lỗi, thiết kế sai, điện chập, lực ly tâm, nổ vật lý do áp suất. Còn lửa và sét là rủi ro TỪ BÊN NGOÀI, đã có đơn hỏa hoạn lo — nên bị loại trừ. Nổ vật lý (nồi hơi quá áp) được bảo hiểm, nổ hóa học thì không.",
            "variant": "info"
      },
      {
            "type": "table",
            "title": "Công trình dân dụng đã hoàn thành (CECR — Munich Re)",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Đối tượng bảo hiểm",
                        "Công trình dân dụng ĐÃ kết thúc giai đoạn xây dựng/lắp đặt và được đưa vào sử dụng. Phát biểu này ĐÚNG."
                  ],
                  [
                        "Giá trị cần phải bảo hiểm",
                        "GIÁ TRỊ THAY THẾ MỚI. Không phải giá trị sổ sách, không phải giá trị thực tế tại thời điểm tổn thất."
                  ],
                  [
                        "Phạm vi bảo hiểm",
                        "Gồm CẢ BA: hỏa hoạn - sét đánh trực tiếp - nổ; bão sức gió trên cấp 8; lũ lụt, lún lở đất đá."
                  ],
                  [
                        "Quan hệ với CAR",
                        "CAR bảo hiểm lúc công trình ĐANG XÂY. CECR tiếp nối sau khi công trình ĐÃ HOÀN THÀNH."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Đơn vị rủi ro trong bảo hiểm tài sản",
            "text": "Ngôi nhà, bộ phận nhà hoặc kho được coi là CÁCH BIỆT VỀ MẶT CẤU TRÚC nếu được ngăn cách bằng TƯỜNG NGĂN CHÁY. Phát biểu này ĐÚNG.",
            "variant": "info"
      }
]
  },
  {
    id: "xe-co-gioi",
    title: "Bảo hiểm xe cơ giới",
    badge: "Trọng tâm",
    summary: "TNDS bắt buộc, mức trách nhiệm, vật chất xe, loại trừ, quy trình bồi thường.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM XE CƠ GIỚI & MỨC TRÁCH NHIỆM NGHỊ ĐỊNH 67/2023",
            "text": "Nhớ các mốc số vàng bảo hiểm xe cơ giới:\n• 150 TRIỆU ĐỒNG/người/vụ: Mức trách nhiệm bắt buộc về THƯƠNG TẬT & TỬ VONG do xe cơ giới gây ra.\n• 100 TRIỆU ĐỒNG/vụ: Mức trách nhiệm bắt buộc về TÀI SẢN do xe Ô TÔ gây ra.\n• 50 TRIỆU ĐỒNG/vụ: Mức trách nhiệm bắt buộc về TÀI SẢN do XE MÁY gây ra.\n• HOA HỒNG ĐẠI LÝ: Xe máy bắt buộc tối đa 20% (cao nhất nhóm bắt buộc); Ô tô bắt buộc tối đa 5%.\n• MỨC KHẤU TRỪ VẬT CHẤT: Tối thiểu 500.000 đồng/vụ tổn thất đối với xe không kinh doanh (Nghị định 67/2023).\n• TẠM ỨNG BỒI THƯỜNG: DNBH phải tạm ứng bồi thường thiệt hại về sức khỏe, tính mạng trong vòng 03 NGÀY LÀM VIỆC kể từ khi nhận được thông báo.",
            "variant": "mnemonic"
      },
      {
            "type": "table",
            "title": "Khái niệm gốc — hay bị đánh tráo",
            "head": [
                  "Thuật ngữ",
                  "Định nghĩa"
            ],
            "rows": [
                  [
                        "Chủ xe cơ giới",
                        "Chủ sở hữu xe HOẶC người được chủ sở hữu giao chiếm hữu, sử dụng hợp pháp, điều khiển xe."
                  ],
                  [
                        "Bên thứ ba",
                        "Người bị thiệt hại do xe gây ra, TRỪ: người lái xe, người trên chính chiếc xe đó, và chủ sở hữu xe (trừ khi chủ đã giao xe cho người khác chiếm hữu, sử dụng)."
                  ],
                  [
                        "Hành khách",
                        "Người được chở trên xe theo HỢP ĐỒNG VẬN CHUYỂN hành khách."
                  ],
                  [
                        "Người ngồi trên xe",
                        "Người được chủ xe hoặc người điều khiển xe cho phép lên xe."
                  ],
                  [
                        "Giá thị trường của xe",
                        "Giá mua bán trung bình của xe tương tự: cùng năm sản xuất, cùng hãng, cùng model, cùng km lăn bánh, cùng mục đích sử dụng, tại thời điểm xác định giá trị."
                  ],
                  [
                        "Thời gian sử dụng xe",
                        "Từ THÁNG ĐĂNG KÝ LẦN ĐẦU tại Việt Nam đến tháng giao kết HĐBH. Xe nhập khẩu đã qua sử dụng: từ tháng 01 của năm sản xuất."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Trách nhiệm bồi thường thiệt hại NGOÀI hợp đồng",
            "text": "Là hành vi gây hại KHÔNG liên quan đến việc thực hiện nghĩa vụ dân sự của bất kỳ hợp đồng nào. Đây chính là bản chất phạm vi của BH TNDS xe cơ giới."
      },
      {
            "type": "table",
            "title": "Mức trách nhiệm BH bắt buộc TNDS (Nghị định 67/2023/NĐ-CP)",
            "head": [
                  "Đối tượng thiệt hại",
                  "Mức trách nhiệm"
            ],
            "rows": [
                  [
                        "Về người (mọi loại xe)",
                        "150 triệu đồng / 1 người / 1 vụ tai nạn"
                  ],
                  [
                        "Về tài sản do xe mô tô 2-3 bánh, xe gắn máy, xe tương tự",
                        "50 triệu đồng / 1 vụ tai nạn"
                  ],
                  [
                        "Về tài sản do xe ô tô, máy kéo, rơ moóc, xe máy chuyên dùng",
                        "100 triệu đồng / 1 vụ tai nạn"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Phạm vi & thời hạn BH bắt buộc TNDS",
            "items": [
                  "Phạm vi: thiệt hại NGOÀI HỢP ĐỒNG về sức khỏe, tính mạng, TÀI SẢN đối với BÊN THỨ BA + thiệt hại về sức khỏe, tính mạng của HÀNH KHÁCH do xe gây ra.",
                  "Thời hạn tối thiểu 1 năm, tối đa 3 năm. Ngoại lệ được dưới 1 năm: xe nước ngoài tạm nhập tái xuất dưới 1 năm; xe có niên hạn sử dụng nhỏ hơn 1 năm; xe đăng ký tạm thời; hoặc chủ xe có nhiều xe cần đưa thời hạn về cùng một mốc quản lý.",
                  "Bồi thường VỀ NGƯỜI: theo bảng tỷ lệ thương tật Phụ lục 6 NĐ 67, hoặc theo thỏa thuận giữa chủ xe và người bị thiệt hại nhưng KHÔNG vượt quá mức quy định.",
                  "Bồi thường VỀ TÀI SẢN: theo thiệt hại thực tế VÀ theo MỨC ĐỘ LỖI của chủ xe, không vượt quá mức trách nhiệm bảo hiểm.",
                  "Nếu cơ quan có thẩm quyền xác định tai nạn hoàn toàn do lỗi bên thứ ba, bồi thường sức khỏe, tính mạng cho đối tượng thuộc bên thứ ba bằng 50% mức Phụ lục VI, hoặc theo thỏa thuận nhưng không vượt 50%.",
                  "Nguyên tắc: DNBH bồi thường cho CHỦ XE số tiền mà chủ xe đã bồi thường hoặc sẽ phải bồi thường cho người bị thiệt hại (không phải trả thẳng cho bên thứ ba theo mặc định)."
            ]
      },
      {
            "type": "note",
            "title": "Loại trừ trong BH bắt buộc TNDS",
            "variant": "warn",
            "text": "Hành động CỐ Ý gây thiệt hại; lái xe gây tai nạn CỐ Ý BỎ CHẠY không thực hiện TNDS; lái xe chưa đủ tuổi/quá tuổi, không có GPLX hoặc GPLX không hợp lệ; thiệt hại GIÁN TIẾP; thiệt hại TÀI SẢN do nồng độ cồn, ma túy; tài sản bị mất cắp/cướp trong tai nạn; vàng bạc, đá quý, tiền, giấy tờ có giá, đồ cổ, tranh quý, thi hài, hài cốt; chiến tranh, khủng bố, động đất. Bỏ chạy nhưng sau đó quay lại thực hiện TNDS thì không thuộc loại trừ bỏ chạy."
      },
      {
            "type": "table",
            "title": "Tạm ứng bồi thường thiệt hại về người — trong 03 ngày làm việc",
            "head": [
                  "Trạng thái trách nhiệm",
                  "Tử vong / thương tật rất nặng",
                  "Thương tật bộ phận"
            ],
            "rows": [
                  [
                        "Đã xác định thuộc phạm vi bảo hiểm",
                        "70% mức bồi thường ước tính đối với tử vong",
                        "50% mức bồi thường ước tính"
                  ],
                  [
                        "Chưa xác định thuộc phạm vi",
                        "30% giới hạn trách nhiệm/người đối với tử vong hoặc tổn thương ước tính từ 81% trở lên",
                        "10% giới hạn trách nhiệm/người đối với tổn thương ước tính từ 31% đến dưới 81%"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Các sản phẩm bảo hiểm xe cơ giới",
            "head": [
                  "Nhóm",
                  "Sản phẩm"
            ],
            "rows": [
                  [
                        "Bắt buộc",
                        "BH TNDS của chủ xe với bên thứ ba và hành khách trên xe."
                  ],
                  [
                        "Tự nguyện — ô tô",
                        "TNDS với bên thứ ba & hành khách; TNDS với HÀNG HÓA trên xe; BH tai nạn lái phụ xe và người ngồi trên xe; BH VẬT CHẤT xe."
                  ],
                  [
                        "Tự nguyện — xe máy",
                        "BH cháy nổ xe mô tô, xe máy; BH tai nạn lái xe và người ngồi trên xe."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "BH TNDS với HÀNG HÓA trên xe",
            "items": [
                  "Bảo hiểm TNDS của chủ xe đối với hàng hóa theo hợp đồng vận chuyển; chỉ áp dụng cho xe được phép kinh doanh vận tải hàng hóa.",
                  "Bồi thường thiệt hại do tai nạn thuộc lỗi không cố ý của chủ xe/lái xe + chi phí ngăn ngừa, giảm nhẹ; bảo quản, xếp dỡ, lưu kho bãi do hậu quả tai nạn; giám định. Tổng cộng KHÔNG vượt mức trách nhiệm/vụ.",
                  "KHÔNG bồi thường chi phí thuê xe khác để tiếp tục chở hàng còn tốt.",
                  "Mất cắp hàng bị loại trừ, TRỪ trường hợp mất cắp/cướp toàn bộ cả xe và hàng. Hàng thuộc chủ xe chỉ được bảo hiểm khi mua điều khoản mở rộng xe cùng chủ.",
                  "Loại trừ khác: chủ xe/lái xe thiếu trách nhiệm bảo quản; xe không thích hợp; hàng trái phép/bị bắt giữ; nội tỳ/bao bì/xếp hàng sai; giao chậm/sai người/sai nơi; hư hỏng khi xếp dỡ nếu không có SĐBS.",
                  "Mức trách nhiệm/vụ = Trọng tải cho phép × Mức trách nhiệm/tấn. Không giới hạn số vụ trong thời hạn bảo hiểm nhưng giới hạn từng vụ.",
                  "Phí = Tỷ lệ phí x Mức trách nhiệm/tấn x Số tấn trọng tải xe.",
                  "Nếu giá trị tổn thất/tấn ≤ mức trách nhiệm/tấn: bồi thường = giá trị tổn thất/tấn × trọng lượng hàng tổn thất thực tế.",
                  "Nếu giá trị tổn thất/tấn > mức trách nhiệm/tấn: bồi thường = mức trách nhiệm/tấn × trọng lượng hàng tổn thất thực tế. Sau đó trừ mức khấu trừ theo hợp đồng."
            ]
      },
      {
            "type": "table",
            "title": "BH tai nạn lái, phụ xe và người ngồi trên xe — điều khoản tự nguyện",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Đối tượng",
                        "Lái xe, phụ xe và người được chủ xe/người điều khiển cho phép ngồi trên xe được bảo hiểm."
                  ],
                  [
                        "Phạm vi",
                        "Tai nạn xảy ra khi đang ở trên xe, lên xuống xe hoặc thực hiện công việc gắn trực tiếp với việc sử dụng xe theo điều khoản sản phẩm."
                  ],
                  [
                        "Chi trả",
                        "Tử vong/thương tật toàn bộ vĩnh viễn theo STBH; thương tật bộ phận theo bảng tỷ lệ; chi phí y tế nếu có quyền lợi này."
                  ],
                  [
                        "Chở quá số người",
                        "Tiền bảo hiểm có thể giảm theo tỷ lệ số người được phép chở trên số người thực tế, theo quy tắc sản phẩm trong tài liệu."
                  ],
                  [
                        "Lưu ý",
                        "Đây là bảo hiểm tự nguyện, khác “hành khách” trong TNDS bắt buộc là người được chở theo hợp đồng vận chuyển."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "BH VẬT CHẤT xe ô tô — phạm vi",
            "items": [
                  "Đâm, va, lật, đổ, chìm, rơi TOÀN BỘ xe.",
                  "Hỏa hoạn, cháy, nổ.",
                  "Những tai họa bất khả kháng do thiên nhiên (bão lụt làm ngập toàn bộ xe...).",
                  "Mất TOÀN BỘ xe do trộm, cướp (có kết luận của cơ quan Công an).",
                  "Tai nạn do rủi ro bất ngờ khác ngoài các điểm loại trừ (đá văng làm vỡ kính, trộm đập kính lấy tài sản → bồi thường phần KÍNH, KHÔNG bồi thường tài sản trong xe).",
                  "Chi phí cần thiết hợp lý: ngăn ngừa hạn chế tổn thất phát sinh thêm, cứu hộ và vận chuyển xe tới nơi sửa chữa gần nhất, giám định tổn thất."
            ]
      },
      {
            "type": "note",
            "title": "BH VẬT CHẤT xe — loại trừ chính",
            "variant": "warn",
            "text": "Hành động cố ý; không có Giấy chứng nhận kiểm định ATKT&BVMT hợp lệ; không có GPLX hoặc GPLX không phù hợp; nồng độ cồn/ma túy; đua xe, chạy thử sau sửa chữa, kéo xe khác trái quy định; tổn thất NGOÀI lãnh thổ Việt Nam; chiến tranh, khủng bố, đình công; HAO MÒN TỰ NHIÊN, hỏng hóc do khuyết tật vốn có, hỏng thêm trong quá trình sửa chữa; thiệt hại GIÁN TIẾP; MẤT CẮP BỘ PHẬN xe; tổn thất SĂM LỐP, bạt thùng, nhãn mác, lọc gió, lọc khí (trừ khi cùng nguyên nhân, đồng thời với bộ phận khác trong cùng vụ tai nạn); tài sản đặc biệt (vàng bạc, đá quý, tiền, giấy tờ có giá, đồ cổ, tranh quý, thi hài, hài cốt); tổn thất động cơ khi xe hoạt động trong vùng NGẬP NƯỚC; mất xe do lừa đảo, lạm dụng tín nhiệm."
      },
      {
            "type": "table",
            "title": "Bồi thường vật chất xe",
            "head": [
                  "Trường hợp",
                  "Cách xử lý"
            ],
            "rows": [
                  [
                        "Tổn thất TOÀN BỘ",
                        "Theo quy tắc sản phẩm trong tài liệu: chi phí sửa chữa ước tính từ 75% GIÁ TRỊ THỰC TẾ của xe ngay trước tổn thất trở lên. Bồi thường bằng giá thị trường trước tai nạn, không vượt STBH."
                  ],
                  [
                        "Tổn thất BỘ PHẬN",
                        "Chi phí thực tế thay mới vật tư, phụ tùng và ÁP DỤNG KHẤU HAO (trừ khi mua điều khoản bổ sung BS02 - không khấu hao khi thay mới)."
                  ],
                  [
                        "STBH < giá trị thị trường",
                        "Bồi thường theo TỶ LỆ giữa STBH và giá trị thị trường xe."
                  ],
                  [
                        "Kê khai không trung thực → thu thiếu phí",
                        "GIẢM số tiền bồi thường theo tỷ lệ giữa phí thực nộp và phí phải nộp."
                  ],
                  [
                        "Mức khấu trừ",
                        "Theo quy tắc vật chất xe trong tài liệu: chủ xe tự chịu tối thiểu 500.000 VND/vụ. Đây không phải mức luật định chung cho mọi sản phẩm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "TNDS bắt buộc — các mốc thời gian",
            "head": [
                  "Công việc",
                  "Thời hạn đúng"
            ],
            "rows": [
                  [
                        "DNBH hướng dẫn hồ sơ, biện pháp an toàn và hạn chế tổn thất",
                        "Trong 01 giờ từ khi nhận thông báo tai nạn"
                  ],
                  [
                        "DNBH phối hợp giám định tổn thất",
                        "Trong 24 giờ từ khi nhận thông báo"
                  ],
                  [
                        "DNBH tạm ứng thiệt hại về sức khỏe, tính mạng",
                        "Trong 03 ngày làm việc"
                  ],
                  [
                        "Bên mua/NĐBH thông báo tai nạn bằng văn bản hoặc điện tử",
                        "Trong 05 ngày làm việc, trừ bất khả kháng hoặc trở ngại khách quan"
                  ],
                  [
                        "DNBH trả tiền khi hợp đồng không có thỏa thuận thời hạn",
                        "Trong 15 ngày từ khi nhận đủ hồ sơ hợp lệ theo Điều 31 Luật KDBH"
                  ],
                  [
                        "Thời hạn nộp hồ sơ yêu cầu bồi thường",
                        "01 năm từ ngày xảy ra sự kiện bảo hiểm, trừ trường hợp luật định"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Hồ sơ bồi thường TNDS bắt buộc",
            "items": [
                  "Văn bản yêu cầu bồi thường; đăng ký xe hoặc giấy tờ thay thế; GPLX; giấy tờ tùy thân người lái; Giấy chứng nhận bảo hiểm.",
                  "Tài liệu chứng minh thiệt hại sức khỏe, tính mạng; hóa đơn, chứng từ thiệt hại tài sản và chi phí hợp lý để giảm thiểu tổn thất.",
                  "Tài liệu của cơ quan Công an trong trường hợp phải có; biên bản giám định của DNBH; quyết định của Tòa án nếu có.",
                  "Bên mua/NĐBH cung cấp tài liệu thuộc mình; DNBH có trách nhiệm thu thập tài liệu Công an và biên bản giám định theo NĐ 67/2023.",
                  "DNBH có thể giảm tối đa 5% tiền bồi thường thiệt hại tài sản nếu vi phạm nghĩa vụ thông báo 05 ngày hoặc không báo thay đổi yếu tố tính phí làm tăng rủi ro."
            ]
      },
      {
            "type": "list",
            "title": "Trách nhiệm của bên mua BH / NĐBH khi xảy ra tai nạn",
            "highlight": true,
            "items": [
                  "Thông báo NGAY cho DNBH; tích cực cứu chữa, hạn chế thiệt hại; bảo vệ hiện trường tai nạn.",
                  "KHÔNG được di chuyển, tháo gỡ, sửa chữa tài sản khi chưa có chấp thuận của DNBH — trừ khi cần thiết để bảo đảm an toàn, hạn chế thiệt hại, hoặc theo yêu cầu của cơ quan có thẩm quyền."
            ]
      }
]
  },
  {
    id: "con-nguoi",
    title: "Bảo hiểm con người",
    badge: "Trọng tâm",
    summary: "Bảo hiểm tai nạn, sức khỏe, quyền lợi chi trả và thời gian chờ.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM CON NGƯỜI & BẢNG THỜI GIAN CHỜ",
            "text": "Nhớ các mốc thời gian vàng trong bảo hiểm con người:\n• TAI NẠN: Không áp dụng thời gian chờ (bảo vệ ngay lập tức từ 0h ngày có hiệu lực).\n• BỆNH THÔNG THƯỜNG: Thời gian chờ 30 NGÀY.\n• THAI SẢN / SINH ĐẺ: Thời gian chờ 270 NGÀY (9 tháng).\n• BỆNH ĐẶC BIỆT / BỆNH CÓ SẴN: Thời gian chờ 365 NGÀY (1 năm) theo Điều 12 Thông tư 67/2023.\n• TỰ TỬ: Loại trừ trách nhiệm trong 02 NĂM đầu (chỉ chi trả giá trị hoàn lại nếu có).\n• NGUYÊN TẮC: Áp dụng NGUYÊN TẮC KHOÁN, tính mạng con người là vô giá, KHÔNG áp dụng thế quyền, được nhận tiền từ nhiều hợp đồng cùng lúc.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đối tượng bảo hiểm",
            "text": "Theo Luật KDBH, đối tượng HĐBH sức khỏe là SỨC KHỎE CON NGƯỜI, bao gồm khả năng lao động. Trong nghiệp vụ tai nạn, quyền lợi có thể gắn với tính mạng, sức khỏe, khả năng lao động và thu nhập. Các nhóm kỹ thuật chính gồm tai nạn con người, chi phí y tế, bảo hiểm thu nhập, bệnh hiểm nghèo và chăm sóc dài hạn."
      },
      {
            "type": "note",
            "title": "Không được áp một nguyên tắc chi trả cho mọi quyền lợi",
            "variant": "ok",
            "text": "Quyền lợi KHOÁN như tử vong, thương tật, trợ cấp trả theo mức hoặc bảng tỷ lệ của từng hợp đồng; có thể nhận theo nhiều hợp đồng và không áp dụng thế quyền. Quyền lợi BỒI HOÀN chi phí y tế căn cứ chi phí thực tế thuộc phạm vi; khi bảo hiểm trùng, tổng chi trả không vượt thiệt hại thực tế, trừ khi hợp đồng có thỏa thuận khác."
      },
      {
            "type": "table",
            "title": "Quyền lợi bảo hiểm TAI NẠN",
            "head": [
                  "Quyền lợi",
                  "Cách chi trả",
                  "Lưu ý"
            ],
            "rows": [
                  [
                        "Tử vong",
                        "100% STBH",
                        "Trả theo từng GCNBH, không thế quyền, chấp nhận bảo hiểm trùng."
                  ],
                  [
                        "Thương tật toàn bộ vĩnh viễn (TTTBVV)",
                        "100% STBH",
                        "Mất/liệt hoàn toàn không thể phục hồi theo tổ hợp bộ phận quy định, hoặc tỷ lệ tổn thương cơ thể từ 81% trở lên."
                  ],
                  [
                        "Thương tật bộ phận vĩnh viễn (TTBPVV)",
                        "Theo BẢNG TỶ LỆ thương tật",
                        "Tỷ lệ thương tật / tỷ lệ suy giảm khả năng lao động."
                  ],
                  [
                        "Thương tật tạm thời",
                        "Theo thỏa thuận sản phẩm",
                        "Có thể theo bảng tỷ lệ, chi phí y tế thực tế hoặc kết hợp cả hai."
                  ],
                  [
                        "Chi phí y tế điều trị tai nạn",
                        "100% chi phí y tế THỰC TẾ, không vượt quá STBH",
                        "Có thể kết hợp chi phí thực tế và bảng tỷ lệ."
                  ],
                  [
                        "Trợ cấp mất giảm thu nhập",
                        "Theo thu nhập thực tế bị mất hoặc mức trợ cấp thỏa thuận",
                        "Căn cứ cách thiết kế quyền lợi; không mặc nhiên phụ thuộc thu nhập thực tế."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Xác định TTTBVV",
            "text": "Chứng nhận liệt, mù hoặc tỷ lệ tổn thương cơ thể từ 81% thường không sớm hơn 180 ngày kể từ tai nạn, trừ trường hợp mất hoàn toàn bộ phận có thể xác nhận ngay hoặc sau khi kết thúc điều trị. DNBH có thể bổ sung trường hợp khác để tăng quyền lợi."
      },
      {
            "type": "list",
            "title": "Quyền lợi bảo hiểm SỨC KHỎE",
            "items": [
                  "Chi phí nằm viện, tiền giường - phòng; chi phí phẫu thuật; chi phí khám & điều trị TRƯỚC nhập viện và SAU xuất viện.",
                  "Phục hồi chức năng; chi phí vận chuyển cấp cứu; trợ cấp nằm viện; trợ cấp mai táng.",
                  "Điều trị do tai nạn, trợ cấp mất giảm thu nhập do tai nạn.",
                  "Tử vong / thương tật do tai nạn và do ốm đau, bệnh tật, thai sản."
            ]
      },
      {
            "type": "table",
            "title": "Thời gian chờ tối đa theo Điều 12 Thông tư 67/2023/TT-BTC",
            "head": [
                  "Loại rủi ro",
                  "Giới hạn / cách áp dụng"
            ],
            "rows": [
                  [
                        "Tai nạn",
                        "KHÔNG áp dụng thời gian chờ."
                  ],
                  [
                        "Ốm đau, bệnh tật",
                        "Tối đa KHÔNG QUÁ 90 ngày. Mức 30 ngày chỉ là điều kiện có thể gặp ở một sản phẩm, không phải mức bắt buộc chung."
                  ],
                  [
                        "Thai sản",
                        "Tối đa KHÔNG QUÁ 270 ngày."
                  ],
                  [
                        "Bệnh có sẵn được chấp nhận bảo hiểm",
                        "Tối đa KHÔNG QUÁ 01 năm. Không gộp mặc nhiên mọi bệnh đặc biệt hoặc bệnh mãn tính vào mốc này."
                  ],
                  [
                        "Thời gian chờ khác",
                        "Có thể áp dụng nếu DNBH giải trình rõ phương pháp và cơ sở tính phí."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Thuật ngữ cần nhớ",
            "items": [
                  "Rủi ro với sức khỏe gồm: rủi ro TỪ BÊN NGOÀI (tai nạn) và rủi ro TỪ BÊN TRONG (ốm đau, bệnh tật, thai sản).",
                  "Đồng chi trả: NĐBH tự gánh một tỷ lệ phần trăm chi phí phát sinh.",
                  "Bệnh CÓ SẴN: đã được bác sĩ chẩn đoán hoặc điều trị trước ngày hiệu lực hoặc ngày khôi phục hiệu lực gần nhất. Nếu dùng dấu hiệu/triệu chứng đặc thù để xác định, chỉ xem xét dấu hiệu khởi phát trong 36 tháng và phải dựa trên hồ sơ y tế, tài liệu y khoa hoặc thông tin kê khai.",
                  "Thời gian chờ: khoảng thời gian sau ngày hiệu lực mà quyền lợi tương ứng chưa được chi trả."
            ]
      },
      {
            "type": "table",
            "title": "Chi trả khoán và bồi hoàn chi phí thực tế",
            "head": [
                  "Phương thức",
                  "Áp dụng",
                  "Nguyên tắc"
            ],
            "rows": [
                  [
                        "Khoán",
                        "Tử vong, thương tật, trợ cấp theo thỏa thuận",
                        "Trả theo mức/bảng tỷ lệ trong từng hợp đồng; chấp nhận bảo hiểm trùng, không thế quyền."
                  ],
                  [
                        "Bồi hoàn",
                        "Chi phí khám chữa bệnh, phục hồi sức khỏe",
                        "Căn cứ chi phí thực tế thuộc phạm vi; tổng chi trả không vượt thiệt hại thực tế, kể cả khi bảo hiểm trùng."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Quyền lợi có thể được bảo hiểm và sự đồng ý",
            "items": [
                  "Bên mua có thể mua cho bản thân; vợ/chồng, cha mẹ, con; anh/chị/em ruột hoặc người có quan hệ nuôi dưỡng, cấp dưỡng; người có quyền lợi tài chính hoặc quan hệ lao động.",
                  "Mua cho người khác ngoài các nhóm luật định phải có sự đồng ý bằng văn bản của người đó; bên mua phải có quyền lợi có thể được bảo hiểm tại thời điểm giao kết.",
                  "Giao kết bảo hiểm cho trường hợp chết của người khác phải có sự đồng ý bằng văn bản, ghi rõ số tiền bảo hiểm và người thụ hưởng.",
                  "Pháp luật hạn chế giao kết cho người chưa thành niên, người mất hoặc bị hạn chế năng lực hành vi dân sự và người có khó khăn trong nhận thức theo điều kiện luật định."
            ]
      },
      {
            "type": "list",
            "title": "Các trường hợp không phải trả tiền bảo hiểm",
            "highlight": true,
            "items": [
                  "NĐBH tự tử trong thời hạn 02 năm kể từ ngày đóng khoản phí đầu tiên hoặc khôi phục hiệu lực gần nhất.",
                  "NĐBH chết do lỗi cố ý của bên mua bảo hiểm hoặc người thụ hưởng.",
                  "NĐBH bị thương tật vĩnh viễn do lỗi cố ý của chính NĐBH, bên mua hoặc người thụ hưởng.",
                  "Nếu chỉ một trong nhiều người thụ hưởng có lỗi cố ý, DNBH vẫn trả cho những người thụ hưởng khác theo phần quyền lợi của họ."
            ]
      },
      {
            "type": "list",
            "title": "Tài chính bảo hiểm sức khỏe",
            "items": [
                  "Vốn điều lệ tối thiểu của doanh nghiệp bảo hiểm sức khỏe: 400 tỷ đồng.",
                  "Bốn dự phòng nghiệp vụ: dự phòng toán học; phí chưa được hưởng; bồi thường; bảo đảm cân đối.",
                  "Dự phòng bồi thường dùng cho sự kiện đã xảy ra nhưng chưa khiếu nại hoặc đã khiếu nại mà cuối năm tài chính chưa giải quyết.",
                  "Đồng chi trả là tỷ lệ chi phí thuộc phạm vi mà DNBH và NĐBH cùng chịu; giới hạn sau đồng chi trả không vượt STBH."
            ]
      }
]
  },
  {
    id: "trach-nhiem",
    title: "Bảo hiểm trách nhiệm",
    badge: "Trọng tâm",
    summary: "Điều 57–61 Luật KDBH, claims-made, loss-occurrence, trách nhiệm công cộng, sản phẩm và nghề nghiệp.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM TRÁCH NHIỆM & LOSS-OCCURRENCE VS CLAIMS-MADE",
            "text": "Cặp khái niệm cốt lõi bảo hiểm trách nhiệm:\n• LOSS-OCCURRENCE (Phát sinh sự cố): Sự cố phát sinh trong thời hạn bảo hiểm thì được đền, dù khiếu nại sau khi hết hạn hợp đồng vẫn được chi trả.\n• CLAIMS-MADE (Phát sinh khiếu nại): Cả sự cố và khiếu nại đều phải diễn ra trong thời hạn bảo hiểm (hoặc thời hạn hồi tố Retroactive Date).\n• ĐIỀU 57–61 LKDBH: DNBH bồi thường khoản tiền mà NĐBH có trách nhiệm bồi thường cho bên thứ ba + chi phí bào chữa hợp lý.\n• THẾ QUYỀN: CÓ áp dụng thế quyền trong bảo hiểm trách nhiệm dân sự.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đối tượng và thời điểm phát sinh trách nhiệm",
            "text": "Đối tượng HĐBH trách nhiệm là TNDS của người được bảo hiểm đối với BÊN THỨ BA. Theo Điều 58 Luật KDBH, trách nhiệm phát sinh khi bên thứ ba yêu cầu NĐBH bồi thường do hành vi gây thiệt hại thuộc phạm vi và thời hạn theo thỏa thuận HĐBH; cơ sở claims-made còn phải xét ngày hồi tố và thời hạn báo cáo. Bên thứ ba không có quyền yêu cầu trực tiếp DNBH chi trả, trừ khi pháp luật có quy định khác."
      },
      {
            "type": "table",
            "title": "Điều 57–61 Luật KDBH — khung phải thuộc",
            "head": [
                  "Nội dung",
                  "Quy tắc"
            ],
            "rows": [
                  [
                        "Đối tượng",
                        "TNDS của NĐBH đối với bên thứ ba."
                  ],
                  [
                        "Giới hạn trách nhiệm",
                        "Số tiền DNBH phải trả theo thỏa thuận trong HĐBH; gồm mức mỗi vụ/mỗi khiếu nại và có thể có tổng hạn mức cả kỳ."
                  ],
                  [
                        "Chi phí và lãi",
                        "Trong giới hạn trách nhiệm, DNBH trả khoản NĐBH phải bồi thường, chi phí giải quyết tranh chấp và lãi do chậm trả; có thể thỏa thuận khác."
                  ],
                  [
                        "Bảo lãnh, ký quỹ",
                        "DNBH thực hiện theo yêu cầu của NĐBH và thỏa thuận trong hợp đồng."
                  ],
                  [
                        "Thương lượng",
                        "DNBH có quyền thay mặt NĐBH thương lượng với bên thứ ba, trừ khi hợp đồng có thỏa thuận khác."
                  ],
                  [
                        "Người nhận tiền",
                        "DNBH có thể bồi thường trực tiếp cho NĐBH hoặc bên thứ ba theo yêu cầu của NĐBH."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "TNDS theo hợp đồng và ngoài hợp đồng",
            "head": [
                  "Loại trách nhiệm",
                  "Nguồn phát sinh",
                  "Điểm chốt"
            ],
            "rows": [
                  [
                        "Theo hợp đồng",
                        "Vi phạm nghĩa vụ đã cam kết giữa các bên có quan hệ hợp đồng.",
                        "Phạm vi còn phụ thuộc điều khoản hợp đồng và phần trách nhiệm nhận thêm; không mặc nhiên được đơn trách nhiệm bảo hiểm."
                  ],
                  [
                        "Ngoài hợp đồng",
                        "Hành vi xâm phạm tính mạng, sức khỏe, tài sản hoặc quyền, lợi ích hợp pháp khi không xuất phát từ nghĩa vụ hợp đồng.",
                        "Phải xác định thiệt hại, hành vi, quan hệ nhân quả và căn cứ phát sinh trách nhiệm theo pháp luật."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Loss-occurrence và claims-made",
            "head": [
                  "Cơ sở",
                  "Sự kiện quyết định",
                  "Điểm phải kiểm tra"
            ],
            "rows": [
                  [
                        "Loss-occurrence",
                        "Sự cố hoặc tổn thất phát sinh trong thời hạn bảo hiểm; khiếu nại có thể đến sau.",
                        "Thời điểm sự cố, nguyên nhân, thời hạn thông báo và thời hiệu. Thường gặp ở trách nhiệm công cộng, sản phẩm hoặc trách nhiệm chung."
                  ],
                  [
                        "Claims-made",
                        "Khiếu nại lần đầu được lập và thông báo trong thời hạn bảo hiểm.",
                        "Hành vi phải sau ngày hồi tố; loại trừ sự kiện đã biết; kiểm tra thời hạn báo cáo mở rộng và tính liên tục khi tái tục."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Không dùng “phát hiện sau khi hết hạn” làm quy tắc chung",
            "variant": "warn",
            "text": "Thời điểm phát hiện thiệt hại không tự quyết định được bồi thường. Với claims-made, phải xem khiếu nại được lập và thông báo khi nào, hành vi có sau ngày hồi tố không và có thời hạn báo cáo mở rộng không. Với loss-occurrence, trọng tâm là thời điểm sự cố/tổn thất phát sinh."
      },
      {
            "type": "table",
            "title": "Ba nhóm sản phẩm trách nhiệm",
            "head": [
                  "Sản phẩm",
                  "Nguồn trách nhiệm",
                  "Phạm vi chính"
            ],
            "rows": [
                  [
                        "Trách nhiệm công cộng",
                        "Hoạt động kinh doanh thông thường của NĐBH.",
                        "Thương tật/ốm đau và thiệt hại tài sản của bên thứ ba tại hoặc ngoài địa điểm, tùy giới hạn địa lý, quyền tài phán và điều khoản."
                  ],
                  [
                        "Trách nhiệm sản phẩm",
                        "Sản phẩm đã bán, cung cấp, sửa chữa hoặc đã rời kiểm soát.",
                        "Thiệt hại thực tế về người/tài sản và chi phí pháp lý. Hư hỏng chính sản phẩm, thu hồi sản phẩm, tiền phạt hoặc trách nhiệm nhận thêm thường bị loại trừ nếu không có mở rộng."
                  ],
                  [
                        "Trách nhiệm nghề nghiệp",
                        "Sơ suất, sai sót hoặc thiếu sót khi cung cấp dịch vụ chuyên môn.",
                        "Khoản bồi thường và chi phí chống đỡ khiếu nại; thường dùng claims-made, có ngày hồi tố, khấu trừ và tổng hạn mức."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Giới hạn và loại trừ phải đọc",
            "items": [
                  "Phân biệt hạn mức mỗi vụ/mỗi khiếu nại, một nguyên nhân hoặc chuỗi khiếu nại và tổng hạn mức cả kỳ.",
                  "Xác định chi phí luật sư, điều tra, bào chữa nằm trong hay ngoài hạn mức.",
                  "Nhiều NĐBH hoặc nhiều người khiếu nại không mặc nhiên làm tăng hạn mức.",
                  "Kiểm tra giới hạn địa lý, quyền tài phán, đặc biệt Mỹ/Canada.",
                  "Trách nhiệm công cộng thường loại trừ tài sản NĐBH thuê, mượn hoặc đang quản lý, chăm sóc, kiểm soát nếu không có mở rộng.",
                  "Các loại trừ nghề nghiệp thường gồm gian lận, tội phạm, ác ý, công việc ngoài chuyên môn, sự kiện đã biết và trách nhiệm nhận thêm theo hợp đồng."
            ]
      },
      {
            "type": "note",
            "title": "Trách nhiệm nghề nghiệp không mặc nhiên là tự nguyện",
            "variant": "warn",
            "text": "Trách nhiệm công cộng và trách nhiệm sản phẩm thường là tự nguyện. Một số trách nhiệm nghề nghiệp phải mua hoặc có cơ chế bảo đảm theo luật chuyên ngành, gồm tư vấn xây dựng thuộc diện luật định, khám bệnh chữa bệnh, luật sư, kiểm toán và các nghề khác theo quy định."
      },
      {
            "type": "list",
            "title": "TNNN tư vấn xây dựng bắt buộc",
            "items": [
                  "Người phải mua: nhà thầu khảo sát và thiết kế công trình xây dựng từ cấp II trở lên.",
                  "Đối tượng: TNDS đối với bên thứ ba; giới hạn tối thiểu bằng giá trị hợp đồng tư vấn khảo sát hoặc thiết kế.",
                  "Thời hạn từ khi thực hiện công việc đến hết thời gian bảo hành công trình theo quy định.",
                  "Khiếu nại phải được lập lần đầu và thông báo trong thời hạn theo cơ sở claims-made; không khái quát thành “phát hiện sau hết hạn luôn không bồi thường”.",
                  "Thông báo sự kiện bằng văn bản trong 14 ngày; hồ sơ, loại trừ, phí khi kéo dài thi công/bảo hành thực hiện theo NĐ 67/2023 đã được NĐ 220/2026 sửa đổi."
            ]
      },
      {
            "type": "list",
            "title": "TNNN khám bệnh, chữa bệnh",
            "items": [
                  "Cơ sở khám bệnh, chữa bệnh mua bảo hiểm cho tai biến y khoa và chi phí khiếu kiện liên quan theo Điều 103 Luật Khám bệnh, chữa bệnh 2023 và NĐ 96/2023.",
                  "DNBH chi trả cho cơ sở khám bệnh, chữa bệnh theo hợp đồng; phạm vi cụ thể còn phụ thuộc điều khoản sản phẩm.",
                  "Các mốc thông báo sự kiện, khiếu nại sau khi hết hạn trong slide là điều khoản mẫu; không biến thành quy tắc chung cho mọi hợp đồng."
            ]
      },
      {
            "type": "list",
            "title": "Người lao động thi công trên công trường",
            "items": [
                  "Nhà thầu thi công phải mua bảo hiểm bắt buộc cho người lao động trên công trường theo NĐ 67/2023.",
                  "Giới hạn trách nhiệm tối thiểu 100 triệu đồng/người/vụ đối với tử vong hoặc thương tật toàn bộ vĩnh viễn.",
                  "Quyền lợi gồm chi phí y tế, phụ cấp nghỉ việc tối đa sáu tháng lương và chi trả theo bảng tỷ lệ thương tật trong phạm vi quy định.",
                  "Thông báo bằng văn bản trong 14 ngày; hồ sơ và loại trừ thực hiện theo quy định bắt buộc."
            ]
      },
      {
            "type": "note",
            "title": "Phần II CAR/EAR là phạm vi chuyên ngành",
            "text": "Phần II CAR/EAR và bảo hiểm bắt buộc TNDS bên thứ ba trong hoạt động xây dựng được trình bày chi tiết tại chương Bảo hiểm kỹ thuật nâng cao. Không suy rộng mức giới hạn, khấu trừ hoặc loại trừ của CAR/EAR thành quy tắc chung cho mọi đơn trách nhiệm."
      }
]
  },
  {
    id: "tai-bao-hiem",
    title: "Tái bảo hiểm",
    badge: "Vừa phải",
    summary: "Định nghĩa, chức năng, tái tỷ lệ / phi tỷ lệ, tái cố định / tạm thời.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: TÁI BẢO HIỂM — TỶ LỆ VS PHI TỶ LỆ & QUYỀN HẠN",
            "text": "Bản chất pháp lý & cơ chế tái bảo hiểm:\n• ĐIỀU 29 LKDBH: DNBH gốc chịu trách nhiệm DUY NHẤT với khách hàng. Khách hàng KHÔNG được trực tiếp đòi nhà tái.\n• CẤM: DNBH không được tái bảo hiểm TOÀN BỘ (100%) trách nhiệm trong một hợp đồng đã nhận (phải giữ lại tối thiểu theo quy định).\n• TÁI TỶ LỆ (Proportional): Quota Share (chia % cố định cả phí và bồi thường), Surplus Line (chia theo số mức tự giữ - Lines).\n• TÁI PHI TỶ LỆ (Non-proportional): Excess of Loss (XOL - nhà tái chỉ đền phần vượt mức tự giữ của từng sự cố), Stop Loss (chặn tỷ lệ tổn thất năm).",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Định nghĩa",
            "text": "Tái bảo hiểm là nghiệp vụ DNBH chuyển MỘT PHẦN TRÁCH NHIỆM đã nhận bảo hiểm cho nhà tái để đổi lấy phí tái. DNBH gốc vẫn là bên chịu trách nhiệm duy nhất với bên mua/NĐBH; không được trì hoãn hoặc từ chối chi trả chỉ vì nhà tái chưa thanh toán."
      },
      {
            "type": "list",
            "title": "Chức năng của tái bảo hiểm",
            "items": [
                  "Tăng khả năng nhận bảo hiểm, khai thác được dịch vụ lớn.",
                  "Đảm bảo ổn định trong hoạt động kinh doanh, san bằng chu kỳ kinh doanh.",
                  "Phân tán rủi ro, giảm thiểu thiệt hại do tích tụ.",
                  "Giảm biến động và nguy cơ mất khả năng thanh toán; không bảo đảm tuyệt đối ngăn phá sản vì DNBH còn chịu rủi ro tín dụng nhà tái.",
                  "Trao đổi kinh nghiệm, chuyển giao kỹ thuật; mở rộng liên kết toàn cầu."
            ]
      },
      {
            "type": "table",
            "title": "Phân loại theo LOẠI HÌNH",
            "head": [
                  "Loại hình",
                  "Cơ chế",
                  "Đặc điểm"
            ],
            "rows": [
                  [
                        "TỶ LỆ — Số thành (Quota Share)",
                        "Chia sẻ theo MỘT TỶ LỆ % CỐ ĐỊNH thống nhất từ trước, áp dụng cho cả phí lẫn bồi thường.",
                        "Kỹ thuật đơn giản nhất. Ưu: dễ tính, dễ thu đòi, áp dụng nhiều nghiệp vụ. Nhược: tái đi nhiều - giữ lại ít với dịch vụ tốt, không bảo vệ đủ khi tổn thất lớn tích tụ. Dùng khi bắt đầu nghiệp vụ mới."
                  ],
                  [
                        "TỶ LỆ — Mức dôi (Surplus)",
                        "Ấn định MỨC GIỮ LẠI theo STBH cho từng rủi ro. Hạn mức tái tối đa = Mức giữ lại x Số lần (lines). Tỷ lệ tái KHÁC NHAU cho từng rủi ro.",
                        "Ưu: năng lực lớn hơn QS, chủ động chọn rủi ro, mức giữ lại linh hoạt. Nhược: tính toán phức tạp, quản lý tốn công, không phù hợp nghiệp vụ mới."
                  ],
                  [
                        "PHI TỶ LỆ — Vượt mức bồi thường (Excess of Loss)",
                        "Nhà tái chi trả phần tổn thất vượt điểm tự chịu (excess point), trong giới hạn của lớp (layer).",
                        "Cơ sở chính: theo đơn vị rủi ro (per risk), theo sự kiện (per event), hoặc kết hợp; KHÔNG gộp Stop Loss thành dạng thứ ba của XOL."
                  ],
                  [
                        "PHI TỶ LỆ — Vượt tỷ lệ bồi thường (Stop Loss)",
                        "Công ty BH xác định mức giữ lại bồi thường CẢ NĂM theo TỶ LỆ TỔN THẤT. Nhà tái chi trả khi tổng tỷ lệ bồi thường vượt ngưỡng.",
                        "Việc chi trả giới hạn đến một tỷ lệ cố định thỏa thuận trước."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân loại theo HỢP ĐỒNG",
            "head": [
                  "Loại hợp đồng",
                  "Nội dung",
                  "Ưu / Nhược"
            ],
            "rows": [
                  [
                        "CỐ ĐỊNH (Treaty)",
                        "Hợp đồng hàng năm. Mọi rủi ro thỏa quy định sẽ TỰ ĐỘNG nhượng vào hợp đồng, không cần thương lượng thêm. Dịch vụ ngoài treaty cần Special Acceptance.",
                        "Ưu: bảo vệ toàn bộ danh mục, chủ động thu xếp, thu đòi nhanh. Nhược: năng lực có hạn, vẫn gánh phần giữ lại khi tổn thất thảm họa."
                  ],
                  [
                        "TẠM THỜI (Facultative)",
                        "Hợp đồng tự nguyện cho một hoặc nhiều dịch vụ. Nhà tái CÓ QUYỀN nhận hoặc không nhận, hoặc nhận kèm điều kiện. Điều khoản thương lượng riêng, có thể khác đơn gốc.",
                        "Ưu: học hỏi chuyên môn nhà tái, mở rộng quan hệ, chào bất kỳ dịch vụ nào. Nhược: xử lý lâu, bị động, khả năng thu xếp không đảm bảo, quản lý phức tạp, hoa hồng thường thấp hơn tái cố định."
                  ],
                  [
                        "MỞ / TẠM THỜI–BẮT BUỘC (Open cover / Fac-oblig)",
                        "Nhà nhượng tự chọn dịch vụ để nhượng; nhà nhận tái bắt buộc nhận nếu dịch vụ đáp ứng điều kiện hợp đồng.",
                        "Nằm giữa facultative và treaty: linh hoạt cho nhà nhượng nhưng nhà tái ít quyền lựa chọn từng dịch vụ."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Thuật ngữ phải phân biệt",
            "head": [
                  "Thuật ngữ",
                  "Nghĩa"
            ],
            "rows": [
                  [
                        "Nhượng tái (cede)",
                        "Công ty bảo hiểm gốc chuyển một phần rủi ro sang nhà tái. Công ty bảo hiểm gốc gọi là NHÀ NHƯỢNG TÁI."
                  ],
                  [
                        "Mức giữ lại (retention)",
                        "Phần trách nhiệm công ty bảo hiểm tự gánh, không nhượng đi."
                  ],
                  [
                        "Phí tái bảo hiểm",
                        "Công ty bảo hiểm TRẢ cho nhà tái, tương ứng phần trách nhiệm đã nhượng."
                  ],
                  [
                        "Hoa hồng tái bảo hiểm",
                        "Nhà tái TRẢ LẠI cho công ty bảo hiểm để bù chi phí khai thác; mức hoa hồng phụ thuộc loại hợp đồng và thỏa thuận, không có quy tắc tuyệt đối facultative luôn thấp hơn treaty."
                  ],
                  [
                        "Tái cấp 2, cấp 3 (retrocession)",
                        "Nhà tái lại nhượng tiếp cho nhà tái khác, tạo thị trường tái thứ cấp."
                  ],
                  [
                        "Special Acceptance",
                        "Cơ chế nhà tái xem xét đặc biệt để nhận một dịch vụ không hoàn toàn phù hợp treaty; không phải mọi dịch vụ ngoài treaty đều phải xử lý theo cách này vì có thể thu xếp facultative hoặc chương trình khác."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Bốn cách hỏi dễ nhầm",
            "items": [
                  "Tái TỶ LỆ (Quota Share, Surplus) chia theo TỶ LỆ cả phí lẫn bồi thường. Tái PHI TỶ LỆ (Excess of Loss, Stop Loss) không ràng buộc tỷ lệ nào, chỉ chi trả khi vượt ngưỡng.",
                  "Quota Share tỷ lệ CỐ ĐỊNH cho mọi rủi ro. Surplus tỷ lệ KHÁC NHAU cho từng rủi ro vì phụ thuộc mức giữ lại và STBH.",
                  "Cố định (Treaty) là hợp đồng HÀNG NĂM, rủi ro thỏa điều kiện thì TỰ ĐỘNG nhượng vào. Tạm thời (Facultative) là TỰ NGUYỆN từng vụ, nhà tái có quyền từ chối.",
                  "Excess of Loss chủ yếu theo đơn vị rủi ro (per risk) hoặc sự kiện (per event). Stop Loss bảo vệ KẾT QUẢ GỘP toàn nghiệp vụ theo tỷ lệ bồi thường trong kỳ, không phải dạng \"per aggregate\" song song của XOL."
            ]
      },
      {
            "type": "list",
            "title": "Giới hạn pháp lý phải nhớ",
            "highlight": true,
            "items": [
                  "DNBH không được tái bảo hiểm toàn bộ trách nhiệm đã nhận trong một hợp đồng; vẫn phải duy trì mức giữ lại.",
                  "Mức giữ lại tối đa trên mỗi rủi ro hoặc tổn thất riêng lẻ không quá 10% vốn chủ sở hữu.",
                  "Tái bảo hiểm theo chỉ định tối đa 90% mức trách nhiệm bảo hiểm.",
                  "Nhà tái nước ngoài nhận từ 10% tổng mức trách nhiệm của mỗi hợp đồng phải đáp ứng yêu cầu xếp hạng tín nhiệm hoặc xác nhận tương ứng.",
                  "Tái bảo hiểm hạn chế phải thông báo Bộ Tài chính trong 07 ngày kể từ ngày ký hợp đồng."
            ]
      },
      {
            "type": "table",
            "title": "Thuật ngữ tái phi tỷ lệ",
            "head": [
                  "Thuật ngữ",
                  "Nghĩa ngắn"
            ],
            "rows": [
                  [
                        "Ultimate net loss",
                        "Tổn thất ròng cuối cùng làm căn cứ thu đòi sau các khoản thu hồi/giảm trừ theo hợp đồng."
                  ],
                  [
                        "Excess point / Layer",
                        "Điểm bắt đầu trách nhiệm nhà tái / lớp giới hạn trách nhiệm nằm trên điểm đó."
                  ],
                  [
                        "MDP / GNPI",
                        "Phí đặt cọc tối thiểu / tổng phí thu nhập ròng làm cơ sở điều chỉnh phí treaty."
                  ],
                  [
                        "Reinstatement",
                        "Tái lập giới hạn sau tổn thất; có thể phải trả phí tái lập theo điều khoản."
                  ],
                  [
                        "Working XOL / Cat XOL",
                        "Bảo vệ tổn thất thường xuyên vượt giữ lại / bảo vệ tích tụ nhiều tổn thất do một thảm họa."
                  ],
                  [
                        "Điều khoản giờ",
                        "Gộp tổn thất cùng sự kiện trong khoảng thời gian và khu vực quy định thành một sự cố thảm họa."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Phạm vi chương",
            "variant": "warn",
            "text": "Nội dung này đủ theo giáo trình thi CC 07/2026: khái niệm, loại hợp đồng, tái tỷ lệ/phi tỷ lệ và giới hạn pháp lý chính. Không thay thế wording treaty/facultative thực tế, định phí, dự phòng, claims control, trọng tài, cấm vận hoặc chuẩn thị trường quốc tế."
      },
      {
            "type": "note",
            "title": "Ví dụ tính Surplus (hay ra bài tập)",
            "text": "Cấu trúc: giữ lại tối đa USD 1tr, hợp đồng SPL 4 lines → hạn mức tái tối đa USD 4tr, tổng năng lực USD 5tr. Rủi ro STBH 2tr → giữ lại 1tr = 50%, tái 50%. Rủi ro STBH 0,9tr (nhỏ hơn mức giữ lại) → GIỮ LẠI 100%, tái 0%. Rủi ro STBH 6,5tr → giữ lại 1tr (15,38%), tái SPL 4tr (61,54%), phần dôi 1,5tr (23,08%) phải tái tạm thời hoặc giữ lại thêm. Bồi thường phân chia theo đúng tỷ lệ này."
      }
]
  },
  {
    id: "bay-luat",
    title: "Bẫy luật chết người",
    badge: "Đọc trước khi thi",
    summary: "Các điều luật ra đề nhiều nhất và dễ mất điểm nhất — chốt số, chốt chủ thể, chốt ngoại lệ.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: 13 BẪY LUẬT DỄ MẤT ĐIỂM NHẤT TRONG KỲ THI",
            "text": "Các bẫy đề thi hay gài bẫy nhất:\n• KHÔNG CÓ CÂU ĐIỂM LIỆT: Chỉ cần đạt từ 75% (≥ 30/40 câu) là đỗ.\n• BẪY CHỦ THỂ: CHÍNH PHỦ ban hành bảo hiểm bắt buộc; BỘ TÀI CHÍNH cấp phép DNBH; CƠ SỞ ĐÀO TẠO cấp chứng chỉ.\n• ĐẠI LÝ 4 KHÔNG: Không ký HĐ, Không giám định tổn thất, Không quyết định bồi thường, Không thu xếp tái bảo hiểm.\n• THỜI HẠN VÀNG: 21 ngày cân nhắc nhân thọ; 60 ngày gia hạn đóng phí; 02 năm khôi phục HĐ; 03 năm mất chứng chỉ nếu không hành nghề; 12 tháng cấm thi nếu gian lận; 20 ngày nộp đơn phúc khảo (chỉ áp dụng thi giấy).",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Không có \"câu điểm liệt\" trong quy chế thi",
            "variant": "ok",
            "text": "Theo Điều 23 Thông tư 69/2022/TT-BTC, điều kiện đỗ DUY NHẤT là trả lời đúng từ 75% tổng số câu trở lên (30/40 câu). KHÔNG có câu hỏi bắt buộc phải đúng, KHÔNG có điểm liệt theo chuyên đề. Tuy nhiên các nhóm câu dưới đây chiếm tỷ trọng lớn và rất dễ sai vì đáp án nhiễu chỉ khác nhau 1-2 chữ — sai là mất điểm hàng loạt."
      },
      {
            "type": "table",
            "title": "BẪY 1 — Chốt CON SỐ (sai 1 số là sai cả câu)",
            "head": [
                  "Nội dung",
                  "Con số ĐÚNG",
                  "Đáp án nhiễu hay gặp"
            ],
            "rows": [
                  [
                        "Thời hạn NỘP hồ sơ yêu cầu bồi thường (Điều 30)",
                        "01 NĂM kể từ ngày xảy ra sự kiện bảo hiểm",
                        "30 ngày / 90 ngày / 15 ngày"
                  ],
                  [
                        "Thời hạn DNBH bồi thường khi không có thỏa thuận (Điều 31)",
                        "15 NGÀY kể từ ngày nhận đủ hồ sơ hợp lệ",
                        "30 ngày / 10 ngày / 45 ngày"
                  ],
                  [
                        "Thời hiệu khởi kiện về HĐBH (Điều 30)",
                        "03 NĂM kể từ thời điểm phát sinh tranh chấp",
                        "01 năm / 02 năm / 05 năm"
                  ],
                  [
                        "Không hoạt động đại lý liên tục → phải thi lại CC",
                        "03 NĂM",
                        "01 năm / 02 năm / 05 năm"
                  ],
                  [
                        "Bị thu hồi chứng chỉ → cấm dự thi",
                        "12 THÁNG kế tiếp",
                        "06 tháng / 24 tháng / 03 năm"
                  ],
                  [
                        "Đăng ký dự thi trước ngày thi tối thiểu",
                        "10 NGÀY",
                        "03 ngày / 05 ngày / 07 ngày"
                  ],
                  [
                        "Nộp đơn phúc khảo",
                        "20 NGÀY kể từ ngày có quyết định",
                        "10 ngày / 15 ngày / 30 ngày"
                  ],
                  [
                        "Cấp chứng chỉ ĐLBH sau khi có QĐ phê duyệt",
                        "03 NGÀY",
                        "05 ngày / 07 ngày / 10 ngày"
                  ],
                  [
                        "CC ĐLBH cấp trước 01/01/2023 hết hiệu lực",
                        "01/01/2026 (chuyển đổi xong trước 31/12/2025)",
                        "31/12/2024 / 01/01/2025"
                  ],
                  [
                        "Tổn thất TOÀN BỘ xe cơ giới",
                        "Sửa chữa từ 75% GIÁ TRỊ THỰC TẾ ngay trước tổn thất",
                        "70% / 75% giá trị tham gia BH / 70% giá trị tham gia BH"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "BẪY 2 — Chốt CHỦ THỂ: ai làm việc gì",
            "variant": "warn",
            "text": "Đề rất hay đổi chủ thể để tạo đáp án sai. Nhớ chính xác: CHÍNH PHỦ quy định điều kiện BH, mức phí, STBH tối thiểu của bảo hiểm bắt buộc (KHÔNG phải Bộ Tài chính). CỤC QLGSBH tổ chức thi, ra đề, phê duyệt kết quả, thu hồi CC ĐLBH. CSĐT (cơ sở đào tạo) cấp / thu hồi CHỨNG CHỈ BẢO HIỂM. BỘ TÀI CHÍNH chỉ định chuyển giao danh mục HĐBH khi DNBH bị kiểm soát. NGƯỜI ĐƯỢC BẢO HIỂM (không phải DNBH) là bên không được từ bỏ tài sản và phải hạn chế tổn thất."
      },
      {
            "type": "list",
            "title": "BẪY 3 — Điều 9 LKDBH: 5 nhóm hành vi BỊ NGHIÊM CẤM",
            "highlight": true,
            "items": [
                  "Kinh doanh bảo hiểm / tái bảo hiểm / nhượng tái / môi giới bảo hiểm KHI KHÔNG CÓ giấy phép, hoặc KHÔNG ĐÚNG PHẠM VI được cấp phép.",
                  "Hoạt động đại lý bảo hiểm, dịch vụ phụ trợ bảo hiểm khi KHÔNG ĐÁP ỨNG ĐIỀU KIỆN theo quy định.",
                  "Thực hiện hành vi GIAN LẬN: thông đồng với người thụ hưởng để giải quyết bồi thường trái pháp luật; giả mạo tài liệu / cố ý làm sai lệch thông tin trong hồ sơ yêu cầu bồi thường; giả mạo tài liệu để TỪ CHỐI bồi thường khi sự kiện bảo hiểm đã xảy ra; TỰ GÂY THIỆT HẠI về tài sản, sức khỏe của mình để hưởng quyền lợi bảo hiểm.",
                  "ĐE DỌA, CƯỠNG ÉP giao kết hợp đồng bảo hiểm.",
                  "Lưu ý: cả hành vi của DNBH (giả mạo để từ chối bồi thường) lẫn hành vi của khách hàng (tự gây thiệt hại) đều nằm trong nhóm gian lận — đề hay chỉ liệt kê một phía để đánh lừa."
            ]
      },
      {
            "type": "list",
            "title": "BẪY 4 — Điều 129 LKDBH: hành vi BỊ CẤM đối với ĐẠI LÝ",
            "highlight": true,
            "items": [
                  "Thông tin, quảng cáo SAI SỰ THẬT về nội dung, phạm vi hoạt động của DNBH, về điều kiện và điều khoản bảo hiểm làm tổn hại quyền lợi bên mua bảo hiểm.",
                  "NGĂN CẢN bên mua bảo hiểm cung cấp thông tin liên quan đến HĐBH, hoặc XÚI GIỤC bên mua / NĐBH KHÔNG KÊ KHAI thông tin liên quan đến HĐBH.",
                  "TRANH GIÀNH khách hàng dưới hình thức ngăn cản, lôi kéo, mua chuộc, đe dọa nhân viên hoặc khách hàng của DNBH, đại lý, doanh nghiệp môi giới khác.",
                  "XÚI GIỤC khách hàng HỦY BỎ hợp đồng bảo hiểm đang có hiệu lực dưới mọi hình thức."
            ]
      },
      {
            "type": "list",
            "title": "BẪY 5 — Điều 125: ai KHÔNG ĐƯỢC làm đại lý bảo hiểm",
            "items": [
                  "CÁ NHÂN: đang bị truy cứu trách nhiệm hình sự; đang chấp hành hình phạt tù; đang chấp hành hình phạt CẤM HÀNH NGHỀ liên quan đến lĩnh vực bảo hiểm.",
                  "TỔ CHỨC: là pháp nhân thương mại đang bị truy cứu trách nhiệm hình sự; đang bị đình chỉ hoạt động có thời hạn hoặc vĩnh viễn; đang bị cấm kinh doanh, cấm hoạt động trong lĩnh vực liên quan đến bảo hiểm.",
                  "Nhớ: đây là các trường hợp ĐANG diễn ra. Người đã chấp hành xong hình phạt và được xóa án tích thì KHÔNG thuộc nhóm bị cấm."
            ]
      },
      {
            "type": "list",
            "title": "BẪY 6 — Điều 25: 10 trường hợp HĐBH VÔ HIỆU",
            "items": [
                  "Bên mua bảo hiểm KHÔNG CÓ quyền lợi có thể được bảo hiểm tại thời điểm giao kết.",
                  "KHÔNG CÓ đối tượng bảo hiểm tại thời điểm giao kết.",
                  "Tại thời điểm giao kết, bên mua bảo hiểm BIẾT sự kiện bảo hiểm ĐÃ XẢY RA.",
                  "Mục đích, nội dung HĐBH vi phạm điều cấm của luật, trái đạo đức xã hội.",
                  "DNBH và bên mua bảo hiểm giao kết HĐBH GIẢ TẠO.",
                  "Bên mua bảo hiểm là người CHƯA THÀNH NIÊN; người mất năng lực hành vi dân sự; người có khó khăn trong nhận thức, làm chủ hành vi; người bị hạn chế năng lực hành vi dân sự.",
                  "HĐBH giao kết có sự NHẦM LẪN làm một bên hoặc các bên không đạt được mục đích giao kết (trừ khi mục đích vẫn đạt được hoặc khắc phục ngay được).",
                  "HĐBH giao kết do BỊ LỪA DỐI (trừ trường hợp thuộc Điều 22).",
                  "HĐBH giao kết do BỊ ĐE DỌA, CƯỠNG ÉP.",
                  "Bên mua bảo hiểm KHÔNG NHẬN THỨC và làm chủ được hành vi khi giao kết; HĐBH không tuân thủ quy định về HÌNH THỨC (Điều 18).",
                  "Hậu quả: hợp đồng KHÔNG CÓ HIỆU LỰC TỪ THỜI ĐIỂM GIAO KẾT, hai bên hoàn trả cho nhau những gì đã nhận, bên có lỗi gây thiệt hại phải bồi thường."
            ]
      },
      {
            "type": "table",
            "title": "BẪY 7 — Phân biệt VÔ HIỆU / HỦY BỎ / ĐƠN PHƯƠNG CHẤM DỨT",
            "head": [
                  "Trường hợp",
                  "Nguyên nhân",
                  "Hậu quả"
            ],
            "rows": [
                  [
                        "VÔ HIỆU (Điều 25)",
                        "Thiếu điều kiện có hiệu lực ngay từ đầu (không có quyền lợi được BH, giả tạo, bị lừa dối, đe dọa...).",
                        "Không có hiệu lực TỪ THỜI ĐIỂM GIAO KẾT. Hoàn trả cho nhau những gì đã nhận. Bên có lỗi bồi thường thiệt hại."
                  ],
                  [
                        "HỦY BỎ (Điều 22)",
                        "Bên mua bảo hiểm CỐ Ý cung cấp thông tin không đầy đủ hoặc SAI SỰ THẬT nhằm giao kết để được bồi thường.",
                        "DNBH KHÔNG phải bồi thường, hoàn lại phí sau khi trừ chi phí hợp lý. Bên mua bảo hiểm phải bồi thường thiệt hại phát sinh cho DNBH."
                  ],
                  [
                        "ĐƠN PHƯƠNG CHẤM DỨT (Điều 26, 27)",
                        "Không đóng / đóng thiếu phí sau thời gian gia hạn; không chấp nhận thay đổi mức độ rủi ro; NĐBH không thực hiện biện pháp bảo đảm an toàn; không đồng ý chuyển giao danh mục HĐBH.",
                        "HĐ chấm dứt từ thời điểm chấm dứt (không hồi tố). Sự kiện bảo hiểm xảy ra TRƯỚC thời điểm chấm dứt vẫn được bồi thường, DNBH có quyền khấu trừ phí."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "BẪY 8 — Ngoại lệ khi đơn phương chấm dứt do nợ phí",
            "variant": "warn",
            "text": "Quy định \"bên mua bảo hiểm VẪN PHẢI ĐÓNG ĐỦ PHÍ đến thời điểm đơn phương chấm dứt\" áp dụng cho HĐBH TÀI SẢN, THIỆT HẠI và TRÁCH NHIỆM. KHÔNG áp dụng đối với HĐBH NHÂN THỌ và HĐBH SỨC KHỎE — TRỪ hợp đồng bảo hiểm NHÓM. Đáp án đúng thường là \"A, B đúng\" (trách nhiệm + tài sản)."
      },
      {
            "type": "note",
            "title": "BẪY 9 — Trách nhiệm khi có tái bảo hiểm (Điều 29)",
            "variant": "warn",
            "text": "DNBH gốc chịu trách nhiệm DUY NHẤT với bên mua bảo hiểm, KỂ CẢ khi đã tái bảo hiểm. DNBH KHÔNG được từ chối hoặc trì hoãn nghĩa vụ ngay cả khi nhà tái không thanh toán. Nhà nhận tái KHÔNG được yêu cầu bên mua bảo hiểm đóng phí trực tiếp. Bên mua bảo hiểm KHÔNG được yêu cầu nhà nhận tái bồi thường cho mình."
      },
      {
            "type": "note",
            "title": "BẪY 10 — Phạm vi áp dụng LKDBH (Điều 1)",
            "text": "LKDBH KHÔNG áp dụng đối với: BẢO HIỂM XÃ HỘI, BẢO HIỂM Y TẾ, BẢO HIỂM TIỀN GỬI và các loại bảo hiểm khác do Nhà nước thực hiện KHÔNG MANG TÍNH KINH DOANH. HĐBH HÀNG HẢI theo Bộ luật Hàng hải trước, nội dung nào Bộ luật Hàng hải không quy định thì mới áp dụng LKDBH."
      },
      {
            "type": "list",
            "title": "BẪY 11 — Thu hồi chứng chỉ đại lý bảo hiểm (6 trường hợp)",
            "items": [
                  "Cá nhân KHÔNG tham dự thi hoặc KHÔNG thi đỗ kỳ thi chứng chỉ (hình thức Viết 2).",
                  "Kết quả HẬU KIỂM bài thi cho thấy thí sinh không đủ điều kiện thi đỗ.",
                  "Thí sinh SỬA CHỮA, GIAN DỐI hoặc GIẢ MẠO giấy tờ về nhân thân khi dự thi.",
                  "Cá nhân NHỜ NGƯỜI KHÁC THI HỘ.",
                  "DNBH và cá nhân GIAN DỐI trong việc chuyển đổi chứng chỉ ĐLBH.",
                  "Thu hồi theo yêu cầu của cơ quan nhà nước có thẩm quyền.",
                  "Cá nhân bị thu hồi ở trường hợp 3, 4, 5, 6 KHÔNG được dự thi trong 12 THÁNG kế tiếp. Cục QLGSBH thực hiện thu hồi CC ĐLBH; CSĐT thực hiện thu hồi CHỨNG CHỈ BẢO HIỂM."
            ]
      },
      {
            "type": "note",
            "title": "BẪY 12 — Đại lý làm sai, ai chịu?",
            "variant": "warn",
            "text": "Đại lý vi phạm hợp đồng đại lý gây thiệt hại cho bên mua bảo hiểm → DNBH VẪN PHẢI chịu trách nhiệm thực hiện nghĩa vụ theo HĐBH do đại lý thu xếp giao kết (Điều 128). SAU ĐÓ đại lý có nghĩa vụ BỒI HOÀN lại cho DNBH các khoản đã bồi thường (Điều 129). Hai vế này thường bị tách ra để tạo đáp án sai."
      },
      {
            "type": "note",
            "title": "BẪY 13 — Cung cấp bảo hiểm trên môi trường mạng (Điều 14)",
            "text": "DNBH, chi nhánh nước ngoài, tổ chức tương hỗ, doanh nghiệp MÔI GIỚI được CHỦ ĐỘNG lựa chọn hình thức cung cấp. Riêng ĐẠI LÝ BẢO HIỂM CHỈ được cung cấp TRONG PHẠM VI HỢP ĐỒNG ĐẠI LÝ — đây là điểm khác biệt hay bị hỏi."
      }
]
  },
  {
    id: "tau-thuy",
    title: "Bảo hiểm tàu thủy (nâng cao)",
    badge: "Nâng cao",
    summary: "MIA 1906, Bộ luật Hàng hải 2015, ITC Hulls 1995, đâm va, tổn thất chung, P&I và thân tàu sông.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM TÀU THỦY (HÀNG HẢI) & TỔN THẤT CHUNG",
            "text": "Nghiệp vụ bảo hiểm tàu thủy cốt lõi:\n• TỔN THẤT CHUNG (General Average - GA): Hành động hy sinh hoặc chi phí đặc biệt cố ý, hợp lý vì an toàn chung cho toàn bộ tàu và hàng. Mọi bên liên quan đều phải đóng góp theo tỷ lệ.\n• TỔN THẤT RIÊNG (Particular Average - PA): Thiệt hại do rủi ro ngẫu nhiên chỉ ảnh hưởng riêng một quyền lợi (tàu hoặc hàng).\n• ITC HULLS 1995: Quy tắc thân tàu mẫu quốc tế của Viện các nhà bảo hiểm London.\n• P&I CLUB: Hội bảo trợ trách nhiệm dân sự chủ tàu (bảo hiểm TNDS ô nhiễm dầu, đâm va, trách nhiệm với thuyền viên).",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đọc trước: chương này thuộc kỳ thi nâng cao",
            "tone": "warn",
            "text": "Toàn bộ nội dung bám tài liệu \"TÀI LIỆU THI CC 07/2026 - BH tàu thủy\" (207 trang). Bộ đề cũ 610 câu KHÔNG có câu nào về tàu thủy, nên phần này hoàn toàn mới. Câu hỏi luyện tập nằm ở ngân hàng \"Nâng cao\"."
      },
      {
            "type": "table",
            "title": "Chữ viết tắt trong chương này",
            "head": [
                  "Viết tắt",
                  "Nghĩa đầy đủ",
                  "Ghi nhớ"
            ],
            "rows": [
                  [
                        "MIA 1906",
                        "Marine Insurance Act 1906 - Luật Bảo hiểm Hàng hải Anh",
                        "Gồm 17 mục, 94 điều, 2 phụ lục và 17 quy tắc giải nghĩa."
                  ],
                  [
                        "BLHH",
                        "Bộ luật Hàng hải Việt Nam 2015",
                        "Hiệu lực 01/7/2017, 20 chương, 341 điều. Chương XVIII về hợp đồng bảo hiểm (8 mục, 34 điều)."
                  ],
                  [
                        "ITC Hulls",
                        "Institute Time Clauses - Hulls (Điều khoản thân tàu định hạn)",
                        "Bản 1983 và 1995. Thi chủ yếu hỏi bản 1995."
                  ],
                  [
                        "P&I",
                        "Protection and Indemnity - Bảo vệ và bồi thường",
                        "Bảo hiểm trách nhiệm dân sự chủ tàu."
                  ],
                  [
                        "TTTBTT",
                        "Tổn thất toàn bộ thực tế (Actual Total Loss)",
                        "Không cần tuyên bố từ bỏ."
                  ],
                  [
                        "TTTBUT",
                        "Tổn thất toàn bộ ước tính (Constructive Total Loss)",
                        "BẮT BUỘC phải tuyên bố từ bỏ."
                  ],
                  [
                        "TTC",
                        "Tổn thất chung (General Average - GA)",
                        "Hy sinh có chủ ý vì an toàn chung, nhiều bên đóng góp."
                  ],
                  [
                        "TTR",
                        "Tổn thất riêng (Particular Average - PA)",
                        "Ngẫu nhiên, ai bị nấy chịu."
                  ],
                  [
                        "NBH / NĐBH",
                        "Người bảo hiểm / Người được bảo hiểm",
                        "NBH là doanh nghiệp, NĐBH thường là chủ tàu."
                  ],
                  [
                        "LOF",
                        "Lloyd’s Open Form",
                        "Mẫu hợp đồng cứu hộ mở, nguyên tắc \"Không cứu được - Không trả tiền\"."
                  ],
                  [
                        "YAR",
                        "York-Antwerp Rules",
                        "Quy tắc phân bổ tổn thất chung (bản 1974, 1994, 2004, 2016)."
                  ],
                  [
                        "GT",
                        "Gross Tonnage - Dung tích đăng ký toàn phần",
                        "Dùng tính phí P&I: P = GT x R."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Thứ tự ưu tiên tham chiếu khi giải quyết khiếu nại",
            "head": [
                  "Thứ tự",
                  "Nguồn luật"
            ],
            "rows": [
                  [
                        "1",
                        "Luật Kinh doanh Bảo hiểm Việt Nam"
                  ],
                  [
                        "2",
                        "Bộ hợp đồng bảo hiểm (HĐ bao, đơn BH, sửa đổi bổ sung, hồ sơ khai thác)"
                  ],
                  [
                        "3",
                        "Bộ luật Hàng hải Việt Nam"
                  ],
                  [
                        "4",
                        "Luật Bảo hiểm Hàng hải Anh (MIA 1906) và tập quán, án lệ Anh"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bẫy thứ tự ưu tiên",
            "text": "Phương án sai hay gặp: \"Luật KDBH > Bộ luật Hàng hải > Bộ luật Dân sự\" hoặc đặt Bộ luật Hàng hải lên trước Bộ hợp đồng bảo hiểm. Nhớ đúng: Luật KDBH đứng đầu, ngay sau là BỘ HỢP ĐỒNG BẢO HIỂM, rồi mới đến Bộ luật Hàng hải, cuối cùng là luật Anh."
      },
      {
            "type": "list",
            "title": "Năm nguyên tắc cơ bản của bảo hiểm hàng hải",
            "items": [
                  "Quyền lợi có thể bảo hiểm (Insurable interest) - Điều 4, 5, 6 MIA và Điều 305 BLHH.",
                  "Trung thực tuyệt đối (Utmost good faith) - Điều 17 MIA. Đây là nguyên tắc CƠ BẢN NHẤT, nền tảng của bảo hiểm hàng hải.",
                  "Nguyên nhân chính yếu (Proximate cause) - Điều 55(1) MIA, Điều 323(1) BLHH.",
                  "Bồi thường (Indemnity) - khôi phục tình trạng tài chính như trước tổn thất, không làm giàu.",
                  "Thế quyền (Subrogation) - NBH sau khi bồi thường được thay quyền đòi bên thứ ba."
            ]
      },
      {
            "type": "table",
            "title": "Quyền lợi bảo hiểm - những điểm hay ra đề",
            "head": [
                  "Vấn đề",
                  "Kết luận"
            ],
            "rows": [
                  [
                        "Thời điểm phải có quyền lợi bảo hiểm",
                        "Phải có vào THỜI ĐIỂM TỔN THẤT, có thể KHÔNG có vào thời điểm giao kết hợp đồng (Đ.6 MIA, Đ.305 BLHH)."
                  ],
                  [
                        "Không có quyền lợi bảo hiểm",
                        "Đơn bảo hiểm VÔ HIỆU (void) - Điều 18 MIA. Mục đích quy định: tránh biến bảo hiểm thành đánh bạc."
                  ],
                  [
                        "Tổn thất xảy ra TRƯỚC khi giao kết hợp đồng",
                        "Vẫn được bồi thường nếu bảo hiểm theo điều kiện \"tổn thất hay chưa tổn thất\" (lost or not lost), TRỪ KHI NĐBH đã biết mà NBH chưa biết (Quy tắc giải nghĩa số 1 MIA)."
                  ],
                  [
                        "Người mua hàng đã từ chối nhận hàng",
                        "Vẫn có quyền lợi bảo hiểm nếu đã mua bảo hiểm cho hàng hóa (Điều 305 BLHH 2015)."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Trung thực tuyệt đối và nghĩa vụ khai báo",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Phân biệt \"từ chối\" (avoid) và \"hủy\" (void)",
                        "TỪ CHỐI = coi như KHÔNG có hợp đồng ngay từ đầu (hợp đồng vô hiệu). HỦY = làm mất hiệu lực, chấm dứt hợp đồng. Đây là câu bẫy kinh điển."
                  ],
                  [
                        "Điều 18 MIA",
                        "NĐBH phải khai báo mọi HOÀN CẢNH TRỌNG YẾU mà họ biết hoặc phải biết TRƯỚC khi giao kết."
                  ],
                  [
                        "Hoàn cảnh trọng yếu là gì",
                        "Hoàn cảnh ảnh hưởng đến phán đoán của NBH khi quyết định nhận bảo hiểm, định phí, áp dụng điều kiện bảo hiểm."
                  ],
                  [
                        "Điều 320 BLHH",
                        "Sau khi giao kết, nếu có thay đổi làm TĂNG RỦI RO thì NĐBH phải thông báo ngay khi biết. Không thông báo thì NBH có quyền từ chối toàn bộ hoặc một phần số tiền bồi thường."
                  ],
                  [
                        "Điều 310 BLHH",
                        "NBH có quyền chấm dứt hợp đồng nếu NĐBH CỐ Ý vi phạm nghĩa vụ khai báo."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Nguyên nhân chính yếu không phải nguyên nhân gần nhất",
            "text": "Nguyên nhân chính yếu là nguyên nhân CÓ ẢNH HƯỞNG (dominant) và TÁC ĐỘNG (effective) lớn nhất gây ra tổn thất - có thể KHÔNG phải nguyên nhân gần nhất hay trực tiếp về mặt thời gian. Một tổn thất có thể do nhiều nguyên nhân gián tiếp nhưng chỉ có MỘT nguyên nhân chính yếu để giải quyết bồi thường."
      },
      {
            "type": "table",
            "title": "Nội tỳ và ẩn tỳ - đừng nhầm hai khái niệm này",
            "head": [
                  "Khái niệm",
                  "Định nghĩa",
                  "Bảo hiểm"
            ],
            "rows": [
                  [
                        "Nội tỳ (inherent vice)",
                        "Tổn thất do ảnh hưởng nội tại của chính đối tượng bảo hiểm. Đặc điểm: (1) không ngẫu nhiên, (2) chắc chắn xảy ra, (3) nguyên nhân nội tại chứ không từ bên ngoài.",
                        "BỊ LOẠI TRỪ - không phải hiểm họa hàng hải vì thiếu tính ngẫu nhiên."
                  ],
                  [
                        "Ẩn tỳ (latent defect)",
                        "Khuyết tật NGẦM trong vỏ hay máy tàu có từ lúc đóng tàu hoặc lúc sửa chữa, KHÔNG thể phát hiện nếu kiểm tra thông thường (Điều 6.2.1 ITC Hulls 95).",
                        "Bồi thường TỔN THẤT DO ẩn tỳ gây ra, KHÔNG bồi thường bản thân bộ phận bị ẩn tỳ."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Ví dụ ẩn tỳ trong đề",
            "text": "Tàu bị gãy trục cơ do bọt khí phát sinh khi đúc (= ẩn tỳ), gãy trục làm gãy tay biên, trầy xy lanh, gãy bạc, thủng block máy. Kết quả: các hư hỏng DO gãy trục gây ra ĐƯỢC bồi thường, còn bản thân cái trục cơ bị ẩn tỳ thì KHÔNG. Ngược lại, nếu nồi hơi hay trục hỏng do một hiểm họa khác (đâm va, bất cẩn thuyền viên) thì bản thân nó lại ĐƯỢC bồi thường."
      },
      {
            "type": "table",
            "title": "Các loại đơn bảo hiểm hàng hải",
            "head": [
                  "Loại đơn",
                  "Đặc điểm",
                  "Bồi thường khi tổn thất toàn bộ"
            ],
            "rows": [
                  [
                        "Đơn bảo hiểm chuyến (voyage policy)",
                        "Bảo hiểm từ một địa điểm đến một hoặc nhiều địa điểm khác. Bắt đầu khi bắt đầu chuyến đi, kết thúc khi kết thúc chuyến đi.",
                        "-"
                  ],
                  [
                        "Đơn bảo hiểm định hạn (time policy)",
                        "Bảo hiểm trong một thời hạn nhất định ghi rõ trên đơn. MIA cho phép một đơn gồm CẢ chuyến lẫn định hạn.",
                        "-"
                  ],
                  [
                        "Đơn ĐỊNH GIÁ (valued policy)",
                        "Ghi giá trị bảo hiểm thỏa thuận, NBH đồng ý trước về giá trị đối tượng bảo hiểm.",
                        "GIÁ TRỊ THỎA THUẬN ghi trên đơn (Đ.67, 68 MIA)."
                  ],
                  [
                        "Đơn KHÔNG ĐỊNH GIÁ (unvalued policy)",
                        "Không ghi giá trị bảo hiểm, chỉ ghi số tiền bảo hiểm. Khi có tổn thất mới xác định giá trị bảo hiểm.",
                        "GIÁ TRỊ CÓ THỂ BẢO HIỂM (Đ.67, 68 MIA)."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bẫy đơn không định giá - tàu đi phá dỡ",
            "text": "Tàu bảo hiểm theo đơn KHÔNG ĐỊNH GIÁ, đang trên hành trình về Hải Phòng để phá dỡ bán sắt vụn thì hỏng máy. Bồi thường căn cứ vào GIÁ TRỊ SẮT VỤN của tàu tại Hải Phòng vào thời điểm xảy ra sự cố - không phải giá trị thị trường tàu, không phải giá trị lúc bắt đầu bảo hiểm. Lý do: đơn không định giá xác định giá trị theo thực tế tại thời điểm tổn thất, mà giá trị thực tế của con tàu đi phá dỡ chính là giá sắt vụn."
      },
      {
            "type": "table",
            "title": "Giá trị bảo hiểm - bảo hiểm dưới giá và trên giá",
            "head": [
                  "Trường hợp",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Giá trị có thể bảo hiểm của tàu (Đ.311 BLHH)",
                        "Tổng giá trị tàu tại thời điểm bắt đầu bảo hiểm, gồm cả máy móc, trang thiết bị, phụ tùng dự trữ, phí bảo hiểm; có thể gồm lương ứng trước cho thuyền bộ và chi phí chuẩn bị chuyến đi nếu có thỏa thuận."
                  ],
                  [
                        "Bảo hiểm DƯỚI giá (Đ.312 BLHH)",
                        "STBH < GTBH: NBH chỉ bồi thường THEO TỶ LỆ giữa STBH và GTBH, kể cả các chi phí khác thuộc phạm vi bảo hiểm. Điều 81 MIA: NĐBH được xem là TỰ BẢO HIỂM phần chênh lệch."
                  ],
                  [
                        "Bảo hiểm TRÊN giá (Đ.312(3) BLHH)",
                        "STBH > GTBH: phần tiền vượt quá KHÔNG được thừa nhận. Điều 47 Luật KDBH cấm giao kết hợp đồng trên giá trị. Điều 84 MIA: nếu vô ý bảo hiểm trên giá thì phí bảo hiểm được hoàn theo tỷ lệ."
                  ],
                  [
                        "Bảo hiểm trùng (Đ.49 Luật KDBH, Đ.32 MIA, Đ.313 BLHH)",
                        "Từ 2 đơn trở lên cho cùng đối tượng, phạm vi, thời hạn, sự kiện mà TỔNG STBH vượt quá giá trị. Mỗi NBH chỉ chịu trách nhiệm TƯƠNG ỨNG TỶ LỆ số tiền mình nhận bảo hiểm, tổng không quá GTBH."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bài tập bảo hiểm trùng - làm theo 3 bước",
            "text": "Giá trị tàu 9 triệu USD. ĐBH 1: 6 triệu (full cover), ĐBH 2: 2 triệu (chỉ tổn thất toàn bộ), ĐBH 3: 4 triệu (full cover). Bước 1 - xác định đơn nào CÙNG bảo hiểm cho sự cố đó. Bước 2 - cộng STBH của các đơn đó. Bước 3 - chia tỷ lệ. Mắc cạn 4 triệu: chỉ đơn 1 và 3 tham gia (tổng 10 triệu), ĐBH 1 trả 4 x 6/10 = 2,4 triệu; ĐBH 3 trả 4 x 4/10 = 1,6 triệu. Cháy toàn bộ: cả 3 đơn tham gia (tổng 12 triệu), bồi thường tối đa bằng GTBH 9 triệu, nên ĐBH 1 trả 9 x 6/12 = 4,5 triệu; ĐBH 2 trả 9 x 2/12 = 1,5 triệu; ĐBH 3 trả 9 x 4/12 = 3 triệu."
      },
      {
            "type": "table",
            "title": "Mức miễn thường (franchise) và mức khấu trừ (deductible)",
            "head": [
                  "Loại",
                  "Cách tính",
                  "Ví dụ tổn thất 8.000 USD, mức 5.000 USD"
            ],
            "rows": [
                  [
                        "Miễn thường KHÔNG khấu trừ",
                        "Khiếu nại vượt mức thì trả ĐỦ số tiền khiếu nại hợp lệ.",
                        "Bồi thường 8.000 USD."
                  ],
                  [
                        "Miễn thường CÓ khấu trừ (= mức khấu trừ)",
                        "Trả phần CHÊNH LỆCH vượt quá mức. Bảo hiểm hàng hải chủ yếu dùng loại này.",
                        "Bồi thường 8.000 - 5.000 = 3.000 USD."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mục đích của mức miễn thường",
            "text": "Hạn chế khiếu nại nhỏ lặt vặt để giảm chi phí xử lý bồi thường, và điều chỉnh tỷ lệ tổn thất xấu. Nếu tổn thất 2.000 USD mà mức là 5.000 USD thì CẢ HAI loại đơn đều không bồi thường."
      },
      {
            "type": "table",
            "title": "Đoan kết (warranty) - cam kết của người được bảo hiểm",
            "head": [
                  "Loại",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Đoan kết MẶC NHIÊN (implied)",
                        "Không cần ghi trên đơn bảo hiểm. Có ĐÚNG BA: tính hợp pháp (legality), trung lập (neutrality) và khả năng đi biển (seaworthiness)."
                  ],
                  [
                        "Đoan kết MINH THỊ (express) - Đ.35 MIA",
                        "Bất kỳ câu chữ nào thể hiện ý định cam kết, PHẢI được bao gồm trong đơn bảo hiểm (viết, in, đánh máy hoặc đính kèm). Không loại trừ đoan kết mặc nhiên trừ khi mâu thuẫn."
                  ],
                  [
                        "Ví dụ đoan kết minh thị",
                        "Giới hạn khu vực hoạt động; không dùng móc khi làm hàng; phương tiện luôn được canh gác; quy định về giám định; yêu cầu người cụ thể làm thuyền trưởng; cấm kéo tàu trừ khi là tập quán hoặc tàu cần trợ giúp."
                  ],
                  [
                        "Hậu quả vi phạm (Đ.33 MIA)",
                        "Đoan kết phải được tuân thủ CHÍNH XÁC, bất kể có trọng yếu với rủi ro hay không. Khi bị vi phạm, NBH được GIẢI PHÓNG TRÁCH NHIỆM KỂ TỪ NGÀY VI PHẠM, trừ khi NBH đã bãi miễn."
                  ],
                  [
                        "Ngoại lệ được bỏ qua vi phạm",
                        "Hoàn cảnh thay đổi làm đoan kết không còn phù hợp; hoặc tuân thủ đoan kết trở thành bất hợp pháp theo luật ban hành sau."
                  ],
                  [
                        "Luật Bảo hiểm Anh 2015",
                        "Nới lỏng: NBH chỉ có quyền từ chối khi vi phạm đoan kết DẪN ĐẾN việc gia tăng nguy cơ phát sinh tổn thất."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Đoan kết về khả năng đi biển (seaworthiness) - Điều 39 MIA",
            "head": [
                  "Loại đơn",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Đơn bảo hiểm CHUYẾN",
                        "CÓ đoan kết mặc nhiên: vào thời điểm bắt đầu chuyến đi, tàu phải đủ khả năng đi biển cho mục đích phiêu trình được bảo hiểm. Tàu đi nhiều công đoạn thì phải đủ khả năng cho MỖI công đoạn."
                  ],
                  [
                        "Đơn bảo hiểm ĐỊNH HẠN",
                        "KHÔNG có đoan kết mặc nhiên. Nhưng nếu tàu ra biển khi không đủ khả năng đi biển mà CHỈ NĐBH BIẾT thì NBH không có trách nhiệm bồi thường."
                  ],
                  [
                        "Phạm vi đoan kết",
                        "Chỉ áp dụng với TÀU: thân vỏ, máy móc, trang thiết bị, thuyền viên, cách xếp hàng (quá tải)."
                  ],
                  [
                        "Điều 325(1)(a) BLHH",
                        "Tàu không đủ khả năng đi biển vào thời điểm bắt đầu chuyến đi thì NBH được MIỄN TRÁCH NHIỆM."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Quy định đặc biệt với đơn bảo hiểm chuyến",
            "head": [
                  "Điều MIA",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Đ.42",
                        "Chuyến đi phải thực hiện trong thời gian hợp lý, nếu không NBH được từ chối hợp đồng."
                  ],
                  [
                        "Đ.43-44",
                        "Đơn bảo hiểm chuyến KHÔNG có hiệu lực nếu tàu chạy TỪ hoặc ĐẾN không đúng địa điểm ghi trên đơn."
                  ],
                  [
                        "Đ.45, 46, 47, 48",
                        "NBH được giải phóng trách nhiệm khi: nơi đến thay đổi sau khi rủi ro có hiệu lực; chệch hướng không hợp lý; chậm trễ thực hiện chuyến đi."
                  ],
                  [
                        "Đ.49 - lý do hợp lý",
                        "Chệch hướng/chậm trễ được chấp nhận nếu: đơn quy định khác; ngoài tầm kiểm soát của thuyền trưởng và chủ tàu; tuân thủ đoan kết; vì an toàn tàu/đối tượng bảo hiểm; cứu nhân mạng; trợ giúp y tế; manh động của thuyền viên. Điều kiện: sau khi chệch hướng tàu phải khẩn trương quay lại đường đi kế hoạch."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân loại tổn thất trong bảo hiểm thân tàu",
            "head": [
                  "Loại tổn thất",
                  "Định nghĩa",
                  "Điểm phải nhớ"
            ],
            "rows": [
                  [
                        "TTTBTT - Tổn thất toàn bộ thực tế (Đ.333(2) BLHH, Đ.57 MIA)",
                        "Tàu, hàng bị phá hủy, hư hỏng toàn bộ không phục hồi được, hoặc tàu mất tích cùng hàng hóa.",
                        "KHÔNG cần tuyên bố từ bỏ. Bồi thường: đơn định giá trả giá trị thỏa thuận, đơn không định giá trả giá trị có thể bảo hiểm."
                  ],
                  [
                        "TTTBUT - Tổn thất toàn bộ ước tính (Đ.60 MIA, Đ.333(1) BLHH)",
                        "Đối tượng bảo hiểm được từ bỏ hợp lý vì tổn thất toàn bộ thực tế không thể tránh khỏi, hoặc chi phí sửa chữa/phục hồi vượt quá giá trị tàu SAU KHI SỬA CHỮA.",
                        "BẮT BUỘC gửi tuyên bố từ bỏ trước khi đòi bồi thường. Không gửi thì chỉ được coi là tổn thất bộ phận."
                  ],
                  [
                        "Tổn thất bộ phận (Đ.56 MIA)",
                        "Bất kỳ tổn thất nào không phải tổn thất toàn bộ.",
                        "Gồm tổn thất riêng, chi phí cứu hộ, chi phí dịch vụ có bản chất cứu hộ."
                  ],
                  [
                        "Tổn thất riêng - PA (Đ.64 MIA)",
                        "Tổn thất bộ phận gây bởi một hiểm họa được bảo hiểm và KHÔNG phải tổn thất chung.",
                        "Ngẫu nhiên, ai bị nấy chịu."
                  ],
                  [
                        "Tổn thất chung - GA (Đ.66 MIA, Đ.292 BLHH)",
                        "Hy sinh hoặc chi phí BẤT THƯỜNG, thực hiện TỰ NGUYỆN và HỢP LÝ, CÓ CHỦ Ý, vì an toàn CHUNG của phiêu trình.",
                        "Nhiều bên cùng đóng góp. Chỉ xảy ra trên biển."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân biệt tổn thất riêng và tổn thất chung",
            "head": [
                  "Tiêu chí",
                  "Tổn thất riêng (PA)",
                  "Tổn thất chung (GA)"
            ],
            "rows": [
                  [
                        "Tính chất",
                        "Ngẫu nhiên, bất ngờ",
                        "CÓ CHỦ Ý"
                  ],
                  [
                        "Ai gánh chịu",
                        "Tổn thất của ai người đó tự gánh chịu",
                        "Nhiều bên cùng đóng góp"
                  ],
                  [
                        "Nơi xảy ra",
                        "Có thể xảy ra bất kỳ đâu",
                        "CHỈ xảy ra trên biển"
                  ],
                  [
                        "Nguyên nhân",
                        "Gây bởi một hiểm họa được bảo hiểm",
                        "Dùng để NGĂN NGỪA một hiểm họa được bảo hiểm"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Tuyên bố từ bỏ (notice of abandonment)",
            "head": [
                  "Nội dung",
                  "Theo MIA (Đ.62)",
                  "Theo BLHH (Đ.330, 332)"
            ],
            "rows": [
                  [
                        "Hình thức",
                        "Bằng miệng, bằng văn bản hoặc cả hai. KHÔNG kèm điều kiện nào.",
                        "Bắt buộc BẰNG VĂN BẢN. Không kèm điều kiện nào."
                  ],
                  [
                        "Thời hạn gửi",
                        "Mẫn cán hợp lý, trong khoảng thời gian hợp lý.",
                        "Không quá 180 NGÀY kể từ khi biết sự kiện làm căn cứ từ bỏ; hoặc 60 NGÀY kể từ khi đơn hết hạn nếu bị tước đoạt/mất quyền chiếm hữu."
                  ],
                  [
                        "NBH trả lời",
                        "Có thể chấp nhận minh thị hay mặc nhiên. IM LẶNG KHÔNG được xem là chấp nhận.",
                        "Phải trả lời BẰNG VĂN BẢN trong 30 NGÀY, nếu không sẽ MẤT quyền từ chối."
                  ],
                  [
                        "Khi đã chấp nhận",
                        "Tuyên bố từ bỏ KHÔNG THỂ RÚT LẠI.",
                        "Quyền và nghĩa vụ với đối tượng bảo hiểm chuyển ngay cho NBH."
                  ],
                  [
                        "Khi NBH từ chối",
                        "NĐBH không bị phương hại.",
                        "NĐBH vẫn có quyền đòi bồi thường tổn thất (bộ phận)."
                  ],
                  [
                        "Với nhà tái bảo hiểm",
                        "NBH KHÔNG cần gửi tuyên bố từ bỏ cho nhà tái.",
                        "-"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bẫy tàu mất tích theo đơn định hạn",
            "text": "Điều 333(3) BLHH: tàu mất tích được bảo hiểm ĐỊNH HẠN thì CHỈ bồi thường nếu nhận được thông tin cuối cùng của tàu TRƯỚC khi hết hạn bảo hiểm. Nếu chứng minh được tàu mất tích SAU khi hết hạn bảo hiểm thì KHÔNG bồi thường. Thực tế NBH thường TỪ CHỐI tuyên bố từ bỏ."
      },
      {
            "type": "table",
            "title": "Phương pháp bồi thường tổn thất bộ phận tàu - Điều 69 MIA",
            "head": [
                  "Tình huống",
                  "Cách bồi thường"
            ],
            "rows": [
                  [
                        "Đã sửa chữa xong",
                        "Chi phí sửa chữa hợp lý TRỪ mức khấu trừ, nhưng không vượt quá số tiền bảo hiểm cho mỗi sự cố."
                  ],
                  [
                        "Sửa chữa MỘT PHẦN",
                        "Chi phí sửa chữa như trên CỘNG phần giảm giá trị của các bộ phận chưa sửa, miễn tổng số tiền bồi thường không vượt quá tổng chi phí sửa chữa."
                  ],
                  [
                        "CHƯA sửa chữa",
                        "Bồi thường phần GIẢM GIÁ TRỊ do hư hỏng, nhưng không vượt quá tổng chi phí sửa chữa tính như trên."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Tổn thất chung và cứu hộ - Điều 10 ITC Hulls 1995",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Chi phí đưa vào TTC khi mắc cạn",
                        "Hư hại tàu/máy do cố gắng làm nổi tàu; hàng vứt xuống biển hoặc buộc dỡ khỏi tàu; chi phí cứu hộ; chi phí dỡ - lưu kho - xếp lại hàng; chi phí ra vào cảng lánh nạn; cảng phí; phí đại lý; lương và phụ cấp thuyền viên; nhiên liệu tiêu thụ tại cảng lánh nạn."
                  ],
                  [
                        "Chi phí đưa vào TTC khi cháy",
                        "Tổn thất tàu và hàng do NỖ LỰC CHỮA CHÁY gây ra; chi phí vào cảng lánh nạn; chi phí cứu hộ."
                  ],
                  [
                        "KHÔNG được tính vào TTC (Đ.292 BLHH)",
                        "Thiệt hại môi trường do ô nhiễm; tiền phạt; tổn thất và chi phí do CHẬM TRỄ; các thiệt hại GIÁN TIẾP."
                  ],
                  [
                        "Ai phân bổ",
                        "Các LÝ TOÁN VIÊN (average adjusters) do CHỦ TÀU chỉ định thực hiện."
                  ],
                  [
                        "Căn cứ phân bổ",
                        "Theo quy tắc York-Antwerp, trên cơ sở GIÁ TRỊ ĐÓNG GÓP (contributory value) - giá trị riêng thực tế của tài sản."
                  ],
                  [
                        "Điều 20 YAR",
                        "2% hoa hồng (commission) trên các khoản chi tiêu TTC, KHÔNG bao gồm lương và phụ cấp thuyền viên."
                  ],
                  [
                        "Điều 21 YAR",
                        "7% lãi suất/năm trên các khoản chi tiêu tổn thất chung."
                  ],
                  [
                        "Bồi thường của bảo hiểm (Đ.73 MIA)",
                        "Bồi thường TOÀN BỘ đóng góp TTC nếu bảo hiểm đúng giá; bồi thường theo tỷ lệ STBH/GTBH nếu bảo hiểm dưới giá."
                  ],
                  [
                        "Quyền đòi thẳng",
                        "NĐBH có quyền đòi thẳng phần HY SINH tổn thất chung mà không cần chờ kết quả phân bổ."
                  ],
                  [
                        "Bảo lãnh TTC (Đ.328 BLHH)",
                        "NBH phải ký bảo lãnh tổn thất chung ĐẾN số tiền bảo hiểm."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bài mẫu phân bổ tổn thất chung",
            "text": "Chủ tàu chi 15.000 USD (sửa máy khi làm nổi tàu 2.500 + dỡ và xếp lại hàng 1.000 + cứu hộ 11.500). Chủ hàng mất 6.000 USD (hàng vứt xuống biển 5.000 + hàng hỏng do dỡ bắt buộc 1.000). Tổng TTC = 21.000 USD. Giá trị đóng góp: tàu 70.000, hàng 140.000, tổng 210.000. Tàu đóng góp 21.000 x 70/210 = 7.000; hàng đóng góp 21.000 x 140/210 = 14.000. Cân bằng: chủ tàu nhận 15.000 - 7.000 = 8.000; chủ hàng nhận 6.000 - 14.000 = phải đóng thêm 8.000. Nếu tàu bảo hiểm 50.000 trên giá trị 70.000 với mức khấu trừ 1.000 thì bảo hiểm thân tàu trả 7.000 x 50/70 - 1.000 = 4.000 USD."
      },
      {
            "type": "table",
            "title": "Chi phí cứu hộ (salvage charges) - Điều 65 MIA",
            "head": [
                  "Tình huống",
                  "Xếp loại và kết quả"
            ],
            "rows": [
                  [
                        "Cứu hộ thuần túy (pure salvage)",
                        "Người cứu hộ KHÔNG lệ thuộc hợp đồng nào vẫn thu đòi được tiền công theo Luật hàng hải. Thường dùng mẫu LOF của Lloyd’s, nguyên tắc \"Không cứu được - Không trả tiền\"."
                  ],
                  [
                        "Thuyền trưởng gọi tàu lai kéo với giá ấn định",
                        "Là \"chi phí dịch vụ có bản chất cứu hộ\": coi là TỔN THẤT CHUNG nếu có từ 2 quyền lợi trở lên, hoặc chi phí NGĂN NGỪA VÀ HẠN CHẾ TỔN THẤT nếu tàu chạy không hàng."
                  ],
                  [
                        "Thuyền trưởng phát tín hiệu SOS gọi cứu hộ khẩn cấp",
                        "Là cứu hộ: người cứu hộ hưởng tiền thưởng tính trên giá trị tài sản cứu được khi đã giao tại nơi an toàn. Chi phí do NBH tài sản chi trả."
                  ],
                  [
                        "Tàu được bảo hiểm ĐI CỨU HỘ tàu khác theo hợp đồng mà không thông báo cho NBH",
                        "VI PHẠM đoan kết, bảo hiểm KẾT THÚC ngay từ thời điểm vi phạm."
                  ],
                  [
                        "Tàu được bảo hiểm ĐƯỢC tàu khác kéo về cảng an toàn đầu tiên mà không thông báo cho NBH",
                        "KHÔNG vi phạm đoan kết."
                  ],
                  [
                        "Hết hạn bảo hiểm khi tàu đang ở ngoài biển hoặc đang nguy hiểm",
                        "Tàu KHÔNG được tự động bảo hiểm tới cảng kế tiếp an toàn NẾU KHÔNG khai báo trước với NBH khi kết thúc thời hạn bảo hiểm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Chi phí ngăn ngừa và hạn chế tổn thất (sue and labour) - Điều 11 ITC Hulls 95",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Bổn phận",
                        "NĐBH, người thừa nhiệm, đại lý có bổn phận áp dụng MỌI biện pháp hợp lý để ngăn ngừa và hạn chế tổn thất."
                  ],
                  [
                        "Cách chi trả",
                        "Được trả CỘNG THÊM vào các tổn thất khác, KỂ CẢ tổn thất toàn bộ. NĐBH đòi được ngay cả khi biện pháp KHÔNG THÀNH CÔNG, miễn là biện pháp hợp lý."
                  ],
                  [
                        "KHÔNG phải chi phí sue and labour",
                        "Chi phí tổn thất chung; chi phí cứu hộ liên quan tổn hại môi trường; chi phí tố tụng liên quan vụ đâm va (khởi tố hay bào chữa)."
                  ],
                  [
                        "Khi bảo hiểm dưới giá",
                        "Trách nhiệm về chi phí tố tụng và đề phòng hạn chế tổn thất cũng giảm THEO TỶ LỆ STBH/giá trị thực tế."
                  ],
                  [
                        "Giới hạn (Điều 11.6)",
                        "Không coi là hợp lý nếu chi phí vượt quá SỐ TIỀN BẢO HIỂM của con tàu."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Hai bài tập sue and labour",
            "text": "Bài 1: giá trị tàu 400.000, STBH 300.000, chi phí NN&HCTT 40.000 thì bồi thường 3/4 x 40.000 = 30.000 USD. Bài 2 (có tài sản bán cứu vớt): giá trị 400.000, STBH 300.000, chi phí 40.000, giá trị tài sản bán cứu vớt 10.000. Phần chi phí vượt quá giá trị cứu vớt = 40.000 - 10.000 = 30.000, giảm theo tỷ lệ 30.000 x 300/400 = 22.500; cộng phần bán cứu vớt phải trả đủ 10.000 = tổng 32.500 USD (thay vì 40.000)."
      },
      {
            "type": "table",
            "title": "Thông báo tổn thất - Điều 13 ITC Hulls 1995",
            "head": [
                  "Nội dung",
                  "Thời hạn"
            ],
            "rows": [
                  [
                        "Thông báo tai nạn cho NBH",
                        "NGAY SAU ngày mà NĐBH, chủ tàu hoặc người quản lý biết hoặc phải biết về tổn thất, và TRƯỚC khi giám định để NBH có thể chỉ định giám định viên."
                  ],
                  [
                        "Thời hạn tối đa mất quyền khiếu nại",
                        "Không thông báo trong vòng 12 THÁNG kể từ ngày biết hoặc phải biết về tổn thất thì NBH được bãi miễn trách nhiệm một cách mặc nhiên (trừ khi có thỏa thuận khác bằng văn bản)."
                  ],
                  [
                        "Luật KDBH Việt Nam",
                        "Thời hạn nộp hồ sơ yêu cầu bồi thường là 01 NĂM kể từ ngày xảy ra sự kiện bảo hiểm."
                  ],
                  [
                        "Tổn thất toàn bộ ước tính",
                        "Điều kiện TIÊN QUYẾT là phải có thông báo TỪ BỎ tàu."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Thế quyền - chia tiền lãi thu đòi",
            "text": "Tiền lãi thu đòi được chia giữa NĐBH và NBH theo SỐ NGÀY tương ứng với thời gian mỗi bên gánh chịu, dù số tiền thu đòi cao hơn số tiền bồi thường. Ví dụ: tai nạn ngày 1, NBH bồi thường ngày 120, người thứ ba bồi thường ngày 360, tiền lãi Tòa ấn định cho 360 ngày là 3.600 USD thì NĐBH nhận 120/360 x 3.600 = 1.200 USD, NBH nhận 240/360 x 3.600 = 2.400 USD."
      },
      {
            "type": "table",
            "title": "ITC Hulls 1995 - các hiểm họa được bảo hiểm",
            "head": [
                  "Nhóm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Điều 6.1 - KHÔNG bị chi phối bởi mẫn cán hợp lý",
                        "Hiểm họa của biển, sông, hồ hoặc vùng nước khác; cháy, nổ; trộm cắp bạo lực bởi người ngoài tàu; vứt xuống biển (jettison); cướp biển; va chạm với phương tiện vận tải trên bộ, ụ tàu hay thiết bị cảng; động đất, núi lửa phun, sét đánh; tai nạn khi xếp dỡ hàng hóa hoặc nhiên liệu."
                  ],
                  [
                        "Điều 6.2 - BỊ chi phối bởi mẫn cán hợp lý",
                        "6.2.1 nổ nồi hơi, gãy trục, ẩn tỳ; 6.2.2 bất cẩn của thuyền trưởng, sĩ quan, thủy thủ, hoa tiêu; 6.2.3 bất cẩn của người sửa chữa hay người thuê tàu (nếu họ không phải NĐBH); 6.2.4 manh động (barratry) của thuyền viên; 6.2.5 va chạm với máy bay, trực thăng hoặc vật rơi từ đó."
                  ],
                  [
                        "Điều 7 - Nguy cơ ô nhiễm",
                        "Bồi thường thiệt hại của tàu do QUYẾT ĐỊNH CỦA NHÀ NƯỚC buộc phá hủy tàu để ngăn ngừa ô nhiễm. Bắt nguồn từ sự cố tàu TORREY CANYON năm 1967, áp dụng từ 1973. Nếu quyết định đó do NĐBH thiếu mẫn cán hợp lý thì KHÔNG được bảo hiểm. Trách nhiệm ô nhiễm với bên thứ ba thuộc P&I, không thuộc thân tàu."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẫn cán hợp lý - hiểu cho đúng",
            "text": "Điều 6.2 chỉ bồi thường nếu tổn thất KHÔNG phát sinh từ việc THIẾU MẪN CÁN HỢP LÝ của NĐBH, chủ tàu, người quản lý hay giám sát viên trên bờ. Bất cẩn của THUYỀN VIÊN vẫn được bồi thường bình thường (kể cả khi người bất cẩn có cổ phần trong tàu), nhưng bất cẩn của chính NĐBH thì không. Manh động (barratry) là hành động SAI TRÁI CỐ Ý của thuyền trưởng hay thủy thủ nhằm làm thiệt hại cho chủ tàu hoặc người thuê tàu - vẫn được bảo hiểm."
      },
      {
            "type": "table",
            "title": "Trách nhiệm đâm va (RDC) - Điều 8 ITC Hulls 1995",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Nguồn gốc",
                        "Vụ đâm va giữa tàu DEUVAUX và SALVADOR năm 1836."
                  ],
                  [
                        "Mức bảo hiểm",
                        "Bảo hiểm 3/4 (75%) trách nhiệm đâm va. Phần 1/4 còn lại thường do Hội P&I nhận."
                  ],
                  [
                        "Phạm vi 3/4 gồm",
                        "Tổn thất gây cho TÀU KHÁC và tài sản trên đó; thiệt hại kinh doanh của tàu khác; tổn thất chung, cứu hộ của tàu khác; chi phí tố tụng liên quan đâm va."
                  ],
                  [
                        "Giới hạn",
                        "Trách nhiệm đâm va không vượt quá 3/4 GIÁ TRỊ BẢO HIỂM cho mỗi vụ, và được BỔ SUNG THÊM vào bồi thường chính của đơn bảo hiểm (nên tổng có thể vượt số tiền bảo hiểm)."
                  ],
                  [
                        "Phạm vi áp dụng",
                        "Điều khoản đâm va CHỈ áp dụng khi tàu được bảo hiểm đâm va TÀU KHÁC. Đâm vào cầu cảng, phao tiêu, giàn khoan thì không thuộc Điều 8."
                  ],
                  [
                        "Loại trừ (Điều 8.4)",
                        "Bất động sản, động sản, vỏ, máy, trang thiết bị CỦA CHÍNH tàu được bảo hiểm; hàng hóa chở trên tàu được bảo hiểm; tổn thất nhân mạng, thương tật; ô nhiễm do đâm va (trừ tàu khác và tài sản trên đó); các trách nhiệm dân sự khác như chi phí di chuyển, phá hủy, thắp sáng đánh dấu xác tàu đắm."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Phân biệt TỔN THẤT đâm va và TRÁCH NHIỆM đâm va",
            "text": "TỔN THẤT đâm va là tổn thất của CHÍNH tàu được bảo hiểm (vỏ, máy, trang thiết bị) - bồi thường 100% theo đơn thân tàu. TRÁCH NHIỆM đâm va là trách nhiệm với TÀU KHÁC bị tàu được bảo hiểm đâm va - chỉ bồi thường 3/4. Đề hay đánh tráo hai khái niệm này."
      },
      {
            "type": "table",
            "title": "Ba bài tập trách nhiệm đâm va mẫu",
            "head": [
                  "Tình huống",
                  "Tính toán"
            ],
            "rows": [
                  [
                        "STBH 4 triệu, trách nhiệm đâm va 3 triệu",
                        "Bồi thường 3/4 x 3 triệu = 2,25 triệu USD."
                  ],
                  [
                        "STBH 4 triệu, trách nhiệm đâm va 6 triệu",
                        "Bồi thường 3/4 x 4 triệu = 3 triệu USD (bị khống chế bởi 3/4 giá trị bảo hiểm, không phải 3/4 của 6 triệu)."
                  ],
                  [
                        "Tàu chìm tổn thất toàn bộ, STBH 4 triệu, trách nhiệm đâm va 2 triệu",
                        "Tổn thất toàn bộ 4 triệu + 3/4 trách nhiệm đâm va 1,5 triệu = 5,5 triệu USD, VƯỢT số tiền bảo hiểm 4 triệu vẫn đúng vì trách nhiệm đâm va được cộng thêm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Trách nhiệm đơn và trách nhiệm chéo",
            "head": [
                  "Nguyên tắc",
                  "Cách áp dụng"
            ],
            "rows": [
                  [
                        "Trách nhiệm CHÉO (cross liability)",
                        "Mỗi tàu tính trách nhiệm với tàu kia theo tỷ lệ lỗi của mình, hai khoản này KHÔNG bù trừ. Áp dụng khi CẢ HAI tàu đều có lỗi, và/hoặc một hoặc cả hai tàu áp dụng giới hạn trách nhiệm theo luật."
                  ],
                  [
                        "Trách nhiệm ĐƠN (single liability)",
                        "Bù trừ hai khoản trách nhiệm, bên nào lớn hơn thì trả phần chênh lệch."
                  ],
                  [
                        "Vì sao quan trọng",
                        "Theo trách nhiệm chéo, bảo hiểm phải trả NHIỀU HƠN vì tính trên tổng trách nhiệm trước khi bù trừ. Đề hay hỏi \"chủ tàu chịu bao nhiêu\" theo từng nguyên tắc."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bài mẫu đâm va - tàu A lỗi 40%, tàu B lỗi 60%",
            "text": "Tổn thất đâm va: tàu A 200K, tàu B 400K. TRÁCH NHIỆM CHÉO: A chịu trách nhiệm 400K x 40% = 160K; B chịu trách nhiệm 200K x 60% = 120K. TRÁCH NHIỆM ĐƠN: A trả B phần chênh 160K - 120K = 40K. Theo trách nhiệm đơn, chủ tàu A chịu 170K và chủ tàu B chịu 360K. Theo trách nhiệm chéo, bảo hiểm bồi thường cho A là 200K (80K tổn thất + 120K là 3/4 của 160K) và chủ tàu A chỉ chịu 40K; bảo hiểm bồi thường cho B là 330K (240K + 90K là 3/4 của 120K) và chủ tàu B chỉ chịu 30K."
      },
      {
            "type": "table",
            "title": "Điều 9 - Tàu cùng chủ (sistership)",
            "head": [
                  "Nội dung",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Định nghĩa",
                        "Các tàu có CÙNG quyền sở hữu hoặc CÙNG quyền quản lý."
                  ],
                  [
                        "Vấn đề pháp lý",
                        "Khi tàu cùng chủ đâm va hoặc cứu hộ cho nhau thì về mặt pháp lý KHÔNG phát sinh trách nhiệm của chủ tàu với chính mình (trừ tổn thất của chủ hàng)."
                  ],
                  [
                        "Điều khoản giải quyết",
                        "Coi các tàu cùng chủ như có quyền sở hữu/quản lý RIÊNG BIỆT, có quyền và nghĩa vụ như tàu khác chủ. Việc phân định trách nhiệm do TRỌNG TÀI (arbitrator) thực hiện."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Thế quyền - ba tình huống thu đòi người thứ ba",
            "head": [
                  "Tình huống",
                  "Kết quả"
            ],
            "rows": [
                  [
                        "Tổn hại 19.000, mức khấu trừ 20.000, thu đòi được 10.000",
                        "NBH KHÔNG bồi thường (dưới mức khấu trừ) nên KHÔNG được hưởng gì trên số tiền thu đòi."
                  ],
                  [
                        "Tổn hại 120.000, mức khấu trừ 20.000, thu đòi được 102.000",
                        "NBH đã bồi thường 100.000 nên nhận lại đúng 100.000; NĐBH nhận phần dư 2.000."
                  ],
                  [
                        "Tổn hại 120.000, mức khấu trừ 20.000, thu đòi được 15.000",
                        "NBH nhận TẤT CẢ 15.000, bất kể NĐBH đã phải gánh mức khấu trừ 20.000."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Nguyên tắc vàng của thế quyền",
            "text": "NBH chỉ được quyền thu đòi TỚI số tiền bồi thường đã chi trả - không hơn. Nhưng nếu số thu đòi ít hơn số đã bồi thường thì NBH lấy hết, NĐBH không được ưu tiên bù mức khấu trừ."
      },
      {
            "type": "table",
            "title": "Bảo hiểm thân tàu và bảo hiểm P&I - so sánh",
            "head": [
                  "Tiêu chí",
                  "Thân tàu",
                  "P&I (tương hỗ)"
            ],
            "rows": [
                  [
                        "Đối tượng bảo hiểm",
                        "Vỏ tàu, máy móc, cước phí",
                        "Trách nhiệm pháp lý của chủ tàu"
                  ],
                  [
                        "Chủ thể hợp đồng",
                        "Chủ tàu và người bảo hiểm",
                        "CÁC CHỦ TÀU với nhau"
                  ],
                  [
                        "Cách tính phí",
                        "Cố định",
                        "Tương hỗ"
                  ],
                  [
                        "Mục tiêu kinh doanh",
                        "Vì lợi nhuận",
                        "PHI lợi nhuận"
                  ],
                  [
                        "Giới hạn trách nhiệm",
                        "Số tiền bảo hiểm",
                        "KHÔNG giới hạn, riêng ô nhiễm giới hạn 1 TỶ USD"
                  ],
                  [
                        "Dịch vụ",
                        "Bồi thường",
                        "BẢO VỆ và bồi thường"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Các loại phí bảo hiểm P&I",
            "head": [
                  "Loại phí",
                  "Tỷ lệ và thời điểm"
            ],
            "rows": [
                  [
                        "Phí đóng trước (Advance call)",
                        "Thông báo từ đầu năm bảo hiểm trên cơ sở tỷ lệ tổn thất kết hợp. Chiếm 66,66% - 75% tổng phí dự kiến, chia 2 đến 4 kỳ."
                  ],
                  [
                        "Phí đóng sau (Supplementary call)",
                        "Tính theo kết quả quyết toán năm nghiệp vụ để cân bằng thu chi của Hội. Chiếm 25% - 33,34%, thường thu SAU 2 NĂM."
                  ],
                  [
                        "Phí vượt mức tái bảo hiểm (Overspill call)",
                        "Thu để bồi thường các khiếu nại VƯỢT QUÁ giới hạn hợp đồng tái bảo hiểm của Nhóm hội quốc tế."
                  ],
                  [
                        "Phí giải trách (Release call)",
                        "Chi phí giải phóng các trách nhiệm chưa hoàn thành khi chủ tàu CẮT bảo hiểm. Thường bằng 15% phí bảo hiểm năm."
                  ],
                  [
                        "Tổng phí dự kiến (ETC)",
                        "ETC = Advance call + Supplementary call + phí tái bảo hiểm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân loại và điều kiện tham gia bảo hiểm TNDS chủ tàu",
            "head": [
                  "Nội dung",
                  "Chi tiết"
            ],
            "rows": [
                  [
                        "Theo phương pháp tính phí",
                        "Phí cố định (fixed premium) và phí tương hỗ (mutual premium)."
                  ],
                  [
                        "Theo tính chất trách nhiệm",
                        "P&I; FD&D (Freight, Demurrage and Defence - cước phí, phạt lưu trì và biện hộ); bảo hiểm đình công của thuyền viên; đình công của cảng; bảo hiểm đặc biệt (P&I cho người thuê tàu, điều khoản mở rộng MLC 2016, trách nhiệm người cứu hộ)."
                  ],
                  [
                        "Điều kiện tham gia Hội P&I",
                        "Tàu phải được PHÂN CẤP và duy trì phân cấp suốt thời gian tham gia; tuân thủ đầy đủ công ước quốc tế về an ninh, an toàn, phòng ngừa ô nhiễm; Hội có thể chỉ định giám định toàn diện trước khi nhận bảo hiểm hay gia hạn."
                  ],
                  [
                        "Công thức tính phí P&I",
                        "P = GT x R, trong đó GT là dung tích đăng ký toàn phần, R là tỷ lệ phí."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bốn câu ôn tập P&I hay ra đề",
            "text": "(1) Hội P&I tương hỗ là tổ chức PHI lợi nhuận - phát biểu \"kinh doanh thuần túy vì lợi nhuận\" là SAI. (2) Trách nhiệm đối với tổn thất KHÔNG do va chạm (tổn hại tàu khác hay hàng trên đó do lỗi tàu được bảo hiểm dù không va chạm trực tiếp) - phát biểu này ĐÚNG, thuộc P&I. (3) Hội viên P&I CÓ quyền đòi bồi thường khi tàu được bảo hiểm gây ô nhiễm, nhiễm bẩn cho tài sản CỦA CHÍNH hội viên. (4) Đối tượng của P&I KHÔNG bao gồm tổn thất thân tàu của chính tàu được bảo hiểm - phần đó thuộc đơn thân tàu."
      },
      {
            "type": "table",
            "title": "Phạm vi và loại trừ của bảo hiểm TNDS chủ tàu trong nước",
            "head": [
                  "Nhóm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Nguyên tắc hoạt động",
                        "PHI tương hỗ, tính phí CỐ ĐỊNH, giới hạn trách nhiệm theo số tiền bảo hiểm thỏa thuận trên đơn. Do các công ty bảo hiểm trong nước cung cấp (Bảo Việt, Bảo Minh, PVI, PTI, PJICO, MIC...)."
                  ],
                  [
                        "Trách nhiệm NGOÀI hợp đồng",
                        "Thiệt hại tài sản của người thứ ba; thương tật, thiệt hại sinh mạng của người thứ ba; trách nhiệm đâm va với tàu khác; chi phí xử lý ô nhiễm dầu; chi phí xử lý xác tàu được bảo hiểm bị đắm; chi phí ngăn ngừa hạn chế tổn thất; chi phí tố tụng."
                  ],
                  [
                        "Trách nhiệm THEO hợp đồng",
                        "Với hàng hóa, hành khách, thuyền viên và lai dắt."
                  ],
                  [
                        "Loại trừ chính",
                        "Tàu không đủ điều kiện hoạt động; cố ý của NĐBH, đại lý, đại diện hoặc thuyền viên; hành vi bị cấm, kinh doanh trái phép; không tuân thủ định biên, chứng chỉ chuyên môn; thuyền viên dùng rượu bia, ma túy; vi phạm pháp luật hàng hải, chở quá tải, đi luồng cấm; tàu NẰM CẠN BỞI THỦY TRIỀU; tàu đậu bến không neo buộc chắc chắn, không có người trực; mọi tổn thất do CHẬM TRỄ; mọi số tiền ĐÃ được bảo hiểm theo đơn thân tàu."
                  ],
                  [
                        "Loại trừ khác",
                        "Tiền cước vận chuyển hoặc tiền cho thuê tàu; chi phí thu thập hồ sơ khiếu nại; tiền mặt, giấy tờ có giá, kim loại quý, đá quý; chuyên chở SÚC VẬT SỐNG; chiến tranh và rủi ro tương tự; tàu bị cướp, bị bắt giữ; bị trưng dụng hoặc dùng vào mục đích quân sự; khủng bố, phá hoại chính trị; nổ vũ khí, chất nổ; rủi ro hạt nhân."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Bảo hiểm thân tàu sông, tàu ven biển - Điều kiện A và B",
            "head": [
                  "Điều kiện",
                  "Phạm vi"
            ],
            "rows": [
                  [
                        "Điều kiện B (chỉ TỔN THẤT TOÀN BỘ)",
                        "Tổn thất TOÀN BỘ gây bởi: đâm va, va chạm đá hay vật thể, mắc cạn; bão tố lốc, sóng thần, mưa đá, giông địa phương; cháy nổ; mất tích; động đất, sụt lở, núi lửa phun, sét đánh; tai nạn khi xếp dỡ di chuyển hàng hóa nhiên liệu; sơ suất của thuyền trưởng, sĩ quan, thủy thủ, hoa tiêu, người sửa chữa (nếu họ không phải NĐBH). Kèm chi phí ngăn ngừa hạn chế tổn thất và nguy cơ ô nhiễm."
                  ],
                  [
                        "Điều kiện A (bảo hiểm ĐẦY ĐỦ)",
                        "Tổn thất TOÀN BỘ HOẶC BỘ PHẬN do các rủi ro của điều kiện B, CỘNG THÊM: vứt bỏ khỏi tàu (jettison); nổ nồi hơi, gãy trục cơ, ẩn tỳ. Kèm chi phí ngăn ngừa hạn chế tổn thất, trợ giúp, cứu hộ, tố tụng, kiểm tra đáy tàu và nguy cơ ô nhiễm."
                  ],
                  [
                        "Điểm giống nhau",
                        "Nguy cơ ô nhiễm áp dụng cho CẢ HAI điều kiện A và B."
                  ],
                  [
                        "Điểm khác nhau cốt lõi",
                        "Tổn thất BỘ PHẬN chỉ áp dụng cho điều kiện A, KHÔNG áp dụng cho điều kiện B."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Đặc thù bồi thường tàu sông, tàu ven biển",
            "head": [
                  "Nội dung",
                  "Phải nhớ"
            ],
            "rows": [
                  [
                        "Luật chi phối",
                        "Luật Giao thông đường thủy nội địa 2004 (trừ tàu VR III). Về bảo hiểm thì dùng chủ yếu Luật Kinh doanh Bảo hiểm."
                  ],
                  [
                        "Không có cơ sở pháp lý",
                        "Đơn định giá và không định giá, tổn thất toàn bộ thực tế và ước tính, tổn thất chưa sửa chữa, tổn thất liên tiếp - phải quy định trong điều khoản hoặc trên đơn bảo hiểm."
                  ],
                  [
                        "Trách nhiệm đâm va",
                        "Áp dụng BỘ LUẬT DÂN SỰ (không phải Bộ luật Hàng hải)."
                  ],
                  [
                        "Tổn thất chung",
                        "KHÔNG áp dụng cho tàu sông, tàu ven biển (trừ VR III)."
                  ],
                  [
                        "Điều khoản \"Mới thay cũ\"",
                        "KHÔNG có, nên bồi thường tổn thất bộ phận ĐỀU PHẢI áp dụng khấu hao tài sản."
                  ],
                  [
                        "Chi phí điều hành (disbursements)",
                        "KHÔNG có trong điều khoản bảo hiểm thân tàu sông, ven biển."
                  ],
                  [
                        "Mở rộng phạm vi",
                        "Lai dắt, trợ giúp tàu gặp nạn; đâm va hoặc được cứu hộ bởi tàu cùng chủ; mở rộng vùng hoạt động (Campuchia, Nam Trung Quốc); thay đổi ngày khởi hành với bảo hiểm chuyến; xếp dỡ ngoài biển; rủi ro chiến tranh, đình công."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Checklist 15 con số phải thuộc lòng",
            "items": [
                  "MIA 1906: 17 mục, 94 điều, 2 phụ lục, 17 quy tắc giải nghĩa.",
                  "Bộ luật Hàng hải 2015: hiệu lực 01/7/2017, 20 chương, 341 điều; Chương XVIII có 8 mục, 34 điều.",
                  "Trách nhiệm đâm va theo Điều 8 ITC Hulls: 3/4 (75%), tối đa 3/4 giá trị bảo hiểm mỗi vụ.",
                  "Tuyên bố từ bỏ theo BLHH: không quá 180 ngày kể từ khi biết sự kiện, hoặc 60 ngày kể từ khi đơn hết hạn nếu bị tước quyền chiếm hữu.",
                  "NBH trả lời tuyên bố từ bỏ: 30 ngày bằng văn bản, quá hạn mất quyền từ chối.",
                  "Thông báo tổn thất theo ITC Hulls 13.1: không quá 12 tháng kể từ ngày biết hoặc phải biết.",
                  "Thời hạn nộp hồ sơ yêu cầu bồi thường theo Luật KDBH: 01 năm kể từ ngày xảy ra sự kiện bảo hiểm.",
                  "York-Antwerp Điều 20: 2% hoa hồng trên chi tiêu tổn thất chung (trừ lương thuyền viên).",
                  "York-Antwerp Điều 21: 7% lãi suất/năm trên chi tiêu tổn thất chung.",
                  "Giới hạn trách nhiệm ô nhiễm của Hội P&I tương hỗ: 1 tỷ USD.",
                  "Advance call: 66,66% - 75% tổng phí dự kiến, chia 2 - 4 kỳ.",
                  "Supplementary call: 25% - 33,34%, thường thu sau 2 năm.",
                  "Release call: khoảng 15% phí bảo hiểm năm.",
                  "Công thức phí P&I: P = GT x R.",
                  "Sự cố TORREY CANYON 1967 (117 nghìn tấn) dẫn tới điều khoản nguy cơ ô nhiễm áp dụng từ 1973."
            ]
      }
]
  },
  {
    id: "hang-hoa",
    title: "Bảo hiểm hàng hóa vận chuyển (nâng cao)",
    badge: "Nâng cao",
    summary: "Luật chi phối, 110% CIF, Incoterms, ICC 1982 A/B/C, tổn thất riêng - tổn thất chung, giám định, bồi thường và đòi người thứ ba.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM HÀNG HÓA VẬN CHUYỂN & ICC A/B/C",
            "text": "Quy tắc vàng bảo hiểm hàng hóa quốc tế:\n• ĐIỀU KHOẢN ICC 1982: Điều kiện A (mọi rủi ro - rộng nhất), Điều kiện B (rủi ro nêu tên mở rộng), Điều kiện C (rủi ro cơ bản - hẹp nhất).\n• GIÁ TRỊ BẢO HIỂM TIÊU CHUẨN: 110% CIF (trong đó 10% là lãi ước tính của người mua hàng).\n• THỜI HẠN BẢO HIỂM: Từ kho đến kho (Warehouse to Warehouse), kết thúc khi dỡ hàng an toàn tại kho người nhận hoặc sau 60 NGÀY kể từ khi dỡ khỏi tàu tại cảng đến (tùy mốc nào đến trước).",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đọc trước: chương này thuộc kỳ thi nâng cao",
            "tone": "warn",
            "text": "Toàn bộ nội dung bám tài liệu \"TÀI LIỆU THI CC 07/2026 - BH hàng hóa\" (163 slide, 4 chương). Bộ đề cũ 610 câu gần như KHÔNG có câu nào về bảo hiểm hàng hóa đường biển, nên phần này gần như hoàn toàn mới. Câu hỏi luyện tập nằm ở ngân hàng \"Nâng cao\"."
      },
      {
            "type": "table",
            "title": "Chữ viết tắt trong chương này",
            "head": [
                  "Viết tắt",
                  "Nghĩa đầy đủ",
                  "Ghi nhớ"
            ],
            "rows": [
                  [
                        "ICC",
                        "Institute Cargo Clauses - Điều khoản bảo hiểm hàng hóa của Hiệp hội BH Anh",
                        "Bản 1.1.1982 gồm 3 điều kiện A, B, C."
                  ],
                  [
                        "ICC (viết tắt khác)",
                        "International Chamber of Commerce - Phòng Thương mại Quốc tế",
                        "Là cơ quan soạn Incoterms. Đừng nhầm với Institute Cargo Clauses."
                  ],
                  [
                        "MIA 1906",
                        "Marine Insurance Act 1906 - Luật Bảo hiểm Hàng hải Anh",
                        "Điều 57, 58 định nghĩa tổn thất toàn bộ thực tế."
                  ],
                  [
                        "CIF",
                        "Cost, Insurance and Freight",
                        "Giá hàng + cước + phí bảo hiểm. NGƯỜI BÁN mua bảo hiểm."
                  ],
                  [
                        "FOB",
                        "Free On Board",
                        "Giá hàng tại cảng đi. NGƯỜI MUA mua bảo hiểm."
                  ],
                  [
                        "CFR / C&F",
                        "Cost and Freight",
                        "Giá hàng + cước, KHÔNG có bảo hiểm. NGƯỜI MUA mua bảo hiểm."
                  ],
                  [
                        "EXW",
                        "Ex Works - Giao tại xưởng",
                        "Chuyển quyền sở hữu tại kho người bán. NGƯỜI MUA mua bảo hiểm."
                  ],
                  [
                        "PA",
                        "Particular Average - Tổn thất riêng",
                        "Ai bị nấy chịu, không phân bổ."
                  ],
                  [
                        "GA",
                        "General Average - Tổn thất chung",
                        "Hy sinh cố ý vì an toàn chung, các bên cùng đóng góp."
                  ],
                  [
                        "ATL",
                        "Actual Total Loss - Tổn thất toàn bộ thực tế",
                        "Hàng bị hủy hoại/tước đoạt/mất bản chất."
                  ],
                  [
                        "CTL",
                        "Constructive Total Loss - Tổn thất toàn bộ ước tính",
                        "Phải gửi Thông báo từ bỏ hàng."
                  ],
                  [
                        "TPND",
                        "Theft, Pilferage and Non-Delivery",
                        "Mất trộm, mất cắp và/hoặc không giao hàng."
                  ],
                  [
                        "COR / ROROC",
                        "Cargo Outturn Report / Report on Receipt of Cargo",
                        "Biên bản hàng đổ vỡ / biên bản kết toán nhận hàng với tàu."
                  ],
                  [
                        "SDR",
                        "Special Drawing Rights - Quyền rút vốn đặc biệt",
                        "Đơn vị tính giới hạn trách nhiệm người chuyên chở."
                  ],
                  [
                        "IMDG Code",
                        "International Maritime Dangerous Goods Code",
                        "Tiêu chuẩn hàng nguy hiểm, bắt buộc với hóa chất chở rời."
                  ],
                  [
                        "ISM",
                        "Chứng nhận an toàn hàng hải quốc tế",
                        "Là một điều khoản bổ sung trong đơn bảo hiểm hàng hóa."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "1.1. Sáu nguồn luật chi phối bảo hiểm hàng hóa",
            "items": [
                  "Bộ luật Dân sự Việt Nam.",
                  "Bộ luật Hàng hải Việt Nam.",
                  "Luật Kinh doanh bảo hiểm Việt Nam.",
                  "Luật bảo hiểm Hàng hải Anh (MIA 1906).",
                  "Quy tắc của Phòng Thương mại quốc tế (ICC - Incoterms).",
                  "Điều kiện bảo hiểm của Hiệp hội bảo hiểm Anh quốc (Institute Cargo Clauses)."
            ]
      },
      {
            "type": "list",
            "title": "Bốn quy định gốc về bảo hiểm hàng hải cần thuộc",
            "items": [
                  "Nguyên tắc NỀN TẢNG của hợp đồng bảo hiểm hàng hải là trung thực tuyệt đối - áp dụng cho CẢ HAI bên, không chỉ người được bảo hiểm.",
                  "Theo BLHH, người được bảo hiểm phải cung cấp TẤT CẢ thông tin quan trọng có thể ảnh hưởng đến quyết định nhận bảo hiểm, TRỪ thông tin mọi người đều biết hoặc người bảo hiểm đã biết/phải biết.",
                  "Không khai báo thông tin quan trọng -> người bảo hiểm có quyền HỦY BỎ hợp đồng (không phải chỉ tăng phí).",
                  "Hợp đồng có hiệu lực khi: gửi Giấy yêu cầu bảo hiểm VÀ người bảo hiểm xác nhận bằng văn bản; HOẶC khi Đơn bảo hiểm được phát hành."
            ]
      },
      {
            "type": "table",
            "title": "Cam kết (warranty) theo MIA 1906 trong bảo hiểm hàng hóa",
            "head": [
                  "Loại cam kết",
                  "Nội dung",
                  "Ví dụ trong đề"
            ],
            "rows": [
                  [
                        "Cam kết ngầm định",
                        "Cam kết về tính hợp pháp và trách nhiệm khai báo",
                        "Hàng hóa được bảo hiểm không phải là hàng buôn lậu."
                  ],
                  [
                        "Cam kết thể hiện bằng lời văn",
                        "Ghi rõ trong hợp đồng hoặc trên Đơn bảo hiểm",
                        "Tàu phải có bảo hiểm P&I quốc tế hiệu lực suốt hành trình từ cảng đi đến cảng đến; tàu tuân thủ Bộ luật An toàn hàng hải, An ninh hàng hải và Phòng ngừa ô nhiễm."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Hậu quả vi phạm cam kết - câu hay bẫy",
            "text": "Theo MIA 1906, nếu cam kết bị vi phạm, người bảo hiểm có quyền từ chối trách nhiệm KỂ TỪ KHI có vi phạm, và chỉ khi xét thấy vi phạm đó LÀM GIA TĂNG KHẢ NĂNG dẫn đến tổn thất. Không phải hủy hợp đồng từ đầu, cũng không phải giảm bồi thường theo tỷ lệ."
      },
      {
            "type": "table",
            "title": "1.2.4. Giá trị bảo hiểm và Số tiền bảo hiểm",
            "head": [
                  "Khái niệm",
                  "Định nghĩa",
                  "Ghi nhớ"
            ],
            "rows": [
                  [
                        "Giá trị bảo hiểm",
                        "Giá trị lô hàng tham gia bảo hiểm theo hợp đồng mua bán ngoại thương (CIF, FOB, CFR/C&F...), thể hiện trên Invoice của bộ chứng từ",
                        "Gắn với hóa đơn/hợp đồng mua bán."
                  ],
                  [
                        "Số tiền bảo hiểm",
                        "Khoản tiền nhất định ghi trong Đơn bảo hiểm để xác định giới hạn trách nhiệm bồi thường của người bảo hiểm (thường đổi ra giá CIF)",
                        "Gắn với Đơn bảo hiểm."
                  ],
                  [
                        "Số tiền bảo hiểm gồm",
                        "Giá hàng + cước vận chuyển + thuế nhập khẩu + phí bảo hiểm + lãi ước tính",
                        "Theo tập quán: 110% CIF."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Con số vàng: 110% CIF",
            "tone": "warn",
            "text": "Tiền lãi ước tính KHÔNG vượt quá 10% của (tiền hàng + chi phí vận chuyển + phí bảo hiểm), tức 10% trị giá CIF. Nói cách khác số tiền bảo hiểm TỐI ĐA được chấp nhận là 110% trị giá CIF. Nếu số tiền bảo hiểm THẤP HƠN trị giá CIF thì hàng bị coi là bảo hiểm dưới giá trị, bồi thường theo TỶ LỆ giữa số tiền bảo hiểm và giá trị bảo hiểm."
      },
      {
            "type": "list",
            "title": "Giá trị có thể bảo hiểm theo Bộ luật Hàng hải VN",
            "items": [
                  "Giá trị hàng ghi trên Hóa đơn ở nơi bốc hàng, HOẶC giá trị thị trường ở nơi và thời điểm bốc hàng.",
                  "Cộng: phí bảo hiểm.",
                  "Cộng: giá dịch vụ vận chuyển.",
                  "Có thể cộng: tiền lãi ước tính.",
                  "MIA 1906 cũng cho phép bảo hiểm hàng hóa CAO HƠN giá CIF."
            ]
      },
      {
            "type": "table",
            "title": "1.2.5. Tỷ lệ phí bảo hiểm = Tỷ lệ phí chính + Phụ phí",
            "head": [
                  "Thành phần",
                  "Phụ thuộc vào"
            ],
            "rows": [
                  [
                        "Tỷ lệ phí chính",
                        "Điều kiện bảo hiểm, tính chất hàng hóa, phương thức đóng gói."
                  ],
                  [
                        "Phụ phí",
                        "Phí chuyển tải/lõng hàng; phí luồng (theo tuyến vận chuyển); phí chiến tranh, đình công; phí tàu già; phí rủi ro phụ hoặc sửa đổi bổ sung."
                  ],
                  [
                        "Rủi ro phụ gồm",
                        "Trộm cắp và/hoặc không giao hàng; thiếu hàng; thiếu nguyên kiện; thối, mốc, ướt hàng; đổ vỡ, cong bẹp, móp méo."
                  ],
                  [
                        "Khi không xác định được cước",
                        "Tính phí luồng Châu Á hoặc Châu Âu theo tỷ lệ trên giá FOB."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "1.2.6. Mức miễn thường trong bảo hiểm hàng hóa",
            "text": "Quy định bằng tỷ lệ % hoặc bằng số tiền nhất định. Trong bảo hiểm hàng hóa THƯỜNG áp dụng mức miễn thường CÓ KHẤU TRỪ, và áp dụng với hàng chở rời, hàng có khả năng tổn thất cao. Có thể tính bằng tỷ lệ % trên giá trị tổn thất nhưng không thấp hơn một số tiền cụ thể cho mỗi vụ tổn thất."
      },
      {
            "type": "note",
            "title": "1.2.7. Phạm vi bảo hiểm theo ICC 1.1.82 - nguyên tắc \"kho đến kho\"",
            "text": "Bắt đầu: khi hàng ĐÃ XẾP LÊN phương tiện vận chuyển tại nơi đi có tên trên hợp đồng bảo hiểm. Tiếp tục: suốt quá trình vận chuyển bình thường. Kết thúc: khi hàng được DỠ KHỎI phương tiện tại nơi đến có tên trong hợp đồng bảo hiểm (hoặc kết thúc sớm hơn theo điều khoản). Lưu ý phải ghi RÕ nơi đến trên Đơn bảo hiểm."
      },
      {
            "type": "table",
            "title": "1.3. Ba dòng sản phẩm bảo hiểm hàng hóa và điều kiện áp dụng",
            "head": [
                  "Sản phẩm",
                  "Điều kiện bảo hiểm"
            ],
            "rows": [
                  [
                        "Hàng hóa vận chuyển nội địa",
                        "Điều kiện C"
                  ],
                  [
                        "Hàng hóa vận chuyển đường hàng không",
                        "Điều kiện A"
                  ],
                  [
                        "Hàng hóa xuất nhập khẩu vận chuyển đường biển",
                        "Điều kiện A, B hoặc C"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "1.6-1.7. Incoterms: ai mua bảo hiểm, chuyển quyền sở hữu ở đâu",
            "head": [
                  "Điều kiện giá",
                  "Cấu thành giá",
                  "Ai mua bảo hiểm",
                  "Chuyển quyền sở hữu"
            ],
            "rows": [
                  [
                        "CIF, CIP",
                        "Giá hàng tại cảng đi + cước + phí bảo hiểm",
                        "Người BÁN",
                        "Tại phương tiện vận chuyển"
                  ],
                  [
                        "CFR (C&F)",
                        "Giá hàng tại cảng đi + cước",
                        "Người MUA",
                        "Tại phương tiện vận chuyển"
                  ],
                  [
                        "FOB",
                        "Giá hàng tại cảng đi",
                        "Người MUA",
                        "Khi giao hàng cho người chuyên chở và/hoặc lên phương tiện"
                  ],
                  [
                        "EXW",
                        "Giá hàng xuất xưởng",
                        "Người MUA",
                        "Tại kho người bán"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẹo nhớ Incoterms",
            "text": "Chỉ chữ \"I\" (Insurance) trong CIF/CIP mới buộc NGƯỜI BÁN mua bảo hiểm. Còn lại (FOB, CFR, EXW) đều là người MUA. Trong công thức giá CIF: C = giá hàng, F = cước vận tải, R = tỷ lệ phí bảo hiểm. Incoterms do ICC soạn từ năm 1936; bản 2010 là bản đầu tiên đề cập người mua và người bán hoàn toàn bình đẳng."
      },
      {
            "type": "list",
            "title": "Mốc lịch sử hay hỏi",
            "items": [
                  "Vận chuyển đường biển ra đời từ thế kỷ V trước Công nguyên.",
                  "Hợp đồng bảo hiểm hàng hóa xuất hiện đầu tiên năm 1347.",
                  "Tổng công ty bảo hiểm Việt Nam ra đời ngày 15/01/1965; bảo hiểm hàng hóa là một trong những nghiệp vụ đầu tiên được triển khai.",
                  "Incoterms được ICC soạn thảo từ năm 1936."
            ]
      },
      {
            "type": "list",
            "title": "1.4-1.5. Khách hàng và lợi ích",
            "items": [
                  "Khách hàng: người mua/người bán hàng; nhà sản xuất, chế biến; nhà phân phối; công ty vận tải và đại lý giao nhận (logistics); ngân hàng.",
                  "Lợi ích: đảm bảo tài chính khi tổn thất; ổn định chi phí kinh doanh; tạo tâm lý ổn định để mở rộng đầu tư; được hỗ trợ kinh nghiệm/nhân lực/tài chính trong đề phòng hạn chế tổn thất."
            ]
      },
      {
            "type": "table",
            "title": "1.7.1-1.7.2. So sánh ba điều kiện ICC 1.1.82 (A - B - C)",
            "head": [
                  "Rủi ro",
                  "C",
                  "B",
                  "A"
            ],
            "rows": [
                  [
                        "Cháy hoặc nổ",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Tàu, sà lan mắc cạn, nằm cạn, chìm, lật úp",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Phương tiện vận tải bộ lật đổ hoặc trật bánh",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Đâm va với vật thể bên ngoài không kể nước",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Dỡ hàng tại cảng lánh nạn",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Hy sinh tổn thất chung, ném hàng xuống biển",
                        "Có",
                        "Có",
                        "Có"
                  ],
                  [
                        "Nước cuốn khỏi tàu (washing overboard)",
                        "KHÔNG",
                        "Có",
                        "Có"
                  ],
                  [
                        "Động đất, núi lửa phun, sét đánh",
                        "KHÔNG",
                        "Có",
                        "Có"
                  ],
                  [
                        "Nước biển/hồ/sông chảy vào tàu, hầm hàng, container",
                        "KHÔNG",
                        "Có",
                        "Có"
                  ],
                  [
                        "Tổn thất toàn bộ nguyên kiện rơi khỏi tàu khi xếp/dỡ",
                        "KHÔNG",
                        "Có",
                        "Có"
                  ],
                  [
                        "Bể, móp, dịch chuyển hàng (shifting) do biển động",
                        "KHÔNG",
                        "KHÔNG",
                        "Có"
                  ],
                  [
                        "Rủi ro đặc biệt: không giao hàng, giao thiếu, mất cắp, bể vỡ, ướt",
                        "KHÔNG",
                        "KHÔNG",
                        "Có"
                  ],
                  [
                        "Manh động, hành động manh tâm, cướp biển",
                        "KHÔNG",
                        "KHÔNG",
                        "Có"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Điều kiện A: nghĩa vụ chứng minh đảo ngược",
            "tone": "warn",
            "text": "Điều kiện A bảo hiểm MỌI RỦI RO trừ loại trừ. Vì vậy: NGƯỜI BẢO HIỂM phải chứng minh tổn thất thuộc một trong các loại trừ; NGƯỜI ĐƯỢC BẢO HIỂM chỉ cần chứng minh tổn thất là bất ngờ, ngẫu nhiên. Đây là câu rất hay hỏi và rất dễ chọn ngược."
      },
      {
            "type": "list",
            "title": "Ba giới hạn của điều kiện A (dù là \"mọi rủi ro\")",
            "items": [
                  "Chỉ liên quan tổn thất VẬT CHẤT - không bảo hiểm tổn thất về giá trị hay tổn thất thị trường.",
                  "Chỉ bảo hiểm tổn thất/hư hỏng của ĐỐI TƯỢNG được bảo hiểm - không bảo hiểm hư hỏng của các hạng mục khác.",
                  "Vẫn áp dụng đầy đủ các loại trừ chung đã liệt kê trong đơn."
            ]
      },
      {
            "type": "table",
            "title": "Các cặp bẫy hay gặp giữa B và C",
            "head": [
                  "Tình huống",
                  "Xử lý"
            ],
            "rows": [
                  [
                        "Nước cuốn qua lan can tàu (washing overboard)",
                        "Chỉ điều kiện B. Người được bảo hiểm phải chứng minh hàng THỰC SỰ bị cuốn qua lan can, không phải chỉ đơn thuần rơi ra khỏi lan can."
                  ],
                  [
                        "Hàng rơi mất khỏi tàu (loss overboard) khi biển động",
                        "KHÔNG được coi là nước cuốn. Điều kiện B không bảo hiểm hàng xếp trên boong rơi khỏi lan can khi tàu lắc mạnh lúc thời tiết xấu."
                  ],
                  [
                        "Hàng rơi khi đang bốc/dỡ",
                        "Điều kiện B bồi thường, nhưng chỉ khi TOÀN BỘ kiện hàng bị tổn thất toàn bộ. Phạm vi \"bốc/dỡ\" gồm cả bốc và dỡ khi CHUYỂN TẢI, không chỉ cảng bốc đầu và cảng dỡ cuối."
                  ],
                  [
                        "Tổn thất do nước biển theo điều kiện C",
                        "Chỉ bồi thường khi quy hợp lý cho tàu bị CHÌM hoặc LẬT (hoặc mắc cạn, đâm va vật thể bên ngoài, hy sinh TTC, ném hàng). Các tổn hại khác vì nước biển thì không."
                  ],
                  [
                        "Nước ngấm vào hầm hàng theo điều kiện B",
                        "Bảo hiểm vì BẤT KỲ nguyên nhân gì (ví dụ nước ba-lát từ khoang khác), không cần chứng minh nguyên nhân tràn nước là hiểm họa được bảo hiểm."
                  ],
                  [
                        "Bể, móp do hàng dịch chuyển vì biển động bất thường",
                        "CHỈ điều kiện A. Điều kiện B không bảo hiểm."
                  ],
                  [
                        "Xê dịch hàng trong hầm khi biển động / hàng xô đổ khi vận chuyển đường bộ",
                        "KHÔNG thuộc rủi ro \"đâm va với vật thể bên ngoài\"."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Hỏa hoạn hay nổ - nguyên tắc dễ cho người được bảo hiểm",
            "text": "Chỉ cần chứng minh tổn thất quy hợp lý DO cháy/nổ là được bồi thường; không cần chứng minh tổn thất trực tiếp gây ra bởi lửa. Nguyên nhân cháy nổ KHÔNG cần thiết, miễn là không do hiểm họa bị loại trừ (chiến tranh, hành động cố ý của người được bảo hiểm). Nếu cháy trên tàu, tổn hại VÌ NÓNG cũng được bồi thường nếu quy hợp lý do cháy."
      },
      {
            "type": "note",
            "title": "Động đất, núi lửa, sét - lưu ý đặc biệt",
            "text": "Các rủi ro này được bảo hiểm theo A và B (ICC C KHÔNG bảo hiểm), nguyên nhân tổn thất được bảo hiểm mà KHÔNG cần áp dụng điều kiện nguyên nhân trực tiếp. Tổn hại do sét được bồi thường dù cháy có bắt nguồn từ sét hay không, và áp dụng cho cả vận chuyển trên biển lẫn trên bộ."
      },
      {
            "type": "note",
            "title": "Hy sinh tổn thất chung - hai quyền lợi của người được bảo hiểm",
            "text": "Thứ nhất: KHÔNG cần đợi hoàn thành phân bổ tổn thất chung mới phát đơn khiếu nại. Thứ hai: nếu số tiền đòi được từ quỹ tổn thất chung LỚN HƠN số tiền đã bồi thường thì người bảo hiểm phải HOÀN TRẢ phần vượt cho người được bảo hiểm. Hy sinh TTC được tính giống cách tính tổn thất riêng nếu là tổn thất bộ phận, hoặc bằng số tiền bảo hiểm nếu là tổn thất toàn bộ."
      },
      {
            "type": "note",
            "title": "Bẫy: chủ tàu chở hàng của chính mình",
            "tone": "warn",
            "text": "Khi chủ tàu CHỈ chở hàng của chính mình và phải ném hàng xuống biển, chỉ có MỘT quyền lợi duy nhất trên tàu nên KHÔNG có cơ sở khiếu nại hành động tổn thất chung, không được lập khiếu nại hy sinh TTC theo Đơn bảo hiểm. Tổn thất chung đòi hỏi có NHIỀU quyền lợi cùng được cứu."
      },
      {
            "type": "table",
            "title": "1.7.3-1.7.5. Ba điều khoản chuyên mặt hàng: thời điểm bắt đầu/kết thúc",
            "head": [
                  "Điều khoản",
                  "Bắt đầu",
                  "Kết thúc",
                  "Lưu ý"
            ],
            "rows": [
                  [
                        "Dầu chở rời (Bulk Oil Clauses 1.1.83)",
                        "Từ khi rời bồn chứa/nơi chứa hàng để xếp hàng tại nơi đi",
                        "Khi đến bồn chứa/nơi chứa hàng tại nơi đến, hoặc sớm hơn",
                        "KHÔNG bảo hiểm khi hàng nằm trong tank với mục đích lưu kho. Dùng cho dầu thô, sản phẩm dầu mỏ và các hàng dầu chở rời khác."
                  ],
                  [
                        "Thực phẩm đông lạnh (A, C) 1.1.86",
                        "Xếp vào phương tiện tại nơi làm lạnh/kho lạnh điểm đi có tên trên Đơn",
                        "Giao hàng tới kho lạnh/nơi chứa hàng tại nơi đến, hoặc sớm hơn",
                        "LOẠI TRỪ thịt đông lạnh. Dùng cho thực phẩm chuyên chở trong container lạnh."
                  ],
                  [
                        "Vận chuyển đường hàng không 1.1.82",
                        "Hàng rời kho/nơi chứa hàng bắt đầu vận chuyển (đã xếp lên phương tiện)",
                        "Giao hàng tại nơi đến hoặc sớm hơn theo điều kiện bảo hiểm",
                        "Bảo hiểm MỌI RỦI RO, loại trừ như điều kiện A. LOẠI TRỪ hàng gửi bưu điện."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "1.7.7-1.7.8. Chiến tranh và đình công",
            "head": [
                  "Nội dung",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Bắt đầu (cả hai)",
                        "Hàng xếp lên tàu để bắt đầu vận chuyển."
                  ],
                  [
                        "Kết thúc - chiến tranh",
                        "Dỡ hàng khỏi tàu biển HOẶC hết 15 NGÀY kể từ nửa đêm ngày tàu đến cảng, hoặc sớm hơn theo điều khoản."
                  ],
                  [
                        "Kết thúc - đình công",
                        "Theo nội dung điều khoản bảo hiểm."
                  ],
                  [
                        "Giới hạn quan trọng",
                        "KHÔNG bảo hiểm rủi ro chiến tranh khi hàng đang vận chuyển đường bộ (on land)."
                  ],
                  [
                        "Biểu phí",
                        "Áp dụng biểu phí quốc tế; phí thay đổi theo từng thời điểm do Ủy ban định phí thực hiện; nhà tái bảo hiểm thông báo định kỳ hoặc liên tục nếu thay đổi."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "1.7.9. Rủi ro loại trừ CHUNG (nhớ 7 nhóm)",
            "items": [
                  "Hành vi xấu, cố ý của người được bảo hiểm.",
                  "Rò chảy, hao hụt, giảm thể tích, hao mòn thông thường.",
                  "Đóng gói không đầy đủ, không thích hợp.",
                  "Khuyết tật hoặc tính chất riêng của hàng; tự bốc cháy.",
                  "Chậm trễ.",
                  "Tranh chấp của chủ tàu.",
                  "Vũ khí chiến tranh."
            ]
      },
      {
            "type": "list",
            "title": "Điều khoản loại trừ theo quy định của Nhà tái bảo hiểm",
            "items": [
                  "Loại trừ rủi ro năng lượng hạt nhân.",
                  "Loại trừ ô nhiễm phóng xạ, vũ khí hóa học, sinh học, sinh hóa, vũ khí điện tử.",
                  "Loại trừ rủi ro tấn công điều khiển học và nguy hại công nghệ thông tin.",
                  "Loại trừ rủi ro khủng bố; loại trừ rủi ro chính trị.",
                  "Loại trừ rủi ro tín dụng và bảo lãnh tài chính.",
                  "Điều khoản hủy bỏ chiến tranh đình công; điều khoản tự động chấm dứt bảo hiểm chiến tranh đình công hàng hóa.",
                  "Loại trừ và giới hạn trừng phạt theo lệnh cấm vận.",
                  "Loại trừ tổn thất do khoáng chất Amiang."
            ]
      },
      {
            "type": "table",
            "title": "Loại trừ riêng theo từng mặt hàng",
            "head": [
                  "Mặt hàng",
                  "Loại trừ đặc thù"
            ],
            "rows": [
                  [
                        "Hàng đóng container",
                        "Loại trừ mất mát thiếu hụt khi container còn NGUYÊN niêm phong kẹp chì, không có dấu hiệu cậy phá hoặc hư hỏng trong vận chuyển thông thường."
                  ],
                  [
                        "Hàng nông sản đóng container",
                        "Loại trừ ẩm mốc, nảy mầm, hấp hơi."
                  ],
                  [
                        "Hàng sắt thép để trần",
                        "Loại trừ gỉ sét, ô xy hóa tự nhiên."
                  ],
                  [
                        "Hàng gỗ",
                        "Chỉ GỖ CÂY mới được xếp trên boong tàu hoặc sà lan; sản phẩm từ gỗ và gỗ dán phải xếp trong hầm tàu hoặc container."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Điều kiện, điều khoản bổ sung hay gặp",
            "items": [
                  "Điều khoản bảo hiểm chiến tranh / đình công.",
                  "Điều khoản thay thế (Replacement Clause) - dùng nhiều cho máy móc thiết bị.",
                  "TPND - mất trộm, mất cắp và/hoặc không giao hàng.",
                  "ISM - chứng nhận an toàn hàng hải quốc tế."
            ]
      },
      {
            "type": "list",
            "title": "Chương 2. Khai thác - thông tin cần có để chào phí",
            "items": [
                  "Tên hàng hóa, quy cách đóng gói, trọng lượng/số lượng, trị giá.",
                  "Tên phương tiện vận chuyển, tuổi tàu, cấp tàu, cờ tàu.",
                  "Hành trình: nơi đi, nơi đến, có chuyển tải hay không.",
                  "Điều kiện bảo hiểm yêu cầu (A, B, C hoặc điều khoản chuyên mặt hàng).",
                  "Lịch sử tổn thất của khách hàng.",
                  "Điều kiện giá mua bán (Incoterms) và bộ chứng từ liên quan."
            ]
      },
      {
            "type": "table",
            "title": "2.2. Bốn hình thức hợp đồng bảo hiểm hàng hóa",
            "head": [
                  "Hình thức",
                  "Bản chất",
                  "Đặc điểm"
            ],
            "rows": [
                  [
                        "Hợp đồng nguyên tắc",
                        "Thỏa thuận khung giữa DNBH và khách hàng",
                        "Quy định trước điều kiện, tỷ lệ phí, cách thức thông báo. Mỗi chuyến vẫn phải khai báo và cấp đơn riêng."
                  ],
                  [
                        "Hợp đồng bao (Open Policy)",
                        "Bảo hiểm tự động cho mọi chuyến hàng thuộc phạm vi thỏa thuận",
                        "Hàng được bảo hiểm NGAY khi bắt đầu vận chuyển kể cả chưa kịp khai báo; có hạn mức trách nhiệm mỗi chuyến và tổng kim ngạch."
                  ],
                  [
                        "Đơn bảo hiểm chuyến (Voyage Policy)",
                        "Cấp cho một lô hàng, một hành trình cụ thể",
                        "Phổ biến nhất với khách hàng vãng lai."
                  ],
                  [
                        "Giấy chứng nhận bảo hiểm tạm thời (Cover Note)",
                        "Văn bản xác nhận đã nhận bảo hiểm khi chưa đủ thông tin cấp đơn chính thức",
                        "Có hiệu lực như đơn bảo hiểm cho đến khi đơn chính thức được phát hành."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Hợp đồng bao vs Hợp đồng nguyên tắc - khác nhau chỗ nào",
            "text": "Điểm khác cốt lõi: hợp đồng BAO bảo hiểm TỰ ĐỘNG - hàng đã được bảo hiểm ngay khi rời kho dù khách chưa kịp khai báo, khách chỉ cần khai báo sau theo định kỳ. Hợp đồng NGUYÊN TẮC chỉ thống nhất trước điều kiện và phí, vẫn phải khai báo trước mỗi chuyến mới có bảo hiểm. Ưu điểm của hợp đồng bao: không bỏ sót chuyến hàng, thủ tục nhanh, phí ổn định, phù hợp khách có kim ngạch lớn và đều đặn."
      },
      {
            "type": "list",
            "title": "Thay đổi KHÔNG làm thay đổi phí bảo hiểm (chỉ cần sửa đổi bổ sung)",
            "items": [
                  "Thay đổi tên phương tiện vận chuyển (cùng cấp hạng, cùng tuổi tàu).",
                  "Thay đổi ngày khởi hành.",
                  "Thay đổi số vận đơn.",
                  "Ngược lại: thay đổi hành trình, điều kiện bảo hiểm, số tiền bảo hiểm, chuyển tải hoặc loại tàu thì PHẢI tính lại phí."
            ]
      },
      {
            "type": "table",
            "title": "Lưu ý khai thác theo từng mặt hàng",
            "head": [
                  "Mặt hàng",
                  "Lưu ý khi nhận bảo hiểm"
            ],
            "rows": [
                  [
                        "Sắt thép để trần",
                        "Loại trừ gỉ sét, ô xy hóa tự nhiên. Cần giám định tình trạng trước khi xếp."
                  ],
                  [
                        "Gỗ",
                        "Chỉ gỗ cây được xếp trên boong/sà lan; gỗ dán và sản phẩm gỗ phải trong hầm tàu hoặc container."
                  ],
                  [
                        "Máy móc thiết bị đã qua sử dụng",
                        "Thường chỉ nhận điều kiện C hoặc hạn chế; cần giám định trước khi xếp và áp dụng điều khoản thay thế."
                  ],
                  [
                        "Máy móc trong container hở nóc (open-top)",
                        "Rủi ro ướt nước mưa cao, cần chằng buộc và bạt phủ."
                  ],
                  [
                        "Hóa chất",
                        "Phải tuân thủ IMDG Code, khai báo đúng loại nguy hiểm."
                  ],
                  [
                        "Hydrogen peroxide (ô xy già)",
                        "Hàng có khả năng tự phân hủy sinh nhiệt - rủi ro cao, cần điều kiện bảo quản nhiệt độ."
                  ],
                  [
                        "Thức ăn chăn nuôi, nông sản",
                        "Rủi ro ẩm mốc, nảy mầm, hấp hơi - loại trừ riêng nếu đóng container."
                  ],
                  [
                        "Hàng quá khổ quá tải (OOG)",
                        "Cần phương án chằng buộc, có thể yêu cầu giám định xếp dỡ."
                  ],
                  [
                        "Hàng vô hình / giá trị phi vật chất",
                        "Không thuộc đối tượng bảo hiểm hàng hóa vận chuyển."
                  ],
                  [
                        "Hàng vận chuyển nội địa",
                        "Áp dụng điều kiện C."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Chứng từ thường tham chiếu khi cấp đơn",
            "items": [
                  "Hợp đồng mua bán ngoại thương (Sales Contract).",
                  "Hóa đơn thương mại (Commercial Invoice).",
                  "Phiếu đóng gói (Packing List).",
                  "Vận tải đơn (Bill of Lading) hoặc vận đơn hàng không (AWB).",
                  "Thư tín dụng (L/C) nếu thanh toán qua ngân hàng.",
                  "Tờ khai hải quan."
            ]
      },
      {
            "type": "table",
            "title": "Chương 3.1. Phân loại tổn thất",
            "head": [
                  "Căn cứ",
                  "Các loại"
            ],
            "rows": [
                  [
                        "Theo mức độ và quy mô",
                        "Tổn thất bộ phận (Partial loss) và Tổn thất toàn bộ (Total loss)."
                  ],
                  [
                        "Theo quyền lợi và trách nhiệm bảo hiểm",
                        "Tổn thất riêng (Particular Average) và Tổn thất chung (General Average)."
                  ],
                  [
                        "Quan hệ rủi ro - tổn thất",
                        "Rủi ro là NGUYÊN NHÂN, tổn thất là HẬU QUẢ."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Tổn thất bộ phận biểu hiện dưới 4 dạng",
            "items": [
                  "Giảm trọng lượng (bao bì rách vỡ gây thiếu hụt).",
                  "Giảm thể tích (dầu, hóa chất rò rỉ).",
                  "Giảm số lượng.",
                  "Giảm giá trị một phần hoặc toàn bộ hàng hóa được bảo hiểm."
            ]
      },
      {
            "type": "table",
            "title": "Tổn thất toàn bộ: thực tế (ATL) vs ước tính (CTL)",
            "head": [
                  "Tiêu chí",
                  "ATL - Thực tế",
                  "CTL - Ước tính"
            ],
            "rows": [
                  [
                        "Căn cứ",
                        "MIA 1906 Điều 57, 58",
                        "Tổn thất thương mại"
                  ],
                  [
                        "Điều kiện",
                        "Hàng bị phá hủy/hủy hoại hoàn toàn; bị tước đoạt không lấy lại được; hư hỏng đến mức không còn là vật thể được bảo hiểm",
                        "Chưa tới mức ATL nhưng ATL khó tránh khỏi, hoặc muốn tránh phải bỏ chi phí LỚN HƠN số tiền bảo hiểm của bản thân hàng hóa"
                  ],
                  [
                        "Thông báo từ bỏ hàng",
                        "KHÔNG cần",
                        "BẮT BUỘC, và phải không chậm trễ"
                  ],
                  [
                        "Hệ quả của việc từ bỏ",
                        "-",
                        "Chủ hàng chuyển quyền sở hữu hàng cho người bảo hiểm; khi đã được chấp nhận thì KHÔNG thể thay đổi ý định"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Tổn thất riêng và chi phí tổn thất riêng",
            "head": [
                  "Khái niệm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Tổn thất riêng (PA)",
                        "Chỉ gây thiệt hại cho riêng quyền lợi của một vài chủ hàng, do rủi ro được bảo hiểm gây ra và không phải tổn thất chung."
                  ],
                  [
                        "Chi phí tổn thất riêng",
                        "Chi phí nhân danh người được bảo hiểm nhằm bảo tồn hàng khỏi hư hại thêm hoặc giảm bớt hư hại. TRỪ chi phí tổn thất chung và chi phí cứu hộ."
                  ],
                  [
                        "Giới hạn địa điểm",
                        "Chỉ chi phí tại cảng ĐI và cảng DỌC ĐƯỜNG mới được bồi thường. Chi phí tại BẾN ĐẾN không được coi là chi phí tổn thất riêng."
                  ],
                  [
                        "Chi phí đề phòng trước khi hư hại",
                        "KHÔNG được coi là chi phí tổn thất riêng."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Sáu nguyên tắc xác định TỔN THẤT CHUNG",
            "items": [
                  "Phải có nguy cơ đe dọa THẬT SỰ cho toàn bộ hành trình.",
                  "Sự hy sinh phải ở trong điều kiện BẤT THƯỜNG.",
                  "Phải là hành động hy sinh TỰ NGUYỆN, CỐ Ý, có dụng ý của con người trên tàu.",
                  "Hy sinh/chi phí phải HỢP LÝ.",
                  "Vì AN TOÀN CHUNG của tất cả quyền lợi trong hành trình.",
                  "Phiêu trình phải được cứu vãn và tổn thất phải là HẬU QUẢ TRỰC TIẾP của hành vi tổn thất chung."
            ]
      },
      {
            "type": "note",
            "title": "Cơ sở pháp lý tổn thất chung",
            "text": "MIA 1906: tổn thất chung gồm CẢ chi phí tổn thất chung LẪN hy sinh tổn thất chung. Quy tắc York-Antwerp 1950: hành động TTC là sự hy sinh/chi phí BẤT THƯỜNG được tiến hành HỮU ÍCH và HỢP LÝ vì AN TOÀN CHUNG nhằm bảo tồn tài sản khỏi tai nạn trong một hành trình chung trên biển."
      },
      {
            "type": "table",
            "title": "Ví dụ tổn thất chung - phân biệt đúng/sai",
            "head": [
                  "Tình huống",
                  "Là TTC?"
            ],
            "rows": [
                  [
                        "Tàu gặp bão, vứt hàng xuống biển làm nhẹ tàu để thoát nạn",
                        "CÓ"
                  ],
                  [
                        "Tàu cháy, bơm nước dập lửa làm hàng ngấm nước hỏng",
                        "CÓ"
                  ],
                  [
                        "Tàu nạn thiếu nhiên liệu, đốt bàn ghế của tàu thay nhiên liệu",
                        "CÓ"
                  ],
                  [
                        "Tàu mắc cạn, thúc máy quá sức làm nổ nồi hơi",
                        "CÓ - nếu chứng minh được phát sinh từ ý đồ làm tàu nổi lên vì an toàn chung"
                  ],
                  [
                        "Hàng ẩm mốc do độ ẩm hầm tàu trong hành trình bình thường",
                        "KHÔNG"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Đóng góp tổn thất chung và lý toán sư",
            "text": "Người bảo hiểm chịu trách nhiệm ĐẦY ĐỦ về phần đóng góp TTC miễn là hàng được bảo hiểm đầy đủ theo giá trị đóng góp; nếu bảo hiểm DƯỚI giá trị thì trách nhiệm giảm theo tỷ lệ. Việc xác định giá trị TTC, giá trị chịu phân bổ, tỷ lệ phân bổ và số tiền đóng góp do Công ty tính toán và phân bổ tổn thất chung (General Average Adjuster - lý toán sư) thực hiện. Người giải quyết bồi thường chỉ KIỂM TRA LẠI kết quả trong bảng phân bổ, không tự tính thay."
      },
      {
            "type": "table",
            "title": "Chi phí cứu hộ và chi phí đề phòng hạn chế tổn thất",
            "head": [
                  "Nội dung",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Quyền cứu hộ phát sinh",
                        "Khi con người hành động TỰ NGUYỆN để gìn giữ tàu, hàng, cước phí, nhiên liệu hoặc vật thể khác khỏi nguy hiểm."
                  ],
                  [
                        "Giới hạn tiền công cứu hộ",
                        "Không vượt quá GIÁ TRỊ TÀI SẢN ĐƯỢC CỨU HỘ tại thời điểm và nơi kết thúc công việc cứu hộ."
                  ],
                  [
                        "Nghĩa vụ theo ICC 1982",
                        "Áp dụng biện pháp hợp lý ngăn ngừa/giảm nhẹ tổn thất VÀ bảo đảm quyền khiếu nại người chuyên chở, người nhận ký gửi hoặc người thứ ba được duy trì."
                  ],
                  [
                        "Điều kiện để được công nhận là chi phí đề phòng",
                        "Chi bởi NGƯỜI ĐƯỢC BẢO HIỂM, đại lý hoặc người được chỉ định; hợp lý; không tránh khỏi khi rủi ro được bảo hiểm xảy ra; nhằm giảm tổn thất THUỘC phạm vi bảo hiểm."
                  ],
                  [
                        "Không được công nhận",
                        "Chi TRƯỚC khi có tổn thất do rủi ro được bảo hiểm; chi đề phòng tổn thất bộ phận khi đơn chỉ bảo hiểm tổn thất toàn bộ; hành động không cần thiết, không hiệu quả hoặc phi lý."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Chương 3.2. Giám định - vai trò của giám định viên",
            "items": [
                  "Ghi nhận CHÍNH XÁC, TRUNG THỰC các thiệt hại.",
                  "Đề xuất biện pháp bảo quản và đề phòng hạn chế tổn thất.",
                  "Thông tin cho nhà bảo hiểm khi được chỉ định trên Đơn bảo hiểm.",
                  "Giám định viên KHÔNG quyết định số tiền bồi thường.",
                  "Nếu bị hai tổ chức cùng chỉ định mà có xung đột quyền lợi: phải thông báo cho cả hai, chỉ chọn giám định cho MỘT bên, và đề nghị giám định viên khác thay mình bảo vệ quyền lợi bên kia."
            ]
      },
      {
            "type": "table",
            "title": "Phân loại và phương pháp giám định",
            "head": [
                  "Nhóm",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Ba loại giám định",
                        "Giám định mớn nước (Draft Survey); Giám định kết toán (Outturn Survey); Giám định tổn thất (Loss Survey)."
                  ],
                  [
                        "Ba phương pháp xác định mức độ tổn thất",
                        "Giám định cảm quan; giám định điều tra chọn mẫu; giám định đo lường tính toán."
                  ],
                  [
                        "Tính chất",
                        "Giám định bảo hiểm hàng hóa là giám định ĐỐI TỊCH: giữa đại diện người bảo hiểm và người được bảo hiểm, có thể có đại diện người thứ ba (người chuyên chở)."
                  ],
                  [
                        "Mẫu biên bản",
                        "Mẫu tiêu chuẩn của Lloyd’s: Form A, B, C, D."
                  ],
                  [
                        "Vai trò biên bản giám định",
                        "Tài liệu CHÍNH để xét duyệt bồi thường và để khiếu nại người thứ ba."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Mục đích giám định tổn thất (Loss Survey)",
            "items": [
                  "Kiểm tra loại, tình trạng và NGUYÊN NHÂN tổn thất.",
                  "Kiểm tra mức độ thiệt hại hay giảm giá, ước tính số tiền hoặc tỷ lệ % tổn thất.",
                  "Đánh giá chi phí sửa chữa có đúng mức và hợp lý không."
            ]
      },
      {
            "type": "table",
            "title": "Nguyên tắc giám định - dễ ra câu hỏi",
            "head": [
                  "Vấn đề",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Thời điểm",
                        "Phải giám định NGAY, không dựa vào thời hiệu bảo hiểm để trì hoãn."
                  ],
                  [
                        "Địa điểm",
                        "Ngay tại cảng dỡ hàng; hoặc tại kho cuối cùng NẾU trước khi chuyển hàng từ tàu về kho đã có biên bản ký với tàu/cảng ghi rõ số lượng và trạng thái hàng tổn thất."
                  ],
                  [
                        "Đối tượng",
                        "Hàng có tổn thất rõ rệt hoặc nghi vấn tổn thất. KHÔNG áp dụng với hàng nguyên đai nguyên kiện chỉ nghi ngờ số lượng/phẩm chất mà không do rủi ro bên ngoài tác động."
                  ],
                  [
                        "Ảnh chụp trong hầm tàu",
                        "Phải rõ vị trí tổn thất, có kiểu ảnh chụp rõ ĐẠI DIỆN CỦA TÀU cùng hàng tổn thất, và trong ảnh có rõ TÊN CON TÀU."
                  ],
                  [
                        "Giấy yêu cầu giám định",
                        "Gồm tên/địa chỉ người yêu cầu, tên tàu, tên hàng, tên người bảo hiểm, thời gian và địa điểm. KHÔNG bao gồm số tiền bồi thường đề nghị."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Bao bì - nguy cơ miễn trừ trách nhiệm",
            "tone": "warn",
            "text": "Đóng gói tồi là NGUY CƠ MIỄN TRỪ trách nhiệm của nhà bảo hiểm: hợp đồng loại trừ thiệt hại, hao hụt do bao bì không có, thiếu hoặc không thích hợp. Theo INCOTERMS, trách nhiệm đóng gói thuộc NGƯỜI BÁN, phải phù hợp tập quán thương mại. \"Bao bì hàng hải\" phải chịu được áp lực, nhiệt độ, độ ẩm trong khoang tàu/kho và chịu được nhiều lần khuân vác thiếu cẩn trọng tại bến cảng."
      },
      {
            "type": "table",
            "title": "Các dạng tổn thất và nguyên nhân thường gặp",
            "head": [
                  "Dạng tổn thất",
                  "Nguyên nhân / lưu ý giám định"
            ],
            "rows": [
                  [
                        "Nứt vỡ, bẹp, gẫy",
                        "Chấn động/va chạm mạnh, rơi từ cao, bị đè nặng hoặc chèn ép."
                  ],
                  [
                        "Bao kiện bị móc rách",
                        "Công nhân cảng dùng móc, ngoặc khi bốc dỡ."
                  ],
                  [
                        "Ô nhiễm mùi vị, lấm bẩn",
                        "Kiểm tra SƠ ĐỒ XẾP HÀNG trước - có thể do hầm bẩn, hầm dầu, ống dẫn dầu hoặc ống nước thải nứt vỡ rò chảy."
                  ],
                  [
                        "Gỉ sét",
                        "Ngấm nước đặc biệt NƯỚC MẶN; nhiễm hóa chất hoặc hơi hóa chất; thiếu sót bao bì; rách vỡ bao bì gây nhiễm bẩn/hơi nước."
                  ],
                  [
                        "Cháy",
                        "Phải phân biệt: tự bốc cháy hay lửa bên ngoài; tai nạn bất ngờ hay cố ý; tổn thất riêng hay tổn thất chung (phần cháy vs phần hỏng do nước/hóa chất cứu hỏa)."
                  ],
                  [
                        "Hàng tự bốc cháy",
                        "Đay, gai, bông, than, khô đậu tương."
                  ],
                  [
                        "Bột mỳ, đường, gạo, xi măng, Ammonium sulphate",
                        "Ướt nước, hao hụt trọng lượng, rách vỡ bao bì, lấm bẩn, ẩm ướt vón cục và đóng bánh."
                  ],
                  [
                        "Bông",
                        "Bên ngoài trông hỏng nhiều nhưng thường chỉ ướt/bung lớp mỏng ngoài; phải MOI lớp hỏng ra cân và đánh giá theo màu sắc, độ dài, mức lấm bẩn."
                  ],
                  [
                        "Ô tô, cần cẩu, máy kéo",
                        "Xếp trên boong hay trong hầm; điều kiện A hay C; bong giộp sơn do va chạm hay lỗi sản xuất; hư hỏng do nước mưa hay nước mặn; kiểm tra số khung, số máy, số phụ tùng kèm theo."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Chương 3.3. Hồ sơ khiếu nại - chứng từ thường có",
            "items": [
                  "Thư khiếu nại của người được bảo hiểm.",
                  "Giấy chứng nhận bảo hiểm hoặc Đơn bảo hiểm (bản gốc).",
                  "Vận tải đơn bản gốc - bằng chứng hợp đồng chuyên chở, thể hiện quyền sở hữu hàng và khẳng định hàng được xếp trên tàu ghi trên Đơn bảo hiểm.",
                  "Hóa đơn thương mại, phiếu đóng gói.",
                  "Biên bản giám định và chứng từ chỉ rõ mức độ tổn thất (COR, ROROC).",
                  "Thư dự kháng / thư thông báo tổn thất gửi người chuyên chở.",
                  "Với tổn thất chung: Average Bond (chủ hàng ký) và Average Guarantee (người bảo hiểm hàng hóa phát hành)."
            ]
      },
      {
            "type": "list",
            "title": "Người được bảo hiểm phải chứng minh bằng văn bản 5 điều",
            "items": [
                  "Hàng hóa hư hỏng/mất mát ĐÃ được bảo hiểm.",
                  "Mình CÓ quyền lợi bảo hiểm.",
                  "Hư hỏng DO hiểm họa được bảo hiểm gây ra.",
                  "Tổn thất xảy ra TRONG thời hiệu của đơn bảo hiểm.",
                  "Loại và MỨC ĐỘ hư hỏng."
            ]
      },
      {
            "type": "note",
            "title": "Notice of Loss - mốc 3 NGÀY",
            "tone": "warn",
            "text": "Theo Quy tắc Hague, nếu hư hỏng/mất mát KHÔNG rõ ràng vào lúc nhận hàng, người được bảo hiểm phải thông báo tổn thất cho người chuyên chở trong vòng 3 NGÀY kể từ ngày giao hàng. Nếu tổn thất rõ ràng thì phải ghi nhận ngay khi nhận hàng, trước khi ký giấy biên nhận của người chuyên chở."
      },
      {
            "type": "list",
            "title": "Các bước người được bảo hiểm phải làm khi phát hiện tổn thất",
            "items": [
                  "Kiểm tra hàng kỹ TRƯỚC khi ký giấy biên nhận của người chuyên chở; kiểm tra vách, cửa, kẹp chì nếu hàng trong container.",
                  "Thông báo người bảo hiểm hoặc giám định viên được chỉ định, thu xếp giám định.",
                  "Giữ lại toàn bộ bằng chứng và chụp ảnh hàng tổn thất.",
                  "Khiếu nại trực tiếp người chuyên chở, cơ quan giao nhận cảng và người làm công cho họ.",
                  "TUYỆT ĐỐI không tự ý sửa chữa, tiêu hủy hàng tổn thất trước khi thông báo cho người bảo hiểm."
            ]
      },
      {
            "type": "table",
            "title": "Ba nhóm yếu tố xem xét khi giải quyết khiếu nại",
            "head": [
                  "Nhóm",
                  "Yếu tố"
            ],
            "rows": [
                  [
                        "Liên quan hàng hóa",
                        "Trọng lượng, kích thước, chất lượng, tính nhạy cảm và tính dễ biến đổi của hàng."
                  ],
                  [
                        "Liên quan phương tiện",
                        "Loại tàu (tàu chuyến/tàu chợ), chủ tàu, cờ tàu, tuổi tàu, tàu lai dắt sà lan, chuyển tải, trang thiết bị, Hội P&I của tàu."
                  ],
                  [
                        "Liên quan trách nhiệm NĐBH",
                        "Ẩn tỳ hoặc bản chất tự nhiên của hàng, chậm trễ, tổn thất gây hậu quả, tổn thất cảm tính, bảo hành của nhà sản xuất, giao hàng thiếu, bảo hiểm trùng."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "CÔNG THỨC TÍNH BỒI THƯỜNG - phải thuộc lòng",
            "head": [
                  "Trường hợp",
                  "Công thức"
            ],
            "rows": [
                  [
                        "Tỷ lệ % tổn thất (hàng hư hỏng)",
                        "(Giá thị trường hàng TỐT − Giá thị trường hàng TỔN THẤT) ÷ Giá thị trường hàng TỐT"
                  ],
                  [
                        "Giá thị trường hàng tốt",
                        "Giá BÁN BUÔN tại cảng ĐẾN = giá trị hàng + cước phí + phí dỡ hàng + thuế nhập khẩu"
                  ],
                  [
                        "Một phần hàng tổn thất toàn bộ, lô hàng ĐỒNG NHẤT đơn giá",
                        "Giá trị bảo hiểm × (Lượng hàng tổn thất ÷ Toàn bộ lô hàng)"
                  ],
                  [
                        "Một phần hàng tổn thất toàn bộ, lô hàng KHÔNG đồng nhất đơn giá",
                        "Giá trị bảo hiểm × (Giá trị hàng tổn thất ÷ Giá trị toàn bộ lô hàng)"
                  ],
                  [
                        "Bán một phần tại cảng dọc đường",
                        "Số tiền bảo hiểm × (Số lượng tổn thất ÷ Toàn bộ khối lượng) − Số tiền thu hồi thực tế khi bán"
                  ],
                  [
                        "Bảo hiểm dưới giá trị",
                        "Số tiền bồi thường = Giá trị tổn thất × (Số tiền bảo hiểm ÷ Giá trị bảo hiểm)"
                  ],
                  [
                        "Bảo hiểm bằng hoặc trên giá trị",
                        "Số tiền bồi thường = Giá trị tổn thất"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Nguyên tắc so sánh giá - câu bẫy kinh điển",
            "text": "Giá thị trường hàng TỐT và hàng TỔN THẤT phải được so sánh trên CÙNG MỘT CƠ SỞ, CÙNG MỘT NƠI và CÙNG MỘT THỜI ĐIỂM. Không lấy giá hàng tốt tại cảng đi so với giá hàng tổn thất tại cảng đến. Cách tính bán hàng dọc đường chỉ áp dụng khi hàng được bán TRƯỚC khi đến cảng đích, do không thể/không có lợi nếu tiếp tục vận chuyển, và thuyền trưởng bán theo yêu cầu của giám định viên."
      },
      {
            "type": "table",
            "title": "Điều khoản nhãn hiệu và điều khoản thay thế",
            "head": [
                  "Điều khoản",
                  "Giới hạn bồi thường"
            ],
            "rows": [
                  [
                        "Nhãn hiệu",
                        "Chỉ giới hạn ở chi phí tái chế, chi phí nhãn hiệu mới và chi phí dán lại nhãn hàng hóa."
                  ],
                  [
                        "Thay thế (Replacement Clause)",
                        "Không vượt quá chi phí thay thế/sửa chữa các bộ phận hư hỏng, cộng chi phí chuyển tiếp hoặc lắp ráp lại (nếu có)."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Ba hình thức tổn thất riêng khi tính bồi thường",
            "items": [
                  "Hàng hóa bị hỏng (tính theo tỷ lệ % tổn thất).",
                  "Tổn thất một phần hàng (tính theo tỷ lệ lượng/giá trị).",
                  "Bán một phần tại cảng dọc đường (trừ số tiền thu hồi)."
            ]
      },
      {
            "type": "note",
            "title": "Chế tài trong bảo hiểm hàng hóa",
            "text": "Chế tài là hình thức HẠ GIẢM số tiền bồi thường khi người được bảo hiểm vi phạm quy định hoặc không thực hiện yêu cầu/hướng dẫn của người bảo hiểm, dẫn tới gia tăng tổn thất hoặc tổn hại quyền lợi người bảo hiểm. Ba lỗi hay bị chế tài: không bảo lưu quyền truy đòi người thứ ba; chậm trễ thông báo giám định; không thực hiện biện pháp đề phòng hạn chế tổn thất."
      },
      {
            "type": "list",
            "title": "Năm loại chi phí được bồi thường",
            "items": [
                  "Chi phí đề phòng hạn chế tổn thất.",
                  "Chi phí gửi tiếp hàng.",
                  "Chi phí tổn thất riêng.",
                  "Chi phí tổn thất chung.",
                  "Chi phí cứu hộ."
            ]
      },
      {
            "type": "note",
            "title": "Chương 4. Thế quyền - nguyên tắc cốt lõi",
            "text": "Quyền thế nhiệm là quyền thay thế quyền hạn của người được bảo hiểm để đòi các bên có trách nhiệm, TRONG GIỚI HẠN số tiền bồi thường đã trả, KHÔNG phụ thuộc quyền sở hữu có được chuyển hay không. Sau khi bồi thường, người bảo hiểm phải thu Giấy biên nhận và thế quyền bồi thường (Receipt and Subrogation). Nếu người được bảo hiểm không bảo lưu quyền đòi người thứ ba, người bảo hiểm có quyền MIỄN TRẢ một phần hoặc toàn bộ số tiền bồi thường."
      },
      {
            "type": "table",
            "title": "Hai loại trách nhiệm của người thứ ba",
            "head": [
                  "Loại",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "Trách nhiệm theo hợp đồng",
                        "Liên quan hợp đồng vận tải giữa người chuyên chở và chủ hàng."
                  ],
                  [
                        "Trách nhiệm sai lầm cá nhân",
                        "Việc làm sai trái/sơ suất của người thứ ba mà chủ hàng KHÔNG có quan hệ hợp đồng, ví dụ tai nạn đâm va."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "GIỚI HẠN TRÁCH NHIỆM NGƯỜI CHUYÊN CHỞ - bảng số phải thuộc",
            "head": [
                  "Công ước",
                  "Giới hạn"
            ],
            "rows": [
                  [
                        "Hague Rules",
                        "100 bảng Anh / kiện"
                  ],
                  [
                        "Hague-Visby (Nghị định thư Brussels 1968)",
                        "666,67 SDR / kiện hoặc đơn vị hàng, HOẶC 2 SDR / kg cho toàn bộ kiện hàng"
                  ],
                  [
                        "Hamburg Rules 1978",
                        "Công ước LHQ về Vận chuyển hàng hóa đường biển"
                  ],
                  [
                        "Warsaw 1929 (sửa đổi 1955)",
                        "250 francs / kg hoặc 20 USD / kg"
                  ],
                  [
                        "Montreal 1999",
                        "17 SDR / kg"
                  ],
                  [
                        "Montreal - từ 30/12/2009",
                        "19 SDR / kg"
                  ],
                  [
                        "Montreal - từ 28/12/2019",
                        "22 SDR / kg"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẹo nhớ giới hạn trách nhiệm",
            "text": "Đường BIỂN: Hague 100 bảng/kiện, Hague-Visby 666,67 SDR/kiện hoặc 2 SDR/kg (lấy số cao hơn cho chủ hàng). Đường HÀNG KHÔNG: Warsaw 250 francs/kg, Montreal tăng dần 17 → 19 → 22 SDR/kg theo mốc 1999 → 2009 → 2019. Hague-Visby phù hợp Luật Anh qua Carriage of Goods by Sea Act 1971."
      },
      {
            "type": "table",
            "title": "Đòi người thứ ba: chứng từ, bắt tàu và kết quả",
            "head": [
                  "Nội dung",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Thời điểm tiến hành",
                        "Trong thời gian hợp lý - kiểm tra sơ bộ khả năng đòi NGAY khi nhận thông báo khiếu nại và TRƯỚC khi xác định khiếu nại được bồi thường."
                  ],
                  [
                        "Chứng từ giao nhận cần thu thập",
                        "Tally Report, Short-landing Report, COR, ROROC."
                  ],
                  [
                        "Bắt NÓNG",
                        "Bắt tàu khi có tổn thất trực tiếp."
                  ],
                  [
                        "Bắt NGUỘI",
                        "Khi có khiếu nại trước đó được thế quyền, liên quan trực tiếp đến tàu chuyên chở và/hoặc tàu chị em cùng chủ."
                  ],
                  [
                        "Nơi tiếp nhận yêu cầu bắt tàu",
                        "Tòa án nhân dân cấp tỉnh, thành phố - kèm yêu cầu KÝ QUỸ đảm bảo tài sản khiếu nại."
                  ],
                  [
                        "Kết quả thu đòi",
                        "Bảo lãnh đảm bảo khiếu nại hàng hải hoặc bồi thường lumpsum."
                  ],
                  [
                        "Nguyên tắc cứu hộ liên quan",
                        "No Cure - No Pay (Không cứu được - Không trả tiền)."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Hệ thống Lloyd’s và Bảo Việt",
            "text": "Lloyd’s có 400 công ty và 350 đại lý trực thuộc trên thế giới. Tại Việt Nam, Bảo Việt được công nhận là 1 trong 350 đại lý xét bồi thường của Lloyd’s."
      },
      {
            "type": "list",
            "title": "CHECKLIST CON SỐ - đọc lại 5 phút trước khi thi",
            "items": [
                  "Số tiền bảo hiểm tối đa: 110% trị giá CIF (lãi ước tính không quá 10% CIF).",
                  "Thông báo tổn thất không rõ ràng cho người chuyên chở: 3 NGÀY (Hague).",
                  "Bảo hiểm chiến tranh kết thúc: 15 NGÀY kể từ nửa đêm ngày tàu đến cảng.",
                  "Hague Rules: 100 bảng Anh/kiện.",
                  "Hague-Visby: 666,67 SDR/kiện hoặc 2 SDR/kg.",
                  "Warsaw: 250 francs/kg hoặc 20 USD/kg.",
                  "Montreal: 17 SDR/kg (1999) → 19 SDR/kg (30/12/2009) → 22 SDR/kg (28/12/2019).",
                  "Hợp đồng bảo hiểm hàng hóa đầu tiên: năm 1347.",
                  "Vận chuyển đường biển: có từ thế kỷ V TCN.",
                  "Incoterms do ICC soạn từ năm 1936; bản 2010 lần đầu coi mua và bán hoàn toàn bình đẳng.",
                  "Tổng công ty Bảo hiểm Việt Nam thành lập: 15/01/1965.",
                  "Lloyd’s: 400 công ty, 350 đại lý; Bảo Việt là 1 trong 350 đại lý xét bồi thường.",
                  "ICC 1.1.1982: ba điều kiện A, B, C. Bulk Oil Clauses 1.1.83. Frozen Food Clauses 1.1.86.",
                  "Sáu nguyên tắc xác định tổn thất chung; York-Antwerp Rules 1950."
            ]
      }
]
  },
  {
    id: "ky-thuat-nang-cao",
    title: "Bảo hiểm kỹ thuật (nâng cao)",
    badge: "Nâng cao",
    summary: "CPM máy móc chủ thầu, CAR/EAR theo quy tắc Munich Re, bảo hiểm bắt buộc công trình và TNDS bên thứ ba theo NĐ 67/2023 - NĐ 220/2026.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: BẢO HIỂM KỸ THUẬT NÂNG CAO (MUNICH RE)",
            "text": "Điểm cốt lõi bảo hiểm kỹ thuật nâng cao:\n• QUY TẮC MUNICH RE: Chuẩn mực tái bảo hiểm kỹ thuật toàn cầu cho CAR/EAR, CPM, MB, CECR.\n• BẢO HIỂM BẮT BUỘC CÔNG TRÌNH: Nghị định 67/2023/NĐ-CP và NĐ 220/2026 quy định bắt buộc bảo hiểm công trình xây dựng và TNDS bên thứ ba trong thi công xây dựng.\n• KHUYẾT TẬT VẬT LIỆU: Bồi thường bộ phận bị vạ lây, loại trừ bản thân chi phí sửa chữa bộ phận bị khuyết tật hoặc tay nghề kém.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đọc trước: chương này thuộc kỳ thi nâng cao",
            "tone": "warn",
            "text": "Toàn bộ nội dung bám tài liệu \"TÀI LIỆU THI CC 07/2026 - 7. BH Kỹ thuật\" (110 slide, 4 mục + 3 bài tập tình huống). Khác với chương \"Tài sản kỹ thuật\" của bộ đề cũ, chương này đi sâu vào quy tắc Munich Re và phần bảo hiểm BẮT BUỘC theo Nghị định. Câu hỏi luyện tập nằm ở ngân hàng \"Nâng cao\"."
      },
      {
            "type": "table",
            "title": "Chữ viết tắt trong chương này",
            "head": [
                  "Viết tắt",
                  "Nghĩa đầy đủ",
                  "Ghi nhớ"
            ],
            "rows": [
                  [
                        "CPM",
                        "Contractor's Plant and Machinery - BH máy móc thiết bị chủ thầu",
                        "Máy móc thi công, CHỦ THẦU mua."
                  ],
                  [
                        "CAR",
                        "Contractor's All Risks - BH mọi rủi ro xây dựng",
                        "Dùng khi giá trị lắp đặt < 50% giá trị công trình."
                  ],
                  [
                        "EAR",
                        "Erection All Risks - BH mọi rủi ro lắp đặt",
                        "Dùng khi giá trị lắp đặt ≥ 50% giá trị công trình."
                  ],
                  [
                        "MB",
                        "Machinery Breakdown - BH đổ vỡ máy móc",
                        "Bảo hiểm hỏng hóc bên trong máy - CPM loại trừ phần này."
                  ],
                  [
                        "BPV",
                        "Boiler and Pressure Vessel - BH nồi hơi và thiết bị áp lực",
                        "Nổ nồi hơi do áp suất bên trong bị CPM loại trừ."
                  ],
                  [
                        "EEI",
                        "Electronic Equipment Insurance - BH thiết bị điện tử",
                        "Một sản phẩm bảo hiểm kỹ thuật."
                  ],
                  [
                        "DOS",
                        "Deterioration of Stock - BH kho lạnh",
                        "Hư hỏng hàng trong kho lạnh do sự cố máy lạnh."
                  ],
                  [
                        "CECR",
                        "Civil Engineering Completed Risks - BH công trình dân dụng đã hoàn thành",
                        "Bảo hiểm sau khi công trình đã xong."
                  ],
                  [
                        "MLOP / ALOP",
                        "Machinery / Advance Loss of Profit - BH gián đoạn kinh doanh",
                        "Bảo hiểm mất lợi nhuận do chậm đưa vào khai thác."
                  ],
                  [
                        "NĐBH / BMBH",
                        "Người được bảo hiểm / Bên mua bảo hiểm",
                        "Trong bảo hiểm xây dựng thường là chủ đầu tư hoặc nhà thầu."
                  ],
                  [
                        "DNBH",
                        "Doanh nghiệp bảo hiểm",
                        "Bảo hiểm bắt buộc xây dựng do DNBH phi nhân thọ triển khai."
                  ],
                  [
                        "TNDS",
                        "Trách nhiệm dân sự",
                        "Phần II của đơn CAR/EAR và bảo hiểm bắt buộc riêng theo NĐ 67/2023."
                  ],
                  [
                        "TNNN",
                        "Trách nhiệm nghề nghiệp",
                        "Bảo hiểm bắt buộc TNNN tư vấn xây dựng (khảo sát + thiết kế, công trình từ cấp II)."
                  ],
                  [
                        "SĐBS",
                        "Sửa đổi bổ sung (endorsement)",
                        "Các điều khoản 001-222 mở rộng/thu hẹp phạm vi đơn CAR/EAR."
                  ],
                  [
                        "GTCT",
                        "Giá trị công trình",
                        "Cơ sở xác định số tiền bảo hiểm Phần I và trần trách nhiệm Phần II."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Bốn văn bản pháp lý bắt buộc phải nhớ",
            "items": [
                  "Luật Kinh doanh bảo hiểm số 08/2022/QH15 ngày 16/6/2022.",
                  "Nghị định 46/2023/NĐ-CP ngày 01/7/2023 - quy định chi tiết thi hành Luật KDBH.",
                  "Nghị định 67/2023/NĐ-CP ngày 06/9/2023 - bảo hiểm bắt buộc TNDS chủ xe cơ giới, cháy nổ bắt buộc và bảo hiểm bắt buộc trong hoạt động đầu tư xây dựng.",
                  "Nghị định 220/2026/NĐ-CP - SỬA ĐỔI, BỔ SUNG Nghị định 67/2023 (thay Phụ lục III về phí bảo hiểm; đổi \"người thứ ba\" thành \"bên thứ ba\", \"hoạt động đầu tư xây dựng\" thành \"hoạt động xây dựng\")."
            ]
      },
      {
            "type": "table",
            "title": "Văn bản liên quan - nhớ cặp \"thay thế\"",
            "head": [
                  "Văn bản mới",
                  "Thay thế văn bản cũ",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "NĐ 06/2021/NĐ-CP (26/01/2021)",
                        "NĐ 46/2015/NĐ-CP",
                        "Quản lý chất lượng, thi công xây dựng và bảo trì công trình."
                  ],
                  [
                        "NĐ 15/2021/NĐ-CP (03/03/2021)",
                        "NĐ 59/2015/NĐ-CP",
                        "Quản lý dự án đầu tư xây dựng. Phụ lục X = danh mục công trình ảnh hưởng lớn đến an toàn cộng đồng."
                  ],
                  [
                        "NĐ 08/2022/NĐ-CP (10/01/2022)",
                        "—",
                        "Chi tiết Luật Bảo vệ môi trường. Phụ lục III và IV = công trình nguy cơ tác động xấu môi trường."
                  ],
                  [
                        "TT 06/2021/TT-BXD",
                        "—",
                        "Phân cấp công trình xây dựng (dùng để xác định công trình \"từ cấp II trở lên\")."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "Chín sản phẩm bảo hiểm kỹ thuật",
            "items": [
                  "Bảo hiểm mọi rủi ro xây dựng (CAR).",
                  "Bảo hiểm mọi rủi ro lắp đặt (EAR).",
                  "Bảo hiểm máy móc thiết bị chủ thầu (CPM).",
                  "Bảo hiểm đổ vỡ máy móc (MB).",
                  "Bảo hiểm nồi hơi (BPV).",
                  "Bảo hiểm thiết bị điện tử (EEI).",
                  "Bảo hiểm kho lạnh (DOS).",
                  "Bảo hiểm công trình dân dụng đã hoàn thành (CECR).",
                  "Bảo hiểm gián đoạn kinh doanh (MLOP/ALOP)."
            ]
      },
      {
            "type": "note",
            "title": "Mục 1 - CPM: bảo hiểm máy móc thiết bị chủ thầu",
            "tone": "info",
            "text": "Áp dụng quy tắc của nhà tái bảo hiểm Munich Re. Điểm thi hay hỏi: cái gì LÀ và cái gì KHÔNG LÀ đối tượng bảo hiểm."
      },
      {
            "type": "list",
            "title": "1.1. Đối tượng bảo hiểm CPM",
            "items": [
                  "Máy móc, thiết bị dùng trong quá trình xây dựng: loại có động cơ TỰ HÀNH (máy san ủi đất, cẩu các loại, phương tiện vận chuyển) hoặc thiết bị KHÔNG tự hành.",
                  "Thuộc quyền sở hữu của NĐBH HAY ĐI THUÊ; máy thuê, mượn thuộc quyền quản lý của NĐBH cũng được bảo hiểm.",
                  "Điều kiện then chốt: chỉ sử dụng trong PHẠM VI CÔNG TRƯỜNG, KHÔNG được lưu hành trên công lộ.",
                  "KHÔNG phải đối tượng bảo hiểm: công cụ, đồ nghề, lán trại, dàn giáo, cốp pha, thùng chứa, băng tải, cáp điện, mô tơ điện (đây là \"trang thiết bị dùng khi xây dựng\", thuộc hạng mục khác của đơn CAR/EAR)."
            ]
      },
      {
            "type": "table",
            "title": "1.1. Máy tự hành vs thiết bị không tự hành",
            "head": [
                  "Máy xây dựng TỰ HÀNH",
                  "Thiết bị KHÔNG tự hành"
            ],
            "rows": [
                  [
                        "Máy làm đất: xếp dỡ, cạp đất, ủi, san, xúc, đào",
                        "Hệ thống băng chuyền CỐ ĐỊNH"
                  ],
                  [
                        "Máy đào đường và máy khai mỏ",
                        "Thiết bị đóng bê tông"
                  ],
                  [
                        "Máy hoàn thiện mặt đường, máy đầm, xe lăn đường",
                        "Thiết bị trộn nhựa đường"
                  ],
                  [
                        "Máy búa đóng cọc, giàn khoan di động",
                        "Cần cẩu và cần trục dạng THÁP"
                  ],
                  [
                        "Thiết bị khoan đặt trên bánh xích; cần cẩu DI ĐỘNG",
                        "Thiết bị phát điện và phân phối điện cho công trường"
                  ],
                  [
                        "Hệ thống băng tải DI ĐỘNG; thiết bị phát điện DI ĐỘNG",
                        "—"
                  ],
                  [
                        "Máy xử lý vật liệu chuyên dụng",
                        "—"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "1.2. Phạm vi bảo hiểm CPM",
            "items": [
                  "Bảo hiểm MỌI RỦI RO cho tổn thất/thiệt hại VẬT CHẤT bất ngờ, không lường trước được, do nguyên nhân từ BÊN NGOÀI.",
                  "Rủi ro chính: hỏa hoạn, nổ; đâm va, lật đổ; thiên tai (động đất, bão, lũ lụt); các rủi ro bất ngờ khác không bị loại trừ.",
                  "Quan trọng: đơn CPM KHÔNG bao gồm phần TNDS đối với bên thứ ba.",
                  "Hai cách cấp đơn: bảo hiểm THEO NĂM hoặc bảo hiểm THEO DỰ ÁN (mở rộng theo phạm vi bảo hiểm xây dựng, lắp đặt)."
            ]
      },
      {
            "type": "table",
            "title": "1.2. CPM theo đơn CAR/EAR vs CPM theo năm",
            "head": [
                  "Tiêu chí",
                  "Theo đơn CAR/EAR",
                  "Theo năm"
            ],
            "rows": [
                  [
                        "Phạm vi công trường",
                        "CHỈ một công trình cụ thể được nêu trong hợp đồng",
                        "TẤT CẢ công trường/dự án của nhà thầu"
                  ],
                  [
                        "Khi máy nằm ở kho bãi nhà thầu",
                        "KHÔNG được bảo hiểm",
                        "ĐƯỢC bảo hiểm"
                  ],
                  [
                        "Tái tục",
                        "Hết hạn cùng đơn CAR",
                        "Có thể TÁI TỤC dù đơn CAR đã hết hạn"
                  ],
                  [
                        "Số lượng hạng mục",
                        "Theo danh mục của công trình đó",
                        "Số lượng lớn hạng mục trong MỘT đơn"
                  ],
                  [
                        "Vận chuyển",
                        "Chỉ trong khu vực công trường",
                        "Mở rộng qua Điều khoản sửa đổi, bổ sung"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Điều kiện chung cho mọi trạng thái của máy (CPM theo CAR/EAR)",
            "tone": "warn",
            "text": "Máy được bảo hiểm khi đang hoạt động hoặc không hoạt động, đang tháo dỡ để bảo dưỡng/làm sạch/sửa chữa, đang trong quá trình bảo dưỡng/làm sạch/sửa chữa, hoặc đang lắp ráp lại sau đó — NHƯNG trong bất cứ trường hợp nào cũng phải QUA THỜI KỲ CHẠY THỬ THÀNH CÔNG."
      },
      {
            "type": "list",
            "title": "1.3. Loại trừ bảo hiểm CPM (nhóm kỹ thuật)",
            "items": [
                  "Mức khấu trừ.",
                  "Hỏng hóc do ĐIỆN hoặc CƠ — đây là ranh giới phân biệt với bảo hiểm đổ vỡ máy móc (MB).",
                  "Thiệt hại đối với bộ phận/chi tiết MAU HỎNG, thường xuyên được thay thế.",
                  "Thiệt hại do NỔ NỒI HƠI, thiết bị áp lực do áp suất hơi nước/chất lỏng BÊN TRONG, hoặc nổ động cơ đốt trong (thuộc đơn BPV).",
                  "Xe cơ giới được thiết kế và CẤP PHÉP lưu hành trên công lộ (trừ phương tiện trên công trường).",
                  "Thiệt hại đối với phương tiện chạy dưới nước.",
                  "Thiệt hại khi đang được vận chuyển trên phương tiện khác — trừ khi có điều khoản SĐBS.",
                  "Thiết bị làm việc NGẦM dưới đất — trừ khi có điều khoản SĐBS (ĐK 400).",
                  "Thiệt hại do thiết bị chìm một phần hay toàn bộ trong nước thủy triều.",
                  "Hao mòn tự nhiên, xuống cấp do ít sử dụng hoặc do điều kiện bình thường của khí quyển.",
                  "Thiệt hại khi thử nghiệm dưới mọi hình thức hoặc sử dụng KHÔNG ĐÚNG thiết kế."
            ]
      },
      {
            "type": "list",
            "title": "1.3. Loại trừ bảo hiểm CPM (nhóm pháp lý và hành vi)",
            "items": [
                  "Chiến tranh, đình công, bạo loạn, hành vi ác ý vì động cơ chính trị; trưng thu, tịch thu, sung công bởi cơ quan chính quyền.",
                  "Thiệt hại từ nguyên nhân liên quan đến HẠT NHÂN.",
                  "Tổn thất hoặc trách nhiệm HẬU QUẢ (tổn thất gián tiếp về tài chính) dưới bất kỳ hình thức nào.",
                  "Thiệt hại do lỗi/khuyết tật mà NĐBH ĐÃ BIẾT vào lúc bắt đầu hiệu lực hợp đồng — cho dù người bảo hiểm có biết hay không.",
                  "Hành động CỐ Ý của NĐBH hoặc đại diện của họ.",
                  "Thiệt hại mà nhà sản xuất hay nhà cung cấp có trách nhiệm theo luật pháp hay theo hợp đồng.",
                  "Thiệt hại chỉ phát hiện khi KIỂM KÊ hoặc trong khi thực hiện các công việc thường xuyên."
            ]
      },
      {
            "type": "list",
            "title": "1.4. Giá trị bảo hiểm CPM = giá trị THAY THẾ MỚI",
            "items": [
                  "Là chi phí thay thế hạng mục được bảo hiểm bằng hạng mục MỚI cùng chủng loại, công suất và tính năng.",
                  "Gồm 5 khoản: giá mua (vật tư) + cước phí vận chuyển + thuế/lệ phí hải quan và các loại thuế + chi phí lắp đặt + phí bảo hiểm.",
                  "Lưu ý bảo hiểm DƯỚI giá trị: nếu tại thời điểm tổn thất STBH < giá trị thay thế mới (và không có giá trị thu hồi) thì áp dụng tỷ lệ."
            ]
      },
      {
            "type": "table",
            "title": "1.5. Ba công thức bồi thường CPM phải thuộc lòng",
            "head": [
                  "Trường hợp",
                  "Điều kiện xác định",
                  "Công thức"
            ],
            "rows": [
                  [
                        "Bảo hiểm dưới giá trị",
                        "STBH < Giá trị thay thế mới, không có giá trị thu hồi",
                        "Bồi thường = Chi phí khắc phục × (STBH ÷ Giá trị bảo hiểm)"
                  ],
                  [
                        "Tổn thất BỘ PHẬN",
                        "Khắc phục được VÀ chi phí khắc phục KHÔNG vượt quá giá trị thực tế ngay trước tổn thất",
                        "Bồi thường = Giá trị khắc phục − Giá trị thu hồi − Mức khấu trừ"
                  ],
                  [
                        "Tổn thất TOÀN BỘ",
                        "Chi phí sửa chữa BẰNG hoặc VƯỢT QUÁ giá trị thực tế ngay trước tổn thất",
                        "Bồi thường = Giá trị thực tế ngay trước tổn thất − Giá trị thu hồi − Mức khấu trừ"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "1.6. Điều khoản sửa đổi bổ sung của đơn CPM",
            "head": [
                  "Mã ĐK",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "001",
                        "Đình công, xung đột, bạo loạn dân sự"
                  ],
                  [
                        "006",
                        "Chi phí làm ngoài giờ, làm đêm, làm ngày lễ/chủ nhật và chi phí vận chuyển hỏa tốc"
                  ],
                  [
                        "007",
                        "Mở rộng bảo hiểm chi phí vận chuyển bằng ĐƯỜNG KHÔNG"
                  ],
                  [
                        "400",
                        "Máy móc thiết bị hoạt động NGẦM dưới lòng đất"
                  ],
                  [
                        "401",
                        "Mở rộng bảo hiểm VẬN CHUYỂN NỘI ĐỊA"
                  ],
                  [
                        "410",
                        "Điều chỉnh số tiền bảo hiểm và phí bảo hiểm"
                  ],
                  [
                        "420",
                        "Giàn khoan và thiết bị khoan giếng DẦU, giếng KHÍ và/hoặc giếng nhiệt năng"
                  ],
                  [
                        "421",
                        "Tháp khoan và thiết bị khoan giếng NƯỚC"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "1.7. Năm nội dung đánh giá rủi ro CPM",
            "items": [
                  "Máy móc xây dựng sẽ được sử dụng cho công trình LOẠI NÀO?",
                  "Tiêu chuẩn chế độ BẢO HÀNH thế nào?",
                  "ĐÀO TẠO và KINH NGHIỆM của người vận hành?",
                  "Kiểm tra CÔNG TRƯỜNG.",
                  "Kiểm tra công tác bảo hành và XƯỞNG SỬA CHỮA."
            ]
      },
      {
            "type": "table",
            "title": "Phân nhóm máy móc thiết bị (3 nhóm)",
            "head": [
                  "Nhóm",
                  "Máy móc thiết bị"
            ],
            "rows": [
                  [
                        "Nhóm 1",
                        "Cẩu các loại"
                  ],
                  [
                        "Nhóm 2",
                        "Máy xúc, máy ủi, máy ngoạm đất, xe tự đổ, máy đóng cọc, máy đầm, máy khoan, xe tải"
                  ],
                  [
                        "Nhóm 3",
                        "Máy nghiền, hệ thống đường ray trên công trường, đầu máy xe lửa, máy trải nhựa, máy trộn bê tông, máy phun bê tông"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Phân nhóm khu vực (3 khu vực) - rủi ro tăng dần A → C",
            "head": [
                  "Khu vực",
                  "Đặc điểm địa hình"
            ],
            "rows": [
                  [
                        "A",
                        "Vùng ĐỒNG BẰNG, nằm XA SÔNG"
                  ],
                  [
                        "B",
                        "Vùng ĐỒI TRUNG DU, chịu ảnh hưởng của SÔNG HỒ"
                  ],
                  [
                        "C",
                        "Vùng ĐỒI NÚI, nền đất yếu, có ĐỊA CHẤN phức tạp và chịu nhiều rủi ro thiên tai"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mục 2 - CAR/EAR: bảo hiểm mọi rủi ro xây dựng/lắp đặt",
            "tone": "info",
            "text": "Cũng theo quy tắc nhà tái bảo hiểm Munich Re. Đơn gồm hai phần tách bạch: Phần I - Tổn thất vật chất; Phần II - Trách nhiệm đối với bên thứ ba."
      },
      {
            "type": "list",
            "title": "2.1. Người được bảo hiểm trong đơn CAR/EAR",
            "items": [
                  "Chủ đầu tư.",
                  "Các đơn vị tư vấn thiết kế.",
                  "Nhà thầu chính, nhà thầu phụ.",
                  "Những người khác có liên quan đến công trình xây dựng.",
                  "Thông lệ: bảo hiểm xây dựng/lắp đặt do CHỦ ĐẦU TƯ mua; bảo hiểm máy móc thiết bị chủ thầu do CHỦ THẦU mua.",
                  "Vì sao mua riêng máy móc? Vì máy phải chuyển sang công trình khác. Mua chung thì thời hạn theo công trình 3-4 năm; mua theo công trình thì chỉ phục vụ công trình đó."
            ]
      },
      {
            "type": "note",
            "title": "Ngưỡng 50% - chọn CAR hay EAR",
            "tone": "warn",
            "text": "Nếu giá trị lắp đặt máy móc, thiết bị < 50% tổng giá trị công trình xây dựng → dùng Đơn bảo hiểm XÂY DỰNG (CAR). Nếu ≥ 50% → dùng Đơn bảo hiểm LẮP ĐẶT (EAR). Con số 50% này còn xuất hiện ở phần bảo hiểm bắt buộc (loại trừ mục rữa vs kết tạo vẩy cứng, và cách tính thời hạn bảo hiểm)."
      },
      {
            "type": "list",
            "title": "2.2. Đối tượng bảo hiểm của đơn CAR/EAR",
            "items": [
                  "Nhà ở, trụ sở làm việc, trường học, bệnh viện, khách sạn, nhà hát, rạp chiếu phim, công trình văn hóa.",
                  "Nhà máy, xí nghiệp, công trình phục vụ sản xuất.",
                  "Đường xá (đường sắt, đường bộ) và sân bay.",
                  "Cầu cống, cảng biển, kênh mương, đê đập, đường hầm, hồ thủy lợi, thủy điện.",
                  "Tài sản có sẵn trên hoặc XUNG QUANH công trường.",
                  "Máy móc, thiết bị thi công và phục vụ thi công trên công trường.",
                  "Chi phí dọn dẹp."
            ]
      },
      {
            "type": "table",
            "title": "2.2. Các hạng mục bảo hiểm chủ yếu",
            "head": [
                  "Hạng mục",
                  "Nội dung chi tiết"
            ],
            "rows": [
                  [
                        "Giá trị thi công xây dựng",
                        "Chuẩn bị mặt bằng (đào đắp, san nền); công trình tạm phục vụ thi công (kênh dẫn nước, đê bảo vệ, đường dẫn); móng và cấu trúc chủ yếu; chi phí chạy thử máy móc thiết bị được lắp đặt."
                  ],
                  [
                        "Trang bị công trình tạm",
                        "Lán trại; trụ sở tạm; nhà kho; xưởng; dàn giáo; cốp pha; thùng chứa bê tông; hệ thống băng tải; rào chắn; đồ nghề; công cụ; mô tơ điện; cáp điện."
                  ],
                  [
                        "Máy móc xây dựng",
                        "Máy dùng trong quá trình xây dựng (máy san ủi, cẩu, phương tiện vận chuyển) sử dụng trong khu vực công trường."
                  ],
                  [
                        "Tài sản có sẵn và xung quanh công trường",
                        "Tài sản thuộc sở hữu/quản lý/chăm sóc của NĐBH → Phần I. Tài sản của BÊN THỨ BA → bảo hiểm theo PHẦN II."
                  ],
                  [
                        "Chi phí dọn dẹp",
                        "Chi phí di chuyển, dọn dẹp chất phế thải xây dựng, đất đá do sự cố THUỘC TRÁCH NHIỆM BẢO HIỂM gây ra, nhằm làm sạch để tiếp tục thi công. Phải được KÊ KHAI trong đơn."
                  ],
                  [
                        "Trách nhiệm với bên thứ ba",
                        "Trách nhiệm của NĐBH đối với bên thứ ba về người và tài sản; tổn thất liên quan đến công trình và xảy ra trong thời hạn bảo hiểm."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Phạm vi \"công trường\" khi xây đường, đập, cầu cống",
            "tone": "info",
            "text": "Xây dựng ĐƯỜNG XÁ: công trường là SUỐT CHIỀU DÀI quãng đường, gồm các công trình phụ trợ dọc hai bên đường và các điểm khai thác đất đá để làm đường. Xây dựng ĐẬP, CẦU CỐNG, HỒ THỦY LỢI: công trường bao gồm cả các CON ĐƯỜNG TẠM."
      },
      {
            "type": "table",
            "title": "2.3. Ba nhóm rủi ro trong bảo hiểm CAR/EAR",
            "head": [
                  "Nhóm",
                  "Tên nhóm",
                  "Các rủi ro cụ thể"
            ],
            "rows": [
                  [
                        "Nhóm 1",
                        "Tác động của thiên nhiên / thiên tai",
                        "Gió (bão, gió xoáy, cuồng phong); mưa lớn; lũ lụt; cháy, cháy do sét, cháy do núi lửa; sét đánh; động đất; sóng thần; đất đá lún, sụt lở; hoạt động của núi lửa."
                  ],
                  [
                        "Nhóm 2",
                        "Tổn thất do hoạt động của CON NGƯỜI",
                        "Thiếu kinh nghiệm, kỹ năng; bất cẩn, sơ suất, lỗi vận hành; trộm cắp; hành động ác ý, phá hoại của người làm công; cường độ làm việc cao, thời gian xây dựng ngắn; thiếu biện pháp đề phòng hạn chế tổn thất; rủi ro thiết kế; bảo vệ; vận chuyển nguyên vật liệu trong công trường."
                  ],
                  [
                        "Nhóm 3",
                        "Rủi ro KỸ THUẬT, vận hành máy móc thiết bị",
                        "Điện thế quá lớn; nhiệt độ quá cao; đoản mạch; lực ly tâm; lỗi hệ thống, thiết bị điều hành; nổ do áp suất."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "2.3. Rủi ro ướt (Wet risk)",
            "items": [
                  "Định nghĩa: công trình xây dựng dân dụng có TẤT CẢ hạng mục xây dựng được bao bọc HOÀN TOÀN bởi nước (đập chắn sóng, chắn cát, khai hóa cải tạo đất lấn sông lấn biển, công trình thủy lợi tưới tiêu).",
                  "Ngưỡng quan trọng: giá trị phần ướt chiếm DƯỚI 10% tổng giá trị bảo hiểm → được coi là công trình BÌNH THƯỜNG.",
                  "Danh mục công trình liên quan rủi ro ướt: cảng bến tàu (Habour); cầu cảng cầu tàu (Wharf); sửa chữa nền đất (Reclaimation works); hệ thống tưới nước (Irrigation); đập chắn dòng nước (Dams); đê kè chắn sóng (Breakwater).",
                  "LƯU Ý BẪY THI: THỦY ĐIỆN và CẦU KHÔNG nằm trong danh mục rủi ro ướt."
            ]
      },
      {
            "type": "table",
            "title": "2.3. Rủi ro chính: CAR vs EAR khác nhau ở đâu",
            "head": [
                  "Rủi ro chính chung",
                  "Riêng của bảo hiểm XÂY DỰNG (CAR)",
                  "Riêng của bảo hiểm LẮP ĐẶT (EAR)"
            ],
            "rows": [
                  [
                        "Hỏa hoạn, nổ, sét đánh",
                        "Sụp, đổ công trình",
                        "Sai sót trong quá trình LẮP ĐẶT"
                  ],
                  [
                        "Lũ, lụt; gió, bão; động đất",
                        "Tay nghề kém, thiếu kỹ năng, bất cẩn",
                        "Đoản mạch, hồ quang điện, điện áp vượt mức bình thường"
                  ],
                  [
                        "Trộm cắp",
                        "Hành vi ác ý hoặc sai sót của con người",
                        "Áp suất hoặc chân không vượt mức thông thường; sự cố bất ngờ như sụp đổ, tác động của vật lạ"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "2.4. Phạm vi bảo hiểm Phần I - Tổn thất vật chất",
            "items": [
                  "Cháy, nổ và hậu quả tổn thất do chữa cháy.",
                  "Các phương tiện giao thông hay máy bay đâm va.",
                  "Sét; lũ, lụt, mưa gió, tuyết lở; động đất, núi lửa phun, sóng thần; sụt lở.",
                  "Trộm cắp; thiếu kinh nghiệm; sơ suất; hành động ác ý hay cố tình NHƯNG KHÔNG PHẢI của NĐBH hay đại diện của họ.",
                  "Bao gồm cả tổn thất nguyên vật liệu, trang thiết bị lắp đặt TRONG KHI VẬN CHUYỂN trên khu vực công trường hay khi lắp đặt, tháo gỡ."
            ]
      },
      {
            "type": "list",
            "title": "2.5. Loại trừ CHUNG của đơn CAR/EAR (4 nhóm)",
            "items": [
                  "Chiến tranh, đình công, xung đột, bạo loạn dân sự.",
                  "Phản ứng hạt nhân, phóng xạ hay ô nhiễm phóng xạ.",
                  "Hành động CỐ Ý của NĐBH hay đại diện của họ.",
                  "NGỪNG CÔNG VIỆC dù là toàn bộ hay một phần."
            ]
      },
      {
            "type": "list",
            "title": "2.5. Loại trừ Phần I chung (áp dụng cho cả CAR và EAR)",
            "items": [
                  "Tổn thất máy móc, trang thiết bị xây dựng do hỏng hóc, không hoạt động, nứt vỡ hoặc trục trặc về điện/cơ, đóng băng chất làm mát, bôi trơn không đảm bảo, thiếu dầu — NHƯNG KHÔNG loại trừ các hư hại BÊN NGOÀI phát sinh từ những hỏng hóc bên trong này.",
                  "Tổn thất đối với xe cộ được cấp phép hoạt động trên đường, máy bay, tàu thủy hoặc phương tiện đi lại dưới nước.",
                  "Mất mát/hư hại hồ sơ, bản vẽ, sổ sách, hóa đơn, tiền tệ, tem, phiếu, chứng thư, chứng từ nợ, chứng phiếu, séc.",
                  "Tổn thất chỉ được phát hiện vào thời điểm KIỂM KÊ."
            ]
      },
      {
            "type": "table",
            "title": "2.5. BẢNG VÀNG - so sánh loại trừ CAR và EAR (câu hỏi ruột)",
            "head": [
                  "Nguyên nhân",
                  "Đơn CAR",
                  "Đơn EAR"
            ],
            "rows": [
                  [
                        "Lỗi THIẾT KẾ",
                        "Tổn thất TRỰC TIẾP và GIÁN TIẾP đều KHÔNG thuộc phạm vi bảo hiểm",
                        "Tổn thất TRỰC TIẾP và GIÁN TIẾP đều KHÔNG thuộc phạm vi bảo hiểm"
                  ],
                  [
                        "Khuyết tật VẬT LIỆU / khuôn mẫu / TAY NGHỀ kém",
                        "Tổn thất TRỰC TIẾP không được bảo hiểm; tổn thất GIÁN TIẾP KHÔNG bị loại trừ (tức được bồi thường)",
                        "CẢ tổn thất trực tiếp VÀ gián tiếp đều KHÔNG được bảo hiểm (khi không phải lỗi trong khi lắp đặt)"
                  ],
                  [
                        "Hao mòn",
                        "Hao mòn tự nhiên, ăn mòn, ôxy hóa, xuống cấp do ít sử dụng, tác động của môi trường khí quyển",
                        "Hao mòn tự nhiên, ăn mòn, ôxy hóa, ĐÓNG VẨY"
                  ],
                  [
                        "Tổn thất hậu quả",
                        "Bị loại trừ (tiền phạt, mất hợp đồng)",
                        "Bị loại trừ (tiền phạt, mất hợp đồng)"
                  ],
                  [
                        "Bảo hành",
                        "Chỉ bảo hiểm TNDS bên thứ ba trong thời gian xây dựng/lắp đặt, KHÔNG chịu trách nhiệm trong thời gian bảo hành",
                        "Như CAR"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mẹo nhớ bảng so sánh CAR / EAR",
            "tone": "info",
            "text": "Lỗi THIẾT KẾ thì cả hai đơn đều loại trừ TRIỆT ĐỂ (trực tiếp + gián tiếp). Chỉ khác ở KHUYẾT TẬT VẬT LIỆU/TAY NGHỀ: đơn CAR \"nhẹ tay\" hơn — vẫn bồi thường tổn thất gián tiếp; đơn EAR \"nặng tay\" — loại trừ cả hai. Riêng EAR còn ghi rõ: tổn thất các HẠNG MỤC KHÁC xảy ra do một TAI NẠN là hệ quả khuyết tật vật liệu/tay nghề thì KHÔNG bị loại trừ."
      },
      {
            "type": "list",
            "title": "2.5. Loại trừ Phần II - Trách nhiệm đối với bên thứ ba",
            "items": [
                  "Mức khấu trừ.",
                  "Chi phí khắc phục/sửa chữa/thay thế bất cứ hạng mục nào ĐÃ hoặc CÓ THỂ được bảo hiểm ở phần thiệt hại vật chất (tránh bồi thường trùng).",
                  "Hư hại tài sản, nền đất hay nhà cửa do RUNG LẮC, DỊCH CHUYỂN hoặc SUY YẾU của bộ phận chống đỡ, và thương tật/thiệt hại phát sinh từ đó — trừ khi có thỏa thuận đặc biệt theo điều khoản bổ sung.",
                  "Thiệt hại thân thể, ốm đau của NGƯỜI LÀM CÔNG cho các bên được bảo hiểm tại Phần I và gia đình họ.",
                  "Tổn thất tài sản thuộc sở hữu, trông nom hay cai quản của các bên được bảo hiểm tại Phần I hoặc của người làm công cho họ.",
                  "Tai nạn do phương tiện giao thông được cấp phép trên công lộ, máy bay hay tàu thuyền gây ra.",
                  "Trách nhiệm do các bên được bảo hiểm TỰ THỎA THUẬN — trừ khi bên được bảo hiểm vẫn bị ràng buộc trách nhiệm nếu KHÔNG có thỏa thuận đó."
            ]
      },
      {
            "type": "table",
            "title": "2.6. Thời hạn bảo hiểm - CAR khác EAR ở điểm nào",
            "head": [
                  "Tiêu chí",
                  "Đơn CAR (xây dựng)",
                  "Đơn EAR (lắp đặt)"
            ],
            "rows": [
                  [
                        "Thời điểm kết thúc",
                        "Ngay khi công trình được BÀN GIAO hay ĐƯA VÀO SỬ DỤNG, nhưng KHÔNG MUỘN HƠN thời điểm ghi trên đơn",
                        "Khi thiết bị được BÀN GIAO HOẶC ngay sau khi kết thúc CHẠY THỬ — thời điểm nào XONG TRƯỚC thì chấm dứt tại đó"
                  ],
                  [
                        "Đưa từng máy vào sử dụng",
                        "—",
                        "Trách nhiệm chấm dứt tại thời điểm đó ĐỐI VỚI chính máy móc/thiết bị đó"
                  ],
                  [
                        "Máy móc CŨ (đã sử dụng)",
                        "—",
                        "Chấm dứt SAU KHI LẮP ĐẶT XONG — KHÔNG bảo hiểm quá trình chạy thử"
                  ],
                  [
                        "Chạy thử",
                        "KHÔNG bảo hiểm chạy thử theo đơn CAR",
                        "Chạy thử không vượt quá 4 TUẦN (trừ khi có thỏa thuận khác)"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "2.6. Các mốc thời gian trong đơn CAR/EAR",
            "items": [
                  "Chuỗi giai đoạn: Inland Transit (vận chuyển nội địa) → Construction Period (thi công) → Testing Period (chạy thử) → Maintenance (bảo hành). Hai hình thức bảo hành: Visit Maintenance và Extended Maintenance.",
                  "Lưu kho vật liệu TRƯỚC khi xây dựng: thông thường tối đa 3 THÁNG.",
                  "Chạy thử theo đơn EAR: không vượt quá 4 TUẦN (trừ khi thỏa thuận khác).",
                  "Thời hạn BẢO HIỂM thông thường không quá 72 THÁNG; thời hạn BẢO HÀNH không quá 24 THÁNG.",
                  "Bắt buộc: trong đơn bảo hiểm phải GHI TÁCH thời hạn bảo hiểm và thời hạn bảo hành.",
                  "Thời hạn tính từ ngày khởi công hay sau khi tập kết hạng mục đến công trường, đến khi công trình hoàn thành bàn giao/đưa vào sử dụng hoặc vào ngày ghi trong hợp đồng, CỘNG THÊM thời gian bảo hành. Thời hạn thực tế xác định theo lịch trình tiến độ thi công.",
                  "Nếu thi công kéo dài quá thời hạn: NĐBH phải THÔNG BÁO cho NBH và THANH TOÁN phần phí bảo hiểm cho thời gian vượt quá."
            ]
      },
      {
            "type": "list",
            "title": "2.7. Số tiền bảo hiểm Phần I - Tổn thất vật chất",
            "items": [
                  "Giá trị công trình: thông thường lấy GIÁ DỰ TOÁN ghi trong hợp đồng xây dựng (chi phí vật liệu, thiết bị lắp đặt vào công trình, chi phí nhân công, cước phí, thuế các loại). Khi kết thúc, điều chỉnh theo thực tế để điều chỉnh phí.",
                  "Nếu có thay đổi LỚN về giá cả trong thời gian xây dựng: NĐBH phải thông báo và điều chỉnh NGAY, KHÔNG chờ đến khi công trình hoàn thành.",
                  "Máy móc xây dựng: giá trị THAY THẾ MỚI của từng máy, kèm danh sách máy và giá trị thay thế mới. Lưu ý rủi ro bảo hiểm dưới giá trị.",
                  "Trang thiết bị xây dựng: xác định tốt nhất là dự kiến giá trị tại thời điểm TẬP TRUNG CAO NHẤT trong quá trình xây dựng, hoặc theo từng giai đoạn, hoặc bảo hiểm toàn bộ giá trị cần dùng cho cả công trình. Chỉ MỘT PHẦN giá trị trang bị này được đưa vào giá thành công trình vì chúng dùng nhiều lần cho nhiều công trình.",
                  "Tài sản trên và xung quanh công trường: phải có DANH MỤC; được bồi thường nếu tổn thất LIÊN QUAN TRỰC TIẾP đến việc xây dựng/lắp đặt hạng mục được bảo hiểm và xảy ra TRONG THỜI HẠN bảo hiểm; KHÔNG áp dụng cho máy móc và trang thiết bị phục vụ xây dựng/lắp đặt.",
                  "Chi phí dọn dẹp hiện trường: dự kiến chi phí cần thiết để di chuyển chất phế thải sau khi xảy ra tổn thất LỚN NHẤT (ví dụ chi phí bơm nước, vét bùn khỏi khu vực thi công)."
            ]
      },
      {
            "type": "note",
            "title": "Lưu ý ruột về số tiền bảo hiểm Phần I",
            "tone": "warn",
            "text": "STBH Phần I được quy định theo MỖI VÀ MỌI VỤ tổn thất — nghĩa là KHÔNG giới hạn số vụ tổn thất trong thời hạn bảo hiểm, nhưng TỔNG số tiền bồi thường của một hoặc nhiều vụ KHÔNG được vượt quá số tiền bảo hiểm."
      },
      {
            "type": "list",
            "title": "2.7. Số tiền bảo hiểm Phần II - Trách nhiệm với bên thứ ba",
            "items": [
                  "Giới hạn trách nhiệm xác định trên cơ sở khả năng tổn thất LỚN NHẤT có thể xảy ra đối với bên thứ ba về người và tài sản.",
                  "Trong mọi trường hợp, giới hạn trách nhiệm Phần II thông thường KHÔNG vượt quá 50% STBH của Phần I hoặc một số tiền cụ thể.",
                  "Về NGƯỜI: mức trách nhiệm/người/vụ tổn thất, có giới hạn TỔNG mức trách nhiệm trong thời hạn bảo hiểm.",
                  "Về TÀI SẢN: mức trách nhiệm/mỗi và mọi vụ tổn thất.",
                  "Phí Phần II thông thường = 5% phí bảo hiểm thiệt hại vật chất, hạn mức không vượt quá 50% GTCT được bảo hiểm ở Phần I, tối đa không quá một số tiền cụ thể.",
                  "KHÔNG bảo hiểm RIÊNG cho Phần II - TNDS đối với bên thứ ba.",
                  "STBH trong bảo hiểm lắp đặt = giá trị thay thế mới của máy móc/thiết bị mới tương đương: Giá mua + Cước vận chuyển + Phí BH + Kho bãi + Thuế + Chi phí lắp đặt."
            ]
      },
      {
            "type": "list",
            "title": "Ba điều kiện để được bồi thường TNDS theo đơn CAR/EAR",
            "items": [
                  "Có hành vi BẤT CẨN/SAI SÓT phải chịu trách nhiệm theo luật.",
                  "Phải có THIỆT HẠI về tài sản và/hoặc người.",
                  "Có mối quan hệ NHÂN QUẢ giữa hành vi trái luật với thiệt hại đó.",
                  "Điều kiện nền: thiệt hại phải do tai nạn BẤT NGỜ và KHÔNG LƯỜNG TRƯỚC được gây ra."
            ]
      },
      {
            "type": "table",
            "title": "2.8 - 2.9. Bồi thường và mức khấu trừ đơn CAR/EAR",
            "head": [
                  "Nội dung",
                  "Quy định"
            ],
            "rows": [
                  [
                        "Tổn thất bộ phận (sửa chữa được)",
                        "Tất cả chi phí cần thiết để phục hồi hạng mục về tình trạng TRƯỚC khi thiệt hại, trừ khoản thu hồi được và mức khấu trừ."
                  ],
                  [
                        "Tổn thất toàn bộ",
                        "Giá trị THỰC TẾ của khoản mục ngay TRƯỚC khi xảy ra tổn thất, trừ khoản thu hồi được và mức khấu trừ."
                  ],
                  [
                        "Trách nhiệm pháp lý",
                        "Bồi thường trong phạm vi bảo hiểm TNDS bên thứ ba, tối đa theo giới hạn đã thỏa thuận."
                  ],
                  [
                        "Chi phí hoán cải, bổ sung, nâng cấp",
                        "KHÔNG được bồi thường."
                  ],
                  [
                        "Mức khấu trừ Phần I",
                        "Chia theo: rủi ro khác/vụ; rủi ro CHẠY THỬ/vụ; rủi ro THIÊN TAI/vụ."
                  ],
                  [
                        "Mức khấu trừ Phần II",
                        "Chỉ áp dụng cho thiệt hại về TÀI SẢN/vụ. KHÔNG áp dụng mức khấu trừ với thiệt hại về NGƯỜI."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Điều khoản SĐBS - đơn CAR tiêu chuẩn",
            "head": [
                  "Mã",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "001 / 002 / 003",
                        "Đình công, xung đột, bạo loạn dân sự / Trách nhiệm chéo / Công tác bảo hành"
                  ],
                  [
                        "004 / 005 / 006",
                        "Bảo hành mở rộng / Tiến độ xây-lắp / Làm thêm giờ, làm đêm, ngày lễ, cước phí chuyển nhanh"
                  ],
                  [
                        "007 / 008",
                        "Cước phí vận chuyển đường hàng không / Cấu trúc công trình trong khu vực động đất"
                  ],
                  [
                        "009 / 010 / 012",
                        "Loại trừ động đất / Loại trừ lũ lụt / Loại trừ bão"
                  ],
                  [
                        "013 / 100",
                        "Tài sản tồn kho ngoài công trường / Chạy thử máy móc và thiết bị lắp đặt"
                  ],
                  [
                        "101 / 102 / 103",
                        "Xây dựng đường hầm và hành lang ngầm / Đường cáp, ống ngầm / Mùa màng, rừng và trồng trọt"
                  ],
                  [
                        "104 / 106 / 107",
                        "Xây dựng đập và hồ nước / Phân đoạn / Lều kho chứa hàng"
                  ],
                  [
                        "108 / 109 / 110 / 111",
                        "Máy xây dựng, thiết bị lắp đặt và máy móc / Vật liệu xây dựng / Biện pháp an toàn với mưa, lũ, lụt / Di chuyển đống đổ nát khỏi khu vực đất trượt"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Điều khoản SĐBS - đơn EAR tiêu chuẩn (khác CAR)",
            "head": [
                  "Mã",
                  "Nội dung"
            ],
            "rows": [
                  [
                        "011",
                        "Tổn thất hàng loạt (CHỈ có ở EAR, không có ở CAR)"
                  ],
                  [
                        "200 / 201",
                        "Rủi ro chế tạo / Bảo hiểm bảo hành"
                  ],
                  [
                        "202 / 203",
                        "Máy móc xây dựng-lắp đặt / Máy móc ĐÃ SỬ DỤNG"
                  ],
                  [
                        "204 / 205",
                        "Ngành công nghiệp hóa dầu 1 / Ngành công nghiệp hóa dầu 2"
                  ],
                  [
                        "206 / 207 / 208 / 209",
                        "Thiết bị phòng chữa cháy / Lán trại và kho / Đường cáp và ống dưới mặt đất / Mùa màng, rừng, khu trồng trọt"
                  ],
                  [
                        "211 / 212 / 213",
                        "Cấu kiện nhiên liệu hạt nhân / Khử ô nhiễm / Bình áp suất lò phản ứng với thiết bị bên trong"
                  ],
                  [
                        "214 / 217 / 218 / 219",
                        "Loại trừ tổn thất do LÚN / Đào hào khi lắp đặt đường ống / Dò tìm chỗ rỉ / Khoan định hướng đường ống"
                  ],
                  [
                        "220 / 221 / 222",
                        "Vận chuyển nội địa / Biện pháp an toàn với mưa, lũ, lụt / Loại trừ khoan định hướng"
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mục 3 - Bảo hiểm BẮT BUỘC công trình trong thời gian xây dựng",
            "tone": "warn",
            "text": "Khác hoàn toàn với CAR/EAR tự nguyện ở trên. Đây là chế định theo NĐ 67/2023/NĐ-CP (đã sửa bởi NĐ 220/2026/NĐ-CP) - phí, mức khấu trừ, giới hạn trách nhiệm đều do NHÀ NƯỚC ấn định. Phần này ra nhiều câu hỏi về CON SỐ và THỜI HẠN."
      },
      {
            "type": "list",
            "title": "3.1. Bốn nhóm đối tượng áp dụng",
            "items": [
                  "Chủ đầu tư xây dựng.",
                  "Nhà thầu thi công xây dựng.",
                  "Doanh nghiệp bảo hiểm phi nhân thọ, chi nhánh DNBH phi nhân thọ nước ngoài, DN tái bảo hiểm.",
                  "Cơ quan, tổ chức, cá nhân khác có liên quan."
            ]
      },
      {
            "type": "table",
            "title": "3.1. Ba định nghĩa hay bị bẫy",
            "head": [
                  "Thuật ngữ",
                  "Định nghĩa chính xác"
            ],
            "rows": [
                  [
                        "Nhà thầu tư vấn",
                        "Nhà thầu tư vấn KHẢO SÁT xây dựng và nhà thầu tư vấn THIẾT KẾ xây dựng của công trình từ CẤP II trở lên. → Hoạt động GIÁM SÁT KHÔNG phải mua bảo hiểm TNNN bắt buộc."
                  ],
                  [
                        "Người thứ ba (bên thứ ba)",
                        "Là bên bị thiệt hại, KHÔNG bao gồm: doanh nghiệp bảo hiểm, bên mua bảo hiểm, người lao động thi công trên công trường."
                  ],
                  [
                        "Đưa vào sử dụng",
                        "Việc đưa công trình, hạng mục công trình vào VẬN HÀNH, KHAI THÁC."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "3.2. Nguyên tắc chung khi tham gia bảo hiểm bắt buộc",
            "items": [
                  "DNBH được quyền TỪ CHỐI BÁN nếu bên mua không đáp ứng đầy đủ điều kiện năng lực hoạt động xây dựng theo Luật Xây dựng.",
                  "Được thỏa thuận mở rộng điều kiện/STBH tăng thêm, nhưng DNBH phải TÁCH RIÊNG phần bảo hiểm bắt buộc trong hợp đồng.",
                  "Thời hạn thanh toán phí trong mọi trường hợp KHÔNG được vượt quá thời hạn bảo hiểm. Với dự án theo NĐ 50/2021: không chậm hơn tiến độ thanh toán của hợp đồng xây dựng.",
                  "Khoản tiền phát sinh/tăng thêm do hành vi GIAN LẬN BẢO HIỂM theo Bộ luật Hình sự → DNBH KHÔNG có trách nhiệm bồi thường.",
                  "Nhà nhận tái bảo hiểm nước ngoài ĐỨNG ĐẦU và nhà nhận tái từ 10% tổng mức trách nhiệm phải xếp hạng tối thiểu \"BBB\" (S&P, Fitch) / \"B++\" (A.M.Best) / \"Baa1\" (Moody's) tại năm tài chính gần nhất."
            ]
      },
      {
            "type": "list",
            "title": "3.3. Ba nhóm công trình PHẢI mua bảo hiểm bắt buộc",
            "items": [
                  "Công trình, hạng mục công trình có ảnh hưởng LỚN đến an toàn, lợi ích cộng đồng (Phụ lục X Nghị định 15/2021/NĐ-CP).",
                  "Công trình đầu tư xây dựng có nguy cơ tác động xấu đến MÔI TRƯỜNG ở mức độ cao hoặc có nguy cơ tác động xấu đến môi trường (Phụ lục III và IV Nghị định 08/2022/NĐ-CP).",
                  "Công trình có quy mô LỚN, kỹ thuật PHỨC TẠP (công trình có điều kiện thi công xây dựng phức tạp theo pháp luật về xây dựng)."
            ]
      },
      {
            "type": "note",
            "title": "3.4. Số tiền bảo hiểm tối thiểu",
            "tone": "info",
            "text": "Là GIÁ TRỊ ĐẦY ĐỦ của công trình khi hoàn thành: toàn bộ vật liệu + chi phí nhân công + thiết bị lắp đặt vào công trình + cước phí vận chuyển + các loại thuế phí khác + các hạng mục khác do chủ đầu tư cung cấp. STBH tối thiểu KHÔNG được THẤP HƠN tổng giá trị hợp đồng xây dựng, kể cả giá trị điều chỉnh bổ sung. Khi điều chỉnh giá trị công trình, phải thông báo cho DNBH trong 05 NGÀY LÀM VIỆC."
      },
      {
            "type": "list",
            "title": "3.5. Loại trừ của bảo hiểm bắt buộc công trình (nhóm chung)",
            "items": [
                  "Chiến tranh, bạo loạn, đình công, hành động của thế lực thù địch, nổi loạn, tịch biên, sung công, trưng dụng, trưng thu.",
                  "Hành động khủng bố.",
                  "Phản ứng hạt nhân, phóng xạ hạt nhân, nhiễm phóng xạ.",
                  "Bên mua/người được bảo hiểm có tên trong danh sách CẤM VẬN.",
                  "Tổn thất có liên quan đến DỊCH BỆNH theo công bố của cơ quan có thẩm quyền.",
                  "Hành vi CỐ Ý vi phạm pháp luật của bên mua bảo hiểm hoặc người được bảo hiểm."
            ]
      },
      {
            "type": "list",
            "title": "3.5. Loại trừ đặc thù của bảo hiểm bắt buộc công trình",
            "items": [
                  "Tổn thất phát sinh do LỖI THIẾT KẾ của nhà thầu tư vấn đối với công trình xây dựng từ CẤP II trở lên.",
                  "Tổn thất do hiện tượng ĂN MÒN, MÀI MÒN, ÔXY HÓA.",
                  "Tổn thất do MỤC RỮA diễn ra trong điều kiện áp suất, nhiệt độ bình thường → áp dụng cho công trình < 1.000 tỷ, KHÔNG có lắp đặt hoặc giá trị lắp đặt < 50%.",
                  "Tổn thất do KẾT TẠO VẨY CỨNG (han gỉ, đóng cặn) → áp dụng cho công trình < 1.000 tỷ, CÓ lắp đặt và giá trị lắp đặt ≥ 50%.",
                  "Tổn thất do NGỪNG công việc thi công dù một phần hay toàn bộ, hoặc hậu quả của việc ngừng đó.",
                  "Tổn thất đối với DỮ LIỆU, PHẦN MỀM và các chương trình máy tính.",
                  "Chi phí sửa chữa, thay thế, chỉnh sửa KHUYẾT TẬT nguyên vật liệu hoặc LỖI TAY NGHỀ."
            ]
      },
      {
            "type": "note",
            "title": "Điểm bẫy: khuyết tật vật liệu / lỗi tay nghề trong bảo hiểm BẮT BUỘC",
            "tone": "warn",
            "text": "Loại trừ này CHỈ áp dụng với tổn thất của các hạng mục bị ảnh hưởng TRỰC TIẾP. KHÔNG áp dụng với tổn thất của các hạng mục KHÁC là hậu quả GIÁN TIẾP do khuyết tật nguyên vật liệu hoặc lỗi tay nghề mà đã thi công đúng. Quy tắc này GIỐNG cách xử lý của đơn CAR, KHÁC đơn EAR (EAR loại trừ cả trực tiếp lẫn gián tiếp)."
      },
      {
            "type": "table",
            "title": "3.6. Thời hạn bảo hiểm công trình bắt buộc",
            "head": [
                  "Loại công trình / tài sản",
                  "Thời hạn bảo hiểm"
            ],
            "rows": [
                  [
                        "Công trình < 1.000 tỷ, KHÔNG có lắp đặt hoặc lắp đặt < 50%",
                        "Từ ngày bắt đầu đến ngày kết thúc thời gian xây dựng theo văn bản của cấp có thẩm quyền quyết định đầu tư (gồm cả điều chỉnh, bổ sung)."
                  ],
                  [
                        "Công trình < 1.000 tỷ, CÓ lắp đặt ≥ 50%",
                        "Đến khi BÀN GIAO hoặc sau khi hoàn tất lần CHẠY THỬ CÓ TẢI ĐẦU TIÊN — tùy thời điểm nào ĐẾN TRƯỚC, nhưng KHÔNG QUÁ 28 NGÀY kể từ ngày bắt đầu chạy thử."
                  ],
                  [
                        "Thiết bị ĐÃ QUA SỬ DỤNG",
                        "Chấm dứt ngay khi thiết bị đó BẮT ĐẦU chạy thử."
                  ],
                  [
                        "Từng bộ phận, hạng mục công trình",
                        "Chấm dứt kể từ khi hạng mục đó được bàn giao hoặc đưa vào sử dụng."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "3.7. Phí bảo hiểm và mức khấu trừ (bắt buộc)",
            "items": [
                  "Công trình < 1.000 tỷ, không lắp đặt hoặc lắp đặt < 50%: áp dụng Khoản 1 Mục I Phụ lục III NĐ 67/2023.",
                  "Căn cứ mức độ rủi ro, DNBH được TĂNG hoặc GIẢM phí TỐI ĐA 25% tính trên phí bảo hiểm.",
                  "KHÔNG được giảm phí trong hai trường hợp: (1) công trình ở tỉnh/thành thuộc vùng nguy cơ lũ quét, sạt lở đất, sụt lún đất do mưa lũ hoặc dòng chảy; (2) DNBH có LỖ THUẦN nghiệp vụ bảo hiểm tài sản trong 3 NĂM TÀI CHÍNH liền kề.",
                  "Quy trình khai thác, thẩm định phải nêu rõ căn cứ, tiêu chí đánh giá rủi ro, thẩm quyền và phân cấp tăng/giảm phí; phải được CHUYÊN GIA TÍNH TOÁN xác nhận và HẰNG NĂM được KIỂM TOÁN NỘI BỘ kiểm toán về tuân thủ, an toàn, hiệu quả.",
                  "Công trình không được quy định mức phí: có thể thỏa thuận trên cơ sở bằng chứng do nhà nhận tái bảo hiểm nước ngoài ĐỨNG ĐẦU xác nhận."
            ]
      },
      {
            "type": "list",
            "title": "3.8. Trách nhiệm mua bảo hiểm và xử lý khi tổn thất",
            "items": [
                  "CHỦ ĐẦU TƯ có trách nhiệm mua. Chủ đầu tư có quyền GIAO nhà thầu mua, nhưng việc đó KHÔNG làm thay đổi trách nhiệm của chủ đầu tư và chủ đầu tư vẫn phải theo dõi, giám sát.",
                  "Mua theo TỪNG HẠNG MỤC: STBH từng hạng mục không thấp hơn giá trị đầy đủ của hạng mục đó khi hoàn thành, VÀ tổng STBH các hạng mục không thấp hơn STBH tối thiểu.",
                  "Công trình có nhiều hạng mục: chủ đầu tư phải cung cấp giá trị TỪNG hạng mục để xác định tỷ lệ phí tương ứng theo Phụ lục III.",
                  "Khi tổn thất: thông báo NGAY bằng phương tiện liên lạc, sau đó thông báo BẰNG VĂN BẢN trong 14 NGÀY kể từ ngày xảy ra tổn thất.",
                  "Trộm cắp: phải thông báo NGAY cho cơ quan CÔNG AN.",
                  "Bên mua được tự sửa chữa hư hỏng NHỎ có giá trị không vượt quá MỨC KHẤU TRỪ, sau khi đã thông báo bằng văn bản.",
                  "Nếu DNBH KHÔNG giám định trong 05 NGÀY LÀM VIỆC kể từ ngày nhận thông báo (trừ bất khả kháng/trở ngại khách quan) thì bên mua được tự sửa chữa hoặc thay thế.",
                  "Tạm dừng/chấm dứt hợp đồng xây dựng: thông báo bằng văn bản trong 05 NGÀY LÀM VIỆC. DNBH hoàn phí tương ứng thời gian còn lại trong 15 NGÀY, sau khi trừ chi phí hợp lý."
            ]
      },
      {
            "type": "table",
            "title": "3.9. Bồi thường bảo hiểm bắt buộc công trình",
            "head": [
                  "Trường hợp",
                  "Số tiền bồi thường"
            ],
            "rows": [
                  [
                        "Tổn thất SỬA CHỮA được",
                        "Chi phí cần thiết để phục hồi hạng mục trở lại trạng thái NHƯ TRƯỚC khi tổn thất, trừ giá trị thu hồi (nếu bên mua thu hồi) và mức khấu trừ."
                  ],
                  [
                        "Tổn thất TOÀN BỘ",
                        "Giá trị THỊ TRƯỜNG tại thời điểm và nơi xảy ra tổn thất, theo mức độ thiệt hại thực tế, trừ mức khấu trừ. Nếu có thu hồi tài sản: giá trị thực tế trừ mức khấu trừ và giá trị thu hồi."
                  ],
                  [
                        "Chi phí sửa chữa TẠM THỜI",
                        "DNBH chịu NẾU là một BỘ PHẬN CẤU THÀNH của việc sửa chữa chính thức VÀ không làm tăng tổng chi phí sửa chữa theo phương án cuối cùng."
                  ],
                  [
                        "Giới hạn",
                        "Mỗi hạng mục không vượt quá STBH của hạng mục đó; TỔNG bồi thường không vượt quá tổng STBH ghi trong hợp đồng."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Mục 4 - Bảo hiểm BẮT BUỘC TNDS đối với bên thứ ba",
            "tone": "warn",
            "text": "Đối tượng bảo hiểm là TRÁCH NHIỆM DÂN SỰ CỦA NHÀ THẦU THI CÔNG đối với bên thứ ba (không phải của chủ đầu tư). Đơn này bồi thường khoản tiền mà nhà thầu thi công có trách nhiệm bồi thường cho bên thứ ba về sức khỏe, tính mạng, tài sản VÀ chi phí pháp lý liên quan."
      },
      {
            "type": "table",
            "title": "4.1. Giới hạn trách nhiệm - con số phải thuộc",
            "head": [
                  "Loại thiệt hại",
                  "Giới hạn trách nhiệm"
            ],
            "rows": [
                  [
                        "Sức khỏe, tính mạng",
                        "100 TRIỆU ĐỒNG/người/vụ, KHÔNG giới hạn số vụ tổn thất."
                  ],
                  [
                        "Tài sản + chi phí pháp lý (công trình < 1.000 tỷ)",
                        "10% giá trị công trình cho CẢ THỜI HẠN BẢO HIỂM, không giới hạn số vụ."
                  ],
                  [
                        "Tài sản + chi phí pháp lý (công trình ≥ 1.000 tỷ)",
                        "100 TỶ ĐỒNG cho CẢ THỜI HẠN BẢO HIỂM, không giới hạn số vụ."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "4.2. Loại trừ của bảo hiểm bắt buộc TNDS bên thứ ba",
            "items": [
                  "Tổn thất phát sinh từ ô nhiễm, nhiễm bẩn — TRỪ thiệt hại phát sinh từ ô nhiễm/nhiễm bẩn do rủi ro BẤT NGỜ, KHÔNG LƯỜNG TRƯỚC được (trường hợp này VẪN được bồi thường).",
                  "Tổn thất có liên quan đến chất AMIĂNG hoặc bất kỳ nguyên vật liệu nào chứa amiăng.",
                  "Thiệt hại do CHẤN ĐỘNG, hoặc do bộ phận chịu lực và địa chất công trình bị DỊCH CHUYỂN hay SUY YẾU — trừ khi có điều khoản sửa đổi bổ sung.",
                  "Thiệt hại là hậu quả của tai nạn gây ra bởi xe cơ giới, tàu thuyền, xà lan, máy bay ĐÃ tham gia bảo hiểm TNDS chủ phương tiện.",
                  "Trách nhiệm là hậu quả của thương tật/ốm đau gây ra cho NGƯỜI LAO ĐỘNG của chủ đầu tư hoặc nhà thầu.",
                  "Tổn thất đối với tài sản thuộc sở hữu/quản lý/sử dụng hợp pháp của chủ đầu tư, nhà thầu hoặc người lao động của họ."
            ]
      },
      {
            "type": "table",
            "title": "4.3. Phí, mức khấu trừ, thủ tục TNDS bên thứ ba",
            "head": [
                  "Nội dung",
                  "Quy định (công trình < 1.000 tỷ)"
            ],
            "rows": [
                  [
                        "Mức phí bảo hiểm",
                        "Bằng 5% mức phí bảo hiểm bắt buộc công trình trong thời gian xây dựng."
                  ],
                  [
                        "Mức khấu trừ (tài sản + chi phí pháp lý)",
                        "5% giới hạn trách nhiệm HOẶC 20 TRIỆU ĐỒNG, tùy số nào LỚN HƠN."
                  ],
                  [
                        "Điều chỉnh phí",
                        "Tăng/giảm tối đa 25% tính trên phí bảo hiểm."
                  ],
                  [
                        "Ai cung cấp thông tin xác định phí",
                        "NHÀ THẦU THI CÔNG; chủ đầu tư phối hợp cung cấp."
                  ],
                  [
                        "Thông báo yêu cầu đòi bồi thường của bên thứ ba",
                        "Thông báo ngay bằng phương tiện liên lạc, sau đó VĂN BẢN trong 14 NGÀY."
                  ],
                  [
                        "Thời hạn bảo hiểm",
                        "Từ ngày bắt đầu đến ngày kết thúc thời gian xây dựng căn cứ HỢP ĐỒNG XÂY DỰNG, ghi trong hợp đồng bảo hiểm."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "4.4. Mức bồi thường TNDS bên thứ ba",
            "items": [
                  "Về SỨC KHỎE, TÍNH MẠNG: theo Bảng quy định tại PHỤ LỤC VI, hoặc theo thỏa thuận giữa NĐBH và người bị thiệt hại nhưng KHÔNG vượt quá mức Phụ lục VI; nếu có quyết định Tòa án thì căn cứ quyết định đó nhưng cũng KHÔNG vượt quá Phụ lục VI.",
                  "Về TÀI SẢN: theo thiệt hại THỰC TẾ và MỨC ĐỘ LỖI, không vượt quá giới hạn trách nhiệm đã thỏa thuận.",
                  "Hồ sơ bồi thường: DNBH có trách nhiệm thu thập BIÊN BẢN GIÁM ĐỊNH nguyên nhân và mức độ thiệt hại; các tài liệu còn lại do bên mua bảo hiểm cung cấp. Báo cáo tài chính của nhà thầu KHÔNG thuộc hồ sơ bồi thường."
            ]
      },
      {
            "type": "table",
            "title": "CHECKLIST 20 CON SỐ CHƯƠNG BẢO HIỂM KỸ THUẬT",
            "head": [
                  "Con số",
                  "Ý nghĩa"
            ],
            "rows": [
                  [
                        "50%",
                        "Ngưỡng giá trị lắp đặt để chọn CAR (<50%) hay EAR (≥50%); cũng là trần trách nhiệm Phần II so với Phần I."
                  ],
                  [
                        "10%",
                        "Ngưỡng giá trị phần ướt để coi là công trình bình thường; giới hạn TNDS tài sản = 10% giá trị công trình (< 1.000 tỷ); ngưỡng nhận tái phải xếp hạng."
                  ],
                  [
                        "5%",
                        "Phí Phần II = 5% phí Phần I; phí TNDS bắt buộc = 5% phí bảo hiểm công trình; mức khấu trừ tài sản = 5% giới hạn trách nhiệm."
                  ],
                  [
                        "25%",
                        "Biên độ tăng/giảm phí tối đa của bảo hiểm bắt buộc."
                  ],
                  [
                        "28 ngày",
                        "Thời hạn tối đa từ ngày bắt đầu chạy thử (bảo hiểm bắt buộc, công trình lắp đặt ≥ 50%)."
                  ],
                  [
                        "4 tuần",
                        "Thời gian chạy thử tối đa của đơn EAR."
                  ],
                  [
                        "3 tháng",
                        "Thời gian lưu kho vật liệu tối đa trước khi xây dựng."
                  ],
                  [
                        "72 tháng",
                        "Thời hạn bảo hiểm tối đa của đơn CAR/EAR."
                  ],
                  [
                        "24 tháng",
                        "Thời hạn bảo hành tối đa của đơn CAR/EAR."
                  ],
                  [
                        "14 ngày",
                        "Thông báo văn bản khi xảy ra tổn thất; thông báo văn bản khi nhận yêu cầu đòi bồi thường của bên thứ ba."
                  ],
                  [
                        "05 ngày làm việc",
                        "Thông báo điều chỉnh STBH; thông báo tạm dừng/chấm dứt hợp đồng; thời hạn DNBH phải giám định."
                  ],
                  [
                        "15 ngày",
                        "Thời hạn DNBH hoàn phí sau khi chấm dứt hợp đồng."
                  ],
                  [
                        "100 triệu đồng",
                        "Giới hạn TNDS bắt buộc về sức khỏe, tính mạng/người/vụ."
                  ],
                  [
                        "100 tỷ đồng",
                        "Giới hạn TNDS bắt buộc về tài sản cho công trình ≥ 1.000 tỷ."
                  ],
                  [
                        "20 triệu đồng",
                        "Sàn mức khấu trừ TNDS bắt buộc về tài sản."
                  ],
                  [
                        "1.000 tỷ đồng",
                        "Ngưỡng phân loại công trình để áp dụng phí, loại trừ và giới hạn trách nhiệm."
                  ],
                  [
                        "Cấp II",
                        "Ngưỡng cấp công trình để nhà thầu tư vấn khảo sát/thiết kế phải mua bảo hiểm TNNN bắt buộc; ngưỡng loại trừ lỗi thiết kế."
                  ],
                  [
                        "3 năm tài chính",
                        "Thời gian lỗ thuần nghiệp vụ tài sản khiến DNBH không được giảm phí."
                  ],
                  [
                        "BBB / B++ / Baa1",
                        "Xếp hạng tối thiểu của nhà nhận tái bảo hiểm nước ngoài (S&P-Fitch / A.M.Best / Moody's)."
                  ],
                  [
                        "3 nhóm / 3 khu vực",
                        "Phân nhóm máy móc CPM (nhóm 1-2-3) và phân khu vực địa hình (A-B-C)."
                  ]
            ]
      }
]
  },
  {
    id: "luat-2026",
    title: "Pháp luật KDBH cập nhật 2025-2026",
    badge: "Nâng cao",
    summary: "Hệ thống VBQPPL mới (Luật 139/2025, NĐ 97/2026, NĐ 220/2026, NĐ 174/2024-78/2026), bảo hiểm bắt buộc, đại lý, hoa hồng TT67, và tội gian lận BH.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: PHÁP LUẬT KDBH CẬP NHẬT 2025-2026",
            "text": "Các văn bản quy phạm pháp luật mới nhất:\n• LUẬT KDBH SỐ 08/2022/QH15 & LUẬT SỬA ĐỔI 139/2025/QH15.\n• THÔNG TƯ 67/2023/TT-BTC: Quy định chi tiết về hoa hồng đại lý, trần chi thưởng và quy tắc bán bảo hiểm qua ngân hàng (bancassurance).\n• NGHỊ ĐỊNH 67/2023/NĐ-CP: Quy định về 4 loại hình bảo hiểm bắt buộc (Xe cơ giới, Cháy nổ, Công trình xây dựng).\n• CHẾ TÀI HÌNH SỰ: Điều 213 Bộ luật Hình sự quy định tội Gian lận trong kinh doanh bảo hiểm với khung hình phạt đến 7 năm tù.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Đọc trước: chương này thuộc kỳ thi nâng cao CC 07/2026",
            "tone": "warn",
            "text": "Bám tài liệu \"Pháp luật Việt Nam về kinh doanh bảo hiểm phi nhân thọ\" (bản gốc tháng 3/2026, 304 slide, 10 phần) và phần cập nhật pháp luật đến tháng 7/2026. Tập trung vào văn bản MỚI 2025-2026 và phần đại lý/xử phạt — các phần hợp đồng/tài chính cơ bản đã có ở chương Luật cũ của bộ đề 610 câu. Câu hỏi luyện tập nằm ở ngân hàng \"Nâng cao\"."
      },
      {
            "type": "table",
            "title": "BẢNG VÀNG - cặp văn bản gốc ↔ sửa đổi phải thuộc",
            "head": [
                  "Văn bản gốc",
                  "Văn bản sửa đổi",
                  "Hiệu lực sửa đổi",
                  "Nội dung chính"
            ],
            "rows": [
                  [
                        "Luật KDBH 08/2022/QH15 (16/6/2022)",
                        "Luật 139/2025/QH15",
                        "Theo Luật 139",
                        "Sửa một số Điều Luật 08/2022 (trong đó có nguyên tắc đại lý cá nhân, chuyển tiếp chứng chỉ)."
                  ],
                  [
                        "NĐ 46/2023/NĐ-CP (01/7/2023)",
                        "NĐ 97/2026/NĐ-CP (31/3/2026)",
                        "Từ ngày ký; trừ Đ25, 26, khoản 4 Đ31 từ 01/7/2026",
                        "Chi tiết thi hành Luật KDBH."
                  ],
                  [
                        "NĐ 67/2023/NĐ-CP (06/9/2023)",
                        "NĐ 220/2026/NĐ-CP (22/6/2026)",
                        "01/7/2026",
                        "Bảo hiểm bắt buộc (TNDS XCG, cháy nổ, xây dựng)."
                  ],
                  [
                        "NĐ 174/2024/NĐ-CP (30/12/2024)",
                        "NĐ 78/2026/NĐ-CP (17/3/2026)",
                        "NĐ 174: 15/02/2025; NĐ 78: 01/7/2026",
                        "Xử phạt VPHC trong lĩnh vực KDBH."
                  ],
                  [
                        "TT 69/2022/TT-BTC (chứng chỉ)",
                        "TT 85/2024 + TT 151/2025",
                        "Theo từng TT",
                        "Chứng chỉ BH, đại lý, môi giới, phụ trợ."
                  ],
                  [
                        "TT 67/2023/TT-BTC (02/11/2023)",
                        "Đang lấy ý kiến sửa đổi",
                        "—",
                        "Hướng dẫn Luật KDBH + NĐ 46; hoa hồng đại lý Đ51."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Lưu ý số hiệu NĐ 220",
            "tone": "info",
            "text": "Bản ghi chú đã cập nhật theo NĐ 220/2026/NĐ-CP ngày 22/6/2026, hiệu lực 01/7/2026. Một số slide BH Kỹ thuật ghi tắt \"220/2025\" — khi thi ưu tiên số hiệu văn bản hiện hành là 220/2026."
      },
      {
            "type": "list",
            "title": "1. Hệ thống pháp luật ba tầng",
            "items": [
                  "Pháp luật chung: BLDS, BLHS, Luật Doanh nghiệp, Đầu tư, An ninh mạng, Cạnh tranh, Bảo vệ người tiêu dùng, PCRT, Đấu thầu, Giao dịch điện tử.",
                  "Pháp luật về KDBH: Luật 08/2022 + 139/2025; NĐ 21/2023 (vi mô), NĐ 46/2023 + 97/2026, NĐ 67/2023 + 220/2026, NĐ 58/2018 (nông nghiệp), NĐ 174/2024 + 78/2026; TT 69/2022 (+85/2024, +151/2025), TT 70/2022, TT 67/2023, TT 195/2014.",
                  "Pháp luật liên quan: Luật Xây dựng 135/2025, PCCC, Bộ luật Hàng hải, GTĐTNĐ, BVMT, thuế, TTATGTĐB 36/2024, quản lý tài sản công."
            ]
      },
      {
            "type": "list",
            "title": "1.1. Nguyên tắc áp dụng VBQPPL (Điều 156 Luật Ban hành VBQPPL)",
            "items": [
                  "Áp dụng từ thời điểm bắt đầu có hiệu lực; áp dụng với hành vi xảy ra khi văn bản đang có hiệu lực (trừ khi có hiệu lực trở về trước).",
                  "Khác nhau về cùng vấn đề → áp dụng văn bản có hiệu lực pháp lý CAO HƠN.",
                  "Cùng cơ quan ban hành, khác nhau → áp dụng văn bản ban hành SAU.",
                  "Văn bản mới không quy định trách nhiệm hoặc quy định nhẹ hơn → áp dụng văn bản mới cho hành vi xảy ra trước ngày có hiệu lực.",
                  "Điều ước quốc tế mà VN là thành viên khác với VB trong nước → áp dụng điều ước, trừ Hiến pháp."
            ]
      },
      {
            "type": "table",
            "title": "1.2. Luật Xây dựng 135/2025 - ba loại BH bắt buộc xây dựng",
            "head": [
                  "Loại bảo hiểm bắt buộc",
                  "Ai mua",
                  "Phạm vi"
            ],
            "rows": [
                  [
                        "BH công trình trong thời gian xây dựng",
                        "Chủ đầu tư (có quyền giao nhà thầu mua)",
                        "Công trình ảnh hưởng lớn an toàn cộng đồng; nguy cơ môi trường; quy mô lớn, kỹ thuật phức tạp."
                  ],
                  [
                        "BH TNNN tư vấn xây dựng",
                        "Nhà thầu tư vấn",
                        "Khảo sát xây dựng, thiết kế xây dựng của công trình từ CẤP II trở lên."
                  ],
                  [
                        "BH người lao động trên công trường + BH TNDS bên thứ ba",
                        "Nhà thầu thi công xây dựng",
                        "Người lao động thi công và trách nhiệm dân sự đối với bên thứ ba."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Thuế TNCN đại lý",
            "tone": "info",
            "text": "TT 92/2015/TT-BTC: tỷ lệ thuế thu nhập cá nhân đối với cá nhân làm đại lý bảo hiểm là 5%."
      },
      {
            "type": "list",
            "title": "2. Phạm vi Luật KDBH (Điều 1-3)",
            "items": [
                  "Quy định tổ chức và hoạt động KDBH; quyền nghĩa vụ tổ chức, cá nhân tham gia BH; quản lý nhà nước về KDBH.",
                  "KHÔNG áp dụng: BHXH, BHYT, BH tiền gửi và các loại BH khác do Nhà nước thực hiện không mang tính kinh doanh.",
                  "Luật khác ban hành sau Luật KDBH 2022 nếu quy định khác về HĐBH, thành lập, nghiệp vụ, tài chính, khả năng thanh toán… thì phải xác định cụ thể nội dung thực hiện hoặc không thực hiện theo Luật KDBH."
            ]
      },
      {
            "type": "table",
            "title": "2.1. Ba loại hình bảo hiểm (Điều 7 Luật)",
            "head": [
                  "Loại hình",
                  "Một số nghiệp vụ tiêu biểu"
            ],
            "rows": [
                  [
                        "Bảo hiểm nhân thọ",
                        "Trọn đời, sinh kỳ, tử kỳ, hỗn hợp, trả tiền định kỳ, liên kết đầu tư, hưu trí."
                  ],
                  [
                        "Bảo hiểm phi nhân thọ",
                        "Tài sản; hàng hóa vận chuyển; hàng không; xe cơ giới; cháy nổ; thân tàu và TNDS chủ tàu; trách nhiệm; tín dụng và rủi ro tài chính; nông nghiệp; bảo lãnh; thiệt hại khác."
                  ],
                  [
                        "Bảo hiểm sức khỏe",
                        "Sức khỏe, thân thể; chi phí y tế."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "2.2. Bảo hiểm bắt buộc (Điều 8 Luật + NĐ 67)",
            "items": [
                  "Là sản phẩm nhằm bảo vệ lợi ích công cộng, môi trường và an toàn xã hội.",
                  "Bốn nhóm theo Điều 8 Luật KDBH: BHBB TNDS chủ XCG; BH cháy, nổ bắt buộc; BHBB trong hoạt động đầu tư xây dựng; BHBB quy định tại luật khác. NĐ 220/2026 dùng thuật ngữ cập nhật “hoạt động xây dựng”.",
                  "Đối tượng thuộc diện phải mua; được lựa chọn DNBH/chi nhánh PNT nước ngoài được phép triển khai.",
                  "DNBH được phép triển khai KHÔNG được từ chối bán khi đối tượng đáp ứng đủ điều kiện mua.",
                  "Chính phủ quy định chi tiết điều kiện BH, mức phí, STBH tối thiểu."
            ]
      },
      {
            "type": "table",
            "title": "2.3. Khi nào DNBH được từ chối bán BHBB (Đ4 NĐ 67)",
            "head": [
                  "Loại BHBB",
                  "Được từ chối khi"
            ],
            "rows": [
                  [
                        "TNDS chủ XCG",
                        "Xe hết niên hạn sử dụng."
                  ],
                  [
                        "Cháy, nổ bắt buộc",
                        "Cơ sở nguy hiểm cháy nổ chưa nghiệm thu / không có biên bản kiểm tra an toàn PCCC; hoặc bị tạm đình chỉ hoạt động do vi phạm PCCC."
                  ],
                  [
                        "BHBB trong hoạt động xây dựng",
                        "BMBH không đáp ứng đầy đủ điều kiện năng lực hoạt động xây dựng theo Luật Xây dựng."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "2.4. Trách nhiệm then chốt của DNBH với BHBB (Điều 75 NĐ 67)",
            "items": [
                  "Không khuyến mại, chiết khấu thanh toán dưới mọi hình thức đối với BHBB TNDS chủ XCG.",
                  "Đường dây nóng 24/7; ghi âm cuộc gọi; tích hợp tra cứu GCN BHBB TNDS XCG trên website.",
                  "Thông báo hết hạn HĐBH trong vòng 15 ngày trước khi hết hạn.",
                  "Đóng góp Quỹ BH xe cơ giới; nộp 1% tổng phí BH cháy nổ bắt buộc thực tế thu được năm tài chính trước liền kề cho hoạt động PCCC.",
                  "Hạch toán tách biệt doanh thu phí, hoa hồng đại lý, bồi thường và chi phí liên quan BHBB (mẫu 10b-PNT TT 67).",
                  "Gian lận BH theo BLHS → DNBH KHÔNG bồi thường khoản phát sinh/tăng thêm do gian lận.",
                  "Nhà nhận tái NN đứng đầu / nhận từ 10% tổng MTN mỗi HĐ tái → xếp hạng tối thiểu BBB (S&P/Fitch) / B++ (A.M.Best) / Baa1 (Moody's)."
            ]
      },
      {
            "type": "list",
            "title": "2.5. Hành vi bị nghiêm cấm (Điều 9 Luật)",
            "items": [
                  "Kinh doanh BH, tái BH, nhượng tái, môi giới khi không có giấy phép hoặc không đúng phạm vi cấp phép.",
                  "Hoạt động đại lý / dịch vụ phụ trợ khi không đáp ứng điều kiện.",
                  "Gian lận: thông đồng với người thụ hưởng; giả mạo tài liệu để bồi thường/từ chối bồi thường trái pháp luật; tự gây thiệt hại để hưởng quyền lợi BH.",
                  "Đe dọa, cưỡng ép giao kết hợp đồng bảo hiểm."
            ]
      },
      {
            "type": "list",
            "title": "2.6. Cung cấp sản phẩm trên môi trường mạng (Điều 14 Luật, TT 67 Đ4-8)",
            "items": [
                  "Ai được cung cấp: DNBH; chi nhánh DNBH PNT nước ngoài; tổ chức tương hỗ BH vi mô; đại lý BH; DN môi giới BH.",
                  "Đại lý chỉ được cung cấp trong phạm vi hợp đồng đại lý.",
                  "DNBH/MGBH/TCTH được chủ động lựa chọn hình thức; phải chịu trách nhiệm với BMBH nếu ảnh hưởng quyền lợi hợp pháp.",
                  "Thông báo Bộ Tài chính trong 07 ngày làm việc kể từ khi bắt đầu cung cấp trên mạng.",
                  "Toàn bộ quy trình trên mạng: BH vi mô, SK, tử kỳ >1 năm; sản phẩm ≤1 năm không yêu cầu thẩm định trực tiếp; SK/tử kỳ ≤1 năm, XCG, chuyến đi/du lịch.",
                  "Một phần quy trình: hoạt động tư vấn (không thuộc trường hợp toàn bộ quy trình) phải trực tiếp hoặc cuộc gọi kết nối có ghi âm."
            ]
      },
      {
            "type": "note",
            "title": "3. Đại lý bảo hiểm - phần trọng tâm kỳ thi đại lý",
            "tone": "warn",
            "text": "Phần 7 của slide (Đ124-130 Luật, Đ62 NĐ 46, Đ51-53 TT 67). Câu hỏi hay ra: điều kiện cá nhân/tổ chức, nguyên tắc không làm đại lý đồng thời, hoa hồng tối đa, trách nhiệm DNBH khi đại lý vi phạm."
      },
      {
            "type": "table",
            "title": "3.1. Ba khái niệm phải phân biệt",
            "head": [
                  "Thuật ngữ",
                  "Định nghĩa"
            ],
            "rows": [
                  [
                        "Đại lý bảo hiểm",
                        "Tổ chức, cá nhân được DNBH/CNNN/TCTHVM ủy quyền trên cơ sở HĐ đại lý để thực hiện hoạt động đại lý (Đ124)."
                  ],
                  [
                        "Hoạt động đại lý",
                        "Tư vấn; giới thiệu; chào bán SPBH; thu xếp giao kết HĐBH; thu phí; thu thập hồ sơ phục vụ bồi thường/trả tiền BH (khoản 5 Đ4)."
                  ],
                  [
                        "Chứng chỉ đại lý",
                        "3 loại: nhân thọ; phi nhân thọ; sức khỏe (Đ130)."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "3.2. Nội dung đào tạo chứng chỉ đại lý",
            "items": [
                  "Kiến thức chung về BH; nguyên lý nghiệp vụ phù hợp từng loại chứng chỉ.",
                  "Quy tắc đạo đức, ứng xử nghề nghiệp đại lý.",
                  "Quyền/nghĩa vụ của DNBH/CNNN/TCTH và đại lý trong hoạt động đại lý.",
                  "Pháp luật Việt Nam về hoạt động KDBH.",
                  "Kỹ năng và thực hành hành nghề đại lý."
            ]
      },
      {
            "type": "note",
            "title": "Chuyển tiếp chứng chỉ (Luật 139/2025)",
            "tone": "info",
            "text": "Chứng chỉ đại lý cấp trước ngày Luật có hiệu lực được tiếp tục sử dụng đến hết ngày 30/6/2026. Bộ trưởng BTC quy định chi tiết việc chuyển đổi sang chứng chỉ theo Luật mới."
      },
      {
            "type": "table",
            "title": "3.3. Điều kiện hoạt động đại lý (Đ125 Luật)",
            "head": [
                  "Đối tượng",
                  "Điều kiện chính"
            ],
            "rows": [
                  [
                        "Cá nhân",
                        "Công dân VN thường trú tại VN; năng lực hành vi dân sự đầy đủ; chứng chỉ đại lý phù hợp."
                  ],
                  [
                        "Tổ chức",
                        "Thành lập và hoạt động hợp pháp tại VN; đã đăng ký ngành nghề đại lý BH; nhân viên trực tiếp đáp ứng điều kiện đại lý cá nhân; điều kiện nhân sự và điều kiện khác theo NĐ 46."
                  ],
                  [
                        "Không được giao kết HĐ đại lý",
                        "Pháp nhân đang bị truy cứu TNHS / đình chỉ / cấm kinh doanh lĩnh vực liên quan BH; cá nhân đang bị truy cứu TNHS / chấp hành phạt tù / cấm hành nghề liên quan BH."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "3.4. Tổ chức tín dụng làm đại lý (bancassurance) - Đ62 NĐ 46",
            "items": [
                  "Phải thành lập bộ phận chuyên trách thực hiện hoạt động đại lý BH.",
                  "Người đứng đầu bộ phận: tối thiểu 03 năm kinh nghiệm tài chính/ngân hàng/BH + bằng ĐH trở lên chuyên ngành BH (hoặc chuyên ngành khác + chứng chỉ BH theo BTC).",
                  "Mỗi chi nhánh: tối thiểu 3 nhân viên có chứng chỉ đại lý phù hợp; mỗi phòng giao dịch: tối thiểu 1 nhân viên.",
                  "Hệ thống CNTT phù hợp; quy trình giám sát chất lượng (cho phép DNBH tham gia kiểm tra).",
                  "Quầy/bàn giao dịch RIÊNG, tách biệt khu vực giao dịch nghiệp vụ khác của ngân hàng."
            ]
      },
      {
            "type": "list",
            "title": "3.5. Tổ chức đại lý khác + duy trì điều kiện",
            "items": [
                  "Tổ chức khác (không phải TCTD): tối thiểu 3 nhân viên trực tiếp thực hiện hoạt động đại lý; có quy trình giám sát tuân thủ nguyên tắc đại lý.",
                  "Không đáp ứng điều kiện → không được hoạt động đại lý cho đến khi đáp ứng; thông báo DNBH trong 5 ngày làm việc.",
                  "Sau 6 tháng kể từ ngày thông báo mà vẫn không đáp ứng → DNBH phải chấm dứt HĐ đại lý."
            ]
      },
      {
            "type": "list",
            "title": "3.6. Nguyên tắc hoạt động đại lý (Đ127 + Luật 139/2025)",
            "items": [
                  "Cá nhân không được đồng thời làm đại lý cho DNBH/CNNN/TCTH khác hoạt động trong CÙNG loại hình (nhân thọ với nhân thọ; PNT với PNT; sức khỏe với sức khỏe; TCTHVM với TCTHVM).",
                  "Tổ chức được làm đại lý đồng thời cho DNBH khác NẾU được chấp thuận bằng văn bản của DNBH đang làm đại lý.",
                  "Cá nhân đại lý / nhân viên trong tổ chức đại lý chỉ được thực hiện hoạt động đại lý đối với sản phẩm ĐÃ được đào tạo.",
                  "DNBH phải đăng ký, cập nhật thông tin cá nhân/nhân viên đại lý tại CSDL về hoạt động KDBH.",
                  "Cá nhân không hoạt động đại lý 03 năm liên tục → phải thi lấy chứng chỉ mới trước khi hoạt động lại."
            ]
      },
      {
            "type": "list",
            "title": "3.7. Trách nhiệm DNBH khi đại lý vi phạm (ruột)",
            "items": [
                  "DNBH chịu trách nhiệm thực hiện nghĩa vụ theo HĐBH do đại lý thu xếp giao kết.",
                  "Dù đại lý vi phạm HĐ đại lý gây thiệt hại quyền lợi BMBH/NĐBH → DNBH VẪN phải chịu trách nhiệm thực hiện nghĩa vụ HĐBH.",
                  "Đại lý có nghĩa vụ bồi hoàn cho DNBH các khoản đã bồi thường cho BMBH/NĐBH do lỗi của đại lý.",
                  "Hoa hồng, thưởng, hỗ trợ không vượt mức tối đa do Bộ trưởng BTC quy định."
            ]
      },
      {
            "type": "list",
            "title": "3.8. Nghĩa vụ và hành vi cấm của đại lý",
            "items": [
                  "Tư vấn đủ, chính xác; giải thích rõ quyền lợi BH, điều khoản loại trừ, quyền nghĩa vụ BMBH.",
                  "Không tự ý kê khai thông tin cho BMBH khi chưa có sự đồng ý của BMBH.",
                  "Giữ bí mật thông tin khách hàng.",
                  "Cấm: quảng cáo sai sự thật; ngăn cản/xúi giục không kê khai; tranh giành khách hàng bằng ngăn cản, lôi kéo, mua chuộc, đe dọa; xúi giục hủy HĐBH đang hiệu lực.",
                  "Chỉ dùng tài liệu do DNBH cung cấp — không tự xây dựng / tự ý sửa tài liệu giới thiệu sản phẩm, minh họa bán hàng."
            ]
      },
      {
            "type": "table",
            "title": "3.9. Hoa hồng đại lý tối đa (Điều 51 TT 67) - thuộc lòng",
            "head": [
                  "Nghiệp vụ",
                  "HH tối đa"
            ],
            "rows": [
                  [
                        "BH tài sản",
                        "5%"
                  ],
                  [
                        "BH hàng hóa vận chuyển",
                        "10%"
                  ],
                  [
                        "BH thân tàu và TNDS chủ tàu đối với tàu biển",
                        "5%"
                  ],
                  [
                        "BH thân tàu và TNDS chủ tàu (trừ tàu biển)",
                        "15%"
                  ],
                  [
                        "BH trách nhiệm",
                        "5%"
                  ],
                  [
                        "BHBB TNDS chủ xe ô tô",
                        "5%"
                  ],
                  [
                        "BHBB TNDS chủ xe mô tô, xe máy",
                        "20%"
                  ],
                  [
                        "BH cháy, nổ bắt buộc",
                        "5%"
                  ],
                  [
                        "BHBB công trình trong thời gian xây dựng",
                        "5%"
                  ],
                  [
                        "BHBB TNNN tư vấn đầu tư xây dựng",
                        "5%"
                  ]
            ]
      },
      {
            "type": "list",
            "title": "3.10. Cung cấp SPBH qua tổ chức đại lý (Đ53 TT 67)",
            "items": [
                  "Tổ chức đại lý phải giải thích: sản phẩm là BH; tham gia BH KHÔNG phải điều kiện bắt buộc để dùng sản phẩm/dịch vụ khác của tổ chức.",
                  "Đối chiếu dữ liệu HĐBH khai thác mới, doanh thu phí, HĐBH hiệu lực với DNBH định kỳ hàng tháng.",
                  "DNBH không được ký thêm HĐ đại lý cá nhân với nhân viên của tổ chức đại lý để khai thác cùng một HĐBH.",
                  "Ký nhiều HĐ đại lý cho cùng một HĐBH → quy định rõ nội dung ủy quyền từng HĐ; TỔNG hoa hồng không vượt mức tối đa Đ51."
            ]
      },
      {
            "type": "note",
            "title": "4. Xử phạt VPHC và tội gian lận bảo hiểm",
            "variant": "warning",
            "text": "NĐ 174/2024 (hiệu lực 15/02/2025) thay thế hệ thống xử phạt cũ (NĐ 98/2013 và các NĐ sửa đổi). NĐ 78/2026 sửa NĐ 174, hiệu lực 01/7/2026. Tội gian lận BH: Điều 213 BLHS."
      },
      {
            "type": "list",
            "title": "4.1. NĐ 174/2024 - điểm cần nhớ",
            "items": [
                  "Kết cấu: 3 chương, 47 Điều.",
                  "Bãi bỏ nội dung xử phạt VPHC KDBH tại NĐ 98/2013 và các NĐ sửa đổi (48/2018, 80/2019, 102/2021).",
                  "Đối tượng: cá nhân và tổ chức (DNBH, DN tái, DN môi giới, chi nhánh NN, VPĐD NN, tổ chức đại lý, TCTHVM, tổ chức phụ trợ, tổ chức khác liên quan).",
                  "Điểm mới: bổ sung hành vi (không cung cấp tài liệu SP cho KH; đe dọa/cưỡng ép giao kết; không giải thích đủ cho BMBH; quản trị rủi ro/KSNB/KTNB; an toàn tài chính…).",
                  "Bãi bỏ \"buộc nộp lại số lợi bất hợp pháp\" → thay bằng buộc hoàn trả số tiền chiếm đoạt, khôi phục tình trạng ban đầu, thực hiện đúng PL; bãi bỏ buộc bãi nhiệm chức danh quản trị, điều hành."
            ]
      },
      {
            "type": "table",
            "title": "4.2. Phân định thẩm quyền xử phạt",
            "head": [
                  "Cơ quan",
                  "Hành vi thuộc thẩm quyền"
            ],
            "rows": [
                  [
                        "Cục Quản lý bảo hiểm",
                        "Các hành vi tại NĐ 174 (trừ khoản 2, 3, 4 Điều 40)."
                  ],
                  [
                        "Công an nhân dân",
                        "Gian lận giải quyết bồi thường; đe dọa, cưỡng ép giao kết HĐBH; báo cáo BH cháy nổ BB; PCRT / tài trợ khủng bố / tài trợ phổ biến VKHDHL."
                  ],
                  [
                        "Ngân hàng Nhà nước",
                        "Hành vi vi phạm về phòng, chống rửa tiền."
                  ]
            ]
      },
      {
            "type": "list",
            "title": "4.3. Tội gian lận BH - 4 hành vi cấu thành (Đ213 BLHS)",
            "items": [
                  "Thông đồng với người thụ hưởng để giải quyết bồi thường / trả tiền BH trái pháp luật.",
                  "Giả mạo tài liệu, cố ý làm sai lệch thông tin để từ chối bồi thường khi sự kiện BH đã xảy ra.",
                  "Giả mạo tài liệu, cố ý làm sai lệch thông tin trong hồ sơ yêu cầu bồi thường / trả tiền BH.",
                  "Tự gây thiệt hại về tài sản, sức khỏe của mình để hưởng quyền lợi BH (trừ trường hợp luật có quy định khác)."
            ]
      },
      {
            "type": "table",
            "title": "4.4. Ngưỡng cấu thành tội - cá nhân vs pháp nhân",
            "head": [
                  "Chủ thể",
                  "Chiếm đoạt tiền BH",
                  "Gây thiệt hại"
            ],
            "rows": [
                  [
                        "Cá nhân",
                        "20 triệu – dưới 100 triệu (và không thuộc Đ174, 353, 355 BLHS)",
                        "50 triệu – dưới 200 triệu"
                  ],
                  [
                        "Pháp nhân",
                        "Từ 200 triệu trở lên",
                        "Từ 400 triệu trở lên"
                  ]
            ]
      },
      {
            "type": "table",
            "title": "4.5. Khung hình phạt cá nhân",
            "head": [
                  "Khung",
                  "Mức phạt",
                  "Điều kiện"
            ],
            "rows": [
                  [
                        "1",
                        "Phạt tiền 30–100 triệu hoặc cải tạo không giam giữ đến 03 năm",
                        "Chiếm đoạt 20–<100 triệu; hoặc gây thiệt hại 50–<200 triệu."
                  ],
                  [
                        "2",
                        "Phạt tiền 100–300 triệu hoặc phạt tù 01–03 năm",
                        "Có tổ chức; thủ đoạn tinh vi; chiếm đoạt 100–<500 triệu; gây thiệt hại 200 triệu–<1 tỷ; tái phạm nguy hiểm."
                  ],
                  [
                        "3",
                        "Phạt tù 03–07 năm",
                        "Chiếm đoạt từ 500 triệu; hoặc gây thiệt hại từ 1 tỷ."
                  ],
                  [
                        "Bổ sung",
                        "Phạt tiền 10–100 triệu; cấm chức vụ/hành nghề 01–05 năm",
                        "Áp dụng kèm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "4.6. Khung hình phạt pháp nhân",
            "head": [
                  "Khung",
                  "Mức phạt tiền",
                  "Điều kiện"
            ],
            "rows": [
                  [
                        "1",
                        "200 triệu – 1 tỷ",
                        "Chiếm đoạt 200 triệu–<1 tỷ; hoặc gây thiệt hại 400 triệu–<2 tỷ."
                  ],
                  [
                        "2",
                        "1 tỷ – 3 tỷ",
                        "Có tổ chức / thủ đoạn tinh vi / tái phạm nguy hiểm; chiếm đoạt 1–<3 tỷ; gây thiệt hại 2–<5 tỷ."
                  ],
                  [
                        "3",
                        "3 tỷ – 7 tỷ",
                        "Chiếm đoạt từ 3 tỷ; hoặc gây thiệt hại từ 5 tỷ."
                  ],
                  [
                        "Bổ sung",
                        "Cấm kinh doanh / cấm hoạt động một số lĩnh vực / cấm huy động vốn 01–03 năm",
                        "Áp dụng kèm."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "CHECKLIST 18 CON SỐ - Pháp luật KDBH 2025-2026",
            "head": [
                  "Con số",
                  "Ý nghĩa"
            ],
            "rows": [
                  [
                        "15/02/2025",
                        "Hiệu lực NĐ 174/2024 về xử phạt VPHC KDBH."
                  ],
                  [
                        "01/7/2026",
                        "Hiệu lực NĐ 220/2026 (sửa NĐ 67), NĐ 78/2026 (sửa NĐ 174); một phần NĐ 97/2026."
                  ],
                  [
                        "30/6/2026",
                        "Hạn dùng chứng chỉ đại lý cấp trước ngày Luật có hiệu lực."
                  ],
                  [
                        "5%",
                        "Thuế TNCN đại lý; HH tối đa tài sản/trách nhiệm/cháy nổ BB/công trình/TNNN tư vấn/TNDS ô tô; nộp phí cháy nổ BB cho PCCC = 1% (khác)."
                  ],
                  [
                        "1%",
                        "Nộp cho hoạt động PCCC trên tổng phí BH cháy nổ BB thực tế thu được năm trước."
                  ],
                  [
                        "10%",
                        "HH tối đa BH hàng hóa; ngưỡng nhận tái phải xếp hạng BBB/B++/Baa1."
                  ],
                  [
                        "15%",
                        "HH tối đa thân tàu (trừ tàu biển)."
                  ],
                  [
                        "20%",
                        "HH tối đa BHBB TNDS mô tô, xe máy."
                  ],
                  [
                        "15 ngày",
                        "Thông báo hết hạn HĐBH bắt buộc trước khi hết hạn."
                  ],
                  [
                        "07 ngày làm việc",
                        "Thông báo BTC khi bắt đầu cung cấp SPBH trên mạng."
                  ],
                  [
                        "05 ngày làm việc",
                        "Tổ chức đại lý thông báo DNBH khi mất điều kiện hoạt động."
                  ],
                  [
                        "6 tháng",
                        "Thời hạn chờ sau thông báo mất điều kiện trước khi DNBH phải chấm dứt HĐ đại lý."
                  ],
                  [
                        "03 năm",
                        "Không hoạt động đại lý liên tục → phải thi chứng chỉ mới; kinh nghiệm tối thiểu người đứng đầu bộ phận bancassurance."
                  ],
                  [
                        "3 nhân viên",
                        "Tối thiểu tại mỗi chi nhánh TCTD / mỗi tổ chức đại lý khác."
                  ],
                  [
                        "1 nhân viên",
                        "Tối thiểu tại mỗi phòng giao dịch TCTD làm đại lý."
                  ],
                  [
                        "20 / 50 triệu",
                        "Ngưỡng chiếm đoạt / gây thiệt hại cấu thành tội gian lận BH với cá nhân."
                  ],
                  [
                        "200 / 400 triệu",
                        "Ngưỡng chiếm đoạt / gây thiệt hại cấu thành tội gian lận BH với pháp nhân."
                  ],
                  [
                        "3 chương / 47 Điều",
                        "Kết cấu NĐ 174/2024."
                  ]
            ]
      }
]
  },
  {
    id: "dap-an-lech",
    title: "Đáp án lệch giữa hai bộ đề",
    badge: "Đọc lướt",
    summary: "Kết quả đối chiếu hai bộ đề và audit toàn bộ 610 câu theo pháp luật hiện hành, wording ABI/Munich Re và tài liệu đào tạo.",
    blocks: [
      {
            "type": "note",
            "title": "🧠 MẸO NHỚ THẦN TỐC: ĐÁP ÁN LỆCH & BÍ QUYẾT LÀM BÀI TRẮC NGHIỆM",
            "text": "Nguyên tắc vàng khi gặp câu hỏi có đáp án tranh cãi:\n• ƯU TIÊN LUẬT KDBH 2022 & TT 67/2023: Nếu câu hỏi trích từ luật cũ nhưng đã được sửa đổi trong luật 2022, chọn đáp án theo luật hiện hành.\n• CÂU HỎI THEO BỘ MẪU CŨ: Nếu câu hỏi trích nguyên văn từ quy tắc mẫu nước ngoài (ABI, Munich Re), ưu tiên đáp án dài nhất, đầy đủ điều kiện loại trừ nhất (\"Có, nếu không bị loại trừ...\").\n• BÌNH TĨNH: Không có câu điểm liệt, cần 30/40 câu là đạt 100% chuẩn đỗ.",
            "variant": "mnemonic"
      },
      {
            "type": "note",
            "title": "Vì sao có mục này",
            "variant": "info",
            "text": "Ngân hàng câu hỏi trong app ghép từ file 600 câu và đề cương Bảo Long 345 câu. Không nguồn nào được mặc định luôn đúng. Toàn bộ 610 câu đã được audit lại ngày 16/08/2026: ưu tiên pháp luật còn hiệu lực, sau đó đến wording nghiệp vụ ABI/Munich Re và tài liệu đào tạo. Các khóa sai đã được sửa trong pipeline sinh dữ liệu; câu thiếu điều kiện đã được viết lại."
      },
      {
            "type": "table",
            "title": "Sáu câu ĐÃ SỬA theo Luật KDBH 2022",
            "head": [
                  "Nội dung câu hỏi",
                  "Đáp án đúng đã dùng",
                  "Căn cứ"
            ],
            "rows": [
                  [
                        "Các loại hình bảo hiểm được chia thành",
                        "Nhân thọ, phi nhân thọ, sức khỏe",
                        "Điều 7 LKDBH 2022. Cách chia con người / tài sản / TNDS là của luật cũ năm 2000."
                  ],
                  [
                        "DNBH nước ngoài KHÔNG được phép thành lập tại Việt Nam loại hình nào",
                        "Chi nhánh doanh nghiệp bảo hiểm NHÂN THỌ nước ngoài",
                        "Điều 62 LKDBH: chỉ cho phép chi nhánh PHI nhân thọ; công ty cổ phần và công ty TNHH đều được lập."
                  ],
                  [
                        "Bên mua bảo hiểm LỪA DỐI khi giao kết thì DNBH được làm gì",
                        "DNBH có quyền HỦY BỎ hợp đồng bảo hiểm",
                        "Khoản 2 Điều 22. Không phải cả ba phương án — vô hiệu và đơn phương chấm dứt thuộc điều khác."
                  ],
                  [
                        "Trường hợp nào DNBH KHÔNG có quyền đơn phương chấm dứt",
                        "Bên mua không đóng đủ phí trong THỜI GIAN GIA HẠN",
                        "Điều 26: hết thời gian gia hạn mới được chấm dứt, đang trong thời gian gia hạn thì chưa."
                  ],
                  [
                        "NĐBH không thực hiện biện pháp bảo đảm an toàn, DNBH có quyền",
                        "Cả ba: ấn định thời hạn, tăng phí, đơn phương chấm dứt",
                        "Khoản 3 Điều 55 LKDBH."
                  ],
                  [
                        "DNBH không được ủy quyền cho đại lý làm việc gì",
                        "Giữ nguyên phương án D",
                        "Sửa lỗi dữ liệu gốc: ô đáp án ghi ký tự không có trong danh sách phương án."
                  ]
            ]
      },
      {
            "type": "table",
            "title": "Kết luận lại các câu từng còn tranh cãi",
            "head": [
                  "Nội dung câu hỏi",
                  "Kết luận sau audit",
                  "Căn cứ"
            ],
            "rows": [
                  [
                        "Bên mua bảo hiểm có nghĩa vụ cung cấp thông tin liên quan đến",
                        "Theo ngữ cảnh đánh giá rủi ro của câu: thông tin về đối tượng bảo hiểm.",
                        "Điều 21 dùng phạm vi rộng hơn là mọi thông tin liên quan đến HĐBH; phải đọc đúng stem."
                  ],
                  [
                        "Chọn phương án đúng nhất về loại trừ bảo hiểm",
                        "Giữ A, C đúng theo hệ thuật ngữ của giáo trình.",
                        "Tài liệu Bảo Long định nghĩa rủi ro loại trừ gồm rủi ro không thể bảo hiểm và rủi ro DNBH không chấp nhận."
                  ],
                  [
                        "Phát biểu nào đúng nhất về đại lý bảo hiểm",
                        "Đại lý có quyền yêu cầu hoàn trả tiền ký quỹ / tài sản thế chấp.",
                        "Điều 129 yêu cầu chấp thuận bằng văn bản khi tổ chức đồng thời làm đại lý cho DNBH khác."
                  ],
                  [
                        "Doanh thu tiêu chuẩn theo đơn Gián đoạn kinh doanh ABI",
                        "Giai đoạn tương ứng với thời hạn bồi thường trong 12 tháng trước sự cố, có điều chỉnh xu hướng.",
                        "ABI/UK BI wording. Toàn bộ 12 tháng trước sự cố là doanh thu năm, không phải doanh thu tiêu chuẩn."
                  ],
                  [
                        "Nổ vật liệu trong thiết bị áp lực, tổn thất nào được bảo hiểm",
                        "Tài sản được bảo hiểm xung quanh bị thiệt hại.",
                        "ABI Fire and Special Perils: loại trừ chính thiết bị/vật chứa bị nổ nội tại, không mở rộng sang tài sản được bảo hiểm khác."
                  ],
                  [
                        "Tài sản trên và xung quanh công trường thuộc phần nào của đơn CAR/EAR",
                        "Phần I, nếu được kê khai và có số tiền bảo hiểm hoặc extension phù hợp.",
                        "Munich Re CAR/EAR: Phần II là trách nhiệm pháp lý với bên thứ ba, không bảo hiểm tài sản thuộc ownership/care/custody/control của NĐBH."
                  ]
            ]
      },
      {
            "type": "note",
            "title": "Gặp câu lệch trong phòng thi thì làm sao",
            "variant": "warning",
            "text": "Khi phương án chữ thay đổi, bám vào căn cứ và nội dung đúng thay vì học thuộc vị trí A/B/C/D. Luật và wording chính thức có giá trị kiểm chứng cao hơn khóa của bất kỳ bộ đề ôn tập nào."
      }
]
  }
];

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    term: 'Điểm đỗ Chứng chỉ ĐLBH cơ bản',
    category: 'Quy định thi',
    definition: 'Đạt từ 75% trở lên (tối thiểu 30 / 40 câu hỏi trắc nghiệm)',
    detail: 'Thời gian thi: 60 phút. Làm 40 câu hỏi, mỗi câu 1 đáp án đúng.'
  },
  {
    id: 'fc-2',
    term: 'Thời hạn cấp chứng chỉ đại lý',
    category: 'Quy định thi',
    definition: 'Trong thời hạn 3 ngày kể từ ngày có QĐ phê duyệt kết quả',
    detail: 'Do Cơ sở đào tạo (CSĐT) in và trao chứng chỉ cho học viên.'
  },
  {
    id: 'fc-3',
    term: 'Phê duyệt kết quả thi Giấy vs Máy',
    category: 'Quy định thi',
    definition: 'Thi giấy: 5 ngày. Thi máy tính (Online) và Viết 2: 3 ngày.',
    detail: 'Do Cục Quản lý Giám sát Bảo hiểm (Bộ Tài chính) phê duyệt.'
  },
  {
    id: 'fc-4',
    term: 'Thời hạn nộp đơn phúc khảo',
    category: 'Quy định thi',
    definition: '20 ngày kể từ ngày công bố quyết định kết quả thi',
    detail: 'Lưu ý: Phúc khảo CHỈ áp dụng đối với các kỳ thi trên giấy. Chấm lại trong 5 ngày.'
  },
  {
    id: 'fc-5',
    term: 'Không hoạt động liên tục bao lâu phải thi lại?',
    category: 'Quy định thi',
    definition: '3 năm liên tục',
    detail: 'Nếu đại lý không phát sinh hoạt động đại lý bảo hiểm trong 3 năm liên tiếp thì chứng chỉ hết giá trị sử dụng và phải thi lại từ đầu.'
  },
  {
    id: 'fc-6',
    term: 'Bị thu hồi chứng chỉ do gian lận',
    category: 'Quy định thi',
    definition: 'Bị cấm thi trong 12 tháng tiếp theo',
    detail: 'Sau 12 tháng kể từ ngày bị thu hồi mới được quyền đăng ký dự thi lại.'
  },
  {
    id: 'fc-7',
    term: 'HĐBH vs DNBH vs BMBH vs NĐBH',
    category: 'Viết tắt tiếng Việt',
    definition: 'HĐBH: Hợp đồng bảo hiểm. DNBH: Công ty bảo hiểm. BMBH: Bên mua đóng phí. NĐBH: Người được bảo vệ.',
    detail: 'BMBH và NĐBH có thể là hai người khác nhau (ví dụ: công ty mua cho nhân viên).'
  },
  {
    id: 'fc-8',
    term: 'STBH vs TNDS',
    category: 'Viết tắt tiếng Việt',
    definition: 'STBH: Số tiền bảo hiểm (trần bồi thường). TNDS: Trách nhiệm dân sự (bồi thường cho bên thứ 3).',
    detail: 'Bảo hiểm TNDS của chủ xe cơ giới là bảo hiểm bắt buộc theo luật định.'
  },
  {
    id: 'fc-9',
    term: 'CAR (Contractors All Risks)',
    category: 'Quy tắc tiếng Anh',
    definition: 'Bảo hiểm mọi rủi ro xây dựng cho công trình ĐANG THI CÔNG',
    detail: 'Bảo vệ chính công trình kiến trúc. KHÔNG tự động bảo hiểm máy móc thi công (muốn có phải mua CPM).'
  },
  {
    id: 'fc-10',
    term: 'EAR (Erection All Risks)',
    category: 'Quy tắc tiếng Anh',
    definition: 'Bảo hiểm mọi rủi ro LẮP ĐẶT máy móc thiết bị công nghiệp',
    detail: 'Phân biệt CAR (thiên về xây dựng nhà xưởng) với EAR (thiên về lắp đặt máy móc dây chuyền).'
  },
  {
    id: 'fc-11',
    term: 'CPM (Contractors Plant & Machinery)',
    category: 'Quy tắc tiếng Anh',
    definition: 'Bảo hiểm bản thân máy móc thi công (cần cẩu, máy xúc, máy ủi)',
    detail: 'Đề hay gài: Đơn CAR KHÔNG bảo hiểm xe máy thi công tại công trường.'
  },
  {
    id: 'fc-12',
    term: 'CECR (Civil Engineering Completed Risks)',
    category: 'Quy tắc tiếng Anh',
    definition: 'Bảo hiểm công trình dân dụng ĐÃ XÂY XONG và ĐƯA VÀO SỬ DỤNG',
    detail: 'Định giá theo Giá trị thay thế mới. Phạm vi gồm cháy nổ, bão gió cấp 8+, lũ lụt sụt lở đất.'
  },
  {
    id: 'fc-13',
    term: 'BI (Business Interruption) & MB',
    category: 'Quy tắc tiếng Anh',
    definition: 'BI: Bảo hiểm gián đoạn kinh doanh (mất lợi nhuận). MB: Đổ vỡ máy móc cơ điện nội tại.',
    detail: 'BI đền bù lợi nhuận ròng bị mất trong thời gian nhà xưởng phải tạm ngừng hoạt động.'
  },
  {
    id: 'fc-14',
    term: 'QS (Quota Share) vs SPL (Surplus)',
    category: 'Tái bảo hiểm',
    definition: 'QS: Tái bảo hiểm chia theo TỶ LỆ CỐ ĐỊNH. SPL: Tái bảo hiểm giữ mức cố định, nhượng phần vượt (MỨC DÔI).',
    detail: 'Cả hai đều thuộc nghiệp vụ tái bảo hiểm tỷ lệ.'
  },
  {
    id: 'fc-15',
    term: 'Đại lý KHÔNG ĐƯỢC làm gì?',
    category: 'Đại lý bảo hiểm',
    definition: 'KHÔNG được ký hợp đồng, KHÔNG thu xếp tái bảo hiểm, KHÔNG giám định tổn thất, KHÔNG quyết định bồi thường.',
    detail: 'Đại lý chỉ "thu xếp giao kết", còn bên ký kết và quyết định bồi thường là Doanh nghiệp bảo hiểm.'
  },
  {
    id: 'fc-16',
    term: 'Cá nhân làm đại lý cho 2 DNBH?',
    category: 'Đại lý bảo hiểm',
    definition: 'KHÔNG ĐƯỢC đồng thời làm đại lý cho DNBH khác trong CÙNG LOẠI HÌNH bảo hiểm.',
    detail: 'Tổ chức thì được làm cho DNBH khác nếu có chấp thuận bằng văn bản của DNBH đang làm.'
  },
  {
    id: 'fc-17',
    term: 'Hoa hồng TNDS xe máy vs Ô tô',
    category: 'Đại lý bảo hiểm',
    definition: 'TNDS bắt buộc xe máy: 20%. TNDS bắt buộc ô tô: 5%.',
    detail: 'Bẫy thi lớn! Xe máy cao gấp 4 lần ô tô trong nhóm bảo hiểm bắt buộc.'
  },
  {
    id: 'fc-18',
    term: 'Hoa hồng cháy nổ Bắt buộc vs Tự nguyện',
    category: 'Đại lý bảo hiểm',
    definition: 'Cháy nổ BẮT BUỘC: 5%. Cháy nổ TỰ NGUYỆN: 10%.',
    detail: 'Đọc kỹ từ "bắt buộc" hay "tự nguyện" trong câu hỏi thi.'
  },
  {
    id: 'fc-19',
    term: 'Hoa hồng Thấp nhất & Cao nhất PNT',
    category: 'Đại lý bảo hiểm',
    definition: 'Thấp nhất: Hàng không (0,5%). Cao nhất phi nhân thọ: Nông nghiệp (20%).',
    detail: 'Bảo hiểm sức khỏe cũng có hoa hồng tối đa 20%.'
  },
  {
    id: 'fc-20',
    term: 'Khi đại lý làm sai gây thiệt hại cho khách?',
    category: 'Đại lý bảo hiểm',
    definition: 'DNBH VẪN PHẢI chịu trách nhiệm thực hiện nghĩa vụ theo hợp đồng đối với khách hàng.',
    detail: 'Sau khi bồi thường cho khách hàng, DNBH có quyền yêu cầu đại lý bồi hoàn lại.'
  },
  {
    id: 'fc-21',
    term: '5 nguyên tắc giao kết HĐBH (Điều 16)',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Trung thực tuyệt đối — Quyền lợi có thể được bảo hiểm — Bồi thường — Thế quyền — Rủi ro ngẫu nhiên',
    detail: 'Mẹo nhớ: Trung thực - Quyền lợi - Bồi thường - Thế quyền - Rủi ro ngẫu nhiên.'
  },
  {
    id: 'fc-22',
    term: 'Mục đích của nguyên tắc Bồi thường (Indemnity)',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Khôi phục tình trạng tài chính như trước tổn thất. KHÔNG ĐƯỢC LÀM GIÀU từ bảo hiểm.',
    detail: 'Số tiền bồi thường không bao giờ vượt quá thiệt hại thực tế của tài sản.'
  },
  {
    id: 'fc-23',
    term: 'Phạm vi áp dụng nguyên tắc Thế quyền (Subrogation)',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'CHỈ áp dụng BH tài sản & TNDS. TUYỆT ĐỐI KHÔNG áp dụng BH nhân thọ và quyền lợi khoán.',
    detail: 'DNBH sau khi đền tài sản được quyền thay khách hàng đi đòi người thứ 3 đã gây ra tai nạn.'
  },
  {
    id: 'fc-24',
    term: 'Nguyên tắc Khoán trong bảo hiểm con người',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Chi trả theo số tiền đã thỏa thuận. Được nhận đồng thời từ NHIỀU HỢP ĐỒNG tại nhiều DNBH.',
    detail: 'Tính mạng con người là vô giá, không áp dụng nguyên tắc bồi thường và không tính bảo hiểm trùng.'
  },
  {
    id: 'fc-25',
    term: 'Thời điểm tồn tại quyền lợi có thể được bảo hiểm',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'BH nhân thọ: lúc GIAO KẾT HỢP ĐỒNG. BH tài sản: lúc XẢY RA TỔN THẤT.',
    detail: 'Bẫy thi lớn! Bán xe rồi mà xe cháy thì người bán không được bồi thường vì mất quyền lợi lúc tổn thất.'
  },
  {
    id: 'fc-26',
    term: 'Nguyên tắc Đóng góp bồi thường (Contribution)',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Áp dụng cho bảo hiểm trùng/đồng bảo hiểm tài sản: Các DNBH cùng đền bù theo TỶ LỆ STBH.',
    detail: 'Tổng số tiền tất cả các công ty bồi thường không được vượt quá thiệt hại thực tế.'
  },
  {
    id: 'fc-27',
    term: 'Nguyên nhân gần (Proximate Cause)',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Nguyên nhân đủ mạnh khởi động chuỗi mắt xích sự kiện dẫn đến tổn thất, không bị gián đoạn.',
    detail: 'Chỉ bồi thường khi nguyên nhân gần là rủi ro thuộc phạm vi bảo hiểm.'
  },
  {
    id: 'fc-28',
    term: 'Nguyên tắc Số đông bù số ít',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Dựa trên quy luật thống kê xác suất: lấy phí đóng góp của số đông bù đắp tổn thất cho số ít.',
    detail: 'Số lượng đối tượng cùng loại tham gia càng lớn thì rủi ro càng được phân tán an toàn.'
  },
  {
    id: 'fc-29',
    term: 'Nguyên tắc Bồi thường vs Khoán',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Bồi thường: Chỉ áp dụng tài sản & TNDS, tối đa bằng thiệt hại thực tế. Khoán: Áp dụng con người, trả cố định theo STBH đã thỏa thuận.',
    detail: 'Bảo hiểm con người được nhận tiền đồng thời từ nhiều hợp đồng; không bị coi là bảo hiểm trùng.'
  },
  {
    id: 'fc-30',
    term: 'Thế quyền (Subrogation) cấm ở đâu?',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Tuyệt đối CẤM áp dụng trong bảo hiểm nhân thọ và quyền lợi khoán sức khỏe. Chỉ áp dụng cho tài sản và TNDS.',
    detail: 'Khi NĐBH tự ý từ bỏ quyền đòi người thứ 3, DNBH được quyền giảm trừ số tiền bồi thường tương ứng.'
  },
  {
    id: 'fc-31',
    term: 'Thời điểm tồn tại Insurable Interest',
    category: 'Nguyên tắc bảo hiểm',
    definition: 'Bảo hiểm nhân thọ: TẠI THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG. Bảo hiểm tài sản: TẠI THỜI ĐIỂM XẢY RA TỔN THẤT.',
    detail: 'Vợ chồng mua cho nhau rồi ly hôn: Hợp đồng nhân thọ vẫn có hiệu lực pháp luật!'
  },
  {
    id: 'fc-32',
    term: 'Rủi ro thuần túy vs Rủi ro đầu cơ',
    category: 'Rủi ro & Khái niệm',
    definition: 'Thuần túy (Pure): Chỉ có tổn thất hoặc hòa vốn -> Được bảo hiểm. Đầu cơ (Speculative): Có thể có lãi -> KHÔNG được bảo hiểm.',
    detail: 'Bảo hiểm không bao giờ nhận bảo hiểm rủi ro chơi chứng khoán hay đầu cơ bất động sản.'
  },
  {
    id: 'fc-33',
    term: 'Nguy cơ (Hazard) vs Hiểm họa (Peril)',
    category: 'Rủi ro & Khái niệm',
    definition: 'Nguy cơ: Điều kiện làm tăng khả năng xảy ra tổn thất (nhà gỗ). Hiểm họa: Nguyên nhân trực tiếp gây tổn thất (hỏa hoạn, lũ lụt).',
    detail: 'Trật tự phát sinh: Nguy cơ (Hazard) -> Hiểm họa (Peril) -> Tổn thất (Loss).'
  },
  {
    id: 'fc-34',
    term: 'Biện pháp chuyển giao rủi ro điển hình nhất',
    category: 'Rủi ro & Khái niệm',
    definition: 'Mua bảo hiểm thương mại chính là hình thức chuyển giao rủi ro điển hình nhất sang Doanh nghiệp bảo hiểm.',
    detail: 'Phân biệt với: Né tránh, Ngăn ngừa tổn thất (giảm tần suất), Giảm thiểu tổn thất (giảm quy mô thiệt hại), Tự gánh chịu.'
  },
  {
    id: 'fc-35',
    term: 'Bảo hiểm dưới giá trị (STBH < GTBH)',
    category: 'Rủi ro & Khái niệm',
    definition: 'Bồi thường theo tỷ lệ = Thiệt hại thực tế × (STBH / GTBH).',
    detail: 'Nhà 2 tỷ mua 1 tỷ (50%), cháy hỏng 600 triệu -> DNBH bồi thường 300 triệu đồng.'
  },
  {
    id: 'fc-36',
    term: 'Mức khấu trừ vs Miễn thường không khấu trừ',
    category: 'Rủi ro & Khái niệm',
    definition: 'Khấu trừ: Tổn thất > mức thì bồi thường (Tổn thất - Mức khấu trừ). Miễn thường không khấu trừ: Tổn thất > mức thì bồi thường TOÀN BỘ.',
    detail: 'Mức 10 tr, tổn thất 50 tr: Khấu trừ trả 40 tr; Miễn thường không khấu trừ trả đủ 50 tr.'
  },
  {
    id: 'fc-37',
    term: 'Loại trừ tự tử trong bảo hiểm nhân thọ',
    category: 'Rủi ro & Khái niệm',
    definition: 'Tự tử trong vòng 2 năm kể từ ngày ký hoặc khôi phục hợp đồng sẽ KHÔNG ĐƯỢC chi trả số tiền bảo hiểm.',
    detail: 'Hết 2 năm (từ năm thứ 3 trở đi), nếu NĐBH tự tử thì DNBH VẪN PHẢI CHI TRẢ số tiền bảo hiểm theo luật định.'
  },
  {
    id: "fc-38",
    term: "Thời hạn nộp hồ sơ yêu cầu bồi thường",
    category: "Hợp đồng bảo hiểm",
    definition: "01 NĂM kể từ ngày xảy ra sự kiện bảo hiểm.",
    detail: "Thời gian bất khả kháng hoặc trở ngại khách quan không tính vào thời hạn 01 năm này."
  },
  {
    id: "fc-39",
    term: "Thời hạn DNBH phải bồi thường nếu không thỏa thuận",
    category: "Hợp đồng bảo hiểm",
    definition: "15 NGÀY kể từ ngày nhận đủ hồ sơ yêu cầu bồi thường hợp lệ.",
    detail: "Nếu từ chối bồi thường thì DNBH phải trả lời bằng văn bản và nêu rõ lý do."
  },
  {
    id: "fc-40",
    term: "Thời hiệu khởi kiện tranh chấp HĐBH",
    category: "Hợp đồng bảo hiểm",
    definition: "03 NĂM kể từ thời điểm phát sinh tranh chấp.",
    detail: "Quá thời hạn 3 năm thì các bên mất quyền khởi kiện yêu cầu Tòa án giải quyết."
  },
  {
    id: "fc-41",
    term: "HĐBH vô hiệu từ thời điểm nào?",
    category: "Hợp đồng bảo hiểm",
    definition: "Vô hiệu ngay TỪ THỜI ĐIỂM GIAO KẾT (không có hiệu lực hồi tố từ ban đầu).",
    detail: "Các bên hoàn trả cho nhau những gì đã nhận. Bên có lỗi gây thiệt hại thì phải bồi thường."
  },
  {
    id: "fc-42",
    term: "Căn cứ bồi thường bảo hiểm tài sản",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "GIÁ THỊ TRƯỜNG của tài sản tại THỜI ĐIỂM và NƠI XẢY RA TỔN THẤT + Mức độ thiệt hại thực tế.",
    detail: "Không dùng giá trị sổ sách, không dùng giá tại thời điểm tham gia bảo hiểm."
  },
  {
    id: "fc-43",
    term: "3 hình thức bồi thường tài sản",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "Sửa chữa tài sản; Thay thế tài sản; hoặc Trả tiền bồi thường.",
    detail: "Nếu các bên không thỏa thuận được hình thức bồi thường thì bồi thường BẰNG TIỀN."
  },
  {
    id: "fc-44",
    term: "Cháy nổ bắt buộc — mức giảm bồi thường khi vi phạm PCCC",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "Giảm tối đa 20% số tiền bồi thường bảo hiểm.",
    detail: "Áp dụng khi cơ sở không thực hiện đúng kiến nghị an toàn PCCC của cơ quan công an mà vi phạm đó làm tăng thiệt hại."
  },
  {
    id: "fc-45",
    term: "Doanh thu tiêu chuẩn trong Gián đoạn kinh doanh (ABI)",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "Doanh thu trong 12 tháng ngay trước sự cố, ĐƯỢC ĐIỀU CHỈNH theo xu hướng kinh doanh.",
    detail: "Bồi thường suy giảm doanh thu = (Doanh thu tiêu chuẩn - Doanh thu thực tế) × Tỷ lệ Lợi nhuận gộp."
  },
  {
    id: "fc-46",
    term: "Mẹo chọn đáp án quy tắc ABI",
    category: "Tài sản kỹ thuật",
    definition: "Phương án đúng thường là câu DÀI NHẤT có điều kiện: \"Không, TRỪ KHI...\" hoặc \"Có, NẾU không bị loại trừ...\".",
    detail: "Quy tắc ABI của Hiệp hội bảo hiểm Vương quốc Anh soạn thảo bộ mẫu cho mọi rủi ro tài sản."
  },
  {
    id: "fc-47",
    term: "Điều khoản 72 giờ trong bảo hiểm kỹ thuật",
    category: "Tài sản kỹ thuật",
    definition: "Tổn thất phát sinh trong 72 GIỜ LIÊN TỤC do bão, lũ lụt, động đất được coi là MỘT sự cố bảo hiểm.",
    detail: "Khách hàng chỉ phải chịu một lần mức khấu trừ duy nhất cho toàn bộ chuỗi thiệt hại trong 72 giờ."
  },
  {
    id: "fc-48",
    term: "Lỗi thiết kế vs Khuyết tật vật liệu",
    category: "Tài sản kỹ thuật",
    definition: "Lỗi thiết kế: Loại trừ triệt để (hạng mục lỗi và vạ lây đều KHÔNG đền). Khuyết tật vật liệu: ĐỀN hạng mục vạ lây.",
    detail: "Khuyết tật vật liệu/tay nghề kém: không đền phần việc nhà thầu làm hỏng, nhưng đền phần bị vạ lây."
  },
  {
    id: "fc-49",
    term: "Bảo hiểm Đổ vỡ máy móc (MB — Munich Re)",
    category: "Tài sản kỹ thuật",
    definition: "Bảo hiểm hư hỏng BÊN TRONG cơ điện: đoản mạch, lực ly tâm, nổ vật lý. LOẠI TRỪ hỏa hoạn, sét đánh và nổ hóa học.",
    detail: "Hỏa hoạn và sét đánh trực tiếp là rủi ro bên ngoài do đơn Cháy nổ bảo hiểm."
  },
  {
    id: "fc-50",
    term: "Bảo hiểm CECR (Munich Re)",
    category: "Tài sản kỹ thuật",
    definition: "Bảo hiểm công trình dân dụng ĐÃ HOÀN THÀNH và đưa vào sử dụng, định giá theo GIÁ TRỊ THAY THẾ MỚI.",
    detail: "Tiếp nối sau đơn CAR: CAR bảo hiểm lúc đang xây dựng; CECR bảo hiểm sau khi đã xây xong."
  },
  {
    id: "fc-51",
    term: "Thời gian cân nhắc tham gia bảo hiểm nhân thọ",
    category: "Hợp đồng bảo hiểm",
    definition: "21 NGÀY kể từ ngày nhận được hợp đồng bảo hiểm.",
    detail: "Áp dụng cho HĐBH nhân thọ có thời hạn trên 01 năm. Trong 21 ngày, bên mua có quyền từ chối tiếp tục và được hoàn lại toàn bộ phí sau khi trừ chi phí y tế nếu có."
  },
  {
    id: "fc-52",
    term: "Thời gian gia hạn đóng phí bảo hiểm (Grace Period)",
    category: "Hợp đồng bảo hiểm",
    definition: "60 NGÀY kể từ ngày đến hạn đóng phí bảo hiểm.",
    detail: "Trong thời gian 60 ngày gia hạn, hợp đồng vẫn có hiệu lực và DNBH vẫn chịu trách nhiệm bồi thường nếu xảy ra sự kiện bảo hiểm."
  },
  {
    id: "fc-53",
    term: "HĐBH nhân thọ cho trường hợp chết của người khác",
    category: "Hợp đồng bảo hiểm",
    definition: "Phải có sự ĐỒNG Ý BẰNG VĂN BẢN của người đó (ghi rõ STBH và người thụ hưởng).",
    detail: "NGOẠI TRỪ duy nhất: Cha, mẹ mua bảo hiểm cho con chưa thành niên thì không cần văn bản đồng ý của con."
  },
  {
    id: "fc-54",
    term: "Đối tượng CẤM giao kết HĐBH nhân thọ cho trường hợp chết",
    category: "Hợp đồng bảo hiểm",
    definition: "Người chưa thành niên (trừ cha mẹ/người giám hộ đồng ý bằng VB); Mất NLHVDS; Khó khăn trong nhận thức; Bị hạn chế NLHVDS.",
    detail: "Mọi hợp đồng bảo hiểm nhân thọ cho trường hợp chết giao kết cho các đối tượng này đều VÔ HIỆU theo Điều 39 LKDBH."
  },
  {
    id: "fc-55",
    term: "Giải thích điều khoản hợp đồng khi không rõ ràng",
    category: "Hợp đồng bảo hiểm",
    definition: "Giải thích THEO HƯỚNG CÓ LỢI CHO BÊN MUA BẢO HIỂM.",
    detail: "Khoản 2 Điều 18 LKDBH 2022: Do DNBH là bên soạn thảo hợp đồng mẫu nên khi mập mờ phải chịu thiệt thòi về mặt pháp lý."
  },
  {
    id: "fc-56",
    term: "Khôi phục hiệu lực HĐBH sau khi bị đình chỉ",
    category: "Hợp đồng bảo hiểm",
    definition: "Trong thời hạn 02 NĂM kể từ ngày bị đình chỉ, bên mua đóng đủ số phí còn thiếu.",
    detail: "Quá 02 năm nếu không khôi phục, DNBH có quyền đơn phương chấm dứt hợp đồng và giải quyết quyền lợi theo thỏa thuận."
  },
  {
    id: "fc-57",
    term: "Thời điểm có hiệu lực của HĐBH vô hiệu",
    category: "Hợp đồng bảo hiểm",
    definition: "HĐBH vô hiệu KHÔNG CÓ HIỆU LỰC NGAY TỪ THỜI ĐIỂM GIAO KẾT.",
    detail: "Các bên hoàn trả cho nhau những gì đã nhận. Bên có lỗi gây thiệt hại phải bồi thường."
  },
  {
    id: "fc-58",
    term: "Chuyển giao hợp đồng bảo hiểm",
    category: "Hợp đồng bảo hiểm",
    definition: "Phải được DNBH CHẤP THUẬN BẰNG VĂN BẢN.",
    detail: "Chỉ có hiệu lực sau khi DNBH có văn bản chấp thuận, trừ trường hợp việc chuyển giao được thực hiện theo tập quán quốc tế hoặc các bên có thỏa thuận khác."
  },
  {
    id: "fc-59",
    term: "Thế quyền (Subrogation) KHÔNG được áp dụng với ai?",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "KHÔNG đòi cha, mẹ, vợ, chồng, con, anh, chị, em ruột của người được bảo hiểm.",
    detail: "Khoản 2 Điều 54 LKDBH: DNBH tuyệt đối không được truy đòi người thân thích trừ khi những người này CỐ Ý gây ra tổn thất."
  },
  {
    id: "fc-60",
    term: "Bên mua tự ý từ bỏ quyền đòi bên thứ ba",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "DNBH được GIẢM TRỪ SỐ TIỀN BỒI THƯỜNG tương ứng.",
    detail: "DNBH được giảm trừ tương ứng số tiền mà đáng lẽ DNBH đòi lại được từ người thứ ba nếu bên mua không tự ý từ bỏ."
  },
  {
    id: "fc-61",
    term: "Công thức tính bồi thường Bảo hiểm trùng",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "Bồi thường DNBH = (STBH của DNBH / Tổng STBH của tất cả DNBH) × Thiệt hại thực tế.",
    detail: "Tổng số tiền bồi thường của tất cả các DNBH cộng lại KHÔNG được vượt quá giá trị thiệt hại thực tế của tài sản."
  },
  {
    id: "fc-62",
    term: "Bảo hiểm dưới giá trị: Công thức bồi thường",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "Bồi thường = (STBH / Giá trị thị trường tài sản lúc tổn thất) × Thiệt hại thực tế.",
    detail: "Nếu không có thỏa thuận bảo hiểm theo điều kiện bồi thường đầu tiên, áp dụng nguyên tắc bồi thường theo tỷ lệ."
  },
  {
    id: "fc-63",
    term: "Chi phí giám định tổn thất do ai chịu?",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "DOANH NGHIỆP BẢO HIỂM chịu toàn bộ chi phí giám định tổn thất.",
    detail: "Trường hợp các bên không thống nhất và trưng cầu giám định độc lập: Nếu kết luận DNBH đúng thì bên yêu cầu trả phí; nếu DNBH sai thì DNBH phải trả phí."
  },
  {
    id: "fc-64",
    term: "Chi phí ngăn ngừa và hạn chế tổn thất",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "DNBH phải thanh toán chi phí hợp lý, cần thiết DÙ BIỆN PHÁP ĐÓ KHÔNG MANG LẠI KẾT QUẢ.",
    detail: "Chi phí này thanh toán ngoài số tiền bồi thường tổn thất tài sản nhưng tổng số tiền chi trả không vượt quá mức giới hạn theo thỏa thuận."
  },
  {
    id: "fc-65",
    term: "Cơ quan có thẩm quyền ban hành Quy định bảo hiểm bắt buộc",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "CHÍNH PHỦ là cơ quan duy nhất có thẩm quyền ban hành.",
    detail: "Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu đối với 4 loại bảo hiểm bắt buộc."
  },
  {
    id: "fc-66",
    term: "Mức bồi thường tối đa trong bảo hiểm tài sản",
    category: "Bảo hiểm tài sản & thiệt hại",
    definition: "KHÔNG VƯỢT QUÁ giá trị thị trường của tài sản tại thời điểm xảy ra tổn thất.",
    detail: "Mọi cam kết bồi thường vượt quá giá trị thị trường đều không có giá trị pháp lý, nhằm đảm bảo nguyên tắc bồi thường không làm giàu bất chính."
  },
  {
    id: "fc-67",
    term: "Đơn CAR: Phạm vi bảo hiểm Phần I vs Phần II",
    category: "Tài sản kỹ thuật",
    definition: "Phần I: Thiệt hại vật chất công trình (Bắt buộc). Phần II: Trách nhiệm bên thứ ba (Thỏa thuận).",
    detail: "Phần I bảo hiểm bản thân công trình đang thi công; Phần II bảo hiểm thiệt hại thân thể hoặc tài sản của người thứ ba do thi công gây ra."
  },
  {
    id: "fc-68",
    term: "Thời hạn bảo hiểm đơn CAR bắt đầu và kết thúc khi nào?",
    category: "Tài sản kỹ thuật",
    definition: "Bắt đầu: Khi khởi công hoặc khi dỡ vật liệu xuống công trường. Kết thúc: Khi bàn giao hoặc đưa vào sử dụng.",
    detail: "Thời hạn chấm dứt ngay khi công trình được chủ đầu tư nghiệm thu bàn giao hoặc đưa vào sử dụng thực tế (tùy mốc nào đến trước)."
  },
  {
    id: "fc-69",
    term: "Cặp bẫy xe cẩu đổ trong công trình xây dựng",
    category: "Tài sản kỹ thuật",
    definition: "Cẩu thuộc danh mục thi công Phần I: ĐƯỢC BỒI THƯỜNG; Cẩu mang từ ngoài vào công trường: Phải mua CPM.",
    detail: "Cần đọc kỹ danh mục tài sản kê khai. Nếu xe cẩu không nằm trong giá trị hợp đồng xây lắp thì đơn CAR không tự động chi trả."
  },
  {
    id: "fc-70",
    term: "Bảo hiểm CPM (Máy móc thiết bị chủ thầu)",
    category: "Tài sản kỹ thuật",
    definition: "Bảo hiểm xe máy thi công đang làm việc, nghỉ ngơi hoặc tháo dỡ bảo dưỡng tại công trường.",
    detail: "LOẠI TRỪ phương tiện cơ giới đường bộ được cấp phép lưu hành trên đường công cộng (các xe này phải mua bảo hiểm xe cơ giới)."
  },
  {
    id: "fc-71",
    term: "Bảo dưỡng mở rộng (Extended Maintenance) trong đơn CAR",
    category: "Tài sản kỹ thuật",
    definition: "Bảo hiểm tổn thất phát sinh trong giai đoạn bảo dưỡng nhưng CÓ NGUYÊN NHÂN TỪ GIAI ĐOẠN THI CÔNG.",
    detail: "Khác với Visits Maintenance (chỉ đền lỗi do chính nhà thầu gây ra trong lúc vào làm việc bảo dưỡng)."
  },
  {
    id: "fc-72",
    term: "Bảo dưỡng đơn thuần (Visits Maintenance) trong đơn CAR",
    category: "Tài sản kỹ thuật",
    definition: "Chỉ bảo hiểm tổn thất do chính NHÀ THẦU GÂY RA trong các lần vào công trường làm nghĩa vụ bảo dưỡng.",
    detail: "Phạm vi hẹp hơn Extended Maintenance. Đề thi thường hay hỏi phân biệt 2 loại điều khoản bảo dưỡng này."
  },
  {
    id: "fc-73",
    term: "Tài sản ĐƯỢC bảo hiểm theo đơn PAR (Mọi rủi ro tài sản ABI)",
    category: "Tài sản kỹ thuật",
    definition: "Nhà xưởng, máy móc thiết bị, công trình phụ trợ, hàng hóa vật tư lưu kho.",
    detail: "LOẠI TRỪ: Tiền mặt, đá quý, kim loại quý, séc, chứng khoán, đất đai, đập nước, tài liệu dữ liệu sổ sách kế toán."
  },
  {
    id: "fc-74",
    term: "Đơn Gián đoạn kinh doanh (Loss of Profits / BI) — Điều kiện tiên quyết",
    category: "Tài sản kỹ thuật",
    definition: "Tổn thất vật chất của tài sản PHẢI ĐƯỢC DNBH CHẤP NHẬN BỒI THƯỜNG theo đơn bảo hiểm tài sản.",
    detail: "Nếu thiệt hại vật chất bị từ chối bồi thường (do rơi vào điều khoản loại trừ) thì đơn Gián đoạn kinh doanh cũng tự động KHÔNG được chi trả."
  },
  {
    id: "fc-75",
    term: "Mức trách nhiệm bắt buộc về người trong BH xe cơ giới",
    category: "Bảo hiểm xe cơ giới",
    definition: "150 TRIỆU ĐỒNG/người/vụ tổn thất do xe cơ giới gây ra.",
    detail: "Quy định tại Nghị định 67/2023/NĐ-CP, áp dụng cho cả tử vong và tổn hại sức khỏe, tính mạng của bên thứ ba và hành khách."
  },
  {
    id: "fc-76",
    term: "Mức trách nhiệm bắt buộc về tài sản do Ô TÔ gây ra",
    category: "Bảo hiểm xe cơ giới",
    definition: "100 TRIỆU ĐỒNG/vụ tổn thất do xe ô tô gây ra.",
    detail: "Mức trách nhiệm tối đa DNBH phải bồi thường cho thiệt hại tài sản của bên thứ ba trong mỗi vụ tai nạn."
  },
  {
    id: "fc-77",
    term: "Mức trách nhiệm bắt buộc về tài sản do XE MÁY gây ra",
    category: "Bảo hiểm xe cơ giới",
    definition: "50 TRIỆU ĐỒNG/vụ tổn thất do mô tô, xe gắn máy gây ra.",
    detail: "Bằng một nửa so với mức của xe ô tô (50 triệu vs 100 triệu) theo Nghị định 67/2023/NĐ-CP."
  },
  {
    id: "fc-78",
    term: "Thời hạn tạm ứng bồi thường thiệt hại về sức khỏe xe cơ giới",
    category: "Bảo hiểm xe cơ giới",
    definition: "Trong vòng 03 NGÀY LÀM VIỆC kể từ ngày nhận được thông báo về vụ tai nạn.",
    detail: "DNBH phải tạm ứng bồi thường chi phí y tế ngay cả khi chưa xác định được lỗi của các bên."
  },
  {
    id: "fc-79",
    term: "Mức khấu trừ bảo hiểm vật chất xe không kinh doanh",
    category: "Bảo hiểm xe cơ giới",
    definition: "Tối thiểu 500.000 ĐỒNG/vụ tổn thất (NĐ 67/2023).",
    detail: "Chủ xe tự chịu phần tổn thất dưới mức này; trên mức này DNBH bồi thường phần vượt mức."
  },
  {
    id: "fc-80",
    term: "Bảo hiểm hàng trên xe cùng chủ",
    category: "Bảo hiểm xe cơ giới",
    definition: "Áp dụng mở rộng khi CHỦ XE ĐỒNG THỜI LÀ CHỦ HÀNG.",
    detail: "Không nên áp dụng khi người lái xe đồng thời là chủ xe và chủ hàng để phòng ngừa nguy cơ trục lợi."
  },
  {
    id: "fc-81",
    term: "Thời gian chờ bệnh đặc biệt / bệnh có sẵn trong BH sức khỏe",
    category: "Bảo hiểm con người",
    definition: "365 NGÀY (01 NĂM) theo Điều 12 Thông tư 67/2023/TT-BTC.",
    detail: "Áp dụng đối với ung thư, tim mạch, suy tạng, tiểu đường và các bệnh mạn tính kê khai sẵn."
  },
  {
    id: "fc-82",
    term: "Thời gian chờ thai sản / sinh đẻ",
    category: "Bảo hiểm con người",
    definition: "270 NGÀY (khoảng 9 tháng) kể từ ngày hợp đồng có hiệu lực.",
    detail: "Rủi ro biến chứng thai sản thường có thời gian chờ ngắn hơn (khoảng 90 ngày)."
  },
  {
    id: "fc-83",
    term: "Thời gian chờ bệnh thông thường",
    category: "Bảo hiểm con người",
    definition: "30 NGÀY kể từ ngày bắt đầu thời hạn bảo hiểm.",
    detail: "Trong 30 ngày này nếu phát sinh chi phí khám chữa bệnh thông thường thì DNBH không chi trả."
  },
  {
    id: "fc-84",
    term: "Thời gian loại trừ tự tử trong bảo hiểm nhân thọ",
    category: "Bảo hiểm con người",
    definition: "02 NĂM kể từ ngày nộp khoản phí đầu tiên hoặc khôi phục hiệu lực hợp đồng.",
    detail: "Sau 02 năm nếu người được bảo hiểm tự tử thì DNBH vẫn trả tiền bảo hiểm đầy đủ (Khoản 1 Điều 40 LKDBH)."
  },
  {
    id: "fc-85",
    term: "Thương tật toàn bộ vĩnh viễn (TTTBVV)",
    category: "Bảo hiểm con người",
    definition: "Mất hoàn toàn hoặc liệt hoàn toàn 02 chi/mắt; hoặc suy giảm KNLĐ từ 81% trở lên.",
    detail: "Thường được chứng nhận y tế không sớm hơn 180 ngày kể từ ngày xảy ra tai nạn thương tích."
  },
  {
    id: "fc-86",
    term: "Nguyên tắc khoán trong bảo hiểm con người",
    category: "Bảo hiểm con người",
    definition: "Tính mạng con người là vô giá; trả theo số tiền khoán, KHÔNG ÁP DỤNG THẾ QUYỀN.",
    detail: "Khách hàng có quyền nhận quyền lợi từ nhiều hợp đồng bảo hiểm con người khác nhau cùng lúc."
  },
  {
    id: "fc-87",
    term: "Cơ chế Loss-occurrence (Phát sinh sự cố)",
    category: "Bảo hiểm trách nhiệm",
    definition: "Chỉ cần sự cố XẢY RA TRONG THỜI HẠN BẢO HIỂM thì được đền, dù khiếu nại sau khi hết hạn.",
    detail: "Phổ biến trong bảo hiểm trách nhiệm dân sự công cộng (CGL) và trách nhiệm xe cơ giới."
  },
  {
    id: "fc-88",
    term: "Cơ chế Claims-made (Phát sinh khiếu nại)",
    category: "Bảo hiểm trách nhiệm",
    definition: "Yêu cầu bồi thường của bên thứ ba PHẢI ĐƯỢC ĐƯA RA LẦN ĐẦU trong thời hạn bảo hiểm.",
    detail: "Thường dùng trong bảo hiểm trách nhiệm nghề nghiệp và trách nhiệm giám đốc & cán bộ quản lý (D&O)."
  },
  {
    id: "fc-89",
    term: "Đối tượng của bảo hiểm trách nhiệm",
    category: "Bảo hiểm trách nhiệm",
    definition: "Trách nhiệm dân sự của người được bảo hiểm đối với người thứ ba theo luật định.",
    detail: "Bao gồm cả trách nhiệm bồi thường thiệt hại ngoài hợp đồng và trách nhiệm theo hợp đồng."
  },
  {
    id: "fc-90",
    term: "Chi phí bào chữa trong bảo hiểm trách nhiệm",
    category: "Bảo hiểm trách nhiệm",
    definition: "DNBH phải thanh toán chi phí bào chữa hợp lý ngoài số tiền bồi thường thiệt hại.",
    detail: "Khoản 2 Điều 58 LKDBH: Chi phí này được chi trả nếu có sự đồng ý bằng văn bản của DNBH."
  },
  {
    id: "fc-91",
    term: "Nguyên tắc trách nhiệm độc lập trong tái bảo hiểm",
    category: "Tái bảo hiểm",
    definition: "DNBH gốc chịu trách nhiệm DUY NHẤT với khách hàng; BMBH không được trực tiếp đòi nhà tái.",
    detail: "Điều 29 LKDBH 2022. Khi nhà tái mất khả năng thanh toán, DNBH gốc vẫn phải đền 100% cho khách hàng."
  },
  {
    id: "fc-92",
    term: "Tái bảo hiểm tỷ lệ Quota Share (Số phần trăm cố định)",
    category: "Tái bảo hiểm",
    definition: "DNBH nhượng một TỶ LỆ PHẦN TRĂM CỐ ĐỊNH trên mọi hợp đồng nhận bảo hiểm cho nhà tái.",
    detail: "Tỷ lệ chia phí bảo hiểm và tỷ lệ chia bồi thường giữa DNBH và nhà tái hoàn toàn tương ứng."
  },
  {
    id: "fc-93",
    term: "Tái bảo hiểm Surplus Line (Thặng dư mức giữ lại)",
    category: "Tái bảo hiểm",
    definition: "DNBH giữ lại một mức cố định (Line), phần vượt quá mới nhượng cho nhà tái (bằng n lines).",
    detail: "Linh hoạt giúp DNBH giữ lại các hợp đồng nhỏ và chỉ tái các hợp đồng lớn vượt khả năng tài chính."
  },
  {
    id: "fc-94",
    term: "Tái bảo hiểm phi tỷ lệ Excess of Loss (Vượt mức bồi thường)",
    category: "Tái bảo hiểm",
    definition: "Nhà tái chỉ bồi thường phần thiệt hại VƯỢT QUÁ MỨC TỰ GIỮ của DNBH gốc trong mỗi vụ tổn thất.",
    detail: "Phí tái tính riêng theo tỷ lệ thỏa thuận, không chia theo tỷ lệ phí gốc."
  },
  {
    id: "fc-95",
    term: "Cấm tái bảo hiểm 100%",
    category: "Tái bảo hiểm",
    definition: "DNBH KHÔNG ĐƯỢC tái bảo hiểm toàn bộ trách nhiệm đã nhận trong một hợp đồng bảo hiểm.",
    detail: "Đảm bảo DNBH có trách nhiệm thẩm định rủi ro và gắn liền lợi ích tài chính với đơn bảo hiểm."
  },
  {
    id: "fc-96",
    term: "Điều kiện đỗ chứng chỉ đại lý bảo hiểm cơ bản",
    category: "Bẫy luật & Hàng hải",
    definition: "Đúng từ 75% trở lên (≥ 30/40 câu) trong 60 phút. KHÔNG CÓ CÂU ĐIỂM LIỆT.",
    detail: "Tất cả 40 câu hỏi đều có giá trị điểm ngang nhau, làm sai câu nào chỉ mất điểm câu đó."
  },
  {
    id: "fc-97",
    term: "Điều 9 LKDBH: Hành vi bị nghiêm cấm",
    category: "Bẫy luật & Hàng hải",
    definition: "Cấm kinh doanh bảo hiểm không phép; Cấm ép buộc; Cấm thông đồng trục lợi bảo hiểm.",
    detail: "Vi phạm có thể bị phạt hành chính hoặc xử lý hình sự theo Điều 213 Bộ luật Hình sự."
  },
  {
    id: "fc-98",
    term: "Điều 129 LKDBH: Hành vi bị cấm đối với đại lý",
    category: "Bẫy luật & Hàng hải",
    definition: "Cấm tranh giành khách hàng bằng khuyến mại trái luật; Cấm xúi giục hủy HĐ cũ; Cấm giả mạo.",
    detail: "Đại lý không được ép buộc khách hàng mua sản phẩm bảo hiểm khi vay vốn ngân hàng."
  },
  {
    id: "fc-99",
    term: "Phúc khảo kết quả thi đại lý",
    category: "Bẫy luật & Hàng hải",
    definition: "Chỉ áp dụng cho THI VIẾT TRÊN GIẤY (hạn nộp đơn 20 ngày). THI MÁY TÍNH TUYỆT ĐỐI KHÔNG PHÚC KHẢO.",
    detail: "Thi trên máy tính phần mềm tự động chấm và công bố điểm ngay lập tức."
  },
  {
    id: "fc-100",
    term: "Tổn thất chung (General Average - GA) trong hàng hải",
    category: "Bẫy luật & Hàng hải",
    definition: "Hành động hy sinh hoặc chi phí đặc biệt CỐ Ý VÀ HỢP LÝ vì sự an toàn chung cho tàu và hàng.",
    detail: "Mọi bên được cứu thoát (chủ tàu, chủ hàng, chủ cước) đều phải đóng góp vào tổn thất chung theo tỷ lệ."
  },
  {
    id: "fc-101",
    term: "Giá trị bảo hiểm hàng hóa xuất nhập khẩu",
    category: "Bẫy luật & Hàng hải",
    definition: "110% CIF = Giá hàng + Cước vận chuyển + Phí bảo hiểm + 10% Lãi ước tính.",
    detail: "10% cộng thêm là mức lãi kỳ vọng hợp lý của bên mua khi hàng về đến nơi an toàn."
  },
  {
    id: "fc-102",
    term: "Thời hạn bảo hiểm hàng hóa theo điều khoản ICC",
    category: "Bẫy luật & Hàng hải",
    definition: "Từ kho đến kho (Warehouse to Warehouse), kết thúc tại kho đến hoặc sau 60 NGÀY dỡ khỏi tàu.",
    detail: "Theo Institute Cargo Clauses (London), mốc nào đến trước sẽ áp dụng để chấm dứt bảo hiểm."
  }
];
