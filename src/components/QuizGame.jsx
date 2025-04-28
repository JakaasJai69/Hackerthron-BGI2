import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'Which city is known as the cultural capital of India?',
    options: ['Mumbai', 'Kolkata', 'Chennai', 'Delhi'],
    answer: 'Kolkata',
  },
  {
    id: 2,
    question: 'What is the traditional dance form of Kerala?',
    options: ['Bharatanatyam', 'Kathakali', 'Odissi', 'Garba'],
    answer: 'Kathakali',
  },
  {
    id: 3,
    question: 'Which festival is known as the festival of lights?',
    options: ['Holi', 'Diwali', 'Eid', 'Christmas'],
    answer: 'Diwali',
  },
];

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz completed! Thank you for participating.');
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div>
      <h1>Gamified Learning - Quiz</h1>
      <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#fff8f0', padding: '1rem', borderRadius: '8px', border: '1px solid #d9cbb6' }}>
        <p><strong>Question {currentQuestionIndex + 1}:</strong> {currentQuestion.question}</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {currentQuestion.options.map((option) => (
            <li key={option} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => handleOptionClick(option)}
                disabled={showAnswer}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: selectedOption === option ? (option === currentQuestion.answer ? '#a7d7a7' : '#e7a7a7') : '#d9cbb6',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: showAnswer ? 'default' : 'pointer',
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        {showAnswer && (
          <button onClick={handleNext} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#6b4c3b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
