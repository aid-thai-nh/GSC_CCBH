export interface Question {
  id: string;
  category: 'Quy định thi & chứng chỉ' | 'Từ viết tắt & thuật ngữ' | 'Đại lý bảo hiểm' | 'Nguyên tắc bảo hiểm' | 'Rủi ro & Khái niệm cơ bản';
  subCategory?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUESTION_BANK: Question[] = [
  // =========================================================================
  // PHẦN 1: QUY ĐỊNH THI & CHỨNG CHỈ (30 câu)
  // =========================================================================
  {
    id: 'q-qd-1',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cấu trúc đề',
    question: 'Để thi đỗ Chứng chỉ đại lý bảo hiểm cơ bản, thí sinh phải làm đúng tối thiểu bao nhiêu câu trong đề thi?',
    options: ['28 / 40 câu (70%)', '30 / 40 câu (75%)', '32 / 40 câu (80%)', '35 / 40 câu (87.5%)'],
    correctIndex: 1,
    explanation: 'Quy chế thi chuẩn: Đề thi Chứng chỉ ĐLBH cơ bản gồm 40 câu / 60 phút, đỗ khi đạt từ 75% trở lên (tức đúng từ 30 câu trở lên).'
  },
  {
    id: 'q-qd-2',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cấu trúc đề',
    question: 'Thời gian làm bài thi Chứng chỉ đại lý bảo hiểm cơ bản (40 câu) là bao nhiêu phút?',
    options: ['45 phút', '50 phút', '60 phút', '90 phút'],
    correctIndex: 2,
    explanation: 'Thời gian làm bài thi chứng chỉ đại lý bảo hiểm cơ bản chuẩn là 60 phút cho 40 câu hỏi trắc nghiệm.'
  },
  {
    id: 'q-qd-3',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cấu trúc đề',
    question: 'Đề thi Chứng chỉ đại lý bảo hiểm liên kết đơn vị (khi đã có CCĐL BHNT cơ bản) gồm bao nhiêu câu và làm trong bao nhiêu phút?',
    options: ['20 câu trong 40 phút', '30 câu trong 45 phút', '20 câu trong 30 phút', '40 câu trong 60 phút'],
    correctIndex: 0,
    explanation: 'Chứng chỉ ĐLBH liên kết đơn vị gồm 20 câu hỏi trắc nghiệm, thời gian làm bài 40 phút, đỗ khi đạt ≥ 15 câu (75%).'
  },
  {
    id: 'q-qd-4',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cấu trúc đề',
    question: 'Để đỗ kỳ thi Chứng chỉ bảo hiểm (không phải chứng chỉ đại lý), thí sinh cần trả lời đúng bao nhiêu câu?',
    options: ['≥ 30 / 40 câu (75%)', '≥ 42 / 60 câu (70%)', '≥ 45 / 60 câu (75%)', '≥ 35 / 50 câu (70%)'],
    correctIndex: 1,
    explanation: 'Chứng chỉ bảo hiểm (không phải đại lý) gồm 60 câu, thời gian 90 phút, điều kiện đỗ là đúng từ 42 câu trở lên (tương đương 70%).'
  },
  {
    id: 'q-qd-5',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Phân loại chứng chỉ',
    question: 'Cá nhân đã có Chứng chỉ ĐLBH nhân thọ cơ bản thì được phép bán các sản phẩm bảo hiểm nào sau đây?',
    options: [
      'Tất cả các sản phẩm bảo hiểm nhân thọ kể cả liên kết đơn vị',
      'Sản phẩm bảo hiểm nhân thọ (trừ liên kết đơn vị) và sản phẩm bảo hiểm sức khỏe',
      'Chỉ được bán bảo hiểm sức khỏe ngắn hạn dưới 1 năm',
      'Chỉ được bán bảo hiểm tử kỳ và bảo hiểm hưu trí'
    ],
    correctIndex: 1,
    explanation: 'CC ĐLBH nhân thọ cơ bản cho phép bán sản phẩm bảo hiểm nhân thọ (trừ bảo hiểm liên kết đơn vị) và các sản phẩm bảo hiểm sức khỏe.'
  },
  {
    id: 'q-qd-6',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Phân loại chứng chỉ',
    question: 'Chứng chỉ đại lý bảo hiểm phi nhân thọ cơ bản cho phép phân phối sản phẩm bảo hiểm sức khỏe và tử vong với thời hạn tối đa là bao lâu?',
    options: ['Thời hạn tối đa 6 tháng', 'Thời hạn tối đa 1 năm', 'Thời hạn tối đa 2 năm', 'Thời hạn không giới hạn'],
    correctIndex: 1,
    explanation: 'CC ĐLBH phi nhân thọ cơ bản chỉ được bán sản phẩm bảo hiểm sức khỏe thời hạn ≤ 1 năm và bảo hiểm rủi ro tử vong thời hạn ≤ 1 năm.'
  },
  {
    id: 'q-qd-7',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cơ quan thẩm quyền',
    question: 'Cơ quan nào có thẩm quyền tổ chức kỳ thi và ra quyết định phê duyệt kết quả thi chứng chỉ đại lý bảo hiểm?',
    options: [
      'Hiệp hội Bảo hiểm Việt Nam',
      'Cơ sở đào tạo đại lý bảo hiểm',
      'Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)',
      'Tổng cục Thuế'
    ],
    correctIndex: 2,
    explanation: 'Cục Quản lý, giám sát bảo hiểm (Cục QLGSBH) thuộc Bộ Tài chính là cơ quan nhà nước tổ chức thi và duyệt kết quả.'
  },
  {
    id: 'q-qd-8',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cơ quan thẩm quyền',
    question: 'Đơn vị nào trực tiếp in và cấp chứng chỉ đại lý bảo hiểm cho thí sinh sau khi có quyết định phê duyệt kết quả thi?',
    options: [
      'Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)',
      'Cơ sở đào tạo (CSĐT)',
      'Ủy ban Chứng khoán Nhà nước',
      'Doanh nghiệp bảo hiểm tuyển dụng đại lý'
    ],
    correctIndex: 1,
    explanation: 'Cục QLGSBH phê duyệt kết quả; còn Cơ sở đào tạo (CSĐT) là bên trực tiếp cấp chứng chỉ cho thí sinh.'
  },
  {
    id: 'q-qd-9',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Mốc thời hạn',
    question: 'Thời hạn cơ sở đào tạo phải cấp chứng chỉ đại lý bảo hiểm cho thí sinh sau khi có quyết định phê duyệt kết quả là bao lâu?',
    options: ['3 ngày', '5 ngày', '10 ngày', '15 ngày'],
    correctIndex: 0,
    explanation: 'Trong thời hạn 03 ngày làm việc kể từ ngày có quyết định phê duyệt kết quả thi, cơ sở đào tạo phải cấp chứng chỉ cho học viên.'
  },
  {
    id: 'q-qd-10',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Mốc thời hạn',
    question: 'Thời hạn phê duyệt kết quả thi đối với kỳ thi trên giấy (hình thức Viết 1) là bao nhiêu ngày kể từ ngày thi?',
    options: ['3 ngày', '5 ngày', '7 ngày', '10 ngày'],
    correctIndex: 1,
    explanation: 'Thi trên giấy cần thời gian tập hợp bài và chấm thủ công nên thời hạn phê duyệt là 5 ngày kể từ ngày thi.'
  },
  {
    id: 'q-qd-11',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Mốc thời hạn',
    question: 'Thời hạn phê duyệt kết quả thi đối với kỳ thi trên máy tính (Online 1, 2) và hình thức Viết 2 là bao nhiêu ngày?',
    options: ['1 ngày', '2 ngày', '3 ngày', '5 ngày'],
    correctIndex: 2,
    explanation: 'Kỳ thi trên máy tính (Online 1, 2) và Viết 2 có thời hạn phê duyệt kết quả là 3 ngày.'
  },
  {
    id: 'q-qd-12',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Mốc thời hạn',
    question: 'Thí sinh có nguyện vọng phúc khảo bài thi phải nộp đơn trong thời hạn bao nhiêu ngày kể từ ngày công bố quyết định phê duyệt kết quả?',
    options: ['10 ngày', '15 ngày', '20 ngày', '30 ngày'],
    correctIndex: 2,
    explanation: 'Thời hạn nộp đơn phúc khảo là 20 ngày kể từ ngày có quyết định phê duyệt kết quả thi.'
  },
  {
    id: 'q-qd-13',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Mốc thời hạn',
    question: 'Thời hạn chấm và trả lời kết quả phúc khảo bài thi là bao nhiêu ngày?',
    options: ['3 ngày', '5 ngày', '7 ngày', '10 ngày'],
    correctIndex: 1,
    explanation: 'Trong thời hạn 05 ngày làm việc, đơn vị tổ chức thi phải chấm và trả lời kết quả phúc khảo cho thí sinh.'
  },
  {
    id: 'q-qd-14',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Quy chế phúc khảo',
    question: 'Thủ tục phúc khảo kết quả thi áp dụng đối với hình thức thi nào sau đây?',
    options: [
      'Áp dụng cho mọi hình thức thi (trên máy và trên giấy)',
      'CHỈ áp dụng đối với các kỳ thi trên giấy',
      'CHỈ áp dụng đối với các kỳ thi trên máy vi tính',
      'Không áp dụng phúc khảo cho bất kỳ kỳ thi nào'
    ],
    correctIndex: 1,
    explanation: 'Đặc biệt lưu ý: Phúc khảo CHỈ áp dụng đối với các kỳ thi làm trên giấy. Thi trên máy do phần mềm chấm tự động nên không phúc khảo.'
  },
  {
    id: 'q-qd-15',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Thời hạn chứng chỉ',
    question: 'Đại lý bảo hiểm không hoạt động đại lý liên tục trong thời gian bao lâu thì phải thi lại chứng chỉ đại lý mới?',
    options: ['1 năm liên tục', '2 năm liên tục', '3 năm liên tục', '5 năm liên tục'],
    correctIndex: 2,
    explanation: 'Nếu đại lý không hoạt động đại lý bảo hiểm liên tục trong thời gian 03 năm thì chứng chỉ đại lý hết giá trị sử dụng và phải thi lại từ đầu.'
  },
  {
    id: 'q-qd-16',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Xử lý vi phạm',
    question: 'Cá nhân bị thu hồi chứng chỉ đại lý bảo hiểm do gian lận hoặc vi phạm quy chế thì bị cấm dự thi lại trong thời gian bao lâu?',
    options: ['6 tháng kế tiếp', '12 tháng kế tiếp', '24 tháng kế tiếp', 'Cấm dự thi vĩnh viễn'],
    correctIndex: 1,
    explanation: 'Khi bị thu hồi chứng chỉ do gian lận hoặc vi phạm quy chế, cá nhân bị cấm dự thi lấy chứng chỉ mới trong 12 tháng kế tiếp.'
  },
  {
    id: 'q-qd-17',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Thủ tục đăng ký',
    question: 'Thời hạn tối thiểu cơ sở đào tạo phải gửi danh sách đăng ký thí sinh dự thi chứng chỉ bảo hiểm trước ngày thi là bao nhiêu ngày?',
    options: ['5 ngày', '7 ngày', '10 ngày', '15 ngày'],
    correctIndex: 2,
    explanation: 'Quy định: Phải đăng ký dự thi chứng chỉ bảo hiểm trước ngày tổ chức thi tối thiểu 10 ngày.'
  },
  {
    id: 'q-qd-18',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Điều kiện dự thi',
    question: 'Để được cấp chứng chỉ đại lý bảo hiểm liên kết đơn vị, điều kiện tiên quyết về chứng chỉ của học viên là gì?',
    options: [
      'Đã có chứng chỉ đại lý bảo hiểm phi nhân thọ cơ bản',
      'Đã có chứng chỉ đại lý bảo hiểm nhân thọ cơ bản',
      'Đã có chứng chỉ đại lý bảo hiểm hàng hải',
      'Đã có chứng chỉ chuyên gia tính toán bảo hiểm'
    ],
    correctIndex: 1,
    explanation: 'Muốn học và thi chứng chỉ ĐLBH liên kết đơn vị, thí sinh bắt buộc phải có chứng chỉ ĐLBH nhân thọ cơ bản trước đó.'
  },
  {
    id: 'q-qd-19',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Phân loại chứng chỉ',
    question: 'Hiện nay quy chế đào tạo đại lý bảo hiểm quy định có tổng cộng bao nhiêu loại chứng chỉ đại lý bảo hiểm?',
    options: ['4 loại chứng chỉ', '5 loại chứng chỉ', '6 loại chứng chỉ', '8 loại chứng chỉ'],
    correctIndex: 2,
    explanation: 'Có đúng 6 loại chứng chỉ ĐLBH: Nhân thọ cơ bản, Liên kết đơn vị, Phi nhân thọ cơ bản, Hàng hải, Hàng không, và Sức khỏe.'
  },
  {
    id: 'q-qd-20',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cấu trúc đề',
    question: 'Kỳ thi sát hạch cấp Chứng chỉ đại lý bảo hiểm hàng hải dành cho thí sinh đã có chứng chỉ ĐLBH phi nhân thọ cơ bản thi bao nhiêu câu và yêu cầu đúng bao nhiêu câu để đỗ?',
    options: [
      '30 câu, đúng ≥ 21 câu',
      '20 câu, đúng ≥ 15 câu (75%)',
      '40 câu, đúng ≥ 30 câu (75%)',
      '25 câu, đúng ≥ 18 câu'
    ],
    correctIndex: 1,
    explanation: 'Kỳ thi chuyên biệt hàng hải / hàng không khi đã có CCĐL PNT cơ bản gồm 20 câu trong 40 phút, đỗ khi đúng ≥ 15 câu (75%).'
  },
  {
    id: 'q-qd-21',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Cơ quan quản lý',
    question: 'Cơ quan nào phê duyệt kế hoạch tổ chức thi chứng chỉ đại lý bảo hiểm hàng năm?',
    options: ['Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)', 'Doanh nghiệp bảo hiểm', 'Bộ Công an', 'Ủy ban nhân dân cấp tỉnh'],
    correctIndex: 0,
    explanation: 'Cục Quản lý, giám sát bảo hiểm phê duyệt kế hoạch tổ chức thi chứng chỉ đại lý bảo hiểm hàng năm.'
  },
  {
    id: 'q-qd-22',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Phân loại chứng chỉ',
    question: 'Chứng chỉ đại lý bảo hiểm sức khỏe cho phép đại lý phân phối những sản phẩm bảo hiểm nào?',
    options: [
      'Tất cả sản phẩm bảo hiểm nhân thọ trọn đời',
      'Các sản phẩm bảo hiểm thuộc loại hình bảo hiểm sức khỏe',
      'Bảo hiểm xe cơ giới và tàu thủy',
      'Bảo hiểm cháy nổ bắt buộc'
    ],
    correctIndex: 1,
    explanation: 'Chứng chỉ ĐLBH sức khỏe chỉ cho phép đại lý tư vấn và phân phối các sản phẩm bảo hiểm thuộc loại hình bảo hiểm sức khỏe.'
  },
  {
    id: 'q-qd-23',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Thời gian thi',
    question: 'Một thí sinh tham gia kỳ thi cấp Chứng chỉ bảo hiểm (không phải đại lý) với đề thi 60 câu, thí sinh có thời gian làm bài là bao lâu?',
    options: ['60 phút', '75 phút', '90 phút', '120 phút'],
    correctIndex: 2,
    explanation: 'Kỳ thi Chứng chỉ bảo hiểm (không phải đại lý) có thời gian làm bài là 90 phút cho 60 câu hỏi.'
  },
  {
    id: 'q-qd-24',
    category: 'Quy định thi & chứng chỉ',
    subCategory: 'Quy chế thi',
    question: 'Thí sinh bị đình chỉ thi do vi phạm quy chế phòng thi thì bài thi được xử lý như thế nào?',
    options: ['Được trừ 50% số điểm', 'Bị điểm 0 và hủy kết quả thi của kỳ thi đó', 'Được thi lại vào ca thi tiếp theo', 'Được bảo lưu kết quả các câu đã làm'],
    correctIndex: 1,
    explanation: 'Thí sinh vi phạm quy chế bị đình chỉ thi sẽ nhận điểm 0 và bị hủy bỏ toàn bộ kết quả của kỳ thi.'
  },

  // =========================================================================
  // PHẦN 2: TỪ VIẾT TẮT & THUẬT NGỮ (26 câu)
  // =========================================================================
  {
    id: 'q-tv-1',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Chữ viết tắt "HĐBH" trong toàn bộ tài liệu pháp lý và đề thi nghĩa là gì?',
    options: ['Hội đồng bảo hiểm', 'Hợp đồng bảo hiểm', 'Hành vi đóng phí bảo hiểm', 'Hạn định bồi thường bảo hiểm'],
    correctIndex: 1,
    explanation: 'HĐBH là từ viết tắt của Hợp đồng bảo hiểm — văn bản thỏa thuận xác lập quyền và nghĩa vụ giữa bên mua và DNBH.'
  },
  {
    id: 'q-tv-2',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Chữ viết tắt "DNBH" trong tài liệu ôn thi chỉ đối tượng nào?',
    options: [
      'Doanh nghiệp bảo hiểm (công ty bảo hiểm)',
      'Đại lý bán bảo hiểm',
      'Doanh nghiệp bán hàng hóa',
      'Đoàn người được bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'DNBH là Doanh nghiệp bảo hiểm — bên bán bảo hiểm có giấy phép thành lập và hoạt động của Bộ Tài chính.'
  },
  {
    id: 'q-tv-3',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Phân biệt "BMBH" và "NĐBH", phát biểu nào sau đây là CHÍNH XÁC nhất?',
    options: [
      'BMBH và NĐBH bắt buộc phải luôn luôn là cùng một cá nhân',
      'BMBH là người ký hợp đồng và đóng phí; NĐBH là người có tài sản/tính mạng được bảo vệ',
      'NĐBH là người nộp đơn khiếu nại bồi thường còn BMBH chỉ là người thụ hưởng',
      'BMBH là công ty bảo hiểm còn NĐBH là khách hàng mua bảo hiểm'
    ],
    correctIndex: 1,
    explanation: 'BMBH (Bên mua bảo hiểm) là bên giao kết HĐBH và thanh toán phí. NĐBH (Người được bảo hiểm) là người được bảo hiểm tính mạng, sức khỏe hoặc tài sản.'
  },
  {
    id: 'q-tv-4',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Thuật ngữ viết tắt "STBH" có ý nghĩa gì trong một Hợp đồng bảo hiểm?',
    options: [
      'Số tiền bảo hiểm — hạn mức bồi thường tối đa mà DNBH cam kết chi trả',
      'Số tháng bảo hiểm hiệu lực',
      'Số thứ tự biên lai bảo hiểm',
      'Sổ theo dõi bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'STBH là Số tiền bảo hiểm — số tiền thỏa thuận trong HĐBH làm căn cứ tính phí và là trần chi trả bồi thường tối đa của DNBH.'
  },
  {
    id: 'q-tv-5',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Bảo hiểm xã hội (BHXH) và Bảo hiểm y tế (BHYT) có thuộc phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm không?',
    options: [
      'Có, do Bộ Tài chính trực tiếp cấp phép hoạt động kinh doanh',
      'KHÔNG, do Nhà nước tổ chức thực hiện theo chính sách an sinh xã hội',
      'Chỉ thuộc phạm vi điều chỉnh khi tham gia thêm gói tự nguyện',
      'Thuộc phạm vi điều chỉnh đối với các công ty cổ phần'
    ],
    correctIndex: 1,
    explanation: 'BHXH và BHYT do Nhà nước tổ chức thực hiện phi lợi nhuận, KHÔNG thuộc phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm.'
  },
  {
    id: 'q-tv-6',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Viết tắt tiếng Việt',
    question: 'Viết tắt "TNDS" trong bảo hiểm thường xuất hiện trong cụm từ nào sau đây?',
    options: [
      'Thu nhập dân sự bình quân',
      'Trách nhiệm dân sự (như TNDS của chủ xe cơ giới)',
      'Thời niên đại tài sản bảo hiểm',
      'Thỏa thuận nội dung sản phẩm'
    ],
    correctIndex: 1,
    explanation: 'TNDS viết tắt cho Trách nhiệm dân sự, quen thuộc nhất là bảo hiểm bắt buộc TNDS của chủ xe cơ giới đối với bên thứ 3.'
  },
  {
    id: 'q-ta-1',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Chữ viết tắt "CAR" (Contractors All Risks) là loại bảo hiểm gì?',
    options: [
      'Bảo hiểm ô tô con của nhà thầu',
      'Bảo hiểm mọi rủi ro xây dựng cho công trình ĐANG THI CÔNG',
      'Bảo hiểm trách nhiệm vận tải hàng hóa',
      'Bảo hiểm tai nạn cá nhân cho công nhân xây dựng'
    ],
    correctIndex: 1,
    explanation: 'CAR là viết tắt của Contractors All Risks — bảo hiểm mọi rủi ro của nhà thầu đối với công trình kiến trúc đang thi công xây dựng.'
  },
  {
    id: 'q-ta-2',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Chữ viết tắt "EAR" (Erection All Risks) bảo hiểm cho đối tượng nào?',
    options: [
      'Công trình dân dụng đã hoàn thành và đưa vào sử dụng',
      'Công trình ĐANG LẮP ĐẶT máy móc, thiết bị, dây chuyền kỹ thuật',
      'Máy bay đang cất cánh và hạ cánh',
      'Hàng hóa đang vận chuyển bằng đường sắt'
    ],
    correctIndex: 1,
    explanation: 'EAR là Erection All Risks — bảo hiểm mọi rủi ro lắp đặt máy móc, thiết bị công nghiệp trong thời gian thi công lắp ráp.'
  },
  {
    id: 'q-ta-3',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Đơn bảo hiểm CAR có tự động bảo hiểm cho các loại máy móc thi công tại công trường (cần cẩu, máy xúc, máy ủi) không?',
    options: [
      'Có, vì CAR bảo hiểm mọi rủi ro tại công trường',
      'KHÔNG, máy móc thi công phải mua bảo hiểm riêng theo đơn CPM',
      'Chỉ bảo hiểm máy móc có giá trị dưới 100 triệu đồng',
      'Có, nếu máy móc thuộc sở hữu của chủ đầu tư'
    ],
    correctIndex: 1,
    explanation: 'BẪY THI RẤT HAY GẶP: Đơn CAR chỉ bảo vệ công trình xây dựng, KHÔNG tự động bảo hiểm xe máy thi công. Muốn bảo vệ xe máy thi công phải mua đơn CPM.'
  },
  {
    id: 'q-ta-4',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Đơn bảo hiểm CPM (Contractors Plant and Machinery) bảo hiểm cho cái gì?',
    options: [
      'Cây cối và cảnh quan xung quanh công trường',
      'Bản thân máy móc, thiết bị thi công của nhà thầu (cần cẩu, máy xúc, máy ủi)',
      'Hệ thống phần mềm máy vi tính văn phòng',
      'Mặt sàn bê tông sau khi đổ'
    ],
    correctIndex: 1,
    explanation: 'CPM (Contractors Plant and Machinery) bảo hiểm cho chính máy móc, trang thiết bị thi công của nhà thầu.'
  },
  {
    id: 'q-ta-5',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Bảo hiểm CECR (Civil Engineering Completed Risks) bảo hiểm cho giai đoạn nào của công trình?',
    options: [
      'Giai đoạn đang khảo sát địa chất',
      'Giai đoạn đang ép cọc và thi công xây lắp',
      'Giai đoạn công trình dân dụng ĐÃ HOÀN THÀNH và ĐƯA VÀO SỬ DỤNG',
      'Giai đoạn công trình đang bị phong tỏa phá dỡ'
    ],
    correctIndex: 2,
    explanation: 'CECR bảo hiểm cho các công trình kỹ thuật dân dụng (cầu, đập, kè, hầm) đã hoàn tất xây dựng và đưa vào khai thác sử dụng.'
  },
  {
    id: 'q-ta-6',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Trong quy tắc bảo hiểm CECR, giá trị tham gia bảo hiểm bắt buộc phải xác định theo nguyên tắc nào?',
    options: [
      'Giá trị ghi sổ sách kế toán',
      'Giá trị thực tế còn lại (đã trừ khấu hao)',
      'Giá trị thay thế mới của tài sản',
      'Giá thẩm định phát mại thanh lý'
    ],
    correctIndex: 2,
    explanation: 'Nguyên tắc vàng của CECR: Giá trị tham gia bảo hiểm luôn tính theo GIÁ TRỊ THAY THẾ MỚI, không trừ khấu hao.'
  },
  {
    id: 'q-ta-7',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Chữ viết tắt "ABI" trong các đề thi bảo hiểm tài sản đại diện cho điều gì?',
    options: [
      'Một loại hình bảo hiểm bắt buộc ở Việt Nam',
      'Hiệp hội bảo hiểm Vương quốc Anh (Association of British Insurers) — nơi soạn quy tắc mẫu',
      'Hãng đóng tàu quốc tế',
      'Một quỹ cứu trợ thiên tai toàn cầu'
    ],
    correctIndex: 1,
    explanation: 'ABI (Association of British Insurers) là Hiệp hội bảo hiểm Vương quốc Anh, đơn vị ban hành các bộ quy tắc bảo hiểm chuẩn quốc tế.'
  },
  {
    id: 'q-ta-8',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Đơn bảo hiểm "MB" (Machinery Breakdown) bồi thường cho tổn thất phát sinh do nguyên nhân nào?',
    options: [
      'Máy móc bị trộm cắp khi đang lưu kho ngoài trời',
      'Đổ vỡ, hỏng hóc máy móc do sự cố cơ điện nội tại (quá tải, đoản mạch, vỡ trục)',
      'Hư hỏng máy móc do chiến tranh hoặc nội chiến',
      'Máy móc giảm giá trị do lỗi thời công nghệ'
    ],
    correctIndex: 1,
    explanation: 'MB (Machinery Breakdown) là bảo hiểm đổ vỡ máy móc do sự cố kỹ thuật bên trong: đoản mạch, áp suất tăng đột biến, vỡ trục khuỷu...'
  },
  {
    id: 'q-ta-9',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Quy tắc tiếng Anh',
    question: 'Đơn bảo hiểm "BI" (Business Interruption) bảo hiểm cho đối tượng nào?',
    options: [
      'Tài sản nhà xưởng và máy móc bị hư hỏng',
      'Lợi nhuận kinh doanh bị mất và các chi phí cố định phải duy trì khi ngừng sản xuất do tai nạn',
      'Tiền nộp phạt hành chính của công ty',
      'Trách nhiệm bồi thường cho người tiêu dùng'
    ],
    correctIndex: 1,
    explanation: 'BI (Business Interruption - Gián đoạn kinh doanh) không bảo vệ tài sản hữu hình, mà bảo vệ KHOẢN LỢI NHUẬN MẤT ĐI khi doanh nghiệp phải dừng hoạt động vì tổn thất tài sản.'
  },
  {
    id: 'q-tbh-1',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Tái bảo hiểm',
    question: 'Hình thức Tái bảo hiểm số thành (Quota Share - QS) chia sẻ trách nhiệm bảo hiểm theo cách nào?',
    options: [
      'Chia theo một tỷ lệ phần trăm CỐ ĐỊNH cho mọi rủi ro trong nhóm',
      'Chia theo số tiền bồi thường thực tế của từng vụ việc',
      'Nhà tái chỉ trả tiền khi doanh nghiệp bị phá sản',
      'Chia sẻ theo mức thâm niên của đại lý'
    ],
    correctIndex: 0,
    explanation: 'Quota Share (QS) phân chia phí và bồi thường theo MỘT TỶ LỆ CỐ ĐỊNH (ví dụ: giữ lại 40%, nhượng tái 60%) cho tất cả hợp đồng.'
  },
  {
    id: 'q-tbh-2',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Tái bảo hiểm',
    question: 'Hình thức Tái bảo hiểm mức dôi (Surplus - SPL) hoạt động theo cơ chế nào sau đây?',
    options: [
      'Doanh nghiệp giữ lại một mức tiền cố định, phần vượt mức giữ lại (mức dôi) sẽ nhượng đi',
      'Chia sẻ theo tỷ lệ 50/50 bắt buộc cho mọi hợp đồng',
      'Doanh nghiệp nhượng 100% rủi ro cho công ty nước ngoài',
      'Nhà nhận tái bảo hiểm chịu toàn bộ tổn thất không giới hạn'
    ],
    correctIndex: 0,
    explanation: 'Surplus (SPL - Mức dôi): DNBH xác định mức giữ lại tối đa cho mỗi hợp đồng, phần giá trị bảo hiểm dôi ra sẽ được chuyển nhượng cho nhà tái bảo hiểm.'
  },
  {
    id: 'q-tbh-3',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Tái bảo hiểm',
    question: 'Tái bảo hiểm vượt mức bồi thường (Excess of Loss - XL/XOL) thuộc loại hình tái bảo hiểm nào?',
    options: [
      'Tái bảo hiểm tỷ lệ',
      'Tái bảo hiểm phi tỷ lệ',
      'Tái bảo hiểm nhân thọ trọn đời',
      'Tái bảo hiểm trợ cấp viện phí'
    ],
    correctIndex: 1,
    explanation: 'XL/XOL là hình thức tái bảo hiểm phi tỷ lệ (non-proportional): Nhà tái chỉ chi trả phần bồi thường vượt qua mức tự chịu của doanh nghiệp nhượng.'
  },
  {
    id: 'q-tbh-4',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Tái bảo hiểm',
    question: 'Tái bảo hiểm Stop Loss (SL - Vượt tỷ lệ bồi thường) bồi thường dựa trên chỉ số nào?',
    options: [
      'Số lượng đại lý vi phạm quy chế trong năm',
      'TỔNG TỶ LỆ TỔN THẤT của cả danh mục trong cả năm vượt ngưỡng định trước',
      'Số hợp đồng bảo hiểm bị hủy bỏ',
      'Lãi suất ngân hàng trung ương'
    ],
    correctIndex: 1,
    explanation: 'Stop Loss (SL) bảo vệ DNBH khi tổng tỷ lệ bồi thường cả năm của danh mục nghiệp vụ vượt qua ngưỡng an toàn (ví dụ vượt quá 85%).'
  },
  {
    id: 'q-tn-1',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: 'Thuật ngữ "Khuyết tật của vật liệu" trong bảo hiểm xây dựng kỹ thuật có nghĩa là gì?',
    options: [
      'Vật liệu bị công nhân làm rơi vỡ tại công trường',
      'Vật liệu đã bị lỗi ngầm sẵn từ bên trong trước khi đưa vào công trình (thép lẫn tạp chất, bê tông sai mác)',
      'Vật liệu hết hạn sử dụng theo hóa đơn',
      'Vật liệu bị tăng giá trên thị trường'
    ],
    correctIndex: 1,
    explanation: 'Khuyết tật của vật liệu là hư hỏng/khiếm khuyết có sẵn từ bên trong cấu trúc vật liệu trước lúc thi công (như rỗ ngầm, tạp chất).'
  },
  {
    id: 'q-tn-2',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: 'Khái niệm "Tay nghề kém" trong thi công xây lắp được hiểu là trường hợp nào?',
    options: [
      'Kỹ sư vẽ sai bản vẽ thiết kế',
      'Công nhân thực hiện sai quy trình kỹ thuật thi công (hàn không ngấu, đầm bê tông dối, siết bu-lông lỏng)',
      'Vật liệu bị lỗi tại nơi sản xuất',
      'Thiên tai bão lũ bất khả kháng'
    ],
    correctIndex: 1,
    explanation: 'Tay nghề kém là lỗi do kỹ năng của người lao động: thi công sai phương pháp, thao tác sai tiêu chuẩn kỹ thuật.'
  },
  {
    id: 'q-tn-3',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: 'Khái niệm "Mức khấu trừ" (Deductible) trong bảo hiểm mang ý nghĩa gì?',
    options: [
      'Khoản phí hoa hồng trả cho đại lý bảo hiểm',
      'Số tiền người được bảo hiểm phải tự chịu trong mỗi sự cố tổn thất; bảo hiểm chỉ bồi thường phần vượt mức này',
      'Khoản thuế giá trị gia tăng nộp vào ngân sách nhà nước',
      'Tiền phạt trả chậm phí bảo hiểm'
    ],
    correctIndex: 1,
    explanation: 'Mức khấu trừ là phần giá trị tổn thất mà bên mua/người được bảo hiểm phải tự gánh chịu; doanh nghiệp bảo hiểm chỉ chi trả phần thiệt hại vượt quá mức khấu trừ.'
  },
  {
    id: 'q-tn-4',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: '"Giá trị thay thế mới" của tài sản trong hợp đồng bảo hiểm được hiểu là gì?',
    options: [
      'Giá trị tài sản ghi trên sổ sách kế toán ban đầu',
      'Chi phí mua mới hoặc xây mới tài sản cùng loại ở thời điểm hiện tại, KHÔNG trừ khấu hao',
      'Giá trị bán sắt vụn thanh lý tài sản',
      'Giá trị định giá để nộp thuế trước bạ'
    ],
    correctIndex: 1,
    explanation: 'Giá trị thay thế mới là chi phí cần thiết để thay thế hoặc tái tạo lại tài sản mới tương đương tại thời điểm định giá, không tính giảm trừ khấu hao.'
  },
  {
    id: 'q-tn-5',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: 'Trong tái bảo hiểm, từ viết tắt "Treaty" đại diện cho hình thức nào?',
    options: [
      'Tái bảo hiểm tạm thời từng vụ',
      'Tái bảo hiểm cố định theo hợp đồng khung ký kết hàng năm',
      'Tái bảo hiểm bắt buộc theo luật lao động',
      'Hợp đồng bảo hiểm trọn gói'
    ],
    correctIndex: 1,
    explanation: 'Treaty là hình thức tái bảo hiểm cố định theo hợp đồng thỏa thuận hàng năm, rủi ro đủ điều kiện sẽ tự động được nhượng tái.'
  },
  {
    id: 'q-tn-6',
    category: 'Từ viết tắt & thuật ngữ',
    subCategory: 'Thuật ngữ kỹ thuật',
    question: 'Trong tái bảo hiểm, từ viết tắt "Fac" (Facultative) là hình thức nào?',
    options: [
      'Tái bảo hiểm tạm thời (thương lượng riêng từng vụ)',
      'Tái bảo hiểm trọn gói',
      'Bảo hiểm nhà xưởng tự nguyện',
      'Chính sách thưởng doanh số'
    ],
    correctIndex: 0,
    explanation: 'Facultative (Fac) là hình thức tái bảo hiểm tạm thời/tùy ý lựa chọn riêng lẻ cho từng vụ việc cụ thể.'
  },

  // =========================================================================
  // PHẦN 3: ĐẠI LÝ BẢO HIỂM (30 câu)
  // =========================================================================
  {
    id: 'q-dl-1',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Khái niệm',
    question: 'Theo Điều 124 Luật Kinh doanh bảo hiểm, Đại lý bảo hiểm là gì?',
    options: [
      'Là nhân viên chính thức trong biên chế của cơ quan nhà nước về bảo hiểm',
      'Là tổ chức, cá nhân được DNBH ủy quyền trên cơ sở HỢP ĐỒNG ĐẠI LÝ BẢO HIỂM để thực hiện hoạt động đại lý bảo hiểm',
      'Là người mua bảo hiểm số lượng lớn để bán lại kiếm lời',
      'Là cá nhân được Hiệp hội Bảo hiểm Việt Nam cấp thẻ hội viên'
    ],
    correctIndex: 1,
    explanation: 'Điều 124 LKDBH: Đại lý bảo hiểm là tổ chức, cá nhân được doanh nghiệp bảo hiểm ủy quyền trên cơ sở hợp đồng đại lý bảo hiểm để thực hiện hoạt động đại lý bảo hiểm.'
  },
  {
    id: 'q-dl-2',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Nội dung hoạt động',
    question: 'Khoản 5 Điều 4 Luật KDBH quy định hoạt động đại lý bảo hiểm gồm bao nhiêu nội dung chính?',
    options: ['4 nội dung', '5 nội dung', '6 nội dung', '8 nội dung'],
    correctIndex: 2,
    explanation: 'Hoạt động đại lý gồm 6 nội dung: Tư vấn SPBH; Giới thiệu SPBH; Chào bán SPBH; Thu xếp việc giao kết HĐBH; Thu phí bảo hiểm; Thu thập hồ sơ bồi thường.'
  },
  {
    id: 'q-dl-3',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Bẫy quyền hạn',
    question: 'Hành vi nào sau đây Đại lý bảo hiểm KHÔNG ĐƯỢC PHÉP thực hiện?',
    options: [
      'Tư vấn và giới thiệu sản phẩm bảo hiểm cho khách hàng',
      'Thay mặt Doanh nghiệp bảo hiểm trực tiếp KÝ KẾT hợp đồng bảo hiểm và QUYẾT ĐỊNH bồi thường',
      'Thu xếp việc giao kết hợp đồng bảo hiểm',
      'Thu phí bảo hiểm theo thỏa thuận ủy quyền của DNBH'
    ],
    correctIndex: 1,
    explanation: 'Bẫy thi cực kỳ phổ biến: Đại lý KHÔNG được ký hợp đồng, KHÔNG được giám định tổn thất, KHÔNG được quyết định bồi thường và KHÔNG được thu xếp tái bảo hiểm. Đại lý chỉ "thu xếp giao kết", còn bên ký là DNBH.'
  },
  {
    id: 'q-dl-4',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Điều kiện cá nhân',
    question: 'Điều kiện nào sau đây BẮT BUỘC đối với cá nhân hoạt động đại lý bảo hiểm theo Điều 125 Luật KDBH?',
    options: [
      'Có bằng tốt nghiệp Đại học chuyên ngành Kinh tế hoặc Luật',
      'Là công dân Việt Nam thường trú tại Việt Nam, có năng lực hành vi dân sự đầy đủ, có chứng chỉ đại lý bảo hiểm phù hợp',
      'Có ít nhất 1 năm kinh nghiệm làm việc tại công ty tài chính',
      'Phải có tài sản ký quỹ tối thiểu 50 triệu đồng'
    ],
    correctIndex: 1,
    explanation: 'Điều kiện cá nhân: (1) Là công dân VN thường trú tại VN; (2) Có năng lực hành vi dân sự đầy đủ; (3) Có chứng chỉ đại lý bảo hiểm phù hợp.'
  },
  {
    id: 'q-dl-5',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Điều kiện tổ chức',
    question: 'Đối với tổ chức làm đại lý bảo hiểm (không phải tổ chức tín dụng), điều kiện về số lượng nhân viên trực tiếp thực hiện hoạt động ĐLBH tối thiểu là bao nhiêu?',
    options: ['Tối thiểu 01 nhân viên', 'Tối thiểu 02 nhân viên', 'Tối thiểu 03 nhân viên', 'Tối thiểu 05 nhân viên'],
    correctIndex: 2,
    explanation: 'Theo Nghị định 46/2023/NĐ-CP: Tổ chức khác làm đại lý (không phải ngân hàng) phải có tối thiểu 03 nhân viên trực tiếp thực hiện hoạt động đại lý bảo hiểm có đủ điều kiện.'
  },
  {
    id: 'q-dl-6',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Điều kiện ngân hàng',
    question: 'Tổ chức tín dụng, chi nhánh ngân hàng nước ngoài làm đại lý bảo hiểm phải đảm bảo điều kiện gì tại từng phòng giao dịch/chi nhánh?',
    options: [
      'Phải có ít nhất 10 nhân viên bán bảo hiểm',
      'Phải có quầy (hoặc bàn) giao dịch riêng, tách biệt với khu vực thực hiện các nghiệp vụ ngân hàng khác',
      'Chỉ được bán bảo hiểm vào các ngày cuối tuần',
      'Tổng giám đốc ngân hàng phải trực tiếp đứng tên đại lý'
    ],
    correctIndex: 1,
    explanation: 'Quy định chặt chẽ: Mỗi chi nhánh/phòng giao dịch ngân hàng phải bố trí quầy (hoặc bàn) giao dịch riêng biệt, tách biệt khỏi khu vực giao dịch tiền gửi/cho vay.'
  },
  {
    id: 'q-dl-7',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Đối tượng cấm',
    question: 'Đối tượng nào sau đây KHÔNG ĐƯỢC hoạt động làm đại lý bảo hiểm?',
    options: [
      'Cá nhân đã nghỉ hưu hưởng chế độ bảo hiểm xã hội',
      'Cá nhân đang bị truy cứu trách nhiệm hình sự hoặc đang chấp hành hình phạt tù',
      'Cá nhân chưa từng làm việc trong ngành tài chính',
      'Cá nhân sở hữu ô tô cá nhân'
    ],
    correctIndex: 1,
    explanation: 'Cá nhân đang bị truy cứu trách nhiệm hình sự, đang chấp hành án phạt tù hoặc đang bị cấm hành nghề liên quan đến bảo hiểm tuyệt đối không được làm đại lý.'
  },
  {
    id: 'q-dl-8',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Nguyên tắc hoạt động',
    question: 'Cá nhân đang làm đại lý cho một doanh nghiệp bảo hiểm nhân thọ có được ĐỒNG THỜI làm đại lý cho một doanh nghiệp bảo hiểm nhân thọ KHÁC không?',
    options: [
      'Được phép, nếu được quản lý khu vực đồng ý',
      'KHÔNG ĐƯỢC PHÉP, cá nhân không được đồng thời làm đại lý cho DNBH khác trong CÙNG LOẠI HÌNH bảo hiểm',
      'Được phép tự do không hạn chế',
      'Được phép nếu đạt doanh số bán hàng xuất sắc'
    ],
    correctIndex: 1,
    explanation: 'Nguyên tắc Điều 127: Cá nhân KHÔNG được đồng thời làm đại lý cho DNBH khác hoạt động trong CÙNG LOẠI HÌNH bảo hiểm.'
  },
  {
    id: 'q-dl-9',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Nguyên tắc hoạt động',
    question: 'TỔ CHỨC làm đại lý bảo hiểm có được đồng thời làm đại lý cho DNBH khác không?',
    options: [
      'Tuyệt đối không được trong mọi trường hợp',
      'ĐƯỢC, nhưng phải được sự chấp thuận BẰNG VĂN BẢN của DNBH mà tổ chức đó đang làm đại lý',
      'Được tự do ký kết không cần thông báo',
      'Chỉ được ký nếu hai DNBH là công ty mẹ - con'
    ],
    correctIndex: 1,
    explanation: 'Tổ chức được đồng thời làm đại lý cho DNBH khác NẾU được sự chấp thuận BẰNG VĂN BẢN của DNBH đang làm đại lý.'
  },
  {
    id: 'q-dl-10',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Nguyên tắc hoạt động',
    question: 'Đại lý bảo hiểm chỉ được phép thực hiện hoạt động đại lý đối với những sản phẩm bảo hiểm nào?',
    options: [
      'Bất kỳ sản phẩm nào có trên thị trường',
      'Những sản phẩm bảo hiểm mà đại lý ĐÃ ĐƯỢC ĐÀO TẠO',
      'Những sản phẩm có mức hoa hồng từ 15% trở lên',
      'Những sản phẩm do khách hàng tự yêu cầu bằng văn bản'
    ],
    correctIndex: 1,
    explanation: 'Đại lý chỉ được tư vấn và bán các sản phẩm bảo hiểm mà mình ĐÃ ĐƯỢC ĐÀO TẠO theo quy định.'
  },
  {
    id: 'q-dl-11',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng đại lý',
    question: 'Hoa hồng đại lý bảo hiểm được Doanh nghiệp bảo hiểm chi trả cho đối tượng nào?',
    options: [
      'Chi trả trực tiếp cho Bên mua bảo hiểm để giảm giá sản phẩm',
      'CHỈ ĐƯỢC CHI TRẢ CHO ĐẠI LÝ BẢO HIỂM',
      'Chi trả cho Người thụ hưởng của hợp đồng bảo hiểm',
      'Chia đều cho đại lý và bên mua bảo hiểm'
    ],
    correctIndex: 1,
    explanation: 'Luật quy định rõ: Hoa hồng đại lý CHỈ được trả cho đại lý bảo hiểm, nghiêm cấm dùng hoa hồng để khuyến mại, chiết khấu trái phép cho bên mua bảo hiểm.'
  },
  {
    id: 'q-dl-12',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Cách tính hoa hồng',
    question: 'Hoa hồng đại lý bảo hiểm được tính dựa trên cơ sở nào sau đây?',
    options: [
      'Số tiền bảo hiểm (STBH) ghi trong hợp đồng',
      'Phí bảo hiểm THỰC TẾ THU ĐƯỢC của từng hợp đồng bảo hiểm',
      'Tổng doanh thu của toàn công ty bảo hiểm trong quý',
      'Lợi nhuận ròng của doanh nghiệp bảo hiểm sau thuế'
    ],
    correctIndex: 1,
    explanation: 'Theo Thông tư 67/2023/TT-BTC: Hoa hồng đại lý được tính trên PHÍ BẢO HIỂM THỰC TẾ THU ĐƯỢC của từng hợp đồng bảo hiểm.'
  },
  {
    id: 'q-dl-13',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng bắt buộc',
    question: 'Tỷ lệ hoa hồng đại lý tối đa đối với bảo hiểm bắt buộc TNDS của chủ xe MÔ TÔ, XE MÁY là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 3,
    explanation: 'TNDS bắt buộc xe mô tô, xe máy có tỷ lệ hoa hồng tối đa là 20% (cao nhất trong nhóm bảo hiểm bắt buộc).'
  },
  {
    id: 'q-dl-14',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng bắt buộc',
    question: 'Tỷ lệ hoa hồng đại lý tối đa đối với bảo hiểm bắt buộc TNDS của chủ xe Ô TÔ là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 0,
    explanation: 'BẪY THI CỰC LỚN: TNDS xe máy là 20%, nhưng TNDS bắt buộc xe Ô TÔ chỉ có 5%.'
  },
  {
    id: 'q-dl-15',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng bắt buộc',
    question: 'Tỷ lệ hoa hồng tối đa của nghiệp vụ bảo hiểm Cháy, nổ BẮT BUỘC là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 0,
    explanation: 'Cháy nổ BẮT BUỘC tối đa 5%. (Lưu ý: Cháy nổ TỰ NGUYỆN là 10%).'
  },
  {
    id: 'q-dl-16',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng tự nguyện',
    question: 'Tỷ lệ hoa hồng tối đa của nghiệp vụ bảo hiểm Cháy, nổ TỰ NGUYỆN là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 1,
    explanation: 'Cháy nổ TỰ NGUYỆN là 10%, trong khi cháy nổ BẮT BUỘC chỉ là 5%.'
  },
  {
    id: 'q-dl-17',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng phi nhân thọ',
    question: 'Nghiệp vụ bảo hiểm phi nhân thọ nào sau đây có tỷ lệ hoa hồng đại lý tối đa THẤP NHẤT toàn hệ thống?',
    options: ['Bảo hiểm tài sản (5%)', 'Bảo hiểm trách nhiệm (5%)', 'Bảo hiểm hàng không (0,5%)', 'Bảo hiểm hàng hóa (10%)'],
    correctIndex: 2,
    explanation: 'Bảo hiểm hàng không có tỷ lệ hoa hồng tối đa thấp nhất thị trường: chỉ 0,5%.'
  },
  {
    id: 'q-dl-18',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng phi nhân thọ',
    question: 'Nghiệp vụ bảo hiểm phi nhân thọ nào có tỷ lệ hoa hồng đại lý tối đa CAO NHẤT (lên tới 20%)?',
    options: ['Bảo hiểm tài sản', 'Bảo hiểm nông nghiệp', 'Bảo hiểm hàng hóa vận chuyển', 'Bảo hiểm bảo lãnh'],
    correctIndex: 1,
    explanation: 'Bảo hiểm nông nghiệp có tỷ lệ hoa hồng tối đa cao nhất trong nhóm phi nhân thọ: 20%.'
  },
  {
    id: 'q-dl-19',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng hàng hải',
    question: 'Tỷ lệ hoa hồng tối đa cho bảo hiểm thân tàu và TNDS chủ tàu đối với TÀU BIỂN là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 0,
    explanation: 'Tàu biển lớn: hoa hồng tối đa 5%. Ngược lại, tàu KHÔNG phải tàu biển (tàu sông, tàu cá nội địa) là 15%.'
  },
  {
    id: 'q-dl-20',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng hàng hải',
    question: 'Tỷ lệ hoa hồng tối đa cho bảo hiểm thân tàu và TNDS chủ tàu đối với tàu KHÔNG PHẢI TÀU BIỂN (tàu sông, tàu cá) là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 2,
    explanation: 'Tàu không phải tàu biển (tàu sông, sà lan, tàu cá nội địa) có mức hoa hồng tối đa là 15%.'
  },
  {
    id: 'q-dl-21',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng sức khỏe',
    question: 'Tỷ lệ hoa hồng đại lý tối đa đối với sản phẩm bảo hiểm SỨC KHỎE theo Thông tư 67 là bao nhiêu?',
    options: ['10%', '15%', '20%', '25%'],
    correctIndex: 2,
    explanation: 'Bảo hiểm SỨC KHỎE có tỷ lệ hoa hồng đại lý tối đa là 20% (áp dụng chung toàn diện cho loại hình sức khỏe).'
  },
  {
    id: 'q-dl-22',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Trần thưởng hỗ trợ',
    question: 'Tổng mức chi thưởng, hỗ trợ đại lý và quyền lợi khác đối với bảo hiểm PHI NHÂN THỌ trong năm tài chính không được vượt quá bao nhiêu % tổng hoa hồng đại lý?',
    options: ['30%', '50%', '70%', '100%'],
    correctIndex: 1,
    explanation: 'Quy định trần thưởng hỗ trợ: Bảo hiểm PHI NHÂN THỌ tối đa không vượt quá 50% tổng hoa hồng đại lý phát sinh trong năm.'
  },
  {
    id: 'q-dl-23',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Trần thưởng hỗ trợ',
    question: 'Tổng mức chi thưởng, hỗ trợ đại lý và quyền lợi khác đối với bảo hiểm SỨC KHỎE trong năm tài chính không được vượt quá bao nhiêu % tổng hoa hồng đại lý sức khỏe?',
    options: ['50%', '75%', '100%', '150%'],
    correctIndex: 2,
    explanation: 'Đối với bảo hiểm SỨC KHỎE: Tổng các khoản thưởng, hỗ trợ đại lý không được vượt quá 100% tổng hoa hồng đại lý sức khỏe.'
  },
  {
    id: 'q-dl-24',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Trách nhiệm đại lý',
    question: 'Trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý gây thiệt hại đến quyền lợi hợp pháp của khách hàng, trách nhiệm thuộc về ai?',
    options: [
      'Khách hàng phải tự chịu mọi rủi ro vì đã ký hợp đồng với đại lý',
      'Doanh nghiệp bảo hiểm VẪN PHẢI chịu trách nhiệm thực hiện các nghĩa vụ theo hợp đồng bảo hiểm do đại lý thu xếp giao kết',
      'Cục Quản lý giám sát bảo hiểm sẽ đứng ra bồi thường thay',
      'Hợp đồng bảo hiểm đương nhiên bị vô hiệu và không ai phải chịu trách nhiệm'
    ],
    correctIndex: 1,
    explanation: 'Điều 128 Luật KDBH: DNBH vẫn phải chịu trách nhiệm thực hiện nghĩa vụ theo hợp đồng bảo hiểm do đại lý thu xếp giao kết đối với khách hàng; sau đó DNBH có quyền yêu cầu đại lý bồi hoàn lại.'
  },
  {
    id: 'q-dl-25',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hợp đồng trọn gói',
    question: 'Đối với một Hợp đồng bảo hiểm TRỌN GÓI bao gồm nhiều nghiệp vụ bảo hiểm khác nhau, hoa hồng đại lý được tính như thế nào?',
    options: [
      'Lấy theo tỷ lệ hoa hồng của nghiệp vụ có mức hoa hồng cao nhất',
      'Lấy theo tỷ lệ trung bình cộng của các nghiệp vụ',
      'Bằng TỔNG hoa hồng đại lý của từng nghiệp vụ bảo hiểm cấu thành trong gói',
      'Cố định ở mức 5% cho toàn bộ hợp đồng trọn gói'
    ],
    correctIndex: 2,
    explanation: 'Thông tư 67 quy định: Đối với hợp đồng trọn gói, hoa hồng bằng TỔNG hoa hồng của từng nghiệp vụ bảo hiểm tương ứng trong gói đó.'
  },
  {
    id: 'q-dl-26',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Giảm phí trực tiếp',
    question: 'Trường hợp Doanh nghiệp bảo hiểm bán hàng trực tiếp cho khách hàng (không qua đại lý bảo hiểm), mức giảm phí tối đa cho khách hàng không được vượt quá mức nào?',
    options: [
      'Không được giảm phí trong bất kỳ trường hợp nào',
      'Mức giảm phí tối đa KHÔNG VƯỢT QUÁ tỷ lệ hoa hồng đại lý của sản phẩm bảo hiểm đó',
      'Được giảm tối đa 50% giá trị hợp đồng',
      'Do Giám đốc chi nhánh tự quyết định không giới hạn'
    ],
    correctIndex: 1,
    explanation: 'Quy định chống phá giá: Bán hàng trực tiếp không qua đại lý thì mức giảm phí tối đa không được vượt quá tỷ lệ hoa hồng của sản phẩm đó.'
  },
  {
    id: 'q-dl-27',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Nội dung hợp đồng',
    question: 'Điều 126 Luật KDBH quy định hợp đồng đại lý bảo hiểm phải có bao nhiêu nội dung chính bắt buộc?',
    options: ['5 nội dung', '7 nội dung', '9 nội dung', '12 nội dung'],
    correctIndex: 1,
    explanation: 'Hợp đồng đại lý bảo hiểm gồm 7 nội dung bắt buộc: Tên/địa chỉ ĐL; Tên/địa chỉ DNBH; Phạm vi hoạt động; Quyền và nghĩa vụ; Hoa hồng thưởng; Thời hạn; Phương thức giải quyết tranh chấp.'
  },
  {
    id: 'q-dl-28',
    category: 'Đại lý bảo hiểm',
    subCategory: 'Hoa hồng bắt buộc',
    question: 'Tỷ lệ hoa hồng tối đa cho bảo hiểm bắt buộc người lao động thi công trên công trường là bao nhiêu?',
    options: ['5%', '10%', '15%', '20%'],
    correctIndex: 0,
    explanation: 'Bảo hiểm bắt buộc đối với người lao động thi công trên công trường xây dựng có tỷ lệ hoa hồng tối đa là 5%.'
  },

  // =========================================================================
  // PHẦN 4: NGUYÊN TẮC BẢO HIỂM (22 câu)
  // =========================================================================
  {
    id: 'q-nt-1',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: '5 nguyên tắc Điều 16',
    question: 'Điều 16 Luật Kinh doanh bảo hiểm số 08/2022/QH15 quy định có bao nhiêu nguyên tắc giao kết và thực hiện hợp đồng bảo hiểm?',
    options: ['3 nguyên tắc', '4 nguyên tắc', '5 nguyên tắc', '7 nguyên tắc'],
    correctIndex: 2,
    explanation: 'Điều 16 quy định 5 nguyên tắc: (1) Trung thực tuyệt đối; (2) Quyền lợi có thể được bảo hiểm; (3) Bồi thường; (4) Thế quyền; (5) Rủi ro ngẫu nhiên.'
  },
  {
    id: 'q-nt-2',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Trung thực tuyệt đối',
    question: 'Nguyên tắc "Trung thực tuyệt đối" (Utmost Good Faith) trong kinh doanh bảo hiểm đòi hỏi nghĩa vụ từ phía những chủ thể nào?',
    options: [
      'Chỉ áp dụng bắt buộc đối với Bên mua bảo hiểm',
      'Chỉ áp dụng bắt buộc đối với Doanh nghiệp bảo hiểm',
      'Áp dụng đối với CẢ HAI BÊN: Bên mua bảo hiểm và Doanh nghiệp bảo hiểm',
      'Chỉ áp dụng đối với Đại lý bảo hiểm trung gian'
    ],
    correctIndex: 2,
    explanation: 'Trung thực tuyệt đối là nghĩa vụ hai chiều: Bên mua phải kê khai trung thực mọi thông tin rủi ro, tiền sử bệnh; DNBH phải giải thích rõ quy tắc, điều khoản loại trừ và bảo mật thông tin khách hàng.'
  },
  {
    id: 'q-nt-3',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Trung thực tuyệt đối',
    question: 'Trường hợp Bên mua bảo hiểm cố ý cung cấp thông tin sai sự thật nhằm giao kết HĐBH để được bồi thường, DNBH có quyền xử lý như thế nào?',
    options: [
      'Vẫn phải bồi thường nhưng được phạt tiền 10 triệu đồng',
      'Có quyền đơn phương chấm dứt thực hiện HĐBH, không bồi thường và không hoàn lại phí bảo hiểm',
      'Chỉ được quyền tăng phí bảo hiểm trong năm tiếp theo',
      'Bắt buộc phải khởi kiện ra tòa án hình sự trước khi từ chối bồi thường'
    ],
    correctIndex: 1,
    explanation: 'Theo Luật KDBH, bên mua cố ý gian dối nhằm trục lợi thì DNBH có quyền đơn phương hủy hợp đồng, không phải chi trả tiền bồi thường và không phải hoàn phí cho thời gian đã qua.'
  },
  {
    id: 'q-nt-4',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi được bảo hiểm',
    question: 'Trong BẢO HIỂM TÀI SẢN, nguyên tắc "Quyền lợi có thể được bảo hiểm" bắt buộc phải tồn tại vào thời điểm nào?',
    options: [
      'Bắt buộc chỉ cần có tại thời điểm giao kết hợp đồng',
      'Bắt buộc phải tồn tại tại thời điểm XẢY RA TỔN THẤT',
      'Chỉ cần tồn tại tại thời điểm DNBH thành lập',
      'Không bắt buộc phải tồn tại trong suốt thời hạn hợp đồng'
    ],
    correctIndex: 1,
    explanation: 'BẪY THI CỰC LỚN: Bảo hiểm TÀI SẢN đòi hỏi quyền lợi có thể được bảo hiểm phải tồn tại tại thời điểm XẢY RA TỔN THẤT (nếu đã bán tài sản thì lúc cháy xe không còn quyền lợi để nhận đền bù).'
  },
  {
    id: 'q-nt-5',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi được bảo hiểm',
    question: 'Trong BẢO HIỂM NHÂN THỌ VÀ BẢO HIỂM SỨC KHỎE, "Quyền lợi có thể được bảo hiểm" bắt buộc phải tồn tại vào thời điểm nào?',
    options: [
      'Phải tồn tại liên tục trong suốt 100 năm',
      'Bắt buộc phải tồn tại tại THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG BẢO HIỂM',
      'Chỉ cần tồn tại tại thời điểm thanh toán quyền lợi đáo hạn',
      'Bắt buộc phải có tại thời điểm người được bảo hiểm qua đời'
    ],
    correctIndex: 1,
    explanation: 'BẪY THI ĐỐI CHIẾU: Bảo hiểm NHÂN THỌ / SỨC KHỎE quyền lợi có thể được bảo hiểm chỉ cần tồn tại tại THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG. Vợ chồng mua cho nhau, sau này ly hôn hợp đồng vẫn có hiệu lực pháp lý.'
  },
  {
    id: 'q-nt-6',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi được bảo hiểm',
    question: 'Theo Điều 34 Luật KDBH, Bên mua bảo hiểm có quyền lợi có thể được bảo hiểm đối với những người nào sau đây?',
    options: [
      'Bất kỳ người hàng xóm hoặc đồng nghiệp nào cùng cơ quan',
      'Bản thân; vợ/chồng, cha mẹ, con; anh chị em ruột; người có quan hệ nuôi dưỡng, cấp dưỡng; người có quyền lợi tài chính/nghĩa vụ với bên mua',
      'Chỉ duy nhất bản thân bên mua bảo hiểm',
      'Người trúng thưởng xổ số cùng đợt'
    ],
    correctIndex: 1,
    explanation: 'Điều 34 Luật KDBH quy định rõ: Bản thân; vợ/chồng, cha/mẹ, con; anh chị em ruột; người có quan hệ nuôi dưỡng cấp dưỡng; hoặc người có quyền lợi về tài chính hoặc nghĩa vụ đối với bên mua.'
  },
  {
    id: 'q-nt-7',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc bồi thường',
    question: 'Mục đích cốt lõi của nguyên tắc "Bồi thường" (Indemnity) trong bảo hiểm là gì?',
    options: [
      'Giúp người được bảo hiểm kiếm thêm một khoản lợi nhuận lớn sau khi gặp rủi ro',
      'Đền bù thiệt hại tài chính để khôi phục lại tình trạng tài chính của NĐBH NHƯ NGAY TRƯỚC KHI xảy ra tổn thất',
      'Trừng phạt bên thứ ba gây ra tai nạn giao thông',
      'Tài trợ vốn không hoàn lại cho doanh nghiệp bên mua'
    ],
    correctIndex: 1,
    explanation: 'Nguyên tắc bồi thường: Đền bù thiệt hại để đưa NĐBH trở về trạng thái tài chính như ngay trước lúc tổn thất. KHÔNG ĐƯỢC LÀM GIÀU hay kiếm lời từ tổn thất bảo hiểm.'
  },
  {
    id: 'q-nt-8',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc bồi thường',
    question: 'Theo nguyên tắc Bồi thường trong bảo hiểm tài sản, số tiền bồi thường mà người được bảo hiểm nhận được có đặc điểm gì?',
    options: [
      'Luôn luôn gấp đôi giá trị tài sản đã tham gia',
      'KHÔNG ĐƯỢC VƯỢT QUÁ giá trị thiệt hại thực tế trong sự kiện bảo hiểm',
      'Bằng đúng số tiền ghi trong bảng báo giá thị trường chợ đen',
      'Tùy ý người được bảo hiểm tự ấn định theo cảm xúc'
    ],
    correctIndex: 1,
    explanation: 'Luật KDBH khẳng định: Số tiền bồi thường không được vượt quá thiệt hại thực tế trong sự kiện bảo hiểm (trừ khi có thỏa thuận khác trước).'
  },
  {
    id: 'q-nt-9',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc bồi thường',
    question: 'Nguyên tắc Bồi thường (Indemnity) KHÔNG ÁP DỤNG cho loại hình bảo hiểm nào sau đây?',
    options: [
      'Bảo hiểm cháy nổ nhà xưởng và kho bãi',
      'Bảo hiểm vật chất xe ô tô',
      'Bảo hiểm NHÂN THỌ và quyền lợi KHOÁN trong bảo hiểm con người',
      'Bảo hiểm hàng hóa vận chuyển đường biển'
    ],
    correctIndex: 2,
    explanation: 'Bảo hiểm nhân thọ và quyền lợi khoán trong bảo hiểm con người áp dụng NGUYÊN TẮC KHOÁN (vì tính mạng con người là vô giá, không đo bằng tiền nên không áp dụng nguyên tắc bồi thường).'
  },
  {
    id: 'q-nt-10',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc thế quyền',
    question: 'Nguyên tắc "Thế quyền" (Subrogation) trong kinh doanh bảo hiểm được hiểu là gì?',
    options: [
      'Bên mua bảo hiểm chuyển nhượng toàn bộ tài sản cho ngân hàng bảo lãnh',
      'Người được bảo hiểm chuyển giao cho DNBH quyền yêu cầu người thứ ba gây thiệt hại bồi hoàn trong phạm vi số tiền đã bồi thường',
      'Doanh nghiệp bảo hiểm chuyển giao quyền cấp phép kinh doanh cho Bộ Công an',
      'Đại lý bảo hiểm thay mặt khách hàng đi đóng phí bảo hiểm hàng tháng'
    ],
    correctIndex: 1,
    explanation: 'Thế quyền: Sau khi DNBH chi trả bồi thường cho NĐBH, DNBH được quyền thay mặt NĐBH đòi lại khoản tiền đó từ người thứ ba có lỗi gây ra tai nạn/tổn thất.'
  },
  {
    id: 'q-nt-11',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc thế quyền',
    question: 'Nguyên tắc Thế quyền (Subrogation) TUYỆT ĐỐI KHÔNG ÁP DỤNG đối với trường hợp nào sau đây?',
    options: [
      'Bảo hiểm mọi rủi ro xây dựng (CAR)',
      'Bảo hiểm thân tàu thủy và TNDS chủ tàu',
      'Hợp đồng bảo hiểm NHÂN THỌ và quyền lợi KHOÁN trong bảo hiểm sức khỏe',
      'Bảo hiểm vật chất xe ô tô'
    ],
    correctIndex: 2,
    explanation: 'BẪY THI KINH ĐIỂN: Khoản 4 Điều 16 Luật KDBH: Thế quyền KHÔNG ÁP DỤNG đối với hợp đồng bảo hiểm nhân thọ và quyền lợi khoán trong bảo hiểm sức khỏe.'
  },
  {
    id: 'q-nt-12',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc thế quyền',
    question: 'Trong bảo hiểm tài sản, nếu người thứ ba gây thiệt hại và người được bảo hiểm TỰ Ý TỪ BỎ quyền yêu cầu người thứ ba bồi thường mà không có sự đồng ý của DNBH thì sao?',
    options: [
      'DNBH vẫn phải bồi thường 100% đầy đủ cho NĐBH',
      'DNBH có quyền GIẢM TRỪ số tiền bồi thường tương ứng với phần thiệt hại mà DNBH đáng lẽ được bồi hoàn từ người thứ ba',
      'Hợp đồng bảo hiểm đương nhiên được gia hạn thêm 5 năm',
      'Người thứ ba phải nộp phạt 50% cho ngân sách'
    ],
    correctIndex: 1,
    explanation: 'Điều 38 Luật KDBH: NĐBH tự ý từ bỏ quyền đòi người thứ 3 thì DNBH có quyền giảm trừ số tiền bồi thường tương ứng với phần mà đáng lẽ DNBH đòi được từ bên gây hại.'
  },
  {
    id: 'q-nt-13',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc khoán',
    question: 'Nguyên tắc "Khoán" (Fixed Benefit) trong bảo hiểm con người có đặc điểm then chốt nào sau đây?',
    options: [
      'Chi trả theo chi phí hóa đơn thực tế sửa chữa tại gara',
      'Chi trả số tiền bảo hiểm cố định theo đúng mức đã thỏa thuận trước trong hợp đồng khi xảy ra sự kiện tử vong, thương tật',
      'Chỉ được chi trả một lần duy nhất trong toàn bộ đời người',
      'Chỉ chi trả khi người được bảo hiểm trên 80 tuổi'
    ],
    correctIndex: 1,
    explanation: 'Nguyên tắc khoán: Khi xảy ra sự kiện bảo hiểm (tử vong, thương tật, nằm viện), DNBH chi trả đúng số tiền khoán đã cam kết trong HĐBH mà không phụ thuộc vào chi phí thực tế.'
  },
  {
    id: 'q-nt-14',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc khoán',
    question: 'Một người mua 3 hợp đồng bảo hiểm nhân thọ tại 3 công ty khác nhau (STBH tử vong lần lượt là 1 tỷ, 2 tỷ và 3 tỷ). Khi người đó qua đời do rủi ro được bảo hiểm, tổng quyền lợi nhận được là bao nhiêu?',
    options: [
      'Chỉ nhận được từ công ty có STBH cao nhất là 3 tỷ đồng',
      'Nhận trung bình cộng: (1 + 2 + 3) / 3 = 2 tỷ đồng',
      'Nhận ĐẦY ĐỦ từ CẢ 3 CÔNG TY: 1 + 2 + 3 = 6 tỷ đồng',
      'Chỉ nhận được 1 tỷ đồng vì chống bảo hiểm trùng'
    ],
    correctIndex: 2,
    explanation: 'Áp dụng NGUYÊN TẮC KHOÁN: Bảo hiểm con người không có trần bồi thường thiệt hại và KHÔNG coi là bảo hiểm trùng. Người thụ hưởng được nhận tiền bồi thường từ TẤT CẢ các hợp đồng (tổng 6 tỷ).'
  },
  {
    id: 'q-nt-15',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Đóng góp bồi thường',
    question: 'Nguyên tắc "Đóng góp bồi thường" (Contribution) được áp dụng trong tình huống nào sau đây?',
    options: [
      'Bảo hiểm trùng hoặc đồng bảo hiểm đối với tài sản (khi một tài sản được bảo hiểm tại nhiều DNBH)',
      'Bảo hiểm nhân thọ trọn đời',
      'Khi đại lý bảo hiểm tự nguyện đóng góp từ thiện',
      'Khi khách hàng nộp chậm phí bảo hiểm định kỳ'
    ],
    correctIndex: 0,
    explanation: 'Nguyên tắc đóng góp bồi thường áp dụng khi Bảo hiểm trùng hoặc đồng bảo hiểm: các DNBH cùng chia sẻ gánh nặng bồi thường theo tỷ lệ STBH đã nhận.'
  },
  {
    id: 'q-nt-16',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Đóng góp bồi thường',
    question: 'Một ngôi nhà trị giá 2 tỷ đồng được chủ nhà mua bảo hiểm cháy nổ tại Công ty A với STBH 2 tỷ và Công ty B với STBH 2 tỷ. Khi hỏa hoạn xảy ra gây thiệt hại thực tế là 1 tỷ đồng, các công ty bồi thường như thế nào?',
    options: [
      'Công ty A bồi thường 1 tỷ và Công ty B bồi thường 1 tỷ (tổng nhận 2 tỷ)',
      'Mỗi công ty bồi thường 500 triệu đồng (tổng số tiền nhận được đúng bằng thiệt hại thực tế 1 tỷ)',
      'Chỉ có Công ty A bồi thường, Công ty B được miễn hoàn toàn',
      'Cả hai công ty từ chối bồi thường vì chủ nhà mua bảo hiểm trùng'
    ],
    correctIndex: 1,
    explanation: 'Theo nguyên tắc bồi thường và đóng góp bồi thường: Tổng bồi thường KHÔNG VƯỢT THIỆT HẠI THỰC TẾ (1 tỷ). Do STBH của A và B bằng nhau (tỷ lệ 50/50), mỗi bên bồi thường 500 triệu đồng.'
  },
  {
    id: 'q-nt-17',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên nhân gần',
    question: 'Trong giám định và giải quyết bồi thường, "Nguyên nhân gần" (Proximate Cause) được định nghĩa là gì?',
    options: [
      'Nguyên nhân ở vị trí địa lý gần nhất với trụ sở công ty bảo hiểm',
      'Nguyên nhân chủ yếu, trực tiếp và đủ mạnh khởi động cả chuỗi mắt xích sự kiện dẫn đến kết quả tổn thất mà không bị ngắt quãng',
      'Nguyên nhân xảy ra sau cùng ngay trước khi công an đến hiện trường',
      'Nguyên nhân do người đi đường chứng kiến đầu tiên'
    ],
    correctIndex: 1,
    explanation: 'Nguyên nhân gần (Proximate Cause) là nguyên nhân chủ yếu, liên tục và chi phối, khởi phát chuỗi sự kiện dẫn đến tổn thất. DNBH chỉ bồi thường khi nguyên nhân gần thuộc phạm vi bảo hiểm.'
  },
  {
    id: 'q-nt-18',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Số đông bù số ít',
    question: 'Nguyên tắc "Số đông bù số ít" (Law of large numbers) trong hoạt động kinh doanh bảo hiểm dựa trên nền tảng nào?',
    options: [
      'Dựa vào quy luật số lớn trong toán xác suất thống kê để tính phí và phân tán rủi ro',
      'Dựa trên cảm tính của Ban Giám đốc công ty',
      'Dựa vào sự quyên góp từ thiện của người dân',
      'Dựa vào vốn vay ưu đãi từ ngân hàng thương mại'
    ],
    correctIndex: 0,
    explanation: 'Số đông bù số ít vận dụng quy luật số lớn trong xác suất thống kê: Gom sự đóng góp phí của số đông người có nguy cơ gặp rủi ro để lập quỹ bù đắp tổn thất cho số ít người không may gặp nạn.'
  },
  {
    id: 'q-nt-19',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Rủi ro ngẫu nhiên',
    question: 'Theo nguyên tắc "Rủi ro ngẫu nhiên", một rủi ro được Doanh nghiệp bảo hiểm chấp nhận bảo hiểm khi nào?',
    options: [
      'Rủi ro do bên mua cố ý sắp đặt trước để kiếm tiền',
      'Rủi ro phải mang tính chất bất ngờ, không lường trước được, xảy ra ngoài ý muốn của các bên',
      'Rủi ro chắc chắn 100% sẽ xảy ra vào ngày mai',
      'Rủi ro do hành vi phạm tội của người thụ hưởng gây ra'
    ],
    correctIndex: 1,
    explanation: 'Điều 16 LKDBH: Rủi ro được bảo hiểm phải là những rủi ro bất ngờ, không lường trước được và xảy ra ngoài ý chí chủ quan của con người.'
  },
  {
    id: 'q-nt-20',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Bồi hoàn y tế',
    question: 'Quyền lợi chi phí y tế (tiền phòng viện phí, phẫu thuật thực tế) trong Hợp đồng bảo hiểm sức khỏe được chi trả theo nguyên tắc nào?',
    options: [
      'Nguyên tắc khoán gấp 10 lần số tiền viện phí',
      'Nguyên tắc bồi hoàn căn cứ chi phí y tế thực tế thuộc phạm vi, tổng chi trả không vượt quá thiệt hại thực tế',
      'Chi trả vô điều kiện theo yêu cầu của bệnh nhân',
      'Không được chi trả trong bất kỳ trường hợp nào'
    ],
    correctIndex: 1,
    explanation: 'Lưu ý phân biệt: Trong BH sức khỏe, quyền lợi tử vong/thương tật áp dụng NGUYÊN TẮC KHOÁN; còn quyền lợi chi phí y tế áp dụng NGUYÊN TẮC BỒI HOÀN theo chi phí thực tế thuộc phạm vi.'
  },
  {
    id: 'q-nt-21',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi được bảo hiểm',
    question: 'Vợ chồng mua bảo hiểm nhân thọ cho nhau khi đang kết hôn, sau đó 5 năm họ ly hôn. Hợp đồng bảo hiểm nhân thọ đó sẽ như thế nào?',
    options: [
      'Hợp đồng đương nhiên bị vô hiệu ngay lập tức tại ngày tòa án ra quyết định ly hôn',
      'Hợp đồng VẪN CÓ HIỆU LỰC PHÁP LUẬT vì quyền lợi có thể được bảo hiểm chỉ cần tồn tại tại thời điểm giao kết hợp đồng',
      'Công ty bảo hiểm bắt buộc phải tịch thu toàn bộ giá trị hoàn lại',
      'Đại lý bảo hiểm phải bồi thường tiền cho hai vợ chồng'
    ],
    correctIndex: 1,
    explanation: 'BẪY THI THỰC TẾ: Trong BH nhân thọ, quyền lợi có thể được bảo hiểm chỉ cần tồn tại TẠI THỜI ĐIỂM KÝ HỢP ĐỒNG. Sau đó nếu quan hệ hôn nhân chấm dứt thì HĐBH vẫn tiếp tục có hiệu lực pháp luật bình thường.'
  },
  {
    id: 'q-nt-22',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi được bảo hiểm',
    question: 'Ông A bán xe ô tô cho ông B (đã nhận đủ tiền và giao xe). Hôm sau xe bị cháy rụi khi ông A chưa làm thủ tục chuyển quyền lợi bảo hiểm vật chất xe. Ai được nhận tiền bồi thường vật chất xe?',
    options: [
      'Ông A vẫn được nhận vì hợp đồng bảo hiểm vẫn đứng tên ông A',
      'KHÔNG AI ĐƯỢC NHẬN BỒI THƯỜNG (Ông A không còn quyền lợi tài sản lúc cháy; còn ông B chưa được chuyển giao hợp đồng bảo hiểm)',
      'Công ty bảo hiểm tự động bồi thường cho ông B',
      'Cơ quan công an sẽ đứng ra nhận tiền bồi thường thay'
    ],
    correctIndex: 1,
    explanation: 'BẪY THI TÀI SẢN: Bảo hiểm tài sản đòi hỏi quyền lợi phải có TẠI THỜI ĐIỂM TỔN THẤT. Ông A đã bán xe nên không còn quyền lợi tài chính, còn ông B chưa hoàn tất chuyển giao quyền lợi HĐBH, do đó DNBH từ chối bồi thường cho ông A.'
  },
  // =========================================================================
  // PHẦN 4 (BỔ SUNG): NGUYÊN TẮC BẢO HIỂM NÂNG CAO (q-nt-23 đến q-nt-30)
  // =========================================================================
  {
    id: 'q-nt-23',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Thế quyền',
    question: 'Nguyên tắc "Thế quyền" (Subrogation) quy định DNBH KHÔNG ĐƯỢC đòi bồi hoàn từ ai sau đây?',
    options: [
      'Cha mẹ, vợ, chồng, con của Người được bảo hiểm, trừ trường hợp những người này cố ý gây ra thiệt hại',
      'Bất kỳ người nào gây tai nạn giao thông trên đường',
      'Chủ doanh nghiệp nơi Người được bảo hiểm làm việc',
      'Công ty bảo hiểm khác đã ký hợp đồng bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'Khoản 3 Điều 54 Luật KDBH 2022: Doanh nghiệp bảo hiểm không được thực hiện quyền yêu cầu người thứ ba bồi hoàn nếu người thứ ba là cha, mẹ, vợ, chồng, con của người được bảo hiểm, trừ trường hợp người này cố ý gây ra thiệt hại.'
  },
  {
    id: 'q-nt-24',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Thế quyền',
    question: 'Khi Người được bảo hiểm tự ý từ bỏ quyền yêu cầu người thứ ba bồi hoàn mà không có sự đồng ý của DNBH, DNBH có quyền xử lý như thế nào?',
    options: [
      'DNBH có quyền giảm trừ số tiền bồi thường tương ứng với phần thiệt hại mà NĐBH đã từ bỏ quyền yêu cầu bồi hoàn',
      'DNBH vẫn phải bồi thường 100% không được trừ đồng nào',
      'DNBH phải khởi kiện NĐBH ra tòa án hình sự',
      'DNBH bị tước giấy phép hoạt động kinh doanh bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'Khoản 2 Điều 54 Luật KDBH 2022: Trường hợp người được bảo hiểm từ bỏ quyền yêu cầu người thứ ba bồi hoàn thì doanh nghiệp bảo hiểm có quyền giảm trừ số tiền bồi thường tương ứng với phần thiệt hại mà người được bảo hiểm đã từ bỏ.'
  },
  {
    id: 'q-nt-25',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Bảo hiểm trùng',
    question: 'Bảo hiểm trùng (Double Insurance) theo quy định của Luật Kinh doanh bảo hiểm số 08/2022/QH15 phát sinh trong trường hợp nào?',
    options: [
      'Một tài sản được bảo hiểm tại từ 2 DNBH trở lên với cùng điều kiện và tổng số tiền bảo hiểm lớn hơn giá trị bảo hiểm của tài sản đó',
      'Một người mua bảo hiểm nhân thọ tại 2 công ty bảo hiểm nhân thọ khác nhau',
      'Một tài sản được bảo hiểm tại 1 DNBH nhưng tái bảo hiểm cho 5 công ty tái bảo hiểm',
      'Một hợp đồng bảo hiểm có thời hạn kéo dài trên 10 năm'
    ],
    correctIndex: 0,
    explanation: 'Điều 49 Luật KDBH 2022: Hợp đồng bảo hiểm trùng là trường hợp bên mua bảo hiểm giao kết hợp đồng bảo hiểm với từ hai doanh nghiệp bảo hiểm trở lên để bảo hiểm cho cùng một đối tượng, cùng điều kiện và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá trị bảo hiểm của tài sản đó. Chỉ áp dụng cho bảo hiểm tài sản / thiệt hại.'
  },
  {
    id: 'q-nt-26',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên nhân gần',
    question: 'Nguyên nhân gần (Proximate Cause) trong giám định tổn thất được xác định dựa trên nguyên tắc nào?',
    options: [
      'Là nguyên nhân chủ yếu, trực tiếp và đủ mạnh khởi động chuỗi mắt xích sự kiện dẫn đến tổn thất mà không bị ngắt quãng bởi bất kỳ nguyên nhân độc lập mới nào',
      'Luôn luôn là nguyên nhân xảy ra cuối cùng ngay trước khi tổn thất diễn ra',
      'Luôn luôn là nguyên nhân đầu tiên xảy ra trong quá khứ dù không liên quan',
      'Do đại lý bảo hiểm tự suy đoán theo kinh nghiệm cá nhân'
    ],
    correctIndex: 0,
    explanation: 'Nguyên nhân gần là nguyên nhân chủ yếu, quyết định và trực tiếp tạo ra tổn thất. Nếu nguyên nhân gần thuộc phạm vi bảo hiểm thì DNBH bồi thường; nếu thuộc điều khoản loại trừ thì DNBH từ chối.'
  },
  {
    id: 'q-nt-27',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Bảo hiểm sức khỏe',
    question: 'Bảo hiểm chi phí y tế thực tế (tiền nằm viện, phẫu thuật theo hóa đơn bệnh viện) trong hợp đồng bảo hiểm sức khỏe áp dụng nguyên tắc nào?',
    options: [
      'Nguyên tắc bồi hoàn căn cứ chi phí y tế thực tế hợp lý (không vượt quá chi phí thực tế và hạn mức hợp đồng)',
      'Nguyên tắc khoán chi trả vô điều kiện không cần hóa đơn',
      'Nguyên tắc đóng góp từ thiện của doanh nghiệp',
      'Nguyên tắc chia sẻ lợi nhuận đầu tư cổ phiếu'
    ],
    correctIndex: 0,
    explanation: 'Quyền lợi chi phí y tế thực tế trong bảo hiểm sức khỏe áp dụng nguyên tắc bồi hoàn: DNBH thanh toán căn cứ theo hóa đơn viện phí thực tế, không vượt quá chi phí thực tế và hạn mức STBH của hợp đồng.'
  },
  {
    id: 'q-nt-28',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc khoán',
    question: 'Tại sao nguyên tắc Bồi thường (Indemnity) và nguyên tắc Thế quyền (Subrogation) TUYỆT ĐỐI KHÔNG ÁP DỤNG đối với bảo hiểm nhân thọ?',
    options: [
      'Vì tính mạng, thân thể, tuổi thọ con người là vô giá, không thể định giá bằng tiền và không ai có quyền sở hữu tính mạng người khác',
      'Vì bảo hiểm nhân thọ có phí đóng quá cao',
      'Vì Bộ Tài chính chưa ban hành biểu phí bồi thường nhân thọ',
      'Vì các công ty nhân thọ là doanh nghiệp có vốn đầu tư nước ngoài'
    ],
    correctIndex: 0,
    explanation: 'Tính mạng, thân thể con người là vô giá, không có giá trị bảo hiểm để áp dụng nguyên tắc bồi thường hoặc thế quyền. Bảo hiểm nhân thọ áp dụng nguyên tắc KHOÁN: khi xảy ra sự kiện bảo hiểm thì trả đúng số tiền bảo hiểm đã thỏa thuận.'
  },
  {
    id: 'q-nt-29',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Quyền lợi có thể bảo hiểm',
    question: 'Bên mua bảo hiểm có thể giao kết hợp đồng bảo hiểm nhân thọ cho ai sau đây mà KHÔNG CẦN có văn bản đồng ý của người đó?',
    options: [
      'Bản thân Bên mua bảo hiểm; vợ, chồng, cha, mẹ, con của Bên mua bảo hiểm; anh ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng',
      'Bạn bè thân thiết học cùng lớp đại học',
      'Hàng xóm sống cạnh nhà Bên mua bảo hiểm',
      'Khách hàng vãng lai tình cờ gặp trên đường phố'
    ],
    correctIndex: 0,
    explanation: 'Khoản 1 Điều 34 Luật KDBH 2022: Bên mua bảo hiểm có quyền lợi có thể được bảo hiểm đối với: Bản thân; vợ, chồng, cha, mẹ, con; anh chị em ruột hoặc người có quan hệ nuôi dưỡng, cấp dưỡng; người có quyền lợi tài chính/lao động.'
  },
  {
    id: 'q-nt-30',
    category: 'Nguyên tắc bảo hiểm',
    subCategory: 'Nguyên tắc khoán',
    question: 'Một người mua 2 hợp đồng bảo hiểm tai nạn con người tại 2 DNBH khác nhau (mỗi hợp đồng có số tiền bảo hiểm tử vong do tai nạn là 500 triệu đồng). Khi không may tử vong do tai nạn thuộc phạm vi bảo hiểm, người thụ hưởng sẽ nhận được bao nhiêu tiền?',
    options: [
      'Nhận đủ 1 tỷ đồng (500 triệu từ DNBH thứ nhất + 500 triệu từ DNBH thứ hai)',
      'Chỉ nhận được tối đa 500 triệu đồng do áp dụng nguyên tắc bồi thường',
      'Mỗi DNBH chỉ chi trả 250 triệu đồng vì bảo hiểm trùng',
      'Cả 2 DNBH từ chối chi trả vì khách hàng mua 2 hợp đồng vi phạm pháp luật'
    ],
    correctIndex: 0,
    explanation: 'Bảo hiểm con người áp dụng NGUYÊN TẮC KHOÁN. Khách hàng có quyền mua nhiều hợp đồng tại nhiều DNBH khác nhau và được nhận ĐẦY ĐỦ số tiền bảo hiểm từ tất cả các hợp đồng khi xảy ra sự kiện bảo hiểm: 500 tr + 500 tr = 1 tỷ đồng.'
  },

  // =========================================================================
  // PHẦN 5: RỦI RO & KHÁI NIỆM CƠ BẢN TRONG BẢO HIỂM (25 câu: q-rk-1 đến q-rk-25)
  // =========================================================================
  {
    id: 'q-rk-1',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Khái niệm rủi ro',
    question: 'Trong hoạt động kinh doanh bảo hiểm, "Rủi ro" (Risk) được định nghĩa là gì?',
    options: [
      'Khả năng xảy ra biến cố bất lợi, bất ngờ mang tính ngẫu nhiên, gây tổn thất hoặc thiệt hại tài chính',
      'Sự chắc chắn sẽ xảy ra tổn thất tài sản trong tương lai',
      'Hành vi cố ý tự hủy hoại tài sản của khách hàng',
      'Khoản lợi nhuận đầu tư cổ phiếu chắc chắn thu được hàng năm'
    ],
    correctIndex: 0,
    explanation: 'Rủi ro trong bảo hiểm là sự bất trắc, bất ngờ, ngẫu nhiên ngoài ý muốn dẫn đến thiệt hại hoặc mất mát tài chính.'
  },
  {
    id: 'q-rk-2',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Cơ chế phát sinh',
    question: 'Trật tự mắt xích phát sinh rủi ro trong lý thuyết bảo hiểm diễn ra theo chuỗi nào sau đây?',
    options: [
      'Nguy cơ (Hazard) -> Hiểm họa (Peril) -> Tổn thất (Loss)',
      'Tổn thất (Loss) -> Nguy cơ (Hazard) -> Hiểm họa (Peril)',
      'Hiểm họa (Peril) -> Nguy cơ (Hazard) -> Tổn thất (Loss)',
      'Tổn thất (Loss) -> Hiểm họa (Peril) -> Nguy cơ (Hazard)'
    ],
    correctIndex: 0,
    explanation: 'Trật tự phát sinh chuẩn: Nguy cơ (Hazard - điều kiện thuận lợi làm tăng khả năng xảy ra) -> Hiểm họa (Peril - nguyên nhân trực tiếp) -> Tổn thất (Loss - hậu quả thiệt hại thực tế).'
  },
  {
    id: 'q-rk-3',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Nguy cơ (Hazard)',
    question: 'Tình trạng nhà làm bằng gỗ, kho xưởng chứa nhiều hóa chất dễ cháy thuộc loại nguy cơ (Hazard) nào sau đây?',
    options: [
      'Nguy cơ vật chất (Physical Hazard)',
      'Nguy cơ đạo đức (Moral Hazard)',
      'Nguy cơ tinh thần (Morale Hazard)',
      'Nguy cơ chính trị'
    ],
    correctIndex: 0,
    explanation: 'Nguy cơ vật chất (Physical Hazard) là những đặc tính vật lý, cơ học, cấu tạo hoặc môi trường của đối tượng làm tăng khả năng xảy ra tổn thất.'
  },
  {
    id: 'q-rk-4',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Nguy cơ (Hazard)',
    question: 'Hành vi cố tình phóng hỏa đốt nhà xưởng hoặc che giấu bệnh hiểm nghèo khi mua bảo hiểm nhân thọ thuộc loại nguy cơ nào?',
    options: [
      'Nguy cơ đạo đức (Moral Hazard)',
      'Nguy cơ vật chất (Physical Hazard)',
      'Nguy cơ kỹ thuật',
      'Nguy cơ bất khả kháng'
    ],
    correctIndex: 0,
    explanation: 'Nguy cơ đạo đức (Moral Hazard) bắt nguồn từ sự không trung thực, ý đồ gian lận, trục lợi bất chính của con người nhằm chiếm đoạt tiền bảo hiểm.'
  },
  {
    id: 'q-rk-5',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Nguy cơ (Hazard)',
    question: 'Thái độ thờ ơ, lơ là, bất cẩn trong việc bảo quản xe máy do ỷ lại rằng mình đã mua bảo hiểm mất cắp thuộc loại nguy cơ nào?',
    options: [
      'Nguy cơ tinh thần / thái độ (Morale Hazard)',
      'Nguy cơ đạo đức (Moral Hazard)',
      'Nguy cơ vật chất (Physical Hazard)',
      'Nguy cơ tài chính'
    ],
    correctIndex: 0,
    explanation: 'Nguy cơ tinh thần (Morale Hazard) là thái độ bất cẩn, chủ quan, vô trách nhiệm của người tham gia bảo hiểm do có tâm lý "đã có bảo hiểm lo".'
  },
  {
    id: 'q-rk-6',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Phân loại rủi ro',
    question: 'Đặc điểm cốt lõi của "Rủi ro thuần túy" (Pure Risk) là gì?',
    options: [
      'Chỉ có 2 khả năng xảy ra: Tổn thất HOẶC Không tổn thất (Hòa vốn), không bao giờ có khả năng sinh lãi',
      'Có khả năng sinh lời cao gấp nhiều lần vốn bỏ ra',
      'Chỉ xảy ra khi đầu tư chứng khoán hoặc mua bán bất động sản',
      'Luôn luôn mang lại lợi ích tài chính cho khách hàng'
    ],
    correctIndex: 0,
    explanation: 'Rủi ro thuần túy (Pure risk) chỉ có nguy cơ thiệt hại hoặc hòa vốn. Đây là đối tượng DUY NHẤT mà các doanh nghiệp bảo hiểm chấp nhận bảo vệ.'
  },
  {
    id: 'q-rk-7',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Phân loại rủi ro',
    question: 'Tại sao Doanh nghiệp bảo hiểm TUYỆT ĐỐI KHÔNG NHẬN BẢO HIỂM cho "Rủi ro đầu cơ" (Speculative Risk)?',
    options: [
      'Vì rủi ro đầu cơ có cơ hội sinh lời và phụ thuộc vào quyết định đầu tư thương mại (chứng khoán, bất động sản, đánh bạc), không mang tính ngẫu nhiên thuần túy',
      'Vì các công ty bảo hiểm không có vốn đầu tư',
      'Vì pháp luật cấm người dân tham gia đầu tư tài chính',
      'Vì rủi ro đầu cơ không có hóa đơn chứng từ'
    ],
    correctIndex: 0,
    explanation: 'Bảo hiểm bảo vệ con người trước các rủi ro thuần túy bất ngờ gây thiệt hại, không bảo hiểm cho rủi ro đầu cơ nhằm mục đích kiếm lời thương mại.'
  },
  {
    id: 'q-rk-8',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Phân loại rủi ro',
    question: 'Thảm họa động đất, sóng thần, chiến tranh ảnh hưởng trên quy mô toàn xã hội được xếp vào nhóm rủi ro nào?',
    options: [
      'Rủi ro cơ bản (Fundamental Risk)',
      'Rủi ro riêng biệt (Particular Risk)',
      'Rủi ro đầu cơ (Speculative Risk)',
      'Rủi ro cá nhân'
    ],
    correctIndex: 0,
    explanation: 'Rủi ro cơ bản (Fundamental risk) tác động diện rộng lên cả cộng đồng, xã hội hoặc quốc gia, thường là điều khoản loại trừ trong hợp đồng bảo hiểm thương mại thông thường.'
  },
  {
    id: 'q-rk-9',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Rủi ro được bảo hiểm',
    question: 'Điều kiện nào sau đây KHÔNG PHẢI là điều kiện để một rủi ro được DNBH chấp nhận bảo hiểm (Insurable Risk)?',
    options: [
      'Rủi ro phải mang tính chất đầu cơ có tiềm năng mang lại lợi nhuận cao',
      'Rủi ro phải xảy ra một cách ngẫu nhiên, bất ngờ ngoài ý muốn',
      'Tổn thất phải đo lường và định lượng được bằng tiền',
      'Số lượng đối tượng chịu rủi ro tương tự phải đủ lớn để phân tán'
    ],
    correctIndex: 0,
    explanation: 'Rủi ro được bảo hiểm PHẢI LÀ RỦI RO THUẦN TÚY. Rủi ro đầu cơ tuyệt đối không được bảo hiểm.'
  },
  {
    id: 'q-rk-10',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Quản trị rủi ro',
    question: 'Quy trình quản trị rủi ro thông thường gồm có bao nhiêu biện pháp kiểm soát và tài trợ rủi ro cơ bản?',
    options: [
      '5 biện pháp: Né tránh, Ngăn ngừa tổn thất, Giảm thiểu tổn thất, Tự gánh chịu (giữ lại), Chuyển giao rủi ro',
      '2 biện pháp: Đóng bảo hiểm hoặc gửi tiết kiệm',
      '3 biện pháp: Vay ngân hàng, bán nhà, đi xin cứu trợ',
      '7 biện pháp xử lý nợ xấu'
    ],
    correctIndex: 0,
    explanation: '5 biện pháp kinh điển: Né tránh rủi ro (Avoidance), Ngăn ngừa (Prevention), Giảm thiểu (Reduction), Giữ lại/Tự chịu (Retention), Chuyển giao (Transfer).'
  },
  {
    id: 'q-rk-11',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Quản trị rủi ro',
    question: 'Hành động một người quyết định không đi máy bay vì sợ tai nạn hàng không thể hiện biện pháp quản trị rủi ro nào?',
    options: [
      'Né tránh rủi ro (Risk Avoidance)',
      'Ngăn ngừa tổn thất (Loss Prevention)',
      'Giảm thiểu tổn thất (Loss Reduction)',
      'Chuyển giao rủi ro (Risk Transfer)'
    ],
    correctIndex: 0,
    explanation: 'Né tránh rủi ro là chủ động từ bỏ hoặc không tham gia vào hoạt động tiềm ẩn rủi ro để đưa xác suất tổn thất về bằng 0.'
  },
  {
    id: 'q-rk-12',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Quản trị rủi ro',
    question: 'Biện pháp "Ngăn ngừa tổn thất" (Loss Prevention) tác động vào yếu tố nào của rủi ro?',
    options: [
      'Tác động trước khi tổn thất xảy ra nhằm làm giảm TẦN SUẤT hoặc XÁC SUẤT xảy ra rủi ro',
      'Tác động sau khi đã có thiệt hại nhằm giảm độ lớn số tiền bồi thường',
      'Tác động vào việc tìm kiếm lợi nhuận đầu tư',
      'Tác động nhằm chuyển nợ sang cho bên thứ ba'
    ],
    correctIndex: 0,
    explanation: 'Ngăn ngừa tổn thất là can thiệp trước để rủi ro không xảy ra (giảm tần suất/xác suất), ví dụ cấm lửa nơi chứa xăng, gắn biển cảnh báo khúc cua nguy hiểm.'
  },
  {
    id: 'q-rk-13',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Quản trị rủi ro',
    question: 'Việc lắp đặt hệ thống vòi phun nước Sprinkler tự động dập lửa khi phát hiện khói trong tòa nhà thuộc biện pháp nào?',
    options: [
      'Giảm thiểu tổn thất (Loss Reduction)',
      'Né tránh rủi ro (Risk Avoidance)',
      'Chuyển giao rủi ro (Risk Transfer)',
      'Đầu cơ rủi ro'
    ],
    correctIndex: 0,
    explanation: 'Giảm thiểu tổn thất là can thiệp khi rủi ro đã phát sinh (cháy đã bùng lên) để hạn chế tối đa độ lớn thiệt hại lan rộng.'
  },
  {
    id: 'q-rk-14',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Quản trị rủi ro',
    question: 'Việc tổ chức, cá nhân mua bảo hiểm thương mại thuộc biện pháp quản lý rủi ro nào?',
    options: [
      'Chuyển giao rủi ro (Risk Transfer)',
      'Né tránh rủi ro (Risk Avoidance)',
      'Tự gánh chịu rủi ro (Risk Retention)',
      'Loại trừ rủi ro'
    ],
    correctIndex: 0,
    explanation: 'Mua bảo hiểm là hình thức CHUYỂN GIAO RỦI RO điển hình nhất: chuyển gánh nặng tài chính từ bên mua sang doanh nghiệp bảo hiểm để đổi lấy việc đóng một khoản phí bảo hiểm định kỳ.'
  },
  {
    id: 'q-rk-15',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Chủ thể HĐBH',
    question: 'Theo Điều 4 Luật Kinh doanh bảo hiểm số 08/2022/QH15, "Bên mua bảo hiểm" (BMBH) là ai?',
    options: [
      'Là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài và đóng phí bảo hiểm',
      'Là người bán hàng hưởng hoa hồng của công ty bảo hiểm',
      'Là cơ quan quản lý nhà nước phê duyệt sản phẩm bảo hiểm',
      'Là người được chỉ định nhận tiền tử vong'
    ],
    correctIndex: 0,
    explanation: 'Bên mua bảo hiểm là chủ thể đứng tên ký kết hợp đồng bảo hiểm và có nghĩa vụ đóng phí bảo hiểm đầy đủ.'
  },
  {
    id: 'q-rk-16',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Chủ thể HĐBH',
    question: '"Người được bảo hiểm" (NĐBH) trong hợp đồng bảo hiểm được hiểu là gì?',
    options: [
      'Tổ chức, cá nhân có tài sản, trách nhiệm dân sự, sức khỏe, tính mạng được bảo hiểm theo hợp đồng bảo hiểm',
      'Tổ chức đào tạo cấp chứng chỉ đại lý bảo hiểm',
      'Người thân sống cùng nhà với đại lý bảo hiểm',
      'Chuyên viên giám định bồi thường của công ty'
    ],
    correctIndex: 0,
    explanation: 'Người được bảo hiểm là đối tượng trực tiếp được bảo hiểm bảo vệ (về tính mạng, sức khỏe, tài sản hoặc trách nhiệm dân sự).'
  },
  {
    id: 'q-rk-17',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Chủ thể HĐBH',
    question: '"Người thụ hưởng" (NTH) trong hợp đồng bảo hiểm con người là ai?',
    options: [
      'Tổ chức, cá nhân được Bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm theo hợp đồng bảo hiểm con người',
      'Đại lý bảo hiểm có công tư vấn hợp đồng',
      'Bác sĩ điều trị cho người bệnh',
      'Ngân hàng nơi công ty bảo hiểm mở tài khoản thanh toán'
    ],
    correctIndex: 0,
    explanation: 'Người thụ hưởng là người do Bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm khi xảy ra sự kiện bảo hiểm thuộc hợp đồng bảo hiểm con người.'
  },
  {
    id: 'q-rk-18',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Giá trị bảo hiểm',
    question: 'Khái niệm "Giá trị bảo hiểm" (GTBH - Insurable Value) áp dụng đối với loại hình bảo hiểm nào?',
    options: [
      'Chỉ áp dụng trong BẢO HIỂM TÀI SẢN và BẢO HIỂM THIỆT HẠI, tuyệt đối không có trong bảo hiểm nhân thọ',
      'Chỉ áp dụng trong bảo hiểm nhân thọ trọn đời',
      'Chỉ áp dụng trong bảo hiểm hưu trí tự nguyện',
      'Áp dụng cho tất cả các loại hình bảo hiểm bao gồm cả bảo hiểm sinh mạng'
    ],
    correctIndex: 0,
    explanation: 'Tính mạng và thân thể con người là vô giá, không thể đo bằng tiền nên KHÔNG CÓ GIÁ TRỊ BẢO HIỂM. Giá trị bảo hiểm chỉ tồn tại trong bảo hiểm tài sản.'
  },
  {
    id: 'q-rk-19',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Bảo hiểm dưới giá trị',
    question: 'Khi tham gia "Bảo hiểm dưới giá trị" (STBH < Giá trị tài sản), trường hợp xảy ra tổn thất bộ phận thì DNBH sẽ bồi thường như thế nào?',
    options: [
      'Bồi thường THEO TỶ LỆ giữa Số tiền bảo hiểm và Giá trị bảo hiểm: Bồi thường = Thiệt hại thực tế × (STBH / GTBH)',
      'Bồi thường toàn bộ 100% thiệt hại thực tế bất kể STBH',
      'DNBH từ chối bồi thường và tịch thu tài sản',
      'DNBH bắt buộc phải bồi thường gấp đôi số tiền bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'Điều 47 Luật KDBH: Bảo hiểm dưới giá trị bồi thường theo tỷ lệ giữa STBH và GTBH, trừ trường hợp các bên có thỏa thuận bồi thường theo tổn thất đầu tiên.'
  },
  {
    id: 'q-rk-20',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Bảo hiểm dưới giá trị',
    question: 'Một ngôi nhà trị giá 2 tỷ đồng được chủ nhà mua bảo hiểm với Số tiền bảo hiểm là 1 tỷ đồng (50%). Khi xảy ra cháy, thiệt hại thực tế là 400 triệu đồng. DNBH sẽ bồi thường bao nhiêu tiền?',
    options: [
      '200 triệu đồng (bằng 400 triệu × 1 tỷ / 2 tỷ)',
      '400 triệu đồng vì vẫn nhỏ hơn hạn mức 1 tỷ đồng',
      '1 tỷ đồng bằng đúng số tiền bảo hiểm',
      '100 triệu đồng do khấu trừ cố định'
    ],
    correctIndex: 0,
    explanation: 'Công thức tỷ lệ bảo hiểm dưới giá trị: 400 triệu × (1 tỷ / 2 tỷ) = 200 triệu đồng. Chủ nhà phải tự chịu 200 triệu đồng còn lại do chỉ mua bảo hiểm 50% giá trị ngôi nhà.'
  },
  {
    id: 'q-rk-21',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Bảo hiểm trên giá trị',
    question: 'Trong bảo hiểm tài sản, trường hợp "Bảo hiểm trên giá trị" (STBH > Giá trị tài sản) được pháp luật xử lý như thế nào?',
    options: [
      'Phần STBH vượt quá giá trị tài sản BỊ VÔ HIỆU; DNBH chỉ bồi thường tối đa bằng thiệt hại thực tế và hoàn phí cho phần vượt quá nếu không có lỗi gian lận',
      'DNBH phải bồi thường toàn bộ số tiền bảo hiểm đã ký để khách hàng có lãi',
      'Toàn bộ hợp đồng bảo hiểm bị hủy bỏ và không hoàn phí',
      'Khách hàng bị phạt tù 5 năm trong mọi trường hợp'
    ],
    correctIndex: 0,
    explanation: 'Điều 48 Luật KDBH 2022: Phần vượt quá giá trị tài sản bị vô hiệu. DNBH không bồi thường vượt quá giá trị thiệt hại thực tế và phải hoàn lại phí bảo hiểm đã nộp tương ứng với phần vượt quá.'
  },
  {
    id: 'q-rk-22',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Mức khấu trừ',
    question: 'Khái niệm "Mức khấu trừ có mức" (Deductible) trong bảo hiểm tài sản được hiểu là gì?',
    options: [
      'Khoản tiền quy định trước mà Bên mua bảo hiểm phải tự chịu trong mỗi vụ tổn thất; DNBH chỉ bồi thường phần thiệt hại vượt quá mức khấu trừ',
      'Khoản tiền hoa hồng mà đại lý bảo hiểm phải trích lại cho công ty',
      'Khoản thuế giá trị gia tăng nộp vào ngân sách nhà nước',
      'Mức giảm giá phí bảo hiểm khi ký hợp đồng'
    ],
    correctIndex: 0,
    explanation: 'Mức khấu trừ là số tiền mà khách hàng tự gánh chịu trong mỗi vụ tổn thất. DNBH chỉ thanh toán phần tổn thất vượt quá mức khấu trừ đó.'
  },
  {
    id: 'q-rk-23',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Mức khấu trừ',
    question: 'Hợp đồng bảo hiểm vật chất xe ô tô có mức khấu trừ là 2 triệu đồng/vụ. Khi xe gặp sự cố thiệt hại sửa chữa hết 10 triệu đồng, số tiền DNBH bồi thường là bao nhiêu?',
    options: [
      '8 triệu đồng (bằng 10 triệu - 2 triệu)',
      '10 triệu đồng trả đủ toàn bộ',
      '2 triệu đồng đúng bằng mức khấu trừ',
      '12 triệu đồng cộng thêm mức khấu trừ'
    ],
    correctIndex: 0,
    explanation: 'Với mức khấu trừ 2 triệu đồng: Khách hàng tự thanh toán 2 triệu, DNBH chi trả phần vượt quá là: 10 tr - 2 tr = 8 triệu đồng.'
  },
  {
    id: 'q-rk-24',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Miễn thường',
    question: 'Điểm khác biệt căn bản giữa "Mức khấu trừ" (Deductible) và "Miễn thường không khấu trừ" (Disappearing Franchise) khi tổn thất VƯỢT QUÁ mức quy định là gì?',
    options: [
      'Mức khấu trừ chỉ bồi thường phần vượt quá (Tổn thất - Mức quy định); còn Miễn thường không khấu trừ bồi thường TOÀN BỘ tổn thất thực tế',
      'Mức khấu trừ trả toàn bộ; còn Miễn thường không khấu trừ chỉ trả phần vượt',
      'Hai thuật ngữ này có cách tính hoàn toàn giống hệt nhau',
      'Cả hai đều không bồi thường đồng nào khi tổn thất vượt mức quy định'
    ],
    correctIndex: 0,
    explanation: 'Bẫy thi quan trọng: Khi tổn thất > mức quy định, Miễn thường không khấu trừ bồi thường TOÀN BỘ thiệt hại, không bị trừ bất kỳ khoản nào; trong khi Mức khấu trừ luôn trừ đi mức khấu trừ đã ấn định.'
  },
  {
    id: 'q-rk-25',
    category: 'Rủi ro & Khái niệm cơ bản',
    subCategory: 'Loại trừ trách nhiệm',
    question: 'Theo Điều 40 Luật Kinh doanh bảo hiểm số 08/2022/QH15, trường hợp Người được bảo hiểm chết do TỰ TỬ thì quyền lợi bảo hiểm nhân thọ được giải quyết như thế nào?',
    options: [
      'DNBH KHÔNG TRẢ TIỀN nếu tự tử trong thời hạn 2 NĂM kể từ ngày nộp khoản phí đầu tiên hoặc khôi phục HĐ; nhưng PHẢI TRẢ TIỀN nếu tự tử sau thời hạn 2 năm',
      'DNBH luôn luôn từ chối chi trả trong mọi trường hợp tự tử bất kể thời gian bao lâu',
      'DNBH chi trả ngay lập tức 100% số tiền bảo hiểm kể cả tự tử ngay sau ngày ký hợp đồng',
      'DNBH phải bồi thường gấp 3 lần số tiền bảo hiểm'
    ],
    correctIndex: 0,
    explanation: 'Khoản 1 Điều 40 Luật KDBH 2022: DNBH không trả tiền bảo hiểm nếu NĐBH chết do tự tử trong thời hạn 02 năm kể từ ngày nộp khoản phí đầu tiên hoặc kể từ ngày hợp đồng được khôi phục hiệu lực. Sau 2 năm, DNBH vẫn trả tiền bảo hiểm bình thường.'
  }
];
