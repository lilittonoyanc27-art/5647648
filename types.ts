export interface BilingualText {
  es: string;
  hy: string;
}

export interface Example {
  es: string;
  hy: string;
  noteEs?: string;
  noteHy?: string;
}

export interface ComparisonRow {
  aspect: BilingualText;
  valA: BilingualText;
  valB: BilingualText;
}

export interface ComparisonTable {
  title: BilingualText;
  itemA: BilingualText;
  itemB: BilingualText;
  differences: ComparisonRow[];
}

export interface Classification {
  name: BilingualText;
  description: BilingualText;
  examples: BilingualText[];
  keyDetail?: BilingualText;
}

export interface TrickyCase {
  title: BilingualText;
  explanation: BilingualText;
  example: BilingualText;
}

export interface FrequentMistake {
  mistake: BilingualText;
  correction: BilingualText;
  explanation: BilingualText;
}

export interface StepGuide {
  step: number;
  title: BilingualText;
  action: BilingualText;
  example: BilingualText;
}

export interface TheorySection {
  id: string;
  blockId: string;
  title: BilingualText;
  badge: BilingualText;
  definition: BilingualText;
  explanation: BilingualText;
  rules?: { title: BilingualText; description: BilingualText }[];
  classifications?: Classification[];
  examples: Example[];
  comparisons?: ComparisonTable[];
  trickyCases?: TrickyCase[];
  frequentMistakes?: FrequentMistake[];
  detectionGuide: BilingualText[];
  stepByStep?: StepGuide[];
  summary: BilingualText[];
}

export interface BloqueInfo {
  id: string;
  number: number;
  title: BilingualText;
  shortDesc: BilingualText;
  icon: string;
  sections: TheorySection[];
}

export type ExerciseType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'matching'
  | 'classify'
  | 'identify-figure';

export type DifficultyLevel = 'facil' | 'intermedio' | 'examen';

export interface ExerciseOption {
  id: string;
  text: BilingualText;
}

export interface MatchingPair {
  id: string;
  left: BilingualText;
  right: BilingualText;
}

export interface ClassifyCategory {
  id: string;
  name: BilingualText;
}

export interface ClassifyItem {
  id: string;
  text: BilingualText;
  correctCategoryId: string;
}

export interface Exercise {
  id: string;
  blockId: string;
  level: DifficultyLevel;
  type: ExerciseType;
  instruction: BilingualText;
  question: BilingualText;
  context?: BilingualText;
  options?: ExerciseOption[];
  correctAnswer: string; // for multiple choice & true-false ('true'|'false') & fill-blank
  matchingPairs?: MatchingPair[]; // for matching
  classifyCategories?: ClassifyCategory[]; // for classify
  classifyItems?: ClassifyItem[]; // for classify
  explanation: BilingualText;
  hint: BilingualText;
}

export interface ReadingQuestion {
  id: string;
  question: BilingualText;
  type: 'comprehension' | 'vocabulary' | 'literary' | 'grammar' | 'author_intent';
  options: ExerciseOption[];
  correctAnswer: string;
  explanation: BilingualText;
}

export interface ReadingText {
  id: string;
  title: BilingualText;
  genre: BilingualText;
  typeTag: string; // 'narracion' | 'cuento' | 'leyenda' | 'mito' | 'descriptivo' | 'poetico' | 'romance' | 'informativo'
  author?: BilingualText;
  introduction: BilingualText;
  paragraphs: BilingualText[];
  literaryHighlights?: { phrase: BilingualText; device: BilingualText; note: BilingualText }[];
  questions: ReadingQuestion[];
}

export interface VocabWord {
  id: string;
  word: string;
  pronunciation?: string;
  translationHy: string;
  category: BilingualText;
  definition: BilingualText;
  usageContext: BilingualText;
  collocations: BilingualText[];
  examples: Example[];
  commonMistake?: BilingualText;
  drill: {
    question: BilingualText;
    options: ExerciseOption[];
    correctAnswer: string;
    explanation: BilingualText;
  };
}

export interface StudentProgress {
  completedTheory: string[]; // section IDs
  completedExercises: Record<string, { correct: boolean; score: number; attempts: number }>;
  completedReadings: Record<string, number>; // reading ID -> score percentage
  examHistory: ExamRecord[];
  allTranslationsVisible: boolean;
}

export interface ExamRecord {
  id: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  scoreOutOf10: number;
  percentage: number;
  timeSpentSeconds: number;
  incorrectQuestions: {
    questionId: string;
    blockId: string;
    questionText: BilingualText;
    userAnswerText: BilingualText;
    correctAnswerText: BilingualText;
    explanation: BilingualText;
  }[];
  topicsToReview: string[];
}
