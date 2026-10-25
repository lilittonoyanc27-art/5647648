import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Languages,
  Library,
  Sparkles,
} from 'lucide-react';

export type ActiveTab = 'teoria' | 'ejercicios' | 'examen' | 'lectura' | 'vocabulario';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  showAllTranslations: boolean;
  setShowAllTranslations: (val: boolean) => void;
  totalScore: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  showAllTranslations,
  setShowAllTranslations,
  totalScore,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white shadow-lg border-b border-amber-600/30">
      {/* Top Banner with App Title and Global Translation Switch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Logo and Titles */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-red-950 shadow-md font-extrabold text-xl">
              1º
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>Lengua Castellana y Literatura</span>
                  <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30 font-semibold">
                    1.º de ESO
                  </span>
                </h1>
              </div>
              <p className="text-xs text-amber-200/90 font-armenian font-medium tracking-wide">
                Իսպաներեն և Գրականություն • 7-րդ դասարան (Երկլեզու ուսումնական հարթակ)
              </p>
            </div>
          </div>

          {/* Right Action Bar: Global Translation Switch & Score */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3">
            {/* Global Translation Switch */}
            <button
              onClick={() => setShowAllTranslations(!showAllTranslations)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border shadow-xs ${
                showAllTranslations
                  ? 'bg-amber-400 text-red-950 border-amber-300 ring-2 ring-amber-300/40'
                  : 'bg-red-900/80 hover:bg-red-800 text-amber-100 border-amber-500/40'
              }`}
              title="Activar/desactivar todas las traducciones al armenio / Միացնել/անջատել բոլոր հայերեն թարգմանությունները"
            >
              <Languages className="w-4 h-4 flex-shrink-0 text-amber-300" />
              <div className="text-left leading-tight">
                <span className="block font-bold">
                  {showAllTranslations ? 'Ocultar traducciones' : 'Mostrar todas'}
                </span>
                <span className="block text-[10px] font-armenian opacity-90">
                  {showAllTranslations ? 'Թաքցնել թարգմ․' : 'Ցույց տալ բոլորը 🇦🇲'}
                </span>
              </div>
            </button>

            {/* Score Badge */}
            <div className="flex items-center gap-1.5 bg-red-950/70 border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs">
              <span className="text-amber-400 font-bold">{totalScore}</span>
              <span className="text-amber-200/80 text-[11px]">pts</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-3 pt-2 border-t border-red-800/60 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('teoria')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'teoria'
                ? 'bg-white text-red-950 shadow-md font-bold'
                : 'text-amber-100/90 hover:bg-red-800/60 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Teoría</span>
            <span className="text-[11px] font-armenian opacity-80">(Տեսություն)</span>
          </button>

          <button
            onClick={() => setActiveTab('ejercicios')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'ejercicios'
                ? 'bg-white text-red-950 shadow-md font-bold'
                : 'text-amber-100/90 hover:bg-red-800/60 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Ejercicios</span>
            <span className="text-[11px] font-armenian opacity-80">(Վարժություններ)</span>
          </button>

          <button
            onClick={() => setActiveTab('examen')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'examen'
                ? 'bg-amber-400 text-red-950 shadow-md font-bold'
                : 'text-amber-100/90 hover:bg-red-800/60 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-red-950" />
            <span>Examen Final</span>
            <span className="text-[11px] font-armenian opacity-80">(Քննություն)</span>
          </button>

          <button
            onClick={() => setActiveTab('lectura')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'lectura'
                ? 'bg-white text-red-950 shadow-md font-bold'
                : 'text-amber-100/90 hover:bg-red-800/60 hover:text-white'
            }`}
          >
            <Library className="w-4 h-4 text-indigo-500" />
            <span>Lectura</span>
            <span className="text-[11px] font-armenian opacity-80">(Ընթերցանություն)</span>
          </button>

          <button
            onClick={() => setActiveTab('vocabulario')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'vocabulario'
                ? 'bg-white text-red-950 shadow-md font-bold'
                : 'text-amber-100/90 hover:bg-red-800/60 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Vocabulario</span>
            <span className="text-[11px] font-armenian opacity-80">(Բառապաշար)</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
