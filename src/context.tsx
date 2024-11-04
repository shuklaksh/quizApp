import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

// Define the type for a question
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswers: string[];
  image?: string | null;
}

// Define the type for the context's value
interface QuizContextType {
  questions: Question[] | null;
  userResponses: { questionId: number; selectedOptions: string[]; timeTaken?: number }[];
  scoreReport: { totalScore: number; totalCount: number; correct: number; incorrect: number } | null;
  startQuiz: () => Promise<'success' | 'error'>; // Return type specified
  submitAnswer: (questionId: number, selectedOptions: string[], timeTaken: number) => Promise<'success' | 'error'>; // Return type specified
  finishQuiz: () => Promise<'success' | 'error'>; // Return type specified
}

// Create the context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Custom hook to use the QuizContext
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

// Create the provider component
export const QuizProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [userResponses, setUserResponses] = useState<
    { questionId: number; selectedOptions: string[]; timeTaken: number }[]
  >([]);
  const [scoreReport, setScoreReport] = useState<{ totalScore: number; totalCount: number; correct: number; incorrect: number } | null>(
    null
  );

  const startQuiz = async (): Promise<'success' | 'error'> => {
    try {
      const response = await fetch('http://localhost:8000/api/quiz/start', {
        method: 'POST',
      });
      const data = await response.json();
      setQuestions(data.questions);
      return 'success'; // Return success status
    } catch (error) {
      console.error('Error starting the quiz:', error);
      return 'error'; // Return error status
    }
  };

  const submitAnswer = async (questionId: number, selectedOptions: string[], timeTaken: number): Promise<'success' | 'error'> => {
    try {
      const response = await fetch('http://localhost:8000/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, selectedOptions, timeTaken }),
      });
      if (response.ok) {
        setUserResponses((prev) => [...prev, { questionId, selectedOptions, timeTaken }]);
        return 'success'; // Return success status
      } else {
        console.error('Error submitting answer');
        return 'error'; // Return error status
      }
    } catch (error) {
      console.error('Error submitting the answer:', error);
      return 'error'; // Return error status
    }
  };

  const finishQuiz = async (): Promise<'success' | 'error'> => {
    try {
      const response = await fetch('http://localhost:8000/api/quiz/finish', {
        method: 'POST',
      });
      const report = await response.json();
      setScoreReport(report);
      return 'success'; // Return success status
    } catch (error) {
      console.error('Error finishing the quiz:', error);
      return 'error'; // Return error status
    }
  };

  // Provide the context to children
  return (
    <QuizContext.Provider
      value={{
        questions,
        userResponses,
        scoreReport,
        startQuiz,
        submitAnswer,
        finishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
