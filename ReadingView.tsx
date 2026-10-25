import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Library,
  BookOpen,
  CheckCircle2,
  XCircle,
  Tag,
} from 'lucide-react';
import { READING_TEXTS } from './readingData.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { shuffleAndFormatOptions } from './shuffleUtils.ts';
import { ExerciseOption } from './types.ts';

export const ReadingView: React.FC = () => {
  const [selectedTextId, setSelectedTextId] = useState<string>(READING_TEXTS[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [shuffledQuestionsMap, setShuffledQuestionsMap] = useState<Record<string, ExerciseOption[]>>({});

  const currentText =
    READING_TEXTS.find((t) => t.id === selectedTextId) || READING_TEXTS[0];

  // Randomize option order whenever a text is selected
  React.useEffect(() => {
    const map: Record<string, ExerciseOption[]> = {};
    currentText.questions.forEach((q) => {
      map[q.id] = shuffleAndFormatOptions(q.options);
    });
    setShuffledQuestionsMap(map);
    setAnswers({});
    setCheckedQuestions({});
  }, [currentText.id]);

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (checkedQuestions[questionId]) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleCheckQuestion = (questionId: string) => {
    const q = currentText.questions.find((item) => item.id === questionId);
    if (!q) return;
    const isCorrect = answers[questionId] === q.correctAnswer;
    setCheckedQuestions((prev) => ({
      ...prev,
      [questionId]: true,
    }));

    if (isCorrect) {
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.8 },
        });
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-2xl p-5 sm:p-7 shadow-md border border-amber-600/30">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-amber-400/30">
          <Library className="w-3.5 h-3.5" />
          <span>Lecturas Comentadas • Ընթերցանություն և Ըմբռնում</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Lectura y Comprensión Guiada
        </h2>
        <p className="text-amber-200/90 font-armenian text-xs sm:text-sm mt-1">
          10 տեքստեր՝ պարբերությունների հայերեն թարգմանությամբ, բառապաշարի, գեղարվեստական հնարքների և քերականական վերլուծությամբ։
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Text Selection List */}
        <div className="lg:col-span-1 space-y-2">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">
            Lista de lecturas ({READING_TEXTS.length}):
          </div>
          <div className="space-y-1.5">
            {READING_TEXTS.map((t, idx) => {
              const isSelected = t.id === selectedTextId;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTextId(t.id);
                    setAnswers({});
                    setCheckedQuestions({});
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs sm:text-sm flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-red-900 text-white border-amber-500 shadow-md font-bold'
                      : 'bg-white hover:bg-amber-50/50 text-gray-800 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      {idx + 1}. {t.title.es}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-amber-400 text-red-950 font-bold'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {t.typeTag}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-armenian ${
                      isSelected ? 'text-amber-200' : 'text-gray-500'
                    }`}
                  >
                    {t.title.hy}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Reading Reader and Questions */}
        <div className="lg:col-span-3 space-y-6">
          {/* Main Reading Card */}
          <article className="bg-[#fffdfa] border border-amber-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            {/* Header info */}
            <div className="border-b border-amber-200/60 pb-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-red-900 bg-red-100/80 px-2.5 py-0.5 rounded-full">
                  <Tag className="w-3 h-3" />
                  {currentText.genre.es}
                </span>
                <span className="text-xs font-armenian text-amber-900 font-medium">
                  ({currentText.genre.hy})
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-950 pt-1 font-literary">
                <TranslatableText text={currentText.title} />
              </h3>
              <div className="text-xs sm:text-sm text-gray-600 italic">
                <TranslatableText text={currentText.introduction} />
              </div>
            </div>

            {/* Paragraphs with interactive translations */}
            <div className="space-y-4 font-literary text-gray-800 text-base sm:text-lg leading-relaxed pt-2">
              {currentText.paragraphs.map((p, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl hover:bg-amber-100/40 transition-colors border-l-2 border-transparent hover:border-amber-500"
                >
                  <TranslatableText text={p} />
                </div>
              ))}
            </div>
          </article>

          {/* Post-Reading Comprehension Questions */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-6">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <BookOpen className="w-5 h-5 text-red-800" />
              <span>Actividades de Comprensión y Análisis / Հարցեր և վերլուծություն</span>
            </h4>

            <div className="space-y-6">
              {currentText.questions.map((q, qIdx) => {
                const userAns = answers[q.id];
                const isChecked = !!checkedQuestions[q.id];
                const isCorrect = userAns === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className="p-4 sm:p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-900 text-white text-xs font-bold flex items-center justify-center">
                        {qIdx + 1}
                      </span>
                      <div className="font-bold text-gray-900 text-sm sm:text-base flex-1">
                        <TranslatableText text={q.question} />
                      </div>
                    </div>

                    {/* Options (shuffled order) */}
                    <div className="space-y-2.5 pt-1">
                      {(shuffledQuestionsMap[q.id] || q.options).map((opt) => {
                        const isSelected = userAns === opt.id;
                        const isCorrectOpt = opt.id === q.correctAnswer;

                        let optStyle =
                          'border-gray-200 hover:border-amber-400 bg-white';

                        if (isSelected) {
                          optStyle = 'border-red-800 bg-red-50/50 ring-2 ring-red-800/20';
                        }

                        if (isChecked) {
                          if (isCorrectOpt) {
                            optStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20';
                          } else if (isSelected && !isCorrect) {
                            optStyle = 'border-rose-500 bg-rose-50 ring-2 ring-rose-500/20';
                          }
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${optStyle}`}
                          >
                            <div className="flex items-start gap-2.5">
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  isSelected
                                    ? 'border-red-800 bg-red-800 text-white'
                                    : 'border-gray-300'
                                }`}
                              >
                                {isSelected && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                              </div>
                              <div className="text-xs sm:text-sm font-medium text-gray-900 flex-1">
                                <TranslatableText text={opt.text} />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Check Button & Explanation */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      {!isChecked ? (
                        <button
                          disabled={!userAns}
                          onClick={() => handleCheckQuestion(q.id)}
                          className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors disabled:opacity-40"
                        >
                          Comprobar respuesta / Ստուգել
                        </button>
                      ) : (
                        <div
                          className={`w-full p-3 rounded-xl border-l-4 text-xs sm:text-sm space-y-1 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                              : 'bg-rose-50 border-rose-600 text-rose-950'
                          }`}
                        >
                          <div className="font-bold flex items-center gap-1.5">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>¡Correcto! / Ճիշտ է։</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-4 h-4 text-rose-600" />
                                <span>Incorrecto / Սխալ է։</span>
                              </>
                            )}
                          </div>
                          <TranslatableText text={q.explanation} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
