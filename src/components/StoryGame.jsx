import React, { useState } from 'react';

const StoryGame = () => {
  const [storyIndex, setStoryIndex] = useState(0);
  const storyParts = [
    "In the neon-lit streets of future Mumbai, a young historian discovers a hidden artifact.",
    "The artifact holds secrets to India's ancient past, encrypted in glowing symbols.",
    "Can you help decode the mystery and preserve the heritage for future generations?",
  ];

  const handleNext = () => {
    if (storyIndex < storyParts.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      alert('Story completed! Thank you for playing.');
      setStoryIndex(0);
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace" }}>
      <h1 style={{ textAlign: 'center', textShadow: '0 0 10px #00fff7' }}>Gamified Learning - Story Game</h1>
      <div style={{
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#121233',
        padding: '1rem',
        borderRadius: '12px',
        border: '2px solid #00fff7',
        boxShadow: '0 0 20px #00fff7',
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '600',
      }}>
        <p>{storyParts[storyIndex]}</p>
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
      </div>
    </div>
  );
};

export default StoryGame;
