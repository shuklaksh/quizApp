import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you judge what should be added in the next version of the app?",
    options: [
      "Data Analysis",
      "User's feedback",
      "Copy from similar product",
      "Make a questionary",
      "Personal feeling"
    ]
  },
  {
    id: 2,
    text: "What's the most important factor in user retention?",
    options: [
      "Engaging content",
      "Intuitive UI/UX",
      "Regular updates",
      "Customer support",
      "Personalization"
    ]
  }
];

function QuizComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]); // Reset selections for the next question
    }
  };

  return (
      <div className="relative w-full max-w-md mx-auto">
        {/* Progress indicator */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-24 h-24 bg-white rounded-full p-2 shadow-lg">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
              />
              <circle
                className="text-green-500 stroke-current"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="46"
                fill="transparent"
                strokeDasharray="289.02"
                strokeDashoffset={289.02 * (1 - (currentQuestionIndex + 1) / questions.length)}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">
                <span className="text-black">{currentQuestionIndex + 1}</span>
                <span className="text-gray-400 text-xl">/{questions.length}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-3xl overflow-hidden pt-14 shadow-lg">
          <div className="p-6">
            {/* Question */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              {currentQuestion.text}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <div
                  key={option}
                  className={`p-4 rounded-lg shadow-sm cursor-pointer ${
                    selectedOptions.includes(option) ? "bg-green-200" : "bg-gray-100"
                  }`}
                  onClick={() => handleOptionChange(option)}
                >
                  <label className="flex items-center cursor-pointer text-gray-800 text-lg">
                    <input
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleOptionChange(option)}
                      className="appearance-none w-6 h-6 rounded-full border-2 border-gray-400 checked:bg-green-500 checked:border-green-500 mr-4"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>

            {/* Next button */}
            <button
              className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white py-6 text-xl rounded-full"
              onClick={handleNext}
              disabled={selectedOptions.length === 0 || currentQuestionIndex === questions.length - 1}
            >
              {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default QuizComponent;
