import React, { useState } from 'react';

const languages = [
  {
    id: 1,
    name: 'Hindi',
    intro: 'Hindi is one of the official languages of India, written in the Devanagari script.',
    history: 'Hindi evolved from Sanskrit and has a rich literary tradition dating back centuries.',
    flashcards: [
      { word: 'Namaste', meaning: 'Hello' },
      { word: 'Shukriya', meaning: 'Thank you' },
      { word: 'Kripya', meaning: 'Please' },
    ],
  },
  {
    id: 2,
    name: 'Sanskrit',
    intro: 'Sanskrit is an ancient classical language of India, foundational to many Indian languages.',
    history: 'Sanskrit is the language of ancient scriptures and classical literature, preserving India\'s spiritual heritage.',
    flashcards: [
      { word: 'Dharma', meaning: 'Righteousness' },
      { word: 'Karma', meaning: 'Action' },
      { word: 'Moksha', meaning: 'Liberation' },
    ],
  },
  {
    id: 3,
    name: 'Tamil',
    intro: 'Tamil is one of the oldest living languages, spoken predominantly in South India.',
    history: 'Tamil has a rich classical literature and cultural history spanning over two millennia.',
    flashcards: [
      { word: 'Vanakkam', meaning: 'Hello' },
      { word: 'Nandri', meaning: 'Thank you' },
      { word: 'Thangam', meaning: 'Gold' },
    ],
  },
  {
    id: 4,
    name: 'Bengali',
    intro: 'Bengali is spoken in the eastern region of India and Bangladesh.',
    history: 'Bengali literature and poetry have a rich tradition, with Nobel laureate Rabindranath Tagore.',
    flashcards: [
      { word: 'Nomoskar', meaning: 'Hello' },
      { word: 'Dhonnobad', meaning: 'Thank you' },
      { word: 'Shanti', meaning: 'Peace' },
    ],
  },
];

const LanguageLearning = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const handleNextFlashcard = () => {
    if (currentFlashcardIndex < selectedLanguage.flashcards.length - 1) {
      setCurrentFlashcardIndex(currentFlashcardIndex + 1);
    } else {
      setCurrentFlashcardIndex(0);
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a23', minHeight: '100vh', padding: '2rem', color: '#00fff7', fontFamily: "'Orbitron', monospace", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', textShadow: '0 0 15px #00fff7' }}>Discover India's Cultural Heritage Through Language!</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto', textShadow: '0 0 8px #00fff7' }}>
          Language is a vital thread in the fabric of culture, preserving traditions, stories, and identity across generations.
        </p>
      </header>

      {!selectedLanguage ? (
        <section style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px' }}>
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => { setSelectedLanguage(lang); setCurrentFlashcardIndex(0); }}
              style={{
                backgroundColor: '#121233',
                border: '2px solid #00fff7',
                borderRadius: '12px',
                padding: '1rem 2rem',
                color: '#00fff7',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1.2rem',
                boxShadow: '0 0 15px #00fff7',
                transition: 'transform 0.3s ease',
                minWidth: '150px',
                textAlign: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {lang.name}
            </button>
          ))}
        </section>
      ) : (
        <section style={{ maxWidth: '700px', marginTop: '1rem', textAlign: 'center' }}>
          <button
            onClick={() => setSelectedLanguage(null)}
            style={{
              backgroundColor: '#ff005f',
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 0 15px #ff005f',
              marginBottom: '1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#cc004a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff005f'}
          >
            Back to Language Selection
          </button>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textShadow: '0 0 10px #00fff7' }}>{selectedLanguage.name}</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem', textShadow: '0 0 8px #00fff7' }}>{selectedLanguage.intro}</p>
          <p style={{ fontSize: '1rem', marginBottom: '2rem', fontStyle: 'italic', textShadow: '0 0 5px #00fff7' }}>{selectedLanguage.history}</p>

          <div style={{ backgroundColor: '#121233', padding: '1rem', borderRadius: '12px', boxShadow: '0 0 20px #00fff7', overflowWrap: 'break-word', borderBottom: '4px solid', borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #00fff7, #ff00ff)' }}>
            <h3 style={{ marginBottom: '1rem', textShadow: '0 0 8px #00fff7' }}>Flashcard</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', textShadow: '0 0 10px #00fff7' }}>
              {selectedLanguage.flashcards[currentFlashcardIndex].word}
            </div>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem', textShadow: '0 0 6px #00fff7' }}>
              Meaning: {selectedLanguage.flashcards[currentFlashcardIndex].meaning}
            </div>
            <button
              onClick={handleNextFlashcard}
              style={{
                backgroundColor: '#00fff7',
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                color: '#000',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1rem',
                boxShadow: '0 0 15px #00fff7',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00cfcf'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00fff7'}
            >
              Next Flashcard
            </button>
          </div>
        </section>
      )}

      <footer style={{ marginTop: 'auto', padding: '1rem', textAlign: 'center', borderTop: '1px solid #00fff7', width: '100%', boxShadow: '0 0 10px #00fff7' }}>
        <p>Explore more lessons:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/quiz-game" style={{ color: '#00fff7', textDecoration: 'none', fontWeight: '700', textShadow: '0 0 5px #00fff7' }}>Quiz Game</a>
          <a href="/heritage-guide" style={{ color: '#00fff7', textDecoration: 'none', fontWeight: '700', textShadow: '0 0 5px #00fff7' }}>AI Heritage Guide</a>
          <a href="/cultural-map" style={{ color: '#00fff7', textDecoration: 'none', fontWeight: '700', textShadow: '0 0 5px #00fff7' }}>Cultural Map</a>
        </div>
        <p style={{ marginTop: '1rem' }}>Keep learning and preserving India's rich cultural heritage!</p>
      </footer>
    </div>
  );
};

export default LanguageLearning;
