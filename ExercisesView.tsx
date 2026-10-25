import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  Sparkles,
  BookOpen,
  Shuffle,
} from 'lucide-react';
import { EXERCISES } from './exerciseData.ts';
import { THEORY_BLOCKS } from './theoryData.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { shuffleAndFormatOptions } from './shuffleUtils.ts';
import { ExerciseOption } from './types.ts';

interface ExercisesViewProps {
  initialBlockId?: string;
  onGoToTheory: (blockId: string) => void;
  onExerciseCompleted: (exerciseId: string, isCorrect: boolean) => void;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  initialBlockId,
  onGoToTheory,
  onExerciseCompleted,
}) => {
  const [selectedBlockFilter, setSelectedBlockFilter] = useState<string>(
    initialBlockId || 'all'
  );
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [sessionScore, setSessionScore] = useState<number>(0);
  const [shuffledOptions, setShuffledOptions] = useState<ExerciseOption[]>([]);

  // Filter exercises
  const filteredExercises = useMemo(() => {
    return EXERCISES.filter((ex) => {
      const matchBlock =
        selectedBlockFilter === 'all' || ex.blockId === selectedBlockFilter;
      const matchLevel =
        selectedLevelFilter === 'all' || ex.level === selectedLevelFilter;
      return matchBlock && matchLevel;
    });
  }, [selectedBlockFilter, selectedLevelFilter]);

  const currentExercise = filteredExercises[currentIndex] || filteredExercises[0];

  // Whenever currentExercise changes, randomize option order
  useEffect(() => {
    if (currentExercise && currentExercise.options) {
      setShuffledOptions(shuffleAndFormatOptions(currentExercise.options));
    } else {
      setShuffledOptions([]);
    }
  }, [currentExercise?.id]);

  const handleShuffleOptions = () => {
    if (currentExercise && currentExercise.options) {
      setSelectedAnswer(null);
      setIsChecked(false);
      setShuffledOptions(shuffleAndFormatOptions(currentExercise.options));
    }
  };

  const handleSelectAnswer = (optionId: string) => {
    if (isChecked && isCorrect) return; // Locked once successfully answered
    setSelectedAnswer(optionId);
    setIsChecked(false);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || !currentExercise) return;
    const correct = selectedAnswer === currentExercise.correctAnswer;
    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      setSessionScore((prev) => prev + 10);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Fallback if canvas-confetti is not loaded
      }
    }
    onExerciseCompleted(currentExercise.id, correct);
  };

  const handleNextExercise = () => {
    if (currentIndex < filteredExercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
    setSelectedAnswer(null);
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const handlePreviousExercise = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setSelectedAnswer(null);
      setIsChecked(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  };

  const handleResetFilters = () => {
    setSelectedBlockFilter('all');
    setSelectedLevelFilter('all');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Exercise Section Header */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-amber-600/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sección II: Práctica Interactiva • Վարժություններ</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Banco de Ejercicios Autoevaluables
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 font-armenian mt-1">
              Յուրաքանչյուր հարցի և տարբերակի տակ կարող ես բացել նրա անկախ հայերեն թարգմանությունը։
            </p>
          </div>

          <div className="bg-red-900/80 border border-amber-500/30 rounded-xl px-4 py-2.5 text-center flex-shrink-0">
            <div className="text-xs text-amber-300 font-semibold uppercase">Puntuación</div>
            <div className="text-2xl font-extrabold text-amber-400">+{sessionScore}</div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        {/* Block Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <label className="text-xs font-bold text-gray-700">Tema / Թեմա:</label>
          <select
            value={selectedBlockFilter}
            onChange={(e) => {
              setSelectedBlockFilter(e.target.value);
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setIsChecked(false);
            }}
            className="text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-red-800"
          >
            <option value="all">Todos los temas / Բոլոր թեմաները</option>
            {THEORY_BLOCKS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.title.es}
              </option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-gray-700">Nivel / Մակարդակ:</label>
          <select
            value={selectedLevelFilter}
            onChange={(e) => {
              setSelectedLevelFilter(e.target.value);
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setIsChecked(false);
            }}
            className="text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-red-800"
          >
            <option value="all">Todos los niveles / Բոլոր մակարդակները</option>
            <option value="facil">Nivel 1 — Fácil (Հեշտ)</option>
            <option value="intermedio">Nivel 2 — Intermedio (Միջին)</option>
            <option value="examen">Nivel 3 — Examen (Քննություն)</option>
          </select>
        </div>

        <button
          onClick={handleResetFilters}
          className="text-xs text-gray-500 hover:text-red-800 flex items-center gap-1 font-semibold ml-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Restablecer</span>
        </button>
      </div>

      {/* No exercises fallback */}
      {filteredExercises.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center space-y-3 border border-gray-200">
          <p className="text-gray-600">No hay ejercicios con los filtros seleccionados.</p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-red-800 text-white rounded-xl text-sm font-bold"
          >
            Ver todos los ejercicios
          </button>
        </div>
      ) : (
        /* Exercise Card */
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 space-y-6">
          {/* Header info */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  currentExercise.level === 'facil'
                    ? 'bg-emerald-100 text-emerald-800'
                    : currentExercise.level === 'intermedio'
                    ? 'bg-amber-100 text-amber-900'
                    : 'bg-red-100 text-red-900'
                }`}
              >
                {currentExercise.level === 'facil'
                  ? 'Nivel 1: Fácil'
                  : currentExercise.level === 'intermedio'
                  ? 'Nivel 2: Intermedio'
                  : 'Nivel 3: Examen'}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                Pregunta {currentIndex + 1} de {filteredExercises.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShuffleOptions}
                className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 bg-amber-100/80 hover:bg-amber-200/80 px-2.5 py-1.5 rounded-lg transition-colors border border-amber-300"
                title="Cambiar orden de las opciones / Խառնել պատասխանների հերթականությունը"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Barajar opciones</span>
              </button>

              <button
                onClick={() => onGoToTheory(currentExercise.blockId)}
                className="text-xs font-bold text-red-800 hover:text-red-950 flex items-center gap-1 bg-red-50 hover:bg-red-100 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ver teoría</span>
              </button>
            </div>
          </div>

          {/* Instruction */}
          <div className="text-xs uppercase tracking-wider font-bold text-gray-500">
            <TranslatableText text={currentExercise.instruction} />
          </div>

          {/* Question Text with Armenia Translation */}
          <div className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
            <TranslatableText text={currentExercise.question} />
          </div>

          {/* Context if available */}
          {currentExercise.context && (
            <div className="p-3.5 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl font-literary italic text-gray-800 text-sm">
              <TranslatableText text={currentExercise.context} />
            </div>
          )}

          {/* Options List with Shuffled Order */}
          <div className="space-y-3 pt-2">
            {(shuffledOptions.length > 0 ? shuffledOptions : currentExercise.options || []).map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectOption = option.id === currentExercise.correctAnswer;

              let cardStyle =
                'border-gray-200 hover:border-amber-400 bg-white hover:bg-amber-50/20';

              if (isSelected) {
                cardStyle = 'border-red-800 bg-red-50/40 ring-2 ring-red-800/20';
              }

              if (isChecked) {
                if (isCorrectOption) {
                  cardStyle =
                    'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/30';
                } else if (isSelected && !isCorrect) {
                  cardStyle = 'border-rose-500 bg-rose-50 ring-2 ring-rose-500/30';
                }
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleSelectAnswer(option.id)}
                  className={`p-3.5 sm:p-4 rounded-xl border-2 transition-all cursor-pointer relative ${cardStyle}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-red-800 bg-red-800 text-white'
                            : 'border-gray-300'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>

                      {/* Translatable text for the option */}
                      <div className="text-sm sm:text-base font-medium text-gray-900 flex-1">
                        <TranslatableText text={option.text} />
                      </div>
                    </div>

                    {isChecked && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    )}
                    {isChecked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          {isChecked && (
            <div
              className={`p-4 rounded-xl border-l-4 space-y-2 animate-fadeIn ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-600 text-emerald-950'
                  : 'bg-rose-50 border-rose-600 text-rose-950'
              }`}
            >
              <div className="font-bold flex items-center gap-2 text-sm sm:text-base">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Excelente! Respuesta correcta / Շատ ապրե՛ս, ճիշտ է։ (+10 pts)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Respuesta incorrecta / Ոչ, սխալ է։ Փորձիր կրկին։</span>
                  </>
                )}
              </div>
              <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                <TranslatableText text={currentExercise.explanation} />
              </div>
            </div>
          )}

          {/* Hint Dropdown */}
          {showHint && !isChecked && (
            <div className="p-3.5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-950 space-y-1 animate-fadeIn">
              <div className="font-bold text-amber-800 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Pista para resolver / Հուշում:</span>
              </div>
              <TranslatableText text={currentExercise.hint} />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {!isChecked && (
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="flex-1 sm:flex-initial px-3 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors border border-amber-200"
                >
                  {showHint ? 'Ocultar pista' : 'Ver pista / Հուշում'}
                </button>
              )}
              {isChecked && !isCorrect && (
                <button
                  type="button"
                  onClick={() => {
                    setIsChecked(false);
                    setSelectedAnswer(null);
                    handleShuffleOptions();
                  }}
                  className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-bold text-red-900 bg-red-100 hover:bg-red-200 rounded-xl transition-colors"
                >
                  Reintentar / Փորձել նորից
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={handlePreviousExercise}
                className="px-3 py-2 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl disabled:opacity-40 transition-colors"
              >
                Anterior
              </button>

              {!isChecked ? (
                <button
                  type="button"
                  disabled={!selectedAnswer}
                  onClick={handleCheckAnswer}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white rounded-xl text-sm font-bold shadow-md transition-all disabled:opacity-40"
                >
                  Comprobar respuesta
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextExercise}
                  className="flex-1 sm:flex-initial px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-red-950 rounded-xl text-sm font-bold shadow-md transition-all"
                >
                  {currentIndex < filteredExercises.length - 1
                    ? 'Siguiente pregunta'
                    : 'Repetir bloque'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
