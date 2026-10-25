import React, { useState, useEffect } from 'react';
import { ActiveTab, Navbar } from './Navbar.tsx';
import { TranslationContext } from './TranslatableText.tsx';
import { TheoryView } from './TheoryView.tsx';
import { ExercisesView } from './ExercisesView.tsx';
import { ExamView } from './ExamView.tsx';
import { ReadingView } from './ReadingView.tsx';
import { VocabView } from './VocabView.tsx';
import { ExamRecord, StudentProgress } from './types.ts';

const STORAGE_KEY = 'lce_eso_progress_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('teoria');
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);
  const [targetExerciseBlockId, setTargetExerciseBlockId] = useState<string>('all');

  // Local storage state for progress
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {
      completedTheory: [],
      completedExercises: {},
      completedReadings: {},
      examHistory: [],
      allTranslationsVisible: false,
    };
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Compute total student score
  const totalScore = Object.values(progress.completedExercises).reduce(
    (acc, curr) => acc + (curr.correct ? curr.score : 0),
    0
  );

  const handleGoToExercises = (blockId: string) => {
    setTargetExerciseBlockId(blockId);
    setActiveTab('ejercicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToTheory = (blockId: string) => {
    setActiveTab('teoria');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExerciseCompleted = (exerciseId: string, isCorrect: boolean) => {
    setProgress((prev) => {
      const existing = prev.completedExercises[exerciseId] || {
        correct: false,
        score: 0,
        attempts: 0,
      };
      return {
        ...prev,
        completedExercises: {
          ...prev.completedExercises,
          [exerciseId]: {
            correct: isCorrect || existing.correct,
            score: isCorrect ? 10 : existing.score,
            attempts: existing.attempts + 1,
          },
        },
      };
    });
  };

  const handleExamFinished = (record: ExamRecord) => {
    setProgress((prev) => ({
      ...prev,
      examHistory: [record, ...prev.examHistory],
    }));
  };

  return (
    <TranslationContext.Provider
      value={{
        showAll: showAllTranslations,
        setShowAll: setShowAllTranslations,
      }}
    >
      <div className="min-h-screen bg-slate-50 flex flex-col text-gray-900 selection:bg-amber-300 selection:text-red-950">
        {/* Navigation Bar with Tabs and Bilingual Switch */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          showAllTranslations={showAllTranslations}
          setShowAllTranslations={setShowAllTranslations}
          totalScore={totalScore}
        />

        {/* Main Workspace Body */}
        <main className="flex-1 pb-16">
          {activeTab === 'teoria' && (
            <TheoryView onGoToExercises={handleGoToExercises} />
          )}

          {activeTab === 'ejercicios' && (
            <ExercisesView
              initialBlockId={targetExerciseBlockId}
              onGoToTheory={handleGoToTheory}
              onExerciseCompleted={handleExerciseCompleted}
            />
          )}

          {activeTab === 'examen' && (
            <ExamView
              onGoToTheory={handleGoToTheory}
              onExamFinished={handleExamFinished}
            />
          )}

          {activeTab === 'lectura' && <ReadingView />}

          {activeTab === 'vocabulario' && <VocabView />}
        </main>

        {/* Educational Footer */}
        <footer className="bg-red-950 text-amber-100/80 border-t border-amber-600/30 py-8 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <div className="font-bold text-white text-sm">
                Lengua Castellana y Literatura • 1.º de ESO (España)
              </div>
              <p className="text-amber-300/80 font-armenian text-xs mt-0.5">
                Իսպաներեն և Գրականություն • Բոլոր թեմաների երկլեզու ուսումնական ծրագիր
              </p>
              <p className="text-gray-400 text-[11px] mt-1">
                Alineado con el currículo oficial de Educación Secundaria Obligatoria en España.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      '¿Deseas reiniciar tu progreso guardado? / Ցանկանո՞ւմ ես զրոյացնել պահպանված առաջընթացը:'
                    )
                  ) {
                    localStorage.removeItem(STORAGE_KEY);
                    setProgress({
                      completedTheory: [],
                      completedExercises: {},
                      completedReadings: {},
                      examHistory: [],
                      allTranslationsVisible: false,
                    });
                  }
                }}
                className="text-amber-300 hover:text-white underline text-[11px] transition-colors"
              >
                Reiniciar progreso
              </button>
            </div>
          </div>
        </footer>
      </div>
    </TranslationContext.Provider>
  );
}
