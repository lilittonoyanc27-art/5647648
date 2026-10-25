import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Clock,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Award,
} from 'lucide-react';
import { EXERCISES } from './exerciseData.ts';
import { THEORY_BLOCKS } from './theoryData.ts';
import { Exercise, ExamRecord } from './types.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { shuffleAndFormatOptions } from './shuffleUtils.ts';

interface ExamViewProps {
  onGoToTheory: (blockId: string) => void;
  onExamFinished: (record: ExamRecord) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  onGoToTheory,
  onExamFinished,
}) => {
  const [examState, setExamState] = useState<'config' | 'running' | 'results'>('config');
  const [questionCountChoice, setQuestionCountChoice] = useState<number>(20);
  const [examQuestions, setExamQuestions] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(1200); // 20 min default
  const [examResult, setExamResult] = useState<ExamRecord | null>(null);

  // Timer countdown
  useEffect(() => {
    if (examState !== 'running') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState, examQuestions, userAnswers]);

  const handleStartExam = (count: number) => {
    // Shuffle and pick questions across all blocks, and randomize option order for each question
    const shuffled = [...EXERCISES].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(count, EXERCISES.length)).map((q) => ({
      ...q,
      options: shuffleAndFormatOptions(q.options),
    }));

    // Time: 1 minute per question
    const totalSeconds = selected.length * 60;

    setExamQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setSecondsRemaining(totalSeconds);
    setQuestionCountChoice(count);
    setExamState('running');
  };

  const handleSelectAnswer = (optionId: string) => {
    const currentQ = examQuestions[currentIndex];
    if (!currentQ) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const handleFinishExam = () => {
    let correctCount = 0;
    const incorrectList: ExamRecord['incorrectQuestions'] = [];
    const reviewBlocksSet = new Set<string>();

    examQuestions.forEach((q) => {
      const uAnswer = userAnswers[q.id];
      const isCorrect = uAnswer === q.correctAnswer;
      if (isCorrect) {
        correctCount += 1;
      } else {
        reviewBlocksSet.add(q.blockId);
        const correctOpt = q.options?.find((o) => o.id === q.correctAnswer);
        const userOpt = q.options?.find((o) => o.id === uAnswer);

        incorrectList.push({
          questionId: q.id,
          blockId: q.blockId,
          questionText: q.question,
          userAnswerText: userOpt?.text || { es: 'Sin responder', hy: 'Առանց պատասխանի' },
          correctAnswerText: correctOpt?.text || { es: 'Opción correcta', hy: 'Ճիշտ տարբերակ' },
          explanation: q.explanation,
        });
      }
    });

    const percentage = Math.round((correctCount / examQuestions.length) * 100);
    const scoreOutOf10 = Number(((correctCount / examQuestions.length) * 10).toFixed(1));
    const timeSpent = questionCountChoice * 60 - secondsRemaining;

    const record: ExamRecord = {
      id: `exam-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      totalQuestions: examQuestions.length,
      correctAnswers: correctCount,
      scoreOutOf10,
      percentage,
      timeSpentSeconds: Math.max(timeSpent, 0),
      incorrectQuestions: incorrectList,
      topicsToReview: Array.from(reviewBlocksSet),
    };

    setExamResult(record);
    setExamState('results');
    onExamFinished(record);

    if (scoreOutOf10 >= 5) {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }
  };

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getSpanishGradeLabel = (score: number) => {
    if (score >= 9) return { label: 'Sobresaliente', color: 'text-emerald-700 bg-emerald-100' };
    if (score >= 7) return { label: 'Notable', color: 'text-blue-700 bg-blue-100' };
    if (score >= 6) return { label: 'Bien', color: 'text-amber-800 bg-amber-100' };
    if (score >= 5) return { label: 'Suficiente (Aprobado)', color: 'text-amber-700 bg-amber-50' };
    return { label: 'Insuficiente (Suspenso)', color: 'text-red-700 bg-red-100' };
  };

  // 1. CONFIG VIEW
  if (examState === 'config') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-500/30 text-center space-y-4">
          <div className="w-16 h-16 bg-amber-400 text-red-950 rounded-2xl flex items-center justify-center mx-auto font-black text-2xl shadow-lg">
            <GraduationCap className="w-9 h-9" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Simulador de Examen Final 1.º de ESO
            </h2>
            <p className="text-amber-200/90 font-armenian text-sm sm:text-base mt-1">
              Իսպանական դպրոցի ավարտական քննության նմանակում (0-ից 10 գնահատականով)
            </p>
          </div>
          <p className="text-gray-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            El examen mezcla preguntas de todos los bloques temáticos. Dispones de 1 minuto por pregunta.
            Al terminar obtendrás tu nota oficial española (0-10), el desglose de errores y los temas a repasar.
          </p>
        </div>

        {/* Option Selection */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4">
          <h3 className="font-bold text-gray-900 text-base">
            Elige la modalidad del examen / Ընտրիր քննության չափը:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { count: 20, time: '20 min', label: 'Examen Estándar (20 preguntas)', desc: 'Recomendado para práctica diaria' },
              { count: 40, time: '40 min', label: 'Examen Completo (40 preguntas)', desc: 'Simulacro de evaluación trimestral' },
              { count: 60, time: '60 min', label: 'Gran Examen (60 preguntas)', desc: 'Repaso global exhaustivo' },
              { count: EXERCISES.length, time: `${EXERCISES.length} min`, label: `Todas las preguntas (${EXERCISES.length})`, desc: 'Banco completo' },
            ].map((item) => (
              <button
                key={item.count}
                onClick={() => handleStartExam(item.count)}
                className="flex flex-col text-left p-4 rounded-xl border-2 border-gray-200 hover:border-red-800 hover:bg-amber-50/30 transition-all group"
              >
                <div className="flex items-center justify-between font-bold text-red-950 text-sm group-hover:text-red-800">
                  <span>{item.label}</span>
                  <span className="text-xs bg-red-100 text-red-900 px-2 py-0.5 rounded-full font-semibold">
                    {item.time}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. RUNNING EXAM VIEW
  if (examState === 'running' && examQuestions.length > 0) {
    const currentQ = examQuestions[currentIndex];
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round(((currentIndex + 1) / examQuestions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Top Control Bar with Countdown and Progress */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xs font-bold text-gray-500">
              Pregunta <span className="text-red-900 text-sm font-extrabold">{currentIndex + 1}</span> de {examQuestions.length}
            </div>
            <div className="hidden sm:block text-xs text-gray-400">
              ({answeredCount} respondidas)
            </div>
          </div>

          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm font-bold ${
              secondsRemaining < 180
                ? 'bg-rose-100 text-rose-700 animate-pulse'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>

          <button
            onClick={handleFinishExam}
            className="text-xs font-bold text-red-900 hover:text-red-950 bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-lg transition-colors"
          >
            Finalizar examen
          </button>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-red-800 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-7 space-y-5">
          <div className="text-xs uppercase font-bold text-gray-400">
            <TranslatableText text={currentQ.instruction} />
          </div>

          <div className="text-lg sm:text-xl font-bold text-gray-900">
            <TranslatableText text={currentQ.question} />
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options?.map((opt) => {
              const isSelected = userAnswers[currentQ.id] === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectAnswer(opt.id)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-red-800 bg-red-50/50 ring-2 ring-red-800/20'
                      : 'border-gray-200 hover:border-amber-400 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-red-800 bg-red-800 text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div className="text-sm sm:text-base font-medium text-gray-900 flex-1">
                      <TranslatableText text={opt.text} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="px-4 py-2 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl disabled:opacity-40"
            >
              Anterior
            </button>

            {currentIndex < examQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinishExam}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-red-950 text-sm font-black rounded-xl shadow-md transition-all"
              >
                Terminar y corregir examen
              </button>
            )}
          </div>
        </div>

        {/* Quick Grid Navigator */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
          <div className="text-xs font-bold text-gray-600 mb-2">
            Navegador de preguntas / Հարցերի ցանկ:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {examQuestions.map((q, idx) => {
              const isAnswered = !!userAnswers[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    isCurrent
                      ? 'bg-red-900 text-white ring-2 ring-amber-400'
                      : isAnswered
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 3. EXAM RESULTS VIEW
  if (examState === 'results' && examResult) {
    const gradeInfo = getSpanishGradeLabel(examResult.scoreOutOf10);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Score Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-amber-100 text-amber-800">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Resultado del Examen Oficial
            </h2>
            <p className="text-sm font-armenian text-gray-500 mt-0.5">
              Քննության արդյունքները և սխալների վերլուծությունը
            </p>
          </div>

          {/* Official Grade Box */}
          <div className="max-w-xs mx-auto p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
            <div className="text-4xl font-black text-red-950">
              {examResult.scoreOutOf10}{' '}
              <span className="text-lg font-bold text-gray-400">/ 10</span>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold ${gradeInfo.color}`}>
              {gradeInfo.label}
            </div>
          </div>

          {/* Stat metrics */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto pt-2">
            <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl">
              <div className="text-xl font-black text-emerald-700">{examResult.correctAnswers}</div>
              <div className="text-[11px] font-bold text-emerald-900 uppercase">Aciertos</div>
            </div>
            <div className="bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
              <div className="text-xl font-black text-rose-700">{examResult.incorrectQuestions.length}</div>
              <div className="text-[11px] font-bold text-rose-900 uppercase">Fallos</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
              <div className="text-xl font-black text-amber-800">{examResult.percentage}%</div>
              <div className="text-[11px] font-bold text-amber-950 uppercase">Porcentaje</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setExamState('config')}
              className="inline-flex items-center gap-2 bg-red-900 hover:bg-red-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Realizar otro examen</span>
            </button>
          </div>
        </div>

        {/* Topics to review */}
        {examResult.topicsToReview.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-amber-950 text-base flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span>Temas que necesitas repasar / Թեմաներ, որոնք անհրաժեշտ է կրկնել:</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {examResult.topicsToReview.map((blockId) => {
                const blk = THEORY_BLOCKS.find((b) => b.id === blockId);
                return (
                  <button
                    key={blockId}
                    onClick={() => onGoToTheory(blockId)}
                    className="px-3 py-1.5 bg-white hover:bg-amber-100 text-red-900 font-bold text-xs rounded-lg border border-amber-300 transition-colors shadow-2xs"
                  >
                    📖 {blk ? blk.title.es : blockId}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Detailed Breakdown of Errors */}
        {examResult.incorrectQuestions.length > 0 ? (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">
              Revisión detallada de preguntas incorrectas / Սխալների վերանայում:
            </h3>

            {examResult.incorrectQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs space-y-3"
              >
                <div className="text-xs font-bold text-gray-500 uppercase">
                  Pregunta #{idx + 1}
                </div>

                <div className="font-bold text-gray-900 text-base">
                  <TranslatableText text={item.questionText} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-rose-800 uppercase">Tu respuesta:</div>
                    <div className="text-sm text-rose-950 font-medium">
                      <TranslatableText text={item.userAnswerText} />
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-emerald-800 uppercase">Respuesta correcta:</div>
                    <div className="text-sm text-emerald-950 font-medium">
                      <TranslatableText text={item.correctAnswerText} />
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3.5 bg-gray-50 border-l-4 border-amber-600 rounded-r-xl text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <div className="font-bold text-amber-900 mb-1">Explicación oficial:</div>
                  <TranslatableText text={item.explanation} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
            <div className="text-2xl font-black text-emerald-800">¡Perfecto! 10 sobre 10</div>
            <p className="text-emerald-900 text-sm">
              Has respondido correctamente a todas las preguntas del examen sin cometer ningún fallo.
            </p>
          </div>
        )}
      </div>
    );
  }

  return null;
};
