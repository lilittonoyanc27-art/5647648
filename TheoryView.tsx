import React, { useState } from 'react';
import {
  BookOpen,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ListOrdered,
  Scale,
} from 'lucide-react';
import { THEORY_BLOCKS } from './theoryData.ts';
import { TranslatableText } from './TranslatableText.tsx';

interface TheoryViewProps {
  onGoToExercises: (blockId: string) => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onGoToExercises }) => {
  const [selectedBlockId, setSelectedBlockId] = useState<string>('bloque-1');
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number>(0);

  const currentBlock =
    THEORY_BLOCKS.find((b) => b.id === selectedBlockId) || THEORY_BLOCKS[0];
  const currentSection =
    currentBlock.sections[selectedSectionIndex] || currentBlock.sections[0];

  const handleSelectBlock = (blockId: string) => {
    setSelectedBlockId(blockId);
    setSelectedSectionIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white rounded-2xl p-5 sm:p-7 shadow-md border border-amber-600/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-amber-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Libro de Texto Digital • 1.º de ESO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Sección I: Teoría Completa
            </h2>
            <p className="text-amber-200/90 font-armenian text-sm sm:text-base mt-1">
              Բաժին I․ Ամբողջական տեսություն (սեղմիր ցանկացած տեքստի վրա՝ հայերեն թարգմանությունը տեսնելու համար)
            </p>
          </div>
          <button
            onClick={() => onGoToExercises(currentBlock.id)}
            className="self-start md:self-auto inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-red-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md group"
          >
            <span>Ir a ejercicios de este bloque</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bloque Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
        {THEORY_BLOCKS.map((block) => {
          const isSelected = block.id === selectedBlockId;
          return (
            <button
              key={block.id}
              onClick={() => handleSelectBlock(block.id)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'bg-red-900 text-white border-amber-500 shadow-md ring-2 ring-amber-400/30 font-bold scale-[1.02]'
                  : 'bg-white hover:bg-amber-50/60 text-gray-700 border-gray-200 shadow-xs'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black mb-1 ${
                  isSelected ? 'bg-amber-400 text-red-950' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {block.number}
              </span>
              <span className="text-xs line-clamp-1">{block.title.es.replace(/^Bloque \d+: /, '')}</span>
            </button>
          );
        })}
      </div>

      {/* Block Title and Sections Tabs */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-4">
        <div className="border-b border-gray-100 pb-3">
          <div className="text-xs uppercase tracking-wider font-bold text-red-800">
            {currentBlock.title.es}
          </div>
          <div className="text-sm font-armenian text-gray-500 mt-0.5">
            {currentBlock.title.hy}
          </div>
        </div>

        {/* Section Subtabs (if multiple sections exist in this block) */}
        {currentBlock.sections.length > 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {currentBlock.sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSectionIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedSectionIndex === idx
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {sec.title.es}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Section Content Area */}
      <div className="space-y-6">
        {/* Definition & Badge */}
        <section className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-800 text-white">
              {currentSection.badge.es}
            </span>
            <span className="text-xs font-armenian text-amber-900 font-semibold">
              ({currentSection.badge.hy})
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-red-950 mb-3">
            <TranslatableText text={currentSection.title} />
          </h3>

          <div className="p-4 bg-white rounded-xl border-l-4 border-amber-600 shadow-xs space-y-2">
            <div className="text-sm font-semibold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Definición oficial / Սահմանում</span>
            </div>
            <div className="text-gray-900 text-base font-medium leading-relaxed">
              <TranslatableText text={currentSection.definition} />
            </div>
          </div>

          <div className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <TranslatableText text={currentSection.explanation} />
          </div>
        </section>

        {/* Rules and Principles */}
        {currentSection.rules && currentSection.rules.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Reglas y características principales / Հիմնական կանոններ</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSection.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 hover:bg-amber-50/40 transition-colors border border-gray-200/80 rounded-xl p-4 space-y-1.5"
                >
                  <div className="font-bold text-red-900 text-sm">
                    <TranslatableText text={rule.title} />
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    <TranslatableText text={rule.description} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Classifications & Subtypes */}
        {currentSection.classifications && currentSection.classifications.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-red-700" />
              <span>Clasificación detallada / Մանրամասն դասակարգում</span>
            </h4>
            <div className="space-y-4">
              {currentSection.classifications.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-red-100 bg-red-50/30 rounded-xl p-4 sm:p-5 space-y-2"
                >
                  <div className="text-base font-bold text-red-950">
                    <TranslatableText text={item.name} />
                  </div>
                  <div className="text-sm text-gray-700">
                    <TranslatableText text={item.description} />
                  </div>

                  {item.keyDetail && (
                    <div className="text-xs bg-amber-100/70 text-amber-950 p-2.5 rounded-lg border border-amber-200 font-medium">
                      <TranslatableText text={item.keyDetail} />
                    </div>
                  )}

                  {item.examples && item.examples.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-red-100 space-y-1.5">
                      <span className="text-xs font-bold text-red-800 uppercase tracking-wider block">
                        Ejemplos ilustrativos / Օրինակներ:
                      </span>
                      {item.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="bg-white rounded-lg p-2.5 border border-gray-200 text-sm font-literary italic text-gray-800"
                        >
                          <TranslatableText text={ex} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Comparative Tables */}
        {currentSection.comparisons && currentSection.comparisons.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <span>Comparaciones y diferencias clave / Համեմատական աղյուսակ</span>
            </h4>
            {currentSection.comparisons.map((table, tIdx) => (
              <div key={tIdx} className="overflow-x-auto border border-gray-200 rounded-xl">
                <div className="bg-red-950 text-white p-3 font-bold text-sm">
                  <TranslatableText text={table.title} />
                </div>
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2.5 text-left font-bold text-gray-700 w-1/4">
                        Aspecto / Հատկանիշ
                      </th>
                      <th className="px-4 py-2.5 text-left font-bold text-red-900 w-3/8">
                        {table.itemA.es}
                      </th>
                      <th className="px-4 py-2.5 text-left font-bold text-amber-900 w-3/8">
                        {table.itemB.es}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {table.differences.map((diff, dIdx) => (
                      <tr key={dIdx} className={dIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                        <td className="px-4 py-3 font-semibold text-gray-900 align-top">
                          <TranslatableText text={diff.aspect} />
                        </td>
                        <td className="px-4 py-3 text-gray-700 align-top">
                          <TranslatableText text={diff.valA} />
                        </td>
                        <td className="px-4 py-3 text-gray-700 align-top">
                          <TranslatableText text={diff.valB} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </section>
        )}

        {/* Step-by-Step Practical Analysis */}
        {currentSection.stepByStep && currentSection.stepByStep.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-indigo-600" />
              <span>Análisis paso a paso / Քայլ առ քայլ վերլուծություն</span>
            </h4>
            <div className="space-y-3">
              {currentSection.stepByStep.map((s, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-3 p-4 bg-indigo-50/40 border border-indigo-100 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                    {s.step}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="font-bold text-indigo-950 text-sm">
                      <TranslatableText text={s.title} />
                    </div>
                    <div className="text-gray-700 text-xs sm:text-sm">
                      <TranslatableText text={s.action} />
                    </div>
                    <div className="mt-1 font-literary italic text-xs bg-white p-2 rounded-lg border border-indigo-200 text-indigo-900">
                      <TranslatableText text={s.example} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tricky Cases & Frequent Mistakes */}
        {(currentSection.trickyCases || currentSection.frequentMistakes) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentSection.trickyCases && (
              <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-3">
                <h5 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>Casos difíciles y curiosidades / Բարդ դեպքեր</span>
                </h5>
                {currentSection.trickyCases.map((tc, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-amber-200/80 space-y-1">
                    <div className="font-bold text-amber-900 text-xs">
                      <TranslatableText text={tc.title} />
                    </div>
                    <div className="text-xs text-gray-700">
                      <TranslatableText text={tc.explanation} />
                    </div>
                    <div className="text-xs italic font-literary bg-amber-50 p-1.5 rounded mt-1 text-amber-950">
                      <TranslatableText text={tc.example} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentSection.frequentMistakes && (
              <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 space-y-3">
                <h5 className="font-bold text-rose-950 flex items-center gap-2 text-sm sm:text-base">
                  <AlertTriangle className="w-4 h-4 text-rose-700" />
                  <span>Errores frecuentes de alumnos / Հաճախակի սխալներ</span>
                </h5>
                {currentSection.frequentMistakes.map((fm, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-rose-200/80 space-y-1">
                    <div className="font-bold text-rose-900 text-xs">
                      <TranslatableText text={fm.mistake} />
                    </div>
                    <div className="text-xs text-emerald-800 font-semibold">
                      <TranslatableText text={fm.correction} />
                    </div>
                    <div className="text-xs text-gray-600">
                      <TranslatableText text={fm.explanation} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* How to Detect in Texts */}
        {currentSection.detectionGuide && currentSection.detectionGuide.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <span>¿Cómo reconocerlo en el texto? / Ինչպե՞ս ճանաչել տեքստում</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentSection.detectionGuide.map((guide, idx) => (
                <div key={idx} className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800">
                  <TranslatableText text={guide} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Topic Summary & Bottom CTA */}
        <section className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs uppercase font-bold text-amber-400">
              Resumen final / Թեմայի ամփոփում
            </div>
            {currentSection.summary.map((sum, idx) => (
              <div key={idx} className="text-xs sm:text-sm text-amber-100">
                <TranslatableText text={sum} />
              </div>
            ))}
          </div>
          <button
            onClick={() => onGoToExercises(currentBlock.id)}
            className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-red-950 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2 group"
          >
            <span>Practicar ejercicios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </div>
    </div>
  );
};
