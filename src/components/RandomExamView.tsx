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
  AlertCircle
} from 'lucide-react';

export interface ChapterLinkInfo {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  legalDoc: string;
  sectionHint: string;
}

export const CATEGORY_TO_CHAPTER_MAP: Record<string, ChapterLinkInfo> = {
  'Quy định thi & chứng chỉ': {
    chapterId: 'thi-cu',
    chapterNumber: 1,
    chapterTitle: 'Quy định thi & chứng chỉ đại lý',
    legalDoc: 'Thông tư 69/2022/TT-BTC & Thông tư 67/2023/TT-BTC',
    sectionHint: 'Thời gian 60 phút, đỗ ≥ 75% (30/40 câu), 6 loại chứng chỉ đại lý, thời hạn thu hồi'
  },
  'Từ viết tắt & thuật ngữ': {
    chapterId: 'viet-tat',
    chapterNumber: 2,
    chapterTitle: 'Từ viết tắt & Thuật ngữ bảo hiểm',
    legalDoc: 'Điều 3, 4 Luật Kinh doanh bảo hiểm số 08/2022/QH15',
    sectionHint: 'DNBH, BMBH, NĐBH, NTH, STBH, Phí bảo hiểm, Giá trị hoàn lại, P&I'
  },
  'Rủi ro & Khái niệm cơ bản': {
    chapterId: 'rui-ro',
    chapterNumber: 3,
    chapterTitle: 'Rủi ro & Quản trị rủi ro',
    legalDoc: 'Lý thuyết rủi ro bảo hiểm & Luật KDBH 2022',
    sectionHint: 'Phân loại Hazard - Peril - Loss, rủi ro thuần túy vs đầu cơ, 5 biện pháp quản trị'
  },
  'Nguyên tắc bảo hiểm': {
    chapterId: 'nguyen-tac',
    chapterNumber: 4,
    chapterTitle: 'Nguyên tắc nghiệp vụ bảo hiểm',
    legalDoc: 'Điều 16, 17, 30, 48, 54 Luật Kinh doanh bảo hiểm số 08/2022/QH15',
    sectionHint: '10 nguyên tắc: Trung thực tuyệt đối, Quyền lợi có thể được bảo hiểm, Bồi thường, Thế quyền, Khoán'
  },
  'Đại lý bảo hiểm': {
    chapterId: 'dai-ly',
    chapterNumber: 5,
    chapterTitle: 'Quy định pháp luật về Đại lý bảo hiểm',
    legalDoc: 'Điều 127, 128, 129, 130 Luật KDBH 2022 & Thông tư 67/2023/TT-BTC',
    sectionHint: 'Quyền & nghĩa vụ đại lý, 4 hành vi bị cấm tại Điều 129, định mức hoa hồng đại lý'
  },
  'Hợp đồng bảo hiểm': {
    chapterId: 'hdbh',
    chapterNumber: 6,
    chapterTitle: 'Hợp đồng bảo hiểm',
    legalDoc: 'Chương II (Điều 12 - 40) Luật Kinh doanh bảo hiểm số 08/2022/QH15',
    sectionHint: 'Hợp đồng vô hiệu vs Hủy bỏ vs Đơn phương chấm dứt; thời hiệu khởi kiện 3 năm'
  },
  'Bảo hiểm con người': {
    chapterId: 'con-nguoi',
    chapterNumber: 7,
    chapterTitle: 'Bảo hiểm con người',
    legalDoc: 'Mục 1 Chương III Luật KDBH 2022 & Quy tắc nghiệp vụ bảo hiểm con người',
    sectionHint: 'Bảo hiểm sinh mạng, tai nạn, sức khỏe; bảng thời gian chờ 30-270-365 ngày; nguyên tắc khoán'
  },
  'Bảo hiểm xe cơ giới': {
    chapterId: 'xe-co-gioi',
    chapterNumber: 8,
    chapterTitle: 'Bảo hiểm xe cơ giới',
    legalDoc: 'Nghị định 67/2023/NĐ-CP & Thông tư 67/2023/TT-BTC',
    sectionHint: 'TNDS bắt buộc 150 tr/người/vụ; tài sản 50 tr (mô tô) / 100 tr (ô tô); tạm ứng bồi thường nhân đạo'
  },
  'Bảo hiểm tài sản & thiệt hại': {
    chapterId: 'tai-san',
    chapterNumber: 9,
    chapterTitle: 'Bảo hiểm tài sản & Thiệt hại',
    legalDoc: 'Mục 2 Chương III Luật KDBH 2022 & Nghị định 67/2023/NĐ-CP (Cháy nổ bắt buộc)',
    sectionHint: 'Bảo hiểm trên/dưới/trùng giá trị, bồi thường theo tỷ lệ, mức khấu trừ, gián đoạn kinh doanh ABI'
  },
  'Bảo hiểm trách nhiệm': {
    chapterId: 'trach-nhiem',
    chapterNumber: 10,
    chapterTitle: 'Bảo hiểm trách nhiệm',
    legalDoc: 'Điều 57 - 61 Luật KDBH 2022 & Quy chuẩn quốc tế CGL',
    sectionHint: 'Căn cứ bồi thường: Claims-made (yêu cầu đòi bồi thường) vs Loss-occurrence (sự cố phát sinh)'
  },
  'Tái bảo hiểm': {
    chapterId: 'tai-bao-hiem',
    chapterNumber: 13,
    chapterTitle: 'Nghiệp vụ Tái bảo hiểm',
    legalDoc: 'Điều 41, 42 Luật KDBH 2022 & Nghị định 46/2023/NĐ-CP',
    sectionHint: 'Tái bảo hiểm tỷ lệ (Quota Share, Surplus Line) vs Phi tỷ lệ (Excess of Loss); giữ lại ≤ 10% VCSH'
  },
  'Tài sản kỹ thuật': {
    chapterId: 'tskt',
    chapterNumber: 12,
    chapterTitle: 'Kỹ thuật công trình CAR/EAR/CPM/MB',
    legalDoc: 'Quy tắc Munich Re chuẩn & Nghị định 67/2023/NĐ-CP',
    sectionHint: 'Bảo hiểm mọi rủi ro xây dựng (CAR), lắp đặt (EAR), máy móc thi công (CPM), đổ vỡ máy (MB)'
  },
  'Bẫy luật & Pháp luật mới': {
    chapterId: 'bay-luat',
    chapterNumber: 17,
    chapterTitle: '13 Bẫy số & Luật KDBH 2022',
    legalDoc: 'Luật KDBH 2022 & Nghị định 174/2024/NĐ-CP',
    sectionHint: 'Các câu hỏi lừa chữ "chỉ", mốc thời gian 60 ngày đóng phí, 30 ngày giải quyết quyền lợi'
  }
};

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

interface RandomExamViewProps {
  onNavigateToChapter?: (chapterId: string) => void;
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

export const RandomExamView: React.FC<RandomExamViewProps> = ({ onNavigateToChapter }) => {
  // Setup Step 1: Exam Type Mode ('ALL' or 'SINGLE')
  const [examScopeMode, setExamScopeMode] = useState<'ALL' | 'SINGLE'>('ALL');
  // If 'SINGLE', which specific chapter is selected:
  const [selectedSpecificTopic, setSelectedSpecificTopic] = useState<string>('Hợp đồng bảo hiểm');
  // Setup Step 1: Topic difficulty filter
  const [topicDifficultyFilter, setTopicDifficultyFilter] = useState<'ALL' | 'easy' | 'medium' | 'hard' | 'expert'>('ALL');
  // Setup Step 2: Question Count (10, 20, 40, 100, or ALL)
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(40);

  // In-exam question filter ('ALL' | 'UNANSWERED' | 'ANSWERED')
  const [questionFilter, setQuestionFilter] = useState<'ALL' | 'UNANSWERED' | 'ANSWERED'>('ALL');
  // Expandable question jump grid
  const [isGridExpanded, setIsGridExpanded] = useState<boolean>(false);

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

  // Specific topics list (Sorted strictly from EASIEST to HARDEST)
  const specificTopics = [
    {
      id: 'Quy định thi & chứng chỉ',
      title: 'Quy định thi & chứng chỉ',
      difficulty: 'easy' as const,
      difficultyLabel: 'Dễ ⭐',
      rank: 1,
      badge: 'Cấu trúc đề, đỗ ≥ 75%, 6 loại CC, mốc 3-5-10-20 ngày',
      count: QUESTION_BANK.filter((q) => q.category === 'Quy định thi & chứng chỉ').length
    },
    {
      id: 'Từ viết tắt & thuật ngữ',
      title: 'Từ viết tắt & thuật ngữ',
      difficulty: 'easy' as const,
      difficultyLabel: 'Dễ ⭐',
      rank: 2,
      badge: 'DNBH, BMBH, NĐBH, STBH, P&I, ABI',
      count: QUESTION_BANK.filter((q) => q.category === 'Từ viết tắt & thuật ngữ').length
    },
    {
      id: 'Rủi ro & Khái niệm cơ bản',
      title: 'Rủi ro & Khái niệm cơ bản',
      difficulty: 'easy' as const,
      difficultyLabel: 'Dễ ⭐',
      rank: 3,
      badge: 'Hazard - Peril - Loss, 5 biện pháp quản trị',
      count: QUESTION_BANK.filter((q) => q.category === 'Rủi ro & Khái niệm cơ bản').length
    },
    {
      id: 'Nguyên tắc bảo hiểm',
      title: 'Nguyên tắc bảo hiểm',
      difficulty: 'medium' as const,
      difficultyLabel: 'Trung bình ⭐⭐',
      rank: 4,
      badge: '10 nguyên tắc, thế quyền, khoán, trung thực',
      count: QUESTION_BANK.filter((q) => q.category === 'Nguyên tắc bảo hiểm').length
    },
    {
      id: 'Đại lý bảo hiểm',
      title: 'Đại lý bảo hiểm',
      difficulty: 'medium' as const,
      difficultyLabel: 'Trung bình ⭐⭐',
      rank: 5,
      badge: 'Quyền hạn 4 không, hoa hồng TT 67, Điều 129',
      count: QUESTION_BANK.filter((q) => q.category === 'Đại lý bảo hiểm').length
    },
    {
      id: 'Hợp đồng bảo hiểm',
      title: 'Hợp đồng bảo hiểm',
      difficulty: 'medium' as const,
      difficultyLabel: 'Trung bình ⭐⭐',
      rank: 6,
      badge: 'Vô hiệu, hủy bỏ, đơn phương chấm dứt, thời hạn 1 năm',
      count: QUESTION_BANK.filter((q) => q.category === 'Hợp đồng bảo hiểm').length
    },
    {
      id: 'Bảo hiểm con người',
      title: 'Bảo hiểm con người',
      difficulty: 'medium' as const,
      difficultyLabel: 'Trung bình ⭐⭐',
      rank: 7,
      badge: 'Thời gian chờ 365/270 ngày, khoán, tai nạn',
      count: QUESTION_BANK.filter((q) => q.category === 'Bảo hiểm con người').length
    },
    {
      id: 'Bảo hiểm xe cơ giới',
      title: 'Bảo hiểm xe cơ giới',
      difficulty: 'hard' as const,
      difficultyLabel: 'Nâng cao ⭐⭐⭐',
      rank: 8,
      badge: 'TNDS 150 triệu, hoa hồng xe máy 20%, tạm ứng',
      count: QUESTION_BANK.filter((q) => q.category === 'Bảo hiểm xe cơ giới').length
    },
    {
      id: 'Bảo hiểm tài sản & thiệt hại',
      title: 'Bảo hiểm tài sản & thiệt hại',
      difficulty: 'hard' as const,
      difficultyLabel: 'Nâng cao ⭐⭐⭐',
      rank: 9,
      badge: 'Bảo hiểm trùng, dưới giá trị, cháy nổ M1-M5, ABI',
      count: QUESTION_BANK.filter((q) => q.category === 'Bảo hiểm tài sản & thiệt hại').length
    },
    {
      id: 'Bảo hiểm trách nhiệm',
      title: 'Bảo hiểm trách nhiệm',
      difficulty: 'hard' as const,
      difficultyLabel: 'Nâng cao ⭐⭐⭐',
      rank: 10,
      badge: 'Claims-made, Loss-occurrence, CGL, Điều 57-61',
      count: QUESTION_BANK.filter((q) => q.category === 'Bảo hiểm trách nhiệm').length
    },
    {
      id: 'Tái bảo hiểm',
      title: 'Tái bảo hiểm',
      difficulty: 'expert' as const,
      difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
      rank: 11,
      badge: 'Quota share, Surplus, Excess of loss, giữ lại ≤ 10%',
      count: QUESTION_BANK.filter((q) => q.category === 'Tái bảo hiểm').length
    },
    {
      id: 'Tài sản kỹ thuật',
      title: 'Tài sản kỹ thuật',
      difficulty: 'expert' as const,
      difficultyLabel: 'Chuyên sâu ⭐⭐⭐⭐',
      rank: 12,
      badge: 'CAR/EAR Munich Re Phần I & II, CPM, MB',
      count: QUESTION_BANK.filter((q) => q.category === 'Tài sản kỹ thuật').length
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
      const hasPositional = q.options.some((opt) =>
        /(^[ABCD][,\s]|cả [ABCD]|phương án [ABCD]|ý [ABCD]|câu [ABCD]|[ABCD] và [ABCD]|[ABCD], [ABCD]|tất cả các phương án trên|tất cả đều đúng)/i.test(opt)
      );

      if (hasPositional) {
        return {
          ...q,
          shuffledOptions: [...q.options],
          originalCorrectAnswer: q.options[q.correctIndex],
          shuffledCorrectIndex: q.correctIndex
        };
      }

      const originalCorrectAnswer = q.options[q.correctIndex];
      const indexedOptions = q.options.map((opt, i) => ({ opt, originalIndex: i }));
      const shuffled = shuffleArray(indexedOptions);
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

    const newTotalAttempts = totalAttempts + 1;
    const newPerfectScores = perfectScores + (isPerfect ? 1 : 0);
    const newPassCount = passCount + (isPass ? 1 : 0);
    const newBestScoreRatio = Math.max(bestScoreRatio, ratio);

    setTotalAttempts(newTotalAttempts);
    setPerfectScores(newPerfectScores);
    setPassCount(newPassCount);
    setBestScoreRatio(newBestScoreRatio);

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

    const modeLabel =
      examScopeMode === 'ALL'
        ? `Tất cả chuyên đề (${totalQuestions} câu)`
        : `${selectedSpecificTopic} (${totalQuestions} câu)`;

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

    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleResetStats = () => {
    if (
      window.confirm(
        'Bạn có chắc chắn muốn đặt lại toàn bộ thống kê (số lần thi, số lần đạt 100%, lịch sử làm bài)?'
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

  const currentPoolCount = useMemo(() => {
    if (examScopeMode === 'ALL') {
      return QUESTION_BANK.length;
    }
    return QUESTION_BANK.filter((q) => q.category === selectedSpecificTopic).length;
  }, [examScopeMode, selectedSpecificTopic]);

  const filteredTopics = useMemo(() => {
    if (topicDifficultyFilter === 'ALL') return specificTopics;
    return specificTopics.filter((t) => t.difficulty === topicDifficultyFilter);
  }, [topicDifficultyFilter, specificTopics]);

  const displayedQuestions = useMemo(() => {
    if (isSubmitted && filterWrongOnly) {
      return currentQuestions.filter((q) => userAnswers[q.id] !== q.shuffledCorrectIndex);
    } else if (!isSubmitted) {
      if (questionFilter === 'UNANSWERED') {
        return currentQuestions.filter((q) => userAnswers[q.id] === undefined);
      } else if (questionFilter === 'ANSWERED') {
        return currentQuestions.filter((q) => userAnswers[q.id] !== undefined);
      }
    }
    return currentQuestions;
  }, [currentQuestions, isSubmitted, filterWrongOnly, questionFilter, userAnswers]);

  const passingThreshold = Math.ceil(currentQuestions.length * 0.75);
  const isPassedExam = currentScore >= passingThreshold;

  const handleJumpToNextUnanswered = () => {
    const nextUnanswered = currentQuestions.find((q) => userAnswers[q.id] === undefined);
    if (nextUnanswered) {
      const el = document.getElementById(`q-${nextUnanswered.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const filteredBank = useMemo(() => {
    const query = bankSearchQuery.trim().toLowerCase();
    return QUESTION_BANK.filter((q) => {
      const matchCat = bankCategoryFilter === 'ALL' || q.category === bankCategoryFilter;
      if (!matchCat) return false;
      if (!query) return true;
      return (
        q.question.toLowerCase().includes(query) ||
        q.explanation.toLowerCase().includes(query) ||
        q.options.some((opt) => opt.toLowerCase().includes(query))
      );
    });
  }, [bankSearchQuery, bankCategoryFilter]);

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
        'Nguyên tắc Thế quyền CHỈ áp dụng cho bảo hiểm tài sản và bảo hiểm trách nhiệm dân sự. TUYỆT ĐỐI KHÔNG áp dụng cho bảo hiểm nhân thọ và quyền lợi khoán sức khỏe. DNBH chi trả quyền lợi xong không được đòi lại tiền từ người thứ ba.'
    },
    {
      title: 'Bẫy 14: Thời điểm của Quyền lợi có thể được bảo hiểm',
      detail:
        'Bảo hiểm nhân thọ / con người: Quyền lợi chỉ cần có tại THỜI ĐIỂM KÝ HỢP ĐỒNG (sau đó ly hôn hợp đồng vẫn có hiệu lực). Bảo hiểm tài sản: Quyền lợi bắt buộc phải có tại THỜI ĐIỂM TỔN THẤT.'
    },
    {
      title: 'Bẫy 15: Bảo hiểm nhân thọ áp dụng NGUYÊN TẮC KHOÁN',
      detail:
        'Tính mạng con người là vô giá, không áp dụng nguyên tắc bồi thường và không bị giới hạn bảo hiểm trùng. Một người mua nhiều hợp đồng nhân thọ thì khi xảy ra sự kiện sẽ nhận tiền từ tất cả các công ty.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* ============================================================== */}
      {/* BẢNG ĐIỀU KHIỂN CHỌN ĐỀ & SỐ CÂU (HƯỚNG DẪN RÕ RÀNG)            */}
      {/* ============================================================== */}
      <div className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200 mb-2">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Cấu hình chế độ thi sát hạch
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Phòng Luyện Thi Trắc Nghiệm Chuẩn ĐLBH
            </h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Ngân hàng gồm <strong>{QUESTION_BANK.length} câu hỏi chuẩn</strong> bám sát Luật KDBH 2022, Nghị định 67/2023 và Thông tư 67/2023.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowTrapsModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition cursor-pointer shadow-2xs"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              15 bẫy thi hay nhầm
            </button>
            <button
              onClick={() => setShowBankModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl text-xs font-bold transition cursor-pointer shadow-2xs"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              Tra cứu ngân hàng {QUESTION_BANK.length} câu
            </button>
            <button
              onClick={() => generateNewExam()}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs md:text-sm font-bold shadow-xs transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Đổi đề thi mới
            </button>
          </div>
        </div>

        {/* BƯỚC 1: CHỌN PHẠM VI ĐỀ THI VỚI HƯỚNG DẪN CHI TIẾT */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              Bước 1: Chọn phạm vi đề thi
            </label>
            <span className="text-xs text-slate-500 font-medium">
              {examScopeMode === 'ALL'
                ? 'Đang trộn ngẫu nhiên tất cả chuyên đề (Chuẩn phòng thi thật)'
                : `Đang tập trung ôn chuyên đề: ${selectedSpecificTopic}`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option 1: Tất cả chuyên đề */}
            <button
              type="button"
              onClick={() => {
                setExamScopeMode('ALL');
                generateNewExam('ALL', selectedSpecificTopic, selectedQuestionCount);
              }}
              className={`p-4 rounded-2xl border text-left transition relative cursor-pointer ${
                examScopeMode === 'ALL'
                  ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/30'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">
                      Tất cả chuyên đề (Trộn ngẫu nhiên 662 câu)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Khuyên dùng ⭐
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mô phỏng đề thi thật: Câu hỏi được bốc ngẫu nhiên từ mọi chuyên đề để kiểm tra năng lực toàn diện.
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
                  ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/30'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">
                      Chuyên đề riêng lẻ (Ôn tập trung theo phần)
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                      Tự chọn
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chỉ thi đúng 1 chuyên đề bạn còn cảm thấy yếu cho đến khi đạt 100% điểm số.
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

          {/* Sub-selector: Chọn chuyên đề riêng lẻ sắp xếp Dễ -> Khó */}
          {examScopeMode === 'SINGLE' && (
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3 mt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wide">
                  <Filter className="w-3.5 h-3.5 text-blue-600" />
                  Chọn chuyên đề theo thứ tự Dễ đến Khó:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setTopicDifficultyFilter('ALL')}
                    className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer ${
                      topicDifficultyFilter === 'ALL'
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    Tất cả (12)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicDifficultyFilter('easy')}
                    className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer border ${
                      topicDifficultyFilter === 'easy'
                        ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    Dễ ⭐ (3)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicDifficultyFilter('medium')}
                    className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer border ${
                      topicDifficultyFilter === 'medium'
                        ? 'bg-blue-600 text-white border-blue-600 font-bold'
                        : 'bg-blue-50 text-blue-800 border-blue-200'
                    }`}
                  >
                    Trung bình ⭐⭐ (4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicDifficultyFilter('hard')}
                    className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer border ${
                      topicDifficultyFilter === 'hard'
                        ? 'bg-amber-600 text-white border-amber-600 font-bold'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    Nâng cao ⭐⭐⭐ (3)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicDifficultyFilter('expert')}
                    className={`px-2 py-0.5 rounded-lg font-medium transition cursor-pointer border ${
                      topicDifficultyFilter === 'expert'
                        ? 'bg-purple-600 text-white border-purple-600 font-bold'
                        : 'bg-purple-50 text-purple-800 border-purple-200'
                    }`}
                  >
                    Chuyên sâu ⭐⭐⭐⭐ (2)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {filteredTopics.map((topic) => {
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
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1 opacity-90">
                          <span className="font-mono font-bold">#{topic.rank}</span>
                          <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {topic.difficultyLabel}
                          </span>
                        </div>
                        <div className="font-bold text-xs leading-snug">{topic.title}</div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] mt-2 opacity-90 pt-1.5 border-t border-slate-100/50">
                        <span className="truncate max-w-[140px] text-[10px]">{topic.badge}</span>
                        <span className="font-mono font-bold shrink-0">({topic.count} câu)</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* BƯỚC 2: CHỌN SỐ LƯỢNG CÂU VỚI GIẢI THÍCH MỤC ĐÍCH ÔN LUYỆN */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4 text-emerald-600" />
              Bước 2: Chọn số lượng câu muốn thi
            </label>
            <span className="text-xs text-slate-600">
              Đang chọn:{' '}
              <strong className="text-slate-900 font-mono">
                {selectedQuestionCount >= currentPoolCount ? `LÀM HẾT ${currentPoolCount} CÂU` : `${selectedQuestionCount} câu`}
              </strong>{' '}
              (Điều kiện đỗ: đúng ≥ {Math.ceil(Math.min(selectedQuestionCount, currentPoolCount) * 0.75)} câu, tức 75%)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* 10 CÂU */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(10);
                generateNewExam(examScopeMode, selectedSpecificTopic, 10);
              }}
              className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                selectedQuestionCount === 10
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30 font-bold'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/40'
              }`}
            >
              <div className="text-base font-black font-mono">10 CÂU</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Phản xạ nhanh (Đúng ≥ 8)</div>
            </button>

            {/* 20 CÂU */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(20);
                generateNewExam(examScopeMode, selectedSpecificTopic, 20);
              }}
              className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                selectedQuestionCount === 20
                  ? 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/30 font-bold'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/40'
              }`}
            >
              <div className="text-base font-black font-mono">20 CÂU</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Luyện cấp tốc (Đúng ≥ 15)</div>
            </button>

            {/* 40 CÂU CHUẨN ĐLBH CƠ BẢN */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(40);
                generateNewExam(examScopeMode, selectedSpecificTopic, 40);
              }}
              className={`p-3 rounded-2xl border text-center transition cursor-pointer relative ${
                selectedQuestionCount === 40
                  ? 'border-blue-600 bg-blue-50 text-blue-950 ring-2 ring-blue-600/30 font-bold'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/40'
              }`}
            >
              <span className="absolute -top-2.5 right-2 text-[9px] font-bold px-2 py-0.5 bg-blue-600 text-white rounded-full uppercase shadow-xs">
                Chuẩn Bộ TC
              </span>
              <div className="text-base font-black font-mono">40 CÂU</div>
              <div className="text-[11px] text-blue-700 font-medium mt-0.5">Thi thử 60 phút (Đúng ≥ 30)</div>
            </button>

            {/* 100 CÂU LUYỆN TĂNG CƯỜNG */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(100);
                generateNewExam(examScopeMode, selectedSpecificTopic, 100);
              }}
              className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                selectedQuestionCount === 100
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-600/30 font-bold'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-slate-50/40'
              }`}
            >
              <div className="text-base font-black font-mono">100 CÂU</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Rèn sức bền (Đúng ≥ 75)</div>
            </button>

            {/* LÀM HẾT CÁC CÂU LUÔN */}
            <button
              type="button"
              onClick={() => {
                setSelectedQuestionCount(currentPoolCount);
                generateNewExam(examScopeMode, selectedSpecificTopic, currentPoolCount);
              }}
              className={`col-span-2 sm:col-span-1 p-3 rounded-2xl border text-center transition cursor-pointer relative ${
                selectedQuestionCount >= currentPoolCount
                  ? 'border-slate-900 bg-slate-900 text-white shadow-xs ring-2 ring-slate-900/20 font-bold'
                  : 'border-slate-300 text-slate-900 hover:border-slate-400 bg-white font-bold'
              }`}
            >
              <span className={`absolute -top-2.5 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-xs ${
                selectedQuestionCount >= currentPoolCount
                  ? 'bg-amber-400 text-slate-900'
                  : 'bg-slate-800 text-white'
              }`}>
                Làm hết kho
              </span>
              <div className="text-base font-black font-mono">TẤT CẢ {currentPoolCount} CÂU</div>
              <div className={`text-[11px] mt-0.5 ${
                selectedQuestionCount >= currentPoolCount
                  ? 'text-slate-300'
                  : 'text-slate-500'
              }`}>
                {examScopeMode === 'ALL' ? 'Toàn bộ 662 câu' : `Hết ${selectedSpecificTopic}`}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* THỐNG KÊ TIẾN ĐỘ & BẢNG VÀNG                                  */}
      {/* ============================================================== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Card 1: Tổng số lần thi */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 font-mono leading-none">
              {totalAttempts}
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium">
              Tổng số lần thi
            </div>
          </div>
        </div>

        {/* Card 2: Số lần đạt điểm tối đa */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-yellow-100" />
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
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 font-mono leading-none">
              {passCount}
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium">
              Số lần đỗ (≥ 75%)
            </div>
          </div>
        </div>

        {/* Card 4: Tỷ lệ cao nhất */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 font-mono leading-none">
              {Math.round(bestScoreRatio * 100)}%
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium">
              Điểm số cao nhất
            </div>
          </div>
        </div>
      </div>

      {/* DANH SÁCH CÂU LÀM SAI TRƯỚC ĐÓ */}
      {wrongQuestionIds.length > 0 && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            <div className="text-xs text-rose-900">
              Sổ tay: Bạn đang có <strong>{wrongQuestionIds.length} câu</strong> từng làm sai. Hãy luyện lại để khắc phục hoàn toàn điểm yếu!
            </div>
          </div>
          <button
            onClick={() => generateNewExam(examScopeMode, selectedSpecificTopic, selectedQuestionCount, wrongQuestionIds)}
            className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Luyện lại {wrongQuestionIds.length} câu sai
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* THANH TRẠNG THÁI BÀI THI HIỆN TẠI                             */}
      {/* ============================================================== */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-lg">
            {examScopeMode === 'ALL'
              ? `Tất cả chuyên đề (${currentQuestions.length} câu)`
              : `${selectedSpecificTopic} (${currentQuestions.length} câu)`}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Thời gian: {formatTime(timerSeconds)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-600">
            Tiến độ: <strong>{answeredCount}</strong> / {currentQuestions.length} câu
          </div>
          {!isSubmitted ? (
            <button
              onClick={handleSubmitExam}
              disabled={answeredCount === 0}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl text-xs transition shadow-xs cursor-pointer disabled:cursor-not-allowed"
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

      {/* ============================================================== */}
      {/* THANH ĐIỀU HƯỚNG VÀ LỌC CÂU HỎI                              */}
      {/* ============================================================== */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between text-xs gap-1">
            <span className="font-semibold text-slate-800">
              Tiến độ làm bài:{' '}
              <strong className="text-slate-900 font-mono">{answeredCount}</strong> / {currentQuestions.length} câu{' '}
              <span className="text-slate-500 font-mono">
                ({currentQuestions.length > 0 ? Math.round((answeredCount / currentQuestions.length) * 100) : 0}%)
              </span>
            </span>
            <span className="text-slate-500 font-mono text-[11px]">
              {currentQuestions.length - answeredCount === 0
                ? '✅ Đã hoàn thành tất cả các câu!'
                : `Còn lại ${currentQuestions.length - answeredCount} câu chưa trả lời`}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded-full"
              style={{
                width: `${currentQuestions.length > 0 ? (answeredCount / currentQuestions.length) * 100 : 0}%`
              }}
            />
          </div>
        </div>

        {/* Filter Chips & Quick Jump Actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium">Xem:</span>
            <button
              type="button"
              onClick={() => setQuestionFilter('ALL')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                questionFilter === 'ALL'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả ({currentQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => setQuestionFilter('UNANSWERED')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer border ${
                questionFilter === 'UNANSWERED'
                  ? 'bg-amber-600 text-white border-amber-600 font-bold'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              Chưa làm ({currentQuestions.length - answeredCount})
            </button>
            <button
              type="button"
              onClick={() => setQuestionFilter('ANSWERED')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer border ${
                questionFilter === 'ANSWERED'
                  ? 'bg-blue-600 text-white border-blue-600 font-bold'
                  : 'bg-blue-50 text-blue-800 border-blue-200'
              }`}
            >
              Đã làm ({answeredCount})
            </button>
          </div>

          <div className="flex items-center gap-2">
            {!isSubmitted && answeredCount < currentQuestions.length && (
              <button
                type="button"
                onClick={handleJumpToNextUnanswered}
                className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-300 text-xs font-semibold hover:bg-amber-100 transition cursor-pointer flex items-center gap-1"
                title="Nhảy tới câu chưa trả lời tiếp theo"
              >
                <span>Tới câu chưa làm ➔</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsGridExpanded(!isGridExpanded)}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold hover:bg-slate-200 transition cursor-pointer flex items-center gap-1"
            >
              <span>{isGridExpanded ? 'Ẩn lưới số câu' : `Lưới ${currentQuestions.length} câu`}</span>
            </button>
          </div>
        </div>

        {/* Expandable Grid of Question Numbers */}
        {isGridExpanded && (
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] text-slate-500 font-medium mb-1.5 flex items-center justify-between">
              <span>Bấm vào số câu để cuộn nhanh đến câu đó:</span>
              <span className="text-[10px]">
                Xanh: Đã chọn • Trắng: Chưa chọn
              </span>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-20 gap-1.5 max-h-44 overflow-y-auto p-1">
              {currentQuestions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCorrect = isSubmitted && userAnswers[q.id] === q.shuffledCorrectIndex;
                const isWrong = isSubmitted && isAnswered && !isCorrect;

                let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';
                if (isSubmitted) {
                  if (isCorrect) btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                  else if (isWrong) btnStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                  else btnStyle = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
                } else if (isAnswered) {
                  btnStyle = 'bg-blue-600 text-white border-blue-600 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(`q-${q.id}`);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className={`py-1 text-xs rounded-md border font-mono transition cursor-pointer flex items-center justify-center ${btnStyle}`}
                    title={`Câu ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* KẾT QUẢ THI SAU KHI NỘP BÀI                                    */}
      {/* ============================================================== */}
      {isSubmitted && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 ${
                  isPassedExam
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {Math.round((currentScore / currentQuestions.length) * 100)}%
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  {isPassedExam ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Chúc mừng! Bạn đã đạt chuẩn đỗ sát hạch
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600" />
                      Chưa đạt chuẩn (Cần đúng ≥ 75%)
                    </>
                  )}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Đúng <strong>{currentScore}</strong> / {currentQuestions.length} câu. (Yêu cầu đỗ tối thiểu:{' '}
                  <strong>{passingThreshold}</strong> câu). Hoàn thành trong <strong>{formatTime(timerSeconds)}</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterWrongOnly(!filterWrongOnly)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  filterWrongOnly
                    ? 'bg-rose-600 text-white border-rose-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {filterWrongOnly ? 'Đang lọc: Chỉ câu sai' : `Xem riêng ${currentQuestions.length - currentScore} câu sai`}
              </button>
              <button
                onClick={() => generateNewExam()}
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Làm đề mới
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* DANH SÁCH CÂU HỎI & LỰA CHỌN TRẢ LỜI                          */}
      {/* ============================================================== */}
      <div className="space-y-4">
        {displayedQuestions.map((q, index) => {
          const userChoice = userAnswers[q.id];
          const isAnswered = userChoice !== undefined;
          const isCorrect = isSubmitted && userChoice === q.shuffledCorrectIndex;
          const chapterInfo = CATEGORY_TO_CHAPTER_MAP[q.category];

          return (
            <div
              id={`q-${q.id}`}
              key={q.id}
              className={`p-5 md:p-6 rounded-2xl border transition bg-white shadow-xs space-y-4 ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : isAnswered
                  ? 'border-blue-300 ring-1 ring-blue-200'
                  : 'border-slate-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 shrink-0 mt-0.5">
                    Câu {index + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm md:text-base text-slate-900 leading-snug">
                      {q.question}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        Chuyên đề: {q.category}
                      </span>
                      {chapterInfo && (
                        <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          Chương {chapterInfo.chapterNumber}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {isSubmitted && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Đúng
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-100 text-rose-800">
                        <XCircle className="w-4 h-4 text-rose-600" /> Sai
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options list */}
              <div className="space-y-2 pt-1">
                {q.shuffledOptions.map((opt, optIdx) => {
                  let optStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-800';

                  if (isSubmitted) {
                    if (optIdx === q.shuffledCorrectIndex) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                    } else if (userChoice === optIdx && !isCorrect) {
                      optStyle = 'border-rose-400 bg-rose-50 text-rose-950 line-through opacity-90';
                    } else {
                      optStyle = 'border-slate-200 bg-slate-50/30 text-slate-500 opacity-70';
                    }
                  } else if (userChoice === optIdx) {
                    optStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-2 ring-blue-500/30';
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
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between cursor-pointer ${optStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-200/80 text-slate-800 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                      {isSubmitted && optIdx === q.shuffledCorrectIndex && (
                        <span className="flex items-center gap-1 text-emerald-700 font-bold text-xs ml-2 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          Đáp án đúng
                        </span>
                      )}
                      {isSubmitted && userChoice === optIdx && !isCorrect && (
                        <span className="flex items-center gap-1 text-rose-700 font-bold text-xs ml-2 shrink-0">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          Lựa chọn của bạn
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Chi tiết giải thích & Chú thích nơi tìm kiếm khi nộp bài */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                  {/* Status badge: So sánh kết quả rõ ràng */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {!isAnswered ? (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-700" /> Bạn chưa chọn câu trả lời này
                      </span>
                    ) : isCorrect ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Bạn đã chọn ĐÚNG:{' '}
                        <strong>
                          {String.fromCharCode(65 + userChoice)}. {q.shuffledOptions[userChoice]}
                        </strong>
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 font-semibold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5 text-rose-700" /> Bạn đã chọn:{' '}
                        <strong>
                          {String.fromCharCode(65 + userChoice)}. {q.shuffledOptions[userChoice]}
                        </strong>
                      </span>
                    )}

                    {!isCorrect && (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Đáp án chuẩn quy định:{' '}
                        <strong>
                          {String.fromCharCode(65 + q.shuffledCorrectIndex)}. {q.shuffledOptions[q.shuffledCorrectIndex]}
                        </strong>
                      </span>
                    )}
                  </div>

                  {/* Khối giải thích chi tiết & Căn cứ pháp lý */}
                  <div
                    className={`rounded-xl p-4 leading-relaxed border ${
                      isCorrect
                        ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                        : 'bg-amber-50/70 border-amber-200 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1 text-xs sm:text-sm">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Phân tích chi tiết & Bản chất câu hỏi:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {q.explanation}
                    </div>

                    {/* Căn cứ pháp lý & Chú thích vị trí tìm kiếm trong App */}
                    {chapterInfo && (
                      <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-semibold text-slate-700">📜 Căn cứ pháp lý:</span>
                          <span className="font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 font-medium">
                            {chapterInfo.legalDoc}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                          <div className="text-xs text-slate-700">
                            👉 <strong className="text-blue-900 font-semibold">Xem lại tại:</strong>{' '}
                            <span className="font-medium text-slate-900">
                              Chương {chapterInfo.chapterNumber} — {chapterInfo.chapterTitle}
                            </span>
                            <span className="text-slate-500 block sm:inline sm:ml-1">
                              • Trọng tâm: {chapterInfo.sectionHint}
                            </span>
                          </div>

                          {onNavigateToChapter && (
                            <button
                              type="button"
                              onClick={() => onNavigateToChapter(chapterInfo.chapterId)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs cursor-pointer transition shrink-0"
                              title={`Mở Chương ${chapterInfo.chapterNumber}: ${chapterInfo.chapterTitle}`}
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Mở lý thuyết chương {chapterInfo.chapterNumber}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom action if not submitted */}
      {!isSubmitted && (
        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center justify-between">
          <div className="text-xs text-slate-600">
            Đã làm {answeredCount} / {currentQuestions.length} câu. (Cần đúng ≥ {passingThreshold} câu để đỗ).
          </div>
          <button
            onClick={handleSubmitExam}
            disabled={answeredCount === 0}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold rounded-xl text-sm transition shadow-xs cursor-pointer disabled:cursor-not-allowed"
          >
            Nộp bài & Chấm điểm
          </button>
        </div>
      )}

      {/* HISTORY LOG OF ATTEMPTS */}
      {history.length > 0 && (
        <div className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <History className="w-4 h-4 text-blue-600" />
              Lịch sử các lần thi gần đây ({history.length} lần)
            </h4>
            <span className="text-xs text-slate-500">Lưu tự động trong trình duyệt của bạn</span>
          </div>

          <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
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
                    <div className="font-semibold text-slate-800">{record.modeName}</div>
                    <div className="text-[11px] text-slate-500">
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
                  <div className="font-mono font-bold text-slate-900">
                    {record.score} / {record.total} ({Math.round((record.score / record.total) * 100)}%)
                  </div>
                  <div
                    className={`text-[10px] font-bold ${
                      record.isPerfect
                        ? 'text-amber-600'
                        : record.isPass
                        ? 'text-emerald-600'
                        : 'text-rose-600'
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
              className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1 transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Đặt lại lịch sử & bộ đếm
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 1: TRA CỨU TOÀN BỘ 662 CÂU HỎI VÀ ĐÁP ÁN CHUẨN            */}
      {/* ============================================================== */}
      {showBankModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  Tra cứu Ngân hàng {QUESTION_BANK.length} câu hỏi & Đáp án chuẩn
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Đối chiếu bất kỳ câu hỏi nào để xem đáp án chuẩn xác và căn cứ pháp lý theo luật
                </p>
              </div>
              <button
                onClick={() => setShowBankModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Filter and search bar */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={bankSearchQuery}
                  onChange={(e) => setBankSearchQuery(e.target.value)}
                  placeholder="Nhập từ khóa tìm kiếm: phúc khảo, xe máy, ô tô, cháy nổ, 3 năm..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
              <select
                value={bankCategoryFilter}
                onChange={(e) => setBankCategoryFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white"
              >
                <option value="ALL">Tất cả chuyên đề</option>
                <option value="Quy định thi & chứng chỉ">Quy định thi & chứng chỉ</option>
                <option value="Từ viết tắt & thuật ngữ">Từ viết tắt & thuật ngữ</option>
                <option value="Đại lý bảo hiểm">Đại lý bảo hiểm</option>
                <option value="Nguyên tắc bảo hiểm">Nguyên tắc bảo hiểm</option>
                <option value="Rủi ro & Khái niệm cơ bản">Rủi ro & Khái niệm cơ bản</option>
                <option value="Hợp đồng bảo hiểm">Hợp đồng bảo hiểm</option>
                <option value="Bảo hiểm tài sản & thiệt hại">Bảo hiểm tài sản & thiệt hại</option>
                <option value="Tài sản kỹ thuật">Tài sản kỹ thuật</option>
                <option value="Bảo hiểm xe cơ giới">Bảo hiểm xe cơ giới</option>
                <option value="Bảo hiểm con người">Bảo hiểm con người</option>
                <option value="Tái bảo hiểm">Tái bảo hiểm</option>
                <option value="Bảo hiểm trách nhiệm">Bảo hiểm trách nhiệm</option>
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
                    className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-sm text-slate-900 leading-snug">
                        <span className="inline-block px-2 py-0.5 mr-2 font-mono text-[11px] rounded bg-blue-100 text-blue-700">
                          #{qIndex + 1}
                        </span>
                        {q.question}
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
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
                                ? 'bg-emerald-50 border-emerald-500 font-bold text-emerald-950'
                                : 'border-slate-200 text-slate-600'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] flex items-center justify-center shrink-0">
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                            {isCorrectOpt && (
                              <span className="text-emerald-700 text-[11px] font-bold flex items-center gap-1 shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Đáp án ĐÚNG
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 p-2.5 rounded-xl bg-slate-50 text-xs text-slate-700 leading-relaxed border border-slate-100">
                      <strong className="text-blue-600 font-bold">Căn cứ & giải thích: </strong>
                      {q.explanation}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-slate-100 text-right bg-slate-50">
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
      {/* MODAL 2: 15 BẪY THI CỰC KỲ DỄ NHẦM LẪN                         */}
      {/* ============================================================== */}
      {showTrapsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  15 Bẫy Thi Thường Gặp (Tại sao bạn nghĩ mình đúng nhưng bị báo sai?)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Đây là các câu hỏi 90% thí sinh chọn theo trực giác hoặc thói quen ngoài thực tế nhưng luật quy định khác
                </p>
              </div>
              <button
                onClick={() => setShowTrapsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3.5 flex-1">
              {topTraps.map((trap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 space-y-1.5"
                >
                  <h4 className="font-bold text-sm text-amber-950 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-mono text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {trap.title}
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed pl-7">
                    {trap.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100 text-right bg-slate-50">
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
