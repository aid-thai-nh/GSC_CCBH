export interface Question {
  id: string;
  category:
    | 'Quy định thi & chứng chỉ'
    | 'Từ viết tắt & thuật ngữ'
    | 'Đại lý bảo hiểm'
    | 'Nguyên tắc bảo hiểm'
    | 'Rủi ro & Khái niệm cơ bản'
    | 'Hợp đồng bảo hiểm'
    | 'Bảo hiểm tài sản & thiệt hại'
    | 'Tài sản kỹ thuật'
    | 'Bảo hiểm xe cơ giới'
    | 'Bảo hiểm con người'
    | 'Bảo hiểm trách nhiệm'
    | 'Tái bảo hiểm'
    | 'Bẫy luật & Pháp luật mới';
  subCategory?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUESTION_BANK: Question[] = [
  {
    "id": "q-qd-1",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cấu trúc đề",
    "question": "Để thi đỗ Chứng chỉ đại lý bảo hiểm cơ bản, thí sinh phải làm đúng tối thiểu bao nhiêu câu trong đề thi?",
    "options": [
      "28 / 40 câu (70%)",
      "30 / 40 câu (75%)",
      "32 / 40 câu (80%)",
      "35 / 40 câu (87.5%)"
    ],
    "correctIndex": 1,
    "explanation": "Quy chế thi chuẩn: Đề thi Chứng chỉ ĐLBH cơ bản gồm 40 câu / 60 phút, đỗ khi đạt từ 75% trở lên (tức đúng từ 30 câu trở lên)."
  },
  {
    "id": "q-qd-2",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cấu trúc đề",
    "question": "Thời gian làm bài thi Chứng chỉ đại lý bảo hiểm cơ bản (40 câu) là bao nhiêu phút?",
    "options": [
      "45 phút",
      "50 phút",
      "60 phút",
      "90 phút"
    ],
    "correctIndex": 2,
    "explanation": "Thời gian làm bài thi chứng chỉ đại lý bảo hiểm cơ bản chuẩn là 60 phút cho 40 câu hỏi trắc nghiệm."
  },
  {
    "id": "q-qd-3",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cấu trúc đề",
    "question": "Đề thi Chứng chỉ đại lý bảo hiểm liên kết đơn vị (khi đã có CCĐL BHNT cơ bản) gồm bao nhiêu câu và làm trong bao nhiêu phút?",
    "options": [
      "20 câu trong 40 phút",
      "30 câu trong 45 phút",
      "20 câu trong 30 phút",
      "40 câu trong 60 phút"
    ],
    "correctIndex": 0,
    "explanation": "Chứng chỉ ĐLBH liên kết đơn vị gồm 20 câu hỏi trắc nghiệm, thời gian làm bài 40 phút, đỗ khi đạt ≥ 15 câu (75%)."
  },
  {
    "id": "q-qd-4",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cấu trúc đề",
    "question": "Để đỗ kỳ thi Chứng chỉ bảo hiểm (không phải chứng chỉ đại lý), thí sinh cần trả lời đúng bao nhiêu câu?",
    "options": [
      "≥ 30 / 40 câu (75%)",
      "≥ 42 / 60 câu (70%)",
      "≥ 45 / 60 câu (75%)",
      "≥ 35 / 50 câu (70%)"
    ],
    "correctIndex": 1,
    "explanation": "Chứng chỉ bảo hiểm (không phải đại lý) gồm 60 câu, thời gian 90 phút, điều kiện đỗ là đúng từ 42 câu trở lên (tương đương 70%)."
  },
  {
    "id": "q-qd-5",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Phân loại chứng chỉ",
    "question": "Cá nhân đã có Chứng chỉ ĐLBH nhân thọ cơ bản thì được phép bán các sản phẩm bảo hiểm nào sau đây?",
    "options": [
      "Tất cả các sản phẩm bảo hiểm nhân thọ kể cả liên kết đơn vị",
      "Sản phẩm bảo hiểm nhân thọ (trừ liên kết đơn vị) và sản phẩm bảo hiểm sức khỏe",
      "Chỉ được bán bảo hiểm sức khỏe ngắn hạn dưới 1 năm",
      "Chỉ được bán bảo hiểm tử kỳ và bảo hiểm hưu trí"
    ],
    "correctIndex": 1,
    "explanation": "CC ĐLBH nhân thọ cơ bản cho phép bán sản phẩm bảo hiểm nhân thọ (trừ bảo hiểm liên kết đơn vị) và các sản phẩm bảo hiểm sức khỏe."
  },
  {
    "id": "q-qd-6",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Phân loại chứng chỉ",
    "question": "Chứng chỉ đại lý bảo hiểm phi nhân thọ cơ bản cho phép phân phối sản phẩm bảo hiểm sức khỏe và tử vong với thời hạn tối đa là bao lâu?",
    "options": [
      "Thời hạn tối đa 6 tháng",
      "Thời hạn tối đa 1 năm",
      "Thời hạn tối đa 2 năm",
      "Thời hạn không giới hạn"
    ],
    "correctIndex": 1,
    "explanation": "CC ĐLBH phi nhân thọ cơ bản chỉ được bán sản phẩm bảo hiểm sức khỏe thời hạn ≤ 1 năm và bảo hiểm rủi ro tử vong thời hạn ≤ 1 năm."
  },
  {
    "id": "q-qd-7",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cơ quan thẩm quyền",
    "question": "Cơ quan nào có thẩm quyền tổ chức kỳ thi và ra quyết định phê duyệt kết quả thi chứng chỉ đại lý bảo hiểm?",
    "options": [
      "Hiệp hội Bảo hiểm Việt Nam",
      "Cơ sở đào tạo đại lý bảo hiểm",
      "Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)",
      "Tổng cục Thuế"
    ],
    "correctIndex": 2,
    "explanation": "Cục Quản lý, giám sát bảo hiểm (Cục QLGSBH) thuộc Bộ Tài chính là cơ quan nhà nước tổ chức thi và duyệt kết quả."
  },
  {
    "id": "q-qd-8",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cơ quan thẩm quyền",
    "question": "Đơn vị nào trực tiếp in và cấp chứng chỉ đại lý bảo hiểm cho thí sinh sau khi có quyết định phê duyệt kết quả thi?",
    "options": [
      "Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)",
      "Cơ sở đào tạo (CSĐT)",
      "Ủy ban Chứng khoán Nhà nước",
      "Doanh nghiệp bảo hiểm tuyển dụng đại lý"
    ],
    "correctIndex": 1,
    "explanation": "Cục QLGSBH phê duyệt kết quả; còn Cơ sở đào tạo (CSĐT) là bên trực tiếp cấp chứng chỉ cho thí sinh."
  },
  {
    "id": "q-qd-9",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Mốc thời hạn",
    "question": "Thời hạn cơ sở đào tạo phải cấp chứng chỉ đại lý bảo hiểm cho thí sinh sau khi có quyết định phê duyệt kết quả là bao lâu?",
    "options": [
      "3 ngày",
      "5 ngày",
      "10 ngày",
      "15 ngày"
    ],
    "correctIndex": 0,
    "explanation": "Trong thời hạn 03 ngày làm việc kể từ ngày có quyết định phê duyệt kết quả thi, cơ sở đào tạo phải cấp chứng chỉ cho học viên."
  },
  {
    "id": "q-qd-10",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Mốc thời hạn",
    "question": "Thời hạn phê duyệt kết quả thi đối với kỳ thi trên giấy (hình thức Viết 1) là bao nhiêu ngày kể từ ngày thi?",
    "options": [
      "3 ngày",
      "5 ngày",
      "7 ngày",
      "10 ngày"
    ],
    "correctIndex": 1,
    "explanation": "Thi trên giấy cần thời gian tập hợp bài và chấm thủ công nên thời hạn phê duyệt là 5 ngày kể từ ngày thi."
  },
  {
    "id": "q-qd-11",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Mốc thời hạn",
    "question": "Thời hạn phê duyệt kết quả thi đối với kỳ thi trên máy tính (Online 1, 2) và hình thức Viết 2 là bao nhiêu ngày?",
    "options": [
      "1 ngày",
      "2 ngày",
      "3 ngày",
      "5 ngày"
    ],
    "correctIndex": 2,
    "explanation": "Kỳ thi trên máy tính (Online 1, 2) và Viết 2 có thời hạn phê duyệt kết quả là 3 ngày."
  },
  {
    "id": "q-qd-12",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Mốc thời hạn",
    "question": "Thí sinh có nguyện vọng phúc khảo bài thi phải nộp đơn trong thời hạn bao nhiêu ngày kể từ ngày công bố quyết định phê duyệt kết quả?",
    "options": [
      "10 ngày",
      "15 ngày",
      "20 ngày",
      "30 ngày"
    ],
    "correctIndex": 2,
    "explanation": "Thời hạn nộp đơn phúc khảo là 20 ngày kể từ ngày có quyết định phê duyệt kết quả thi."
  },
  {
    "id": "q-qd-13",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Mốc thời hạn",
    "question": "Thời hạn chấm và trả lời kết quả phúc khảo bài thi là bao nhiêu ngày?",
    "options": [
      "3 ngày",
      "5 ngày",
      "7 ngày",
      "10 ngày"
    ],
    "correctIndex": 1,
    "explanation": "Trong thời hạn 05 ngày làm việc, đơn vị tổ chức thi phải chấm và trả lời kết quả phúc khảo cho thí sinh."
  },
  {
    "id": "q-qd-14",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Quy chế phúc khảo",
    "question": "Thủ tục phúc khảo kết quả thi áp dụng đối với hình thức thi nào sau đây?",
    "options": [
      "Áp dụng cho mọi hình thức thi (trên máy và trên giấy)",
      "CHỈ áp dụng đối với các kỳ thi trên giấy",
      "CHỈ áp dụng đối với các kỳ thi trên máy vi tính",
      "Không áp dụng phúc khảo cho bất kỳ kỳ thi nào"
    ],
    "correctIndex": 1,
    "explanation": "Đặc biệt lưu ý: Phúc khảo CHỈ áp dụng đối với các kỳ thi làm trên giấy. Thi trên máy do phần mềm chấm tự động nên không phúc khảo."
  },
  {
    "id": "q-qd-15",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Thời hạn chứng chỉ",
    "question": "Đại lý bảo hiểm không hoạt động đại lý liên tục trong thời gian bao lâu thì phải thi lại chứng chỉ đại lý mới?",
    "options": [
      "1 năm liên tục",
      "2 năm liên tục",
      "3 năm liên tục",
      "5 năm liên tục"
    ],
    "correctIndex": 2,
    "explanation": "Nếu đại lý không hoạt động đại lý bảo hiểm liên tục trong thời gian 03 năm thì chứng chỉ đại lý hết giá trị sử dụng và phải thi lại từ đầu."
  },
  {
    "id": "q-qd-16",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Xử lý vi phạm",
    "question": "Cá nhân bị thu hồi chứng chỉ đại lý bảo hiểm do gian lận hoặc vi phạm quy chế thì bị cấm dự thi lại trong thời gian bao lâu?",
    "options": [
      "6 tháng kế tiếp",
      "12 tháng kế tiếp",
      "24 tháng kế tiếp",
      "Cấm dự thi vĩnh viễn"
    ],
    "correctIndex": 1,
    "explanation": "Khi bị thu hồi chứng chỉ do gian lận hoặc vi phạm quy chế, cá nhân bị cấm dự thi lấy chứng chỉ mới trong 12 tháng kế tiếp."
  },
  {
    "id": "q-qd-17",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Thủ tục đăng ký",
    "question": "Thời hạn tối thiểu cơ sở đào tạo phải gửi danh sách đăng ký thí sinh dự thi chứng chỉ bảo hiểm trước ngày thi là bao nhiêu ngày?",
    "options": [
      "5 ngày",
      "7 ngày",
      "10 ngày",
      "15 ngày"
    ],
    "correctIndex": 2,
    "explanation": "Quy định: Phải đăng ký dự thi chứng chỉ bảo hiểm trước ngày tổ chức thi tối thiểu 10 ngày."
  },
  {
    "id": "q-qd-18",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Điều kiện dự thi",
    "question": "Để được cấp chứng chỉ đại lý bảo hiểm liên kết đơn vị, điều kiện tiên quyết về chứng chỉ của học viên là gì?",
    "options": [
      "Đã có chứng chỉ đại lý bảo hiểm phi nhân thọ cơ bản",
      "Đã có chứng chỉ đại lý bảo hiểm nhân thọ cơ bản",
      "Đã có chứng chỉ đại lý bảo hiểm hàng hải",
      "Đã có chứng chỉ chuyên gia tính toán bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Muốn học và thi chứng chỉ ĐLBH liên kết đơn vị, thí sinh bắt buộc phải có chứng chỉ ĐLBH nhân thọ cơ bản trước đó."
  },
  {
    "id": "q-qd-19",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Phân loại chứng chỉ",
    "question": "Hiện nay quy chế đào tạo đại lý bảo hiểm quy định có tổng cộng bao nhiêu loại chứng chỉ đại lý bảo hiểm?",
    "options": [
      "4 loại chứng chỉ",
      "5 loại chứng chỉ",
      "6 loại chứng chỉ",
      "8 loại chứng chỉ"
    ],
    "correctIndex": 2,
    "explanation": "Có đúng 6 loại chứng chỉ ĐLBH: Nhân thọ cơ bản, Liên kết đơn vị, Phi nhân thọ cơ bản, Hàng hải, Hàng không, và Sức khỏe."
  },
  {
    "id": "q-qd-20",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cấu trúc đề",
    "question": "Kỳ thi sát hạch cấp Chứng chỉ đại lý bảo hiểm hàng hải dành cho thí sinh đã có chứng chỉ ĐLBH phi nhân thọ cơ bản thi bao nhiêu câu và yêu cầu đúng bao nhiêu câu để đỗ?",
    "options": [
      "30 câu, đúng ≥ 21 câu",
      "20 câu, đúng ≥ 15 câu (75%)",
      "40 câu, đúng ≥ 30 câu (75%)",
      "25 câu, đúng ≥ 18 câu"
    ],
    "correctIndex": 1,
    "explanation": "Kỳ thi chuyên biệt hàng hải / hàng không khi đã có CCĐL PNT cơ bản gồm 20 câu trong 40 phút, đỗ khi đúng ≥ 15 câu (75%)."
  },
  {
    "id": "q-qd-21",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Cơ quan quản lý",
    "question": "Cơ quan nào phê duyệt kế hoạch tổ chức thi chứng chỉ đại lý bảo hiểm hàng năm?",
    "options": [
      "Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính)",
      "Doanh nghiệp bảo hiểm",
      "Bộ Công an",
      "Ủy ban nhân dân cấp tỉnh"
    ],
    "correctIndex": 0,
    "explanation": "Cục Quản lý, giám sát bảo hiểm phê duyệt kế hoạch tổ chức thi chứng chỉ đại lý bảo hiểm hàng năm."
  },
  {
    "id": "q-qd-22",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Phân loại chứng chỉ",
    "question": "Chứng chỉ đại lý bảo hiểm sức khỏe cho phép đại lý phân phối những sản phẩm bảo hiểm nào?",
    "options": [
      "Tất cả sản phẩm bảo hiểm nhân thọ trọn đời",
      "Các sản phẩm bảo hiểm thuộc loại hình bảo hiểm sức khỏe",
      "Bảo hiểm xe cơ giới và tàu thủy",
      "Bảo hiểm cháy nổ bắt buộc"
    ],
    "correctIndex": 1,
    "explanation": "Chứng chỉ ĐLBH sức khỏe chỉ cho phép đại lý tư vấn và phân phối các sản phẩm bảo hiểm thuộc loại hình bảo hiểm sức khỏe."
  },
  {
    "id": "q-qd-23",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Thời gian thi",
    "question": "Một thí sinh tham gia kỳ thi cấp Chứng chỉ bảo hiểm (không phải đại lý) với đề thi 60 câu, thí sinh có thời gian làm bài là bao lâu?",
    "options": [
      "60 phút",
      "75 phút",
      "90 phút",
      "120 phút"
    ],
    "correctIndex": 2,
    "explanation": "Kỳ thi Chứng chỉ bảo hiểm (không phải đại lý) có thời gian làm bài là 90 phút cho 60 câu hỏi."
  },
  {
    "id": "q-qd-24",
    "category": "Quy định thi & chứng chỉ",
    "subCategory": "Quy chế thi",
    "question": "Thí sinh bị đình chỉ thi do vi phạm quy chế phòng thi thì bài thi được xử lý như thế nào?",
    "options": [
      "Được trừ 50% số điểm",
      "Bị điểm 0 và hủy kết quả thi của kỳ thi đó",
      "Được thi lại vào ca thi tiếp theo",
      "Được bảo lưu kết quả các câu đã làm"
    ],
    "correctIndex": 1,
    "explanation": "Thí sinh vi phạm quy chế bị đình chỉ thi sẽ nhận điểm 0 và bị hủy bỏ toàn bộ kết quả của kỳ thi."
  },
  {
    "id": "q-tv-1",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Chữ viết tắt \"HĐBH\" trong toàn bộ tài liệu pháp lý và đề thi nghĩa là gì?",
    "options": [
      "Hội đồng bảo hiểm",
      "Hợp đồng bảo hiểm",
      "Hành vi đóng phí bảo hiểm",
      "Hạn định bồi thường bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "HĐBH là từ viết tắt của Hợp đồng bảo hiểm — văn bản thỏa thuận xác lập quyền và nghĩa vụ giữa bên mua và DNBH."
  },
  {
    "id": "q-tv-2",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Chữ viết tắt \"DNBH\" trong tài liệu ôn thi chỉ đối tượng nào?",
    "options": [
      "Doanh nghiệp bảo hiểm (công ty bảo hiểm)",
      "Đại lý bán bảo hiểm",
      "Doanh nghiệp bán hàng hóa",
      "Đoàn người được bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "DNBH là Doanh nghiệp bảo hiểm — bên bán bảo hiểm có giấy phép thành lập và hoạt động của Bộ Tài chính."
  },
  {
    "id": "q-tv-3",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Phân biệt \"BMBH\" và \"NĐBH\", phát biểu nào sau đây là CHÍNH XÁC nhất?",
    "options": [
      "BMBH và NĐBH bắt buộc phải luôn luôn là cùng một cá nhân",
      "BMBH là người ký hợp đồng và đóng phí; NĐBH là người có tài sản/tính mạng được bảo vệ",
      "NĐBH là người nộp đơn khiếu nại bồi thường còn BMBH chỉ là người thụ hưởng",
      "BMBH là công ty bảo hiểm còn NĐBH là khách hàng mua bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "BMBH (Bên mua bảo hiểm) là bên giao kết HĐBH và thanh toán phí. NĐBH (Người được bảo hiểm) là người được bảo hiểm tính mạng, sức khỏe hoặc tài sản."
  },
  {
    "id": "q-tv-4",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Thuật ngữ viết tắt \"STBH\" có ý nghĩa gì trong một Hợp đồng bảo hiểm?",
    "options": [
      "Số tiền bảo hiểm — hạn mức bồi thường tối đa mà DNBH cam kết chi trả",
      "Số tháng bảo hiểm hiệu lực",
      "Số thứ tự biên lai bảo hiểm",
      "Sổ theo dõi bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "STBH là Số tiền bảo hiểm — số tiền thỏa thuận trong HĐBH làm căn cứ tính phí và là trần chi trả bồi thường tối đa của DNBH."
  },
  {
    "id": "q-tv-5",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Bảo hiểm xã hội (BHXH) và Bảo hiểm y tế (BHYT) có thuộc phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm không?",
    "options": [
      "Có, do Bộ Tài chính trực tiếp cấp phép hoạt động kinh doanh",
      "KHÔNG, do Nhà nước tổ chức thực hiện theo chính sách an sinh xã hội",
      "Chỉ thuộc phạm vi điều chỉnh khi tham gia thêm gói tự nguyện",
      "Thuộc phạm vi điều chỉnh đối với các công ty cổ phần"
    ],
    "correctIndex": 1,
    "explanation": "BHXH và BHYT do Nhà nước tổ chức thực hiện phi lợi nhuận, KHÔNG thuộc phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm."
  },
  {
    "id": "q-tv-6",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Viết tắt tiếng Việt",
    "question": "Viết tắt \"TNDS\" trong bảo hiểm thường xuất hiện trong cụm từ nào sau đây?",
    "options": [
      "Thu nhập dân sự bình quân",
      "Trách nhiệm dân sự (như TNDS của chủ xe cơ giới)",
      "Thời niên đại tài sản bảo hiểm",
      "Thỏa thuận nội dung sản phẩm"
    ],
    "correctIndex": 1,
    "explanation": "TNDS viết tắt cho Trách nhiệm dân sự, quen thuộc nhất là bảo hiểm bắt buộc TNDS của chủ xe cơ giới đối với bên thứ 3."
  },
  {
    "id": "q-ta-1",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Chữ viết tắt \"CAR\" (Contractors All Risks) là loại bảo hiểm gì?",
    "options": [
      "Bảo hiểm ô tô con của nhà thầu",
      "Bảo hiểm mọi rủi ro xây dựng cho công trình ĐANG THI CÔNG",
      "Bảo hiểm trách nhiệm vận tải hàng hóa",
      "Bảo hiểm tai nạn cá nhân cho công nhân xây dựng"
    ],
    "correctIndex": 1,
    "explanation": "CAR là viết tắt của Contractors All Risks — bảo hiểm mọi rủi ro của nhà thầu đối với công trình kiến trúc đang thi công xây dựng."
  },
  {
    "id": "q-ta-2",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Chữ viết tắt \"EAR\" (Erection All Risks) bảo hiểm cho đối tượng nào?",
    "options": [
      "Công trình dân dụng đã hoàn thành và đưa vào sử dụng",
      "Công trình ĐANG LẮP ĐẶT máy móc, thiết bị, dây chuyền kỹ thuật",
      "Máy bay đang cất cánh và hạ cánh",
      "Hàng hóa đang vận chuyển bằng đường sắt"
    ],
    "correctIndex": 1,
    "explanation": "EAR là Erection All Risks — bảo hiểm mọi rủi ro lắp đặt máy móc, thiết bị công nghiệp trong thời gian thi công lắp ráp."
  },
  {
    "id": "q-ta-3",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Đơn bảo hiểm CAR có tự động bảo hiểm cho các loại máy móc thi công tại công trường (cần cẩu, máy xúc, máy ủi) không?",
    "options": [
      "Có, vì CAR bảo hiểm mọi rủi ro tại công trường",
      "KHÔNG, máy móc thi công phải mua bảo hiểm riêng theo đơn CPM",
      "Chỉ bảo hiểm máy móc có giá trị dưới 100 triệu đồng",
      "Có, nếu máy móc thuộc sở hữu của chủ đầu tư"
    ],
    "correctIndex": 1,
    "explanation": "BẪY THI RẤT HAY GẶP: Đơn CAR chỉ bảo vệ công trình xây dựng, KHÔNG tự động bảo hiểm xe máy thi công. Muốn bảo vệ xe máy thi công phải mua đơn CPM."
  },
  {
    "id": "q-ta-4",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Đơn bảo hiểm CPM (Contractors Plant and Machinery) bảo hiểm cho cái gì?",
    "options": [
      "Cây cối và cảnh quan xung quanh công trường",
      "Bản thân máy móc, thiết bị thi công của nhà thầu (cần cẩu, máy xúc, máy ủi)",
      "Hệ thống phần mềm máy vi tính văn phòng",
      "Mặt sàn bê tông sau khi đổ"
    ],
    "correctIndex": 1,
    "explanation": "CPM (Contractors Plant and Machinery) bảo hiểm cho chính máy móc, trang thiết bị thi công của nhà thầu."
  },
  {
    "id": "q-ta-5",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Bảo hiểm CECR (Civil Engineering Completed Risks) bảo hiểm cho giai đoạn nào của công trình?",
    "options": [
      "Giai đoạn đang khảo sát địa chất",
      "Giai đoạn đang ép cọc và thi công xây lắp",
      "Giai đoạn công trình dân dụng ĐÃ HOÀN THÀNH và ĐƯA VÀO SỬ DỤNG",
      "Giai đoạn công trình đang bị phong tỏa phá dỡ"
    ],
    "correctIndex": 2,
    "explanation": "CECR bảo hiểm cho các công trình kỹ thuật dân dụng (cầu, đập, kè, hầm) đã hoàn tất xây dựng và đưa vào khai thác sử dụng."
  },
  {
    "id": "q-ta-6",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Trong quy tắc bảo hiểm CECR, giá trị tham gia bảo hiểm bắt buộc phải xác định theo nguyên tắc nào?",
    "options": [
      "Giá trị ghi sổ sách kế toán",
      "Giá trị thực tế còn lại (đã trừ khấu hao)",
      "Giá trị thay thế mới của tài sản",
      "Giá thẩm định phát mại thanh lý"
    ],
    "correctIndex": 2,
    "explanation": "Nguyên tắc vàng của CECR: Giá trị tham gia bảo hiểm luôn tính theo GIÁ TRỊ THAY THẾ MỚI, không trừ khấu hao."
  },
  {
    "id": "q-ta-7",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Chữ viết tắt \"ABI\" trong các đề thi bảo hiểm tài sản đại diện cho điều gì?",
    "options": [
      "Một loại hình bảo hiểm bắt buộc ở Việt Nam",
      "Hiệp hội bảo hiểm Vương quốc Anh (Association of British Insurers) — nơi soạn quy tắc mẫu",
      "Hãng đóng tàu quốc tế",
      "Một quỹ cứu trợ thiên tai toàn cầu"
    ],
    "correctIndex": 1,
    "explanation": "ABI (Association of British Insurers) là Hiệp hội bảo hiểm Vương quốc Anh, đơn vị ban hành các bộ quy tắc bảo hiểm chuẩn quốc tế."
  },
  {
    "id": "q-ta-8",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Đơn bảo hiểm \"MB\" (Machinery Breakdown) bồi thường cho tổn thất phát sinh do nguyên nhân nào?",
    "options": [
      "Máy móc bị trộm cắp khi đang lưu kho ngoài trời",
      "Đổ vỡ, hỏng hóc máy móc do sự cố cơ điện nội tại (quá tải, đoản mạch, vỡ trục)",
      "Hư hỏng máy móc do chiến tranh hoặc nội chiến",
      "Máy móc giảm giá trị do lỗi thời công nghệ"
    ],
    "correctIndex": 1,
    "explanation": "MB (Machinery Breakdown) là bảo hiểm đổ vỡ máy móc do sự cố kỹ thuật bên trong: đoản mạch, áp suất tăng đột biến, vỡ trục khuỷu..."
  },
  {
    "id": "q-ta-9",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Quy tắc tiếng Anh",
    "question": "Đơn bảo hiểm \"BI\" (Business Interruption) bảo hiểm cho đối tượng nào?",
    "options": [
      "Tài sản nhà xưởng và máy móc bị hư hỏng",
      "Lợi nhuận kinh doanh bị mất và các chi phí cố định phải duy trì khi ngừng sản xuất do tai nạn",
      "Tiền nộp phạt hành chính của công ty",
      "Trách nhiệm bồi thường cho người tiêu dùng"
    ],
    "correctIndex": 1,
    "explanation": "BI (Business Interruption - Gián đoạn kinh doanh) không bảo vệ tài sản hữu hình, mà bảo vệ KHOẢN LỢI NHUẬN MẤT ĐI khi doanh nghiệp phải dừng hoạt động vì tổn thất tài sản."
  },
  {
    "id": "q-tbh-1",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Tái bảo hiểm",
    "question": "Hình thức Tái bảo hiểm số thành (Quota Share - QS) chia sẻ trách nhiệm bảo hiểm theo cách nào?",
    "options": [
      "Chia theo một tỷ lệ phần trăm CỐ ĐỊNH cho mọi rủi ro trong nhóm",
      "Chia theo số tiền bồi thường thực tế của từng vụ việc",
      "Nhà tái chỉ trả tiền khi doanh nghiệp bị phá sản",
      "Chia sẻ theo mức thâm niên của đại lý"
    ],
    "correctIndex": 0,
    "explanation": "Quota Share (QS) phân chia phí và bồi thường theo MỘT TỶ LỆ CỐ ĐỊNH (ví dụ: giữ lại 40%, nhượng tái 60%) cho tất cả hợp đồng."
  },
  {
    "id": "q-tbh-2",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Tái bảo hiểm",
    "question": "Hình thức Tái bảo hiểm mức dôi (Surplus - SPL) hoạt động theo cơ chế nào sau đây?",
    "options": [
      "Doanh nghiệp giữ lại một mức tiền cố định, phần vượt mức giữ lại (mức dôi) sẽ nhượng đi",
      "Chia sẻ theo tỷ lệ 50/50 bắt buộc cho mọi hợp đồng",
      "Doanh nghiệp nhượng 100% rủi ro cho công ty nước ngoài",
      "Nhà nhận tái bảo hiểm chịu toàn bộ tổn thất không giới hạn"
    ],
    "correctIndex": 0,
    "explanation": "Surplus (SPL - Mức dôi): DNBH xác định mức giữ lại tối đa cho mỗi hợp đồng, phần giá trị bảo hiểm dôi ra sẽ được chuyển nhượng cho nhà tái bảo hiểm."
  },
  {
    "id": "q-tbh-3",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Tái bảo hiểm",
    "question": "Tái bảo hiểm vượt mức bồi thường (Excess of Loss - XL/XOL) thuộc loại hình tái bảo hiểm nào?",
    "options": [
      "Tái bảo hiểm tỷ lệ",
      "Tái bảo hiểm phi tỷ lệ",
      "Tái bảo hiểm nhân thọ trọn đời",
      "Tái bảo hiểm trợ cấp viện phí"
    ],
    "correctIndex": 1,
    "explanation": "XL/XOL là hình thức tái bảo hiểm phi tỷ lệ (non-proportional): Nhà tái chỉ chi trả phần bồi thường vượt qua mức tự chịu của doanh nghiệp nhượng."
  },
  {
    "id": "q-tbh-4",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Tái bảo hiểm",
    "question": "Tái bảo hiểm Stop Loss (SL - Vượt tỷ lệ bồi thường) bồi thường dựa trên chỉ số nào?",
    "options": [
      "Số lượng đại lý vi phạm quy chế trong năm",
      "TỔNG TỶ LỆ TỔN THẤT của cả danh mục trong cả năm vượt ngưỡng định trước",
      "Số hợp đồng bảo hiểm bị hủy bỏ",
      "Lãi suất ngân hàng trung ương"
    ],
    "correctIndex": 1,
    "explanation": "Stop Loss (SL) bảo vệ DNBH khi tổng tỷ lệ bồi thường cả năm của danh mục nghiệp vụ vượt qua ngưỡng an toàn (ví dụ vượt quá 85%)."
  },
  {
    "id": "q-tn-1",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "Thuật ngữ \"Khuyết tật của vật liệu\" trong bảo hiểm xây dựng kỹ thuật có nghĩa là gì?",
    "options": [
      "Vật liệu bị công nhân làm rơi vỡ tại công trường",
      "Vật liệu đã bị lỗi ngầm sẵn từ bên trong trước khi đưa vào công trình (thép lẫn tạp chất, bê tông sai mác)",
      "Vật liệu hết hạn sử dụng theo hóa đơn",
      "Vật liệu bị tăng giá trên thị trường"
    ],
    "correctIndex": 1,
    "explanation": "Khuyết tật của vật liệu là hư hỏng/khiếm khuyết có sẵn từ bên trong cấu trúc vật liệu trước lúc thi công (như rỗ ngầm, tạp chất)."
  },
  {
    "id": "q-tn-2",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "Khái niệm \"Tay nghề kém\" trong thi công xây lắp được hiểu là trường hợp nào?",
    "options": [
      "Kỹ sư vẽ sai bản vẽ thiết kế",
      "Công nhân thực hiện sai quy trình kỹ thuật thi công (hàn không ngấu, đầm bê tông dối, siết bu-lông lỏng)",
      "Vật liệu bị lỗi tại nơi sản xuất",
      "Thiên tai bão lũ bất khả kháng"
    ],
    "correctIndex": 1,
    "explanation": "Tay nghề kém là lỗi do kỹ năng của người lao động: thi công sai phương pháp, thao tác sai tiêu chuẩn kỹ thuật."
  },
  {
    "id": "q-tn-3",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "Khái niệm \"Mức khấu trừ\" (Deductible) trong bảo hiểm mang ý nghĩa gì?",
    "options": [
      "Khoản phí hoa hồng trả cho đại lý bảo hiểm",
      "Số tiền người được bảo hiểm phải tự chịu trong mỗi sự cố tổn thất; bảo hiểm chỉ bồi thường phần vượt mức này",
      "Khoản thuế giá trị gia tăng nộp vào ngân sách nhà nước",
      "Tiền phạt trả chậm phí bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Mức khấu trừ là phần giá trị tổn thất mà bên mua/người được bảo hiểm phải tự gánh chịu; doanh nghiệp bảo hiểm chỉ chi trả phần thiệt hại vượt quá mức khấu trừ."
  },
  {
    "id": "q-tn-4",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "\"Giá trị thay thế mới\" của tài sản trong hợp đồng bảo hiểm được hiểu là gì?",
    "options": [
      "Giá trị tài sản ghi trên sổ sách kế toán ban đầu",
      "Chi phí mua mới hoặc xây mới tài sản cùng loại ở thời điểm hiện tại, KHÔNG trừ khấu hao",
      "Giá trị bán sắt vụn thanh lý tài sản",
      "Giá trị định giá để nộp thuế trước bạ"
    ],
    "correctIndex": 1,
    "explanation": "Giá trị thay thế mới là chi phí cần thiết để thay thế hoặc tái tạo lại tài sản mới tương đương tại thời điểm định giá, không tính giảm trừ khấu hao."
  },
  {
    "id": "q-tn-5",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "Trong tái bảo hiểm, từ viết tắt \"Treaty\" đại diện cho hình thức nào?",
    "options": [
      "Tái bảo hiểm tạm thời từng vụ",
      "Tái bảo hiểm cố định theo hợp đồng khung ký kết hàng năm",
      "Tái bảo hiểm bắt buộc theo luật lao động",
      "Hợp đồng bảo hiểm trọn gói"
    ],
    "correctIndex": 1,
    "explanation": "Treaty là hình thức tái bảo hiểm cố định theo hợp đồng thỏa thuận hàng năm, rủi ro đủ điều kiện sẽ tự động được nhượng tái."
  },
  {
    "id": "q-tn-6",
    "category": "Từ viết tắt & thuật ngữ",
    "subCategory": "Thuật ngữ kỹ thuật",
    "question": "Trong tái bảo hiểm, từ viết tắt \"Fac\" (Facultative) là hình thức nào?",
    "options": [
      "Tái bảo hiểm tạm thời (thương lượng riêng từng vụ)",
      "Tái bảo hiểm trọn gói",
      "Bảo hiểm nhà xưởng tự nguyện",
      "Chính sách thưởng doanh số"
    ],
    "correctIndex": 0,
    "explanation": "Facultative (Fac) là hình thức tái bảo hiểm tạm thời/tùy ý lựa chọn riêng lẻ cho từng vụ việc cụ thể."
  },
  {
    "id": "q-dl-1",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Khái niệm",
    "question": "Theo Điều 124 Luật Kinh doanh bảo hiểm, Đại lý bảo hiểm là gì?",
    "options": [
      "Là nhân viên chính thức trong biên chế của cơ quan nhà nước về bảo hiểm",
      "Là tổ chức, cá nhân được DNBH ủy quyền trên cơ sở HỢP ĐỒNG ĐẠI LÝ BẢO HIỂM để thực hiện hoạt động đại lý bảo hiểm",
      "Là người mua bảo hiểm số lượng lớn để bán lại kiếm lời",
      "Là cá nhân được Hiệp hội Bảo hiểm Việt Nam cấp thẻ hội viên"
    ],
    "correctIndex": 1,
    "explanation": "Điều 124 LKDBH: Đại lý bảo hiểm là tổ chức, cá nhân được doanh nghiệp bảo hiểm ủy quyền trên cơ sở hợp đồng đại lý bảo hiểm để thực hiện hoạt động đại lý bảo hiểm."
  },
  {
    "id": "q-dl-2",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Nội dung hoạt động",
    "question": "Khoản 5 Điều 4 Luật KDBH quy định hoạt động đại lý bảo hiểm gồm bao nhiêu nội dung chính?",
    "options": [
      "4 nội dung",
      "5 nội dung",
      "6 nội dung",
      "8 nội dung"
    ],
    "correctIndex": 2,
    "explanation": "Hoạt động đại lý gồm 6 nội dung: Tư vấn SPBH; Giới thiệu SPBH; Chào bán SPBH; Thu xếp việc giao kết HĐBH; Thu phí bảo hiểm; Thu thập hồ sơ bồi thường."
  },
  {
    "id": "q-dl-3",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Bẫy quyền hạn",
    "question": "Hành vi nào sau đây Đại lý bảo hiểm KHÔNG ĐƯỢC PHÉP thực hiện?",
    "options": [
      "Tư vấn và giới thiệu sản phẩm bảo hiểm cho khách hàng",
      "Thay mặt Doanh nghiệp bảo hiểm trực tiếp KÝ KẾT hợp đồng bảo hiểm và QUYẾT ĐỊNH bồi thường",
      "Thu xếp việc giao kết hợp đồng bảo hiểm",
      "Thu phí bảo hiểm theo thỏa thuận ủy quyền của DNBH"
    ],
    "correctIndex": 1,
    "explanation": "Bẫy thi cực kỳ phổ biến: Đại lý KHÔNG được ký hợp đồng, KHÔNG được giám định tổn thất, KHÔNG được quyết định bồi thường và KHÔNG được thu xếp tái bảo hiểm. Đại lý chỉ \"thu xếp giao kết\", còn bên ký là DNBH."
  },
  {
    "id": "q-dl-4",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Điều kiện cá nhân",
    "question": "Điều kiện nào sau đây BẮT BUỘC đối với cá nhân hoạt động đại lý bảo hiểm theo Điều 125 Luật KDBH?",
    "options": [
      "Có bằng tốt nghiệp Đại học chuyên ngành Kinh tế hoặc Luật",
      "Là công dân Việt Nam thường trú tại Việt Nam, có năng lực hành vi dân sự đầy đủ, có chứng chỉ đại lý bảo hiểm phù hợp",
      "Có ít nhất 1 năm kinh nghiệm làm việc tại công ty tài chính",
      "Phải có tài sản ký quỹ tối thiểu 50 triệu đồng"
    ],
    "correctIndex": 1,
    "explanation": "Điều kiện cá nhân: (1) Là công dân VN thường trú tại VN; (2) Có năng lực hành vi dân sự đầy đủ; (3) Có chứng chỉ đại lý bảo hiểm phù hợp."
  },
  {
    "id": "q-dl-5",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Điều kiện tổ chức",
    "question": "Đối với tổ chức làm đại lý bảo hiểm (không phải tổ chức tín dụng), điều kiện về số lượng nhân viên trực tiếp thực hiện hoạt động ĐLBH tối thiểu là bao nhiêu?",
    "options": [
      "Tối thiểu 01 nhân viên",
      "Tối thiểu 02 nhân viên",
      "Tối thiểu 03 nhân viên",
      "Tối thiểu 05 nhân viên"
    ],
    "correctIndex": 2,
    "explanation": "Theo Nghị định 46/2023/NĐ-CP: Tổ chức khác làm đại lý (không phải ngân hàng) phải có tối thiểu 03 nhân viên trực tiếp thực hiện hoạt động đại lý bảo hiểm có đủ điều kiện."
  },
  {
    "id": "q-dl-6",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Điều kiện ngân hàng",
    "question": "Tổ chức tín dụng, chi nhánh ngân hàng nước ngoài làm đại lý bảo hiểm phải đảm bảo điều kiện gì tại từng phòng giao dịch/chi nhánh?",
    "options": [
      "Phải có ít nhất 10 nhân viên bán bảo hiểm",
      "Phải có quầy (hoặc bàn) giao dịch riêng, tách biệt với khu vực thực hiện các nghiệp vụ ngân hàng khác",
      "Chỉ được bán bảo hiểm vào các ngày cuối tuần",
      "Tổng giám đốc ngân hàng phải trực tiếp đứng tên đại lý"
    ],
    "correctIndex": 1,
    "explanation": "Quy định chặt chẽ: Mỗi chi nhánh/phòng giao dịch ngân hàng phải bố trí quầy (hoặc bàn) giao dịch riêng biệt, tách biệt khỏi khu vực giao dịch tiền gửi/cho vay."
  },
  {
    "id": "q-dl-7",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Đối tượng cấm",
    "question": "Đối tượng nào sau đây KHÔNG ĐƯỢC hoạt động làm đại lý bảo hiểm?",
    "options": [
      "Cá nhân đã nghỉ hưu hưởng chế độ bảo hiểm xã hội",
      "Cá nhân đang bị truy cứu trách nhiệm hình sự hoặc đang chấp hành hình phạt tù",
      "Cá nhân chưa từng làm việc trong ngành tài chính",
      "Cá nhân sở hữu ô tô cá nhân"
    ],
    "correctIndex": 1,
    "explanation": "Cá nhân đang bị truy cứu trách nhiệm hình sự, đang chấp hành án phạt tù hoặc đang bị cấm hành nghề liên quan đến bảo hiểm tuyệt đối không được làm đại lý."
  },
  {
    "id": "q-dl-8",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Nguyên tắc hoạt động",
    "question": "Cá nhân đang làm đại lý cho một doanh nghiệp bảo hiểm nhân thọ có được ĐỒNG THỜI làm đại lý cho một doanh nghiệp bảo hiểm nhân thọ KHÁC không?",
    "options": [
      "Được phép, nếu được quản lý khu vực đồng ý",
      "KHÔNG ĐƯỢC PHÉP, cá nhân không được đồng thời làm đại lý cho DNBH khác trong CÙNG LOẠI HÌNH bảo hiểm",
      "Được phép tự do không hạn chế",
      "Được phép nếu đạt doanh số bán hàng xuất sắc"
    ],
    "correctIndex": 1,
    "explanation": "Nguyên tắc Điều 127: Cá nhân KHÔNG được đồng thời làm đại lý cho DNBH khác hoạt động trong CÙNG LOẠI HÌNH bảo hiểm."
  },
  {
    "id": "q-dl-9",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Nguyên tắc hoạt động",
    "question": "TỔ CHỨC làm đại lý bảo hiểm có được đồng thời làm đại lý cho DNBH khác không?",
    "options": [
      "Tuyệt đối không được trong mọi trường hợp",
      "ĐƯỢC, nhưng phải được sự chấp thuận BẰNG VĂN BẢN của DNBH mà tổ chức đó đang làm đại lý",
      "Được tự do ký kết không cần thông báo",
      "Chỉ được ký nếu hai DNBH là công ty mẹ - con"
    ],
    "correctIndex": 1,
    "explanation": "Tổ chức được đồng thời làm đại lý cho DNBH khác NẾU được sự chấp thuận BẰNG VĂN BẢN của DNBH đang làm đại lý."
  },
  {
    "id": "q-dl-10",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Nguyên tắc hoạt động",
    "question": "Đại lý bảo hiểm chỉ được phép thực hiện hoạt động đại lý đối với những sản phẩm bảo hiểm nào?",
    "options": [
      "Bất kỳ sản phẩm nào có trên thị trường",
      "Những sản phẩm bảo hiểm mà đại lý ĐÃ ĐƯỢC ĐÀO TẠO",
      "Những sản phẩm có mức hoa hồng từ 15% trở lên",
      "Những sản phẩm do khách hàng tự yêu cầu bằng văn bản"
    ],
    "correctIndex": 1,
    "explanation": "Đại lý chỉ được tư vấn và bán các sản phẩm bảo hiểm mà mình ĐÃ ĐƯỢC ĐÀO TẠO theo quy định."
  },
  {
    "id": "q-dl-11",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng đại lý",
    "question": "Hoa hồng đại lý bảo hiểm được Doanh nghiệp bảo hiểm chi trả cho đối tượng nào?",
    "options": [
      "Chi trả trực tiếp cho Bên mua bảo hiểm để giảm giá sản phẩm",
      "CHỈ ĐƯỢC CHI TRẢ CHO ĐẠI LÝ BẢO HIỂM",
      "Chi trả cho Người thụ hưởng của hợp đồng bảo hiểm",
      "Chia đều cho đại lý và bên mua bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Luật quy định rõ: Hoa hồng đại lý CHỈ được trả cho đại lý bảo hiểm, nghiêm cấm dùng hoa hồng để khuyến mại, chiết khấu trái phép cho bên mua bảo hiểm."
  },
  {
    "id": "q-dl-12",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Cách tính hoa hồng",
    "question": "Hoa hồng đại lý bảo hiểm được tính dựa trên cơ sở nào sau đây?",
    "options": [
      "Số tiền bảo hiểm (STBH) ghi trong hợp đồng",
      "Phí bảo hiểm THỰC TẾ THU ĐƯỢC của từng hợp đồng bảo hiểm",
      "Tổng doanh thu của toàn công ty bảo hiểm trong quý",
      "Lợi nhuận ròng của doanh nghiệp bảo hiểm sau thuế"
    ],
    "correctIndex": 1,
    "explanation": "Theo Thông tư 67/2023/TT-BTC: Hoa hồng đại lý được tính trên PHÍ BẢO HIỂM THỰC TẾ THU ĐƯỢC của từng hợp đồng bảo hiểm."
  },
  {
    "id": "q-dl-13",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng bắt buộc",
    "question": "Tỷ lệ hoa hồng đại lý tối đa đối với bảo hiểm bắt buộc TNDS của chủ xe MÔ TÔ, XE MÁY là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 3,
    "explanation": "TNDS bắt buộc xe mô tô, xe máy có tỷ lệ hoa hồng tối đa là 20% (cao nhất trong nhóm bảo hiểm bắt buộc)."
  },
  {
    "id": "q-dl-14",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng bắt buộc",
    "question": "Tỷ lệ hoa hồng đại lý tối đa đối với bảo hiểm bắt buộc TNDS của chủ xe Ô TÔ là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "BẪY THI CỰC LỚN: TNDS xe máy là 20%, nhưng TNDS bắt buộc xe Ô TÔ chỉ có 5%."
  },
  {
    "id": "q-dl-15",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng bắt buộc",
    "question": "Tỷ lệ hoa hồng tối đa của nghiệp vụ bảo hiểm Cháy, nổ BẮT BUỘC là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "Cháy nổ BẮT BUỘC tối đa 5%. (Lưu ý: Cháy nổ TỰ NGUYỆN là 10%)."
  },
  {
    "id": "q-dl-16",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng tự nguyện",
    "question": "Tỷ lệ hoa hồng tối đa của nghiệp vụ bảo hiểm Cháy, nổ TỰ NGUYỆN là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 1,
    "explanation": "Cháy nổ TỰ NGUYỆN là 10%, trong khi cháy nổ BẮT BUỘC chỉ là 5%."
  },
  {
    "id": "q-dl-17",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng phi nhân thọ",
    "question": "Nghiệp vụ bảo hiểm phi nhân thọ nào sau đây có tỷ lệ hoa hồng đại lý tối đa THẤP NHẤT toàn hệ thống?",
    "options": [
      "Bảo hiểm tài sản (5%)",
      "Bảo hiểm trách nhiệm (5%)",
      "Bảo hiểm hàng không (0,5%)",
      "Bảo hiểm hàng hóa (10%)"
    ],
    "correctIndex": 2,
    "explanation": "Bảo hiểm hàng không có tỷ lệ hoa hồng tối đa thấp nhất thị trường: chỉ 0,5%."
  },
  {
    "id": "q-dl-18",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng phi nhân thọ",
    "question": "Nghiệp vụ bảo hiểm phi nhân thọ nào có tỷ lệ hoa hồng đại lý tối đa CAO NHẤT (lên tới 20%)?",
    "options": [
      "Bảo hiểm tài sản",
      "Bảo hiểm nông nghiệp",
      "Bảo hiểm hàng hóa vận chuyển",
      "Bảo hiểm bảo lãnh"
    ],
    "correctIndex": 1,
    "explanation": "Bảo hiểm nông nghiệp có tỷ lệ hoa hồng tối đa cao nhất trong nhóm phi nhân thọ: 20%."
  },
  {
    "id": "q-dl-19",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng hàng hải",
    "question": "Tỷ lệ hoa hồng tối đa cho bảo hiểm thân tàu và TNDS chủ tàu đối với TÀU BIỂN là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "Tàu biển lớn: hoa hồng tối đa 5%. Ngược lại, tàu KHÔNG phải tàu biển (tàu sông, tàu cá nội địa) là 15%."
  },
  {
    "id": "q-dl-20",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng hàng hải",
    "question": "Tỷ lệ hoa hồng tối đa cho bảo hiểm thân tàu và TNDS chủ tàu đối với tàu KHÔNG PHẢI TÀU BIỂN (tàu sông, tàu cá) là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 2,
    "explanation": "Tàu không phải tàu biển (tàu sông, sà lan, tàu cá nội địa) có mức hoa hồng tối đa là 15%."
  },
  {
    "id": "q-dl-21",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng sức khỏe",
    "question": "Tỷ lệ hoa hồng đại lý tối đa đối với sản phẩm bảo hiểm SỨC KHỎE theo Thông tư 67 là bao nhiêu?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "correctIndex": 2,
    "explanation": "Bảo hiểm SỨC KHỎE có tỷ lệ hoa hồng đại lý tối đa là 20% (áp dụng chung toàn diện cho loại hình sức khỏe)."
  },
  {
    "id": "q-dl-22",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Trần thưởng hỗ trợ",
    "question": "Tổng mức chi thưởng, hỗ trợ đại lý và quyền lợi khác đối với bảo hiểm PHI NHÂN THỌ trong năm tài chính không được vượt quá bao nhiêu % tổng hoa hồng đại lý?",
    "options": [
      "30%",
      "50%",
      "70%",
      "100%"
    ],
    "correctIndex": 1,
    "explanation": "Quy định trần thưởng hỗ trợ: Bảo hiểm PHI NHÂN THỌ tối đa không vượt quá 50% tổng hoa hồng đại lý phát sinh trong năm."
  },
  {
    "id": "q-dl-23",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Trần thưởng hỗ trợ",
    "question": "Tổng mức chi thưởng, hỗ trợ đại lý và quyền lợi khác đối với bảo hiểm SỨC KHỎE trong năm tài chính không được vượt quá bao nhiêu % tổng hoa hồng đại lý sức khỏe?",
    "options": [
      "50%",
      "75%",
      "100%",
      "150%"
    ],
    "correctIndex": 2,
    "explanation": "Đối với bảo hiểm SỨC KHỎE: Tổng các khoản thưởng, hỗ trợ đại lý không được vượt quá 100% tổng hoa hồng đại lý sức khỏe."
  },
  {
    "id": "q-dl-24",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Trách nhiệm đại lý",
    "question": "Trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý gây thiệt hại đến quyền lợi hợp pháp của khách hàng, trách nhiệm thuộc về ai?",
    "options": [
      "Khách hàng phải tự chịu mọi rủi ro vì đã ký hợp đồng với đại lý",
      "Doanh nghiệp bảo hiểm VẪN PHẢI chịu trách nhiệm thực hiện các nghĩa vụ theo hợp đồng bảo hiểm do đại lý thu xếp giao kết",
      "Cục Quản lý giám sát bảo hiểm sẽ đứng ra bồi thường thay",
      "Hợp đồng bảo hiểm đương nhiên bị vô hiệu và không ai phải chịu trách nhiệm"
    ],
    "correctIndex": 1,
    "explanation": "Điều 128 Luật KDBH: DNBH vẫn phải chịu trách nhiệm thực hiện nghĩa vụ theo hợp đồng bảo hiểm do đại lý thu xếp giao kết đối với khách hàng; sau đó DNBH có quyền yêu cầu đại lý bồi hoàn lại."
  },
  {
    "id": "q-dl-25",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hợp đồng trọn gói",
    "question": "Đối với một Hợp đồng bảo hiểm TRỌN GÓI bao gồm nhiều nghiệp vụ bảo hiểm khác nhau, hoa hồng đại lý được tính như thế nào?",
    "options": [
      "Lấy theo tỷ lệ hoa hồng của nghiệp vụ có mức hoa hồng cao nhất",
      "Lấy theo tỷ lệ trung bình cộng của các nghiệp vụ",
      "Bằng TỔNG hoa hồng đại lý của từng nghiệp vụ bảo hiểm cấu thành trong gói",
      "Cố định ở mức 5% cho toàn bộ hợp đồng trọn gói"
    ],
    "correctIndex": 2,
    "explanation": "Thông tư 67 quy định: Đối với hợp đồng trọn gói, hoa hồng bằng TỔNG hoa hồng của từng nghiệp vụ bảo hiểm tương ứng trong gói đó."
  },
  {
    "id": "q-dl-26",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Giảm phí trực tiếp",
    "question": "Trường hợp Doanh nghiệp bảo hiểm bán hàng trực tiếp cho khách hàng (không qua đại lý bảo hiểm), mức giảm phí tối đa cho khách hàng không được vượt quá mức nào?",
    "options": [
      "Không được giảm phí trong bất kỳ trường hợp nào",
      "Mức giảm phí tối đa KHÔNG VƯỢT QUÁ tỷ lệ hoa hồng đại lý của sản phẩm bảo hiểm đó",
      "Được giảm tối đa 50% giá trị hợp đồng",
      "Do Giám đốc chi nhánh tự quyết định không giới hạn"
    ],
    "correctIndex": 1,
    "explanation": "Quy định chống phá giá: Bán hàng trực tiếp không qua đại lý thì mức giảm phí tối đa không được vượt quá tỷ lệ hoa hồng của sản phẩm đó."
  },
  {
    "id": "q-dl-27",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Nội dung hợp đồng",
    "question": "Điều 126 Luật KDBH quy định hợp đồng đại lý bảo hiểm phải có bao nhiêu nội dung chính bắt buộc?",
    "options": [
      "5 nội dung",
      "7 nội dung",
      "9 nội dung",
      "12 nội dung"
    ],
    "correctIndex": 1,
    "explanation": "Hợp đồng đại lý bảo hiểm gồm 7 nội dung bắt buộc: Tên/địa chỉ ĐL; Tên/địa chỉ DNBH; Phạm vi hoạt động; Quyền và nghĩa vụ; Hoa hồng thưởng; Thời hạn; Phương thức giải quyết tranh chấp."
  },
  {
    "id": "q-dl-28",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Hoa hồng bắt buộc",
    "question": "Tỷ lệ hoa hồng tối đa cho bảo hiểm bắt buộc người lao động thi công trên công trường là bao nhiêu?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "Bảo hiểm bắt buộc đối với người lao động thi công trên công trường xây dựng có tỷ lệ hoa hồng tối đa là 5%."
  },
  {
    "id": "q-nt-1",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "5 nguyên tắc Điều 16",
    "question": "Điều 16 Luật Kinh doanh bảo hiểm số 08/2022/QH15 quy định có bao nhiêu nguyên tắc giao kết và thực hiện hợp đồng bảo hiểm?",
    "options": [
      "3 nguyên tắc",
      "4 nguyên tắc",
      "5 nguyên tắc",
      "7 nguyên tắc"
    ],
    "correctIndex": 2,
    "explanation": "Điều 16 quy định 5 nguyên tắc: (1) Trung thực tuyệt đối; (2) Quyền lợi có thể được bảo hiểm; (3) Bồi thường; (4) Thế quyền; (5) Rủi ro ngẫu nhiên."
  },
  {
    "id": "q-nt-2",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Trung thực tuyệt đối",
    "question": "Nguyên tắc \"Trung thực tuyệt đối\" (Utmost Good Faith) trong kinh doanh bảo hiểm đòi hỏi nghĩa vụ từ phía những chủ thể nào?",
    "options": [
      "Chỉ áp dụng bắt buộc đối với Bên mua bảo hiểm",
      "Chỉ áp dụng bắt buộc đối với Doanh nghiệp bảo hiểm",
      "Áp dụng đối với CẢ HAI BÊN: Bên mua bảo hiểm và Doanh nghiệp bảo hiểm",
      "Chỉ áp dụng đối với Đại lý bảo hiểm trung gian"
    ],
    "correctIndex": 2,
    "explanation": "Trung thực tuyệt đối là nghĩa vụ hai chiều: Bên mua phải kê khai trung thực mọi thông tin rủi ro, tiền sử bệnh; DNBH phải giải thích rõ quy tắc, điều khoản loại trừ và bảo mật thông tin khách hàng."
  },
  {
    "id": "q-nt-3",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Trung thực tuyệt đối",
    "question": "Trường hợp Bên mua bảo hiểm cố ý cung cấp thông tin sai sự thật nhằm giao kết HĐBH để được bồi thường, DNBH có quyền xử lý như thế nào?",
    "options": [
      "Vẫn phải bồi thường nhưng được phạt tiền 10 triệu đồng",
      "Có quyền đơn phương chấm dứt thực hiện HĐBH, không bồi thường và không hoàn lại phí bảo hiểm",
      "Chỉ được quyền tăng phí bảo hiểm trong năm tiếp theo",
      "Bắt buộc phải khởi kiện ra tòa án hình sự trước khi từ chối bồi thường"
    ],
    "correctIndex": 1,
    "explanation": "Theo Luật KDBH, bên mua cố ý gian dối nhằm trục lợi thì DNBH có quyền đơn phương hủy hợp đồng, không phải chi trả tiền bồi thường và không phải hoàn phí cho thời gian đã qua."
  },
  {
    "id": "q-nt-4",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi được bảo hiểm",
    "question": "Trong BẢO HIỂM TÀI SẢN, nguyên tắc \"Quyền lợi có thể được bảo hiểm\" bắt buộc phải tồn tại vào thời điểm nào?",
    "options": [
      "Bắt buộc chỉ cần có tại thời điểm giao kết hợp đồng",
      "Bắt buộc phải tồn tại tại thời điểm XẢY RA TỔN THẤT",
      "Chỉ cần tồn tại tại thời điểm DNBH thành lập",
      "Không bắt buộc phải tồn tại trong suốt thời hạn hợp đồng"
    ],
    "correctIndex": 1,
    "explanation": "BẪY THI CỰC LỚN: Bảo hiểm TÀI SẢN đòi hỏi quyền lợi có thể được bảo hiểm phải tồn tại tại thời điểm XẢY RA TỔN THẤT (nếu đã bán tài sản thì lúc cháy xe không còn quyền lợi để nhận đền bù)."
  },
  {
    "id": "q-nt-5",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi được bảo hiểm",
    "question": "Trong BẢO HIỂM NHÂN THỌ VÀ BẢO HIỂM SỨC KHỎE, \"Quyền lợi có thể được bảo hiểm\" bắt buộc phải tồn tại vào thời điểm nào?",
    "options": [
      "Phải tồn tại liên tục trong suốt 100 năm",
      "Bắt buộc phải tồn tại tại THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG BẢO HIỂM",
      "Chỉ cần tồn tại tại thời điểm thanh toán quyền lợi đáo hạn",
      "Bắt buộc phải có tại thời điểm người được bảo hiểm qua đời"
    ],
    "correctIndex": 1,
    "explanation": "BẪY THI ĐỐI CHIẾU: Bảo hiểm NHÂN THỌ / SỨC KHỎE quyền lợi có thể được bảo hiểm chỉ cần tồn tại tại THỜI ĐIỂM GIAO KẾT HỢP ĐỒNG. Vợ chồng mua cho nhau, sau này ly hôn hợp đồng vẫn có hiệu lực pháp lý."
  },
  {
    "id": "q-nt-6",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi được bảo hiểm",
    "question": "Theo Điều 34 Luật KDBH, Bên mua bảo hiểm có quyền lợi có thể được bảo hiểm đối với những người nào sau đây?",
    "options": [
      "Bất kỳ người hàng xóm hoặc đồng nghiệp nào cùng cơ quan",
      "Bản thân; vợ/chồng, cha mẹ, con; anh chị em ruột; người có quan hệ nuôi dưỡng, cấp dưỡng; người có quyền lợi tài chính/nghĩa vụ với bên mua",
      "Chỉ duy nhất bản thân bên mua bảo hiểm",
      "Người trúng thưởng xổ số cùng đợt"
    ],
    "correctIndex": 1,
    "explanation": "Điều 34 Luật KDBH quy định rõ: Bản thân; vợ/chồng, cha/mẹ, con; anh chị em ruột; người có quan hệ nuôi dưỡng cấp dưỡng; hoặc người có quyền lợi về tài chính hoặc nghĩa vụ đối với bên mua."
  },
  {
    "id": "q-nt-7",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc bồi thường",
    "question": "Mục đích cốt lõi của nguyên tắc \"Bồi thường\" (Indemnity) trong bảo hiểm là gì?",
    "options": [
      "Giúp người được bảo hiểm kiếm thêm một khoản lợi nhuận lớn sau khi gặp rủi ro",
      "Đền bù thiệt hại tài chính để khôi phục lại tình trạng tài chính của NĐBH NHƯ NGAY TRƯỚC KHI xảy ra tổn thất",
      "Trừng phạt bên thứ ba gây ra tai nạn giao thông",
      "Tài trợ vốn không hoàn lại cho doanh nghiệp bên mua"
    ],
    "correctIndex": 1,
    "explanation": "Nguyên tắc bồi thường: Đền bù thiệt hại để đưa NĐBH trở về trạng thái tài chính như ngay trước lúc tổn thất. KHÔNG ĐƯỢC LÀM GIÀU hay kiếm lời từ tổn thất bảo hiểm."
  },
  {
    "id": "q-nt-8",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc bồi thường",
    "question": "Theo nguyên tắc Bồi thường trong bảo hiểm tài sản, số tiền bồi thường mà người được bảo hiểm nhận được có đặc điểm gì?",
    "options": [
      "Luôn luôn gấp đôi giá trị tài sản đã tham gia",
      "KHÔNG ĐƯỢC VƯỢT QUÁ giá trị thiệt hại thực tế trong sự kiện bảo hiểm",
      "Bằng đúng số tiền ghi trong bảng báo giá thị trường chợ đen",
      "Tùy ý người được bảo hiểm tự ấn định theo cảm xúc"
    ],
    "correctIndex": 1,
    "explanation": "Luật KDBH khẳng định: Số tiền bồi thường không được vượt quá thiệt hại thực tế trong sự kiện bảo hiểm (trừ khi có thỏa thuận khác trước)."
  },
  {
    "id": "q-nt-9",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc bồi thường",
    "question": "Nguyên tắc Bồi thường (Indemnity) KHÔNG ÁP DỤNG cho loại hình bảo hiểm nào sau đây?",
    "options": [
      "Bảo hiểm cháy nổ nhà xưởng và kho bãi",
      "Bảo hiểm vật chất xe ô tô",
      "Bảo hiểm NHÂN THỌ và quyền lợi KHOÁN trong bảo hiểm con người",
      "Bảo hiểm hàng hóa vận chuyển đường biển"
    ],
    "correctIndex": 2,
    "explanation": "Bảo hiểm nhân thọ và quyền lợi khoán trong bảo hiểm con người áp dụng NGUYÊN TẮC KHOÁN (vì tính mạng con người là vô giá, không đo bằng tiền nên không áp dụng nguyên tắc bồi thường)."
  },
  {
    "id": "q-nt-10",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc thế quyền",
    "question": "Nguyên tắc \"Thế quyền\" (Subrogation) trong kinh doanh bảo hiểm được hiểu là gì?",
    "options": [
      "Bên mua bảo hiểm chuyển nhượng toàn bộ tài sản cho ngân hàng bảo lãnh",
      "Người được bảo hiểm chuyển giao cho DNBH quyền yêu cầu người thứ ba gây thiệt hại bồi hoàn trong phạm vi số tiền đã bồi thường",
      "Doanh nghiệp bảo hiểm chuyển giao quyền cấp phép kinh doanh cho Bộ Công an",
      "Đại lý bảo hiểm thay mặt khách hàng đi đóng phí bảo hiểm hàng tháng"
    ],
    "correctIndex": 1,
    "explanation": "Thế quyền: Sau khi DNBH chi trả bồi thường cho NĐBH, DNBH được quyền thay mặt NĐBH đòi lại khoản tiền đó từ người thứ ba có lỗi gây ra tai nạn/tổn thất."
  },
  {
    "id": "q-nt-11",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc thế quyền",
    "question": "Nguyên tắc Thế quyền (Subrogation) TUYỆT ĐỐI KHÔNG ÁP DỤNG đối với trường hợp nào sau đây?",
    "options": [
      "Bảo hiểm mọi rủi ro xây dựng (CAR)",
      "Bảo hiểm thân tàu thủy và TNDS chủ tàu",
      "Hợp đồng bảo hiểm NHÂN THỌ và quyền lợi KHOÁN trong bảo hiểm sức khỏe",
      "Bảo hiểm vật chất xe ô tô"
    ],
    "correctIndex": 2,
    "explanation": "BẪY THI KINH ĐIỂN: Khoản 4 Điều 16 Luật KDBH: Thế quyền KHÔNG ÁP DỤNG đối với hợp đồng bảo hiểm nhân thọ và quyền lợi khoán trong bảo hiểm sức khỏe."
  },
  {
    "id": "q-nt-12",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc thế quyền",
    "question": "Trong bảo hiểm tài sản, nếu người thứ ba gây thiệt hại và người được bảo hiểm TỰ Ý TỪ BỎ quyền yêu cầu người thứ ba bồi thường mà không có sự đồng ý của DNBH thì sao?",
    "options": [
      "DNBH vẫn phải bồi thường 100% đầy đủ cho NĐBH",
      "DNBH có quyền GIẢM TRỪ số tiền bồi thường tương ứng với phần thiệt hại mà DNBH đáng lẽ được bồi hoàn từ người thứ ba",
      "Hợp đồng bảo hiểm đương nhiên được gia hạn thêm 5 năm",
      "Người thứ ba phải nộp phạt 50% cho ngân sách"
    ],
    "correctIndex": 1,
    "explanation": "Điều 38 Luật KDBH: NĐBH tự ý từ bỏ quyền đòi người thứ 3 thì DNBH có quyền giảm trừ số tiền bồi thường tương ứng với phần mà đáng lẽ DNBH đòi được từ bên gây hại."
  },
  {
    "id": "q-nt-13",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc khoán",
    "question": "Nguyên tắc \"Khoán\" (Fixed Benefit) trong bảo hiểm con người có đặc điểm then chốt nào sau đây?",
    "options": [
      "Chi trả theo chi phí hóa đơn thực tế sửa chữa tại gara",
      "Chi trả số tiền bảo hiểm cố định theo đúng mức đã thỏa thuận trước trong hợp đồng khi xảy ra sự kiện tử vong, thương tật",
      "Chỉ được chi trả một lần duy nhất trong toàn bộ đời người",
      "Chỉ chi trả khi người được bảo hiểm trên 80 tuổi"
    ],
    "correctIndex": 1,
    "explanation": "Nguyên tắc khoán: Khi xảy ra sự kiện bảo hiểm (tử vong, thương tật, nằm viện), DNBH chi trả đúng số tiền khoán đã cam kết trong HĐBH mà không phụ thuộc vào chi phí thực tế."
  },
  {
    "id": "q-nt-14",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc khoán",
    "question": "Một người mua 3 hợp đồng bảo hiểm nhân thọ tại 3 công ty khác nhau (STBH tử vong lần lượt là 1 tỷ, 2 tỷ và 3 tỷ). Khi người đó qua đời do rủi ro được bảo hiểm, tổng quyền lợi nhận được là bao nhiêu?",
    "options": [
      "Chỉ nhận được từ công ty có STBH cao nhất là 3 tỷ đồng",
      "Nhận trung bình cộng: (1 + 2 + 3) / 3 = 2 tỷ đồng",
      "Nhận ĐẦY ĐỦ từ CẢ 3 CÔNG TY: 1 + 2 + 3 = 6 tỷ đồng",
      "Chỉ nhận được 1 tỷ đồng vì chống bảo hiểm trùng"
    ],
    "correctIndex": 2,
    "explanation": "Áp dụng NGUYÊN TẮC KHOÁN: Bảo hiểm con người không có trần bồi thường thiệt hại và KHÔNG coi là bảo hiểm trùng. Người thụ hưởng được nhận tiền bồi thường từ TẤT CẢ các hợp đồng (tổng 6 tỷ)."
  },
  {
    "id": "q-nt-15",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Đóng góp bồi thường",
    "question": "Nguyên tắc \"Đóng góp bồi thường\" (Contribution) được áp dụng trong tình huống nào sau đây?",
    "options": [
      "Bảo hiểm trùng hoặc đồng bảo hiểm đối với tài sản (khi một tài sản được bảo hiểm tại nhiều DNBH)",
      "Bảo hiểm nhân thọ trọn đời",
      "Khi đại lý bảo hiểm tự nguyện đóng góp từ thiện",
      "Khi khách hàng nộp chậm phí bảo hiểm định kỳ"
    ],
    "correctIndex": 0,
    "explanation": "Nguyên tắc đóng góp bồi thường áp dụng khi Bảo hiểm trùng hoặc đồng bảo hiểm: các DNBH cùng chia sẻ gánh nặng bồi thường theo tỷ lệ STBH đã nhận."
  },
  {
    "id": "q-nt-16",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Đóng góp bồi thường",
    "question": "Một ngôi nhà trị giá 2 tỷ đồng được chủ nhà mua bảo hiểm cháy nổ tại Công ty A với STBH 2 tỷ và Công ty B với STBH 2 tỷ. Khi hỏa hoạn xảy ra gây thiệt hại thực tế là 1 tỷ đồng, các công ty bồi thường như thế nào?",
    "options": [
      "Công ty A bồi thường 1 tỷ và Công ty B bồi thường 1 tỷ (tổng nhận 2 tỷ)",
      "Mỗi công ty bồi thường 500 triệu đồng (tổng số tiền nhận được đúng bằng thiệt hại thực tế 1 tỷ)",
      "Chỉ có Công ty A bồi thường, Công ty B được miễn hoàn toàn",
      "Cả hai công ty từ chối bồi thường vì chủ nhà mua bảo hiểm trùng"
    ],
    "correctIndex": 1,
    "explanation": "Theo nguyên tắc bồi thường và đóng góp bồi thường: Tổng bồi thường KHÔNG VƯỢT THIỆT HẠI THỰC TẾ (1 tỷ). Do STBH của A và B bằng nhau (tỷ lệ 50/50), mỗi bên bồi thường 500 triệu đồng."
  },
  {
    "id": "q-nt-17",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên nhân gần",
    "question": "Trong giám định và giải quyết bồi thường, \"Nguyên nhân gần\" (Proximate Cause) được định nghĩa là gì?",
    "options": [
      "Nguyên nhân ở vị trí địa lý gần nhất với trụ sở công ty bảo hiểm",
      "Nguyên nhân chủ yếu, trực tiếp và đủ mạnh khởi động cả chuỗi mắt xích sự kiện dẫn đến kết quả tổn thất mà không bị ngắt quãng",
      "Nguyên nhân xảy ra sau cùng ngay trước khi công an đến hiện trường",
      "Nguyên nhân do người đi đường chứng kiến đầu tiên"
    ],
    "correctIndex": 1,
    "explanation": "Nguyên nhân gần (Proximate Cause) là nguyên nhân chủ yếu, liên tục và chi phối, khởi phát chuỗi sự kiện dẫn đến tổn thất. DNBH chỉ bồi thường khi nguyên nhân gần thuộc phạm vi bảo hiểm."
  },
  {
    "id": "q-nt-18",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Số đông bù số ít",
    "question": "Nguyên tắc \"Số đông bù số ít\" (Law of large numbers) trong hoạt động kinh doanh bảo hiểm dựa trên nền tảng nào?",
    "options": [
      "Dựa vào quy luật số lớn trong toán xác suất thống kê để tính phí và phân tán rủi ro",
      "Dựa trên cảm tính của Ban Giám đốc công ty",
      "Dựa vào sự quyên góp từ thiện của người dân",
      "Dựa vào vốn vay ưu đãi từ ngân hàng thương mại"
    ],
    "correctIndex": 0,
    "explanation": "Số đông bù số ít vận dụng quy luật số lớn trong xác suất thống kê: Gom sự đóng góp phí của số đông người có nguy cơ gặp rủi ro để lập quỹ bù đắp tổn thất cho số ít người không may gặp nạn."
  },
  {
    "id": "q-nt-19",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Rủi ro ngẫu nhiên",
    "question": "Theo nguyên tắc \"Rủi ro ngẫu nhiên\", một rủi ro được Doanh nghiệp bảo hiểm chấp nhận bảo hiểm khi nào?",
    "options": [
      "Rủi ro do bên mua cố ý sắp đặt trước để kiếm tiền",
      "Rủi ro phải mang tính chất bất ngờ, không lường trước được, xảy ra ngoài ý muốn của các bên",
      "Rủi ro chắc chắn 100% sẽ xảy ra vào ngày mai",
      "Rủi ro do hành vi phạm tội của người thụ hưởng gây ra"
    ],
    "correctIndex": 1,
    "explanation": "Điều 16 LKDBH: Rủi ro được bảo hiểm phải là những rủi ro bất ngờ, không lường trước được và xảy ra ngoài ý chí chủ quan của con người."
  },
  {
    "id": "q-nt-20",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Bồi hoàn y tế",
    "question": "Quyền lợi chi phí y tế (tiền phòng viện phí, phẫu thuật thực tế) trong Hợp đồng bảo hiểm sức khỏe được chi trả theo nguyên tắc nào?",
    "options": [
      "Nguyên tắc khoán gấp 10 lần số tiền viện phí",
      "Nguyên tắc bồi hoàn căn cứ chi phí y tế thực tế thuộc phạm vi, tổng chi trả không vượt quá thiệt hại thực tế",
      "Chi trả vô điều kiện theo yêu cầu của bệnh nhân",
      "Không được chi trả trong bất kỳ trường hợp nào"
    ],
    "correctIndex": 1,
    "explanation": "Lưu ý phân biệt: Trong BH sức khỏe, quyền lợi tử vong/thương tật áp dụng NGUYÊN TẮC KHOÁN; còn quyền lợi chi phí y tế áp dụng NGUYÊN TẮC BỒI HOÀN theo chi phí thực tế thuộc phạm vi."
  },
  {
    "id": "q-nt-21",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi được bảo hiểm",
    "question": "Vợ chồng mua bảo hiểm nhân thọ cho nhau khi đang kết hôn, sau đó 5 năm họ ly hôn. Hợp đồng bảo hiểm nhân thọ đó sẽ như thế nào?",
    "options": [
      "Hợp đồng đương nhiên bị vô hiệu ngay lập tức tại ngày tòa án ra quyết định ly hôn",
      "Hợp đồng VẪN CÓ HIỆU LỰC PHÁP LUẬT vì quyền lợi có thể được bảo hiểm chỉ cần tồn tại tại thời điểm giao kết hợp đồng",
      "Công ty bảo hiểm bắt buộc phải tịch thu toàn bộ giá trị hoàn lại",
      "Đại lý bảo hiểm phải bồi thường tiền cho hai vợ chồng"
    ],
    "correctIndex": 1,
    "explanation": "BẪY THI THỰC TẾ: Trong BH nhân thọ, quyền lợi có thể được bảo hiểm chỉ cần tồn tại TẠI THỜI ĐIỂM KÝ HỢP ĐỒNG. Sau đó nếu quan hệ hôn nhân chấm dứt thì HĐBH vẫn tiếp tục có hiệu lực pháp luật bình thường."
  },
  {
    "id": "q-nt-22",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi được bảo hiểm",
    "question": "Ông A bán xe ô tô cho ông B (đã nhận đủ tiền và giao xe). Hôm sau xe bị cháy rụi khi ông A chưa làm thủ tục chuyển quyền lợi bảo hiểm vật chất xe. Ai được nhận tiền bồi thường vật chất xe?",
    "options": [
      "Ông A vẫn được nhận vì hợp đồng bảo hiểm vẫn đứng tên ông A",
      "KHÔNG AI ĐƯỢC NHẬN BỒI THƯỜNG (Ông A không còn quyền lợi tài sản lúc cháy; còn ông B chưa được chuyển giao hợp đồng bảo hiểm)",
      "Công ty bảo hiểm tự động bồi thường cho ông B",
      "Cơ quan công an sẽ đứng ra nhận tiền bồi thường thay"
    ],
    "correctIndex": 1,
    "explanation": "BẪY THI TÀI SẢN: Bảo hiểm tài sản đòi hỏi quyền lợi phải có TẠI THỜI ĐIỂM TỔN THẤT. Ông A đã bán xe nên không còn quyền lợi tài chính, còn ông B chưa hoàn tất chuyển giao quyền lợi HĐBH, do đó DNBH từ chối bồi thường cho ông A."
  },
  {
    "id": "q-nt-23",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Thế quyền",
    "question": "Nguyên tắc \"Thế quyền\" (Subrogation) quy định DNBH KHÔNG ĐƯỢC đòi bồi hoàn từ ai sau đây?",
    "options": [
      "Cha mẹ, vợ, chồng, con của Người được bảo hiểm, trừ trường hợp những người này cố ý gây ra thiệt hại",
      "Bất kỳ người nào gây tai nạn giao thông trên đường",
      "Chủ doanh nghiệp nơi Người được bảo hiểm làm việc",
      "Công ty bảo hiểm khác đã ký hợp đồng bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Khoản 3 Điều 54 Luật KDBH 2022: Doanh nghiệp bảo hiểm không được thực hiện quyền yêu cầu người thứ ba bồi hoàn nếu người thứ ba là cha, mẹ, vợ, chồng, con của người được bảo hiểm, trừ trường hợp người này cố ý gây ra thiệt hại."
  },
  {
    "id": "q-nt-24",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Thế quyền",
    "question": "Khi Người được bảo hiểm tự ý từ bỏ quyền yêu cầu người thứ ba bồi hoàn mà không có sự đồng ý của DNBH, DNBH có quyền xử lý như thế nào?",
    "options": [
      "DNBH có quyền giảm trừ số tiền bồi thường tương ứng với phần thiệt hại mà NĐBH đã từ bỏ quyền yêu cầu bồi hoàn",
      "DNBH vẫn phải bồi thường 100% không được trừ đồng nào",
      "DNBH phải khởi kiện NĐBH ra tòa án hình sự",
      "DNBH bị tước giấy phép hoạt động kinh doanh bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Khoản 2 Điều 54 Luật KDBH 2022: Trường hợp người được bảo hiểm từ bỏ quyền yêu cầu người thứ ba bồi hoàn thì doanh nghiệp bảo hiểm có quyền giảm trừ số tiền bồi thường tương ứng với phần thiệt hại mà người được bảo hiểm đã từ bỏ."
  },
  {
    "id": "q-nt-25",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Bảo hiểm trùng",
    "question": "Bảo hiểm trùng (Double Insurance) theo quy định của Luật Kinh doanh bảo hiểm số 08/2022/QH15 phát sinh trong trường hợp nào?",
    "options": [
      "Một tài sản được bảo hiểm tại từ 2 DNBH trở lên với cùng điều kiện và tổng số tiền bảo hiểm lớn hơn giá trị bảo hiểm của tài sản đó",
      "Một người mua bảo hiểm nhân thọ tại 2 công ty bảo hiểm nhân thọ khác nhau",
      "Một tài sản được bảo hiểm tại 1 DNBH nhưng tái bảo hiểm cho 5 công ty tái bảo hiểm",
      "Một hợp đồng bảo hiểm có thời hạn kéo dài trên 10 năm"
    ],
    "correctIndex": 0,
    "explanation": "Điều 49 Luật KDBH 2022: Hợp đồng bảo hiểm trùng là trường hợp bên mua bảo hiểm giao kết hợp đồng bảo hiểm với từ hai doanh nghiệp bảo hiểm trở lên để bảo hiểm cho cùng một đối tượng, cùng điều kiện và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá trị bảo hiểm của tài sản đó. Chỉ áp dụng cho bảo hiểm tài sản / thiệt hại."
  },
  {
    "id": "q-nt-26",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên nhân gần",
    "question": "Nguyên nhân gần (Proximate Cause) trong giám định tổn thất được xác định dựa trên nguyên tắc nào?",
    "options": [
      "Là nguyên nhân chủ yếu, trực tiếp và đủ mạnh khởi động chuỗi mắt xích sự kiện dẫn đến tổn thất mà không bị ngắt quãng bởi bất kỳ nguyên nhân độc lập mới nào",
      "Luôn luôn là nguyên nhân xảy ra cuối cùng ngay trước khi tổn thất diễn ra",
      "Luôn luôn là nguyên nhân đầu tiên xảy ra trong quá khứ dù không liên quan",
      "Do đại lý bảo hiểm tự suy đoán theo kinh nghiệm cá nhân"
    ],
    "correctIndex": 0,
    "explanation": "Nguyên nhân gần là nguyên nhân chủ yếu, quyết định và trực tiếp tạo ra tổn thất. Nếu nguyên nhân gần thuộc phạm vi bảo hiểm thì DNBH bồi thường; nếu thuộc điều khoản loại trừ thì DNBH từ chối."
  },
  {
    "id": "q-nt-27",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Bảo hiểm sức khỏe",
    "question": "Bảo hiểm chi phí y tế thực tế (tiền nằm viện, phẫu thuật theo hóa đơn bệnh viện) trong hợp đồng bảo hiểm sức khỏe áp dụng nguyên tắc nào?",
    "options": [
      "Nguyên tắc bồi hoàn căn cứ chi phí y tế thực tế hợp lý (không vượt quá chi phí thực tế và hạn mức hợp đồng)",
      "Nguyên tắc khoán chi trả vô điều kiện không cần hóa đơn",
      "Nguyên tắc đóng góp từ thiện của doanh nghiệp",
      "Nguyên tắc chia sẻ lợi nhuận đầu tư cổ phiếu"
    ],
    "correctIndex": 0,
    "explanation": "Quyền lợi chi phí y tế thực tế trong bảo hiểm sức khỏe áp dụng nguyên tắc bồi hoàn: DNBH thanh toán căn cứ theo hóa đơn viện phí thực tế, không vượt quá chi phí thực tế và hạn mức STBH của hợp đồng."
  },
  {
    "id": "q-nt-28",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc khoán",
    "question": "Tại sao nguyên tắc Bồi thường (Indemnity) và nguyên tắc Thế quyền (Subrogation) TUYỆT ĐỐI KHÔNG ÁP DỤNG đối với bảo hiểm nhân thọ?",
    "options": [
      "Vì tính mạng, thân thể, tuổi thọ con người là vô giá, không thể định giá bằng tiền và không ai có quyền sở hữu tính mạng người khác",
      "Vì bảo hiểm nhân thọ có phí đóng quá cao",
      "Vì Bộ Tài chính chưa ban hành biểu phí bồi thường nhân thọ",
      "Vì các công ty nhân thọ là doanh nghiệp có vốn đầu tư nước ngoài"
    ],
    "correctIndex": 0,
    "explanation": "Tính mạng, thân thể con người là vô giá, không có giá trị bảo hiểm để áp dụng nguyên tắc bồi thường hoặc thế quyền. Bảo hiểm nhân thọ áp dụng nguyên tắc KHOÁN: khi xảy ra sự kiện bảo hiểm thì trả đúng số tiền bảo hiểm đã thỏa thuận."
  },
  {
    "id": "q-nt-29",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Quyền lợi có thể bảo hiểm",
    "question": "Bên mua bảo hiểm có thể giao kết hợp đồng bảo hiểm nhân thọ cho ai sau đây mà KHÔNG CẦN có văn bản đồng ý của người đó?",
    "options": [
      "Bản thân Bên mua bảo hiểm; vợ, chồng, cha, mẹ, con của Bên mua bảo hiểm; anh ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng",
      "Bạn bè thân thiết học cùng lớp đại học",
      "Hàng xóm sống cạnh nhà Bên mua bảo hiểm",
      "Khách hàng vãng lai tình cờ gặp trên đường phố"
    ],
    "correctIndex": 0,
    "explanation": "Khoản 1 Điều 34 Luật KDBH 2022: Bên mua bảo hiểm có quyền lợi có thể được bảo hiểm đối với: Bản thân; vợ, chồng, cha, mẹ, con; anh chị em ruột hoặc người có quan hệ nuôi dưỡng, cấp dưỡng; người có quyền lợi tài chính/lao động."
  },
  {
    "id": "q-nt-30",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Nguyên tắc khoán",
    "question": "Một người mua 2 hợp đồng bảo hiểm tai nạn con người tại 2 DNBH khác nhau (mỗi hợp đồng có số tiền bảo hiểm tử vong do tai nạn là 500 triệu đồng). Khi không may tử vong do tai nạn thuộc phạm vi bảo hiểm, người thụ hưởng sẽ nhận được bao nhiêu tiền?",
    "options": [
      "Nhận đủ 1 tỷ đồng (500 triệu từ DNBH thứ nhất + 500 triệu từ DNBH thứ hai)",
      "Chỉ nhận được tối đa 500 triệu đồng do áp dụng nguyên tắc bồi thường",
      "Mỗi DNBH chỉ chi trả 250 triệu đồng vì bảo hiểm trùng",
      "Cả 2 DNBH từ chối chi trả vì khách hàng mua 2 hợp đồng vi phạm pháp luật"
    ],
    "correctIndex": 0,
    "explanation": "Bảo hiểm con người áp dụng NGUYÊN TẮC KHOÁN. Khách hàng có quyền mua nhiều hợp đồng tại nhiều DNBH khác nhau và được nhận ĐẦY ĐỦ số tiền bảo hiểm từ tất cả các hợp đồng khi xảy ra sự kiện bảo hiểm: 500 tr + 500 tr = 1 tỷ đồng."
  },
  {
    "id": "q-rk-1",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Khái niệm rủi ro",
    "question": "Trong hoạt động kinh doanh bảo hiểm, \"Rủi ro\" (Risk) được định nghĩa là gì?",
    "options": [
      "Khả năng xảy ra biến cố bất lợi, bất ngờ mang tính ngẫu nhiên, gây tổn thất hoặc thiệt hại tài chính",
      "Sự chắc chắn sẽ xảy ra tổn thất tài sản trong tương lai",
      "Hành vi cố ý tự hủy hoại tài sản của khách hàng",
      "Khoản lợi nhuận đầu tư cổ phiếu chắc chắn thu được hàng năm"
    ],
    "correctIndex": 0,
    "explanation": "Rủi ro trong bảo hiểm là sự bất trắc, bất ngờ, ngẫu nhiên ngoài ý muốn dẫn đến thiệt hại hoặc mất mát tài chính."
  },
  {
    "id": "q-rk-2",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Cơ chế phát sinh",
    "question": "Trật tự mắt xích phát sinh rủi ro trong lý thuyết bảo hiểm diễn ra theo chuỗi nào sau đây?",
    "options": [
      "Nguy cơ (Hazard) -> Hiểm họa (Peril) -> Tổn thất (Loss)",
      "Tổn thất (Loss) -> Nguy cơ (Hazard) -> Hiểm họa (Peril)",
      "Hiểm họa (Peril) -> Nguy cơ (Hazard) -> Tổn thất (Loss)",
      "Tổn thất (Loss) -> Hiểm họa (Peril) -> Nguy cơ (Hazard)"
    ],
    "correctIndex": 0,
    "explanation": "Trật tự phát sinh chuẩn: Nguy cơ (Hazard - điều kiện thuận lợi làm tăng khả năng xảy ra) -> Hiểm họa (Peril - nguyên nhân trực tiếp) -> Tổn thất (Loss - hậu quả thiệt hại thực tế)."
  },
  {
    "id": "q-rk-3",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Nguy cơ (Hazard)",
    "question": "Tình trạng nhà làm bằng gỗ, kho xưởng chứa nhiều hóa chất dễ cháy thuộc loại nguy cơ (Hazard) nào sau đây?",
    "options": [
      "Nguy cơ vật chất (Physical Hazard)",
      "Nguy cơ đạo đức (Moral Hazard)",
      "Nguy cơ tinh thần (Morale Hazard)",
      "Nguy cơ chính trị"
    ],
    "correctIndex": 0,
    "explanation": "Nguy cơ vật chất (Physical Hazard) là những đặc tính vật lý, cơ học, cấu tạo hoặc môi trường của đối tượng làm tăng khả năng xảy ra tổn thất."
  },
  {
    "id": "q-rk-4",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Nguy cơ (Hazard)",
    "question": "Hành vi cố tình phóng hỏa đốt nhà xưởng hoặc che giấu bệnh hiểm nghèo khi mua bảo hiểm nhân thọ thuộc loại nguy cơ nào?",
    "options": [
      "Nguy cơ đạo đức (Moral Hazard)",
      "Nguy cơ vật chất (Physical Hazard)",
      "Nguy cơ kỹ thuật",
      "Nguy cơ bất khả kháng"
    ],
    "correctIndex": 0,
    "explanation": "Nguy cơ đạo đức (Moral Hazard) bắt nguồn từ sự không trung thực, ý đồ gian lận, trục lợi bất chính của con người nhằm chiếm đoạt tiền bảo hiểm."
  },
  {
    "id": "q-rk-5",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Nguy cơ (Hazard)",
    "question": "Thái độ thờ ơ, lơ là, bất cẩn trong việc bảo quản xe máy do ỷ lại rằng mình đã mua bảo hiểm mất cắp thuộc loại nguy cơ nào?",
    "options": [
      "Nguy cơ tinh thần / thái độ (Morale Hazard)",
      "Nguy cơ đạo đức (Moral Hazard)",
      "Nguy cơ vật chất (Physical Hazard)",
      "Nguy cơ tài chính"
    ],
    "correctIndex": 0,
    "explanation": "Nguy cơ tinh thần (Morale Hazard) là thái độ bất cẩn, chủ quan, vô trách nhiệm của người tham gia bảo hiểm do có tâm lý \"đã có bảo hiểm lo\"."
  },
  {
    "id": "q-rk-6",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Phân loại rủi ro",
    "question": "Đặc điểm cốt lõi của \"Rủi ro thuần túy\" (Pure Risk) là gì?",
    "options": [
      "Chỉ có 2 khả năng xảy ra: Tổn thất HOẶC Không tổn thất (Hòa vốn), không bao giờ có khả năng sinh lãi",
      "Có khả năng sinh lời cao gấp nhiều lần vốn bỏ ra",
      "Chỉ xảy ra khi đầu tư chứng khoán hoặc mua bán bất động sản",
      "Luôn luôn mang lại lợi ích tài chính cho khách hàng"
    ],
    "correctIndex": 0,
    "explanation": "Rủi ro thuần túy (Pure risk) chỉ có nguy cơ thiệt hại hoặc hòa vốn. Đây là đối tượng DUY NHẤT mà các doanh nghiệp bảo hiểm chấp nhận bảo vệ."
  },
  {
    "id": "q-rk-7",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Phân loại rủi ro",
    "question": "Tại sao Doanh nghiệp bảo hiểm TUYỆT ĐỐI KHÔNG NHẬN BẢO HIỂM cho \"Rủi ro đầu cơ\" (Speculative Risk)?",
    "options": [
      "Vì rủi ro đầu cơ có cơ hội sinh lời và phụ thuộc vào quyết định đầu tư thương mại (chứng khoán, bất động sản, đánh bạc), không mang tính ngẫu nhiên thuần túy",
      "Vì các công ty bảo hiểm không có vốn đầu tư",
      "Vì pháp luật cấm người dân tham gia đầu tư tài chính",
      "Vì rủi ro đầu cơ không có hóa đơn chứng từ"
    ],
    "correctIndex": 0,
    "explanation": "Bảo hiểm bảo vệ con người trước các rủi ro thuần túy bất ngờ gây thiệt hại, không bảo hiểm cho rủi ro đầu cơ nhằm mục đích kiếm lời thương mại."
  },
  {
    "id": "q-rk-8",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Phân loại rủi ro",
    "question": "Thảm họa động đất, sóng thần, chiến tranh ảnh hưởng trên quy mô toàn xã hội được xếp vào nhóm rủi ro nào?",
    "options": [
      "Rủi ro cơ bản (Fundamental Risk)",
      "Rủi ro riêng biệt (Particular Risk)",
      "Rủi ro đầu cơ (Speculative Risk)",
      "Rủi ro cá nhân"
    ],
    "correctIndex": 0,
    "explanation": "Rủi ro cơ bản (Fundamental risk) tác động diện rộng lên cả cộng đồng, xã hội hoặc quốc gia, thường là điều khoản loại trừ trong hợp đồng bảo hiểm thương mại thông thường."
  },
  {
    "id": "q-rk-9",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Rủi ro được bảo hiểm",
    "question": "Điều kiện nào sau đây KHÔNG PHẢI là điều kiện để một rủi ro được DNBH chấp nhận bảo hiểm (Insurable Risk)?",
    "options": [
      "Rủi ro phải mang tính chất đầu cơ có tiềm năng mang lại lợi nhuận cao",
      "Rủi ro phải xảy ra một cách ngẫu nhiên, bất ngờ ngoài ý muốn",
      "Tổn thất phải đo lường và định lượng được bằng tiền",
      "Số lượng đối tượng chịu rủi ro tương tự phải đủ lớn để phân tán"
    ],
    "correctIndex": 0,
    "explanation": "Rủi ro được bảo hiểm PHẢI LÀ RỦI RO THUẦN TÚY. Rủi ro đầu cơ tuyệt đối không được bảo hiểm."
  },
  {
    "id": "q-rk-10",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Quản trị rủi ro",
    "question": "Quy trình quản trị rủi ro thông thường gồm có bao nhiêu biện pháp kiểm soát và tài trợ rủi ro cơ bản?",
    "options": [
      "5 biện pháp: Né tránh, Ngăn ngừa tổn thất, Giảm thiểu tổn thất, Tự gánh chịu (giữ lại), Chuyển giao rủi ro",
      "2 biện pháp: Đóng bảo hiểm hoặc gửi tiết kiệm",
      "3 biện pháp: Vay ngân hàng, bán nhà, đi xin cứu trợ",
      "7 biện pháp xử lý nợ xấu"
    ],
    "correctIndex": 0,
    "explanation": "5 biện pháp kinh điển: Né tránh rủi ro (Avoidance), Ngăn ngừa (Prevention), Giảm thiểu (Reduction), Giữ lại/Tự chịu (Retention), Chuyển giao (Transfer)."
  },
  {
    "id": "q-rk-11",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Quản trị rủi ro",
    "question": "Hành động một người quyết định không đi máy bay vì sợ tai nạn hàng không thể hiện biện pháp quản trị rủi ro nào?",
    "options": [
      "Né tránh rủi ro (Risk Avoidance)",
      "Ngăn ngừa tổn thất (Loss Prevention)",
      "Giảm thiểu tổn thất (Loss Reduction)",
      "Chuyển giao rủi ro (Risk Transfer)"
    ],
    "correctIndex": 0,
    "explanation": "Né tránh rủi ro là chủ động từ bỏ hoặc không tham gia vào hoạt động tiềm ẩn rủi ro để đưa xác suất tổn thất về bằng 0."
  },
  {
    "id": "q-rk-12",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Quản trị rủi ro",
    "question": "Biện pháp \"Ngăn ngừa tổn thất\" (Loss Prevention) tác động vào yếu tố nào của rủi ro?",
    "options": [
      "Tác động trước khi tổn thất xảy ra nhằm làm giảm TẦN SUẤT hoặc XÁC SUẤT xảy ra rủi ro",
      "Tác động sau khi đã có thiệt hại nhằm giảm độ lớn số tiền bồi thường",
      "Tác động vào việc tìm kiếm lợi nhuận đầu tư",
      "Tác động nhằm chuyển nợ sang cho bên thứ ba"
    ],
    "correctIndex": 0,
    "explanation": "Ngăn ngừa tổn thất là can thiệp trước để rủi ro không xảy ra (giảm tần suất/xác suất), ví dụ cấm lửa nơi chứa xăng, gắn biển cảnh báo khúc cua nguy hiểm."
  },
  {
    "id": "q-rk-13",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Quản trị rủi ro",
    "question": "Việc lắp đặt hệ thống vòi phun nước Sprinkler tự động dập lửa khi phát hiện khói trong tòa nhà thuộc biện pháp nào?",
    "options": [
      "Giảm thiểu tổn thất (Loss Reduction)",
      "Né tránh rủi ro (Risk Avoidance)",
      "Chuyển giao rủi ro (Risk Transfer)",
      "Đầu cơ rủi ro"
    ],
    "correctIndex": 0,
    "explanation": "Giảm thiểu tổn thất là can thiệp khi rủi ro đã phát sinh (cháy đã bùng lên) để hạn chế tối đa độ lớn thiệt hại lan rộng."
  },
  {
    "id": "q-rk-14",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Quản trị rủi ro",
    "question": "Việc tổ chức, cá nhân mua bảo hiểm thương mại thuộc biện pháp quản lý rủi ro nào?",
    "options": [
      "Chuyển giao rủi ro (Risk Transfer)",
      "Né tránh rủi ro (Risk Avoidance)",
      "Tự gánh chịu rủi ro (Risk Retention)",
      "Loại trừ rủi ro"
    ],
    "correctIndex": 0,
    "explanation": "Mua bảo hiểm là hình thức CHUYỂN GIAO RỦI RO điển hình nhất: chuyển gánh nặng tài chính từ bên mua sang doanh nghiệp bảo hiểm để đổi lấy việc đóng một khoản phí bảo hiểm định kỳ."
  },
  {
    "id": "q-rk-15",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Chủ thể HĐBH",
    "question": "Theo Điều 4 Luật Kinh doanh bảo hiểm số 08/2022/QH15, \"Bên mua bảo hiểm\" (BMBH) là ai?",
    "options": [
      "Là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài và đóng phí bảo hiểm",
      "Là người bán hàng hưởng hoa hồng của công ty bảo hiểm",
      "Là cơ quan quản lý nhà nước phê duyệt sản phẩm bảo hiểm",
      "Là người được chỉ định nhận tiền tử vong"
    ],
    "correctIndex": 0,
    "explanation": "Bên mua bảo hiểm là chủ thể đứng tên ký kết hợp đồng bảo hiểm và có nghĩa vụ đóng phí bảo hiểm đầy đủ."
  },
  {
    "id": "q-rk-16",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Chủ thể HĐBH",
    "question": "\"Người được bảo hiểm\" (NĐBH) trong hợp đồng bảo hiểm được hiểu là gì?",
    "options": [
      "Tổ chức, cá nhân có tài sản, trách nhiệm dân sự, sức khỏe, tính mạng được bảo hiểm theo hợp đồng bảo hiểm",
      "Tổ chức đào tạo cấp chứng chỉ đại lý bảo hiểm",
      "Người thân sống cùng nhà với đại lý bảo hiểm",
      "Chuyên viên giám định bồi thường của công ty"
    ],
    "correctIndex": 0,
    "explanation": "Người được bảo hiểm là đối tượng trực tiếp được bảo hiểm bảo vệ (về tính mạng, sức khỏe, tài sản hoặc trách nhiệm dân sự)."
  },
  {
    "id": "q-rk-17",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Chủ thể HĐBH",
    "question": "\"Người thụ hưởng\" (NTH) trong hợp đồng bảo hiểm con người là ai?",
    "options": [
      "Tổ chức, cá nhân được Bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm theo hợp đồng bảo hiểm con người",
      "Đại lý bảo hiểm có công tư vấn hợp đồng",
      "Bác sĩ điều trị cho người bệnh",
      "Ngân hàng nơi công ty bảo hiểm mở tài khoản thanh toán"
    ],
    "correctIndex": 0,
    "explanation": "Người thụ hưởng là người do Bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm khi xảy ra sự kiện bảo hiểm thuộc hợp đồng bảo hiểm con người."
  },
  {
    "id": "q-rk-18",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Giá trị bảo hiểm",
    "question": "Khái niệm \"Giá trị bảo hiểm\" (GTBH - Insurable Value) áp dụng đối với loại hình bảo hiểm nào?",
    "options": [
      "Chỉ áp dụng trong BẢO HIỂM TÀI SẢN và BẢO HIỂM THIỆT HẠI, tuyệt đối không có trong bảo hiểm nhân thọ",
      "Chỉ áp dụng trong bảo hiểm nhân thọ trọn đời",
      "Chỉ áp dụng trong bảo hiểm hưu trí tự nguyện",
      "Áp dụng cho tất cả các loại hình bảo hiểm bao gồm cả bảo hiểm sinh mạng"
    ],
    "correctIndex": 0,
    "explanation": "Tính mạng và thân thể con người là vô giá, không thể đo bằng tiền nên KHÔNG CÓ GIÁ TRỊ BẢO HIỂM. Giá trị bảo hiểm chỉ tồn tại trong bảo hiểm tài sản."
  },
  {
    "id": "q-rk-19",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Bảo hiểm dưới giá trị",
    "question": "Khi tham gia \"Bảo hiểm dưới giá trị\" (STBH < Giá trị tài sản), trường hợp xảy ra tổn thất bộ phận thì DNBH sẽ bồi thường như thế nào?",
    "options": [
      "Bồi thường THEO TỶ LỆ giữa Số tiền bảo hiểm và Giá trị bảo hiểm: Bồi thường = Thiệt hại thực tế × (STBH / GTBH)",
      "Bồi thường toàn bộ 100% thiệt hại thực tế bất kể STBH",
      "DNBH từ chối bồi thường và tịch thu tài sản",
      "DNBH bắt buộc phải bồi thường gấp đôi số tiền bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Điều 47 Luật KDBH: Bảo hiểm dưới giá trị bồi thường theo tỷ lệ giữa STBH và GTBH, trừ trường hợp các bên có thỏa thuận bồi thường theo tổn thất đầu tiên."
  },
  {
    "id": "q-rk-20",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Bảo hiểm dưới giá trị",
    "question": "Một ngôi nhà trị giá 2 tỷ đồng được chủ nhà mua bảo hiểm với Số tiền bảo hiểm là 1 tỷ đồng (50%). Khi xảy ra cháy, thiệt hại thực tế là 400 triệu đồng. DNBH sẽ bồi thường bao nhiêu tiền?",
    "options": [
      "200 triệu đồng (bằng 400 triệu × 1 tỷ / 2 tỷ)",
      "400 triệu đồng vì vẫn nhỏ hơn hạn mức 1 tỷ đồng",
      "1 tỷ đồng bằng đúng số tiền bảo hiểm",
      "100 triệu đồng do khấu trừ cố định"
    ],
    "correctIndex": 0,
    "explanation": "Công thức tỷ lệ bảo hiểm dưới giá trị: 400 triệu × (1 tỷ / 2 tỷ) = 200 triệu đồng. Chủ nhà phải tự chịu 200 triệu đồng còn lại do chỉ mua bảo hiểm 50% giá trị ngôi nhà."
  },
  {
    "id": "q-rk-21",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Bảo hiểm trên giá trị",
    "question": "Trong bảo hiểm tài sản, trường hợp \"Bảo hiểm trên giá trị\" (STBH > Giá trị tài sản) được pháp luật xử lý như thế nào?",
    "options": [
      "Phần STBH vượt quá giá trị tài sản BỊ VÔ HIỆU; DNBH chỉ bồi thường tối đa bằng thiệt hại thực tế và hoàn phí cho phần vượt quá nếu không có lỗi gian lận",
      "DNBH phải bồi thường toàn bộ số tiền bảo hiểm đã ký để khách hàng có lãi",
      "Toàn bộ hợp đồng bảo hiểm bị hủy bỏ và không hoàn phí",
      "Khách hàng bị phạt tù 5 năm trong mọi trường hợp"
    ],
    "correctIndex": 0,
    "explanation": "Điều 48 Luật KDBH 2022: Phần vượt quá giá trị tài sản bị vô hiệu. DNBH không bồi thường vượt quá giá trị thiệt hại thực tế và phải hoàn lại phí bảo hiểm đã nộp tương ứng với phần vượt quá."
  },
  {
    "id": "q-rk-22",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Mức khấu trừ",
    "question": "Khái niệm \"Mức khấu trừ có mức\" (Deductible) trong bảo hiểm tài sản được hiểu là gì?",
    "options": [
      "Khoản tiền quy định trước mà Bên mua bảo hiểm phải tự chịu trong mỗi vụ tổn thất; DNBH chỉ bồi thường phần thiệt hại vượt quá mức khấu trừ",
      "Khoản tiền hoa hồng mà đại lý bảo hiểm phải trích lại cho công ty",
      "Khoản thuế giá trị gia tăng nộp vào ngân sách nhà nước",
      "Mức giảm giá phí bảo hiểm khi ký hợp đồng"
    ],
    "correctIndex": 0,
    "explanation": "Mức khấu trừ là số tiền mà khách hàng tự gánh chịu trong mỗi vụ tổn thất. DNBH chỉ thanh toán phần tổn thất vượt quá mức khấu trừ đó."
  },
  {
    "id": "q-rk-23",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Mức khấu trừ",
    "question": "Hợp đồng bảo hiểm vật chất xe ô tô có mức khấu trừ là 2 triệu đồng/vụ. Khi xe gặp sự cố thiệt hại sửa chữa hết 10 triệu đồng, số tiền DNBH bồi thường là bao nhiêu?",
    "options": [
      "8 triệu đồng (bằng 10 triệu - 2 triệu)",
      "10 triệu đồng trả đủ toàn bộ",
      "2 triệu đồng đúng bằng mức khấu trừ",
      "12 triệu đồng cộng thêm mức khấu trừ"
    ],
    "correctIndex": 0,
    "explanation": "Với mức khấu trừ 2 triệu đồng: Khách hàng tự thanh toán 2 triệu, DNBH chi trả phần vượt quá là: 10 tr - 2 tr = 8 triệu đồng."
  },
  {
    "id": "q-rk-24",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Miễn thường",
    "question": "Điểm khác biệt căn bản giữa \"Mức khấu trừ\" (Deductible) và \"Miễn thường không khấu trừ\" (Disappearing Franchise) khi tổn thất VƯỢT QUÁ mức quy định là gì?",
    "options": [
      "Mức khấu trừ chỉ bồi thường phần vượt quá (Tổn thất - Mức quy định); còn Miễn thường không khấu trừ bồi thường TOÀN BỘ tổn thất thực tế",
      "Mức khấu trừ trả toàn bộ; còn Miễn thường không khấu trừ chỉ trả phần vượt",
      "Hai thuật ngữ này có cách tính hoàn toàn giống hệt nhau",
      "Cả hai đều không bồi thường đồng nào khi tổn thất vượt mức quy định"
    ],
    "correctIndex": 0,
    "explanation": "Bẫy thi quan trọng: Khi tổn thất > mức quy định, Miễn thường không khấu trừ bồi thường TOÀN BỘ thiệt hại, không bị trừ bất kỳ khoản nào; trong khi Mức khấu trừ luôn trừ đi mức khấu trừ đã ấn định."
  },
  {
    "id": "q-rk-25",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Loại trừ trách nhiệm",
    "question": "Theo Điều 40 Luật Kinh doanh bảo hiểm số 08/2022/QH15, trường hợp Người được bảo hiểm chết do TỰ TỬ thì quyền lợi bảo hiểm nhân thọ được giải quyết như thế nào?",
    "options": [
      "DNBH KHÔNG TRẢ TIỀN nếu tự tử trong thời hạn 2 NĂM kể từ ngày nộp khoản phí đầu tiên hoặc khôi phục HĐ; nhưng PHẢI TRẢ TIỀN nếu tự tử sau thời hạn 2 năm",
      "DNBH luôn luôn từ chối chi trả trong mọi trường hợp tự tử bất kể thời gian bao lâu",
      "DNBH chi trả ngay lập tức 100% số tiền bảo hiểm kể cả tự tử ngay sau ngày ký hợp đồng",
      "DNBH phải bồi thường gấp 3 lần số tiền bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Khoản 1 Điều 40 Luật KDBH 2022: DNBH không trả tiền bảo hiểm nếu NĐBH chết do tự tử trong thời hạn 02 năm kể từ ngày nộp khoản phí đầu tiên hoặc kể từ ngày hợp đồng được khôi phục hiệu lực. Sau 2 năm, DNBH vẫn trả tiền bảo hiểm bình thường."
  },
  {
    "id": "q-hd-1",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng về trường hợp hợp đồng bảo hiểm vô hiệu:",
    "options": [
      "Doanh nghiệp bảo hiểm và bên mua bảo hiểm giao kết hợp đồng bảo hiểm giả tạo.",
      "Tại thời điểm giao kết hợp đồng bảo hiểm, bên mua bảo hiểm không biết sự kiện bảo hiểm đã xảy ra.",
      "Đại lý bảo hiểm không nộp phí bảo hiểm đã thu của bên mua bảo hiểm cho doanh nghiệp bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ Điều 25 Luật Kinh doanh bảo hiểm 2022: Hợp đồng bảo hiểm vô hiệu khi bên mua không có quyền lợi có thể được bảo hiểm, không có đối tượng bảo hiểm, biết sự kiện đã xảy ra, giả tạo hoặc vi phạm điều cấm của luật."
  },
  {
    "id": "q-hd-2",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp hợp đồng bảo hiểm có điều khoản không rõ ràng dẫn đến có cách hiểu khác nhau thì điều khoản đó được giải thích theo hướng có lợi cho đối tượng nào sau đây:",
    "options": [
      "Doanh nghiệp bảo hiểm.",
      "Bên mua bảo hiểm.",
      "Bên thứ ba.",
      "Tùy từng trường hợp."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Bên mua bảo hiểm.\"."
  },
  {
    "id": "q-hd-3",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, bằng chứng giao kết hợp đồng bảo hiểm là:",
    "options": [
      "Giấy yêu cầu bảo hiểm, giấy chứng nhận bảo hiểm, đơn bảo hiểm, điện báo, telex, fax và các hình thức khác do pháp luật quy định.",
      "Hợp đồng, giấy chứng nhận bảo hiểm, đơn bảo hiểm hoặc hình thức khác theo quy định của pháp luật."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Hợp đồng, giấy chứng nhận bảo hiểm, đơn bảo hiểm hoặc hình thức khác theo quy định của pháp luật.\"."
  },
  {
    "id": "q-hd-4",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Chọn phương án đúng điền vào chỗ _______: \"Theo Luật Kinh doanh bảo hiểm, trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý bảo hiểm, gây thiệt hại đến quyền, lợi ích hợp pháp của người được bảo hiểm thì _______ phải chịu trách nhiệm thực hiện các nghĩa vụ theo thỏa thuận trong hợp đồng bảo hiểm do đại lý bảo hiểm thu xếp giao kết\".",
    "options": [
      "Doanh nghiệp bảo hiểm",
      "Đại lý bảo hiểm",
      "Người mua bảo hiểm",
      "Doanh nghiệp bảo hiểm và đại lý bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Doanh nghiệp bảo hiểm\"."
  },
  {
    "id": "q-hd-5",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Đối với tài sản thông thường, khi hợp đồng bảo hiểm không có thỏa thuận khác về cơ sở định giá, chọn phương án đúng nhất về giá trị bảo hiểm:",
    "options": [
      "Giá trị bảo hiểm là giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.",
      "Giá trị bảo hiểm luôn là giá trị còn lại của tài sản được bảo hiểm theo sổ sách kế toán.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Giá trị bảo hiểm là giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.\"."
  },
  {
    "id": "q-hd-6",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng điền vào chỗ ______ trong câu sau: \"Hợp đồng bảo hiểm trùng là trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, _______, thời hạn và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm\".",
    "options": [
      "Bên mua bảo hiểm",
      "Đối tượng",
      "Người được bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-hd-7",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Chọn phương án đúng nhất về chuyển giao hợp đồng bảo hiểm:",
    "options": [
      "Việc chuyển giao hợp đồng bảo hiểm phải được thỏa thuận tại hợp đồng bảo hiểm.",
      "Bên nhận chuyển giao hợp đồng bảo hiểm phải có quyền lợi có thể được bảo hiểm, được kế thừa quyền và nghĩa vụ của bên chuyển giao.",
      "Bên mua bảo hiểm thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển giao hợp đồng bảo hiểm và được doanh nghiệp bảo hiểm chấp thuận bằng văn bản, trừ trường hợp việc chuyển giao được thực hiện theo tập quán quốc tế hoặc theo thỏa thuận trong hợp đồng bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"B, C đúng.\"."
  },
  {
    "id": "q-hd-8",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, nội dung nào dưới đây không bắt buộc phải có trong hợp đồng bảo hiểm:",
    "options": [
      "Bên mua bảo hiểm, người được bảo hiểm, người thụ hưởng (nếu có), doanh nghiệp bảo hiểm hoặc chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài.",
      "Đối tượng bảo hiểm; Số tiền bảo hiểm hoặc giá trị tài sản được bảo hiểm hoặc giới hạn trách nhiệm bảo hiểm.",
      "Mức phí bảo hiểm, phương thức đóng phí bảo hiểm; Phương thức bồi thường, trả tiền bảo hiểm; Phương thức giải quyết tranh chấp.",
      "Thu nhập của bên mua bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Thu nhập của bên mua bảo hiểm.\"."
  },
  {
    "id": "q-hd-9",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Chọn phương án đúng nhất về loại hợp đồng bảo hiểm quy định tại Luật kinh doanh bảo hiểm:",
    "options": [
      "Hợp đồng bảo hiểm sức khỏe.",
      "Hợp đồng bảo hiểm tài sản.",
      "Hợp đồng bảo hiểm trách nhiệm",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B, C đúng.\"."
  },
  {
    "id": "q-hd-10",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng về việc chuyển giao hợp đồng bảo hiểm:",
    "options": [
      "Bên mua bảo hiểm không có quyền chuyển giao hợp đồng bảo hiểm.",
      "Bên mua bảo hiểm có quyền chuyển giao hợp đồng bảo hiểm.",
      "Bên mua bảo hiểm có thể chuyển giao hợp đồng bảo hiểm cho bất kỳ người nào."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Bên mua bảo hiểm có quyền chuyển giao hợp đồng bảo hiểm.\"."
  },
  {
    "id": "q-hd-11",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Trong quá trình thực hiện hợp đồng bảo hiểm, doanh nghiệp bảo hiểm có quyền hủy bỏ hợp đồng bảo hiểm trong trường hợp nào sau đây:",
    "options": [
      "Bên mua bảo hiểm cố ý cung cấp không đầy đủ thông tin nhằm giao kết hợp đồng bảo hiểm để được bồi thường, trả tiền bảo hiểm.",
      "Bên mua bảo hiểm cung cấp thông tin sai sự thật nhằm giao kết hợp đồng bảo hiểm để được bồi thường, trả tiền bảo hiểm.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B đúng.\"."
  },
  {
    "id": "q-hd-12",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp không có thỏa thuận trong hợp đồng bảo hiểm về thời hạn bồi thường, trả tiền bảo hiểm, doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm trong thời hạn:",
    "options": [
      "15 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm.",
      "30 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm.",
      "45 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm.",
      "60 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-hd-13",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức, cá nhân được bên mua bảo hiểm hoặc người được bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Người được bảo hiểm.",
      "Người thụ hưởng.",
      "Người bảo hiểm.",
      "Người tham gia bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Người thụ hưởng.\"."
  },
  {
    "id": "q-hd-14",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Ông A tham gia 02 hợp đồng bảo hiểm chi phí y tế tại 02 doanh nghiệp bảo hiểm X và Y, giới hạn chi trả chi phí y tế tại mỗi hợp đồng bảo hiểm là 10 triệu đồng/lần nằm viện. Trong thời hạn bảo hiểm, ông A nằm viện điều trị, chi phí cho đợt nằm viện này là 6 triệu đồng. Số tiền mà ông A sẽ được các doanh nghiệp bảo hiểm chi trả cho đợt nằm viện điều trị này là:",
    "options": [
      "6 triệu đồng.",
      "10 triệu đồng.",
      "12 triệu đồng."
    ],
    "correctIndex": 0,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-hd-15",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với các hợp đồng bảo hiểm (trừ bảo hiểm trách nhiệm), trường hợp không có thỏa thuận trong hợp đồng bảo hiểm và người được bảo hiểm hoặc người thụ hưởng không chứng minh được rằng không biết thời điểm xảy ra sự kiện bảo hiểm, thì thời hạn nộp hồ sơ yêu cầu bồi thường, trả tiền bảo hiểm theo hợp đồng bảo hiểm là:",
    "options": [
      "03 tháng kể từ ngày xảy ra sự kiện bảo hiểm (trừ sự kiện bất khả kháng hoặc trở ngại khách quan)",
      "01 năm kể từ ngày xảy ra sự kiện bảo hiểm (trừ sự kiện bất khả kháng hoặc trở ngại khách quan)",
      "06 tháng kể từ ngày xảy ra sự kiện bảo hiểm (trừ sự kiện bất khả kháng hoặc trở ngại khách quan)",
      "09 tháng kể từ ngày xảy ra sự kiện bảo hiểm (trừ sự kiện bất khả kháng hoặc trở ngại khách quan)"
    ],
    "correctIndex": 1,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-hd-16",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng bảo hiểm vô hiệu trong trường hợp nào sau đây:",
    "options": [
      "Tại thời điểm giao kết hợp đồng bảo hiểm, bên mua bảo hiểm biết sự kiện bảo hiểm đã xảy ra.",
      "Tại thời điểm giao kết hợp đồng bảo hiểm không có đối tượng bảo hiểm.",
      "Tại thời điểm giao kết hợp đồng bảo hiểm, bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Điều 25 Luật Kinh doanh bảo hiểm 2022: Hợp đồng bảo hiểm vô hiệu khi bên mua không có quyền lợi có thể được bảo hiểm, không có đối tượng bảo hiểm, biết sự kiện đã xảy ra, giả tạo hoặc vi phạm điều cấm của luật."
  },
  {
    "id": "q-hd-17",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, trừ trường hợp có thoả thuận khác trong hợp đồng bảo hiểm, doanh nghiệp bảo hiểm không chịu trách nhiệm bồi thường trong trường hợp tài sản được bảo hiểm bị tổn thất do:",
    "options": [
      "Hao mòn tự nhiên",
      "Bản chất vốn có của tài sản",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B đúng\"."
  },
  {
    "id": "q-hd-18",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật kinh doanh bảo hiểm, câu trả lời nào sau đây là đúng nhất về hợp đồng bảo hiểm trùng?",
    "options": [
      "Hợp đồng bảo hiểm trùng là trường hợp bên mua bảo hiểm giao kết hợp đồng bảo hiểm với hai doanh nghiệp bảo hiểm trở lên để bảo hiểm cho cùng một đối tượng bảo hiểm",
      "Hợp đồng bảo hiểm trùng là trường hợp bên mua bảo hiểm giao kết nhiều hợp đồng bảo hiểm với một doanh nghiệp bảo hiểm để bảo hiểm cho cùng một đối tượng bảo hiểm",
      "Hợp đồng bảo hiểm trùng là trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, đối tượng, thời hạn và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.",
      "A, B, C sai"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Hợp đồng bảo hiểm trùng là trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, đối tượng, thời hạn và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.\"."
  },
  {
    "id": "q-hd-19",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Luật Kinh doanh bảo hiểm quy định về các loại hợp đồng bảo hiểm nào sau đây:",
    "options": [
      "Hợp đồng bảo hiểm nhân thọ.",
      "Hợp đồng bảo hiểm sức khỏe.",
      "Hợp đồng bảo hiểm trách nhiệm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B, C đúng\"."
  },
  {
    "id": "q-hd-20",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về điều kiện của doanh nghiệp bảo hiểm được nhận chuyển giao danh mục hợp đồng bảo hiểm:",
    "options": [
      "Đang kinh doanh nghiệp vụ bảo hiểm nhận chuyển giao",
      "Bảo đảm tỷ lệ an toàn vốn, khả năng thanh toán theo quy định của pháp luật.",
      "Bảo đảm điều kiện triển khai nghiệp vụ bảo hiểm sau khi nhận chuyển giao.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B, C đúng.\"."
  },
  {
    "id": "q-hd-21",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Nguyên tắc thế quyền không được áp dụng đối với loại hợp đồng bảo hiểm nào dưới đây:",
    "options": [
      "Bảo hiểm hàng hải.",
      "Bảo hiểm mọi rủi ro tài sản.",
      "Bảo hiểm trách nhiệm dân sự.",
      "Bảo hiểm nhân thọ."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Bảo hiểm nhân thọ.\"."
  },
  {
    "id": "q-hd-22",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức, cá nhân được bên mua bảo hiểm hoặc người được bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Người được bảo hiểm",
      "Người thụ hưởng",
      "Người bảo hiểm",
      "Người tham gia bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Người thụ hưởng\"."
  },
  {
    "id": "q-hd-23",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, các loại hợp đồng bảo hiểm bao gồm:",
    "options": [
      "Hợp đồng bảo hiểm nhân thọ",
      "Hợp đồng bảo hiểm sức khỏe",
      "Hợp đồng bảo hiểm tài sản; Hợp đồng bảo hiểm thiệt hại; Hợp đồng bảo hiểm trách nhiệm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B, C đúng\"."
  },
  {
    "id": "q-hd-24",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Theo Luật Kinh doanh bảo hiểm, việc chuyển nhượng hợp đồng bảo hiểm chỉ có hiệu lực khi:",
    "options": [
      "Bên mua bảo hiểm thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển nhượng và doanh nghiệp bảo hiểm có văn bản chấp thuận việc chuyển nhượng đó.",
      "Bên mua bảo hiểm thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển nhượng và doanh nghiệp bảo hiểm có văn bản chấp thuận việc chuyển nhượng đó trừ trường hợp việc chuyển nhượng được thực hiện theo tập quán quốc tế.",
      "Việc chuyển nhượng hợp đồng được tự động thực hiện theo thỏa thuận tại hợp đồng bảo hiểm.",
      "A, B đúng",
      "A, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"Bên mua bảo hiểm thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển nhượng và doanh nghiệp bảo hiểm có văn bản chấp thuận việc chuyển nhượng đó trừ trường hợp việc chuyển nhượng được thực hiện theo tập quán quốc tế.\"."
  },
  {
    "id": "q-hd-25",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hợp đồng bảo hiểm",
    "question": "Khi giao kết hợp đồng bảo hiểm, doanh nghiệp bảo hiểm có quyền và nghĩa vụ:",
    "options": [
      "Có quyền yêu cầu bên mua bảo hiểm cung cấp đầy đủ, trung thực mọi thông tin liên quan đến việc giao kết hợp đồng bảo hiểm.",
      "Có quyền thu phí bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Có nghĩa vụ giải thích rõ ràng, đầy đủ cho bên mua bảo hiểm về quyền lợi bảo hiểm, điều khoản loại trừ trách nhiệm bảo hiểm, quyền và nghĩa vụ của bên mua bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ Luật Kinh doanh bảo hiểm số 08/2022/QH15 và tài liệu ôn thi chuẩn: Đáp án đúng là \"A, B, C đúng.\"."
  },
  {
    "id": "q-ts-1",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, trường hợp người được bảo hiểm từ chối chuyển quyền yêu cầu người thứ ba bồi hoàn, doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Khấu trừ số tiền bồi thường tuỳ theo mức độ lỗi của người được bảo hiểm.",
      "Hủy bỏ hợp đồng bảo hiểm.",
      "Trực tiếp yêu cầu người thứ ba bồi thường",
      "A, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-2",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm cháy, nổ bắt buộc do cơ quan nào ban hành quy định về điều kiện, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu?",
    "options": [
      "Chính phủ",
      "Bộ Công thương",
      "Hiệp hội Bảo hiểm Việt Nam",
      "Bộ Tài chính"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-3",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về bảo hiểm cháy, nổ bắt buộc:",
    "options": [
      "Là sản phẩm bảo hiểm do Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm",
      "Là sản phẩm bảo hiểm do Chính phủ quy định chi tiết về điều kiện, số tiền bảo hiểm tối thiểu",
      "Là sản phẩm bảo hiểm do Chính phủ quy định chi tiết về mức phí bảo hiểm, số tiền bảo hiểm tối thiểu",
      "Là sản phẩm bảo hiểm do Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu"
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-4",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án nào sau đây đúng về hợp đồng bảo hiểm tài sản dưới giá trị:",
    "options": [
      "Hợp đồng bảo hiểm tài sản dưới giá trị là hợp đồng trong đó số tiền bồi thường thấp hơn giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "Hợp đồng bảo hiểm tài sản dưới giá trị là hợp đồng trong đó số tiền bảo hiểm thấp hơn giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "Hợp đồng bảo hiểm tài sản dưới giá trị là hợp đồng trong đó số tiền bảo hiểm thấp hơn giá trị sổ sách của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-5",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm tài sản, trong trường hợp đơn phương chấm dứt thực hiện hợp đồng bảo hiểm khi bên mua bảo hiểm không đóng đủ phí bảo hiểm sau thời gian gia hạn đóng phí bảo hiểm theo thoả thuận trong hợp đồng bảo hiểm thì:",
    "options": [
      "Doanh nghiệp bảo hiểm có trách nhiệm bồi thường cho người được bảo hiểm khi sự kiện bảo hiểm xảy ra trước thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm và có quyền khấu trừ phí bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Bên mua bảo hiểm vẫn phải đóng đủ phí bảo hiểm đến thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-6",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, trừ trường hợp có thoả thuận khác, số tiền bồi thường mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm được xác định trên cơ sở:",
    "options": [
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm, nơi xảy ra tổn thất và mức độ thiệt hại thực tế",
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "Thỏa thuận giữa bên mua bảo hiểm và người thứ ba gây thiệt hại",
      "Nguyên giá của tài sản"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-7",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Chọn phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, số tiền bảo hiểm của hợp đồng bảo hiểm tài sản là:",
    "options": [
      "Số tiền mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm khi kết thúc hợp đồng bảo hiểm.",
      "Số tiền mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm trong một sự kiện bảo hiểm hoặc trong cả thời hạn bảo hiểm theo thỏa thuận tại hợp đồng bảo hiểm.",
      "Số tiền mà bên mua bảo hiểm và doanh nghiệp bảo hiểm thỏa thuận trong hợp đồng bảo hiểm để bảo hiểm cho tài sản và thiệt hại trên cơ sở yêu cầu của bên mua bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-8",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Kiểm tra các điều kiện bảo đảm an toàn cho đối tượng bảo hiểm hoặc khuyến nghị, yêu cầu người được bảo hiểm áp dụng các biện pháp đề phòng, hạn chế rủi ro.",
      "Đơn phương đình chỉ hợp đồng bảo hiểm ngay tại thời điểm phát hiện thấy người được bảo hiểm không thực hiện các biện pháp đảm bảo an toàn cho đối tượng bảo hiểm",
      "Tăng phí bảo hiểm ngay thời điểm phát hiện thấy người được bảo hiểm không thực hiện các biện pháp đảm bảo an toàn cho đối tượng bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-9",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, bên mua bảo hiểm và doanh nghiệp bảo hiểm có thể thỏa thuận hình thức bồi thường nào dưới đây:",
    "options": [
      "Sửa chữa tài sản bị thiệt hại",
      "Thay thế tài sản bị thiệt hại bằng tài sản khác",
      "Trả tiền bồi thường",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-10",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây SAI về bảo hiểm tài sản trên giá trị:",
    "options": [
      "Hợp đồng bảo hiểm tài sản trên giá trị là hợp đồng trong đó số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "Trong trường hợp giao kết hợp đồng bảo hiểm tài sản trên giá trị do lỗi cố ý của bên mua bảo hiểm, nếu chưa xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm phải hoàn lại cho bên mua bảo hiểm số phí bảo hiểm đã đóng tương ứng với số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng sau khi trừ các chi phí hợp lý (nếu có) theo thỏa thuận trong hợp đồng bảo hiểm",
      "Doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài và bên mua bảo hiểm không được cố ý giao kết hợp đồng bảo hiểm tài sản trên giá trị.",
      "A, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-11",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Khi bảo hiểm tài sản trên giá trị, nếu xảy ra sự kiện bảo hiểm thì doanh nghiệp bảo hiểm tính toán bồi thường theo:",
    "options": [
      "Giá trị sổ sách.",
      "Giá trị nguyên giá của tài sản sau khi trừ khấu hao.",
      "Số tiền bảo hiểm của tài sản đó ghi trên giấy chứng nhận bảo hiểm.",
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm xảy ra thiệt hại."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-12",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong trường hợp hợp đồng bảo hiểm tài sản dưới giá trị được giao kết thì:",
    "options": [
      "Doanh nghiệp bảo hiểm chỉ chịu trách nhiệm bồi thường thiệt hại theo tỷ lệ tương ứng với số tiền bảo hiểm và giá trị sổ sách của tài sản được bảo hiểm tại thời điểm giao kết hoặc thỏa thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm chỉ chịu trách nhiệm bồi thường thiệt hại theo tỷ lệ tương ứng với số tiền bảo hiểm và giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hoặc thỏa thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm chỉ chịu trách nhiệm bồi thường thiệt hại theo tỷ lệ tương ứng với giá trị bảo hiểm và giá trị sổ sách của tài sản được bảo hiểm tại thời điểm giao kết hoặc thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-13",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng bảo hiểm tài sản trên giá trị là:",
    "options": [
      "Hợp đồng trong đó số tiền bảo hiểm cao hơn giá trị của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "Hợp đồng trong đó số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng.",
      "Hợp đồng trong đó số tiền bảo hiểm cao hơn giá trị trên sổ sách của tài sản được bảo hiểm tại thời điểm xảy ra tổn thất.",
      "Hợp đồng trong đó số tiền bảo hiểm cao hơn giá trị ước tính của tài sản được bảo hiểm tại thời điểm xảy ra tổn thất."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-14",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, Trong bảo hiểm tài sản, đáp án nào đúng khi điền vào chỗ ____ dưới đây: \"Trường hợp xảy ra tổn thất, ____ không được từ bỏ tài sản được bảo hiểm và phải áp dụng các biện pháp cần thiết mà khả năng cho phép để ngăn chặn hoặc giảm thiểu tổn thất, trừ trường hợp pháp luật có quy định khác hoặc các bên có thỏa thuận khác\".",
    "options": [
      "Doanh nghiệp bảo hiểm.",
      "Người thụ hưởng.",
      "Người được bảo hiểm.",
      "Người gây ra tổn thất."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-15",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về đối tượng bảo hiểm của hợp đồng bảo hiểm tài sản :",
    "options": [
      "Đối tượng bảo hiểm là tài sản theo quy định của Bộ luật Dân sự",
      "Đối tượng bảo hiểm là tài sản bao gồm bất động sản và động sản",
      "Đổi tượng bảo hiểm là trách nhiệm dân sự của người được bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-16",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, chi phí để xác định mức độ thiệt hại do đối tượng nào sau đây chi trả:",
    "options": [
      "Doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-17",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong hợp đồng bảo hiểm tài sản, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm, cơ sở để xác định số tiền bồi thường mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm là:",
    "options": [
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm, nơi xảy ra tổn thất, mức độ thiệt hại thực tế.",
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm tham gia bảo hiểm và mức độ thiệt hại thực tế.",
      "Giá trị sổ sách của tài sản được bảo hiểm tại thời điểm tham gia bảo hiểm và mức độ thiệt hại thực tế.",
      "Giá trị thỏa thuận."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-18",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, một trong các đối tượng bảo hiểm của hợp đồng bảo hiểm tài sản là:",
    "options": [
      "Trách nhiệm dân sự của người được bảo hiểm",
      "Quyền tài sản",
      "Thiệt hại do gián đoạn kinh doanh",
      "B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-19",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về \"Nguyên tắc thế quyền\" trong bảo hiểm tài sản:",
    "options": [
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba có hành vi gây thiệt hại chịu trách nhiệm bồi hoàn trong phạm vi số tiền bồi thường bảo hiểm.",
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba có hành vi gây thiệt hại chịu trách nhiệm bồi hoàn.",
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba bồi hoàn trong phạm vi số tiền bồi thường bảo hiểm.",
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba bồi hoàn."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-20",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, trường hợp doanh nghiệp bảo hiểm và bên mua bảo hiểm không thoả thuận được về hình thức bồi thường thì việc bồi thường sẽ được thực hiện bằng:",
    "options": [
      "Sửa chữa tài sản bị thiệt hại",
      "Thay thế tài sản bị thiệt hại bằng tài sản khác",
      "Trả tiền bồi thường",
      "A, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-21",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, ngoài số tiền bồi thường đối với tổn thất thuộc trách nhiệm bảo hiểm, những chi phí cần thiết, hợp lý theo thỏa thuận tại hợp đồng bảo hiểm để thực hiện các biện pháp hạn chế tổn thất trong bảo hiểm tài sản có thuộc phạm vi bảo hiểm không?",
    "options": [
      "Có.",
      "Không.",
      "Có, với điều kiện các biện pháp để hạn chế tổn thất được thực hiện theo hướng dẫn của doanh nghiệp bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-22",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Khi bảo hiểm tài sản dưới giá trị, nếu xảy ra sự kiện bảo hiểm thì số tiền bồi thường tối đa doanh nghiệp bảo hiểm có thể chi trả là:",
    "options": [
      "Giá trị sổ sách.",
      "Giá trị nguyên giá của tài sản sau khi trừ khấu hao.",
      "Số tiền bảo hiểm của tài sản đó ghi trên Giấy chứng nhận bảo hiểm.Đơn bảo hiểm.",
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm xảy ra sự kiện bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-23",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong hợp đồng bảo hiểm tài sản, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm, cơ sở để xác định số tiền bồi thường mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm là:",
    "options": [
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm, nơi xảy ra tổn thất, mức độ thiệt hại thực tế",
      "Giá thị trường của tài sản được bảo hiểm tại thời điểm tham gia bảo hiểm và mức độ thiệt hại thực tế",
      "Giá trị sổ sách của tài sản được bảo hiểm tại thời điểm tham gia bảo hiểm và mức độ thiệt hại thực tế",
      "Giá trị thỏa thuận"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-24",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, tỷ lệ hoa hồng đại lý bảo hiểm tối đa với hợp đồng bảo hiểm tài sản là:",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-ts-25",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm tài sản & thiệt hại",
    "question": "Chọn phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm tài sản, hợp đồng bảo hiểm thiệt hại, trường hợp doanh nghiệp bảo hiểm và bên mua bảo hiểm không thống nhất về nguyên nhân và mức độ tổn thất và không thỏa thuận được việc thuê giám định viên độc lập thì một trong các bên có quyền yêu cầu những bên nào sau đây trưng cầu giám định viên độc lập? Kết luận của giám định viên độc lập có giá trị bắt buộc đối với các bên.",
    "options": [
      "Tòa án có thẩm quyền",
      "Trọng tài",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ quy định về bảo hiểm tài sản: Bồi thường căn cứ giá thị trường của tài sản tại thời điểm và nơi xảy ra tổn thất. Không thỏa thuận được hình thức thì bồi thường bằng tiền."
  },
  {
    "id": "q-kt-1",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo Quy tắc bảo hiểm “Mọi rủi ro tài sản” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), thiệt hại vật chất đối với tài sản được bảo hiểm do cháy hoặc nổ phát sinh từ việc trục trặc của các dữ liệu điện tử có được bảo hiểm không?",
    "options": [
      "Không.",
      "Có, nếu không bị loại trừ bởi các điều kiện khác của Quy tắc này."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-2",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Bên thứ ba trong bảo hiểm trách nhiệm nghề nghiệp tư vấn đầu tư xây dựng là:",
    "options": [
      "Người được bảo hiểm.",
      "Bên mua bảo hiểm.",
      "Doanh nghiệp bảo hiểm.",
      "Nhà dân cạnh công trình xây dựng được bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-3",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng nào sau đây không phải là người được bảo hiểm trong bảo hiểm trách nhiệm nghề nghiệp:",
    "options": [
      "Doanh nghiệp tái bảo hiểm.",
      "Doanh nghiệp môi giới bảo hiểm.",
      "Bác sỹ, y tá, hộ lý."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-4",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo Quy tắc bảo hiểm ‘Hỏa hoạn và các rủi ro đặc biệt” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), có thể bảo hiểm máy móc, thiết bị hay nhà xưởng trên cơ sở giá trị thay thế mới không?",
    "options": [
      "Có.",
      "Không.",
      "Có, với điều kiện bên mua bảo hiểm phải tham gia thêm Điều khoản sửa đổi bổ sung về bảo hiểm theo “Giá trị thay thế mới”."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-5",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng về số tiền cần phải bảo hiểm máy móc thiết bị của chủ thầu (CPM) của nhà tái bảo hiểm Munich Re:",
    "options": [
      "Là giá trị thị trường.",
      "Là giá trị sổ sách.",
      "Là giá trị thay thế mới.",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-6",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm “Hoả hoạn và các rủi ro đặc biệt” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), áp dụng từ rủi ro A đến I, tài sản bị thiệt hại do nguyên nhân nào sau đây không bị loại trừ bảo hiểm:",
    "options": [
      "Thiệt hại gây ra do ô nhiễm, nhiễm bẩn.",
      "Thiệt hại gây ra do ô nhiễm phát sinh từ rủi ro được bảo hiểm.",
      "Thiệt hại do máy móc, thiết bị chạy quá tải.",
      "Thiệt hại gây ra do bạo loạn."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-7",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Người có quyền đối với tài sản thuê, mượn và phải chịu rủi ro về tài sản đó thì có “Quyền lợi có thể được bảo hiểm” đối với tài sản đó trong thời gian thuê, mượn:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-8",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng: Trường hợp nào sau đây thuộc phạm vi bảo hiểm của Đơn bảo hiểm mọi rủi ro xây dựng CAR của nhà tái bảo hiểm Munich Re?",
    "options": [
      "Hạng mục công trình bị thiệt hại do lỗi thiết kế",
      "Tổn thất đối với hồ sơ, bản vẽ, sổ sách, hóa đơn.",
      "Hạng mục công trình bị thiệt hại do bão",
      "A, C đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-9",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Tài sản nào sau đây được bảo hiểm theo đơn bảo hiểm “Mọi rủi ro tài sản” của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Hệ thống thoát nước của bể bơi.",
      "Giếng.",
      "Cây cảnh.",
      "Nhà xưởng, máy móc, thiết bị."
    ],
    "correctIndex": 3,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-10",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re, không có điều khoản sửa đổi, bổ sung, tổn thất gây ra đối với bên thứ ba trong thời gian bảo hành có thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-11",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án sai về hợp đồng bảo hiểm trách nhiệm nghề nghiệp:",
    "options": [
      "Thời hạn hồi tố là 01 năm trước ngày hợp đồng bảo hiểm có hiệu lực.",
      "Chỉ hồi tố khi không có tổn thất hoặc tổn thất tiềm tàng không được biết đến tại thời điểm giao kết hợp đồng bảo hiểm",
      "Nếu tổn thất xảy ra trước thời điểm bắt đầu hiệu lực hồi tố thì khiếu nại liên quan vẫn thuộc trách nhiệm bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-12",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo sản phẩm bảo hiểm trách nhiệm nghề nghiệp kỹ sư tư vấn thiết kế xây dựng, người được bảo hiểm có thể vừa là người tư vấn thiết kế vừa là người xây/lắp không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-13",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án sai về phạm vi bảo hiểm của quy tắc bảo hiểm đổ vỡ máy móc “Sự cố hư hỏng máy móc” của nhà tái bảo hiểm Munich Re:",
    "options": [
      "Thiệt hại do khuyết tật về đúc/nguyên vật liệu.",
      "Thiệt hại do lỗi thiết kế.",
      "Thiệt hại do đoản mạch, quá điện áp.",
      "Thiệt hại do hỏa hoạn, sét đánh trực tiếp vào máy móc."
    ],
    "correctIndex": 3,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-14",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Cách xác định lợi nhuận gộp theo Đơn bảo hiểm “Gián đoạn kinh doanh” của Hiệp hội bảo hiểm Vương quốc Anh (ABI) nào sau đây không đúng:",
    "options": [
      "Lợi nhuận gộp là lợi nhuận ròng trước thuế cộng chi phí cố định.",
      "Lợi nhuận gộp là lợi nhuận kinh doanh thuần sau thuế và chi phí cố định.",
      "Lợi nhuận gộp được xác định bằng doanh thu trừ đi chi phí biến đổi và các chi phí cố định mà người được bảo hiểm tự bảo hiểm.",
      "Lợi nhuận gộp = (Doanh thu + Giá trị hàng tồn kho cuối kỳ + Giá trị sản phẩm dở dang cuối kỳ) – (Giá trị hàng tồn kho đầu kỳ + Giá trị sản phẩm dở dang đầu kỳ + Các khoản chi phí hoạt động không được bảo hiểm)."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-15",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án sai về phạm vi bảo hiểm của quy tắc bảo hiểm đổ vỡ máy móc “Sự cố hư hỏng máy móc (Machinery Breakdown)”:",
    "options": [
      "Thiệt hại do nổ vật lý.",
      "Thiệt hại do nổ hóa học.",
      "Thiệt hại do tác động của lực ly tâm.",
      "Thiệt hại do hỏng hóc, trục trặc về cơ điện."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-16",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong bảo hiểm tài sản, trường hợp áp dụng mức miễn thường không khấu trừ, nếu giá trị tổn thất lớn hơn mức miễn thường thì:",
    "options": [
      "Số tiền bồi thường bằng giá trị tổn thất.",
      "Số tiền bồi thường bằng giá trị tổn thất trừ đi mức miễn thường."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-17",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chi phí/các khoản tiền nào sau đây không được doanh nghiệp bảo hiểm chi trả theo hợp đồng bảo hiểm trách nhiệm nghề nghiệp cho kỹ sư, tư vấn, thiết kế:",
    "options": [
      "Chi phí dọn dẹp hiện trường của tổn thất phát sinh do lỗi thiết kế của người được bảo hiểm.",
      "Án phí hoặc chi phí trọng tài để giải quyết tranh chấp về trách nhiệm đối với người thứ ba của người được bảo hiểm.",
      "Tiền phạt vi phạm hành chính của tòa án đối với người được bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-18",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Thông thường, giới hạn mức trách nhiệm bảo hiểm đối với bên thứ ba về người và tài sản theo Đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re được các nhà nhận tái bảo hiểm trên thế giới chấp nhận là:",
    "options": [
      "Không có giới hạn",
      "Không vượt quá 50% số tiền bảo hiểm của Phần I- Tổn thất vật chất",
      "Không vượt quá 75% số tiền bảo hiểm của Phần I- Tổn thất vật chất",
      "Không vượt quá 90% số tiền bảo hiểm của Phần I- Tổn thất vật chất"
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-19",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "\"Trong bảo hiểm tài sản, đơn vị rủi ro (ngôi nhà, bộ phận nhà hoặc kho) được coi là cách biệt về mặt cấu trúc nếu ngôi nhà, bộ phận nhà hoặc kho được ngăn cách bằng tường ngăn cháy\". Phát biểu trên là:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-20",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất: Thuật ngữ “Sản Phẩm” trong bảo hiểm trách nhiệm sản phẩm được hiểu là:",
    "options": [
      "Hàng hóa (bao gồm thùng/hộp chứa hàng, bao bì, hướng dẫn sử dụng) đã được bán, cung cấp hoặc sửa chữa, thay thế, bảo hành bởi người được bảo hiểm.",
      "Hàng hóa đã rời khỏi sự kiểm soát của người được bảo hiểm.",
      "Hàng hóa trong phạm vi nhà xưởng của người được bảo hiểm.",
      "A, B đúng.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-21",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo Quy tắc bảo hiểm ‘Mọi rủi ro tài sản” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), chi phí khắc phục thiệt hại gây ra do hệ thống cung cấp nước, điện, khí đốt hoặc nhiên liệu bị gián đoạn hoặc hệ thống thoát thải nối với khu vực được bảo hiểm bị hư hỏng có thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có.",
      "Không.",
      "Không, trừ khi thiệt hại xảy ra tiếp theo do một nguyên nhân khác không bị loại trừ trong Quy tắc bảo hiểm này gây ra."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-22",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng về thời hạn bảo hiểm kết thúc theo quy tắc \"bảo hiểm mọi rủi ro lắp đặt\" (EAR) của nhà tái bảo hiểm Munich Re được các nhà nhận tái bảo hiểm trên thế giới chấp nhận:",
    "options": [
      "Khi các thiết bị, máy móc được bàn giao hay ngay khi kết thúc hoạt động chạy thử đầu tiên, tùy thời điểm nào xảy ra trước nhưng thời gian chạy thử không muộn hơn ngày kết thúc ghi trên giấy chứng nhận bảo hiểm.",
      "Khi các thiết bị máy móc được bàn giao và kết thúc vào ngày ghi trên giấy chứng nhận bảo hiểm",
      "Vào thời điểm ghi trong giấy chứng nhận bảo hiểm",
      "B, C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-kt-23",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo quy tắc bảo hiểm “Gián đoạn kinh doanh” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), chi phí hoạt động không được bảo hiểm trong công thức tính lợi nhuận gộp (theo phương pháp trừ) được hiểu là:",
    "options": [
      "Chi phí cố định.",
      "Chi phí biến đổi và những chi phí cố định mà người được bảo hiểm muốn tự bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-24",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm “Gián đoạn kinh doanh” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), các chi phí hoạt động gia tăng thêm ngoài chi phí hoạt động gia tăng thuộc hạng mục Lợi nhuận gộp có thể được bảo hiểm trong loại hình bảo hiểm gián đoạn kinh doanh không?",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-25",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re, số tiền bảo hiểm đối với Phần tổn thất vật chất (Phần I) được quy định cho mỗi và mọi vụ tổn thất có nghĩa là:",
    "options": [
      "Số tiền bồi thường cho một vụ tổn thất không vượt quá số tiền bảo hiểm, và không giới hạn các vụ tổn thất trong thời hạn bảo hiểm.",
      "Giới hạn các vụ tổn thất trong thời hạn bảo hiểm, tổng số tiền bồi thường của một hoặc nhiều vụ tổn thất không vượt quá số tiền bảo hiểm.",
      "Không giới hạn các vụ tổn thất trong thời hạn bảo hiểm, tổng số tiền bồi thường của một hoặc nhiều vụ tổn thất không vượt quá số tiền bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-26",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất: Cơ sở giải quyết bồi thường đối với Phần II - Trách nhiệm đối với bên thứ ba trong Đơn bảo hiểm mọi rủi ro xây dựng, lắp đặt (CAR.EAR) của nhà tái bảo hiểm Munich Re là:",
    "options": [
      "Thiệt hại về người và tài sản đối với bên thứ ba là hậu quả của hành vi bất cẩn. sai sót mà người được bảo hiểm phải chịu trách nhiệm theo quy định của pháp luật.",
      "Phải có thiệt hại về tài sản và.hoặc người.",
      "Tổng số tiền bồi thường đối với Phần II có thể vượt quá mức trách nhiệm bảo hiểm theo Phần I (Phần tổn thất vật chất)",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-27",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Một trong các nguyên tắc bồi thường áp dụng trong bảo hiểm tài sản là:",
    "options": [
      "Doanh nghiệp bảo hiểm bồi thường trên cơ sở giá trị thực tế (giá thị trường) của tài sản trước thời điểm xảy ra tổn thất.",
      "Doanh nghiệp bảo hiểm bồi thường không vượt quá số tiền bảo hiểm trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm bồi thường theo giá trị thay thế mới tài sản.",
      "A, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-28",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Hợp đồng bảo hiểm trách nhiệm nghề nghiệp (Professional Indemnity) thường áp dụng thời hạn bảo hiểm trên cơ sở:",
    "options": [
      "Khiếu nại được lập (Claim made basis).",
      "Tổn thất phát sinh (Occurrence basis).",
      "Kết hợp cơ sở sự kiện phát sinh (Occurrence basis) và khiếu nại phát sinh (Claim made basis).",
      "Phát sinh hành vi lỗi (Act or omission committed) của người được bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Mốc thời hạn luật định: 01 năm nộp hồ sơ yêu cầu bồi thường; 15 ngày DNBH phải bồi thường nếu không có thỏa thuận; 03 năm thời hiệu khởi kiện."
  },
  {
    "id": "q-kt-29",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trách nhiệm dân sự (TNDS) đối với bên thứ ba theo Đơn bảo hiểm mọi rủi ro xây dựng lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re được hiểu là:",
    "options": [
      "TNDS của chủ đầu tư công trình và nhà thầu thi công đối với bên thứ ba về người và tài sản.",
      "TNDS của nhà thầu thi công này đối với nhà thầu thi công khác trên công trường.",
      "TNDS của chủ đầu tư công trình đối với công nhân của các nhà thầu trên công trường.",
      "TNDS của nhà thầu thi công đối với chủ đầu tư công trình."
    ],
    "correctIndex": 0,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-kt-30",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Máy móc trong quá trình lắp đặt, di chuyển hoặc thay đổi vị trí (bao gồm cả việc tháo dỡ và lắp đặt lại) có được bảo hiểm theo Quy tắc bảo hiểm \"Mọi rủi ro tài sản\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI) không:",
    "options": [
      "Có.",
      "Không.",
      "Không, nếu nguyên nhân của thiệt hại có thể được quy là do những hoạt động lắp đặt, di chuyển hoặc thay đổi vị trí gây ra."
    ],
    "correctIndex": 2,
    "explanation": "Theo Quy tắc bảo hiểm Kỹ thuật (Munich Re / ABI): Đối với tổn thất gián tiếp / vạ lây, chỉ bồi thường khi phát sinh từ khuyết tật vật liệu hoặc tay nghề kém; loại trừ triệt để lỗi thiết kế."
  },
  {
    "id": "q-hd-26",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Thời hạn cân nhắc",
    "question": "Theo Luật Kinh doanh bảo hiểm 2022, thời gian cân nhắc tham gia bảo hiểm nhân thọ đối với hợp đồng có thời hạn trên 01 năm là bao lâu?",
    "options": [
      "14 ngày kể từ ngày ký hợp đồng",
      "21 ngày kể từ ngày bên mua nhận được hợp đồng bảo hiểm",
      "30 ngày kể từ ngày nộp phí đầu tiên",
      "60 ngày kể từ ngày phát hành hợp đồng"
    ],
    "correctIndex": 1,
    "explanation": "Khoản 1 Điều 35 Luật KDBH 2022: Đối với HĐBH nhân thọ có thời hạn trên 01 năm, bên mua bảo hiểm có 21 ngày cân nhắc tính từ ngày nhận được hợp đồng để quyết định tiếp tục hoặc từ chối tham gia."
  },
  {
    "id": "q-hd-27",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Gia hạn đóng phí",
    "question": "Thời gian gia hạn đóng phí bảo hiểm đối với hợp đồng bảo hiểm nhân thọ đóng phí định kỳ theo luật định là bao nhiêu ngày?",
    "options": [
      "15 ngày",
      "30 ngày",
      "60 ngày kể từ ngày đến hạn đóng phí",
      "90 ngày"
    ],
    "correctIndex": 2,
    "explanation": "Điều 37 Luật KDBH 2022: Thời gian gia hạn đóng phí là 60 ngày kể từ ngày đến hạn đóng phí. Trong thời gian này hợp đồng vẫn có hiệu lực và DNBH vẫn chịu trách nhiệm bảo hiểm."
  },
  {
    "id": "q-hd-28",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Khôi phục hiệu lực",
    "question": "Trường hợp hợp đồng bảo hiểm bị đình chỉ thực hiện do bên mua không đóng đủ phí, thời hạn tối đa để các bên thỏa thuận khôi phục hiệu lực hợp đồng là:",
    "options": [
      "06 tháng",
      "01 năm",
      "02 năm kể từ ngày hợp đồng bị đình chỉ thực hiện",
      "03 năm kể từ ngày đến hạn đóng phí"
    ],
    "correctIndex": 2,
    "explanation": "Khoản 2 Điều 37 Luật KDBH 2022: Các bên có thể thỏa thuận khôi phục hiệu lực hợp đồng bảo hiểm trong thời hạn 02 năm kể từ ngày bị đình chỉ nếu bên mua đóng đủ số phí còn thiếu."
  },
  {
    "id": "q-hd-29",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Giải thích hợp đồng",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp hợp đồng bảo hiểm có điều khoản không rõ ràng dẫn đến có cách hiểu khác nhau thì điều khoản đó được giải thích theo hướng nào?",
    "options": [
      "Có lợi cho doanh nghiệp bảo hiểm.",
      "Có lợi cho bên mua bảo hiểm.",
      "Theo ý kiến của bên thứ ba giám định.",
      "Theo phán quyết hòa giải cơ sở."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 2 Điều 18 Luật KDBH 2022 quy định rõ: Hợp đồng bảo hiểm có điều khoản không rõ ràng dẫn đến có cách hiểu khác nhau thì điều khoản đó được giải thích theo hướng có lợi cho bên mua bảo hiểm."
  },
  {
    "id": "q-hd-30",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Bảo hiểm trường hợp chết",
    "question": "Khi giao kết hợp đồng bảo hiểm nhân thọ cho trường hợp chết của người khác, điều kiện bắt buộc theo luật định là:",
    "options": [
      "Người đó phải được kiểm tra y tế toàn diện tại bệnh viện tuyến trung ương.",
      "Phải được người đó đồng ý bằng văn bản, ghi rõ số tiền bảo hiểm và người thụ hưởng (trừ trường hợp cha mẹ mua cho con chưa thành niên).",
      "Chỉ cần có quan hệ huyết thống thì không cần văn bản đồng ý.",
      "Phải được Ủy ban nhân dân cấp xã xác nhận mối quan hệ gia đình."
    ],
    "correctIndex": 1,
    "explanation": "Điều 39 Luật KDBH 2022: HĐBH nhân thọ cho trường hợp chết của người khác phải có sự đồng ý bằng văn bản của người đó, trong đó ghi rõ STBH và người thụ hưởng. Trường hợp cha mẹ mua cho con chưa thành niên thì không cần văn bản đồng ý."
  },
  {
    "id": "q-hd-31",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Hậu quả vô hiệu",
    "question": "Hợp đồng bảo hiểm vô hiệu sẽ phát sinh hệ quả pháp lý nào sau đây?",
    "options": [
      "Vô hiệu kể từ ngày Tòa án ra bản án có hiệu lực pháp luật.",
      "Không có hiệu lực từ thời điểm giao kết; các bên hoàn trả cho nhau những gì đã nhận, bên có lỗi gây thiệt hại phải bồi thường.",
      "DNBH chỉ hoàn trả lại 50% số phí bảo hiểm đã thu.",
      "Hợp đồng vẫn có hiệu lực một phần đối với các rủi ro đã xảy ra trước đó."
    ],
    "correctIndex": 1,
    "explanation": "Điều 26 Luật KDBH 2022: Khi HĐBH vô hiệu thì hợp đồng không có hiệu lực từ thời điểm giao kết. Các bên hoàn trả cho nhau những gì đã nhận. Bên có lỗi gây thiệt hại thì phải bồi thường."
  },
  {
    "id": "q-ts-26",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Thế quyền bồi hoàn",
    "question": "Doanh nghiệp bảo hiểm không được thực hiện quyền thế quyền (truy đòi bồi hoàn từ người thứ ba) đối với ai sau đây, trừ khi người này cố ý gây ra tổn thất?",
    "options": [
      "Người làm công của bên mua bảo hiểm.",
      "Cha, mẹ, vợ, chồng, con, anh, chị, em ruột của người được bảo hiểm.",
      "Người thuê lại tài sản được bảo hiểm.",
      "Đơn vị vận chuyển hàng hóa độc lập."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 2 Điều 54 Luật KDBH 2022: DNBH không được yêu cầu cha, mẹ, vợ, chồng, con, anh, chị, em ruột của người được bảo hiểm bồi hoàn khoản tiền DNBH đã trả, trừ trường hợp những người này cố ý gây ra tổn thất."
  },
  {
    "id": "q-ts-27",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Từ bỏ quyền đòi bên thứ 3",
    "question": "Trường hợp người được bảo hiểm tự ý hủy bỏ hoặc từ bỏ quyền yêu cầu người thứ ba bồi thường mà không có sự đồng ý của DNBH thì xử lý thế nào?",
    "options": [
      "DNBH từ chối bồi thường toàn bộ hợp đồng bảo hiểm.",
      "DNBH được giảm trừ số tiền bồi thường tương ứng với phần thiệt hại mà đáng lẽ DNBH đòi được từ người thứ ba.",
      "DNBH vẫn bồi thường đủ và phạt người được bảo hiểm 10% giá trị hợp đồng.",
      "Hợp đồng bảo hiểm tài sản tự động bị đình chỉ hiệu lực 06 tháng."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 3 Điều 54 Luật KDBH 2022: Doanh nghiệp bảo hiểm được giảm trừ số tiền bồi thường tương ứng với mức độ thiệt hại mà đáng lẽ doanh nghiệp bảo hiểm được bồi hoàn từ người thứ ba."
  },
  {
    "id": "q-ts-28",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm dưới giá trị",
    "question": "Trong bảo hiểm tài sản dưới giá trị (STBH < Giá trị thị trường tài sản), khi xảy ra tổn thất bộ phận mà không có thỏa thuận khác thì bồi thường theo nguyên tắc:",
    "options": [
      "Bồi thường toàn bộ giá trị thiệt hại thực tế phát sinh.",
      "Bồi thường theo tỷ lệ giữa số tiền bảo hiểm và giá trị thị trường của tài sản tại thời điểm tổn thất.",
      "Bồi thường bằng 50% giá trị thiệt hại thực tế.",
      "Bồi thường tối đa bằng số tiền bảo hiểm trừ đi khấu hao tài sản."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 2 Điều 47 Luật KDBH 2022: Trường hợp bảo hiểm dưới giá trị, doanh nghiệp bảo hiểm chỉ chịu trách nhiệm bồi thường theo tỷ lệ giữa STBH và giá thị trường của tài sản tại thời điểm tổn thất."
  },
  {
    "id": "q-ts-29",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Chi phí hạn chế tổn thất",
    "question": "Doanh nghiệp bảo hiểm có phải thanh toán chi phí cần thiết, hợp lý mà bên mua đã chi ra để ngăn ngừa, hạn chế tổn thất khi xảy ra sự kiện bảo hiểm không?",
    "options": [
      "Chỉ thanh toán khi biện pháp đó đem lại kết quả cứu vãn được tài sản.",
      "Có, DNBH phải thanh toán dù biện pháp đó không mang lại kết quả.",
      "Không, bên mua bảo hiểm phải tự chi trả chi phí này.",
      "Chỉ thanh toán nếu chi phí này dưới 5% số tiền bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 2 Điều 55 Luật KDBH 2022: DNBH phải thanh toán chi phí cần thiết, hợp lý để ngăn ngừa, hạn chế tổn thất dù biện pháp đó không mang lại kết quả."
  },
  {
    "id": "q-ts-30",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Giám định tổn thất",
    "question": "Chi phí giám định tổn thất tài sản do bên nào chi trả theo quy định của Luật Kinh doanh bảo hiểm 2022?",
    "options": [
      "Bên mua bảo hiểm chi trả trước rồi thanh toán lại sau.",
      "Doanh nghiệp bảo hiểm chịu chi phí giám định tổn thất.",
      "Hai bên thỏa thuận chia đều chi phí giám định.",
      "Trừ trực tiếp vào số tiền bồi thường thiệt hại."
    ],
    "correctIndex": 1,
    "explanation": "Khoản 1 Điều 53 Luật KDBH 2022: Doanh nghiệp bảo hiểm chịu chi phí giám định tổn thất tài sản."
  },
  {
    "id": "q-ts-31",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Bảo hiểm trùng",
    "question": "Tài sản X có giá trị thị trường 10 tỷ đồng, được mua bảo hiểm trùng tại Công ty A (STBH 6 tỷ) và Công ty B (STBH 6 tỷ). Khi xảy ra tổn thất thực tế 4 tỷ đồng, Công ty A phải bồi thường bao nhiêu?",
    "options": [
      "4 tỷ đồng",
      "3 tỷ đồng",
      "2 tỷ đồng",
      "6 tỷ đồng"
    ],
    "correctIndex": 2,
    "explanation": "Tổng STBH = 6 + 6 = 12 tỷ. Tỷ lệ phân bổ bồi thường của Công ty A = 6 / 12 = 50%. Số tiền Công ty A bồi thường = 50% × 4 tỷ = 2 tỷ đồng. Công ty B bồi thường 2 tỷ. Tổng bồi thường = 4 tỷ (không vượt quá thiệt hại thực tế)."
  },
  {
    "id": "q-kt-31",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Thời hạn đơn CAR",
    "question": "Thời hạn bảo hiểm của Đơn bảo hiểm Mọi rủi ro xây dựng (CAR) theo chuẩn Munich Re bắt đầu và kết thúc khi nào?",
    "options": [
      "Bắt đầu từ ngày ký kết hợp đồng và kết thúc đúng 12 tháng sau.",
      "Bắt đầu từ ngày khởi công hoặc sau khi dỡ các hạng mục được bảo hiểm xuống công trường; kết thúc khi công trình được bàn giao hoặc đưa vào sử dụng.",
      "Bắt đầu khi mua bảo hiểm và kết thúc khi nghiệm thu móng công trình.",
      "Bắt đầu từ ngày cấp phép xây dựng và kết thúc khi thanh toán hợp đồng thi công."
    ],
    "correctIndex": 1,
    "explanation": "Quy tắc CAR (Munich Re): Thời hạn bảo hiểm bắt đầu từ lúc khởi công hoặc khi dỡ tài sản xuống công trường; và kết thúc khi công trình được bàn giao hoặc đưa vào sử dụng (tùy thời điểm nào đến trước)."
  },
  {
    "id": "q-kt-32",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Điều khoản bảo dưỡng CAR",
    "question": "Trong đơn bảo hiểm CAR, sự khác biệt căn bản giữa điều khoản Visits Maintenance và Extended Maintenance là gì?",
    "options": [
      "Visits Maintenance đền mọi nguyên nhân; Extended Maintenance chỉ đền do thiên tai.",
      "Visits Maintenance chỉ đền tổn thất do chính nhà thầu gây ra khi vào làm bảo dưỡng; Extended Maintenance đền cả tổn thất trong thời gian bảo dưỡng nhưng có nguyên nhân từ giai đoạn thi công.",
      "Visits Maintenance áp dụng cho máy móc; Extended Maintenance áp dụng cho con người.",
      "Hai điều khoản này có phạm vi trách nhiệm hoàn toàn trùng khớp nhau."
    ],
    "correctIndex": 1,
    "explanation": "Quy tắc CAR: Extended Maintenance mở rộng bảo hiểm cho tổn thất phát sinh trong thời gian bảo dưỡng nhưng có nguồn gốc căn nguyên xảy ra trong quá trình thi công tại công trường."
  },
  {
    "id": "q-kt-33",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Đơn CPM",
    "question": "Đơn bảo hiểm Máy móc thiết bị chủ thầu (CPM - Contractors Plant & Machinery) KHÔNG nhận bảo hiểm cho đối tượng nào?",
    "options": [
      "Máy xúc, máy ủi bánh xích thi công trên công trường.",
      "Cần cẩu tháp và thiết bị nâng hạ phục vụ công trường.",
      "Phương tiện cơ giới đường bộ được cấp phép lưu hành trên hệ thống đường giao thông công cộng.",
      "Máy ép cọc bê tông tại công trường."
    ],
    "correctIndex": 2,
    "explanation": "Quy tắc CPM Munich Re: Không bảo hiểm xe cơ giới đường bộ được cấp phép lưu hành công cộng (các xe này phải mua bảo hiểm xe cơ giới chuyên biệt)."
  },
  {
    "id": "q-kt-34",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Đổ vỡ máy móc MB",
    "question": "Đơn bảo hiểm Đổ vỡ máy móc (Machinery Breakdown - MB) theo chuẩn Munich Re bảo hiểm cho những tổn thất nào sau đây?",
    "options": [
      "Cháy, sét đánh và nổ hóa học bên ngoài.",
      "Hao mòn, rỉ sét tự nhiên theo thời gian của máy móc thiết bị.",
      "Hư hỏng bất ngờ về cơ khí hoặc điện phát sinh từ nguyên nhân bên trong máy như đoản mạch, lực ly tâm, thiếu dầu bôi trơn, sai sót vận hành.",
      "Chiến tranh, phóng xạ hạt nhân và trưng thu tài sản."
    ],
    "correctIndex": 2,
    "explanation": "Quy tắc MB Munich Re: Bảo hiểm các hư hại cơ điện phát sinh từ nguyên nhân nội tại bên trong máy móc khi đang vận hành hoặc nghỉ ngơi. Cháy, sét đánh, nổ hóa học thuộc phạm vi đơn bảo hiểm Cháy nổ."
  },
  {
    "id": "q-kt-35",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Gián đoạn kinh doanh ABI",
    "question": "Điều kiện tiên quyết để kích hoạt bồi thường theo Đơn bảo hiểm Gián đoạn kinh doanh (Business Interruption / Loss of Profits) là gì?",
    "options": [
      "Doanh nghiệp phải có lãi liên tục 3 năm trước sự cố.",
      "Thiệt hại vật chất của tài sản tại địa điểm bảo hiểm phải được chấp nhận bồi thường theo đơn bảo hiểm tài sản tương ứng.",
      "Doanh nghiệp phải dừng sản xuất hoàn toàn trên 30 ngày.",
      "Phải có chứng nhận tình trạng thiên tai của cơ quan nhà nước."
    ],
    "correctIndex": 1,
    "explanation": "Quy tắc ABI Gián đoạn kinh doanh: Bồi thường gián đoạn kinh doanh chỉ được kích hoạt khi tổn thất vật chất trực tiếp gây ra gián đoạn đã được công nhận và bồi thường theo đơn bảo hiểm tài sản."
  },
  {
    "id": "q-kt-36",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Đơn CECR",
    "question": "Đơn bảo hiểm Công trình dân dụng đã hoàn thành (CECR - Civil Engineering Completed Risks) bảo hiểm cho đối tượng nào?",
    "options": [
      "Công trình đang trong quá trình ép cọc thi công móng.",
      "Công trình hạ tầng kỹ thuật dân dụng (cầu, hầm, đê đập, đường sá) sau khi đã xây dựng xong và đưa vào vận hành sử dụng.",
      "Máy móc thiết bị đang tháo rời để vận chuyển đi nơi khác.",
      "Nhà xưởng đang trong giai đoạn lắp đặt dây chuyền thiết bị."
    ],
    "correctIndex": 1,
    "explanation": "Quy tắc CECR (Munich Re) tiếp nối sau đơn CAR: Dành riêng cho các công trình hạ tầng kỹ thuật dân dụng đã hoàn thành bàn giao và đang vận hành khai thác, định giá theo giá trị thay thế mới."
  },
  {
    "id": "q-gsc-1",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hoa hồng đại lý bảo hiểm được trả cho đối tượng nào dưới đây:",
    "options": [
      "Bên mua bảo hiểm.",
      "Người thụ hưởng.",
      "Đại lý bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-2",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào dưới đây sai khi nói về hoạt động mà đại lý bảo hiểm có thể được doanh nghiệp bảo hiểm ủy quyền thực hiện:",
    "options": [
      "Giới thiệu, chào bán sản phẩm bảo hiểm.",
      "Thu xếp việc giao kết hợp đồng bảo hiểm.",
      "Thu phí bảo hiểm.",
      "Thay mặt doanh nghiệp bảo hiểm ký kết hợp đồng bảo hiểm với bên mua bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-3",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Phát biểu nào dưới đây không đúng khi nói về vai trò kinh tế của bảo hiểm:",
    "options": [
      "Góp phần ổn định tài chính của tổ chức, cá nhân tham gia bảo hiểm.",
      "Đóng vai trò trung gian trong việc huy động vốn cho nền kinh tế quốc dân.",
      "Góp phần ổn định ngân sách quốc gia.",
      "Cung cấp tiền vốn cho người gặp rủi ro thay cho vay ngân hàng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-4",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào dưới đây đúng:",
    "options": [
      "Phí bảo hiểm là khoản tiền mà bên mua bảo hiểm phải đóng cho doanh nghiệp bảo hiểm theo quy định của pháp luật hoặc do các bên thỏa thuận trong hợp đồng bảo hiểm",
      "Người được bảo hiểm là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm",
      "A,B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-6",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng về quyền, nghĩa vụ của doanh nghiệp bảo hiểm:",
    "options": [
      "Có quyền thay đổi người thụ hưởng bảo hiểm.",
      "Có trách nhiệm điền thông tin vào giấy yêu cầu bảo hiểm.",
      "Trực tiếp chi trả hoa hồng bảo hiểm cho người được bảo hiểm.",
      "Cung cấp cho bên mua bảo hiểm bằng chứng giao kết hợp đồng bảo hiểm theo quy định tại Luật Kinh doanh bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-7",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về nghĩa vụ của bên mua bảo hiểm:",
    "options": [
      "Đóng phí bảo hiểm đầy đủ theo thời hạn và phương thức đã thỏa thuận trong hợp đồng bảo hiểm.",
      "Kê khai đầy đủ, trung thực mọi thông tin có liên quan đến hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm.",
      "Thông báo những trường hợp có thể làm tăng rủi ro hoặc làm phát sinh thêm trách nhiệm của doanh nghiệp bảo hiểm trong quá trình thực hiện hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm.",
      "Lựa chọn doanh nghiệp bảo hiểm có đủ năng lực tài chính để chi trả quyền lợi bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-8",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe, trong quá trình lưu thông, lái xe sử dụng rượu, bia có nồng độ cồn vượt quá quy định của pháp luật và gây tai nạn. Trong trường hợp này, doanh nghiệp bảo hiểm sẽ trả tiền bảo hiểm như thế nào:",
    "options": [
      "Không trả tiền bảo hiểm.",
      "Xem xét trả tiền bảo hiểm cho cả lái xe và người được bảo hiểm khác trên xe.",
      "Không trả tiền bảo hiểm cho lái xe nhưng xem xét trả tiền bảo hiểm cho người được bảo hiểm khác trên xe.",
      "Xem xét trả tiền bảo hiểm cho cả lái xe và người được bảo hiểm khác trên xe và chế tài một khoản tiền bồi thường đối với lái xe."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-9",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có các nghĩa vụ nào sau đây:",
    "options": [
      "Hưởng hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm",
      "Cung cấp thông tin khách hàng cho bên thứ ba mà không cần sự chấp thuận của khách hàng",
      "Không được tự ý kê khai thông tin cho bên mua bảo hiểm khi chưa có sự đồng ý của bên mua bảo hiểm",
      "A, B, C sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-10",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Trường hợp sự kiện bảo hiểm xảy ra trong thời gian gia hạn đóng phí và bên mua bảo hiểm chưa đóng đủ phí bảo hiểm, doanh nghiệp bảo hiểm có trách nhiệm chi trả quyền lợi bảo hiểm. Phát biểu trên là:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-11",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây không thuộc về quyền và nghĩa vụ của đại lý bảo hiểm:",
    "options": [
      "Đại lý bảo hiểm có quyền được hưởng hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm và các quyền lợi khác từ hoạt động đại lý bảo hiểm theo thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Đại lý bảo hiểm có thể chủ động giảm phí bảo hiểm, hoàn phí bảo hiểm để khuyến khích khách hàng mua bảo hiểm",
      "Đại lý bảo hiểm có quyền được cung cấp thông tin và điều kiện cần thiết để thực hiện hợp đồng đại lý bảo hiểm",
      "Đại lý bảo hiểm phải thực hiện nghĩa vụ trong hợp đồng đại lý bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-14",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không có quyền và nghĩa vụ nào sau đây:",
    "options": [
      "Hưởng hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm theo thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Thực hiện cam kết trong hợp đồng bảo hiểm được ký giữa bên mua bảo hiểm và doanh nghiệp bảo hiểm.",
      "Tư vấn, giới thiệu, chào bán sản phẩm bảo hiểm; cung cấp các thông tin về sản phẩm bảo hiểm, doanh nghiệp bảo hiểm đầy đủ, chính xác cho bên mua bảo hiểm.",
      "Thực hiện nghĩa vụ trong hợp đồng đại lý bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-15",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về quyền của doanh nghiệp bảo hiểm:",
    "options": [
      "Bồi thường cho người được bảo hiểm những thiệt hại thuộc trách nhiệm bảo hiểm khi xảy ra sự kiện bảo hiểm.",
      "Thu phí bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Yêu cầu bên mua bảo hiểm cung cấp đầy đủ, trung thực thông tin liên quan đến việc giao kết và thực hiện hợp đồng bảo hiểm.",
      "Từ chối trả tiền bảo hiểm cho người thụ hưởng hoặc từ chối bồi thường cho người được bảo hiểm trong trường hợp không thuộc phạm vi trách nhiệm bảo hiểm hoặc trường hợp loại trừ trách nhiệm bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-16",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất:",
    "options": [
      "Doanh nghiệp bảo hiểm được quyết định mức chi trả hoa hồng đại lý bảo hiểm",
      "Doanh nghiệp bảo hiểm được quyết định mức chi trả hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm và quyền lợi khác trong hợp đồng đại lý bảo hiểm không vượt quá mức tối đa theo quy định của Bộ trưởng Bộ Tài chính",
      "Doanh nghiệp bảo hiểm được quyết định mức chi trả thưởng, hỗ trợ đại lý bảo hiểm",
      "Doanh nghiệp bảo hiểm được quyết định mức chi trả quyền lợi khác trong hợp đồng đại lý bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-18",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng:",
    "options": [
      "Doanh nghiệp bảo hiểm có thể ủy quyền cho đại lý bảo hiểm thu phí bảo hiểm",
      "Cá nhân có quyền đồng thời làm đại lý bảo hiểm cho mọi doanh nghiệp bảo hiểm",
      "Đại lý bảo hiểm có thể được doanh nghiệp bảo hiểm ủy quyền ký kết hợp đồng bảo hiểm với bên mua bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-19",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về “Nguyên tắc bồi thường”:",
    "options": [
      "Số tiền bồi thường mà người được bảo hiểm nhận được không vượt quá thiệt hại thực tế trong sự kiện bảo hiểm, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm.",
      "Số tiền bồi thường mà người được bảo hiểm nhận được có thể lớn hơn thiệt hại thực tế trong sự kiện bảo hiểm.",
      "Số tiền bồi thường mà người được bảo hiểm nhận được tùy thuộc vào thỏa thuận giữa doanh nghiệp bảo hiểm và người được bảo hiểm trong hợp đồng bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-21",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng đại lý bảo hiểm không bắt buộc phải có nội dung nào dưới đây:",
    "options": [
      "Quyền và nghĩa vụ của doanh nghiệp bảo hiểm",
      "Ký quỹ, tài sản thế chấp của đại lý bảo hiểm",
      "Hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm và các quyền lợi khác (nếu có); Thời hạn hợp đồng; Phương thức giải quyết tranh chấp",
      "Phương thức giải quyết tranh chấp"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-22",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, cơ quan chịu trách nhiệm trước Chính phủ thực hiện quản lý nhà nước về hoạt động kinh doanh bảo hiểm là:",
    "options": [
      "Bộ Tài chính.",
      "Bộ Công Thương.",
      "Bộ Công an.",
      "Bộ Lao động - Thương binh và Xã hội."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-23",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án nào sau đây đúng:",
    "options": [
      "Đại lý bảo hiểm được hưởng hoa hồng đại lý bảo hiểm theo thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Đại lý bảo hiểm có quyền yêu cầu doanh nghiệp bảo hiểm hoàn trả tiền ký quỹ hoặc tài sản thế chấp theo thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Đại lý bảo hiểm là người đại diện cho bên mua bảo hiểm",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-27",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm được chi trả hoa hồng bảo hiểm cho đối tượng nào dưới đây:",
    "options": [
      "Đại lý bảo hiểm",
      "Doanh nghiệp môi giới bảo hiểm",
      "Bên mua bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-29",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, nội dung chủ yếu đào tạo chứng chỉ đại lý bảo hiểm bao gồm:",
    "options": [
      "Kiến thức chung về bảo hiểm; Pháp luật Việt Nam về hoạt động kinh doanh bảo hiểm",
      "Quy tắc đạo đức, ứng xử nghề nghiệp đại lý bảo hiểm; Quyền và nghĩa vụ của doanh nghiệp bảo hiểm, đại lý bảo hiểm trong hoạt động đại lý bảo hiểm",
      "Kỹ năng và thực hành hành nghề đại lý bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-31",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất về loại trừ bảo hiểm:",
    "options": [
      "Loại trừ bảo hiểm là loại trừ các rủi ro, tổn thất mà doanh nghiệp bảo hiểm không chịu trách nhiệm bồi thường, trả tiền bảo hiểm nếu xảy ra sự kiện bảo hiểm.",
      "Loại trừ bảo hiểm là loại trừ các rủi ro, tổn thất và chi phí phát sinh mà doanh nghiệp bảo hiểm không chịu trách nhiệm bồi thường, trả tiền bảo hiểm nếu xảy ra sự kiện bảo hiểm.",
      "Loại trừ bảo hiểm được căn cứ theo các điều kiện, điều khoản loại trừ bảo hiểm quy định trong Quy tắc bảo hiểm và các điều khoản sửa đổi, bổ sung (nếu có) kèm theo hợp đồng bảo hiểm.",
      "A, C đúng.",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-34",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Người có quyền chiếm hữu đối với tài sản thì có \"Quyền lợi có thể được bảo hiểm\" đối với tài sản đó:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-37",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây sai về quyền và nghĩa vụ của doanh nghiệp bảo hiểm:",
    "options": [
      "Doanh nghiệp bảo hiểm có quyền từ chối bồi thường, trả tiền bảo hiểm trong trường hợp không thuộc phạm vi trách nhiệm bảo hiểm theo thoả thuận trong hợp đồng bảo hiểm",
      "Doanh nghiệp bảo hiểm có quyền từ chối bồi thường, trả tiền bảo hiểm trong trường hợp loại trừ trách nhiệm bảo hiểm theo thoả thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm không được áp dụng loại trừ trách nhiệm bảo hiểm về việc chậm thông báo trong mọi trường hợp",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-41",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm sức khỏe với quyền lợi bảo hiểm thương tật do tai nạn, trường hợp người được bảo hiểm bị thương tật bộ phận do tai nạn, doanh nghiệp bảo hiểm sẽ chi trả số tiền nào sau đây?",
    "options": [
      "100% số tiền bảo hiểm.",
      "Số tiền chi trả tính theo bảng tỷ lệ bồi thường thương tật.",
      "Số tiền chi phí xét nghiệm do người được bảo hiểm yêu cầu.",
      "A, B, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-42",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không được thực hiện các hành vi nào sau đây:",
    "options": [
      "Thông tin, quảng cáo sai sự thật về nội dung, phạm vi hoạt động của doanh nghiệp bảo hiểm, điều kiện và điều khoản bảo hiểm làm tổn hại đến quyền, lợi ích hợp pháp của bên mua bảo hiểm.",
      "Ngăn cản bên mua bảo hiểm cung cấp các thông tin liên quan đến hợp đồng bảo hiểm.",
      "Tranh giành khách hàng dưới các hình thức ngăn cản, lôi kéo, mua chuộc, đe dọa nhân viên hoặc khách hàng của doanh nghiệp bảo hiểm khác.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-44",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng về bảo hiểm bắt buộc:",
    "options": [
      "Doanh nghiệp bảo hiểm được phép triển khai bảo hiểm bắt buộc không được từ chối bán khi tổ chức, cá nhân đáp ứng đủ điều kiện mua bảo hiểm bắt buộc theo quy định của pháp luật.",
      "Tổ chức, cá nhân thuộc đối tượng tham gia bảo hiểm bắt buộc có nghĩa vụ mua bảo hiểm bắt buộc và được lựa chọn tham gia bảo hiểm bắt buộc tại doanh nghiệp bảo hiểm được phép triển khai.",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-46",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Phát biểu nào sau đây là đúng nhất về rủi ro loại trừ:",
    "options": [
      "Là rủi ro không thể được bảo hiểm.",
      "Là rủi ro có thể được bảo hiểm nhưng doanh nghiệp bảo hiểm không chấp nhận bảo hiểm.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-48",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong khi lưu thông, xe A đâm xe B làm xe B mất kiểm soát và va chạm với người đi đường gây tai nạn. Nguyên nhân gây tai nạn cho người đi đường do xe A là nguyên nhân trực tiếp. Kết luận này là:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-50",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây sai:",
    "options": [
      "Bên mua bảo hiểm là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm.",
      "Bên mua bảo hiểm phải có quyền lợi có thể được bảo hiểm phù hợp với từng loại hợp đồng bảo hiểm theo quy định của Luật Kinh doanh bảo hiểm.",
      "Bên mua bảo hiểm là cá nhân được người thụ hưởng chỉ định để đóng phí bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Bên mua bảo hiểm có quyền lựa chọn doanh nghiệp bảo hiểm để giao kết hợp đồng bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-52",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trường hợp nào sau đây thuộc trách nhiệm bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe:",
    "options": [
      "Nước mưa chảy qua lỗ thủng bạt che làm hàng hóa bị tổn thất",
      "Xe bị nổ lốp gây tai nạn làm hàng hóa trên xe bị tổn thất",
      "Hàng hóa bị tổn thất do mốc trong quá trình vận chuyển.",
      "Hàng bị tổn thất do va đập vào nhau trong quá trình vận chuyển."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-53",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng nào sau đây được ủy quyền cho đại lý bảo hiểm trên cơ sở hợp đồng đại lý bảo hiểm để thực hiện các hoạt động đại lý bảo hiểm:",
    "options": [
      "Doanh nghiệp môi giới bảo hiểm",
      "Doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-55",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, vốn điều lệ của doanh nghiệp bảo hiểm là:",
    "options": [
      "Tổng số tiền do thành viên đã góp hoặc cam kết góp khi thành lập công ty trách nhiệm hữu hạn và được ghi vào điều lệ của doanh nghiệp bảo hiểm.",
      "Tổng giá trị mệnh giá cổ phần đã bán hoặc được đăng ký mua khi thành lập công ty cổ phần và được ghi vào điều lệ của doanh nghiệp bảo hiểm.",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-58",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có nghĩa vụ:",
    "options": [
      "Thực hiện các trách nhiệm phát sinh theo hợp đồng đại lý bảo hiểm đã giao kết",
      "Chịu sự kiểm tra, giám sát của cơ quan nhà nước có thẩm quyền đối với hoạt động đại lý bảo hiểm",
      "Báo cáo về việc đào tạo và sử dụng đại lý bảo hiểm theo quy định của Bộ trưởng Bộ Tài chính",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-60",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, cá nhân đã được cấp chứng chỉ đại lý bảo hiểm nhưng không hoạt động đại lý bảo hiểm trong thời hạn 03 năm liên tục, nếu muốn tiếp tục hoạt động đại lý bảo hiểm thì:",
    "options": [
      "Không phải thực hiện thi lấy chứng chỉ đại lý bảo hiểm mới",
      "Phải thực hiện thi lấy chứng chỉ đại lý bảo hiểm mới",
      "Không phải thực hiện thi lấy chứng chỉ đại lý bảo hiểm mới, tuy nhiên phải được doanh nghiệp bảo hiểm đào tạo lại kiến thức về bảo hiểm",
      "Không phải thực hiện thi lấy chứng chỉ đại lý bảo hiểm mới, tuy nhiên chỉ được bán một số sản phẩm bảo hiểm nhất định theo quy định của doanh nghiệp bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-61",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, nghiệp vụ bảo hiểm nào sau đây không phải nghiệp vụ bảo hiểm bắt buộc:",
    "options": [
      "Bảo hiểm cháy, nổ",
      "Bảo hiểm Hỏa hoạn và các rủi ro đặc biệt",
      "Bảo hiểm Trách nhiệm dân sự của chủ xe cơ giới",
      "Bảo hiểm Trách nhiệm nghề nghiệp môi giới bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-62",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, đối tượng bảo hiểm là:",
    "options": [
      "Tài sản theo quy định của Bộ luật dân sự.",
      "Sức khỏe, tuổi thọ, tính mạng con người.",
      "Trách nhiệm dân sự của người được bảo hiểm đối với người thứ ba.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-63",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phí bảo hiểm là:",
    "options": [
      "Khoản tiền mà doanh nghiệp bảo hiểm sẽ trả lại cho người được bảo hiểm khi rủi ro không xảy ra.",
      "Khoản tiền mà doanh nghiệp bảo hiểm sẽ trả lại cho người được bảo hiểm khi rủi ro xảy ra nhưng tổn thất thấp hơn phí bảo hiểm đã đóng.",
      "Khoản tiền mà bên mua bảo hiểm phải đóng cho doanh nghiệp bảo hiểm theo quy định của pháp luật hoặc do các bên thỏa thuận trong hợp đồng bảo hiểm.",
      "A, C đúng.",
      "B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-64",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm không có nghĩa vụ:",
    "options": [
      "Đóng phí bảo hiểm đầy đủ, đúng hạn theo thỏa thuận trong hợp đồng bảo hiểm",
      "Kê khai đầy đủ, trung thực mọi thông tin có liên quan đến hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm.",
      "Thông báo cho doanh nghiệp bảo hiểm những trường hợp có thể làm tăng rủi ro hoặc giảm rủi ro hoặc làm phát sinh thêm trách nhiệm của doanh nghiệp bảo hiểm trong quá trình thực hiện hợp đồng bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Thanh toán các khoản chi phí liên quan đến việc đánh giá rủi ro được bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-65",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm có quyền và nghĩa vụ:",
    "options": [
      "Thông báo cho doanh nghiệp bảo hiểm những trường hợp có thể làm tăng rủi ro trong quá trình thực hiện hợp đồng bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm",
      "Yêu cầu doanh nghiệp bảo hiểm cấp hóa đơn thu phí bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm và quy định của pháp luật có liên quan.",
      "Thanh toán các khoản chi phí liên quan đến việc đánh giá rủi ro được bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-66",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án nào không phải là quyền và nghĩa vụ của doanh nghiệp bảo hiểm:",
    "options": [
      "Thông báo những trường hợp làm tăng rủi ro của doanh nghiệp bảo hiểm",
      "Yêu cầu bên mua bảo hiểm cung cấp đầy đủ, trung thực thông tin liên quan đến việc giao kết và thực hiện hợp đồng bảo hiểm",
      "Cung cấp cho bên mua bảo hiểm bản yêu cầu bảo hiểm, bảng câu hỏi liên quan đến rủi ro được bảo hiểm, đối tượng bảo hiểm, quy tắc, điều kiện, điều khoản bảo hiểm",
      "Giải thích bằng văn bản lý do từ chối bồi thường, trả tiền bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-69",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Đáp án nào dưới đây sai:",
    "options": [
      "Bên mua bảo hiểm là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm.",
      "Bên mua bảo hiểm có thể đồng thời là người được bảo hiểm hoặc người thụ hưởng.",
      "Bên mua bảo hiểm và người được bảo hiểm không thể là người thụ hưởng.",
      "Người được bảo hiểm là cá nhân có tuổi thọ, tính mạng được bảo hiểm theo hợp đồng bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-70",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Chọn phương án đúng nhất: bảo hiểm sức khỏe có thể bảo hiểm cho các rủi ro nào sau đây?",
    "options": [
      "Tai nạn.",
      "Ốm đau, bệnh tật.",
      "Thai sản.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-71",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Chi phí nào sau đây được coi là chi phí y tế hợp lý, hợp lệ có thể được các doanh nghiệp bảo hiểm chi trả trong bảo hiểm sức khỏe?",
    "options": [
      "Chi phí mua các thực phẩm chức năng hỗ trợ điều trị theo chỉ định của bác sỹ.",
      "Chi phí phẫu thuật thẩm mĩ.",
      "Chi phí phẫu thuật nội trú do ốm đau, bệnh tật."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-72",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Nguyên tắc khoán được áp dụng cho:",
    "options": [
      "Bảo hiểm nhân thọ.",
      "Bảo hiểm tài sản.",
      "Bảo hiểm trách nhiệm.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-73",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây sai khi nói về nguyên tắc hoạt động của đại lý bảo hiểm:",
    "options": [
      "Cá nhân hoạt động đại lý bảo hiểm, nhân viên trong tổ chức hoạt động đại lý bảo hiểm chỉ được thực hiện hoạt động đại lý bảo hiểm đối với những sản phẩm bảo hiểm đã được đào tạo.",
      "Tổ chức không được đồng thời làm đại lý bảo hiểm cho doanh nghiệp bảo hiểm khác nếu không được chấp thuận bằng văn bản của doanh nghiệp bảo hiểm mà tổ chức đó đang làm đại lý.",
      "Cá nhân đã được cấp chứng chỉ đại lý bảo hiểm nhưng không hoạt động đại lý bảo hiểm trong thời hạn 03 năm liên tục phải thực hiện thi lấy chứng chỉ đại lý bảo hiểm mới trước khi hoạt động đại lý.",
      "Đại lý bảo hiểm có thể sửa đổi, bổ sung quy tắc, điều khoản bảo hiểm cho phù hợp với tình hình thực tế của khách hàng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-75",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm bắt buộc không bao gồm:",
    "options": [
      "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới",
      "Bảo hiểm cháy, nổ bắt buộc",
      "Bảo hiểm khám chữa bệnh bắt buộc"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-76",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về nghĩa vụ của doanh nghiệp bảo hiểm:",
    "options": [
      "Từ chối trả tiền bảo hiểm cho người thụ hưởng hoặc từ chối bồi thường cho người được bảo hiểm trong trường hợp không thuộc phạm vi trách nhiệm bảo hiểm hoặc trường hợp loại trừ trách nhiệm bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Cấp cho bên mua bảo hiểm giấy chứng nhận bảo hiểm, đơn bảo hiểm ngay sau khi giao kết hợp đồng bảo hiểm.",
      "Giải thích cho bên mua bảo hiểm về các điều kiện, điều khoản bảo hiểm; quyền, nghĩa vụ của bên mua bảo hiểm.",
      "Trả tiền bảo hiểm kịp thời cho người thụ hưởng hoặc bồi thường cho người được bảo hiểm khi xảy ra sự kiện bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-77",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Chọn phương án đúng về số tiền bồi thường trong đơn bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe:",
    "options": [
      "Số tiền bồi thường có thể vượt quá mức trách nhiệm bảo hiểm/vụ tổn thất.",
      "Số tiền bồi thường không được vượt quá mức trách nhiệm bảo hiểm/vụ tổn thất.",
      "Số tiền bồi thường không được vượt quá mức trách nhiệm bảo hiểm/Mỗi và mọi vụ tổn thất.",
      "A, B, C sai."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-78",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Rủi ro được coi là rủi ro có thể được bảo hiểm khi đáp ứng các điều kiện sau:",
    "options": [
      "Tổn thất phải ngẫu nhiên, bất ngờ.",
      "Phải đo được, định lượng được về tài chính.",
      "Phải có số đông.",
      "Không trái với chuẩn mực đạo đức xã hội.",
      "A, B, C, D đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-80",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, sản phẩm bảo hiểm nào sau đây là bảo hiểm bắt buộc:",
    "options": [
      "Bảo hiểm trách nhiệm dân sự của người vận chuyển hàng không đối với hành khách.",
      "Bảo hiểm trách nhiệm nghề nghiệp của doanh nghiệp môi giới bảo hiểm.",
      "Bảo hiểm cháy, nổ bắt buộc",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-81",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về bảo hiểm trùng:",
    "options": [
      "Đối tượng bảo hiểm được bảo vệ bằng ít nhất hai hợp đồng bảo hiểm.",
      "Rủi ro gây ra tổn thất thuộc rủi ro được bảo hiểm của một trong số các hợp đồng bảo hiểm cho đối tượng bảo hiểm đó.",
      "Các hợp đồng bảo hiểm phải có cùng phạm vi, đối tượng, thời hạn và sự kiện bảo hiểm.",
      "A, B đúng.",
      "A, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-82",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật về hoạt động kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về giới hạn trách nhiệm bảo hiểm trong bảo hiểm trách nhiệm:",
    "options": [
      "Trong phạm vi giới hạn trách nhiệm bảo hiểm, doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm những khoản tiền mà theo quy định của pháp luật người được bảo hiểm có trách nhiệm bồi thường cho người thứ ba.",
      "Doanh nghiệp bảo hiểm phải trả các cho người được bảo hiểm các chi phí liên quan đến việc giải quyết tranh chấp về trách nhiệm đối với người thứ ba.",
      "Tổng số tiền bồi thường của doanh nghiệp bảo hiểm không vượt quá giới hạn trách nhiệm bảo hiểm, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm.",
      "A, B, C đúng.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-83",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Phạm vi bảo hiểm của bảo hiểm trách nhiệm dân sự xe cơ giới là: Thiệt hại ngoài hợp đồng về thân thể, tính mạng và tài sản đối với bên thứ ba do xe cơ giới gây ra. Trách nhiệm bồi thường thiệt hại ngoài hợp đồng được hiểu là:",
    "options": [
      "Bên có nghĩa vụ dân sự đã cam kết trong hợp đồng mà không thực hiện hoặc thực hiện không đúng nghĩa vụ sẽ phải bồi thường cho bên kia.",
      "Hành vi gây hại không liên quan đến việc thực hiện nghĩa vụ dân sự của bất kỳ hợp đồng nào."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-84",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không được doanh nghiệp bảo hiểm uỷ quyền tiến hành hoạt động nào dưới đây:",
    "options": [
      "Giới thiệu, chào bán sản phẩm bảo hiểm.",
      "Thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Đánh giá rủi ro bảo hiểm.",
      "Thu phí bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-85",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào dưới đây sai:",
    "options": [
      "Hoạt động đại lý bảo hiểm là một hoặc một số hoạt động theo ủy quyền của doanh nghiệp bảo hiểm, bao gồm: tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Sự kiện bảo hiểm là sự kiện khách quan do các bên thỏa thuận hoặc pháp luật quy định mà khi sự kiện đó xảy ra thì doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Kinh doanh bảo hiểm là hoạt động của doanh nghiệp bảo hiểm nhằm mục đích sinh lợi, theo đó doanh nghiệp bảo hiểm nhận một khoản phí bảo hiểm của doanh nghiệp bảo hiểm khác để cam kết bồi thường cho các trách nhiệm đã nhận bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-91",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm dẫn đến tăng các rủi ro được bảo hiểm, căn cứ thỏa thuận tại hợp đồng bảo hiểm, doanh nghiệp bảo hiểm:",
    "options": [
      "Có quyền tính lại phí bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm",
      "Không có quyền tính lại phí bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm",
      "Có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm và không cần thông báo ngay bằng văn bản cho bên mua bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-92",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với tổn thất do hao mòn tự nhiên hoặc do bản chất vốn có của tài sản, doanh nghiệp bảo hiểm sẽ:",
    "options": [
      "Không chịu trách nhiệm bồi thường (trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm)",
      "Chịu trách nhiệm bồi thường 70% tổn thất",
      "Chịu trách nhiệm bồi thường 50% tổn thất",
      "Chịu trách nhiệm bồi thường 30% tổn thất"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-94",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất về số tiền bồi thường hoặc số tiền chi trả quyền lợi bảo hiểm:",
    "options": [
      "Đối với bảo hiểm tài sản: Là số tiền bồi thường/mỗi và mọi vụ tổn thất trong thời hạn bảo hiểm và có thể vượt quá số tiền bảo hiểm.",
      "Đối với bảo hiểm vật chất xe cơ giới: Là số tiền bồi thường/vụ tổn thất nhưng không vượt quá số tiền bảo hiểm, tổng số tiền bồi thường của tất cả các vụ tổn thất trong thời hạn bảo hiểm có thể vượt quá số tiền bảo hiểm.",
      "Đối với bảo hiểm tai nạn con người: Là số tiền phải trả căn cứ vào thương tật ước tính của người được bảo hiểm và thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-96",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp không có thỏa thuận về thời hạn bồi thường, trả tiền bảo hiểm, doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm trong thời hạn bao nhiêu ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm:",
    "options": [
      "15 ngày.",
      "30 ngày",
      "45 ngày",
      "60 ngày"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-97",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia sản phẩm bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, trường hợp người được bảo hiểm bị tai nạn sẽ không được chi trả khoản chi phí nào sau đây:",
    "options": [
      "Chi phí nằm viện do tai nạn.",
      "Chi phí di chuyển bằng xe cứu thương.",
      "Chi phí cho các xét nghiệm, kiểm tra chẩn đoán.",
      "Chi phí phát sinh do tai nạn xảy ra trước thời điểm mua bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-98",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia hợp đồng bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, người được bảo hiểm có thể được nhận quyền lợi bảo hiểm nào sau đây?",
    "options": [
      "Thương tật bộ phận vĩnh viễn do tai nạn.",
      "Trợ cấp mất, giảm thu nhập do tai nạn.",
      "Thai sản.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-99",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Bảo hiểm là phương pháp phòng tránh rủi ro nào sau đây:",
    "options": [
      "Giữ lại rủi ro.",
      "Né tránh rủi ro.",
      "Kiểm soát rủi ro.",
      "Chuyển giao rủi ro."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-104",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong thời hạn bảo hiểm của hợp đồng bảo hiểm thiệt hại vật chất xe cơ giới, trường hợp xe bị nổ lốp gây ra tai nạn dẫn đến tổn thất toàn bộ xe, doanh nghiệp bảo hiểm chi trả bồi thường như thế nào:",
    "options": [
      "Bồi thường toàn bộ thiệt hại.",
      "Bồi thường toàn bộ thiệt hại nhưng trừ chiếc lốp bị nổ.",
      "Bồi thường toàn bộ thiệt hại nhưng trừ toàn bộ lốp của xe bị tai nạn.",
      "A, B, C sai."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-106",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có các quyền nào sau đây:",
    "options": [
      "Lựa chọn và giao kết hợp đồng đại lý bảo hiểm đối với doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài, tổ chức tương hỗ cung cấp bảo hiểm vi mô theo quy định của pháp luật.",
      "Yêu cầu doanh nghiệp bảo hiểm hoàn trả tiền ký quỹ hoặc tài sản thế chấp theo thỏa thuận trong hợp đồng đại lý bảo hiểm.",
      "Sửa đổi, bổ sung điều khoản trong hợp đồng bảo hiểm theo ý kiến của bên mua bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-107",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về đối tượng được phép kinh doanh bảo hiểm sức khỏe có thời hạn trên 01 năm:",
    "options": [
      "Doanh nghiệp bảo hiểm nhân thọ.",
      "Doanh nghiệp bảo hiểm phi nhân thọ.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-108",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về nguyên tắc trung thực tuyệt đối:",
    "options": [
      "Chỉ áp dụng cho doanh nghiệp bảo hiểm.",
      "Chỉ áp dụng cho bên mua bảo hiểm.",
      "Là nghĩa vụ chung của cả doanh nghiệp bảo hiểm và bên mua bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-110",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về quyền của bên mua bảo hiểm:",
    "options": [
      "Lựa chọn doanh nghiệp bảo hiểm hoạt động tại Việt Nam để mua bảo hiểm.",
      "Yêu cầu doanh nghiệp bảo hiểm giải thích các điều kiện, điều khoản bảo hiểm; cấp giấy chứng nhận bảo hiểm hoặc đơn bảo hiểm.",
      "Chuyển giao hợp đồng bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm hoặc theo quy định của pháp luật.",
      "Thông báo những trường hợp có thể làm tăng rủi ro hoặc làm phát sinh thêm trách nhiệm của doanh nghiệp bảo hiểm trong quá trình thực hiện hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-112",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Chọn phương án đúng về bảo hiểm trách nhiệm bắt buộc:",
    "options": [
      "Bảo hiểm trách nhiệm công cộng.",
      "Bảo hiểm trách nhiệm sản phẩm.",
      "Bảo hiểm trách nhiệm dân sự chủ tàu.",
      "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-113",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Tổng số tiền bồi thường hàng hóa khi tham gia bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe và chi phí (chi phí ngăn ngừa tổn thất, chi phí bảo quản, xếp dỡ, lưu kho…) có thể vượt quá mức trách nhiệm bảo hiểm/vụ tổn thất (thuộc phạm vi bảo hiểm). Phát biểu trên là:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-114",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không được lựa chọn và giao kết hợp đồng đại lý bảo hiểm với đối tượng nào sau đây:",
    "options": [
      "Doanh nghiệp bảo hiểm",
      "Chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài",
      "Tổ chức tương hỗ cung cấp bảo hiểm vi mô theo quy định của pháp luật",
      "Văn phòng đại diện của doanh nghiệp bảo hiểm nước ngoài tại Việt Nam"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-115",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức, cá nhân tại Việt Nam có nhu cầu tham gia bảo hiểm (trừ trường hợp sử dụng dịch vụ bảo hiểm qua biên giới theo điều ước Quốc tế mà nước CHXHCN Việt Nam là thành viên) thì phương án nào sau đây đúng nhất:",
    "options": [
      "Được tham gia bảo hiểm tại doanh nghiệp bảo hiểm được cấp giấy phép thành lập và hoạt động tại Việt Nam.",
      "Được tham gia bảo hiểm tại chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài được cấp giấy phép thành lập và hoạt động tại Việt Nam.",
      "Được tham gia bảo hiểm tại tổ chức tương hỗ cung cấp bảo hiểm vi mô được cấp giấy phép thành lập và hoạt động tại Việt Nam",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-117",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong hợp đồng bảo hiểm nhân thọ, hợp đồng bảo hiểm sức khỏe, bên mua bảo hiểm có quyền lợi có thể được bảo hiểm đối với những người nào sau đây:",
    "options": [
      "Người có quyền lợi về tài chính hoặc quan hệ lao động với bên mua bảo hiểm.",
      "Người có quan hệ nuôi dưỡng, cấp dưỡng với bên mua bảo hiểm.",
      "Người được bảo hiểm đồng ý bằng văn bản cho bên mua bảo hiểm mua bảo hiểm sức khỏe cho mình.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-118",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, khoản tiền mà bên mua bảo hiểm phải đóng cho doanh nghiệp bảo hiểm theo quy định của pháp luật hoặc do các bên thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Số tiền bảo hiểm",
      "Phí bảo hiểm",
      "Giá trị bảo hiểm",
      "Số tiền bồi thường"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-119",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có các quyền nào trong hoạt động đại lý bảo hiểm:",
    "options": [
      "Quyết định mức chi trả hoa hồng đại lý bảo hiểm trong hợp đồng đại lý bảo hiểm không vượt quá mức tối đa theo quy định của Bộ trưởng Bộ Tài chính",
      "Nhận và quản lý tiền ký quỹ hoặc tài sản thế chấp của đại lý bảo hiểm nếu có thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Yêu cầu đại lý bảo hiểm thanh toán phí bảo hiểm thu được theo thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-120",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng về điều khoản loại trừ trách nhiệm bảo hiểm:",
    "options": [
      "Điều khoản loại trừ trách nhiệm bảo hiểm quy định các trường hợp doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài không phải bồi thường, trả tiền bảo hiểm.",
      "Điều khoản loại trừ trách nhiệm bảo hiểm quy định trường hợp doanh nghiệp bảo hiểm không phải trả tiền cho người thứ 3 khi người được bảo hiểm gây thiệt hại cho người thứ 3.",
      "Điều khoản loại trừ trách nhiệm bảo hiểm được quy định theo thông lệ quốc tế, không cần có trong hợp đồng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-121",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, cơ quan, tổ chức nào sau đây có trách nhiệm giám sát hoạt động đại lý bảo hiểm:",
    "options": [
      "Bộ Kế hoạch và Đầu tư",
      "Bộ Công Thương",
      "Bộ Tài chính",
      "Hiệp hội Bảo hiểm Việt Nam."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-122",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về hợp đồng bảo hiểm:",
    "options": [
      "Hợp đồng bảo hiểm hàng hải được áp dụng theo quy định của Bộ luật hàng hải; đối với những vấn đề mà Bộ luật hàng hải không quy định thì áp dụng theo quy định của Luật Kinh doanh bảo hiểm.",
      "Hợp đồng bảo hiểm hàng hải được áp dụng theo quy định của Luật kinh doanh bảo hiểm; đối với những vấn đề mà Luật kinh doanh bảo hiểm không quy định thì áp dụng theo quy định của Bộ luật hàng hải.",
      "Những vấn đề liên quan đến hợp đồng bảo hiểm không quy định trong Luật Kinh doanh bảo hiểm thì áp dụng theo quy định của Bộ luật dân sự và các quy định khác của pháp luật liên quan.",
      "A, C đúng",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-123",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Mức khấu trừ là khoản tiền mà người được bảo hiểm phải tự chịu và được khấu trừ từ số tiền mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm. Mức khấu trừ thường áp dụng cho (chọn phương án đúng nhất):",
    "options": [
      "Bảo hiểm tài sản.",
      "Bảo hiểm nhân thọ.",
      "Bảo hiểm chi phí y tế.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-124",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về “Nguyên tắc thế quyền”:",
    "options": [
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba có hành vi gây thiệt hại chịu trách nhiệm bồi hoàn trong phạm vi số tiền bồi thường bảo hiểm.",
      "Nguyên tắc thế quyền không áp dụng đối với hợp đồng bảo hiểm nhân thọ và hợp đồng bảo hiểm sức khỏe.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-125",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm không được áp dụng điều khoản loại trừ trách nhiệm bảo hiểm về việc chậm thông báo trong trường hợp nào sau đây:",
    "options": [
      "Bên mua bảo hiểm chậm thông báo sự kiện bảo hiểm trong mọi trường hợp.",
      "Bên mua bảo hiểm chậm thông báo sự kiện bảo hiểm do có sự kiện bất khả kháng",
      "Bên mua bảo hiểm chậm thông báo sự kiện bảo hiểm do có sự kiện trở ngại khách quan.",
      "B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-127",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm có quyền:",
    "options": [
      "Chuyển giao hợp đồng bảo hiểm theo quy định của pháp luật.",
      "Cung cấp cho bên mua bảo hiểm bằng chứng giao kết hợp đồng bảo hiểm",
      "Từ chối cung cấp thông tin có liên quan đến việc giao kết và thực hiện hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-129",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Thu phí bảo hiểm theo thoả thuận trong hợp đồng bảo hiểm",
      "Yêu cầu bên mua bảo hiểm cung cấp đầy đủ, trung thực mọi thông tin có liên quan đến việc giao kết và thực hiện hợp đồng bảo hiểm",
      "Bảo mật thông tin do bên mua bảo hiểm, người được bảo hiểm cung cấp",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-130",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng về cách thức quy định về loại trừ bảo hiểm:",
    "options": [
      "Loại trừ bảo hiểm được tự động thực hiện theo tập quán quốc tế.",
      "Loại trừ bảo hiểm được áp dụng theo quy tắc, điều khoản bảo hiểm do Hiệp hội bảo hiểm Việt Nam ban hành.",
      "Loại trừ bảo hiểm được căn cứ theo các điều kiện, điều khoản quy định trong Quy tắc bảo hiểm và các điều khoản sửa đổi, bổ sung (nếu có) kèm theo hợp đồng bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-132",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Khoản tiền mà bên mua bảo hiểm đóng cho doanh nghiệp bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Số tiền bảo hiểm.",
      "Phí bảo hiểm.",
      "Giá trị bảo hiểm.",
      "Số tiền bồi thường."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-133",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Chọn phương án đúng nhất về các điểm loại trừ thông thường trong một sản phẩm chăm sóc sức khỏe:",
    "options": [
      "Hỗ trợ sinh sản.",
      "Rối loạn tâm lý, trầm cảm.",
      "Tiêm phòng, tiêm chủng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-134",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Người được bảo hiểm tham gia hợp đồng bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, do tự vệ nên đã tham gia đánh nhau dẫn đến thương tật bộ phận. Trong trường hợp này, doanh nghiệp bảo hiểm có chi trả bảo hiểm cho người được bảo hiểm không?",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-135",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm trong trường hợp nào sau đây:",
    "options": [
      "Bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm.",
      "Bên mua bảo hiểm không còn quyền lợi có thể được bảo hiểm.",
      "Bên mua bảo hiểm không đóng phí bảo hiểm hoặc không đóng đủ phí bảo hiểm theo thời hạn thỏa thuận hoặc sau thời gian gia hạn đóng phí.",
      "B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-136",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe: Do lái xe bảo quản không cẩn thận hàng hóa sau tổn thất dẫn đến hàng bị mất cắp. Trường hợp này, doanh nghiệp bảo hiểm có bồi thường cho người được bảo hiểm không?",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-139",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm bắt buộc là sản phẩm bảo hiểm nhằm mục đích:",
    "options": [
      "Bảo vệ lợi ích của người tham gia bảo hiểm.",
      "Bảo vệ lợi ích công cộng, môi trường và an toàn xã hội.",
      "Bảo vệ lợi ích của doanh nghiệp bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-140",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về việc xác định số tiền mà doanh nghiệp bảo hiểm phải chi trả theo “Nguyên tắc khoán” khi xảy ra sự kiện bảo hiểm:",
    "options": [
      "Số tiền đã được thỏa thuận tại hợp đồng bảo hiểm.",
      "Số tiền thiệt hại thực tế.",
      "Số tiền chênh lệch giữa số tiền bảo hiểm thỏa thuận tại hợp đồng bảo hiểm và thiệt hại thực tế.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-141",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm trách nhiệm, trách nhiệm của doanh nghiệp bảo hiểm phát sinh khi:",
    "options": [
      "Người thứ ba yêu cầu người được bảo hiểm bồi thường do có hành vi gây thiệt hại cho người thứ ba trong thời hạn bảo hiểm.",
      "Người thứ ba yêu cầu người được bảo hiểm bồi thường do có hành vi gây thiệt hại cho người thứ ba",
      "Doanh nghiệp bảo hiểm yêu cầu người được bảo hiểm bồi thường do có hành vi gây thiệt hại cho người thứ ba trong thời hạn bảo hiểm.",
      "A,B,C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-142",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án sai:",
    "options": [
      "Bên mua bảo hiểm có thể đồng thời là người được bảo hiểm hoặc người thụ hưởng.",
      "Người được bảo hiểm có thể đồng thời là người thụ hưởng.",
      "Người thụ hưởng được bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Đại lý bảo hiểm và môi giới bảo hiểm đại diện cho doanh nghiệp bảo hiểm và được hưởng hoa hồng bảo hiểm do doanh nghiệp bảo hiểm chi trả."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-144",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Phát biểu sau là đúng hay sai: \"Trong quá trình vận chuyển súc vật sống nếu bị ốm, chết do dịch bệnh thì doanh nghiệp bảo hiểm có trách nhiệm bồi thường thiệt hại cho chủ hàng\":",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-146",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong thời hạn bảo hiểm của hợp đồng bảo hiểm thiệt hại vật chất xe ô tô, trường hợp xe bị tai nạn dẫn đến thiệt hại và lốp xe bị nổ, xe bị tổn thất toàn bộ, doanh nghiệp bảo hiểm chi trả bồi thường như thế nào:",
    "options": [
      "Bồi thường toàn bộ thiệt hại bao gồm cả chiếc lốp bị nổ.",
      "Bồi thường toàn bộ thiệt hại trừ chiếc lốp bị nổ."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-147",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về sự kiện bảo hiểm:",
    "options": [
      "Là sự kiện chủ quan do các bên thỏa thuận mà khi sự kiện đó xảy ra thì doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Là sự kiện khách quan do các bên thỏa thuận mà khi sự kiện đó xảy ra thì doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Là sự kiện do pháp luật quy định mà khi sự kiện đó xảy ra thì doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-152",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, kinh doanh bảo hiểm bao gồm hoạt động nào sau đây:",
    "options": [
      "Hoạt động của doanh nghiệp bảo hiểm chấp nhận rủi ro của người được bảo hiểm, trên cơ sở bên mua bảo hiểm đóng phí bảo hiểm để bồi thường, trả tiền bảo hiểm khi xảy ra sự kiện bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Hoạt động của doanh nghiệp bảo hiểm nhằm mục đích sinh lợi, theo đó doanh nghiệp bảo hiểm nhận một khoản phí bảo hiểm của doanh nghiệp bảo hiểm khác để cam kết bồi thường cho các trách nhiệm đã nhận bảo hiểm.",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-154",
    "category": "Bẫy luật & Pháp luật mới",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về hành vi bị nghiêm cấm trong hoạt động kinh doanh bảo hiểm:",
    "options": [
      "Cấu kết giữa các doanh nghiệp bảo hiểm hoặc giữa doanh nghiệp bảo hiểm với bên mua bảo hiểm nhằm phân chia thị trường bảo hiểm, khép kín dịch vụ bảo hiểm.",
      "Can thiệp trái pháp luật vào việc lựa chọn doanh nghiệp bảo hiểm.",
      "Lợi dụng chức vụ, quyền hạn chỉ định, yêu cầu, ép buộc, ngăn cản tổ chức, cá nhân tham gia bảo hiểm.",
      "Đe dọa, cưỡng ép giao kết hợp đồng bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-156",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, việc chuyển giao danh mục hợp đồng bảo hiểm phải kèm theo việc chuyển giao các đối tượng nào dưới đây của toàn bộ danh mục hợp đồng bảo hiểm được chuyển giao:",
    "options": [
      "Tài sản tương ứng với dự phòng nghiệp vụ.",
      "Quỹ dự trữ bắt buộc",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-157",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có nghĩa vụ nào sau đây:",
    "options": [
      "Cung cấp các thông tin về sản phẩm bảo hiểm và giải thích rõ ràng, đầy đủ về quyền lợi bảo hiểm, điều khoản loại trừ trách nhiệm bảo hiểm",
      "Giữ bí mật thông tin khách hàng, sử dụng thông tin khách hàng đúng mục đích và không được cung cấp cho bên thứ ba mà không có sự chấp thuận của khách hàng, trừ trường hợp cung cấp theo quy định của pháp luật",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-158",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm bắt buộc bao gồm:",
    "options": [
      "Bảo hiểm bắt buộc tai nạn người ngồi trên xe cơ giới",
      "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Bảo hiểm bắt buộc thiệt hại vật chất xe cơ giới.",
      "A, B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-159",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm có quyền hủy bỏ hợp đồng và được hoàn lại phí bảo hiểm đã đóng trong trường hợp nào sau đây:",
    "options": [
      "Doanh nghiệp bảo hiểm cố ý không thực hiện nghĩa vụ cung cấp thông tin nhằm giao kết hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm cung cấp thông tin sai sự thật nhằm giao kết hợp đồng bảo hiểm.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-160",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Bên mua bảo hiểm có thể thỏa thuận thanh toán phí bảo hiểm cho doanh nghiệp bảo hiểm theo quy định và phương thức sau:",
    "options": [
      "Thanh toán một lần.",
      "Thanh toán làm nhiều kỳ.",
      "Thời hạn thanh toán phí bảo hiểm không được vượt quá thời hạn bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-161",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý bảo hiểm, gây thiệt hại đến quyền, lợi ích hợp pháp của người được bảo hiểm thì:",
    "options": [
      "Doanh nghiệp bảo hiểm vẫn phải chịu trách nhiệm thực hiện các nghĩa vụ theo thỏa thuận trong hợp đồng bảo hiểm do đại lý bảo hiểm thu xếp giao kết",
      "Hợp đồng đại lý bảo hiểm tự động chấm dứt",
      "Đại lý bảo hiểm phải bồi hoàn cho doanh nghiệp bảo hiểm các khoản tiền mà doanh nghiệp bảo hiểm đã bồi thường cho người được bảo hiểm, bên mua bảo hiểm",
      "A, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-163",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm sức khỏe với quyền lợi bảo hiểm thương tật toàn bộ vĩnh viễn do tai nạn, trường hợp người được bảo hiểm bị mất hai bàn tay do tai nạn, doanh nghiệp bảo hiểm sẽ chi trả số tiền nào sau đây:",
    "options": [
      "200% số tiền bảo hiểm.",
      "100% số tiền bảo hiểm.",
      "50% số tiền bảo hiểm.",
      "20% số tiền bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-164",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, sản phẩm bảo hiểm nào sau đây không phải là bảo hiểm bắt buộc:",
    "options": [
      "Bảo hiểm cháy, nổ bắt buộc.",
      "Bảo hiểm bắt buộc trách nhiệm nghề nghiệp.",
      "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Bảo hiểm bắt buộc trong hoạt động đầu tư xây dựng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-166",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm có thể mua bảo hiểm sức khỏe cho những người nào sau đây (Chọn phương án đúng nhất):",
    "options": [
      "Người được bảo hiểm đồng ý bằng văn bản cho bên mua bảo hiểm mua bảo hiểm sức khỏe cho mình",
      "Anh ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng với bên mua bảo hiểm",
      "Người có quyền lợi về tài chính với bên mua bảo hiểm",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-168",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng nào dưới đây KHÔNG được thực hiện hoạt động kinh doanh bảo hiểm tại Việt Nam:",
    "options": [
      "Văn phòng đại diện của doanh nghiệp bảo hiểm nước ngoài tại Việt Nam",
      "Văn phòng đại diện của doanh nghiệp môi giới bảo hiểm nước ngoài tại Việt Nam",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-169",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không có các nghĩa vụ nào sau đây:",
    "options": [
      "Thực hiện cam kết trong hợp đồng bảo hiểm được ký giữa bên mua bảo hiểm và doanh nghiệp bảo hiểm",
      "Ký quỹ hoặc thế chấp tài sản cho doanh nghiệp bảo hiểm nếu có thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Chịu sự kiểm tra, giám sát của doanh nghiệp bảo hiểm",
      "Tham dự các khóa đào tạo, cập nhật kiến thức do doanh nghiệp bảo hiểm tổ chức"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-170",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm thiệt hại vật chất xe cơ giới, khi xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm bồi thường cho người được bảo hiểm những trường hợp thiệt hại, chi phí nào sau đây:",
    "options": [
      "Đâm va, lật đổ, chìm, rơi toàn bộ xe.",
      "Mất toàn bộ xe do trộm, cướp.",
      "Chi phí cứu hộ và vận chuyển xe bị thiệt hại tới nơi sửa chữa gần nhất.",
      "A, B, C đúng.",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-171",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có thể được doanh nghiệp bảo hiểm ủy quyền thực hiện hoạt động nào sau đây:",
    "options": [
      "Sửa đổi, bổ sung quy tắc, điều khoản bảo hiểm cho phù hợp với tình hình thực tế của bên mua bảo hiểm",
      "Giảm phí bảo hiểm để khuyến khích bên mua bảo hiểm tham gia bảo hiểm.",
      "Giới thiệu, chào bán sản phẩm bảo hiểm.",
      "Giám định tổn thất."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-174",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Nguyên tắc thế quyền được hiểu thế nào là đúng nhất:",
    "options": [
      "Người được bảo hiểm có trách nhiệm chuyển giao cho doanh nghiệp bảo hiểm quyền yêu cầu người thứ ba có hành vi gây thiệt hại chịu trách nhiệm bồi hoàn trong phạm vi số tiền bồi thường bảo hiểm.",
      "Doanh nghiệp bảo hiểm có quyền truy đòi người thứ ba gây thiệt hại trong phạm vi số tiền đã bồi thường cho người được bảo hiểm.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-175",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hoạt động đại lý bảo hiểm là:",
    "options": [
      "Một hoặc một số hoạt động theo ủy quyền của doanh nghiệp bảo hiểm, bao gồm: tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Một hoặc một số hoạt động theo ủy quyền của bên mua bảo hiểm, bao gồm: tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-176",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Tiêu chí nào sau đây không phải là tiêu chí đánh giá rủi ro:",
    "options": [
      "Mức độ rủi ro.",
      "Nguy cơ rủi ro.",
      "Tần suất xuất hiện rủi ro."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-179",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hoạt động đại lý bảo hiểm bao gồm hoạt động nào sau đây:",
    "options": [
      "Tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Giới thiệu, chào bán bảo hiểm, giám định bảo hiểm, trả tiền bảo hiểm.",
      "Giới thiệu, chào bán bảo hiểm, giải quyết bồi thường bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-180",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, người được bảo hiểm không may bị tai nạn khi tham gia vào các cuộc thi đấu có tính chất chuyên nghiệp như đua ngựa, đua xe (Hợp đồng bảo hiểm không có điều khoản sửa đổi bổ sung về bảo hiểm rủi ro tai nạn khi tham gia vào các cuộc thi đấu có tính chất chuyên nghiệp). Phương án giải quyết quyền lợi bảo hiểm nào sau đây đúng:",
    "options": [
      "Số tiền bảo hiểm theo tỷ lệ thương tật do tai nạn.",
      "Chi phí y tế điều trị tai nạn.",
      "Không thuộc phạm vi trách nhiệm bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-181",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp bên mua bảo hiểm có lý do chính đáng trong việc chậm thông báo cho doanh nghiệp bảo hiểm về việc xảy ra sự kiện bảo hiểm, có áp dụng điều khoản loại trừ trách nhiệm bảo hiểm không:",
    "options": [
      "Có.",
      "Không"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-182",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật về hoạt động kinh doanh bảo hiểm, đối tượng nào có nghĩa vụ thanh toán hoa hồng theo thỏa thuận trong hợp đồng đại lý bảo hiểm:",
    "options": [
      "Doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-184",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu: \"Hợp đồng bảo hiểm vô hiệu do bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm tại thời điểm giao kết hợp đồng\" là:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-185",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, đối với điều khoản loại trừ trách nhiệm bảo hiểm, doanh nghiệp bảo hiểm phải:",
    "options": [
      "Quy định rõ trong hợp đồng bảo hiểm.",
      "Giải thích rõ ràng, đầy đủ cho bên mua bảo hiểm về điều khoản loại trừ bảo hiểm khi giao kết hợp đồng bảo hiểm.",
      "Có bằng chứng xác nhận việc bên mua bảo hiểm đã được doanh nghiệp bảo hiểm giải thích đầy đủ và hiểu rõ về điều khoản loại trừ bảo hiểm khi giao kết hợp đồng bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-186",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, các tổ chức kinh doanh bảo hiểm không bao gồm đối tượng nào sau đây:",
    "options": [
      "Hợp tác xã bảo hiểm",
      "Tổ chức cung cấp bảo hiểm vi mô",
      "Doanh nghiệp bảo hiểm",
      "Chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-187",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm được gọi là:",
    "options": [
      "Người được bảo hiểm.",
      "Bên mua bảo hiểm.",
      "Đại lý bảo hiểm.",
      "Người thụ hưởng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-188",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe: Trong quá trình vận chuyển, do xếp hàng không đúng quy cách nên hàng va đập vào nhau và bị tổn thất. Trường hợp này có thuộc phạm vi bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-189",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có quyền:",
    "options": [
      "Ngăn cản bên mua bảo hiểm cung cấp các thông tin liên quan đến hợp đồng bảo hiểm",
      "Tư vấn cho bên mua bảo hiểm, người được bảo hiểm không kê khai các thông tin liên quan đến hợp đồng bảo hiểm",
      "Tiết lộ thông tin liên quan đến bên mua bảo hiểm cho bên thứ ba",
      "Hưởng hoa hồng đại lý bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-190",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Bồi thường bảo hiểm trách nhiệm dân sự của chủ xe đối với hàng hóa trên xe/vụ tổn thất được hiểu là:",
    "options": [
      "Trong mọi trường hợp, tổng số tiền bồi thường không được vượt quá mức trách nhiệm bảo hiểm/vụ tổn thất",
      "Không giới hạn số lượng các vụ tổn thất trong suốt thời hạn bảo hiểm.",
      "Trường hợp trong thời hạn bảo hiểm xảy ra nhiều vụ tổn thất, tổng số tiền bồi thường hàng hóa bị tổn thất trong suốt thời hạn bảo hiểm không vượt quá tổng mức trách nhiệm bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-196",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về “Nguyên tắc nguyên nhân trực tiếp”:",
    "options": [
      "Tổn thất thuộc trách nhiệm bảo hiểm phải phát sinh trực tiếp bởi một rủi ro được bảo hiểm.",
      "Nguyên nhân trực tiếp không nhất thiết phải là nguyên nhân ban đầu hay nguyên nhân gần nhất gây ra tổn thất.",
      "Nguyên nhân trực tiếp là nguyên nhân chi phối và có tác động gây ra tổn thất.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-197",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm sức khỏe là loại hình bảo hiểm cho trường hợp:",
    "options": [
      "Người được bảo hiểm sống đến một thời hạn nhất định.",
      "Người được bảo hiểm chết trong một thời hạn nhất định.",
      "Người được bảo hiểm bị thương tật, tai nạn, ốm đau, bệnh tật hoặc chết vào bất kỳ thời điểm nào trong suốt cuộc đời của người đó.",
      "Người được bảo hiểm bị thương tật, tai nạn, ốm đau, bệnh tật hoặc chăm sóc sức khỏe."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-198",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng nào sau đây chỉ định người thụ hưởng để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm:",
    "options": [
      "Bên mua bảo hiểm",
      "Người được bảo hiểm",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-200",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không được tranh giành khách hàng dưới các hình thức ngăn cản, lôi kéo, mua chuộc, đe dọa nhân viên hoặc khách hàng của:",
    "options": [
      "Doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài khác.",
      "Tổ chức tương hỗ cung cấp bảo hiểm vi mô khác.",
      "Đại lý bảo hiểm, doanh nghiệp môi giới bảo hiểm khác",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-201",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp các bên giao kết hợp đồng bảo hiểm trùng, khi xảy ra sự kiện bảo hiểm thì:",
    "options": [
      "Số tiền bồi thường của mỗi hợp đồng bảo hiểm được tính tương ứng theo tỷ lệ giữa số tiền bảo hiểm đã thoả thuận trên tổng số tiền bảo hiểm của tất cả các hợp đồng mà bên mua bảo hiểm đã giao kết. Tổng số tiền bồi thường của các hợp đồng bảo hiểm không vượt quá giá trị thiệt hại thực tế của tài sản.",
      "Số tiền bồi thường của mỗi hợp đồng bảo hiểm được tính tương ứng theo tỷ lệ giữa số tiền bảo hiểm đã thoả thuận trên tổng số tiền bảo hiểm của tất cả các hợp đồng mà bên mua bảo hiểm đã giao kết. Tổng số tiền bồi thường của các hợp đồng bảo hiểm có thể lớn hơn giá trị thiệt hại thực tế của tài sản.",
      "Số tiền bồi thường của mỗi hợp đồng bảo hiểm được doanh nghiệp bảo hiểm chi trả theo tỷ lệ bằng nhau trên tổng số tiền bảo hiểm của tất cả các hợp đồng mà bên mua bảo hiểm đã giao kết. Tổng số tiền bồi thường của các hợp đồng bảo hiểm không vượt quá giá trị thiệt hại thực tế của tài sản.",
      "Số tiền bồi thường của mỗi hợp đồng bảo hiểm được chi trả theo thiệt hại thực tế đã thoả thuận trên tổng số tiền bảo hiểm của tất cả các hợp đồng mà bên mua bảo hiểm đã giao kết."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-202",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Rủi ro có thể được bảo hiểm và được doanh nghiệp bảo hiểm chấp nhận bảo hiểm là rủi ro được bảo hiểm:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-204",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Phát biểu sau là đúng hay sai:\"Theo Luật Kinh doanh bảo hiểm, trường hợp hợp đồng bảo hiểm có điều khoản không rõ ràng dẫn đến có cách hiểu khác nhau thì điều khoản đó được giải thích theo hướng có lợi cho doanh nghiệp bảo hiểm\".",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-205",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong hợp đồng bảo hiểm sức khỏe, trường hợp người được bảo hiểm bị thương tật hoặc đau ốm do hành vi trực tiếp hoặc gián tiếp của người thứ ba gây ra thì:",
    "options": [
      "Doanh nghiệp bảo hiểm vẫn có nghĩa vụ bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm và được quyền yêu cầu người thứ ba bồi hoàn khoản tiền mà doanh nghiệp bảo hiểm đã trả cho người thụ hưởng",
      "Doanh nghiệp bảo hiểm có quyền từ chối bồi thường và yêu cầu người thứ ba bồi thường trực tiếp cho người được bảo hiểm.",
      "Doanh nghiệp bảo hiểm vẫn có nghĩa vụ bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm mà không có quyền yêu cầu người thứ ba bồi hoàn khoản tiền mà doanh nghiệp bảo hiểm đã trả cho người thụ hưởng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-206",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng bảo hiểm của hợp đồng bảo hiểm trách nhiệm là:",
    "options": [
      "Trách nhiệm dân sự của người được bảo hiểm đối với doanh nghiệp bảo hiểm theo quy định của pháp luật.",
      "Trách nhiệm dân sự của người được bảo hiểm đối với bên mua bảo hiểm theo quy định của pháp luật.",
      "Trách nhiệm dân sự của người được bảo hiểm đối với người thứ ba theo quy định của pháp luật.",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-207",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp đơn phương chấm dứt thực hiện hợp đồng bảo hiểm do bên mua bảo hiểm không đóng phí bảo hiểm hoặc không đóng đủ phí bảo hiểm theo thời hạn thỏa thuận hoặc sau thời gian gia hạn đóng phí, bên mua bảo hiểm vẫn phải đóng đủ phí bảo hiểm đến thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm. Quy định này được áp dụng đối với:",
    "options": [
      "Hợp đồng bảo hiểm trách nhiệm.",
      "Hợp đồng bảo hiểm tài sản.",
      "Hợp đồng bảo hiểm nhân thọ (trừ hợp đồng bảo hiểm nhóm).",
      "A,B đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-208",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Bên mua bảo hiểm có thể là:",
    "options": [
      "Người được bảo hiểm.",
      "Người thụ hưởng.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-209",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Khi giao kết hợp đồng bảo hiểm, bên mua bảo hiểm có quyền và nghĩa vụ:",
    "options": [
      "Có quyền yêu cầu doanh nghiệp bảo hiểm giải thích các điều kiện, điều khoản bảo hiểm.",
      "Có nghĩa vụ kê khai đầy đủ, trung thực mọi thông tin có liên quan đến hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm.",
      "Có nghĩa vụ đóng phí bảo hiểm đầy đủ, đúng hạn theo thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-215",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên nhận phí bảo hiểm để bồi thường, trả tiền bảo hiểm khi xảy ra sự kiện bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Doanh nghiệp môi giới bảo hiểm",
      "Đại lý bảo hiểm.",
      "Doanh nghiệp bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-216",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng về trường hợp đơn phương chấm dứt hợp đồng bảo hiểm của doanh nghiệp bảo hiểm:",
    "options": [
      "Bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm.",
      "Bên mua bảo hiểm không còn quyền lợi có thể được bảo hiểm.",
      "Bên mua bảo hiểm không đóng phí bảo hiểm hoặc không đóng đủ phí bảo hiểm theo thời hạn thỏa thuận hoặc sau thời gian gia hạn đóng phí.",
      "A, B, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-217",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào dưới đây đúng nhất:",
    "options": [
      "Người được bảo hiểm là tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm",
      "Người thụ hưởng là tổ chức, cá nhân được bên mua bảo hiểm hoặc người được bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-218",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trừ trường hợp có thỏa thuận trong hợp đồng bảo hiểm, thời hạn bồi thường, trả tiền bảo hiểm là:",
    "options": [
      "21 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường.",
      "15 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường.",
      "30 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường.",
      "1 năm kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-219",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm có thể lựa chọn và ký kết hợp đồng đại lý bảo hiểm với:",
    "options": [
      "Tổ chức tương hỗ cung cấp bảo hiểm vi mô theo quy định của pháp luật",
      "Văn phòng đại diện doanh nghiệp bảo hiểm nước ngoài tại Việt Nam",
      "Doanh nghiệp môi giới bảo hiểm",
      "Chi nhánh doanh nghiệp bảo hiểm nhân thọ nước ngoài"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-220",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật về hoạt động kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có phải chịu sự kiểm tra giám sát của cơ quan nhà nước có thẩm quyền đối với hoạt động do đại lý bảo hiểm của doanh nghiệp bảo hiểm thực hiện không?",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-221",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Ông A tham gia bảo hiểm chi phí y tế, thời hạn 01 năm kể từ ngày 01/01/2023. Hợp đồng bảo hiểm có thỏa thuận về áp dụng thời gian chờ là 30 ngày đối với trường hợp điều trị bệnh thông thường. Ngày 15/01/2023, ông A bị đau dạ dày phải nhập viện phẫu thuật. Đợt điều trị kéo dài 07 ngày. Trường hợp này doanh nghiệp bảo hiểm chi trả quyền lợi bảo hiểm nào sau đây?",
    "options": [
      "Quyền lợi trợ cấp nằm viện.",
      "Quyền lợi chi phí y tế thực tế.",
      "Quyền lợi phẫu thuật.",
      "Không chi trả."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-222",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Quy luật số đông được hiểu là (chọn phương án đúng nhất):",
    "options": [
      "Số lượng đủ lớn các đối tượng được bảo hiểm nhằm bù đắp cho số ít đối tượng đó bị tổn thất trong thời hạn bảo hiểm.",
      "Các đối tượng bảo hiểm phải đồng nhất.",
      "Các đối tượng bảo hiểm phải độc lập với nhau.",
      "A, C đúng.",
      "A, B, C đúng"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-223",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp doanh nghiệp bảo hiểm cố ý không thực hiện nghĩa vụ cung cấp thông tin hoặc cung cấp thông tin sai sự thật nhằm giao kết hợp đồng bảo hiểm thì:",
    "options": [
      "Bên mua bảo hiểm có quyền hủy bỏ hợp đồng bảo hiểm; Doanh nghiệp bảo hiểm không phải bồi thường thiệt hại phát sinh cho bên mua bảo hiểm do cung cấp thông tin sai sự thật.",
      "Bên mua bảo hiểm có quyền hủy bỏ hợp đồng bảo hiểm; Doanh nghiệp bảo hiểm phải bồi thường thiệt hại phát sinh cho bên mua bảo hiểm do cung cấp thông tin sai sự thật",
      "Bên mua bảo hiểm không có quyền hủy bỏ hợp đồng bảo hiểm; Doanh nghiệp bảo hiểm phải bồi thường thiệt hại phát sinh cho bên mua bảo hiểm do cung cấp thông tin sai sự thật",
      "Bên mua bảo hiểm không có quyền hủy bỏ hợp đồng bảo hiểm; Doanh nghiệp bảo hiểm không phải bồi thường thiệt hại phát sinh cho bên mua bảo hiểm do cung cấp thông tin sai sự thật"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-225",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, thời hạn nộp hồ sơ yêu cầu bồi thường, trả tiền bảo hiểm theo hợp đồng bảo hiểm là:",
    "options": [
      "03 tháng kể từ ngày xảy ra sự kiện bảo hiểm",
      "06 tháng kể từ ngày xảy ra sự kiện bảo hiểm",
      "09 tháng kể từ ngày xảy ra sự kiện bảo hiểm",
      "01 năm kể từ ngày xảy ra sự kiện bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-226",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Doanh nghiệp bảo hiểm có quyền từ chối bồi thường, trả tiền bảo hiểm trong trường hợp:",
    "options": [
      "Sự kiện bảo hiểm xảy ra không thuộc phạm vi trách nhiệm bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Sự kiện bảo hiểm xảy ra thuộc các trường hợp loại trừ trách nhiệm bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Sự kiện bảo hiểm xảy ra trong thời gian gia hạn đóng phí bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-228",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, văn phòng đại diện của doanh nghiệp bảo hiểm, doanh nghiệp môi giới bảo hiểm nước ngoài tại Việt Nam không được thực hiện hoạt động nào sau đây:",
    "options": [
      "Xúc tiến xây dựng các dự án đầu tư của doanh nghiệp bảo hiểm nước ngoài, doanh nghiệp tái bảo hiểm nước ngoài tại Việt Nam.",
      "Thúc đẩy và theo dõi việc thực hiện các dự án do doanh nghiệp bảo hiểm, doanh nghiệp môi giới bảo hiểm nước ngoài tài trợ tại Việt Nam.",
      "Kinh doanh bảo hiểm tại Việt Nam",
      "Nghiên cứu thị trường tại Việt Nam"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-231",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Rủi ro thuần túy là rủi ro có hậu quả:",
    "options": [
      "Liên quan đến khả năng đầu cơ.",
      "Liên quan đến khả năng tổn thất.",
      "Liên quan đến khả năng đầu cơ và khả năng tổn thất.",
      "Không phương án nào đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-232",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Phạm vi điều chỉnh của Luật Kinh doanh bảo hiểm là:",
    "options": [
      "Tổ chức và hoạt động kinh doanh bảo hiểm; quyền và nghĩa vụ của tổ chức, cá nhân tham gia bảo hiểm; quản lý nhà nước về hoạt động kinh doanh bảo hiểm.",
      "Bảo hiểm xã hội.",
      "Bảo hiểm y tế.",
      "Bảo hiểm tiền gửi."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-234",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Luật kinh doanh bảo hiểm phân loại hợp đồng bảo hiểm theo tiêu chí nào:",
    "options": [
      "Đối tượng bảo hiểm.",
      "Số tiền bảo hiểm.",
      "Giá trị bảo hiểm.",
      "Thời hạn bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-235",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm trách nhiệm dân sự hàng hóa trên xe của chủ xe cơ giới: Trong quá trình vận chuyển, xe bị tai nạn làm hàng hóa trên xe bị tổn thất. Trường hợp này, doanh nghiệp bảo hiểm bồi thường cho người được bảo hiểm những chi phí nào sau đây:",
    "options": [
      "Chi phí xếp dỡ hàng hóa tổn thất.",
      "Chi phí lưu kho, bãi hàng hóa tổn thất.",
      "Chi phí thuê xe khác để tiếp tục chở hàng còn tốt về địa điểm giao hàng.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-236",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án sai về phạm vi bảo hiểm:",
    "options": [
      "Phạm vi bảo hiểm là phạm vi giới hạn những rủi ro, tổn thất phát sinh mà theo thỏa thuận doanh nghiệp bảo hiểm sẽ chịu trách nhiệm nếu xảy ra sự kiện bảo hiểm.",
      "Phạm vi bảo hiểm là phạm vi giới hạn những rủi ro, tổn thất và chi phí phát sinh mà theo thỏa thuận doanh nghiệp bảo hiểm sẽ chịu trách nhiệm nếu xảy ra sự kiện bảo hiểm.",
      "Phạm vi bảo hiểm được căn cứ theo các điều kiện, điều khoản quy định trong Quy tắc bảo hiểm và các điều khoản sửa đổi bổ sung (nếu có) kèm theo hợp đồng bảo hiểm.",
      "A, C đúng.",
      "B, C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-237",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng về các trường hợp chuyển giao danh mục hợp đồng bảo hiểm:",
    "options": [
      "Thu hẹp nội dung, phạm vi hoạt động.",
      "Chia, tách, sáp nhập, hợp nhất, giải thể, chấm dứt hoạt động.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-238",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Chọn phương án đúng nhất: Trong bảo hiểm sức khỏe, đối với quyền lợi bảo hiểm chi phí y tế, doanh nghiệp bảo hiểm chịu trách nhiệm chi trả:",
    "options": [
      "Số tiền không vượt quá chi phí y tế thực tế mà người được bảo hiểm đã trả khi khám, chữa bệnh trong phạm vi số tiền bảo hiểm.",
      "Số tiền theo thỏa thuận tại hợp đồng bảo hiểm.",
      "Số tiền có thể vượt quá chi phí y tế thực tế mà người được bảo hiểm đã trả khi khám chữa bệnh nhưng vẫn trong phạm vi số tiền bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-239",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là sai về nghĩa vụ của đại lý bảo hiểm:",
    "options": [
      "Giới thiệu, chào bán sản phẩm bảo hiểm",
      "Cung cấp thông tin về sản phẩm bảo hiểm một cách đầy đủ, chính xác cho bên mua bảo hiểm",
      "Tự kê khai thông tin cho bên mua bảo hiểm mà không cần có sự đồng ý của bên mua bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-240",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trừ trường hợp việc chuyển giao hợp đồng bảo hiểm được thực hiện theo tập quán quốc tế hoặc theo thỏa thuận trong hợp đồng bảo hiểm thì việc chuyển giao hợp đồng bảo hiểm chỉ có hiệu lực khi:",
    "options": [
      "Bên mua bảo hiểm chuyển giao hợp đồng bảo hiểm cho bên nhận chuyển giao và không cần phải thông báo cho doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm chủ động chuyển giao hợp đồng bảo hiểm cho bên nhận chuyển giao sau khi có thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển giao mà không cần có sự chấp thuận của doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm thông báo bằng văn bản và được doanh nghiệp bảo hiểm đồng ý bằng văn bản về việc chuyển giao đó",
      "A, B, C sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-241",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bảo hiểm bắt buộc là sản phẩm bảo hiểm do Chính phủ quy định về:",
    "options": [
      "Điều kiện bảo hiểm, số tiền bảo hiểm tối thiểu.",
      "Điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu.",
      "Điều kiện bảo hiểm, phí bảo hiểm tối thiểu.",
      "Phí bảo hiểm, số tiền bảo hiểm tối thiểu."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-242",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức, cá nhân có tài sản, trách nhiệm dân sự, sức khỏe, tính mạng, nghĩa vụ hoặc lợi ích kinh tế được bảo hiểm theo hợp đồng bảo hiểm được gọi là:",
    "options": [
      "Người được bảo hiểm",
      "Bên mua bảo hiểm",
      "Đại lý bảo hiểm",
      "Người thụ hưởng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-243",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng về các hình thức cung cấp sản phẩm bảo hiểm của doanh nghiệp bảo hiểm:",
    "options": [
      "Trực tiếp",
      "Thông qua đại lý bảo hiểm, môi giới bảo hiểm",
      "Thông qua giao dịch điện tử",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-244",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất:",
    "options": [
      "Đại lý bảo hiểm có quyền yêu cầu doanh nghiệp bảo hiểm hoàn trả tiền ký quỹ hoặc tài sản thế chấp theo thỏa thuận trong hợp đồng đại lý bảo hiểm.",
      "Đại lý bảo hiểm là tổ chức có thể đồng thời làm đại lý bảo hiểm cho doanh nghiệp bảo hiểm khác mà không cần sự chấp thuận bằng văn bản của doanh nghiệp mà tổ chức đó đang làm đại lý.",
      "Đại lý bảo hiểm có thể chủ động giảm phí bảo hiểm, hoàn phí bảo hiểm hoặc cung cấp các quyền lợi nằm ngoài hợp đồng bảo hiểm để khuyến khích khách hàng tham gia bảo hiểm.",
      "A, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-245",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, tổ chức kinh doanh bảo hiểm là:",
    "options": [
      "Doanh nghiệp bảo hiểm, tổ chức tương hỗ cung cấp bảo hiểm vi mô, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài.",
      "Doanh nghiệp bảo hiểm, tổ chức tương hỗ cung cấp bảo hiểm vi mô, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài, hợp tác xã bảo hiểm.",
      "Doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài, hợp tác xã bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-249",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Bảo hiểm là phương thức quản lý rủi ro nào sau đây:",
    "options": [
      "Né tránh rủi ro.",
      "Chuyển giao rủi ro.",
      "Chấp nhận rủi ro.",
      "Kiểm soát rủi ro."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-250",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về đồng bảo hiểm:",
    "options": [
      "Các doanh nghiệp bảo hiểm có thể đồng bảo hiểm trên cơ sở cùng thống nhất giao kết với bên mua bảo hiểm trên một hợp đồng bảo hiểm.",
      "Các doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài nhận phí bảo hiểm.",
      "Các doanh nghiệp bảo hiểm bồi thường, trả tiền bảo hiểm theo tỷ lệ đã thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-251",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Vai trò xã hội của bảo hiểm là:",
    "options": [
      "Góp phần đảm bảo an toàn cho nền kinh tế - xã hội.",
      "Tạo thêm việc làm cho xã hội.",
      "Tạo nếp sống tiết kiệm và mang đến trạng thái an toàn về mặt tinh thần cho xã hội.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-252",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp người được bảo hiểm hoặc người thụ hưởng chứng minh được rằng không biết thời điểm xảy ra sự kiện bảo hiểm thì thời hạn nộp hồ sơ yêu cầu bồi thường, trả tiền bảo hiểm là:",
    "options": [
      "01 năm kể từ ngày xảy ra sự kiện bảo hiểm",
      "02 năm kể từ ngày xảy ra sự kiện bảo hiểm.",
      "01 năm tính từ ngày người được bảo hiểm hoặc người thụ hưởng biết việc xảy ra sự kiện bảo hiểm đó.",
      "02 năm tính từ ngày người được bảo hiểm hoặc người thụ hưởng biết việc xảy ra sự kiện bảo hiểm đó."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-254",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng điền vào chỗ _____ của câu sau: \"Tổng số tiền bồi thường của các hợp đồng bảo hiểm _____ giá trị thiệt hại thực tế của tài sản\".",
    "options": [
      "Luôn đúng bằng.",
      "Luôn ít hơn.",
      "Không vượt quá.",
      "Có thể vượt quá."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-255",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong sản phẩm bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, tai nạn được hiểu là:",
    "options": [
      "Tai nạn do một sự kiện bất ngờ, ngoài ý muốn của người được bảo hiểm, từ bên ngoài tác động lên thân thể người được bảo hiểm, là nguyên nhân trực tiếp khiến cho người được bảo hiểm bị chết hoặc thương tật thân thể.",
      "Tai nạn do một sự kiện bất ngờ, ngoài ý muốn của người được bảo hiểm, từ bên ngoài tác động lên thân thể người được bảo hiểm, là nguyên nhân gián tiếp khiến cho người được bảo hiểm bị chết hoặc thương tật thân thể.",
      "Tai nạn do một sự kiện bất ngờ, ngoài ý muốn của người được bảo hiểm, từ bên ngoài tác động lên thân thể người được bảo hiểm, là nguyên nhân trực tiếp hoặc gián tiếp khiến cho người được bảo hiểm bị chết hoặc thương tật thân thể."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-257",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, việc chuyển giao hợp đồng bảo hiểm (trừ trường hợp việc chuyển giao được thực hiện theo tập quán quốc tế hoặc theo thỏa thuận trong hợp đồng bảo hiểm) chỉ có hiệu lực khi:",
    "options": [
      "Bên mua bảo hiểm thông báo bằng văn bản.",
      "Được doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài đồng ý bằng văn bản.",
      "A, B đúng.",
      "A, B sai."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-258",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm không được ký kết hợp đồng đại lý bảo hiểm với những đối tượng sau:",
    "options": [
      "Tổ chức, cá nhân đang bị truy cứu trách nhiệm hình sự.",
      "Cá nhân đang chấp hành hình phạt tù.",
      "Tổ chức đang bị đình chỉ hoạt động có thời hạn, đang bị đình chỉ hoạt động vĩnh viễn hoặc đang bị cấm kinh doanh, cấm hoạt động trong lĩnh vực liên quan đến bảo hiểm.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-259",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, khi xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm:",
    "options": [
      "Theo thời hạn đã thỏa thuận trong hợp đồng bảo hiểm.",
      "Trong thời hạn 15 ngày kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm (trường hợp không có thỏa thuận về thời hạn).",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-261",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, các loại hình bảo hiểm được chia thành:",
    "options": [
      "Bảo hiểm con người, bảo hiểm tài sản, bảo hiểm trách nhiệm dân sự.",
      "Bảo hiểm nhân thọ, bảo hiểm phi nhân thọ, bảo hiểm sức khỏe.",
      "Bảo hiểm ngắn hạn, bảo hiểm dài hạn.",
      "Bảo hiểm cá nhân, bảo hiểm nhóm."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-263",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm là:",
    "options": [
      "Người được doanh nghiệp bảo hiểm ủy quyền thực hiện tất cả các công việc liên quan đến nghiệp vụ bảo hiểm.",
      "Tổ chức, cá nhân được doanh nghiệp bảo hiểm ủy quyền trên cơ sở hợp đồng đại lý bảo hiểm để thực hiện hoạt động đại lý bảo hiểm.",
      "Tổ chức, cá nhân được bên mua bảo hiểm ủy quyển trên cơ sở hợp đồng đại lý bảo hiểm để thực hiện hoạt động đại lý bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-265",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Hãy chọn phương án sai:",
    "options": [
      "Mức miễn thường không khấu trừ có nghĩa là nếu giá trị tổn thất lớn hơn mức miễn thường thì bồi thường toàn bộ giá trị tổn thất.",
      "Mức miễn thường không khấu trừ có nghĩa là nếu giá trị tổn thất nhỏ hơn mức miễn thường thì doanh nghiệp bảo hiểm không phải bồi thường.",
      "Mức miễn thường có khấu trừ có nghĩa là nếu giá trị tổn thất lớn hơn mức miễn thường thì bồi thường toàn bộ giá trị tổn thất.",
      "Mức miễn thường có khấu trừ có nghĩa là nếu giá trị tổn thất lớn hơn mức miễn thường thì số tiền bồi thường bằng giá trị tổn thất trừ đi mức miễn thường."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-267",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm sức khỏe, trường hợp người được bảo hiểm bị ốm đau, bệnh tật thì có thể được nhận quyền lợi bảo hiểm nào sau đây?",
    "options": [
      "Quyền lợi bảo hiểm cho các chi phi y tế điều trị nội trú do ốm đau, bệnh tật.",
      "Quyền lợi bảo hiểm cho các chi phí điều trị ngoại trú do ốm đau, bệnh tật.",
      "Chi phí điều trị không theo chỉ định của bác sỹ.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-268",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Mức miễn thường là phần tổn thất và/hoặc chi phí do sự kiện bảo hiểm gây ra mà người được bảo hiểm phải tự chịu. Mức miễn thường được áp dụng cho (chọn phương án đúng nhất):",
    "options": [
      "Bảo hiểm tài sản.",
      "Bảo hiểm nhân thọ.",
      "Bảo hiểm sức khỏe hoặc bảo hiểm chi phí y tế thương mại.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-271",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đáp án nào đúng khi điền vào chỗ ____ trong câu dưới đây: \"Doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài có quyền kiểm tra các điều kiện bảo đảm an toàn cho ____ \"",
    "options": [
      "Đối tượng bảo hiểm.",
      "Người được bảo hiểm.",
      "Đại lý bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-275",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất về phạm vi bảo hiểm:",
    "options": [
      "Phạm vi bảo hiểm là giới hạn những rủi ro, tổn thất mà doanh nghiệp bảo hiểm sẽ chịu trách nhiệm bồi thường, trả tiền bảo hiểm nếu xảy ra sự kiện bảo hiểm",
      "Phạm vi bảo hiểm là giới hạn những rủi ro, tổn thất và chi phí phát sinh mà doanh nghiệp bảo hiểm sẽ chịu trách nhiệm bồi thường, trả tiền bảo hiểm nếu xảy ra sự kiện bảo hiểm",
      "Phạm vi bảo hiểm được căn cứ theo các điều kiện, điều khoản bảo hiểm quy định trong quy tắc bảo hiểm và các điều khoản sửa đổi, bổ sung (nếu có) kèm hợp đồng bảo hiểm",
      "A, C đúng",
      "B, C đúng"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-276",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong bảo hiểm thiệt hại vật chất ô tô, những tài liệu nào sau đây được sử dụng để làm căn cứ xác định giá trị xe nhằm xác định số tiền bảo hiểm:",
    "options": [
      "Hóa đơn mua xe",
      "Hóa đơn thuế trước bạ",
      "Bảng giá xe để tính thuế của cơ quan thuế",
      "A, B đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-277",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào dưới đây là đúng.",
    "options": [
      "Doanh nghiệp bảo hiểm là doanh nghiệp được thành lập, tổ chức và hoạt động theo quy định của Luật này và luật khác có liên quan để kinh doanh bảo hiểm, kinh doanh tái bảo hiểm, nhượng tái bảo hiểm. Doanh nghiệp bảo hiểm bao gồm doanh nghiệp bảo hiểm nhân thọ, doanh nghiệp bảo hiểm phi nhân thọ, doanh nghiệp bảo hiểm sức khỏe.",
      "Hoạt động đại lý bảo hiểm là việc cung cấp thông tin, tư vấn cho bên mua bảo hiểm về sản phẩm bảo hiểm, điều kiện bảo hiểm, mức phí bảo hiểm, doanh nghiệp bảo hiểm, và các công việc liên quan đến việc đàm phán, thu xếp và thực hiện hợp đồng bảo hiểm theo yêu cầu của bên mua bảo hiểm.",
      "A, B sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-280",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp kinh doanh bảo hiểm nước ngoài không được phép thành lập tại Việt Nam:",
    "options": [
      "Công ty TNHH bảo hiểm.",
      "Công ty cổ phần bảo hiểm.",
      "Chi nhánh doanh nghiệp bảo hiểm nhân thọ nước ngoài.",
      "Chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-281",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong thời hạn bảo hiểm của hợp đồng bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, người được bảo hiểm không may bị tai nạn dẫn đến thương tật khi tham gia hoạt động nhảy dù. Trường hợp này, doanh nghiệp bảo hiểm sẽ chi trả cho người được bảo hiểm số tiền nào sau đây?",
    "options": [
      "Số tiền bảo hiểm theo tỷ lệ thương tật do tai nạn.",
      "Chi phí y tế điều trị tai nạn.",
      "Không chi trả."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-283",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Trong quá trình thực hiện hợp đồng bảo hiểm, bên mua bảo hiểm có nghĩa vụ:",
    "options": [
      "Thông báo cho doanh nghiệp bảo hiểm những trường hợp có thể làm tăng rủi ro hoặc giảm rủi ro hoặc làm phát sinh thêm trách nhiệm của doanh nghiệp bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Thông báo cho doanh nghiệp bảo hiểm về việc xảy ra sự kiện bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Áp dụng các biện pháp để phòng, hạn chế tổn thất theo quy định của pháp luật.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-285",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về bảo hiểm sức khỏe?",
    "options": [
      "Bảo hiểm sức khỏe là bảo hiểm bắt buộc được quy định trong Luật Bảo hiểm y tế.",
      "Bảo hiểm sức khỏe là bảo hiểm bắt buộc được quy định trong Luật Kinh doanh bảo hiểm.",
      "Bảo hiểm sức khỏe là bảo hiểm không bắt buộc có số tiền bảo hiểm linh hoạt tùy theo nhu cầu của người tham gia bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-290",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất về đặc trưng pháp lý của hợp đồng bảo hiểm:",
    "options": [
      "Hợp đồng bảo hiểm là hợp đồng song vụ, theo đó mỗi bên trong hợp đồng đều có nghĩa vụ đối với nhau.",
      "Hợp đồng bảo hiểm là hợp đồng theo mẫu do doanh nghiệp bảo hiểm đưa ra.",
      "Hợp đồng bảo hiểm là sự thoả thuận giữa bên mua bảo hiểm và doanh nghiệp bảo hiểm, theo đó bên mua bảo hiểm phải đóng phí bảo hiểm, doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng.",
      "A, C đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-291",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong bảo hiểm tài sản, trường hợp áp dụng mức miễn thường có khấu trừ, nếu giá trị tổn thất lớn hơn mức khấu trừ thì:",
    "options": [
      "Sổ tiền bồi thường bằng giá trị tổn thất.",
      "Số tiền bồi thường bằng giá trị tổn thất trừ đi mức miễn thường."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-292",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất:",
    "options": [
      "Doanh nghiệp bảo hiểm nhân thọ được phép kinh doanh bảo hiểm sức khỏe",
      "Doanh nghiệp bảo hiểm phi nhân thọ không được phép kinh doanh bảo hiểm nhân thọ và bảo hiểm sức khỏe trừ các sản phẩm bảo hiểm cho rủi ro tử vong có thời hạn từ 1 năm trở xuống và các sản phẩm bảo",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-293",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp bên mua bảo hiểm có hành vi lừa dối khi giao kết hợp đồng bảo hiểm (trừ trường hợp bên mua bảo hiểm vi phạm nghĩa vụ cung cấp thông tin) thì:",
    "options": [
      "Hợp đồng bảo hiểm vô hiệu. Doanh nghiệp bảo hiểm và bên mua bảo hiểm hoàn trả cho nhau những gì đã nhận. Bên có lỗi gây thiệt hại phải bồi thường.",
      "Doanh nghiệp bảo hiểm có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm và thu phí đến thời điểm phát hiện ra hành vi lừa dối của bên mua bảo hiểm.",
      "Doanh nghiệp bảo hiểm có quyền hủy bỏ hợp đồng bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-294",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có trách nhiệm cung cấp đầy đủ, chính xác cho bên mua bảo hiểm các thông tin liên quan đến:",
    "options": [
      "Hợp đồng bảo hiểm.",
      "Đối tượng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-295",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa vận chuyển trên xe, doanh nghiệp bảo hiểm có bồi thường cho tổn thất của hàng hóa trên xe bị mốc trong quá trình vận chuyển không:",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-296",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm mọi rủi ro xây dựng (CAR) của Munich Re, thiệt hại vật chất hậu quả đối với hạng mục không bị khuyết tật, phát sinh do khuyết tật vật liệu hoặc tay nghề kém ở hạng mục khác, có thể thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-297",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng về sản phẩm bảo hiểm mà doanh nghiệp bảo hiểm phi nhân thọ được phép triển khai:",
    "options": [
      "Sản phẩm thuộc loại hình bảo hiểm sức khỏe có thời hạn từ 01 năm trở xuống.",
      "Sản phẩm bảo hiểm cho rủi ro tử vong có thời hạn từ 01 năm trở xuống.",
      "Mọi sản phẩm bảo hiểm sức khỏe,",
      "A, B đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-298",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây sai về bảo hiểm bắt buộc:",
    "options": [
      "Bảo hiểm bắt buộc là sản phẩm bảo hiểm nhằm mục đích bảo vệ lợi ích công cộng, môi trường và an toàn xã hội.",
      "Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu đối với bảo hiểm bắt buộc",
      "Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối đa đối với bảo hiểm bắt buộc"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-302",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đáp án nào dưới đây đúng nhất khi điền vào chỗ trong câu sau: \"Sự kiện bảo hiểm là do các bên thỏa thuận hoặc pháp luật quy định mà khi sự kiện đó xảy ra thì doanh nghiệp bảo hiểm phải bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
    "options": [
      "Sự kiện",
      "Sự kiện khách quan",
      "Sự kiện chủ quan",
      "Sự kiện khách quan hoặc chủ quan"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-303",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng của hợp đồng bảo hiểm sức khỏe là:",
    "options": [
      "Sức khoẻ con người.",
      "Tuổi thọ, tính mạng, sức khỏe và tai nạn con người.",
      "Sức khỏe và tai nạn con người.",
      "Tính mạng và trách nhiệm dân sự của người được bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-304",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm sức khỏe, trường hợp người được bảo hiểm bị tai nạn thì có thể được nhận quyền lợi bảo hiểm nào sau đây?",
    "options": [
      "Tử vong do tai nạn.",
      "Thương tật vĩnh viễn do tai nạn.",
      "Chi phí y tế do tai nạn.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-307",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm “Gián đoạn kinh doanh\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI), hạn mức bồi thường đối với chi phí hoạt động gia tăng được bảo hiểm thuộc hạng mục Lợi nhuận gộp để khắc phục bớt sự suy giảm doanh thu do thiệt hại gây ra là:",
    "options": [
      "Không giới hạn.",
      "Số tiền được tính bằng cách lấy tỷ lệ Lợi nhuận gộp nhân với số doanh thu khôi phục lại được nhờ các chi phí hoạt động gia tăng đó."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-308",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Trường hợp người được bảo hiểm không thực hiện các biện pháp bảo đảm an toàn cho đối tượng bảo hiểm thì doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Đơn phương chấm dứt thực hiện hợp đồng bảo hiểm ngay tại thời điểm phát hiện thấy tăng nguy cơ rủi ro đối với đối tượng bảo hiểm.",
      "Tăng phí bảo hiểm ngay tại thời điểm phát hiện thấy tăng nguy cơ rủi ro đối với đối tượng bảo hiểm.",
      "Ấn định một thời hạn để người được bảo hiểm thực hiện các biện pháp đó. Nếu hết thời hạn này mà các biện pháp bảo đảm an toàn vẫn không được thực hiện thì doanh nghiệp bảo hiểm có quyền tăng phí bảo hiểm hoặc đơn phương chấm dứt thực hiện hợp đồng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-310",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Máy móc thiết bị chủ thầu được bảo hiểm theo quy tắc bảo hiểm Máy móc thiết bị chủ thầu CPM của nhà tái bảo hiểm Munich Re. Trường hợp nào dưới đây không thuộc phạm vi bảo hiểm?",
    "options": [
      "Bảo hiểm tổn thất máy móc, thiết bị trong quá trình thực hiện công việc trên tất cả các công trình dự án.",
      "Bảo hiểm tổn thất máy móc, thiết bị được tập kết trong kho bãi của chủ thầu.",
      "Bảo hiểm tổn thất máy móc, thiết bị trong quá trình lưu hành trên công lộ.",
      "B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-311",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, người có quyền chiếm hữu đối với tài sản thì có “Quyền lợi có thể được bảo hiểm” đối với tài sản đó:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-312",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Người được bảo hiểm tham gia hợp đồng bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn. Trong thời hạn bảo hiểm, người được bảo hiểm bị tai nạn khi tham gia các cuộc diễn tập, huấn luyện quân sự. Trường hợp này doanh nghiệp bảo hiểm có chi trả bảo hiểm cho người được bảo hiểm không?",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-313",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Mức trách nhiệm bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe được hiểu là:",
    "options": [
      "Số tiền tối đa doanh nghiệp bảo hiểm phải trả cho thiệt hại về hàng hóa và các chi phí thuộc phạm vi bảo hiểm trong mỗi vụ tổn thất.",
      "Số tiền doanh nghiệp bảo hiểm phải trả không giới hạn trong mỗi vụ tổn thất.",
      "Tổng giá trị hàng hóa được vận chuyển, không phụ thuộc thỏa thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-314",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm không có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm (đồng thời phải thông báo ngay bằng văn bản cho bên mua bảo hiểm) trong trường hợp nào dưới đây:",
    "options": [
      "Khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm dẫn đến tăng các rủi ro được bảo hiểm, doanh nghiệp bảo hiểm tính lại phí bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm nhưng bên mua bảo hiểm không chấp nhận.",
      "Bên mua bảo hiểm không thực hiện các biện pháp bảo đảm an toàn cho đối tượng bảo hiểm trong thời hạn mà doanh nghiệp bảo hiểm đã ấn định để bên mua bảo hiểm thực hiện các biện pháp đó",
      "Bên mua bảo hiểm không đóng đủ phí bảo hiểm trong thời gian gia hạn đóng phí",
      "Bên mua bảo hiểm không đồng ý chuyển giao danh mục hợp đồng bảo hiểm theo quy định tại Luật Kinh doanh bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-316",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Thời điểm nào là thời điểm xác định giá trị bảo hiểm:",
    "options": [
      "Khi gửi giấy yêu cầu bảo hiểm.",
      "Khi giao kết hợp đồng bảo hiểm.",
      "Khi tiến hành khắc phục tổn thất",
      "A, B, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-317",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Công ty sản xuất thức ăn gia súc tham gia bảo hiểm trách nhiệm sản phẩm. Trong thời hạn bảo hiểm có 4 vụ khiếu nại của khách hàng đối với người được bảo hiểm. Khiếu nại nào sau đây có thể được doanh nghiệp bảo hiểm xem xét bồi thường theo hợp đồng bảo hiểm trách nhiệm sản phẩm:",
    "options": [
      "Gia súc không chịu ăn thức ăn của công ty sản xuất.",
      "Gia súc không tăng cân như thông báo của công ty sản xuất.",
      "Hàm lượng protein trong bao thức ăn thấp hơn rất nhiều so với công thức được ghi trên bao bì, tuy nhiên không gây bệnh tật cho gia súc.",
      "Gia súc bị chết do trong bao thức ăn có sót lại một số mảnh phôi kim loại bén rơi ra từ máy trộn thức ăn của công ty sản xuất."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-318",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Thiệt hại tài chính do ngừng công việc, trì hoãn hoặc mất thị trường do tác động của một rủi ro được bảo hiểm có thuộc phạm vi bảo hiểm theo Quy tắc bảo hiểm “Mọi rủi ro tài sản” của Hiệp hội bảo hiểm Vương quốc Anh (ABI) không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-320",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về đồng bảo hiểm:",
    "options": [
      "Nhiều doanh nghiệp bảo hiểm cùng bảo hiểm cho một đối tượng bảo hiểm và thể hiện trên một hợp đồng bảo hiểm.",
      "Một doanh nghiệp bảo hiểm đứng tên trên hợp đồng bảo hiểm, sau đó doanh nghiệp bảo hiểm này ký hợp đồng bảo hiểm với các doanh nghiệp bảo hiểm khác.",
      "Các doanh nghiệp bảo hiểm được hưởng phí bảo hiểm và có trách nhiệm bồi thường theo tỷ lệ tham gia đồng bảo hiểm đã thỏa thuận trong hợp đồng bảo hiểm.",
      "A, C đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-322",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, nguyên tắc thế quyền không được áp dụng trong loại hợp đồng bảo hiểm nào sau đây:",
    "options": [
      "Bảo hiểm tài sản.",
      "Bảo hiểm thiệt hại.",
      "Bảo hiểm trách nhiệm.",
      "Bảo hiểm nhân thọ."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-323",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về nghĩa vụ của doanh nghiệp bảo hiểm trong giao kết và thực hiện hợp đồng bảo hiểm:",
    "options": [
      "Giải thích rõ ràng, đầy đủ cho bên mua bảo hiểm về quyền lợi bảo hiểm, điều khoản loại trừ trách nhiệm bảo hiểm, quyền và nghĩa vụ của bên mua bảo hiểm khi giao kết hợp đồng bảo hiểm.",
      "Yêu cầu bên mua bảo hiểm cung cấp đầy đủ thông tin liên quan đến giao kết hợp đồng",
      "Phối hợp với bên mua bảo hiểm để giải quyết yêu cầu của người thứ ba đòi bồi thường về những thiệt hại thuộc trách nhiệm bảo hiểm khi xảy ra sự kiện bảo hiểm.",
      "A, B đúng.",
      "A, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-324",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, nội dung nào sau đây không thuộc quyền của đại lý bảo hiểm:",
    "options": [
      "Thay mặt bên mua bảo hiểm ký hợp đồng bảo hiểm",
      "Được cung cấp thông tin và điều kiện cần thiết để thực hiện hợp đồng đại lý bảo hiểm",
      "Hưởng hoa hồng đại lý bảo hiểm, thưởng, hỗ trợ đại lý bảo hiểm và các quyền lợi khác từ hoạt động đại lý bảo hiểm theo thỏa thuận trong hợp đồng đại lý bảo hiểm",
      "Yêu cầu doanh nghiệp bảo hiểm hoàn trả tiền ký quỹ hoặc tài sản thế chấp theo thỏa thuận trong hợp đồng đại lý bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-325",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, số tiền mà bên mua bảo hiểm và doanh nghiệp bảo hiểm thỏa thuận trong hợp đồng bảo hiểm để bảo hiểm cho tài sản và thiệt hại trên cơ sở yêu cầu của bên mua bảo hiểm theo quy định của pháp luật được gọi là:",
    "options": [
      "Phí bảo hiểm",
      "Số tiền bảo hiểm",
      "Giá trị bảo hiểm",
      "Số tiền bồi thường"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-326",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Xe ô tô tham gia bảo hiểm thiệt hại vật chất (không tham gia điều khoản thay thế mới). Chọn phương án đúng nhất trong trường hợp xe bị tổn thất bộ phận thì chi phí khắc phục được hiểu là:",
    "options": [
      "Chi phí sửa chữa, thay thế (đã trừ khấu hao).",
      "Chi phí sửa chữa, thay thế và chi phí hợp lý khác như: bảo vệ hiện trường, cứu hộ. di chuyển tài sản…",
      "Chi phí sửa chữa, thay thế (đã trừ khấu hao) và chi phí hợp lý khác như: bảo vệ hiện trường, cứu hộ. di chuyển tài sản…"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-327",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm không được thực hiện hành vi nào sau đây:",
    "options": [
      "Tranh giành khách hàng dưới các hình thức ngăn cản, lôi kéo, mua chuộc, đe dọa nhân viên hoặc khách hàng của doanh nghiệp bảo hiểm khác.",
      "Thông tin, quảng cáo sai sự thật về nội dung, phạm vi hoạt động, điều kiện bảo hiểm, làm tổn hại đến quyền, lợi ích hợp pháp của bên mua bảo hiểm.",
      "Xúi giục khách hàng hủy bỏ hợp đồng bảo hiểm đang có hiệu lực dưới mọi hình thức.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-328",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Mục đích của việc thỏa thuận giới hạn địa lý. lãnh thổ (Geographical. Territorial Limits) trong hợp đồng bảo hiểm trách nhiệm công cộng là:",
    "options": [
      "Doanh nghiệp bảo hiểm chỉ xem xét giải quyết bồi thường đối với những hành vi gây thiệt hại của người được bảo hiểm và khiếu nại của người thứ ba phải được lập trong phạm vi lãnh thổ. địa lý đã thỏa thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm chỉ xem xét giải quyết bồi thường đối với những khiếu nại được lập của người thứ ba trong phạm vi lãnh thổ. địa lý đã thỏa thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm chỉ xem xét giải quyết bồi thường đối với những hành vi gây thiệt hại của người được bảo hiểm phát sinh trong phạm vi lãnh thổ.địa lý đã thỏa thuận trong hợp đồng bảo hiểm.",
      "Doanh nghiệp bảo hiểm chỉ xem xét giải quyết bồi thường đối với những khiếu nại được lập của người thứ ba theo luật và tập quán áp dụng trong phạm vi lãnh thổ. địa lý đã thỏa thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-331",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đại lý bảo hiểm được thực hiện các hoạt động nào sau đây theo ủy quyền của doanh nghiệp bảo hiểm:",
    "options": [
      "Tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm.",
      "Thay mặt doanh nghiệp bảo hiểm ký kết hợp đồng với bên mua bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-332",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Tiêu chí nào sau đây là tiêu chí đánh giá rủi ro:",
    "options": [
      "Mức độ rủi ro và kiểm soát rủi ro.",
      "Mức độ rủi ro và nguy cơ rủi ro.",
      "Nguy cơ rủi ro và kiểm soát rủi ro.",
      "A, B, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-333",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Giá trị cần phải bảo hiểm đối với bảo hiểm các công trình dân dụng đã hoàn thành (CECR) theo quy tắc bảo hiểm của nhà tái bảo hiểm Munich Re là:",
    "options": [
      "Giá trị sổ sách.",
      "Giá trị thực tế tại thời điểm tổn thất.",
      "Giá trị thay thế mới.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-337",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về điều kiện đối với cá nhân hoạt động đại lý bảo hiểm:",
    "options": [
      "Thường trú tại Việt Nam; Có năng lực hành vi dân sự đầy đủ; Có chứng chỉ đại lý bảo hiểm phù hợp theo quy định của pháp luật về hoạt động kinh doanh bảo hiểm",
      "Là công dân Việt Nam thường trú tại Việt Nam; Có chứng chỉ đại lý bảo hiểm phù hợp theo quy định của pháp luật về hoạt động kinh doanh bảo hiểm",
      "Là công dân Việt Nam thường trú tại Việt Nam; Có năng lực hành vi dân sự đầy đủ; Có chứng chỉ đại lý bảo hiểm phù hợp theo quy định của pháp luật về hoạt động kinh doanh bảo hiểm",
      "Là công dân Việt Nam thường trú tại Việt Nam; Có năng lực hành vi dân sự đầy đủ; có bằng đại học hoặc trên đại học; có chứng chỉ đại lý bảo hiểm phù hợp theo quy định của pháp luật về hoạt động kinh doanh bảo hiểm"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-338",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm thiệt hại vật chất xe cơ giới, doanh nghiệp bảo hiểm không chịu trách nhiệm bảo hiểm đối với những rủi ro xảy ra do:",
    "options": [
      "Hành động cố ý gây thiệt hại của chủ xe và.hoặc lái xe cơ giới.",
      "Lái xe không có Giấy phép lái xe hoặc Giấy phép lái xe không phù hợp đối với loại xe cơ giới bắt buộc có Giấy phép lái xe.",
      "Xe không có Giấy kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "A, B, C đúng.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-339",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đáp án nào dưới đây đúng khi điền vào chỗ ______ của câu sau: \"Văn phòng đại diện của doanh nghiệp bảo hiểm, doanh nghiệp môi giới bảo hiểm nước ngoài______\":",
    "options": [
      "Không được thực hiện hoạt động kinh doanh bảo hiểm tại Việt Nam.",
      "Được kinh doanh bảo hiểm tại Việt Nam",
      "Được kinh doanh tái bảo hiểm tại Việt Nam",
      "Được thực hiện hoạt động môi giới bảo hiểm tại Việt Nam"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-340",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về chuyển giao hợp đồng bảo hiểm:",
    "options": [
      "Bên mua bảo hiểm có quyền chuyển giao hợp đồng bảo hiểm.",
      "Đối với hợp đồng bảo hiểm nhân thọ, việc chuyển giao phải được sự đồng ý bằng văn bản của người được bảo hiểm hoặc người đại diện theo pháp luật của người được bảo hiểm.",
      "Bên nhận chuyển giao hợp đồng bảo hiểm phải có quyền lợi có thể được bảo hiểm, được kế thừa quyền và nghĩa vụ của bên chuyển giao.",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-341",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất theo Luật Kinh doanh bảo hiểm:",
    "options": [
      "Chính phủ quy định chi tiết về điều kiện bảo hiểm, mức phí bảo hiểm, số tiền bảo hiểm tối thiểu đối với bảo hiểm bắt buộc.",
      "Các sản phẩm thuộc nghiệp vụ bảo hiểm nhân thọ, bảo hiểm sức khỏe phải được Bộ Tài chính chấp thuận phương pháp, cơ sở tính phí bảo hiểm trước khi triển khai.",
      "Ngoài loại hình bảo hiểm bắt buộc, đối với các sản phẩm thuộc nghiệp vụ bảo hiểm phi nhân thọ, doanh nghiệp bảo hiểm chủ động xây dựng quy tắc, điều khoản, phương pháp, cơ sở tính phí bảo hiểm.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-342",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong bảo hiểm trách nhiệm, theo yêu cầu của người được bảo hiểm, doanh nghiệp bảo hiểm có thể bồi thường trực tiếp cho:",
    "options": [
      "Người được bảo hiểm",
      "Người thứ ba bị thiệt hại",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-344",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về mức trách nhiệm bảo hiểm:",
    "options": [
      "Mức trách nhiệm bảo hiểm là trách nhiệm của người được bảo hiểm đối với người thứ ba.",
      "Mức trách nhiệm bảo hiểm là một khoản tiền giới hạn trách nhiệm cho mỗi sự cố hoặc cho cả thời hạn bảo hiểm.",
      "Mức trách nhiệm bảo hiểm là mức trách nhiệm của doanh nghiêp bảo hiểm đối với người thứ ba về người và tài sản trong mỗi sự cố hoặc cho cả thời hạn bảo hiểm.",
      "Mức trách nhiệm bảo hiểm là số tiền tối đa mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm trong một sự kiện bảo hiểm hoặc trong cả thời hạn bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-346",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng: Cây cầu A tham gia Đơn bảo hiểm mọi rủi ro xây dựng CAR của nhà tái bảo hiểm Munich Re (Đơn không kèm điều kiện sửa đổi bổ sung). Do lỗi thiết kế, trụ cầu bị đổ, dẫn đến gầm cây cầu A cũng bị tổn thất. Hạng mục nào không thuộc phạm vi bảo hiểm của Đơn CAR:",
    "options": [
      "Trụ cầu",
      "Gầm cầu",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-347",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng bảo hiểm là sự thỏa thuận giữa:",
    "options": [
      "Bên mua bảo hiểm và doanh nghiệp bảo hiểm",
      "Bên mua bảo hiểm và đại lý bảo hiểm",
      "Người được bảo hiểm và doanh nghiệp bảo hiểm",
      "Người được bảo hiểm và đại lý bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-349",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về trường hợp hợp đồng bảo hiểm vô hiệu:",
    "options": [
      "Bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.",
      "Không có đối tượng bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.",
      "Tại thời điểm giao kết hợp đồng bảo hiểm, bên mua bảo hiểm biết sự kiện bảo hiểm đã xảy ra.",
      "Đại lý bảo hiểm không nộp phí bảo hiểm đã thu của bên mua bảo hiểm cho doanh nghiệp bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-350",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo quy tắc bảo hiểm của Hiệp hội bảo hiểm Vương quốc Anh (ABI), phương án nào sau đây là đúng nhất về \"Điều khoản về hệ thống thiết bị 4B\":",
    "options": [
      "Thiệt hại do cháy đối với các máy móc thiết bị điện phát sinh từ các sự cố vượt quá dòng điện, vượt quá điện quá áp, đoản mạch, hồ quang điện, tự đốt nóng hoặc rò điện do bất kỳ nguyên nhân gì (kể cả do sét đánh) sẽ thuộc phạm vi bảo hiểm.",
      "Tổn thất nhưng không gây cháy đối với thiết bị hoặc hệ thống điện phát sinh do hoặc gây ra bởi hoạt động quá tải, đoản mạch, phóng hồ quang điện hay rò điện do bất kỳ nguyên nhân nào được bảo hiểm.",
      "Thiệt hại do cháy đối với các máy móc thiết bị điện phát sinh từ các sự cố vượt quá dòng điện, vượt quá điện quá áp, đoản mạch, hồ quang điện, tự đốt nóng hoặc rò điện do bất kỳ nguyên nhân gì nhưng không phải do sét đánh sẽ thuộc phạm vi bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-351",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong đơn Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa vận chuyển trên xe, doanh nghiệp bảo hiểm sẽ bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với:",
    "options": [
      "Hành lý, hàng hóa trên xe du lịch.",
      "Hành lý, hàng hóa trên xe khách.",
      "Hàng hóa trong quá trình vận chuyển trên xe cơ giới (được phép kinh doanh vận tải hàng hóa) theo hợp đồng vận chuyển giữa chủ xe và chủ hàng.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-353",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong bảo hiểm trách nhiệm, doanh nghiệp bảo hiểm không phải trả cho người được bảo hiểm khoản tiền nào sau đây:",
    "options": [
      "Khoản tiền mà theo quy định của pháp luật người được bảo hiểm có trách nhiệm bồi thường cho người thứ ba",
      "Chi phí liên quan đến việc giải quyết tranh chấp về trách nhiệm đối với người thứ ba",
      "Lãi phải trả cho người thứ ba do người được bảo hiểm chậm trả tiền bồi thường theo chỉ dẫn của doanh nghiệp bảo hiểm",
      "Khoản thiệt hại do bên thứ ba gây ra cho bên mua bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-354",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án sai về người thụ hưởng:",
    "options": [
      "Người thụ hưởng là tổ chức, cá nhân được bên mua bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Người thụ hưởng là tổ chức, cá nhân được người được bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Người thụ hưởng là tổ chức, cá nhân được doanh nghiệp bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-355",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án sai về đối tượng bảo hiểm của hợp đồng bảo hiểm thiệt hại:",
    "options": [
      "Bất kỳ lợi ích kinh tế mà người được bảo hiểm phải gánh chịu khi xảy ra tổn thất.",
      "Nghĩa vụ thực hiện hợp đồng mà người được bảo hiểm phải gánh chịu khi xảy ra tổn thất.",
      "Nghĩa vụ theo pháp luật mà người được bảo hiểm phải gánh chịu khi xảy ra tổn thất.",
      "Trách nhiệm dân sự mà người được bảo hiểm phải gánh chịu khi xảy ra tổn thất."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-357",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo hợp đồng bảo hiểm trách nhiệm được cấp trên cơ sở khiếu nại được lập, doanh nghiệp bảo hiểm sẽ bồi thường cho những sự kiện bảo hiểm xảy ra vào thời điểm nào sau đây:",
    "options": [
      "Sự kiện bảo hiểm xảy ra trước ngày bắt đầu hiệu lực của hợp đồng bảo hiểm (nhưng trong thời gian hiệu lực của hồi tố) và khiếu nại của bên thứ ba được lập trong thời hạn của hợp đồng bảo hiểm",
      "Sự kiện bảo hiểm xảy ra trước ngày bắt đầu hiệu lực của hợp đồng bảo hiểm, được phát hiện trong thời hạn của hợp đồng bảo hiểm.",
      "Sự kiện bảo hiểm xảy ra trong thời hạn hợp đồng bảo hiểm và khiếu nại của bên thứ ba có thể được lập sau khi hết thời hạn hợp đồng bảo hiểm.",
      "Sự kiện bảo hiểm xảy ra trước ngày bắt đầu hiệu lực của hợp đồng bảo hiểm, được phát hiện trong thời hạn bảo hiểm và khiếu nại của bên thứ ba được lập sau thời hạn của hợp đồng bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-358",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Điều kiện để được bồi thường trách nhiệm dân sự theo Đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re là:",
    "options": [
      "Có hành vi bất cẩn, sai sót; phải phát sinh trách nhiệm theo quy định pháp luật.",
      "Phải có thiệt hại về người và.hoặc tài sản.",
      "Có mối quan hệ nhân quả giữa hành vi bất cẩn, sai sót và thiệt hại đó.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-359",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm chi phí y tế, người được bảo hiểm có thể được nhận quyền lợi điều trị ngoại trú nào sau đây?",
    "options": [
      "Tiền thuốc điều trị bệnh theo chỉ định của bác sỹ.",
      "Chi phí điều trị theo yêu cầu của người được bảo hiểm.",
      "Tiền mua các thực phẩm chức năng hỗ trợ điều trị.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-360",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng:",
    "options": [
      "Bên mua bảo hiểm được hưởng hoa hồng bảo hiểm",
      "Đại lý bảo hiểm được hưởng hoa hồng đại lý bảo hiểm theo thỏa thuận tại hợp đồng đại lý bảo hiểm",
      "Môi giới bảo hiểm được hưởng hoa hồng môi giới bảo hiểm theo quy định của Bộ trưởng Bộ tài chính",
      "B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-362",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp bên mua bảo hiểm vì trở ngại khách quan dẫn đến chậm thông báo cho doanh nghiệp bảo hiểm về việc xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm có được áp dụng điều khoản loại trừ trách nhiệm bảo hiểm về việc chậm thông báo không:",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-363",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm trách nhiệm, trong phạm vi giới hạn trách nhiệm bảo hiểm, doanh nghiệp bảo hiểm có trách nhiệm chi trả cho người được bảo hiểm các khoản tiền nào sau đây:",
    "options": [
      "Khoản tiền mà theo quy định của pháp luật người được bảo hiểm có trách nhiệm bồi thường cho người thứ ba.",
      "Các chi phí liên quan đến việc giải quyết tranh chấp về trách nhiệm đối với người thứ ba và lãi phải trả cho người thứ ba do người được bảo hiểm chậm trả tiền bồi thường theo chỉ dẫn của doanh nghiệp bảo hiểm.",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-365",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Người được bảo hiểm tham gia hợp đồng bảo hiểm sức khỏe với quyền lợi tử vong do tai nạn. Chọn phương án đúng nhất về cách thức doanh nghiệp bảo hiểm giải quyết trong trường hợp người được bảo hiểm tử vong do tai nạn:",
    "options": [
      "Chi trả 100% số tiền bảo hiểm.",
      "Chi trả theo nguyên tắc bồi thường.",
      "Doanh nghiệp bảo hiểm không có quyền yêu cầu người thứ ba bồi hoàn khoản tiền đã trả cho người thụ hưởng trong trường hợp người được bảo hiểm tử vong do lỗi của người thứ ba.",
      "A, C đúng",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-366",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng về hoạt động đại lý bảo hiểm:",
    "options": [
      "Thay mặt khách hàng ký Giấy yêu cầu bảo hiểm",
      "Thay mặt khách hàng ký Giấy nhận tiền bồi thường hoặc trả tiền bảo hiểm",
      "Thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm",
      "A, B, C sai"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-367",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Dự án X được thi công bởi 2 Nhà thầu A và B; dự án được bảo hiểm theo quy tắc bảo hiểm mọi rủi ro xây dựng CAR của nhà tái bảo hiểm Munich Re (kèm Điều khoản SĐBS 002 – Trách nhiệm chéo) gồm: Phần I – Tổn thất vật chất: Giá trị công trình; xe cẩu nhà thầu A Phần II – Trách nhiệm đối với bên thứ ba Trong quá trình thi công, xe cẩu của nhà thầu A bất ngờ bị đổ và đồng thời, gây tổn thất cho máy xúc nhà thầu B, nhà dân cạnh công trường và khách tham quan công trình. Những tổn thất nào sau đây không thuộc trách nhiệm bảo hiểm:",
    "options": [
      "Tổn thất hư hỏng xe cẩu của nhà thầu A",
      "Tổn thất hư hỏng máy xúc của nhà thầu B",
      "Thiệt hại của nhà dân cạnh công trường",
      "Thiệt hại khách tham quan công trình"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-368",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong bảo hiểm tài sản, thông thường, giới hạn phụ của các điều khoản sửa đổi bổ sung không vượt quá 10% số tiền bảo hiểm:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-369",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về “Nguyên tắc đóng góp bồi thường”:",
    "options": [
      "Khi đối tượng bảo hiểm bị tổn thất thuộc phạm vi bảo hiểm, các doanh nghiệp bảo hiểm có nghĩa vụ đóng góp bồi thường căn cứ theo tỷ lệ phần trách nhiệm bảo hiểm đã nhận bảo hiểm.",
      "Tổng số tiền bồi thường không vượt quá thiệt hại thực tế của người được bảo hiểm trong sự kiện bảo hiểm.",
      "Nguyên tắc này không áp dụng cho bảo hiểm nhân thọ.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-370",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Hợp đồng bảo hiểm trách nhiệm nghề nghiệp không loại trừ tổn thất của người thứ ba do người được bảo hiểm gây ra khi:",
    "options": [
      "Người được bảo hiểm không đáp ứng về mặt thời gian công việc chuyên môn.",
      "Người được bảo hiểm vi phạm bản quyền thương hiệu khi thực hiện công việc chuyên môn.",
      "Người được bảo hiểm tư vấn.cung cấp dịch vụ chuyên môn cho bên thứ ba.",
      "Bất khả kháng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-371",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Người có quyền sử dụng đối với tài sản thuê, mượn và phải chịu rủi ro về tài sản đó thì có \"Quyền lợi có thể được bảo hiểm\" đối với tài sản đó trong thời gian thuê, mượn:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-373",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn Bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe: Trường hợp xe cơ giới bị tai nạn dẫn đến hàng hóa vận chuyển trên xe bị tổn thất, doanh nghiệp bảo hiểm có bồi thường cho người được bảo hiểm chi phí xếp dỡ, bảo quản hàng hóa bị tổn thất không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-374",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chi phí dọn dẹp hiện trường là một trong các hạng mục có thể được bảo hiểm theo Đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re. Chi phí này được hiểu là:",
    "options": [
      "Chi phí dọn dẹp ban đầu để lấy mặt bằng xây dựng.lắp đặt.",
      "Chi phí dọn dẹp công trình sau khi thi công xong để đưa vào sử dụng.",
      "Chi phí phát sinh do di chuyển, dọn dẹp các chất phế thải xây dựng, đất đá do sự cố thuộc trách nhiệm bảo hiểm gây ra...nhằm làm sạch để tiếp tục thi công",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-376",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo quy tắc bảo hiểm của Hiệp hội bảo hiểm Vương quốc Anh (ABI), chọn phương án đúng nhất về \"Điều khoản về điều chỉnh thời gian (Điều khoản 72 giờ)\":",
    "options": [
      "Bất kỳ tổn thất nào đối với tài sản được bảo hiểm phát sinh trong vòng 72 giờ liên tục gây ra bởi giông bão, lũ lụt, động đất, sạt lở, sụp đổ, chấn động hoặc suy yếu bộ phận chống đỡ sẽ được coi như là một sự cố khi xem xét để áp dụng mức miễn thường có khấu trừ cho một sự cố.",
      "Bất kỳ tổn thất nào đối với tài sản được bảo hiểm phát sinh trong vòng 72 giờ kể từ khi xảy ra tổn thất đầu tiên gây ra bởi giông bão, lũ lụt, động đất, sạt lở, sụp đổ, chấn động hoặc suy yếu bộ phận chống đỡ sẽ được coi như là một sự cố khi xem xét để áp dụng mức miễn thường có khấu trừ cho một sự cố."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-377",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Đối với bảo hiểm sức khỏe với quyền lợi bảo hiểm tai nạn, doanh nghiệp bảo hiểm không chi trả bảo hiểm cho trường hợp nào sau đây?",
    "options": [
      "Người được bảo hiểm cố ý gây tai nạn.",
      "Người được bảo hiểm bị ảnh hưởng trực tiếp do sử dụng rượu bia, ma túy và các chất kích thích tương tự.",
      "Người được bảo hiểm điều khiển phương tiện tham gia giao thông vượt quá tốc độ quy định.",
      "Người được bảo hiểm tham gia chống các hành động phạm pháp.",
      "A, B, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-379",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm trách nhiệm, trách nhiệm của doanh nghiệp bảo hiểm phát sinh khi:",
    "options": [
      "Ngay khi người được bảo hiểm gây ra thiệt hại cho người thứ ba.",
      "Người thứ ba yêu cầu người được bảo hiểm bồi thường do có hành vi gây thiệt hại cho người thứ ba trong thời hạn bảo hiểm.",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-380",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, việc giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm được thực hiện bởi:",
    "options": [
      "Bên mua bảo hiểm.",
      "Môi giới bảo hiểm.",
      "Đại lý bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-381",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm mọi rủi ro xây dựng (CAR) của nhà tái bảo hiểm Munich Re, tổn thất gián tiếp các hạng mục khác xảy ra do một tai nạn là hậu quả khuyết tật của vật liệu và tay nghề có thuộc điểm loại trừ bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-382",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về giám định tổn thất bảo hiểm:",
    "options": [
      "Là hoạt động tính toán phân bổ trách nhiệm bồi thường tổn thất làm cơ sở giải quyết bồi thường bảo hiểm.",
      "Là hoạt động xác định hiện trạng, nguyên nhân, mức độ tổn thất và tính toán phân bổ trách nhiệm bồi thường tổn thất làm cơ sở giải quyết bồi thường bảo hiểm.",
      "Là hoạt động xác định hiện trạng, nguyên nhân, mức độ tổn thất làm cơ sở giải quyết bồi thường bảo hiểm.",
      "A, B, C sai."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-383",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất theo đơn bảo hiểm “Gián đoạn kinh doanh” của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Thời hạn bồi thường được bắt đầu từ khi thiệt hại vật chất xảy ra trong thời hạn bảo hiểm gây ra việc gián đoạn kinh doanh và có thể kéo dài vượt quá thời hạn bảo hiểm.",
      "Thời hạn bồi thường được bắt đầu từ khi thiệt hại vật chất xảy ra trong thời hạn bảo hiểm gây ra việc gián đoạn kinh doanh và có thể kéo dài vượt quá thời hạn bảo hiểm tùy thuộc vào thời gian hồi phục hoạt động kinh doanh, nhưng không vượt quá thời hạn bồi thường tối đa được thỏa thuận và được ghi trong hợp đồng bảo hiểm.",
      "Thời hạn bồi thường được bắt đầu từ khi thiệt hại vật chất xảy ra gây ra việc gián đoạn kinh doanh và có thể kéo dài vượt quá thời hạn bảo hiểm nhưng không vượt quá thời hạn bồi thường tối đa."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-384",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Khi tham gia bảo hiểm chi phí y tế cơ bản, người được bảo hiểm có thể được nhận quyền lợi điều trị nội trú nào sau đây?",
    "options": [
      "Chi phí giường bệnh.",
      "Chi phí xét nghiệm, thuốc điều trị trong thời gian điều trị nội trú.",
      "Chi phí nha khoa.",
      "A, B, C đúng.",
      "A, B đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-385",
    "category": "Tái bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hoạt động của doanh nghiệp bảo hiểm nhận một khoản phí tái bảo hiểm của doanh nghiệp bảo hiểm khác để cam kết bồi thường cho các trách nhiệm đã nhận bảo hiểm là:",
    "options": [
      "Kinh doanh bảo hiểm",
      "Kinh doanh tái bảo hiểm",
      "Nhượng tái bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-386",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, loại hợp đồng bảo hiểm nào sau đây thuộc loại hình bảo hiểm phi nhân thọ:",
    "options": [
      "Hợp đồng bảo hiểm sức khỏe",
      "Hợp đồng bảo hiểm trách nhiệm",
      "Hợp đồng bảo hiểm trọn đời",
      "Hợp đồng bảo hiểm liên kết đầu tư"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-387",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đơn bảo hiểm mọi rủi ro xây dựng CAR theo quy tắc bảo hiểm của nhà tái bảo hiểm Munich Re. Trong quá trình thi công, do khuyết tật của vật liệu gây tổn thất trực tiếp cho hạng mục A và tổn thất gián tiếp cho hạng mục B (Hạng mục A&B được bảo hiểm theo Phần I – Tổn thất vật chất). Hạng mục nào được xem xét giải quyết bồi thường (Hợp đồng bảo hiểm không kèm theo Điều khoản sửa đổi bổ sung):",
    "options": [
      "Hạng mục A.",
      "Hạng mục B.",
      "Hạng mục A,B."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-388",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, việc chuyển giao hợp đồng bảo hiểm chỉ có hiệu lực khi:",
    "options": [
      "Bên mua bảo hiểm thông báo bằng văn bản cho doanh nghiệp bảo hiểm về việc chuyển giao.",
      "Bên mua bảo hiểm thông báo bằng văn bản và được doanh nghiệp bảo hiểm đồng ý bằng văn bản, trừ trường hợp việc chuyển giao được thực hiện theo tập quán quốc tế hoặc theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Việc chuyển nhượng hợp đồng được tự động thực hiện theo thỏa thuận tại hợp đồng bảo hiểm.",
      "A, B đúng",
      "A, C đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-389",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án nào không phải là điều kiện hoạt động của tổ chức hoạt động đại lý bảo hiểm:",
    "options": [
      "Được thành lập và hoạt động hợp pháp tại Việt Nam",
      "Có nhân viên trực tiếp thực hiện hoạt động đại lý bảo hiểm đáp ứng các điều kiện quy định của pháp luật",
      "Ký quỹ và thế chấp tài sản của đại lý bảo hiểm",
      "Nhân sự của tổ chức hoạt động đại lý bảo hiểm đáp ứng quy định pháp luật"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-390",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có nghĩa vụ nào sau đây trong hoạt động đại lý bảo hiểm:",
    "options": [
      "Kiểm tra, giám sát việc thực hiện hợp đồng đại lý bảo hiểm, đánh giá chất lượng tư vấn, giới thiệu sản phẩm bảo hiểm của đại lý bảo hiểm và nhân viên trong tổ chức hoạt động đại lý bảo hiểm",
      "Trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý bảo hiểm gây thiệt hại đến quyền, lợi ích hợp pháp của bên mua bảo hiểm thì doanh nghiệp bảo hiểm vẫn phải chịu trách nhiệm thực hiện các nghĩa vụ theo thỏa thuận trong hợp đồng bảo hiểm do đại lý bảo hiểm thu xếp giao kết",
      "A, B đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-391",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất về trách nhiệm bồi thường thiệt hại theo hợp đồng:",
    "options": [
      "Được xác định trên cơ sở các nghĩa vụ dân sự hình thành theo thỏa thuận giữa các bên trong một hợp đồng.",
      "Là trách nhiệm phát sinh trên cơ sở các nghĩa vụ dân sự do Bộ luật dân sự quy định cho các chủ thể.",
      "Bên có nghĩa vụ dân sự không thực hiện hoặc thực hiện không đúng nghĩa vụ dân sự đã cam kết trong hợp đồng thì phải bồi thường cho bên kia.",
      "A, C đúng.",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-393",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm thiệt hại vật chất xe cơ giới, chủ xe tham gia bảo hiểm dưới giá trị. Trường hợp xe bị tổn thất toàn bộ, khoản tiền thu được từ việc thanh lý xác xe có được phân bổ cho doanh nghiệp bảo hiểm và người được bảo hiểm theo tỷ lệ tham gia bảo hiểm dưới giá trị không?",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-394",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất về điều khoản trượt giá 10% (tăng số tiền bảo hiểm) theo quy tắc bảo hiểm của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Số tiền bảo hiểm về tài sản trong suốt thời hạn bảo hiểm sẽ tăng đến 10% theo tỉ lệ tương ứng được tính bằng số ngày từ khi bắt đầu thời hạn bảo hiểm cho đến ngày áp dụng chia cho cả thời hạn bảo hiểm.",
      "Số tiền bảo hiểm về tài sản trong suốt thời hạn bảo hiểm sẽ tăng đến 10% tương ứng với số ngày tăng giá trị bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-395",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re, tổn thất vật liệu, trang thiết bị lắp đặt trong khi vận chuyển trên khu vực công trường hay khi lắp đặt, tháo dỡ có được bảo hiểm không?",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-396",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về bảo hiểm trùng:",
    "options": [
      "Đối tượng được bảo hiểm được bảo vệ bằng ít nhất hai hợp đồng bảo hiểm.",
      "Các hợp đồng bảo hiểm phải có cùng phạm vi, thời hạn và sự kiện bảo hiểm.",
      "Tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-398",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối với bảo hiểm trách nhiệm nghề nghiệp kiến trúc sư, kỹ sư tư vấn, khi tổn thất phát sinh do lỗi thiết kế, lỗi thi công được phát hiện sau thời điểm kết thúc thời hạn bảo hiểm thì tổn thất đó có thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-399",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm trách nhiệm dân sự của chủ xe cơ giới đối với hàng hóa trên xe (không kèm điều khoản sửa đổi bổ sung), trường hợp hàng hóa bị tổn thất trong quá trình xếp dỡ hàng, doanh nghiệp bảo hiểm có bồi thường cho người được bảo hiểm không:",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-401",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, người thụ hưởng là:",
    "options": [
      "Tổ chức, cá nhân được bên mua bảo hiểm hoặc người được bảo hiểm chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm.",
      "Tổ chức, cá nhân có tài sản, trách nhiệm dân sự, sức khỏe, tính mạng, nghĩa vụ hoặc lợi ích kinh tế được bảo hiểm theo hợp đồng bảo hiểm.",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-402",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là sai:",
    "options": [
      "Đại lý bảo hiểm phải thực hiện nghĩa vụ trong hợp đồng đại lý bảo hiểm.",
      "Đại lý bảo hiểm không được tranh giành khách hàng dưới các hình thức ngăn cản, lôi kéo, mua chuộc, đe dọa nhân viên hoặc khách hàng của doanh nghiệp bảo hiểm khác.",
      "Đại lý bảo hiểm có thể sử dụng hoa hồng bảo hiểm để giảm phí cho khách hàng",
      "Đại lý bảo hiểm không được xúi giục khách hàng hủy bỏ hợp đồng bảo hiểm đang có hiệu lực dưới mọi hình thức."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-403",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, doanh nghiệp bảo hiểm có chi trả chi phí điều trị trước và sau khi nhập viện do ốm đau, bệnh tật theo chỉ định của bác sỹ không?",
    "options": [
      "Có",
      "Không."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-405",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về phương pháp quản lý rủi ro:",
    "options": [
      "Né tránh rủi ro.",
      "Chấp nhận rủi ro.",
      "Kiểm soát rủi ro.",
      "Chuyển giao rủi ro.",
      "A, B, C, D đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-407",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm mọi rủi ro lắp đặt (EAR) tiêu chuẩn của Munich Re, tổn thất vật chất do khuyết tật đúc hoặc tay nghề kém không phải lỗi phát sinh trong khi lắp đặt có thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-408",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn phương án đúng nhất về trách nhiệm bồi thường thiệt hại ngoài hợp đồng:",
    "options": [
      "Được xác định trên cơ sở các nghĩa vụ dân sự hình thành theo thỏa thuận giữa các bên trong một hợp đồng.",
      "Là trách nhiệm phát sinh trên cơ sở các nghĩa vụ dân sự do Bộ luật dân sự quy định cho các chủ thể.",
      "Hành vi gây hại không liên quan đến việc thực hiện nghĩa vụ dân sự của bất kỳ hợp đồng nào. Việc xác định trách nhiệm bồi thường dựa trên cơ sở quy định chung của Bộ luật dân sự.",
      "A, C đúng.",
      "B, C đúng."
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-410",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây là đúng nhất về đối tượng của hợp đồng bảo hiểm trách nhiệm dân sự:",
    "options": [
      "Trách nhiệm dân sự của doanh nghiệp bảo hiểm đối với tài sản của người thứ ba",
      "Trách nhiệm dân sự của người được bảo hiểm đối với người thứ ba theo quy định của pháp luật.",
      "Trách nhiệm dân sự của doanh nghiệp bảo hiểm đối với thiệt hại của người được bảo hiểm theo quy định của pháp luật.",
      "Trách nhiệm dân sự của người được bảo hiểm đối với thiệt hại vật chất, tinh thần của người thứ ba"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-411",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Phương án nào sau đây không thuộc phạm vi bảo hiểm khi Máy móc thiết bị chủ thầu (CPM) bảo hiểm theo năm:",
    "options": [
      "Bảo hiểm tổn thất máy móc, thiết bị trong quá trình thực hiện công việc trên tất cả các công trình dự án.",
      "Bảo hiểm tổn thất máy móc, thiết bị được tập kết trong kho bãi của chủ thầu.",
      "Bảo hiểm tổn thất máy móc, thiết bị trong quá trình lưu hành trên công lộ.",
      "B,C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-412",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về giới hạn trách nhiệm bảo hiểm trong hợp đồng bảo hiểm trách nhiệm dân sự:",
    "options": [
      "Giới hạn trách nhiệm bảo hiểm là giới hạn những rủi ro được bảo hiểm và rủi ro không được bảo hiểm.",
      "Giới hạn trách nhiệm bảo hiểm là số tiền mà doanh nghiệp bảo hiểm phải trả cho bên thứ ba.",
      "Giới hạn trách nhiệm bảo hiểm là giá trị tổn thất mà dưới mức đó doanh nghiệp bảo hiểm không phải trả cho người được bảo hiểm.",
      "Giới hạn trách nhiệm bảo hiểm là số tiền mà doanh nghiệp bảo hiểm phải trả cho người được bảo hiểm theo thoả thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-413",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong thời hạn bảo hiểm của hợp đồng bảo hiểm thiệt hại vật chất xe ô tô, trường hợp xe để trong garage bị cháy toàn bộ do chập ắc quy, doanh nghiệp bảo hiểm chi trả bồi thường như thế nào:",
    "options": [
      "Bồi thường toàn bộ xe.",
      "Bồi thường toàn bộ xe trừ ắc quy."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-414",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đơn bảo hiểm mọi rủi ro xây dựng/lắp đặt (CAR/EAR) của nhà tái bảo hiểm Munich Re: Trong thời hạn xây dựng.lắp đặt, công trình bị tổn thất bất ngờ và gây tổn thất cho bên thứ ba. Tổn thất đối với tài sản của bên thứ ba thuộc trách nhiệm bảo hiểm được hiểu thế nào là đúng:",
    "options": [
      "Là tổn thất vật chất đối với tài sản (nhà cửa, máy móc thiết bị, đồ đạc, hàng hóa) của bên thứ ba.",
      "Là tổn thất mất thu nhập gây ra cho bên thứ ba",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-415",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm “Hỏa hoạn và các rủi ro đặc biệt” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), rủi ro nào sau đây không thuộc phạm vi bảo hiểm của Nhóm rủi ro H - “Giông, bão, lụt”:",
    "options": [
      "Nước mưa hắt vào nhà qua cửa sổ không đóng.",
      "Các công trình đang xây dựng cải tạo, có các ô mở đã được hoàn tất để bảo vệ, chống lại giông bão.",
      "Nước biển tràn vào nhà do bão.",
      "Nước mưa tràn vào nhà thông qua các chỗ hở trên phần kết cấu của tòa nhà mà những chỗ hở này được tạo ra bởi tác động trực tiếp của giông, bão."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-416",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng nào sau đây không phải mua bảo hiểm trách nhiệm nghề nghiệp:",
    "options": [
      "Doanh nghiệp Tái bảo hiểm.",
      "Đại lý bảo hiểm",
      "Doanh nghiệp Môi giới bảo hiểm.",
      "Tổ chức cung cấp dịch vụ phụ trợ bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-417",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong bảo hiểm trách nhiệm dân sự:",
    "options": [
      "Người thứ ba không có quyền trực tiếp yêu cầu doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài bồi thường, trừ trường hợp pháp luật có quy định khác",
      "Người thứ ba được trực tiếp yêu cầu doanh nghiệp bảo hiểm bồi thường.",
      "Doanh nghiệp bảo hiểm có quyền thay mặt người được bảo hiểm để thương lượng với người thứ ba về mức độ bồi thường thiệt hại, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm.",
      "A, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-418",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Theo Điều 16 Luật Kinh doanh bảo hiểm, nguyên tắc nào sau đây không thuộc các nguyên tắc giao kết và thực hiện hợp đồng bảo hiểm:",
    "options": [
      "Quyền lợi có thể được bảo hiểm",
      "Nguyên tắc thế quyền",
      "Nguyên tắc phân tán rủi ro",
      "Nguyên tắc trung thực tuyệt đối"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-419",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Dự án X được thi công bởi 2 nhà thầu A và B; dự án được bảo hiểm theo Đơn bảo hiểm mọi rủi ro xây dựng CAR của nhà tái bảo hiểm Munich Re (Không có điều khoản Sửa đổi bổ sung) gồm: Phần I – Tổn thất vật chất: Giá trị công trình, máy móc thiết bị chủ thầu CPM. Phần II – Trách nhiệm đối với bên thứ ba. Trong quá trình thi công, xe cẩu của nhà thầu A bất ngờ bị đổ, hỏng và gây tổn thất cho máy xúc nhà thầu B và khách thăm quan công trình. Những tổn thất nào sau đây thuộc trách nhiệm bảo hiểm theo Đơn bảo hiểm mọi rủi ro xây dựng CAR:",
    "options": [
      "Cần cẩu của nhà thầu A",
      "Máy xúc của nhà thầu B",
      "Khách thăm quan công trình",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-421",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trường hợp lái xe A tham gia bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe ở hai doanh nghiệp bảo hiểm (DNBH) X và DNBH Y. Trong thời hạn bảo hiểm, lái xe A bị tai nạn dẫn đến tử vong. Trường hợp này, các DNBH sẽ chi trả như thế nào:",
    "options": [
      "DNBH X và DNBH Y chi trả theo tỷ lệ giữa số tiền bảo hiểm của từng hợp đồng bảo hiểm trên tổng số tiền bảo hiểm của hai hợp đồng bảo hiểm.",
      "Cả DNBH X và DNBH Y đều chi trả 100% số tiền bảo hiểm đã thỏa thuận tại hợp đồng bảo hiểm.",
      "DNBH nào có hợp đồng bảo hiểm với số tiền bảo hiểm lớn hơn thực hiện chi trả.",
      "Chi trả theo hợp đồng bảo hiểm giao kết trước."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-423",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong bảo hiểm sức khỏe, trường hợp người được bảo hiểm chết, thương tật hoặc đau ốm do hành vi trực tiếp hoặc gián tiếp của người thứ ba gây ra, doanh nghiệp bảo hiểm có nghĩa vụ bồi thường, trả tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm và:",
    "options": [
      "Không có quyền yêu cầu người thứ ba bồi hoàn khoản tiền mà doanh nghiệp bảo hiểm đã trả cho người thụ hưởng",
      "Có quyền yêu cầu người thứ ba bồi hoàn khoản tiền mà doanh nghiệp bảo hiểm đã trả cho người thụ hưởng",
      "Không được yêu cầu bồi hoàn trong trường hợp người thứ ba không đồng ý",
      "Không được yêu cầu bồi hoàn khi người được bảo hiểm còn sống"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-424",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, những loại hợp đồng nào sau đây thuộc loại hình bảo hiểm phi nhân thọ?",
    "options": [
      "Hợp đồng bảo hiểm chi phí y tế; hợp đồng bảo hiểm tài sản; hợp đồng bảo hiểm trách nhiệm",
      "Hợp đồng bảo hiểm tài sản; hợp đồng bảo hiểm thiệt hại; hợp đồng bảo hiểm trách nhiệm",
      "Hợp đồng bảo hiểm sức khỏe dưới 01 năm; hợp đồng bảo hiểm tài sản; hợp đồng bảo hiểm trách nhiệm",
      "Hợp đồng bảo hiểm sức khỏe dưới 01 năm; hợp đồng bảo hiểm tài sản và thiệt hại; hợp đồng bảo hiểm trách nhiệm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-425",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Ông A mua cổ phiếu của Công ty xây dựng X trên thị trường chứng khoán. Rủi ro biến động giá cổ phiếu này là:",
    "options": [
      "Rủi ro có thể được bảo hiểm",
      "Rủi ro thuần túy",
      "Rủi ro chung",
      "Rủi ro đầu cơ"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-426",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Các chi phí nào sau đây không phải là đối tượng được bảo hiểm trong Quy tắc bảo hiểm Gián đoạn kinh doanh của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Nguyên vật liệu dùng cho sản xuất",
      "Chi phí đóng gói, vận chuyển hàng hóa",
      "Tiền lương để duy trì bộ máy làm việc",
      "A, B đúng",
      "A, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-427",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Bảo hiểm trách nhiệm trên cơ sở khiếu nại được lập là loại hình bảo hiểm theo đó khiếu nại của người thứ ba đối với người được bảo hiểm có thể được lập sau thời gian hiệu lực của hợp đồng bảo hiểm, doanh nghiệp bảo hiểm phải xem xét bồi thường mặc dù sự kiện bảo hiểm xảy ra trong hoặc trước thời hạn bảo hiểm (trong thời gian hồi tố).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-429",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, trong bảo hiểm sức khỏe, điều kiện về nhóm tham gia hợp đồng bảo hiểm nhóm phải là nhóm như thế nào?",
    "options": [
      "Là nhóm đã được hình thành không phải vì mục đích tham gia bảo hiểm",
      "Là nhóm đã được hình thành vì mục đích tham gia bảo hiểm",
      "Là nhóm đã được hình thành không phải vì lợi ích chung của các thành viên",
      "Là nhóm đã được hình thành mà các thành viên phải là người trong gia đình"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-430",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Bảo hiểm là biện pháp chuyển giao rủi ro và được thực hiện thông qua:",
    "options": [
      "Giấy yêu cầu bảo hiểm",
      "Hợp đồng bảo hiểm",
      "Bản chào phí của doanh nghiệp bảo hiểm",
      "Báo cáo đánh giá rủi ro của doanh nghiệp bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-431",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Giá trị thực tế của các công trình kiến trúc và máy móc, thiết bị để tham gia bảo hiểm là:",
    "options": [
      "Giá trị theo sổ sách kế toán",
      "Giá trị nếu được thay thế mới hay mua mới ban đầu trừ đi phần giảm giá trị do hao mòn, xuống cấp theo thời gian và mức độ sử dụng, khai thác",
      "Giá trị nếu được thay thế mới hay mua mới ở hiện tại trừ đi phần giảm giá trị do hao mòn, xuống cấp theo thời gian và mức độ sử dụng, khai thác",
      "A, C đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-432",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, trong bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới, trường hợp chưa xác định được vụ tai nạn thuộc phạm vi bồi thường thiệt hại, doanh nghiệp bảo hiểm phải tạm ứng bồi thường đối với thiệt hại về sức khỏe, tính mạng là bao nhiêu % giới hạn trách nhiệm bảo hiểm theo quy định cho một người trong một vụ tai nạn đối với trường hợp ước tính tỷ lệ tổn thương từ 31% đến dưới 81%:",
    "options": [
      "10%",
      "30%",
      "50%",
      "70%"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-435",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Chọn Phương án đúng nhất: Theo pháp luật Việt Nam về kinh doanh bảo hiểm, trong bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới, doanh nghiệp bảo hiểm có quyền giảm trừ tối đa 5% số tiền bồi thường thiệt hại đối với tài sản trong trường hợp:",
    "options": [
      "Bên mua bảo hiểm, người được bảo hiểm không thông báo tai nạn cho doanh nghiệp bảo hiểm trong thời hạn quy định",
      "Sau khi xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm phát hiện trong quá trình thực hiện hợp đồng bảo hiểm, bên mua bảo hiểm, người được bảo hiểm không thực hiện nghĩa vụ thông báo khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm, dẫn đến tăng các rủi ro được bảo hiểm.",
      "Sau khi xảy ra sự kiện bảo hiểm, doanh nghiệp bảo hiểm phát hiện trong quá trình thực hiện hợp đồng bảo hiểm, bên mua bảo hiểm, người được bảo hiểm không thực hiện nghĩa vụ thông báo khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm, dẫn đến tăng hoặc giảm các rủi ro được bảo hiểm.",
      "A, B đúng",
      "A, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-436",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm được quyền chi trả hoa hồng đại lý bảo hiểm cho đại lý bảo hiểm theo quy định của:",
    "options": [
      "Doanh nghiệp bảo hiểm",
      "Cục Quản lý, giám sát bảo hiểm",
      "Bộ trưởng Bộ Tài chính",
      "Chính phủ"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-437",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm sức khỏe, bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm đối với trường hợp nào dưới đây?",
    "options": [
      "Người có quyền lợi về tài chính hoặc quan hệ lao động với bên mua bảo hiểm",
      "Anh ruột, chị ruột, em ruột hoặc người khác có quan hệ nuôi dưỡng, cấp dưỡng với bên mua bảo hiểm",
      "Người được bảo hiểm đồng ý bằng văn bản cho bên mua bảo hiểm mua bảo hiểm sức khỏe cho mình",
      "Ông/bà của bên mua bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-438",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, trong bảo hiểm sức khỏe, trường hợp doanh nghiệp bảo hiểm bổ sung thêm các dấu hiệu, triệu chứng đặc thù của bệnh có sẵn trong các điều kiện, điều khoản bảo hiểm thì chỉ được xem xét đến các dấu hiệu, triệu chứng khởi phát trong vòng bao nhiêu tháng trước ngày hiệu lực hoặc ngày khôi phục hiệu lực (gần nhất) của hợp đồng bảo hiểm?",
    "options": [
      "12 tháng",
      "24 tháng",
      "36 tháng",
      "60 tháng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-439",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Phương án nào sau đây không thuộc điểm loại trừ của bảo hiểm trách nhiệm nghề nghiệp:",
    "options": [
      "Các khoản tiền phạt",
      "Khiếu nại được đưa ra lần đầu tiên và được thông báo cho doanh nghiệp bảo hiểm trong thời hạn bảo hiểm",
      "Các khiếu nại thuộc các công việc khác ngoài lĩnh vực chuyên môn",
      "Các khiếu nại mà Người được bảo hiểm đã biết tại thời điểm giao kết hợp đồng bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-440",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng bảo hiểm các công trình dân dụng đã hoàn thành (CECR) là các công trình dân dụng đã kết thúc giai đoạn xây dựng/lắp đặt và được đưa vào sử dụng. Phát biểu này đúng hay sai:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-442",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, trong hoạt động đại lý bảo hiểm, doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Tuyển dụng đại lý bảo hiểm và giao kết hợp đồng đại lý bảo hiểm, quyết định mức chi trả hoa hồng đại lý bảo hiểm trong hợp đồng đại lý bảo hiểm không vượt quá mức tối đa theo quy định của Bộ trưởng Bộ Tài chính",
      "Không phải chịu trách nhiệm về hợp đồng bảo hiểm do đại lý thu xếp, giao kết trong trường hợp đại lý bảo hiểm vi phạm hợp đồng đại lý bảo hiểm, gây thiệt hại đến quyền, lợi ích hợp pháp của người được bảo hiểm.",
      "Nhận và quản lý tiền ký quỹ hoặc tài sản thế chấp của đại lý bảo hiểm trong mọi trường hợp",
      "Tuyển dụng đại lý bảo hiểm và giao kết hợp đồng đại lý bảo hiểm, chủ động quyết định mức chi trả hoa hồng đại lý bảo hiểm trong hợp đồng đại lý bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-446",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Trong Luật Kinh doanh bảo hiểm, trường hợp phát sinh khiếu nại theo hợp đồng bảo hiểm trách nhiệm dân sự thì:",
    "options": [
      "Doanh nghiệp bảo hiểm không có quyền thay mặt người được bảo hiểm thương lượng với người thứ ba về mức độ bồi thường thiệt hại",
      "Doanh nghiệp bảo hiểm có quyền thay mặt người được bảo hiểm để thương lượng với người thứ ba về mức độ bồi thường thiệt hại, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-448",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chọn Phương án đúng nhất. Phạm vi bảo hiểm là:",
    "options": [
      "Phạm vi giới hạn những rủi ro, tổn thất và chi phí phát sinh mà theo đó người bảo hiểm sẽ chịu trách nhiệm nếu xảy ra sự kiện bảo hiểm.",
      "Phạm vi giới hạn những rủi ro, tổn thất và chi phí phát sinh mà theo đó người được bảo hiểm và người bảo hiểm cùng chịu trách nhiệm nếu xảy ra sự kiện bảo hiểm",
      "Phạm vi giới hạn những rủi ro, tổn thất và chi phí phát sinh theo yêu cầu của người được bảo hiểm nếu xảy ra sự kiện bảo hiểm",
      "Tổn thất bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-449",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, không áp dụng thời gian chờ đối vói mọi trường hợp điều trị do ốm đau, bệnh tật?",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-450",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án nào dưới đây là đúng nhất về phương thức giải quyết tranh chấp về hợp đồng bảo hiểm?",
    "options": [
      "Tranh chấp về hợp đồng bảo hiểm được giải quyết thông qua thương lượng giữa các bên. Trường hợp không thương lượng được thì tranh chấp được giải quyết thông qua hòa giải hoặc Trọng tài hoặc Tòa án theo thỏa thuận trong hợp đồng bảo hiểm và quy định của pháp luật",
      "Tranh chấp về hợp đồng bảo hiểm được giải quyết thông qua thương lượng giữa các bên. Trường hợp không thương lượng được thì tranh chấp được giải quyết thông qua hòa giải hoặc Trọng tài theo thỏa thuận trong hợp đồng bảo hiểm và quy định của pháp luật",
      "Tranh chấp về hợp đồng bảo hiểm được giải quyết thông qua thương lượng giữa các bên. Trường hợp không thương lượng được thì tranh chấp được giải quyết thông qua hòa giải hoặc Tòa án theo thỏa thuận trong hợp đồng bảo hiểm và quy định của pháp luật",
      "Tranh chấp về hợp đồng bảo hiểm được giải quyết thông qua thương lượng giữa các bên. Trường hợp không thương lượng được thì tranh chấp được giải quyết thông qua Trọng tài hoặc Tòa án theo thỏa thuận trong hợp đồng bảo hiểm và quy định của pháp luật"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-451",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn Phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm trong trường hợp nào?",
    "options": [
      "Bên mua bảo hiểm không đóng phí bảo hiểm hoặc không đóng đủ phí bảo hiểm theo thời hạn thảo thuận hoặc sau thời gian gia hạn đóng phí",
      "Người được bảo hiểm không thực hiện các biện pháp bảo đảm an toàn cho đối tượng bảo hiểm theo quy định của pháp luật về kinh doanh bảo hiểm",
      "Doanh nghiệp bảo hiểm mất khả năng thanh toán",
      "A, B đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-452",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Nguyên tắc cơ bản khi giải quyết bồi thường tài sản là khôi phục tài sản được bảo hiểm trở về tình trạng như ngay trước khi xảy ra tổn thất:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-453",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm trách nhiệm, chọn đáp án đúng để điền vào chỗ ______: “Doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài __________ thay mặt người được bảo hiểm để thương lượng với người thứ ba về mức độ bồi thường thiệt hại, trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm.”",
    "options": [
      "Không được",
      "Có quyền",
      "Bắt buộc phải",
      "A, B, C sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-455",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, trong bảo hiểm sức khỏe, hợp đồng bảo hiểm nhóm được hiểu như thế nào?",
    "options": [
      "Là sự thỏa thuận giữa bên mua bảo hiểm và doanh nghiệp bảo hiểm để bảo hiểm cho những người được bảo hiểm thuộc nhóm tham gia bảo hiểm trong cùng một hợp đồng bảo hiểm",
      "Nhóm tham gia hợp đồng bảo hiểm phải là nhóm đã được hình thành không phải vì mục đích tham gia bảo hiểm",
      "Nhóm tham gia hợp đồng bảo hiểm phải là nhóm đã được hình thành vì mục đích tham gia bảo hiểm",
      "A, B đúng",
      "A, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-456",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Rủi ro mà hậu quả của nó có thể xác định được thành tiền là:",
    "options": [
      "Rủi ro thuần túy.",
      "Rủi ro tài chính.",
      "Rủi ro chung.",
      "Rủi ro riêng."
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-457",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, đối với bảo hiểm sức khỏe, việc chứng nhận người được bảo hiểm bị liệt hoàn toàn và không thể phục hồi chức năng của các bộ phận cơ thể hoặc mù hoàn toàn hoặc bị tổn thương cơ thể từ 81% trở lên được thực hiện không sớm hơn bao nhiêu ngày?",
    "options": [
      "90 ngày",
      "180 ngày",
      "270 ngày",
      "365 ngày"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-458",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, doanh nghiệp bảo hiểm và bên mua bảo hiểm có thể thỏa thuận lựa chọn những quyền lợi bảo hiểm nào sau đây:",
    "options": [
      "Thương tật do tai nạn",
      "Chi phí y tế điều trị do tai nạn",
      "Trợ cấp mất, giảm thu nhập",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-460",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, chi phí y tế điều trị tai nạn của người được bảo hiểm được doanh nghiệp bảo hiểm chi trả theo nguyên tắc nào?",
    "options": [
      "Nguyên tắc khoán",
      "Nguyên tắc bồi thường",
      "A, B đúng"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-461",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Hợp đồng bảo hiểm vô hiệu khi:",
    "options": [
      "Tại thời điểm giao kết hợp đồng bảo hiểm, bên mua bảo hiểm không biết sự kiện bảo hiểm đã xảy ra",
      "Không có đối tượng bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "Hợp đồng bảo hiểm được giao kết do bị đe dọa, cưỡng ép",
      "B, C đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-465",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Ông A mua hợp đồng bảo hiểm vật chất xe cho ô tô của mình. Trong thời hạn bảo hiểm, ông A bán xe ô tô cho ông B và có văn bản đề nghị doanh nghiệp bảo hiểm chuyển giao hợp đồng bảo hiểm này cho ông B và doanh nghiệp bảo hiểm chấp nhận. Việc chuyển giao hợp đồng bảo hiểm như trên thực hiện theo nguyên tắc cơ bản nào của bảo hiểm:",
    "options": [
      "Nguyên tắc thế quyền",
      "Nguyên tắc trung thực tuyệt đối",
      "Nguyên tắc quyền lợi có thể được bảo hiểm",
      "Nguyên tắc bồi thường"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-466",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, vốn điều lệ tối thiểu của doanh nghiệp bảo hiểm phi nhân thọ kinh doanh bảo hiểm phi nhân thọ (trừ bảo hiểm hàng không, bảo hiểm vệ tinh) và bảo hiểm sức khỏe là:",
    "options": [
      "400 tỷ đồng Việt Nam",
      "500 tỷ đồng Việt Nam",
      "450 tỷ đồng Việt Nam",
      "600 tỷ đồng Việt Nam"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-467",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, người thứ ba trong bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới là:",
    "options": [
      "Người bị thiệt hại về sức khỏe, tính mạng, tài sản do xe cơ giới gây ra trừ những người sau: người lái xe, người trên xe; chủ sở hữu xe trừ trường hợp chủ sở hữu đã giao cho tổ chức, cá nhân khác chiếm hữu, sử dụng chiếc xe đó",
      "Người bị thiệt hại về sức khỏe, tính mạng, tài sản do xe cơ giới gây ra trừ những người sau: người lái xe, hành khách trên chính chiếc xe đó; chủ sở hữu xe trừ trường hợp chủ sở hữu đã giao cho tổ chức, cá nhân khác chiếm hữu, sử dụng chiếc xe đó",
      "Người bị thiệt hại về sức khỏe, tính mạng, tài sản do xe cơ giới gây ra trừ những người sau: người lái xe, người trên xe, hành khách trên chính chiếc xe đó; chủ sở hữu xe trừ trường hợp chủ sở hữu đã giao cho tổ chức, cá nhân khác chiếm hữu, sử dụng chiếc xe đó",
      "Người bị thiệt hại về sức khỏe, tính mạng, tài sản do xe cơ giới gây ra trừ những người sau: người trên xe, hành khách trên chính chiếc xe đó; chủ sở hữu xe trừ trường hợp chủ sở hữu đã ủy quyền cho tổ chức, cá nhân khác chiếm hữu, sử dụng chiếc xe đó"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-468",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng bảo hiểm tài sản trên giá trị là hợp đồng trong đó:",
    "options": [
      "Số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm. Doanh nghiệp bảo hiểm và bên mua bảo hiểm không được cố ý giao kết hợp đồng bảo hiểm tài sản trên giá trị.",
      "Số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm. Doanh nghiệp bảo hiểm và bên mua bảo hiểm không được giao kết hợp đồng bảo hiểm tài sản trên giá trị.",
      "Số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng. Doanh nghiệp bảo hiểm và bên mua bảo hiểm không được cố ý giao kết hợp đồng bảo hiểm tài sản trên giá trị.",
      "Số tiền bảo hiểm cao hơn giá thị trường của tài sản được bảo hiểm tại thời điểm xảy ra tổn thất. Doanh nghiệp bảo hiểm và bên mua bảo hiểm không được cố ý giao kết hợp đồng bảo hiểm tài sản trên giá trị."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-469",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Phương án nào sau đây không được coi là cơ sở để tính số tiền bồi thường theo đơn bảo hiểm “Gián đoạn kinh doanh” của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Chi phí cố định",
      "Chi phí biến đổi",
      "Chi phí hoạt động gia tăng để duy trì sản xuất thuộc hạng mục lợi nhuận gộp",
      "B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-470",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, trong hồ sơ bồi thường bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới, tài liệu liên quan đến xe cơ giới, người lái xe gồm:",
    "options": [
      "Giấy chứng nhận đăng ký xe (hoặc bản sao được chứng thực từ bản chính Giấy chứng nhận đăng ký xe kèm bản gốc Giấy biên nhận của tổ chức tín dụng còn hiệu lực, thay cho bản chính Giấy chứng nhận đăng ký xe trong thời gian tổ chức tín dụng giữ bản chính Giấy chứng nhận đăng ký xe) hoặc chứng từ chuyển quyền sở hữu xe và chứng từ nguồn gốc xe (trường hợp không có Giấy chứng nhận đăng ký xe).",
      "Giấy phép lái xe; Giấy chứng nhận bảo hiểm",
      "Giấy chứng minh nhân dân hoặc thẻ căn cước công dân hoặc Hộ chiếu hoặc các giấy tờ tùy thân khác của người lái xe",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-472",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chủ đầu tư tham gia Đơn bảo hiểm mọi rủi ro xây dựng (CAR) cho công trình A. Công trình A được xây dựng cạnh nhà hàng X. Do xây dựng ngày đêm ồn và bụi, khách đến nhà hàng X giảm nhiều, dẫn đến thu nhập nhà hàng X bị giảm nghiêm trọng. Trường hợp này có phát sinh trách nhiệm bồi thường bảo hiểm không?",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-474",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, đối với bảo hiểm sức khỏe, trong bảng câu hỏi kê khai sức khỏe của người được bảo hiểm, việc kê khai lịch sử khám chữa bệnh, thông tin dấu hiệu, triệu chứng liên quan đến bệnh tật không vượt quá khoảng thời gian là:",
    "options": [
      "01 năm",
      "03 năm",
      "05 năm",
      "10 năm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-475",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Một hợp đồng bảo hiểm tài sản có số tiền bảo hiểm là 1,5 tỉ đồng, giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng là 2 tỉ đồng. Hợp đồng bảo hiểm này là:",
    "options": [
      "Hợp đồng bảo hiểm tài sản dưới giá trị",
      "Hợp đồng bảo hiểm tài sản trên giá trị",
      "Hợp đồng bảo hiểm đúng giá trị",
      "B, C đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-476",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, chọn phương án đúng nhất về nghĩa vụ của bên mua bảo hiểm trong bảo hiểm cháy, nổ bắt buộc:",
    "options": [
      "Áp dụng các biện pháp đề phòng, hạn chế tổn thất theo quy định của Luật Kinh doanh bảo hiểm và quy định khác của pháp luật có liên quan",
      "Kê khai đầy đủ, trung thực mọi thông tin có liên quan đến hợp đồng bảo hiểm theo yêu cầu của doanh nghiệp bảo hiểm",
      "Đóng phí bảo hiểm đầy đủ, đúng hạn theo thỏa thuận trong hợp đồng bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-477",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, doanh nghiệp bảo hiểm phi nhân thọ chỉ được phép kinh doanh các sản phẩm thuộc loại hình bảo hiểm sức khỏe có thời hạn nào sau đây?",
    "options": [
      "Từ 01 năm trở xuống",
      "Dưới 01 năm",
      "Từ 05 năm trở xuống",
      "Dưới 05 năm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-478",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chủ đầu tư và nhà thầu chỉ bảo hiểm cho máy móc, thiết bị của chủ thầu (CPM) theo quy tắc bảo hiểm của nhà tái bảo hiểm Munich Re mà không bảo hiểm cho công trình. Cần cẩu của nhà thầu gây tổn thất cho bên thứ ba trong khi hoạt động trên công trường. Tổn thất đó có thuộc trách nhiệm bảo hiểm không:",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-479",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất: Theo Luật kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm thiệt hại, bên mua bảo hiểm có quyền lợi có thể được bảo hiểm khi có:",
    "options": [
      "Quyền lợi về tài chính đối với đối tượng bảo hiểm.",
      "Nghĩa vụ, trách nhiệm về tài chính đối với đối tượng bảo hiểm",
      "Thiệt hại kinh tế đối với đối tượng bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-480",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, tỷ lệ hoa hồng đại lý bảo hiểm tối đa đối với các hợp đồng bảo hiểm sức khỏe là bao nhiêu %?",
    "options": [
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-481",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất: Theo Luật Kinh doanh bảo hiểm, khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm dẫn đến tăng các rủi ro được bảo hiểm, căn cứ thỏa thuận trong hợp đồng bảo hiểm, doanh nghiệp bảo hiểm có quyền thực hiện một trong các nội dung nào sau đây:",
    "options": [
      "Tính lại phí bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm.",
      "Giảm số tiền bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm",
      "Rút ngắn thời hạn đóng phí bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-482",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, thời hạn bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới là:",
    "options": [
      "Tối thiểu là 1 năm và tối đa là 3 năm, tùy vào loại xe cơ giới, trừ các trường hợp thời hạn bảo hiểm dưới 1 năm",
      "Tối thiểu là 1 năm và tối đa là 3 năm, trừ các trường hợp thời hạn bảo hiểm dưới 1 năm theo quy định của pháp luật",
      "Tối thiểu là 1 năm và tối đa tương ứng với thời hạn kiểm định an toàn kỹ thuật và bảo vệ môi trường",
      "Tối thiểu là 1 năm và tối đa tương ứng với thời hạn kiểm định an toàn kỹ thuật và bải vệ môi trường có thời hạn trên 1 năm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-483",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm thuộc loại hình bảo hiểm phi nhân thọ, trường hợp đơn phương chấm dứt hợp đồng bảo hiểm do bên mua bảo hiểm không đóng phí bảo hiểm hoặc không đóng đủ phí bảo hiểm theo thời hạn thỏa thuận hoặc sau thời gian gia hạn đóng phí, doanh nghiệp bảo hiểm có trách nhiệm bồi thường cho người được bảo hiểm khi:",
    "options": [
      "Sự kiện bảo hiểm xảy ra trước thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm",
      "Sự kiện bảo hiểm xảy ra sau thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm",
      "Sự kiện bảo hiểm xảy ra tại thời điểm đơn phương chấm dứt thực hiện hợp đồng bảo hiểm",
      "Không có trách nhiệm bồi thường"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-484",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, trong bảo hiểm sức khỏe, thời gian chờ được tính từ ngày nào?",
    "options": [
      "Từ ngày bắt đầu thời hạn bảo hiểm hoặc ngày khôi phục hiệu lực gần nhất.",
      "Từ khi có sự kiện bảo hiểm xảy ra",
      "Từ khi bên mua bảo hiểm đóng phí bảo hiểm",
      "Từ khi mua bảo hiểm nộp đầy đủ hồ sơ yêu cầu đòi bồi thường"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-485",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng bảo hiểm máy móc thiết bị chủ thầu (CPM) theo quy tắc của nhà tái bảo hiểm Munich Re gồm:",
    "options": [
      "Máy móc, thiết bị thuộc quyền sở hữu của người được bảo hiểm, phục vụ cho việc thi công, xây dựng, lắp đặt các công trình xây dựng",
      "Máy móc, thiết bị thuê, mượn thuộc quyền quản lý của người được bảo hiểm, phục vụ cho việc thi công, xây dựng, lắp đặt các công trình xây dựng",
      "A,B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-486",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, đối với hợp đồng bảo hiểm từ 30 ngày trở lên và đóng phí bảo hiểm 1 lần, trường hợp doanh nghiệp bảo hiểm phi nhân thọ có thỏa thuận với bên mua bảo hiểm về thời hạn thanh toán phí bảo hiểm (bao gồm cả thời gian gia hạn) thì thời hạn thanh toán phí bảo hiểm không vượt quá bao nhiêu ngày kể từ ngày bắt đầu thời hạn bảo hiểm?",
    "options": [
      "15 ngày",
      "30 ngày",
      "45 ngày",
      "60 ngày"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-487",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật Việt Nam về kinh doanh bảo hiểm, các nghiệp vụ bảo hiểm phi nhân thọ không bao gồm nghiệp vụ nào dưới đây?",
    "options": [
      "Bảo hiểm tài sản",
      "Bảo hiểm xe cơ giới",
      "Bảo hiểm nông nghiệp",
      "Bảo hiểm sức khỏe"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-489",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, hợp đồng bảo hiểm trùng là:",
    "options": [
      "Trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, đối tượng, thời hạn và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "Trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, thời hạn và sự kiện bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "Trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng phạm vi, thời hạn bảo hiểm mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "Trường hợp có từ hai hợp đồng bảo hiểm trở lên để bảo hiểm cho cùng thời hạn bảo hiểm mà tổng số tiền bảo hiểm không vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-491",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, theo yêu cầu của doanh nghiệp bảo hiểm, bên mua bảo hiểm có nghĩa vụ cung cấp đầy đủ, trung thực mọi thông tin liên quan đến:",
    "options": [
      "Đối tượng bảo hiểm",
      "Hợp đồng bảo hiểm",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-492",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Công ty A tham gia bảo hiểm “Mọi rủi ro tài sản” cho nhà xưởng M tại doanh nghiệp bảo hiểm X với số tiền bảo hiểm 75 tỷ đồng và tại doanh nghiệp bảo hiểm Y với số tiền bảo hiểm 50 tỷ đồng với cùng điều kiện, điều khoản bảo hiểm. Trong thời hạn bảo hiểm, nhà xưởng bị cháy (thuộc phạm vi bảo hiểm). Giá trị nhà xưởng tại thời điểm tổn thất là 100 tỷ đồng. Tài sản thiệt hại thực tế 5 tỷ đồng. Căn cứ số tiền bảo hiểm tham gia tại doanh nghiệp bảo hiểm X và Y, số tiền bồi thường mà doanh nghiệp Y phải trả cho công ty A là",
    "options": [
      "2 tỷ đồng",
      "2,5 tỷ đồng",
      "3 tỷ đồng",
      "5 tỷ đồng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-493",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Ông A là người được bảo hiểm của hợp đồng bảo hiểm sức khỏe với quyền lợi bảo hiểm thương tật toàn bộ vĩnh viễn do tai nạn, khi tham gia giao thông do hành vi cố ý vi phạm của ông B, ông A bị tai nạn dẫn đến thương tật toàn bộ vĩnh viễn. Trong trường hợp này, doanh nghiệp bảo hiểm sẽ giải quyết như thế nào? ( Ông B không phải là người thụ hưởng của hợp đồng bảo hiểm nói trên).",
    "options": [
      "Không chi trả",
      "Chi trả 100% số tiền bảo hiểm",
      "Chi trả 100% số tiền bảo hiểm và yêu cầu ông B bồi hoàn"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-495",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất, Theo pháp luật Việt Nam về kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có quyền từ chối bán bảo hiểm cháy, nổ bắt buộc trong các trường hợp nào sau đây:",
    "options": [
      "Cơ sở có nguy hiểm về cháy, nổ chưa được nghiệm thu về phòng cháy và chữa cháy theo quy định của pháp luật",
      "Cơ sở có nguy hiểm về cháy, nổ không có biên bản kiểm tra an toàn về phòng cháy chữa cháy của cơ quan công an có thẩm quyền hoặc biên bản kiểm tra đã quá 1 năm tính từ thời điểm lập đến thời điểm mua bảo hiểm cháy, nổ bắt buộc",
      "Cơ sở có nguy hiểm về cháy, nổ đang bị tạm đình chỉ hoặc đình chỉ hoạt động do vi phạm quy định pháp luật phòng cháy và chữa cháy",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-496",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Phát biểu sau là đúng hay sai: “Giải quyết bồi thường bảo hiểm trách nhiệm dựa trên cơ sở tổn thất phát sinh có nghĩa là: Tổn thất xảy ra trong thời hạn bảo hiểm, khiếu nại trong hoặc sau thời hạn bảo hiểm (nhưng phải hợp lệ theo quy định pháp luật)”?",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-498",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đơn bảo hiểm Máy móc thiết bị chủ thầu (CPM) của nhà tái bảo hiểm Munich Re không kèm theo điều khoản sửa đổi, bổ sung có bảo hiểm cho thiết bị ngầm dưới đất không?",
    "options": [
      "Không",
      "Có"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-499",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, chọn phương án đúng nhất về bảo hiểm sức khỏe:",
    "options": [
      "Bảo hiểm sức khỏe là loại hình bảo hiểm cho trường hợp người được bảo hiểm bị thương tật, tai nạn, ốm đau, bệnh tật hoặc chăm sóc sức khỏe",
      "Bảo hiểm sức khỏe là loại hình bảo hiểm cho tính mạng của người được bảo hiểm và chi phí y tế",
      "Bảo hiểm sức khỏe là loại hình bảo hiểm cho trường hợp người được bảo hiểm bị ốm đau, bệnh tật hoặc chăm sóc sức khỏe",
      "Không có đáp án nào đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-500",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Giá trị thay thế mới của một hạng mục là chi phí thay thế hạng mục mới cùng tính năng, chủng loại và công suất, bao gồm:",
    "options": [
      "Giá trị thay thế mới của hạng mục đó",
      "Cước phí vận chuyển (nếu có)",
      "Thuế, lệ phí hải quan và các loại thuế khác (nếu có) và chi phí lắp đặt",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-501",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, nội dung hoạt động của doanh nghiệp bảo hiểm bao gồm:",
    "options": [
      "Kinh doanh bảo hiểm, kinh doanh tái bảo hiểm, nhượng tái bảo hiểm",
      "Quản lý các quỹ và đầu tư vốn từ hoạt động kinh doanh bảo hiểm",
      "Cung cấp dịch vụ phụ trợ bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-503",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về đối tượng được phép kinh doanh bảo hiểm sức khỏe có thời hạn trên 1 năm:",
    "options": [
      "Doanh nghiệp bảo hiểm nhân thọ",
      "Doanh nghiệp bảo hiểm phi nhân thọ",
      "A, B đúng",
      "A, B sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-504",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo quy định của Luật kinh doanh bảo hiểm, chọn phương án đúng nhất:",
    "options": [
      "Doanh nghiệp bảo hiểm phi nhân thọ không được phép kinh doanh bảo hiểm nhân thọ và ngược lại",
      "Doanh nghiệp bảo hiểm phi nhân thọ và nhân thọ được phép kinh doanh nghiệp vụ bảo hiểm sức khỏe",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-505",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Luật kinh doanh bảo hiểm phân loại hợp đồng bảo hiểm theo:",
    "options": [
      "Hình thức bảo hiểm",
      "Đối tượng bảo hiểm",
      "Số tiền bảo hiểm",
      "Thời hạn bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-506",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp người được bảo hiểm không thực hiện các biện pháp bảo đảm an toàn cho đối tượng bảo hiểm thì doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Tăng phí bảo hiểm ngay tại thời điểm phát hiện thấy người được bảo hiểm không thực hiện các biện pháp đảm bảo an toàn.",
      "Đơn phương đình chỉ hợp đồng bảo hiểm ngay tại thời điểm phát hiện thấy người được bảo hiểm không thực hiện các biện pháp đảm bảo an toàn.",
      "Ấn định một thời hạn để người được bảo hiểm được thực hiện các biện pháp đảm bảo an toàn cho đối tượng bảo hiểm"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-507",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Phát biểu: “Hợp đồng bảo hiểm chấm dứt do bên mua bảo hiểm không có quyền lợi có thể được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm” là:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-508",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong quá trình thực hiện hợp đồng, hợp đồng bảo hiểm vô hiệu do bên mua bảo hiểm không còn “Quyền lợi có thể được bảo hiểm” là:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-510",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, hợp đồng bảo hiểm tài sản có thể chuyển giao được không?",
    "options": [
      "Có",
      "Không",
      "Có, với điều kiện bên mua bảo hiểm không thông báo bằng văn bản và được doanh nghiệp bảo hiểm đồng ý bằng văn bản, trừ trường hợp việc chuyển giao được thực hiện theo tập quán quốc tế hoặc theo thỏa thuận trong hợp đồng bảo hiểm"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-511",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trong trường hợp người thứ 3 yêu cầu bên mua bảo hiểm bồi thường về những thiệt hại thuộc trách nhiệm bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm thò thời hạn nộp hồ sơ yêu cầu bồi thường theo hợp đồng bảo hiểm là:",
    "options": [
      "1 năm kể từ ngày xảy ra sự kiện bảo hiểm",
      "1 năm kể từ ngày xảy ra tranh chấp",
      "1 năm kể từ ngày người thứ 3 yêu cầu",
      "2 năm kể từ ngày người thứ 3 yêu cầu"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-512",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, bên mua bảo hiểm là:",
    "options": [
      "Tổ chức, cá nhân giao kết hợp đồng bảo hiểm với doanh nghiệp bảo hiểm và đóng phí bảo hiểm.",
      "Tổ chức, cá nhân giao kết hợp đồng với đại lý bảo hiểm và đóng phí bảo hiểm.",
      "Tổ chức, cá nhân giao kết hợp đồng bảo hiểm trực tiếp với doanh nghiệp tái bảo hiểm và đóng phí bảo hiểm.",
      "Tổ chức, cá nhân được chỉ định để nhận tiền bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-516",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, đáp án nào đúng khi điền vào chỗ ____ dưới đây: “_____ là số tiền mà bên mua bảo hiểm và doanh nghiệp bảo hiểm thỏa thuận trong hợp đồng bảo hiểm để bảo hiểm cho tài sản và thiệt hại trên cơ sở yêu cầu của bên mua bảo hiểm”.",
    "options": [
      "Phí bảo hiểm",
      "Số tiền bồi thường",
      "Số tiền bảo hiểm",
      "Giá trị bảo hiểm"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-518",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phương án đúng nhất cho trường hợp đồng bảo hiểm cho một đối tượng bảo hiểm, hợp đồng bảo hiểm phải có thông tin nào sau đây:",
    "options": [
      "Tên doanh nghiệp bảo hiểm đứng đầu",
      "Tỷ lệ đồng bảo hiểm của từng doanh nghiệp bảo hiểm",
      "Tỷ lệ phân chia trách nhiệm bồi thường trong trường hợp xảy ra sự kiện bảo hiểm",
      "A, B đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-519",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, chọn phương án đúng về bảo hiểm trùng:",
    "options": [
      "Đối tượng bảo hiểm được bảo vệ bằng ít nhất hai hợp đồng bảo hiểm",
      "Các hợp đồng bảo hiểm phải có cùng phạm vi, thời hạn vầ sự kiện bảo hiểm",
      "Tổng số tiền bảo hiểm vượt qua giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm",
      "A, B ,C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-520",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hợp đồng bảo hiểm trùng trong bảo hiểm tài sản là trường hợp có từ hai hợp đồng bảo hiểm trở lên mà tổng số tiền bảo hiểm vượt quá giá thị trường của tài sản được bảo hiểm tại thời điểm giao kết hợp đồng bảo hiểm để bảo hiểm cho:",
    "options": [
      "Cùng phạm vi, đối tượng bảo hiểm",
      "Cùng thời hạn bảo hiểm",
      "Cùng sự kiện bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-521",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Nguyên tắc đóng góp bồi thường có liên quan trực tiếp nhất đến nguyên tắc nào sau đây:",
    "options": [
      "Nguyên tắc thế quyền",
      "Nguyên tắc bồi thường",
      "Nguyên tắc nguyên nhân trực tiếp",
      "Nguyên tắc quyền lợi được bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-522",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, không áp dụng thời gian chờ đối với mọi trường hợp điều trị do tai nạn?",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-523",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Trong bảo hiểm sức khỏe, thời gian chờ không áp dụng cho trường hợp điều trị nào sau đây?",
    "options": [
      "Điều trị do tai nạn",
      "Điều trị các bệnh mãn tính",
      "Điều trị viêm đường hô hấp",
      "Điều trị ốm đau"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-524",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Người được bảo hiểm tham gia 02 hợp đồng bảo hiểm tai nạn con người tại hai doanh nghiệp bảo hiểm khác nhau và không may bị tai nạn dẫn đến tử vong. Quyền lợi bảo hiểm mà người thụ hưởng nhận được trong trường hợp này là:",
    "options": [
      "Số tiền bảo hiểm cao nhất trong hai hợp đồng bảo hiểm",
      "Tổng số tiền bảo hiểm đã thỏa thuận tại hai hợp đồng bảo hiểm",
      "Số tiền bảo hiểm đã thỏa thuận tại hợp đồng bảo hiểm được giao kết đầu tiên"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-526",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong đơn bảo hiểm thiệt hại vật chất xe ô tô (có kèm theo điều khoản sửa đổi bổ sung “Bảo hiểm thiệt hại động cơ do hiện tượng thủy kích”), doanh nghiệp bảo hiểm sẽ bồi thường cho các chi phí nào sau đây?",
    "options": [
      "Các chi phí sửa chữa, khắc phục những thiệt hại của động cơ do xe đi vào vùng ngập nước và.hoặc nước lọt vào động cơ gây ra hiện tượng thủy kích",
      "Chi phí khắc phục tổn thất xảy ra cho động cơ xe ô tô khi lái xe cố tình khởi động lại động cơ đã ngưng hoạt động sau khi xe được bảo hiểm bị ngập nước gây ra hiện tượng thủy kích",
      "A, B đúng"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-528",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Cả xe A và xe B đều tham gia bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe theo hai hợp đồng bảo hiểm khác nhau tại doanh nghiệp bảo hiểm X. Chủ xe A đã điều khiển xe B gây tai nạn và bị thương tật. Trường hợp này doanh nghiệp bảo hiểm X sẽ trả tiền bảo hiểm cho người được bảo hiểm như thế nào:",
    "options": [
      "Không trả tiền bảo hiểm",
      "Trả tiền theo số tiền bảo hiểm thỏa thuận tại hợp đồng bảo hiểm của xe A",
      "Trả tiền theo số tiền bảo hiểm thỏa thuận tại hợp đồng bảo hiểm của xe B",
      "Trả tiền theo hợp đồng bảo hiểm có số tiền bảo hiểm thỏa thuận lớn nhất"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-529",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm tai nạn lái, phụ xe và người ngồi trên xe, doanh nghiệp bảo hiểm sẽ trả tiền bảo hiểm cho người ngồi trên xe thiệt hại về thân thể, tính mạng do:",
    "options": [
      "Tai nạn xảy ra đối với người đang ngồi trên xe trong quá trình xe tham gia giao thông",
      "Tai nạn xảy ra đối với người đang lên xuống xe trong quá trình xe tham gia giao thông",
      "Tai nạn xảy ra đối với người ngồi trên xe khi xe không tham gia giao thông",
      "A, B đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-530",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối tượng bảo hiểm của hợp đồng bảo hiểm tài sản là:",
    "options": [
      "Tài sản theo quy định của Bộ Luật Dân sự",
      "Bất kỳ lợi ích kinh tế hoặc nghĩa vụ thực hiện hợp đồng hoặc nghĩa vụ theo pháp luật mà người được bảo hiểm phải gánh chịu khi xảy ra tổn thất.",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-531",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng bảo hiểm tài sản là:",
    "options": [
      "Tòa nhà, đồ vật cố định và trang trí trong tòa nhà",
      "Máy móc thiết bị",
      "Nguyên vật liệu, thành phẩm, bán thành phẩm thuộc hoạt động sản xuất kinh doanh của người được bảo hiểm",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-532",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, đối với bảo hiểm tài sản, trường hợp người được bảo hiểm không thực hiện các biện pháp đảm bảo an toàn cho đối tượng bảo hiểm thì doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Ấn định một thời hạn để người được bảo hiểm thực hiện các biện pháp đảm bảo an toàn cho đối tượng bảo hiểm",
      "Nếu hết thời hạn để người được bảo hiểm thực hiện các biện pháp đảm bảo an toàn mà các biện pháp đó vẫn không được thực hiên thì doanh nghiệp bảo hiểm có quyền tăng phí bảo hiểm",
      "Nếu hết thời hạn để người được bảo hiểm thực hiện các biện pháp đảm bảo an toàn mà các biện pháp đó vẫn không được thực hiện thì doanh nghiệp bảo hiểm có quyền đơn phương chấm dứt thực hiện hợp đồng bảo hiểm",
      "A, B, C"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-533",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "“Trong bảo hiểm tài sản, đơn vị rủi ro (ngôi nhà) được coi là cách biệt về mặt không gian nếu giữa các ngôi nhà đảm bảo tối thiểu một khoảng cách nào đó”. Phát biểu trên là:",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-534",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Kính lắp cố định có được bảo hiểm theo Quy tắc bảo hiểm “Mọi rủi ro tài sản” của Hiệp hội Bảo hiểm Vương quốc Anh (ABI) không:",
    "options": [
      "Có",
      "Không",
      "Không, trừ trường hợp được bảo hiểm theo Điều khoản bảo hiểm bổ sung riêng cho kính lắp cố định"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-535",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng có thể được bảo hiểm theo Phần I - Tổn thất vật chất của đơn CAR/EAR Munich Re, nếu được kê khai và có số tiền bảo hiểm hoặc điều khoản mở rộng phù hợp, gồm:",
    "options": [
      "Công trình xây dựng, lắp đặt.",
      "Tài sản trên và xung quanh công trường thuộc quyền sở hữu, quản lý hoặc chăm sóc của người được bảo hiểm.",
      "Trách nhiệm đối với người thứ ba về người và tài sản.",
      "A, B đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-536",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Tại thời điểm tổn thất, nếu số tiền bảo hiểm của máy móc thiết bị chủ thầu (CPM) theo quy tắc bảo hiểm của nhà tái bảo hiểm Munich Re nhỏ hơn giá trị thay thế mới thì phương án bồi thường nào sau đây đúng (Giả sử máy móc thiết bị hư hỏng và không có giá trị thu hồi):",
    "options": [
      "Số tiền bồi thường = Chi phí khắc phục – Khấu hao tài sản",
      "Số tiền bồi thường = {Chi phí khắc phục x (số tiền bảo hiểm.Giá trị thay thế mới của tài sản được bảo hiểm) – Mức miễn thường khấu trừ"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-540",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Những rủi ro nào thuộc phạm vi bảo hiểm của quy tắc bảo hiểm các công trình dân dụng đã hoàn thành (CECR)?",
    "options": [
      "Hỏa hoạn, sét đánh trực tiếp, nổ",
      "Bão với sức gió lớn hơn cấp 8",
      "Lũ, lụt; lún, lở đất, lở đá…",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-541",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Yếu tố nào dưới đây không liên quan đến việc tính phí bảo hiểm của sản phẩm bảo hiểm trách nhiệm nghề nghiệp",
    "options": [
      "Thu nhập hàng năm của người được bảo hiểm",
      "Vị trí đặt văn phòng. nơi làm việc của người được bảo hiểm",
      "Số lượng chuyên viên tham gia công việc tư vấn. dịch vụ của người được bảo hiểm",
      "Lĩnh vực và phạm vi công việc của người được bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-542",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo hợp đồng bảo hiểm trách nhiệm trên cơ sở tổn thất phát sinh, doanh nghiệp bảo hiểm sẽ bồi thường cho những sự kiện bảo hiểm nào dưới đây:",
    "options": [
      "Sự kiện bảo hiểm xảy ra trước ngày bắt đầu hiệu lực của hợp đồng bảo hiểm và khiếu nại của bên thứ ba được lập trong thời hạn của hợp đồng bảo hiểm",
      "Sự kiện bảo hiểm xảy ra trong thời hạn hợp đồng bảo hiểm và khiếu nại của bên thứ ba có thể được lập sau thời hạn bảo hiểm",
      "Sự kiện bảo hiểm xảy ra trước ngày bắt đầu hiệu lực của hợp đồng bảo hiểm, được phát hiện trong thời hạn hợp đồng bảo hiểm và khiếu nại của bên thứ ba được lập trong thời hạn của hợp đồng bảo hiểm"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-543",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Hợp đồng bảo hiểm trách nhiệm nghề nghiệp không loại trừ:",
    "options": [
      "Khiếu nại đã được biết trước hoặc tình huống phát sinh khiếu nại đã được biết trước khi đơn bảo hiểm có hiệu lực",
      "Hành vi bất cẩn của người được bảo hiểm khi đang thực hiện công việc chuyên môn cho bên thứ ba",
      "Hành vi cố ý, lỗi cố ý của người được bảo hiểm khi thực hiện công việc chuyên môn cho bên thứ ba",
      "Hành vi lừa đảo, hối lộ, không trung thực của người được bảo hiểm khi thực hiện công việc chuyên môn cho bên thứ ba"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-544",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong bảo hiểm trách nhiệm nghề nghiệp cho kỹ sư, tư vấn xây dựng, doanh nghiệp bảo hiểm sẽ bồi thường:",
    "options": [
      "Tổn thất về tài sản và thương tật của người thứ ba ngoài phạm vi công trình do bị tai nạn bất ngờ trong khi thi công công trình",
      "Tai nạn lao động của người lao động đó do bất cẩn trong khi thi công trên công trường",
      "Thiệt hại về tài sản của công trình do lỗi thiết kế của người được bảo hiểm",
      "Tổn thất tài sản do nguyên vật liệu kém chất lượng và tay nghề kém"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-545",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Bệnh nhân đang nằm nội trú bị gãy chân chỉ do giường bệnh lâu ngày mục và sập, không liên quan đến chẩn đoán, điều trị hoặc hành vi chuyên môn y tế. Nếu bệnh viện đã mua các bảo hiểm trách nhiệm tương ứng, tổn thất này được xem xét theo hợp đồng nào:",
    "options": [
      "Hợp đồng bảo hiểm trách nhiệm công cộng",
      "Hợp đồng bảo hiểm trách nhiệm sản phẩm",
      "Hợp đồng bảo hiểm trách nhiệm nghề y (Medical Malpractice)",
      "Hợp đồng bảo hiểm trách nhiệm kỹ sư tư vấn thiết kế"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-546",
    "category": "Bảo hiểm trách nhiệm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Nhà máy sản xuất ổ cắm điện và biến áp gia đình mua bảo hiểm trách nhiệm công cộng và bảo hiểm trách nhiệm sản phẩm. Khách hàng A đến thăm phòng triển lãm sản phẩm tại nhà máy. Trong quá trình xem hàng và thao tác trên sản phẩm, khách hàng bị điện giật do sản phẩm bị rò điện. Trách nhiệm pháp lý phát sinh của nhà máy sản xuất đối với khách hàng thuộc:",
    "options": [
      "Hợp đồng bảo hiểm trách nhiệm công cộng",
      "Hợp đồng bảo hiểm trách nhiệm sản phẩm",
      "Hợp đồng bảo hiểm trách nhiệm nghề nghiệp",
      "Không thuộc hợp đồng bảo hiểm nào"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-548",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "“Mức giảm doanh thu do hậu quả của thiệt hại gây ra” theo quy tắc bảo hiểm Gián đoạn kinh doanh của Hiệp hội bảo hiểm Vương quốc Anh (ABI) được hiểu là đúng:",
    "options": [
      "Mức giảm doanh thu do hậu quả của thiệt hại gây ra = Doanh thu tiêu chuẩn – Doanh thu thực tế thực hiện tính đến thời điểm tổn thất",
      "Mức giảm doanh thu do hậu quả của thiệt hại gây ra = Doanh thu tiêu chuẩn – Doanh thu thực tế thực hiện trong thời hạn bồi thường",
      "Mức giảm doanh thu do hậu quả của thiệt hại gây ra = Doanh thu kế hoạch năm tài chính – Doanh thu thực tế thực hiện tính đến thời điểm tổn thất"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-550",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm không được ủy quyền cho đại lý bảo hiểm thực hiện hoạt động nào dưới đây:",
    "options": [
      "Giới thiệu, chào bán sản phẩm bảo hiểm",
      "Thu xếp giao kết hợp đồng bảo hiểm",
      "Thu phí bảo hiểm",
      "Thu xếp tái bảo hiểm"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-551",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Mức vốn điều lệ tối thiểu của doanh nghiệp bảo hiểm kinh doanh bảo hiểm phi nhân thọ (bao gồm vệ tinh hoặc hàng không)",
    "options": [
      "450 tỷ đồng Việt Nam",
      "300 tỷ đồng Việt Nam",
      "500 tỷ đồng Việt Nam",
      "200 tỷ đồng Việt Nam"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-553",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm vật chất xe cơ giới, doanh nghiệp bảo hiểm phải hoàn trả cho chủ xe cơ giới những chi phí cần thiết và hợp lý nào sau đây theo thỏa thuận tại hợp đồng bảo hiểm khi tai nạn xảy ra thuộc phạm vi bảo hiểm:",
    "options": [
      "Chi phí ngăn ngừa hạn chế tổn thất phát sinh thêm",
      "Chi phí cứu hộ và vận chuyển xe bị thiệt hại tới nơi sửa chữa gần nhất",
      "Chi phí vận chuyển người bị nạn trên xe đến bệnh viện",
      "A, B",
      "A, C"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-554",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Mức vốn pháp định của chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài kinh doanh bảo hiểm phi nhân thọ, bảo hiểm hàng không và bảo hiểm vệ tinh là:",
    "options": [
      "400 tỷ",
      "250 tỷ",
      "500 tỷ",
      "300 tỷ"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-555",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng về chi khen thưởng và hỗ trợ đại lý của doanh nghiệp bảo hiểm phi nhân thọ:",
    "options": [
      "Được phép chi hỗ trợ đại lý nhưng không quá 50% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Chi khen thưởng và chi hỗ trợ đại lý không quá 50% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Được phép chi khen thưởng đại lý nhưng không quá 50% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Không được phép chi hỗ trợ"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-556",
    "category": "Bảo hiểm con người",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng về chi khen thưởng và hỗ trợ đại lý bảo hiểm sức khỏe của doanh nghiệp bảo hiểm phi nhân thọ:",
    "options": [
      "Chi khen thưởng và chi hỗ trợ đại lý không quá 100% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Chi khen thưởng và chi hỗ trợ địa lý không quá 50% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Được phép chi khen thưởng đại lý nhưng không quá 50% hoa hồng bảo hiểm của các hợp đồng bảo hiểm đã khai thác trong năm tài chính",
      "Không được phép chi hỗ trợ"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-557",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, các tổ chức kinh doanh bảo hiểm bao gồm đối tượng nào sau đây:",
    "options": [
      "Công ty hợp danh",
      "Tổ chức tương hỗ cung cấp bảo hiểm vi mô",
      "Công ty TNHH, công ty cổ phần",
      "A, C đúng",
      "B, C đúng"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-558",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối tượng của hợp đồng bảo hiểm tài sản là tài sản, bao gồm:",
    "options": [
      "Vật có thực",
      "Tiền, giấy tờ trị giá được bằng tiền",
      "Các quyền tài sản",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-559",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, tỷ lệ hoa hồng bảo hiểm tín dụng và rủi ro tài chính là:",
    "options": [
      "20%",
      "15%",
      "10%",
      "5%"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-561",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Những tổn thất – hậu quả mà rủi ro sẽ mang lại được tính bằng tiền, được gọi là rủi ro:",
    "options": [
      "Rủi ro chung",
      "Rủi ro riêng",
      "Rủi ro thuần túy",
      "Rủi ro tài chính"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-562",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Mức trách nhiệm bảo hiểm đối với thiệt hại về tài sản do xe gắn máy (kể cả xe máy điện) và các loại xe tương tự theo quy định",
    "options": [
      "200 triệu",
      "150 triệu",
      "100 triệu",
      "50 triệu"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-563",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Công trường không là đối tượng phải mua bảo hiểm bắt buộc trong hoạt động đầu tư xây dựng:",
    "options": [
      "Công trình, hạng mục công trình có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng",
      "Công trình đầu tư xây dựng có ảnh hưởng xấu đến môi trường",
      "Công trình kỹ thuật công nghiệp",
      "Giao thông công cộng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-564",
    "category": "Bảo hiểm tài sản & thiệt hại",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật kinh doanh bảo hiểm, tỷ lệ hoa hồng bảo hiểm cháy nổ tự nguyện là:",
    "options": [
      "20%",
      "15%",
      "10%",
      "5%."
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-565",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Văn phòng đại diện nước ngoài tại Việt Nam có ít nhất bao nhiêu Đại lý Bảo hiểm?",
    "options": [
      "100",
      "200",
      "250",
      "Không có Đại lý"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-566",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Kiến thức chung",
    "question": "Rủi ro ngẫu nhiên là gì?",
    "options": [
      "Bất ngờ",
      "Không lường trước được về không gian, thời gian, cũng như mức độ nghiêm trọng",
      "Cả A và B đều đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-567",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Pháp luật kinh doanh bảo hiểm, thương tật toàn bộ vĩnh viễn của trường hợp mất 2.6 tay, chân tính như thế nào:",
    "options": [
      "Với tay từ cổ tay trở lên, chân từ mắt cá chân trở lên",
      "Với tay từ khủy tay trở lên, chân từ đầu gối chân trở lên",
      "Với tay từ bàn tay trở lên, chân từ bàn chân trở lên"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-568",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Ông A đầu tư chứng khoán, nếu mã cổ phiếu giảm thì gọi là rủi ro gì",
    "options": [
      "Rủi ro có đảm bảo",
      "Rủi ro thuần túy",
      "Rủi ro đầu cơ",
      "Rủi ro chung"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-569",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Dịch vụ phụ trợ bảo hiểm bao gồm:",
    "options": [
      "Tư vấn, đánh giá rủi ro bảo hiểm",
      "Tính toán bảo hiểm, giám định tổn thất bảo hiểm",
      "Hỗ trợ giải quyết bồi thường bảo hiểm",
      "A&C đúng",
      "A, B&C"
    ],
    "correctIndex": 4,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-570",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Tư vấn bảo hiểm là hoạt động nào sau đây:",
    "options": [
      "Cung cấp thông tin và tư vấn cho bên mua bảo hiểm về loại hình, sản phẩm, chương trình, điều kiện, điều khoản, phí bảo hiểm và doanh nghiệp bảo hiểm.",
      "Chỉ thực hiện tính toán bảo hiểm và xác định dự phòng nghiệp vụ.",
      "Chỉ thực hiện giám định tổn thất và quyết định số tiền bồi thường.",
      "A, B, C đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-571",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Tổn thất hoặc thiệt hại do cháy đối với các thiết bị hoặc hệ thống điện được bảo hiểm theo Điều khoản Bảo hiểm Thiết bị điện 4A.4B phát sinh do hoặc gây ra bởi sự quá tải, quá áp, đoản mạch, phóng hồ quang điện, tự nung nóng hay bị rò điện vì bất kỳ nguyên nhân nào (­_______ cả sét đánh), điền vào chỗ trống_____:",
    "options": [
      "Bao gồm",
      "Không bao gồm"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-572",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Bảo hiểm trách nhiệm dân sự bắt buộc xe cơ giới, doanh nghiệp bảo hiểm theo quy định phải có thời hạn giám định tổn thất xác định nguyên nhân và mức độ tổn thất làm căn cứ giải quyết bồi thường bảo hiểm:",
    "options": [
      "Trong vòng 1h",
      "Trong vòng 12h",
      "Trong vòng 24h",
      "Trong vòng 48h"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-574",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo pháp luật hiện hành từ ngày 01/07/2026, phát biểu nào đúng về các tiêu chuẩn riêng tại Điều 143 Luật Kinh doanh bảo hiểm đối với cá nhân trực tiếp thực hiện giám định tổn thất trong tổ chức cung cấp dịch vụ phụ trợ bảo hiểm:",
    "options": [
      "Điều 143 đã bị bãi bỏ, nên Luật Kinh doanh bảo hiểm không còn quy định bộ tiêu chuẩn riêng này.",
      "Vẫn bắt buộc đồng thời đủ 18 tuổi, có chứng chỉ giám định tổn thất và đáp ứng tiêu chuẩn giám định viên thương mại theo Điều 143.",
      "Chỉ cần từ đủ 18 tuổi và có năng lực hành vi dân sự đầy đủ theo Điều 143.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-575",
    "category": "Rủi ro & Khái niệm cơ bản",
    "subCategory": "Luật KDBH",
    "question": "Khi có sự thay đổi những yếu tố làm cơ sở để tính phí bảo hiểm dẫn đến giảm các rủi ro được bảo hiểm, căn cứ thỏa thuận trong hợp đồng bảo hiểm, bên mua bảo hiểm có quyền yêu cầu doanh nghiệp bảo hiểm, chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài thực hiện một trong các nội dung sau đây:",
    "options": [
      "Giảm phí bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm; tăng số tiền bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm; kéo dài thời hạn bảo hiểm;",
      "Mở rộng phạm vi bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm.",
      "Thu hẹp phạm vi bảo hiểm cho thời gian còn lại của hợp đồng bảo hiểm.",
      "A & B đúng",
      "A, B & C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-576",
    "category": "Bảo hiểm con người",
    "subCategory": "Con người",
    "question": "Theo Pháp luật Việt Nam, kinh doanh bảo hiểm đối với bảo hiểm sức khỏe, tổng các khoản chi thưởng hỗ trợ và quyền lợi khác của các đại lý bảo hiểm không vượt quá:",
    "options": [
      "50% hoa hồng đại lý bảo hiểm của tất cả các hợp đồng bảo hiểm thuộc bảo hiểm sức khỏe đã khai thác trong năm tài chính",
      "100% hoa hồng đại lý bảo hiểm của tất cả các hợp đồng bảo hiểm thuộc bảo hiểm sức khỏe đã khai thác trong năm tài chính",
      "30% Phí bảo hiểm của tất cả các hợp đồng bảo hiểm thuộc bảo hiểm sức khỏe đã khai thác trong năm tài chính",
      "50% Phí Bảo hiểm của tất cả các hợp đồng bảo hiểm thuộc bảo hiểm sức khỏe đã khai thác trong năm tài chính"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-578",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đơn bảo hiểm mọi rủi ro xây dựng.lắp đặt (CAR/EAR), “Mức khấu trừ” được hiểu là:",
    "options": [
      "Mức miễn thường có khấu trừ cho mọi sự cố",
      "Mức miễn thường có khấu trừ cho mỗi và mọi sự cố"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-579",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Chọn phương án đúng nhất về hoạt động đại lý bảo hiểm theo Luật kinh doanh bảo hiểm:",
    "options": [
      "Tư vấn sản phẩm bảo hiểm; thu xếp giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu phí bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm.",
      "Tư vấn sản phẩm bảo hiểm; giới thiệu sản phẩm bảo hiểm; chào bán sản phầm bảo hiểm; thu xếp việc giao kết hợp đồng bảo hiểm; thu thập hồ sơ để phục vụ việc giải quyết bồi thường, trả tiền bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-582",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Theo đơn bảo hiểm thiệt hại vật chất xe cơ giới (không có Điều khoản sửa đổi bổ sung), doanh nghiệp bảo hiểm bồi thường cho người được bảo hiểm đối với thiệt hại vật chất xe cơ giới do tai nạn bất ngờ, không lường trước nào sau đây:",
    "options": [
      "Mất cắp, mất cướp toàn bộ xe (có kết luận của cơ quan công an)",
      "Mất cắp bộ phận xe",
      "Đá văng trên đường làm vỡ kính xe",
      "A, C đúng",
      "A, B, C đúng"
    ],
    "correctIndex": 3,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-584",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Tiền lương, tiền công để duy trì nhân viên có thể được bảo hiểm trong loại hình bảo hiểm Gián đoạn kinh doanh không:",
    "options": [
      "Có",
      "Không"
    ],
    "correctIndex": 0,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-585",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo Đơn bảo hiểm “Mọi rủi ro tài sản” của Hiệp hội bảo hiểm Vương quốc Anh (ABI), tài sản nào sau đây được bảo hiểm:",
    "options": [
      "Đập",
      "Công trình đã bàn giao và đưa vào sử dụng",
      "Máy móc thiết bị đang lắp đặt"
    ],
    "correctIndex": 1,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-586",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Các yếu tố cần tính đến khi xác định phần giảm giá trị do hao mòn và xuống cấp tự nhiên theo thời gian sử dụng của các công trình kiến trúc hay máy móc thiết bị là:",
    "options": [
      "Thời gian sử dụng và mức độ khai thác",
      "Chế độ chăm sóc, bảo dưỡng; trình độ, tay nghề của người vận hành và những yếu tố liên quan khác",
      "A, B đúng"
    ],
    "correctIndex": 2,
    "explanation": "Đáp án đúng theo Luật Kinh doanh bảo hiểm số 08/2022/QH15 và giáo trình chuẩn GSC."
  },
  {
    "id": "q-gsc-589",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về tổ chức hoạt động của doanh nghiệp bảo hiểm:",
    "options": [
      "Tổ chức hoạt động ở trong nước của doanh nghiệp bảo hiểm, doanh nghiệp tái bảo hiểm bao gồm trụ sở chính, chi nhánh, văn phòng đại diện, địa điểm kinh doanh.",
      "Tổ chức hoạt động của chi nhánh doanh nghiệp bảo hiểm phi nhân thọ nước ngoài tại Việt Nam gồm: Trụ sở chính và chi nhánh trực thuộc.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-590",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, hoạt động của doanh nghiệp bảo hiểm chấp nhận rủi ro của người được bảo hiểm, trên cơ sở bên mua bảo hiểm đóng phí bảo hiểm để doanh nghiệp bảo hiểm bồi thường, trả tiền bảo hiểm khi xảy ra sự kiện bảo hiểm theo thỏa thuận trong hợp đồng bảo hiểm là:",
    "options": [
      "Kinh doanh bảo hiểm.",
      "Kinh doanh tái bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-591",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, thời hạn phải bồi thường, trả tiền bảo hiểm cho bên mua bảo hiểm kể từ ngày nhận được đầy đủ hồ sơ hợp lệ về yêu cầu bồi thường, trả tiền bảo hiểm (trường hợp không có thỏa thuận về thời hạn bồi thường, trả tiền bảo hiểm) là:",
    "options": [
      "15 ngày.",
      "30 ngày.",
      "45 ngày.",
      "60 ngày."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-592",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có nghĩa vụ nào sau đây:",
    "options": [
      "Giải thích rõ ràng, đầy đủ cho bên mua bảo hiểm về quyền lợi bảo hiểm, điều khoản loại trừ trách nhiệm bảo hiểm, quyền và nghĩa vụ của bên mua bảo hiểm khi giao kết hợp đồng bảo hiểm.",
      "Bồi thường, trả tiền bảo hiểm khi xảy ra sự kiện bảo hiểm.",
      "Giải thích bằng văn bản lý do từ chối bồi thường, trả tiền bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-593",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây đúng nhất về luật áp dụng cho hợp đồng bảo hiểm hàng hải:",
    "options": [
      "Hợp đồng bảo hiểm hàng hải được thực hiện theo quy định của Bộ luật Hàng hải; nội dung không quy định tại Bộ luật Hàng hải thì thực hiện theo quy định của Luật Kinh doanh bảo hiểm.",
      "Hợp đồng bảo hiểm hàng hải được áp dụng theo quy định của Luật Kinh doanh bảo hiểm; đối với những vấn đề mà Luật Kinh doanh bảo hiểm không quy định thì áp dụng theo quy định của Bộ luật Hàng hải.",
      "Nội dung liên quan đến hợp đồng bảo hiểm không được quy định trong Luật Kinh doanh bảo hiểm thì thực hiện theo quy định của Bộ luật Dân sự.",
      "A, C đúng.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-594",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có nghĩa vụ cung cấp cho bên mua bảo hiểm (chọn phương án đúng nhất):",
    "options": [
      "Bản yêu cầu bảo hiểm, bảng câu hỏi liên quan đến rủi ro được bảo hiểm, đối tượng bảo hiểm, quy tắc, điều kiện, điều khoản bảo hiểm.",
      "Mọi thông tin liên quan đến hợp đồng bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-595",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, trường hợp bên mua bảo hiểm cố ý cung cấp không đầy đủ thông tin nhằm giao kết hợp đồng bảo hiểm để được bồi thường, trả tiền bảo hiểm thì doanh nghiệp bảo hiểm có quyền:",
    "options": [
      "Đơn phương đình chỉ thực hiện hợp đồng và thu phí đến thời điểm phát hiện ra hành vi lừa dối của bên mua bảo hiểm.",
      "Đơn phương đình chỉ thực hiện hợp đồng và hoàn lại phí cho bên mua bảo hiểm tương ứng với thời gian còn lại của hợp đồng bảo hiểm.",
      "Chấm dứt hợp đồng bảo hiểm.",
      "Hủy bỏ hợp đồng bảo hiểm."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-596",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Doanh nghiệp bảo hiểm không được trả hoa hồng bảo hiểm cho đại lý bảo hiểm trong trường hợp đấu thầu. Yếu tố này có được quy định trong Luật Kinh doanh bảo hiểm không:",
    "options": [
      "Có.",
      "Không."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-597",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, doanh nghiệp bảo hiểm có các quyền nào sau đây trong hoạt động đại lý bảo hiểm:",
    "options": [
      "Quyết định mức chi trả hoa hồng đại lý bảo hiểm tối đa.",
      "Nhận và quản lý tiền ký quỹ hoặc tài sản thế chấp của đại lý bảo hiểm nếu có thỏa thuận trong hợp đồng đại lý bảo hiểm.",
      "Yêu cầu đại lý bảo hiểm thanh toán phí bảo hiểm thu được theo thỏa thuận trong hợp đồng bảo hiểm.",
      "B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-598",
    "category": "Đại lý bảo hiểm",
    "subCategory": "Luật KDBH",
    "question": "Theo Luật Kinh doanh bảo hiểm, phát biểu nào sau đây KHÔNG đúng về đại lý bảo hiểm:",
    "options": [
      "Tổ chức không được đồng thời làm đại lý bảo hiểm cho doanh nghiệp bảo hiểm khác nếu không được chấp thuận bằng văn bản của doanh nghiệp bảo hiểm mà tổ chức đó đang làm đại lý.",
      "Đại lý bảo hiểm có quyền hưởng hoa hồng đại lý bảo hiểm và các quyền lợi khác từ hoạt động đại lý bảo hiểm theo thỏa thuận trong hợp đồng đại lý bảo hiểm.",
      "Đại lý bảo hiểm có nghĩa vụ tham dự các khóa đào tạo, cập nhật kiến thức do doanh nghiệp bảo hiểm tổ chức.",
      "Đại lý bảo hiểm có thể xúi giục khách hàng hủy bỏ hợp đồng bảo hiểm đang có hiệu lực dưới mọi hình thức."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-599",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Phát biểu nào sau đây là SAI về chi phí ngăn ngừa và hạn chế tổn thất (sue and labour charges):",
    "options": [
      "Là chi phí dùng để ngăn ngừa và giảm thiểu tổn thất hoặc tổn hại được bảo hiểm.",
      "Được gánh chịu một cách hợp lý bởi người được bảo hiểm và/hoặc đại lý của họ.",
      "Là chi phí mà nếu cộng chung với các tổn thất khác trong cùng một sự kiện bảo hiểm không được vượt quá số tiền bảo hiểm.",
      "A, B, C đúng."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-600",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Trường hợp nào sau đây được gọi là hành vi tổn thất chung (general average act):",
    "options": [
      "Cứu hỏa trên tàu gây ướt hàng.",
      "Thuê tàu lai dắt tàu đến nơi an toàn.",
      "Đưa tàu lên cạn để cứu tàu và hàng hóa.",
      "A, B, C đúng."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-601",
    "category": "Nguyên tắc bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Ai có nghĩa vụ phải tuân thủ nguyên tắc \"Trung thực tuyệt đối\":",
    "options": [
      "Người bảo hiểm.",
      "Người được bảo hiểm.",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-602",
    "category": "Hợp đồng bảo hiểm",
    "subCategory": "Kiến thức chung",
    "question": "Chi phí cứu hộ chi trả cho lợi ích riêng của một quyền lợi được coi là chi phí ngăn ngừa và hạn chế tổn thất. Phát biểu này:",
    "options": [
      "Đúng.",
      "Không đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-603",
    "category": "Bảo hiểm xe cơ giới",
    "subCategory": "Xe cơ giới",
    "question": "Trong thời hạn bảo hiểm của hợp đồng bảo hiểm thiệt hại vật chất xe cơ giới, xe bị kẻ trộm đập kính lấy tài sản bên trong xe. Trường hợp này, doanh nghiệp bảo hiểm bồi thường cho người được bảo hiểm:",
    "options": [
      "Tổn thất đối với kính xe.",
      "Tổn thất (mất cắp) đối với tài sản trong xe.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-604",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Tổng số tiền bồi thường trong đơn bảo hiểm tài sản được hiểu là:",
    "options": [
      "Tổng số tiền bồi thường (gồm cả giới hạn phụ) và có thể vượt quá số tiền bảo hiểm.",
      "Tổng số tiền bồi thường (gồm cả giới hạn phụ) nhưng không được vượt quá số tiền bảo hiểm."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-605",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Chọn phương án đúng nhất về \"Nguyên tắc bồi thường\" trong bảo hiểm tài sản:",
    "options": [
      "Số tiền bồi thường mà người được bảo hiểm nhận được không được lớn hơn thiệt hại thực tế của họ trong sự kiện bảo hiểm (trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm).",
      "Số tiền bồi thường mà người được bảo hiểm nhận được có thể lớn hơn thiệt hại thực tế của họ trong sự kiện bảo hiểm (trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm).",
      "Số tiền bồi thường mà người được bảo hiểm nhận được tùy thuộc vào thỏa thuận giữa người bảo hiểm và người được bảo hiểm trong hợp đồng bảo hiểm (trừ trường hợp có thỏa thuận khác trong hợp đồng bảo hiểm)."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-606",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm \"Gián đoạn kinh doanh\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI), chọn phương án đúng nhất đối với bảo hiểm tiền lương, tiền công:",
    "options": [
      "Tiền lương, tiền công được bảo hiểm như là một thành phần chi phí cố định trong Lợi nhuận gộp.",
      "Tiền lương, tiền công có thể được tách ra khỏi Lợi nhuận gộp để được bảo hiểm riêng.",
      "A, B đúng."
    ],
    "correctIndex": 2,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-607",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo quy tắc bảo hiểm \"Mọi rủi ro tài sản\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI), trong trường hợp xảy ra quá tải về điện của một thiết bị dẫn đến hỏa hoạn xảy ra trong phạm vi khu vực được bảo hiểm, chi phí nào sau đây KHÔNG thuộc trách nhiệm bảo hiểm:",
    "options": [
      "Chi phí khắc phục thiệt hại của chính các máy móc hoặc thiết bị đó.",
      "Chi phí khắc phục thiệt hại đối với các tài sản được bảo hiểm khác do hỏa hoạn gây ra.",
      "A, B đúng."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-608",
    "category": "Tái bảo hiểm",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Đối với đơn bảo hiểm mọi rủi ro xây dựng (CAR) của nhà tái bảo hiểm Munich Re, cả tổn thất trực tiếp và tổn thất gián tiếp có nguyên nhân do lỗi thiết kế đều không thuộc phạm vi bảo hiểm. Phát biểu này:",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correctIndex": 0,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-609",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Trong khi là (ủi) quần áo, do nhiệt độ bàn là cao dẫn đến quần áo đang là bị cháy và làm thiệt hại các tài sản được bảo hiểm và nhà máy lân cận. Tổn thất nào sau đây thuộc phạm vi bảo hiểm theo đơn bảo hiểm \"Hỏa hoạn và các rủi ro đặc biệt\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI):",
    "options": [
      "Quần áo đang là (ủi).",
      "Tài sản được bảo hiểm xung quanh.",
      "Tài sản nhà máy lân cận.",
      "A, B, C đúng."
    ],
    "correctIndex": 1,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  },
  {
    "id": "q-gsc-610",
    "category": "Tài sản kỹ thuật",
    "subCategory": "Tài sản kỹ thuật",
    "question": "Theo đơn bảo hiểm \"Mọi rủi ro tài sản\" của Hiệp hội bảo hiểm Vương quốc Anh (ABI), trường hợp tài sản cố định được bảo hiểm theo điều khoản \"Giá trị thay thế mới\", cơ sở giải quyết bồi thường nào sau đây KHÔNG đúng:",
    "options": [
      "Theo \"Nguyên giá\" tài sản (không trừ khấu hao).",
      "Chi phí thay thế tài sản tương tự, cùng loại, cùng tính năng, không được tốt hơn tình trạng của tài sản đó khi còn mới.",
      "Nếu giá trị thay thế mới tại thời điểm tổn thất lớn hơn số tiền bảo hiểm thì bồi thường theo tỷ lệ giữa số tiền bảo hiểm/giá trị bảo hiểm.",
      "Bồi thường tổn thất tài sản (hoặc bộ phận) mới mà không cần xem xét số tiền bảo hiểm của tài sản (hoặc bộ phận) tổn thất đó."
    ],
    "correctIndex": 3,
    "explanation": "Căn cứ: Đề cương Bảo Long. Đáp án chuẩn theo Luật KDBH 2022 và Thông tư 67/2023/TT-BTC."
  }
];
