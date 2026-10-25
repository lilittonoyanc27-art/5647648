import React, { useState, createContext, useContext } from 'react';
import { Languages, ChevronDown, ChevronUp } from 'lucide-react';
import { BilingualText } from './types.ts';

// Global Context for "Mostrar todas las traducciones"
interface TranslationContextType {
  showAll: boolean;
  setShowAll: (val: boolean) => void;
}

export const TranslationContext = createContext<TranslationContextType>({
  showAll: false,
  setShowAll: () => {},
});

export const useGlobalTranslation = () => useContext(TranslationContext);

interface TranslatableTextProps {
  text: BilingualText | string;
  hyText?: string;
  className?: string;
  inline?: boolean;
  badge?: boolean;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  highlightTerm?: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({
  text,
  hyText,
  className = '',
  inline = false,
  badge = false,
  size = 'base',
}) => {
  const { showAll } = useGlobalTranslation();
  const [isOpenLocal, setIsOpenLocal] = useState<boolean>(false);

  // Derive Spanish and Armenian strings
  const esText = typeof text === 'string' ? text : text?.es || '';
  const armenianTranslation = typeof text === 'object' && text?.hy ? text.hy : hyText || '';

  const isOpen = showAll || isOpenLocal;

  if (!armenianTranslation) {
    return <span className={className}>{esText}</span>;
  }

  const toggleTranslation = (e: React.MouseEvent) => {
    // CRITICAL: Stop propagation so clicking the translation button/trigger
    // does NOT select radio inputs, checkboxes, or parent buttons!
    e.stopPropagation();
    e.preventDefault();
    setIsOpenLocal((prev) => !prev);
  };

  if (inline) {
    return (
      <span className={`inline-flex flex-col align-baseline ${className}`}>
        <span
          onClick={toggleTranslation}
          role="button"
          tabIndex={0}
          title="Haz clic para ver la traducción en armenio / Սեղմիր հայերեն թարգմանության համար"
          className="cursor-pointer border-b border-dashed border-amber-600/60 hover:text-red-900 transition-colors inline-flex items-center gap-1 group"
        >
          <span>{esText}</span>
          <Languages className="w-3.5 h-3.5 text-amber-700 opacity-60 group-hover:opacity-100 inline flex-shrink-0" />
        </span>
        {isOpen && (
          <span
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-amber-900 bg-amber-50/90 border border-amber-200/90 rounded px-1.5 py-0.5 mt-0.5 font-armenian font-medium tracking-wide shadow-xs animate-fadeIn"
          >
            {armenianTranslation}
          </span>
        )}
      </span>
    );
  }

  return (
    <div className={`relative group/trans ${className}`}>
      <div
        onClick={toggleTranslation}
        role="button"
        tabIndex={0}
        title="Clic para traducir / Սեղմիր թարգմանելու համար"
        className="cursor-pointer select-text flex items-start justify-between gap-2 rounded-lg p-0.5 transition-all hover:bg-amber-50/50"
      >
        <div className="flex-1">
          {badge ? (
            <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-900 border border-red-200">
              {esText}
            </span>
          ) : (
            <span>{esText}</span>
          )}
        </div>
        <button
          type="button"
          onClick={toggleTranslation}
          className="flex-shrink-0 p-1 text-amber-700 hover:text-red-800 hover:bg-amber-100/70 rounded transition-colors"
          aria-label="Traducir / Թարգմանել"
        >
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-amber-800" />
          ) : (
            <Languages className="w-4 h-4 text-amber-700 group-hover/trans:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-1.5 p-2.5 bg-amber-50/95 border-l-4 border-amber-600 rounded-r-lg shadow-xs text-amber-950 font-armenian text-sm font-medium leading-relaxed animate-fadeIn"
        >
          <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold mb-0.5 uppercase tracking-wider">
            <span className="text-[10px]">🇦🇲</span>
            <span>Թարգմանություն</span>
          </div>
          <div className="whitespace-pre-line">{armenianTranslation}</div>
        </div>
      )}
    </div>
  );
};
