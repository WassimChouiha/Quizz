
import React, { useState } from 'react';
import { Question } from './Questions';

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(option);

    
    setTimeout(() => {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };

  return (
    <div className='w-full max-w-md mx-auto mt-10 p-4 bg-gray-500 rounded shadow-md text-center'>
      {currentQuestion < questions.length ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`p-2 mb-2 rounded cursor-pointer ${
                  selectedOption ? 'pointer-events-none' : ''
                } ${
                  selectedOption === option
                    ? option === questions[currentQuestion].correctAnswer
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-blue-400 hover:bg-blue-700'
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed</h2>
          <p className="text-xl">Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
