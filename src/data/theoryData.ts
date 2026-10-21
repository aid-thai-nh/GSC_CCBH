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
  variant?: 'info' | 'warning' | 'alert' | 'mnemonic';
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
  category: 'Quy định thi' | 'Viết tắt tiếng Việt' | 'Quy tắc tiếng Anh' | 'Tái bảo hiểm' | 'Thuật ngữ' | 'Đại lý bảo hiểm' | 'Nguyên tắc bảo hiểm' | 'Rủi ro & Khái niệm';
  definition: string;
  detail: string;
  trapWarning?: string;
}

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
  }
];
