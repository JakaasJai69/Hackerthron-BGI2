import React, { useState } from 'react';
import StoryGame from './StoryGame';
import PuzzleGame from './PuzzleGame';

const quizQuestions = [
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

const buttonStyle = {
  padding: '1rem',
  fontSize: '1.2rem',
  fontWeight: '700',
  borderRadius: '12px',
  border: '2px solid #00fff7',
  backgroundColor: '#121233',
  color: '#00fff7',
  cursor: 'pointer',
  boxShadow: '0 0 15px #00fff7',
  transition: 'background-color 0.3s ease',
  marginBottom: '1rem',
};

const QuizGame = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Quiz completed! Thank you for participating.');
      setCurrentQuestionIndex(0);
    }
  };

  if (!selectedGame) {
    return (
      <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
        <h1 style={{ textAlign: 'center', textShadow: '0 0 10px #00fff7' }}>Select a Game</h1>
        <div style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            onClick={() => setSelectedGame('quiz')}
            style={buttonStyle}
          >
            Quiz Game
          </button>
          <button
            onClick={() => setSelectedGame('story')}
            style={buttonStyle}
          >
            Story Game
          </button>
          <button
            onClick={() => setSelectedGame('puzzle')}
            style={buttonStyle}
          >
            Puzzle Game
          </button>
        </div>
      </div>
    );
  }

  if (selectedGame === 'story') {
    return <StoryGame />;
  }

  if (selectedGame === 'puzzle') {
    return <PuzzleGame />;
  }

  // Default to quiz game
  return (
    <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
      <h1 style={{ textAlign: 'center', textShadow: '0 0 10px #00fff7' }}>Gamified Learning - Quiz</h1>
      <div style={{
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#121233',
        padding: '1rem',
        borderRadius: '12px',
        border: '2px solid #00fff7',
        boxShadow: '0 0 20px #00fff7',
      }}>
        <p style={{ fontWeight: '700', fontSize: '1.2rem', textShadow: '0 0 5px #00fff7' }}>
          <strong>Question {currentQuestionIndex + 1}:</strong> {currentQuestion.question}
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {currentQuestion.options.map((option) => (
            <li key={option} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => handleOptionClick(option)}
                disabled={showAnswer}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  backgroundColor: selectedOption === option ? (option === currentQuestion.answer ? '#00ff9f' : '#ff005f') : '#121233',
                  color: selectedOption === option ? '#000' : '#00fff7',
                  border: '1px solid #00fff7',
                  borderRadius: '8px',
                  cursor: showAnswer ? 'default' : 'pointer',
                  boxShadow: selectedOption === option ? (option === currentQuestion.answer ? '0 0 10px #00ff9f' : '0 0 10px #ff005f') : '0 0 5px #00fff7',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!showAnswer) e.currentTarget.style.boxShadow = '0 0 15px #00fff7';
                }}
                onMouseLeave={e => {
                  if (!showAnswer) e.currentTarget.style.boxShadow = '0 0 5px #00fff7';
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        {showAnswer && (
          <button
            onClick={handleNext}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#00fff7',
              color: '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 0 15px #00fff7',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00cfcf'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00fff7'}
          >
            Next
          </button>
        )}
        <button
          onClick={() => setSelectedGame(null)}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ff005f',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '1rem',
            boxShadow: '0 0 15px #ff005f',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#cc004a'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff005f'}
        >
          Back to Game Selection
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
