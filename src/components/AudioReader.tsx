import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play, RotateCcw, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { preprocessTextForSpeech } from '../utils/speechUtils';

interface AudioReaderProps {
  textToRead: string;
  title: string;
}

export const AudioReader: React.FC<AudioReaderProps> = ({ textToRead, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [rate, setRate] = useState<number>(1);
  const [sentences, setSentences] = useState<string[]>([]);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Split text into clear, readable Vietnamese sentences
  useEffect(() => {
    const processed = preprocessTextForSpeech(textToRead);
    // Split by period, semicolon, newline or bullet point
    const rawList = processed
      .split(/(?<=[.!?;\n])\s+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 2);

    setSentences(rawList);
    setCurrentSentenceIndex(0);
    handleStop();
  }, [textToRead]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const playSentenceAtIndex = (index: number) => {
    if (index >= sentences.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentSentenceIndex(0);
      return;
    }

    const sentence = sentences[index];
    setIsLoadingAudio(true);

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.playbackRate = rate;

    // Use our server endpoint /api/tts which streams pure Vietnamese Female Google TTS
    const ttsUrl = `/api/tts?text=${encodeURIComponent(sentence)}`;
    audio.src = ttsUrl;

    audio.oncanplay = () => {
      setIsLoadingAudio(false);
      audio.play().catch((err) => {
        console.warn('Playback error or blocked by autoplay policy:', err);
        setIsPlaying(false);
        setIsLoadingAudio(false);
      });
    };

    audio.onended = () => {
      setCurrentSentenceIndex(index + 1);
      playSentenceAtIndex(index + 1);
    };

    audio.onerror = () => {
      console.warn('Audio failed to load from /api/tts, attempting direct Google fallback');
      // Direct Google TTS fallback URL
      const directUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
        sentence.slice(0, 150)
      )}&tl=vi&client=tw-ob`;
      audio.src = directUrl;
      audio.play().catch(() => {
        setIsLoadingAudio(false);
        // Advance to next
        setCurrentSentenceIndex(index + 1);
        playSentenceAtIndex(index + 1);
      });
    };

    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePlay = () => {
    if (sentences.length === 0) return;

    if (isPaused && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsPaused(false);
      });
      return;
    }

    playSentenceAtIndex(currentSentenceIndex);
  };

  const handlePause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleNext = () => {
    const nextIdx = Math.min(sentences.length - 1, currentSentenceIndex + 1);
    setCurrentSentenceIndex(nextIdx);
    if (isPlaying) {
      playSentenceAtIndex(nextIdx);
    }
  };

  const handlePrev = () => {
    const prevIdx = Math.max(0, currentSentenceIndex - 1);
    setCurrentSentenceIndex(prevIdx);
    if (isPlaying) {
      playSentenceAtIndex(prevIdx);
    }
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  const currentSentence = sentences[currentSentenceIndex] || '';

  return (
    <div className="flex flex-col gap-2">
      {/* Audio Control Bar */}
      <div className="flex flex-wrap items-center gap-2 p-2 px-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl border border-pink-200 dark:border-pink-900/60 shadow-xs text-xs text-slate-700 dark:text-slate-200">
        {/* Female Voice Badge */}
        <div className="flex items-center gap-1.5 font-bold text-pink-600 dark:text-pink-400">
          <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce text-pink-500' : ''}`} />
          <span className="px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-[11px] font-bold">
            👩 Giọng Nữ Tiếng Việt
          </span>
        </div>

        {/* Play / Pause Buttons */}
        <div className="flex items-center gap-1">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              disabled={isLoadingAudio}
              className="flex items-center gap-1 px-3 py-1 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-bold transition cursor-pointer shadow-xs disabled:bg-slate-300"
              title="Nghe đọc chuẩn tiếng Việt bằng giọng nữ"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isLoadingAudio ? 'Đang tải...' : isPaused ? 'Tiếp tục' : 'Nghe giảng'}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-1 px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold transition cursor-pointer shadow-xs"
              title="Tạm dừng"
            >
              <Pause className="w-3 h-3" />
              <span>Tạm dừng</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              onClick={handleStop}
              className="p-1 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
              title="Dừng phát"
            >
              <VolumeX className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Sentence Stepper */}
          {(isPlaying || isPaused) && sentences.length > 1 && (
            <div className="flex items-center gap-0.5 ml-1">
              <button
                onClick={handlePrev}
                disabled={currentSentenceIndex === 0}
                className="p-1 text-slate-600 hover:bg-slate-100 rounded disabled:opacity-30 cursor-pointer"
                title="Câu trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono font-semibold px-1 text-slate-500">
                {currentSentenceIndex + 1}/{sentences.length}
              </span>
              <button
                onClick={handleNext}
                disabled={currentSentenceIndex >= sentences.length - 1}
                className="p-1 text-slate-600 hover:bg-slate-100 rounded disabled:opacity-30 cursor-pointer"
                title="Câu tiếp theo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-1 text-[11px] text-slate-500 border-l border-slate-200 dark:border-slate-700 pl-2">
          <span>Tốc độ:</span>
          {[0.9, 1, 1.25].map((s) => (
            <button
              key={s}
              onClick={() => handleRateChange(s)}
              className={`px-1.5 py-0.5 rounded cursor-pointer font-medium ${
                rate === s
                  ? 'bg-pink-600 text-white font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Live Audio Subtitle / Caption Bar */}
      {isPlaying && currentSentence && (
        <div className="p-2.5 px-3.5 bg-pink-50/90 dark:bg-pink-950/40 border border-pink-200/80 dark:border-pink-900 rounded-xl text-xs text-pink-950 dark:text-pink-100 flex items-center gap-2 animate-in fade-in duration-150">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping shrink-0"></span>
          <p className="leading-relaxed font-medium">
            <strong className="text-pink-700 dark:text-pink-300 mr-1.5">Đang đọc:</strong>
            {currentSentence}
          </p>
        </div>
      )}
    </div>
  );
};
