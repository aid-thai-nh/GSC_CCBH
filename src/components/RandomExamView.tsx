import React, { useState, useEffect, useMemo } from 'react';
import { QUESTION_BANK, Question } from '../data/questionPool';
import {
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  BarChart3,
  Flame,
  AlertTriangle,
  History,
  Trash2,
  Filter,
  Layers,
  BookCheck,
  Check,
  Search,
  BookOpen,
  Info,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';

interface ExamAttemptRecord {
  id: string;
  timestamp: number;
  modeName: string;
  score: number;
  total: number;
  timeSpentSeconds: number;
  isPerfect: boolean;
  isPass: boolean;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  originalCorrectAnswer: string;
  shuffledCorrectIndex: number;
}

const STORAGE_KEY = 'insurance_exam_stats_v3';
const HISTORY_KEY = 'insurance_exam_history_v3';
const WRONG_QUESTIONS_KEY = 'insurance_exam_wrong_ids_v3';

// Proper Fisher-Yates shuffle algorithm
function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const RandomExamView: React.FC = () => {
  // Setup Step 1: Exam Type Mode ('ALL' or 'SINGLE')
  const [examScopeMode, setExamScopeMode] = useState<'ALL' | 'SINGLE'>('ALL');
  // If 'SINGLE', which specific chapter is selected:
  const [selectedSpecificTopic, setSelectedSpecificTopic] = useState<string>('Quy định thi & chứng chỉ');
  // Setup Step 2: Question Count (10, 20, 40)
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(40);

  // Persistent stats
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [perfectScores, setPerfectScores] = useState<number>(0);
  const [passCount, setPassCount] = useState<number>(0);
  const [bestScoreRatio, setBestScoreRatio] = useState<number>(0);
  const [history, setHistory] = useState<ExamAttemptRecord[]>([]);
  const [wrongQuestionIds, setWrongQuestionIds] = useState<string[]>([]);

  // Exam session state
  const [currentQuestions, setCurrentQuestions] = useState<ShuffledQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [filterWrongOnly, setFilterWrongOnly] = useState<boolean>(false);

  // Bank search drawer state
  const [showBankModal, setShowBankModal] = useState<boolean>(false);
  const [bankSearchQuery, setBankSearchQuery] = useState<string>('');
  const [bankCategoryFilter, setBankCategoryFilter] = useState<string>('ALL');

  // Traps explanation drawer state
  const [showTrapsModal, setShowTrapsModal] = useState<boolean>(false);

  // Specific topics list
  const specificTopics = [
    {
      id: 'Quy định thi & chứng chỉ',
      title: 'Quy định thi & chứng chỉ',
      badge: 'Cấu trúc & mốc thời hạn',
      count: QUESTION_BANK.filter((q) => q.category === 'Quy định thi & chứng chỉ').length
    },
    {
      id: 'Từ viết tắt & thuật ngữ',
      title: 'Từ viết tắt & thuật ngữ',
      badge: 'CAR, EAR, CPM, Tái bảo hiểm',
      count: QUESTION_BANK.filter((q) => q.category === 'Từ viết tắt & thuật ngữ').length
    },
    {
      id: 'Đại lý bảo hiểm',
      title: 'Đại lý bảo hiểm',
      badge: 'Quyền hạn, hoa hồng TT 67',
      count: QUESTION_BANK.filter((q) => q.category === 'Đại lý bảo hiểm').length
    },
    {
      id: 'Nguyên tắc bảo hiểm',
      title: 'Nguyên tắc bảo hiểm',
      badge: '10 nguyên tắc, Thế quyền, Khoán',
      count: QUESTION_BANK.filter((q) => q.category === 'Nguyên tắc bảo hiểm').length
    },
    {
      id: 'Rủi ro & Khái niệm cơ bản',
      title: 'Rủi ro & Khái niệm cơ bản',
      badge: 'Hazard - Peril - Loss, 5 biện pháp QTRR',
      count: QUESTION_BANK.filter((q) => q.category === 'Rủi ro & Khái niệm cơ bản').length
    }
  ];

  // Load stats from localStorage on mount
  useEffect(() => {
    try {
      const savedStats = localStorage.getItem(STORAGE_KEY);
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        setTotalAttempts(parsed.totalAttempts || 0);
        setPerfectScores(parsed.perfectScores || 0);
        setPassCount(parsed.passCount || 0);
        setBestScoreRatio(parsed.bestScoreRatio || 0);
      }
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
      const savedWrongIds = localStorage.getItem(WRONG_QUESTIONS_KEY);
      if (savedWrongIds) {
        setWrongQuestionIds(JSON.parse(savedWrongIds));
      }
    } catch (e) {
      console.error('Error loading stats from localStorage', e);
    }
    // Generate initial exam (Default: Tất cả chuyên đề lộn xộn, 40 câu)
    generateNewExam('ALL', '', 40);
  }, []);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, isSubmitted]);

  // Generate a new random exam with chosen mode, topic, and count
  const generateNewExam = (
    scopeOverride?: 'ALL' | 'SINGLE',
    topicOverride?: string,
    countOverride?: number,
    onlyFromWrongIds?: string[]
  ) => {
    const activeScope = scopeOverride !== undefined ? scopeOverride : examScopeMode;
    const activeTopic = topicOverride !== undefined ? topicOverride : selectedSpecificTopic;
    const activeCount = countOverride !== undefined ? countOverride : selectedQuestionCount;

    let sourcePool = [...QUESTION_BANK];

    // Filter by topic if 'SINGLE'
    if (activeScope === 'SINGLE' && activeTopic) {
      sourcePool = sourcePool.filter((q) => q.category === activeTopic);
    }

    // Filter by wrong question IDs if requested
    if (onlyFromWrongIds && onlyFromWrongIds.length > 0) {
      const filtered = sourcePool.filter((q) => onlyFromWrongIds.includes(q.id));
      if (filtered.length > 0) {
        sourcePool = filtered;
      }
    }

    // Shuffle pool completely using Fisher-Yates
    const shuffledBank = shuffleArray(sourcePool);

    // Take requested count (or max available)
    const targetSize = Math.min(activeCount, shuffledBank.length);
    const selected = shuffledBank.slice(0, targetSize);

    // Shuffle options for each question with Fisher-Yates and index-exact matching
    const preparedQuestions: ShuffledQuestion[] = selected.map((q) => {
      const originalCorrectAnswer = q.options[q.correctIndex];
      const indexedOptions = q.options.map((opt, i) => ({ opt, originalIndex: i }));
      const shuffled = shuffleArray(indexedOptions);
      // Strictly match by originalIndex to guarantee 100% precision
      const shuffledCorrectIndex = shuffled.findIndex((item) => item.originalIndex === q.correctIndex);
      const shuffledOptions = shuffled.map((item) => item.opt);
      return {
        ...q,
        shuffledOptions,
        originalCorrectAnswer,
        shuffledCorrectIndex
      };
    });

    setCurrentQuestions(preparedQuestions);
    setUserAnswers({});
    setIsSubmitted(false);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setFilterWrongOnly(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit and grade exam
  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Calculate score
    let correctCount = 0;
    const newWrongIds: string[] = [];

    currentQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.shuffledCorrectIndex) {
        correctCount += 1;
      } else {
        newWrongIds.push(q.id);
      }
    });

    const totalQuestions = currentQuestions.length;
    const ratio = totalQuestions > 0 ? correctCount / totalQuestions : 0;
    const isPerfect = correctCount === totalQuestions && totalQuestions > 0;
    const isPass = ratio >= 0.75; // ≥ 75% standard

    // Update persistent stats
    const newTotalAttempts = totalAttempts + 1;
    const newPerfectScores = perfectScores + (isPerfect ? 1 : 0);
    const newPassCount = passCount + (isPass ? 1 : 0);
    const newBestScoreRatio = Math.max(bestScoreRatio, ratio);

    setTotalAttempts(newTotalAttempts);
    setPerfectScores(newPerfectScores);
    setPassCount(newPassCount);
    setBestScoreRatio(newBestScoreRatio);

    // Save stats
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          totalAttempts: newTotalAttempts,
          perfectScores: newPerfectScores,
          passCount: newPassCount,
          bestScoreRatio: newBestScoreRatio
        })
      );
    } catch (e) {
      console.error('Error saving stats to localStorage', e);
    }

    // Build mode label for history
    const modeLabel =
      examScopeMode === 'ALL'
        ? `Tất cả chuyên đề (${totalQuestions} câu)`
        : `${selectedSpecificTopic} (${totalQuestions} câu)`;

    // Update history
    const newRecord: ExamAttemptRecord = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      modeName: modeLabel,
      score: correctCount,
      total: totalQuestions,
      timeSpentSeconds: timerSeconds,
      isPerfect,
      isPass
    };

    const newHistory = [newRecord, ...history].slice(0, 30);
    setHistory(newHistory);
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error('Error saving history to localStorage', e);
    }

    // Update wrong questions pool
    const finalWrong = Array.from(
      new Set([...wrongQuestionIds, ...newWrongIds])
    ).filter(
      (id) => !currentQuestions.some((q) => q.id === id && userAnswers[id] === q.shuffledCorrectIndex)
    );
    setWrongQuestionIds(finalWrong);
    try {
      localStorage.setItem(WRONG_QUESTIONS_KEY, JSON.stringify(finalWrong));
    } catch (e) {
      console.error('Error saving wrong question IDs to localStorage', e);
    }

    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Reset all stats
  const handleResetStats = () => {
    if (
      window.confirm(
        'Bạn có chắc chắn muốn đặt lại toàn bộ thống kê (số lần thi, số lần đạt 20/20, lịch sử làm bài)?'
      )
    ) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(HISTORY_KEY);
      localStorage.removeItem(WRONG_QUESTIONS_KEY);
      setTotalAttempts(0);
      setPerfectScores(0);
      setPassCount(0);
      setBestScoreRatio(0);
      setHistory([]);
      setWrongQuestionIds([]);
      generateNewExam();
    }
  };

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;

  const currentScore = useMemo(() => {
    if (!isSubmitted) return 0;
    return currentQuestions.reduce((acc, q) => {
      return userAnswers[q.id] === q.shuffledCorrectIndex ? acc + 1 : acc;
    }, 0);
  }, [isSubmitted, currentQuestions, userAnswers]);

  const questionsToRender = useMemo(() => {
    if (isSubmitted && filterWrongOnly) {
      return currentQuestions.filter((q) => userAnswers[q.id] !== q.shuffledCorrectIndex);
    }
    return currentQuestions;
  }, [currentQuestions, isSubmitted, filterWrongOnly, userAnswers]);

  const passingThreshold = Math.ceil(currentQuestions.length * 0.75);

  // Filtered bank list for search modal
  const filteredBank = useMemo(() => {
    return QUESTION_BANK.filter((q) => {
      const matchCat = bankCategoryFilter === 'ALL' || q.category === bankCategoryFilter;
      const query = bankSearchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        q.question.toLowerCase().includes(query) ||
        q.explanation.toLowerCase().includes(query) ||
        q.options.some((opt) => opt.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
  }, [bankSearchQuery, bankCategoryFilter]);

  // Top 12 Traps list
  const topTraps = [
    {
      title: 'Bẫy 1: Phúc khảo bài thi chỉ áp dụng cho thi GIẤY',
      detail:
        'Chỉ các kỳ thi trên giấy (hình thức Viết 1) mới được nộp đơn phúc khảo (hạn nộp 20 ngày, chấm trong 5 ngày). Thi trên MÁY TÍNH (Online 1, Online 2, Viết 2) do phần mềm chấm tự động nên TUYỆT ĐỐI KHÔNG phúc khảo.'
    },
    {
      title: 'Bẫy 2: Cơ quan phê duyệt vs Cơ sở cấp chứng chỉ',
      detail:
        'Cục Quản lý, giám sát bảo hiểm (Bộ Tài chính) phê duyệt kết quả thi. Nhưng CƠ SỞ ĐÀO TẠO (CSĐT) mới là đơn vị trực tiếp in và cấp chứng chỉ cho thí sinh (trong vòng 3 ngày làm việc).'
    },
    {
      title: 'Bẫy 3: Quyền hạn của Đại lý — 4 KHÔNG TUYỆT ĐỐI',
      detail:
        'Đại lý được tư vấn, giới thiệu, chào bán, thu xếp giao kết, thu phí, thu thập hồ sơ bồi thường. Nhưng đại lý KHÔNG ĐƯỢC ký hợp đồng bảo hiểm, KHÔNG giám định tổn thất, KHÔNG quyết định bồi thường và KHÔNG thu xếp tái bảo hiểm.'
    },
    {
      title: 'Bẫy 4: Hoa hồng bắt buộc Xe máy vs Ô tô (Thông tư 67)',
      detail:
        'Bảo hiểm bắt buộc TNDS xe máy có hoa hồng lên tới 20% (cao nhất nhóm bắt buộc). Nhưng bắt buộc TNDS xe Ô TÔ chỉ có 5% (gấp 4 lần chênh lệch).'
    },
    {
      title: 'Bẫy 5: Cháy nổ Bắt buộc vs Tự nguyện',
      detail:
        'Cháy nổ BẮT BUỘC hoa hồng tối đa chỉ 5%. Còn cháy nổ TỰ NGUYỆN hoa hồng tối đa là 10%.'
    },
    {
      title: 'Bẫy 6: Thời gian không hoạt động liên tục bị mất chứng chỉ',
      detail:
        'Nếu đại lý không hoạt động đại lý bảo hiểm liên tục trong thời gian 03 NĂM thì chứng chỉ đại lý hết giá trị sử dụng và phải thi lại từ đầu (không phải 1 hay 2 năm).'
    },
    {
      title: 'Bẫy 7: Thời hạn cấm thi khi bị thu hồi chứng chỉ do gian lận',
      detail:
        'Cá nhân bị thu hồi chứng chỉ do gian lận hoặc vi phạm quy chế thi bị cấm thi lấy chứng chỉ mới trong thời hạn 12 THÁNG kế tiếp (1 năm).'
    },
    {
      title: 'Bẫy 8: Đơn CAR có bảo hiểm máy móc thi công không?',
      detail:
        'KHÔNG! Đơn bảo hiểm CAR (Contractors All Risks) chỉ bảo hiểm cho bản thân công trình đang thi công. Máy móc thi công (cần cẩu, máy xúc, máy ủi) phải mua đơn bảo hiểm riêng là CPM.'
    },
    {
      title: 'Bẫy 9: Cá nhân làm đại lý cho 2 DNBH cùng loại hình',
      detail:
        'Cá nhân tuyệt đối KHÔNG được đồng thời làm đại lý cho DNBH khác trong CÙNG LOẠI HÌNH bảo hiểm (kể cả có thỏa thuận). Riêng TỔ CHỨC thì ĐƯỢC PHÉP nếu có chấp thuận bằng văn bản của DNBH đang làm đại lý.'
    },
    {
      title: 'Bẫy 10: Trần chi thưởng, hỗ trợ đại lý hàng năm',
      detail:
        'Đối với bảo hiểm PHI NHÂN THỌ: Tổng thưởng hỗ trợ không vượt quá 50% tổng hoa hồng đại lý. Đối với bảo hiểm SỨC KHỎE: Không vượt quá 100% tổng hoa hồng đại lý.'
    },
    {
      title: 'Bẫy 11: Hoa hồng thân tàu biển vs tàu không phải tàu biển',
      detail:
        'Bảo hiểm thân tàu BIỂN và TNDS chủ tàu biển chỉ có 5%. Ngược lại, tàu KHÔNG PHẢI TÀU BIỂN (tàu sông, sà lan, tàu cá nội địa) hoa hồng tối đa là 15%.'
    },
    {
      title: 'Bẫy 12: Cơ sở tính hoa hồng đại lý bảo hiểm',
      detail:
        'Hoa hồng đại lý được tính trên PHÍ BẢO HIỂM THỰC TẾ THU ĐƯỢC của từng hợp đồng bảo hiểm, KHÔNG tính trên Số tiền bảo hiểm (STBH) và KHÔNG tính trên doanh thu toàn công ty.'
    },
    {
      title: 'Bẫy 13: Thế quyền KHÔNG ÁP DỤNG cho BH Nhân thọ & Khoán',
      detail:
        'Nguyên tắc Thế quyền CHỈ áp dụng cho bảo hiểm tài sản và bảo hiểm trách nhiệm dân sự. TUYỆT ĐỐI KHÔNG áp dụng cho bảo hiểm nhân thọ và quyền lợi khoán sức khỏe. Người thứ ba gây tử vong cho NĐBH, DNBH chi trả tiền tử kỳ xong KHÔNG ĐƯỢC quyền đòi lại tiền từ người thứ ba.'
    },
    {
      title: 'Bẫy 14: Thời điểm của Quyền lợi có thể được bảo hiểm',
      detail:
        'Bảo hiểm nhân thọ / con người: Quyền lợi chỉ cần có tại THỜI ĐIỂM KÝ HỢP ĐỒNG (sau đó ly hôn hợp đồng vẫn có hiệu lực). Bảo hiểm tài sản: Quyền lợi bắt buộc phải có tại THỜI ĐIỂM TỔN THẤT (bán xe rồi mà xe cháy thì người bán không được bồi thường).'
    },
    {
      title: 'Bẫy 15: Bảo hiểm nhân thọ áp dụng NGUYÊN TẮC KHOÁN',
      detail:
        'Tính mạng con người là vô giá, không áp dụng nguyên tắc bồi thường và không bị giới hạn bảo hiểm trùng. Một người mua 3 hợp đồng nhân thọ ở 3 công ty khác nhau thì khi có sự kiện bảo hiểm sẽ ĐƯỢC NHẬN TIỀN TỪ CẢ 3 CÔNG TY ĐỒNG THỜI.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* ============================================================== */}
      {/* BẢNG ĐIỀU KHIỂN CHỌN ĐỀ & SỐ CÂU                                */}
      {/* ============================================================== */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 rounded-full border border-amber-300/80 dark:border-amber-700/80 mb-2">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Cấu hình chế độ thi sát hạch
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Phòng Luyện Thi Trắc Nghiệm Chuẩn ĐLBH
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Ngân hàng gồm <strong>{QUESTION_BANK.length} câu hỏi chuẩn</strong> bám sát Luật KDBH 2022 và Thông tư 67/2023/TT-BTC.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowTrapsModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              12 bẫy thi hay nhầm
            </button>
            <button
              onClick={() => setShowBankModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              Tra cứu toàn bộ {QUESTION_BANK.length} câu
            </button>
            <button
              onClick={() => generateNewExam()}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs md:text-sm font-bold shadow-md shadow-blue-500/20 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Đổi đề thi mới
            </button>
          </div>
        </div>

        {/* BƯỚC 1: CHỌN LOẠI ĐỀ (TẤT CẢ CHUYÊN ĐỀ LỘN XỘN HOẶC CHUYÊN ĐỀ RIÊNG LẺ) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              Bước 1: Chọn phạm vi đề thi
            </label>
            <span className="text-xs text-slate-500">
              {examScopeMode === 'ALL'
                ? 'Đang trộn ngẫu nhiên tất cả 4 chuyên đề'
                : `Đang ôn chuyên đề: ${selectedSpecificTopic}`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option 1: Tất cả chuyên đề lộn xộn */}
            <button
              type="button"
              onClick={() => {
                setExamScopeMode('ALL');
                generateNewExam('ALL', selectedSpecificTopic, selectedQuestionCount);
              }}
              className={`p-4 rounded-2xl border text-left transition relative cursor-pointer ${
                examScopeMode === 'ALL'
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-blue-500'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      Tất cả chuyên đề (Lộn xộn ngẫu nhiên)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Chuẩn sát hạch
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Đề thi bốc ngẫu nhiên từ Quy định thi, Từ viết tắt, Đại lý và Nguyên tắc bảo hiểm.
                  </p>
                </div>
                {examScopeMode === 'ALL' && (
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </button>

            {/* Option 2: Chọn chuyên đề riêng lẻ */}
            <button
              type="button"
              onClick={() => {
                setExamScopeMode('SINGLE');
                generateNewExam('SINGLE', selectedSpecificTopic, selectedQuestionCount);
              }}
              className={`p-4 rounded-2xl border text-left transition relative cursor-pointer ${
                examScopeMode === 'SINGLE'
                  ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 ring-2 ring-blue-500'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      Chuyên đề riêng lẻ (Ôn chuyên sâu)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      Tự chọn
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Chỉ thi đúng 1 chuyên đề bạn muốn rèn luyện cho đến khi thành thạo 100%.
                  </p>
                </div>
                {examScopeMode === 'SINGLE' && (
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* Sub-selector: Nếu chọn 'SINGLE', hiện danh sách 4 chuyên đề để bấm */}
          {examScopeMode === 'SINGLE' && (
            <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-2 mt-2">
              <span className="text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-purple-600" />
                Chọn chuyên đề bạn muốn thi:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {specificTopics.map((topic) => {
                  const isSelected = selectedSpecificTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        setSelectedSpecificTopic(topic.id);
                        generateNewExam('SINGLE', topic.id, selectedQuestionCount);
                      }}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-purple-300'
                      }`}
                    >
                      <div className="font-bold text-xs leading-snug">{topic.title}</div>
                      <div className="flex items-center justify-between text-[11px] mt-2 opacity-90">
                        <span>{topic.badge}</span>
                        <span className="font-mono font-bold">({topic.count} câu)</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* BƯỚC 2: CHỌN SỐ LƯỢNG CÂU HỎI (10 - 20 - 40 CÂU ĐÚNG ĐLBH CƠ BẢN) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4 text-emerald-600" />
              Bước 2: Chọn số lượng câu muốn thi
            </label>
            <span className="text-xs text-slate-500">
              Đang chọn: <strong>{selectedQuestionCount} câu</strong> (Cần đúng ≥ {Math.ceil(selectedQuestionCount * 0.75)} câu để đỗ)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* 10 CÂU */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(10);
                generateNewExam(examScopeMode, selectedSpecificTopic, 10);
              }}
              className={`p-3.5 rounded-2xl border text-center transition cursor-pointer ${
                selectedQuestionCount === 10
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500 font-bold'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 bg-slate-50/40 dark:bg-slate-800/30'
              }`}
            >
              <div className="text-base md:text-lg font-black font-mono">10 CÂU</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Ôn siêu tốc (Đúng ≥ 8)</div>
            </button>

            {/* 20 CÂU */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(20);
                generateNewExam(examScopeMode, selectedSpecificTopic, 20);
              }}
              className={`p-3.5 rounded-2xl border text-center transition cursor-pointer ${
                selectedQuestionCount === 20
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 ring-2 ring-amber-500 font-bold'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 bg-slate-50/40 dark:bg-slate-800/30'
              }`}
            >
              <div className="text-base md:text-lg font-black font-mono">20 CÂU</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Luyện 20/20 (Đúng ≥ 15)</div>
            </button>

            {/* 40 CÂU CHUẨN ĐLBH CƠ BẢN */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(40);
                generateNewExam(examScopeMode, selectedSpecificTopic, 40);
              }}
              className={`p-3.5 rounded-2xl border text-center transition cursor-pointer relative ${
                selectedQuestionCount === 40
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 ring-2 ring-blue-600 font-bold'
                  : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 bg-slate-50/40 dark:bg-slate-800/30'
              }`}
            >
              <span className="absolute -top-2.5 right-2 text-[9px] font-bold px-2 py-0.5 bg-blue-600 text-white rounded-full uppercase shadow-xs">
                Chuẩn Bộ TC
              </span>
              <div className="text-base md:text-lg font-black font-mono">40 CÂU</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Chuẩn ĐLBH (Đúng ≥ 30)</div>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* THỐNG KÊ TIẾN ĐỘ & BẢNG VÀNG                                  */}
      {/* ============================================================== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Card 1: Tổng số lần thi */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono leading-none">
              {totalAttempts}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              Tổng số lần thi
            </div>
          </div>
        </div>

        {/* Card 2: Số lần đạt điểm tối đa */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-yellow-200" />
          </div>
          <div>
            <div className="text-2xl font-black font-mono leading-none flex items-center gap-2">
              {perfectScores}
              {perfectScores > 0 && <span className="text-sm">🏆</span>}
            </div>
            <div className="text-xs text-amber-100 mt-1 font-semibold">
              Số lần đạt 100% điểm
            </div>
          </div>
        </div>

        {/* Card 3: Số lần đạt chuẩn đỗ */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono leading-none">
              {passCount}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              Số lần đạt chuẩn đỗ (≥75%)
            </div>
          </div>
        </div>

        {/* Card 4: Tỷ lệ cao nhất */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono leading-none">
              {Math.round(bestScoreRatio * 100)}%
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
              Điểm số cao nhất
            </div>
          </div>
        </div>
      </div>

      {/* DANH SÁCH CÂU HAY SAI NẾU CÓ */}
      {wrongQuestionIds.length > 0 && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            <div className="text-xs text-rose-900 dark:text-rose-200">
              Bạn đang có <strong>{wrongQuestionIds.length} câu</strong> làm sai trong các lần thi trước. Hãy rèn luyện lại để đạt điểm tối đa!
            </div>
          </div>
          <button
            onClick={() => generateNewExam(examScopeMode, selectedSpecificTopic, selectedQuestionCount, wrongQuestionIds)}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Làm lại {wrongQuestionIds.length} câu hay sai
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* THANH TRẠNG THÁI BÀI THI HIỆN TẠI                             */}
      {/* ============================================================== */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg">
            {examScopeMode === 'ALL'
              ? `Tất cả chuyên đề (${currentQuestions.length} câu)`
              : `${selectedSpecificTopic} (${currentQuestions.length} câu)`}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Thời gian: {formatTime(timerSeconds)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-600 dark:text-slate-400">
            Tiến độ: <strong>{answeredCount}</strong> / {currentQuestions.length} câu
          </div>
          {!isSubmitted ? (
            <button
              onClick={handleSubmitExam}
              disabled={answeredCount === 0}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold rounded-xl text-xs transition shadow-xs cursor-pointer disabled:cursor-not-allowed"
            >
              Nộp bài chấm điểm
            </button>
          ) : (
            <button
              onClick={() => generateNewExam()}
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition shadow-xs cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Làm đề ngẫu nhiên mới
            </button>
          )}
        </div>
      </div>

      {/* KẾT QUẢ SAU KHI NỘP BÀI */}
      {isSubmitted && (
        <div
          className={`p-6 rounded-3xl border transition-all ${
            currentScore === currentQuestions.length
              ? 'bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-amber-950/40 dark:to-amber-900/20 border-amber-300 dark:border-amber-700'
              : currentScore >= passingThreshold
              ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/60 dark:from-emerald-950/40 dark:to-emerald-900/20 border-emerald-300 dark:border-emerald-700'
              : 'bg-gradient-to-br from-rose-50 to-rose-100/60 dark:from-rose-950/40 dark:to-rose-900/20 border-rose-300 dark:border-rose-700'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {currentScore === currentQuestions.length
                    ? '🏆'
                    : currentScore >= passingThreshold
                    ? '🎉'
                    : '📖'}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                  {currentScore === currentQuestions.length
                    ? 'XUẤT SẮC! ĐẠT ĐIỂM TUYỆT ĐỐI 100%'
                    : currentScore >= passingThreshold
                    ? 'CHÚC MỪNG BẠN ĐÃ ĐỖ KỲ THI!'
                    : 'CHƯA ĐẠT CHUẨN ĐỖ — CẦN TIẾP TỤC RÈN LUYỆN'}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Kết quả bài thi: <strong>{currentScore} / {currentQuestions.length} câu</strong> (Đạt{' '}
                {Math.round((currentScore / currentQuestions.length) * 100)}%). Tiêu chuẩn đỗ sát hạch Bộ Tài chính là từ 75% trở lên (≥ {passingThreshold} câu).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterWrongOnly(!filterWrongOnly)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center gap-1.5 ${
                  filterWrongOnly
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {filterWrongOnly ? 'Hiện tất cả câu hỏi' : `Chỉ xem ${currentQuestions.length - currentScore} câu sai`}
              </button>
              <button
                onClick={() => generateNewExam()}
                className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs md:text-sm font-bold shadow-md transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Random đề tiếp theo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* DANH SÁCH CÂU HỎI                                              */}
      {/* ============================================================== */}
      <div className="space-y-4">
        {questionsToRender.map((q, idx) => {
          const userChoice = userAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = userChoice === q.shuffledCorrectIndex;
          const originalIdx = currentQuestions.findIndex((item) => item.id === q.id);

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20'
                    : 'border-rose-300 dark:border-rose-900/60 bg-rose-50/20 ring-1 ring-rose-400'
                  : 'border-slate-200/90 dark:border-slate-800'
              }`}
            >
              {/* Question header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  <span
                    className={`inline-block px-2.5 py-0.5 mr-2 font-mono text-xs rounded-lg font-bold ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                    }`}
                  >
                    Câu {(originalIdx !== -1 ? originalIdx : idx) + 1}
                  </span>
                  {q.question}
                </h4>
                <div className="flex items-center gap-1.5 shrink-0">
                  {q.subCategory && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 hidden sm:inline">
                      {q.subCategory}
                    </span>
                  )}
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {q.category}
                  </span>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2 pt-1">
                {q.shuffledOptions.map((opt, optIdx) => {
                  let optStyle =
                    'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300';

                  if (isSubmitted) {
                    if (optIdx === q.shuffledCorrectIndex) {
                      optStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    } else if (userChoice === optIdx && !isCorrect) {
                      optStyle =
                        'border-rose-400 bg-rose-50 dark:bg-rose-950/60 text-rose-950 dark:text-rose-200 line-through';
                    }
                  } else if (userChoice === optIdx) {
                    optStyle =
                      'border-blue-600 bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 font-semibold ring-1 ring-blue-600';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => {
                        if (isSubmitted) return;
                        setUserAnswers((prev) => ({
                          ...prev,
                          [q.id]: optIdx
                        }));
                      }}
                      className={`text-left p-3 rounded-xl border text-sm transition flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                      {isSubmitted && optIdx === q.shuffledCorrectIndex && (
                        <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300 font-bold text-xs ml-2 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          Đáp án đúng
                        </span>
                      )}
                      {isSubmitted && userChoice === optIdx && !isCorrect && (
                        <span className="flex items-center gap-1 text-rose-700 dark:text-rose-300 font-bold text-xs ml-2 shrink-0">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          Lựa chọn của bạn
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Detailed explanation after submission */}
              {isSubmitted && (
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {/* Status badge: Transparent comparison */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {!isAnswered ? (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> Bạn chưa chọn câu trả lời này
                      </span>
                    ) : isCorrect ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Bạn đã chọn ĐÚNG:{' '}
                        <strong>
                          {String.fromCharCode(65 + userChoice)}. {q.shuffledOptions[userChoice]}
                        </strong>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-semibold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Bạn đã chọn:{' '}
                        <strong>
                          {String.fromCharCode(65 + userChoice)}. {q.shuffledOptions[userChoice]}
                        </strong>
                      </span>
                    )}

                    {!isCorrect && (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đáp án chuẩn quy định:{' '}
                        <strong>
                          {String.fromCharCode(65 + q.shuffledCorrectIndex)}. {q.shuffledOptions[q.shuffledCorrectIndex]}
                        </strong>
                      </span>
                    )}
                  </div>

                  {/* Legal base and rationale */}
                  <div
                    className={`text-xs rounded-xl p-3 leading-relaxed ${
                      isCorrect
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200'
                        : 'bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-200'
                    }`}
                  >
                    <strong className="font-bold flex items-center gap-1 mb-1 text-slate-900 dark:text-white">
                      <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Căn cứ pháp lý & Mẹo nhớ:
                    </strong>
                    <span>{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom action if not submitted */}
      {!isSubmitted && (
        <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="text-xs text-slate-600 dark:text-slate-400">
            Đã làm {answeredCount} / {currentQuestions.length} câu. (Cần đúng ≥ {passingThreshold} câu để đỗ).
          </div>
          <button
            onClick={handleSubmitExam}
            disabled={answeredCount === 0}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl text-sm transition shadow-sm cursor-pointer disabled:cursor-not-allowed"
          >
            Nộp bài & Kiểm tra kết quả
          </button>
        </div>
      )}

      {/* HISTORY LOG OF ATTEMPTS */}
      {history.length > 0 && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <History className="w-4 h-4 text-blue-600" />
              Lịch sử các lần thi gần đây ({history.length} lần)
            </h4>
            <span className="text-xs text-slate-600 dark:text-slate-400">Lưu tự động trong máy của bạn</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-60 overflow-y-auto">
            {history.map((record) => (
              <div key={record.id} className="py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      record.isPerfect
                        ? 'bg-amber-500 ring-2 ring-amber-300'
                        : record.isPass
                        ? 'bg-emerald-500'
                        : 'bg-rose-500'
                    }`}
                  />
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{record.modeName}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">
                      {new Date(record.timestamp).toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        day: '2-digit',
                        month: '2-digit'
                      })}{' '}
                      • {formatTime(record.timeSpentSeconds)}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono font-bold text-slate-900 dark:text-white">
                    {record.score} / {record.total} ({Math.round((record.score / record.total) * 100)}%)
                  </div>
                  <div
                    className={`text-[10px] font-bold ${
                      record.isPerfect
                        ? 'text-amber-600 dark:text-amber-400'
                        : record.isPass
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {record.isPerfect ? '100% Điểm tuyệt đối' : record.isPass ? 'Đạt chuẩn đỗ' : 'Chưa đạt'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleResetStats}
              className="text-xs text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 flex items-center gap-1 transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Đặt lại lịch sử & bộ đếm
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 1: TRA CỨU TOÀN BỘ 77 CÂU HỎI VÀ ĐÁP ÁN CHUẨN            */}
      {/* ============================================================== */}
      {showBankModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Tra cứu Ngân hàng {QUESTION_BANK.length} câu hỏi & Đáp án chuẩn
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Kiểm tra đối chiếu bất kỳ câu hỏi nào bạn nghi ngờ để xem đáp án chính xác theo luật
                </p>
              </div>
              <button
                onClick={() => setShowBankModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Filter and search bar */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={bankSearchQuery}
                  onChange={(e) => setBankSearchQuery(e.target.value)}
                  placeholder="Nhập từ khóa tìm kiếm: phúc khảo, xe máy, ô tô, cháy nổ, 3 năm..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={bankCategoryFilter}
                onChange={(e) => setBankCategoryFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <option value="ALL">Tất cả chuyên đề</option>
                <option value="Quy định thi & chứng chỉ">Quy định thi & chứng chỉ</option>
                <option value="Từ viết tắt & thuật ngữ">Từ viết tắt & thuật ngữ</option>
                <option value="Đại lý bảo hiểm">Đại lý bảo hiểm</option>
                <option value="Nguyên tắc bảo hiểm">Nguyên tắc bảo hiểm</option>
                <option value="Rủi ro & Khái niệm cơ bản">Rủi ro & Khái niệm cơ bản</option>
              </select>
            </div>

            {/* Questions list */}
            <div className="p-5 overflow-y-auto space-y-4 flex-1">
              {filteredBank.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Không tìm thấy câu hỏi nào phù hợp với từ khóa &ldquo;{bankSearchQuery}&rdquo;.
                </div>
              ) : (
                filteredBank.map((q, qIndex) => (
                  <div
                    key={q.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                        <span className="inline-block px-2 py-0.5 mr-2 font-mono text-[11px] rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          #{qIndex + 1}
                        </span>
                        {q.question}
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                        {q.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      {q.options.map((opt, oIdx) => {
                        const isCorrectOpt = oIdx === q.correctIndex;
                        return (
                          <div
                            key={oIdx}
                            className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                              isCorrectOpt
                                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 font-bold text-emerald-950 dark:text-emerald-200'
                                : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                            {isCorrectOpt && (
                              <span className="text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center gap-1 shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Đáp án ĐÚNG
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <strong className="text-blue-600 font-bold">Căn cứ & giải thích: </strong>
                      {q.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-right bg-slate-50/50 dark:bg-slate-900">
              <button
                onClick={() => setShowBankModal(false)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs transition cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: 12 BẪY THI CỰC KỲ DỄ NHẦM LẪN                         */}
      {/* ============================================================== */}
      {showTrapsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-black text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  12 Bẫy Thi Thường Gặp (Tại sao bạn nghĩ mình đúng nhưng bị báo sai?)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Đây là các câu hỏi 90% thí sinh chọn theo trực giác hoặc thói quen ngoài thực tế nhưng luật quy định khác
                </p>
              </div>
              <button
                onClick={() => setShowTrapsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3.5 flex-1">
              {topTraps.map((trap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 space-y-1.5"
                >
                  <h4 className="font-bold text-sm text-amber-950 dark:text-amber-200 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-mono text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {trap.title}
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
                    {trap.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-right bg-slate-50/50 dark:bg-slate-900">
              <button
                onClick={() => setShowTrapsModal(false)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition cursor-pointer"
              >
                Đã hiểu các bẫy này
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
