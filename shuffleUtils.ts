import { ExerciseOption } from './types.ts';

/**
 * Fisher-Yates array shuffle algorithm (returns a new shuffled array copy)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Strips any legacy hardcoded "A. ", "B. ", "a) " from text and formats with new position letter
 */
export function formatShuffledOption(option: ExerciseOption, index: number): ExerciseOption {
  // If it's a true-false option without letters, keep original
  if (option.id === 'true' || option.id === 'false') {
    return option;
  }

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const prefix = letters[index] ? `${letters[index]}. ` : '';

  const cleanEs = option.text.es.replace(/^[A-Z][.)]\s*/i, '');
  const cleanHy = option.text.hy.replace(/^[A-ZԱ-Ֆ][.)]\s*/i, '');

  return {
    id: option.id,
    text: {
      es: `${prefix}${cleanEs}`,
      hy: `${prefix}${cleanHy}`,
    },
  };
}

/**
 * Shuffles an options list and cleanly re-assigns letter labels A, B, C, D
 */
export function shuffleAndFormatOptions(options?: ExerciseOption[]): ExerciseOption[] {
  if (!options || options.length <= 1) return options || [];

  const shuffled = shuffleArray(options);

  // If it's true-false question, keep without letter prefix
  const isTrueFalse = options.length === 2 && options.some((o) => o.id === 'true' || o.id === 'false');
  if (isTrueFalse) {
    return shuffled;
  }

  return shuffled.map((opt, idx) => formatShuffledOption(opt, idx));
}
