/**
 * Preprocess Vietnamese insurance text for natural speech synthesis
 */
export function preprocessTextForSpeech(rawText: string): string {
  let text = rawText;

  // Replacements for acronyms and special insurance terms
  const replacements: [RegExp, string][] = [
    [/\bHĐBH\b/g, 'Hợp đồng bảo hiểm'],
    [/\bDNBH\b/g, 'Doanh nghiệp bảo hiểm'],
    [/\bBMBH\b/g, 'Bên mua bảo hiểm'],
    [/\bNĐBH\b/g, 'Người được bảo hiểm'],
    [/\bSTBH\b/g, 'Số tiền bảo hiểm'],
    [/\bĐLBH\b/g, 'Đại lý bảo hiểm'],
    [/\bLKDBH\b/g, 'Luật Kinh doanh bảo hiểm'],
    [/\bTNDS\b/g, 'Trách nhiệm dân sự'],
    [/\bBHXH\b/g, 'Bảo hiểm xã hội'],
    [/\bBHYT\b/g, 'Bảo hiểm y tế'],
    [/\bCSĐT\b/g, 'Cơ sở đào tạo'],
    [/\bCục QLGSBH\b/g, 'Cục Quản lý giám sát bảo hiểm'],
    [/\bQLGSBH\b/g, 'Quản lý giám sát bảo hiểm'],
    [/\bSPBH\b/g, 'Sản phẩm bảo hiểm'],
    [/\bSĐBS\b/g, 'Điều khoản sửa đổi bổ sung'],
    [/\bCAR\b/g, 'C A R, bảo hiểm mọi rủi ro xây dựng'],
    [/\bEAR\b/g, 'E A R, bảo hiểm mọi rủi ro lắp đặt'],
    [/\bCPM\b/g, 'C P M, bảo hiểm máy móc thi công'],
    [/\bCECR\b/g, 'C E C R, bảo hiểm công trình dân dụng đã hoàn thành'],
    [/\bMB\b/g, 'M B, bảo hiểm đổ vỡ máy móc'],
    [/\bBI\b/g, 'B I, bảo hiểm gián đoạn kinh doanh'],
    [/\bQS\b/g, 'Quota Share, tái bảo hiểm số thành'],
    [/\bSPL\b/g, 'Surplus, tái bảo hiểm mức dôi'],
    [/\bXL\b/g, 'Excess of Loss, vượt mức bồi thường'],
    [/\bXOL\b/g, 'Excess of Loss, vượt mức bồi thường'],
    [/\bSL\b/g, 'Stop Loss, vượt tỷ lệ bồi thường'],
    [/\bTreaty\b/gi, 'Tái bảo hiểm cố định theo hợp đồng'],
    [/\bFac\b/gi, 'Tái bảo hiểm tạm thời'],
    [/\bPNT\b/g, 'Phi nhân thọ'],
    [/\bBHNT\b/g, 'Bảo hiểm nhân thọ'],
    [/\bTT 67\b/g, 'Thông tư 67'],
    [/\bNĐ 46\b/g, 'Nghị định 46'],
    [/\bNĐ 67\b/g, 'Nghị định 67'],
    [/≥\s*30/g, 'tối thiểu 30'],
    [/≥\s*15/g, 'tối thiểu 15'],
    [/≥\s*42/g, 'tối thiểu 42'],
    [/≥\s*75%/g, 'từ 75% trở lên'],
    [/•/g, ' '],
    [/—/g, ' '],
    [/[#*`_\[\]]/g, ' '],
    [/\s+/g, ' ']
  ];

  for (const [pattern, rep] of replacements) {
    text = text.replace(pattern, rep);
  }

  return text.trim();
}
