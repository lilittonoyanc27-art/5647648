import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from 'lucide-react';
import { VOCAB_ITEMS } from './vocabData.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { shuffleAndFormatOptions } from './shuffleUtils.ts';
import { ExerciseOption } from './types.ts';

export const VocabView: React.FC = () => {
  const [selectedWordId, setSelectedWordId] = useState<string>(VOCAB_ITEMS[0].id);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, string>>({});
  const [drillChecked, setDrillChecked] = useState<Record<string, boolean>>({});
  const [shuffledDrillOptions, setShuffledDrillOptions] = useState<ExerciseOption[]>([]);

  const currentWord =
    VOCAB_ITEMS.find((v) => v.id === selectedWordId) || VOCAB_ITEMS[0];

  // Randomize drill options when word changes
  React.useEffect(() => {
    if (currentWord && currentWord.drill && currentWord.drill.options) {
      setShuffledDrillOptions(shuffleAndFormatOptions(currentWord.drill.options));
    }
  }, [currentWord.id]);

  const handleSelectDrill = (wordId: string, optId: string) => {
    if (drillChecked[wordId]) return;
    setDrillAnswers((prev) => ({
      ...prev,
      [wordId]: optId,
    }));
  };

  const handleCheckDrill = (wordId: string) => {
    const item = VOCAB_ITEMS.find((v) => v.id === wordId);
    if (!item) return;
    const isCorrect = drillAnswers[wordId] === item.drill.correctAnswer;
    setDrillChecked((prev) => ({
      ...prev,
      [wordId]: true,
    }));

    if (isCorrect) {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
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
          <Sparkles className="w-3.5 h-3.5" />
          <span>Léxico y Expresiones • Բառապաշար և Դարձվածքներ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Vocabulario Académico y Cotidiano de 1.º de ESO
        </h2>
        <p className="text-amber-200/90 font-armenian text-xs sm:text-sm mt-1">
          Հիմնական եզրույթները, քերականական կիրառությունները, խորհուրդ տալու բանաձևերը և գործնական մինի-վարժությունները։
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Word List */}
        <div className="lg:col-span-1 space-y-1.5">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1 mb-2">
            Palabras y expresiones ({VOCAB_ITEMS.length}):
          </div>
          {VOCAB_ITEMS.map((item) => {
            const isSelected = item.id === selectedWordId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedWordId(item.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all text-xs sm:text-sm flex flex-col gap-0.5 ${
                  isSelected
                    ? 'bg-red-900 text-white border-amber-500 shadow-md font-bold'
                    : 'bg-white hover:bg-amber-50/50 text-gray-800 border-gray-200'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>{item.word}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-amber-400 text-red-950 font-bold'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {item.category.es.split(' ')[0]}
                  </span>
                </div>
                <div
                  className={`text-xs font-armenian ${
                    isSelected ? 'text-amber-200' : 'text-gray-500'
                  }`}
                >
                  {item.translationHy}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Word Card & Drill */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
            {/* Title & translation */}
            <div className="border-b border-gray-100 pb-4 space-y-1">
              <div className="text-xs font-bold text-red-800 uppercase tracking-wider">
                <TranslatableText text={currentWord.category} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-red-950">
                {currentWord.word}
              </h3>
              <div className="text-sm font-armenian font-semibold text-amber-900 bg-amber-50 inline-block px-3 py-1 rounded-lg border border-amber-200/80">
                🇦🇲 {currentWord.translationHy}
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Definición y uso escolar / Սահմանում և դպրոցական կիրառություն:
              </div>
              <div className="text-sm sm:text-base text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
                <TranslatableText text={currentWord.definition} />
              </div>
            </div>

            {/* Collocations */}
            {currentWord.collocations && currentWord.collocations.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Combinaciones frecuentes / Հաճախակի բառակապակցություններ:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentWord.collocations.map((col, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-amber-50/60 border border-amber-200/70 rounded-lg text-xs font-medium text-amber-950"
                    >
                      <TranslatableText text={col} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Real Examples */}
            {currentWord.examples && currentWord.examples.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-red-800" />
                  <span>Ejemplos en contexto / Օրինակներ համատեքստում:</span>
                </div>
                <div className="space-y-2">
                  {currentWord.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-gray-200 rounded-xl font-literary italic text-sm text-gray-800"
                    >
                      <TranslatableText text={ex} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Drill */}
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-700" />
                <span>Mini-ejercicio de práctica rápida / Գործնական վարժություն:</span>
              </div>

              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-3">
                <div className="font-bold text-gray-900 text-sm">
                  <TranslatableText text={currentWord.drill.question} />
                </div>

                <div className="space-y-2">
                  {(shuffledDrillOptions.length > 0 ? shuffledDrillOptions : currentWord.drill.options).map((opt) => {
                    const isSelected = drillAnswers[currentWord.id] === opt.id;
                    const isChecked = !!drillChecked[currentWord.id];
                    const isCorrectOpt = opt.id === currentWord.drill.correctAnswer;

                    let optStyle = 'border-gray-200 bg-white hover:border-indigo-400';
                    if (isSelected) optStyle = 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500/20';
                    if (isChecked) {
                      if (isCorrectOpt) optStyle = 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20';
                      else if (isSelected) optStyle = 'border-rose-500 bg-rose-50 ring-2 ring-rose-500/20';
                    }

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectDrill(currentWord.id, opt.id)}
                        className={`p-3 rounded-lg border-2 text-xs sm:text-sm font-medium cursor-pointer transition-all ${optStyle}`}
                      >
                        <TranslatableText text={opt.text} />
                      </div>
                    );
                  })}
                </div>

                {/* Drill Check Button and Explanation */}
                <div className="pt-2">
                  {!drillChecked[currentWord.id] ? (
                    <button
                      disabled={!drillAnswers[currentWord.id]}
                      onClick={() => handleCheckDrill(currentWord.id)}
                      className="px-4 py-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-xl text-xs font-bold transition-colors disabled:opacity-40"
                    >
                      Comprobar respuesta / Ստուգել
                    </button>
                  ) : (
                    <div
                      className={`p-3 rounded-lg border-l-4 text-xs ${
                        drillAnswers[currentWord.id] === currentWord.drill.correctAnswer
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                          : 'bg-rose-50 border-rose-600 text-rose-950'
                      }`}
                    >
                      <div className="font-bold mb-0.5 flex items-center gap-1.5">
                        {drillAnswers[currentWord.id] === currentWord.drill.correctAnswer ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>¡Muy bien! Respuesta correcta</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-600" />
                            <span>Respuesta incorrecta</span>
                          </>
                        )}
                      </div>
                      <TranslatableText text={currentWord.drill.explanation} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
